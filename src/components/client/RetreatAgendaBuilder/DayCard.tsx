'use client'

import type { Dispatch, ReactNode } from 'react'

import { AGENDA_CUSTOM_BLOCK_LIMITS } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { formatDuration } from '@/lib/tools/agenda/format'
import type { AgendaAction } from '@/lib/tools/agenda/state'
import type {
  AgendaDefaultDay,
  AgendaResolvedDay,
  AgendaState,
} from '@/types/tools'
import type { Language } from '@/types/common'

import { AddBlockForm } from './AddBlockForm'
import { BlockRow } from './BlockRow'
import styles from './RetreatAgendaBuilder.module.css'

export interface DayCardProps {
  day: AgendaResolvedDay
  defaultDay: AgendaDefaultDay | undefined
  state: AgendaState
  disabled: boolean
  dispatch: Dispatch<AgendaAction>
  locale: Language
  t: Dictionary
}

function totalMinutes(day: AgendaResolvedDay): number {
  return day.blocks.reduce((sum, b) => sum + b.durationMinute, 0)
}

function customCountInDay(state: AgendaState, dayIndex: number): number {
  return state.customBlocks.filter((c) => c.dayIndex === dayIndex).length
}

export function DayCard({
  day,
  defaultDay,
  state,
  disabled,
  dispatch,
  locale,
  t,
}: DayCardProps): ReactNode {
  const labels = t.tools.agenda
  const dayHeading = labels.dayHeading.replaceAll('{day}', String(day.dayIndex))
  const summary = formatDuration(totalMinutes(day))

  const hiddenDefaults = defaultDay
    ? defaultDay.blocks.filter((b) => b.id in state.hiddenBlockIds)
    : []

  const isAtPerDayLimit =
    customCountInDay(state, day.dayIndex) >= AGENDA_CUSTOM_BLOCK_LIMITS.MAX_PER_DAY
  const isAtTotalLimit =
    state.customBlocks.length >= AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TOTAL

  return (
    <li className={styles.dayCard}>
      <header className={styles.dayHeader}>
        <span className={styles.dayEyebrow}>{dayHeading}</span>
        <h2 className={styles.dayTitle}>{day.title}</h2>
        <span className={styles.daySummary}>{summary}</span>
      </header>

      {day.blocks.length === 0 ? (
        <p className={styles.emptyDay}>{labels.emptyDay}</p>
      ) : (
        <ol className={styles.blockList}>
          {day.blocks.map((block) => (
            <BlockRow
              key={block.id}
              block={block}
              disabled={disabled}
              dispatch={dispatch}
              t={t}
            />
          ))}
        </ol>
      )}

      {hiddenDefaults.length > 0 && (
        <ul className={styles.blockList}>
          {hiddenDefaults.map((block) => (
            <li key={block.id} className={styles.hiddenBlockRow}>
              <span className={styles.hiddenBlockTitle}>{block.title[locale]}</span>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() =>
                  dispatch({ type: 'TOGGLE_HIDE_DEFAULT', blockId: block.id })
                }
                disabled={disabled}
              >
                {labels.block.restore}
              </button>
            </li>
          ))}
        </ul>
      )}

      <AddBlockForm
        dayIndex={day.dayIndex}
        disabled={disabled}
        isAtPerDayLimit={isAtPerDayLimit}
        isAtTotalLimit={isAtTotalLimit}
        dispatch={dispatch}
        t={t}
      />
    </li>
  )
}
