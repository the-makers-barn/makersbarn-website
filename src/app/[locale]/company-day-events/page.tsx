import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { COMPANY_DAY_EVENTS_SILO } from '@/data'
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
    title: COMPANY_DAY_EVENTS_SILO.meta.title[validLocale],
    description: COMPANY_DAY_EVENTS_SILO.meta.description[validLocale],
    path: COMPANY_DAY_EVENTS_SILO.route,
    locale: validLocale,
  })
}

export default async function CompanyDayEventsPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={COMPANY_DAY_EVENTS_SILO} locale={validLocale} t={t} />
}
