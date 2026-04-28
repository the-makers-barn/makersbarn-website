'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics'

import { AnalyticsEvent } from '@/constants/analytics'
import { ToolVariant } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'

import styles from './RetreatProfitabilityCalculator.module.css'

interface ShareLinkProps {
  variant: ToolVariant
  t: Dictionary
}

type CopyState = 'idle' | 'copied' | 'error'

export function ShareLink({ variant, t }: ShareLinkProps) {
  const labels = t.tools.calculator.share
  const [copyState, setCopyState] = useState<CopyState>('idle')

  const handleCopy = async () => {
    if (typeof window === 'undefined') { return }
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopyState('copied')
      track(AnalyticsEvent.CALCULATOR_SHARED, { variant, channel: 'copy' })
      setTimeout(() => setCopyState('idle'), 2000)
    } catch {
      setCopyState('error')
      setTimeout(() => setCopyState('idle'), 2000)
    }
  }

  const handleWhatsApp = () => {
    if (typeof window === 'undefined') { return }
    const text = `${labels.whatsappMessage} ${window.location.href}`
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    track(AnalyticsEvent.CALCULATOR_SHARED, { variant, channel: 'whatsapp' })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  let copyLabel: string
  if (copyState === 'copied') { copyLabel = labels.copied }
  else if (copyState === 'error') { copyLabel = labels.copyFailed }
  else { copyLabel = labels.copy }

  return (
    <div className={styles.share}>
      <p className={styles.shareHeading}>{labels.heading}</p>
      <p className={styles.shareIntro}>{labels.intro}</p>
      <div className={styles.shareButtons}>
        <button
          type="button"
          className={styles.shareButton}
          onClick={() => { void handleCopy() }}
        >
          {copyLabel}
        </button>
        <button
          type="button"
          className={`${styles.shareButton} ${styles.shareButtonWhatsapp}`}
          onClick={handleWhatsApp}
        >
          {labels.whatsapp}
        </button>
      </div>
    </div>
  )
}
