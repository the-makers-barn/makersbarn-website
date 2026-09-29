import { AnalyticsEvent } from './analytics'

export enum InsightsPeriod {
  WEEK = 'week',
  MONTH = 'month',
}

export enum InsightsDomain {
  WEB = 'web',
}

export enum InsightsSource {
  UMAMI = 'umami',
}

export enum InsightsErrorCode {
  NOT_CONFIGURED = 'not_configured',
  UNAUTHORIZED = 'unauthorized',
  RATE_LIMITED = 'rate_limited',
  BAD_PERIOD = 'bad_period',
  UPSTREAM = 'upstream',
  TIMEOUT = 'timeout',
}

/** Metric types of Umami's GET /api/websites/{id}/metrics endpoint that the builder uses. */
export enum UmamiMetricType {
  PATH = 'path',
  REFERRER = 'referrer',
  CHANNEL = 'channel',
  EVENT = 'event',
}

/** Types of Umami's GET /api/websites/{id}/utm/metrics endpoint. */
export enum UmamiUtmType {
  CAMPAIGN = 'utm_campaign',
  SOURCE = 'utm_source',
  MEDIUM = 'utm_medium',
}

export const INSIGHTS_TIMEZONE = 'Europe/Amsterdam'
export const INSIGHTS_RATE_LIMIT = { windowMs: 15 * 60 * 1000, maxRequests: 30 } as const
/** One legitimate caller, so one bucket. */
export const INSIGHTS_RATE_LIMIT_KEY = 'insights'
export const INSIGHTS_TIMEOUT_MS = 30_000
export const UMAMI_REQUEST_TIMEOUT_MS = 10_000
export const TOP_ROWS = 10
export const MAX_UTM_VALUE_LENGTH = 100
/** Cap for other visitor-controlled strings (paths, referrer hosts, Umami channel names). */
export const MAX_TEXT_LENGTH = 200
/** Requested row count for the event metric: larger than AnalyticsEvent's member count so no known event is cut before the unknown-name filter runs. */
export const EVENT_ROWS = 50

/** Events that mean a visitor tried to reach the barn. Summed per channel in the digest. */
export const CONTACT_EVENTS: readonly AnalyticsEvent[] = [
  AnalyticsEvent.CONTACT_FORM_SUBMITTED,
  AnalyticsEvent.BOOKING_FORM_SUBMITTED,
  AnalyticsEvent.QUESTION_FORM_SUBMITTED,
  AnalyticsEvent.WHATSAPP_BOOKING_CLICKED,
  AnalyticsEvent.TICKETSHOP_CTA_CLICKED,
]
