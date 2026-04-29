'use client'

import type { ReactNode } from 'react'

import { MilestoneStatus } from '@/constants/tools'

import styles from './RetreatLaunchCalendar.module.css'

export interface MilestoneItemLabels {
  markDone: string
  markPending: string
  dismiss: string
  restore: string
}

export interface MilestoneItemProps {
  text: string
  status: MilestoneStatus
  labels: MilestoneItemLabels
  disabled: boolean
  onToggleDone: () => void
  onToggleDismissed: () => void
}

export function MilestoneItem(props: MilestoneItemProps): ReactNode {
  const { text, status, labels, disabled, onToggleDone, onToggleDismissed } = props
  const isDone = status === MilestoneStatus.DONE
  const isDismissed = status === MilestoneStatus.DISMISSED
  const textClassName = isDismissed
    ? `${styles.milestoneText} ${styles.milestoneTextDismissed}`
    : styles.milestoneText

  return (
    <li className={styles.milestoneItem}>
      <label className={styles.milestoneCheckbox}>
        <input
          type="checkbox"
          checked={isDone}
          disabled={disabled}
          onChange={onToggleDone}
          aria-label={isDone ? labels.markPending : labels.markDone}
        />
      </label>
      <span className={textClassName}>{text}</span>
      <button
        type="button"
        className={styles.milestoneDismissButton}
        disabled={disabled}
        aria-pressed={isDismissed}
        onClick={onToggleDismissed}
      >
        {isDismissed ? labels.restore : labels.dismiss}
      </button>
    </li>
  )
}
