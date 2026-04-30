'use server'

import { CHEF_INQUIRY_LIMITS, CHEF_INQUIRY_RATE_LIMIT } from '@/constants/chef'
import { getChefBySlug } from '@/data/chefs'
import {
  RateLimiter,
  createLogger,
  getClientIdentifier,
  maskEmail,
  sanitizePlainText,
} from '@/lib'
import { chefInquirySchema } from '@/lib/chef/inquirySchema'
import { getChefDetailPath } from '@/lib/routing'
import { sendChefInquiryEmails } from '@/services/email'
import {
  SlackChannel,
  formatChefInquirySlackMessage,
  sendSlackMessage,
} from '@/services/slack'
import { Language } from '@/types'

const logger = createLogger('chef-inquiry-action')

const rateLimiter = new RateLimiter({
  windowMs: CHEF_INQUIRY_RATE_LIMIT.WINDOW_MS,
  maxRequests: CHEF_INQUIRY_RATE_LIMIT.MAX_REQUESTS,
})

export type SendChefInquiryResult = {
  success: boolean
  message?: string
  errors?: Record<string, string>
}

export async function sendChefInquiry(
  chefSlug: string,
  formData: FormData
): Promise<SendChefInquiryResult> {
  const clientId = await getClientIdentifier()

  if (!rateLimiter.isAllowed(clientId)) {
    logger.warn('Rate limit exceeded', { clientId, chefSlug })
    return { success: false, message: 'rate_limited' }
  }

  const chef = getChefBySlug(chefSlug)
  if (!chef) {
    logger.warn('Chef not found or draft-in-prod', { clientId, chefSlug })
    return { success: false, message: 'chef_not_found' }
  }

  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    dates: formData.get('dates'),
    groupSize: Number(formData.get('groupSize')),
    location: formData.get('location'),
    dietary: formData.get('dietary') ?? '',
    message: formData.get('message'),
    honeypot: formData.get('honeypot') ?? '',
    consent: formData.get('consent') === 'true',
  }

  const parsed = chefInquirySchema.safeParse(raw)
  if (!parsed.success) {
    const errors = Object.fromEntries(
      parsed.error.issues.map((issue) => [issue.path.join('.'), issue.message])
    )
    return { success: false, message: 'validation', errors }
  }

  const data = parsed.data

  if (data.honeypot.length > 0) {
    logger.warn('Honeypot triggered, returning silent success', { clientId, chefSlug })
    return { success: true }
  }

  const visitorLocaleRaw = formData.get('locale')
  const visitorLocale: Language =
    visitorLocaleRaw === Language.NL || visitorLocaleRaw === Language.DE
      ? (visitorLocaleRaw as Language)
      : Language.EN

  const safe = {
    name: sanitizePlainText(data.name, CHEF_INQUIRY_LIMITS.NAME_MAX),
    dates: sanitizePlainText(data.dates, CHEF_INQUIRY_LIMITS.DATES_MAX),
    location: sanitizePlainText(data.location, CHEF_INQUIRY_LIMITS.LOCATION_MAX),
    dietary: sanitizePlainText(data.dietary, CHEF_INQUIRY_LIMITS.DIETARY_MAX),
    message: sanitizePlainText(data.message, CHEF_INQUIRY_LIMITS.MESSAGE_MAX),
  }

  const chefDetailUrl = `https://makersbarn.nl${getChefDetailPath(chef.slug, visitorLocale)}`
  const maskedEmail = maskEmail(data.email)
  logger.info('Chef inquiry submission started', { chefSlug, visitorEmail: maskedEmail })

  try {
    const slackResult = await sendSlackMessage({
      channel: SlackChannel.USER_CONTACTS,
      message: formatChefInquirySlackMessage({
        chefName: chef.name,
        visitorName: safe.name,
        visitorEmail: maskedEmail,
        groupSize: data.groupSize,
        dates: safe.dates,
        location: safe.location,
      }),
    })
    if (!slackResult.success) {
      logger.warn('Slack notification failed, continuing with email', {
        chefSlug,
        slackError: slackResult.error,
      })
    }
  } catch (err) {
    logger.warn('Slack notification threw, continuing with email', { chefSlug, error: err })
  }

  try {
    const emailResult = await sendChefInquiryEmails({
      chef,
      visitorName: safe.name,
      visitorEmail: data.email,
      dates: safe.dates,
      groupSize: data.groupSize,
      location: safe.location,
      dietary: safe.dietary,
      message: safe.message,
      visitorLocale,
      chefDetailUrl,
    })
    if (!emailResult.success) {
      logger.error('Chef inquiry email send failed', { chefSlug, visitorEmail: maskedEmail }, emailResult.error)
      return { success: false, message: 'email_failed' }
    }
  } catch (err) {
    logger.error('Chef inquiry email send threw', { chefSlug, visitorEmail: maskedEmail }, err)
    return { success: false, message: 'unexpected_error' }
  }

  logger.info('Chef inquiry submission completed', { chefSlug, visitorEmail: maskedEmail })
  return { success: true }
}
