export enum ExperienceType {
  SOLO_RETREAT = 'solo_retreat',
  ACCOMMODATION = 'accommodation',
  TOGETHER_RETREAT = 'together_retreat',
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
  externalUrl: string
}

export interface TogetherRetreatOffer {
  id: string
  type: ExperienceType.TOGETHER_RETREAT
  image: string
  externalUrl: string
}

export interface AccommodationOffer {
  id: string
  type: ExperienceType.ACCOMMODATION
  cabin: AccommodationCabin
  image: string
  bookingLinks: ExternalLink[]
}

export type ExperienceOffer = SoloRetreatOffer | TogetherRetreatOffer | AccommodationOffer

export interface FeaturedRetreat {
  id: string
  title: string
  image: string
  dateRange: string
  externalUrl?: string
  internalUrl?: string
}
