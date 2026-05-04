import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  AGENDA_RATE_LIMIT_EMAIL,
  AGENDA_RATE_LIMIT_GLOBAL,
  AGENDA_RATE_LIMIT_IP,
  AgendaBlockType,
  AgendaLength,
  AgendaNiche,
} from '@/constants/tools'
import type { EmailAgendaPlanInput } from '@/types/tools'

const POSTMARK_API_TOKEN_ENV = 'POSTMARKAPP_API_TOKEN'
const POSTMARK_SENDER_ENV = 'POSTMARK_SENDER_EMAIL'
const POSTMARK_ADMIN_ENV = 'POSTMARK_ADMIN_EMAIL'

const MOCK_API_TOKEN = 'mock-api-token'
const MOCK_SENDER_EMAIL = 'sender@themakersbarn.com'
const MOCK_ADMIN_EMAIL = 'admin@themakersbarn.com'
const MOCK_CLIENT_IP = '203.0.113.42'

interface PostmarkMessage {
  From: string
  To: string
  Subject: string
  HtmlBody: string
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

const validPayload: EmailAgendaPlanInput = {
  email: 'host@example.com',
  niche: AgendaNiche.YOGA,
  length: AgendaLength.THREE_DAY,
  hiddenBlockIds: [],
  blockOverrides: [],
  customBlocks: [
    {
      dayIndex: 2,
      type: AgendaBlockType.WORKSHOP,
      startMinute: 11 * 60,
      durationMinute: 60,
      title: 'Pranayama deep-dive',
      notes: '',
    },
  ],
  contactConsent: true,
}

async function loadAction() {
  const mod = await import('./emailAgendaPlan')
  return mod.emailAgendaPlan
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

describe('emailAgendaPlan validation', () => {
  it('returns ok: true for a valid payload and sends both user and admin emails', async () => {
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan(validPayload)
    expect(result.ok).toBe(true)
    expect(sendEmailMock).toHaveBeenCalledTimes(2)
    const [userCall, adminCall] = sendEmailMock.mock.calls
    expect(userCall[0].To).toBe(validPayload.email)
    expect(adminCall[0].To).toBe(MOCK_ADMIN_EMAIL)
  })

  it('returns invalid_email for malformed email', async () => {
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan({ ...validPayload, email: 'not-an-email' })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('invalid_email')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('returns invalid_email for CR/LF in email (header injection guard)', async () => {
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan({
      ...validPayload,
      email: 'a@b.com\r\nBcc: c@d.com',
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('invalid_email')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('returns validation for unknown block IDs in hiddenBlockIds', async () => {
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan({
      ...validPayload,
      hiddenBlockIds: ['nope-not-a-real-id'],
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('validation')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('returns validation when payload exceeds the size cap', async () => {
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan({
      ...validPayload,
      // @ts-expect-error - intentionally oversized junk to trip the size cap
      junk: 'y'.repeat(200_001),
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('validation')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('renders custom blocks into the user email body', async () => {
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan(validPayload)
    expect(result.ok).toBe(true)
    const userHtml = sendEmailMock.mock.calls[0][0].HtmlBody
    expect(userHtml).toContain('Pranayama deep-dive')
  })
})

describe('emailAgendaPlan rate limiting and security', () => {
  it('returns rate_limit when the IP rate limit is exceeded', async () => {
    const emailAgendaPlan = await loadAction()
    for (let i = 0; i < AGENDA_RATE_LIMIT_IP.MAX_REQUESTS; i += 1) {
      const result = await emailAgendaPlan({
        ...validPayload,
        email: `host${i}@example.com`,
      })
      expect(result.ok).toBe(true)
    }
    const sendCallsBefore = sendEmailMock.mock.calls.length
    const slackCallsBefore = sendSlackMessageMock.mock.calls.length
    const result = await emailAgendaPlan({
      ...validPayload,
      email: 'extra@example.com',
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('rate_limit')
    expect(sendEmailMock.mock.calls.length).toBe(sendCallsBefore)
    expect(sendSlackMessageMock.mock.calls.length).toBe(slackCallsBefore)
  })

  it('returns rate_limit when the per-email rate limit is exceeded', async () => {
    const emailAgendaPlan = await loadAction()
    const distinctIps = Array.from(
      { length: AGENDA_RATE_LIMIT_EMAIL.MAX_REQUESTS + 1 },
      (_, i) => `203.0.113.${10 + i}`,
    )
    for (let i = 0; i < AGENDA_RATE_LIMIT_EMAIL.MAX_REQUESTS; i += 1) {
      getClientIdentifierMock.mockResolvedValueOnce(distinctIps[i])
      const result = await emailAgendaPlan(validPayload)
      expect(result.ok).toBe(true)
    }
    getClientIdentifierMock.mockResolvedValueOnce(
      distinctIps[AGENDA_RATE_LIMIT_EMAIL.MAX_REQUESTS],
    )
    const result = await emailAgendaPlan(validPayload)
    expect(result.ok).toBe(false)
    expect(result.error).toBe('rate_limit')
  })

  it('returns rate_limit when the global circuit breaker trips', async () => {
    const emailAgendaPlan = await loadAction()
    for (let i = 0; i < AGENDA_RATE_LIMIT_GLOBAL.MAX_REQUESTS; i += 1) {
      getClientIdentifierMock.mockResolvedValueOnce(`198.51.100.${(i % 250) + 1}`)
      const result = await emailAgendaPlan({
        ...validPayload,
        email: `globaltest${i}@example.com`,
      })
      expect(result.ok).toBe(true)
    }
    getClientIdentifierMock.mockResolvedValueOnce('198.51.100.99')
    const result = await emailAgendaPlan({
      ...validPayload,
      email: 'tripping@example.com',
    })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('rate_limit')
  })

  it('returns send_failed when Postmark throws', async () => {
    sendEmailMock.mockRejectedValueOnce(new Error('postmark down'))
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan(validPayload)
    expect(result.ok).toBe(false)
    expect(result.error).toBe('send_failed')
  })

  it('passes only the masked email to Slack (no raw email leak)', async () => {
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan(validPayload)
    expect(result.ok).toBe(true)
    expect(sendSlackMessageMock).toHaveBeenCalledTimes(1)
    const slackArg = sendSlackMessageMock.mock.calls[0][0]
    const slackPayload = JSON.stringify(slackArg)
    expect(slackPayload).not.toContain(validPayload.email)
  })

  it('omits the raw user email from the admin email subject', async () => {
    const emailAgendaPlan = await loadAction()
    const result = await emailAgendaPlan(validPayload)
    expect(result.ok).toBe(true)
    const adminCall = sendEmailMock.mock.calls[1]
    expect(adminCall[0].Subject).not.toContain(validPayload.email)
  })

  it('does not call sendEmail when validation fails (saves Postmark quota)', async () => {
    const emailAgendaPlan = await loadAction()
    await emailAgendaPlan({ ...validPayload, email: 'broken' })
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(sendSlackMessageMock).not.toHaveBeenCalled()
  })
})
