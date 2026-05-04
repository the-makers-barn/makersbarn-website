import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { CHEF_INQUIRY_MESSAGES, CHEF_INQUIRY_RATE_LIMIT } from '@/constants/chef'
import { sendChefInquiryEmails } from '@/services/email'
import { sendSlackMessage } from '@/services/slack'
import { Language } from '@/types'

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
    vi.resetModules()
    vi.mocked(sendChefInquiryEmails).mockResolvedValue({ success: true })
    vi.mocked(sendSlackMessage).mockResolvedValue({ success: true })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('happy path: sends email to chef and notifies Slack', async () => {
    const { sendChefInquiry } = await import('./sendChefInquiry')
    const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
    expect(result.success).toBe(true)
    expect(sendChefInquiryEmails).toHaveBeenCalledOnce()
    expect(sendSlackMessage).toHaveBeenCalledOnce()
  })

  it('rate-limit hit: returns rate_limited and does not call Postmark or Slack', async () => {
    const { sendChefInquiry } = await import('./sendChefInquiry')
    // Consume MAX_REQUESTS slots, then the next call should hit the limit.
    for (let i = 0; i < CHEF_INQUIRY_RATE_LIMIT.MAX_REQUESTS; i++) {
      await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
    }
    vi.mocked(sendChefInquiryEmails).mockClear()
    vi.mocked(sendSlackMessage).mockClear()

    const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
    expect(result.success).toBe(false)
    expect(result.message).toBe(CHEF_INQUIRY_MESSAGES.RATE_LIMITED)
    expect(sendChefInquiryEmails).not.toHaveBeenCalled()
    expect(sendSlackMessage).not.toHaveBeenCalled()
  })

  it('unknown chef slug: returns chef_not_found and does not call Postmark or Slack', async () => {
    const { sendChefInquiry } = await import('./sendChefInquiry')
    const result = await sendChefInquiry('definitely-not-a-real-chef', buildFormData())
    expect(result.success).toBe(false)
    expect(result.message).toBe(CHEF_INQUIRY_MESSAGES.CHEF_NOT_FOUND)
    expect(sendChefInquiryEmails).not.toHaveBeenCalled()
    expect(sendSlackMessage).not.toHaveBeenCalled()
  })

  it('draft chef in production: still accepts inquiry (drafts are reachable by direct link)', async () => {
    const ORIGINAL = process.env.VERCEL_ENV
    process.env.VERCEL_ENV = 'production'
    try {
      const { sendChefInquiry } = await import('./sendChefInquiry')
      // Liesbeth is DRAFT — drafts must remain reachable by direct URL in every
      // environment so the chef can review their profile during onboarding.
      const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
      expect(result.success).toBe(true)
      expect(sendChefInquiryEmails).toHaveBeenCalledOnce()
      expect(sendSlackMessage).toHaveBeenCalledOnce()
    } finally {
      if (ORIGINAL === undefined) {
        delete process.env.VERCEL_ENV
      } else {
        process.env.VERCEL_ENV = ORIGINAL
      }
    }
  })

  it('honeypot triggered: returns silent success and does not call Postmark or Slack', async () => {
    const { sendChefInquiry } = await import('./sendChefInquiry')
    const result = await sendChefInquiry(
      'liesbeth-van-der-velden',
      buildFormData({ honeypot: 'spammer' })
    )
    expect(result.success).toBe(true)
    expect(sendChefInquiryEmails).not.toHaveBeenCalled()
    expect(sendSlackMessage).not.toHaveBeenCalled()
  })

  it('validation error: returns errors map and does not call Postmark or Slack', async () => {
    const { sendChefInquiry } = await import('./sendChefInquiry')
    const result = await sendChefInquiry(
      'liesbeth-van-der-velden',
      buildFormData({ email: 'not-an-email' })
    )
    expect(result.success).toBe(false)
    expect(result.message).toBe(CHEF_INQUIRY_MESSAGES.VALIDATION)
    expect(result.errors).toBeDefined()
    expect(result.errors?.email).toBeDefined()
    expect(sendChefInquiryEmails).not.toHaveBeenCalled()
    expect(sendSlackMessage).not.toHaveBeenCalled()
  })

  it('Postmark failure: returns email_failed but Slack was still notified', async () => {
    const { sendChefInquiry } = await import('./sendChefInquiry')
    vi.mocked(sendChefInquiryEmails).mockResolvedValueOnce({
      success: false,
      error: 'postmark exploded',
    })
    const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
    expect(result.success).toBe(false)
    expect(result.message).toBe(CHEF_INQUIRY_MESSAGES.EMAIL_FAILED)
    // Slack was called BEFORE the email attempt (per the action's order)
    expect(sendSlackMessage).toHaveBeenCalledOnce()
  })
})
