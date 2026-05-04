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

export const SILO_TO_AUDIT_ROUTE: Partial<Record<Route, Route>> = {
  [Route.YOGA_TEACHERS]: Route.YOGA_RETREAT_MISTAKES_AUDIT,
  [Route.WELLNESS_DETOX_RETREATS]: Route.WELLNESS_RETREAT_MISTAKES_AUDIT,
  [Route.MEDITATION_RETREATS]: Route.MEDITATION_RETREAT_MISTAKES_AUDIT,
  [Route.COACHING_INTENSIVES]: Route.COACHING_RETREAT_MISTAKES_AUDIT,
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
  AUDIT = 'audit',
  AGENDA = 'agenda',
}

export enum AuditVariant {
  GENERIC = 'generic',
  YOGA = 'yoga',
  WELLNESS = 'wellness',
  MEDITATION = 'meditation',
  COACHING = 'coaching',
  FIRST_TIME = 'first-time',
}

export const AUDIT_VARIANT_ROUTES: Record<AuditVariant, Route> = {
  [AuditVariant.GENERIC]: Route.RETREAT_MISTAKES_AUDIT,
  [AuditVariant.YOGA]: Route.YOGA_RETREAT_MISTAKES_AUDIT,
  [AuditVariant.WELLNESS]: Route.WELLNESS_RETREAT_MISTAKES_AUDIT,
  [AuditVariant.MEDITATION]: Route.MEDITATION_RETREAT_MISTAKES_AUDIT,
  [AuditVariant.COACHING]: Route.COACHING_RETREAT_MISTAKES_AUDIT,
  [AuditVariant.FIRST_TIME]: Route.FIRST_TIME_RETREAT_HOST_AUDIT,
}

export const AUDIT_VARIANTS_DISPLAY_ORDER: readonly AuditVariant[] = [
  AuditVariant.GENERIC,
  AuditVariant.FIRST_TIME,
  AuditVariant.YOGA,
  AuditVariant.WELLNESS,
  AuditVariant.MEDITATION,
  AuditVariant.COACHING,
] as const

export const AUDIT_STORAGE_KEY = 'mb_retreat_mistakes_audit_v1'

/**
 * Each calculator variant has a matching audit variant — used to cross-link
 * "sanity-check your assumptions" from the calculator to the audit and back.
 */
export const TOOL_VARIANT_TO_AUDIT_VARIANT: Record<ToolVariant, AuditVariant> = {
  [ToolVariant.GENERIC]: AuditVariant.GENERIC,
  [ToolVariant.YOGA]: AuditVariant.YOGA,
  [ToolVariant.WELLNESS]: AuditVariant.WELLNESS,
  [ToolVariant.MEDITATION]: AuditVariant.MEDITATION,
  [ToolVariant.COACHING]: AuditVariant.COACHING,
}

export const AUDIT_VARIANT_TO_TOOL_VARIANT: Record<AuditVariant, ToolVariant> = {
  [AuditVariant.GENERIC]: ToolVariant.GENERIC,
  [AuditVariant.FIRST_TIME]: ToolVariant.GENERIC,
  [AuditVariant.YOGA]: ToolVariant.YOGA,
  [AuditVariant.WELLNESS]: ToolVariant.WELLNESS,
  [AuditVariant.MEDITATION]: ToolVariant.MEDITATION,
  [AuditVariant.COACHING]: ToolVariant.COACHING,
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

export enum AgendaNiche {
  GENERIC = 'generic',
  YOGA = 'yoga',
  WELLNESS = 'wellness',
  MEDITATION = 'meditation',
  COACHING = 'coaching',
}

export enum AgendaLength {
  TWO_DAY = 2,
  THREE_DAY = 3,
  FIVE_DAY = 5,
  SEVEN_DAY = 7,
}

export enum AgendaBlockType {
  RITUAL = 'ritual',
  PRACTICE = 'practice',
  WORKSHOP = 'workshop',
  MEAL = 'meal',
  FREE = 'free',
  REST = 'rest',
  TRAVEL = 'travel',
}

export const AGENDA_NICHE_ROUTES: Record<AgendaNiche, Route> = {
  [AgendaNiche.GENERIC]: Route.RETREAT_AGENDA_BUILDER,
  [AgendaNiche.YOGA]: Route.YOGA_RETREAT_AGENDA_BUILDER,
  [AgendaNiche.WELLNESS]: Route.WELLNESS_RETREAT_AGENDA_BUILDER,
  [AgendaNiche.MEDITATION]: Route.MEDITATION_RETREAT_AGENDA_BUILDER,
  [AgendaNiche.COACHING]: Route.COACHING_RETREAT_AGENDA_BUILDER,
} as const

export const AGENDA_NICHE_TO_CALCULATOR: Record<AgendaNiche, Route> = {
  [AgendaNiche.GENERIC]: Route.RETREAT_PROFITABILITY_CALCULATOR,
  [AgendaNiche.YOGA]: Route.YOGA_RETREAT_PRICING_CALCULATOR,
  [AgendaNiche.WELLNESS]: Route.WELLNESS_RETREAT_PRICING_CALCULATOR,
  [AgendaNiche.MEDITATION]: Route.MEDITATION_RETREAT_PRICING_CALCULATOR,
  [AgendaNiche.COACHING]: Route.COACHING_RETREAT_PRICING_CALCULATOR,
} as const

/**
 * Audit ↔ Agenda crosswalk. Audit catches mistakes before they happen
 * (the "what could go wrong"); Agenda turns the right answer into a
 * day-by-day plan (the "now build it"). Niche-matched in both directions.
 * FIRST_TIME audit falls through to the generic agenda — first-time
 * hosts benefit more from a starting template than a niche-specific one.
 */
export const AUDIT_VARIANT_TO_AGENDA_NICHE: Record<AuditVariant, AgendaNiche> = {
  [AuditVariant.GENERIC]: AgendaNiche.GENERIC,
  [AuditVariant.FIRST_TIME]: AgendaNiche.GENERIC,
  [AuditVariant.YOGA]: AgendaNiche.YOGA,
  [AuditVariant.WELLNESS]: AgendaNiche.WELLNESS,
  [AuditVariant.MEDITATION]: AgendaNiche.MEDITATION,
  [AuditVariant.COACHING]: AgendaNiche.COACHING,
}

export const AGENDA_NICHE_TO_AUDIT_VARIANT: Record<AgendaNiche, AuditVariant> = {
  [AgendaNiche.GENERIC]: AuditVariant.GENERIC,
  [AgendaNiche.YOGA]: AuditVariant.YOGA,
  [AgendaNiche.WELLNESS]: AuditVariant.WELLNESS,
  [AgendaNiche.MEDITATION]: AuditVariant.MEDITATION,
  [AgendaNiche.COACHING]: AuditVariant.COACHING,
}

export const AGENDA_LENGTHS_ORDER: readonly AgendaLength[] = [
  AgendaLength.TWO_DAY,
  AgendaLength.THREE_DAY,
  AgendaLength.FIVE_DAY,
  AgendaLength.SEVEN_DAY,
] as const

export const AGENDA_NICHE_ORDER: readonly AgendaNiche[] = [
  AgendaNiche.GENERIC,
  AgendaNiche.YOGA,
  AgendaNiche.WELLNESS,
  AgendaNiche.MEDITATION,
  AgendaNiche.COACHING,
] as const

export const AGENDA_DEFAULT_LENGTH = AgendaLength.THREE_DAY
export const AGENDA_STORAGE_KEY = 'mb_retreat_agenda_v1'

export const AGENDA_CUSTOM_BLOCK_LIMITS = {
  MAX_PER_DAY: 30,
  MAX_TOTAL: 200,
  MAX_TITLE_LENGTH: 80,
  MAX_NOTES_LENGTH: 240,
  MIN_DURATION_MIN: 5,
  MAX_DURATION_MIN: 12 * 60,
  MIN_START_MIN: 0,
  MAX_START_MIN: 24 * 60 - 1,
} as const

export const AGENDA_RATE_LIMIT_IP = {
  WINDOW_MS: 60_000,
  MAX_REQUESTS: 5,
  KEY_PREFIX: 'agenda-ip:',
} as const

export const AGENDA_RATE_LIMIT_EMAIL = {
  WINDOW_MS: 3_600_000,
  MAX_REQUESTS: 3,
  KEY_PREFIX: 'agenda-email:',
} as const

export const AGENDA_RATE_LIMIT_GLOBAL = {
  WINDOW_MS: 3_600_000,
  MAX_REQUESTS: 200,
  KEY_PREFIX: 'agenda-global:',
} as const

export const AGENDA_PAYLOAD_MAX_BYTES = 200_000

export const AGENDA_LEAD_SOURCES = {
  EMAIL_FOOTER: 'email-agenda-plan',
  ARRIVAL_DAY_CTA: 'tool-agenda-arrival-day',
} as const

/**
 * Opinionated retreat-design rules. Used by the validation lib to
 * surface soft warnings. Sourced from Yoga Alliance, Insight Timer,
 * Plum Village, Offsite.com — see CLAUDE proposal for citations.
 *
 * `maxStructuredMinPerDay` varies per niche because the meaning of
 * "structured" is niche-dependent: a meditation retreat genuinely runs
 * 6+ hours of practice (and that is the design), whereas a wellness
 * retreat at 6 hours is over-programmed.
 */
export const AGENDA_RULES = {
  MIN_FREE_MIN_PER_DAY: 60,
  MAX_BLOCK_MIN: 90,
  EARLY_START_THRESHOLD_MIN: 7 * 60,
  LATE_END_THRESHOLD_MIN: 22 * 60,
} as const

export const AGENDA_MAX_STRUCTURED_MIN_BY_NICHE: Record<AgendaNiche, number> = {
  [AgendaNiche.GENERIC]: 5 * 60,
  [AgendaNiche.YOGA]: 5 * 60 + 30,
  [AgendaNiche.WELLNESS]: 5 * 60,
  [AgendaNiche.MEDITATION]: 8 * 60,
  [AgendaNiche.COACHING]: 8 * 60,
}

export const AGENDA_NICHES_SKIP_EARLY_START: ReadonlySet<AgendaNiche> = new Set([
  AgendaNiche.MEDITATION,
])
