import { describe, expect, it } from 'vitest'

import { Channel } from '@/constants'
import { ContactIntent, HeardAboutSource } from '@/types'

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

describe('submission source lines', () => {
  const contact = { name: 'Ada', email: 'ada@example.com', phone: undefined, message: 'hello' } as const

  it('shows the answer with its detail and the landing channel with its campaign', () => {
    const out = formatContactFormMessage({
      ...contact,
      heardAbout: HeardAboutSource.FRIEND,
      heardAboutDetail: 'Anna',
      attributionChannel: Channel.META_ORGANIC,
      attributionCampaign: 'spring',
    })
    expect(out).toContain('*Heard about us:* Friend or colleague: Anna')
    expect(out).toContain('*Landing channel:* meta\\_organic (campaign: spring)')
  })

  it('omits both lines when nothing is known', () => {
    const out = formatContactFormMessage(contact)
    expect(out).not.toContain('Heard about us')
    expect(out).not.toContain('Landing channel')
  })

  it('adds the lines to booking requests', () => {
    const out = formatBookingFormMessage({
      name: 'Ada',
      email: 'ada@example.com',
      flexibleDates: false,
      cateringNeeded: false,
      heardAbout: HeardAboutSource.GOOGLE,
      attributionChannel: Channel.GOOGLE,
    })
    expect(out).toContain('*Heard about us:* Google search')
    expect(out).toContain('*Landing channel:* google')
  })
})
