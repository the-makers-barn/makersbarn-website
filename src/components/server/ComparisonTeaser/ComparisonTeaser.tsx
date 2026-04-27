import Link from 'next/link'

import { COMPARISON_CONTENT } from '@/data/comparison'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import { Language, Route } from '@/types'

import styles from './ComparisonTeaser.module.css'

const TEASER_ROW_COUNT = 3 as const

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

interface ComparisonTeaserProps {
  locale: Language
  t: Dictionary
}

export function ComparisonTeaser({ locale, t }: ComparisonTeaserProps) {
  const previewRows = COMPARISON_CONTENT.table.rows.slice(0, TEASER_ROW_COUNT)
  const href = getLocalizedPath(Route.COMPARISON, locale)
  const commercialLabel = COMPARISON_CONTENT.table.columnLabelCommercial[locale]
  const makersBarnLabel = COMPARISON_CONTENT.table.columnLabelMakersBarn[locale]

  return (
    <aside className={styles.teaser} aria-labelledby="comparison-teaser-headline">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{t.comparisonTeaser.eyebrow}</p>
        <h2 className={styles.headline} id="comparison-teaser-headline">
          {t.comparisonTeaser.headline}
        </h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.columnLabel}>
                <span className={styles.srOnly}>—</span>
              </th>
              <th scope="col" className={styles.columnLabel}>
                {commercialLabel}
              </th>
              <th scope="col" className={`${styles.columnLabel} ${styles.columnLabelHighlight}`}>
                {makersBarnLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {previewRows.map((row) => (
              <tr key={row.label[Language.EN]} className={styles.row}>
                <th scope="row" className={styles.rowLabel}>
                  {row.label[locale]}
                </th>
                <td className={styles.cellCommercial}>{row.commercial[locale]}</td>
                <td className={styles.cellMakersBarn}>{row.makersBarn[locale]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href={href} className={styles.cta}>
          {t.comparisonTeaser.ctaLabel}
          <ArrowRightIcon className={styles.ctaIcon} />
        </Link>
      </div>
    </aside>
  )
}
