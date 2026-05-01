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

export const MARIJE_GROTE_PANNEN_CHEF: Chef = {
  slug: 'marije-grote-pannen',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'info@studiomamma.nl', // Verified on https://grotepannen.nl/contact/
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Marije van den Oever', // Surname sourced from LinkedIn company page; verify with chef.
  avatar: {
    src: '/images/chefs/marije-grote-pannen/avatar.jpg',
    altKey: 'chef.marije-grote-pannen.avatar',
  },
  tagline: {
    // TODO_FROM_CHEF: confirm preferred tagline (current draft paraphrases site copy "Catering by Studiomamma" + retreat focus).
    [Language.EN]: 'Retreat catering by Studiomamma — full meal packages for multi-day gatherings',
    [Language.NL]: 'Retraitecatering door Studiomamma — totaalpakket maaltijden voor meerdaagse retraites',
  },
  homeBase: { city: 'Roosendaal', region: NlRegion.NOORD_BRABANT }, // From contact page: Raadhuisstraat 99, 4701 PN Roosendaal
  servesRegions: [NlRegion.NOORD_BRABANT], // TODO_FROM_CHEF: confirm which other NL provinces are routinely served (site mentions retreats abroad and a Belgian Ardennes example).
  travelsNationwide: true, // Site states: "Voor ons is het geen probleem als een retraite een langere tijd duurt of in het buitenland plaatsvindt." TODO_FROM_CHEF: confirm willingness for Wijhe/Overijssel specifically.
  groupSize: { min: 2, max: 70 }, // TODO_FROM_CHEF: confirm minimum (site lists no minimum); 70 sourced from Chateau Frandeux example event on retreat catering page.
  languagesSpoken: [Language.NL], // TODO_FROM_CHEF: confirm whether English/German service is available.
  yearsExperience: 0, // TODO_FROM_CHEF: site says "Al jarenlang verzorgt zij het eten voor muzikanten" — request a concrete number.

  rightFor: [RetreatType.YOGA, RetreatType.MEDITATION, RetreatType.WELLNESS], // From retraitecatering page: "retraite of evenement met yoga, meditatie, mindfulness en bezinning". TODO_FROM_CHEF: confirm fit for creative/corporate retreats.
  cuisineStyles: [
    // TODO_FROM_CHEF: confirm cuisine descriptors. Site emphasises flexible/creative ("We zijn erg flexibel en creatief als het op koken aankomt") and vegan menus.
    { [Language.EN]: 'Retreat catering (full-day meal packages)', [Language.NL]: 'Retraitecatering (totaalpakket maaltijden)' },
    { [Language.EN]: 'Flexible & creative', [Language.NL]: 'Flexibel & creatief' },
    { [Language.EN]: 'Vegan-friendly', [Language.NL]: 'Vegan-vriendelijk' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGETARIAN,
    DietaryCapability.VEGAN,
    DietaryCapability.GLUTEN_FREE,
    DietaryCapability.ALLERGY_AWARE,
  ], // From retraitecatering page: "Vegetarisch, vegan, glutenvrij en suikervrij" accommodated. TODO_FROM_CHEF: confirm dairy-free, nut-free, kosher, halal capabilities if applicable.
  dayRate: {
    amountEur: 49, // From /tarieven/: "Voor het bovenstaande pakket hanteren wij prijzen vanaf €49 per persoon per dag" (incl. 9% BTW, excl. dranken)
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD, // TODO_FROM_CHEF: confirm tier — "vanaf" pricing means STANDARD is a starting estimate.
  },

  gallery: {
    hero: {
      src: '/images/chefs/marije-grote-pannen/hero.jpg',
      altKey: 'chef.marije-grote-pannen.hero',
    },
    supporting: [
      { src: '/images/chefs/marije-grote-pannen/gallery-1.jpg', altKey: 'chef.marije-grote-pannen.gallery-1' },
      { src: '/images/chefs/marije-grote-pannen/gallery-2.jpg', altKey: 'chef.marije-grote-pannen.gallery-2' },
      { src: '/images/chefs/marije-grote-pannen/gallery-3.jpg', altKey: 'chef.marije-grote-pannen.gallery-3' },
      // TODO_FROM_CHEF: schema recommends 4–8 supporting images; request 1–5 more high-resolution photos.
    ],
  },
  about: {
    headline: {
      // TODO_FROM_CHEF: confirm headline — current draft is paraphrased from site copy.
      [Language.EN]: 'Full-package retreat catering — breakfast, lunch, dinner, snacks, fruit and dessert',
      [Language.NL]: 'Totaalpakket retraitecatering — ontbijt, lunch, diner, snacks, fruit en dessert',
    },
    paragraphs: [
      {
        // Paragraph paraphrases verbatim site copy: "Voor een retraite verzorgen wij een totaal pakket aan maaltijden", "Bij een retraite of evenement met yoga, meditatie, mindfulness en bezinning zijn de maaltijden een belangrijk onderdeel van de dag", and "Voor ons is het geen probleem als een retraite een langere tijd duurt of in het buitenland plaatsvindt."
        // TODO_FROM_CHEF: review and edit narrative voice / personal backstory.
        [Language.EN]:
          'For retreats, Marije and the Grote Pannen team handle the full meal package: breakfast, lunch, dinner, snacks, fruit and dessert, tailored to the rhythm of the day. Built for retreats and events around yoga, meditation, mindfulness and reflection — where the meals are part of the practice, not a break from it. Multi-day formats and locations abroad are no problem.',
        [Language.NL]:
          'Voor een retraite verzorgt Marije met het Grote Pannen-team het totaalpakket aan maaltijden: ontbijt, lunch, diner, snacks, fruit en dessert, afgestemd op het ritme van de dag. Gemaakt voor retraites en evenementen rond yoga, meditatie, mindfulness en bezinning — waar de maaltijden onderdeel zijn van de beoefening, geen pauze ervan. Meerdaagse formats en locaties in het buitenland zijn geen probleem.',
      },
    ],
  },
  signatureDishes: [], // TODO_FROM_CHEF: site does not list signature dishes verbatim (only image captions like "Wraprolletjes met roomkaas en paprika" and roasted sweet potatoes). Request 3 named signature dishes with notes.
  testimonials: [
    {
      quote: {
        // Verbatim from retraitecatering page (quoted on Grote Pannen website).
        [Language.NL]: 'Telkens weet ze te verrassen met heerlijke gerechten en doet daarbij twee stappen extra',
        [Language.EN]: 'She surprises us every time with delicious dishes and always goes two steps further',
      },
      author: 'Stefan',
      role: {
        // TODO_FROM_CHEF: site shows author "Stefan" without role/organisation — request context (retreat host, client, event).
        [Language.EN]: 'Client (role to be confirmed)',
        [Language.NL]: 'Klant (rol nog te bevestigen)',
      },
    },
  ],

  atAGlance: {
    sourcing: {
      // TODO_FROM_CHEF: site does not describe sourcing/suppliers. Request a one-line sourcing statement (local, organic, suppliers).
      [Language.EN]: 'Sourcing details to be supplied by chef',
      [Language.NL]: 'Herkomst-informatie wordt door de chef aangeleverd',
    },
    credentials: {
      // TODO_FROM_CHEF: site mentions years of catering for musicians but no formal credentials. Request training/certifications.
      [Language.EN]: 'Founder, Grote Pannen / Studiomamma · Roosendaal · longtime musician-tour caterer',
      [Language.NL]: 'Oprichter, Grote Pannen / Studiomamma · Roosendaal · jarenlange ervaring als cateraar voor muzikanten',
    },
    // press: TODO_FROM_CHEF — no press mentions sourced from the site.
  },
  pastRetreats: [], // TODO_FROM_CHEF: site references a Chateau Frandeux event in the Belgian Ardennes but no named retreat partners. Request 3–6 past retreat hosts.
}
