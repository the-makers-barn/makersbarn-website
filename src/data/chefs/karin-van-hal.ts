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

// Source crawl: https://cuisinepachamama.com/ (single-page site, captured 2026-05-01).
// All copy below is either verbatim from the site or marked TODO_FROM_CHEF for follow-up.
export const KARIN_VAN_HAL_CHEF: Chef = {
  slug: 'karin-van-hal',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'info@cuisinepachamama.com',
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Karin van Hal',
  avatar: {
    src: '/images/chefs/karin-van-hal/avatar.jpeg',
    altKey: 'chef.karin-van-hal.avatar',
  },
  // Verbatim site tagline: "Holistic Plant-Based Food With A Creative Touch".
  tagline: {
    [Language.EN]: 'Holistic plant-based food with a creative touch',
    [Language.NL]: 'Holistisch plantaardig eten met een creatieve touch',
  },
  // TODO_FROM_CHEF: site says "homebase is still in The Netherlands" without naming a city. Confirm city.
  homeBase: { city: 'Netherlands', region: NlRegion.OVERIJSSEL },
  // TODO_FROM_CHEF: site says she travels around Europe with her campervan; confirm specific NL regions served.
  servesRegions: [NlRegion.OVERIJSSEL, NlRegion.GELDERLAND],
  travelsNationwide: true, // Verbatim: "with my campervan Gaia I'm free to go wherever I'm called to."
  groupSize: { min: 8, max: 24 }, // TODO_FROM_CHEF: not stated on site, defaulted.
  languagesSpoken: [Language.NL, Language.EN], // TODO_FROM_CHEF: confirm DE/other; site is English-only.
  yearsExperience: 5, // TODO_FROM_CHEF: site does not state years; defaulted.

  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.MEDITATION],
  // Verbatim styles from site copy: "plant-based", "holistic", "creative".
  cuisineStyles: [
    { [Language.EN]: 'Plant-based', [Language.NL]: 'Plantaardig' },
    { [Language.EN]: 'Holistic', [Language.NL]: 'Holistisch' },
    { [Language.EN]: 'Creative', [Language.NL]: 'Creatief' },
  ],
  // TODO_FROM_CHEF: site emphasises plant-based + accommodating "special needs" (Carina testimonial).
  // Confirm full dietary scope (gluten-free, allergen handling, raw, etc.).
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.ALLERGY_AWARE,
  ],
  // TODO_FROM_CHEF: pricing not published on site; defaulted.
  dayRate: {
    amountEur: 55,
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD,
  },

  gallery: {
    hero: {
      src: '/images/chefs/karin-van-hal/hero.jpg',
      altKey: 'chef.karin-van-hal.hero',
    },
    supporting: [
      { src: '/images/chefs/karin-van-hal/gallery-1.jpg', altKey: 'chef.karin-van-hal.gallery-1' },
      { src: '/images/chefs/karin-van-hal/gallery-2.jpg', altKey: 'chef.karin-van-hal.gallery-2' },
      { src: '/images/chefs/karin-van-hal/gallery-3.jpg', altKey: 'chef.karin-van-hal.gallery-3' },
    ],
  },
  about: {
    // Headline derived directly from the site tagline; no fabrication.
    headline: {
      [Language.EN]: 'Bringing the world to your plate, one plant-based plate at a time.',
      [Language.NL]: 'De wereld op je bord brengen, telkens weer één plantaardig gerecht tegelijk.',
    },
    paragraphs: [
      {
        // Verbatim from site about section ("My name is Karin van Hal..."), lightly stitched into prose.
        [Language.EN]:
          "My name is Karin van Hal and I'd love to bring the world to your plate. With Cuisine Pachamama I create the most delicious, colourful and healthy plant-based meals in harmony with Mother Nature. My passion for nature and food started already at a young age. I'm born as a Dutch farmer's girl and at our family home the kitchen has always been the central place in the house — a place where everyone felt welcome for a cup of coffee, a warm soup or a freshly baked piece of my mum's apple pie.",
        [Language.NL]:
          'Mijn naam is Karin van Hal en ik breng graag de wereld op jouw bord. Met Cuisine Pachamama maak ik de heerlijkste, kleurrijkste en gezondste plantaardige gerechten in harmonie met Moeder Natuur. Mijn liefde voor de natuur en voor eten begon al jong. Ik ben geboren als Nederlands boerendochter en thuis was de keuken altijd het hart van het huis — een plek waar iedereen welkom was voor een kop koffie, een warme soep of een vers stuk appeltaart van mijn moeder.',
      },
      {
        [Language.EN]:
          "I took those cozy kitchen feelings with me and up until this day the kitchen is my favourite place. The smells, the colours, the flavours; cooking is a magical ritual of exploring and discovering new pathways time and time again. Every meal is a journey in itself — an adventure into the unknown as no dish ever tastes the same. I cook at retreats, spiritual festivals and communities around Europe. My homebase is still in The Netherlands, but with my campervan Gaia I'm free to go wherever I'm called to.",
        [Language.NL]:
          'Die gezellige keukenherinneringen heb ik meegenomen en tot op de dag van vandaag is de keuken mijn favoriete plek. De geuren, de kleuren, de smaken; koken is voor mij een magisch ritueel waarin ik telkens weer nieuwe wegen ontdek. Elke maaltijd is een reis op zich — een avontuur in het onbekende, omdat geen enkel gerecht ooit hetzelfde smaakt. Ik kook op retraites, spirituele festivals en in gemeenschappen door heel Europa. Mijn thuisbasis ligt in Nederland, maar met mijn camper Gaia ben ik vrij om te gaan waar ik geroepen word.',
      },
    ],
  },
  // TODO_FROM_CHEF: only "poke bowl" referenced as a dish in site imagery (no full signature menu).
  // Empty until chef shares 3-4 signature dishes with notes.
  signatureDishes: [],
  testimonials: [
    {
      // Verbatim from cuisinepachamama.com testimonial section.
      quote: {
        [Language.EN]:
          'Karin was the most caring, pleasant and talented cook we could have wished for! Not only did she prepare nourishing, delicious and beautifully arranged dishes — she also integrated seamlessly into our group, was very flexible with the timing and made sure to accommodate also to special needs. We will definitely book her again next time and can\'t wait to try more of her amazing food.',
      },
      author: 'Carina',
      role: {
        [Language.EN]: 'Yoga teacher, private yoga retreat at YogaBee',
        [Language.NL]: 'Yogadocent, privé yoga retraite bij YogaBee',
      },
    },
    {
      quote: {
        [Language.EN]:
          "During a yoga weekend at YogaBee in Zeeland (Netherlands) Karin took care of the food. She's a super sweet woman and great company who absolutely spoiled us with her cooking talent. Time and time again she managed to surprise us with her super delicious and creative dishes, full of flavours and prepared with only fresh ingredients. After every yoga session a beautifully set table was waiting for us. Well done!",
      },
      author: 'Liesbeth',
      role: {
        [Language.EN]: 'Participant, Happy Soul Travel yoga retreat',
        [Language.NL]: 'Deelnemer, Happy Soul Travel yoga retraite',
      },
    },
    {
      quote: {
        [Language.EN]:
          "We loved Karin's healthy, plant-based, organic cuisine. It was just perfect for our yoga retreat. Further, she was punctual and always in a good mood, which is important for a private chef at a yoga retreat as well. We will totally book her again. Thank you!",
      },
      author: 'Josephine',
      role: {
        [Language.EN]: 'Private retreat organiser, YogaBee',
        [Language.NL]: 'Organisator privéretraite, YogaBee',
      },
    },
    {
      quote: {
        [Language.EN]:
          'Before and after every yoga class, Karin presented us the most delicious, honest and inspiring dishes!!',
      },
      author: 'William & Karin',
      role: {
        [Language.EN]: 'Participants, Happy Soul Travel yoga retreat',
        [Language.NL]: 'Deelnemers, Happy Soul Travel yoga retraite',
      },
    },
    {
      quote: {
        [Language.EN]:
          "Karin's meals during our yoga retreats have been an absolute delight each time. The flavours and textures combined with a beautifully selected presentation has made every mealtime special. Karin is also very easy to work with, reliable and trustworthy at every step of the way.",
      },
      author: 'Liisa',
      role: {
        [Language.EN]: 'Yoga teacher, Happy Soul Travel',
        [Language.NL]: 'Yogadocent, Happy Soul Travel',
      },
    },
  ],

  atAGlance: {
    // Verbatim from site: "fresh ingredients" (Liesbeth testimonial), "organic cuisine" (Josephine).
    sourcing: {
      [Language.EN]: 'Fresh, organic, plant-based ingredients in harmony with Mother Nature',
      [Language.NL]: 'Verse, biologische, plantaardige ingrediënten in harmonie met Moeder Natuur',
    },
    // TODO_FROM_CHEF: no formal credentials listed on site. Replace with culinary training / certifications.
    credentials: {
      [Language.EN]: 'Self-taught Dutch farmer\'s daughter · Travelling retreat chef across Europe',
      [Language.NL]: 'Autodidact, Nederlandse boerendochter · Reizende retraite-chef door heel Europa',
    },
    // TODO_FROM_CHEF: no press references on site.
  },
  // Partners listed verbatim on site: Happy Soul Travel, Sadhaka, YogaBee, Ecolonie.
  pastRetreats: [
    { name: 'Happy Soul Travel' },
    { name: 'Sadhaka' },
    { name: 'YogaBee' },
    { name: 'Ecolonie' },
  ],
}
