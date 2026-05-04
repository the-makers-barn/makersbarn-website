'use client'

import { useState, type Dispatch, type ReactNode } from 'react'

import { AGENDA_CUSTOM_BLOCK_LIMITS, AgendaBlockType } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { parseTimeToMinutes } from '@/lib/tools/agenda/format'
import type { AgendaAction } from '@/lib/tools/agenda/state'

import styles from './RetreatAgendaBuilder.module.css'

const BLOCK_TYPE_OPTIONS: AgendaBlockType[] = [
  AgendaBlockType.RITUAL,
  AgendaBlockType.PRACTICE,
  AgendaBlockType.WORKSHOP,
  AgendaBlockType.MEAL,
  AgendaBlockType.FREE,
  AgendaBlockType.REST,
  AgendaBlockType.TRAVEL,
]

const DEFAULT_NEW_BLOCK = {
  time: '14:00',
  duration: '60',
  title: '',
  notes: '',
  type: AgendaBlockType.WORKSHOP,
}

export interface AddBlockFormProps {
  dayIndex: number
  disabled: boolean
  isAtPerDayLimit: boolean
  isAtTotalLimit: boolean
  dispatch: Dispatch<AgendaAction>
  t: Dictionary
}

export function AddBlockForm({
  dayIndex,
  disabled,
  isAtPerDayLimit,
  isAtTotalLimit,
  dispatch,
  t,
}: AddBlockFormProps): ReactNode {
  const labels = t.tools.agenda.addBlock
  const blockLabels = t.tools.agenda.block
  const blockTypeLabels = t.tools.agenda.blockTypeLabels
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState(DEFAULT_NEW_BLOCK)

  const buttonDisabled = disabled || isAtPerDayLimit || isAtTotalLimit

  const handleSubmit = (): void => {
    const startMinute = parseTimeToMinutes(draft.time)
    const durationMinute = Number.parseInt(draft.duration, 10)
    if (startMinute === null || !Number.isFinite(durationMinute)) {
      return
    }
    if (draft.title.trim().length === 0) {
      return
    }
    dispatch({
      type: 'ADD_CUSTOM',
      dayIndex,
      blockType: draft.type,
      startMinute,
      durationMinute,
      title: draft.title,
      notes: draft.notes,
    })
    setDraft(DEFAULT_NEW_BLOCK)
    setOpen(false)
  }

  if (!open) {
    return (
      <div>
        <button
          type="button"
          className={styles.addBlockTrigger}
          disabled={buttonDisabled}
          onClick={() => setOpen(true)}
        >
          + {labels.button}
        </button>
        {isAtPerDayLimit && !isAtTotalLimit && (
          <span className={styles.capNote}> · {labels.capReached}</span>
        )}
        {isAtTotalLimit && (
          <span className={styles.capNote}> · {labels.totalCapReached}</span>
        )}
      </div>
    )
  }

  const handleCancel = (): void => {
    setDraft(DEFAULT_NEW_BLOCK)
    setOpen(false)
  }

  return (
    <form
      className={styles.editForm}
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <p className={styles.warningsHeading} style={{ fontSize: 'var(--font-size-sm)' }}>
        {labels.heading}
      </p>
      <div className={styles.editGrid}>
        <label className={styles.editField}>
          {blockLabels.timeLabel}
          <input
            type="time"
            value={draft.time}
            onChange={(e) => setDraft((d) => ({ ...d, time: e.target.value }))}
            disabled={disabled}
            required
          />
        </label>
        <label className={styles.editField}>
          {blockLabels.durationLabel}
          <input
            type="number"
            min={AGENDA_CUSTOM_BLOCK_LIMITS.MIN_DURATION_MIN}
            max={AGENDA_CUSTOM_BLOCK_LIMITS.MAX_DURATION_MIN}
            step={5}
            value={draft.duration}
            onChange={(e) => setDraft((d) => ({ ...d, duration: e.target.value }))}
            disabled={disabled}
            required
          />
        </label>
        <label className={styles.editField}>
          {blockLabels.typeLabel}
          <select
            value={draft.type}
            onChange={(e) =>
              setDraft((d) => ({ ...d, type: e.target.value as AgendaBlockType }))
            }
            disabled={disabled}
          >
            {BLOCK_TYPE_OPTIONS.map((type) => (
              <option key={type} value={type}>
                {blockTypeLabels[type]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={`${styles.editField} ${styles.editFieldFull}`}>
        {blockLabels.titleLabel}
        <input
          type="text"
          maxLength={AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TITLE_LENGTH}
          placeholder={labels.titlePlaceholder}
          value={draft.title}
          onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
          disabled={disabled}
          required
        />
      </label>
      <label className={`${styles.editField} ${styles.editFieldFull}`}>
        {blockLabels.notesLabel}
        <textarea
          maxLength={AGENDA_CUSTOM_BLOCK_LIMITS.MAX_NOTES_LENGTH}
          placeholder={labels.notesPlaceholder}
          value={draft.notes}
          onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
          disabled={disabled}
        />
      </label>
      <div className={styles.editActions}>
        <button type="button" className={styles.secondaryButton} onClick={handleCancel} disabled={disabled}>
          {labels.cancel}
        </button>
        <button type="submit" className={styles.primaryButton} disabled={disabled || draft.title.trim().length === 0}>
          {labels.submit}
        </button>
      </div>
    </form>
  )
}
