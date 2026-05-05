import { describe, expect, it } from 'vitest'

import { CHEF_INQUIRY_LIMITS } from '@/constants/chef'

import { chefInquirySchema } from './inquirySchema'

const validInput = {
  name: 'Anna Visser',
  email: 'anna@example.com',
  dates: '5–9 May 2026',
  groupSize: 12,
  location: 'MakersBarn, Overijssel',
  dietary: '3 vegan, 1 gluten-free',
  message: 'Hi Eveline, looking for a chef for our 5-day yoga retreat in May. Group of 12.',
  honeypot: '',
  consent: true,
}

describe('chefInquirySchema', () => {
  it('accepts a complete valid payload', () => {
    expect(chefInquirySchema.safeParse(validInput).success).toBe(true)
  })

  it('accepts empty dietary string', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, dietary: '' }).success).toBe(true)
  })

  it('accepts absent dietary key (defaults to empty string)', () => {
    const { dietary: _dietary, ...rest } = validInput
    const parsed = chefInquirySchema.safeParse(rest)
    expect(parsed.success).toBe(true)
    if (parsed.success) {
      expect(parsed.data.dietary).toBe('')
    }
  })

  it('rejects whitespace-only name (trimmed to empty)', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, name: '   ' }).success).toBe(false)
  })

  it('rejects missing name', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, name: '' }).success).toBe(false)
  })

  it('rejects malformed email', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, email: 'not-an-email' }).success).toBe(false)
  })

  it('rejects email with CR/LF (header injection guard)', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, email: 'evil@x.com\r\nBcc: a@b.com' }).success).toBe(false)
  })

  it('rejects name with CR/LF (header injection guard)', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, name: 'evil\r\nBcc: a@b.com' }).success).toBe(false)
  })

  it('rejects group size below minimum', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, groupSize: CHEF_INQUIRY_LIMITS.GROUP_SIZE_MIN - 1 }).success).toBe(false)
  })

  it('rejects group size above maximum', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, groupSize: CHEF_INQUIRY_LIMITS.GROUP_SIZE_MAX + 1 }).success).toBe(false)
  })

  it('rejects message shorter than minimum', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, message: 'too short' }).success).toBe(false)
  })

  it('rejects message longer than maximum', () => {
    const overlong = 'x'.repeat(CHEF_INQUIRY_LIMITS.MESSAGE_MAX + 1)
    expect(chefInquirySchema.safeParse({ ...validInput, message: overlong }).success).toBe(false)
  })

  it('rejects when consent is false', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, consent: false }).success).toBe(false)
  })

  it('parses honeypot field but does not reject when filled (action handles it)', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, honeypot: 'spam' }).success).toBe(true)
  })
})
