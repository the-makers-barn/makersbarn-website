import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CabinGallery,
  CheckIcon,
  LocationIcon,
} from '@/components/client'
import { StructuredData } from '@/components/server/StructuredData'
import { SITE_CONFIG } from '@/constants/site'
import { CABIN_DETAILS, OTHER_CABIN } from '@/data/cabins'
import { getCabinReviews } from '@/data/cabinReviews'
import type { CabinDetailContent, Dictionary } from '@/i18n/types'
import { getImageAltText } from '@/lib/imageAltText'
import { getLocalizedPath } from '@/lib/routing'
import { generateLocalBusinessSchema, generatePageBreadcrumbs } from '@/lib/structuredData'
import { AccommodationCabin, Language, Route } from '@/types'

import { CabinBookingCard } from './CabinBookingCard'
import { CabinGoodToKnow } from './CabinGoodToKnow'
import { CabinReviews } from './CabinReviews'
import { formatRating, formatStayStats } from './cabinFormat'
import styles from './CabinDetailPage.module.css'

interface CabinHeaderProps {
  content: CabinDetailContent
  rating?: string
}

function CabinHeader({ content, rating }: CabinHeaderProps) {
  return (
    <header className={styles.header}>
      <p className={styles.kicker}>
        <LocationIcon size={16} />
        {content.kicker}
      </p>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.tagline}>{content.tagline}</p>
      {rating && (
        <p className={styles.rating}>
          <span aria-hidden="true">★</span> {rating}
        </p>
      )}
    </header>
  )
}

function CabinKeyFacts({ facts }: { facts: readonly string[] }) {
  return (
    <ul className={styles.keyFacts}>
      {facts.map((fact) => (
        <li key={fact} className={styles.keyFact}>
          {fact}
        </li>
      ))}
    </ul>
  )
}

interface CabinSectionProps {
  title: string
  children: ReactNode
}

function CabinSection({ title, children }: CabinSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  )
}

function CabinAmenities({ groups }: { groups: CabinDetailContent['amenityGroups'] }) {
  return (
    <div className={styles.amenityGroups}>
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className={styles.amenityGroupTitle}>{group.title}</h3>
          <ul className={styles.amenityList}>
            {group.items.map((item) => (
              <li key={item} className={styles.amenityItem}>
                <CheckIcon className={styles.amenityIcon} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

interface OtherCabinTeaserProps {
  cabin: AccommodationCabin
  locale: Language
  t: Dictionary
}

function OtherCabinTeaser({ cabin, locale, t }: OtherCabinTeaserProps) {
  const detail = CABIN_DETAILS[cabin]
  const content = t.cabinDetail.cabins[cabin]
  const [image] = detail.gallery

  return (
    <section className={styles.otherCabin}>
      <h2 className={styles.sectionTitle}>{t.cabinDetail.otherCabin.title}</h2>
      <Link href={getLocalizedPath(detail.route, locale)} className={styles.otherCabinCard}>
        <div className={styles.otherCabinImage}>
          <Image
            src={image}
            alt={getImageAltText(image, locale)}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className={styles.coverImage}
          />
        </div>
        <div className={styles.otherCabinBody}>
          <h3 className={styles.otherCabinTitle}>{content.title}</h3>
          <p className={styles.otherCabinTagline}>{content.tagline}</p>
          <span className={styles.otherCabinCta}>
            {t.cabinDetail.otherCabin.cta}
            <ArrowRightIcon />
          </span>
        </div>
      </Link>
    </section>
  )
}

interface CabinDetailPageProps {
  cabin: AccommodationCabin
  locale: Language
  t: Dictionary
}

/**
 * Listing page for one of the bookable cabins, modelled on a holiday-home
 * listing: gallery, key facts, description, amenities, location and a booking
 * panel that stays in view on desktop.
 */
export function CabinDetailPage({ cabin, locale, t }: CabinDetailPageProps) {
  const detail = CABIN_DETAILS[cabin]
  const copy = t.cabinDetail
  const content = copy.cabins[cabin]
  const reviews = getCabinReviews(cabin)
  const galleryImages = detail.gallery.map((src) => ({
    src,
    alt: getImageAltText(src, locale) || content.title,
  }))

  return (
    <>
      <StructuredData
        data={[
          generateLocalBusinessSchema({
            type: 'LodgingBusiness',
            image: `${SITE_CONFIG.url}${detail.gallery[0]}`,
          }),
          generatePageBreadcrumbs({
            name: content.title,
            path: getLocalizedPath(detail.route, locale),
          }),
        ]}
      />

      <div className={styles.page}>
        <div className={styles.container}>
          <Link href={getLocalizedPath(Route.EXPERIENCES, locale)} className={styles.backLink}>
            <ArrowLeftIcon />
            {copy.backToExperiences}
          </Link>

          <CabinHeader
            content={content}
            rating={detail.rating && formatRating(detail.rating, copy, locale)}
          />

          <CabinGallery
            images={galleryImages}
            showAllLabel={copy.showAllPhotos}
            openPhotoLabel={copy.openPhoto}
          />

          <div className={styles.layout}>
            <div className={styles.main}>
              <CabinKeyFacts
                facts={[...formatStayStats(detail.stay, copy), ...content.keyFacts]}
              />

              <CabinSection title={copy.aboutTitle}>
                {content.description.map((paragraph) => (
                  <p key={paragraph} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </CabinSection>

              <CabinSection title={copy.amenitiesTitle}>
                <CabinAmenities groups={content.amenityGroups} />
              </CabinSection>

              {reviews.length > 0 && (
                <CabinSection title={copy.reviews.title}>
                  <CabinReviews
                    reviews={reviews}
                    rating={detail.rating}
                    bookingLinks={detail.bookingLinks}
                    copy={copy}
                    locale={locale}
                  />
                </CabinSection>
              )}

              <CabinSection title={copy.goodToKnow.title}>
                <CabinGoodToKnow
                  stay={detail.stay}
                  notes={content.goodToKnowNotes}
                  copy={copy}
                />
              </CabinSection>

              <CabinSection title={copy.locationTitle}>
                <ul className={styles.locationList}>
                  {copy.locationItems.map((item) => (
                    <li key={item} className={styles.locationItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </CabinSection>
            </div>

            <aside className={styles.sidebar}>
              <CabinBookingCard cabin={cabin} bookingLinks={detail.bookingLinks} t={t} />
            </aside>
          </div>

          <OtherCabinTeaser cabin={OTHER_CABIN[cabin]} locale={locale} t={t} />
        </div>
      </div>
    </>
  )
}
