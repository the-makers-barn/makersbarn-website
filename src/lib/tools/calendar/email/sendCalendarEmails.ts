import * as postmark from 'postmark'

import {
  CALENDAR_ROUTE_BY_PRESET,
  MilestoneStatus,
} from '@/constants/tools'
import { CALENDAR_CONTENT, type ValidatedEmailCalendarPlanInput } from '@/data/tools'
import { getServerTranslations } from '@/i18n'
import { createLogger, escapeHtml, maskEmail } from '@/lib'
import { getLocalizedPath } from '@/lib/routing'
import { resolvePhases } from '@/lib/tools/calendar/presets'
import type { Language } from '@/types/common'
import type { CustomMilestone } from '@/types/tools'

import { composeEmailHtml } from './compose'

const logger = createLogger('calendar-email-sender')

const MESSAGE_STREAM_OUTBOUND = 'outbound'
const POSTMARK_OK_ERROR_CODE = 0
const SITE_BASE_URL = 'https://www.themakersbarn.com'
const ADMIN_EMAIL_SEPARATOR = ','
const MONTHS_PLACEHOLDER = '{months}'

export type SendCalendarEmailsOutcome =
  | { ok: true }
  | { ok: false; reason: 'not_configured' | 'send_failed' }

export interface SendCalendarEmailsInput {
  data: ValidatedEmailCalendarPlanInput
  customItemsForRender: CustomMilestone[]
  locale: Language
}

export async function sendCalendarEmails(
  input: SendCalendarEmailsInput,
): Promise<SendCalendarEmailsOutcome> {
  const apiToken = process.env.POSTMARKAPP_API_TOKEN
  const senderEmail = process.env.POSTMARK_SENDER_EMAIL
  if (!apiToken || !senderEmail) {
    logger.error('Postmark not configured for calendar email')
    return { ok: false, reason: 'not_configured' }
  }

  try {
    const client = new postmark.ServerClient(apiToken)
    const userOk = await sendUserEmail(client, senderEmail, input)
    if (!userOk) {
      return { ok: false, reason: 'send_failed' }
    }
    await sendAdminEmail(client, senderEmail, input)
    return { ok: true }
  } catch (error) {
    logger.error(
      'Postmark send failed for calendar plan',
      { masked: maskEmail(input.data.email) },
      error,
    )
    return { ok: false, reason: 'send_failed' }
  }
}

async function sendUserEmail(
  client: postmark.ServerClient,
  senderEmail: string,
  input: SendCalendarEmailsInput,
): Promise<boolean> {
  const { data, customItemsForRender, locale } = input
  const phases = resolvePhases(CALENDAR_CONTENT, data.preset)
  const t = await getServerTranslations(locale)
  const monthsValue = String(data.preset)
  const subject = t.tools.calendar.email.subject.replaceAll(MONTHS_PLACEHOLDER, monthsValue)
  const greeting = t.tools.calendar.email.greeting.replaceAll(MONTHS_PLACEHOLDER, monthsValue)
  const route = CALENDAR_ROUTE_BY_PRESET[data.preset]
  const backToPlanUrl = `${SITE_BASE_URL}${getLocalizedPath(route, locale)}`

  const userEmailHtml = composeEmailHtml({
    phases,
    itemStates: data.itemStates,
    customItems: customItemsForRender,
    locale,
    preset: data.preset,
    backToPlanUrl,
    copy: {
      greeting,
      intro: t.tools.calendar.email.intro,
      ctaLine: t.tools.calendar.email.backToPlanCta,
      ctaLabel: t.tools.calendar.email.backToPlanLabel,
      signoff: t.tools.calendar.email.signoff,
    },
  })

  const response = await client.sendEmail({
    From: senderEmail,
    To: data.email,
    Subject: subject,
    HtmlBody: userEmailHtml,
    MessageStream: MESSAGE_STREAM_OUTBOUND,
  })
  if (response.ErrorCode && response.ErrorCode !== POSTMARK_OK_ERROR_CODE) {
    logger.error('Postmark error sending user calendar email', {
      masked: maskEmail(data.email),
      errorCode: response.ErrorCode,
    })
    return false
  }
  return true
}

async function sendAdminEmail(
  client: postmark.ServerClient,
  senderEmail: string,
  input: SendCalendarEmailsInput,
): Promise<void> {
  const adminEmailEnv = process.env.POSTMARK_ADMIN_EMAIL
  if (!adminEmailEnv) {
    return
  }
  const adminRecipients = adminEmailEnv
    .split(ADMIN_EMAIL_SEPARATOR)
    .map((address) => address.trim())
    .filter((address) => address.length > 0)
    .join(ADMIN_EMAIL_SEPARATOR)
  if (adminRecipients.length === 0) {
    return
  }
  const monthsValue = String(input.data.preset)
  try {
    const response = await client.sendEmail({
      From: senderEmail,
      To: adminRecipients,
      Subject: `Calendar plan lead · ${monthsValue}-month`,
      HtmlBody: buildAdminEmailHtml(input),
      MessageStream: MESSAGE_STREAM_OUTBOUND,
    })
    if (response.ErrorCode && response.ErrorCode !== POSTMARK_OK_ERROR_CODE) {
      logger.warn('Admin calendar lead email failed (non-fatal)', {
        errorCode: response.ErrorCode,
      })
    }
  } catch (error) {
    logger.warn('Admin calendar lead email failed unexpectedly (non-fatal)', { error })
  }
}

function countByStatus(
  states: ValidatedEmailCalendarPlanInput['itemStates'],
  target: MilestoneStatus,
): number {
  return Object.values(states).filter((status) => status === target).length
}

function buildAdminEmailHtml(input: SendCalendarEmailsInput): string {
  const { data, customItemsForRender, locale } = input
  const completedCount = countByStatus(data.itemStates, MilestoneStatus.DONE)
  const dismissedCount = countByStatus(data.itemStates, MilestoneStatus.DISMISSED)
  return `
    <h2>New calendar plan lead</h2>
    <ul>
      <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
      <li><strong>Preset:</strong> ${escapeHtml(String(data.preset))}-month</li>
      <li><strong>Locale:</strong> ${escapeHtml(locale)}</li>
      <li><strong>Done items:</strong> ${completedCount}</li>
      <li><strong>Dismissed items:</strong> ${dismissedCount}</li>
      <li><strong>Custom items:</strong> ${customItemsForRender.length}</li>
      <li><strong>Contact consent:</strong> ${data.contactConsent ? 'yes' : 'no'}</li>
    </ul>
    <p>Consider following up within 24-48 hours if they look like a strong fit.</p>
  `
}
