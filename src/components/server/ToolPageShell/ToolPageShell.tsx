import Link from 'next/link'
import type { ReactNode } from 'react'

import { CALCULATOR_VARIANTS, CALCULATOR_CONTENT } from '@/data/tools'
import { ToolVariant, TOOL_VARIANT_ROUTES } from '@/constants/tools'
import { Language } from '@/types/common'
import { getLocalizedPath } from '@/lib/routing'
import type { Dictionary } from '@/i18n/types'

import styles from './ToolPageShell.module.css'

interface ToolPageShellProps {
  variant: ToolVariant
  locale: Language
  t: Dictionary
  calculator: ReactNode
}

export function ToolPageShell({ variant, locale, t, calculator }: ToolPageShellProps) {
  const config = CALCULATOR_VARIANTS[variant]
  const content = CALCULATOR_CONTENT[variant]

  return (
    <article className={styles.shell}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>{config.copy.heroEyebrow[locale]}</p>
        <h1 className={styles.title}>{config.copy.heroTitle[locale]}</h1>
        <p className={styles.intro}>{config.copy.heroIntro[locale]}</p>
      </header>

      {calculator}

      <section className={styles.howTo} aria-labelledby="how-to">
        <h2 id="how-to" className={styles.sectionTitle}>
          {t.tools.howTo.heading}
        </h2>
        <ol className={styles.howToList}>
          {content.howToSteps.map((step, i) => (
            <li key={i}>{step[locale]}</li>
          ))}
        </ol>
      </section>

      <section className={styles.guide}>
        {content.guideSections.map((section, i) => (
          <div key={i} className={styles.guideSection}>
            <h3 className={styles.guideHeading}>{section.heading[locale]}</h3>
            {section.body.map((paragraph, j) => (
              <p key={j} className={styles.guideParagraph}>
                {paragraph[locale]}
              </p>
            ))}
          </div>
        ))}
      </section>

      <section className={styles.faq} aria-labelledby="faq">
        <h2 id="faq" className={styles.sectionTitle}>
          {t.tools.faq.heading}
        </h2>
        <div className={styles.faqList}>
          {content.faq.map((entry, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{entry.question[locale]}</summary>
              <p className={styles.faqAnswer}>{entry.answer[locale]}</p>
            </details>
          ))}
        </div>
      </section>

      {config.relatedVariants.length > 0 && (
        <section className={styles.related} aria-labelledby="related">
          <h2 id="related" className={styles.sectionTitle}>
            {t.tools.related.heading}
          </h2>
          <div className={styles.relatedGrid}>
            {config.relatedVariants.map((rv) => {
              const relConfig = CALCULATOR_VARIANTS[rv]
              const href = getLocalizedPath(TOOL_VARIANT_ROUTES[rv], locale)
              return (
                <Link key={rv} href={href} className={styles.relatedCard}>
                  <h3 className={styles.relatedCardTitle}>
                    {relConfig.copy.heroTitle[locale]}
                  </h3>
                  <span className={styles.relatedCardArrow}>→</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </article>
  )
}
