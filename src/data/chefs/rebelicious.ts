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

export const REBELICIOUS_CHEF: Chef = {
  slug: 'rebelicious',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'info@rebelicious.nl', // Verified from Cloudflare-obfuscated mailto on rebelicious.nl/contact/
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Loes', // TODO_FROM_CHEF: confirm full name (surname not published on site)
  avatar: {
    src: '/images/chefs/rebelicious/avatar.jpeg',
    altKey: 'chef.rebelicious.avatar',
  },
  tagline: {
    [Language.EN]: 'Honest, plant-based food for everyone — Rebelicious kookt',
    [Language.NL]: '(h)eerlijk zonder vlees voor iedereen',
  },
  homeBase: { city: 'Oostelbeers', region: NlRegion.NOORD_BRABANT },
  servesRegions: [NlRegion.NOORD_BRABANT], // TODO_FROM_CHEF: confirm additional provinces ("en daarbuiten")
  travelsNationwide: true, // Site states "Chef Loes komt ook graag op locatie of reist mee" — TODO_FROM_CHEF: confirm
  groupSize: { min: 2, max: 30 }, // TODO_FROM_CHEF: not specified on site, placeholder
  languagesSpoken: [Language.NL], // TODO_FROM_CHEF: confirm EN/DE comfort level
  yearsExperience: 6, // TODO_FROM_CHEF: estimated from HACCP 2019 cert; confirm actual years cooking professionally

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.MEDITATION], // TODO_FROM_CHEF: confirm retreat types served
  cuisineStyles: [
    { [Language.EN]: 'Vegan', [Language.NL]: 'Vegan' },
    { [Language.EN]: 'Plant-based', [Language.NL]: 'Plantaardig' },
    { [Language.EN]: 'World cuisine (Asian, Arabic, Indian, Mexican)', [Language.NL]: 'Wereldkeuken (Aziatisch, Arabisch, Indiaas, Mexicaans)' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.ALLERGY_AWARE, // Site explicitly mentions "Rekening houdende met allergieën en dieetwensen"
  ],
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: site says "vegan catering op maat" — no public pricing
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD, // TODO_FROM_CHEF: confirm tier
  },

  gallery: {
    hero: {
      src: '/images/chefs/rebelicious/hero.jpeg',
      altKey: 'chef.rebelicious.hero',
    },
    supporting: [
      { src: '/images/chefs/rebelicious/gallery-1.jpeg', altKey: 'chef.rebelicious.gallery-1' },
      { src: '/images/chefs/rebelicious/gallery-2.jpg', altKey: 'chef.rebelicious.gallery-2' },
      { src: '/images/chefs/rebelicious/gallery-3.jpeg', altKey: 'chef.rebelicious.gallery-3' },
      // TODO_FROM_CHEF: only 3 supporting images sourced; gallery validator expects 4–8. Request more from chef.
    ],
  },
  about: {
    headline: {
      [Language.EN]: 'Nourishing food for your retreat — with care, attention, and love',
      [Language.NL]: 'Voeden tijdens je retreat',
    },
    paragraphs: [
      {
        // Verbatim quote from rebelicious.nl/vegan-catering-door-rebelicious/retreat-2/
        [Language.NL]:
          'Voor ons is verzorgen van de maaltijd tijdens jullie retreat dat wat we met zorg, aandacht en liefde willen doen. We leggen in het eten voor jullie: smaak, zorg en aandacht. Wat is het doel van jullie retreat? Met welk thema gaan de deelnemers aan de slag? Wij passen ons eten hier graag op aan en denken met je mee.',
        [Language.EN]:
          'Caring for the meals during your retreat is something we want to do with care, attention, and love. We put taste, care, and attention into the food. What is the purpose of your retreat? What theme will the participants be working with? We happily adapt our cooking and think along with you.',
      },
      {
        [Language.NL]:
          'Wij bereiden volledig vegan maaltijden waarbij we rekening houden met de verteerbaarheid, voedingsstoffen en natuurlijk dat het smaakvol is! Voeding geeft de ondersteuning die je nodig hebt voor het ontwikkelen van jezelf. Vooral tijdens een retreat, waar je dicht terug gaat naar de bron. Naar binnen.',
        [Language.EN]:
          'We prepare fully vegan meals, keeping digestibility, nutrients, and of course flavour in mind. Food gives you the support you need to develop yourself — especially during a retreat, when you go back close to the source. Inward.',
      },
      {
        [Language.NL]:
          'Wij bereiden ons eten voor jullie retreat liefdevol en bewust. Zo zorgt chef Loes voor de voedingsstof van een waardevolle innerlijke reis.',
        [Language.EN]:
          'We prepare food for your retreat lovingly and consciously. This way, chef Loes provides the nourishment for a meaningful inner journey.',
      },
    ],
  },
  signatureDishes: [], // No signature dishes published verbatim — TODO_FROM_CHEF
  testimonials: [], // No testimonials published verbatim — TODO_FROM_CHEF

  atAGlance: {
    sourcing: {
      // Verbatim from retreat page: "Verse producten, zo duurzaam en lokaal mogelijk"
      [Language.EN]: 'Fresh produce, as sustainable and local as possible',
      [Language.NL]: 'Verse producten, zo duurzaam en lokaal mogelijk',
    },
    credentials: {
      // Verbatim certifications listed on rebelicious.nl
      [Language.EN]: 'Vegan Culinary Arts & Fine Dining (Gentle Gourmet Institute Paris, 2020) · HACCP (2019) · Allergen Declaration (2020) · Social Hygiene (2020) · SCA Barista Skills (2020)',
      [Language.NL]: 'Vegan Culinary Arts & Fine Dining (Gentle Gourmet Institute Parijs, 2020) · HACCP (2019) · Allergenenverklaring (2020) · Sociale Hygiëne (2020) · SCA Barista Skills (2020)',
    },
    // press: TODO_FROM_CHEF — no press mentions found on site
  },
  pastRetreats: [], // TODO_FROM_CHEF: no specific past retreat clients listed publicly
}
