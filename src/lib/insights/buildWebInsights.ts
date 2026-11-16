import { AnalyticsEvent, ATTRIBUTION_CHANNEL_KEY, Channel } from '@/constants/analytics'
import {
  CONTACT_EVENTS,
  EVENT_ROWS,
  InsightsDomain,
  InsightsSource,
  MAX_TEXT_LENGTH,
  MAX_UTM_VALUE_LENGTH,
  PAGE_SPREAD_ROWS,
  PAGE_SPREAD_TOP_PAGES,
  SUSPECTED_BOT_COUNTRIES,
  TOP_COUNTRY_ROWS,
  TOP_ROWS,
  UmamiMetricType,
  UmamiUtmType,
} from '@/constants/insights'
import { sanitizePlainText } from '@/lib/security'
import type { UmamiEventValue, UmamiFilter, UmamiMetric, UmamiReader, UmamiStats, UmamiUtmMetric } from '@/services/umami'
import type {
  ContactsByChannelRow,
  CountryRow,
  DeviceRow,
  EventRow,
  MetricComparison,
  PageSpread,
  UtmRow,
  WebInsights,
} from '@/types/insights'

import type { ReportingPeriods } from './periods'

const PERCENT = 100
const ONE_DECIMAL = 10
const REAL_VISITORS: UmamiFilter = { excludeCountries: SUSPECTED_BOT_COUNTRIES }

function round1(value: number): number {
  return Math.round(value * ONE_DECIMAL) / ONE_DECIMAL
}

function compare(current: number, previous: number): MetricComparison {
  return {
    current,
    previous,
    changePct: previous === 0 ? null : round1(((current - previous) / previous) * PERCENT),
  }
}

function avgVisitSeconds(stats: UmamiStats): number {
  return stats.visits === 0 ? 0 : Math.round(stats.totaltime / stats.visits)
}

function bounceRatePct(stats: UmamiStats): number {
  return stats.visits === 0 ? 0 : round1((stats.bounces / stats.visits) * PERCENT)
}

/** Counts that belong to the suspected robot countries: everything minus the filtered view. Countries do not overlap, so the subtraction is exact. */
function robotStats(all: UmamiStats, real: UmamiStats): UmamiStats {
  return {
    pageviews: Math.max(0, all.pageviews - real.pageviews),
    visitors: Math.max(0, all.visitors - real.visitors),
    visits: Math.max(0, all.visits - real.visits),
    bounces: Math.max(0, all.bounces - real.bounces),
    totaltime: Math.max(0, all.totaltime - real.totaltime),
  }
}

function pageSpread(paths: UmamiMetric[]): PageSpread {
  const total = paths.reduce((sum, row) => sum + row.y, 0)
  const top = paths.slice(0, PAGE_SPREAD_TOP_PAGES).reduce((sum, row) => sum + row.y, 0)
  return { distinctPages: paths.length, topThreeSharePct: total === 0 ? 0 : round1((top / total) * PERCENT) }
}

function toCountryRows(rows: UmamiMetric[]): CountryRow[] {
  return rows
    .slice(0, TOP_COUNTRY_ROWS)
    .map((row) => ({ country: sanitizePlainText(row.x, MAX_TEXT_LENGTH), visitors: row.y }))
}

function toDeviceRows(rows: UmamiMetric[]): DeviceRow[] {
  return rows.map((row) => ({ device: sanitizePlainText(row.x, MAX_TEXT_LENGTH), visitors: row.y }))
}

function toUtmRows(rows: UmamiUtmMetric[]): UtmRow[] {
  return rows.slice(0, TOP_ROWS).map((row) => ({ value: sanitizePlainText(row.utm, MAX_UTM_VALUE_LENGTH), views: row.views }))
}

function isAnalyticsEvent(value: string): value is AnalyticsEvent {
  return (Object.values(AnalyticsEvent) as string[]).includes(value)
}

/** Drops event names Umami returned that are not in the AnalyticsEvent enum, so nothing outside the digest's known vocabulary reaches its consumers. */
function toKnownEventRows(rows: UmamiMetric[]): UmamiMetric[] {
  return rows.filter((row) => isAnalyticsEvent(row.x))
}

function pairEvents(current: UmamiMetric[], previous: UmamiMetric[]): EventRow[] {
  const previousByName = new Map(previous.map((row) => [row.x, row.y]))
  const currentNames = new Set(current.map((row) => row.x))
  const currentRows = current.map((row) => ({ name: row.x, current: row.y, previous: previousByName.get(row.x) ?? 0 }))
  const previousOnlyRows = previous
    .filter((row) => !currentNames.has(row.x))
    .map((row) => ({ name: row.x, current: 0, previous: row.y }))
  return [...currentRows, ...previousOnlyRows]
}

function isChannel(value: string): value is Channel {
  return (Object.values(Channel) as string[]).includes(value)
}

function sumContactsByChannel(valueLists: UmamiEventValue[][]): ContactsByChannelRow[] {
  const totals = new Map<Channel, number>()
  for (const list of valueLists) {
    for (const row of list) {
      const channel = isChannel(row.value) ? row.value : Channel.UNKNOWN
      totals.set(channel, (totals.get(channel) ?? 0) + row.total)
    }
  }
  return [...totals.entries()].map(([channel, contacts]) => ({ channel, contacts }))
}

/**
 * Turns Umami's raw answers for a period and its predecessor into the digest
 * contract. Pure: every number comes from the reader, `now` stamps the output.
 * Every number leaves out SUSPECTED_BOT_COUNTRIES except `likelyBots`, which
 * is the unfiltered total minus the filtered one.
 */
export async function buildWebInsights(reader: UmamiReader, periods: ReportingPeriods, now: Date): Promise<WebInsights> {
  const { current, previous } = periods
  const [
    allCurrentStats,
    allPreviousStats,
    currentStats,
    previousStats,
    paths,
    referrers,
    channels,
    countries,
    devices,
    currentEvents,
    previousEvents,
    utmCampaign,
    utmSource,
    utmMedium,
    contactValues,
  ] = await Promise.all([
    reader.getStats(current),
    reader.getStats(previous),
    reader.getStats(current, REAL_VISITORS),
    reader.getStats(previous, REAL_VISITORS),
    reader.getMetrics(current, UmamiMetricType.PATH, PAGE_SPREAD_ROWS, REAL_VISITORS),
    reader.getMetrics(current, UmamiMetricType.REFERRER, TOP_ROWS, REAL_VISITORS),
    reader.getMetrics(current, UmamiMetricType.CHANNEL, TOP_ROWS, REAL_VISITORS),
    reader.getMetrics(current, UmamiMetricType.COUNTRY, TOP_COUNTRY_ROWS, REAL_VISITORS),
    reader.getMetrics(current, UmamiMetricType.DEVICE, TOP_ROWS, REAL_VISITORS),
    reader.getMetrics(current, UmamiMetricType.EVENT, EVENT_ROWS, REAL_VISITORS),
    reader.getMetrics(previous, UmamiMetricType.EVENT, EVENT_ROWS, REAL_VISITORS),
    reader.getUtmMetrics(current, UmamiUtmType.CAMPAIGN, REAL_VISITORS),
    reader.getUtmMetrics(current, UmamiUtmType.SOURCE, REAL_VISITORS),
    reader.getUtmMetrics(current, UmamiUtmType.MEDIUM, REAL_VISITORS),
    Promise.all(
      CONTACT_EVENTS.map((event) =>
        reader.getEventPropertyValues(current, event, ATTRIBUTION_CHANNEL_KEY, REAL_VISITORS),
      ),
    ),
  ])
  const currentRobots = robotStats(allCurrentStats, currentStats)
  const previousRobots = robotStats(allPreviousStats, previousStats)

  return {
    domain: InsightsDomain.WEB,
    period: { kind: periods.kind, from: current.from, to: current.to, timezone: periods.timezone },
    previousPeriod: { from: previous.from, to: previous.to },
    totals: {
      visitors: compare(currentStats.visitors, previousStats.visitors),
      pageviews: compare(currentStats.pageviews, previousStats.pageviews),
      visits: compare(currentStats.visits, previousStats.visits),
      avgVisitSeconds: compare(avgVisitSeconds(currentStats), avgVisitSeconds(previousStats)),
      bounceRatePct: compare(bounceRatePct(currentStats), bounceRatePct(previousStats)),
    },
    likelyBots: {
      countries: [...SUSPECTED_BOT_COUNTRIES],
      visitors: compare(currentRobots.visitors, previousRobots.visitors),
      pageviews: compare(currentRobots.pageviews, previousRobots.pageviews),
    },
    topPages: paths.slice(0, TOP_ROWS).map((row) => ({ path: sanitizePlainText(row.x, MAX_TEXT_LENGTH), visitors: row.y })),
    topReferrers: referrers
      .slice(0, TOP_ROWS)
      .map((row) => ({ host: sanitizePlainText(row.x, MAX_TEXT_LENGTH), visitors: row.y })),
    pageSpread: pageSpread(paths),
    countries: toCountryRows(countries),
    devices: toDeviceRows(devices),
    umamiChannels: channels.map((row) => ({ channel: sanitizePlainText(row.x, MAX_TEXT_LENGTH), visitors: row.y })),
    campaigns: {
      [UmamiUtmType.CAMPAIGN]: toUtmRows(utmCampaign),
      [UmamiUtmType.SOURCE]: toUtmRows(utmSource),
      [UmamiUtmType.MEDIUM]: toUtmRows(utmMedium),
    },
    events: pairEvents(toKnownEventRows(currentEvents), toKnownEventRows(previousEvents)),
    contactsByChannel: sumContactsByChannel(contactValues),
    generatedAt: now.toISOString(),
    source: InsightsSource.UMAMI,
  }
}
