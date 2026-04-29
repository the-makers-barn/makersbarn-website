import { TimelinePreset } from '@/constants/tools'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { ogContentType, ogSize, renderToolOgImage } from '@/lib/tools/og-template'

export const contentType = ogContentType
export const size = ogSize

const PRESET = TimelinePreset.NINE_MONTHS
const MONTHS_PLACEHOLDER = '{months}'

const interpolate = (template: string, months: string): string =>
  template.replaceAll(MONTHS_PLACEHOLDER, months)

export const alt = `MakersBarn — The ${PRESET}-Month Retreat Launch Calendar`

interface OgProps {
  params: Promise<{ locale: string }>
}

export default async function OgImage({ params }: OgProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const months = String(PRESET)
  return renderToolOgImage({
    eyebrow: t.tools.calendar.heroEyebrow,
    title: interpolate(t.tools.calendar.heroTitle, months),
  })
}
