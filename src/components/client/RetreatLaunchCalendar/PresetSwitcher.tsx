'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

import {
  CALENDAR_PRESETS_ORDER,
  CALENDAR_ROUTE_BY_PRESET,
  TimelinePreset,
} from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import { Language } from '@/types/common'

import styles from './RetreatLaunchCalendar.module.css'

export interface PresetSwitcherProps {
  currentPreset: TimelinePreset
  locale: Language
  t: Dictionary
}

const PRESET_LABEL_KEYS: Record<TimelinePreset, 'preset3' | 'preset6' | 'preset9' | 'preset12'> = {
  [TimelinePreset.THREE_MONTHS]: 'preset3',
  [TimelinePreset.SIX_MONTHS]: 'preset6',
  [TimelinePreset.NINE_MONTHS]: 'preset9',
  [TimelinePreset.TWELVE_MONTHS]: 'preset12',
}

export function PresetSwitcher(props: PresetSwitcherProps): ReactNode {
  const { currentPreset, locale, t } = props
  const labels = t.tools.calendar.presetSwitcher

  return (
    <nav
      className={styles.presetSwitcher}
      role="tablist"
      aria-label={labels.label}
    >
      {CALENDAR_PRESETS_ORDER.map((preset) => {
        const isActive = preset === currentPreset
        const labelKey = PRESET_LABEL_KEYS[preset]
        const href = getLocalizedPath(CALENDAR_ROUTE_BY_PRESET[preset], locale)
        const className = isActive
          ? `${styles.presetTab} ${styles.presetTabActive}`
          : styles.presetTab
        return (
          <Link
            key={preset}
            href={href}
            role="tab"
            className={className}
            aria-selected={isActive}
            aria-current={isActive ? 'page' : undefined}
          >
            {labels[labelKey]}
          </Link>
        )
      })}
    </nav>
  )
}
