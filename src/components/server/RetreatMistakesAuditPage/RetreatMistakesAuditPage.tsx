import type { ReactNode } from 'react'

import { RetreatMistakesAudit } from '@/components/client'
import { ToolPageShell } from '@/components/server/ToolPageShell'
import {
  AUDIT_VARIANT_ROUTES,
  type AuditVariant,
} from '@/constants/tools'
import { AUDIT_VARIANTS } from '@/data/tools'
import { getLocalizedPath } from '@/lib/routing'
import type { Language } from '@/types/common'
import { Route } from '@/types/navigation'

interface Props {
  variant: AuditVariant
  locale: Language
}

const HARDCODED_LABELS = {
  reportHeading: 'Your retreat risk report',
  resultLeadIn:
    "Here's where your plan sits across the six common-mistake categories. Below the cards are the specific items most worth fixing first, ranked by impact.",
  nextLabel: 'Next',
  backLabel: 'Back',
  restartLabel: 'Restart audit',
  howToHeading: 'How the audit works',
  howToSteps: [
    'Answer 25 multiple-choice questions about your retreat plan — pricing, audience, venue, programme, legal, fit.',
    'Each answer scores risk against the most-cited mistakes in retreat-industry sources.',
    'You get a per-category risk band (low / watch / high) and the top mistakes to fix first.',
    'Nothing is saved server-side until you ask. Run the audit again as your plan firms up.',
  ],
  faqHeading: 'Frequently asked',
  relatedHeading: 'Related tools',
  hostARetreatTitle: 'Host a retreat at The Makers Barn',
  pricingCalculatorTitle: 'Run the pricing calculator',
  calendarTitle: 'See the 6-month launch calendar',
} as const

export function RetreatMistakesAuditPage({ variant, locale }: Props): ReactNode {
  const config = AUDIT_VARIANTS[variant]
  const copy = config.copy

  const relatedCards = [
    {
      href: getLocalizedPath(Route.HOST_A_RETREAT, locale),
      title: HARDCODED_LABELS.hostARetreatTitle,
      isPrimary: true,
    },
    {
      href: getLocalizedPath(Route.RETREAT_PROFITABILITY_CALCULATOR, locale),
      title: HARDCODED_LABELS.pricingCalculatorTitle,
    },
    {
      href: getLocalizedPath(Route.SIX_MONTH_RETREAT_LAUNCH_CALENDAR, locale),
      title: HARDCODED_LABELS.calendarTitle,
    },
    ...config.relatedVariants.slice(0, 2).map((v) => ({
      href: getLocalizedPath(AUDIT_VARIANT_ROUTES[v], locale),
      title: AUDIT_VARIANTS[v].copy.heroTitle[locale],
    })),
  ]

  const faqEntries = config.faq.map((entry) => ({
    question: entry.question[locale],
    answer: entry.answer[locale],
  }))

  return (
    <ToolPageShell
      hero={{
        eyebrow: copy.heroEyebrow[locale],
        title: copy.heroTitle[locale],
        intro: copy.heroIntro[locale],
      }}
      tool={
        <RetreatMistakesAudit
          variant={variant}
          locale={locale}
          reportHeading={HARDCODED_LABELS.reportHeading}
          resultLeadIn={HARDCODED_LABELS.resultLeadIn}
          nextLabel={HARDCODED_LABELS.nextLabel}
          backLabel={HARDCODED_LABELS.backLabel}
          restartLabel={HARDCODED_LABELS.restartLabel}
        />
      }
      howToHeading={HARDCODED_LABELS.howToHeading}
      howToSteps={[...HARDCODED_LABELS.howToSteps]}
      guideSections={[]}
      faqHeading={HARDCODED_LABELS.faqHeading}
      faqEntries={faqEntries}
      relatedHeading={HARDCODED_LABELS.relatedHeading}
      relatedCards={relatedCards}
    />
  )
}
