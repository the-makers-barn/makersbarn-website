import type { Metadata } from 'next'

import { SiloLandingPage } from '@/components/server'
import { BREATHWORK_SOUND_HEALING_SILO } from '@/data'
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
    title: BREATHWORK_SOUND_HEALING_SILO.meta.title[validLocale],
    description: BREATHWORK_SOUND_HEALING_SILO.meta.description[validLocale],
    path: BREATHWORK_SOUND_HEALING_SILO.route,
    locale: validLocale,
  })
}

export default async function BreathworkSoundHealingPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return <SiloLandingPage silo={BREATHWORK_SOUND_HEALING_SILO} locale={validLocale} t={t} />
}
