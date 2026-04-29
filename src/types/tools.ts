import type { CalendarPhaseId, MilestoneStatus, TimelinePreset, ToolKind, ToolVariant } from '@/constants/tools'
import type { Language } from '@/types/common'
import type { Route } from '@/types/navigation'

export interface CalculatorInputs {
  guests: number
  teamCount: number
  nights: number
  pricePerGuest: number
  venuePerNight: number
  foodPerGuestPerDay: number
  facilitatorFee: number
  marketingAndOther: number
  travel: number
  insurance: number
  paymentFeePercent: number
  planningDays: number
  hiresFacilitators: boolean
  pricesIncludeVat: boolean
  vatPercent: number
}

export interface CalculatorCostBreakdown {
  venueAccommodation: number
  food: number
  facilitatorFee: number
  marketingAndOther: number
  travel: number
  insurance: number
  paymentFees: number
}

export interface CalculatorResults {
  totalRevenue: number
  totalCosts: number
  netProfit: number
  profitMargin: number
  profitPerWorkday: number
  breakevenGuests: number
  costBreakdown: CalculatorCostBreakdown
}

export type LocalizedString = Record<Language, string>

export interface BenchmarkPrice {
  amounts: readonly number[]
  template: LocalizedString
}

export interface VariantBenchmarks {
  pricePerGuest: BenchmarkPrice
  foodPerGuestPerDay: BenchmarkPrice
  facilitatorFee: BenchmarkPrice
  marketingAndOther: LocalizedString
  venuePerNight: BenchmarkPrice
}

export interface VariantCopy {
  heroEyebrow: LocalizedString
  heroTitle: LocalizedString
  heroIntro: LocalizedString
  metaTitle: LocalizedString
  metaDescription: LocalizedString
}

export interface VariantConfig {
  variant: ToolVariant
  defaults: CalculatorInputs
  benchmarks: VariantBenchmarks
  copy: VariantCopy
  relatedVariants: ToolVariant[]
}

export interface CalculatorContentSection {
  heading: LocalizedString
  body: LocalizedString[]
  callout?: LocalizedString
}

export interface CalculatorFaqEntry {
  question: LocalizedString
  answer: LocalizedString
}

export interface CalculatorVariantContent {
  guideSections: CalculatorContentSection[]
  faq: CalculatorFaqEntry[]
}

export type CalculatorContentMap = Record<ToolVariant, CalculatorVariantContent>

export interface EmailCalculatorSummaryData {
  email: string
  inputs: CalculatorInputs
  variant: ToolVariant
  newsletterOptIn: boolean
  locale: Language
}

export type MilestoneNonDefaultStatus =
  | MilestoneStatus.DONE
  | MilestoneStatus.DISMISSED

export interface CalendarMilestone {
  id: string
  text: LocalizedString
}

export interface CalendarPhase {
  id: CalendarPhaseId
  range: LocalizedString
  rangeStartMonth: number
  rangeEndMonth: number
  eyebrow: LocalizedString
  title: LocalizedString
  milestones: CalendarMilestone[]
}

export type CalendarPhaseOverride =
  | {
      kind: 'modify'
      patch: Partial<Omit<CalendarPhase, 'id' | 'milestones'>>
      extraMilestones?: Array<{
        position: 'prepend' | 'append' | { afterId: string }
        milestone: CalendarMilestone
      }>
    }
  | { kind: 'remove' }

export interface CalendarPresetOverride {
  impactSubtitle: LocalizedString
  phases?: Partial<Record<CalendarPhaseId, CalendarPhaseOverride>>
}

export interface CalendarContent {
  canonical: CalendarPhase[]
  overrides: Partial<Record<TimelinePreset, CalendarPresetOverride>>
}

export interface CustomMilestone {
  id: string
  phaseId: CalendarPhaseId
  text: string
  status: MilestoneStatus
}

export interface CalendarState {
  schemaVersion: 1
  itemStates: Record<string, MilestoneNonDefaultStatus>
  customItems: CustomMilestone[]
}

export interface EmailCalendarPlanInput {
  email: string
  preset: TimelinePreset
  itemStates: Record<string, MilestoneNonDefaultStatus>
  customItems: Array<{
    phaseId: CalendarPhaseId
    text: string
    status: MilestoneNonDefaultStatus
  }>
  contactConsent: boolean
}

export interface EmailCalendarPlanResult {
  ok: boolean
  error?: 'rate_limit' | 'invalid_email' | 'validation' | 'send_failed'
}

export interface ToolsHubItem {
  kind: ToolKind
  route: Route
  eyebrow: LocalizedString
  title: LocalizedString
  intro: LocalizedString
}
