import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { MEETING_VENUE_ZWOLLE_DEVENTER_SILO } from '@/data'
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
    title: MEETING_VENUE_ZWOLLE_DEVENTER_SILO.meta.title[validLocale],
    description: MEETING_VENUE_ZWOLLE_DEVENTER_SILO.meta.description[validLocale],
    path: MEETING_VENUE_ZWOLLE_DEVENTER_SILO.route,
    locale: validLocale,
  })
}

export default async function MeetingVenueZwolleDeventerPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={MEETING_VENUE_ZWOLLE_DEVENTER_SILO} locale={validLocale} t={t} />
}
