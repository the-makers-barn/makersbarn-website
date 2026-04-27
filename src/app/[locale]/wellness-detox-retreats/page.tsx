import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { WELLNESS_DETOX_RETREATS_SILO } from '@/data'
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
    title: WELLNESS_DETOX_RETREATS_SILO.meta.title[validLocale],
    description: WELLNESS_DETOX_RETREATS_SILO.meta.description[validLocale],
    path: WELLNESS_DETOX_RETREATS_SILO.route,
    locale: validLocale,
  })
}

export default async function WellnessDetoxRetreatsPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={WELLNESS_DETOX_RETREATS_SILO} locale={validLocale} t={t} />
}
