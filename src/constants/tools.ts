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
  NIGHTS_MIN: 2,
  NIGHTS_MAX: 10,
  PRICE_PER_GUEST_MIN: 500,
  PRICE_PER_GUEST_MAX: 5000,
  PAYMENT_FEE_PERCENT_DEFAULT: 3,
} as const

export const CALCULATOR_URL_PARAMS = {
  GUESTS: 'g',
  NIGHTS: 'n',
  PRICE_PER_GUEST: 'p',
  VENUE: 'v',
  FOOD_PER_DAY: 'f',
  FACILITATOR_FEE: 'ff',
  MARKETING_OTHER: 'm',
  CO_FACILITATORS: 'cf',
  TRAVEL: 't',
  INSURANCE: 'i',
  PAYMENT_FEE_PERCENT: 'pf',
  PLANNING_DAYS: 'pd',
} as const

export const CALCULATOR_ANALYTICS_EVENTS = {
  LOADED: 'calculator_loaded',
  SHARED: 'calculator_shared',
  EMAIL_CAPTURED: 'email_captured',
  MAKERSBARN_CTA_CLICKED: 'makersbarn_cta_clicked',
} as const

export const MAKERSBARN_CTA_QUERY_PARAM = 'src'
export const MAKERSBARN_CTA_QUERY_VALUE_PREFIX = 'tool-'

export const CALCULATOR_RATE_LIMIT = {
  WINDOW_MS: 60_000,
  MAX_REQUESTS: 5,
} as const
