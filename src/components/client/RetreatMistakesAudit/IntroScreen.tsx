'use client'

import type { Language } from '@/types/common'
import type { AuditUiLabels } from '@/types/tools'

import styles from './RetreatMistakesAudit.module.css'

interface Props {
  labels: AuditUiLabels
  locale: Language
  hasResumable: boolean
  onStart: () => void
  onResume: () => void
}

export function IntroScreen({
  labels,
  locale,
  hasResumable,
  onStart,
  onResume,
}: Props) {
  return (
    <section className={styles.root}>
      <p className={styles.introEyebrow}>{labels.introEyebrow[locale]}</p>
      <h2 className={styles.introTitle}>{labels.introTitle[locale]}</h2>
      <p className={styles.introBody}>{labels.introBody[locale]}</p>

      <ul className={styles.introBullets}>
        {labels.introBullets.map((bullet) => (
          <li key={bullet[locale]} className={styles.introBullet}>
            {bullet[locale]}
          </li>
        ))}
      </ul>

      <button type="button" className={styles.startButton} onClick={onStart}>
        {labels.introCta[locale]}
      </button>

      {hasResumable && (
        <p className={styles.resumeNote}>
          You have a saved audit in progress.{' '}
          <button
            type="button"
            onClick={onResume}
            style={{
              background: 'transparent',
              border: 0,
              padding: 0,
              color: 'var(--color-primary)',
              cursor: 'pointer',
              fontWeight: 600,
              textDecoration: 'underline',
            }}
          >
            Resume where you left off
          </button>
          .
        </p>
      )}
    </section>
  )
}
