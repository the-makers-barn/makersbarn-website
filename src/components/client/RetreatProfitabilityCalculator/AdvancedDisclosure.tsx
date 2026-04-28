'use client'

import { useId, useState, type ReactNode } from 'react'

import styles from './RetreatProfitabilityCalculator.module.css'

interface AdvancedDisclosureProps {
  label: string
  children: ReactNode
}

export function AdvancedDisclosure({ label, children }: AdvancedDisclosureProps) {
  const [open, setOpen] = useState(false)
  const contentId = useId()
  return (
    <div className={styles.advancedWrapper}>
      <button
        type="button"
        className={styles.advancedToggle}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden>{open ? '−' : '+'}</span> {label}
      </button>
      {open && <div id={contentId} className={styles.advancedContent}>{children}</div>}
    </div>
  )
}
