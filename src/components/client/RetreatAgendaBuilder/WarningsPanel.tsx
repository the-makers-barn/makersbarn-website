'use client'

import type { ReactNode } from 'react'

import type { Dictionary } from '@/i18n/types'
import { formatDuration, formatMinutesAsTime } from '@/lib/tools/agenda/format'
import type { AgendaWarning } from '@/lib/tools/agenda/validation'

import styles from './RetreatAgendaBuilder.module.css'

export interface WarningsPanelProps {
  warnings: AgendaWarning[]
  t: Dictionary
}

function renderWarning(warning: AgendaWarning, t: Dictionary): string {
  const w = t.tools.agenda.warnings
  const day = String(warning.dayIndex)
  switch (warning.code) {
    case 'tooMuchStructured':
      return w.tooMuchStructured
        .replaceAll('{day}', day)
        .replaceAll('{minutes}', formatDuration(warning.detail.minutes ?? 0))
    case 'noFreeTime':
      return w.noFreeTime.replaceAll('{day}', day)
    case 'overlongBlock':
      return w.overlongBlock
        .replaceAll('{day}', day)
        .replaceAll('{title}', warning.detail.title ?? '')
        .replaceAll('{minutes}', formatDuration(warning.detail.minutes ?? 0))
    case 'earlyStart':
      return w.earlyStart
        .replaceAll('{day}', day)
        .replaceAll('{time}', formatMinutesAsTime(warning.detail.minutes ?? 0))
    case 'lateEnd':
      return w.lateEnd
        .replaceAll('{day}', day)
        .replaceAll('{time}', formatMinutesAsTime(warning.detail.minutes ?? 0))
    case 'overlap':
      return w.overlap
        .replaceAll('{day}', day)
        .replaceAll('{title}', warning.detail.title ?? '')
  }
}

export function WarningsPanel({ warnings, t }: WarningsPanelProps): ReactNode {
  if (warnings.length === 0) {
    return null
  }
  return (
    <section
      className={styles.warnings}
      aria-labelledby="agenda-warnings-heading"
    >
      <h2 id="agenda-warnings-heading" className={styles.warningsHeading}>
        {t.tools.agenda.warnings.heading}
      </h2>
      <ul className={styles.warningsList}>
        {warnings.map((warning, idx) => (
          <li
            key={`${warning.code}-${warning.dayIndex}-${idx}`}
            className={styles.warningsItem}
          >
            {renderWarning(warning, t)}
          </li>
        ))}
      </ul>
    </section>
  )
}
