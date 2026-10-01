import { describe, expect, it } from 'vitest'

import { CABIN_DETAILS } from '@/data/cabins'
import { dictionaries } from '@/i18n/dictionaries'
import { AccommodationCabin, BookingPlatform, Language } from '@/types'

import { formatRating, formatStayRules, formatStayStats } from './cabinFormat'

const en = dictionaries[Language.EN].cabinDetail
const nl = dictionaries[Language.NL].cabinDetail
const cosmos = CABIN_DETAILS[AccommodationCabin.COSMOS]

describe('cabin formatting', () => {
  it('formats capacity with singular and plural bedrooms', () => {
    expect(formatStayStats(cosmos.stay, en)).toEqual(['Up to 4 guests', '1 bedroom'])
    expect(formatStayStats({ ...cosmos.stay, bedrooms: 2 }, en)[1]).toBe('2 bedrooms')
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
})
