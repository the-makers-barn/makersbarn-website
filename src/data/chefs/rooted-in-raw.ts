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

// Source: https://www.rootedinraw.com/retreat-chef and /about (crawled 2026-05-01).
// Chef is US-based (Encinitas, California) with international travel — NOT NL-based.
// All TODO_FROM_CHEF markers below indicate fields NOT verifiable from the public site
// and must be confirmed by the chef during onboarding before status flips to PUBLISHED.
export const ROOTED_IN_RAW_CHEF: Chef = {
  slug: 'rooted-in-raw',
  status: ChefStatus.DRAFT,
  primaryLanguage: Language.EN,
  inquiryEmail: 'kaitlyn@rootedinraw.com', // Verified on rootedinraw.com (also: rootedinraw@gmail.com)
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Kaitlyn Kinder',
  avatar: {
    src: '/images/chefs/rooted-in-raw/avatar.jpg',
    altKey: 'chef.rooted-in-raw.avatar',
  },
  tagline: {
    // Verbatim from site: "We offer a variety of retreat chef services, specializing in both raw and cooked vegan meals."
    [Language.EN]: 'Retreat chef specializing in raw and cooked vegan meals',
  },
  // TODO_FROM_CHEF: Chef is based in Encinitas, California, USA (also spends time in Indonesia).
  // homeBase requires NlRegion by current type contract — defaulted to OVERIJSSEL as a placeholder.
  // Confirm with chef whether she is willing to be listed for NL retreats and clarify the displayed
  // home-base copy. Schema may need to evolve to support international chefs.
  homeBase: { city: 'Encinitas, California, USA', region: NlRegion.OVERIJSSEL },
  servesRegions: [], // TODO_FROM_CHEF: confirm which NL regions (if any) the chef will travel to.
  travelsNationwide: true, // Site states "services are available for both local and travel retreats".
  groupSize: { min: 0, max: 0 }, // TODO_FROM_CHEF: not stated on public site.
  languagesSpoken: [Language.EN], // TODO_FROM_CHEF: only English confirmed (US-based, no other languages listed).
  yearsExperience: 7, // Site: "Personal + Freelance Chef | Rooted in Raw | 2019-Current" → 2026 - 2019 = 7.

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.MEDITATION], // Inferred from chef's own yoga/meditation credentials; TODO_FROM_CHEF: confirm.
  cuisineStyles: [
    { [Language.EN]: 'Raw vegan' },
    { [Language.EN]: 'Plant-based / cooked vegan' },
  ],
  dietaryCapabilities: [
    DietaryCapability.RAW,
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.DAIRY_FREE,
  ],
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: pricing not stated on public site.
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD, // TODO_FROM_CHEF: tier placeholder pending real rate.
  },

  gallery: {
    hero: {
      src: '/images/chefs/rooted-in-raw/hero.jpg',
      altKey: 'chef.rooted-in-raw.hero',
    },
    supporting: [
      { src: '/images/chefs/rooted-in-raw/gallery-1.jpg', altKey: 'chef.rooted-in-raw.gallery-1' },
      { src: '/images/chefs/rooted-in-raw/gallery-2.jpg', altKey: 'chef.rooted-in-raw.gallery-2' },
      { src: '/images/chefs/rooted-in-raw/gallery-3.jpg', altKey: 'chef.rooted-in-raw.gallery-3' },
      // TODO_FROM_CHEF: at least one more supporting image needed to satisfy the 4–8 publishing checklist.
    ],
  },
  about: {
    headline: {
      [Language.EN]: 'Plant-based chef and yoga teacher cooking for retreats around the world',
    },
    paragraphs: [
      {
        // Verbatim from rootedinraw.com/about
        [Language.EN]:
          'Kaitlyn Kinder is a Plant Based Chef and 600 Hour Yoga & Meditation Teacher born and raised in San Diego, California.',
      },
      {
        // Verbatim from rootedinraw.com/about
        [Language.EN]:
          'She strives to live slowly and intentionally, and finds that a minimalist approach to life helps her stay present, grounded and focused on what truly matters.',
      },
    ],
  },
  signatureDishes: [], // TODO_FROM_CHEF: no specific signature dishes published on the site.
  testimonials: [], // TODO_FROM_CHEF: no testimonials published on the site.

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Raw and cooked vegan meals', // TODO_FROM_CHEF: sourcing approach (local farms, organic, etc.) not stated on public site.
    },
    credentials: {
      // Verbatim list from rootedinraw.com/about
      [Language.EN]:
        'Certified Yoga Instructor 200hr (Corepower, 2014) · Certified Nutrition Consultant (Natural Healing Institute, 2015) · Raw Food Chef (The Seeds of Life, 2016) · Plant-based Nutrition (T. Colin Campbell, 2017) · Raw Food Chef (Peace Pies, 2018) · Certified Yoga Instructor 300hr (Trimurti Yoga, 2019) · Certified Meditation Instructor 100hr (Sarvaguna Yoga, 2023)',
    },
    // press intentionally omitted — none published on the public site.
  },
  pastRetreats: [], // TODO_FROM_CHEF: no specific retreat clients named on the public site.
}
