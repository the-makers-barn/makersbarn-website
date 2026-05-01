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

export const GROENTJE_CHEF: Chef = {
  slug: 'groentje',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'info@vangroentje.nl',
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Marko (Groentje)',
  avatar: {
    src: '/images/chefs/groentje/avatar.jpeg',
    altKey: 'chef.groentje.avatar',
  },
  tagline: {
    [Language.EN]: 'Wholesome & plant-based',
    [Language.NL]: 'Volwaardig & Plantaardig',
  },
  homeBase: { city: 'Dalfsen', region: NlRegion.OVERIJSSEL },
  servesRegions: [NlRegion.OVERIJSSEL],
  travelsNationwide: true, // "Catering & festivals door het hele land" — site footer
  // TODO_FROM_CHEF: actual group size range — site only states a 10-person minimum for retreat catering
  groupSize: { min: 10, max: 30 },
  // TODO_FROM_CHEF: confirm spoken languages (site is NL-only; English/German not stated)
  languagesSpoken: [Language.NL],
  // TODO_FROM_CHEF: years of experience (site mentions cooking school start in 2013 and full-time Groentje since 2021, but does not state a years-of-experience figure)
  yearsExperience: 0,

  // TODO_FROM_CHEF: confirm full retreat-type fit. Site only explicitly mentions "retraite/retreat" generically.
  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.MEDITATION],
  cuisineStyles: [
    { [Language.EN]: 'Plant-based', [Language.NL]: 'Plantaardig' },
    { [Language.EN]: 'Vegan', [Language.NL]: 'Vegan' },
    { [Language.EN]: 'Organic', [Language.NL]: 'Biologisch' },
    { [Language.EN]: 'Pure', [Language.NL]: 'Puur' },
    { [Language.EN]: 'Wild plants & fermentation', [Language.NL]: 'Wilde planten & fermenteren' },
  ],
  // TODO_FROM_CHEF: confirm full allergen/diet capability list. Site says only "Zijn er allergenen? Laat het mij weten!"
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.ALLERGY_AWARE,
  ],
  dayRate: {
    amountEur: 45, // "€45,00 per persoon per dag" — Retraite-kok page (excl. 9% btw + €0,40/km travel)
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD,
  },

  gallery: {
    hero: {
      src: '/images/chefs/groentje/hero.jpeg',
      altKey: 'chef.groentje.hero',
    },
    supporting: [
      { src: '/images/chefs/groentje/gallery-1.jpeg', altKey: 'chef.groentje.gallery-1' },
      { src: '/images/chefs/groentje/gallery-2.jpeg', altKey: 'chef.groentje.gallery-2' },
      { src: '/images/chefs/groentje/gallery-3.jpeg', altKey: 'chef.groentje.gallery-3' },
    ],
  },
  about: {
    headline: {
      [Language.EN]: '(Retreat) chef on location — wholesome and plant-based',
      [Language.NL]: '(Retraite) kok op locatie — volwaardig en plantaardig',
    },
    paragraphs: [
      {
        // Verbatim from Over-Groentje (about) page
        [Language.EN]:
          "My name is Marko (1989) and I am the chef and owner of Groentje. Cooking and good food are my passion. I have a refined palate and love putting my creativity to work, experimenting with wild plants and fermentation. The world of wholesome plant-based food is so rich that you absolutely don't have to miss anything — I'd love to let you taste that. Choosing plant-based is a conscious way of caring for our earth, the animals, humanity, and our health. I hope you can taste the love for food in my dishes and feel the value of eating together. That intimate, convivial atmosphere is also very important to me and really enhances the experience.",
        [Language.NL]:
          'Mijn naam is Marko (1989) en ik ben de kok en eigenaar van Groentje. Koken en lekker eten is mijn passie. Ik heb een verfijnde smaak en hou ervan om mijn creativiteit in te zetten en te experimenteren met wilde planten en fermenteren. De volwaardige veganistische wereld is zo rijk dat je absoluut niks hoeft te missen. Dat wil ik je graag laten proeven. De plantaardige keuze is bewust zorg dragen voor onze aarde, dieren, de mensheid en onze gezondheid. Ik hoop dat je de liefde voor het eten proeft en de waarde van gezellig samen eten kan voelen in mijn gerechten. Die intieme, gezellige sfeer vind ik ook heel belangrijk en verhoogt echt de beleving.',
      },
      {
        // Verbatim from Retraite-kok page
        [Language.EN]:
          "Do you have a multi-day retreat or event where you need a chef who is present for several days and takes care of feeding everyone? I'd love to do that for you. Working with someone else or alone (depending on the number of people), I'll happily look after breakfast, lunch and dinner, coffee, tea and snacks. In coordination with the group, I'll make sure you'll be both filled and enriched as far as catering goes. The menu varies and I can't share it in advance, because I look at what's available at the time and what suits the group and any wishes.",
        [Language.NL]:
          'Heb jij een meerdaagse retraite/retreat of evenement waarbij je een kok nodig hebt die meerdere dagen aanwezig is en jou ontzorgt wat betreft de innerlijke mens? Ik doe dat graag voor je. In samenwerking met iemand anders of alleen (afhankelijk van het aantal personen) kom ik graag zorgdragen voor ontbijt, lunch en diner, koffie en thee en tussendoortjes. In afstemming met de groep zorg ik ervoor dat het wat catering betreft jullie vervuld en verrijkt zullen zijn. Het menu is wisselend en kan ik niet op voorhand delen, omdat ik kijk wat er dan is en wat passend is bij de groep mensen en wat eventuele wensen zijn.',
      },
    ],
  },
  // TODO_FROM_CHEF: signature dishes — site does not list named signature dishes, only image titles like "Vegan chocoladetaart", "Vegan high tea", "Vegan lunch"
  signatureDishes: [],
  // TODO_FROM_CHEF: testimonials — none found verbatim on site
  testimonials: [],

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Plant-based, organic, pure & conscious',
      [Language.NL]: 'Plantaardig, biologisch, puur & bewust',
    },
    credentials: {
      // Verbatim from about page: cooking education at Smink Culinair started 2013, Groentje full-time since 2021
      [Language.EN]: 'Trained at Smink Culinair (since 2013) · Groentje full-time since 2021',
      [Language.NL]: 'Opleiding kok bij Smink Culinair (vanaf 2013) · Groentje sinds 2021 volledige aandacht',
    },
  },
  pastRetreats: [
    // Only event named verbatim on the site
    { name: 'The Living Village Festival' },
  ],
}
