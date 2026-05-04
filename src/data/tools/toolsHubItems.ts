import {
  AGENDA_NICHE_ORDER,
  AGENDA_NICHE_ROUTES,
  AgendaNiche,
  CALENDAR_PRESETS_ORDER,
  CALENDAR_ROUTE_BY_PRESET,
  TOOL_VARIANT_ROUTES,
  type TimelinePreset,
  ToolKind,
  ToolVariant,
} from '@/constants/tools'
import { Language } from '@/types/common'
import type { LocalizedString, ToolsHubItem } from '@/types/tools'

import { CALCULATOR_VARIANTS } from './calculatorVariants'

const CALENDAR_EYEBROW_EN = 'Free planning tool'
const CALENDAR_TITLE_TEMPLATE_EN = 'The {months}-Month Retreat Launch Calendar'
const CALENDAR_INTRO_TEMPLATE_EN =
  'Plan your retreat over {months} months with check-offs, custom milestones, and email-the-list.'
const MONTHS_PLACEHOLDER = '{months}'

const AGENDA_EYEBROW_EN = 'Free planning tool'
const AGENDA_TITLE_BY_NICHE_EN: Record<AgendaNiche, string> = {
  [AgendaNiche.GENERIC]: 'The Retreat Agenda Builder',
  [AgendaNiche.YOGA]: 'The Yoga Retreat Agenda Builder',
  [AgendaNiche.WELLNESS]: 'The Wellness Retreat Agenda Builder',
  [AgendaNiche.MEDITATION]: 'The Meditation Retreat Agenda Builder',
  [AgendaNiche.COACHING]: 'The Coaching Retreat Agenda Builder',
}
const AGENDA_INTRO_BY_NICHE_EN: Record<AgendaNiche, string> = {
  [AgendaNiche.GENERIC]:
    'Design the day-by-day flow of your retreat. Opinionated defaults you can edit, hide, and add to.',
  [AgendaNiche.YOGA]:
    'A day-by-day yoga retreat schedule with vinyasa, yin, and integration time built in. Edit to fit your group.',
  [AgendaNiche.WELLNESS]:
    'A wellness retreat schedule with nervous-system practices, spa windows, and protected free time.',
  [AgendaNiche.MEDITATION]:
    'A silent retreat schedule modelled on Plum Village and vipassana — four sittings, walking, dharma talk.',
  [AgendaNiche.COACHING]:
    'A coaching retreat schedule with 90-minute hot-seats, integration walks, and a commitments circle.',
}

/**
 * Calendar copy ships EN-verbatim across locales for v1 — proper NL/DE
 * translations land in Phase 8.
 */
const allLocalesSameString = (value: string): LocalizedString => ({
  [Language.EN]: value,
  [Language.NL]: value,
  [Language.DE]: value,
})

const interpolate = (template: string, months: string): string =>
  template.replaceAll(MONTHS_PLACEHOLDER, months)

const CALENDAR_DISPLAY_ORDER: readonly TimelinePreset[] = [
  ...CALENDAR_PRESETS_ORDER,
].reverse()

const buildCalendarItem = (preset: TimelinePreset): ToolsHubItem => {
  const months = String(preset)
  return {
    kind: ToolKind.PLANNER,
    route: CALENDAR_ROUTE_BY_PRESET[preset],
    eyebrow: allLocalesSameString(CALENDAR_EYEBROW_EN),
    title: allLocalesSameString(interpolate(CALENDAR_TITLE_TEMPLATE_EN, months)),
    intro: allLocalesSameString(interpolate(CALENDAR_INTRO_TEMPLATE_EN, months)),
  }
}

const CALCULATOR_DISPLAY_ORDER: readonly ToolVariant[] = [
  ToolVariant.GENERIC,
  ToolVariant.YOGA,
  ToolVariant.WELLNESS,
  ToolVariant.MEDITATION,
  ToolVariant.COACHING,
] as const

const buildCalculatorItem = (variant: ToolVariant): ToolsHubItem => ({
  kind: ToolKind.CALCULATOR,
  route: TOOL_VARIANT_ROUTES[variant],
  eyebrow: CALCULATOR_VARIANTS[variant].copy.heroEyebrow,
  title: CALCULATOR_VARIANTS[variant].copy.heroTitle,
  intro: CALCULATOR_VARIANTS[variant].copy.heroIntro,
})

const buildAgendaItem = (niche: AgendaNiche): ToolsHubItem => ({
  kind: ToolKind.AGENDA,
  route: AGENDA_NICHE_ROUTES[niche],
  eyebrow: allLocalesSameString(AGENDA_EYEBROW_EN),
  title: allLocalesSameString(AGENDA_TITLE_BY_NICHE_EN[niche]),
  intro: allLocalesSameString(AGENDA_INTRO_BY_NICHE_EN[niche]),
})

export const TOOLS_HUB_ITEMS: readonly ToolsHubItem[] = [
  ...CALENDAR_DISPLAY_ORDER.map(buildCalendarItem),
  ...AGENDA_NICHE_ORDER.map(buildAgendaItem),
  ...CALCULATOR_DISPLAY_ORDER.map(buildCalculatorItem),
]
