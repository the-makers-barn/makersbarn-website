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

export const THE_FOOD_CIRCLE_CHEF: Chef = {
  slug: 'the-food-circle',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'info@thefoodcircle.nl', // Verified from thefoodcircle.nl/Contact/
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Michel',
  avatar: {
    src: '/images/chefs/the-food-circle/avatar.jpg',
    altKey: 'chef.the-food-circle.avatar',
  },
  tagline: {
    [Language.EN]:
      'Organic vegan cooking from awareness — fermentation, sourdough, kombucha and fresh pasta',
    [Language.NL]:
      'Biologisch en vegan koken vanuit bewustzijn — fermentatie, zuurdesem, kombucha en verse pasta',
  },
  homeBase: { city: 'Meppel', region: NlRegion.DRENTHE },
  servesRegions: [NlRegion.DRENTHE, NlRegion.OVERIJSSEL],
  travelsNationwide: true, // TODO_FROM_CHEF: confirm nationwide travel willingness
  groupSize: { min: 5, max: 150 }, // From Catering page: "beschikbaar voor 5-150 personen". TODO_FROM_CHEF: confirm typical retreat range
  languagesSpoken: [Language.NL], // TODO_FROM_CHEF: confirm English / German fluency for international retreat groups
  yearsExperience: 0, // TODO_FROM_CHEF: confirm. Site states cooking since 2016 (~10 years by 2026)

  rightFor: [
    RetreatType.YOGA,
    RetreatType.MEDITATION,
    RetreatType.WELLNESS,
  ],
  cuisineStyles: [
    {
      [Language.EN]: 'Organic vegan',
      [Language.NL]: 'Biologisch vegan',
    },
    {
      [Language.EN]: 'Fermentation',
      [Language.NL]: 'Fermentatie',
    },
    {
      [Language.EN]: 'Sourdough',
      [Language.NL]: 'Zuurdesem',
    },
    {
      [Language.EN]: 'Kombucha & fresh pasta',
      [Language.NL]: 'Kombucha & verse pasta',
    },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
  ],
  dayRate: {
    amountEur: 45, // From Retraite-chef page: "mijn tarief €45,- per persoon per dag, exclusief 9% BTW"
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD,
  },

  gallery: {
    hero: {
      src: '/images/chefs/the-food-circle/hero.jpg',
      altKey: 'chef.the-food-circle.hero',
    },
    supporting: [
      {
        src: '/images/chefs/the-food-circle/gallery-1.jpg',
        altKey: 'chef.the-food-circle.gallery-1',
      },
      {
        src: '/images/chefs/the-food-circle/gallery-2.jpg',
        altKey: 'chef.the-food-circle.gallery-2',
      },
      {
        src: '/images/chefs/the-food-circle/gallery-3.jpg',
        altKey: 'chef.the-food-circle.gallery-3',
      },
    ],
    // TODO_FROM_CHEF: gallery has only 3 supporting images; publishing checklist expects 4-8. Request more photos from chef.
  },
  about: {
    headline: {
      [Language.EN]:
        'Organic vegan cooking from awareness, for retreats on location.',
      [Language.NL]:
        'Biologisch en vegan koken vanuit bewustzijn, voor retraites op locatie.',
    },
    paragraphs: [
      {
        [Language.EN]:
          'In 2016, I (Michel) began to cook. Out of an enormous transition my inner flame awoke and I found my calling. I started baking sourdough breads at home. I enjoyed it so much, and found it so fulfilling, that I chose to go and cook in regular kitchens.',
        [Language.NL]:
          'In 2016 ben ik (Michel) begonnen met koken. Vanuit een gigantische transitie is mijn innerlijke vlam ontwaakt en heb ik mijn roeping gevonden. Ik ben begonnen met thuis zuurdesembroden bakken. Ik vond het zo leuk en bevredigend dat ik heb gekozen om te gaan koken in reguliere keukens.',
      },
      {
        [Language.EN]:
          'I have stood directly alongside chefs in large kitchens, where I learned many techniques. I have gone deeper into fermentation, which — thanks to our vegetable gardens — saves a lot of preparation in the kitchen. I am also a point of calm in the kitchen. Because I prepare a lot in advance, there is no rush or stress in my kitchen.',
        [Language.NL]:
          'Direct naast chefs gestaan in grote keukens, hier heb ik veel technieken geleerd. Zo ben ik me meer gaan verdiepen in fermentatie, wat door onze moestuinen veel voorbereidingen scheelt ik de keuken. Daarnaast ben ik een rustpunt in de keuken. Doordat ik veel voorbereid is er in mijn keuken geen haast en stress te bekennen.',
      },
      {
        [Language.EN]:
          'My work largely consists of cooking for retreats. These are very varied retreats: yoga, meditation, silence, zen, ayahuasca or other plant medicines, and family retreats. I cook with exclusively organic vegan products, with a preference for biodynamic produce.',
        [Language.NL]:
          'Grotendeels bestaan mijn opdrachten uit het koken voor retraites. Dit zijn zeer uiteenlopende retraites: yoga, meditatie, stilte, zen, ayahuasca of andere plantmedicijnen, familieretraites. Ik kook met uitsluitend biologische vegan producten. Bij voorkeur gebruik ik biologisch dynamische producten.',
      },
    ],
  },
  signatureDishes: [
    {
      name: {
        [Language.EN]: 'Sourdough focaccia',
        [Language.NL]: 'Zuurdesem focaccia',
      },
      note: {
        [Language.EN]: 'House-baked, long fermentation',
        [Language.NL]: 'Eigen bakkerij, lange rijstijd',
      },
    },
    {
      name: {
        [Language.EN]: 'Turmeric wraps',
        [Language.NL]: 'Kurkuma wraps',
      },
      note: {
        [Language.EN]: 'Listed on the catering menu',
        [Language.NL]: 'Vermeld op de cateringmenukaart',
      },
    },
    {
      name: {
        [Language.EN]: 'Fresh pasta',
        [Language.NL]: 'Verse pasta',
      },
      note: {
        [Language.EN]: 'Made by hand',
        [Language.NL]: 'Met de hand gemaakt',
      },
    },
    // TODO_FROM_CHEF: confirm signature dishes for retreat menus and add tasting notes / ingredients
  ],
  testimonials: [
    // TODO_FROM_CHEF: no testimonials present on website — request 2-3 verbatim quotes from past retreat hosts
  ],

  atAGlance: {
    sourcing: {
      [Language.EN]:
        'Exclusively organic, preferably biodynamic. Own vegetable gardens for fermentation prep.',
      [Language.NL]:
        'Uitsluitend biologisch, bij voorkeur biologisch dynamisch. Eigen moestuinen voor fermentatie.',
    },
    credentials: {
      [Language.EN]:
        'Cooking since 2016 · Trained alongside chefs in large kitchens · Specialist in fermentation, sourdough, kombucha',
      [Language.NL]:
        'Kookt sinds 2016 · Opgeleid naast chefs in grote keukens · Specialist in fermentatie, zuurdesem, kombucha',
    },
    // TODO_FROM_CHEF: add press / certifications if any (none listed on site)
  },
  pastRetreats: [
    // TODO_FROM_CHEF: site references silence retreats, meditation days, zen, ayahuasca and family retreats but lists no client names. Request 3-5 named past retreat hosts.
  ],
}
