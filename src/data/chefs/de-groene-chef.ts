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

export const DE_GROENE_CHEF_CHEF: Chef = {
  slug: 'de-groene-chef',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'info@degroenechef.nl',
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Alexandra van Rijen',
  avatar: {
    src: '/images/chefs/de-groene-chef/avatar.jpg',
    altKey: 'chef.de-groene-chef.avatar',
  },
  tagline: {
    [Language.EN]: 'Pure. Creative. Connecting. — 100% plant-based catering & cooking workshops',
    [Language.NL]: 'Puur. Creatief. Verbindend. — 100% plantaardige catering & kookworkshops',
  },
  homeBase: { city: 'Tilburg', region: NlRegion.NOORD_BRABANT },
  servesRegions: [NlRegion.NOORD_BRABANT],
  travelsNationwide: false, // TODO_FROM_CHEF: site lists Tilburg/Breda/Eindhoven/Den Bosch as primary; groups of 50+ served outside primary region. Confirm willingness to travel to Wijhe (Overijssel) for The Makers Barn.
  groupSize: { min: 10, max: 60 }, // TODO_FROM_CHEF: site states min 10 for retreat catering and min 8 for lunch; max not stated — placeholder 60 pending confirmation.
  languagesSpoken: [Language.NL], // TODO_FROM_CHEF: confirm if EN / DE are also spoken for international retreat guests.
  yearsExperience: 10, // Founded in 2016 per the about page; current year 2026 → 10 years. TODO_FROM_CHEF: confirm.

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.MEDITATION], // TODO_FROM_CHEF: confirm retreat types served — site mentions retreats generally, not specific modalities.
  cuisineStyles: [
    { [Language.EN]: 'Whole Food Plant-Based (WFPB)', [Language.NL]: 'Whole Food Plant-Based (WFPB)' },
    { [Language.EN]: 'Plant-based & gluten-free', [Language.NL]: 'Plantaardig & glutenvrij' },
    { [Language.EN]: 'Levantine-inspired', [Language.NL]: 'Levantijns geïnspireerd' },
    { [Language.EN]: 'Ayurvedic / Vedic', [Language.NL]: 'Ayurvedisch / Vedisch' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.GLUTEN_FREE,
    DietaryCapability.DAIRY_FREE,
    DietaryCapability.ALLERGY_AWARE,
  ],
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: site references a "Retreat Catering Prijslijst 2026" download but no per-person day rate published. Confirm rate.
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.PREMIUM, // TODO_FROM_CHEF: tier inferred from "Luxe Plantaardige Catering" framing and €36–€42 buffet pricing. Confirm.
  },

  gallery: {
    hero: {
      src: '/images/chefs/de-groene-chef/hero.jpg',
      altKey: 'chef.de-groene-chef.hero',
    },
    supporting: [
      { src: '/images/chefs/de-groene-chef/gallery-1.jpg', altKey: 'chef.de-groene-chef.gallery-1' },
      { src: '/images/chefs/de-groene-chef/gallery-2.png', altKey: 'chef.de-groene-chef.gallery-2' },
      { src: '/images/chefs/de-groene-chef/gallery-3.jpg', altKey: 'chef.de-groene-chef.gallery-3' },
    ], // TODO_FROM_CHEF: only 3 supporting images sourced from public site (publishing checklist asks for 4–8). Request additional retreat / workshop / portrait photos at a higher resolution.
  },
  about: {
    headline: {
      [Language.EN]: 'Changing the World One Plate at a Time',
      [Language.NL]: 'Changing the World One Plate at a Time',
    },
    paragraphs: [
      {
        [Language.EN]:
          'De Groene Chef was founded in 2016 by Alexandra van Rijen, initially as a fully plant-based restaurant kitchen at Bank15 in Tilburg — a concept nominated for a Vegan Award and ranked in the Top 5 Best Vegan Dining Establishments in the Netherlands. Since 2020 the focus has shifted exclusively to luxury plant-based catering, vegan and gluten-free cooking workshops using whole-food plant-based methods, and meal provision during retreats.',
        [Language.NL]:
          'De Groene Chef is in 2016 opgericht door Alexandra van Rijen, aanvankelijk als volledig plantaardige restaurantkeuken bij Bank15 in Tilburg — een concept dat genomineerd werd voor een Vegan Award en in de Top 5 van Beste Vegan Eetgelegenheden van Nederland kwam te staan. Sinds 2020 ligt de focus volledig op luxe plantaardige catering, vegan en glutenvrije kookworkshops volgens whole food plant-based principes, en maaltijdverzorging tijdens retraites.',
      },
      {
        [Language.EN]:
          '"I love the life energy of fresh produce, preferably straight from the kitchen garden." Alexandra works from the conviction that food must be good for body and spirit, good for the earth and all living beings — and above all, delicious. Every dish is 100% plant-based, built from pure, minimally processed ingredients, free from artificial additives and refined sugars.',
        [Language.NL]:
          '"Ik hou van de levensenergie van verse producten, het liefst rechtstreeks uit de moestuin." Alexandra werkt vanuit de overtuiging dat eten goed moet zijn voor lichaam en geest, goed voor de aarde en al wat leeft — en bovenal lekker. Elk gerecht is 100% plantaardig, opgebouwd uit pure, onbewerkte ingrediënten, vrij van kunstmatige toevoegingen en geraffineerde suikers.',
      },
      {
        [Language.EN]:
          'For retreats, meals follow the natural rhythm of the day: breakfast with fresh fruit, plant-based yoghurt, granola, oatmeal and homemade spreads; lunches of soup, bread and fresh salads; balanced dinners with herbs, spices and seasonal ingredients including dessert. A hospitality table runs throughout the day with herbal teas, infusions, fresh mint and ginger, fruit, nuts, dates and filtered water. Optional add-ons include ceremonial cacao, crudités, flower and herb lemonade, and gemstone water. Minimum 10 participants for retreat catering.',
        [Language.NL]:
          'Voor retraites volgen de maaltijden het natuurlijke ritme van de dag: ontbijt met vers fruit, plantaardige yoghurt, granola, havermout en zelfgemaakte spreads; lunch met soep, brood en frisse salades; gebalanceerde diners met kruiden, specerijen en seizoensingrediënten inclusief dessert. Een hospitality-tafel staat de hele dag klaar met kruidenthee, infusions, verse munt en gember, fruit, noten, dadels en gefilterd water. Optionele aanvullingen zijn ceremoniële cacao, crudités, bloemen- en kruidenlimonade en edelsteenwater. Minimaal 10 deelnemers voor retraite-catering.',
      },
    ],
  },
  signatureDishes: [
    {
      name: {
        [Language.EN]: 'Tuin op Tafel',
        [Language.NL]: 'Tuin op Tafel',
      },
      note: {
        [Language.EN]: 'Garden-focused buffet — roasted vegetables, herb-forward dishes, creamy spreads (€39 p.p.)',
        [Language.NL]: 'Tuingericht buffet — geroosterde groenten, kruidige gerechten, romige spreads (€39 p.p.)',
      },
    },
    {
      name: {
        [Language.EN]: 'Boutique Levant',
        [Language.NL]: 'Boutique Levant',
      },
      note: {
        [Language.EN]: 'Levantine-inspired with warm spices and herb accents (€42 p.p.)',
        [Language.NL]: 'Levantijns geïnspireerd met warme specerijen en kruidige accenten (€42 p.p.)',
      },
    },
    {
      name: {
        [Language.EN]: 'Vedisch Vers',
        [Language.NL]: 'Vedisch Vers',
      },
      note: {
        [Language.EN]: 'Ayurvedic-influenced menu emphasising balance and digestibility (€39 p.p.)',
        [Language.NL]: 'Ayurvedisch geïnspireerd menu, gericht op balans en verteerbaarheid (€39 p.p.)',
      },
    },
    {
      name: {
        [Language.EN]: 'Levende Oogst',
        [Language.NL]: 'Levende Oogst',
      },
      note: {
        [Language.EN]: 'Salad-centric menu, standalone or as summer-BBQ accompaniment (€36 p.p.)',
        [Language.NL]: 'Salade-gericht menu, op zichzelf of als zomer-BBQ-begeleiding (€36 p.p.)',
      },
    },
  ],
  testimonials: [], // TODO_FROM_CHEF: no verbatim testimonials sourced from public site. Request 1–3 quotes from past retreat hosts.

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Whole Food Plant-Based — pure, minimally processed ingredients, free from artificial additives and refined sugars; fresh, seasonal produce',
      [Language.NL]: 'Whole Food Plant-Based — pure, onbewerkte ingrediënten, vrij van kunstmatige toevoegingen en geraffineerde suikers; vers en seizoensgebonden',
    },
    credentials: {
      [Language.EN]: 'Founder of De Groene Chef (2016) · Top 5 Best Vegan Dining Establishments NL (Bank15, Tilburg) · Vegan Award nominee',
      [Language.NL]: 'Oprichter De Groene Chef (2016) · Top 5 Beste Vegan Eetgelegenheden NL (Bank15, Tilburg) · Vegan Award-genomineerde',
    },
    // TODO_FROM_CHEF: no press feature listed on public site — omit until confirmed.
  },
  pastRetreats: [], // TODO_FROM_CHEF: site mentions retreat catering as a service but does not name specific past retreat hosts publicly. Request 3–5 references.
}
