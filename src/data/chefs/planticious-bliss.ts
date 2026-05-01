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

export const PLANTICIOUS_BLISS_CHEF: Chef = {
  slug: 'planticious-bliss',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.EN,
  inquiryEmail: 'unknown@planticious-bliss.placeholder', // TODO_FROM_CHEF: site exposes only a contact form (no email shown); request real inquiry address
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Jill & Chris', // TODO_FROM_CHEF: surnames not published on site — confirm full names for both founders
  avatar: {
    src: '/images/chefs/planticious-bliss/avatar.jpg',
    altKey: 'chef.planticious-bliss.avatar',
  },
  tagline: {
    [Language.EN]: 'Personalised plant-based catering for your unique events — anywhere in the world',
    [Language.NL]: 'Persoonlijke plantaardige catering voor jouw unieke events — overal ter wereld',
  },
  homeBase: { city: 'Amsterdam', region: NlRegion.NOORD_HOLLAND }, // TODO_FROM_CHEF: only Amsterdam workshop location is published; confirm actual home base — duo travels internationally and may not be NL-based
  servesRegions: [NlRegion.NOORD_HOLLAND], // TODO_FROM_CHEF: confirm NL service area — site emphasises international work (Spain, Portugal references in blog)
  travelsNationwide: true, // TODO_FROM_CHEF: site says "anywhere in the world" — confirm whether they accept NL-only retreat bookings
  groupSize: { min: 0, max: 0 }, // TODO_FROM_CHEF: site does not publish a group-size range
  languagesSpoken: [Language.EN], // TODO_FROM_CHEF: contact page uses bilingual EN/DE greeting ("Reach out to us – melde dich bei uns!"); confirm full language list (likely also DE, possibly NL)
  yearsExperience: 0, // TODO_FROM_CHEF: site does not publish years of experience or founding date

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS], // TODO_FROM_CHEF: confirm retreat types — site references yoga retreats (Suryalila, Surf Companions) and weddings/corporate
  cuisineStyles: [
    { [Language.EN]: 'Plant-based', [Language.NL]: 'Plantaardig' },
    { [Language.EN]: 'Personalised / bespoke menus', [Language.NL]: 'Persoonlijke menu’s op maat' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
  ], // TODO_FROM_CHEF: confirm whether gluten-free, allergy-aware, raw, etc. menus are offered
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: site does not publish pricing — quote-based
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.PREMIUM, // TODO_FROM_CHEF: tier inferred from premium visual style and bespoke positioning — confirm with chef
  },

  gallery: {
    hero: {
      src: '/images/chefs/planticious-bliss/hero.jpg',
      altKey: 'chef.planticious-bliss.hero',
    },
    supporting: [
      { src: '/images/chefs/planticious-bliss/gallery-1.jpg', altKey: 'chef.planticious-bliss.gallery-1' },
      { src: '/images/chefs/planticious-bliss/gallery-2.jpg', altKey: 'chef.planticious-bliss.gallery-2' },
      { src: '/images/chefs/planticious-bliss/gallery-3.jpg', altKey: 'chef.planticious-bliss.gallery-3' },
    ], // TODO_FROM_CHEF: only 3 supporting images downloaded that we could safely attribute as their work — request 1–5 more retreat-context images for a full 4–8 supporting set
  },
  about: {
    headline: {
      [Language.EN]: 'Food is more than just nourishment — it’s an experience, a connection, and a way to bring people together.',
      [Language.NL]: 'Eten is meer dan voeding alleen — het is een ervaring, een verbinding, en een manier om mensen samen te brengen.',
    },
    paragraphs: [
      {
        [Language.EN]:
          'Jill and Chris founded Planticious Bliss after travelling in a campervan and realising they missed cooking for others. They created a space to connect, nourish, and celebrate sustainability through food, offering personalised plant-based catering globally — cooking fresh, from scratch, using wholesome, natural ingredients.',
        [Language.NL]:
          'Jill en Chris richtten Planticious Bliss op nadat ze tijdens een campervanreis ontdekten hoezeer ze het koken voor anderen misten. Ze creëerden een plek om te verbinden, te voeden en duurzaamheid te vieren door eten — met persoonlijke plantaardige catering wereldwijd, vers en from scratch bereid uit pure, natuurlijke ingrediënten.',
      },
    ],
  },
  signatureDishes: [], // TODO_FROM_CHEF: site does not list named signature dishes — request 3–5 typical retreat menu highlights
  testimonials: [
    {
      quote: {
        [Language.EN]:
          'Chris is a very capable vegan chef, as well as being reliable and conscientious. He produced some delicious dishes for our kitchen.',
      },
      author: 'Vidya Heisel',
      role: {
        [Language.EN]: 'Suryalila Retreat Center',
      }, // TODO_FROM_CHEF: confirm Vidya Heisel’s full role/title at Suryalila
    },
    {
      quote: {
        [Language.EN]:
          'Their plant-based cuisine added a unique and nourishing element to the retreat, perfectly complementing the serene yoga sessions.',
      },
      author: 'Daniel',
      role: {
        [Language.EN]: 'Surf Companions',
      }, // TODO_FROM_CHEF: confirm Daniel’s surname and exact role at Surf Companions
    },
    {
      quote: {
        [Language.EN]:
          'They put so much effort & love into every dish to make the people happy. And you could really feel that they love what they do.',
      },
      author: 'Lea',
      role: {
        [Language.EN]: 'Spes Retreats',
      }, // TODO_FROM_CHEF: confirm Lea’s surname and exact role at Spes Retreats
    },
    {
      quote: {
        [Language.EN]:
          'Jill & Chris not only provide amazing food, they elevate the retreat.',
      },
      author: 'Nienke',
      role: {
        [Language.EN]: 'Retreat organiser',
      }, // TODO_FROM_CHEF: confirm Nienke’s surname, retreat name, and exact role
    },
  ],

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Fresh, from scratch, wholesome and natural ingredients',
      [Language.NL]: 'Vers, from scratch, met pure en natuurlijke ingrediënten',
    }, // TODO_FROM_CHEF: confirm whether organic / local / seasonal sourcing claims can be made
    credentials: {
      [Language.EN]: 'Plant-based catering for retreats, weddings, corporate and private events worldwide',
    }, // TODO_FROM_CHEF: confirm formal culinary training, certifications, or notable past kitchens
  },
  pastRetreats: [
    { name: 'Suryalila Retreat Center' },
    { name: 'Surf Companions' },
    { name: 'Spes Retreats' },
  ], // TODO_FROM_CHEF: confirm full list of past retreat clients and whether outbound URLs may be linked
}
