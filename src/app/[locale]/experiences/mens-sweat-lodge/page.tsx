import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClockIcon,
  LocationIcon,
  StickyBookingBar,
} from '@/components/client'
import { FireGlow, HipsyTicketShop, StructuredData } from '@/components/server'
import { SWEAT_LODGE_EVENT } from '@/data'
import { getServerTranslations } from '@/i18n'
import { formatEventPrice } from '@/lib/eventPricing'
import { getValidLocale } from '@/lib/locale'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import { SWEAT_LODGE_EVENT_ID, generatePageBreadcrumbs } from '@/lib/structuredData'
import { buildTicketShopUrl, toSearchParams } from '@/lib/ticketShopUrl'
import { Language, Route } from '@/types'

import styles from './page.module.css'

type Translations = Awaited<ReturnType<typeof getServerTranslations>>

/** Anchor the hero button and the mobile sticky bar scroll to. */
const TICKETS_ANCHOR_ID = 'tickets'

const EVENT = SWEAT_LODGE_EVENT

function price(amount: string, locale: Language): string {
  return formatEventPrice(amount, EVENT.currency, locale)
}

interface SweatLodgePageProps {
  params: Promise<{ locale: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({
  params,
}: Pick<SweatLodgePageProps, 'params'>): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return generatePageMetadata({
    title: t.sweatLodge.metaTitle,
    description: t.sweatLodge.metaDescription,
    path: Route.MENS_SWEAT_LODGE,
    image: EVENT.heroImage,
    locale: validLocale,
  })
}

function Hero({ t }: { t: Translations }) {
  const { hero } = t.sweatLodge

  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia}>
        <Image
          src={EVENT.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroScrim} />
      </div>

      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{hero.title}</h1>
        <p className={styles.heroSubtitle}>{hero.subtitle}</p>

        <div className={styles.heroMeta}>
          <span className={styles.heroMetaItem}>
            <ClockIcon className={styles.heroMetaIcon} />
            {hero.dates}
          </span>
          <span className={styles.heroMetaItem}>
            <LocationIcon className={styles.heroMetaIcon} />
            {EVENT.location.address}
          </span>
        </div>

        <a href={`#${TICKETS_ANCHOR_ID}`} className={styles.heroCta}>
          {hero.bookNow}
          <ArrowRightIcon />
        </a>
      </div>
    </section>
  )
}

/** The dark band: the fire, and the invitation next to it. */
function FireBand({ t }: { t: Translations }) {
  const { intro, hero } = t.sweatLodge

  return (
    <section className={styles.fireBand}>
      <div className={styles.fireInner}>
        <div className={styles.fireSide}>
          <blockquote className={styles.fireQuote}>{intro.pullQuote}</blockquote>
          <div className={styles.fireFigure}>
            <FireGlow label={hero.fireAlt} />
          </div>
        </div>
        <div className={styles.fireCopy}>
          <h2 className={styles.fireTitle}>{intro.title}</h2>
          {intro.body.map((paragraph) => (
            <p key={paragraph} className={styles.fireText}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

function DayTimeline({ t }: { t: Translations }) {
  const { schedule } = t.sweatLodge

  return (
    <section className={styles.day} aria-labelledby="day-title">
      <div className={styles.dayHeader}>
        <h2 id="day-title" className={styles.sectionTitle}>
          {schedule.title}
        </h2>
        <p className={styles.text}>{schedule.intro}</p>
      </div>
      <ol className={styles.timeline}>
        {EVENT.schedule.map((item) => (
          <li key={item.activityKey} className={styles.stop}>
            <span className={styles.stopTime}>{item.time || schedule.laterLabel}</span>
            <span className={styles.stopText}>{schedule.activities[item.activityKey]}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

function ForWhom({ t }: { t: Translations }) {
  const { forWhom } = t.sweatLodge

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{forWhom.title}</h2>
      {forWhom.body.map((paragraph) => (
        <p key={paragraph} className={styles.text}>
          {paragraph}
        </p>
      ))}
      <h3 className={styles.subTitle}>{forWhom.newTitle}</h3>
      {forWhom.newBody.map((paragraph) => (
        <p key={paragraph} className={styles.text}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}

function Bring({ t }: { t: Translations }) {
  const { bring } = t.sweatLodge

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{bring.title}</h2>
      <p className={styles.text}>{bring.intro}</p>
      <ul className={styles.bringList}>
        {EVENT.bringKeys.map((key) => (
          <li key={key} className={styles.bringItem}>
            {bring.items[key]}
          </li>
        ))}
      </ul>
      <p className={styles.textQuiet}>{bring.clothingNote}</p>
      <p className={styles.textQuiet}>{bring.alcoholNote}</p>
    </section>
  )
}

function Health({ t }: { t: Translations }) {
  const { health } = t.sweatLodge

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{health.title}</h2>
      <p className={styles.text}>{health.body}</p>
      <p className={styles.text}>
        {health.contactLead}{' '}
        <a href={`mailto:${EVENT.host.email}`} className={styles.contactLink}>
          {EVENT.host.email}
        </a>
      </p>
    </section>
  )
}

function Host({ t }: { t: Translations }) {
  const { host } = t.sweatLodge

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{host.title}</h2>
      <h3 className={styles.hostName}>{EVENT.host.name}</h3>
      <p className={styles.hostRole}>{host.role}</p>
      <p className={styles.text}>{host.bio}</p>
    </section>
  )
}

function Practical({ t }: { t: Translations }) {
  const { practical } = t.sweatLodge

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{practical.title}</h2>
      <dl className={styles.practical}>
        <div className={styles.practicalRow}>
          <dt className={styles.practicalLabel}>{practical.menOnlyLabel}</dt>
          <dd className={styles.practicalValue}>{practical.menOnlyValue}</dd>
        </div>
        <div className={styles.practicalRow}>
          <dt className={styles.practicalLabel}>{practical.languageLabel}</dt>
          <dd className={styles.practicalValue}>{practical.languageValue}</dd>
        </div>
        <div className={styles.practicalRow}>
          <dt className={styles.practicalLabel}>{practical.addressLabel}</dt>
          <dd className={styles.practicalValue}>{EVENT.location.address}</dd>
        </div>
        <div className={styles.practicalRow}>
          <dt className={styles.practicalLabel}>{practical.gettingThereLabel}</dt>
          <dd className={styles.practicalValue}>
            <ul className={styles.practicalList}>
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

/**
 * Ticket rail: the two tiers in our own words, then the one and only Hipsy
 * frame. Sticky in the right column from 1000px; in flow below the content
 * on narrower screens, where the sticky bar takes visitors to it.
 */
function TicketRail({
  t,
  shopSrc,
}: {
  t: Translations
  shopSrc: string
}) {
  const { tickets } = t.sweatLodge

  return (
    <aside id={TICKETS_ANCHOR_ID} className={styles.rail} aria-label={tickets.title}>
      <div className={styles.railCard}>
        <h2 className={styles.railTitle}>{tickets.title}</h2>
        <p className={styles.railIntro}>{tickets.intro}</p>
        <div className={styles.shop}>
          <HipsyTicketShop
            src={shopSrc}
            fallbackUrl={EVENT.eventUrl}
            frameTitle={tickets.frameTitle}
            fallbackText={tickets.fallbackText}
            fallbackCta={tickets.fallbackCta}
          />
        </div>
      </div>
    </aside>
  )
}

function createEventSchema(t: Translations) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': SWEAT_LODGE_EVENT_ID,
    name: t.sweatLodge.metaTitle,
    description: t.sweatLodge.metaDescription,
    startDate: EVENT.startDate,
    endDate: EVENT.endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    inLanguage: 'nl',
    image: EVENT.heroImage,
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
    offers: EVENT.ticketTiers.map((tier) => ({
      '@type': 'Offer',
      name: t.sweatLodge.tickets.tiers[tier.id as keyof typeof t.sweatLodge.tickets.tiers].name,
      price: tier.price,
      priceCurrency: EVENT.currency,
      availability: 'https://schema.org/InStock',
      url: EVENT.eventUrl,
    })),
    organizer: {
      '@type': 'Person',
      name: EVENT.host.name,
      affiliation: EVENT.host.organisation,
    },
  }
}

export default async function SweatLodgePage({ params, searchParams }: SweatLodgePageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  const shopSrc = buildTicketShopUrl(EVENT.ticketShopUrl, toSearchParams(await searchParams))

  return (
    <>
      <StructuredData
        data={[
          createEventSchema(t),
          generatePageBreadcrumbs({
            name: t.sweatLodge.metaTitle,
            path: getLocalizedPath(Route.MENS_SWEAT_LODGE, validLocale),
          }),
        ]}
      />

      <div className={styles.page}>
        <Link
          href={getLocalizedPath(Route.EXPERIENCES, validLocale)}
          className={styles.backLink}
        >
          <ArrowLeftIcon className={styles.backIcon} />
          {t.sweatLodge.backToExperiences}
        </Link>

        <Hero t={t} />
        <FireBand t={t} />
        <DayTimeline t={t} />

        <div className={styles.body}>
          <div className={styles.content}>
            <ForWhom t={t} />
            <Bring t={t} />
            <Health t={t} />
            <Host t={t} />
            <Practical t={t} />
          </div>
          <TicketRail t={t} shopSrc={shopSrc} />
        </div>

        <StickyBookingBar
          targetId={TICKETS_ANCHOR_ID}
          fromLabel={t.sweatLodge.tickets.fromLabel}
          price={price(EVENT.ticketTiers[0].price, validLocale)}
          ctaLabel={t.sweatLodge.tickets.stickyCta}
        />
      </div>
    </>
  )
}
