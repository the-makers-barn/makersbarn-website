'use client'

import { Suspense } from 'react'
import { track } from '@vercel/analytics'
import { useSearchParams } from 'next/navigation'

import { AnalyticsEvent, TicketShopCtaLocation } from '@/constants/analytics'
import { buildTicketShopUrl } from '@/lib/ticketShopUrl'

import { ExternalLinkIcon } from '../icons'

import styles from './HipsyTicketShop.module.css'

interface HipsyTicketShopProps {
  /** Hipsy ticketshop URL, embedded in the frame. */
  shopUrl: string
  /** Public event page, opened when the frame is blocked. */
  fallbackUrl: string
  frameTitle: string
  fallbackText: string
  fallbackCta: string
  className?: string
}

/**
 * Renders the frame with whatever UTM parameters the visitor arrived with.
 *
 * Split out so the `useSearchParams` call sits behind its own Suspense
 * boundary: without it, reading the query string would opt the whole retreat
 * page out of static rendering.
 */
function TicketShopFrame({ shopUrl, frameTitle }: { shopUrl: string; frameTitle: string }) {
  const searchParams = useSearchParams()

  return (
    <iframe
      src={buildTicketShopUrl(shopUrl, searchParams)}
      title={frameTitle}
      loading="lazy"
      className={styles.frame}
    />
  )
}

/** Rendered until the query string is available, and if JS never arrives. */
function TicketShopFramePlaceholder({
  shopUrl,
  frameTitle,
}: {
  shopUrl: string
  frameTitle: string
}) {
  return (
    <iframe
      src={buildTicketShopUrl(shopUrl, null)}
      title={frameTitle}
      loading="lazy"
      className={styles.frame}
    />
  )
}

export function HipsyTicketShop({
  shopUrl,
  fallbackUrl,
  frameTitle,
  fallbackText,
  fallbackCta,
  className,
}: HipsyTicketShopProps) {
  return (
    <div className={className ? `${styles.wrapper} ${className}` : styles.wrapper}>
      <Suspense fallback={<TicketShopFramePlaceholder shopUrl={shopUrl} frameTitle={frameTitle} />}>
        <TicketShopFrame shopUrl={shopUrl} frameTitle={frameTitle} />
      </Suspense>

      <p className={styles.fallback}>
        {fallbackText}{' '}
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fallbackLink}
          onClick={() =>
            track(AnalyticsEvent.TICKETSHOP_CTA_CLICKED, {
              location: TicketShopCtaLocation.TICKETSHOP_FALLBACK,
            })
          }
        >
          {fallbackCta}
          <ExternalLinkIcon className={styles.fallbackIcon} />
        </a>
      </p>
    </div>
  )
}
