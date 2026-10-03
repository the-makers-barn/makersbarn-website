import type { Metadata } from 'next'

import { CABIN_DETAILS } from '@/data/cabins'
import { getServerTranslations } from '@/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import type { AccommodationCabin, Language } from '@/types'

export async function generateCabinMetadata(
  cabin: AccommodationCabin,
  locale: Language,
): Promise<Metadata> {
  const t = await getServerTranslations(locale)
  const content = t.cabinDetail.cabins[cabin]

  return generatePageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: CABIN_DETAILS[cabin].route,
    locale,
  })
}
