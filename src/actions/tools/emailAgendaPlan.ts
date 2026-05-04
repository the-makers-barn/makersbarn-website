'use server'

import {
  AGENDA_PAYLOAD_MAX_BYTES,
  AGENDA_RATE_LIMIT_EMAIL,
  AGENDA_RATE_LIMIT_GLOBAL,
  AGENDA_RATE_LIMIT_IP,
} from '@/constants/tools'
import {
  emailAgendaPlanSchema,
  getAgendaPlan,
  type ValidatedEmailAgendaPlanInput,
} from '@/data/tools'
import { getServerLanguage } from '@/i18n'
import { RateLimiter, createLogger, getClientIdentifier, maskEmail } from '@/lib'
import {
  buildAgendaSlackMessage,
  sendAgendaEmails,
} from '@/lib/tools/agenda/email'
import { resolveAgenda } from '@/lib/tools/agenda/resolve'
import { SlackChannel, sendSlackMessage } from '@/services/slack'
import type {
  AgendaState,
  EmailAgendaPlanInput,
  EmailAgendaPlanResult,
} from '@/types/tools'

const logger = createLogger('email-agenda-plan')

const GLOBAL_RATE_LIMIT_KEY = 'all'
const SUCCESS_RESULT: EmailAgendaPlanResult = { ok: true }

const ipRateLimiter = new RateLimiter({
  windowMs: AGENDA_RATE_LIMIT_IP.WINDOW_MS,
  maxRequests: AGENDA_RATE_LIMIT_IP.MAX_REQUESTS,
})
const emailRateLimiter = new RateLimiter({
  windowMs: AGENDA_RATE_LIMIT_EMAIL.WINDOW_MS,
  maxRequests: AGENDA_RATE_LIMIT_EMAIL.MAX_REQUESTS,
})
const globalRateLimiter = new RateLimiter({
  windowMs: AGENDA_RATE_LIMIT_GLOBAL.WINDOW_MS,
  maxRequests: AGENDA_RATE_LIMIT_GLOBAL.MAX_REQUESTS,
})

type FailureResult = { ok: false; result: EmailAgendaPlanResult }
type ParseSuccess = { ok: true; data: ValidatedEmailAgendaPlanInput }

function exceedsPayloadSize(payload: EmailAgendaPlanInput): boolean {
  return JSON.stringify(payload).length > AGENDA_PAYLOAD_MAX_BYTES
}

function parsePayload(payload: EmailAgendaPlanInput): ParseSuccess | FailureResult {
  const parsed = emailAgendaPlanSchema.safeParse(payload)
  if (parsed.success) {
    return { ok: true, data: parsed.data }
  }
  const isEmailIssue = parsed.error.issues.some((issue) => issue.path[0] === 'email')
  logger.info('Validation failed', {
    issues: parsed.error.issues.map((issue) => issue.path.join('.')),
  })
  return {
    ok: false,
    result: { ok: false, error: isEmailIssue ? 'invalid_email' : 'validation' },
  }
}

function passesRateLimits(data: ValidatedEmailAgendaPlanInput, clientId: string): boolean {
  if (!ipRateLimiter.isAllowed(`${AGENDA_RATE_LIMIT_IP.KEY_PREFIX}${clientId}`)) {
    logger.warn('IP rate limit exceeded', { clientId })
    return false
  }
  const emailKey = data.email.toLowerCase()
  if (!emailRateLimiter.isAllowed(`${AGENDA_RATE_LIMIT_EMAIL.KEY_PREFIX}${emailKey}`)) {
    logger.warn('Per-email rate limit exceeded', { masked: maskEmail(data.email) })
    return false
  }
  if (
    !globalRateLimiter.isAllowed(
      `${AGENDA_RATE_LIMIT_GLOBAL.KEY_PREFIX}${GLOBAL_RATE_LIMIT_KEY}`,
    )
  ) {
    logger.warn('Global circuit breaker tripped')
    return false
  }
  return true
}

function buildStateForResolution(data: ValidatedEmailAgendaPlanInput): AgendaState {
  const hidden: Record<string, true> = {}
  for (const id of data.hiddenBlockIds) {
    hidden[id] = true
  }
  const overrides: AgendaState['blockOverrides'] = {}
  for (const o of data.blockOverrides) {
    const { blockId, ...rest } = o
    overrides[blockId] = rest
  }
  return {
    schemaVersion: 1,
    niche: data.niche,
    length: data.length,
    hiddenBlockIds: hidden,
    blockOverrides: overrides,
    customBlocks: data.customBlocks.map((c, idx) => ({
      id: `srv-${idx}`,
      ...c,
    })),
  }
}

export async function emailAgendaPlan(
  payload: EmailAgendaPlanInput,
): Promise<EmailAgendaPlanResult> {
  if (exceedsPayloadSize(payload)) {
    logger.warn('Agenda plan payload exceeds size cap')
    return { ok: false, error: 'validation' }
  }
  const parseOutcome = parsePayload(payload)
  if (!parseOutcome.ok) {
    return parseOutcome.result
  }
  const data = parseOutcome.data

  const clientId = await getClientIdentifier()
  if (!passesRateLimits(data, clientId)) {
    return { ok: false, error: 'rate_limit' }
  }

  const locale = await getServerLanguage()
  const plan = getAgendaPlan(data.niche, data.length)
  const resolved = resolveAgenda({
    plan,
    state: buildStateForResolution(data),
    locale,
  })

  const sendOutcome = await sendAgendaEmails({
    data,
    resolvedDays: resolved.days,
    locale,
  })
  if (!sendOutcome.ok) {
    return { ok: false, error: 'send_failed' }
  }

  try {
    await sendSlackMessage({
      channel: SlackChannel.USER_CONTACTS,
      message: buildAgendaSlackMessage(data),
    })
  } catch (error) {
    logger.warn('Slack notification failed for agenda capture', {
      masked: maskEmail(data.email),
      error,
    })
  }
  return SUCCESS_RESULT
}
