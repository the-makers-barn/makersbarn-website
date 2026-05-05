import {
  ChefStatus,
  DayRateUnit,
  DietaryCapability,
  NlRegion,
  PriceTier,
  RetreatType,
} from '@/constants/chef'
import { asIsoDateString, Language } from '@/types'
import type { Chef } from '@/types'

// TODO_FROM_CHEF: Owner's name is NOT stated on the public website. The image
// filename "TINA-16-scaled.jpg" on /over-ons/ suggests the founder is "Tina",
// but no surname or full identification is published. Confirm with the chef.
const PLACEHOLDER_CHEF_NAME = 'De Kookstudio (owner name unconfirmed)'

// TODO_FROM_CHEF: No public email-by-individual; site only lists info@dekookstudio.be.
// Use the general inbox until the chef confirms a personal address.
const INQUIRY_EMAIL = 'info@dekookstudio.be'

export const DE_KOOKSTUDIO_CHEF: Chef = {
  slug: 'de-kookstudio',
  status: ChefStatus.DRAFT,
  primaryLanguage: Language.NL,
  inquiryEmail: INQUIRY_EMAIL,
  updatedAt: asIsoDateString('2026-05-01'),

  name: PLACEHOLDER_CHEF_NAME,
  avatar: {
    src: '/images/chefs/de-kookstudio/avatar.jpg',
    altKey: 'chef.de-kookstudio.avatar',
  },
  // Tagline lifted verbatim from /retreat-chef/. EN is a literal translation —
  // confirm wording with the chef before publishing.
  tagline: {
    [Language.EN]: 'Plant-based, flavourful and surprising',
    [Language.NL]: 'Plantaardig, smaakvol en verrassend',
  },
  // TODO_FROM_CHEF: chef is BE-based (Ruisbroek, Puurs-Sint-Amands, Antwerpen
  // province) — region enum is NL-only; consider adding a country field or
  // excluding. LIMBURG picked as the closest NL region to the chef's home base.
  homeBase: { city: 'Ruisbroek (Puurs-Sint-Amands)', region: NlRegion.LIMBURG },
  // TODO_FROM_CHEF: chef does not list NL provinces served. Empty until confirmed.
  servesRegions: [],
  // TODO_FROM_CHEF: site says "Of je nu in België een stilteweekend host, of
  // met je groep naar de zon trekt: ik kom mee" — implies the chef travels
  // with the group, but the Netherlands is NOT explicitly named. Confirm
  // before flipping to PUBLISHED.
  travelsNationwide: false,
  // TODO_FROM_CHEF: no group sizes published. Placeholder values.
  groupSize: { min: 6, max: 30 },
  // TODO_FROM_CHEF: only Dutch confirmed (website language). Confirm EN/FR/DE.
  languagesSpoken: [Language.NL],
  // TODO_FROM_CHEF: years of experience not published.
  yearsExperience: 0,

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.CREATIVE, RetreatType.CORPORATE],
  cuisineStyles: [
    // Verbatim from /retreat-chef/ — "Plantaardig, smaakvol en verrassend".
    { [Language.EN]: 'Plant-based', [Language.NL]: 'Plantaardig' },
    // Verbatim from /retreat-chef/ — "Alles vers, lokaal, seizoensgebonden".
    { [Language.EN]: 'Fresh, local, seasonal', [Language.NL]: 'Vers, lokaal, seizoensgebonden' },
  ],
  // TODO_FROM_CHEF: only "plantaardig" is stated on site. Vegan/GF/allergy
  // capability not explicitly confirmed — listed VEGETARIAN as the only
  // verifiable capability.
  dietaryCapabilities: [DietaryCapability.VEGETARIAN],
  // TODO_FROM_CHEF: no day rate / per-person price published. Placeholder.
  dayRate: {
    amountEur: 0,
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD,
  },

  gallery: {
    // TODO_FROM_CHEF: only one non-stock image is publicly available
    // (the founder portrait from /over-ons/). All other images on the
    // retreat-chef page are Pexels stock and were intentionally skipped.
    // Hero and supporting slots reuse the avatar until the chef supplies
    // original food / retreat photography.
    hero: {
      src: '/images/chefs/de-kookstudio/avatar.jpg',
      altKey: 'chef.de-kookstudio.hero',
    },
    supporting: [],
  },
  about: {
    headline: {
      // Verbatim from /retreat-chef/.
      [Language.EN]: 'Retreat catering, tailored to your group',
      [Language.NL]: 'Retreatcatering op maat voor jouw groep',
    },
    paragraphs: [
      {
        // Verbatim quote from /retreat-chef/. EN is a literal translation —
        // chef should review.
        [Language.EN]:
          'Whether it is a yoga or wellness retreat, a creative group trip, or a business getaway: with De Kookstudio I provide retreat catering tailored to your needs. Whether you are hosting a silent weekend in Belgium, or heading to the sun with your group: I come along.',
        [Language.NL]:
          'Of het nu gaat om een yoga- of wellnessretreat, een creatieve groepsreis of een business getaway: met De Kookstudio verzorg ik retreatcatering op maat. Of je nu in België een stilteweekend host, of met je groep naar de zon trekt: ik kom mee.',
      },
      {
        // Verbatim from /retreat-chef/.
        [Language.EN]:
          'Colourful breakfasts, light lunches, heart-warming dinners. Everything fresh, local, seasonal.',
        [Language.NL]:
          'Kleurrijke ontbijtjes, lichte lunches, hartverwarmende diners. Alles vers, lokaal, seizoensgebonden.',
      },
    ],
  },
  // TODO_FROM_CHEF: no signature dishes named on site.
  signatureDishes: [],
  // TODO_FROM_CHEF: no testimonials published on /retreat-chef/.
  testimonials: [],

  atAGlance: {
    sourcing: {
      // Verbatim from /retreat-chef/.
      [Language.EN]: 'Fresh, local, seasonal',
      [Language.NL]: 'Vers, lokaal, seizoensgebonden',
    },
    // TODO_FROM_CHEF: no formal credentials, training, or years of
    // experience published. /over-ons/ only says "een gepassioneerde foodie
    // en ervaren eventmanager".
    credentials: {
      [Language.EN]: 'Passionate foodie and experienced event manager',
      [Language.NL]: 'Gepassioneerde foodie en ervaren eventmanager',
    },
    // TODO_FROM_CHEF: no press mentions found.
  },
  // TODO_FROM_CHEF: homepage lists partner brands (HelloFresh, Verstegen,
  // Apollo, Renmans) but no named past retreat clients.
  pastRetreats: [],
}
