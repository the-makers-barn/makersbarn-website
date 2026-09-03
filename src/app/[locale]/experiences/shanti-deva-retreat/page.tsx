import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { StructuredData } from '@/components/server'
import { generatePageMetadata } from '@/lib/metadata'
import { generatePageBreadcrumbs, SHANTI_DEVA_RETREAT_EVENT_ID } from '@/lib/structuredData'
import { Route, Language } from '@/types'
import { SHANTI_DEVA_RETREAT } from '@/data'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'

import styles from './page.module.css'

/** Target of the hero CTA — the page has no booking form, only the organiser's details. */
const REGISTRATION_ANCHOR = 'register'

/** Display handle for the contact link; the URL it points at lives in the retreat data. */
const INSTAGRAM_HANDLE = 'shanti_deva_buddhist_retreat'

interface ShantiDevaRetreatPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ShantiDevaRetreatPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return generatePageMetadata({
    title: t.shantiDevaRetreat.metaTitle,
    description: t.shantiDevaRetreat.metaDescription,
    path: '/experiences/shanti-deva-retreat',
    locale: validLocale,
  })
}

const ArrowLeftIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const LocationIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const DATE_LOCALE_TAGS: Record<Language, string> = {
  [Language.EN]: 'en-GB',
  [Language.NL]: 'nl-NL',
  [Language.DE]: 'de-DE',
}

/**
 * Renders a retreat's span the way the reader's language writes it, collapsing
 * the month when the retreat stays inside one — "22-27 June 2027" but
 * "30 July - 4 August 2027". Dates are plain calendar days, so they are
 * formatted in UTC to keep them from sliding a day either way.
 */
function formatDateRange(startDate: string, endDate: string, locale: Language): string {
  return new Intl.DateTimeFormat(DATE_LOCALE_TAGS[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).formatRange(new Date(startDate), new Date(endDate))
}

interface RetreatHeroProps {
  t: Awaited<ReturnType<typeof getServerTranslations>>
  retreat: typeof SHANTI_DEVA_RETREAT
  validLocale: Language
}

function RetreatHero({ t, retreat, validLocale }: RetreatHeroProps) {
  return (
    <>
      <Link href={getLocalizedPath(Route.EXPERIENCES, validLocale)} className={styles.backLink}>
        <ArrowLeftIcon />
        {t.shantiDevaRetreat.backToExperiences}
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroHeading}>
            <p className={styles.heroSubtitle}>{t.shantiDevaRetreat.hero.subtitle}</p>
            <h1 className={styles.heroTitle}>{t.shantiDevaRetreat.hero.title}</h1>
          </div>

          <div className={styles.heroBody}>
            <div className={styles.heroFacts}>
              <p className={styles.heroTeachers}>{t.shantiDevaRetreat.hero.withTeachers}</p>

              <div className={styles.heroMeta}>
                <span className={styles.heroMetaItem}>
                  <LocationIcon className={styles.heroMetaIcon} />
                  {retreat.location.address}
                </span>
              </div>

              {/*
                * The dates are the fact a reader most wants and would otherwise
                * have to scroll for. Wide screens only — stacked, the dates
                * section sits directly below and would repeat itself.
                */}
              <ul className={styles.heroDates} aria-label={t.shantiDevaRetreat.dates.title}>
                {retreat.dates.map(date => (
                  <li key={date.id} className={styles.heroDateItem}>
                    <span className={styles.heroDateMarker} aria-hidden="true" />
                    {formatDateRange(date.startDate, date.endDate, validLocale)}
                  </li>
                ))}
              </ul>

              <div className={styles.heroActions}>
                <a href={`#${REGISTRATION_ANCHOR}`} className={styles.heroCta}>
                  {t.shantiDevaRetreat.hero.getInTouch}
                  <ArrowRightIcon className={styles.heroCtaIcon} />
                </a>
              </div>
            </div>

            <div className={styles.heroFilm}>
              <div className={styles.videoFrame}>
                <iframe
                  src={retreat.videoEmbedUrl}
                  title={t.shantiDevaRetreat.video.title}
                  loading="lazy"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
                  className={styles.videoIframe}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface RetreatDatesProps {
  t: Awaited<ReturnType<typeof getServerTranslations>>
  retreat: typeof SHANTI_DEVA_RETREAT
  validLocale: Language
}

function RetreatDates({ t, retreat, validLocale }: RetreatDatesProps) {
  const labels = [
    t.shantiDevaRetreat.dates.firstRetreat,
    t.shantiDevaRetreat.dates.secondRetreat,
    t.shantiDevaRetreat.dates.thirdRetreat,
  ]

  return (
    <section className={styles.datesSection}>
      <h2 className={styles.sectionTitle}>{t.shantiDevaRetreat.dates.title}</h2>
      <div className={styles.datesGrid}>
        {retreat.dates.map((date, index) => (
          <div key={date.id} className={styles.dateCard}>
            <p className={styles.dateLabel}>{labels[index] ?? ''}</p>
            <p className={styles.dateRange}>
              {formatDateRange(date.startDate, date.endDate, validLocale)}
            </p>
            <p className={styles.dateDuration}>{t.shantiDevaRetreat.dates.duration}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

interface RetreatScheduleProps {
  t: Awaited<ReturnType<typeof getServerTranslations>>
  retreat: typeof SHANTI_DEVA_RETREAT
}

function RetreatSchedule({ t, retreat }: RetreatScheduleProps) {
  const activities = t.shantiDevaRetreat.schedule.activities

  return (
    <section className={styles.scheduleSection}>
      <h2 className={styles.sectionTitle}>{t.shantiDevaRetreat.schedule.title}</h2>
      <p className={styles.scheduleIntro}>{t.shantiDevaRetreat.schedule.intro}</p>

      <div className={styles.scheduleContent}>
        <ol className={styles.dayFlowList}>
          {retreat.dayFlowKeys.map(key => (
            <li key={key} className={styles.dayFlowItem}>
              <span className={styles.dayFlowMarker} aria-hidden="true" />
              <span className={styles.dayFlowActivity}>
                {activities[key as keyof typeof activities] || key}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.specialActivity}>
        <p className={styles.specialActivityText}>{t.shantiDevaRetreat.schedule.workshopNote}</p>
      </div>
    </section>
  )
}

interface RetreatIncludedProps {
  t: Awaited<ReturnType<typeof getServerTranslations>>
}

function RetreatIncluded({ t }: RetreatIncludedProps) {
  return (
    <section className={styles.includedSection}>
      <div className={styles.includedContent}>
        <h2 className={styles.sectionTitle}>{t.shantiDevaRetreat.included.title}</h2>
        <div className={styles.includedGrid}>
          <div className={styles.includedCard}>
            <h3 className={styles.includedCardTitle}>{t.shantiDevaRetreat.included.accommodation}</h3>
            <ul className={styles.includedList}>
              <li className={styles.includedItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.included.accommodationOptions.duration}
              </li>
              <li className={styles.includedItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.included.accommodationOptions.doubleRooms}
              </li>
              <li className={styles.includedItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.included.accommodationOptions.sharedRooms}
              </li>
              <li className={styles.includedItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.included.accommodationOptions.singleRoom}
              </li>
              <li className={styles.includedItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.included.accommodationOptions.tentCaravan}
              </li>
            </ul>
          </div>
          <div className={styles.includedCard}>
            <h3 className={styles.includedCardTitle}>{t.shantiDevaRetreat.included.servicesTitle}</h3>
            <ul className={styles.includedList}>
              <li className={styles.includedItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.included.services.beddingTowels}
              </li>
              <li className={styles.includedItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.included.services.vegetarianMeals}
              </li>
              <li className={styles.includedItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.included.services.farmFacilities}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

interface RetreatRegistrationProps {
  t: Awaited<ReturnType<typeof getServerTranslations>>
  retreat: typeof SHANTI_DEVA_RETREAT
}

function RetreatRegistration({ t, retreat }: RetreatRegistrationProps) {
  return (
    <section id={REGISTRATION_ANCHOR} className={styles.registrationSection}>
      <div className={styles.registrationContent}>
        <h2 className={styles.registrationTitle}>{t.shantiDevaRetreat.registration.title}</h2>
        <p className={styles.registrationSubtitle}>{t.shantiDevaRetreat.registration.subtitle}</p>

        <p className={styles.participantInfo}>{t.shantiDevaRetreat.registration.participantRange}</p>

        <p className={styles.contactInfo}>{t.shantiDevaRetreat.registration.contact}</p>
        <div className={styles.contactLinks}>
          <a
            href={`https://wa.me/${retreat.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <PhoneIcon className={styles.contactLinkIcon} />
            {t.shantiDevaRetreat.registration.whatsapp}: {retreat.contact.whatsapp}
          </a>
          <a
            href={`mailto:${retreat.contact.email}`}
            className={styles.contactLink}
          >
            <MailIcon className={styles.contactLinkIcon} />
            {t.shantiDevaRetreat.registration.email}: {retreat.contact.email}
          </a>
          <a
            href={retreat.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            /* The icon carries the network, so the pill shows only the handle
               and keeps to one line on a phone. */
            aria-label={`${t.shantiDevaRetreat.registration.instagram}: @${INSTAGRAM_HANDLE}`}
          >
            <InstagramIcon className={styles.contactLinkIcon} />
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}

interface RetreatDetailsProps {
  t: Awaited<ReturnType<typeof getServerTranslations>>
  retreat: typeof SHANTI_DEVA_RETREAT
}

function RetreatDetails({ t, retreat }: RetreatDetailsProps) {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.detailsContent}>
        <h2 className={styles.sectionTitle}>{t.shantiDevaRetreat.details.title}</h2>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <h3 className={styles.detailCardTitle}>
              <LocationIcon className={styles.detailIcon} />
              {t.shantiDevaRetreat.details.location}
            </h3>
            <p className={styles.detailText}>{t.shantiDevaRetreat.details.locationDescription}</p>
            <p className={styles.detailText}>
              <strong>{t.shantiDevaRetreat.details.address}:</strong>{' '}
              <span className={styles.detailAddress}>{retreat.location.address}</span>
            </p>
          </div>
          <div className={styles.detailCard}>
            <h3 className={styles.detailCardTitle}>
              <CarIcon className={styles.detailIcon} />
              {t.shantiDevaRetreat.details.accessibility}
            </h3>
            <ul className={styles.accessibilityList}>
              <li className={styles.accessibilityItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.details.accessibilityItems.carFromZwolle}
              </li>
              <li className={styles.accessibilityItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.details.accessibilityItems.freePickup}
              </li>
              <li className={styles.accessibilityItem}>
                <CheckIcon className={styles.checkIcon} />
                {t.shantiDevaRetreat.details.accessibilityItems.sharedTransport}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.venueGallery}>
          <div className={styles.venueImageLarge}>
            <Image
              src="/images/retreats/shanti-deva/teachers-together.jpg"
              alt="Gen La Geshe Pema Dorjee and monk Lobsang greeting the room"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.venueImage}
            />
          </div>
          <div className={styles.venueImageSmall}>
            <Image
              src="/images/retreats/shanti-deva/farm-aerial.jpg"
              alt="Aerial view of the farm with the retreat tent in the orchard"
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className={styles.venueImage}
            />
          </div>
          <div className={styles.venueImageSmall}>
            <Image
              src="/images/retreats/shanti-deva/momo-demonstration.jpg"
              alt="Geshe Pema Dorjee showing the group how to fold Tibetan momos"
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className={styles.venueImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function createEventSchema(t: Awaited<ReturnType<typeof getServerTranslations>>, retreat: typeof SHANTI_DEVA_RETREAT) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': SHANTI_DEVA_RETREAT_EVENT_ID,
    name: t.shantiDevaRetreat.hero.title,
    description: t.shantiDevaRetreat.metaDescription,
    startDate: retreat.dates[0].startDate,
    endDate: retreat.dates[0].endDate,
    location: {
      '@type': 'Place',
      name: "The Maker's Barn",
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Duisterendijk 2',
        addressLocality: 'Wijhe',
        addressCountry: 'NL',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Shanti Deva Buddhist Tibetan Retreat Project',
    },
  }
}

export default async function ShantiDevaRetreatPage({ params }: ShantiDevaRetreatPageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  const retreat = SHANTI_DEVA_RETREAT

  return (
    <>
      <StructuredData
        data={[
          createEventSchema(t, retreat),
          generatePageBreadcrumbs({
            name: t.shantiDevaRetreat.metaTitle,
            path: getLocalizedPath(Route.SHANTI_DEVA_RETREAT, validLocale),
          }),
        ]}
      />

      <div className={styles.retreatPage}>
        <RetreatHero t={t} retreat={retreat} validLocale={validLocale} />

        <RetreatDates t={t} retreat={retreat} validLocale={validLocale} />

        <div className={styles.divider} />

        <section className={styles.teacherSection}>
          <div className={styles.teacherContent}>
            <div className={styles.teacherImageWrapper}>
              <Image
                src={retreat.heroImage}
                alt={retreat.teachers[0].name}
                fill
                className={styles.teacherImage}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className={styles.teacherText}>
              <h2>{t.shantiDevaRetreat.teacher.sectionTitle}</h2>
              <p className={styles.teacherBio}>{t.shantiDevaRetreat.teacher.biography}</p>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        <RetreatDetails t={t} retreat={retreat} />

        <RetreatSchedule t={t} retreat={retreat} />

        <div className={styles.divider} />

        <RetreatIncluded t={t} />

        <RetreatRegistration t={t} retreat={retreat} />
      </div>
    </>
  )
}
