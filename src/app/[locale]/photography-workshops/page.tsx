import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { PHOTOGRAPHY_WORKSHOPS_SILO } from '@/data'
import { getServerTranslations } from '@/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  return generatePageMetadata({
    title: PHOTOGRAPHY_WORKSHOPS_SILO.meta.title[validLocale],
    description: PHOTOGRAPHY_WORKSHOPS_SILO.meta.description[validLocale],
    path: PHOTOGRAPHY_WORKSHOPS_SILO.route,
    locale: validLocale,
  })
}

export default async function PhotographyWorkshopsPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={PHOTOGRAPHY_WORKSHOPS_SILO} locale={validLocale} t={t} />
}
