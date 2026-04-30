'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import type { Chef, ChefInquiryDict, Language } from '@/types'

import { ChefInquiryForm } from './ChefInquiryForm'
import styles from './ChefInquiryForm.module.css'

const INQUIRY_HASH = '#chef-inquiry'

type Props = { chef: Chef; lang: Language; inquiryDict: ChefInquiryDict }

export function ChefInquiryModal({ chef, lang, inquiryDict }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    if (window.location.hash === INQUIRY_HASH) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  // Open via hash navigation (#chef-inquiry).
  useEffect(() => {
    const handler = () => {
      if (window.location.hash === INQUIRY_HASH) {
        setIsOpen(true)
      }
    }
    handler()
    window.addEventListener('hashchange', handler)
    return () => {
      window.removeEventListener('hashchange', handler)
    }
  }, [])

  // Esc to close.
  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [isOpen, close])

  if (!isOpen) {
    return null
  }

  const title = inquiryDict.modalTitle.replace('{name}', chef.name)

  return (
    <div className={styles.overlay} onClick={close} aria-hidden={false}>
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chef-inquiry-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2 id="chef-inquiry-title" className={styles.modalTitle}>{title}</h2>
          <button
            type="button"
            onClick={close}
            className={styles.closeButton}
            aria-label={inquiryDict.closeAriaLabel}
          >
            ×
          </button>
        </div>
        <ChefInquiryForm chef={chef} lang={lang} inquiryDict={inquiryDict} onSuccess={close} />
      </div>
    </div>
  )
}
