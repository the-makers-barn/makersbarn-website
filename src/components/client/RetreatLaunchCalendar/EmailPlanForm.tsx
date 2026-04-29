'use client'

import { useState, type FormEvent, type ReactNode } from 'react'

import { emailCalendarPlan } from '@/actions/tools'
import { MilestoneStatus, TimelinePreset } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { Language } from '@/types/common'
import type {
  CalendarState,
  EmailCalendarPlanInput,
  EmailCalendarPlanResult,
} from '@/types/tools'

import styles from './RetreatLaunchCalendar.module.css'

export interface EmailPlanFormProps {
  preset: TimelinePreset
  locale: Language
  t: Dictionary
  state: CalendarState
  disabled: boolean
}

type FormStatus =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'success' }
  | { kind: 'error'; messageKey: ErrorMessageKey }

type ErrorMessageKey =
  | 'errorRateLimit'
  | 'errorInvalidEmail'
  | 'errorSendFailed'
  | 'errorGeneric'

const ERROR_KEY_BY_CODE: Record<
  NonNullable<EmailCalendarPlanResult['error']>,
  ErrorMessageKey
> = {
  rate_limit: 'errorRateLimit',
  invalid_email: 'errorInvalidEmail',
  send_failed: 'errorSendFailed',
  validation: 'errorGeneric',
}

function buildPayload(
  email: string,
  preset: TimelinePreset,
  state: CalendarState,
  contactConsent: boolean,
): EmailCalendarPlanInput {
  return {
    email,
    preset,
    itemStates: state.itemStates,
    customItems: state.customItems
      .filter(
        (c): c is typeof c & { status: Exclude<typeof c.status, MilestoneStatus.PENDING> } =>
          c.status !== MilestoneStatus.PENDING,
      )
      .map((c) => ({
        phaseId: c.phaseId,
        text: c.text,
        status: c.status,
      })),
    contactConsent,
  }
}

export function EmailPlanForm(props: EmailPlanFormProps): ReactNode {
  const { preset, t, state, disabled } = props
  const labels = t.tools.calendar.emailForm
  const heading = labels.heading.replace('{months}', String(preset))
  const [email, setEmail] = useState('')
  const [contactConsent, setContactConsent] = useState(false)
  const [status, setStatus] = useState<FormStatus>({ kind: 'idle' })

  const isSending = status.kind === 'sending'
  const submitDisabled = disabled || isSending || email.trim().length === 0

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (submitDisabled) {
      return
    }
    setStatus({ kind: 'sending' })
    try {
      const result = await emailCalendarPlan(
        buildPayload(email.trim(), preset, state, contactConsent),
      )
      if (result.ok) {
        setStatus({ kind: 'success' })
        return
      }
      const messageKey = result.error ? ERROR_KEY_BY_CODE[result.error] : 'errorGeneric'
      setStatus({ kind: 'error', messageKey })
    } catch {
      setStatus({ kind: 'error', messageKey: 'errorGeneric' })
    }
  }

  return (
    <form
      className={styles.emailForm}
      onSubmit={(e) => {
        void handleSubmit(e)
      }}
    >
      <h3 className={styles.emailFormHeading}>{heading}</h3>
      <input
        type="email"
        className={styles.emailFormInput}
        placeholder={labels.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={disabled || isSending}
        required
        aria-label={labels.placeholder}
      />
      <label className={styles.emailFormCheckbox}>
        <input
          type="checkbox"
          checked={contactConsent}
          onChange={(e) => setContactConsent(e.target.checked)}
          disabled={disabled || isSending}
        />
        <span>{labels.contactConsent}</span>
      </label>
      <button
        type="submit"
        className={styles.emailFormSubmit}
        disabled={submitDisabled}
      >
        {isSending ? labels.sending : labels.submit}
      </button>
      {status.kind === 'success' && (
        <p className={styles.emailFormStatus} data-state="success" role="status">
          {labels.success}
        </p>
      )}
      {status.kind === 'error' && (
        <p className={styles.emailFormStatus} data-state="error" role="alert">
          {labels[status.messageKey]}
        </p>
      )}
    </form>
  )
}
