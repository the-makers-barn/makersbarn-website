import { Language } from '@/types/common'
import type { AuditUiLabels, LocalizedString } from '@/types/tools'

/**
 * Shared UI chrome for the audit. Lives as LocalizedString from day one so
 * NL/DE translations slot in without code changes. v1 ships EN-verbatim
 * across locales, mirroring the calendar pattern.
 */

const t = (value: string): LocalizedString => ({
  [Language.EN]: value,
  [Language.NL]: value,
  [Language.DE]: value,
})

export const AUDIT_LABELS: AuditUiLabels = {
  introEyebrow: t('Before you start'),
  introTitle: t('What this audit checks, and what you get'),
  introBody: t(
    "Five minutes, 25 multiple-choice questions, and a personalised risk report. Nothing is sent or stored unless you ask us to email the report to you. The audit covers six categories — pricing, audience, venue, programme, legal, and group fit — and ranks the top mistakes worth fixing first.",
  ),
  introBullets: [
    t('25 questions across 6 mistake categories'),
    t('Per-category red / amber / green risk band'),
    t('Top 5 mistakes ranked by impact, with a fix for each'),
    t('Save and resume anytime — your answers stay in your browser'),
  ],
  introCta: t('Start the audit'),
  reportHeading: t('Your retreat risk report'),
  resultLeadIn: t(
    "Here's where your plan sits across the six common-mistake categories. Below the cards are the specific items most worth fixing first, ranked by impact.",
  ),
  resultVerdictTemplate: t('{red} red · {amber} amber · {green} green across 6 categories'),
  resultBandLabels: {
    green: t('Low risk'),
    amber: t('Watch this'),
    red: t('High risk'),
  },
  fixesHeading: t('Top mistakes to fix first'),
  nextLabel: t('Next'),
  backLabel: t('Back'),
  restartLabel: t('Restart audit'),
  progressLabel: t('Question {current} of {total} · {category}'),
  howToHeading: t('How the audit works'),
  howToSteps: [
    t(
      'Answer 25 multiple-choice questions about your retreat plan — pricing, audience, venue, programme, legal, fit.',
    ),
    t(
      'Each answer scores risk against the most-cited mistakes in retreat-industry sources. Eight high-impact questions carry a 2× weighting.',
    ),
    t(
      'You get a per-category risk band (low / watch / high) and the top 5 mistakes to fix first.',
    ),
    t(
      'Nothing is saved server-side until you ask. Run the audit again as your plan firms up.',
    ),
  ],
  faqHeading: t('Frequently asked'),
  relatedHeading: t('Related tools'),
  hostARetreatTitle: t('Host a retreat at The Makers Barn'),
  pricingCalculatorTitle: t('Run the pricing calculator'),
  calendarTitle: t('See the 6-month launch calendar'),
  previewHeading: t('A preview of the most-flagged mistakes'),
  previewIntro: t(
    "Not ready to take the audit yet? Here's a quick read of the mistakes that show up most often when retreat hosts look back at editions that didn't work.",
  ),
  sourcesHeading: t('Where the audit content comes from'),
  sourcesIntro: t(
    'The audit reflects guidance that recurs across at least three independent retreat-industry sources. The full list:',
  ),
  authorshipEyebrow: t('About this audit'),
  authorshipTitle: t('Built by retreat hosts who see these mistakes happen'),
  authorshipBody: t(
    "We run The Makers Barn — a slow-living retreat venue in the Dutch countryside — and see the same handful of organiser mistakes repeat across every season. The audit is what we wish first-time hosts had run before they signed a venue contract or opened ticket sales. It is free to use, and there is no signup.",
  ),
  authorshipCta: t('Visit The Makers Barn →'),
  crossLinksHeading: t('Run the audit for a different niche'),
  crossLinksIntro: t(
    'Each variant tunes the questions and the long-form content to the niche. Pick the one closest to your retreat:',
  ),
}
