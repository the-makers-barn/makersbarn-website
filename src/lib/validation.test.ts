import { describe, expect, it } from 'vitest'

import { Channel, HEARD_ABOUT_DETAIL_MAX } from '@/constants'
import { ContactIntent, HeardAboutSource } from '@/types'

import { validateBookingForm, validateContactForm } from './validation'

describe('validateContactForm — source field', () => {
  const base = { name: 'Ada', email: 'ada@example.com', phone: '', message: 'hello world' }

  it('accepts a valid ContactIntent as source', () => {
    const result = validateContactForm({ ...base, source: ContactIntent.LOOKING_FOR_CHEF })
    expect(result.success).toBe(true)
    expect(result.data?.source).toBe(ContactIntent.LOOKING_FOR_CHEF)
  })

  it('accepts payloads without a source (back-compat)', () => {
    const result = validateContactForm(base)
    expect(result.success).toBe(true)
    expect(result.data?.source).toBeUndefined()
  })

  it('rejects an invalid source value', () => {
    const result = validateContactForm({ ...base, source: 'not-an-intent' })
    expect(result.success).toBe(false)
  })
})

describe('submission source fields', () => {
  const contactBase = { name: 'Ada', email: 'ada@example.com', phone: '', message: 'hello world' }
  const bookingBase = { name: 'Ada', email: 'ada@example.com', flexibleDates: false, cateringNeeded: false }

  it('keeps a valid answer, detail and landing channel', () => {
    const result = validateContactForm({
      ...contactBase,
      heardAbout: HeardAboutSource.FRIEND,
      heardAboutDetail: '  Anna  ',
      attributionChannel: Channel.GOOGLE,
      attributionCampaign: 'spring',
    })
    expect(result.success).toBe(true)
    expect(result.data).toMatchObject({
      heardAbout: HeardAboutSource.FRIEND,
      heardAboutDetail: 'Anna',
      attributionChannel: Channel.GOOGLE,
      attributionCampaign: 'spring',
    })
  })

  it('accepts the fields on the booking form too', () => {
    const result = validateBookingForm({ ...bookingBase, heardAbout: HeardAboutSource.RETURNING })
    expect(result.success).toBe(true)
    expect(result.data?.heardAbout).toBe(HeardAboutSource.RETURNING)
  })

  it('drops bad values instead of rejecting the message', () => {
    const result = validateContactForm({
      ...contactBase,
      heardAbout: 'tiktok',
      heardAboutDetail: 42,
      attributionChannel: 'carrier-pigeon',
    })
    expect(result.success).toBe(true)
    expect(result.data?.heardAbout).toBeUndefined()
    expect(result.data?.heardAboutDetail).toBeUndefined()
    expect(result.data?.attributionChannel).toBeUndefined()
  })

  it('truncates an over-long detail and turns blank text into undefined', () => {
    const long = validateContactForm({ ...contactBase, heardAboutDetail: 'x'.repeat(HEARD_ABOUT_DETAIL_MAX + 50) })
    expect(long.data?.heardAboutDetail).toHaveLength(HEARD_ABOUT_DETAIL_MAX)

    const blank = validateContactForm({ ...contactBase, heardAboutDetail: '   ' })
    expect(blank.data?.heardAboutDetail).toBeUndefined()
  })

  it('flattens line breaks so a field cannot fake an extra row', () => {
    const result = validateContactForm({ ...contactBase, attributionCampaign: 'spring\nHeard about us: fake' })
    expect(result.data?.attributionCampaign).toBe('spring Heard about us: fake')
  })
})
