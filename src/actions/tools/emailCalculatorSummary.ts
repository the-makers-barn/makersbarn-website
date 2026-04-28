'use server'

import * as postmark from 'postmark'
import { z } from 'zod'

import { ToolVariant, CALCULATOR_RATE_LIMIT } from '@/constants/tools'
import { Language } from '@/types/common'
import { createLogger, RateLimiter, getClientIdentifier, maskEmail, escapeHtml } from '@/lib'
import { sendSlackMessage, SlackChannel } from '@/services/slack'
import type { CalculatorInputs, CalculatorResults, EmailCalculatorSummaryData } from '@/types/tools'

const logger = createLogger('email-calculator-summary')

const rateLimiter = new RateLimiter({
  windowMs: CALCULATOR_RATE_LIMIT.WINDOW_MS,
  maxRequests: CALCULATOR_RATE_LIMIT.MAX_REQUESTS,
})

const InputsSchema = z.object({
  guests: z.number().int().min(0).max(1000),
  nights: z.number().int().min(0).max(365),
  pricePerGuest: z.number().min(0).max(100_000),
  venuePerNight: z.number().min(0).max(1_000_000),
  foodPerGuestPerDay: z.number().min(0).max(1000),
  facilitatorFee: z.number().min(0).max(1_000_000),
  marketingAndOther: z.number().min(0).max(1_000_000),
  travel: z.number().min(0).max(1_000_000),
  insurance: z.number().min(0).max(100_000),
  paymentFeePercent: z.number().min(0).max(100),
  planningDays: z.number().min(0).max(365),
  hiresFacilitators: z.boolean(),
}) satisfies z.ZodType<CalculatorInputs>

const ResultsSchema = z.object({
  totalRevenue: z.number(),
  totalCosts: z.number(),
  netProfit: z.number(),
  profitMargin: z.number(),
  profitPerWorkday: z.number(),
  breakevenGuests: z.union([z.number(), z.literal(Number.POSITIVE_INFINITY)]),
  costBreakdown: z.object({
    venueAccommodation: z.number(),
    food: z.number(),
    facilitatorFee: z.number(),
    marketingAndOther: z.number(),
    travel: z.number(),
    insurance: z.number(),
    paymentFees: z.number(),
  }),
}) satisfies z.ZodType<CalculatorResults>

const RequestSchema = z.object({
  email: z.string().email().max(254),
  inputs: InputsSchema,
  results: ResultsSchema,
  variant: z.nativeEnum(ToolVariant),
  newsletterOptIn: z.boolean(),
  locale: z.nativeEnum(Language),
})

export interface EmailCalculatorSummaryResult {
  success: boolean
  error?: string
}

const formatEuro = (n: number): string => `€${Math.round(n).toLocaleString()}`
const formatPercent = (n: number): string => `${Math.round(n * 100)}%`

function buildHtmlSummary(data: EmailCalculatorSummaryData): string {
  const { inputs, results, variant } = data
  const breakeven = Number.isFinite(results.breakevenGuests)
    ? `${results.breakevenGuests} guests`
    : 'not reachable at this price'
  return `
    <h2>Your retreat profitability summary</h2>
    <p>Variant: <strong>${escapeHtml(variant)}</strong></p>
    <h3>Inputs</h3>
    <ul>
      <li>Pays other facilitators: ${inputs.hiresFacilitators ? 'yes' : 'no'}</li>
      <li>Guests: ${inputs.guests}</li>
      <li>Nights: ${inputs.nights}</li>
      <li>Price per guest: ${formatEuro(inputs.pricePerGuest)}</li>
      <li>Venue &amp; accommodation per night: ${formatEuro(inputs.venuePerNight)} (${formatEuro(inputs.venuePerNight * inputs.nights)} total)</li>
      <li>Food per guest per day: ${formatEuro(inputs.foodPerGuestPerDay)}</li>
      <li>Facilitator fee: ${formatEuro(inputs.facilitatorFee)}</li>
      <li>Marketing &amp; other: ${formatEuro(inputs.marketingAndOther)}</li>
    </ul>
    <h3>Results</h3>
    <ul>
      <li>Total revenue: <strong>${formatEuro(results.totalRevenue)}</strong></li>
      <li>Total costs: ${formatEuro(results.totalCosts)}</li>
      <li>Net profit: <strong>${formatEuro(results.netProfit)}</strong></li>
      <li>Profit margin: ${formatPercent(results.profitMargin)}</li>
      <li>Profit per workday: ${formatEuro(results.profitPerWorkday)}</li>
      <li>Breakeven occupancy: ${breakeven}</li>
    </ul>
    <hr />
    <p>Hosted at MakersBarn? <a href="https://www.themakersbarn.com/contact?src=tool-${escapeHtml(variant)}">Request a custom quote</a> tailored to your group and dates.</p>
    <p>— The MakersBarn team</p>
  `
}

function buildAdminHtml(data: EmailCalculatorSummaryData): string {
  const { inputs, results, variant, email, newsletterOptIn } = data
  const breakeven = Number.isFinite(results.breakevenGuests)
    ? `${results.breakevenGuests} guests`
    : 'not reachable at this price'
  return `
    <h2>New calculator lead captured</h2>
    <p>A facilitator just emailed themselves a calculator summary.</p>
    <ul>
      <li><strong>Email:</strong> ${escapeHtml(email)}</li>
      <li><strong>Variant:</strong> ${escapeHtml(variant)}</li>
      <li><strong>Pays other facilitators:</strong> ${inputs.hiresFacilitators ? 'yes' : 'no'}</li>
      <li><strong>Newsletter opt-in:</strong> ${newsletterOptIn ? 'yes' : 'no'}</li>
    </ul>
    <hr />
    <h3>Their numbers</h3>
    <ul>
      <li>Guests × nights: ${inputs.guests} × ${inputs.nights}</li>
      <li>Price per guest: ${formatEuro(inputs.pricePerGuest)}</li>
      <li>Venue per night: ${formatEuro(inputs.venuePerNight)} (${formatEuro(inputs.venuePerNight * inputs.nights)} total)</li>
      <li>Food per guest per day: ${formatEuro(inputs.foodPerGuestPerDay)}</li>
      <li>Facilitator fee: ${formatEuro(inputs.facilitatorFee)}</li>
      <li>Marketing &amp; other: ${formatEuro(inputs.marketingAndOther)}</li>
    </ul>
    <h3>Results</h3>
    <ul>
      <li>Total revenue: ${formatEuro(results.totalRevenue)}</li>
      <li>Total costs: ${formatEuro(results.totalCosts)}</li>
      <li>Net profit: <strong>${formatEuro(results.netProfit)}</strong> (${formatPercent(results.profitMargin)} margin)</li>
      <li>Breakeven: ${breakeven}</li>
    </ul>
    <p>Consider following up within 24–48 hours if they look like a strong fit.</p>
  `
}

function buildSlackMessage(data: EmailCalculatorSummaryData): string {
  return [
    '🧮 *Calculator email captured*',
    `*Variant:* ${data.variant}`,
    `*Email:* ${data.email}`,
    `*Net profit calculated:* ${formatEuro(data.results.netProfit)}`,
    `*Newsletter opt-in:* ${data.newsletterOptIn ? 'yes' : 'no'}`,
  ].join('\n')
}

export async function emailCalculatorSummary(
  payload: EmailCalculatorSummaryData
): Promise<EmailCalculatorSummaryResult> {
  const clientId = await getClientIdentifier()

  if (!rateLimiter.isAllowed(clientId)) {
    logger.warn('Rate limit exceeded', { clientId })
    return { success: false, error: 'rate_limited' }
  }

  const parsed = RequestSchema.safeParse(payload)
  if (!parsed.success) {
    logger.warn('Validation failed', { issues: parsed.error.issues })
    return { success: false, error: 'validation_failed' }
  }
  const data = parsed.data
  const masked = maskEmail(data.email)

  try {
    await sendSlackMessage({
      channel: SlackChannel.USER_CONTACTS,
      message: buildSlackMessage(data),
    })
  } catch (error) {
    logger.warn('Slack notification failed for calculator capture', { masked, error })
  }

  const apiToken = process.env.POSTMARKAPP_API_TOKEN
  const senderEmail = process.env.POSTMARK_SENDER_EMAIL
  if (!apiToken || !senderEmail) {
    logger.error('Postmark not configured for calculator email')
    return { success: false, error: 'email_service_unavailable' }
  }

  try {
    const client = new postmark.ServerClient(apiToken)
    const response = await client.sendEmail({
      From: senderEmail,
      To: data.email,
      Subject: 'Your retreat profitability summary — MakersBarn',
      HtmlBody: buildHtmlSummary(data),
      TextBody: `See HTML version. Variant: ${data.variant}. Net profit: ${formatEuro(data.results.netProfit)}.`,
    })
    if (response.ErrorCode && response.ErrorCode !== 0) {
      logger.error('Postmark error sending calculator email', {
        masked,
        errorCode: response.ErrorCode,
      })
      return { success: false, error: 'email_send_failed' }
    }
    logger.info('Calculator summary email sent', { masked, variant: data.variant })

    const adminEmail = process.env.POSTMARK_ADMIN_EMAIL
    if (adminEmail) {
      try {
        const adminEmails = adminEmail.includes(',')
          ? adminEmail.split(',').map((e) => e.trim()).join(',')
          : adminEmail
        const adminResponse = await client.sendEmail({
          From: senderEmail,
          To: adminEmails,
          Subject: `Calculator lead — ${data.variant} — ${formatEuro(data.results.netProfit)} projected profit`,
          HtmlBody: buildAdminHtml(data),
          TextBody: `New calculator lead. Email: ${data.email}. Variant: ${data.variant}. Net profit: ${formatEuro(data.results.netProfit)}.`,
        })
        if (adminResponse.ErrorCode && adminResponse.ErrorCode !== 0) {
          logger.warn('Admin lead email failed (non-fatal)', {
            errorCode: adminResponse.ErrorCode,
            message: adminResponse.Message,
          })
        } else {
          logger.info('Admin lead email sent', { variant: data.variant })
        }
      } catch (error) {
        logger.warn('Admin lead email failed unexpectedly (non-fatal)', { error })
      }
    }

    return { success: true }
  } catch (error) {
    logger.error('Unexpected error sending calculator email', { masked }, error)
    return { success: false, error: 'unexpected_error' }
  }
}
