'use client'

import Script from 'next/script'

import { flushQueuedEvents } from '@/lib/analytics'
import { rememberAttribution } from '@/lib/attribution'

/** Same-origin path that next.config rewrites to the Umami service. */
export const UMAMI_SCRIPT_PATH = '/stats/script.js'

/**
 * Loads the Umami tracker through the site's own domain.
 *
 * The tracker derives its collect endpoint from the script's directory, so it
 * posts to /stats/api/send, which the same rewrite forwards. Renders nothing
 * without a website id, so local development sends no data.
 */
export function UmamiTracker() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  if (!websiteId) {
    return null
  }

  const handleLoad = (): void => {
    rememberAttribution()
    flushQueuedEvents()
  }

  return (
    <Script
      src={UMAMI_SCRIPT_PATH}
      strategy="afterInteractive"
      data-website-id={websiteId}
      data-exclude-hash="true"
      onLoad={handleLoad}
    />
  )
}
