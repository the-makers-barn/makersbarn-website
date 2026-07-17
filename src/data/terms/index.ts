import { Language } from '@/types'
import type { TermsDisclaimer, TermsMeta, TermsVariant } from '@/types'

import { TERMS_EN, TERMS_DISCLAIMER_EN } from './en'
import { TERMS_NL } from './nl'

export const TERMS_META: TermsMeta = {
  title: {
    [Language.EN]: 'Terms & Conditions',
    [Language.NL]: 'Algemene Voorwaarden',
    [Language.DE]: 'Allgemeine Geschäftsbedingungen',
  },
  description: {
    [Language.EN]:
      'General terms and conditions for renting The Makers Barn as a retreat, workshop or group venue — reservation, payment, cancellation and house rules.',
    [Language.NL]:
      'Algemene voorwaarden voor de huur van The Makers Barn als retraite-, workshop- of groepslocatie — reservering, betaling, annulering en huisregels.',
    [Language.DE]:
      'Allgemeine Geschäftsbedingungen für die Miete von The Makers Barn als Retreat-, Workshop- oder Gruppenlocation — Reservierung, Zahlung, Stornierung und Hausregeln.',
  },
}

export function getTermsVariant(locale: Language): TermsVariant {
  return locale === Language.NL ? TERMS_NL : TERMS_EN
}

export function getTermsDisclaimer(locale: Language): TermsDisclaimer | null {
  return locale === Language.NL ? null : TERMS_DISCLAIMER_EN
}
