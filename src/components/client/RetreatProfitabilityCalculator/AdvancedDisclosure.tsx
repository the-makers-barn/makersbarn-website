'use client'

import { useState, type ReactNode } from 'react'

import styles from './RetreatProfitabilityCalculator.module.css'

interface AdvancedDisclosureProps {
  label: string
  children: ReactNode
}

export function AdvancedDisclosure({ label, children }: AdvancedDisclosureProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.advancedWrapper}>
      <button
        type="button"
        className={styles.advancedToggle}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '−' : '+'} {label}
      </button>
      {open && <div className={styles.advancedContent}>{children}</div>}
    </div>
  )
}
