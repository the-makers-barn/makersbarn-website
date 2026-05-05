import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import { SITE_CONFIG } from '@/constants/site'
import { NlRegion } from '@/constants/chef'
import type { Chef, Language } from '@/types'

type Props = { chef: Chef; lang: Language }

const SITE_URL = SITE_CONFIG.url
const JOB_TITLE = 'Retreat Chef'
const PRICE_CURRENCY = 'EUR'
const OFFER_NAME = 'Retreat catering'
const ADDRESS_COUNTRY = 'NL'
const SCHEMA_CONTEXT = 'https://schema.org'

export function buildChefStructuredDataLd(
  chef: Chef,
  lang: Language,
  regionLabels: Record<NlRegion, string>,
): object {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Person',
    name: chef.name,
    jobTitle: JOB_TITLE,
    image: `${SITE_URL}${chef.gallery.hero.src}`,
    description: localize(chef.tagline, lang),
    knowsLanguage: chef.languagesSpoken,
    address: {
      '@type': 'PostalAddress',
      addressLocality: chef.homeBase.city,
      addressRegion: regionLabels[chef.homeBase.region],
      addressCountry: ADDRESS_COUNTRY,
    },
    makesOffer: {
      '@type': 'Offer',
      name: OFFER_NAME,
      priceCurrency: PRICE_CURRENCY,
      price: chef.dayRate.amountEur,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        unitText: chef.dayRate.unit.toUpperCase(),
      },
      areaServed: chef.servesRegions.map((region) => ({
        '@type': 'AdministrativeArea',
        name: regionLabels[region],
      })),
    },
  }
}

export async function ChefStructuredData({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const ld = buildChefStructuredDataLd(chef, lang, dict.chef.enums.region)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}
