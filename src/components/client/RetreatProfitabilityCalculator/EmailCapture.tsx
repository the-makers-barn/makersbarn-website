'use client'

import { useId, useState, useTransition } from 'react'
import { track } from '@vercel/analytics'

import { emailCalculatorSummary } from '@/actions/tools'
import { AnalyticsEvent } from '@/constants/analytics'
import { ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type { CalculatorInputs, CalculatorResults } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import styles from './RetreatProfitabilityCalculator.module.css'

interface EmailCaptureProps {
  variant: ToolVariant
  locale: Language
  inputs: CalculatorInputs
  results: CalculatorResults
  t: Dictionary
}

type Status = 'idle' | 'success' | 'error'

export function EmailCapture({ variant, locale, inputs, results, t }: EmailCaptureProps) {
  const labels = t.tools.calculator.email
  const id = useId()
  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [pending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      const result = await emailCalculatorSummary({
        email,
        inputs,
        results,
        variant,
        newsletterOptIn: optIn,
        locale,
      })
      if (result.success) {
        setStatus('success')
        track(AnalyticsEvent.CALCULATOR_EMAIL_CAPTURED, { variant })
      } else {
        setStatus('error')
      }
    })
  }

  if (status === 'success') {
    return <p className={styles.emailSuccess}>{labels.success}</p>
  }

  return (
    <form className={styles.emailForm} onSubmit={handleSubmit}>
      <p className={styles.emailHeading}>{labels.heading}</p>
      <div className={styles.emailFields}>
        <label htmlFor={id} className={styles.srOnly}>{labels.heading}</label>
        <input
          id={id}
          type="email"
          required
          className={styles.emailInput}
          placeholder={labels.placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== 'idle') { setStatus('idle') }
          }}
        />
        <button type="submit" className={styles.emailSubmit} disabled={pending}>
          {pending ? labels.sending : labels.submit}
        </button>
      </div>
      <label className={styles.emailOptIn}>
        <input type="checkbox" checked={optIn} onChange={(e) => setOptIn(e.target.checked)} />
        <span>{labels.optInLabel}</span>
      </label>
      {status === 'error' && <p className={styles.emailError}>{labels.error}</p>}
    </form>
  )
}
