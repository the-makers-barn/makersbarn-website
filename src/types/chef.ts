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
 * Localized<T> requires the EN value, allows optional NL/DE values.
 * Use the `localize(field, lang)` helper at render time — it falls back to EN
 * when the requested language is missing.
 */
export type Localized<T> = { [Language.EN]: T } & Partial<Record<Language.NL | Language.DE, T>>

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
  headline: Localized<string>
  paragraphs: Localized<string>[]
}

export type ChefSignatureDish = {
  name: Localized<string>
  note: Localized<string>
}

export type ChefTestimonial = {
  quote: Localized<string>
  author: string
  role: Localized<string>
}

export type ChefAtAGlance = {
  sourcing: Localized<string>
  credentials: Localized<string>
  press?: Localized<string>
}

export type ChefPastRetreat = {
  name: string
  /** Optional outbound link. Rendered with target="_blank" rel="noopener nofollow". */
  url?: string
}

export type Chef = {
  // Identity & gating
  slug: string
  status: ChefStatus
  primaryLanguage: Language
  inquiryEmail: string
  /** ISO date string, drives sitemap lastModified. */
  updatedAt: string

  // Header
  name: string
  avatar: ImageRef
  tagline: Localized<string>
  homeBase: ChefHomeBase
  servesRegions: NlRegion[]
  travelsNationwide: boolean
  groupSize: ChefGroupSize
  languagesSpoken: Language[]
  yearsExperience: number

  // Stat strip
  rightFor: RetreatType[]
  cuisineStyles: Localized<string>[]
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
