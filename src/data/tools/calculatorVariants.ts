import { CALCULATOR_INPUT_DEFAULTS, ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type { BenchmarkPrice, LocalizedString, VariantConfig } from '@/types/tools'

const VAT_DEFAULTS = {
  pricesIncludeVat: CALCULATOR_INPUT_DEFAULTS.PRICES_INCLUDE_VAT,
  vatPercent: CALCULATOR_INPUT_DEFAULTS.VAT_PERCENT,
} as const

const FOOD_GENERIC: BenchmarkPrice = {
  amounts: [30, 55],
  template: {
    [Language.EN]: 'Retreat-quality food typically runs {0}–{1} per guest per day',
    [Language.NL]: 'Retraitewaardig eten kost meestal {0}–{1} per gast per dag',
    [Language.DE]: 'Retreat-qualifiziertes Essen kostet typischerweise {0}–{1} pro Gast pro Tag',
  },
}

const FACILITATOR_GENERIC: BenchmarkPrice = {
  amounts: [600, 1500, 1500, 3000],
  template: {
    [Language.EN]: 'Total fees paid out to all hired facilitators or guest teachers. European facilitator day rates run {0}–{1}/day; specialist teachers {2}–{3}/day',
    [Language.NL]: 'Totale vergoedingen voor alle ingehuurde begeleiders of gastdocenten. Europese dagtarieven {0}–{1}/dag; specialistische docenten {2}–{3}/dag',
    [Language.DE]: 'Gesamthonorare aller gemieteten Facilitator oder Gastlehrer. Europäische Facilitator-Tagessätze liegen bei {0}–{1}/Tag; Spezialisten {2}–{3}/Tag',
  },
}

const MARKETING_GENERIC: LocalizedString = {
  [Language.EN]: 'Budget for ads, content, supplies, payment processing, and a contingency buffer',
  [Language.NL]: 'Reserveer budget voor advertenties, content, materialen, betalingsverwerking en een buffer',
  [Language.DE]: 'Budget für Anzeigen, Content, Material, Zahlungsabwicklung und einen Puffer',
}

const GENERIC: VariantConfig = {
  variant: ToolVariant.GENERIC,
  defaults: {
    guests: 12, teamCount: CALCULATOR_INPUT_DEFAULTS.TEAM_COUNT,
    nights: 5, pricePerGuest: 1200,
    venuePerNight: 800, foodPerGuestPerDay: 40,
    facilitatorFee: 2500, marketingAndOther: 800,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 5,
    hiresFacilitators: false,
    ...VAT_DEFAULTS,
  },
  benchmarks: {
    pricePerGuest: {
      amounts: [800, 2500],
      template: {
        [Language.EN]: 'Retreats commonly charge {0}–{1} per person depending on duration and positioning',
        [Language.NL]: 'Retraites rekenen doorgaans {0}–{1} per persoon, afhankelijk van duur en positionering',
        [Language.DE]: 'Retreats berechnen üblicherweise {0}–{1} pro Person, abhängig von Dauer und Positionierung',
      },
    },
    foodPerGuestPerDay: FOOD_GENERIC,
    facilitatorFee: FACILITATOR_GENERIC,
    marketingAndOther: MARKETING_GENERIC,
    venuePerNight: {
      amounts: [500, 1200],
      template: {
        [Language.EN]: 'Dutch retreat venues sit roughly {0}–{1} per night for groups of 10–14, including base rent, cleaning and the per-person charge.',
        [Language.NL]: 'Nederlandse retraitelocaties zitten ruwweg {0}–{1} per nacht voor groepen van 10–14, inclusief basishuur, schoonmaak en de prijs per persoon.',
        [Language.DE]: 'Niederländische Retreat-Locations liegen rund {0}–{1} pro Nacht für Gruppen von 10–14 — inkl. Grundmiete, Reinigung und Preis pro Person.',
      },
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
      [Language.EN]: 'A simple way to see if your retreat actually adds up. Pop in your group size, ticket price and the things it costs you to run — the calculator does the rest. Tick the BTW box if your prices are gross. Nothing is saved, nothing is sent; you can copy the link to share with a co-host or accountant.',
      [Language.NL]: 'Een simpele manier om te zien of je retraite uit kan. Vul je groepsgrootte, ticketprijs en de kosten in — de calculator rekent de rest. Vink het BTW-vakje aan als je bruto prijzen invoert. We slaan niets op en versturen niets; je kunt de link kopiëren om met een co-host of accountant mee te kijken.',
      [Language.DE]: 'Ein unkomplizierter Weg, um zu sehen, ob dein Retreat aufgeht. Gib Gruppengröße, Ticketpreis und die Kosten ein — der Rest läuft automatisch. Aktiviere die MwSt.-Option, wenn du Bruttopreise eingibst. Wir speichern nichts und schicken nichts; den Link kannst du an Co-Host oder Steuerberater weitergeben.',
    },
    metaTitle: {
      [Language.EN]: 'Retreat Profitability Calculator — Free Tool',
      [Language.NL]: 'Retraite-winstgevendheidscalculator — Gratis tool',
      [Language.DE]: 'Retreat-Rentabilitätsrechner — Kostenloses Tool',
    },
    metaDescription: {
      [Language.EN]: 'A free, no-signup calculator for European retreat hosts. Check whether your numbers work — including BTW (VAT), team meals, and venue cost for everyone staying.',
      [Language.NL]: 'Een gratis calculator zonder aanmelding voor Europese retraite-organisatoren. Check of je cijfers kloppen — inclusief BTW, eten voor je team en locatiekosten voor iedereen die blijft.',
      [Language.DE]: 'Ein kostenloser Rechner ohne Anmeldung für europäische Retreat-Hosts. Prüf, ob deine Zahlen aufgehen — inklusive MwSt., Verpflegung fürs Team und Location-Kosten für alle Übernachtenden.',
    },
  },
  relatedVariants: [ToolVariant.YOGA, ToolVariant.WELLNESS, ToolVariant.MEDITATION],
}

const YOGA: VariantConfig = {
  variant: ToolVariant.YOGA,
  defaults: {
    guests: 12, teamCount: CALCULATOR_INPUT_DEFAULTS.TEAM_COUNT,
    nights: 5, pricePerGuest: 1200,
    venuePerNight: 750, foodPerGuestPerDay: 40,
    facilitatorFee: 2500, marketingAndOther: 800,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 5,
    hiresFacilitators: false,
    ...VAT_DEFAULTS,
  },
  benchmarks: {
    pricePerGuest: {
      amounts: [900, 1800],
      template: {
        [Language.EN]: 'Yoga retreats typically charge {0}–{1} per person for 5 nights',
        [Language.NL]: 'Yogaretraites rekenen doorgaans {0}–{1} per persoon voor 5 nachten',
        [Language.DE]: 'Yoga-Retreats berechnen typischerweise {0}–{1} pro Person für 5 Nächte',
      },
    },
    foodPerGuestPerDay: FOOD_GENERIC,
    facilitatorFee: FACILITATOR_GENERIC,
    marketingAndOther: MARKETING_GENERIC,
    venuePerNight: {
      amounts: [400, 700, 700, 1100, 1100],
      template: {
        [Language.EN]: 'Per-night rate for a yoga venue + accommodation. Simple retreat lodges {0}–{1}, mid-range {2}–{3}, premium country estates {4}+',
        [Language.NL]: 'Nachtprijs voor yogalocatie + accommodatie. Eenvoudige retraitehuizen {0}–{1}, middenklasse {2}–{3}, premium buitenplaatsen {4}+',
        [Language.DE]: 'Übernachtungspreis für eine Yoga-Location + Unterkunft. Einfache Retreat-Häuser {0}–{1}, Mittelklasse {2}–{3}, Premium-Landgüter ab {4}',
      },
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
      [Language.EN]: 'Pricing your yoga retreat without spreadsheets. Tell us how many students, the venue you have in mind, what you\'ll feed everyone and the fee for any teacher you bring along. We\'ll show you what you take home and how many students need to sign up before it pays for itself.',
      [Language.NL]: 'Prijzen voor je yogaretraite, zonder rekenblad. Vertel hoeveel deelnemers, welke locatie je in gedachten hebt, wat je iedereen voorzet en de vergoeding voor een docent die je meeneemt. We laten zien wat je overhoudt en hoeveel deelnemers nodig zijn voordat de retraite zichzelf terugverdient.',
      [Language.DE]: 'Yoga-Retreat kalkulieren — ohne Tabellen. Sag uns, wie viele Teilnehmer, welche Location, was alle essen und das Honorar für jede mitgebrachte Lehrkraft. Wir zeigen dir, was übrig bleibt und ab welcher Teilnehmerzahl es sich trägt.',
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
    guests: 10, teamCount: CALCULATOR_INPUT_DEFAULTS.TEAM_COUNT,
    nights: 7, pricePerGuest: 1800,
    venuePerNight: 1100, foodPerGuestPerDay: 55,
    facilitatorFee: 4000, marketingAndOther: 1200,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 7,
    hiresFacilitators: false,
    ...VAT_DEFAULTS,
  },
  benchmarks: {
    pricePerGuest: {
      amounts: [1500, 2500],
      template: {
        [Language.EN]: 'Wellness/detox retreats typically charge {0}–{1} per person for 6–8 nights',
        [Language.NL]: 'Wellness-/detoxretraites rekenen {0}–{1} per persoon voor 6–8 nachten',
        [Language.DE]: 'Wellness-/Detox-Retreats berechnen {0}–{1} pro Person für 6–8 Nächte',
      },
    },
    foodPerGuestPerDay: {
      amounts: [45, 70],
      template: {
        [Language.EN]: 'Wellness food (organic, often catered) commonly runs {0}–{1} per guest per day',
        [Language.NL]: 'Wellness-eten (biologisch, vaak gecaterd) kost meestal {0}–{1} per gast per dag',
        [Language.DE]: 'Wellness-Verpflegung (bio, oft gecatert) liegt typischerweise bei {0}–{1} pro Gast pro Tag',
      },
    },
    facilitatorFee: FACILITATOR_GENERIC,
    marketingAndOther: MARKETING_GENERIC,
    venuePerNight: {
      amounts: [900, 1500, 1500, 2200],
      template: {
        [Language.EN]: 'Wellness venues with spa or treatment-room amenities run {0}–{1} per night mid-range, {2}–{3}+ for premium properties',
        [Language.NL]: 'Wellness-locaties met spa of behandelfaciliteiten kosten {0}–{1} per nacht middenklasse, {2}–{3}+ voor premium-eigendommen',
        [Language.DE]: 'Wellness-Locations mit Spa- oder Behandlungsräumen liegen bei {0}–{1}/Nacht (Mittelklasse), {2}–{3}+ für Premium-Anwesen',
      },
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
      [Language.EN]: 'Wellness and detox retreats run longer and cost more to feed — better food, more practitioner time, more nights. The defaults here reflect a real 6–8 night programme so you can see, in a couple of clicks, whether the price you have in mind actually works.',
      [Language.NL]: 'Wellness- en detoxretraites duren langer en kosten meer aan eten — beter voedsel, meer behandeltijd, meer nachten. De uitgangswaarden zijn afgestemd op een realistisch 6–8-nachtenprogramma, zodat je in een paar klikken ziet of je beoogde prijs ook echt klopt.',
      [Language.DE]: 'Wellness- und Detox-Retreats sind länger und teurer im Catering — besseres Essen, mehr Behandlungszeit, mehr Nächte. Die Voreinstellungen entsprechen einem realen 6–8-Nächte-Programm, damit du in wenigen Klicks siehst, ob dein Wunschpreis wirklich aufgeht.',
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
    guests: 14, teamCount: CALCULATOR_INPUT_DEFAULTS.TEAM_COUNT,
    nights: 4, pricePerGuest: 900,
    venuePerNight: 600, foodPerGuestPerDay: 35,
    facilitatorFee: 2000, marketingAndOther: 600,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 4,
    hiresFacilitators: false,
    ...VAT_DEFAULTS,
  },
  benchmarks: {
    pricePerGuest: {
      amounts: [700, 1200],
      template: {
        [Language.EN]: 'Meditation retreats typically charge {0}–{1} per person for 3–5 nights',
        [Language.NL]: 'Meditatieretraites rekenen {0}–{1} per persoon voor 3–5 nachten',
        [Language.DE]: 'Meditations-Retreats berechnen {0}–{1} pro Person für 3–5 Nächte',
      },
    },
    foodPerGuestPerDay: {
      amounts: [25, 45],
      template: {
        [Language.EN]: 'Simple, often vegetarian meditation-retreat food runs {0}–{1} per guest per day',
        [Language.NL]: 'Eenvoudig, vaak vegetarisch eten op meditatieretraite kost {0}–{1} per gast per dag',
        [Language.DE]: 'Einfache, oft vegetarische Meditations-Retreat-Verpflegung liegt bei {0}–{1} pro Gast pro Tag',
      },
    },
    facilitatorFee: FACILITATOR_GENERIC,
    marketingAndOther: MARKETING_GENERIC,
    venuePerNight: {
      amounts: [400, 800],
      template: {
        [Language.EN]: 'Dharma centers and simpler retreat venues run {0}–{1} per night for groups of 12–16. Larger residential centers can sit higher',
        [Language.NL]: 'Dharma-centra en eenvoudige retraitelocaties kosten {0}–{1} per nacht voor groepen van 12–16. Grotere woon-retraitecentra zitten hoger',
        [Language.DE]: 'Dharma-Zentren und einfachere Retreat-Locations kosten {0}–{1} pro Nacht für Gruppen von 12–16. Größere Wohnzentren entsprechend höher',
      },
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
      [Language.EN]: 'Meditation retreats sit gently — shorter, often larger groups, simpler food, lower per-person price. The defaults match a typical 4-night silent or guided programme so you can sense-check the numbers without having to start from scratch.',
      [Language.NL]: 'Meditatieretraites zijn rustiger — korter, vaak grotere groepen, eenvoudiger eten, lagere prijs per persoon. De uitgangswaarden passen bij een typisch 4-nachts stil of begeleid programma, zodat je niet bij nul hoeft te beginnen om je cijfers te checken.',
      [Language.DE]: 'Meditations-Retreats sind ruhiger — kürzer, oft größere Gruppen, einfacheres Essen, geringerer Preis pro Person. Die Voreinstellungen entsprechen einem typischen 4-Nächte-Programm — still oder begleitet —, damit du nicht bei Null anfangen musst.',
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
    guests: 6, teamCount: CALCULATOR_INPUT_DEFAULTS.TEAM_COUNT,
    nights: 4, pricePerGuest: 3200,
    venuePerNight: 1200, foodPerGuestPerDay: 50,
    facilitatorFee: 5000, marketingAndOther: 1500,
    travel: 0, insurance: 0,
    paymentFeePercent: 3, planningDays: 7,
    hiresFacilitators: false,
    ...VAT_DEFAULTS,
  },
  benchmarks: {
    pricePerGuest: {
      amounts: [2000, 5000],
      template: {
        [Language.EN]: 'Coaching retreats and intensives typically charge {0}–{1} per person for 3–5 nights',
        [Language.NL]: 'Coaching-retraites en intensives rekenen {0}–{1} per persoon voor 3–5 nachten',
        [Language.DE]: 'Coaching-Retreats und Intensives berechnen {0}–{1} pro Person für 3–5 Nächte',
      },
    },
    foodPerGuestPerDay: {
      amounts: [45, 80],
      template: {
        [Language.EN]: 'Coaching retreats often use higher-end catering — {0}–{1} per guest per day is common',
        [Language.NL]: 'Coaching-retraites gebruiken vaak hoogwaardige catering — {0}–{1} per gast per dag is gebruikelijk',
        [Language.DE]: 'Coaching-Retreats nutzen oft gehobenes Catering — {0}–{1} pro Gast pro Tag ist üblich',
      },
    },
    facilitatorFee: {
      amounts: [1500, 3000],
      template: {
        [Language.EN]: 'Total fees for senior coaches you hire — {0}–{1}/day per coach',
        [Language.NL]: 'Totale vergoedingen voor senior coaches die je inhuurt — {0}–{1}/dag per coach',
        [Language.DE]: 'Gesamthonorare für gebuchte Senior-Coaches — {0}–{1}/Tag pro Coach',
      },
    },
    marketingAndOther: MARKETING_GENERIC,
    venuePerNight: {
      amounts: [900, 1800, 1800],
      template: {
        [Language.EN]: 'Boutique venues for 4–8 guest coaching intensives commonly run {0}–{1} per night; executive-grade properties run {2}+',
        [Language.NL]: 'Boutique-locaties voor coaching-intensives van 4–8 gasten kosten doorgaans {0}–{1} per nacht; executive-klasse vanaf {2}',
        [Language.DE]: 'Boutique-Locations für 4–8 Coaching-Intensivs liegen typischerweise bei {0}–{1} pro Nacht; Executive-Anwesen ab {2}',
      },
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
      [Language.EN]: 'Coaching retreats run differently — smaller cohorts, higher tickets, lots of 1:1 time. The defaults here match that shape so you can see what a 4–8 person intensive needs to charge before it works for you and the people in the room.',
      [Language.NL]: 'Coachingretraites zijn anders — kleinere cohorten, hogere tickets, veel 1-op-1-tijd. De uitgangswaarden passen daarbij, zodat je in één blik ziet wat een intensive met 4–8 deelnemers moet rekenen voordat het werkt — voor jou én de mensen in de zaal.',
      [Language.DE]: 'Coaching-Retreats funktionieren anders — kleinere Gruppen, höhere Tickets, viel 1:1-Zeit. Die Voreinstellungen sind darauf abgestimmt: du siehst direkt, was ein Intensive mit 4–8 Teilnehmern verlangen muss, damit es für dich und die Leute im Raum aufgeht.',
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
