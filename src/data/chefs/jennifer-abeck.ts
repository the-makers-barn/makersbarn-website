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

export const JENNIFER_ABECK_CHEF: Chef = {
  slug: 'jennifer-abeck',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.EN,
  inquiryEmail: 'abeck.jennifer@hotmail.fr', // Source: chefretreats.com/contact (verify with chef during onboarding)
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Jennifer Abeck',
  avatar: {
    src: '/images/chefs/jennifer-abeck/avatar.jpg',
    altKey: 'chef.jennifer-abeck.avatar',
  },
  tagline: {
    [Language.EN]: 'Healthy, fresh meals for yoga, meditation, and women’s wellness retreats',
    // TODO_FROM_CHEF: confirm Dutch + German translations of tagline before publishing
  },
  // TODO_FROM_CHEF: chef is international (Geneva, Switzerland) — verify NL viability
  // (travel to Wijhe, willingness, day-rate impact). Defaulting region to OVERIJSSEL because
  // Chef.homeBase.region is typed as NlRegion; real home base is Geneva, CH.
  homeBase: { city: 'Geneva', region: NlRegion.OVERIJSSEL },
  servesRegions: [NlRegion.OVERIJSSEL], // TODO_FROM_CHEF: confirm which NL provinces (if any) chef will travel to
  travelsNationwide: false, // TODO_FROM_CHEF: confirm — chef is Switzerland-based, NL travel unverified
  groupSize: { min: 8, max: 24 }, // TODO_FROM_CHEF: real min/max not on website
  languagesSpoken: [Language.EN], // TODO_FROM_CHEF: site is in English; French likely (Geneva, hotmail.fr); confirm NL/DE capability
  yearsExperience: 10, // TODO_FROM_CHEF: bio says “over a decade ago with yoga” — confirm chef-career years separately

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.MEDITATION],
  cuisineStyles: [
    { [Language.EN]: 'Healthy wellness cuisine' },
    { [Language.EN]: 'Plant-forward' },
    // TODO_FROM_CHEF: confirm specific cuisine identity (Mediterranean, French-Swiss, etc.) — site only says “healthy / fresh / nourishing”
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.GLUTEN_FREE,
    // TODO_FROM_CHEF: site explicitly mentions vegan + gluten-free; confirm vegetarian, dairy-free, allergy-aware support
  ],
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: pricing not published — chef to provide day-rate (factor in CH → NL travel)
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD, // TODO_FROM_CHEF: tier placeholder until rate confirmed
  },

  gallery: {
    hero: {
      src: '/images/chefs/jennifer-abeck/hero.jpg',
      altKey: 'chef.jennifer-abeck.hero',
    },
    supporting: [
      { src: '/images/chefs/jennifer-abeck/gallery-1.jpg', altKey: 'chef.jennifer-abeck.gallery-1' },
      { src: '/images/chefs/jennifer-abeck/gallery-2.jpg', altKey: 'chef.jennifer-abeck.gallery-2' },
      { src: '/images/chefs/jennifer-abeck/gallery-3.jpg', altKey: 'chef.jennifer-abeck.gallery-3' },
      // TODO_FROM_CHEF: gallery type expects 4–8 supporting images — request 1–5 more from chef
    ],
  },
  about: {
    headline: {
      [Language.EN]: 'Vibrant, nourishing cuisine for yoga, meditation, and women’s wellness events.',
      // TODO_FROM_CHEF: confirm Dutch + German translations of headline before publishing
    },
    paragraphs: [
      {
        [Language.EN]:
          'I’m Jennifer Abeck, a chef dedicated to crafting healthy, fresh meals for wellness retreats. With a deep passion for well-being, I bring vibrant, nourishing cuisine to yoga, meditation, and women’s wellness events, helping guests feel their best.',
        // Source: chefretreats.com/about (verbatim)
        // TODO_FROM_CHEF: confirm Dutch + German translations before publishing
      },
    ],
  },
  signatureDishes: [
    // TODO_FROM_CHEF: site lists category names (Vegan Quinoa Salad, Gluten-Free Buddha Bowl,
    // Fresh Fruit Platter, Herbal Infused Soup, Homemade Energy Bites) but no chef-named
    // signature dishes. Request 3–5 signature dishes with descriptions during onboarding.
  ],
  testimonials: [
    // TODO_FROM_CHEF: site has six anonymous testimonials with no author names or roles.
    // Per data-quality rules we leave this empty until the chef provides attributable quotes.
  ],

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Fresh, locally sourced, high-quality produce',
      // Source: chefretreats.com/services (verbatim phrasing)
      // TODO_FROM_CHEF: confirm Dutch + German translations
    },
    credentials: {
      [Language.EN]: 'Certified yoga teacher and massage therapist',
      // Source: chefretreats.com/about (verbatim)
      // TODO_FROM_CHEF: confirm formal culinary credentials / training (not on site); confirm DE/NL translations
    },
    // press intentionally omitted — no press mentions on the site
  },
  pastRetreats: [
    // TODO_FROM_CHEF: site lists no named past retreats or clients — request 3–5 references during onboarding
  ],
}
