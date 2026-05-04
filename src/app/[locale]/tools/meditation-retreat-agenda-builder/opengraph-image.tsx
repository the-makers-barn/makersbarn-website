import { AgendaNiche } from '@/constants/tools'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { ogContentType, ogSize, renderToolOgImage } from '@/lib/tools/og-template'

export const contentType = ogContentType
export const size = ogSize

const NICHE = AgendaNiche.MEDITATION

export const alt = 'MakersBarn — The Meditation Retreat Schedule Builder'

interface OgProps {
  params: Promise<{ locale: string }>
}

export default async function OgImage({ params }: OgProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const nicheCopy = t.tools.agenda.niches[NICHE]
  return renderToolOgImage({
    eyebrow: nicheCopy.heroEyebrow,
    title: nicheCopy.heroTitle,
  })
}
