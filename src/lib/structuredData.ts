import { Language, Route, SiloContent, SiloHubCardSummary, SiloSlug } from '@/types'
import { FOOTER_ADDRESS, FOOTER_EMAIL, SOCIAL_LINKS } from '@/constants/footer'
import { CONTACT_PHONE_NUMBER } from '@/constants/contact'
import { SITE_CONFIG } from '@/constants/site'
import { getLocalizedPath } from '@/lib/routing'
import type { Dictionary } from '@/i18n/types'

const SITE_NAME = SITE_CONFIG.name
const SITE_URL = SITE_CONFIG.url

const VENUE_GEO = { latitude: 52.3833, longitude: 6.1833 } as const
const VENUE_OVERNIGHT_CAPACITY = 14
const VENUE_DAY_PROGRAM_CAPACITY = 20
const SHANTI_DEVA_EVENT_ID = `${SITE_URL}/experiences/shanti-deva-retreat#event`

export interface OrganizationSchema {
  '@context': string
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  address: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  contactPoint: {
    '@type': 'ContactPoint'
    telephone: string
    contactType: string
    email: string
    areaServed: string
    availableLanguage: string[]
  }
  sameAs: string[]
}

export interface AmenityFeature {
  '@type': 'LocationFeatureSpecification'
  name: string
  value: boolean | string
}

export interface AccommodationSchema {
  '@type': 'Accommodation' | 'Suite' | 'House' | 'Room'
  name: string
  description: string
  numberOfBeds?: number
  occupancy?: { '@type': 'QuantitativeValue'; maxValue: number }
  floorSize?: { '@type': 'QuantitativeValue'; value: number; unitCode: 'MTK' }
}

export interface LocalBusinessSchema {
  '@context': string
  '@type': 'LocalBusiness' | 'LodgingBusiness'
  name: string
  image: string
  '@id': string
  url: string
  telephone: string
  email: string
  address: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    '@type': 'GeoCoordinates'
    latitude?: number
    longitude?: number
  }
  priceRange?: string
  amenityFeature?: AmenityFeature[]
  containsPlace?: AccommodationSchema[]
  maximumAttendeeCapacity?: number
}

export interface EventVenueSchema {
  '@context': string
  '@type': 'EventVenue'
  '@id': string
  name: string
  url: string
  description: string
  image: string
  address: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    '@type': 'GeoCoordinates'
    latitude: number
    longitude: number
  }
  maximumAttendeeCapacity: number
  amenityFeature: AmenityFeature[]
  containsPlace: AccommodationSchema[]
  keywords?: string
  audience?: { '@type': 'Audience'; audienceType: string }
  isAccessibleForFree?: boolean
  publicAccess?: boolean
  smokingAllowed?: boolean
  subjectOf?: Array<{ '@type': 'Event'; '@id': string }>
}

export interface CollectionPageSchema {
  '@context': string
  '@type': 'CollectionPage'
  name: string
  url: string
  description: string
  inLanguage: string
  isPartOf: { '@id': string }
  about: { '@id': string }
  mainEntity: {
    '@type': 'ItemList'
    numberOfItems: number
    itemListElement: Array<{
      '@type': 'ListItem'
      position: number
      url: string
      name: string
      description: string
    }>
  }
}

export interface WebSiteSchema {
  '@context': string
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  publisher: {
    '@id': string
  }
  potentialAction?: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    'query-input': string
  }
}

export interface BreadcrumbListSchema {
  '@context': string
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }>
}

export interface ContactPageSchema {
  '@context': string
  '@type': 'ContactPage'
  name: string
  url: string
  description: string
  mainEntity: {
    '@type': 'Organization'
    '@id': string
    name: string
    telephone: string
    email: string
    address: {
      '@type': 'PostalAddress'
      streetAddress: string
      addressLocality: string
      postalCode: string
      addressCountry: string
    }
  }
}

/**
 * Generates Organization schema for the business
 */
export function generateOrganizationSchema(): OrganizationSchema {
  const socialUrls = SOCIAL_LINKS.map((link) => link.url)

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/tmb-logo.webp`,
    description:
      'A countryside retreat venue in the Netherlands offering accommodation, practice spaces, and tranquil nature experiences.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: FOOTER_ADDRESS.street,
      addressLocality: FOOTER_ADDRESS.city,
      postalCode: FOOTER_ADDRESS.postalCode,
      addressCountry: FOOTER_ADDRESS.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE_NUMBER,
      contactType: 'Customer Service',
      email: FOOTER_EMAIL,
      areaServed: 'NL',
      availableLanguage: ['en', 'nl', 'de', 'es', 'fr'],
    },
    sameAs: socialUrls,
  }
}

const DEFAULT_AMENITIES: ReadonlyArray<{ name: string; value: boolean | string }> = [
  { name: 'Practice Hall (Hay House)', value: '65 m² heated wooden floor' },
  { name: 'Dimmable Practice Lighting', value: true },
  { name: 'Sauna', value: true },
  { name: 'Swimming Pond', value: true },
  { name: 'Hot Tub', value: true },
  { name: 'Outdoor Shower', value: true },
  { name: 'Fire Circle', value: true },
  { name: 'Teahouse', value: true },
  { name: 'Long Dining Table', value: 'Seats 14' },
  { name: 'Fibre Wifi', value: true },
  { name: 'Full Venue Buyout', value: true },
  { name: 'Private Land', value: '1.3 hectares' },
  { name: 'Overnight Capacity', value: `${VENUE_OVERNIGHT_CAPACITY} beds` },
  { name: 'Day-Programme Capacity', value: `${VENUE_DAY_PROGRAM_CAPACITY} participants` },
] as const

/**
 * Returns the venue's structured accommodation list.
 * Used as `containsPlace` on LodgingBusiness and EventVenue schemas so
 * agents can answer questions like "is there a private cabin for the lead teacher?".
 */
export function generateAccommodations(): AccommodationSchema[] {
  return [
    {
      '@type': 'Suite',
      name: 'Horizon — converted hay barn',
      description:
        'Mix of single, twin, and shared rooms in the converted hay barn. Sleeps up to 14, with the long dining table and group kitchen on the ground floor.',
      numberOfBeds: 14,
      occupancy: { '@type': 'QuantitativeValue', maxValue: 14 },
    },
    {
      '@type': 'House',
      name: 'Cosmos cabin',
      description:
        'Private wooden cabin with woodstove and writing desk by a window. Typically used by the lead teacher, visiting author, or for one-to-one supervision.',
      numberOfBeds: 2,
      occupancy: { '@type': 'QuantitativeValue', maxValue: 2 },
    },
  ]
}

function toAmenityFeatures(
  amenities: ReadonlyArray<{ name: string; value: boolean | string }>
): AmenityFeature[] {
  return amenities.map((amenity) => ({
    '@type': 'LocationFeatureSpecification',
    name: amenity.name,
    value: amenity.value,
  }))
}

/**
 * Generates LocalBusiness schema for facilities/retreat venue
 */
export function generateLocalBusinessSchema(options?: {
  type?: 'LocalBusiness' | 'LodgingBusiness'
  image?: string
  priceRange?: string
  amenities?: Array<{ name: string; value: boolean | string }>
  geo?: { latitude: number; longitude: number }
  includeAccommodations?: boolean
}): LocalBusinessSchema {
  const {
    type = 'LodgingBusiness',
    image = `${SITE_URL}/open-graph-preview-image.png`,
    priceRange,
    amenities = DEFAULT_AMENITIES,
    geo = VENUE_GEO,
    includeAccommodations = true,
  } = options || {}

  const schema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: SITE_NAME,
    image,
    '@id': `${SITE_URL}#business`,
    url: SITE_URL,
    telephone: CONTACT_PHONE_NUMBER,
    email: FOOTER_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: FOOTER_ADDRESS.street,
      addressLocality: FOOTER_ADDRESS.city,
      postalCode: FOOTER_ADDRESS.postalCode,
      addressCountry: FOOTER_ADDRESS.country,
    },
    maximumAttendeeCapacity: VENUE_DAY_PROGRAM_CAPACITY,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
  }

  if (priceRange) {
    schema.priceRange = priceRange
  }

  if (amenities.length > 0) {
    schema.amenityFeature = toAmenityFeatures(amenities)
  }

  if (includeAccommodations) {
    schema.containsPlace = generateAccommodations()
  }

  return schema
}

/**
 * Generates EventVenue schema for a retreat-type silo page so AI agents can match
 * organizer queries like "venue for an EMDR intensive that sleeps 14, full buyout".
 *
 * Encodes capacity, amenities, accommodations, audience and silo-specific keywords.
 * Pass `linkedEventIds` to cross-link past hosted events as proof-of-fit.
 */
export function generateEventVenueSchema(
  silo: SiloContent,
  locale: Language,
  options?: { linkedEventIds?: readonly string[] }
): EventVenueSchema {
  const { linkedEventIds = [] } = options || {}
  const seo = silo.organizerSeo
  const path = getLocalizedPath(silo.route, locale)
  const venueId = `${SITE_URL}${path}#venue`
  const url = `${SITE_URL}${path}`
  const image = silo.heroImageSrc.startsWith('http')
    ? silo.heroImageSrc
    : `${SITE_URL}${silo.heroImageSrc}`

  const overnight = seo?.overnightCapacityOverride ?? VENUE_OVERNIGHT_CAPACITY
  const dayProgram = seo?.dayProgramCapacityOverride ?? VENUE_DAY_PROGRAM_CAPACITY

  const schema: EventVenueSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    '@id': venueId,
    name: silo.meta.title[locale],
    url,
    description: silo.meta.description[locale],
    image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: FOOTER_ADDRESS.street,
      addressLocality: FOOTER_ADDRESS.city,
      postalCode: FOOTER_ADDRESS.postalCode,
      addressCountry: FOOTER_ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: VENUE_GEO.latitude,
      longitude: VENUE_GEO.longitude,
    },
    maximumAttendeeCapacity: Math.max(overnight, dayProgram),
    amenityFeature: toAmenityFeatures(DEFAULT_AMENITIES),
    containsPlace: generateAccommodations(),
    publicAccess: false,
  }

  if (seo?.keywords) {
    schema.keywords = seo.keywords[locale].join(', ')
  }

  if (seo?.audience) {
    schema.audience = {
      '@type': 'Audience',
      audienceType: seo.audience[locale],
    }
  }

  if (linkedEventIds.length > 0) {
    schema.subjectOf = linkedEventIds.map((id) => ({
      '@type': 'Event' as const,
      '@id': id,
    }))
  }

  return schema
}

/**
 * Stable @id for the Shanti Deva Buddhist retreat Event so silo schemas can
 * reference it as proof-of-fit (i.e. "this venue actually hosts Buddhist retreats").
 */
export const SHANTI_DEVA_RETREAT_EVENT_ID = SHANTI_DEVA_EVENT_ID

interface RetreatsCollectionItem {
  card: SiloHubCardSummary
  silo: SiloContent
  pitch: string
  title: string
}

/**
 * Generates CollectionPage + ItemList schema for the Host a Retreat hub.
 *
 * Tells AI agents in one structured block: "this venue hosts these N retreat types"
 * — the question that drives organizer-intent searches.
 */
export function generateRetreatsCollectionSchema(
  items: readonly RetreatsCollectionItem[],
  locale: Language,
  hubMeta: { title: string; description: string; path: string }
): CollectionPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: hubMeta.title,
    url: `${SITE_URL}${hubMeta.path}`,
    description: hubMeta.description,
    inLanguage: locale,
    isPartOf: { '@id': `${SITE_URL}#website` },
    about: { '@id': `${SITE_URL}#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map(({ card, title, pitch }, index) => ({
        '@type': 'ListItem' as const,
        position: index + 1,
        url: `${SITE_URL}${getLocalizedPath(card.route, locale)}`,
        name: title,
        description: pitch,
      })),
    },
  }
}

/**
 * Resolves the dictionary card label for a silo slug. Mirrors the switch in the
 * Host a Retreat page so schema and UI labels stay in sync.
 */
export function getSiloCardLabel(
  card: SiloHubCardSummary,
  t: Dictionary
): { title: string; pitch: string } {
  const cards = t.retreats.cards
  switch (card.slug) {
    case SiloSlug.YOGA_TEACHERS:
      return cards.yogaTeachers
    case SiloSlug.MEDITATION_RETREATS:
      return cards.meditationRetreats
    case SiloSlug.WRITING_RETREATS:
      return cards.writingRetreats
    case SiloSlug.TEAM_OFFSITES:
      return cards.teamOffsites
    case SiloSlug.BREATHWORK_SOUND_HEALING:
      return cards.breathworkSoundHealing
    case SiloSlug.COACHING_INTENSIVES:
      return cards.coachingIntensives
    case SiloSlug.SOMATIC_THERAPY_RETREATS:
      return cards.somaticTherapyRetreats
    case SiloSlug.WELLNESS_DETOX_RETREATS:
      return cards.wellnessDetoxRetreats
    case SiloSlug.CIRCLE_RETREATS:
      return cards.circleRetreats
    case SiloSlug.PHOTOGRAPHY_WORKSHOPS:
      return cards.photographyWorkshops
  }
}

/**
 * Generates WebSite schema with organization reference
 */
export function generateWebSiteSchema(options?: {
  searchAction?: boolean
  searchUrlTemplate?: string
}): WebSiteSchema {
  const { searchAction = false, searchUrlTemplate } = options || {}

  const schema: WebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'A home for your retreat. Large private nature landscapes, practice space, 14 beds plus space for tents and RVs.',
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
  }

  if (searchAction && searchUrlTemplate) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: searchUrlTemplate,
      },
      'query-input': 'required name=search_term_string',
    }
  }

  return schema
}

/**
 * Generates BreadcrumbList schema for navigation
 */
export function generateBreadcrumbListSchema(
  items: Array<{ name: string; path: string }>
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/**
 * Helper to generate breadcrumbs for a specific page
 */
export function generatePageBreadcrumbs(
  currentPage: { name: string; path: Route | string }
): BreadcrumbListSchema {
  const items = [
    { name: 'Home', path: Route.HOME },
    { name: currentPage.name, path: currentPage.path },
  ]

  return generateBreadcrumbListSchema(items)
}

/**
 * Generates ContactPage schema for contact pages
 */
export function generateContactPageSchema(): ContactPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact | ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    description:
      "Get in touch with MakersBarn. We'd love to hear from you about planning your retreat, workshop, or any other gathering.",
    mainEntity: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: SITE_NAME,
      telephone: CONTACT_PHONE_NUMBER,
      email: FOOTER_EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: FOOTER_ADDRESS.street,
        addressLocality: FOOTER_ADDRESS.city,
        postalCode: FOOTER_ADDRESS.postalCode,
        addressCountry: FOOTER_ADDRESS.country,
      },
    },
  }
}

export interface WebPageSchema {
  '@context': string
  '@type': 'WebPage'
  name: string
  url: string
  description: string
  isPartOf: {
    '@id': string
  }
  about: {
    '@type': 'Organization'
    '@id': string
  }
}

/**
 * Generates WebPage schema for booking and similar pages
 */
export function generateBookingPageSchema(): WebPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Book Your Retreat | ${SITE_NAME}`,
    url: `${SITE_URL}/book`,
    description:
      'Book your retreat at The Makers Barn. Choose your dates, group size, and accommodation preferences for your perfect getaway.',
    isPartOf: {
      '@id': `${SITE_URL}#website`,
    },
    about: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
    },
  }
}

export interface WebApplicationSchema {
  '@context': string
  '@type': 'WebApplication'
  name: string
  url: string
  description: string
  applicationCategory: 'FinanceApplication'
  operatingSystem: 'Web'
  offers: {
    '@type': 'Offer'
    price: '0'
    priceCurrency: 'EUR'
  }
  publisher: { '@id': string }
}

export interface HowToStepSchema {
  '@type': 'HowToStep'
  position: number
  name: string
  text: string
}

export interface HowToSchema {
  '@context': string
  '@type': 'HowTo'
  name: string
  description: string
  step: HowToStepSchema[]
}

export interface FaqQuestionSchema {
  '@type': 'Question'
  name: string
  acceptedAnswer: { '@type': 'Answer'; text: string }
}

export interface FaqPageSchema {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: FaqQuestionSchema[]
}

export function generateWebApplicationSchema(params: {
  name: string
  url: string
  description: string
}): WebApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: params.name,
    url: params.url,
    description: params.description,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    publisher: { '@id': `${SITE_URL}#organization` },
  }
}

function shortStepName(text: string, index: number): string {
  const firstClause = text.split(/[.!?:]/)[0]?.trim() ?? text
  const truncated = firstClause.length > 80 ? `${firstClause.slice(0, 77)}…` : firstClause
  return truncated || `Step ${index + 1}`
}

export function generateHowToSchema(params: {
  name: string
  description: string
  steps: readonly string[]
}): HowToSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    step: params.steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: shortStepName(text, i),
      text,
    })),
  }
}

export function generateFaqPageSchema(
  entries: readonly { question: string; answer: string }[]
): FaqPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.question,
      acceptedAnswer: { '@type': 'Answer', text: e.answer },
    })),
  }
}

export function generateCollectionPageSchema(params: {
  name: string
  url: string
  description: string
  locale: Language
  items: readonly { url: string; name: string; description: string }[]
}): CollectionPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: params.name,
    url: params.url,
    description: params.description,
    inLanguage: params.locale,
    isPartOf: { '@id': `${SITE_URL}#website` },
    about: { '@id': `${SITE_URL}#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: params.items.length,
      itemListElement: params.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: item.url,
        name: item.name,
        description: item.description,
      })),
    },
  }
}

