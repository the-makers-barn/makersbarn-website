'use server'

import * as postmark from 'postmark'
import { z } from 'zod'

import { ToolVariant, CALCULATOR_RATE_LIMIT, CALCULATOR_INPUT_RANGES } from '@/constants/tools'
import { Language } from '@/types/common'
import { createLogger, RateLimiter, getClientIdentifier, maskEmail, escapeHtml } from '@/lib'
import { formatEuro, formatPercent } from '@/lib/tools'
import { calculateRetreatProfitability } from '@/lib/tools/calculate'
import { sendSlackMessage, SlackChannel, escapeSlackMarkdown } from '@/services/slack'
import type { CalculatorInputs, CalculatorResults, EmailCalculatorSummaryData } from '@/types/tools'

const logger = createLogger('email-calculator-summary')

const rateLimiter = new RateLimiter({
  windowMs: CALCULATOR_RATE_LIMIT.WINDOW_MS,
  maxRequests: CALCULATOR_RATE_LIMIT.MAX_REQUESTS,
})

const InputsSchema = z.object({
  guests: z.number().int().min(CALCULATOR_INPUT_RANGES.GUESTS_MIN).max(CALCULATOR_INPUT_RANGES.GUESTS_MAX),
  nights: z.number().int().min(CALCULATOR_INPUT_RANGES.NIGHTS_MIN).max(CALCULATOR_INPUT_RANGES.NIGHTS_MAX),
  pricePerGuest: z.number().min(CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MIN).max(CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MAX),
  venuePerNight: z.number().min(CALCULATOR_INPUT_RANGES.VENUE_PER_NIGHT_MIN).max(CALCULATOR_INPUT_RANGES.VENUE_PER_NIGHT_MAX),
  foodPerGuestPerDay: z.number().min(CALCULATOR_INPUT_RANGES.FOOD_PER_GUEST_PER_DAY_MIN).max(CALCULATOR_INPUT_RANGES.FOOD_PER_GUEST_PER_DAY_MAX),
  facilitatorFee: z.number().min(CALCULATOR_INPUT_RANGES.FACILITATOR_FEE_MIN).max(CALCULATOR_INPUT_RANGES.FACILITATOR_FEE_MAX),
  marketingAndOther: z.number().min(CALCULATOR_INPUT_RANGES.MARKETING_AND_OTHER_MIN).max(CALCULATOR_INPUT_RANGES.MARKETING_AND_OTHER_MAX),
  travel: z.number().min(CALCULATOR_INPUT_RANGES.TRAVEL_MIN).max(CALCULATOR_INPUT_RANGES.TRAVEL_MAX),
  insurance: z.number().min(CALCULATOR_INPUT_RANGES.INSURANCE_MIN).max(CALCULATOR_INPUT_RANGES.INSURANCE_MAX),
  paymentFeePercent: z.number().min(CALCULATOR_INPUT_RANGES.PAYMENT_FEE_PERCENT_MIN).max(CALCULATOR_INPUT_RANGES.PAYMENT_FEE_PERCENT_MAX),
  planningDays: z.number().min(CALCULATOR_INPUT_RANGES.PLANNING_DAYS_MIN).max(CALCULATOR_INPUT_RANGES.PLANNING_DAYS_MAX),
  hiresFacilitators: z.boolean(),
}) satisfies z.ZodType<CalculatorInputs>

const RequestSchema = z.object({
  email: z.string().email().max(254),
  inputs: InputsSchema,
  variant: z.nativeEnum(ToolVariant),
  newsletterOptIn: z.boolean(),
  locale: z.nativeEnum(Language),
})

export interface EmailCalculatorSummaryResult {
  success: boolean
  error?: string
}

interface EmailCopy {
  subject: string
  greeting: string
  inputsHeading: string
  resultsHeading: string
  guests: string
  nights: string
  pricePerGuest: string
  venueAccommodation: string
  foodPerDay: string
  facilitatorFee: string
  marketing: string
  totalRevenue: string
  totalCosts: string
  netProfit: string
  profitMargin: string
  profitPerWorkday: string
  breakeven: string
  breakevenNotReachable: string
  ctaLine: string
  ctaLink: string
  signoff: string
}

const EMAIL_COPY: Record<Language, EmailCopy> = {
  [Language.EN]: {
    subject: 'Your retreat profitability summary — MakersBarn',
    greeting: 'Your retreat profitability summary',
    inputsHeading: 'Inputs',
    resultsHeading: 'Results',
    guests: 'Guests',
    nights: 'Nights',
    pricePerGuest: 'Price per guest',
    venueAccommodation: 'Venue & accommodation per night',
    foodPerDay: 'Food per guest per day',
    facilitatorFee: 'Hired facilitator(s) fee',
    marketing: 'Marketing & other',
    totalRevenue: 'Total revenue',
    totalCosts: 'Total costs',
    netProfit: 'Net profit',
    profitMargin: 'Profit margin',
    profitPerWorkday: 'Profit per workday',
    breakeven: 'Breakeven occupancy',
    breakevenNotReachable: 'not reachable at this price',
    ctaLine: 'Hosting at MakersBarn?',
    ctaLink: 'Request a custom quote',
    signoff: '— The MakersBarn team',
  },
  [Language.NL]: {
    subject: 'Jouw retraite-winstgevendheidsoverzicht — MakersBarn',
    greeting: 'Jouw retraite-winstgevendheidsoverzicht',
    inputsHeading: 'Invoer',
    resultsHeading: 'Resultaten',
    guests: 'Gasten',
    nights: 'Nachten',
    pricePerGuest: 'Prijs per gast',
    venueAccommodation: 'Locatie & accommodatie per nacht',
    foodPerDay: 'Eten per gast per dag',
    facilitatorFee: 'Vergoeding ingehuurde begeleider(s)',
    marketing: 'Marketing & overig',
    totalRevenue: 'Totale omzet',
    totalCosts: 'Totale kosten',
    netProfit: 'Netto winst',
    profitMargin: 'Winstmarge',
    profitPerWorkday: 'Winst per werkdag',
    breakeven: 'Break-evenbezetting',
    breakevenNotReachable: 'niet haalbaar bij deze prijs',
    ctaLine: 'Hosting bij MakersBarn?',
    ctaLink: 'Vraag een offerte op maat aan',
    signoff: '— Het MakersBarn-team',
  },
  [Language.DE]: {
    subject: 'Deine Retreat-Rentabilitätsübersicht — MakersBarn',
    greeting: 'Deine Retreat-Rentabilitätsübersicht',
    inputsHeading: 'Eingaben',
    resultsHeading: 'Ergebnisse',
    guests: 'Gäste',
    nights: 'Nächte',
    pricePerGuest: 'Preis pro Gast',
    venueAccommodation: 'Location & Unterkunft pro Nacht',
    foodPerDay: 'Essen pro Gast pro Tag',
    facilitatorFee: 'Honorar gemieteter Facilitator',
    marketing: 'Marketing & Sonstiges',
    totalRevenue: 'Gesamtumsatz',
    totalCosts: 'Gesamtkosten',
    netProfit: 'Nettogewinn',
    profitMargin: 'Gewinnspanne',
    profitPerWorkday: 'Gewinn pro Arbeitstag',
    breakeven: 'Break-even-Auslastung',
    breakevenNotReachable: 'bei diesem Preis nicht erreichbar',
    ctaLine: 'Bei MakersBarn hosten?',
    ctaLink: 'Individuelles Angebot anfragen',
    signoff: '— Das MakersBarn-Team',
  },
}

function buildHtmlSummary(data: EmailCalculatorSummaryData, results: CalculatorResults): string {
  const { inputs, variant, locale } = data
  const copy = EMAIL_COPY[locale]
  const breakeven = Number.isFinite(results.breakevenGuests)
    ? `${escapeHtml(String(results.breakevenGuests))} guests`
    : copy.breakevenNotReachable
  return `
    <h2>${copy.greeting}</h2>
    <p>Variant: <strong>${escapeHtml(variant)}</strong></p>
    <h3>${copy.inputsHeading}</h3>
    <ul>
      <li>${copy.guests}: ${inputs.guests}</li>
      <li>${copy.nights}: ${inputs.nights}</li>
      <li>${copy.pricePerGuest}: ${formatEuro(inputs.pricePerGuest)}</li>
      <li>${copy.venueAccommodation}: ${formatEuro(inputs.venuePerNight)} (${formatEuro(inputs.venuePerNight * inputs.nights)} total)</li>
      <li>${copy.foodPerDay}: ${formatEuro(inputs.foodPerGuestPerDay)}</li>
      <li>${copy.facilitatorFee}: ${formatEuro(inputs.facilitatorFee)}</li>
      <li>${copy.marketing}: ${formatEuro(inputs.marketingAndOther)}</li>
    </ul>
    <h3>${copy.resultsHeading}</h3>
    <ul>
      <li>${copy.totalRevenue}: <strong>${formatEuro(results.totalRevenue)}</strong></li>
      <li>${copy.totalCosts}: ${formatEuro(results.totalCosts)}</li>
      <li>${copy.netProfit}: <strong>${formatEuro(results.netProfit)}</strong></li>
      <li>${copy.profitMargin}: ${formatPercent(results.profitMargin)}</li>
      <li>${copy.profitPerWorkday}: ${formatEuro(results.profitPerWorkday)}</li>
      <li>${copy.breakeven}: ${breakeven}</li>
    </ul>
    <hr />
    <p>${copy.ctaLine} <a href="https://www.themakersbarn.com/contact?src=tool-${escapeHtml(variant)}">${copy.ctaLink}</a></p>
    <p>${copy.signoff}</p>
  `
}

function buildAdminHtml(data: EmailCalculatorSummaryData, results: CalculatorResults): string {
  const { inputs, variant, email, newsletterOptIn } = data
  const breakeven = Number.isFinite(results.breakevenGuests)
    ? `${escapeHtml(String(results.breakevenGuests))} guests`
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

function buildSlackMessage(data: EmailCalculatorSummaryData, results: CalculatorResults): string {
  return [
    '🧮 *Calculator email captured*',
    `*Variant:* ${escapeSlackMarkdown(data.variant)}`,
    `*Email:* ${escapeSlackMarkdown(data.email)}`,
    `*Net profit calculated:* ${formatEuro(results.netProfit)}`,
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
  const results = calculateRetreatProfitability(data.inputs)
  const masked = maskEmail(data.email)

  try {
    await sendSlackMessage({
      channel: SlackChannel.USER_CONTACTS,
      message: buildSlackMessage(data, results),
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
    const copy = EMAIL_COPY[data.locale]
    const response = await client.sendEmail({
      From: senderEmail,
      To: data.email,
      Subject: copy.subject,
      HtmlBody: buildHtmlSummary(data, results),
      TextBody: `See HTML version. Variant: ${data.variant}. Net profit: ${formatEuro(results.netProfit)}.`,
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
          Subject: `Calculator lead — ${data.variant} — ${formatEuro(results.netProfit)} projected profit`,
          HtmlBody: buildAdminHtml(data, results),
          TextBody: `New calculator lead. Email: ${data.email}. Variant: ${data.variant}. Net profit: ${formatEuro(results.netProfit)}.`,
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
