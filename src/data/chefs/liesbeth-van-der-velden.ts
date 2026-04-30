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

export const LIESBETH_VAN_DER_VELDEN_CHEF: Chef = {
  // Identity & gating
  slug: 'liesbeth-van-der-velden',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'liesbeth@example.com', // TODO during onboarding: replace with real address
  updatedAt: asIsoDateString('2026-04-30'),

  // Header
  name: 'Liesbeth van der Velden',
  avatar: {
    src: '/images/chefs/liesbeth-van-der-velden/avatar.jpg',
    altKey: 'chef.liesbeth-van-der-velden.avatar',
  },
  tagline: {
    [Language.EN]: 'Plant-forward, fire-cooked, deeply Dutch',
    [Language.NL]: 'Plantaardig, op vuur bereid, door en door Nederlands',
    [Language.DE]: 'Pflanzenbasiert, am Feuer gegart, zutiefst niederländisch',
  },
  homeBase: { city: 'Deventer', region: NlRegion.OVERIJSSEL },
  servesRegions: [NlRegion.OVERIJSSEL, NlRegion.GELDERLAND],
  travelsNationwide: true,
  groupSize: { min: 8, max: 24 },
  languagesSpoken: [Language.NL, Language.EN, Language.DE],
  yearsExperience: 12,

  // Stat strip
  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.CREATIVE],
  cuisineStyles: [
    { [Language.EN]: 'Plant-based', [Language.NL]: 'Plantaardig', [Language.DE]: 'Pflanzenbasiert' },
    { [Language.EN]: 'Fire / live-fire', [Language.NL]: 'Vuur / open vuur', [Language.DE]: 'Feuer / offenes Feuer' },
    { [Language.EN]: 'Seasonal Dutch', [Language.NL]: 'Seizoensgebonden Nederlands', [Language.DE]: 'Saisonal niederländisch' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.GLUTEN_FREE,
    DietaryCapability.ALLERGY_AWARE,
  ],
  dayRate: {
    amountEur: 65,
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.PREMIUM,
  },

  // Body
  gallery: {
    hero: {
      src: '/images/chefs/liesbeth-van-der-velden/hero.jpg',
      altKey: 'chef.liesbeth-van-der-velden.hero',
    },
    supporting: [
      { src: '/images/chefs/liesbeth-van-der-velden/gallery-1.jpg', altKey: 'chef.liesbeth-van-der-velden.gallery-1' },
      { src: '/images/chefs/liesbeth-van-der-velden/gallery-2.jpg', altKey: 'chef.liesbeth-van-der-velden.gallery-2' },
      { src: '/images/chefs/liesbeth-van-der-velden/gallery-3.jpg', altKey: 'chef.liesbeth-van-der-velden.gallery-3' },
      { src: '/images/chefs/liesbeth-van-der-velden/gallery-4.jpg', altKey: 'chef.liesbeth-van-der-velden.gallery-4' },
    ],
  },
  about: {
    headline: {
      [Language.EN]: 'Plant-forward, fire-cooked, deeply Dutch.',
      [Language.NL]: 'Plantaardig, op vuur bereid, door en door Nederlands.',
      [Language.DE]: 'Pflanzenbasiert, am Feuer gegart, zutiefst niederländisch.',
    },
    paragraphs: [
      {
        [Language.EN]:
          "Liesbeth cooks the way her grandmother did — slow, around fire, with whatever the day's harvest gave. After eight years in restaurant kitchens (most recently De Kas), she came home to the eastern Netherlands to cook for groups who actually have time to taste the food. Expect long tables, real conversations, and the smell of woodsmoke in your jumper.",
        [Language.NL]:
          'Liesbeth kookt zoals haar oma dat deed — traag, rond het vuur, met wat de oogst van die dag te bieden had. Na acht jaar in restaurantkeukens (laatst bij De Kas) kwam ze terug naar het oosten van het land om te koken voor groepen die echt de tijd nemen om te proeven. Verwacht lange tafels, echte gesprekken en de geur van houtrook in je trui.',
        [Language.DE]:
          'Liesbeth kocht so, wie es schon ihre Großmutter tat — langsam, am Feuer, mit dem, was die Ernte des Tages bot. Nach acht Jahren in Restaurantküchen (zuletzt bei De Kas) kehrte sie in die östlichen Niederlande zurück, um für Gruppen zu kochen, die sich wirklich Zeit zum Schmecken nehmen. Lange Tafeln, echte Gespräche und der Duft von Holzrauch im Pullover.',
      },
    ],
  },
  signatureDishes: [
    {
      name: {
        [Language.EN]: 'Smoked beetroot, hung yoghurt, walnut',
        [Language.NL]: 'Gerookte biet, hangop, walnoot',
        [Language.DE]: 'Geräucherte Rote Bete, Hängejoghurt, Walnuss',
      },
      note: {
        [Language.EN]: 'Live fire, served family-style',
        [Language.NL]: 'Open vuur, family-style geserveerd',
        [Language.DE]: 'Offenes Feuer, family-style serviert',
      },
    },
    {
      name: {
        [Language.EN]: 'Wild garlic kroketten',
        [Language.NL]: 'Daslook-kroketten',
        [Language.DE]: 'Bärlauch-Kroketten',
      },
      note: {
        [Language.EN]: 'House sourdough, fermented mustard',
        [Language.NL]: 'Eigen zuurdesem, gefermenteerde mosterd',
        [Language.DE]: 'Hauseigenes Sauerteigbrot, fermentierter Senf',
      },
    },
    {
      name: {
        [Language.EN]: 'Slow-roasted celeriac, hay butter',
        [Language.NL]: 'Langzaam geroosterde knolselderij, hooiboter',
        [Language.DE]: 'Langsam gerösteter Knollensellerie, Heubutter',
      },
      note: {
        [Language.EN]: 'Cooked in embers, 4 hours',
        [Language.NL]: '4 uur in sintels gegaard',
        [Language.DE]: '4 Stunden in der Glut gegart',
      },
    },
  ],
  testimonials: [
    {
      quote: {
        [Language.EN]:
          'Three days in and our guests were still talking about her beetroot. Liesbeth made the food feel like part of the practice, not a break from it.',
        [Language.NL]:
          'Drie dagen verder hadden onze gasten het nog steeds over haar biet. Liesbeth maakte het eten onderdeel van de beoefening, geen pauze ervan.',
        [Language.DE]:
          'Drei Tage später sprachen unsere Gäste immer noch von ihrer Roten Bete. Liesbeth machte das Essen zum Teil der Praxis, nicht zur Pause davon.',
      },
      author: 'Marieke H.',
      role: {
        [Language.EN]: 'Yoga retreat host, Texel',
        [Language.NL]: 'Yoga-retraitehost, Texel',
        [Language.DE]: 'Yoga-Retreat-Gastgeberin, Texel',
      },
    },
    {
      quote: {
        [Language.EN]:
          'Calm, organised, and the food was extraordinary. She handled fourteen different dietary needs without once making it feel like a problem.',
        [Language.NL]:
          'Rustig, georganiseerd, en het eten was buitengewoon. Ze ging om met veertien verschillende dieetwensen zonder dat het ooit een probleem leek.',
        [Language.DE]:
          'Ruhig, organisiert, und das Essen war außergewöhnlich. Sie meisterte vierzehn verschiedene Ernährungsbedürfnisse, ohne dass es je zum Problem wurde.',
      },
      author: 'Sanne & Tim',
      role: {
        [Language.EN]: 'Founders, Stillpoint Retreats',
        [Language.NL]: 'Oprichters, Stillpoint Retreats',
        [Language.DE]: 'Gründer, Stillpoint Retreats',
      },
    },
  ],

  // Sidebar
  atAGlance: {
    sourcing: {
      [Language.EN]: 'Local farms within 30km, foraged herbs, no airfreight',
      [Language.NL]: 'Lokale boerderijen binnen 30 km, geplukte kruiden, geen vliegproducten',
      [Language.DE]: 'Lokale Höfe in 30 km Umkreis, gesammelte Kräuter, keine Flugware',
    },
    credentials: {
      [Language.EN]: 'Le Cordon Bleu Amsterdam · Former sous chef, De Kas',
      [Language.NL]: 'Le Cordon Bleu Amsterdam · Voormalig sous-chef, De Kas',
      [Language.DE]: 'Le Cordon Bleu Amsterdam · Ehemaliger Sous-Chef, De Kas',
    },
    press: {
      [Language.EN]: 'Featured in Bon Appétit NL, 2024',
      [Language.NL]: 'Gepubliceerd in Bon Appétit NL, 2024',
      [Language.DE]: 'Veröffentlicht in Bon Appétit NL, 2024',
    },
  },
  pastRetreats: [
    { name: 'Stillpoint', url: 'https://example.com/stillpoint' },
    { name: 'De Stilte', url: 'https://example.com/de-stilte' },
    { name: 'Bos & Lucht', url: 'https://example.com/bos-en-lucht' },
    { name: 'Yogagarden NL', url: 'https://example.com/yogagarden' },
  ],
}
