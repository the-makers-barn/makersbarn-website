import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { BEDRIJFSUITJE_OVERIJSSEL_SILO } from '@/data'
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
    title: BEDRIJFSUITJE_OVERIJSSEL_SILO.meta.title[validLocale],
    description: BEDRIJFSUITJE_OVERIJSSEL_SILO.meta.description[validLocale],
    path: BEDRIJFSUITJE_OVERIJSSEL_SILO.route,
    locale: validLocale,
  })
}

export default async function BedrijfsuitjeOverijsselPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={BEDRIJFSUITJE_OVERIJSSEL_SILO} locale={validLocale} t={t} />
}
