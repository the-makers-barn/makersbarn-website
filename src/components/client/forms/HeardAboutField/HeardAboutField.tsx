'use client'

import { memo, useCallback, type ChangeEvent, type KeyboardEvent } from 'react'

import { HEARD_ABOUT_DETAIL_MAX } from '@/constants/heardAbout'
import { useTranslation } from '@/context'
import { cn } from '@/lib/cn'
import { isHeardAboutDetailSource } from '@/lib/heardAbout'
import { HeardAboutSource } from '@/types'

import styles from './HeardAboutField.module.css'

export enum HeardAboutTone {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface HeardAboutValue {
  heardAbout?: HeardAboutSource
  heardAboutDetail: string
}

interface HeardAboutFieldProps extends HeardAboutValue {
  idPrefix: string
  tone: HeardAboutTone
  onChange: (value: HeardAboutValue) => void
}

const OPTIONS = Object.values(HeardAboutSource)
const ENTER_KEY = 'Enter'

/** On the quote wizard's last step, Enter in this box would otherwise send the whole request. */
function preventImplicitSubmit(e: KeyboardEvent<HTMLInputElement>): void {
  if (e.key === ENTER_KEY) {
    e.preventDefault()
  }
}

/**
 * Optional "How did you hear about us?" chips. A tap selects, a second tap on
 * the same chip clears it. Some answers open a short follow-up text box.
 */
export const HeardAboutField = memo(function HeardAboutField({
  idPrefix,
  tone,
  heardAbout,
  heardAboutDetail,
  onChange,
}: HeardAboutFieldProps) {
  const { t } = useTranslation('heardAbout')
  const detailId = `${idPrefix}-detail`

  const handleSelect = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange({ heardAbout: e.target.value as HeardAboutSource, heardAboutDetail: '' })
    },
    [onChange]
  )

  const handleClear = useCallback(() => {
    onChange({ heardAbout: undefined, heardAboutDetail: '' })
  }, [onChange])

  const handleDetailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange({ heardAbout, heardAboutDetail: e.target.value })
    },
    [onChange, heardAbout]
  )

  return (
    <fieldset className={cn(styles.fieldset, tone === HeardAboutTone.DARK && styles.dark)}>
      <legend className={styles.legend}>
        {t.legend} <span className={styles.optional}>({t.optional})</span>
      </legend>

      <div className={styles.chips}>
        {OPTIONS.map((option) => {
          const id = `${idPrefix}-${option}`
          const isSelected = heardAbout === option
          return (
            <label key={option} htmlFor={id} className={cn(styles.chip, isSelected && styles.chipSelected)}>
              <input
                id={id}
                type="radio"
                name={idPrefix}
                value={option}
                checked={isSelected}
                onChange={handleSelect}
                onClick={isSelected ? handleClear : undefined}
                className={styles.radio}
              />
              {t.options[option]}
            </label>
          )
        })}
      </div>

      {isHeardAboutDetailSource(heardAbout) && (
        <div className={styles.detail}>
          <label htmlFor={detailId} className={styles.detailLabel}>
            {t.detailLabels[heardAbout]}
          </label>
          <input
            id={detailId}
            type="text"
            value={heardAboutDetail}
            onChange={handleDetailChange}
            onKeyDown={preventImplicitSubmit}
            maxLength={HEARD_ABOUT_DETAIL_MAX}
            className={styles.detailInput}
          />
        </div>
      )}
    </fieldset>
  )
})
