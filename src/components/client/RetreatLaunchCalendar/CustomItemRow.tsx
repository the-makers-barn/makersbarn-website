'use client'

import type { ReactNode } from 'react'

import { MilestoneStatus } from '@/constants/tools'
import type { CustomMilestone } from '@/types/tools'

import styles from './RetreatLaunchCalendar.module.css'

export interface CustomItemRowLabels {
  remove: string
  dismiss: string
  restore: string
  markDone: string
  markPending: string
}

export interface CustomItemRowProps {
  item: CustomMilestone
  labels: CustomItemRowLabels
  disabled: boolean
  onToggleDone: () => void
  onToggleDismissed: () => void
  onRemove: () => void
}

export function CustomItemRow(props: CustomItemRowProps): ReactNode {
  const { item, labels, disabled, onToggleDone, onToggleDismissed, onRemove } = props
  const isDone = item.status === MilestoneStatus.DONE
  const isDismissed = item.status === MilestoneStatus.DISMISSED
  const textClassName = isDismissed
    ? `${styles.milestoneText} ${styles.milestoneTextDismissed}`
    : styles.milestoneText

  return (
    <li className={styles.customItemRow}>
      <label className={styles.milestoneCheckbox}>
        <input
          type="checkbox"
          checked={isDone}
          disabled={disabled}
          onChange={onToggleDone}
          aria-label={isDone ? labels.markPending : labels.markDone}
        />
      </label>
      <span className={textClassName}>{item.text}</span>
      <button
        type="button"
        className={styles.milestoneDismissButton}
        disabled={disabled}
        aria-pressed={isDismissed}
        onClick={onToggleDismissed}
      >
        {isDismissed ? labels.restore : labels.dismiss}
      </button>
      <button
        type="button"
        className={styles.customItemRemove}
        disabled={disabled}
        onClick={onRemove}
      >
        {labels.remove}
      </button>
    </li>
  )
}
