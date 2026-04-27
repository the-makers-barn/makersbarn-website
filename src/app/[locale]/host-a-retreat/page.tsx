import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { StructuredData } from '@/components/server'
import { SILO_HUB_CARDS } from '@/data'
import { getServerTranslations } from '@/i18n'
import type { Dictionary } from '@/i18n/types'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'
import { generatePageBreadcrumbs } from '@/lib/structuredData'
import { Language, Route, SiloHubCardSummary, SiloSlug } from '@/types'

import styles from './page.module.css'

const CARD_IMAGE_SIZES = '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw' as const

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return generatePageMetadata({
    title: t.retreats.metaTitle,
    description: t.retreats.metaDescription,
    path: Route.HOST_A_RETREAT,
    locale: validLocale,
  })
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
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
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function getCardLabel(slug: SiloSlug, t: Dictionary): { title: string; pitch: string } {
  switch (slug) {
    case SiloSlug.YOGA_TEACHERS:
      return t.retreats.cards.yogaTeachers
    case SiloSlug.MEDITATION_RETREATS:
      return t.retreats.cards.meditationRetreats
    case SiloSlug.WRITING_RETREATS:
      return t.retreats.cards.writingRetreats
    case SiloSlug.TEAM_OFFSITES:
      return t.retreats.cards.teamOffsites
    case SiloSlug.BREATHWORK_SOUND_HEALING:
      return t.retreats.cards.breathworkSoundHealing
    case SiloSlug.COACHING_INTENSIVES:
      return t.retreats.cards.coachingIntensives
    case SiloSlug.SOMATIC_THERAPY_RETREATS:
      return t.retreats.cards.somaticTherapyRetreats
    case SiloSlug.WELLNESS_DETOX_RETREATS:
      return t.retreats.cards.wellnessDetoxRetreats
    case SiloSlug.CIRCLE_RETREATS:
      return t.retreats.cards.circleRetreats
    case SiloSlug.PHOTOGRAPHY_WORKSHOPS:
      return t.retreats.cards.photographyWorkshops
  }
}

interface SiloCardProps {
  card: SiloHubCardSummary
  locale: Language
  t: Dictionary
}

function SiloCard({ card, locale, t }: SiloCardProps) {
  const label = getCardLabel(card.slug, t)
  return (
    <Link href={getLocalizedPath(card.route, locale)} className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={card.imageSrc}
          alt={card.imageAlt[locale]}
          fill
          sizes={CARD_IMAGE_SIZES}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{label.title}</h2>
        <p className={styles.cardPitch}>{label.pitch}</p>
        <span className={styles.cardCta}>
          {t.retreats.cardCta}
          <ArrowRightIcon className={styles.cardCtaIcon} />
        </span>
      </div>
    </Link>
  )
}

export default async function HostARetreatPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const breadcrumb = generatePageBreadcrumbs({
    name: t.retreats.metaTitle,
    path: getLocalizedPath(Route.HOST_A_RETREAT, validLocale),
  })

  return (
    <>
      <StructuredData data={[breadcrumb]} />

      <div className={styles.hub}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{t.retreats.eyebrow}</p>
          <h1 className={styles.title}>{t.retreats.title}</h1>
          <p className={styles.intro}>{t.retreats.intro}</p>
        </header>

        <section className={styles.cardsSection}>
          <div className={styles.cardsGrid}>
            {SILO_HUB_CARDS.map((card) => (
              <SiloCard key={card.slug} card={card} locale={validLocale} t={t} />
            ))}
          </div>
        </section>

        <section className={styles.comparison} aria-labelledby="comparison-card-headline">
          <div className={styles.comparisonInner}>
            <p className={styles.comparisonEyebrow}>{t.retreats.comparisonCard.eyebrow}</p>
            <h2 className={styles.comparisonHeadline} id="comparison-card-headline">
              {t.retreats.comparisonCard.headline}
            </h2>
            <p className={styles.comparisonBody}>{t.retreats.comparisonCard.body}</p>
            <Link href={getLocalizedPath(Route.COMPARISON, validLocale)} className={styles.comparisonCta}>
              {t.retreats.comparisonCard.ctaLabel}
              <ArrowRightIcon />
            </Link>
          </div>
        </section>

        <section className={styles.help}>
          <h2 className={styles.helpTitle}>{t.retreats.helpTitle}</h2>
          <p className={styles.helpBody}>{t.retreats.helpBody}</p>
          <Link href={getLocalizedPath(Route.CONTACT, validLocale)} className={styles.helpCta}>
            {t.retreats.helpCta}
            <ArrowRightIcon />
          </Link>
        </section>
      </div>
    </>
  )
}
