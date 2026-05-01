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

export const LA_MAMA_GAIA_CHEF: Chef = {
  slug: 'la-mama-gaia',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.EN,
  inquiryEmail: 'info@lamamagaia.com',
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Marjolijn', // TODO_FROM_CHEF: confirm full surname (only first name visible on site)
  avatar: {
    src: '/images/chefs/la-mama-gaia/avatar.jpg',
    altKey: 'chef.la-mama-gaia.avatar',
  },
  tagline: {
    [Language.EN]: 'Your private chef — colourful, nourishing dishes and unforgettable moments',
    [Language.NL]: 'Jouw privéchef — kleurrijke, voedzame gerechten en onvergetelijke momenten',
  },
  // TODO_FROM_CHEF: actual home base — chef may be NL-based or international.
  // Site states "Netherlands & Europe" but does not list a city or province.
  // Defaulting to Overijssel because the Chef type schema requires NlRegion.
  homeBase: { city: 'Unknown', region: NlRegion.OVERIJSSEL },
  servesRegions: [NlRegion.OVERIJSSEL], // TODO_FROM_CHEF: confirm actual regions served within NL
  travelsNationwide: true, // Site states services available throughout Netherlands & Europe
  groupSize: { min: 8, max: 30 }, // TODO_FROM_CHEF: confirm typical retreat group size
  languagesSpoken: [Language.EN], // TODO_FROM_CHEF: confirm — site copy is English; NL/other languages not stated
  yearsExperience: 0, // TODO_FROM_CHEF: confirm years of professional experience

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS],
  cuisineStyles: [
    {
      [Language.EN]: 'Plant-forward',
      [Language.NL]: 'Plantaardig',
    },
    {
      [Language.EN]: 'Vegan',
      [Language.NL]: 'Veganistisch',
    },
    {
      [Language.EN]: 'Vegetarian',
      [Language.NL]: 'Vegetarisch',
    },
    {
      [Language.EN]: 'Ayurvedic-inspired',
      [Language.NL]: 'Ayurvedisch geïnspireerd',
    },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.ALLERGY_AWARE,
  ],
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: confirm day rate (no pricing published on site)
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD,
  },

  gallery: {
    hero: {
      src: '/images/chefs/la-mama-gaia/hero.jpg',
      altKey: 'chef.la-mama-gaia.hero',
    },
    supporting: [
      { src: '/images/chefs/la-mama-gaia/gallery-1.jpg', altKey: 'chef.la-mama-gaia.gallery-1' },
      { src: '/images/chefs/la-mama-gaia/gallery-2.jpg', altKey: 'chef.la-mama-gaia.gallery-2' },
      { src: '/images/chefs/la-mama-gaia/gallery-3.jpg', altKey: 'chef.la-mama-gaia.gallery-3' },
    ],
  },
  about: {
    headline: {
      [Language.EN]: 'Creating beautiful, nourishing, colourful and healthy dishes as a form of love.',
      [Language.NL]: 'Het maken van mooie, voedzame, kleurrijke en gezonde gerechten als een vorm van liefde.',
    },
    paragraphs: [
      {
        [Language.EN]:
          'As a private chef, I love to create soulful, nourishing, and beautifully crafted meals. Cooking has always been my way of sharing love. I focus on wholefood, plant-based, seasonal, colourful and nourishing dishes inspired by my travels and the pure gifts of Mama Gaia (Mother Earth).',
        [Language.NL]:
          'Als privéchef maak ik graag zielvolle, voedzame en prachtig gepresenteerde gerechten. Koken is altijd mijn manier geweest om liefde te delen. Ik richt me op volwaardige, plantaardige, seizoensgebonden, kleurrijke en voedzame gerechten, geïnspireerd door mijn reizen en de pure giften van Mama Gaia (Moeder Aarde).',
      },
      {
        [Language.EN]:
          'With my background in design and hospitality, I pay attention to the beauty of the entire dining experience. I aim to create a warm, welcoming environment where people feel at ease, inspired, and cared for.',
        [Language.NL]:
          'Met mijn achtergrond in design en horeca besteed ik aandacht aan de schoonheid van de hele eetervaring. Ik streef ernaar een warme, gastvrije omgeving te creëren waar mensen zich op hun gemak, geïnspireerd en verzorgd voelen.',
      },
      {
        [Language.EN]:
          'As a retreat chef, I also hold space, adapting to the energy of the group and the rhythm of the event. The kitchen becomes a calm, inviting space for curiosity, questions about nutrition, and joyful culinary exploration.',
        [Language.NL]:
          'Als retreatchef houd ik ook ruimte, en pas me aan de energie van de groep en het ritme van het programma aan. De keuken wordt een rustige, uitnodigende plek voor nieuwsgierigheid, vragen over voeding en vreugdevolle culinaire ontdekking.',
      },
    ],
  },
  // TODO_FROM_CHEF: site shows a sample 3-day retreat menu but does not present these as
  // "signature dishes" with descriptions. Leaving empty until chef confirms which dishes
  // they want featured.
  signatureDishes: [],
  testimonials: [
    {
      quote: {
        [Language.EN]: "Flavour sensations! That's what Marjolijn's fantastic dishes & sweets do to you.",
      },
      author: 'Edwin',
      role: {
        [Language.EN]: 'Switch Weekend',
      },
    },
    {
      quote: {
        [Language.EN]: 'Marjolijn really inspired me to use some other ingredients in my daily cooking routine.',
      },
      author: 'Sandra',
      role: {
        [Language.EN]: 'Switch Weekend',
      },
    },
    {
      quote: {
        [Language.EN]:
          "You taste, smell and see Marjolijn's love in every dish and her food gives you strength.",
      },
      author: 'Leyla',
      role: {
        [Language.EN]: 'Transformatie Retreat',
      },
    },
    {
      quote: {
        [Language.EN]:
          'What I really loved is that the participants saw plant-based food from a completely different angle.',
      },
      author: 'Janneke',
      role: {
        [Language.EN]: 'Heart Rise Yoga',
      },
    },
    {
      quote: {
        [Language.EN]:
          'I would even go to the retreat for the food alone! Super healthy, vegan and delicious.',
      },
      author: 'Mariette',
      role: {
        [Language.EN]: 'Transformatie Retreat',
      },
    },
    {
      quote: {
        [Language.EN]: 'Her dishes are culinary pieces of art. They look beautiful and taste fantastic.',
      },
      author: 'Marjolein',
      role: {
        [Language.EN]: 'Wombfulness',
      },
    },
    {
      quote: {
        [Language.EN]: 'She has shown how you can eat delicious, nutritious and varied vegan food.',
      },
      author: 'Anne',
      role: {
        [Language.EN]: 'Switch Weekend',
      },
    },
  ],

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Wholefood, plant-based, seasonal ingredients',
      [Language.NL]: 'Volwaardig, plantaardig, seizoensgebonden ingrediënten',
    },
    credentials: {
      [Language.EN]: 'Background in design and hospitality',
      [Language.NL]: 'Achtergrond in design en horeca',
    },
    // TODO_FROM_CHEF: press mentions not stated on site — omit unless chef provides
  },
  pastRetreats: [
    // Names referenced by testimonial authors as the retreat/event context.
    { name: 'Switch Weekend' },
    { name: 'Transformatie Retreat' },
    { name: 'Heart Rise Yoga' },
    { name: 'Wombfulness' },
  ],
}
