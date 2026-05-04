'use client'

import { AUDIT_CATEGORY_LABELS, type AuditQuestion } from '@/data/tools'
import type { Language } from '@/types/common'

import styles from './RetreatMistakesAudit.module.css'
import {
  type CategoryRisk,
  type FlaggedMistake,
  type RiskBand,
} from './score'

interface Props {
  perCategory: readonly CategoryRisk[]
  flagged: readonly FlaggedMistake[]
  locale: Language
  reportHeading: string
  resultLeadIn: string
  restartLabel: string
  onRestart: () => void
}

const BAND_LABELS: Record<RiskBand, string> = {
  green: 'Low risk',
  amber: 'Watch this',
  red: 'High risk',
}

const BAND_CARD_CLASS: Record<RiskBand, string> = {
  green: styles.categoryCardGreen,
  amber: styles.categoryCardAmber,
  red: styles.categoryCardRed,
}

const renderFix = (item: FlaggedMistake, locale: Language) => {
  const q: AuditQuestion = item.question
  return (
    <li key={q.id} className={styles.fix}>
      <p className={styles.fixPrompt}>{q.prompt[locale]}</p>
      <p className={styles.fixBody}>{q.fix[locale]}</p>
    </li>
  )
}

export function AuditReport({
  perCategory,
  flagged,
  locale,
  reportHeading,
  resultLeadIn,
  restartLabel,
  onRestart,
}: Props) {
  return (
    <section
      className={`${styles.root} ${styles.report}`}
      aria-live="polite"
    >
      <h2 className={styles.reportHeading}>{reportHeading}</h2>
      <p>{resultLeadIn}</p>

      <div className={styles.categoryGrid}>
        {perCategory.map(({ category, band }) => (
          <article
            key={category}
            className={`${styles.categoryCard} ${BAND_CARD_CLASS[band]}`}
          >
            <p className={styles.categoryCardLabel}>
              {AUDIT_CATEGORY_LABELS[category][locale]}
            </p>
            <p className={styles.categoryCardBand}>{BAND_LABELS[band]}</p>
          </article>
        ))}
      </div>

      {flagged.length > 0 && (
        <ul className={styles.fixList}>
          {flagged.map((item) => renderFix(item, locale))}
        </ul>
      )}

      <button
        type="button"
        className={styles.restartButton}
        onClick={onRestart}
      >
        {restartLabel}
      </button>
    </section>
  )
}
