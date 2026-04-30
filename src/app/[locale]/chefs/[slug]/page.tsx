import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ChefDetailPage } from '@/components/server/ChefDetailPage'
import { SITE_CONFIG } from '@/constants/site'
import { getChefBySlug, getChefsForEnv } from '@/data/chefs'
import { localize } from '@/lib'
import { getChefDetailPath } from '@/lib/routing'
import { Language } from '@/types'

export const dynamicParams = false

export function generateStaticParams(): { slug: string }[] {
  return getChefsForEnv().map((chef) => ({ slug: chef.slug }))
}

type Params = { locale: Language; slug: string }

const titleByLang: Record<Language, (chefName: string, region: string) => string> = {
  [Language.EN]: (name, region) => `${name} — Retreat Chef in ${region}, Netherlands`,
  [Language.NL]: (name, region) => `${name} — Retreatchef in ${region}, Nederland`,
  [Language.DE]: (name, region) => `${name} — Retreat-Koch in ${region}, Niederlande`,
}

const formatRegionLabel = (region: string): string =>
  region.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params
  const chef = getChefBySlug(slug)
  if (!chef) {
    return {}
  }

  const regionLabel = formatRegionLabel(chef.homeBase.region)
  const title = titleByLang[locale](chef.name, regionLabel)
  const description = localize(chef.tagline, locale)
  const canonical = `${SITE_CONFIG.url}${getChefDetailPath(chef.slug, locale)}`
  const isProd = process.env.VERCEL_ENV === 'production'

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
    robots: isProd ? undefined : { index: false, follow: false },
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
