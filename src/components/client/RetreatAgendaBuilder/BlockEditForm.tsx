'use client'

import { useState, type FormEvent, type ReactNode } from 'react'

import { AGENDA_CUSTOM_BLOCK_LIMITS, AgendaBlockType } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import {
  formatMinutesAsTime,
  parseTimeToMinutes,
} from '@/lib/tools/agenda/format'
import type { AgendaResolvedBlock } from '@/types/tools'

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

export interface BlockEditDraft {
  startMinute: number
  durationMinute: number
  title: string
  notes: string
  type: AgendaBlockType
}

export interface BlockEditFormProps {
  block: AgendaResolvedBlock
  disabled: boolean
  onSave: (draft: BlockEditDraft) => void
  onCancel: () => void
  t: Dictionary
}

export function BlockEditForm({
  block,
  disabled,
  onSave,
  onCancel,
  t,
}: BlockEditFormProps): ReactNode {
  const labels = t.tools.agenda.block
  const blockTypeLabels = t.tools.agenda.blockTypeLabels
  const [time, setTime] = useState(formatMinutesAsTime(block.startMinute))
  const [duration, setDuration] = useState(String(block.durationMinute))
  const [title, setTitle] = useState(block.title)
  const [notes, setNotes] = useState(block.notes)
  const [type, setType] = useState<AgendaBlockType>(block.type)

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const startMinute = parseTimeToMinutes(time)
    const durationMinute = Number.parseInt(duration, 10)
    onSave({
      startMinute: startMinute ?? block.startMinute,
      durationMinute: Number.isFinite(durationMinute)
        ? durationMinute
        : block.durationMinute,
      title,
      notes,
      type,
    })
  }

  return (
    <form className={styles.editForm} onSubmit={handleSubmit}>
      <div className={styles.editGrid}>
        <label className={styles.editField}>
          {labels.timeLabel}
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            disabled={disabled}
            required
          />
        </label>
        <label className={styles.editField}>
          {labels.durationLabel}
          <input
            type="number"
            min={AGENDA_CUSTOM_BLOCK_LIMITS.MIN_DURATION_MIN}
            max={AGENDA_CUSTOM_BLOCK_LIMITS.MAX_DURATION_MIN}
            step={5}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            disabled={disabled}
            required
          />
        </label>
        {block.isCustom && (
          <label className={styles.editField}>
            {labels.typeLabel}
            <select
              value={type}
              onChange={(e) => setType(e.target.value as AgendaBlockType)}
              disabled={disabled}
            >
              {BLOCK_TYPE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {blockTypeLabels[opt]}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
      <label className={`${styles.editField} ${styles.editFieldFull}`}>
        {labels.titleLabel}
        <input
          type="text"
          value={title}
          maxLength={AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TITLE_LENGTH}
          onChange={(e) => setTitle(e.target.value)}
          disabled={disabled}
          required
        />
      </label>
      <label className={`${styles.editField} ${styles.editFieldFull}`}>
        {labels.notesLabel}
        <textarea
          value={notes}
          maxLength={AGENDA_CUSTOM_BLOCK_LIMITS.MAX_NOTES_LENGTH}
          onChange={(e) => setNotes(e.target.value)}
          disabled={disabled}
        />
      </label>
      <div className={styles.editActions}>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={onCancel}
          disabled={disabled}
        >
          {labels.cancel}
        </button>
        <button type="submit" className={styles.primaryButton} disabled={disabled}>
          {labels.save}
        </button>
      </div>
    </form>
  )
}
