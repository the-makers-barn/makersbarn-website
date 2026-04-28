import { CALCULATOR_VARIANTS } from '@/data/tools'
import { ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import { getValidLocale } from '@/lib/locale'
import { ogContentType, ogSize, renderToolOgImage } from '@/lib/tools/og-template'

export const contentType = ogContentType
export const size = ogSize

const VARIANT = ToolVariant.YOGA

export const alt = `MakersBarn — ${CALCULATOR_VARIANTS[VARIANT].copy.heroTitle[Language.EN]}`

interface OgProps {
  params: Promise<{ locale: string }>
}

export default async function OgImage({ params }: OgProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const config = CALCULATOR_VARIANTS[VARIANT]
  return renderToolOgImage({
    eyebrow: config.copy.heroEyebrow[validLocale],
    title: config.copy.heroTitle[validLocale],
  })
}
