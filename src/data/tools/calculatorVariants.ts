import { ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type { VariantConfig } from '@/types/tools'

const GENERIC: VariantConfig = {
  variant: ToolVariant.GENERIC,
  defaults: {
    guests: 12, nights: 5, pricePerGuest: 1200,
    venuePerNight: 800, foodPerGuestPerDay: 40,
    facilitatorFee: 2500, marketingAndOther: 800,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 5,
    hiresFacilitators: false,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Retreats commonly charge €800–€2,500 per person depending on duration and positioning',
      [Language.NL]: 'Retraites rekenen doorgaans €800–€2.500 per persoon, afhankelijk van duur en positionering',
      [Language.DE]: 'Retreats berechnen üblicherweise €800–€2.500 pro Person, abhängig von Dauer und Positionierung',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Retreat-quality food typically runs €30–€55 per guest per day',
      [Language.NL]: 'Retraitewaardig eten kost meestal €30–€55 per gast per dag',
      [Language.DE]: 'Retreat-qualifiziertes Essen kostet typischerweise €30–€55 pro Gast pro Tag',
    },
    facilitatorFee: {
      [Language.EN]: 'Total fees paid out to all hired facilitators or guest teachers. European facilitator day rates run €600–€1,500/day; specialist teachers €1,500–€3,000/day',
      [Language.NL]: 'Totale vergoedingen voor alle ingehuurde begeleiders of gastdocenten. Europese dagtarieven €600–€1.500/dag; specialistische docenten €1.500–€3.000/dag',
      [Language.DE]: 'Gesamthonorare aller gemieteten Facilitator oder Gastlehrer. Europäische Facilitator-Tagessätze liegen bei €600–€1.500/Tag; Spezialisten €1.500–€3.000/Tag',
    },
    marketingAndOther: {
      [Language.EN]: 'Budget for ads, content, supplies, payment processing, and a contingency buffer',
      [Language.NL]: 'Reserveer budget voor advertenties, content, materialen, betalingsverwerking en een buffer',
      [Language.DE]: 'Budget für Anzeigen, Content, Material, Zahlungsabwicklung und einen Puffer',
    },
    venuePerNight: {
      [Language.EN]: 'Per-night rate for venue + accommodation. Dutch retreat venues commonly run €500–€1,200 per night for groups of 10–14',
      [Language.NL]: 'Nachtprijs voor locatie + accommodatie. Nederlandse retraiteplekken kosten doorgaans €500–€1.200 per nacht voor groepen van 10–14',
      [Language.DE]: 'Übernachtungspreis für Location + Unterkunft. Niederländische Retreat-Locations liegen typischerweise bei €500–€1.200 pro Nacht für Gruppen von 10–14',
    },
  },
  copy: {
    heroEyebrow: {
      [Language.EN]: 'Free tool', [Language.NL]: 'Gratis tool', [Language.DE]: 'Kostenloses Tool',
    },
    heroTitle: {
      [Language.EN]: 'Retreat Profitability Calculator',
      [Language.NL]: 'Retraite-winstgevendheidscalculator',
      [Language.DE]: 'Retreat-Rentabilitätsrechner',
    },
    heroIntro: {
      [Language.EN]: 'Enter your guest count, price, and costs. See live revenue, profit margin, profit per workday, and breakeven occupancy. No signup required, share your numbers via link.',
      [Language.NL]: 'Voer aantal gasten, prijs en kosten in. Zie live omzet, marge, winst per werkdag en break-evenbezetting. Geen aanmelding nodig, deel je cijfers via een link.',
      [Language.DE]: 'Gib Gästezahl, Preis und Kosten ein. Sieh live Umsatz, Marge, Gewinn pro Arbeitstag und Break-even-Auslastung. Ohne Anmeldung, Zahlen per Link teilbar.',
    },
    metaTitle: {
      [Language.EN]: 'Retreat Profitability Calculator — Free Tool',
      [Language.NL]: 'Retraite-winstgevendheidscalculator — Gratis tool',
      [Language.DE]: 'Retreat-Rentabilitätsrechner — Kostenloses Tool',
    },
    metaDescription: {
      [Language.EN]: 'Free interactive calculator for retreat facilitators. Plan revenue, costs, profit margin, breakeven, and per-workday earnings. Share results via link.',
      [Language.NL]: 'Gratis interactieve calculator voor retraitebegeleiders. Plan omzet, kosten, marge, break-even en winst per werkdag. Deel resultaten via een link.',
      [Language.DE]: 'Kostenloser interaktiver Rechner für Retreat-Facilitator. Plane Umsatz, Kosten, Marge, Break-even und Gewinn pro Arbeitstag. Teile per Link.',
    },
  },
  relatedVariants: [ToolVariant.YOGA, ToolVariant.WELLNESS, ToolVariant.MEDITATION],
}

const YOGA: VariantConfig = {
  variant: ToolVariant.YOGA,
  defaults: {
    guests: 12, nights: 5, pricePerGuest: 1200,
    venuePerNight: 750, foodPerGuestPerDay: 40,
    facilitatorFee: 2500, marketingAndOther: 800,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 5,
    hiresFacilitators: false,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Yoga retreats typically charge €900–€1,800 per person for 5 nights',
      [Language.NL]: 'Yogaretraites rekenen doorgaans €900–€1.800 per persoon voor 5 nachten',
      [Language.DE]: 'Yoga-Retreats berechnen typischerweise €900–€1.800 pro Person für 5 Nächte',
    },
    foodPerGuestPerDay: GENERIC.benchmarks.foodPerGuestPerDay,
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venuePerNight: {
      [Language.EN]: 'Per-night rate for a yoga venue + accommodation. Simple retreat lodges €400–€700, mid-range €700–€1,100, premium country estates €1,100+',
      [Language.NL]: 'Nachtprijs voor yogalocatie + accommodatie. Eenvoudige retraitehuizen €400–€700, middenklasse €700–€1.100, premium buitenplaatsen €1.100+',
      [Language.DE]: 'Übernachtungspreis für eine Yoga-Location + Unterkunft. Einfache Retreat-Häuser €400–€700, Mittelklasse €700–€1.100, Premium-Landgüter ab €1.100',
    },
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Yoga Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator yogaretraite',
      [Language.DE]: 'Yoga-Retreat-Preisrechner',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your yoga retreat? Enter your guest count, nightly venue cost, food, and facilitator fee. The calculator shows revenue, profit margin, and the minimum guest count needed to break even.',
      [Language.NL]: 'Hoe prijs je je yogaretraite? Voer aantal gasten, locatiekosten, eten en docentenvergoeding in. De calculator toont omzet, marge en minimaal aantal gasten om break-even te draaien.',
      [Language.DE]: 'Wie sollst du dein Yoga-Retreat kalkulieren? Gib Gäste, Locationkosten, Essen und Honorar ein. Der Rechner zeigt Umsatz, Marge und Mindest-Teilnehmerzahl für Break-even.',
    },
    metaTitle: {
      [Language.EN]: 'Yoga Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator yogaretraite — Gratis tool',
      [Language.DE]: 'Yoga-Retreat-Preisrechner — Kostenloses Tool',
    },
    metaDescription: {
      [Language.EN]: 'How to price a yoga retreat — free interactive calculator. Plan guests, costs, margin, and breakeven. Includes industry benchmark ranges.',
      [Language.NL]: 'Hoe prijs je een yogaretraite — gratis interactieve calculator. Plan gasten, kosten, marge en break-even. Inclusief branche-benchmarks.',
      [Language.DE]: 'Wie ein Yoga-Retreat kalkulieren — kostenloser Rechner. Plane Gäste, Kosten, Marge und Break-even. Inklusive Branchen-Benchmarks.',
    },
  },
  relatedVariants: [ToolVariant.MEDITATION, ToolVariant.WELLNESS, ToolVariant.GENERIC],
}

const WELLNESS: VariantConfig = {
  variant: ToolVariant.WELLNESS,
  defaults: {
    guests: 10, nights: 7, pricePerGuest: 1800,
    venuePerNight: 1100, foodPerGuestPerDay: 55,
    facilitatorFee: 4000, marketingAndOther: 1200,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 7,
    hiresFacilitators: false,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Wellness/detox retreats typically charge €1,500–€2,500 per person for 6–8 nights',
      [Language.NL]: 'Wellness-/detoxretraites rekenen €1.500–€2.500 per persoon voor 6–8 nachten',
      [Language.DE]: 'Wellness-/Detox-Retreats berechnen €1.500–€2.500 pro Person für 6–8 Nächte',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Wellness food (organic, often catered) commonly runs €45–€70 per guest per day',
      [Language.NL]: 'Wellness-eten (biologisch, vaak gecaterd) kost meestal €45–€70 per gast per dag',
      [Language.DE]: 'Wellness-Verpflegung (bio, oft gecatert) liegt typischerweise bei €45–€70 pro Gast pro Tag',
    },
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venuePerNight: {
      [Language.EN]: 'Wellness venues with spa or treatment-room amenities run €900–€1,500 per night mid-range, €1,500–€2,200+ for premium properties',
      [Language.NL]: 'Wellness-locaties met spa of behandelfaciliteiten kosten €900–€1.500 per nacht middenklasse, €1.500–€2.200+ voor premium-eigendommen',
      [Language.DE]: 'Wellness-Locations mit Spa- oder Behandlungsräumen liegen bei €900–€1.500/Nacht (Mittelklasse), €1.500–€2.200+ für Premium-Anwesen',
    },
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Wellness Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator wellnessretraite',
      [Language.DE]: 'Wellness-Retreat-Preisrechner',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your wellness or detox retreat? Wellness retreats run longer and pricier than yoga, with higher food and facilitator costs. This calculator shows your full P&L with realistic wellness defaults.',
      [Language.NL]: 'Hoe prijs je je wellness- of detoxretraite? Wellnessretraites duren langer en zijn duurder dan yoga, met hogere kosten voor eten en begeleiding. Deze calculator toont je volledige P&L met realistische wellness-uitgangswaarden.',
      [Language.DE]: 'Wie kalkulierst du dein Wellness- oder Detox-Retreat? Wellness-Retreats sind länger und teurer als Yoga, mit höheren Verpflegungs- und Honorarkosten. Dieser Rechner zeigt deine volle GuV mit realistischen Wellness-Werten.',
    },
    metaTitle: {
      [Language.EN]: 'Wellness Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator wellnessretraite — Gratis tool',
      [Language.DE]: 'Wellness-Retreat-Preisrechner — Kostenloses Tool',
    },
    metaDescription: {
      [Language.EN]: 'Price your wellness or detox retreat — free P&L calculator. Defaults tuned for 6–8 night wellness retreats. Plan margin, breakeven, and per-workday profit.',
      [Language.NL]: 'Prijs je wellness- of detoxretraite — gratis P&L-calculator. Standaardwaarden afgestemd op 6–8 nachten. Plan marge, break-even en winst per werkdag.',
      [Language.DE]: 'Kalkuliere dein Wellness-Retreat — kostenloser GuV-Rechner. Voreinstellungen für 6–8 Nächte. Plane Marge, Break-even und Gewinn pro Arbeitstag.',
    },
  },
  relatedVariants: [ToolVariant.YOGA, ToolVariant.MEDITATION, ToolVariant.GENERIC],
}

const MEDITATION: VariantConfig = {
  variant: ToolVariant.MEDITATION,
  defaults: {
    guests: 14, nights: 4, pricePerGuest: 900,
    venuePerNight: 600, foodPerGuestPerDay: 35,
    facilitatorFee: 2000, marketingAndOther: 600,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 4,
    hiresFacilitators: false,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Meditation retreats typically charge €700–€1,200 per person for 3–5 nights',
      [Language.NL]: 'Meditatieretraites rekenen €700–€1.200 per persoon voor 3–5 nachten',
      [Language.DE]: 'Meditations-Retreats berechnen €700–€1.200 pro Person für 3–5 Nächte',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Simple, often vegetarian meditation-retreat food runs €25–€45 per guest per day',
      [Language.NL]: 'Eenvoudig, vaak vegetarisch eten op meditatieretraite kost €25–€45 per gast per dag',
      [Language.DE]: 'Einfache, oft vegetarische Meditations-Retreat-Verpflegung liegt bei €25–€45 pro Gast pro Tag',
    },
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venuePerNight: {
      [Language.EN]: 'Dharma centers and simpler retreat venues run €400–€800 per night for groups of 12–16. Larger residential centers can sit higher',
      [Language.NL]: 'Dharma-centra en eenvoudige retraitelocaties kosten €400–€800 per nacht voor groepen van 12–16. Grotere woon-retraitecentra zitten hoger',
      [Language.DE]: 'Dharma-Zentren und einfachere Retreat-Locations kosten €400–€800 pro Nacht für Gruppen von 12–16. Größere Wohnzentren entsprechend höher',
    },
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Meditation Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator meditatieretraite',
      [Language.DE]: 'Meditations-Retreat-Preisrechner',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your meditation retreat? Meditation retreats are usually shorter, larger groups, lower per-person price than wellness. The defaults reflect typical 4-night silent or guided meditation programs.',
      [Language.NL]: 'Hoe prijs je je meditatieretraite? Meditatieretraites zijn meestal korter, grotere groepen, lagere prijs per persoon dan wellness. De uitgangswaarden weerspiegelen typische 4-nachts stille of begeleide programma\'s.',
      [Language.DE]: 'Wie kalkulierst du dein Meditations-Retreat? Meditations-Retreats sind meist kürzer, mit größeren Gruppen und geringerem Preis pro Person als Wellness. Die Voreinstellungen entsprechen typischen 4-Nächte-Programmen.',
    },
    metaTitle: {
      [Language.EN]: 'Meditation Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator meditatieretraite — Gratis tool',
      [Language.DE]: 'Meditations-Retreat-Preisrechner — Kostenloses Tool',
    },
    metaDescription: {
      [Language.EN]: 'Price your meditation retreat — free P&L calculator. Defaults tuned for 3–5 night meditation programs. Plan revenue, margin, breakeven.',
      [Language.NL]: 'Prijs je meditatieretraite — gratis P&L-calculator. Standaardwaarden voor 3–5-nachtprogramma\'s. Plan omzet, marge, break-even.',
      [Language.DE]: 'Kalkuliere dein Meditations-Retreat — kostenloser Rechner. Voreinstellungen für 3–5 Nächte. Plane Umsatz, Marge, Break-even.',
    },
  },
  relatedVariants: [ToolVariant.YOGA, ToolVariant.WELLNESS, ToolVariant.GENERIC],
}

const COACHING: VariantConfig = {
  variant: ToolVariant.COACHING,
  defaults: {
    guests: 6, nights: 4, pricePerGuest: 3200,
    venuePerNight: 1200, foodPerGuestPerDay: 50,
    facilitatorFee: 5000, marketingAndOther: 1500,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 7,
    hiresFacilitators: false,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Coaching retreats and intensives typically charge €2,000–€5,000 per person for 3–5 nights',
      [Language.NL]: 'Coaching-retraites en intensives rekenen €2.000–€5.000 per persoon voor 3–5 nachten',
      [Language.DE]: 'Coaching-Retreats und Intensives berechnen €2.000–€5.000 pro Person für 3–5 Nächte',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Coaching retreats often use higher-end catering — €45–€80 per guest per day is common',
      [Language.NL]: 'Coaching-retraites gebruiken vaak hoogwaardige catering — €45–€80 per gast per dag is gebruikelijk',
      [Language.DE]: 'Coaching-Retreats nutzen oft gehobenes Catering — €45–€80 pro Gast pro Tag ist üblich',
    },
    facilitatorFee: {
      [Language.EN]: 'Total fees for senior coaches you hire — €1,500–€3,000/day per coach',
      [Language.NL]: 'Totale vergoedingen voor senior coaches die je inhuurt — €1.500–€3.000/dag per coach',
      [Language.DE]: 'Gesamthonorare für gebuchte Senior-Coaches — €1.500–€3.000/Tag pro Coach',
    },
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venuePerNight: {
      [Language.EN]: 'Boutique venues for 4–8 guest coaching intensives commonly run €900–€1,800 per night; executive-grade properties run €1,800+',
      [Language.NL]: 'Boutique-locaties voor coaching-intensives van 4–8 gasten kosten doorgaans €900–€1.800 per nacht; executive-klasse vanaf €1.800',
      [Language.DE]: 'Boutique-Locations für 4–8 Coaching-Intensivs liegen typischerweise bei €900–€1.800 pro Nacht; Executive-Anwesen ab €1.800',
    },
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Coaching Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator coachingretraite',
      [Language.DE]: 'Coaching-Retreat-Preisrechner',
    },
    heroIntro: {
      [Language.EN]: 'Pricing a coaching retreat or intensive is different from group wellness work — smaller groups, higher per-person prices, more 1:1 time. This calculator is tuned for coaching economics.',
      [Language.NL]: 'Een coachingretraite of intensive prijzen is anders dan groepswellness — kleinere groepen, hogere prijs per persoon, meer 1-op-1-tijd. Deze calculator is afgestemd op coaching-economie.',
      [Language.DE]: 'Ein Coaching-Retreat oder Intensive zu kalkulieren unterscheidet sich von Gruppen-Wellness — kleinere Gruppen, höherer Preis pro Person, mehr 1:1-Zeit. Dieser Rechner ist auf Coaching abgestimmt.',
    },
    metaTitle: {
      [Language.EN]: 'Coaching Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator coachingretraite — Gratis tool',
      [Language.DE]: 'Coaching-Retreat-Preisrechner — Kostenloses Tool',
    },
    metaDescription: {
      [Language.EN]: 'Price your coaching retreat or intensive — free P&L calculator. Defaults for 4–8 guest, 3–5 night programs. Plan margin, breakeven, per-workday profit.',
      [Language.NL]: 'Prijs je coachingretraite of intensive — gratis P&L-calculator. Standaardwaarden voor 4–8 gasten, 3–5 nachten. Plan marge, break-even, winst per werkdag.',
      [Language.DE]: 'Kalkuliere dein Coaching-Retreat — kostenloser Rechner. Voreinstellungen für 4–8 Gäste, 3–5 Nächte. Plane Marge, Break-even, Gewinn pro Arbeitstag.',
    },
  },
  relatedVariants: [ToolVariant.WELLNESS, ToolVariant.MEDITATION, ToolVariant.GENERIC],
}

export const CALCULATOR_VARIANTS: Record<ToolVariant, VariantConfig> = {
  [ToolVariant.GENERIC]: GENERIC,
  [ToolVariant.YOGA]: YOGA,
  [ToolVariant.WELLNESS]: WELLNESS,
  [ToolVariant.MEDITATION]: MEDITATION,
  [ToolVariant.COACHING]: COACHING,
}
