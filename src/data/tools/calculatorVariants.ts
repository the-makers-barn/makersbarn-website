import { RetreatRole, ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type { VariantConfig } from '@/types/tools'

const GENERIC: VariantConfig = {
  variant: ToolVariant.GENERIC,
  defaults: {
    guests: 12, nights: 5, pricePerGuest: 1200,
    venuePerNight: 800, foodPerGuestPerDay: 40,
    facilitatorFee: 2500, marketingAndOther: 800,
    coFacilitators: 0, travel: 0, insurance: 150,
    paymentFeePercent: 3, planningDays: 5,
    role: RetreatRole.SOLO,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Retreats commonly charge €800–€2,500 per person depending on duration and positioning',
      [Language.NL]: 'Retraites rekenen doorgaans €800–€2.500 per persoon, afhankelijk van duur en positionering',
      [Language.DE]: 'Retreats berechnen üblicherweise €800–€2.500 pro Person, abhängig von Dauer und Positionierung',
      [Language.ES]: 'Los retiros suelen cobrar €800–€2.500 por persona según duración y posicionamiento',
      [Language.FR]: 'Les retraites facturent généralement 800–2 500 € par personne selon la durée et le positionnement',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Retreat-quality food typically runs €30–€55 per guest per day',
      [Language.NL]: 'Retraitewaardig eten kost meestal €30–€55 per gast per dag',
      [Language.DE]: 'Retreat-qualifiziertes Essen kostet typischerweise €30–€55 pro Gast pro Tag',
      [Language.ES]: 'La comida de calidad de retiro suele costar €30–€55 por huésped por día',
      [Language.FR]: 'Une restauration de qualité retraite coûte généralement 30–55 € par invité par jour',
    },
    facilitatorFee: {
      [Language.EN]: 'Total fee for the lead facilitator(s) you hire. European facilitator day rates run €600–€1,500/day; specialist teachers €1,500–€3,000/day',
      [Language.NL]: 'Totale vergoeding voor de hoofdbegeleider(s) die je inhuurt. Europese begeleider-dagtarieven €600–€1.500/dag; specialistische docenten €1.500–€3.000/dag',
      [Language.DE]: 'Total fee for the lead facilitator(s) you hire. European facilitator day rates run €600–€1,500/day; specialist teachers €1,500–€3,000/day',
      [Language.ES]: 'Total fee for the lead facilitator(s) you hire. European facilitator day rates run €600–€1,500/day; specialist teachers €1,500–€3,000/day',
      [Language.FR]: 'Total fee for the lead facilitator(s) you hire. European facilitator day rates run €600–€1,500/day; specialist teachers €1,500–€3,000/day',
    },
    marketingAndOther: {
      [Language.EN]: 'Budget for ads, content, supplies, payment processing, and a contingency buffer',
      [Language.NL]: 'Reserveer budget voor advertenties, content, materialen, betalingsverwerking en een buffer',
      [Language.DE]: 'Budget für Anzeigen, Content, Material, Zahlungsabwicklung und einen Puffer',
      [Language.ES]: 'Presupuesta para anuncios, contenido, materiales, procesamiento de pagos y un margen',
      [Language.FR]: 'Prévoyez un budget pour publicités, contenu, fournitures, frais de paiement et imprévus',
    },
    venuePerNight: {
      [Language.EN]: 'Per-night rate for venue + accommodation. Dutch retreat venues commonly run €500–€1,200 per night for groups of 10–14',
      [Language.NL]: 'Nachtprijs voor locatie + accommodatie. Nederlandse retraiteplekken kosten doorgaans €500–€1.200 per nacht voor groepen van 10–14',
      [Language.DE]: 'Per-night rate for venue + accommodation. Dutch retreat venues commonly run €500–€1,200 per night for groups of 10–14',
      [Language.ES]: 'Per-night rate for venue + accommodation. Dutch retreat venues commonly run €500–€1,200 per night for groups of 10–14',
      [Language.FR]: 'Per-night rate for venue + accommodation. Dutch retreat venues commonly run €500–€1,200 per night for groups of 10–14',
    },
  },
  copy: {
    heroEyebrow: {
      [Language.EN]: 'Free tool', [Language.NL]: 'Gratis tool', [Language.DE]: 'Kostenloses Tool',
      [Language.ES]: 'Herramienta gratuita', [Language.FR]: 'Outil gratuit',
    },
    heroTitle: {
      [Language.EN]: 'Retreat Profitability Calculator',
      [Language.NL]: 'Retraite-winstgevendheidscalculator',
      [Language.DE]: 'Retreat-Rentabilitätsrechner',
      [Language.ES]: 'Calculadora de rentabilidad de retiros',
      [Language.FR]: 'Calculateur de rentabilité de retraite',
    },
    heroIntro: {
      [Language.EN]: 'Enter your guest count, price, and costs. See live revenue, profit margin, profit per workday, and breakeven occupancy. No signup required, share your numbers via link.',
      [Language.NL]: 'Voer aantal gasten, prijs en kosten in. Zie live omzet, marge, winst per werkdag en break-evenbezetting. Geen aanmelding nodig, deel je cijfers via een link.',
      [Language.DE]: 'Gib Gästezahl, Preis und Kosten ein. Sieh live Umsatz, Marge, Gewinn pro Arbeitstag und Break-even-Auslastung. Ohne Anmeldung, Zahlen per Link teilbar.',
      [Language.ES]: 'Introduce huéspedes, precio y costes. Ve en vivo ingresos, margen, beneficio por día de trabajo y ocupación de equilibrio. Sin registro, comparte por enlace.',
      [Language.FR]: 'Saisissez invités, prix et coûts. Voyez en direct le revenu, la marge, le bénéfice par jour de travail et le seuil de rentabilité. Sans inscription, partage par lien.',
    },
    metaTitle: {
      [Language.EN]: 'Retreat Profitability Calculator — Free Tool',
      [Language.NL]: 'Retraite-winstgevendheidscalculator — Gratis tool',
      [Language.DE]: 'Retreat-Rentabilitätsrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de rentabilidad de retiros — Herramienta gratuita',
      [Language.FR]: 'Calculateur de rentabilité de retraite — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'Free interactive calculator for retreat facilitators. Plan revenue, costs, profit margin, breakeven, and per-workday earnings. Share results via link.',
      [Language.NL]: 'Gratis interactieve calculator voor retraitebegeleiders. Plan omzet, kosten, marge, break-even en winst per werkdag. Deel resultaten via een link.',
      [Language.DE]: 'Kostenloser interaktiver Rechner für Retreat-Facilitator. Plane Umsatz, Kosten, Marge, Break-even und Gewinn pro Arbeitstag. Teile per Link.',
      [Language.ES]: 'Calculadora gratuita para facilitadores de retiros. Planifica ingresos, costes, margen, equilibrio y ganancias por día. Comparte por enlace.',
      [Language.FR]: 'Calculateur gratuit pour facilitateurs de retraite. Planifiez revenus, coûts, marge, seuil de rentabilité et gains par jour. Partagez par lien.',
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
    coFacilitators: 0, travel: 0, insurance: 150,
    paymentFeePercent: 3, planningDays: 5,
    role: RetreatRole.SOLO,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Yoga retreats typically charge €900–€1,800 per person for 5 nights',
      [Language.NL]: 'Yogaretraites rekenen doorgaans €900–€1.800 per persoon voor 5 nachten',
      [Language.DE]: 'Yoga-Retreats berechnen typischerweise €900–€1.800 pro Person für 5 Nächte',
      [Language.ES]: 'Los retiros de yoga suelen cobrar €900–€1.800 por persona por 5 noches',
      [Language.FR]: 'Les retraites de yoga facturent généralement 900–1 800 € par personne pour 5 nuits',
    },
    foodPerGuestPerDay: GENERIC.benchmarks.foodPerGuestPerDay,
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venuePerNight: {
      [Language.EN]: 'Per-night rate for a yoga venue + accommodation. Simple retreat lodges €400–€700, mid-range €700–€1,100, premium country estates €1,100+',
      [Language.NL]: 'Nachtprijs voor yogalocatie + accommodatie. Eenvoudige retraitehuizen €400–€700, middenklasse €700–€1.100, premium buitenplaatsen €1.100+',
      [Language.DE]: 'Per-night rate for a yoga venue + accommodation. Simple retreat lodges €400–€700, mid-range €700–€1,100, premium country estates €1,100+',
      [Language.ES]: 'Per-night rate for a yoga venue + accommodation. Simple retreat lodges €400–€700, mid-range €700–€1,100, premium country estates €1,100+',
      [Language.FR]: 'Per-night rate for a yoga venue + accommodation. Simple retreat lodges €400–€700, mid-range €700–€1,100, premium country estates €1,100+',
    },
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Yoga Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator yogaretraite',
      [Language.DE]: 'Yoga-Retreat-Preisrechner',
      [Language.ES]: 'Calculadora de precios para retiros de yoga',
      [Language.FR]: 'Calculateur de prix pour retraite de yoga',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your yoga retreat? Enter your guest count, nightly venue cost, food, and facilitator fee. The calculator shows revenue, profit margin, and the minimum guest count needed to break even.',
      [Language.NL]: 'Hoe prijs je je yogaretraite? Voer aantal gasten, locatiekosten, eten en docentenvergoeding in. De calculator toont omzet, marge en minimaal aantal gasten om break-even te draaien.',
      [Language.DE]: 'Wie sollst du dein Yoga-Retreat kalkulieren? Gib Gäste, Locationkosten, Essen und Honorar ein. Der Rechner zeigt Umsatz, Marge und Mindest-Teilnehmerzahl für Break-even.',
      [Language.ES]: '¿Cómo poner precio a tu retiro de yoga? Introduce huéspedes, coste del lugar, comida y honorarios. La calculadora muestra ingresos, margen y mínimo de huéspedes para equilibrio.',
      [Language.FR]: 'Comment tarifer votre retraite de yoga ? Saisissez invités, coût du lieu, restauration et honoraires. Le calculateur affiche revenu, marge et nombre minimum d\'invités au seuil de rentabilité.',
    },
    metaTitle: {
      [Language.EN]: 'Yoga Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator yogaretraite — Gratis tool',
      [Language.DE]: 'Yoga-Retreat-Preisrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de precios para retiros de yoga — Herramienta gratuita',
      [Language.FR]: 'Calculateur de prix pour retraite de yoga — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'How to price a yoga retreat — free interactive calculator. Plan guests, costs, margin, and breakeven. Includes industry benchmark ranges.',
      [Language.NL]: 'Hoe prijs je een yogaretraite — gratis interactieve calculator. Plan gasten, kosten, marge en break-even. Inclusief branche-benchmarks.',
      [Language.DE]: 'Wie ein Yoga-Retreat kalkulieren — kostenloser Rechner. Plane Gäste, Kosten, Marge und Break-even. Inklusive Branchen-Benchmarks.',
      [Language.ES]: 'Cómo fijar el precio de un retiro de yoga — calculadora gratuita. Planifica huéspedes, costes, margen y equilibrio. Con referencias del sector.',
      [Language.FR]: 'Comment tarifer une retraite de yoga — calculateur gratuit. Planifiez invités, coûts, marge et seuil de rentabilité. Avec références du secteur.',
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
    coFacilitators: 800, travel: 0, insurance: 200,
    paymentFeePercent: 3, planningDays: 7,
    role: RetreatRole.SOLO,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Wellness/detox retreats typically charge €1,500–€2,500 per person for 6–8 nights',
      [Language.NL]: 'Wellness-/detoxretraites rekenen €1.500–€2.500 per persoon voor 6–8 nachten',
      [Language.DE]: 'Wellness-/Detox-Retreats berechnen €1.500–€2.500 pro Person für 6–8 Nächte',
      [Language.ES]: 'Los retiros wellness/detox cobran €1.500–€2.500 por persona por 6–8 noches',
      [Language.FR]: 'Les retraites bien-être/détox facturent 1 500–2 500 € par personne pour 6–8 nuits',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Wellness food (organic, often catered) commonly runs €45–€70 per guest per day',
      [Language.NL]: 'Wellness-eten (biologisch, vaak gecaterd) kost meestal €45–€70 per gast per dag',
      [Language.DE]: 'Wellness-Verpflegung (bio, oft gecatert) liegt typischerweise bei €45–€70 pro Gast pro Tag',
      [Language.ES]: 'La comida wellness (orgánica, a menudo catering) cuesta €45–€70 por huésped por día',
      [Language.FR]: 'La restauration bien-être (bio, souvent traiteur) coûte 45–70 € par invité par jour',
    },
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venuePerNight: {
      [Language.EN]: 'Wellness venues with spa or treatment-room amenities run €900–€1,500 per night mid-range, €1,500–€2,200+ for premium properties',
      [Language.NL]: 'Wellness-locaties met spa of behandelfaciliteiten kosten €900–€1.500 per nacht middenklasse, €1.500–€2.200+ voor premium-eigendommen',
      [Language.DE]: 'Wellness venues with spa or treatment-room amenities run €900–€1,500 per night mid-range, €1,500–€2,200+ for premium properties',
      [Language.ES]: 'Wellness venues with spa or treatment-room amenities run €900–€1,500 per night mid-range, €1,500–€2,200+ for premium properties',
      [Language.FR]: 'Wellness venues with spa or treatment-room amenities run €900–€1,500 per night mid-range, €1,500–€2,200+ for premium properties',
    },
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Wellness Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator wellnessretraite',
      [Language.DE]: 'Wellness-Retreat-Preisrechner',
      [Language.ES]: 'Calculadora de precios para retiros wellness',
      [Language.FR]: 'Calculateur de prix pour retraite bien-être',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your wellness or detox retreat? Wellness retreats run longer and pricier than yoga, with higher food and facilitator costs. This calculator shows your full P&L with realistic wellness defaults.',
      [Language.NL]: 'Hoe prijs je je wellness- of detoxretraite? Wellnessretraites duren langer en zijn duurder dan yoga, met hogere kosten voor eten en begeleiding. Deze calculator toont je volledige P&L met realistische wellness-uitgangswaarden.',
      [Language.DE]: 'Wie kalkulierst du dein Wellness- oder Detox-Retreat? Wellness-Retreats sind länger und teurer als Yoga, mit höheren Verpflegungs- und Honorarkosten. Dieser Rechner zeigt deine volle GuV mit realistischen Wellness-Werten.',
      [Language.ES]: '¿Cómo fijar el precio de tu retiro wellness o detox? Los retiros wellness son más largos y caros que los de yoga, con mayores costes de comida y facilitación. Esta calculadora muestra tu P&L completo con valores realistas.',
      [Language.FR]: 'Comment tarifer votre retraite bien-être ou détox ? Les retraites bien-être sont plus longues et plus coûteuses que le yoga. Ce calculateur affiche votre compte de résultat complet avec des valeurs réalistes.',
    },
    metaTitle: {
      [Language.EN]: 'Wellness Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator wellnessretraite — Gratis tool',
      [Language.DE]: 'Wellness-Retreat-Preisrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de precios para retiros wellness — Herramienta gratuita',
      [Language.FR]: 'Calculateur de prix pour retraite bien-être — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'Price your wellness or detox retreat — free P&L calculator. Defaults tuned for 6–8 night wellness retreats. Plan margin, breakeven, and per-workday profit.',
      [Language.NL]: 'Prijs je wellness- of detoxretraite — gratis P&L-calculator. Standaardwaarden afgestemd op 6–8 nachten. Plan marge, break-even en winst per werkdag.',
      [Language.DE]: 'Kalkuliere dein Wellness-Retreat — kostenloser GuV-Rechner. Voreinstellungen für 6–8 Nächte. Plane Marge, Break-even und Gewinn pro Arbeitstag.',
      [Language.ES]: 'Calcula tu retiro wellness o detox — calculadora gratuita. Valores por defecto para 6–8 noches. Planifica margen, equilibrio y ganancias por día.',
      [Language.FR]: 'Tarifez votre retraite bien-être ou détox — calculateur gratuit. Valeurs par défaut pour 6–8 nuits. Planifiez marge, seuil de rentabilité et gains par jour.',
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
    coFacilitators: 0, travel: 0, insurance: 150,
    paymentFeePercent: 3, planningDays: 4,
    role: RetreatRole.SOLO,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Meditation retreats typically charge €700–€1,200 per person for 3–5 nights',
      [Language.NL]: 'Meditatieretraites rekenen €700–€1.200 per persoon voor 3–5 nachten',
      [Language.DE]: 'Meditations-Retreats berechnen €700–€1.200 pro Person für 3–5 Nächte',
      [Language.ES]: 'Los retiros de meditación cobran €700–€1.200 por persona por 3–5 noches',
      [Language.FR]: 'Les retraites de méditation facturent 700–1 200 € par personne pour 3–5 nuits',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Simple, often vegetarian meditation-retreat food runs €25–€45 per guest per day',
      [Language.NL]: 'Eenvoudig, vaak vegetarisch eten op meditatieretraite kost €25–€45 per gast per dag',
      [Language.DE]: 'Einfache, oft vegetarische Meditations-Retreat-Verpflegung liegt bei €25–€45 pro Gast pro Tag',
      [Language.ES]: 'La comida sencilla y a menudo vegetariana cuesta €25–€45 por huésped por día',
      [Language.FR]: 'Une restauration simple, souvent végétarienne, coûte 25–45 € par invité par jour',
    },
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venuePerNight: {
      [Language.EN]: 'Dharma centers and simpler retreat venues run €400–€800 per night for groups of 12–16. Larger residential centers can sit higher',
      [Language.NL]: 'Dharma-centra en eenvoudige retraitelocaties kosten €400–€800 per nacht voor groepen van 12–16. Grotere woon-retraitecentra zitten hoger',
      [Language.DE]: 'Dharma centers and simpler retreat venues run €400–€800 per night for groups of 12–16. Larger residential centers can sit higher',
      [Language.ES]: 'Dharma centers and simpler retreat venues run €400–€800 per night for groups of 12–16. Larger residential centers can sit higher',
      [Language.FR]: 'Dharma centers and simpler retreat venues run €400–€800 per night for groups of 12–16. Larger residential centers can sit higher',
    },
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Meditation Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator meditatieretraite',
      [Language.DE]: 'Meditations-Retreat-Preisrechner',
      [Language.ES]: 'Calculadora de precios para retiros de meditación',
      [Language.FR]: 'Calculateur de prix pour retraite de méditation',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your meditation retreat? Meditation retreats are usually shorter, larger groups, lower per-person price than wellness. The defaults reflect typical 4-night silent or guided meditation programs.',
      [Language.NL]: 'Hoe prijs je je meditatieretraite? Meditatieretraites zijn meestal korter, grotere groepen, lagere prijs per persoon dan wellness. De uitgangswaarden weerspiegelen typische 4-nachts stille of begeleide programma\'s.',
      [Language.DE]: 'Wie kalkulierst du dein Meditations-Retreat? Meditations-Retreats sind meist kürzer, mit größeren Gruppen und geringerem Preis pro Person als Wellness. Die Voreinstellungen entsprechen typischen 4-Nächte-Programmen.',
      [Language.ES]: '¿Cómo fijar el precio de un retiro de meditación? Suelen ser más cortos, grupos más grandes y precio menor que wellness. Los valores por defecto reflejan programas típicos de 4 noches.',
      [Language.FR]: 'Comment tarifer votre retraite de méditation ? Souvent plus courtes, groupes plus larges, prix par personne plus bas. Les valeurs par défaut reflètent des programmes typiques de 4 nuits.',
    },
    metaTitle: {
      [Language.EN]: 'Meditation Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator meditatieretraite — Gratis tool',
      [Language.DE]: 'Meditations-Retreat-Preisrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de precios para retiros de meditación — Herramienta gratuita',
      [Language.FR]: 'Calculateur de prix pour retraite de méditation — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'Price your meditation retreat — free P&L calculator. Defaults tuned for 3–5 night meditation programs. Plan revenue, margin, breakeven.',
      [Language.NL]: 'Prijs je meditatieretraite — gratis P&L-calculator. Standaardwaarden voor 3–5-nachtprogramma\'s. Plan omzet, marge, break-even.',
      [Language.DE]: 'Kalkuliere dein Meditations-Retreat — kostenloser Rechner. Voreinstellungen für 3–5 Nächte. Plane Umsatz, Marge, Break-even.',
      [Language.ES]: 'Calcula tu retiro de meditación — calculadora gratuita. Valores para programas de 3–5 noches. Planifica ingresos, margen, equilibrio.',
      [Language.FR]: 'Tarifez votre retraite de méditation — calculateur gratuit. Valeurs pour 3–5 nuits. Planifiez revenu, marge, seuil de rentabilité.',
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
    coFacilitators: 0, travel: 0, insurance: 200,
    paymentFeePercent: 3, planningDays: 7,
    role: RetreatRole.SOLO,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Coaching retreats and intensives typically charge €2,000–€5,000 per person for 3–5 nights',
      [Language.NL]: 'Coaching-retraites en intensives rekenen €2.000–€5.000 per persoon voor 3–5 nachten',
      [Language.DE]: 'Coaching-Retreats und Intensives berechnen €2.000–€5.000 pro Person für 3–5 Nächte',
      [Language.ES]: 'Los retiros e intensivos de coaching cobran €2.000–€5.000 por persona por 3–5 noches',
      [Language.FR]: 'Les retraites et intensifs de coaching facturent 2 000–5 000 € par personne pour 3–5 nuits',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Coaching retreats often use higher-end catering — €45–€80 per guest per day is common',
      [Language.NL]: 'Coaching-retraites gebruiken vaak hoogwaardige catering — €45–€80 per gast per dag is gebruikelijk',
      [Language.DE]: 'Coaching-Retreats nutzen oft gehobenes Catering — €45–€80 pro Gast pro Tag ist üblich',
      [Language.ES]: 'Los retiros de coaching usan catering de gama alta — €45–€80 por huésped por día es común',
      [Language.FR]: 'Les retraites de coaching utilisent souvent un traiteur haut de gamme — 45–80 € par invité par jour est courant',
    },
    facilitatorFee: {
      [Language.EN]: 'Coaching specialists command premium rates — €1,500–€3,000/day for senior coaches',
      [Language.NL]: 'Coachingspecialisten hanteren premiumtarieven — €1.500–€3.000/dag voor senior coaches',
      [Language.DE]: 'Coaching specialists command premium rates — €1,500–€3,000/day for senior coaches',
      [Language.ES]: 'Coaching specialists command premium rates — €1,500–€3,000/day for senior coaches',
      [Language.FR]: 'Coaching specialists command premium rates — €1,500–€3,000/day for senior coaches',
    },
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venuePerNight: {
      [Language.EN]: 'Boutique venues for 4–8 guest coaching intensives commonly run €900–€1,800 per night; executive-grade properties run €1,800+',
      [Language.NL]: 'Boutique-locaties voor coaching-intensives van 4–8 gasten kosten doorgaans €900–€1.800 per nacht; executive-klasse vanaf €1.800',
      [Language.DE]: 'Boutique venues for 4–8 guest coaching intensives commonly run €900–€1,800 per night; executive-grade properties run €1,800+',
      [Language.ES]: 'Boutique venues for 4–8 guest coaching intensives commonly run €900–€1,800 per night; executive-grade properties run €1,800+',
      [Language.FR]: 'Boutique venues for 4–8 guest coaching intensives commonly run €900–€1,800 per night; executive-grade properties run €1,800+',
    },
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Coaching Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator coachingretraite',
      [Language.DE]: 'Coaching-Retreat-Preisrechner',
      [Language.ES]: 'Calculadora de precios para retiros de coaching',
      [Language.FR]: 'Calculateur de prix pour retraite de coaching',
    },
    heroIntro: {
      [Language.EN]: 'Pricing a coaching retreat or intensive is different from group wellness work — smaller groups, higher per-person prices, more 1:1 time. This calculator is tuned for coaching economics.',
      [Language.NL]: 'Een coachingretraite of intensive prijzen is anders dan groepswellness — kleinere groepen, hogere prijs per persoon, meer 1-op-1-tijd. Deze calculator is afgestemd op coaching-economie.',
      [Language.DE]: 'Ein Coaching-Retreat oder Intensive zu kalkulieren unterscheidet sich von Gruppen-Wellness — kleinere Gruppen, höherer Preis pro Person, mehr 1:1-Zeit. Dieser Rechner ist auf Coaching abgestimmt.',
      [Language.ES]: 'Tarifar un retiro o intensivo de coaching es distinto del wellness grupal — grupos más pequeños, precios más altos, más tiempo 1:1. Calculadora ajustada al coaching.',
      [Language.FR]: 'Tarifer une retraite ou un intensif de coaching diffère du bien-être de groupe — groupes plus petits, prix plus élevés, plus de 1:1. Calculateur adapté au coaching.',
    },
    metaTitle: {
      [Language.EN]: 'Coaching Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator coachingretraite — Gratis tool',
      [Language.DE]: 'Coaching-Retreat-Preisrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de precios para retiros de coaching — Herramienta gratuita',
      [Language.FR]: 'Calculateur de prix pour retraite de coaching — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'Price your coaching retreat or intensive — free P&L calculator. Defaults for 4–8 guest, 3–5 night programs. Plan margin, breakeven, per-workday profit.',
      [Language.NL]: 'Prijs je coachingretraite of intensive — gratis P&L-calculator. Standaardwaarden voor 4–8 gasten, 3–5 nachten. Plan marge, break-even, winst per werkdag.',
      [Language.DE]: 'Kalkuliere dein Coaching-Retreat — kostenloser Rechner. Voreinstellungen für 4–8 Gäste, 3–5 Nächte. Plane Marge, Break-even, Gewinn pro Arbeitstag.',
      [Language.ES]: 'Calcula tu retiro de coaching — calculadora gratuita. Valores para 4–8 huéspedes, 3–5 noches. Planifica margen, equilibrio, ganancias por día.',
      [Language.FR]: 'Tarifez votre retraite de coaching — calculateur gratuit. Valeurs pour 4–8 invités, 3–5 nuits. Planifiez marge, seuil de rentabilité, gains par jour.',
    },
  },
  relatedVariants: [ToolVariant.WELLNESS, ToolVariant.GENERIC],
}

export const CALCULATOR_VARIANTS: Record<ToolVariant, VariantConfig> = {
  [ToolVariant.GENERIC]: GENERIC,
  [ToolVariant.YOGA]: YOGA,
  [ToolVariant.WELLNESS]: WELLNESS,
  [ToolVariant.MEDITATION]: MEDITATION,
  [ToolVariant.COACHING]: COACHING,
}
