import type { Metadata } from 'next'

import { CabinDetailPage, generateCabinMetadata } from '@/components/server'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { AccommodationCabin } from '@/types'

interface CosmosCabinPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: CosmosCabinPageProps): Promise<Metadata> {
  const { locale } = await params
  return generateCabinMetadata(AccommodationCabin.COSMOS, getValidLocale(locale))
}

export default async function CosmosCabinPage({ params }: CosmosCabinPageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  return <CabinDetailPage cabin={AccommodationCabin.COSMOS} locale={validLocale} t={t} />
}
