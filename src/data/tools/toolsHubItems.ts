import {
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

/**
 * Calendar copy ships EN-verbatim across locales for v1 — proper NL/DE
 * translations land in Phase 8.
 */
const allLocalesSameString = (value: string): LocalizedString => ({
  [Language.EN]: value,
  [Language.NL]: value,
  [Language.DE]: value,
  [Language.ES]: value,
  [Language.FR]: value,
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

export const TOOLS_HUB_ITEMS: readonly ToolsHubItem[] = [
  ...CALENDAR_DISPLAY_ORDER.map(buildCalendarItem),
  ...CALCULATOR_DISPLAY_ORDER.map(buildCalculatorItem),
]
