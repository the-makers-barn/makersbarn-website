'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT_URLS, CONTACT_EMAIL } from '@/constants'
import { ContactIntent } from '@/types'
import { useTranslation } from '@/context'
import { IntentSelector } from './IntentSelector'
import { QuestionForm } from './QuestionForm'
import { BookingForm } from '../BookingForm'
import styles from './UnifiedContact.module.css'

const CONTENT_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
} as const

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

/**
 * Get initial intent from URL hash (SSR-safe)
 */
function getInitialIntent(): ContactIntent {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.slice(1)
    if (hash === ContactIntent.BOOKING) return ContactIntent.BOOKING
    if (hash === ContactIntent.QUESTION) return ContactIntent.QUESTION
  }
  return ContactIntent.QUESTION
}

export function UnifiedContact() {
  const [intent, setIntent] = useState<ContactIntent>(getInitialIntent)
  const [hasInitialized, setHasInitialized] = useState(false)

  const { t: unifiedContact } = useTranslation('unifiedContact')
  const { t: contact } = useTranslation('contact')

  // Handle hash changes after initial mount
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === ContactIntent.BOOKING) {
        setIntent(ContactIntent.BOOKING)
      } else if (hash === ContactIntent.QUESTION) {
        setIntent(ContactIntent.QUESTION)
      }
    }

    // Mark as initialized after first render
    setHasInitialized(true)

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Update URL hash when intent changes (after initialization)
  useEffect(() => {
    if (hasInitialized) {
      window.history.replaceState(null, '', `#${intent}`)
    }
  }, [intent, hasInitialized])

  const handleIntentChange = useCallback((newIntent: ContactIntent) => {
    setIntent(newIntent)
  }, [])

  return (
    <div className={styles.page}>
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <h1 className={styles.introTitle}>{unifiedContact.pageTitle}</h1>
          <p className={styles.introText}>{unifiedContact.pageSubtitle}</p>
        </div>
      </section>

      {/* Intent Selector */}
      <section className={styles.selectorSection}>
        <IntentSelector
          selectedIntent={intent}
          onIntentChange={handleIntentChange}
          labels={unifiedContact.intentSelector}
          ariaLabel={unifiedContact.selectorAriaLabel}
        />
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <AnimatePresence mode="wait">
            {intent === ContactIntent.QUESTION ? (
              <motion.div
                key="question"
                role="tabpanel"
                id="question-panel"
                aria-labelledby="question-tab"
                variants={CONTENT_VARIANTS}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <QuestionForm />
              </motion.div>
            ) : (
              <motion.div
                key="booking"
                role="tabpanel"
                id="booking-panel"
                aria-labelledby="booking-tab"
                variants={CONTENT_VARIANTS}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={styles.bookingWrapper}
              >
                <BookingForm />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email Alternative - Only show for question mode */}
          {intent === ContactIntent.QUESTION && (
            <div className={styles.emailAlternative}>
              <p className={styles.emailAlternativeText}>{contact.emailAlternative.text}</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
                <EmailIcon />
                {CONTACT_EMAIL}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe
            src={CONTACT_URLS.MAP_EMBED}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={unifiedContact.mapTitle}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </section>
    </div>
  )
}
