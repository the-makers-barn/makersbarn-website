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
import { formatWholeEventPrice } from '@/lib/eventPricing'

import styles from './page.module.css'

/** Target of the hero CTA — the price section, which holds the booking form link. */
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

type Translations = Awaited<ReturnType<typeof getServerTranslations>>
type Retreat = typeof SHANTI_DEVA_RETREAT

interface RetreatSectionProps {
  t: Translations
  retreat: Retreat
}

interface LocalizedRetreatSectionProps extends RetreatSectionProps {
  validLocale: Language
}

/** Fills `{name}` placeholders in a dictionary template. */
function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, name: string) => values[name] ?? match)
}

function RetreatHero({ t, retreat, validLocale }: LocalizedRetreatSectionProps) {
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
                  {t.shantiDevaRetreat.hero.bookPlace}
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={styles.includedList}>
      {items.map(item => (
        <li key={item} className={styles.includedItem}>
          <CheckIcon className={styles.checkIcon} />
          {item}
        </li>
      ))}
    </ul>
  )
}

function RetreatDates({ t, retreat, validLocale }: LocalizedRetreatSectionProps) {
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
      <p className={styles.datesNote}>{t.shantiDevaRetreat.dates.oneRetreatNote}</p>
    </section>
  )
}

function RetreatTeachers({ t, retreat }: RetreatSectionProps) {
  const { teacher } = t.shantiDevaRetreat

  return (
    <section className={styles.teacherSection}>
      <h2 className={styles.sectionTitle}>{teacher.sectionTitle}</h2>
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
        <div>
          <h3 className={styles.teacherName}>{teacher.geshe.name}</h3>
          <p className={styles.teacherTagline}>{teacher.geshe.tagline}</p>
          <p className={styles.teacherBio}>{teacher.geshe.biography}</p>

          <h3 className={styles.teacherName}>{teacher.lobsang.name}</h3>
          <p className={styles.teacherBio}>{teacher.lobsang.biography}</p>
        </div>
      </div>
    </section>
  )
}

function RetreatProgramme({ t, retreat }: RetreatSectionProps) {
  const { programme } = t.shantiDevaRetreat

  return (
    <section className={styles.programmeSection}>
      <h2 className={styles.sectionTitle}>{programme.title}</h2>
      <p className={styles.sectionIntro}>{programme.intro}</p>
      <ol className={styles.programmeGrid}>
        {retreat.programmeKeys.map((key, index) => (
          <li key={key} className={styles.programmeCard}>
            <span className={styles.programmeNumber} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={styles.programmeTitle}>{programme.topics[key].title}</h3>
            <p className={styles.programmeText}>{programme.topics[key].description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function RetreatSchedule({ t, retreat }: RetreatSectionProps) {
  const { schedule } = t.shantiDevaRetreat

  return (
    <section className={styles.scheduleSection}>
      <h2 className={styles.sectionTitle}>{schedule.title}</h2>
      <p className={styles.sectionIntro}>{schedule.intro}</p>

      <div className={styles.scheduleGrid}>
        {retreat.schedule.map(day => (
          <div key={day.kind} className={styles.scheduleCard}>
            <h3 className={styles.scheduleDayTitle}>{schedule.days[day.kind]}</h3>
            <dl className={styles.timetable}>
              {day.items.map(item => (
                <div key={`${item.time}-${item.activityKey}`} className={styles.timetableRow}>
                  <dt className={styles.timetableTime}>{item.time}</dt>
                  <dd className={styles.timetableActivity}>{schedule.activities[item.activityKey]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className={styles.specialActivity}>
        <p className={styles.specialActivityText}>{schedule.workshopNote}</p>
      </div>
    </section>
  )
}

function RetreatIncluded({ t, retreat }: RetreatSectionProps) {
  const { included } = t.shantiDevaRetreat

  return (
    <section className={styles.includedSection}>
      <div className={styles.includedContent}>
        <h2 className={styles.sectionTitle}>{included.title}</h2>
        <div className={styles.includedGrid}>
          <div className={styles.includedCard}>
            <h3 className={styles.includedCardTitle}>{included.accommodation}</h3>
            <CheckList items={retreat.accommodationKeys.map(key => included.accommodationOptions[key])} />
          </div>
          <div className={styles.includedCard}>
            <h3 className={styles.includedCardTitle}>{included.servicesTitle}</h3>
            <CheckList items={retreat.serviceKeys.map(key => included.services[key])} />
          </div>
        </div>
      </div>
    </section>
  )
}

function RetreatPricing({ t, retreat, validLocale }: LocalizedRetreatSectionProps) {
  const { pricing } = t.shantiDevaRetreat
  const { currency, total, base, vatPercent, deposit } = retreat.pricing
  const format = (amount: number | string) => formatWholeEventPrice(String(amount), currency, validLocale)

  const breakdown = fillTemplate(pricing.breakdown, {
    base: format(base),
    vatPercent: String(vatPercent),
    vat: format(Number(total) - Number(base)),
  })

  return (
    <section id={REGISTRATION_ANCHOR} className={styles.pricingSection}>
      <h2 className={styles.sectionTitle}>{pricing.title}</h2>
      <p className={styles.sectionIntro}>{pricing.subtitle}</p>

      <div className={styles.pricingGrid}>
        <div className={styles.priceCard}>
          <p className={styles.priceLabel}>{pricing.perParticipant}</p>
          <p className={styles.priceAmount}>{format(total)}</p>
          <p className={styles.priceBreakdown}>{breakdown}</p>
          <p className={styles.priceIncludes}>{pricing.includes}</p>
          <a
            href={retreat.contact.bookingFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            {pricing.register}
            <ArrowRightIcon className={styles.heroCtaIcon} />
          </a>
          <p className={styles.bookingNote}>{pricing.bookingNote}</p>
          <a
            href={retreat.contact.brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.brochureLink}
          >
            {pricing.brochure}
          </a>
        </div>

        <div className={styles.includedCard}>
          <h3 className={styles.includedCardTitle}>{pricing.paymentTitle}</h3>
          <CheckList
            items={[
              fillTemplate(pricing.deposit, { deposit: format(deposit) }),
              fillTemplate(pricing.balance, { balance: format(Number(total) - Number(deposit)) }),
              pricing.instalments,
            ]}
          />
          <h3 className={`${styles.includedCardTitle} ${styles.cardSubheading}`}>
            {pricing.cancellationTitle}
          </h3>
          <CheckList
            items={[
              pricing.cancellation.fullRefund,
              pricing.cancellation.halfRefund,
              pricing.cancellation.noRefund,
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function RetreatContact({ t, retreat }: RetreatSectionProps) {
  return (
    <section className={styles.registrationSection}>
      <div className={styles.registrationContent}>
        <h2 className={styles.registrationTitle}>{t.shantiDevaRetreat.registration.title}</h2>
        <p className={styles.registrationSubtitle}>{t.shantiDevaRetreat.registration.subtitle}</p>

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

function RetreatDetails({ t, retreat }: RetreatSectionProps) {
  const { details } = t.shantiDevaRetreat

  return (
    <section className={styles.detailsSection}>
      <div className={styles.detailsContent}>
        <h2 className={styles.sectionTitle}>{details.title}</h2>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <h3 className={styles.detailCardTitle}>
              <LocationIcon className={styles.detailIcon} />
              {details.location}
            </h3>
            <p className={styles.detailText}>{details.locationDescription}</p>
            <p className={styles.detailText}>
              <strong>{details.address}:</strong>{' '}
              <span className={styles.detailAddress}>{retreat.location.address}</span>
            </p>
          </div>
          <div className={styles.detailCard}>
            <h3 className={styles.detailCardTitle}>
              <CarIcon className={styles.detailIcon} />
              {details.accessibility}
            </h3>
            <ul className={styles.accessibilityList}>
              {retreat.location.accessibilityKeys.map(key => (
                <li key={key} className={styles.accessibilityItem}>
                  <CheckIcon className={styles.checkIcon} />
                  {details.accessibilityItems[key]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.venueGallery}>
          <div className={styles.venueImageLarge}>
            <Image
              src="/images/retreats/shanti-deva/geshe-with-dalai-lama.jpg"
              alt={details.galleryAlt.dalaiLama}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.venueImage}
            />
          </div>
          <div className={styles.venueImageSmall}>
            <Image
              src="/images/retreats/shanti-deva/farm-aerial.jpg"
              alt={details.galleryAlt.farmAerial}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className={styles.venueImage}
            />
          </div>
          <div className={styles.venueImageSmall}>
            <Image
              src="/images/retreats/shanti-deva/momo-demonstration.jpg"
              alt={details.galleryAlt.momoDemonstration}
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

function createEventSchema(t: Translations, retreat: Retreat) {
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
    offers: {
      '@type': 'Offer',
      price: retreat.pricing.total,
      priceCurrency: retreat.pricing.currency,
      availability: 'https://schema.org/InStock',
      url: retreat.contact.bookingFormUrl,
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

        <RetreatTeachers t={t} retreat={retreat} />

        <div className={styles.divider} />

        <RetreatProgramme t={t} retreat={retreat} />

        <RetreatDetails t={t} retreat={retreat} />

        <RetreatSchedule t={t} retreat={retreat} />

        <div className={styles.divider} />

        <RetreatIncluded t={t} retreat={retreat} />

        <RetreatPricing t={t} retreat={retreat} validLocale={validLocale} />

        <RetreatContact t={t} retreat={retreat} />
      </div>
    </>
  )
}
