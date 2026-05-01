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

export const EVELINE_COOKS_CHEF: Chef = {
  slug: 'eveline-cooks',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'contact@evelinecooks.nl', // Source: https://evelinecooks.nl/contact/
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Eveline Delnooz',
  avatar: {
    src: '/images/chefs/eveline-cooks/avatar.jpg',
    altKey: 'chef.eveline-cooks.avatar',
  },
  tagline: {
    // Source: https://evelinecooks.nl/ — "specialist in 100% vegan catering voor zakelijke en privé-evenementen"
    [Language.EN]: '100% vegan catering, plant-forward and largely organic and local',
    [Language.NL]: '100% vegan catering, plantaardig en veelal biologisch en lokaal',
  },
  homeBase: { city: 'Ede', region: NlRegion.GELDERLAND },
  // TODO_FROM_CHEF: confirm full list of regions served. Site lists Wageningen and surroundings
  // (Ede, Bennekom, Randwijk, Renkum, Rheden, Doorn, Arnhem). Wijhe (Overijssel) is ~70km — please
  // confirm whether you travel there.
  servesRegions: [NlRegion.GELDERLAND, NlRegion.UTRECHT, NlRegion.OVERIJSSEL],
  travelsNationwide: false, // TODO_FROM_CHEF: confirm — site implies regional focus around Wageningen/Ede
  groupSize: { min: 10, max: 60 }, // TODO_FROM_CHEF: confirm. Site shows workshop of 20 people; no min/max stated for catering
  languagesSpoken: [Language.NL, Language.EN], // Site is bilingual NL/EN; chef trained in NL, BE, CH
  yearsExperience: 10, // Source: "Al meer dan tien jaar is het mijn werk om mensen blij te maken met mijn vegan gerechten"

  // TODO_FROM_CHEF: confirm retreat fit. Chef caters business + private events; no explicit yoga/wellness/retreat copy on site.
  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.CREATIVE],
  cuisineStyles: [
    // Source: site mentions Indian, Italian, Korean, African workshop themes + "Vegan around the world" cookbook
    { [Language.EN]: 'Plant-based, world cuisine', [Language.NL]: 'Plantaardig, wereldkeuken' },
    { [Language.EN]: 'Buffet & shared dining', [Language.NL]: 'Buffet & gedeeld dineren' },
    { [Language.EN]: 'Organic & local sourcing', [Language.NL]: 'Biologisch en lokaal' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.DAIRY_FREE,
    // TODO_FROM_CHEF: confirm gluten-free, allergy-aware, nut-free capabilities — not explicitly stated on site
  ],
  dayRate: {
    // TODO_FROM_CHEF: confirm catering day rate. Site shows pop-up dinners at €27 p.p. and workshops at €75 p.p.
    // Catering pricing not published on site.
    amountEur: 35,
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD,
  },

  gallery: {
    hero: {
      src: '/images/chefs/eveline-cooks/hero.jpg',
      altKey: 'chef.eveline-cooks.hero',
    },
    supporting: [
      { src: '/images/chefs/eveline-cooks/gallery-1.jpg', altKey: 'chef.eveline-cooks.gallery-1' },
      { src: '/images/chefs/eveline-cooks/gallery-2.jpg', altKey: 'chef.eveline-cooks.gallery-2' },
      { src: '/images/chefs/eveline-cooks/gallery-3.png', altKey: 'chef.eveline-cooks.gallery-3' },
      // TODO_FROM_CHEF: please share 1–4 additional high-resolution photos of dishes / events
    ],
  },
  about: {
    headline: {
      // Source: site headline — "Welkom bij Eveline Cooks – specialist in 100% vegan catering voor zakelijke en privé-evenementen."
      [Language.EN]: 'A decade of plant-based cooking, rooted in Wageningen and Ede.',
      [Language.NL]: 'Al meer dan tien jaar plantaardig koken, met wortels in Wageningen en Ede.',
    },
    paragraphs: [
      {
        // Source: https://evelinecooks.nl/over-mij/ — verbatim translation of chef's own bio
        [Language.EN]:
          "Hi, a little about me! I'm Eveline, 31, and I love food and everything that lives — that's why I'm a vegan chef. For more than ten years it's been my mission to convince people to eat less meat. I started by studying behavioural change and strategic communication at Wageningen University, but eventually realised my real passion was food itself. Through cooking I want people to experience how delicious vegan food can be. For over a decade now this has been my work — first in professional kitchens in the Netherlands, Belgium and Switzerland, and today as a self-employed caterer based in Wageningen, running my own business 'Eveline Cooks'.",
        [Language.NL]:
          "Hoi, even iets over mij! Ik ben Eveline, 31 jaar en ik hou van eten en alles wat leeft. Daarom ben ik vegan chef! Ik heb al ruim tien jaar de missie om mensen ervan te overtuigen om minder vlees te eten. In eerste instantie deed ik dat door aan de universiteit van Wageningen te studeren over gedragsverandering en strategische communicatie, maar na een tijdje kwam ik erachter dat mijn ware passie bij voeding ligt. Via voedsel wil ik mensen laten ervaren hoe heerlijk vegan eten kan zijn. Het is inmiddels al meer dan tien jaar mijn werk om mensen blij te maken met vegan eten. Dit deed ik in verschillende professionele keukens in Nederland, België en Zwitserland. Tegenwoordig ben ik ZZP'er en werk ik in Wageningen als cateraar vanuit mijn eigen bedrijf 'Eveline Cooks'.",
      },
    ],
  },
  // TODO_FROM_CHEF: please share 2–4 signature dishes (name + short note) for the directory page.
  // Site references workshop themes (Indian, Italian, Korean, African) and a "Vegan around the world" cookbook
  // but does not list specific signature dishes verbatim.
  signatureDishes: [],
  // TODO_FROM_CHEF: please share 1–3 testimonials from past clients (quote, author, role).
  // None are published on the website.
  testimonials: [],

  atAGlance: {
    sourcing: {
      // Source: site — "volledig plantaardig en veelal biologisch en lokaal" + Streekwaar membership + WUR supplier
      [Language.EN]: 'Fully plant-based, largely organic and local · Streekwaar member · supplier to Wageningen University & Research',
      [Language.NL]: 'Volledig plantaardig, veelal biologisch en lokaal · lid van Streekwaar · leverancier van Wageningen University & Research',
    },
    credentials: {
      // Source: /over-mij/ bio
      [Language.EN]: 'Wageningen University (behavioural change & strategic communication) · 10+ years in professional kitchens in NL, BE, CH',
      [Language.NL]: 'Wageningen University (gedragsverandering & strategische communicatie) · 10+ jaar in professionele keukens in NL, BE en CH',
    },
    press: {
      // Source: site — "Wat leuk, ik sta zomaar in de Gelderlander!"
      [Language.EN]: 'Featured in De Gelderlander · profiled by World Food Center Ede',
      [Language.NL]: 'Vermeld in De Gelderlander · geprofileerd door World Food Center Ede',
    },
  },
  // TODO_FROM_CHEF: please share names (and optional URLs) of any retreat venues you've cooked for.
  // No retreat clients are listed on the public website.
  pastRetreats: [],
}
