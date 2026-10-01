import type { Metadata } from 'next'

import { CabinDetailPage, generateCabinMetadata } from '@/components/server'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { AccommodationCabin } from '@/types'

interface HorizonLoftPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HorizonLoftPageProps): Promise<Metadata> {
  const { locale } = await params
  return generateCabinMetadata(AccommodationCabin.HORIZON, getValidLocale(locale))
}

export default async function HorizonLoftPage({ params }: HorizonLoftPageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return <CabinDetailPage cabin={AccommodationCabin.HORIZON} locale={validLocale} t={t} />
}
