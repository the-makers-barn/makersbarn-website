import Link from 'next/link'
import type { Metadata } from 'next'

import { StructuredData } from '@/components/server'
import {
  generateBreadcrumbListSchema,
  generateCollectionPageSchema,
} from '@/lib/structuredData'
import { CALCULATOR_VARIANTS } from '@/data/tools'
import { TOOL_VARIANT_ROUTES, ToolVariant } from '@/constants/tools'
import { Route } from '@/types'
import { SITE_CONFIG } from '@/constants/site'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import { getValidLocale } from '@/lib/locale'
import { getServerTranslations } from '@/i18n'

import styles from './page.module.css'

interface PageProps {
  params: Promise<{ locale: string }>
}

const VARIANT_DISPLAY_ORDER: ToolVariant[] = [
  ToolVariant.GENERIC,
  ToolVariant.YOGA,
  ToolVariant.WELLNESS,
  ToolVariant.MEDITATION,
  ToolVariant.COACHING,
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return generatePageMetadata({
    title: t.tools.hub.metaTitle,
    description: t.tools.hub.metaDescription,
    path: Route.TOOLS,
    locale: validLocale,
  })
}

export default async function ToolsHubPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  const hubUrl = `${SITE_CONFIG.url}${getLocalizedPath(Route.TOOLS, validLocale)}`
  const breadcrumb = generateBreadcrumbListSchema([
    { name: 'Home', path: Route.HOME },
    { name: t.tools.hub.title, path: Route.TOOLS },
  ])
  const collection = generateCollectionPageSchema({
    name: t.tools.hub.title,
    url: hubUrl,
    description: t.tools.hub.metaDescription,
    locale: validLocale,
    items: VARIANT_DISPLAY_ORDER.map((v) => ({
      name: CALCULATOR_VARIANTS[v].copy.heroTitle[validLocale],
      url: `${SITE_CONFIG.url}${getLocalizedPath(TOOL_VARIANT_ROUTES[v], validLocale)}`,
      description: CALCULATOR_VARIANTS[v].copy.heroIntro[validLocale],
    })),
  })

  return (
    <>
      <StructuredData data={[breadcrumb, collection]} />
      <main className={styles.main}>
        <p className={styles.eyebrow}>{t.tools.hub.eyebrow}</p>
        <h1 className={styles.title}>{t.tools.hub.title}</h1>
        <p className={styles.intro}>{t.tools.hub.intro}</p>
        <ul className={styles.toolList}>
          {VARIANT_DISPLAY_ORDER.map((v) => {
            const cfg = CALCULATOR_VARIANTS[v]
            const href = getLocalizedPath(TOOL_VARIANT_ROUTES[v], validLocale)
            return (
              <li key={v}>
                <Link href={href} className={styles.toolCard}>
                  <span className={styles.toolCardTitle}>
                    {cfg.copy.heroTitle[validLocale]}
                  </span>
                  <span className={styles.toolCardDescription}>
                    {cfg.copy.heroIntro[validLocale]}
                  </span>
                  <span className={styles.toolCardCta}>
                    {t.tools.hub.toolCardCta} →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}
