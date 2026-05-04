import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ChefDetailPage } from '@/components/server/ChefDetailPage'
import { ChefStatus } from '@/constants/chef'
import { SITE_CONFIG } from '@/constants/site'
import { ALL_CHEFS, getChefBySlug } from '@/data/chefs'
import { localize } from '@/lib'
import { getChefDetailPath } from '@/lib/routing'
import { getServerTranslations } from '@/i18n'
import { Language } from '@/types'

export const dynamicParams = false

export function generateStaticParams(): { slug: string }[] {
  // Pre-render every chef URL — including drafts — so direct profile links work
  // in every environment. Drafts are kept out of the public listing and sitemap;
  // the metadata below adds noindex so search engines skip them.
  return ALL_CHEFS.map((chef) => ({ slug: chef.slug }))
}

type Params = { locale: Language; slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params
  const chef = getChefBySlug(slug)
  if (!chef) {
    return {}
  }

  const dict = await getServerTranslations(locale)
  const regionLabel = dict.chef.enums.region[chef.homeBase.region]
  const title = dict.chef.metaTitle.replace('{name}', chef.name).replace('{region}', regionLabel)
  const description = localize(chef.tagline, locale)
  const canonical = `${SITE_CONFIG.url}${getChefDetailPath(chef.slug, locale)}`
  const isProd = process.env.VERCEL_ENV === 'production'
  const isDraft = chef.status === ChefStatus.DRAFT
  const shouldNoIndex = !isProd || isDraft

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_CONFIG.url}${getChefDetailPath(chef.slug, Language.EN)}`,
        nl: `${SITE_CONFIG.url}${getChefDetailPath(chef.slug, Language.NL)}`,
        de: `${SITE_CONFIG.url}${getChefDetailPath(chef.slug, Language.DE)}`,
        'x-default': `${SITE_CONFIG.url}${getChefDetailPath(chef.slug, Language.EN)}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'profile',
      url: canonical,
      images: [{ url: `${SITE_CONFIG.url}${chef.gallery.hero.src}`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: shouldNoIndex ? { index: false, follow: false } : undefined,
  }
}

export default async function ChefRoute({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params
  const chef = getChefBySlug(slug)
  if (!chef) {
    notFound()
  }
  return <ChefDetailPage chef={chef} lang={locale} />
}
