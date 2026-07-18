import Image from 'next/image'
import Link from 'next/link'

import {
  WhatsAppCtaLink,
  WhatsAppIcon,
  CheckIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from '@/components/client'
import { WhatsAppCtaLocation } from '@/constants/analytics'
import type { Dictionary } from '@/i18n/types'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { getLocalizedPath } from '@/lib/routing'
import {
  ExperienceType,
  AccommodationCabin,
  BookingPlatform,
  Language,
  ExperienceOffer,
} from '@/types'

import styles from './ExperienceOfferCard.module.css'

type OfferContent =
  | {
      kind: 'cta'
      title: string
      description: string
      features: readonly string[]
      ctaLabel: string
    }
  | {
      kind: 'booking'
      title: string
      description: string
      features: readonly string[]
      bookingMessage: string
    }
  | {
      kind: 'workation'
      badge: string
      title: string
      description: string
      features: readonly string[]
      ctaLabel: string
    }

const CABIN_CTA_LOCATION: Record<AccommodationCabin, WhatsAppCtaLocation> = {
  [AccommodationCabin.COSMOS]: WhatsAppCtaLocation.CABIN_COSMOS,
  [AccommodationCabin.HORIZON]: WhatsAppCtaLocation.CABIN_HORIZON,
}

function getOfferContent(offer: ExperienceOffer, t: Dictionary): OfferContent {
  switch (offer.type) {
    case ExperienceType.SOLO_RETREAT:
      return {
        kind: 'cta',
        title: t.experiences.soloRetreat.title,
        description: t.experiences.soloRetreat.description,
        features: t.experiences.soloRetreat.features,
        ctaLabel: t.experiences.soloRetreat.ctaLabel,
      }
    case ExperienceType.ACCOMMODATION: {
      const cabinCopy = t.experiences.cabins[offer.cabin]
      return {
        kind: 'booking',
        title: cabinCopy.title,
        description: cabinCopy.description,
        features: cabinCopy.features,
        bookingMessage: cabinCopy.bookingMessage,
      }
    }
    case ExperienceType.FOCUSED_WORKATION:
      return {
        kind: 'workation',
        badge: t.experiences.focusedWorkation.badge,
        title: t.experiences.focusedWorkation.title,
        description: t.experiences.focusedWorkation.description,
        features: t.experiences.focusedWorkation.features,
        ctaLabel: t.experiences.focusedWorkation.ctaLabel,
      }
    case ExperienceType.TOGETHER_RETREAT:
      return {
        kind: 'cta',
        title: t.experiences.togetherRetreat.title,
        description: t.experiences.togetherRetreat.description,
        features: t.experiences.togetherRetreat.features,
        ctaLabel: t.experiences.togetherRetreat.ctaLabel,
      }
  }
}

interface ExperienceOfferCardProps {
  offer: ExperienceOffer
  validLocale: Language
  t: Dictionary
}

export function ExperienceOfferCard({ offer, validLocale, t }: ExperienceOfferCardProps) {
  const content = getOfferContent(offer, t)
  const directBooking = t.experiences.directBooking
  const platforms = t.experiences.bookingPlatforms

  return (
    <article className={styles.offerCard}>
      <div className={styles.offerImageWrapper}>
        {content.kind === 'workation' && (
          <span className={styles.offerBadge}>{content.badge}</span>
        )}
        <Image
          src={offer.image}
          alt={content.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={styles.offerImage}
        />
      </div>

      <div className={styles.offerContent}>
        <h3 className={styles.offerTitle}>{content.title}</h3>
        <p className={styles.offerDescription}>{content.description}</p>

        <ul className={styles.featuresList}>
          {content.features.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              <CheckIcon className={styles.featureIcon} />
              {feature}
            </li>
          ))}
        </ul>

        {content.kind === 'cta' &&
          (offer.type === ExperienceType.SOLO_RETREAT ||
            offer.type === ExperienceType.TOGETHER_RETREAT) && (
          <a
            href={offer.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.offerCta}
          >
            {content.ctaLabel}
            <ArrowRightIcon className={styles.offerCtaIcon} />
          </a>
        )}

        {content.kind === 'booking' && offer.type === ExperienceType.ACCOMMODATION && (
          <div className={styles.bookingActions}>
            <WhatsAppCtaLink
              href={getWhatsAppUrl(content.bookingMessage)}
              location={CABIN_CTA_LOCATION[offer.cabin]}
              className={styles.directBookingCta}
            >
              <WhatsAppIcon size={18} />
              {directBooking.ctaLabel}
            </WhatsAppCtaLink>
            <p className={styles.directBookingBenefit}>{directBooking.benefitLine}</p>
            <p className={styles.directBookingNote}>{directBooking.responseNote}</p>
            <div className={styles.platformLinks}>
              <span className={styles.platformLabel}>{directBooking.alsoBookableVia}</span>
              {offer.bookingLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformLink}
                >
                  {link.platform === BookingPlatform.AIRBNB
                    ? platforms.airbnb
                    : platforms.natuurhuisje}
                  <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </div>
        )}

        {content.kind === 'workation' && offer.type === ExperienceType.FOCUSED_WORKATION && (
          <Link
            href={getLocalizedPath(offer.internalUrl, validLocale)}
            className={styles.offerCta}
          >
            {content.ctaLabel}
            <ArrowRightIcon className={styles.offerCtaIcon} />
          </Link>
        )}
      </div>
    </article>
  )
}
