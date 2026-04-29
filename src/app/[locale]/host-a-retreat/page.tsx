import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { StructuredData } from '@/components/server'
import {
  BREATHWORK_SOUND_HEALING_SILO,
  CIRCLE_RETREATS_SILO,
  COACHING_INTENSIVES_SILO,
  MEDITATION_RETREATS_SILO,
  PHOTOGRAPHY_WORKSHOPS_SILO,
  SILO_HUB_CARDS,
  SOMATIC_THERAPY_RETREATS_SILO,
  TEAM_OFFSITES_SILO,
  WELLNESS_DETOX_RETREATS_SILO,
  WRITING_RETREATS_SILO,
  YOGA_TEACHERS_SILO,
} from '@/data'
import { getServerTranslations } from '@/i18n'
import type { Dictionary } from '@/i18n/types'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'
import {
  generatePageBreadcrumbs,
  generateRetreatsCollectionSchema,
  getSiloCardLabel,
} from '@/lib/structuredData'
import { Language, Route, SiloContent, SiloHubCardSummary, SiloSlug } from '@/types'

import styles from './page.module.css'

const SILO_BY_SLUG: Record<SiloSlug, SiloContent> = {
  [SiloSlug.YOGA_TEACHERS]: YOGA_TEACHERS_SILO,
  [SiloSlug.MEDITATION_RETREATS]: MEDITATION_RETREATS_SILO,
  [SiloSlug.WRITING_RETREATS]: WRITING_RETREATS_SILO,
  [SiloSlug.TEAM_OFFSITES]: TEAM_OFFSITES_SILO,
  [SiloSlug.BREATHWORK_SOUND_HEALING]: BREATHWORK_SOUND_HEALING_SILO,
  [SiloSlug.COACHING_INTENSIVES]: COACHING_INTENSIVES_SILO,
  [SiloSlug.SOMATIC_THERAPY_RETREATS]: SOMATIC_THERAPY_RETREATS_SILO,
  [SiloSlug.WELLNESS_DETOX_RETREATS]: WELLNESS_DETOX_RETREATS_SILO,
  [SiloSlug.CIRCLE_RETREATS]: CIRCLE_RETREATS_SILO,
  [SiloSlug.PHOTOGRAPHY_WORKSHOPS]: PHOTOGRAPHY_WORKSHOPS_SILO,
}

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

interface SiloCardProps {
  card: SiloHubCardSummary
  locale: Language
  t: Dictionary
}

function SiloCard({ card, locale, t }: SiloCardProps) {
  const label = getSiloCardLabel(card, t)
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
  const hubPath = getLocalizedPath(Route.HOST_A_RETREAT, validLocale)
  const breadcrumb = generatePageBreadcrumbs({
    name: t.retreats.metaTitle,
    path: hubPath,
  })
  const collectionItems = SILO_HUB_CARDS.map((card) => {
    const label = getSiloCardLabel(card, t)
    return {
      card,
      silo: SILO_BY_SLUG[card.slug],
      title: label.title,
      pitch: label.pitch,
    }
  })
  const collectionSchema = generateRetreatsCollectionSchema(
    collectionItems,
    validLocale,
    {
      title: t.retreats.metaTitle,
      description: t.retreats.metaDescription,
      path: hubPath,
    }
  )

  return (
    <>
      <StructuredData data={[breadcrumb, collectionSchema]} />

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

        <section className={styles.toolsBlock} aria-labelledby="tools-block-title">
          <div className={styles.toolsBlockInner}>
            <p className={styles.toolsBlockEyebrow}>{t.retreats.toolsBlock.eyebrow}</p>
            <h2 className={styles.toolsBlockTitle} id="tools-block-title">
              {t.retreats.toolsBlock.title}
            </h2>
            <p className={styles.toolsBlockIntro}>{t.retreats.toolsBlock.intro}</p>
            <div className={styles.toolsBlockGrid}>
              <article className={styles.toolCard}>
                <h3 className={styles.toolCardTitle}>{t.retreats.toolsBlock.calendarTitle}</h3>
                <p className={styles.toolCardBody}>{t.retreats.toolsBlock.calendarBody}</p>
                <Link
                  href={getLocalizedPath(Route.TWELVE_MONTH_RETREAT_LAUNCH_CALENDAR, validLocale)}
                  className={styles.toolCardCta}
                >
                  {t.retreats.toolsBlock.calendarCtaLabel}
                  <ArrowRightIcon />
                </Link>
              </article>
              <article className={styles.toolCard}>
                <h3 className={styles.toolCardTitle}>{t.retreats.toolsBlock.calculatorTitle}</h3>
                <p className={styles.toolCardBody}>{t.retreats.toolsBlock.calculatorBody}</p>
                <Link
                  href={getLocalizedPath(Route.RETREAT_PROFITABILITY_CALCULATOR, validLocale)}
                  className={styles.toolCardCta}
                >
                  {t.retreats.toolsBlock.calculatorCtaLabel}
                  <ArrowRightIcon />
                </Link>
              </article>
            </div>
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
