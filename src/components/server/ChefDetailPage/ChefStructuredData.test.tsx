import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { NlRegion } from '@/constants/chef'
import { EVELINE_COOKS_CHEF } from '@/data/chefs/eveline-cooks'
import { Language } from '@/types'

import { buildChefStructuredDataLd } from './ChefStructuredData'

const EN_REGION_LABELS: Record<NlRegion, string> = {
  [NlRegion.DRENTHE]: 'Drenthe',
  [NlRegion.FLEVOLAND]: 'Flevoland',
  [NlRegion.FRIESLAND]: 'Friesland',
  [NlRegion.GELDERLAND]: 'Gelderland',
  [NlRegion.GRONINGEN]: 'Groningen',
  [NlRegion.LIMBURG]: 'Limburg',
  [NlRegion.NOORD_BRABANT]: 'Noord-Brabant',
  [NlRegion.NOORD_HOLLAND]: 'Noord-Holland',
  [NlRegion.OVERIJSSEL]: 'Overijssel',
  [NlRegion.UTRECHT]: 'Utrecht',
  [NlRegion.ZEELAND]: 'Zeeland',
  [NlRegion.ZUID_HOLLAND]: 'Zuid-Holland',
}

function parseLdFromContainer(container: HTMLElement): Record<string, unknown> {
  const el = container.querySelector('script[type="application/ld+json"]')
  if (!el) {
    throw new Error('JSON-LD script not found')
  }
  return JSON.parse(String(el.textContent)) as Record<string, unknown>
}

describe('ChefStructuredData', () => {
  it('emits valid JSON-LD with @type Person and chef name', () => {
    const ld = buildChefStructuredDataLd(EVELINE_COOKS_CHEF, Language.EN, EN_REGION_LABELS)
    const { container } = render(
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />,
    )
    const json = parseLdFromContainer(container)
    expect(json['@type']).toBe('Person')
    expect(json.name).toBe(EVELINE_COOKS_CHEF.name)
    expect(json.jobTitle).toBe('Retreat Chef')
  })

  it('includes makesOffer with areaServed matching servesRegions count', () => {
    const ld = buildChefStructuredDataLd(EVELINE_COOKS_CHEF, Language.EN, EN_REGION_LABELS)
    const { container } = render(
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />,
    )
    const json = parseLdFromContainer(container)
    const makesOffer = json.makesOffer as { areaServed: unknown[]; priceCurrency: string; price: number }
    expect(makesOffer.areaServed).toHaveLength(EVELINE_COOKS_CHEF.servesRegions.length)
    expect(makesOffer.priceCurrency).toBe('EUR')
    expect(makesOffer.price).toBe(EVELINE_COOKS_CHEF.dayRate.amountEur)
  })

  it('includes knowsLanguage from languagesSpoken', () => {
    const ld = buildChefStructuredDataLd(EVELINE_COOKS_CHEF, Language.EN, EN_REGION_LABELS)
    const { container } = render(
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />,
    )
    const json = parseLdFromContainer(container)
    expect(json.knowsLanguage).toEqual(EVELINE_COOKS_CHEF.languagesSpoken)
  })
})
