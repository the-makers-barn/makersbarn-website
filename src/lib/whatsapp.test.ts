import { describe, expect, it } from 'vitest'

import { CONTACT_URLS } from '@/constants/contact'

import { getWhatsAppUrl } from './whatsapp'

describe('getWhatsAppUrl', () => {
  it('builds on the shared CONTACT_URLS.WHATSAPP base', () => {
    expect(getWhatsAppUrl('hello')).toBe(`${CONTACT_URLS.WHATSAPP}?text=hello`)
  })

  it('URL-encodes the prefilled message', () => {
    const url = getWhatsAppUrl("Hi! I'd like to book the Cosmos cabin.")
    expect(url).toBe(`${CONTACT_URLS.WHATSAPP}?text=Hi!%20I'd%20like%20to%20book%20the%20Cosmos%20cabin.`)
  })
})
