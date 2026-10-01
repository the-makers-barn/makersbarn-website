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
