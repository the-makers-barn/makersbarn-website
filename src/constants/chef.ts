export enum ChefStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export enum RetreatType {
  YOGA = 'yoga',
  WELLNESS = 'wellness',
  CREATIVE = 'creative',
  CORPORATE = 'corporate',
  BREATHWORK = 'breathwork',
  MEDITATION = 'meditation',
  WRITING = 'writing',
  PHOTOGRAPHY = 'photography',
}

export enum DietaryCapability {
  VEGAN = 'vegan',
  VEGETARIAN = 'vegetarian',
  GLUTEN_FREE = 'gluten_free',
  DAIRY_FREE = 'dairy_free',
  NUT_FREE = 'nut_free',
  KOSHER = 'kosher',
  HALAL = 'halal',
  ALLERGY_AWARE = 'allergy_aware',
  RAW = 'raw',
  KETO = 'keto',
}

export enum PriceTier {
  BUDGET = 'budget',     // €
  STANDARD = 'standard', // €€
  PREMIUM = 'premium',   // €€€
}

// Extensible: additional billing units (e.g. PER_GROUP_PER_DAY) may be added here.
export enum DayRateUnit {
  PER_PERSON_PER_DAY = 'per_person_per_day',
}

export enum NlRegion {
  DRENTHE = 'drenthe',
  FLEVOLAND = 'flevoland',
  FRIESLAND = 'friesland',
  GELDERLAND = 'gelderland',
  GRONINGEN = 'groningen',
  LIMBURG = 'limburg',
  NOORD_BRABANT = 'noord_brabant',
  NOORD_HOLLAND = 'noord_holland',
  OVERIJSSEL = 'overijssel',
  UTRECHT = 'utrecht',
  ZEELAND = 'zeeland',
  ZUID_HOLLAND = 'zuid_holland',
}

// Approximate viewBox coordinates for placing a marker on the shared NL outline SVG.
// SVG viewBox is 0 0 100 120. Coordinates picked to land near each province's centroid.
export const NL_REGION_COORDINATES: Readonly<Record<NlRegion, { x: number; y: number }>> = {
  [NlRegion.DRENTHE]: { x: 70, y: 30 },
  [NlRegion.FLEVOLAND]: { x: 55, y: 45 },
  [NlRegion.FRIESLAND]: { x: 55, y: 22 },
  [NlRegion.GELDERLAND]: { x: 60, y: 55 },
  [NlRegion.GRONINGEN]: { x: 75, y: 18 },
  [NlRegion.LIMBURG]: { x: 65, y: 95 },
  [NlRegion.NOORD_BRABANT]: { x: 50, y: 80 },
  [NlRegion.NOORD_HOLLAND]: { x: 38, y: 35 },
  [NlRegion.OVERIJSSEL]: { x: 70, y: 45 },
  [NlRegion.UTRECHT]: { x: 45, y: 55 },
  [NlRegion.ZEELAND]: { x: 25, y: 80 },
  [NlRegion.ZUID_HOLLAND]: { x: 35, y: 60 },
}

// Rate-limit config for the chef inquiry action.
// Shared instance is created in src/actions/chef/sendChefInquiry.ts.
export const CHEF_INQUIRY_RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000,  // 15 minutes
  MAX_REQUESTS: 5,
} as const

// Form field length bounds — used by both Zod schema and dictionary error messages.
export const CHEF_INQUIRY_LIMITS = {
  NAME_MIN: 2,
  NAME_MAX: 80,
  DATES_MIN: 2,
  DATES_MAX: 80,
  GROUP_SIZE_MIN: 2,
  GROUP_SIZE_MAX: 60,
  LOCATION_MIN: 2,
  LOCATION_MAX: 120,
  DIETARY_MIN: 0,
  DIETARY_MAX: 500,
  MESSAGE_MIN: 20,
  MESSAGE_MAX: 1500,
} as const
