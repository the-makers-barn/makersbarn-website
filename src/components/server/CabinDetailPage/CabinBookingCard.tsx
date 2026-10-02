import { WhatsAppCtaLink, WhatsAppIcon, ExternalLinkIcon } from '@/components/client'
import { WhatsAppCtaLocation } from '@/constants/analytics'
import type { Dictionary } from '@/i18n/types'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { AccommodationCabin, BookingPlatform, type ExternalLink } from '@/types'

import styles from './CabinBookingCard.module.css'

const CABIN_PAGE_CTA_LOCATION: Record<AccommodationCabin, WhatsAppCtaLocation> = {
  [AccommodationCabin.COSMOS]: WhatsAppCtaLocation.CABIN_COSMOS_PAGE,
  [AccommodationCabin.HORIZON]: WhatsAppCtaLocation.CABIN_HORIZON_PAGE,
}

interface CabinBookingCardProps {
  cabin: AccommodationCabin
  bookingLinks: readonly ExternalLink[]
  t: Dictionary
}

/**
 * Booking panel for a cabin page. Direct booking runs over WhatsApp for now;
 * this is the single place to swap in an availability calendar and checkout.
 */
export function CabinBookingCard({ cabin, bookingLinks, t }: CabinBookingCardProps) {
  const { bookingCard, cabins } = t.cabinDetail
  const { directBooking, bookingPlatforms } = t.experiences
  const platformLabels: Record<BookingPlatform, string> = {
    [BookingPlatform.AIRBNB]: bookingPlatforms.airbnb,
    [BookingPlatform.NATUURHUISJE]: bookingPlatforms.natuurhuisje,
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{bookingCard.title}</h2>
      <p className={styles.intro}>{bookingCard.intro}</p>

      <WhatsAppCtaLink
        href={getWhatsAppUrl(cabins[cabin].bookingMessage)}
        location={CABIN_PAGE_CTA_LOCATION[cabin]}
        className={styles.cta}
      >
        <WhatsAppIcon size={20} />
        {directBooking.ctaLabel}
      </WhatsAppCtaLink>

      <p className={styles.benefit}>{directBooking.benefitLine}</p>
      <p className={styles.note}>{directBooking.responseNote}</p>

      {bookingLinks.length > 0 && (
        <div className={styles.platforms}>
          <span className={styles.platformLabel}>{directBooking.alsoBookableVia}</span>
          {bookingLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platformLink}
            >
              {platformLabels[link.platform]}
              <ExternalLinkIcon />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
