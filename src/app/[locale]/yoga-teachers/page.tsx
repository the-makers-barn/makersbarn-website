import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { YOGA_TEACHERS_SILO } from '@/data'
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
    title: YOGA_TEACHERS_SILO.meta.title[validLocale],
    description: YOGA_TEACHERS_SILO.meta.description[validLocale],
    path: YOGA_TEACHERS_SILO.route,
    locale: validLocale,
  })
}

export default async function YogaTeachersPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={YOGA_TEACHERS_SILO} locale={validLocale} t={t} />
}
