import { ATTRIBUTION_CHANNEL_KEY, Channel } from '@/constants/analytics'
import {
  CONTACT_EVENTS,
  InsightsDomain,
  InsightsSource,
  MAX_UTM_VALUE_LENGTH,
  TOP_ROWS,
  UmamiMetricType,
  UmamiUtmType,
} from '@/constants/insights'
import type { UmamiEventValue, UmamiMetric, UmamiReader, UmamiStats, UmamiUtmMetric } from '@/services/umami'
import type { ContactsByChannelRow, EventRow, MetricComparison, UtmRow, WebInsights } from '@/types/insights'

import type { ReportingPeriods } from './periods'

const PERCENT = 100
const ONE_DECIMAL = 10

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

function toUtmRows(rows: UmamiUtmMetric[]): UtmRow[] {
  return rows.slice(0, TOP_ROWS).map((row) => ({ value: row.utm.slice(0, MAX_UTM_VALUE_LENGTH), views: row.views }))
}

function pairEvents(current: UmamiMetric[], previous: UmamiMetric[]): EventRow[] {
  const previousByName = new Map(previous.map((row) => [row.x, row.y]))
  return current.map((row) => ({ name: row.x, current: row.y, previous: previousByName.get(row.x) ?? 0 }))
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
 */
export async function buildWebInsights(reader: UmamiReader, periods: ReportingPeriods, now: Date): Promise<WebInsights> {
  const { current, previous } = periods
  const [
    currentStats,
    previousStats,
    paths,
    referrers,
    channels,
    currentEvents,
    previousEvents,
    utmCampaign,
    utmSource,
    utmMedium,
    contactValues,
  ] = await Promise.all([
    reader.getStats(current),
    reader.getStats(previous),
    reader.getMetrics(current, UmamiMetricType.PATH, TOP_ROWS),
    reader.getMetrics(current, UmamiMetricType.REFERRER, TOP_ROWS),
    reader.getMetrics(current, UmamiMetricType.CHANNEL, TOP_ROWS),
    reader.getMetrics(current, UmamiMetricType.EVENT, TOP_ROWS),
    reader.getMetrics(previous, UmamiMetricType.EVENT, TOP_ROWS),
    reader.getUtmMetrics(current, UmamiUtmType.CAMPAIGN),
    reader.getUtmMetrics(current, UmamiUtmType.SOURCE),
    reader.getUtmMetrics(current, UmamiUtmType.MEDIUM),
    Promise.all(CONTACT_EVENTS.map((event) => reader.getEventPropertyValues(current, event, ATTRIBUTION_CHANNEL_KEY))),
  ])

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
    topPages: paths.slice(0, TOP_ROWS).map((row) => ({ path: row.x, visitors: row.y })),
    topReferrers: referrers.slice(0, TOP_ROWS).map((row) => ({ host: row.x, visitors: row.y })),
    umamiChannels: channels.map((row) => ({ channel: row.x, visitors: row.y })),
    campaigns: {
      [UmamiUtmType.CAMPAIGN]: toUtmRows(utmCampaign),
      [UmamiUtmType.SOURCE]: toUtmRows(utmSource),
      [UmamiUtmType.MEDIUM]: toUtmRows(utmMedium),
    },
    events: pairEvents(currentEvents, previousEvents),
    contactsByChannel: sumContactsByChannel(contactValues),
    generatedAt: now.toISOString(),
    source: InsightsSource.UMAMI,
  }
}
