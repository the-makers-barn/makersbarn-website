import Image from 'next/image'
import Link from 'next/link'

import { ComparisonTeaser } from '@/components/server/ComparisonTeaser'
import { StructuredData } from '@/components/server/StructuredData'
import { generatePageBreadcrumbs } from '@/lib/structuredData'
import { getLocalizedPath } from '@/lib/routing'
import { Language, Route, SiloContent } from '@/types'
import type { Dictionary } from '@/i18n/types'

import styles from './SiloLandingPage.module.css'

const SECTION_IMAGE_SIZES = '(max-width: 768px) 100vw, 50vw' as const
const HERO_IMAGE_SIZES = '100vw' as const

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

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}

interface SiloLandingPageProps {
  silo: SiloContent
  locale: Language
  t: Dictionary
}

function buildFaqSchema(silo: SiloContent, locale: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: silo.faq.map((item) => ({
      '@type': 'Question',
      name: item.question[locale],
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer[locale],
      },
    })),
  }
}

export function SiloLandingPage({ silo, locale, t }: SiloLandingPageProps) {
  const heroAlt = silo.heroImageAlt[locale]
  const breadcrumb = generatePageBreadcrumbs({
    name: silo.meta.title[locale],
    path: getLocalizedPath(silo.route, locale),
  })
  const faqSchema = buildFaqSchema(silo, locale)
  const retreatsHref = getLocalizedPath(Route.HOST_A_RETREAT, locale)
  const bookHref = getLocalizedPath(Route.BOOK, locale)
  const contactHref = getLocalizedPath(Route.CONTACT, locale)

  return (
    <>
      <StructuredData data={[breadcrumb, faqSchema]} />

      <article className={styles.silo}>
        <div className={styles.heroFrame}>
          <Image
            src={silo.heroImageSrc}
            alt={heroAlt}
            fill
            priority
            sizes={HERO_IMAGE_SIZES}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <Link href={retreatsHref} className={styles.backLink}>
              <ArrowLeftIcon />
              {t.silos.backToRetreats}
            </Link>
            <p className={styles.eyebrow}>{silo.hero.eyebrow[locale]}</p>
            <h1 className={styles.title}>{silo.hero.title[locale]}</h1>
            <p className={styles.subtitle}>{silo.hero.subtitle[locale]}</p>
            <div className={styles.heroCtas}>
              <Link href={bookHref} className={styles.primaryCta}>
                {t.silos.primaryCta}
                <ArrowRightIcon />
              </Link>
              <Link href={contactHref} className={styles.secondaryCta}>
                {t.silos.secondaryCta}
              </Link>
            </div>
          </div>
        </div>

        <section className={styles.hookSection} aria-labelledby="silo-hook">
          <p className={styles.hookEyebrow} id="silo-hook">
            {t.silos.hookEyebrow}
          </p>
          <p className={styles.hookText}>{silo.hook.text[locale]}</p>
          {silo.hook.caption && (
            <p className={styles.hookCaption}>{silo.hook.caption[locale]}</p>
          )}
        </section>

        {silo.sections.map((section, index) => {
          const isReversed = index % 2 === 1
          const sectionClass = isReversed
            ? `${styles.section} ${styles.sectionReversed}`
            : styles.section
          const sectionImage = section.imageSrc
          const sectionImageAlt = section.imageAlt?.[locale] ?? ''
          return (
            <section key={section.h2[Language.EN]} className={sectionClass}>
              <div className={styles.sectionContent}>
                <h2 className={styles.sectionTitle}>{section.h2[locale]}</h2>
                {section.body[locale].map((paragraph) => (
                  <p key={paragraph} className={styles.sectionParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {sectionImage && (
                <div className={styles.sectionImageWrapper}>
                  <Image
                    src={sectionImage}
                    alt={sectionImageAlt}
                    fill
                    sizes={SECTION_IMAGE_SIZES}
                    className={styles.sectionImage}
                  />
                </div>
              )}
            </section>
          )
        })}

        <section className={styles.factsSection} aria-labelledby="silo-facts">
          <h2 className={styles.factsTitle} id="silo-facts">
            {t.silos.factsTitle}
          </h2>
          <div className={styles.factsGrid}>
            {silo.facts.map((fact) => (
              <div key={fact.number} className={styles.factCard}>
                <p className={styles.factNumber}>{fact.number}</p>
                <p className={styles.factDescription}>{fact.description[locale]}</p>
              </div>
            ))}
          </div>
        </section>

        {silo.schedule && (
          <section className={styles.scheduleSection} aria-labelledby="silo-schedule">
            <h2 className={styles.scheduleTitle} id="silo-schedule">
              {silo.schedule.title[locale]}
            </h2>
            {silo.schedule.intro && (
              <p className={styles.scheduleIntro}>{silo.schedule.intro[locale]}</p>
            )}
            <ol className={styles.scheduleList}>
              {silo.schedule.items.map((item) => (
                <li key={item.time} className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>{item.time}</span>
                  <span className={styles.scheduleActivity}>{item.activity[locale]}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className={styles.faqSection} aria-labelledby="silo-faq">
          <h2 className={styles.faqTitle} id="silo-faq">
            {t.silos.faqTitle}
          </h2>
          <div className={styles.faqList}>
            {silo.faq.map((item) => (
              <details key={item.question[Language.EN]} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{item.question[locale]}</summary>
                <p className={styles.faqAnswer}>{item.answer[locale]}</p>
              </details>
            ))}
          </div>
        </section>

        <ComparisonTeaser locale={locale} t={t} />

        <section className={styles.finalCta} aria-labelledby="silo-final-cta">
          <h2 className={styles.finalCtaTitle} id="silo-final-cta">
            {silo.finalCta.title[locale]}
          </h2>
          <p className={styles.finalCtaBody}>{silo.finalCta.body[locale]}</p>
          <div className={styles.finalCtaButtons}>
            <Link href={bookHref} className={styles.primaryCta}>
              {t.silos.finalCtaPrimary}
              <ArrowRightIcon />
            </Link>
            <Link href={contactHref} className={styles.secondaryCta}>
              {t.silos.finalCtaSecondary}
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
