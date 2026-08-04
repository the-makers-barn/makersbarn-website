import { describe, it, expect } from 'vitest'

import { buildTicketShopUrl, toSearchParams } from './ticketShopUrl'

const SHOP_URL = 'https://hipsy.nl/shop/235781-the-autumn-grounding-ayurvedic-care-for-women'

function paramsOf(url: string): URLSearchParams {
  return new URL(url).searchParams
}

describe('buildTicketShopUrl', () => {
  it('pins utm_medium to iframe so embed sales stay distinguishable', () => {
    const params = paramsOf(buildTicketShopUrl(SHOP_URL, null))

    expect(params.get('utm_medium')).toBe('iframe')
  })

  it('keeps utm_medium pinned even when the visitor arrives with their own', () => {
    const incoming = new URLSearchParams('utm_medium=paid_social')
    const params = paramsOf(buildTicketShopUrl(SHOP_URL, incoming))

    expect(params.get('utm_medium')).toBe('iframe')
  })

  it('forwards the visitor campaign parameters', () => {
    const incoming = new URLSearchParams(
      'utm_source=instagram&utm_campaign=autumn26&utm_content=carousel_a&utm_term=ayurveda'
    )
    const params = paramsOf(buildTicketShopUrl(SHOP_URL, incoming))

    expect(params.get('utm_source')).toBe('instagram')
    expect(params.get('utm_campaign')).toBe('autumn26')
    expect(params.get('utm_content')).toBe('carousel_a')
    expect(params.get('utm_term')).toBe('ayurveda')
  })

  it('falls back to themakersbarn as source for organic visits', () => {
    const params = paramsOf(buildTicketShopUrl(SHOP_URL, new URLSearchParams('utm_campaign=x')))

    expect(params.get('utm_source')).toBe('themakersbarn')
    expect(params.get('utm_campaign')).toBe('x')
  })

  it('drops parameters that are not on the allow-list', () => {
    const incoming = new URLSearchParams('ref=spam&fbclid=abc&redirect=https://evil.example')
    const params = paramsOf(buildTicketShopUrl(SHOP_URL, incoming))

    expect(params.get('ref')).toBeNull()
    expect(params.get('fbclid')).toBeNull()
    expect(params.get('redirect')).toBeNull()
  })

  it('cannot be made to point at another origin', () => {
    const incoming = new URLSearchParams(
      'utm_source=' + encodeURIComponent('https://evil.example/@x')
    )
    const url = new URL(buildTicketShopUrl(SHOP_URL, incoming))

    expect(url.origin).toBe('https://hipsy.nl')
    expect(url.pathname).toBe('/shop/235781-the-autumn-grounding-ayurvedic-care-for-women')
  })

  it('caps absurdly long values rather than forwarding them wholesale', () => {
    const incoming = new URLSearchParams(`utm_campaign=${'a'.repeat(500)}`)
    const params = paramsOf(buildTicketShopUrl(SHOP_URL, incoming))

    expect(params.get('utm_campaign')).toHaveLength(128)
  })

  it('ignores empty parameter values', () => {
    const params = paramsOf(buildTicketShopUrl(SHOP_URL, new URLSearchParams('utm_source=')))

    expect(params.get('utm_source')).toBe('themakersbarn')
  })
})

describe('toSearchParams', () => {
  it('converts a page searchParams object', () => {
    const params = toSearchParams({ utm_source: 'instagram', utm_campaign: 'autumn26' })

    expect(params.get('utm_source')).toBe('instagram')
    expect(params.get('utm_campaign')).toBe('autumn26')
  })

  it('takes the first value when a key is repeated', () => {
    const params = toSearchParams({ utm_source: ['instagram', 'facebook'] })

    expect(params.get('utm_source')).toBe('instagram')
  })

  it('skips undefined and empty array values', () => {
    const params = toSearchParams({ utm_source: undefined, utm_campaign: [] })

    expect(params.get('utm_source')).toBeNull()
    expect(params.get('utm_campaign')).toBeNull()
  })

  it('returns empty params when the page had no query string', () => {
    expect([...toSearchParams(undefined)]).toHaveLength(0)
  })

  it('round-trips into a shop url with utm_medium still pinned', () => {
    const url = buildTicketShopUrl(
      SHOP_URL,
      toSearchParams({ utm_source: 'instagram', utm_medium: 'paid_social' })
    )

    expect(paramsOf(url).get('utm_source')).toBe('instagram')
    expect(paramsOf(url).get('utm_medium')).toBe('iframe')
  })
})
