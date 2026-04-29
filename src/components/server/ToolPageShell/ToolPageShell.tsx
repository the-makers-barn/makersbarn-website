import Link from 'next/link'
import type { ReactNode } from 'react'

import { Language } from '@/types/common'
import type { Dictionary } from '@/i18n/types'

import styles from './ToolPageShell.module.css'

export interface ToolPageShellRelatedCard {
  href: string
  title: string
  isPrimary?: boolean
}

export interface ToolPageShellGuideSection {
  heading: string
  paragraphs: string[]
}

export interface ToolPageShellFaqEntry {
  question: string
  answer: string
}

export interface ToolPageShellProps {
  locale: Language
  t: Dictionary
  hero: {
    eyebrow: string
    title: string
    intro: string
    afterIntro?: ReactNode
  }
  tool: ReactNode
  howToHeading: string
  howToSteps: string[]
  guideSections: ToolPageShellGuideSection[]
  faqHeading: string
  faqEntries: ToolPageShellFaqEntry[]
  relatedHeading: string
  relatedCards: ToolPageShellRelatedCard[]
}

export function ToolPageShell(props: ToolPageShellProps): ReactNode {
  const {
    hero,
    tool,
    howToHeading,
    howToSteps,
    guideSections,
    faqHeading,
    faqEntries,
    relatedHeading,
    relatedCards,
  } = props

  return (
    <article className={styles.shell}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.intro}>{hero.intro}</p>
        {hero.afterIntro}
      </header>

      {tool}

      <section className={styles.howTo} aria-labelledby="how-to">
        <h2 id="how-to" className={styles.sectionTitle}>
          {howToHeading}
        </h2>
        <ol className={styles.howToList}>
          {howToSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className={styles.guide} aria-labelledby="guide">
        <h2 id="guide" className={styles.sectionTitle}>
          {hero.title}
        </h2>
        {guideSections.map((section, i) => (
          <div key={i} className={styles.guideSection}>
            <h3 className={styles.guideHeading}>{section.heading}</h3>
            {section.paragraphs.map((paragraph, j) => (
              <p key={j} className={styles.guideParagraph}>{paragraph}</p>
            ))}
          </div>
        ))}
      </section>

      <section className={styles.faq} aria-labelledby="faq">
        <h2 id="faq" className={styles.sectionTitle}>
          {faqHeading}
        </h2>
        <div className={styles.faqList}>
          {faqEntries.map((entry, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{entry.question}</summary>
              <p className={styles.faqAnswer}>{entry.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {relatedCards.length > 0 && (
        <section className={styles.related} aria-labelledby="related">
          <h2 id="related" className={styles.sectionTitle}>{relatedHeading}</h2>
          <div className={styles.relatedGrid}>
            {relatedCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={card.isPrimary ? styles.relatedCardPrimary : styles.relatedCard}
              >
                <h3 className={styles.relatedCardTitle}>{card.title}</h3>
                <span className={styles.relatedCardArrow}>→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
