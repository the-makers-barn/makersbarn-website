'use client'

import type { ReactNode } from 'react'

import { AGENDA_LENGTHS_ORDER, AgendaLength } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'

import styles from './RetreatAgendaBuilder.module.css'

export interface LengthSwitcherProps {
  current: AgendaLength
  onChange: (length: AgendaLength) => void
  disabled: boolean
  t: Dictionary
}

function labelForLength(length: AgendaLength, t: Dictionary): string {
  const labels = t.tools.agenda.lengthSwitcher
  switch (length) {
    case AgendaLength.TWO_DAY:
      return labels.preset2
    case AgendaLength.THREE_DAY:
      return labels.preset3
    case AgendaLength.FIVE_DAY:
      return labels.preset5
    case AgendaLength.SEVEN_DAY:
      return labels.preset7
  }
}

export function LengthSwitcher({
  current,
  onChange,
  disabled,
  t,
}: LengthSwitcherProps): ReactNode {
  const switcher = t.tools.agenda.lengthSwitcher
  return (
    <div
      role="tablist"
      aria-label={switcher.label}
      className={styles.lengthSwitcher}
    >
      {AGENDA_LENGTHS_ORDER.map((length) => {
        const isActive = length === current
        return (
          <button
            key={length}
            role="tab"
            type="button"
            aria-selected={isActive}
            disabled={disabled}
            className={
              isActive
                ? `${styles.lengthTab} ${styles.lengthTabActive}`
                : styles.lengthTab
            }
            onClick={() => onChange(length)}
          >
            {labelForLength(length, t)}
          </button>
        )
      })}
    </div>
  )
}
