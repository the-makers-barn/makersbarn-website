'use client'

import { track } from '@vercel/analytics'

import { AnalyticsEvent, TicketShopCtaLocation } from '@/constants/analytics'

import { ExternalLinkIcon } from '../icons'

import styles from './TicketShopFallbackLink.module.css'

interface TicketShopFallbackLinkProps {
  href: string
  text: string
  cta: string
}

/**
 * Escape hatch for visitors whose browser blocks third-party frames, and the
 * only part of the ticketshop that needs to run on the client: the frame itself
 * is server-rendered.
 */
export function TicketShopFallbackLink({ href, text, cta }: TicketShopFallbackLinkProps) {
  return (
    <p className={styles.fallback}>
      {text}{' '}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        onClick={() =>
          track(AnalyticsEvent.TICKETSHOP_CTA_CLICKED, {
            location: TicketShopCtaLocation.TICKETSHOP_FALLBACK,
          })
        }
      >
        {cta}
        <ExternalLinkIcon className={styles.icon} />
      </a>
    </p>
  )
}
