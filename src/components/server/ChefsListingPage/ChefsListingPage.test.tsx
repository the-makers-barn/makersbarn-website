import { describe, expect, it, vi } from 'vitest'
import { isValidElement } from 'react'

import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { Language } from '@/types'

import { ChefsListingPage } from './ChefsListingPage'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chef: { enums: { region: { drenthe: 'Drenthe' } } },
    chefsListing: {
      meta: { title: 'T', description: 'D' },
      hero: { eyebrow: 'Chefs', h1: 'H1', subtitle: 'sub' },
      intro: 'intro',
      sections: {
        whatToLookFor: { h2: 'A', paragraphs: ['p1'] },
        pricing: { h2: 'B', paragraphs: ['p1'] },
        coverage: { h2: 'C', paragraphs: ['p1'] },
      },
      grid: {
        h2: 'Grid',
        framingLine: 'fl',
        card: { viewProfile: 'View', draftBadge: 'DRAFT', cuisinesAriaLabel: 'Cuisines' },
      },
      launchingSoon: { headline: 'Soon', body: 'b', inlineCtaLabel: 'cta' },
      facts: [{ number: '1', description: 'd' }],
      faq: { h2: 'FAQ', items: [{ question: 'q', answer: 'a' }] },
      dualCta: {
        looking: { eyebrow: 'e', h3: 'h', body: 'b', button: 'b' },
        join: { eyebrow: 'e', h3: 'h', body: 'b', button: 'b' },
      },
    },
  }),
}))

describe('ChefsListingPage', () => {
  it('returns a JSX element with no chefs', async () => {
    const result = await ChefsListingPage({ chefs: [], publishedChefs: [], lang: Language.EN })
    expect(isValidElement(result)).toBe(true)
  })

  it('returns a JSX element with one chef', async () => {
    const result = await ChefsListingPage({
      chefs: [LIESBETH_VAN_DER_VELDEN_CHEF],
      publishedChefs: [],
      lang: Language.EN,
    })
    expect(isValidElement(result)).toBe(true)
  })
})
