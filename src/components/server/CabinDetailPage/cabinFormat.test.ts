import { describe, expect, it } from 'vitest'

import { CABIN_DETAILS } from '@/data/cabins'
import { CABIN_REVIEWS } from '@/data/cabinReviews'
import { dictionaries } from '@/i18n/dictionaries'
import { AccommodationCabin, BookingPlatform, Language } from '@/types'

import {
  formatRating,
  formatReadAllReviews,
  formatReviewDate,
  formatStayRules,
  formatStayStats,
  formatTranslationNote,
} from './cabinFormat'

const en = dictionaries[Language.EN].cabinDetail
const nl = dictionaries[Language.NL].cabinDetail
const cosmos = CABIN_DETAILS[AccommodationCabin.COSMOS]

describe('cabin formatting', () => {
  it('formats capacity with singular and plural bedrooms', () => {
    expect(formatStayStats(cosmos.stay, en)).toEqual(['Up to 4 guests', '1 bedroom'])
    expect(formatStayStats({ ...cosmos.stay, bedrooms: 2 }, en)[1]).toBe('2 bedrooms')
  })

  it('formats a bedroom range when the count varies by booking', () => {
    const stay = { ...cosmos.stay, maxGuests: 6, minBedrooms: 1, bedrooms: 3 }
    expect(formatStayStats(stay, en)).toEqual(['Up to 6 guests', '1–3 bedrooms'])
    expect(formatStayStats(stay, nl)[1]).toBe('1–3 slaapkamers')
  })

  it('formats the rating with locale-aware decimals', () => {
    const rating = { platform: BookingPlatform.NATUURHUISJE, score: 9.6, outOf: 10, reviewCount: 5 }
    expect(formatRating(rating, en, Language.EN)).toBe('Rated 9.6/10 by 5 guests on Natuurhuisje')
    expect(formatRating(rating, nl, Language.NL)).toBe(
      'Beoordeeld met 9,6/10 door 5 gasten op Natuurhuisje',
    )
  })

  it('lists check-in, check-out and pets', () => {
    expect(formatStayRules(cosmos.stay, en)).toEqual([
      { label: 'Check-in', value: '15:00 – 22:00' },
      { label: 'Check-out', value: 'Until 11:00' },
      { label: 'Pets', value: 'Not allowed' },
    ])
  })

  it('formats review dates by month in the page locale', () => {
    expect(formatReviewDate('2026-09-22', Language.EN)).toBe('September 2026')
    expect(formatReviewDate('2026-09-22', Language.NL)).toBe('september 2026')
  })

  it('labels translated reviews only', () => {
    const [review] = CABIN_REVIEWS
    expect(formatTranslationNote(review, nl, Language.NL)).toBeUndefined()
    expect(formatTranslationNote(review, en, Language.EN)).toBe('Translated from Dutch')
  })

  it('links to all reviews on the rating platform', () => {
    expect(formatReadAllReviews(cosmos.rating!, en)).toBe('Read all 20 reviews on Natuurhuisje')
  })
})
