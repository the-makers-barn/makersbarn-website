import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const WELLNESS_DETOX_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.WELLNESS_DETOX_RETREATS,
  route: Route.WELLNESS_DETOX_RETREATS,
  heroImageSrc: IMAGES.accommodation.yogaPondJettyReflection,
  heroImageAlt: {
    [Language.EN]: 'Yoga on the jetty by the swimming pond at The Makers Barn',
    [Language.NL]: 'Yoga op de steiger bij de zwemvijver bij The Makers Barn',
    [Language.DE]: 'Yoga auf dem Steg am Schwimmteich bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Wellness & Detox Retreat Venue — Overijssel, Netherlands',
      [Language.NL]: 'Wellness- & detox-retraitelocatie — Overijssel, Nederland',
      [Language.DE]: 'Wellness- & Detox-Retreat-Location — Overijssel, Niederlande',
    },
    description: {
      [Language.EN]:
        'A countryside venue for wellness coaches, naturopaths, and Ayurveda teachers running clean-eating, sauna, and yoga programmes on a private 1.3-hectare farm.',
      [Language.NL]:
        'Een plattelandslocatie voor wellness-coaches, natuurgeneeskundigen en Ayurveda-docenten die clean-eating-, sauna- en yogaprogramma’s leiden op een eigen boerderij van 1,3 hectare.',
      [Language.DE]:
        'Ein Landgut für Wellness-Coaches, Heilpraktiker und Ayurveda-Lehrer, die Clean-Eating-, Sauna- und Yogaprogramme auf einem privaten Hof von 1,3 Hektar leiten.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For wellness coaches & holistic practitioners',
      [Language.NL]: 'Voor wellness-coaches & holistische beoefenaars',
      [Language.DE]: 'Für Wellness-Coaches & ganzheitliche Praktiker',
    },
    title: {
      [Language.EN]: 'A Slow-Living Venue for Wellness & Detox Retreats',
      [Language.NL]: 'Een slow-living locatie voor wellness- & detox-retraites',
      [Language.DE]: 'Ein Slow-Living-Ort für Wellness- & Detox-Retreats',
    },
    subtitle: {
      [Language.EN]:
        'Sauna, swimming pond, hot tub, yoga barn, and a kitchen our network of cooks knows how to fill with clean food on a schedule.',
      [Language.NL]:
        'Sauna, zwemvijver, hot tub, yogaschuur, en een keuken die ons netwerk van koks volgens schema vult met clean food.',
      [Language.DE]:
        'Sauna, Schwimmteich, Hot Tub, Yoga-Scheune und eine Küche, die unser Netzwerk von Köchen pünktlich mit clean food füllt.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Sauna, sleep, the pond, the kitchen, and a programme you can shape around all of it.',
      [Language.NL]:
        'Sauna, slaap, de vijver, de keuken — en een programma dat je daaromheen kunt bouwen.',
      [Language.DE]:
        'Sauna, Schlaf, der Teich, die Küche — und ein Programm, das du rundherum gestalten kannst.',
    },
    caption: {
      [Language.EN]:
        'For groups of eight to fourteen, three to seven days, residential.',
      [Language.NL]:
        'Voor groepen van acht tot veertien, drie tot zeven dagen, residentieel.',
      [Language.DE]:
        'Für Gruppen von acht bis vierzehn, drei bis sieben Tage, mit Übernachtung.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A venue built for the bones of a wellness programme',
        [Language.NL]: 'Een locatie gebouwd voor de pijlers van een wellness-programma',
        [Language.DE]: 'Ein Ort, gebaut für das Gerüst eines Wellness-Programms',
      },
      body: {
        [Language.EN]: [
          'The Hay House barn for yoga and breath sessions. The kitchen on the second floor of Horizon for cooking demos and shared meals. The sauna and hot tub for the warm-cold practice you might build into the day. The swimming pond for plunge work in summer.',
          'Wellness retreats here usually run two yoga sessions a day, three meals, sauna at sunset, and a slow morning. The venue is shaped to make that easy rather than impressive.',
        ],
        [Language.NL]: [
          'De Hay House-schuur voor yoga- en ademsessies. De keuken op de tweede verdieping van Horizon voor kookdemonstraties en gedeelde maaltijden. De sauna en hot tub voor het warm-koud-werk dat je in de dag kunt verweven. De zwemvijver voor plunge-werk in de zomer.',
          'Wellness-retraites hier draaien meestal twee yoga-sessies per dag, drie maaltijden, sauna bij zonsondergang en een rustige ochtend. De locatie is daarop gebouwd — niet om indruk te maken.',
        ],
        [Language.DE]: [
          'Die Hay House-Scheune für Yoga- und Atemsessions. Die Küche im zweiten Stock von Horizon für Kochdemos und gemeinsame Mahlzeiten. Sauna und Hot Tub für die Warm-Kalt-Praxis, die du in den Tag einbauen kannst. Den Schwimmteich für die Tauchsessions im Sommer.',
          'Wellness-Retreats hier laufen meist mit zwei Yoga-Einheiten am Tag, drei Mahlzeiten, Sauna bei Sonnenuntergang und einem ruhigen Morgen. Der Ort ist so gebaut, dass das mühelos läuft — nicht um zu beeindrucken.',
        ],
      },
      imageSrc: IMAGES.accommodation.hotTubInField,
      imageAlt: {
        [Language.EN]: 'Hot tub in the field at The Makers Barn',
        [Language.NL]: 'Hot tub in het veld bij The Makers Barn',
        [Language.DE]: 'Hot Tub im Feld bei The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'A kitchen our cooks know how to feed',
        [Language.NL]: 'Een keuken die onze koks weten te vullen',
        [Language.DE]: 'Eine Küche, die unsere Köche zu füllen wissen',
      },
      body: {
        [Language.EN]: [
          'We work with local cooks who do clean-eating, Ayurvedic, juice-cleanse, and plant-based catering for groups of fourteen. Send us your protocol — fasting windows, food sensitivities, the specific foods your retreat avoids — and we set the kitchen up around it before you arrive.',
          'Or bring your own chef. The kitchen is fully equipped, with prep space for two cooks working in parallel and storage for a week of fresh produce.',
        ],
        [Language.NL]: [
          'We werken met lokale koks die clean-eating-, Ayurvedische, sapkuur- en plantaardige catering verzorgen voor groepen van veertien. Stuur ons je protocol — vastenvensters, voedselgevoeligheden, de specifieke voedingsmiddelen die je retraite vermijdt — dan richten we de keuken erop in voordat je aankomt.',
          'Of neem je eigen kok mee. De keuken is volledig uitgerust, met werkruimte voor twee koks die parallel werken en opslag voor een week aan verse producten.',
        ],
        [Language.DE]: [
          'Wir arbeiten mit lokalen Köchen, die Clean-Eating, ayurvedisches, Saftkuren- und pflanzliches Catering für Gruppen von vierzehn Personen machen. Schick uns dein Protokoll — Fastenfenster, Unverträglichkeiten, die Lebensmittel, die euer Retreat meidet — und wir richten die Küche darauf ein, bevor du ankommst.',
          'Oder bring deinen eigenen Koch mit. Die Küche ist voll ausgestattet, mit Arbeitsplatz für zwei Köche parallel und Lagerraum für eine Woche frische Produkte.',
        ],
      },
      imageSrc: IMAGES.accommodation.horizonKitchen,
      imageAlt: {
        [Language.EN]: 'Horizon barn kitchen, ready for shared cooking',
        [Language.NL]: 'Horizon-schuur keuken, klaar voor gedeeld koken',
        [Language.DE]: 'Küche der Horizon-Scheune, bereit zum gemeinsamen Kochen',
      },
    },
    {
      h2: {
        [Language.EN]: 'Sauna, pond, and the warm-cold rhythm',
        [Language.NL]: 'Sauna, vijver, en het warm-koud-ritme',
        [Language.DE]: 'Sauna, Teich und der Warm-Kalt-Rhythmus',
      },
      body: {
        [Language.EN]: [
          'The sauna sits twenty steps from the swimming pond. In summer the pond is warm enough for slow swims; in winter it is cold enough that the warm-cold practice does what it is supposed to do. The hot tub is alongside, for the days the pond is iced or the group is not ready.',
          'Most wellness retreats run sauna at the end of the day, with two or three rounds and pond plunges between. We can heat it earlier on request.',
        ],
        [Language.NL]: [
          'De sauna staat twintig stappen van de zwemvijver. In de zomer is de vijver warm genoeg voor een rustige duik; in de winter is hij koud genoeg dat het warm-koud-werk doet wat het hoort te doen. De hot tub staat ernaast, voor de dagen dat de vijver bevroren is of de groep er nog niet klaar voor is.',
          'De meeste wellness-retraites draaien sauna aan het eind van de dag, met twee of drie rondes en duiken in de vijver ertussen. Op verzoek stoken we hem eerder op.',
        ],
        [Language.DE]: [
          'Die Sauna steht zwanzig Schritte vom Schwimmteich entfernt. Im Sommer ist der Teich warm genug für ruhige Schwimmrunden; im Winter kalt genug, dass die Warm-Kalt-Praxis tut, was sie soll. Der Hot Tub steht daneben — für die Tage, an denen der Teich vereist ist oder die Gruppe noch nicht so weit.',
          'Die meisten Wellness-Retreats machen Sauna am Tagesende, mit zwei oder drei Runden und Tauchgängen im Teich dazwischen. Auf Wunsch heizen wir früher an.',
        ],
      },
      imageSrc: IMAGES.accommodation.pondComplete,
      imageAlt: {
        [Language.EN]: 'Natural swimming pond at The Makers Barn',
        [Language.NL]: 'Natuurlijke zwemvijver bij The Makers Barn',
        [Language.DE]: 'Natürlicher Schwimmteich bei The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '8–14',
      description: {
        [Language.EN]: 'Group size — full venue buyout, no other guests',
        [Language.NL]: 'Groepsgrootte — volledige buyout, geen andere gasten',
        [Language.DE]: 'Gruppengröße — volle Buyout-Buchung, keine anderen Gäste',
      },
    },
    {
      number: '20',
      description: {
        [Language.EN]: 'Steps from the sauna to the swimming pond',
        [Language.NL]: 'Stappen van de sauna naar de zwemvijver',
        [Language.DE]: 'Schritte von der Sauna zum Schwimmteich',
      },
    },
    {
      number: '1,3 ha',
      description: {
        [Language.EN]: 'Of private land — yoga deck, paths, pond, sauna, fire circle',
        [Language.NL]: 'Eigen terrein — yogavlonder, paden, vijver, sauna, vuurplaats',
        [Language.DE]: 'Privatgelände — Yoga-Deck, Pfade, Teich, Sauna, Feuerkreis',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Can you cater a juice cleanse or fasting protocol?',
        [Language.NL]: 'Kunnen jullie een sapkuur of vastenprotocol verzorgen?',
        [Language.DE]: 'Könnt ihr eine Saftkur oder ein Fastenprotokoll verpflegen?',
      },
      answer: {
        [Language.EN]:
          'Yes — our cooks have run cold-pressed juice cleanses, intermittent-fasting catering, and Ayurvedic mono-diet retreats. Send us the protocol at booking and we cost it accurately.',
        [Language.NL]:
          'Ja — onze koks hebben koudgeperste sapkuren, intermittent-fasting-catering en Ayurvedische mono-dieet-retraites verzorgd. Stuur ons het protocol bij de boeking, dan berekenen we de kosten nauwkeurig.',
        [Language.DE]:
          'Ja — unsere Köche haben kaltgepresste Saftkuren, Intervallfasten-Catering und ayurvedische Mono-Diät-Retreats begleitet. Schick uns das Protokoll bei der Buchung, dann kalkulieren wir genau.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the pond safe for cold-water dipping in winter?',
        [Language.NL]: 'Is de vijver veilig om in de winter in koud water te dompelen?',
        [Language.DE]: 'Ist der Teich im Winter zum Kaltwassertauchen sicher?',
      },
      answer: {
        [Language.EN]:
          'It is a natural pond, fenced, with a jetty. Cold-water immersion always requires the lead facilitator to brief participants and supervise. We provide drying robes and the sauna is right there for re-warming.',
        [Language.NL]:
          'Het is een natuurlijke vijver, omheind, met een steiger. Bij koudwaterimmersie vragen we altijd dat de hoofdfacilitator de deelnemers briefing geeft en toezicht houdt. We zorgen voor badjassen en de sauna staat er pal naast om weer op te warmen.',
        [Language.DE]:
          'Es ist ein natürlicher, eingezäunter Teich mit Steg. Beim Kaltwassertauchen muss die Hauptfacilitatorin die Teilnehmenden briefen und beaufsichtigen. Wir stellen Bademäntel zum Trocknen bereit, und die Sauna ist direkt nebenan zum Aufwärmen.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we book massage therapists or bodyworkers on-site?',
        [Language.NL]: 'Kunnen we masseurs of lichaamswerkers op locatie boeken?',
        [Language.DE]: 'Können wir Masseurinnen oder Körpertherapeutinnen vor Ort buchen?',
      },
      answer: {
        [Language.EN]:
          'Yes — we have a small network of local therapists who travel to the venue and use the teahouse or a quiet bedroom as a treatment space. We coordinate scheduling for the cohort.',
        [Language.NL]:
          'Ja — we hebben een klein netwerk van lokale therapeuten die naar de locatie reizen en het theehuis of een rustige slaapkamer als behandelruimte gebruiken. Wij coördineren de planning voor het cohort.',
        [Language.DE]:
          'Ja — wir haben ein kleines Netzwerk lokaler Therapeutinnen, die zum Hof kommen und das Teehaus oder ein ruhiges Schlafzimmer als Behandlungsraum nutzen. Wir koordinieren die Termine für die Gruppe.',
      },
    },
    {
      question: {
        [Language.EN]: 'How early can we run a 6 AM yoga session?',
        [Language.NL]: 'Hoe vroeg kunnen we een yogasessie van 6.00 uur draaien?',
        [Language.DE]: 'Wie früh können wir eine Yoga-Session um 6 Uhr morgens machen?',
      },
      answer: {
        [Language.EN]:
          'The Hay House heating runs on a schedule we set per booking. For a 6 AM session we warm the floor from 5:30. The kitchen wakes up at the time you tell us breakfast is needed.',
        [Language.NL]:
          'De verwarming van het Hay House draait op een schema dat we per boeking instellen. Voor een sessie van 6.00 uur warmen we de vloer vanaf 5.30 uur op. De keuken komt op gang op het tijdstip dat jij doorgeeft dat het ontbijt klaar moet staan.',
        [Language.DE]:
          'Die Heizung im Hay House läuft nach einem Plan, den wir pro Buchung festlegen. Für eine Session um 6 Uhr heizen wir den Boden ab 5:30 Uhr. Die Küche fährt zu der Zeit hoch, die du uns für das Frühstück nennst.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Run your wellness programme on a farm built for it',
      [Language.NL]: 'Draai je wellness-programma op een boerderij die ervoor gemaakt is',
      [Language.DE]: 'Bring dein Wellness-Programm auf einen Hof, der dafür gemacht ist',
    },
    body: {
      [Language.EN]:
        'Tell us your dates, your group size, and the protocol your retreat is built around. We will come back with availability, kitchen costing, and a tailored quote.',
      [Language.NL]:
        'Vertel ons je data, je groepsgrootte en het protocol waar je retraite omheen is gebouwd. We komen terug met beschikbaarheid, keukenkosten en een offerte op maat.',
      [Language.DE]:
        'Sag uns deine Daten, eure Gruppengröße und das Protokoll, um das euer Retreat gebaut ist. Wir melden uns mit Verfügbarkeit, Küchenkosten und einem maßgeschneiderten Angebot.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Wellness coaches, naturopaths, and Ayurveda teachers running clean-eating, sauna and yoga programmes',
      [Language.NL]: 'Wellness-coaches, natuurgeneeskundigen en Ayurveda-docenten die clean-eating-, sauna- en yogaprogramma’s leiden',
      [Language.DE]: 'Wellness-Coaches, Heilpraktiker:innen und Ayurveda-Lehrer:innen für Clean-Eating-, Sauna- und Yogaprogramme',
    },
    cohortSize: { min: 8, max: 14 },
    keywords: {
      [Language.EN]: [
        'wellness retreat venue Netherlands',
        'detox retreat venue',
        'Ayurveda retreat venue',
        'panchakarma retreat venue',
        'clean-eating retreat venue',
        'sauna retreat venue',
        'naturopath retreat venue',
        'holistic retreat venue',
        'juice cleanse retreat venue',
        'fasting retreat venue Europe',
      ],
      [Language.NL]: [
        'wellness retraite locatie Nederland',
        'detox retraite locatie',
        'Ayurveda retraite locatie',
        'panchakarma retraite locatie',
        'clean-eating retraite locatie',
        'sauna retraite locatie',
        'natuurgeneeskunde retraite locatie',
        'holistische retraite locatie',
      ],
      [Language.DE]: [
        'Wellness-Retreat Niederlande',
        'Detox-Retreat-Ort',
        'Ayurveda-Retreat-Ort',
        'Panchakarma-Retreat-Ort',
        'Clean-Eating-Retreat-Ort',
        'Sauna-Retreat-Ort',
        'Heilpraktiker-Retreat-Ort',
      ],
    },
  },
}
