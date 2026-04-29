'use server'

import {
  CALENDAR_PAYLOAD_MAX_BYTES,
  CALENDAR_RATE_LIMIT_EMAIL,
  CALENDAR_RATE_LIMIT_GLOBAL,
  CALENDAR_RATE_LIMIT_IP,
  type CalendarPhaseId,
} from '@/constants/tools'
import {
  CALENDAR_CONTENT,
  emailCalendarPlanSchema,
  type ValidatedEmailCalendarPlanInput,
} from '@/data/tools'
import { getServerLanguage } from '@/i18n'
import {
  RateLimiter,
  createLogger,
  getClientIdentifier,
  maskEmail,
} from '@/lib'
import {
  buildCalendarSlackMessage,
  sendCalendarEmails,
} from '@/lib/tools/calendar/email'
import { resolvePhases } from '@/lib/tools/calendar/presets'
import { SlackChannel, sendSlackMessage } from '@/services/slack'
import type {
  CustomMilestone,
  EmailCalendarPlanInput,
  EmailCalendarPlanResult,
} from '@/types/tools'

const logger = createLogger('email-calendar-plan')

const GLOBAL_RATE_LIMIT_KEY = 'all'
const SUCCESS_RESULT: EmailCalendarPlanResult = { ok: true }

const ipRateLimiter = new RateLimiter({
  windowMs: CALENDAR_RATE_LIMIT_IP.WINDOW_MS,
  maxRequests: CALENDAR_RATE_LIMIT_IP.MAX_REQUESTS,
})

const emailRateLimiter = new RateLimiter({
  windowMs: CALENDAR_RATE_LIMIT_EMAIL.WINDOW_MS,
  maxRequests: CALENDAR_RATE_LIMIT_EMAIL.MAX_REQUESTS,
})

const globalRateLimiter = new RateLimiter({
  windowMs: CALENDAR_RATE_LIMIT_GLOBAL.WINDOW_MS,
  maxRequests: CALENDAR_RATE_LIMIT_GLOBAL.MAX_REQUESTS,
})

interface PreparedPlan {
  data: ValidatedEmailCalendarPlanInput
  customItemsForRender: CustomMilestone[]
}

type FailureResult = { ok: false; result: EmailCalendarPlanResult }
type ParseSuccess = { ok: true; data: ValidatedEmailCalendarPlanInput }
type PrepareSuccess = { ok: true; prepared: PreparedPlan }

function exceedsPayloadSize(payload: EmailCalendarPlanInput): boolean {
  return JSON.stringify(payload).length > CALENDAR_PAYLOAD_MAX_BYTES
}

function parsePayload(payload: EmailCalendarPlanInput): ParseSuccess | FailureResult {
  const parsed = emailCalendarPlanSchema.safeParse(payload)
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

function passesRateLimits(data: ValidatedEmailCalendarPlanInput, clientId: string): boolean {
  if (!ipRateLimiter.isAllowed(`${CALENDAR_RATE_LIMIT_IP.KEY_PREFIX}${clientId}`)) {
    logger.warn('IP rate limit exceeded', { clientId })
    return false
  }
  const emailKey = data.email.toLowerCase()
  if (!emailRateLimiter.isAllowed(`${CALENDAR_RATE_LIMIT_EMAIL.KEY_PREFIX}${emailKey}`)) {
    logger.warn('Per-email rate limit exceeded', { masked: maskEmail(data.email) })
    return false
  }
  if (
    !globalRateLimiter.isAllowed(
      `${CALENDAR_RATE_LIMIT_GLOBAL.KEY_PREFIX}${GLOBAL_RATE_LIMIT_KEY}`,
    )
  ) {
    logger.warn('Global circuit breaker tripped')
    return false
  }
  return true
}

function filterAndRegenerateCustomItems(
  data: ValidatedEmailCalendarPlanInput,
  visiblePhaseIds: ReadonlySet<CalendarPhaseId>,
): CustomMilestone[] {
  const filtered = data.customItems.filter((item) => visiblePhaseIds.has(item.phaseId))
  if (filtered.length !== data.customItems.length) {
    logger.info('Dropped custom items not in resolved preset', {
      dropped: data.customItems.length - filtered.length,
      preset: data.preset,
    })
  }
  return filtered.map((item) => ({
    id: crypto.randomUUID(),
    phaseId: item.phaseId,
    text: item.text,
    status: item.status,
  }))
}

async function validateAndPrepare(
  payload: EmailCalendarPlanInput,
): Promise<PrepareSuccess | FailureResult> {
  if (exceedsPayloadSize(payload)) {
    logger.warn('Calendar plan payload exceeds size cap')
    return { ok: false, result: { ok: false, error: 'validation' } }
  }
  const parseOutcome = parsePayload(payload)
  if (!parseOutcome.ok) {
    return { ok: false, result: parseOutcome.result }
  }
  const data = parseOutcome.data
  const clientId = await getClientIdentifier()
  if (!passesRateLimits(data, clientId)) {
    return { ok: false, result: { ok: false, error: 'rate_limit' } }
  }
  const phases = resolvePhases(CALENDAR_CONTENT, data.preset)
  const visiblePhaseIds = new Set<CalendarPhaseId>(phases.map((phase) => phase.id))
  const customItemsForRender = filterAndRegenerateCustomItems(data, visiblePhaseIds)
  return { ok: true, prepared: { data, customItemsForRender } }
}

async function notifySlack(
  data: ValidatedEmailCalendarPlanInput,
  customItems: CustomMilestone[],
): Promise<void> {
  try {
    await sendSlackMessage({
      channel: SlackChannel.USER_CONTACTS,
      message: buildCalendarSlackMessage(data, customItems),
    })
  } catch (error) {
    logger.warn('Slack notification failed for calendar capture', {
      masked: maskEmail(data.email),
      error,
    })
  }
}

export async function emailCalendarPlan(
  payload: EmailCalendarPlanInput,
): Promise<EmailCalendarPlanResult> {
  const validation = await validateAndPrepare(payload)
  if (!validation.ok) {
    return validation.result
  }
  const { data, customItemsForRender } = validation.prepared
  const locale = await getServerLanguage()

  const sendOutcome = await sendCalendarEmails({ data, customItemsForRender, locale })
  if (!sendOutcome.ok) {
    return { ok: false, error: 'send_failed' }
  }

  await notifySlack(data, customItemsForRender)
  return SUCCESS_RESULT
}
