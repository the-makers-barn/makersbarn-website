import type { Language } from '@/types/common'
import type { RetreatRole, ToolVariant } from '@/constants/tools'

export interface CalculatorInputs {
  guests: number
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
  role: RetreatRole
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

export interface VariantBenchmarks {
  pricePerGuest: LocalizedString
  foodPerGuestPerDay: LocalizedString
  facilitatorFee: LocalizedString
  marketingAndOther: LocalizedString
  venuePerNight: LocalizedString
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
  howToSteps: LocalizedString[]
  guideSections: CalculatorContentSection[]
  faq: CalculatorFaqEntry[]
}

export type CalculatorContentMap = Record<ToolVariant, CalculatorVariantContent>

export interface EmailCalculatorSummaryData {
  email: string
  inputs: CalculatorInputs
  results: CalculatorResults
  variant: ToolVariant
  newsletterOptIn: boolean
  locale: Language
}
