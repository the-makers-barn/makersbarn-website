'use client'

import { useState, type FormEvent, type ReactNode } from 'react'

import { CALENDAR_CUSTOM_ITEM_LIMITS, type CalendarPhaseId } from '@/constants/tools'

import styles from './RetreatLaunchCalendar.module.css'

export interface CustomItemInputProps {
  phaseId: CalendarPhaseId
  placeholder: string
  addLabel: string
  disabled: boolean
  currentCount: number
  onAdd: (text: string) => void
}

const INPUT_NAME_PREFIX = 'calendar-custom-item-'

export function CustomItemInput(props: CustomItemInputProps): ReactNode {
  const { phaseId, placeholder, addLabel, disabled, currentCount, onAdd } = props
  const [value, setValue] = useState('')
  const trimmed = value.trim()
  const isEmpty = trimmed.length === 0
  const inputId = `${INPUT_NAME_PREFIX}${phaseId}`

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (disabled || isEmpty) {
      return
    }
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form className={styles.customItemInput} onSubmit={handleSubmit}>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH}
        aria-label={placeholder}
      />
      <button
        type="submit"
        className={styles.customItemAddBtn}
        disabled={disabled || isEmpty}
      >
        {addLabel}
      </button>
      <span className={styles.customItemCounter} aria-live="polite">
        {currentCount}/{CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH}
      </span>
    </form>
  )
}
