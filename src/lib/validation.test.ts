import { describe, expect, it } from 'vitest'

import { ContactIntent, ReferralSource } from '@/types'

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

describe('validateBookingForm — referralSource field', () => {
  const base = { name: 'Ada', email: 'ada@example.com' }

  it('accepts a valid ReferralSource', () => {
    const result = validateBookingForm({ ...base, referralSource: ReferralSource.WORD_OF_MOUTH })
    expect(result.success).toBe(true)
    expect(result.data?.referralSource).toBe(ReferralSource.WORD_OF_MOUTH)
  })

  it('treats an unanswered question as undefined', () => {
    const result = validateBookingForm({ ...base, referralSource: '', referralSourceOther: '' })
    expect(result.success).toBe(true)
    expect(result.data?.referralSource).toBeUndefined()
    expect(result.data?.referralSourceOther).toBeUndefined()
  })

  it('keeps the free-text detail for the "other" option', () => {
    const result = validateBookingForm({
      ...base,
      referralSource: ReferralSource.OTHER,
      referralSourceOther: 'A podcast',
    })
    expect(result.success).toBe(true)
    expect(result.data?.referralSourceOther).toBe('A podcast')
  })

  it('rejects an unknown referral source value', () => {
    const result = validateBookingForm({ ...base, referralSource: 'carrier-pigeon' })
    expect(result.success).toBe(false)
  })
})
