'use client'

import { AUDIT_CATEGORY_LABELS, type AuditQuestion } from '@/data/tools'
import type { Language } from '@/types/common'
import type { AuditUiLabels } from '@/types/tools'

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
  labels: AuditUiLabels
  onRestart: () => void
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

const tally = (perCategory: readonly CategoryRisk[]) => {
  const counts = { red: 0, amber: 0, green: 0 }
  for (const item of perCategory) {
    counts[item.band] += 1
  }
  return counts
}

const interpolateVerdict = (
  template: string,
  counts: { red: number; amber: number; green: number },
): string =>
  template
    .replace('{red}', String(counts.red))
    .replace('{amber}', String(counts.amber))
    .replace('{green}', String(counts.green))

export function AuditReport({
  perCategory,
  flagged,
  locale,
  labels,
  onRestart,
}: Props) {
  const counts = tally(perCategory)
  const verdict = interpolateVerdict(
    labels.resultVerdictTemplate[locale],
    counts,
  )

  return (
    <section
      className={`${styles.root} ${styles.report}`}
      aria-live="polite"
    >
      <h2 className={styles.reportHeading}>{labels.reportHeading[locale]}</h2>
      <p className={styles.reportVerdict}>{verdict}</p>
      <p className={styles.reportIntro}>{labels.resultLeadIn[locale]}</p>

      <div className={styles.categoryGrid}>
        {perCategory.map(({ category, band }) => (
          <article
            key={category}
            className={`${styles.categoryCard} ${BAND_CARD_CLASS[band]}`}
          >
            <p className={styles.categoryCardLabel}>
              {AUDIT_CATEGORY_LABELS[category][locale]}
            </p>
            <p className={styles.categoryCardBand}>
              {labels.resultBandLabels[band][locale]}
            </p>
          </article>
        ))}
      </div>

      {flagged.length > 0 && (
        <>
          <h3 className={styles.fixesHeading}>
            {labels.fixesHeading[locale]}
          </h3>
          <ul className={styles.fixList}>
            {flagged.map((item) => renderFix(item, locale))}
          </ul>
        </>
      )}

      <button
        type="button"
        className={styles.restartButton}
        onClick={onRestart}
      >
        {labels.restartLabel[locale]}
      </button>
    </section>
  )
}
