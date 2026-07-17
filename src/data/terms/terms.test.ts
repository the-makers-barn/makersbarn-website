import { describe, expect, it } from 'vitest'

import { Language } from '@/types'

import { TERMS_META, getTermsVariant, getTermsDisclaimer } from './index'

const ARTICLE_COUNT = 11
const KVK_NUMBER = '42017220'

describe('terms content', () => {
  it.each([Language.NL, Language.EN, Language.DE])(
    'variant for %s has all articles and identity data',
    (locale) => {
      const variant = getTermsVariant(locale)
      expect(variant.articles).toHaveLength(ARTICLE_COUNT)
      expect(variant.identity.map((entry) => entry.value)).toContain(KVK_NUMBER)
      expect(variant.introParagraphs.length).toBeGreaterThan(0)
    }
  )

  it('serves the Dutch original on NL and the English translation elsewhere', () => {
    expect(getTermsVariant(Language.NL).documentTitle).toBe(
      'Algemene Voorwaarden Verhuur'
    )
    expect(getTermsVariant(Language.EN).documentTitle).toBe(
      'General Terms and Conditions of Rental'
    )
    expect(getTermsVariant(Language.DE)).toBe(getTermsVariant(Language.EN))
  })

  it('includes the cancellation table and swimming pond callout in both variants', () => {
    for (const locale of [Language.NL, Language.EN]) {
      const variant = getTermsVariant(locale)
      const withTable = variant.articles.filter((article) => article.table)
      const withCallout = variant.articles.filter((article) => article.callout)
      expect(withTable).toHaveLength(1)
      expect(withTable[0].table?.rows).toHaveLength(3)
      expect(withCallout).toHaveLength(1)
    }
  })

  it('provides a binding-version disclaimer for non-NL locales only', () => {
    expect(getTermsDisclaimer(Language.NL)).toBeNull()
    expect(getTermsDisclaimer(Language.EN)?.body).toContain('Dutch')
    expect(getTermsDisclaimer(Language.DE)).toEqual(
      getTermsDisclaimer(Language.EN)
    )
  })

  it('has meta title and description for every locale', () => {
    for (const locale of Object.values(Language)) {
      expect(TERMS_META.title[locale]).toBeTruthy()
      expect(TERMS_META.description[locale]).toBeTruthy()
    }
  })
})
