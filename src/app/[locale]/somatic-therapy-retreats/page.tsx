import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { SOMATIC_THERAPY_RETREATS_SILO } from '@/data'
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
    title: SOMATIC_THERAPY_RETREATS_SILO.meta.title[validLocale],
    description: SOMATIC_THERAPY_RETREATS_SILO.meta.description[validLocale],
    path: SOMATIC_THERAPY_RETREATS_SILO.route,
    locale: validLocale,
  })
}

export default async function SomaticTherapyRetreatsPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={SOMATIC_THERAPY_RETREATS_SILO} locale={validLocale} t={t} />
}
