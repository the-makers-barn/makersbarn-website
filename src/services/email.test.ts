import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { Channel } from '@/constants'
import { HeardAboutSource } from '@/types'

import { sendBookingEmail, sendEmail } from './email'

interface PostmarkMessage {
  To: string
  HtmlBody: string
  TextBody: string
}

const ADMIN_EMAIL = 'admin@example.com'
const VISITOR_EMAIL = 'ada@example.com'
const SOURCE_LABELS = ['Heard about us', 'Landing channel']

const { sendEmailMock } = vi.hoisted(() => ({
  sendEmailMock: vi.fn((_message: PostmarkMessage) => Promise.resolve({ ErrorCode: 0, MessageID: 'mock' })),
}))

vi.mock('postmark', () => ({
  ServerClient: vi.fn(() => ({ sendEmail: sendEmailMock })),
}))

vi.mock('next/cache', () => ({ revalidatePath: vi.fn() }))

const source = {
  heardAbout: HeardAboutSource.FRIEND,
  heardAboutDetail: 'Anna',
  attributionChannel: Channel.GOOGLE,
}

function sentTo(recipient: string): PostmarkMessage {
  const message = sendEmailMock.mock.calls.map(([call]) => call).find((call) => call.To === recipient)
  if (!message) {
    throw new Error(`no email sent to ${recipient}`)
  }
  return message
}

function expectSourceOnlyForAdmin(): void {
  const admin = sentTo(ADMIN_EMAIL)
  const visitor = sentTo(VISITOR_EMAIL)
  for (const label of SOURCE_LABELS) {
    expect(admin.HtmlBody).toContain(label)
    expect(admin.TextBody).toContain(label)
    expect(visitor.HtmlBody).not.toContain(label)
    expect(visitor.TextBody).not.toContain(label)
  }
}

describe('submission source in emails', () => {
  beforeAll(() => {
    vi.stubEnv('POSTMARKAPP_API_TOKEN', 'test-token')
    vi.stubEnv('POSTMARK_SENDER_EMAIL', 'sender@example.com')
    vi.stubEnv('POSTMARK_ADMIN_EMAIL', ADMIN_EMAIL)
  })

  afterAll(() => {
    vi.unstubAllEnvs()
  })

  beforeEach(() => {
    sendEmailMock.mockClear()
  })

  it('shows the source to the admin but not in the contact confirmation', async () => {
    await sendEmail({ name: 'Ada', email: VISITOR_EMAIL, phone: undefined, message: 'hello', ...source })
    expectSourceOnlyForAdmin()
  })

  it('shows the source to the admin but not in the booking confirmation', async () => {
    await sendBookingEmail({ name: 'Ada', email: VISITOR_EMAIL, flexibleDates: false, cateringNeeded: false, ...source })
    expectSourceOnlyForAdmin()
  })
})
