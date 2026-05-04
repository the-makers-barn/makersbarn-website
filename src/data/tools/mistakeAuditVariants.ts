import { AuditVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type {
  AuditFaqEntry,
  AuditVariantConfig,
  LocalizedString,
} from '@/types/tools'

/**
 * Audit variants ship EN-verbatim across NL/DE for v1. NL/DE translations land
 * once the question copy stabilises after design review.
 */
const sameAcrossLocales = (value: string): LocalizedString => ({
  [Language.EN]: value,
  [Language.NL]: value,
  [Language.DE]: value,
})

const SHARED_FAQ: readonly AuditFaqEntry[] = [
  {
    question: sameAcrossLocales('How long does the audit take?'),
    answer: sameAcrossLocales(
      'Most hosts finish in 5–7 minutes. There are 25 questions across six categories, all multiple choice.',
    ),
  },
  {
    question: sameAcrossLocales('Is this a calculator or a content quiz?'),
    answer: sameAcrossLocales(
      "It's a self-assessment, not a calculator. Each answer scores risk against the most common mistakes documented across retreat-industry sources, and the report shows your top mistakes to fix first.",
    ),
  },
  {
    question: sameAcrossLocales('Do you save my answers?'),
    answer: sameAcrossLocales(
      'Nothing is sent or stored unless you ask us to email the report to you. Until then it lives only in your browser.',
    ),
  },
  {
    question: sameAcrossLocales('Where do the mistakes come from?'),
    answer: sameAcrossLocales(
      'A meta-review of guidance from WeTravel, SquadTrip, Wanderlust Entrepreneur, Retreat & Grow Rich, Insight Timer, and a dozen other practitioner sources. The mistakes that recurred across at least three sources made it into the audit.',
    ),
  },
] as const

const SHARED_EYEBROW: LocalizedString = sameAcrossLocales('Free readiness check')

const GENERIC: AuditVariantConfig = {
  variant: AuditVariant.GENERIC,
  faq: SHARED_FAQ,
  relatedVariants: [
    AuditVariant.FIRST_TIME,
    AuditVariant.YOGA,
    AuditVariant.WELLNESS,
  ],
  copy: {
    heroEyebrow: SHARED_EYEBROW,
    heroTitle: sameAcrossLocales('The Retreat Mistakes Audit'),
    heroIntro: sameAcrossLocales(
      'Before you sign a venue or open ticket sales, run the 25 most common mistakes against your plan. Five minutes, no signup, a personalised risk report at the end.',
    ),
    metaTitle: sameAcrossLocales(
      'Retreat Mistakes Audit — Free 25-question readiness check',
    ),
    metaDescription: sameAcrossLocales(
      'A free 5-minute audit of the 25 most common retreat-host mistakes — pricing, marketing, venue, programme, legal, and audience fit. Get a personalised risk report.',
    ),
  },
}

const FIRST_TIME: AuditVariantConfig = {
  variant: AuditVariant.FIRST_TIME,
  faq: SHARED_FAQ,
  relatedVariants: [
    AuditVariant.GENERIC,
    AuditVariant.YOGA,
    AuditVariant.WELLNESS,
  ],
  hideQuestionIds: ['f3-power-mix'],
  copy: {
    heroEyebrow: SHARED_EYEBROW,
    heroTitle: sameAcrossLocales(
      'First-Time Retreat Host Audit',
    ),
    heroIntro: sameAcrossLocales(
      'Hosting your first retreat is largely a question of which mistakes you walk into. This audit runs the 25 most common ones — pricing, audience, venue, programme, legal — past your plan in five minutes.',
    ),
    metaTitle: sameAcrossLocales(
      'First-Time Retreat Host Audit — Avoid the 25 Most Common Mistakes',
    ),
    metaDescription: sameAcrossLocales(
      'Hosting your first retreat? Take this free 5-minute audit of the 25 most common first-time mistakes and get a personalised risk report.',
    ),
  },
}

const YOGA: AuditVariantConfig = {
  variant: AuditVariant.YOGA,
  faq: SHARED_FAQ,
  relatedVariants: [
    AuditVariant.WELLNESS,
    AuditVariant.MEDITATION,
    AuditVariant.GENERIC,
  ],
  copy: {
    heroEyebrow: SHARED_EYEBROW,
    heroTitle: sameAcrossLocales('Yoga Retreat Mistakes Audit'),
    heroIntro: sameAcrossLocales(
      'Yoga retreats live or die on three things: the warm list you bring, the price you set, and the venue contract you signed. This 5-minute audit runs the 25 most common yoga-retreat mistakes past your plan and tells you which ones to fix first.',
    ),
    metaTitle: sameAcrossLocales(
      'Yoga Retreat Mistakes Audit — Free 5-Minute Readiness Check',
    ),
    metaDescription: sameAcrossLocales(
      'Free audit of the 25 most common yoga retreat mistakes — pricing, marketing, venue, programme, liability, group fit. Get a personalised risk report.',
    ),
  },
}

const WELLNESS: AuditVariantConfig = {
  variant: AuditVariant.WELLNESS,
  faq: SHARED_FAQ,
  relatedVariants: [
    AuditVariant.YOGA,
    AuditVariant.MEDITATION,
    AuditVariant.GENERIC,
  ],
  copy: {
    heroEyebrow: SHARED_EYEBROW,
    heroTitle: sameAcrossLocales('Wellness Retreat Mistakes Audit'),
    heroIntro: sameAcrossLocales(
      'Wellness retreats run longer and cost more — which means each common mistake costs more too. This audit walks the 25 most common wellness-retreat mistakes past your plan in five minutes.',
    ),
    metaTitle: sameAcrossLocales(
      'Wellness Retreat Mistakes Audit — Free 5-Minute Readiness Check',
    ),
    metaDescription: sameAcrossLocales(
      'Free audit of the 25 most common wellness/detox retreat mistakes — pricing, marketing, venue, programme, legal, fit. Get a personalised risk report.',
    ),
  },
}

const MEDITATION: AuditVariantConfig = {
  variant: AuditVariant.MEDITATION,
  faq: SHARED_FAQ,
  relatedVariants: [
    AuditVariant.YOGA,
    AuditVariant.WELLNESS,
    AuditVariant.GENERIC,
  ],
  copy: {
    heroEyebrow: SHARED_EYEBROW,
    heroTitle: sameAcrossLocales('Meditation Retreat Mistakes Audit'),
    heroIntro: sameAcrossLocales(
      'Meditation retreats fail on different patterns — over-promising silent transformation, mixing acute distress into a contemplative space, opaque cancellation policies. This 5-minute audit runs the 25 most common ones past your plan.',
    ),
    metaTitle: sameAcrossLocales(
      'Meditation Retreat Mistakes Audit — Free 5-Minute Readiness Check',
    ),
    metaDescription: sameAcrossLocales(
      'Free audit of the 25 most common meditation retreat mistakes — pricing, marketing, venue, programme, screening, legal. Get a personalised risk report.',
    ),
  },
}

const COACHING: AuditVariantConfig = {
  variant: AuditVariant.COACHING,
  faq: SHARED_FAQ,
  relatedVariants: [
    AuditVariant.WELLNESS,
    AuditVariant.MEDITATION,
    AuditVariant.GENERIC,
  ],
  copy: {
    heroEyebrow: SHARED_EYEBROW,
    heroTitle: sameAcrossLocales('Coaching Retreat Mistakes Audit'),
    heroIntro: sameAcrossLocales(
      'Coaching intensives are smaller, higher-ticket, and unforgiving on group fit. This 5-minute audit runs the 25 most common coaching-retreat mistakes — pricing, audience, group composition, legal — past your plan.',
    ),
    metaTitle: sameAcrossLocales(
      'Coaching Retreat Mistakes Audit — Free 5-Minute Readiness Check',
    ),
    metaDescription: sameAcrossLocales(
      'Free audit of the 25 most common coaching retreat mistakes — pricing, audience, programme density, group fit, legal. Get a personalised risk report.',
    ),
  },
}

export const AUDIT_VARIANTS: Record<AuditVariant, AuditVariantConfig> = {
  [AuditVariant.GENERIC]: GENERIC,
  [AuditVariant.FIRST_TIME]: FIRST_TIME,
  [AuditVariant.YOGA]: YOGA,
  [AuditVariant.WELLNESS]: WELLNESS,
  [AuditVariant.MEDITATION]: MEDITATION,
  [AuditVariant.COACHING]: COACHING,
}
