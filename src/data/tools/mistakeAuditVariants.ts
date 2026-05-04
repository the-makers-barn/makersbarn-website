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
      "Before you sign a venue or open ticket sales, run the 25 most common retreat-host mistakes against your plan. The audit takes five minutes, scores risk across six categories — pricing, audience, venue, programme, legal, group fit — and gives you a personalised report ranking the mistakes most worth fixing first. Nothing is sent or stored unless you ask. Built from a meta-review of two dozen retreat-industry sources.",
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
      "Hosting your first retreat is largely a question of which mistakes you walk into. The same handful — pricing for sell-out, building before the list exists, booking a venue you have not stayed at, relying on the venue's insurance — show up across every retreat post-mortem. This 5-minute audit runs the 25 most common first-time mistakes past your plan and ranks the ones most worth fixing first. No signup, nothing saved server-side.",
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
      "Yoga retreats live or die on three things: the warm list you bring, the price you set, and the venue contract you signed. Get any one of those wrong and the retreat either does not fill or does not pay. This 5-minute audit runs the 25 most common yoga-retreat mistakes past your plan — pricing tier, marketing runway, insurance gaps, programme density — and ranks the ones most worth fixing first.",
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
      "Wellness retreats run longer and cost more, which means each common mistake costs more too. A flat cancellation policy, an under-buffered budget, an insurance line that does not cover guest practitioners — any of these can absorb the entire margin on a 7-day programme. This 5-minute audit runs the 25 most common wellness-retreat mistakes past your plan and ranks the ones most worth fixing first.",
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
      "Meditation retreats fail on a different pattern from yoga or wellness — over-promising silent transformation, skipping participant screening, getting blindsided by a dharma centre's cancellation policy. This 5-minute audit runs the 25 most common meditation-retreat mistakes past your plan and ranks the ones most worth fixing first. Particular focus on participant screening and contemplative-format risk.",
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
      "Coaching intensives are smaller, higher-ticket, and unforgiving on group composition. Losing one guest from a six-person retreat is a 17% revenue hit; mixing power dynamics in the same room kills the vulnerability the retreat is selling. This 5-minute audit runs the 25 most common coaching-retreat mistakes past your plan — pricing, audience, group composition, legal — and ranks the ones most worth fixing first.",
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
