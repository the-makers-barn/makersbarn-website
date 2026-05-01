import type { Metadata } from 'next'

import { ChefsListingPage } from '@/components/server'
import { PUBLISHED_CHEFS, getChefsForEnv } from '@/data/chefs'
import { getServerTranslations } from '@/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'
import { Route } from '@/types'

interface PageProps {
  params: Promise<{ locale: string }>
}

const IS_PROD = process.env.VERCEL_ENV === 'production'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const dict = await getServerTranslations(validLocale)
  return {
    ...generatePageMetadata({
      title: dict.chefsListing.meta.title,
      description: dict.chefsListing.meta.description,
      path: Route.CHEFS,
      locale: validLocale,
    }),
    robots: IS_PROD ? undefined : { index: false, follow: false },
  }
}

export default async function ChefsListingRoute({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const chefs = getChefsForEnv()
  return (
    <ChefsListingPage
      chefs={chefs}
      publishedChefs={PUBLISHED_CHEFS}
      lang={validLocale}
    />
  )
}
