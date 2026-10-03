import { existsSync } from 'node:fs'
import path from 'node:path'

import { describe, expect, it } from 'vitest'

import { dictionaries } from '@/i18n/dictionaries'
import { getImageAltText } from '@/lib/imageAltText'
import { AccommodationCabin, ExperienceType, Language } from '@/types'

import { CABIN_REVIEWS, getCabinReviews } from './cabinReviews'
import { CABIN_DETAILS, OTHER_CABIN } from './cabins'
import { EXPERIENCE_OFFERS } from './experiences'

const CABINS = Object.values(AccommodationCabin)
const LOCALES = Object.values(Language)

describe('cabin details', () => {
  it.each(CABINS)('%s has a gallery of existing images with alt text', (cabin) => {
    const { gallery } = CABIN_DETAILS[cabin]
    expect(gallery.length).toBeGreaterThanOrEqual(5)

    for (const src of gallery) {
      expect(existsSync(path.join(process.cwd(), 'public', src)), src).toBe(true)
      for (const locale of LOCALES) {
        expect(getImageAltText(src, locale), `${src} (${locale})`).toBeTruthy()
      }
    }
  })

  it('gives every cabin its own route and suggests a different cabin', () => {
    const routes = CABINS.map((cabin) => CABIN_DETAILS[cabin].route)
    expect(new Set(routes).size).toBe(CABINS.length)
    for (const cabin of CABINS) {
      expect(OTHER_CABIN[cabin]).not.toBe(cabin)
    }
  })

  it('links each accommodation card to its cabin page', () => {
    for (const offer of EXPERIENCE_OFFERS) {
      if (offer.type === ExperienceType.ACCOMMODATION) {
        expect(offer.detailUrl).toBe(CABIN_DETAILS[offer.cabin].route)
        expect(offer.bookingLinks).toBe(CABIN_DETAILS[offer.cabin].bookingLinks)
      }
    }
  })

  it.each(LOCALES)('has complete %s copy for every cabin', (locale) => {
    for (const cabin of CABINS) {
      const content = dictionaries[locale].cabinDetail.cabins[cabin]
      expect(content.title).toBeTruthy()
      expect(content.keyFacts.length).toBeGreaterThan(0)
      expect(content.description.length).toBeGreaterThan(0)
      expect(content.amenityGroups.every((group) => group.items.length > 0)).toBe(true)
    }
  })

  it.each(CABINS)('%s has reviews', (cabin) => {
    expect(getCabinReviews(cabin).length).toBeGreaterThan(0)
  })

  it('has unique reviews with text in every locale and a valid score and date', () => {
    expect(new Set(CABIN_REVIEWS.map((review) => review.id)).size).toBe(CABIN_REVIEWS.length)
    for (const review of CABIN_REVIEWS) {
      expect(review.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(review.score).toBeGreaterThan(0)
      expect(review.score).toBeLessThanOrEqual(review.outOf)
      for (const locale of LOCALES) {
        expect(review.text[locale], `${review.id} (${locale})`).toBeTruthy()
      }
    }
  })
})
