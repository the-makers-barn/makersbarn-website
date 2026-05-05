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

export const BURO_BROCCOLI_CHEF: Chef = {
  slug: 'buro-broccoli',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'anne@burobroccoli.nl',
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Anne Hopman',
  avatar: {
    src: '/images/chefs/buro-broccoli/avatar.jpeg',
    altKey: 'chef.buro-broccoli.avatar',
  },
  tagline: {
    // Verbatim from burobroccoli.nl homepage:
    // "Vegan Workshops, holistische coaching, plantaardige catering."
    [Language.EN]: 'Vegan workshops, holistic coaching, plant-based catering',
    [Language.NL]: 'Vegan workshops, holistische coaching, plantaardige catering',
  },
  homeBase: { city: 'Amsterdam', region: NlRegion.NOORD_HOLLAND }, // Verbatim: "We wonen met zijn drieeen in Amsterdam."
  // Verbatim: "bijna maandelijks op verschillende yoga en soortgelijke retraites en
  // opleidingen door heel Nederland en buitenland". Travels nationwide; no specific
  // regional list stated, so leave servesRegions to her home region only.
  servesRegions: [NlRegion.NOORD_HOLLAND],
  travelsNationwide: true,
  // Verbatim: "Voor groepen vanaf 10 personen tot 30 personen" /
  // "from 10 personen tot ongeveer 30 personen kan ik prima alleen aan"
  groupSize: { min: 10, max: 30 },
  languagesSpoken: [Language.NL], // English fluency not stated on the site // TODO_FROM_CHEF: confirm EN/DE proficiency
  yearsExperience: 14, // Derived from "In 2011 ben ik de opleiding orthomoleculaire geneeskunde en natuurvoeding gedaan" (2011 → 2025+) // TODO_FROM_CHEF: confirm exact retreat-catering tenure

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS], // Verbatim: "yoga en soortgelijke retraites en opleidingen"
  cuisineStyles: [
    // Verbatim: "plantaardige catering" / "Veganistische catering op retreats"
    { [Language.EN]: 'Vegan / plant-based', [Language.NL]: 'Veganistisch / plantaardig' },
    // Verbatim: "Glutenvrij, biologisch, puur en onbewerkte maaltijden op locatie."
    { [Language.EN]: 'Organic & unprocessed', [Language.NL]: 'Biologisch & onbewerkt' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.GLUTEN_FREE, // Verbatim: "Glutenvrij"
  ],
  dayRate: {
    // Verbatim from /veganistische-catering-op-retreats/:
    // "±€45,00 p.p.p.d d inclusief ontbijt, lunch, diner en fruit. Wil je
    //  zelf gemaakte tussendoortjes en toetjes , dan komt daar nog een meer
    //  prijs bij van €2,50 p.p.p.d"
    amountEur: 45,
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD,
  },

  gallery: {
    hero: {
      src: '/images/chefs/buro-broccoli/hero.jpeg',
      altKey: 'chef.buro-broccoli.hero',
    },
    supporting: [
      { src: '/images/chefs/buro-broccoli/gallery-1.jpg', altKey: 'chef.buro-broccoli.gallery-1' },
      { src: '/images/chefs/buro-broccoli/gallery-2.jpeg', altKey: 'chef.buro-broccoli.gallery-2' },
      { src: '/images/chefs/buro-broccoli/gallery-3.jpeg', altKey: 'chef.buro-broccoli.gallery-3' },
      // TODO_FROM_CHEF: request 1–2 more high-resolution photos to reach the recommended 4–8 supporting images.
    ],
  },
  about: {
    headline: {
      // Verbatim: "Spelend leren over voeding, ademen en ontspannen met anne."
      [Language.EN]: 'Playful learning about nutrition, breath and rest, with Anne',
      [Language.NL]: 'Spelend leren over voeding, ademen en ontspannen met Anne',
    },
    paragraphs: [
      {
        // Composed strictly from verbatim quotes — no fabricated detail.
        // Sources: /anne-hopman/ ("Mijn naam is Anne Hopman ... We wonen met zijn drieeen in Amsterdam."
        // "Ik heb autonome beeldende kunst gestudeerd aan de kunstacademie in Utrecht."
        // "In 2011 ben ik de opleiding orthomoleculaire geneeskunde en natuurvoeding gedaan"
        // "Nu kook ik op retraites en inspireer ik mensen plantaardiger te eten")
        [Language.EN]:
          "Anne Hopman is based in Amsterdam. She studied autonomous fine art at the Utrecht art academy and, in 2011, trained in orthomolecular medicine and natural nutrition. Today she cooks on retreats and inspires people to eat more plant-based — taking 'ordinary' dishes and reworking them into plant-based, healthier and full-flavoured versions.",
        [Language.NL]:
          "Anne Hopman woont in Amsterdam. Ze studeerde autonome beeldende kunst aan de kunstacademie in Utrecht en volgde in 2011 de opleiding orthomoleculaire geneeskunde en natuurvoeding. Nu kookt ze op retraites en inspireert mensen plantaardiger te eten — 'gewone' gerechten plantaardiger, gezonder en smaakvoller maken is echt haar ding.",
      },
    ],
  },
  // Verbatim signature dishes are not listed on the site beyond the broccoli origin
  // story. Leaving empty until the chef supplies a curated list.
  signatureDishes: [], // TODO_FROM_CHEF: request 3 signature dishes with short notes
  testimonials: [], // TODO_FROM_CHEF: no testimonials published on the site — request 1–2 quotes from past retreat hosts

  atAGlance: {
    sourcing: {
      // Verbatim: "Glutenvrij, biologisch, puur en onbewerkte maaltijden op locatie."
      // and "Doorgaans neem ik al mijn spullen en ingredienten mee naar jou locatie"
      [Language.EN]: 'Organic, unprocessed, plant-based — ingredients and equipment brought on-site',
      [Language.NL]: 'Biologisch, onbewerkt, plantaardig — spullen en ingrediënten worden meegenomen naar de locatie',
    },
    credentials: {
      // Verbatim: "In 2011 ben ik de opleiding orthomoleculaire geneeskunde en natuurvoeding gedaan"
      // and "autonome beeldende kunst ... aan de kunstacademie in Utrecht"
      [Language.EN]: 'Orthomolecular medicine & natural nutrition (2011) · Fine Art, Utrecht art academy',
      [Language.NL]: 'Orthomoleculaire geneeskunde & natuurvoeding (2011) · Autonome beeldende kunst, kunstacademie Utrecht',
    },
    // press field intentionally omitted — none stated on the site.
  },
  pastRetreats: [], // TODO_FROM_CHEF: site mentions "yoga en soortgelijke retraites en opleidingen door heel Nederland en buitenland" but names no specific hosts — request 3–5 named past retreats.
}
