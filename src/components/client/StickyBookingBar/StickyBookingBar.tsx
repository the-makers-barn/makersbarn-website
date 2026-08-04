'use client'

import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'

import { AnalyticsEvent, TicketShopCtaLocation } from '@/constants/analytics'

import styles from './StickyBookingBar.module.css'

interface StickyBookingBarProps {
  /** Id of the ticketshop section this bar scrolls to, without the '#'. */
  targetId: string
  fromLabel: string
  price: string
  ctaLabel: string
}

/**
 * Pinned bottom bar shown on narrow screens, where the sticky rail cannot exist.
 *
 * Hides itself once the ticketshop is on screen: left visible it would sit on
 * top of Hipsy's own checkout button.
 */
export function StickyBookingBar({
  targetId,
  fromLabel,
  price,
  ctaLabel,
}: StickyBookingBarProps) {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const target = document.getElementById(targetId)

    if (!target) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsHidden(entry.isIntersecting),
      { rootMargin: '0px 0px -25% 0px' }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [targetId])

  return (
    <div
      className={`${styles.bar} ${isHidden ? styles.barHidden : ''}`}
      aria-hidden={isHidden}
    >
      <div className={styles.priceGroup}>
        <span className={styles.fromLabel}>{fromLabel}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <a
        href={`#${targetId}`}
        className={styles.cta}
        tabIndex={isHidden ? -1 : undefined}
        onClick={() =>
          track(AnalyticsEvent.TICKETSHOP_CTA_CLICKED, {
            location: TicketShopCtaLocation.STICKY_BAR,
          })
        }
      >
        {ctaLabel}
      </a>
    </div>
  )
}
