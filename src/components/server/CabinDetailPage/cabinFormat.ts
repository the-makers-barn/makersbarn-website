import type { CabinDetailTranslations } from '@/i18n/types'
import {
  BookingPlatform,
  type CabinRating,
  type CabinReview,
  type CabinStayDetails,
  type Language,
} from '@/types'

export const PLATFORM_NAMES: Record<BookingPlatform, string> = {
  [BookingPlatform.AIRBNB]: 'Airbnb',
  [BookingPlatform.NATUURHUISJE]: 'Natuurhuisje',
}

function fill(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  )
}

/** Capacity facts shown ahead of the cabin's own key facts, e.g. "Up to 4 guests". */
export function formatStayStats(
  stay: CabinStayDetails,
  copy: CabinDetailTranslations,
): string[] {
  const bedroomTemplate =
    stay.bedrooms === 1 ? copy.stats.bedrooms.one : copy.stats.bedrooms.other
  const hasBedroomRange = stay.minBedrooms !== undefined && stay.minBedrooms < stay.bedrooms

  return [
    fill(copy.stats.guests, { count: String(stay.maxGuests) }),
    hasBedroomRange
      ? fill(copy.stats.bedroomRange, { min: String(stay.minBedrooms), max: String(stay.bedrooms) })
      : fill(bedroomTemplate, { count: String(stay.bedrooms) }),
  ]
}

export function formatRating(
  rating: CabinRating,
  copy: CabinDetailTranslations,
  locale: Language,
): string {
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 })

  return fill(copy.rating, {
    score: number.format(rating.score),
    outOf: number.format(rating.outOf),
    count: String(rating.reviewCount),
    platform: PLATFORM_NAMES[rating.platform],
  })
}

export interface StayRule {
  label: string
  value: string
}

export function formatStayRules(
  stay: CabinStayDetails,
  copy: CabinDetailTranslations,
): StayRule[] {
  const { goodToKnow } = copy

  return [
    {
      label: goodToKnow.checkIn,
      value: fill(goodToKnow.checkInValue, { from: stay.checkInFrom, until: stay.checkInUntil }),
    },
    {
      label: goodToKnow.checkOut,
      value: fill(goodToKnow.checkOutValue, { until: stay.checkOutUntil }),
    },
    {
      label: goodToKnow.pets,
      value: stay.petsAllowed ? goodToKnow.petsAllowed : goodToKnow.petsNotAllowed,
    },
  ]
}

export function formatReviewScore(review: CabinReview, copy: CabinDetailTranslations): string {
  return fill(copy.reviews.score, {
    score: String(review.score),
    outOf: String(review.outOf),
  })
}

/** "September 2026"; month precision is enough and avoids timezone drift. */
export function formatReviewDate(isoDate: string, locale: Language): string {
  const [year, month] = isoDate.split('-').map(Number)
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  )
}

/** Note shown under a review read in another language than it was written in. */
export function formatTranslationNote(
  review: CabinReview,
  copy: CabinDetailTranslations,
  locale: Language,
): string | undefined {
  if (review.sourceLanguage === locale) {
    return undefined
  }
  return fill(copy.reviews.translatedFrom, {
    language: copy.reviews.languageNames[review.sourceLanguage],
  })
}

export function formatReadAllReviews(
  rating: CabinRating,
  copy: CabinDetailTranslations,
): string {
  return fill(copy.reviews.readAll, {
    count: String(rating.reviewCount),
    platform: PLATFORM_NAMES[rating.platform],
  })
}
