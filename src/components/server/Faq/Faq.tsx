import type { ReactNode } from 'react'

import styles from './Faq.module.css'

export interface FaqEntry {
  question: string
  answer: string
}

interface Props {
  heading: string
  entries: readonly FaqEntry[]
  headingId?: string
}

const DEFAULT_HEADING_ID = 'faq'

export function Faq({ heading, entries, headingId = DEFAULT_HEADING_ID }: Props): ReactNode {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.heading}>
        {heading}
      </h2>
      <div className={styles.list}>
        {entries.map((entry) => (
          <details key={entry.question} className={styles.item}>
            <summary className={styles.question}>{entry.question}</summary>
            <p className={styles.answer}>{entry.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
