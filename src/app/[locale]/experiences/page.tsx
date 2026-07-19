import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon, ExternalLinkIcon } from '@/components/client'
import { StructuredData, ExperienceOfferCard } from '@/components/server'
import { generatePageMetadata } from '@/lib/metadata'
import { generateLocalBusinessSchema, generatePageBreadcrumbs } from '@/lib/structuredData'
import { Route, Language } from '@/types'
import { SITE_CONFIG } from '@/constants/site'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'
import { EXPERIENCE_OFFERS, FEATURED_RETREATS } from '@/data'

import styles from '../../experiences/page.module.css'

interface ExperiencesPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ExperiencesPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return generatePageMetadata({
    title: t.experiences.metaTitle,
    description: t.experiences.metaDescription,
    path: '/experiences',
    locale: validLocale,
  })
}

type Translations = Awaited<ReturnType<typeof getServerTranslations>>

interface FeaturedRetreatCardProps {
  retreat: typeof FEATURED_RETREATS[number]
  validLocale: Language
  t: Translations
}

function FeaturedRetreatCard({ retreat, validLocale, t }: FeaturedRetreatCardProps) {
  return (
    <article className={styles.featuredCard}>
      <div className={styles.featuredImageWrapper}>
        <Image
          src={retreat.image}
          alt={retreat.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className={styles.featuredImage}
        />
      </div>

      <div className={styles.featuredContent}>
        <h3 className={styles.featuredTitle}>{retreat.title}</h3>
        <p className={styles.featuredDate}>{retreat.dateRange}</p>

        {(() => {
          if (retreat.internalUrl) {
            return (
              <Link
                href={getLocalizedPath(retreat.internalUrl, validLocale)}
                className={styles.featuredCta}
              >
                {t.experiences.featuredRetreats.bookNow}
                <ArrowRightIcon className={styles.featuredCtaIcon} />
              </Link>
            )
          }
          if (retreat.externalUrl) {
            return (
              <a
                href={retreat.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.featuredCta}
              >
                {t.experiences.featuredRetreats.bookNow}
                <ExternalLinkIcon />
              </a>
            )
          }
          return null
        })()}
      </div>
    </article>
  )
}

export default async function ExperiencesPage({ params }: ExperiencesPageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return (
    <>
      <StructuredData
        data={[
          generateLocalBusinessSchema({
            type: 'LodgingBusiness',
            image: `${SITE_CONFIG.url}/images/cosmos-outside-wooden-cabin.jpeg`,
          }),
          generatePageBreadcrumbs({
            name: t.experiences.title,
            path: getLocalizedPath(Route.EXPERIENCES, validLocale),
          }),
        ]}
      />

      <div className={styles.experiences}>
        {/* Create Your Own Experience Section */}
        <section className={styles.offersSection}>
          <header className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>{t.experiences.createExperience.title}</h1>
            <p className={styles.sectionSubtitle}>{t.experiences.createExperience.subtitle}</p>
          </header>

          <div className={styles.offersGrid}>
            {EXPERIENCE_OFFERS.map((offer) => (
              <ExperienceOfferCard key={offer.id} offer={offer} validLocale={validLocale} t={t} />
            ))}
          </div>

          <div className={styles.alternativeOption}>
            <span className={styles.alternativeText}>{t.experiences.createExperience.alternativeText}</span>
            <Link href={getLocalizedPath(Route.CONTACT, validLocale)} className={styles.alternativeLink}>
              {t.experiences.createExperience.alternativeCta}
              <ArrowRightIcon className={styles.alternativeLinkIcon} />
            </Link>
          </div>
        </section>

        <div className={styles.divider} />

        {/* Featured Retreats Section */}
        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.experiences.featuredRetreats.title}</h2>
            <p className={styles.sectionSubtitle}>{t.experiences.featuredRetreats.subtitle}</p>
          </div>

          <div className={styles.featuredGrid}>
            {FEATURED_RETREATS.map((retreat) => (
              <FeaturedRetreatCard key={retreat.id} retreat={retreat} validLocale={validLocale} t={t} />
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        <p style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Link href={getLocalizedPath(Route.CHEFS, validLocale)}>
            {t.chefsListing.crossLink.label}
          </Link>
        </p>

        {/* CTA Footer */}
        <footer className={styles.ctaFooter}>
          <h2 className={styles.ctaTitle}>{t.experiences.ctaTitle}</h2>
          <p className={styles.ctaSubtitle}>{t.experiences.ctaSubtitle}</p>
          <Link href={getLocalizedPath(Route.CONTACT, validLocale)} className={styles.ctaButton}>
            {t.experiences.ctaButton}
            <ArrowRightIcon />
          </Link>
        </footer>
      </div>
    </>
  )
}
