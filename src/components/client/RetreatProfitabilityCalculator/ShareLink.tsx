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

export function ShareLink({ variant, t }: ShareLinkProps) {
  const labels = t.tools.calculator.share
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (typeof window === 'undefined') { return }
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      track(AnalyticsEvent.CALCULATOR_SHARED, { variant, channel: 'copy' })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard permission denied or unsupported — silent no-op
    }
  }

  const handleWhatsApp = () => {
    if (typeof window === 'undefined') { return }
    const text = `${labels.whatsappMessage} ${window.location.href}`
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    track(AnalyticsEvent.CALCULATOR_SHARED, { variant, channel: 'whatsapp' })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

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
          {copied ? labels.copied : labels.copy}
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
