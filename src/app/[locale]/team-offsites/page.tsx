import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { TEAM_OFFSITES_SILO } from '@/data'
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
    title: TEAM_OFFSITES_SILO.meta.title[validLocale],
    description: TEAM_OFFSITES_SILO.meta.description[validLocale],
    path: TEAM_OFFSITES_SILO.route,
    locale: validLocale,
  })
}

export default async function TeamOffsitesPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={TEAM_OFFSITES_SILO} locale={validLocale} t={t} />
}
