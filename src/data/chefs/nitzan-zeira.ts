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

export const NITZAN_ZEIRA_CHEF: Chef = {
  slug: 'nitzan-zeira',
  status: ChefStatus.DRAFT,
  primaryLanguage: Language.EN,
  inquiryEmail: 'Nitzanzeira.nz@gmail.com',
  updatedAt: asIsoDateString('2026-05-04'),

  name: 'Nitzan Zeira',
  avatar: {
    src: '/images/chefs/nitzan-zeira/avatar.jpg', // TODO_FROM_CHEF: portrait — request high-res photo from Nitzan
    altKey: 'chef.nitzan-zeira.avatar',
  },
  tagline: {
    [Language.EN]: 'Vegan & Ayurvedic chef, Amsterdam — rescued ingredients, intentional cooking',
    [Language.NL]: 'Vegan & Ayurvedische chef, Amsterdam — geredde ingrediënten, bewust koken',
  },
  homeBase: { city: 'Amsterdam', region: NlRegion.NOORD_HOLLAND },
  servesRegions: [NlRegion.NOORD_HOLLAND], // TODO_FROM_CHEF: confirm additional regions she serves
  travelsNationwide: true, // TODO_FROM_CHEF: confirm willingness to travel nationwide / to Overijssel
  groupSize: { min: 8, max: 100 }, // verbatim from Foodbank Maastricht line: '40 to 100+ people' — confirm preferred range
  languagesSpoken: [Language.EN, Language.NL, Language.DE], // CV also lists Hebrew, but our enum supports EN/NL/DE only
  yearsExperience: 5, // since Sept 2020 (Foodbank Maastricht); TODO_FROM_CHEF if she counts experience differently

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.MEDITATION], // inferred from Ayurvedic training; TODO_FROM_CHEF: confirm retreat types
  cuisineStyles: [
    { [Language.EN]: 'Vegan', [Language.NL]: 'Vegan' },
    { [Language.EN]: 'Ayurvedic', [Language.NL]: 'Ayurvedisch' },
    { [Language.EN]: 'Rescued-ingredient cooking', [Language.NL]: 'Koken met geredde ingrediënten' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
  ], // TODO_FROM_CHEF: confirm allergy-aware / gluten-free / dairy-free capabilities
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: actual day rate — not on CV
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD,
  },

  gallery: {
    hero: {
      src: '/images/chefs/nitzan-zeira/hero.jpg', // TODO_FROM_CHEF: hero image — request food/dining shot
      altKey: 'chef.nitzan-zeira.hero',
    },
    supporting: [], // TODO_FROM_CHEF: 4–8 supporting images — request from Nitzan
  },
  about: {
    headline: {
      [Language.EN]: 'Vegan & Ayurvedic cooking grounded in intention, sustainability, and rescued ingredients.',
      [Language.NL]: 'Vegan en Ayurvedisch koken vanuit intentie, duurzaamheid en geredde ingrediënten.',
    },
    paragraphs: [
      {
        [Language.EN]:
          'Nitzan is a vegan and Ayurvedic chef based in Amsterdam. Her cooking grew out of three years volunteering with Foodbank Maastricht, where she ran a weekly three-course vegan meal for 40 to 100+ people from rescued ingredients. She has since cooked at Mediamatic and Testtafe / De Sering in Amsterdam, and runs SKRAPS — an independent solidarity kitchen turning rescued ingredients into monthly charity dinners.',
        [Language.NL]:
          'Nitzan is een vegan en Ayurvedische chef uit Amsterdam. Haar manier van koken ontstond tijdens drie jaar vrijwilligerswerk bij Foodbank Maastricht, waar ze elke week een driegangen vegan maaltijd voor 40 tot 100+ mensen verzorgde uit geredde ingrediënten. Sindsdien kookte ze bij Mediamatic en Testtafe / De Sering in Amsterdam, en runt ze SKRAPS — een onafhankelijke solidariteitskeuken die geredde ingrediënten omzet in maandelijkse benefietdiners.',
      },
      {
        [Language.EN]:
          'Her academic background — a Bachelor in Liberal Arts (Cum Laude, with an exchange at UCL) and Master\'s degrees in Spatial Sustainability and Psychology at the University of Amsterdam — shapes how she thinks about food: as a way of caring for people, place, and what would otherwise be wasted. In March 2026 she completed an Ayurvedic Nutrition and Cooking Course at the Ayuskama Ayurveda Institute in Rishikesh, India.',
        [Language.NL]:
          'Haar academische achtergrond — een Bachelor Liberal Arts (Cum Laude, met een uitwisseling aan UCL) en Master\'s degrees in Spatial Sustainability en Psychology aan de Universiteit van Amsterdam — bepaalt hoe ze naar eten kijkt: als een manier om voor mensen, plek en wat anders verspild zou worden te zorgen. In maart 2026 rondde ze de Ayurvedic Nutrition and Cooking Course af aan het Ayuskama Ayurveda Institute in Rishikesh, India.',
      },
    ],
  },
  signatureDishes: [], // TODO_FROM_CHEF: signature dishes — not on CV
  testimonials: [], // TODO_FROM_CHEF: testimonials — not on CV

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Rescued ingredients via Foodbank Maastricht & SKRAPS solidarity kitchen',
      [Language.NL]: 'Geredde ingrediënten via Foodbank Maastricht & SKRAPS solidariteitskeuken',
    },
    credentials: {
      [Language.EN]:
        'Ayurvedic Nutrition & Cooking — Ayuskama Ayurveda Institute, Rishikesh (Mar 2026) · MSc Spatial Sustainability + MSc Psychology (Brain & Cognition), University of Amsterdam · BA Liberal Arts, University College Maastricht (Cum Laude)',
      [Language.NL]:
        'Ayurvedische voeding en kookkunst — Ayuskama Ayurveda Institute, Rishikesh (mrt 2026) · MSc Spatial Sustainability + MSc Psychology (Brain & Cognition), Universiteit van Amsterdam · BA Liberal Arts, University College Maastricht (Cum Laude)',
    },
    // press: TODO_FROM_CHEF — none listed
  },
  pastRetreats: [
    { name: 'Mediamatic Amsterdam' },
    { name: 'Testtafe / De Sering Amsterdam' },
    { name: 'SKRAPS solidarity kitchen' },
    { name: 'Foodbank Maastricht' },
  ],
}
