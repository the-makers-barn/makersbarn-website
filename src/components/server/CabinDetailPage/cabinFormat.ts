import type { CabinDetailTranslations } from '@/i18n/types'
import { BookingPlatform, type CabinRating, type CabinStayDetails, type Language } from '@/types'

const PLATFORM_NAMES: Record<BookingPlatform, string> = {
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

  return [
    fill(copy.stats.guests, { count: String(stay.maxGuests) }),
    fill(bedroomTemplate, { count: String(stay.bedrooms) }),
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
