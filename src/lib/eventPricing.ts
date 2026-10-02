import { Language } from '@/types'

const PRICE_LOCALES: Record<Language, string> = {
  [Language.EN]: 'en-IE',
  [Language.NL]: 'nl-NL',
  [Language.DE]: 'de-DE',
}

/**
 * Formats to the reader's own convention, so our copy agrees with the embedded
 * Hipsy widget sitting next to it: Hipsy renders "€ 60,80", and printing
 * "€60.80" beside it on the Dutch and German pages reads as two different
 * numbers. en-IE rather than en-GB so English keeps the euro sign.
 */
export function formatEventPrice(amount: string, currency: string, locale: Language): string {
  return new Intl.NumberFormat(PRICE_LOCALES[locale], {
    style: 'currency',
    currency,
  }).format(Number(amount))
}

/**
 * Same conventions as `formatEventPrice`, for prices quoted in whole units —
 * "€795" rather than "€795.00".
 */
export function formatWholeEventPrice(amount: string, currency: string, locale: Language): string {
  return new Intl.NumberFormat(PRICE_LOCALES[locale], {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(amount))
}
