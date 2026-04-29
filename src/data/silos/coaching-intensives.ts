import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const COACHING_INTENSIVES_SILO: SiloContent = {
  slug: SiloSlug.COACHING_INTENSIVES,
  route: Route.COACHING_INTENSIVES,
  heroImageSrc: IMAGES.accommodation.hayHouseBench,
  heroImageAlt: {
    [Language.EN]: 'A bench at the Hay House at sunset',
    [Language.NL]: 'Een bank bij het Hay House bij zonsondergang',
    [Language.DE]: 'Eine Bank am Hay House bei Sonnenuntergang',
  },
  meta: {
    title: {
      [Language.EN]: 'Coaching Intensive Venue for Cohort Programmes — Overijssel',
      [Language.NL]: 'Locatie voor coaching-intensieven & cohortprogramma’s — Overijssel',
      [Language.DE]: 'Ort für Coaching-Intensives & Kohortenprogramme — Overijssel',
    },
    description: {
      [Language.EN]:
        'A held venue for executive coaches and ICF-certified facilitators running 8–12 person cohort intensives. Workshop barn, full buyout, fifteen minutes from Zwolle.',
      [Language.NL]:
        'Een gedragen locatie voor executive coaches en ICF-gecertificeerde facilitators die intensieven van 8–12 personen leiden. Werkschuur, volledige buyout, vijftien minuten van Zwolle.',
      [Language.DE]:
        'Ein gehaltener Ort für Executive Coaches und ICF-zertifizierte Facilitator:innen, die Kohorten-Intensives für 8–12 Personen leiten. Workshop-Scheune, voller Buyout, fünfzehn Minuten von Zwolle.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For executive coaches & cohort facilitators',
      [Language.NL]: 'Voor executive coaches & cohort-facilitators',
      [Language.DE]: 'Für Executive Coaches & Kohorten-Facilitator:innen',
    },
    title: {
      [Language.EN]: 'A Held Venue for Coaching Intensives & Leadership Cohorts',
      [Language.NL]: 'Een gedragen locatie voor coaching-intensieven & leiderschapscohorten',
      [Language.DE]: 'Ein gehaltener Ort für Coaching-Intensives und Führungskohorten',
    },
    subtitle: {
      [Language.EN]:
        'A workshop barn for the deep dyads, private rooms for the integration, and a venue that can hold the kind of conversation a hotel meeting room cannot.',
      [Language.NL]:
        'Een werkschuur voor de diepe duo-sessies, privékamers voor de integratie, en een locatie die het soort gesprek kan dragen dat een hotelvergaderzaal niet aankan.',
      [Language.DE]:
        'Eine Workshop-Scheune für die tiefen Dyaden, private Zimmer für die Integration, und ein Ort, der jene Art von Gespräch tragen kann, die ein Hotel-Meetingraum nicht trägt.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'The work after the workshop ends — held by a place that can hold it.',
      [Language.NL]:
        'Het werk dat begint waar de workshop eindigt — gedragen door een plek die dat aankan.',
      [Language.DE]:
        'Die Arbeit, die nach dem Workshop weitergeht — gehalten von einem Ort, der das tragen kann.',
    },
    caption: {
      [Language.EN]:
        'Built for cohorts of eight to twelve, three to five days, residential.',
      [Language.NL]:
        'Geschikt voor cohorten van acht tot twaalf, drie tot vijf dagen, residentieel.',
      [Language.DE]:
        'Gemacht für Kohorten von acht bis zwölf, drei bis fünf Tage, mit Übernachtung.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A workshop space that respects what coaching asks of a room',
        [Language.NL]: 'Een werkruimte die respecteert wat coaching van een ruimte vraagt',
        [Language.DE]: 'Ein Workshop-Raum, der respektiert, was Coaching von einem Raum verlangt',
      },
      body: {
        [Language.EN]: [
          'The Hay House barn is sixty-five square metres of heated wooden floor under a wooden ceiling. Acoustics carry a quiet voice. Light is dimmable and shifts with the day. There is no hum from a corporate HVAC system on the other side of a wall, because there is no other side of a wall.',
          'For dyads and triads we set up the barn with movable seating. For full-circle work we run a single ring of twelve. For one-to-one supervision sessions, the Cosmos cabin and the teahouse are both private and ten metres apart.',
        ],
        [Language.NL]: [
          'De Hay House-schuur is vijfenzestig vierkante meter verwarmde houten vloer onder een houten plafond. De akoestiek draagt een rustige stem. Het licht is dimbaar en verandert met de dag. Er is geen gebrom van een corporate-HVAC-systeem aan de andere kant van een muur, omdat er geen andere kant van een muur is.',
          'Voor duo’s en trio’s richten we de schuur in met verplaatsbare zitplaatsen. Voor full-circle werk draaien we één ring van twaalf. Voor één-op-één-supervisiesessies zijn de Cosmos cabin en het theehuis allebei privé en tien meter uit elkaar.',
        ],
        [Language.DE]: [
          'Die Hay House-Scheune sind fünfundsechzig Quadratmeter beheizter Holzboden unter einer Holzdecke. Die Akustik trägt eine leise Stimme. Das Licht ist dimmbar und verändert sich mit dem Tag. Es gibt kein Brummen einer Konzern-HVAC-Anlage hinter einer Wand, weil es keine andere Seite einer Wand gibt.',
          'Für Dyaden und Triaden richten wir die Scheune mit beweglicher Bestuhlung ein. Für Vollkreis-Arbeit machen wir einen einzigen Ring aus zwölf. Für Eins-zu-Eins-Supervisionssitzungen sind die Cosmos-Hütte und das Teehaus beide privat und zehn Meter voneinander entfernt.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House workshop barn glowing in evening light',
        [Language.NL]: 'Hay House-werkschuur in het avondlicht',
        [Language.DE]: 'Hay House-Workshop-Scheune im Abendlicht',
      },
    },
    {
      h2: {
        [Language.EN]: 'For programmes that need to come back four times a year',
        [Language.NL]: 'Voor programma’s die vier keer per jaar terugkomen',
        [Language.DE]: 'Für Programme, die viermal im Jahr zurückkommen müssen',
      },
      body: {
        [Language.EN]: [
          'Coaching cohorts often run as a six- or twelve-month programme with quarterly residentials. We hold recurring dates a year out and keep the cohort’s notes, materials, and even rituals — like the way one of our regular programmes opens with a circle the lead coach builds in advance — between visits.',
          'Pricing for the second and third return is something we can negotiate openly. We would rather be the venue your cohort comes back to than the cheapest one for the first booking.',
        ],
        [Language.NL]: [
          'Coaching-cohorten draaien vaak als een programma van zes of twaalf maanden met kwartaalresidentials. We reserveren terugkerende data een jaar van tevoren en bewaren tussen bezoeken door de notities, materialen en zelfs rituelen van het cohort — zoals de manier waarop één van onze terugkerende programma’s opent met een cirkel die de hoofdcoach van tevoren opbouwt.',
          'De prijs voor de tweede en derde terugkomst kunnen we open bespreken. We zijn liever de locatie waar je cohort naar terugkomt dan de goedkoopste bij de eerste boeking.',
        ],
        [Language.DE]: [
          'Coaching-Kohorten laufen oft als sechs- oder zwölfmonatiges Programm mit vierteljährlichen Residentials. Wir halten wiederkehrende Termine ein Jahr im Voraus und bewahren zwischen den Besuchen Notizen, Materialien und sogar Rituale der Kohorte auf — etwa die Art, wie eines unserer regelmäßigen Programme mit einem Kreis öffnet, den der Lead-Coach vorher aufbaut.',
          'Über die Preise für den zweiten und dritten Aufenthalt können wir offen verhandeln. Wir sind lieber der Ort, zu dem deine Kohorte zurückkommt, als der billigste für die erste Buchung.',
        ],
      },
      imageSrc: IMAGES.accommodation.atticChill,
      imageAlt: {
        [Language.EN]: 'Comfortable shared chill space for cohort breakouts',
        [Language.NL]: 'Comfortabele gedeelde chill-ruimte voor cohort-breakouts',
        [Language.DE]: 'Gemütlicher gemeinsamer Chill-Raum für Kohorten-Breakouts',
      },
    },
    {
      h2: {
        [Language.EN]: 'Sleeping arrangements that respect the work being done',
        [Language.NL]: 'Slaapindeling die het werk respecteert',
        [Language.DE]: 'Schlafarrangements, die die Arbeit respektieren',
      },
      body: {
        [Language.EN]: [
          'Most coaching cohorts ask for as many private rooms as possible. Horizon has a mix of single, twin, and shared rooms — we can give the lead coach the Cosmos cabin, six private rooms in Horizon, and the rest as twins. For groups of eight, everyone can sleep alone.',
          'There is a reason the work needs that. We respect it.',
        ],
        [Language.NL]: [
          'De meeste coaching-cohorten vragen om zoveel mogelijk eigen kamers. Horizon heeft een mix van eenpersoons-, tweepersoons- en gedeelde kamers — we kunnen de hoofdcoach de Cosmos cabin geven, zes eigen kamers in Horizon, en de rest als tweepersoons. Voor groepen van acht kan iedereen alleen slapen.',
          'Daar is een reden voor — die het werk zelf vraagt. Die respecteren wij.',
        ],
        [Language.DE]: [
          'Die meisten Coaching-Kohorten bitten um so viele private Zimmer wie möglich. Horizon hat eine Mischung aus Einzel-, Doppel- und Mehrbettzimmern — wir können dem Lead-Coach die Cosmos-Hütte geben, sechs Einzelzimmer in Horizon und den Rest als Doppelzimmer. Bei Gruppen von acht kann jede:r allein schlafen.',
          'Es gibt einen Grund, warum die Arbeit das braucht. Den respektieren wir.',
        ],
      },
      imageSrc: IMAGES.accommodation.singleBedWithWood,
      imageAlt: {
        [Language.EN]: 'Quiet single bedroom with wooden walls',
        [Language.NL]: 'Rustige eenpersoonskamer met houten wanden',
        [Language.DE]: 'Ruhiges Einzelzimmer mit Holzwänden',
      },
    },
  ],
  facts: [
    {
      number: '8–12',
      description: {
        [Language.EN]: 'Cohort size — full buyout, no other groups',
        [Language.NL]: 'Cohortgrootte — volledige buyout, geen andere groepen',
        [Language.DE]: 'Kohortengröße — voller Buyout, keine anderen Gruppen',
      },
    },
    {
      number: '4×/yr',
      description: {
        [Language.EN]: 'Recurring dates — we hold quarterly bookings a year ahead',
        [Language.NL]: 'Terugkerende data — we reserveren kwartaalboekingen een jaar vooruit',
        [Language.DE]: 'Wiederkehrende Termine — wir reservieren Quartalsbuchungen ein Jahr im Voraus',
      },
    },
    {
      number: '1h15',
      description: {
        [Language.EN]: 'By train from Schiphol — easy to fly the cohort in',
        [Language.NL]: 'Met de trein vanaf Schiphol — handig als het cohort invliegt',
        [Language.DE]: 'Mit dem Zug ab Schiphol — leicht, die Kohorte einfliegen zu lassen',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Do you accommodate confidentiality requirements?',
        [Language.NL]: 'Houden jullie rekening met vertrouwelijkheid?',
        [Language.DE]: 'Berücksichtigt ihr Vertraulichkeitsanforderungen?',
      },
      answer: {
        [Language.EN]:
          'Yes. Full venue buyout means no other guests overhear. Our team stays out of the practice barn during sessions unless asked. We can sign cohort-specific NDAs if your programme requires it.',
        [Language.NL]:
          'Ja. Volledige buyout betekent dat geen andere gasten meeluisteren. Ons team blijft tijdens sessies uit de werkschuur, tenzij anders gevraagd. We tekenen cohort-specifieke geheimhoudingsverklaringen als je programma daarom vraagt.',
        [Language.DE]:
          'Ja. Voller Buyout heißt: keine anderen Gäste, die mithören. Unser Team bleibt während der Sitzungen aus der Werkscheune heraus, außer es wird darum gebeten. Wir unterzeichnen kohortenspezifische NDAs, wenn dein Programm das verlangt.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we recur quarterly with the same cohort?',
        [Language.NL]: 'Kunnen we elk kwartaal terugkomen met hetzelfde cohort?',
        [Language.DE]: 'Können wir vierteljährlich mit derselben Kohorte zurückkehren?',
      },
      answer: {
        [Language.EN]:
          'Yes — this is one of our most repeated booking patterns. We hold the four dates at booking, lock them in, and offer recurring-cohort pricing.',
        [Language.NL]:
          'Ja — dit is één van onze meest herhaalde boekingspatronen. We reserveren de vier data bij boeking, leggen ze vast, en bieden tarieven voor terugkerende cohorten.',
        [Language.DE]:
          'Ja — das ist eines unserer häufigsten Buchungsmuster. Wir halten die vier Termine bei der Buchung fest, sperren sie ein und bieten Preise für wiederkehrende Kohorten an.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you do invoicing for executive education clients?',
        [Language.NL]: 'Verzorgen jullie de facturering voor executive-education-klanten?',
        [Language.DE]: 'Übernehmt ihr die Rechnungsstellung für Executive-Education-Kund:innen?',
      },
      answer: {
        [Language.EN]:
          'Yes. We can invoice the coaching firm directly, the participating company on a per-seat basis, or split. VAT handled correctly for EU and non-EU.',
        [Language.NL]:
          'Ja. We kunnen rechtstreeks aan de coachingfirma factureren, aan het deelnemende bedrijf per deelnemer, of een splitsing maken. BTW wordt correct verwerkt voor EU en niet-EU.',
        [Language.DE]:
          'Ja. Wir können direkt an die Coaching-Firma fakturieren, an das teilnehmende Unternehmen pro Platz oder die Rechnung aufteilen. Mehrwertsteuer wird korrekt für EU und Nicht-EU behandelt.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the venue accessible for international cohorts?',
        [Language.NL]: 'Is de locatie toegankelijk voor internationale cohorten?',
        [Language.DE]: 'Ist der Ort für internationale Kohorten gut erreichbar?',
      },
      answer: {
        [Language.EN]:
          'Yes — Schiphol is one hour fifteen by train. We arrange transfers from Zwolle for the cohort and can coordinate with hotels in Zwolle for early arrivals.',
        [Language.NL]:
          'Ja — Schiphol ligt op een uur en een kwartier met de trein. We regelen transfers vanaf Zwolle voor het cohort en kunnen afstemmen met hotels in Zwolle voor wie eerder aankomt.',
        [Language.DE]:
          'Ja — Schiphol ist eine Stunde fünfzehn mit dem Zug entfernt. Wir organisieren Transfers von Zwolle für die Kohorte und können uns mit Hotels in Zwolle für frühe Anreisen abstimmen.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your cohort to a venue that gets out of the work’s way',
      [Language.NL]: 'Breng je cohort naar een locatie die het werk niet in de weg zit',
      [Language.DE]: 'Bring deine Kohorte an einen Ort, der der Arbeit aus dem Weg geht',
    },
    body: {
      [Language.EN]:
        'Tell us your dates, your cohort size, and whether this is a one-off or part of a recurring programme. We will come back with availability and a quote within two working days.',
      [Language.NL]:
        'Vertel ons je data, je cohortgrootte en of dit een eenmalige boeking is of onderdeel van een terugkerend programma. We komen binnen twee werkdagen terug met beschikbaarheid en een offerte.',
      [Language.DE]:
        'Erzähl uns deine Daten, deine Kohortengröße und ob das eine einmalige Sache oder Teil eines wiederkehrenden Programms ist. Wir melden uns innerhalb von zwei Werktagen mit Verfügbarkeit und einem Angebot zurück.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Executive coaches and ICF-certified facilitators running 8–12 person cohort intensives',
      [Language.NL]: 'Executive coaches en ICF-gecertificeerde facilitators die intensieven van 8–12 personen leiden',
      [Language.DE]: 'Executive Coaches und ICF-zertifizierte Facilitator:innen für Kohorten-Intensives mit 8–12 Personen',
    },
    cohortSize: { min: 8, max: 12 },
    keywords: {
      [Language.EN]: [
        'coaching retreat venue',
        'executive coaching offsite venue',
        'ICF cohort retreat venue',
        'leadership intensive venue',
        'mastermind retreat venue',
        'leadership development venue Netherlands',
        'coaching residential venue',
        'coaching cohort venue Europe',
        'full buyout coaching venue',
        'executive offsite Overijssel',
      ],
      [Language.NL]: [
        'coaching retraite locatie',
        'executive coaching offsite',
        'ICF cohort retraite locatie',
        'leiderschapsintensief locatie',
        'mastermind retraite locatie',
        'leiderschapsontwikkeling locatie',
        'coaching residentieel Nederland',
      ],
      [Language.DE]: [
        'Coaching-Retreat-Ort',
        'Executive-Coaching-Offsite',
        'ICF-Kohorten-Retreat-Ort',
        'Leadership-Intensive-Ort',
        'Mastermind-Retreat-Ort',
        'Führungsentwicklung Retreat',
      ],
    },
  },
}
