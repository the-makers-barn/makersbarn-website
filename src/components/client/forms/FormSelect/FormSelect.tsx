'use client'

import { memo, type SelectHTMLAttributes } from 'react'

import styles from './FormSelect.module.css'

interface SelectOption {
  value: string
  label: string
}

interface FormSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  label: string
  id: string
  options: SelectOption[]
  error?: string
  required?: boolean
  placeholder?: string
  helpText?: string
}

export const FormSelect = memo(function FormSelect({
  label,
  id,
  options,
  error,
  required,
  placeholder,
  helpText,
  className,
  ...selectProps
}: FormSelectProps) {
  const hasError = Boolean(error)

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <select
        id={id}
        className={`${styles.select} ${hasError ? styles.selectError : ''} ${className || ''}`}
        aria-invalid={hasError}
        aria-describedby={(() => {
          if (error) {
            return `${id}-error`
          }
          if (helpText) {
            return `${id}-help`
          }
          return undefined
        })()}
        {...selectProps}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helpText && !error && (
        <p id={`${id}-help`} className={styles.helpText}>
          {helpText}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
})
