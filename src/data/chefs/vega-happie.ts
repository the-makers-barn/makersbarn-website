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

export const VEGA_HAPPIE_CHEF: Chef = {
  slug: 'vega-happie',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'info@vegahappie.nl',
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Renate Vermeulen',
  avatar: {
    src: '/images/chefs/vega-happie/avatar.jpg',
    altKey: 'chef.vega-happie.avatar',
  },
  tagline: {
    [Language.EN]: 'Plant-based cooking workshops and vegan catering',
    [Language.NL]: 'Plantaardige kookworkshops en vegan catering',
  },
  homeBase: { city: 'Biddinghuizen', region: NlRegion.FLEVOLAND },
  servesRegions: [NlRegion.FLEVOLAND], // TODO_FROM_CHEF: confirm willingness to travel to Overijssel (Wijhe) for retreats
  travelsNationwide: false, // TODO_FROM_CHEF: site only lists Almere e.o., Harderwijk e.o. en Waterparc Veluwemeer
  groupSize: { min: 4, max: 20 }, // min 4 (workshops) — TODO_FROM_CHEF: confirm max group size for catering & retreats
  languagesSpoken: [Language.NL], // TODO_FROM_CHEF: confirm if EN/DE also spoken
  yearsExperience: 0, // TODO_FROM_CHEF: site says plant-based since 2015 but does not state professional culinary years

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS], // TODO_FROM_CHEF: confirm retreat types — inferred from vegan/wellness focus
  cuisineStyles: [
    { [Language.EN]: 'Plant-based / vegan', [Language.NL]: 'Plantaardig / vegan' },
    { [Language.EN]: 'Indonesian rice table', [Language.NL]: 'Indonesische rijsttafel' },
    { [Language.EN]: 'Japanese', [Language.NL]: 'Japans' },
    { [Language.EN]: 'Ayurvedic', [Language.NL]: 'Ayurvedisch' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.ALLERGY_AWARE, // site states "intoleranties, allergieën of dieetwensen" can be accommodated
    // TODO_FROM_CHEF: gluten-free not default — site notes seitan is regularly used; confirm GF availability on request
  ],
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: workshop is €95 pp (4hr); no day rate for retreat catering published
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD, // TODO_FROM_CHEF: confirm tier
  },

  gallery: {
    hero: {
      src: '/images/chefs/vega-happie/hero.png',
      altKey: 'chef.vega-happie.hero',
    },
    supporting: [
      { src: '/images/chefs/vega-happie/gallery-1.png', altKey: 'chef.vega-happie.gallery-1' },
      { src: '/images/chefs/vega-happie/gallery-2.png', altKey: 'chef.vega-happie.gallery-2' },
      { src: '/images/chefs/vega-happie/gallery-3.png', altKey: 'chef.vega-happie.gallery-3' },
      // TODO_FROM_CHEF: only 3 supporting images sourced from current site (recommend 4–8); request additional photos
    ],
  },
  about: {
    headline: {
      [Language.EN]: 'Inspiring people to eat healthier and more consciously — plant-based.',
      [Language.NL]: 'Mensen inspireren om gezonder en bewuster te eten — plantaardig.',
    },
    paragraphs: [
      {
        [Language.EN]:
          "My name is Renate, I am married to Rinus and the mother of Kaj. I live for a fairer world and have therefore eaten no animal products since 2015. After a career in the financial sector I trained as a vegan chef and now run Vega Happie — vegan catering and in-home cooking workshops in the Almere, Harderwijk and Waterparc Veluwemeer areas.",
        [Language.NL]:
          'Mijn naam is Renate, ik ben getrouwd met Rinus en moeder van Kaj. Ik leef voor een eerlijkere wereld en eet daarom sinds 2015 geen dierlijke producten meer. Na een loopbaan in de financiële sector heb ik mij laten omscholen tot vegan chef en run ik nu Vega Happie — vegan catering en kookworkshops aan huis in Almere e.o., Harderwijk e.o. en Waterparc Veluwemeer.',
      },
      // TODO_FROM_CHEF: add a second paragraph about retreat experience or specific approach for residential groups
    ],
  },
  signatureDishes: [
    // TODO_FROM_CHEF: confirm signature dishes — items below are workshop themes mentioned verbatim on site, not stated as signatures
    {
      name: {
        [Language.EN]: 'Indonesian rice table (vegan)',
        [Language.NL]: 'Indonesische rijsttafel (vegan)',
      },
      note: {
        [Language.EN]: 'Workshop & catering option',
        [Language.NL]: 'Workshop- en cateringoptie',
      },
    },
    {
      name: {
        [Language.EN]: 'Sushi, ramen and gyoza',
        [Language.NL]: 'Sushi, ramen en gyoza',
      },
      note: {
        [Language.EN]: 'Japanese workshop menu',
        [Language.NL]: 'Japans workshopmenu',
      },
    },
    {
      name: {
        [Language.EN]: 'Mungdahl soup with chapati',
        [Language.NL]: 'Mungdahlsoep met chapati',
      },
      note: {
        [Language.EN]: 'Ayurvedic workshop menu',
        [Language.NL]: 'Ayurvedisch workshopmenu',
      },
    },
  ],
  testimonials: [
    // TODO_FROM_CHEF: no testimonials published on current site — request 2–3 quotes from past clients
  ],

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Seasonal, plant-based, with attention to health and planetary impact', // verbatim mission paraphrased
      [Language.NL]: 'Seizoensgebonden, plantaardig, met aandacht voor gezondheid en planeet',
      // TODO_FROM_CHEF: confirm specific suppliers / local sourcing radius
    },
    credentials: {
      [Language.EN]: 'Vegan Chef · Natuurvoedingskeuken · Natuurkeuken PRO · Vegan Friendly certified',
      [Language.NL]: 'Vegan Chef · Natuurvoedingskeuken · Natuurkeuken PRO · Vegan Friendly gecertificeerd',
    },
    // press: TODO_FROM_CHEF — no press mentions found on site
  },
  pastRetreats: [
    // TODO_FROM_CHEF: no past retreats listed on current site
  ],
}
