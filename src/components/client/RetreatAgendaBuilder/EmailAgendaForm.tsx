'use client'

import { useState, type FormEvent, type ReactNode } from 'react'

import { emailAgendaPlan } from '@/actions/tools'
import type { Dictionary } from '@/i18n/types'
import type {
  AgendaState,
  EmailAgendaPlanInput,
  EmailAgendaPlanResult,
} from '@/types/tools'

import styles from './RetreatAgendaBuilder.module.css'

export interface EmailAgendaFormProps {
  state: AgendaState
  disabled: boolean
  t: Dictionary
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
  NonNullable<EmailAgendaPlanResult['error']>,
  ErrorMessageKey
> = {
  rate_limit: 'errorRateLimit',
  invalid_email: 'errorInvalidEmail',
  send_failed: 'errorSendFailed',
  validation: 'errorGeneric',
}

function buildPayload(
  email: string,
  state: AgendaState,
  contactConsent: boolean,
): EmailAgendaPlanInput {
  return {
    email,
    niche: state.niche,
    length: state.length,
    hiddenBlockIds: Object.keys(state.hiddenBlockIds),
    blockOverrides: Object.entries(state.blockOverrides).map(([blockId, override]) => ({
      blockId,
      ...override,
    })),
    customBlocks: state.customBlocks.map((c) => ({
      dayIndex: c.dayIndex,
      type: c.type,
      startMinute: c.startMinute,
      durationMinute: c.durationMinute,
      title: c.title,
      notes: c.notes,
    })),
    contactConsent,
  }
}

export function EmailAgendaForm({
  state,
  disabled,
  t,
}: EmailAgendaFormProps): ReactNode {
  const labels = t.tools.agenda.emailForm
  const heading = labels.heading.replaceAll('{length}', String(state.length))
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
      const result = await emailAgendaPlan(buildPayload(email.trim(), state, contactConsent))
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
