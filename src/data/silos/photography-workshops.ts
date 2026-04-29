import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const PHOTOGRAPHY_WORKSHOPS_SILO: SiloContent = {
  slug: SiloSlug.PHOTOGRAPHY_WORKSHOPS,
  route: Route.PHOTOGRAPHY_WORKSHOPS,
  heroImageSrc: IMAGES.accommodation.gardenViewWithHammocks,
  heroImageAlt: {
    [Language.EN]: 'Wide garden view with hammocks at The Makers Barn',
    [Language.NL]: 'Wijds tuinzicht met hangmatten bij The Makers Barn',
    [Language.DE]: 'Weiter Gartenblick mit Hängematten bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Photography Workshop Venue — Overijssel, Netherlands',
      [Language.NL]: 'Locatie voor fotografie-workshops — Overijssel, Nederland',
      [Language.DE]: 'Ort für Fotografie-Workshops — Overijssel, Niederlande',
    },
    description: {
      [Language.EN]:
        'A 1.3-hectare farm in Overijssel for pro photographers running multi-day workshops. Big skies, planted woodland, the Sallandse Heuvelrug nearby, accommodation for the cohort.',
      [Language.NL]:
        'Een boerderij van 1,3 hectare in Overijssel voor professionele fotografen die meerdaagse workshops leiden. Grote luchten, aangeplant bos, de Sallandse Heuvelrug op een steenworp, accommodatie voor het cohort.',
      [Language.DE]:
        'Ein Hof von 1,3 Hektar in Overijssel für Profifotografen, die mehrtägige Workshops leiten. Weite Himmel, gepflanzter Wald, die Sallandse Heuvelrug in der Nähe, Unterkunft für die Gruppe.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For professional photographers',
      [Language.NL]: 'Voor professionele fotografen',
      [Language.DE]: 'Für professionelle Fotografen',
    },
    title: {
      [Language.EN]: 'A Workshop Base for Multi-Day Photography Retreats',
      [Language.NL]: 'Een werkbasis voor meerdaagse fotografie-retraites',
      [Language.DE]: 'Eine Basis für mehrtägige Fotografie-Retreats',
    },
    subtitle: {
      [Language.EN]:
        'Big skies, twelve hundred trees we planted, the IJssel river ten minutes away. A base camp that handles the bedding, the meals, and the dark room you will need at the end of each day.',
      [Language.NL]:
        'Grote luchten, twaalfhonderd bomen die we hebben geplant, de IJssel op tien minuten. Een basis die het beddengoed, de maaltijden en de donkere kamer regelt die je aan het einde van elke dag nodig hebt.',
      [Language.DE]:
        'Weite Himmel, zwölfhundert Bäume, die wir gepflanzt haben, die IJssel zehn Minuten entfernt. Ein Basislager, das Bettwäsche, Mahlzeiten und den Dunkelraum übernimmt, den du am Ende jedes Tages brauchst.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A subject for the morning, a base for the afternoon, a long table for the evening edit.',
      [Language.NL]:
        'Een onderwerp voor de ochtend, een basis voor de middag, een lange tafel voor de avondbewerking.',
      [Language.DE]:
        'Ein Motiv für den Morgen, eine Basis für den Nachmittag, ein langer Tisch für den Edit am Abend.',
    },
    caption: {
      [Language.EN]:
        'Built for cohorts of six to twelve, three to seven days, residential.',
      [Language.NL]:
        'Geschikt voor cohorten van zes tot twaalf, drie tot zeven dagen, residentieel.',
      [Language.DE]:
        'Gemacht für Gruppen von sechs bis zwölf, drei bis sieben Tage, mit Übernachtung.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'Subjects in walking distance — and a horizon when you need one',
        [Language.NL]: 'Onderwerpen op loopafstand — en een horizon als je die nodig hebt',
        [Language.DE]: 'Motive in Gehweite — und ein Horizont, wenn du einen brauchst',
      },
      body: {
        [Language.EN]: [
          'On the farm itself: twelve hundred planted trees, a swimming pond, a thatched teahouse, the Hay House barn at golden hour. Within a five-minute drive: the IJssel river, a 17th-century castle (Kasteel Nijenhuis) with a sculpture garden, working dairy farms, and the long Salland horizon.',
          'Within thirty minutes: the Sallandse Heuvelrug national park for landscape work, three Hanseatic towns for street photography, and the heath if your workshop needs heather in bloom.',
        ],
        [Language.NL]: [
          'Op de boerderij zelf: twaalfhonderd aangeplante bomen, een zwemvijver, een rieten theehuis, de Hay House-schuur op het gouden uur. Binnen vijf minuten met de auto: de IJssel, een 17e-eeuws kasteel (Kasteel Nijenhuis) met een beeldentuin, werkende melkveebedrijven, en de lange Salland-horizon.',
          'Binnen dertig minuten: het Nationaal Park Sallandse Heuvelrug voor landschapswerk, drie Hanzesteden voor straatfotografie, en de heide als je workshop bloeiende heide nodig heeft.',
        ],
        [Language.DE]: [
          'Auf dem Hof selbst: zwölfhundert gepflanzte Bäume, ein Schwimmteich, ein reetgedecktes Teehaus, die Hay House-Scheune zur goldenen Stunde. Fünf Autominuten entfernt: die IJssel, ein Schloss aus dem 17. Jahrhundert (Kasteel Nijenhuis) mit Skulpturengarten, aktive Milchhöfe und der weite Salland-Horizont.',
          'Innerhalb von dreißig Minuten: der Nationalpark Sallandse Heuvelrug für Landschaftsarbeit, drei Hansestädte für Straßenfotografie, und die Heide, wenn dein Workshop blühende Heide braucht.',
        ],
      },
      imageSrc: IMAGES.location.kasteelNijenhuis,
      imageAlt: {
        [Language.EN]: 'Kasteel Nijenhuis castle with sculpture gardens',
        [Language.NL]: 'Kasteel Nijenhuis met beeldentuinen',
        [Language.DE]: 'Schloss Kasteel Nijenhuis mit Skulpturengärten',
      },
    },
    {
      h2: {
        [Language.EN]: 'A barn that becomes a daily review room',
        [Language.NL]: 'Een schuur die een dagelijkse reviewruimte wordt',
        [Language.DE]: 'Eine Scheune, die zum täglichen Review-Raum wird',
      },
      body: {
        [Language.EN]: [
          'The Hay House practice barn turns into your evening review space. Sound system, dimmable light, big wall projection if you bring a projector, and seating for the cohort. Most photography workshops use it for the daily critique session and the technique demonstrations the morning shoots build on.',
          'The kitchen on the second floor of Horizon doubles as the editing room — long table, plenty of outlets, fibre internet for cloud workflows.',
        ],
        [Language.NL]: [
          'De Hay House-praktijkruimte wordt je reviewruimte voor de avond. Geluidssysteem, dimbare verlichting, grote muurprojectie als je een beamer meebrengt, en zitplaatsen voor het cohort. De meeste fotografie-workshops gebruiken hem voor de dagelijkse critique-sessie en de techniekdemonstraties waar de ochtendshoots op voortbouwen.',
          'De keuken op de tweede verdieping van Horizon fungeert als editingruimte — lange tafel, voldoende stopcontacten, glasvezelinternet voor cloud-workflows.',
        ],
        [Language.DE]: [
          'Die Praxisscheune Hay House wird zu eurem Review-Raum am Abend. Soundsystem, dimmbares Licht, große Wandprojektion, wenn du einen Beamer mitbringst, und Sitzplätze für die Gruppe. Die meisten Fotografie-Workshops nutzen sie für die tägliche Critique-Session und die Technik-Demos, auf denen die Morgenshoots aufbauen.',
          'Die Küche im zweiten Stock von Horizon dient zugleich als Editing-Raum — langer Tisch, genug Steckdosen, Glasfaserinternet für Cloud-Workflows.',
        ],
      },
      imageSrc: IMAGES.accommodation.horizonKitchen,
      imageAlt: {
        [Language.EN]: 'Horizon barn kitchen — long table, good light',
        [Language.NL]: 'Horizon-schuur keuken — lange tafel, goed licht',
        [Language.DE]: 'Küche der Horizon-Scheune — langer Tisch, gutes Licht',
      },
    },
    {
      h2: {
        [Language.EN]: 'Sunrises that justify the early call time',
        [Language.NL]: 'Zonsopkomsten die het vroege opstaan waard zijn',
        [Language.DE]: 'Sonnenaufgänge, die das frühe Aufstehen rechtfertigen',
      },
      body: {
        [Language.EN]: [
          'For workshops that build around blue-hour and golden-hour shoots, we open the kitchen at the time you tell us. Pre-shoot coffee at 4:45 AM is a normal request. Post-shoot brunch at 11 AM is the natural counterpart.',
          'In December the sun rises late enough that everyone gets a proper night’s sleep. In June, the early light is worth the alarm — and the sauna at 22:00 is worth the long day.',
        ],
        [Language.NL]: [
          'Voor workshops die zich richten op blauwe-uur- en gouden-uur-shoots openen we de keuken op het tijdstip dat jij doorgeeft. Pre-shoot koffie om 4.45 uur is een normaal verzoek. Post-shoot brunch om 11.00 uur is de natuurlijke tegenhanger.',
          'In december komt de zon laat genoeg op dat iedereen behoorlijk uitslaapt. In juni is het vroege licht de wekker waard — en de sauna om 22.00 uur de lange dag.',
        ],
        [Language.DE]: [
          'Für Workshops rund um Blaue-Stunde- und Goldene-Stunde-Shoots öffnen wir die Küche zu der Zeit, die du uns nennst. Pre-Shoot-Kaffee um 4:45 Uhr ist eine normale Anfrage. Post-Shoot-Brunch um 11:00 Uhr ist das natürliche Gegenstück.',
          'Im Dezember geht die Sonne spät genug auf, dass alle ordentlich schlafen. Im Juni ist das frühe Licht den Wecker wert — und die Sauna um 22:00 Uhr den langen Tag.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House barn at the golden hour',
        [Language.NL]: 'Hay House-schuur op het gouden uur',
        [Language.DE]: 'Hay House-Scheune zur goldenen Stunde',
      },
    },
  ],
  facts: [
    {
      number: '6–12',
      description: {
        [Language.EN]: 'Cohort size — small enough for one-to-one feedback per day',
        [Language.NL]: 'Cohortgrootte — klein genoeg voor één-op-één feedback per dag',
        [Language.DE]: 'Gruppengröße — klein genug für tägliches Eins-zu-eins-Feedback',
      },
    },
    {
      number: '5 min',
      description: {
        [Language.EN]: 'To the IJssel river and Kasteel Nijenhuis sculpture park',
        [Language.NL]: 'Naar de IJssel en de beeldentuin van Kasteel Nijenhuis',
        [Language.DE]: 'Zur IJssel und zum Skulpturenpark von Kasteel Nijenhuis',
      },
    },
    {
      number: '30 min',
      description: {
        [Language.EN]: 'To the Sallandse Heuvelrug national park for landscape work',
        [Language.NL]: 'Naar het Nationaal Park Sallandse Heuvelrug voor landschapswerk',
        [Language.DE]: 'Zum Nationalpark Sallandse Heuvelrug für Landschaftsarbeit',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Is the wifi fast enough for cloud-based editing workflows?',
        [Language.NL]: 'Is de wifi snel genoeg voor cloud-based editingworkflows?',
        [Language.DE]: 'Ist das WLAN schnell genug für cloudbasierte Editing-Workflows?',
      },
      answer: {
        [Language.EN]:
          'Yes. Fibre internet covers the whole farm. We have hosted workshops where every participant uploaded a day of RAW files to Lightroom Cloud overnight without trouble.',
        [Language.NL]:
          'Ja. Glasvezelinternet dekt de hele boerderij. We hebben workshops gehad waarbij elke deelnemer ’s nachts moeiteloos een dag aan RAW-bestanden naar Lightroom Cloud uploadde.',
        [Language.DE]:
          'Ja. Glasfaser deckt den gesamten Hof ab. Wir hatten Workshops, in denen jede Teilnehmerin nachts problemlos einen Tag RAW-Dateien zu Lightroom Cloud hochgeladen hat.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can you arrange transport to nearby shoot locations?',
        [Language.NL]: 'Kunnen jullie vervoer naar nabijgelegen shoot-locaties regelen?',
        [Language.DE]: 'Könnt ihr Transport zu nahe gelegenen Shoot-Locations organisieren?',
      },
      answer: {
        [Language.EN]:
          'For day trips to the Sallandse Heuvelrug or the Hanseatic cities, we arrange a private van for the cohort. For shorter walks to the IJssel or the castle, bicycles are free to use.',
        [Language.NL]:
          'Voor dagtochten naar de Sallandse Heuvelrug of de Hanzesteden regelen we een privébusje voor het cohort. Voor kortere wandelingen naar de IJssel of het kasteel zijn de fietsen vrij te gebruiken.',
        [Language.DE]:
          'Für Tagesausflüge zur Sallandse Heuvelrug oder in die Hansestädte organisieren wir einen privaten Van für die Gruppe. Für kürzere Wege zur IJssel oder zum Schloss könnt ihr die Fahrräder kostenlos nutzen.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you have models or subjects available for portraiture workshops?',
        [Language.NL]: 'Zijn er modellen of onderwerpen beschikbaar voor portretworkshops?',
        [Language.DE]: 'Gibt es Modelle oder Motive für Porträt-Workshops?',
      },
      answer: {
        [Language.EN]:
          'We do not provide models, but we have local network connections — agricultural workers, craftspeople, and locals who have modelled for previous workshops. Tell us your needs at booking and we will see what we can arrange.',
        [Language.NL]:
          'We leveren geen modellen, maar we hebben lokale contacten — landarbeiders, ambachtslieden en bewoners die voor eerdere workshops hebben gemodelleerd. Laat ons bij de boeking weten wat je nodig hebt, dan kijken we wat we kunnen regelen.',
        [Language.DE]:
          'Wir stellen keine Modelle, aber wir haben lokale Kontakte — Landarbeiter, Handwerker und Anwohner, die schon für frühere Workshops Modell gestanden haben. Sag uns bei der Buchung, was du brauchst, und wir schauen, was sich machen lässt.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is there a darkroom for film-based workshops?',
        [Language.NL]: 'Is er een doka voor analoge workshops?',
        [Language.DE]: 'Gibt es eine Dunkelkammer für analoge Workshops?',
      },
      answer: {
        [Language.EN]:
          'Not a built darkroom — but we can blackout the teahouse for tray-developed black-and-white work and have hosted analog workshops that did exactly this. Tell us at booking and we will set it up.',
        [Language.NL]:
          'Geen vaste doka — maar we kunnen het theehuis verduisteren voor zwart-wit-ontwikkeling met bakken, en we hebben al analoge workshops gehad die precies dit deden. Laat het weten bij de boeking, dan richten we het in.',
        [Language.DE]:
          'Keine fest eingerichtete Dunkelkammer — aber wir können das Teehaus abdunkeln für Schwarz-Weiß-Entwicklung in Schalen und haben schon analoge Workshops gehostet, die genau das gemacht haben. Sag uns bei der Buchung Bescheid, dann richten wir es ein.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your photography workshop to a place with weather and time',
      [Language.NL]: 'Breng je fotografie-workshop naar een plek met weer en tijd',
      [Language.DE]: 'Bring deinen Fotografie-Workshop an einen Ort mit Wetter und Zeit',
    },
    body: {
      [Language.EN]:
        'Tell us your dates, your cohort size, and the kind of work the workshop is built around — landscape, portrait, documentary, fine art. We will come back with availability and a quote.',
      [Language.NL]:
        'Vertel ons je data, je cohortgrootte en het soort werk waar de workshop omheen is gebouwd — landschap, portret, documentair, fine art. We komen terug met beschikbaarheid en een offerte.',
      [Language.DE]:
        'Sag uns deine Daten, eure Gruppengröße und die Art Arbeit, um die der Workshop gebaut ist — Landschaft, Porträt, Dokumentarisch, Fine Art. Wir melden uns mit Verfügbarkeit und einem Angebot.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Professional photographers running multi-day workshops',
      [Language.NL]: 'Professionele fotografen die meerdaagse workshops leiden',
      [Language.DE]: 'Professionelle Fotograf:innen, die mehrtägige Workshops leiten',
    },
    cohortSize: { min: 6, max: 12 },
    keywords: {
      [Language.EN]: [
        'photography workshop venue Netherlands',
        'landscape photography workshop venue',
        'fine art photography retreat venue',
        'documentary photography workshop venue',
        'portrait photography workshop venue',
        'residential photography workshop',
        'photography retreat venue Overijssel',
        'photography teacher venue',
        'IJssel photography workshop base',
        'multi-day photography retreat',
      ],
      [Language.NL]: [
        'fotografie workshop locatie Nederland',
        'landschapsfotografie workshop locatie',
        'fine art fotografie retraite',
        'documentaire fotografie workshop',
        'portretfotografie workshop locatie',
        'residentiële fotografieworkshop',
        'fotografie retraite Overijssel',
      ],
      [Language.DE]: [
        'Fotografie-Workshop-Ort Niederlande',
        'Landschaftsfotografie-Workshop-Ort',
        'Fine-Art-Fotografie-Retreat',
        'dokumentarischer Fotografie-Workshop',
        'Porträtfotografie-Workshop-Ort',
        'mehrtägiger Fotografie-Workshop',
      ],
    },
  },
}
