import { describe, expect, it } from 'vitest'

import { AnalyticsEvent, Channel } from '@/constants/analytics'
import {
  InsightsDomain,
  InsightsPeriod,
  InsightsSource,
  MAX_TEXT_LENGTH,
  MAX_UTM_VALUE_LENGTH,
  TOP_ROWS,
  UmamiMetricType,
  UmamiUtmType,
} from '@/constants/insights'
import type { UmamiEventValue, UmamiMetric, UmamiReader, UmamiStats, UmamiUtmMetric } from '@/services/umami'

import { buildWebInsights } from './buildWebInsights'
import type { DateRange, ReportingPeriods } from './periods'

const CURRENT: DateRange = { startAt: 2_000, endAt: 3_000, from: '2026-09-21', to: '2026-09-27' }
const PREVIOUS: DateRange = { startAt: 1_000, endAt: 2_000, from: '2026-09-14', to: '2026-09-20' }
const PERIODS: ReportingPeriods = { kind: InsightsPeriod.WEEK, timezone: 'Europe/Amsterdam', current: CURRENT, previous: PREVIOUS }
const NOW = new Date('2026-09-28T06:00:12Z')
const EMPTY_STATS: UmamiStats = { pageviews: 0, visitors: 0, visits: 0, bounces: 0, totaltime: 0 }

interface FakeData {
  stats: Partial<Record<number, UmamiStats>>
  metrics: Partial<Record<UmamiMetricType, Record<number, UmamiMetric[]>>>
  utm: Partial<Record<UmamiUtmType, UmamiUtmMetric[]>>
  eventValues: Record<string, UmamiEventValue[]>
}

function fakeReader(data: FakeData): UmamiReader {
  return {
    getStats: (range) => Promise.resolve(data.stats[range.startAt] ?? EMPTY_STATS),
    getMetrics: (range, type, limit) => Promise.resolve((data.metrics[type]?.[range.startAt] ?? []).slice(0, limit)),
    getUtmMetrics: (_range, type) => Promise.resolve(data.utm[type] ?? []),
    getEventPropertyValues: (_range, eventName) => Promise.resolve(data.eventValues[eventName] ?? []),
  }
}

function statsFor(data: FakeData, startAt: number): UmamiStats {
  const stats = data.stats[startAt]
  if (!stats) {
    throw new Error(`no fixture stats for startAt=${startAt}`)
  }
  return stats
}

const BASE: FakeData = {
  stats: {
    [CURRENT.startAt]: { pageviews: 2310, visitors: 812, visits: 903, bounces: 372, totaltime: 86_688 },
    [PREVIOUS.startAt]: { pageviews: 2105, visitors: 740, visits: 811, bounces: 357, totaltime: 71_368 },
  },
  metrics: {
    [UmamiMetricType.PATH]: { [CURRENT.startAt]: Array.from({ length: 15 }, (_, i) => ({ x: `/p${i}`, y: 100 - i })) },
    [UmamiMetricType.REFERRER]: { [CURRENT.startAt]: [{ x: 'instagram.com', y: 120 }] },
    [UmamiMetricType.CHANNEL]: { [CURRENT.startAt]: [{ x: 'organicSocial', y: 130 }, { x: 'llm', y: 9 }] },
    [UmamiMetricType.EVENT]: {
      [CURRENT.startAt]: [{ x: AnalyticsEvent.CONTACT_FORM_SUBMITTED, y: 7 }, { x: AnalyticsEvent.CALCULATOR_LOADED, y: 40 }],
      [PREVIOUS.startAt]: [
        { x: AnalyticsEvent.CONTACT_FORM_SUBMITTED, y: 4 },
        { x: AnalyticsEvent.BOOKING_FORM_SUBMITTED, y: 2 },
      ],
    },
  },
  utm: {
    [UmamiUtmType.CAMPAIGN]: [{ utm: 'autumn-retreat', views: 44 }, { utm: 'x'.repeat(300), views: 1 }],
    [UmamiUtmType.SOURCE]: [{ utm: 'instagram', views: 60 }],
    [UmamiUtmType.MEDIUM]: [],
  },
  eventValues: {
    [AnalyticsEvent.CONTACT_FORM_SUBMITTED]: [{ value: Channel.INSTAGRAM_PAID, total: 3 }, { value: Channel.DIRECT, total: 4 }],
    [AnalyticsEvent.WHATSAPP_BOOKING_CLICKED]: [{ value: Channel.INSTAGRAM_PAID, total: 2 }, { value: '<script>', total: 1 }],
  },
}

describe('buildWebInsights', () => {
  it('computes totals with one-decimal percentage changes', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.totals.visitors).toEqual({ current: 812, previous: 740, changePct: 9.7 })
    expect(insights.totals.visits).toEqual({ current: 903, previous: 811, changePct: 11.3 })
    expect(insights.totals.avgVisitSeconds).toEqual({ current: 96, previous: 88, changePct: 9.1 })
    expect(insights.totals.bounceRatePct).toEqual({ current: 41.2, previous: 44, changePct: -6.4 })
  })

  it('returns null change when the previous value is zero and zero rates when there are no visits', async () => {
    const empty: FakeData = { ...BASE, stats: { [CURRENT.startAt]: statsFor(BASE, CURRENT.startAt), [PREVIOUS.startAt]: EMPTY_STATS } }
    const insights = await buildWebInsights(fakeReader(empty), PERIODS, NOW)
    expect(insights.totals.visitors.changePct).toBeNull()
    expect(insights.totals.avgVisitSeconds.previous).toBe(0)
    expect(insights.totals.bounceRatePct.previous).toBe(0)
  })

  it('caps top rows, passes Umami channels through, and truncates UTM values', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.topPages).toHaveLength(TOP_ROWS)
    expect(insights.topPages[0]).toEqual({ path: '/p0', visitors: 100 })
    expect(insights.topReferrers).toEqual([{ host: 'instagram.com', visitors: 120 }])
    expect(insights.umamiChannels).toEqual([{ channel: 'organicSocial', visitors: 130 }, { channel: 'llm', visitors: 9 }])
    expect(insights.campaigns[UmamiUtmType.CAMPAIGN][1]?.value).toHaveLength(MAX_UTM_VALUE_LENGTH)
    expect(insights.campaigns[UmamiUtmType.MEDIUM]).toEqual([])
  })

  it('pairs event counts for both periods', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.events).toEqual([
      { name: AnalyticsEvent.CONTACT_FORM_SUBMITTED, current: 7, previous: 4 },
      { name: AnalyticsEvent.CALCULATOR_LOADED, current: 40, previous: 0 },
      { name: AnalyticsEvent.BOOKING_FORM_SUBMITTED, current: 0, previous: 2 },
    ])
  })

  it('sums contacts per channel over all contact events and folds unknown values', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.contactsByChannel).toEqual([
      { channel: Channel.INSTAGRAM_PAID, contacts: 5 },
      { channel: Channel.DIRECT, contacts: 4 },
      { channel: Channel.UNKNOWN, contacts: 1 },
    ])
  })

  it('fills the envelope', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.domain).toBe(InsightsDomain.WEB)
    expect(insights.source).toBe(InsightsSource.UMAMI)
    expect(insights.period).toEqual({ kind: InsightsPeriod.WEEK, from: '2026-09-21', to: '2026-09-27', timezone: 'Europe/Amsterdam' })
    expect(insights.previousPeriod).toEqual({ from: '2026-09-14', to: '2026-09-20' })
    expect(insights.generatedAt).toBe('2026-09-28T06:00:12.000Z')
  })

  it('drops event metric rows whose name is not an AnalyticsEvent member', async () => {
    const withUnknownEvent: FakeData = {
      ...BASE,
      metrics: {
        ...BASE.metrics,
        [UmamiMetricType.EVENT]: {
          [CURRENT.startAt]: [
            ...(BASE.metrics[UmamiMetricType.EVENT]?.[CURRENT.startAt] ?? []),
            { x: 'some_unknown_event', y: 12 },
          ],
          [PREVIOUS.startAt]: BASE.metrics[UmamiMetricType.EVENT]?.[PREVIOUS.startAt] ?? [],
        },
      },
    }
    const insights = await buildWebInsights(fakeReader(withUnknownEvent), PERIODS, NOW)
    expect(insights.events.some((row) => row.name === 'some_unknown_event')).toBe(false)
    expect(insights.events).toEqual([
      { name: AnalyticsEvent.CONTACT_FORM_SUBMITTED, current: 7, previous: 4 },
      { name: AnalyticsEvent.CALCULATOR_LOADED, current: 40, previous: 0 },
      { name: AnalyticsEvent.BOOKING_FORM_SUBMITTED, current: 0, previous: 2 },
    ])
  })

  it('sanitizes and caps visitor-controlled strings from Umami', async () => {
    const dirtyPath = `/<script>alert(1)</script>\x00\r\n${'a'.repeat(MAX_TEXT_LENGTH)}`
    const dirty: FakeData = {
      ...BASE,
      metrics: {
        ...BASE.metrics,
        [UmamiMetricType.PATH]: { [CURRENT.startAt]: [{ x: dirtyPath, y: 5 }] },
      },
    }
    const insights = await buildWebInsights(fakeReader(dirty), PERIODS, NOW)
    const [topPage] = insights.topPages
    expect(topPage.path).not.toContain('<')
    expect(topPage.path).not.toContain('>')
    expect(topPage.path).not.toContain('\x00')
    expect(topPage.path.length).toBeLessThanOrEqual(MAX_TEXT_LENGTH)
  })
})
