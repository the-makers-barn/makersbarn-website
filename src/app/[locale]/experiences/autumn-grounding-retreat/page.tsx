import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
  ArrowLeftIcon,
  CheckIcon,
  ClockIcon,
  HipsyTicketShop,
  LocationIcon,
  StickyBookingBar,
} from '@/components/client'
import { StructuredData } from '@/components/server'
import { AUTUMN_GROUNDING_RETREAT } from '@/data'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import { AUTUMN_GROUNDING_RETREAT_EVENT_ID, generatePageBreadcrumbs } from '@/lib/structuredData'
import { Language, Route, ScheduleDayType } from '@/types'

import styles from './page.module.css'

type Translations = Awaited<ReturnType<typeof getServerTranslations>>

/** Anchor the mobile sticky bar and the hero CTA scroll to. */
const TICKETS_ANCHOR_ID = 'tickets'

function formatPrice(amount: string): string {
  return `€${amount}`
}

/**
 * Price shown in the sticky bar.
 *
 * Deliberately the cheapest *standalone* tier, not the cheapest tier outright:
 * the add-ons are cheaper but cannot be bought without a weekend ticket, so
 * advertising one of those as the entry price would be a lie.
 */
function getLeadPrice(): string {
  const standalone = AUTUMN_GROUNDING_RETREAT.ticketTiers
    .filter((tier) => !tier.requiresWeekendTicket)
    .map((tier) => Number(tier.price))

  return formatPrice(Math.min(...standalone).toFixed(2))
}

interface AutumnGroundingPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: AutumnGroundingPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return generatePageMetadata({
    title: t.autumnGrounding.metaTitle,
    description: t.autumnGrounding.metaDescription,
    path: Route.AUTUMN_GROUNDING_RETREAT,
    image: AUTUMN_GROUNDING_RETREAT.heroImage,
    locale: validLocale,
  })
}

function RetreatHero({ t, validLocale }: { t: Translations; validLocale: Language }) {
  const { hero } = t.autumnGrounding
  const retreat = AUTUMN_GROUNDING_RETREAT

  return (
    <>
      <Link
        href={getLocalizedPath(Route.EXPERIENCES, validLocale)}
        className={styles.backLink}
      >
        <ArrowLeftIcon className={styles.backIcon} />
        {t.autumnGrounding.backToExperiences}
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src={retreat.heroBackground}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroKicker}>{hero.kicker}</p>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroSubtitle}>{hero.subtitle}</p>

          <div className={styles.heroMeta}>
            <span className={styles.heroMetaItem}>
              <ClockIcon className={styles.heroMetaIcon} />
              {hero.dates}
            </span>
            <span className={styles.heroMetaItem}>
              <LocationIcon className={styles.heroMetaIcon} />
              {retreat.location.address}
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

function RetreatIntro({ t }: { t: Translations }) {
  const { intro } = t.autumnGrounding

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{intro.title}</h2>
      {intro.body.map((paragraph) => (
        <p key={paragraph} className={styles.bodyText}>
          {paragraph}
        </p>
      ))}
      <blockquote className={styles.pullQuote}>{intro.pullQuote}</blockquote>
    </section>
  )
}

function RetreatSchedule({ t }: { t: Translations }) {
  const { schedule } = t.autumnGrounding
  const dayLabels: Record<string, string> = {
    [ScheduleDayType.SATURDAY]: schedule.days.saturday,
    [ScheduleDayType.SUNDAY]: schedule.days.sunday,
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{schedule.title}</h2>
      <p className={styles.sectionIntro}>{schedule.intro}</p>

      {AUTUMN_GROUNDING_RETREAT.schedule.map((day) => (
        <div key={day.dayType} className={styles.scheduleDay}>
          <h3 className={styles.scheduleDayTitle}>{dayLabels[day.dayType]}</h3>
          <ul className={styles.scheduleList}>
            {day.items.map((item) => (
              <li key={item.activityKey} className={styles.scheduleItem}>
                <span className={styles.scheduleTime}>{item.time}</span>
                <span className={styles.scheduleActivity}>
                  {schedule.activities[item.activityKey]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

function RetreatIncluded({ t }: { t: Translations }) {
  const { included } = t.autumnGrounding

  return (
    <section className={`${styles.section} ${styles.sectionCard}`}>
      <h2 className={styles.sectionTitle}>{included.title}</h2>
      <p className={styles.sectionIntro}>{included.intro}</p>
      <ul className={styles.includedList}>
        {included.items.map((item) => (
          <li key={item} className={styles.includedItem}>
            <CheckIcon className={styles.checkIcon} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function RetreatHosts({ t }: { t: Translations }) {
  const { hosts } = t.autumnGrounding

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{hosts.title}</h2>
      <p className={styles.sectionIntro}>{hosts.intro}</p>
      <div className={styles.hostGrid}>
        {AUTUMN_GROUNDING_RETREAT.hosts.map((host) => {
          const copy = hosts.people[host.id as keyof typeof hosts.people]
          return (
            <article key={host.id} className={styles.hostCard}>
              <h3 className={styles.hostName}>{host.name}</h3>
              <p className={styles.hostRole}>{copy.role}</p>
              <p className={styles.hostBio}>{copy.bio}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function RetreatPractical({ t }: { t: Translations }) {
  const { practical } = t.autumnGrounding
  const retreat = AUTUMN_GROUNDING_RETREAT

  return (
    <section className={`${styles.section} ${styles.sectionCard}`}>
      <h2 className={styles.sectionTitle}>{practical.title}</h2>
      <dl className={styles.practicalList}>
        <div className={styles.practicalRow}>
          <dt className={styles.practicalLabel}>{practical.womenOnlyLabel}</dt>
          <dd className={styles.practicalValue}>{practical.womenOnlyValue}</dd>
        </div>
        <div className={styles.practicalRow}>
          <dt className={styles.practicalLabel}>{practical.languageLabel}</dt>
          <dd className={styles.practicalValue}>{practical.languageValue}</dd>
        </div>
        <div className={styles.practicalRow}>
          <dt className={styles.practicalLabel}>{practical.addressLabel}</dt>
          <dd className={styles.practicalValue}>{retreat.location.address}</dd>
        </div>
        <div className={styles.practicalRow}>
          <dt className={styles.practicalLabel}>{practical.gettingThereLabel}</dt>
          <dd className={styles.practicalValue}>
            <ul className={styles.practicalSubList}>
              {practical.gettingThereItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </section>
  )
}

function RetreatGallery({ t }: { t: Translations }) {
  const { gallery } = t.autumnGrounding

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{gallery.title}</h2>
      <div className={styles.gallery}>
        {AUTUMN_GROUNDING_RETREAT.gallery.map((image, index) => (
          <div
            key={image.src}
            className={index === 0 ? styles.galleryImageLarge : styles.galleryImageSmall}
          >
            <Image
              src={image.src}
              alt={gallery.alt[image.altKey as keyof typeof gallery.alt]}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

function TicketTierList({ t }: { t: Translations }) {
  const { tickets } = t.autumnGrounding

  return (
    <ul className={styles.tierList}>
      {AUTUMN_GROUNDING_RETREAT.ticketTiers.map((tier) => {
        const copy = tickets.tiers[tier.id as keyof typeof tickets.tiers]
        return (
          <li key={tier.id} className={styles.tier}>
            <div className={styles.tierHeader}>
              <span className={styles.tierName}>{copy.name}</span>
              <span className={styles.tierPrice}>{formatPrice(tier.price)}</span>
            </div>
            <p className={styles.tierDescription}>{copy.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

function RetreatTickets({ t }: { t: Translations }) {
  const { tickets } = t.autumnGrounding

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{tickets.title}</h2>
      <p className={styles.sectionIntro}>{tickets.intro}</p>

      <TicketTierList t={t} />
      <p className={styles.addOnNote}>{tickets.addOnNote}</p>
    </section>
  )
}

/**
 * The one and only ticketshop instance.
 *
 * Rendered once and moved by grid placement rather than duplicated per
 * breakpoint: two instances would mean every visitor loading the Hipsy frame
 * twice. In source order it sits where mobile wants it (straight after the
 * ticket tiers); above 1000px it is placed into the sticky rail column.
 */
function TicketShopSlot({ t }: { t: Translations }) {
  const { tickets } = t.autumnGrounding
  const retreat = AUTUMN_GROUNDING_RETREAT

  return (
    <aside id={TICKETS_ANCHOR_ID} className={styles.ticketSlot} aria-label={tickets.title}>
      <HipsyTicketShop
        shopUrl={retreat.ticketShopUrl}
        fallbackUrl={retreat.eventUrl}
        frameTitle={tickets.frameTitle}
        fallbackText={tickets.fallbackText}
        fallbackCta={tickets.fallbackCta}
      />
    </aside>
  )
}

function createEventSchema(t: Translations) {
  const retreat = AUTUMN_GROUNDING_RETREAT

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': AUTUMN_GROUNDING_RETREAT_EVENT_ID,
    name: t.autumnGrounding.metaTitle,
    description: t.autumnGrounding.metaDescription,
    startDate: retreat.startDate,
    endDate: retreat.endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    inLanguage: 'en',
    image: retreat.heroImage,
    location: {
      '@type': 'Place',
      name: "The Maker's Barn",
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Duisterendijk 2',
        postalCode: '8131 RA',
        addressLocality: 'Wijhe',
        addressCountry: 'NL',
      },
    },
    offers: retreat.ticketTiers.map((tier) => ({
      '@type': 'Offer',
      name: t.autumnGrounding.tickets.tiers[tier.id as keyof typeof t.autumnGrounding.tickets.tiers]
        .name,
      price: tier.price,
      priceCurrency: retreat.currency,
      availability: 'https://schema.org/InStock',
      url: retreat.eventUrl,
    })),
    organizer: retreat.hosts.map((host) => ({
      '@type': 'Organization',
      name: host.organisation,
    })),
  }
}

export default async function AutumnGroundingPage({ params }: AutumnGroundingPageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return (
    <>
      <StructuredData
        data={[
          createEventSchema(t),
          generatePageBreadcrumbs({
            name: t.autumnGrounding.metaTitle,
            path: getLocalizedPath(Route.AUTUMN_GROUNDING_RETREAT, validLocale),
          }),
        ]}
      />

      <div className={styles.retreatPage}>
        <RetreatHero t={t} validLocale={validLocale} />

        <div className={styles.layout}>
          <RetreatIntro t={t} />
          <RetreatSchedule t={t} />
          <RetreatIncluded t={t} />
          <RetreatTickets t={t} />
          <TicketShopSlot t={t} />
          <RetreatHosts t={t} />
          <RetreatPractical t={t} />
          <RetreatGallery t={t} />
        </div>

        <StickyBookingBar
          targetId={TICKETS_ANCHOR_ID}
          fromLabel={t.autumnGrounding.tickets.fromLabel}
          price={getLeadPrice()}
          ctaLabel={t.autumnGrounding.tickets.stickyCta}
        />
      </div>
    </>
  )
}
