import { SITE_CONFIG } from '@/constants/site'
import { getServerTranslations } from '@/i18n/server'
import { getChefDetailPath, getLocalizedPath } from '@/lib/routing'
import { Language, Route } from '@/types'
import type { Chef } from '@/types'

const SCHEMA_CONTEXT = 'https://schema.org'
const HOME_BREADCRUMB_NAME = 'Home'

interface FaqItem { question: string; answer: string }

interface BuildArgs {
  lang: Language
  publishedChefs: readonly Chef[]
  faqItems: readonly FaqItem[]
  meta: { title: string; description: string }
}

export function buildChefsListingStructuredDataLd(args: BuildArgs): object {
  const { lang, publishedChefs, faqItems, meta } = args
  const canonical = `${SITE_CONFIG.url}${getLocalizedPath(Route.CHEFS, lang)}`
  const homeUrl = `${SITE_CONFIG.url}${getLocalizedPath('/', lang)}`

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_BREADCRUMB_NAME, item: homeUrl },
      { '@type': 'ListItem', position: 2, name: meta.title, item: canonical },
    ],
  }

  const collectionPage = {
    '@type': 'CollectionPage',
    '@id': canonical,
    name: meta.title,
    description: meta.description,
    inLanguage: lang,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
    },
  }

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const graph: object[] = [breadcrumb, collectionPage, faqPage]

  if (publishedChefs.length > 0) {
    graph.push({
      '@type': 'ItemList',
      itemListElement: publishedChefs.map((chef, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_CONFIG.url}${getChefDetailPath(chef.slug, lang)}`,
        name: chef.name,
      })),
    })
  }

  return { '@context': SCHEMA_CONTEXT, '@graph': graph }
}

interface ComponentProps {
  lang: Language
  publishedChefs: readonly Chef[]
}

export async function ChefsStructuredData({ lang, publishedChefs }: ComponentProps) {
  const dict = await getServerTranslations(lang)
  const ld = buildChefsListingStructuredDataLd({
    lang,
    publishedChefs,
    faqItems: dict.chefsListing.faq.items,
    meta: dict.chefsListing.meta,
  })
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}
