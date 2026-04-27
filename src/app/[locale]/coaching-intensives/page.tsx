import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { COACHING_INTENSIVES_SILO } from '@/data'
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
    title: COACHING_INTENSIVES_SILO.meta.title[validLocale],
    description: COACHING_INTENSIVES_SILO.meta.description[validLocale],
    path: COACHING_INTENSIVES_SILO.route,
    locale: validLocale,
  })
}

export default async function CoachingIntensivesPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={COACHING_INTENSIVES_SILO} locale={validLocale} t={t} />
}
