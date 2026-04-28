import { getValidLocale } from '@/lib/locale'
import { getServerTranslations } from '@/i18n'
import { ogContentType, ogSize, renderToolOgImage } from '@/lib/tools/og-template'

export const contentType = ogContentType
export const size = ogSize
export const alt = 'MakersBarn — Tools for retreat facilitators'

interface OgProps {
  params: Promise<{ locale: string }>
}

export default async function OgImage({ params }: OgProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return renderToolOgImage({
    eyebrow: t.tools.hub.eyebrow,
    title: t.tools.hub.title,
  })
}
