'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import type { Chef, ChefInquiryDict, Language } from '@/types'

import { ChefInquiryForm } from './ChefInquiryForm'
import styles from './ChefInquiryForm.module.css'

const INQUIRY_HASH = '#chef-inquiry'

type Props = { chef: Chef; lang: Language; inquiryDict: ChefInquiryDict }

export function ChefInquiryModal({ chef, lang, inquiryDict }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    if (window.location.hash === INQUIRY_HASH) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) { return }
    if (isOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

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

  const title = inquiryDict.modalTitle.replace('{name}', chef.name)

  return (
    <dialog
      ref={dialogRef}
      onClose={close}
      onClick={(e) => { if (e.target === dialogRef.current) { close() } }}
      className={styles.dialog}
    >
      {isOpen && (
        <div className={styles.modal}>
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
          <ChefInquiryForm chef={chef} lang={lang} inquiryDict={inquiryDict} />
        </div>
      )}
    </dialog>
  )
}
