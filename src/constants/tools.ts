import { Route } from '@/types/navigation'

export enum ToolVariant {
  GENERIC = 'generic',
  YOGA = 'yoga',
  WELLNESS = 'wellness',
  MEDITATION = 'meditation',
  COACHING = 'coaching',
}

export const TOOL_VARIANT_ROUTES: Record<ToolVariant, Route> = {
  [ToolVariant.GENERIC]: Route.RETREAT_PROFITABILITY_CALCULATOR,
  [ToolVariant.YOGA]: Route.YOGA_RETREAT_PRICING_CALCULATOR,
  [ToolVariant.WELLNESS]: Route.WELLNESS_RETREAT_PRICING_CALCULATOR,
  [ToolVariant.MEDITATION]: Route.MEDITATION_RETREAT_PRICING_CALCULATOR,
  [ToolVariant.COACHING]: Route.COACHING_RETREAT_PRICING_CALCULATOR,
}

export const CALCULATOR_INPUT_RANGES = {
  GUESTS_MIN: 4,
  GUESTS_MAX: 30,
  TEAM_COUNT_MIN: 0,
  TEAM_COUNT_MAX: 10,
  NIGHTS_MIN: 2,
  NIGHTS_MAX: 10,
  PRICE_PER_GUEST_MIN: 500,
  PRICE_PER_GUEST_MAX: 5000,
  VENUE_PER_NIGHT_MIN: 0,
  VENUE_PER_NIGHT_MAX: 100_000,
  FOOD_PER_GUEST_PER_DAY_MIN: 0,
  FOOD_PER_GUEST_PER_DAY_MAX: 500,
  FACILITATOR_FEE_MIN: 0,
  FACILITATOR_FEE_MAX: 1_000_000,
  MARKETING_AND_OTHER_MIN: 0,
  MARKETING_AND_OTHER_MAX: 1_000_000,
  TRAVEL_MIN: 0,
  TRAVEL_MAX: 1_000_000,
  INSURANCE_MIN: 0,
  INSURANCE_MAX: 100_000,
  PAYMENT_FEE_PERCENT_MIN: 0,
  PAYMENT_FEE_PERCENT_MAX: 20,
  PLANNING_DAYS_MIN: 0,
  PLANNING_DAYS_MAX: 365,
  VAT_PERCENT_MIN: 0,
  VAT_PERCENT_MAX: 30,
} as const

export const CALCULATOR_INPUT_DEFAULTS = {
  PAYMENT_FEE_PERCENT: 3,
  TEAM_COUNT: 2,
  VAT_PERCENT: 21,
  PRICES_INCLUDE_VAT: true,
} as const

export const CALCULATOR_URL_PARAMS = {
  GUESTS: 'g',
  TEAM_COUNT: 'tc',
  NIGHTS: 'n',
  PRICE_PER_GUEST: 'p',
  VENUE: 'v',
  FOOD_PER_DAY: 'f',
  FACILITATOR_FEE: 'ff',
  MARKETING_OTHER: 'm',
  TRAVEL: 't',
  INSURANCE: 'i',
  PAYMENT_FEE_PERCENT: 'pf',
  PLANNING_DAYS: 'pd',
  HIRES_FACILITATORS: 'h',
  PRICES_INCLUDE_VAT: 'btw',
  VAT_PERCENT: 'vp',
} as const

export const MAKERSBARN_CTA_QUERY_PARAM = 'src' as const
export const MAKERSBARN_CTA_QUERY_VALUE_PREFIX = 'tool-' as const

export const CALCULATOR_RATE_LIMIT = {
  WINDOW_MS: 60_000,
  MAX_REQUESTS: 5,
} as const

export const SILO_TO_TOOL_ROUTE: Partial<Record<Route, Route>> = {
  [Route.YOGA_TEACHERS]: Route.YOGA_RETREAT_PRICING_CALCULATOR,
  [Route.WELLNESS_DETOX_RETREATS]: Route.WELLNESS_RETREAT_PRICING_CALCULATOR,
  [Route.MEDITATION_RETREATS]: Route.MEDITATION_RETREAT_PRICING_CALCULATOR,
  [Route.COACHING_INTENSIVES]: Route.COACHING_RETREAT_PRICING_CALCULATOR,
}

export enum TimelinePreset {
  THREE_MONTHS = 3,
  SIX_MONTHS = 6,
  NINE_MONTHS = 9,
  TWELVE_MONTHS = 12,
}

export enum CalendarPhaseId {
  FOUNDATION = 'foundation',
  ANCHOR = 'anchor',
  LAUNCH = 'launch',
  LOCK_IN = 'lock-in',
  FINAL_WEEKS = 'final-weeks',
  POST_RETREAT = 'post-retreat',
}

export enum MilestoneStatus {
  PENDING = 'pending',
  DONE = 'done',
  DISMISSED = 'dismissed',
}

export enum ToolKind {
  CALCULATOR = 'calculator',
  PLANNER = 'planner',
}

export const CALENDAR_STORAGE_KEY = 'mb_retreat_launch_calendar_v1'
export const CALENDAR_DEFAULT_PRESET = TimelinePreset.TWELVE_MONTHS

export const CALENDAR_PRESETS_ORDER: readonly TimelinePreset[] = [
  TimelinePreset.THREE_MONTHS,
  TimelinePreset.SIX_MONTHS,
  TimelinePreset.NINE_MONTHS,
  TimelinePreset.TWELVE_MONTHS,
] as const

export const CALENDAR_CUSTOM_ITEM_LIMITS = {
  MAX_PER_PHASE: 20,
  MAX_TEXT_LENGTH: 120,
  MAX_TOTAL: 120,
} as const

export const CALENDAR_RATE_LIMIT_IP = {
  WINDOW_MS: 60_000,
  MAX_REQUESTS: 5,
  KEY_PREFIX: 'calendar-ip:',
} as const

export const CALENDAR_RATE_LIMIT_EMAIL = {
  WINDOW_MS: 3_600_000,
  MAX_REQUESTS: 3,
  KEY_PREFIX: 'calendar-email:',
} as const

export const CALENDAR_RATE_LIMIT_GLOBAL = {
  WINDOW_MS: 3_600_000,
  MAX_REQUESTS: 200,
  KEY_PREFIX: 'calendar-global:',
} as const

export const CALENDAR_PAYLOAD_MAX_BYTES = 100_000

export const CALENDAR_ROUTE_BY_PRESET: Record<TimelinePreset, Route> = {
  [TimelinePreset.THREE_MONTHS]: Route.THREE_MONTH_RETREAT_LAUNCH_CALENDAR,
  [TimelinePreset.SIX_MONTHS]: Route.SIX_MONTH_RETREAT_LAUNCH_CALENDAR,
  [TimelinePreset.NINE_MONTHS]: Route.NINE_MONTH_RETREAT_LAUNCH_CALENDAR,
  [TimelinePreset.TWELVE_MONTHS]: Route.TWELVE_MONTH_RETREAT_LAUNCH_CALENDAR,
} as const

export const CALENDAR_LEAD_SOURCES = {
  PHASE_ANCHOR_CTA: 'tool-calendar-phase-anchor',
  PHASE_POST_RETREAT_CTA: 'tool-calendar-phase-post-retreat',
  EMAIL_FOOTER: 'email-calendar-plan',
} as const
