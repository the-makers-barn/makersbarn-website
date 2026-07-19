import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { StructuredData } from '@/components/server'
import { WhatsAppCtaLink, WhatsAppIcon, CheckIcon, ArrowLeftIcon } from '@/components/client'
import { WhatsAppCtaLocation } from '@/constants/analytics'
import { SITE_CONFIG } from '@/constants/site'
import { generatePageMetadata } from '@/lib/metadata'
import { generateLocalBusinessSchema, generatePageBreadcrumbs } from '@/lib/structuredData'
import { getWhatsAppUrl } from '@/lib'
import { Route, Language } from '@/types'
import { IMAGES } from '@/data'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'

import styles from './page.module.css'

interface FocusedWorkationPageProps {
  params: Promise<{ locale: string }>
}

type Translations = Awaited<ReturnType<typeof getServerTranslations>>

export async function generateMetadata({ params }: FocusedWorkationPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return generatePageMetadata({
    title: t.focusedWorkation.metaTitle,
    description: t.focusedWorkation.metaDescription,
    path: Route.FOCUSED_WORKATION,
    locale: validLocale,
  })
}

interface SectionProps {
  t: Translations
}

interface WorkationHeroProps {
  t: Translations
  whatsappUrl: string
}

function WorkationHero({ t, whatsappUrl }: WorkationHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.heroKicker}>{t.focusedWorkation.hero.kicker}</p>
        <h1 className={styles.heroTitle}>{t.focusedWorkation.hero.title}</h1>
        <p className={styles.heroSubtitle}>{t.focusedWorkation.hero.subtitle}</p>
        <WhatsAppCtaLink
          href={whatsappUrl}
          location={WhatsAppCtaLocation.WORKATION_HERO}
          className={styles.primaryCta}
        >
          <WhatsAppIcon size={20} />
          {t.focusedWorkation.hero.bookNow}
        </WhatsAppCtaLink>
      </div>
    </section>
  )
}

interface ChecklistSectionProps {
  title: string
  intro: string
  items: readonly string[]
}

function ChecklistSection({ title, intro, items }: ChecklistSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionIntro}>{intro}</p>
        <ul className={styles.checklist}>
          {items.map((item) => (
            <li key={item} className={styles.checkItem}>
              <CheckIcon className={styles.checkIcon} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function WorkationCabins({ t }: SectionProps) {
  const cabins = t.focusedWorkation.cabins
  const cards = [
    { image: IMAGES.accommodation.cosmosView, ...cabins.cosmos },
    { image: IMAGES.accommodation.horizonKitchen, ...cabins.horizon },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>{cabins.title}</h2>
        <div className={styles.cabinGrid}>
          {cards.map((cabin) => (
            <article key={cabin.title} className={styles.cabinCard}>
              <div className={styles.cabinImageWrapper}>
                <Image
                  src={cabin.image}
                  alt={cabin.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className={styles.cabinImage}
                />
              </div>
              <div className={styles.cabinBody}>
                <h3 className={styles.cabinTitle}>{cabin.title}</h3>
                <p className={styles.cabinDescription}>{cabin.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkationSteps({ t }: SectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>{t.focusedWorkation.howItWorks.title}</h2>
        <ol className={styles.steps}>
          {t.focusedWorkation.howItWorks.steps.map((step, index) => (
            <li key={step} className={styles.step}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <span className={styles.stepText}>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function WorkationPractical({ t }: SectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>{t.focusedWorkation.practical.title}</h2>
        <ul className={styles.practicalList}>
          {t.focusedWorkation.practical.items.map((item) => (
            <li key={item} className={styles.practicalItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

interface WorkationCtaProps {
  t: Translations
  validLocale: Language
  whatsappUrl: string
}

function WorkationCta({ t, validLocale, whatsappUrl }: WorkationCtaProps) {
  const cta = t.focusedWorkation.cta
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>{cta.title}</h2>
        <p className={styles.ctaSubtitle}>{cta.subtitle}</p>
        <WhatsAppCtaLink
          href={whatsappUrl}
          location={WhatsAppCtaLocation.WORKATION_FOOTER}
          className={styles.primaryCta}
        >
          <WhatsAppIcon size={20} />
          {cta.bookNow}
        </WhatsAppCtaLink>
        <p className={styles.ctaAlternative}>
          {cta.alternativeText}{' '}
          <Link href={getLocalizedPath(Route.CONTACT, validLocale)} className={styles.ctaAlternativeLink}>
            {cta.alternativeCta}
          </Link>
        </p>
      </div>
    </section>
  )
}

export default async function FocusedWorkationPage({ params }: FocusedWorkationPageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const whatsappUrl = getWhatsAppUrl(t.focusedWorkation.bookingMessage)

  return (
    <>
      <StructuredData
        data={[
          generateLocalBusinessSchema({
            type: 'LodgingBusiness',
            image: `${SITE_CONFIG.url}/images/horizon-kitchen.jpg`,
          }),
          generatePageBreadcrumbs({
            name: t.focusedWorkation.metaTitle,
            path: getLocalizedPath(Route.FOCUSED_WORKATION, validLocale),
          }),
        ]}
      />

      <div className={styles.page}>
        <Link href={getLocalizedPath(Route.EXPERIENCES, validLocale)} className={styles.backLink}>
          <ArrowLeftIcon />
          {t.focusedWorkation.backToExperiences}
        </Link>

        <WorkationHero t={t} whatsappUrl={whatsappUrl} />

        <ChecklistSection
          title={t.focusedWorkation.whoItsFor.title}
          intro={t.focusedWorkation.whoItsFor.intro}
          items={t.focusedWorkation.whoItsFor.items}
        />

        <ChecklistSection
          title={t.focusedWorkation.included.title}
          intro={t.focusedWorkation.included.intro}
          items={t.focusedWorkation.included.items}
        />

        <WorkationCabins t={t} />

        <WorkationSteps t={t} />

        <WorkationPractical t={t} />

        <WorkationCta t={t} validLocale={validLocale} whatsappUrl={whatsappUrl} />
      </div>
    </>
  )
}
