import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { CALENDAR_MILESTONE_IDS } from '@/data/tools'
import {
  CALENDAR_RATE_LIMIT_EMAIL,
  CALENDAR_RATE_LIMIT_GLOBAL,
  CALENDAR_RATE_LIMIT_IP,
  CalendarPhaseId,
  MilestoneStatus,
  TimelinePreset,
} from '@/constants/tools'
import type { EmailCalendarPlanInput } from '@/types/tools'

const POSTMARK_API_TOKEN_ENV = 'POSTMARKAPP_API_TOKEN'
const POSTMARK_SENDER_ENV = 'POSTMARK_SENDER_EMAIL'
const POSTMARK_ADMIN_ENV = 'POSTMARK_ADMIN_EMAIL'

const MOCK_API_TOKEN = 'mock-api-token'
const MOCK_SENDER_EMAIL = 'sender@themakersbarn.com'
const MOCK_ADMIN_EMAIL = 'admin@themakersbarn.com'
const MOCK_CLIENT_IP = '203.0.113.42'
const MOCK_CLIENT_IP_ALT = '203.0.113.43'

interface PostmarkMessage {
  From: string
  To: string
  Subject: string
  HtmlBody: string
  TextBody?: string
  MessageStream?: string
}

interface PostmarkResponse {
  ErrorCode: number
  MessageID: string
}

const sendEmailMock = vi.fn<(message: PostmarkMessage) => Promise<PostmarkResponse>>(
  () => Promise.resolve({ ErrorCode: 0, MessageID: 'mock' }),
)

vi.mock('postmark', () => ({
  ServerClient: vi.fn(() => ({ sendEmail: sendEmailMock })),
  Client: vi.fn(() => ({ sendEmail: sendEmailMock })),
}))

interface SlackArgs {
  channel: string
  message: string
}

const sendSlackMessageMock = vi.fn<(args: SlackArgs) => Promise<{ success: boolean }>>(
  () => Promise.resolve({ success: true }),
)

vi.mock('@/services/slack', () => ({
  sendSlackMessage: sendSlackMessageMock,
  SlackChannel: { USER_CONTACTS: '#user-contacts' },
  escapeSlackMarkdown: (text: string) => text,
}))

const getClientIdentifierMock = vi.fn<() => Promise<string>>(() =>
  Promise.resolve(MOCK_CLIENT_IP),
)

vi.mock('@/lib', async () => {
  const actual = await vi.importActual<typeof import('@/lib')>('@/lib')
  return {
    ...actual,
    getClientIdentifier: () => getClientIdentifierMock(),
  }
})

vi.mock('@/i18n', async () => {
  const actual = await vi.importActual<typeof import('@/i18n')>('@/i18n')
  return {
    ...actual,
    getServerLanguage: vi.fn(() => Promise.resolve('en')),
    getServerTranslations: vi.fn(() => Promise.resolve(actual.getDictionary('en' as never))),
  }
})

const validPayload: EmailCalendarPlanInput = {
  email: 'host@example.com',
  preset: TimelinePreset.TWELVE_MONTHS,
  itemStates: { [CALENDAR_MILESTONE_IDS.P1_VISION]: MilestoneStatus.DONE },
  customItems: [
    {
      phaseId: CalendarPhaseId.FOUNDATION,
      text: 'Reach out to bookkeeper',
      status: MilestoneStatus.DONE,
    },
  ],
  contactConsent: true,
}

async function loadAction() {
  const mod = await import('./emailCalendarPlan')
  return mod.emailCalendarPlan
}

beforeEach(() => {
  vi.resetModules()
  sendEmailMock.mockClear()
  sendSlackMessageMock.mockClear()
  getClientIdentifierMock.mockReset()
  getClientIdentifierMock.mockResolvedValue(MOCK_CLIENT_IP)
  vi.stubEnv(POSTMARK_API_TOKEN_ENV, MOCK_API_TOKEN)
  vi.stubEnv(POSTMARK_SENDER_ENV, MOCK_SENDER_EMAIL)
  vi.stubEnv(POSTMARK_ADMIN_ENV, MOCK_ADMIN_EMAIL)
})

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('emailCalendarPlan validation and filtering', () => {
  it('returns ok: true for a valid payload and sends both user and admin emails', async () => {
    const emailCalendarPlan = await loadAction()
    const result = await emailCalendarPlan(validPayload)
    expect(result.ok).toBe(true)
    expect(sendEmailMock).toHaveBeenCalledTimes(2)
    const [userCall, adminCall] = sendEmailMock.mock.calls
    expect(userCall[0].To).toBe(validPayload.email)
    expect(adminCall[0].To).toBe(MOCK_ADMIN_EMAIL)
  })

  it('returns invalid_email for malformed email', async () => {
    const emailCalendarPlan = await loadAction()
    const result = await emailCalendarPlan({ ...validPayload, email: 'not-an-email' })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('invalid_email')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('returns invalid_email for CR/LF in email (header injection guard)', async () => {
    const emailCalendarPlan = await loadAction()
    const result = await emailCalendarPlan({
      ...validPayload,
      email: 'a@b.com\r\nBcc: c@d.com',
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('invalid_email')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('returns validation for unknown milestone IDs', async () => {
    const emailCalendarPlan = await loadAction()
    const result = await emailCalendarPlan({
      ...validPayload,
      itemStates: { 'p1-not-real': MilestoneStatus.DONE },
    } as never)
    expect(result.ok).toBe(false)
    expect(result.error).toBe('validation')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('returns validation when payload exceeds the size cap', async () => {
    const emailCalendarPlan = await loadAction()
    const oversizedText = 'x'.repeat(120) // each item ~120-byte text
    const customItems = Array.from({ length: 120 }, () => ({
      phaseId: CalendarPhaseId.FOUNDATION,
      text: oversizedText,
      status: MilestoneStatus.DONE as const,
    }))
    // Pad with a giant unknown field to push raw JSON size > 100KB
    const result = await emailCalendarPlan({
      ...validPayload,
      customItems,
      // @ts-expect-error - intentionally oversized junk to trip the size cap
      junk: 'y'.repeat(100_001),
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('validation')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('drops custom items whose phaseId is removed by the preset', async () => {
    const emailCalendarPlan = await loadAction()
    const result = await emailCalendarPlan({
      ...validPayload,
      preset: TimelinePreset.THREE_MONTHS,
      customItems: [
        {
          phaseId: CalendarPhaseId.FOUNDATION,
          text: 'orphan-foundation-item',
          status: MilestoneStatus.DONE,
        },
        {
          phaseId: CalendarPhaseId.LAUNCH,
          text: 'kept-launch-item',
          status: MilestoneStatus.DONE,
        },
      ],
    })
    expect(result.ok).toBe(true)
    const userHtml = sendEmailMock.mock.calls[0][0].HtmlBody
    expect(userHtml).toContain('kept-launch-item')
    expect(userHtml).not.toContain('orphan-foundation-item')
  })

})

describe('emailCalendarPlan rate limiting and security', () => {
  it('returns rate_limit when the IP rate limit is exceeded', async () => {
    const emailCalendarPlan = await loadAction()
    // Fire MAX_REQUESTS allowed calls from same IP, then one more.
    for (let i = 0; i < CALENDAR_RATE_LIMIT_IP.MAX_REQUESTS; i += 1) {
      // alternate emails so per-email limit doesn't trip first
      const result = await emailCalendarPlan({
        ...validPayload,
        email: `host${i}@example.com`,
      })
      expect(result.ok).toBe(true)
    }
    const result = await emailCalendarPlan({
      ...validPayload,
      email: 'extra@example.com',
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('rate_limit')
  })

  it('returns rate_limit when the per-email rate limit is exceeded', async () => {
    const emailCalendarPlan = await loadAction()
    // Use distinct IPs so IP limit stays clean.
    const distinctIps = Array.from(
      { length: CALENDAR_RATE_LIMIT_EMAIL.MAX_REQUESTS + 1 },
      (_, i) => `203.0.113.${10 + i}`,
    )
    for (let i = 0; i < CALENDAR_RATE_LIMIT_EMAIL.MAX_REQUESTS; i += 1) {
      getClientIdentifierMock.mockResolvedValueOnce(distinctIps[i])
      const result = await emailCalendarPlan(validPayload)
      expect(result.ok).toBe(true)
    }
    getClientIdentifierMock.mockResolvedValueOnce(
      distinctIps[CALENDAR_RATE_LIMIT_EMAIL.MAX_REQUESTS],
    )
    const result = await emailCalendarPlan(validPayload)
    expect(result.ok).toBe(false)
    expect(result.error).toBe('rate_limit')
  })

  it('returns rate_limit when the global circuit breaker trips', async () => {
    const emailCalendarPlan = await loadAction()
    // The global limit is 200/hour. Use distinct IPs and emails to isolate
    // the global bucket.
    for (let i = 0; i < CALENDAR_RATE_LIMIT_GLOBAL.MAX_REQUESTS; i += 1) {
      getClientIdentifierMock.mockResolvedValueOnce(`198.51.100.${(i % 250) + 1}`)
      const result = await emailCalendarPlan({
        ...validPayload,
        email: `globaltest${i}@example.com`,
      })
      expect(result.ok).toBe(true)
    }
    getClientIdentifierMock.mockResolvedValueOnce(MOCK_CLIENT_IP_ALT)
    const result = await emailCalendarPlan({
      ...validPayload,
      email: 'tripping@example.com',
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('rate_limit')
  })

  it('returns send_failed when Postmark throws', async () => {
    sendEmailMock.mockRejectedValueOnce(new Error('postmark down'))
    const emailCalendarPlan = await loadAction()
    const result = await emailCalendarPlan(validPayload)
    expect(result.ok).toBe(false)
    expect(result.error).toBe('send_failed')
  })

  it('passes only the masked email to Slack (no raw email leak)', async () => {
    const emailCalendarPlan = await loadAction()
    const result = await emailCalendarPlan(validPayload)
    expect(result.ok).toBe(true)
    expect(sendSlackMessageMock).toHaveBeenCalledTimes(1)
    const slackArg = sendSlackMessageMock.mock.calls[0][0]
    const slackPayload = JSON.stringify(slackArg)
    expect(slackPayload).not.toContain(validPayload.email)
  })

  it('omits the raw user email from the admin email subject', async () => {
    const emailCalendarPlan = await loadAction()
    const result = await emailCalendarPlan(validPayload)
    expect(result.ok).toBe(true)
    const adminCall = sendEmailMock.mock.calls[1]
    expect(adminCall[0].Subject).not.toContain(validPayload.email)
  })
})
