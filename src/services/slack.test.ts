import { describe, expect, it } from 'vitest'

import { ContactIntent, ReferralSource } from '@/types'

import { formatBookingFormMessage, formatContactFormMessage } from './slack'

describe('formatContactFormMessage', () => {
  const base = { name: 'Ada', email: 'ada@example.com', phone: undefined, message: 'hello' } as const

  it('includes the chef-join source label when source is CHEF_JOIN', () => {
    const out = formatContactFormMessage({ ...base, source: ContactIntent.CHEF_JOIN })
    expect(out).toContain('Chef directory — apply to join')
  })

  it('includes the looking-for-chef source label when source is LOOKING_FOR_CHEF', () => {
    const out = formatContactFormMessage({ ...base, source: ContactIntent.LOOKING_FOR_CHEF })
    expect(out).toContain('Chef directory — looking for a chef')
  })

  it('omits any source line when source is undefined', () => {
    const out = formatContactFormMessage(base)
    expect(out).not.toContain('Chef directory')
  })
})

describe('formatBookingFormMessage — how they found us', () => {
  const base = {
    name: 'Ada',
    email: 'ada@example.com',
    flexibleDates: false,
    cateringNeeded: false,
  } as const

  it('includes the referral source label when answered', () => {
    const out = formatBookingFormMessage({ ...base, referralSource: ReferralSource.SEARCH })
    expect(out).toContain('*How They Found Us:* Google / online search')
  })

  it('includes the free-text detail for the "other" option', () => {
    const out = formatBookingFormMessage({
      ...base,
      referralSource: ReferralSource.OTHER,
      referralSourceOther: 'A podcast',
    })
    expect(out).toContain('*How They Found Us:* Other: A podcast')
  })

  it('omits the line when the question is left unanswered', () => {
    const out = formatBookingFormMessage(base)
    expect(out).not.toContain('How They Found Us')
  })
})
