import Link from 'next/link'
import type { Metadata } from 'next'

import { StructuredData } from '@/components/server'
import { SITE_CONFIG } from '@/constants/site'
import { TOOLS_HUB_ITEMS } from '@/data/tools'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import {
  generateBreadcrumbListSchema,
  generateCollectionPageSchema,
} from '@/lib/structuredData'
import { Route } from '@/types'

import styles from './page.module.css'

interface PageProps {
  params: Promise<{ locale: string }>
}

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
    items: TOOLS_HUB_ITEMS.map((item) => ({
      name: item.title[validLocale],
      url: `${SITE_CONFIG.url}${getLocalizedPath(item.route, validLocale)}`,
      description: item.intro[validLocale],
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
          {TOOLS_HUB_ITEMS.map((item) => {
            const href = getLocalizedPath(item.route, validLocale)
            return (
              <li key={item.route}>
                <Link href={href} className={styles.toolCard}>
                  <span className={styles.toolCardTitle}>
                    {item.title[validLocale]}
                  </span>
                  <span className={styles.toolCardDescription}>
                    {item.intro[validLocale]}
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
