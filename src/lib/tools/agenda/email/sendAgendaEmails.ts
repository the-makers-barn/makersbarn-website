import * as postmark from 'postmark'

import { AGENDA_NICHE_ROUTES } from '@/constants/tools'
import { type ValidatedEmailAgendaPlanInput } from '@/data/tools'
import { getServerTranslations } from '@/i18n'
import { createLogger, escapeHtml, maskEmail } from '@/lib'
import { getLocalizedPath } from '@/lib/routing'
import type { Language } from '@/types/common'
import type { AgendaResolvedDay } from '@/types/tools'

import { renderAgendaEmailHtml } from './renderAgendaEmail'

const logger = createLogger('agenda-email-sender')

const MESSAGE_STREAM_OUTBOUND = 'outbound'
const POSTMARK_OK_ERROR_CODE = 0
const SITE_BASE_URL = 'https://www.themakersbarn.com'
const ADMIN_EMAIL_SEPARATOR = ','

export type SendAgendaEmailsOutcome =
  | { ok: true }
  | { ok: false; reason: 'not_configured' | 'send_failed' }

export interface SendAgendaEmailsInput {
  data: ValidatedEmailAgendaPlanInput
  resolvedDays: AgendaResolvedDay[]
  locale: Language
}

export async function sendAgendaEmails(
  input: SendAgendaEmailsInput,
): Promise<SendAgendaEmailsOutcome> {
  const apiToken = process.env.POSTMARKAPP_API_TOKEN
  const senderEmail = process.env.POSTMARK_SENDER_EMAIL
  if (!apiToken || !senderEmail) {
    logger.error('Postmark not configured for agenda email')
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
      'Postmark send failed for agenda plan',
      { masked: maskEmail(input.data.email) },
      error,
    )
    return { ok: false, reason: 'send_failed' }
  }
}

async function sendUserEmail(
  client: postmark.ServerClient,
  senderEmail: string,
  input: SendAgendaEmailsInput,
): Promise<boolean> {
  const { data, resolvedDays, locale } = input
  const t = await getServerTranslations(locale)
  const lengthValue = String(data.length)
  const subject = t.tools.agenda.email.subject
    .replaceAll('{length}', lengthValue)
    .replaceAll('{niche}', data.niche)
  const greeting = t.tools.agenda.email.greeting
    .replaceAll('{length}', lengthValue)
    .replaceAll('{niche}', data.niche)
  const route = AGENDA_NICHE_ROUTES[data.niche]
  const ctaUrl = `${SITE_BASE_URL}${getLocalizedPath(route, locale)}`
  const html = renderAgendaEmailHtml({
    niche: data.niche,
    length: data.length,
    days: resolvedDays,
    greeting,
    intro: t.tools.agenda.email.intro,
    ctaLine: t.tools.agenda.email.backToPlanCta,
    ctaUrl,
    ctaLabel: t.tools.agenda.email.backToPlanLabel,
    signoff: t.tools.agenda.email.signoff,
  })

  const response = await client.sendEmail({
    From: senderEmail,
    To: data.email,
    Subject: subject,
    HtmlBody: html,
    MessageStream: MESSAGE_STREAM_OUTBOUND,
  })
  if (response.ErrorCode && response.ErrorCode !== POSTMARK_OK_ERROR_CODE) {
    logger.error('Postmark error sending user agenda email', {
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
  input: SendAgendaEmailsInput,
): Promise<void> {
  const adminEmailEnv = process.env.POSTMARK_ADMIN_EMAIL
  if (!adminEmailEnv) {
    return
  }
  const recipients = adminEmailEnv
    .split(ADMIN_EMAIL_SEPARATOR)
    .map((address) => address.trim())
    .filter((address) => address.length > 0)
    .join(ADMIN_EMAIL_SEPARATOR)
  if (recipients.length === 0) {
    return
  }
  const { data } = input
  try {
    const response = await client.sendEmail({
      From: senderEmail,
      To: recipients,
      Subject: `Agenda plan lead · ${data.niche} · ${data.length}-day`,
      HtmlBody: buildAdminEmailHtml(input),
      MessageStream: MESSAGE_STREAM_OUTBOUND,
    })
    if (response.ErrorCode && response.ErrorCode !== POSTMARK_OK_ERROR_CODE) {
      logger.warn('Admin agenda lead email failed (non-fatal)', {
        errorCode: response.ErrorCode,
      })
    }
  } catch (error) {
    logger.warn('Admin agenda lead email failed unexpectedly (non-fatal)', { error })
  }
}

function buildAdminEmailHtml(input: SendAgendaEmailsInput): string {
  const { data, locale } = input
  return `
    <h2>New agenda plan lead</h2>
    <ul>
      <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
      <li><strong>Niche:</strong> ${escapeHtml(data.niche)}</li>
      <li><strong>Length:</strong> ${escapeHtml(String(data.length))}-day</li>
      <li><strong>Locale:</strong> ${escapeHtml(locale)}</li>
      <li><strong>Hidden defaults:</strong> ${data.hiddenBlockIds.length}</li>
      <li><strong>Edited defaults:</strong> ${data.blockOverrides.length}</li>
      <li><strong>Custom blocks:</strong> ${data.customBlocks.length}</li>
      <li><strong>Contact consent:</strong> ${data.contactConsent ? 'yes' : 'no'}</li>
    </ul>
    <p>Consider following up within 24-48 hours if they look like a strong fit.</p>
  `
}
