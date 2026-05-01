import { describe, expect, it } from 'vitest'

import { ChefStatus } from '@/constants/chef'
import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { Language } from '@/types'

import { buildChefsListingStructuredDataLd } from './ChefsStructuredData'

const FAQ_FIXTURE = [
  { question: 'Q1?', answer: 'A1.' },
  { question: 'Q2?', answer: 'A2.' },
] as const
const META_FIXTURE = { title: 'Title', description: 'Desc' }

interface GraphNode { '@type': string; itemListElement?: unknown[]; mainEntity?: unknown[] }
interface LdGraph { '@graph': GraphNode[] }

describe('buildChefsListingStructuredDataLd', () => {
  it('always emits BreadcrumbList, CollectionPage, FAQPage', () => {
    const ld = buildChefsListingStructuredDataLd({
      lang: Language.EN,
      publishedChefs: [],
      faqItems: FAQ_FIXTURE,
      meta: META_FIXTURE,
    })
    const types = (ld as unknown as LdGraph)['@graph'].map((n) => n['@type'])
    expect(types).toContain('BreadcrumbList')
    expect(types).toContain('CollectionPage')
    expect(types).toContain('FAQPage')
  })

  it('omits ItemList when publishedChefs is empty', () => {
    const ld = buildChefsListingStructuredDataLd({
      lang: Language.EN,
      publishedChefs: [],
      faqItems: FAQ_FIXTURE,
      meta: META_FIXTURE,
    })
    const types = (ld as unknown as LdGraph)['@graph'].map((n) => n['@type'])
    expect(types).not.toContain('ItemList')
  })

  it('emits ItemList with positions when publishedChefs is non-empty', () => {
    const published = { ...LIESBETH_VAN_DER_VELDEN_CHEF, status: ChefStatus.PUBLISHED }
    const ld = buildChefsListingStructuredDataLd({
      lang: Language.EN,
      publishedChefs: [published],
      faqItems: FAQ_FIXTURE,
      meta: META_FIXTURE,
    })
    const itemList = (ld as unknown as LdGraph)['@graph'].find((n) => n['@type'] === 'ItemList')
    expect(itemList).toBeDefined()
    expect(itemList?.itemListElement).toHaveLength(1)
    const first = itemList?.itemListElement?.[0] as { position: number; url: string; name: string }
    expect(first.position).toBe(1)
    expect(first.url).toBe(`https://themakersbarn.nl/en/chefs/${published.slug}`)
    expect(first.name).toBe(published.name)
  })

  it('FAQPage.mainEntity length matches input faqItems length', () => {
    const ld = buildChefsListingStructuredDataLd({
      lang: Language.EN,
      publishedChefs: [],
      faqItems: FAQ_FIXTURE,
      meta: META_FIXTURE,
    })
    const faq = (ld as unknown as LdGraph)['@graph'].find((n) => n['@type'] === 'FAQPage')
    expect(faq?.mainEntity).toHaveLength(FAQ_FIXTURE.length)
  })
})
