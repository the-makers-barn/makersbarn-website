import type { ReactNode } from 'react'

import { RetreatMistakesAudit } from '@/components/client'
import { ToolPageShell } from '@/components/server/ToolPageShell'
import {
  AUDIT_VARIANT_ROUTES,
  type AuditVariant,
} from '@/constants/tools'
import {
  AUDIT_CONTENT,
  AUDIT_LABELS,
  AUDIT_SOURCES,
  AUDIT_VARIANTS,
} from '@/data/tools'
import { getLocalizedPath } from '@/lib/routing'
import type { Language } from '@/types/common'
import { Route } from '@/types/navigation'

import styles from './RetreatMistakesAuditPage.module.css'

interface Props {
  variant: AuditVariant
  locale: Language
}

export function RetreatMistakesAuditPage({ variant, locale }: Props): ReactNode {
  const config = AUDIT_VARIANTS[variant]
  const content = AUDIT_CONTENT[variant]
  const copy = config.copy

  const relatedCards = [
    {
      href: getLocalizedPath(Route.HOST_A_RETREAT, locale),
      title: AUDIT_LABELS.hostARetreatTitle[locale],
      isPrimary: true,
    },
    {
      href: getLocalizedPath(Route.RETREAT_PROFITABILITY_CALCULATOR, locale),
      title: AUDIT_LABELS.pricingCalculatorTitle[locale],
    },
    {
      href: getLocalizedPath(Route.SIX_MONTH_RETREAT_LAUNCH_CALENDAR, locale),
      title: AUDIT_LABELS.calendarTitle[locale],
    },
    ...config.relatedVariants.slice(0, 2).map((v) => ({
      href: getLocalizedPath(AUDIT_VARIANT_ROUTES[v], locale),
      title: AUDIT_VARIANTS[v].copy.heroTitle[locale],
    })),
  ]

  const faqEntries = [
    ...content.nicheFaq.map((entry) => ({
      question: entry.question[locale],
      answer: entry.answer[locale],
    })),
    ...config.faq.map((entry) => ({
      question: entry.question[locale],
      answer: entry.answer[locale],
    })),
  ]

  const guideSections = content.guideSections.map((section) => ({
    heading: section.heading[locale],
    paragraphs: section.paragraphs.map((p) => p[locale]),
  }))

  const previewBlock = (
    <section className={styles.preview} aria-labelledby="audit-preview">
      <h2 id="audit-preview">{AUDIT_LABELS.previewHeading[locale]}</h2>
      <p className={styles.previewIntro}>
        {AUDIT_LABELS.previewIntro[locale]}
      </p>
      <ul className={styles.previewList}>
        {content.previewMistakes.map((item) => (
          <li key={item.title[locale]} className={styles.previewItem}>
            <p className={styles.previewCategory}>{item.category[locale]}</p>
            <p className={styles.previewTitle}>{item.title[locale]}</p>
            <p className={styles.previewBody}>{item.body[locale]}</p>
          </li>
        ))}
      </ul>
    </section>
  )

  const sourcesBlock = (
    <section className={styles.sources} aria-labelledby="audit-sources">
      <h2 id="audit-sources" className={styles.sourcesHeading}>
        {AUDIT_LABELS.sourcesHeading[locale]}
      </h2>
      <p className={styles.sourcesIntro}>{AUDIT_LABELS.sourcesIntro[locale]}</p>
      <ul className={styles.sourcesList}>
        {AUDIT_SOURCES.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )

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
          labels={AUDIT_LABELS}
        />
      }
      belowTool={
        <>
          {previewBlock}
          {sourcesBlock}
        </>
      }
      howToHeading={AUDIT_LABELS.howToHeading[locale]}
      howToSteps={AUDIT_LABELS.howToSteps.map((step) => step[locale])}
      guideSections={guideSections}
      faqHeading={AUDIT_LABELS.faqHeading[locale]}
      faqEntries={faqEntries}
      relatedHeading={AUDIT_LABELS.relatedHeading[locale]}
      relatedCards={relatedCards}
    />
  )
}
