import { AgendaNiche } from '@/constants/tools'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { ogContentType, ogSize, renderToolOgImage } from '@/lib/tools/og-template'

export const contentType = ogContentType
export const size = ogSize

const NICHE = AgendaNiche.YOGA
const NICHE_LABEL_PLACEHOLDER = '{nicheLabel}'

const interpolate = (template: string, nicheLabel: string): string =>
  template.replaceAll(NICHE_LABEL_PLACEHOLDER, nicheLabel)

export const alt = 'MakersBarn — The Yoga Retreat Agenda Builder'

interface OgProps {
  params: Promise<{ locale: string }>
}

export default async function OgImage({ params }: OgProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const nicheLabel = t.tools.agenda.nicheLabels[NICHE]
  return renderToolOgImage({
    eyebrow: t.tools.agenda.heroEyebrow,
    title: interpolate(t.tools.agenda.heroTitle, nicheLabel),
  })
}
