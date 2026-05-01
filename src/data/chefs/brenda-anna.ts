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

export const BRENDA_ANNA_CHEF: Chef = {
  slug: 'brenda-anna',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'info@brenda-anna-aandekook.nl',
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Brenda Anna', // TODO_FROM_CHEF: confirm full legal/professional name (surname not on public site)
  avatar: {
    src: '/images/chefs/brenda-anna/avatar.jpg',
    altKey: 'chef.brenda-anna.avatar',
  },
  tagline: {
    [Language.EN]: 'Vegan & vegetarian, preferably organic, always delicious',
    [Language.NL]: 'Vegan & vega, liefst bio en altijd lekker',
  },
  homeBase: { city: 'Wervershoof', region: NlRegion.NOORD_HOLLAND },
  servesRegions: [NlRegion.NOORD_HOLLAND],
  travelsNationwide: true, // TODO_FROM_CHEF: confirm travel radius — site does not state a hard boundary
  groupSize: { min: 8, max: 30 }, // TODO_FROM_CHEF: site mentions "20 tot circa 100+ personen"; defaulting to retreat-friendly window pending confirmation
  languagesSpoken: [Language.NL], // TODO_FROM_CHEF: confirm whether EN/DE service is offered
  yearsExperience: 0, // TODO_FROM_CHEF: site states "meer dan 25 jaar vegetarisch" cooking and "since 2011" as business — confirm a single number to display

  rightFor: [
    RetreatType.YOGA,
    RetreatType.MEDITATION,
    RetreatType.BREATHWORK,
    RetreatType.WELLNESS,
  ],
  cuisineStyles: [
    { [Language.EN]: 'Plant-based', [Language.NL]: 'Plantaardig' },
    { [Language.EN]: 'Vegetarian', [Language.NL]: 'Vegetarisch' },
    { [Language.EN]: 'Oriental-inspired with warming spices', [Language.NL]: 'Oosters georiënteerd met verwarmende kruiden' },
    { [Language.EN]: 'Indian-inspired (curries, korma)', [Language.NL]: 'Indiaas geïnspireerd (curries, korma)' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
  ], // TODO_FROM_CHEF: confirm whether gluten-free, dairy-free, allergy-aware menus are available
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: site does not publish pricing — quote-based
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD, // TODO_FROM_CHEF: confirm tier once a typical day rate is shared
  },

  gallery: {
    hero: {
      src: '/images/chefs/brenda-anna/hero.jpg',
      altKey: 'chef.brenda-anna.hero',
    },
    supporting: [
      { src: '/images/chefs/brenda-anna/gallery-1.jpg', altKey: 'chef.brenda-anna.gallery-1' },
      { src: '/images/chefs/brenda-anna/gallery-2.jpg', altKey: 'chef.brenda-anna.gallery-2' },
      { src: '/images/chefs/brenda-anna/gallery-3.jpg', altKey: 'chef.brenda-anna.gallery-3' },
    ], // TODO_FROM_CHEF: site only had 3 portraits + 1 dish photo we could safely use; request 1–3 more retreat-context images for a full 4–8 supporting set
  },
  about: {
    headline: {
      [Language.EN]: 'Retreat chef cooking with attention, organic ingredients, and a plant-based kitchen',
      [Language.NL]: 'Retraite chef die kookt met aandacht, biologische ingrediënten en een plantaardige keuken',
    },
    paragraphs: [
      {
        [Language.EN]:
          "Brenda Anna is a retreat chef cooking for retreats, trainings and consciousness programmes. With attention, organic ingredients and a plant-based kitchen she creates meals that support body and mind.",
        [Language.NL]:
          "Brenda Anna is retreat chef en kookt voor retraites, trainingen en bewustzijnsprogramma's. Met aandacht, biologische ingrediënten en een plantaardige keuken creëert zij maaltijden die lichaam en geest ondersteunen.",
      },
      {
        [Language.EN]:
          "Food from Brenda Anna aan de KOOK is honest and colourful — made from fresh produce, no packets or sachets, organic-labelled and sourced regionally where possible. In the small kitchen everything is cut with love and the most delicious fresh soups, curries and sauces are prepared.",
        [Language.NL]:
          "Eten van Brenda Anna aan de KOOK is (h)eerlijk en kleurrijk! Gemaakt van verse producten - er worden geen 'zakjes en pakjes' gebruikt - met biologisch label en zoveel als mogelijk regionaal ingekocht. In de kleine keuken wordt alles met liefde gesneden en worden de meest heerlijke verse soepen, curries en sauzen klaargemaakt.",
      },
      {
        [Language.EN]:
          "Brenda Anna has been cooking vegetarian for more than 25 years, alternated with nourishing vegan recipes.",
        [Language.NL]:
          "Brenda Anna kookt al meer dan 25 jaar vegetarisch, afgewisseld met voedzame veganistische recepten.",
      },
    ],
  },
  signatureDishes: [
    {
      name: {
        [Language.EN]: 'Korma with rice',
        [Language.NL]: 'Korma met rijst',
      },
      note: {
        [Language.EN]: 'Indian-inspired, plant-based',
        [Language.NL]: 'Indiaas geïnspireerd, plantaardig',
      },
    },
    {
      name: {
        [Language.EN]: 'Bengali stew',
        [Language.NL]: 'Bengaalse stoofpot',
      },
      note: {
        [Language.EN]: 'Warming spices',
        [Language.NL]: 'Verwarmende kruiden',
      },
    },
    {
      name: {
        [Language.EN]: 'Bean curries',
        [Language.NL]: 'Bonencurries',
      },
      note: {
        [Language.EN]: 'House recipe',
        [Language.NL]: 'Eigen recept',
      },
    },
    {
      name: {
        [Language.EN]: 'Chicory tart',
        [Language.NL]: 'Witlof plaattaart',
      },
      note: {
        [Language.EN]: 'Seasonal Dutch ingredient, vegetarian',
        [Language.NL]: 'Seizoensgebonden Nederlands ingrediënt, vegetarisch',
      },
    },
    {
      name: {
        [Language.EN]: 'Naan with grilled vegetables',
        [Language.NL]: 'Naanbrood met gegrilde groente',
      },
      note: {
        [Language.EN]: 'Plant-based',
        [Language.NL]: 'Plantaardig',
      },
    },
    {
      name: {
        [Language.EN]: 'Cauliflower in pastry, with house-made alcohol-free glühwein',
        [Language.NL]: 'Bloemkool in een deegjasje met alcoholvrije eigen gemaakte glühwein',
      },
      note: {
        [Language.EN]: 'Festive plant-based main',
        [Language.NL]: 'Feestelijk plantaardig hoofdgerecht',
      },
    },
    {
      name: {
        [Language.EN]: 'Trifle',
        [Language.NL]: 'Triffle',
      },
      note: {
        [Language.EN]: 'Dessert',
        [Language.NL]: 'Dessert',
      },
    },
  ],
  testimonials: [
    {
      quote: {
        [Language.EN]:
          "We got 'TRUE value for money' and recommend her wholeheartedly.",
        [Language.NL]:
          "We hebben 'WAAR voor geld' gekregen en bevelen haar van harte aan.",
      },
      author: 'Kannaiah & Carla',
      role: {
        [Language.EN]: 'Retreat hosts',
        [Language.NL]: 'Retraite-organisatoren',
      }, // TODO_FROM_CHEF: confirm exact role/organisation for Kannaiah & Carla
    },
    {
      quote: {
        [Language.EN]:
          'The food was delicious. The dishes were Oriental-oriented with warming spices.',
        [Language.NL]:
          'Het eten was verrukkelijk. De gerechten waren Oosters georiënteerd met verwarmende kruiden.',
      },
      author: 'Bianca',
      role: {
        [Language.EN]: 'Retreat guest',
        [Language.NL]: 'Retraitegast',
      }, // TODO_FROM_CHEF: confirm Bianca's exact role / surname / event
    },
  ],

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Organic-labelled produce, regionally sourced where possible, no packets or sachets',
      [Language.NL]: "Biologische producten, zoveel mogelijk regionaal ingekocht, geen 'zakjes en pakjes'",
    },
    credentials: {
      [Language.EN]: 'Vegetarian cook for 25+ years · Brenda Anna aan de KOOK since 2011',
      [Language.NL]: 'Al meer dan 25 jaar vegetarisch koken · Brenda Anna aan de KOOK sinds 2011',
    },
  },
  pastRetreats: [], // TODO_FROM_CHEF: site references a 3-day International Event at Sai Temple Onderdijk and an Ice & Fire Weekend (Feb 2022); confirm whether to list publicly
}
