import { TicketShopFallbackLink } from '@/components/client'

import styles from './HipsyTicketShop.module.css'

interface HipsyTicketShopProps {
  /** Fully built ticketshop URL, including UTM parameters. */
  src: string
  /** Public event page, opened when the frame is blocked. */
  fallbackUrl: string
  frameTitle: string
  fallbackText: string
  fallbackCta: string
}

/**
 * The embedded Hipsy ticketshop.
 *
 * Server-rendered on purpose. Building the URL on the client would mean a
 * Suspense boundary whose fallback also has to render a frame, and any render
 * of that fallback loads Hipsy twice: once with default parameters and again
 * with the visitor's. Taking the query string from the page's own
 * `searchParams` keeps it to exactly one frame, one load, and no client
 * JavaScript.
 */
export function HipsyTicketShop({
  src,
  fallbackUrl,
  frameTitle,
  fallbackText,
  fallbackCta,
}: HipsyTicketShopProps) {
  return (
    <div className={styles.wrapper}>
      <iframe src={src} title={frameTitle} loading="lazy" className={styles.frame} />

      <TicketShopFallbackLink href={fallbackUrl} text={fallbackText} cta={fallbackCta} />
    </div>
  )
}
