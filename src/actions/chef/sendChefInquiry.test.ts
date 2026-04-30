import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Language } from '@/types'
import { sendChefInquiryEmails } from '@/services/email'
import { sendSlackMessage } from '@/services/slack'

import { sendChefInquiry } from './sendChefInquiry'

vi.mock('@/services/email', () => ({
  sendChefInquiryEmails: vi.fn(),
}))
vi.mock('@/services/slack', () => ({
  sendSlackMessage: vi.fn(),
  formatChefInquirySlackMessage: vi.fn().mockReturnValue('mocked-slack-text'),
  SlackChannel: { USER_CONTACTS: 'user-contacts' },
}))
vi.mock('@/lib', async () => {
  const actual = await vi.importActual<typeof import('@/lib')>('@/lib')
  return {
    ...actual,
    getClientIdentifier: vi.fn().mockResolvedValue('test-client-1'),
  }
})

const buildFormData = (overrides: Record<string, string> = {}): FormData => {
  const fd = new FormData()
  fd.set('name', 'Anna Visser')
  fd.set('email', 'anna@example.com')
  fd.set('dates', '5–9 May 2026')
  fd.set('groupSize', '12')
  fd.set('location', 'MakersBarn, Overijssel')
  fd.set('dietary', '3 vegan, 1 gluten-free')
  fd.set(
    'message',
    'Hi Liesbeth, looking for a chef for our 5-day yoga retreat in May. Group of 12.'
  )
  fd.set('honeypot', '')
  fd.set('consent', 'true')
  fd.set('locale', Language.EN)
  for (const [k, v] of Object.entries(overrides)) {
    fd.set(k, v)
  }
  return fd
}

describe('sendChefInquiry', () => {
  beforeEach(() => {
    vi.mocked(sendChefInquiryEmails).mockResolvedValue({ success: true })
    vi.mocked(sendSlackMessage).mockResolvedValue({ success: true })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('happy path: sends email to chef and notifies Slack', async () => {
    const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
    expect(result.success).toBe(true)
    expect(sendChefInquiryEmails).toHaveBeenCalledOnce()
    expect(sendSlackMessage).toHaveBeenCalledOnce()
  })
})
