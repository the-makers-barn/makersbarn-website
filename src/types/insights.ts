import type { Channel } from '@/constants/analytics'
import type { InsightsDomain, InsightsPeriod, InsightsSource, UmamiUtmType } from '@/constants/insights'

export interface MetricComparison {
  current: number
  previous: number
  /** Percentage change, one decimal; null when the previous value is 0. */
  changePct: number | null
}

export interface PeriodSummary {
  kind: InsightsPeriod
  from: string
  to: string
  timezone: string
}

export interface PageRow {
  path: string
  visitors: number
}

export interface ReferrerRow {
  host: string
  visitors: number
}

export interface UmamiChannelRow {
  channel: string
  visitors: number
}

export interface UtmRow {
  value: string
  views: number
}

export interface EventRow {
  name: string
  current: number
  previous: number
}

export interface ContactsByChannelRow {
  channel: Channel
  contacts: number
}

export interface WebInsights {
  domain: InsightsDomain
  period: PeriodSummary
  previousPeriod: Pick<PeriodSummary, 'from' | 'to'>
  totals: {
    visitors: MetricComparison
    pageviews: MetricComparison
    visits: MetricComparison
    avgVisitSeconds: MetricComparison
    bounceRatePct: MetricComparison
  }
  topPages: PageRow[]
  topReferrers: ReferrerRow[]
  umamiChannels: UmamiChannelRow[]
  campaigns: Record<UmamiUtmType, UtmRow[]>
  events: EventRow[]
  contactsByChannel: ContactsByChannelRow[]
  generatedAt: string
  source: InsightsSource
}
