import type { Metadata } from 'next'
import Link from 'next/link'

import { StructuredData } from '@/components/server'
import { COMPARISON_CONTENT } from '@/data/comparison'
import { getServerTranslations } from '@/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'
import { generatePageBreadcrumbs } from '@/lib/structuredData'
import { Language, Route } from '@/types'

import styles from './page.module.css'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  return generatePageMetadata({
    title: COMPARISON_CONTENT.meta.title[validLocale],
    description: COMPARISON_CONTENT.meta.description[validLocale],
    path: Route.COMPARISON,
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

export default async function ComparisonPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const breadcrumb = generatePageBreadcrumbs({
    name: COMPARISON_CONTENT.meta.title[validLocale],
    path: getLocalizedPath(Route.COMPARISON, validLocale),
  })
  const hostHref = getLocalizedPath(Route.HOST_A_RETREAT, validLocale)
  const contactHref = getLocalizedPath(Route.CONTACT, validLocale)
  const commercialColumn = COMPARISON_CONTENT.table.columnLabelCommercial[validLocale]
  const makersBarnColumn = COMPARISON_CONTENT.table.columnLabelMakersBarn[validLocale]

  return (
    <>
      <StructuredData data={[breadcrumb]} />

      <article className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>{COMPARISON_CONTENT.hero.eyebrow[validLocale]}</p>
            <h1 className={styles.title}>{COMPARISON_CONTENT.hero.title[validLocale]}</h1>
            <p className={styles.intro}>{COMPARISON_CONTENT.hero.intro[validLocale]}</p>
          </div>
        </header>

        <section className={styles.bodySection} aria-labelledby="two-models">
          <div className={styles.bodyInner}>
            <h2 className={styles.sectionTitle} id="two-models">
              {COMPARISON_CONTENT.twoModels.h2[validLocale]}
            </h2>
            {COMPARISON_CONTENT.twoModels.body[validLocale].map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.tableSection} aria-labelledby="side-by-side">
          <div className={styles.tableInner}>
            <h2 className={styles.sectionTitle} id="side-by-side">
              {COMPARISON_CONTENT.table.h2[validLocale]}
            </h2>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.headLabel}>
                      <span className={styles.srOnly}>—</span>
                    </th>
                    <th scope="col" className={styles.headLabel}>
                      {commercialColumn}
                    </th>
                    <th scope="col" className={`${styles.headLabel} ${styles.headLabelHighlight}`}>
                      {makersBarnColumn}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_CONTENT.table.rows.map((row) => (
                    <tr key={row.label[Language.EN]} className={styles.row}>
                      <th scope="row" className={styles.rowLabel}>
                        {row.label[validLocale]}
                      </th>
                      <td className={styles.cellCommercial}>{row.commercial[validLocale]}</td>
                      <td className={styles.cellMakersBarn}>{row.makersBarn[validLocale]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.bodySection} aria-labelledby="what-you-trade">
          <div className={styles.bodyInner}>
            <h2 className={styles.sectionTitle} id="what-you-trade">
              {COMPARISON_CONTENT.whatYouTrade.h2[validLocale]}
            </h2>
            {COMPARISON_CONTENT.whatYouTrade.body[validLocale].map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className={`${styles.bodySection} ${styles.bodySectionInset}`} aria-labelledby="what-you-gain">
          <div className={styles.bodyInner}>
            <h2 className={styles.sectionTitle} id="what-you-gain">
              {COMPARISON_CONTENT.whatYouGain.h2[validLocale]}
            </h2>
            {COMPARISON_CONTENT.whatYouGain.body[validLocale].map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.bodySection} aria-labelledby="third-option">
          <div className={styles.bodyInner}>
            <h2 className={styles.sectionTitle} id="third-option">
              {COMPARISON_CONTENT.thirdOption.h2[validLocale]}
            </h2>
            {COMPARISON_CONTENT.thirdOption.body[validLocale].map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="comparison-final-cta">
          <h2 className={styles.finalCtaTitle} id="comparison-final-cta">
            {COMPARISON_CONTENT.finalCta.title[validLocale]}
          </h2>
          <p className={styles.finalCtaBody}>{COMPARISON_CONTENT.finalCta.body[validLocale]}</p>
          <div className={styles.finalCtaButtons}>
            <Link href={hostHref} className={styles.primaryCta}>
              {t.retreats.cardCta}
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
