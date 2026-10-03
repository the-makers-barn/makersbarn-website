import type { Language } from './common'
import { Route } from './navigation'

export enum ExperienceType {
  SOLO_RETREAT = 'solo_retreat',
  ACCOMMODATION = 'accommodation',
  FOCUSED_WORKATION = 'focused_workation',
}

export enum AccommodationCabin {
  COSMOS = 'cosmos',
  HORIZON = 'horizon',
}

export enum BookingPlatform {
  AIRBNB = 'airbnb',
  NATUURHUISJE = 'natuurhuisje',
}

export interface ExternalLink {
  platform: BookingPlatform
  url: string
}

export interface SoloRetreatOffer {
  id: string
  type: ExperienceType.SOLO_RETREAT
  image: string
}

export interface AccommodationOffer {
  id: string
  type: ExperienceType.ACCOMMODATION
  cabin: AccommodationCabin
  image: string
  bookingLinks: readonly ExternalLink[]
  detailUrl: Route
}

/** House rules and capacity; times are 24h `HH:mm`. */
export interface CabinStayDetails {
  maxGuests: number
  bedrooms: number
  /** Set when the bedroom count varies by booking; `bedrooms` is then the most. */
  minBedrooms?: number
  checkInFrom: string
  checkInUntil: string
  checkOutUntil: string
  petsAllowed: boolean
}

export interface CabinRating {
  platform: BookingPlatform
  score: number
  outOf: number
  reviewCount: number
}

/**
 * A guest review copied from a booking platform. `text` holds the original in
 * `sourceLanguage` and translations for the other locales.
 */
export interface CabinReview {
  id: string
  cabin: AccommodationCabin
  author: string
  /** ISO date, `YYYY-MM-DD`. */
  date: string
  score: number
  outOf: number
  platform: BookingPlatform
  sourceLanguage: Language
  text: Record<Language, string>
}

/**
 * Static data behind a cabin detail page. Copy lives in the dictionaries
 * (`cabinDetail.cabins[cabin]`); this holds what is the same in every locale.
 */
export interface CabinDetail {
  cabin: AccommodationCabin
  route: Route
  /** Gallery order: the first image is the large hero tile. */
  gallery: readonly string[]
  bookingLinks: readonly ExternalLink[]
  stay: CabinStayDetails
  rating?: CabinRating
}

export interface FocusedWorkationOffer {
  id: string
  type: ExperienceType.FOCUSED_WORKATION
  image: string
  internalUrl: Route
}

export type ExperienceOffer =
  | SoloRetreatOffer
  | AccommodationOffer
  | FocusedWorkationOffer

export interface FeaturedRetreat {
  id: string
  title: string
  image: string
  dateRange: string
  externalUrl?: string
  internalUrl?: string
}
