import { describe, expect, it } from 'vitest'

import { getCanonicalHostRedirect } from './canonicalHost'

describe('getCanonicalHostRedirect', () => {
  it('sends the .com domain and every www form to the bare .nl domain, keeping path and query', () => {
    for (const host of ['themakersbarn.com', 'www.themakersbarn.com', 'www.themakersbarn.nl']) {
      expect(getCanonicalHostRedirect(host, '/nl/contact', '?intent=booking')).toBe(
        'https://themakersbarn.nl/nl/contact?intent=booking',
      )
    }
  })

  it('ignores case and a port suffix in the Host header', () => {
    expect(getCanonicalHostRedirect('WWW.themakersbarn.NL:443', '/', '')).toBe('https://themakersbarn.nl/')
  })

  it('leaves the canonical host, hosting previews and localhost alone', () => {
    expect(getCanonicalHostRedirect('themakersbarn.nl', '/', '')).toBeNull()
    expect(getCanonicalHostRedirect('themakersbarn.up.railway.app', '/', '')).toBeNull()
    expect(getCanonicalHostRedirect('localhost:3000', '/', '')).toBeNull()
    expect(getCanonicalHostRedirect(null, '/', '')).toBeNull()
  })
})
