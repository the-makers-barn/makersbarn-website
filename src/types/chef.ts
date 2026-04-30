import {
  ChefStatus,
  DayRateUnit,
  DietaryCapability,
  NlRegion,
  PriceTier,
  RetreatType,
} from '@/constants/chef'
import { Language } from '@/types/common'

/**
 * LocalizedWithFallback<T> requires the EN value, allows optional NL/DE values.
 * Use the `localize(field, lang)` helper at render time — it falls back to EN
 * when the requested language is missing.
 *
 * Contrast with `LocalizedString` / `ComparisonLocalizedString` (tools.ts) which require
 * all three locales. This type intentionally only mandates EN and falls back at runtime.
 */
export type LocalizedWithFallback<T> = { [Language.EN]: T } & Partial<Record<Language.NL | Language.DE, T>>

/**
 * Branded string for ISO 8601 date strings (e.g. '2026-04-30').
 * Construct via the asIsoDateString() helper at data-file authoring time
 * so the brand carries the validation guarantee.
 */
export type IsoDateString = string & { readonly __brand: 'IsoDateString' }

/**
 * Construct an IsoDateString. Use at data-file authoring time only.
 * No runtime validation — the contract is "the author asserts this is a valid ISO date."
 * Future Task 7 (Liesbeth fixture) and any later chef data files use this helper.
 */
export const asIsoDateString = (s: string): IsoDateString => s as IsoDateString

export type ImageRef = {
  /** Path relative to /public, e.g. '/images/chefs/liesbeth-van-der-velden/hero.jpg' */
  src: string
  /** Key into src/data/imageAltText.ts (existing i18n alt-text registry) */
  altKey: string
}

export type ChefHomeBase = { city: string; region: NlRegion }

export type ChefGroupSize = { min: number; max: number }

export type ChefDayRate = {
  amountEur: number
  unit: DayRateUnit
  tier: PriceTier
}

export type ChefGallery = {
  hero: ImageRef
  /** 4–8 supporting images. Validated at runtime by the publishing checklist, not the type. */
  supporting: ImageRef[]
}

export type ChefAbout = {
  headline: LocalizedWithFallback<string>
  paragraphs: LocalizedWithFallback<string>[]
}

export type ChefSignatureDish = {
  name: LocalizedWithFallback<string>
  note: LocalizedWithFallback<string>
}

export type ChefTestimonial = {
  quote: LocalizedWithFallback<string>
  author: string
  role: LocalizedWithFallback<string>
}

export type ChefAtAGlance = {
  sourcing: LocalizedWithFallback<string>
  credentials: LocalizedWithFallback<string>
  press?: LocalizedWithFallback<string>
}

export type ChefPastRetreat = {
  name: string
  /** Optional outbound link. Rendered with target="_blank" rel="noopener nofollow". */
  url?: string
}

export type ChefInquiryDict = {
  modalTitle: string
  closeAriaLabel: string
  field: {
    name: string
    email: string
    dates: string
    groupSize: string
    location: string
    dietary: string
    message: string
  }
  consent: string
  submit: string
  submitting: string
  success: { title: string; body: string }
  errors: {
    rate_limited: string
    validation: string
    chef_not_found: string
    email_failed: string
    unexpected_error: string
  }
}

export type Chef = {
  // Identity & gating
  slug: string
  status: ChefStatus
  primaryLanguage: Language
  inquiryEmail: string
  /** ISO date string (use asIsoDateString helper at the data-file authoring site). Drives sitemap lastModified. */
  updatedAt: IsoDateString

  // Header
  name: string
  avatar: ImageRef
  tagline: LocalizedWithFallback<string>
  homeBase: ChefHomeBase
  servesRegions: NlRegion[]
  travelsNationwide: boolean
  groupSize: ChefGroupSize
  languagesSpoken: Language[]
  yearsExperience: number

  // Stat strip
  rightFor: RetreatType[]
  cuisineStyles: LocalizedWithFallback<string>[]
  dietaryCapabilities: DietaryCapability[]
  dayRate: ChefDayRate

  // Body
  gallery: ChefGallery
  about: ChefAbout
  signatureDishes: ChefSignatureDish[]
  testimonials: ChefTestimonial[]

  // Sidebar
  atAGlance: ChefAtAGlance
  pastRetreats: ChefPastRetreat[]
}
