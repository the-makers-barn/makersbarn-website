import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const BREATHWORK_SOUND_HEALING_SILO: SiloContent = {
  slug: SiloSlug.BREATHWORK_SOUND_HEALING,
  route: Route.BREATHWORK_SOUND_HEALING,
  heroImageSrc: IMAGES.accommodation.fireCircleGathering,
  heroImageAlt: {
    [Language.EN]: 'Group gathering around the fire circle at The Makers Barn',
    [Language.NL]: 'Groep rond de vuurplaats bij The Makers Barn',
    [Language.DE]: 'Gruppe versammelt sich um die Feuerstelle bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Breathwork & Sound Healing Retreats — Overijssel, Netherlands',
      [Language.NL]: 'Ademwerk- & klankhealing-retraites — Overijssel, Nederland',
      [Language.DE]: 'Atemarbeit- & Klangheilung-Retreats — Overijssel, Niederlande',
    },
    description: {
      [Language.EN]:
        'Venue for breathwork & sound healing retreats in Overijssel — heated 65 m² practice barn, fire circle, sauna, 14 beds. Full buyout, 15 min from Zwolle.',
      [Language.NL]:
        'Locatie voor ademwerk- en klankhealing-retraites in Overijssel — verwarmde 65 m² praktijkruimte, vuurplaats, sauna, 14 bedden. Volledige buyout, 15 min van Zwolle.',
      [Language.DE]:
        'Ort für Atemarbeit- & Klangheilung-Retreats in Overijssel — beheizte 65 m² Übungsscheune, Feuerstelle, Sauna, 14 Betten. Voller Buyout, 15 Min von Zwolle.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For breathwork & sound facilitators',
      [Language.NL]: 'Voor ademwerk- en klankbegeleiders',
      [Language.DE]: 'Für Atem- und Klangbegleiter:innen',
    },
    title: {
      [Language.EN]: 'Breathwork & Sound Healing Retreats — Heated Barn, Fire Circle & Sauna in Overijssel',
      [Language.NL]: 'Ademwerk- & klankhealing-retraites — verwarmde schuur, vuurplaats en sauna in Overijssel',
      [Language.DE]: 'Atemarbeit- & Klangheilung-Retreats — beheizte Scheune, Feuerstelle und Sauna in Overijssel',
    },
    subtitle: {
      [Language.EN]:
        'A 65 m² heated wooden hay barn with sound system and dimmable lighting, twenty mats and bolsters on hand, a fire circle twenty steps away, and a sauna for the hours after the session. Full buyout, fifteen minutes from Zwolle.',
      [Language.NL]:
        'Een verwarmde houten hooischuur van 65 m² met geluidssysteem en dimbare verlichting, twintig matten en bolsters bij de hand, een vuurplaats op twintig passen en een sauna voor de uren na de sessie. Volledige buyout, vijftien minuten van Zwolle.',
      [Language.DE]:
        'Eine beheizte hölzerne Heuscheune mit 65 m², Soundsystem und dimmbarem Licht, zwanzig Matten und Bolster bereit, eine Feuerstelle zwanzig Schritte entfernt und eine Sauna für die Stunden nach der Session. Voller Buyout, fünfzehn Minuten von Zwolle.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A 65 m² heated wooden practice barn for the breathwork or sound session — and a fire circle, sauna, and swimming pond for what comes after.',
      [Language.NL]:
        'Een verwarmde houten praktijkruimte van 65 m² voor de ademwerk- of klanksessie — en een vuurplaats, sauna en zwemvijver voor wat daarna komt.',
      [Language.DE]:
        'Eine beheizte hölzerne Übungsscheune mit 65 m² für die Atem- oder Klangsession — und eine Feuerstelle, Sauna und ein Schwimmteich für die Zeit danach.',
    },
    caption: {
      [Language.EN]:
        'Full venue buyout on a 1.3-hectare farm. No neighbours, no shared walls, no other group on the other side of the door.',
      [Language.NL]:
        'Volledige buyout op een boerderij van 1,3 hectare. Geen buren, geen gedeelde muren, geen andere groep aan de andere kant van de deur.',
      [Language.DE]:
        'Voller Buyout auf einem 1,3 Hektar großen Hof. Keine Nachbarn, keine geteilten Wände, keine andere Gruppe hinter der Tür.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A Heated 65 m² Hay Barn Built for Breathwork & Sound Sessions',
        [Language.NL]: 'Een verwarmde hooischuur van 65 m² gemaakt voor ademwerk- en klanksessies',
        [Language.DE]: 'Eine beheizte 65 m² Heuscheune, gemacht für Atem- und Klangsessions',
      },
      body: {
        [Language.EN]: [
          'The Hay House is sixty-five square metres of heated wooden floor under a wooden ceiling. The room is warm before the first inhale, the floor stays warm through the longest breathwork journey, and the wood gives sound bowls and voice a clean, unhurried decay to work with. Sound system with bluetooth and aux, dimmable lighting, blackout option for sound healing in the dark.',
          'The space holds twenty mats laid out generously. For an active breathwork retreat, twelve to fourteen with full bolsters, blankets, and head-to-toe lie-downs is the comfortable maximum.',
        ],
        [Language.NL]: [
          'Het Hay House is vijfenzestig vierkante meter verwarmde houten vloer onder een houten plafond. De ruimte is warm vóór de eerste inademing, de vloer blijft warm tijdens de langste ademwerkreis, en het hout geeft klankschalen en stem een schone, rustige nagalm om mee te werken. Geluidssysteem met bluetooth en aux, dimbare verlichting, blackout-optie voor klankhealing in het donker.',
          'Er passen twintig matten ruim opgesteld. Voor een actieve ademwerkretraite is twaalf tot veertien deelnemers met volle bolsters, dekens en uitgestrekte lig-sessies het comfortabele maximum.',
        ],
        [Language.DE]: [
          'Das Hay House sind fünfundsechzig Quadratmeter beheizter Holzboden unter einer Holzdecke. Der Raum ist warm vor dem ersten Einatmen, der Boden bleibt durch die längste Atemreise hindurch warm, und das Holz gibt Klangschalen und Stimme einen sauberen, ruhigen Nachklang zum Arbeiten. Soundsystem mit Bluetooth und Aux, dimmbares Licht, Blackout-Option für Klangheilung im Dunkeln.',
          'Der Raum fasst zwanzig großzügig ausgelegte Matten. Für ein aktives Atem-Retreat sind zwölf bis vierzehn Teilnehmende mit vollen Bolstern, Decken und Liegen von Kopf bis Fuß das komfortable Maximum.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House practice barn glowing in golden light',
        [Language.NL]: 'Hay House praktijkruimte in gouden licht',
        [Language.DE]: 'Hay House-Übungsscheune in goldenem Licht',
      },
    },
    {
      h2: {
        [Language.EN]: 'Sauna, Fire Circle, and Swimming Pond for After the Breathwork Session',
        [Language.NL]: 'Sauna, vuurplaats en zwemvijver voor na de ademwerksessie',
        [Language.DE]: 'Sauna, Feuerstelle und Schwimmteich für die Zeit nach der Atemsession',
      },
      body: {
        [Language.EN]: [
          'After a long breathwork or sound healing journey, what people need is rarely a hotel corridor. The fire circle is twenty steps from the practice barn. The sauna and hot tub are another twenty. The swimming pond is a slow walk through the trees.',
          'Mornings open onto a 1.3-hectare farm in rural Overijssel, fifteen minutes from Zwolle — fields to walk, paths through the planted woodland, a teahouse with a single chair facing the window. Integration has somewhere to go that is not a parking lot.',
        ],
        [Language.NL]: [
          'Na een lange ademwerk- of klankhealingreis is een hotelgang zelden wat mensen nodig hebben. De vuurplaats is twintig passen van de praktijkruimte. De sauna en hot tub nog eens twintig. De zwemvijver ligt op een rustige wandeling door de bomen.',
          'Ochtenden openen op een boerderij van 1,3 hectare in landelijk Overijssel, vijftien minuten van Zwolle — velden om te lopen, paden door het aangeplante bos, een theehuis met één stoel naar het raam toe. Integratie heeft een plek om naartoe te gaan die geen parkeerplaats is.',
        ],
        [Language.DE]: [
          'Nach einer langen Atem- oder Klangheilungsreise braucht man selten einen Hotelflur. Die Feuerstelle ist zwanzig Schritte von der Übungsscheune entfernt. Sauna und Whirlpool noch einmal zwanzig. Der Schwimmteich ist ein langsamer Spaziergang durch die Bäume.',
          'Die Morgen öffnen sich auf einen 1,3 Hektar großen Hof im ländlichen Overijssel, fünfzehn Minuten von Zwolle — Felder zum Gehen, Pfade durch den angepflanzten Wald, ein Teehaus mit einem einzigen Stuhl zum Fenster hin. Integration hat einen Ort, der kein Parkplatz ist.',
        ],
      },
      imageSrc: IMAGES.accommodation.pondComplete,
      imageAlt: {
        [Language.EN]: 'Natural swimming pond at The Makers Barn',
        [Language.NL]: 'Natuurlijke zwemvijver bij The Makers Barn',
        [Language.DE]: 'Natürlicher Schwimmteich bei The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'Equipment, Mats and Catering for Your Sound Healing Retreat',
        [Language.NL]: 'Materialen, matten en catering voor je klankhealing-retraite',
        [Language.DE]: 'Equipment, Matten und Catering für dein Klangheilung-Retreat',
      },
      body: {
        [Language.EN]: [
          'Most facilitators bring their own bowls, drums, or playlists for the sound healing or breathwork retreat. We provide twenty mats, blankets, and bolsters; sound system with bluetooth and aux; mood lighting on dimmers; eye masks for purchase. We can also arrange a private chef for the post-journey meals if your retreat asks for that.',
          'For groups doing deep or vulnerable inner work, we keep the venue closed to other guests for the full duration. Full buyout, no exceptions.',
        ],
        [Language.NL]: [
          'De meeste begeleiders brengen hun eigen bowls, drums of playlists mee voor de klankhealing- of ademwerkretraite. Wij leveren twintig matten, dekens en bolsters; geluidssysteem met bluetooth en aux; sfeerverlichting met dimmers; oogmaskers te koop. We kunnen ook een privékok regelen voor de maaltijden na de reis, als je retraite daarom vraagt.',
          'Voor groepen die diep of kwetsbaar innerlijk werk doen, houden we de locatie de volledige duur gesloten voor andere gasten. Volledige buyout, geen uitzonderingen.',
        ],
        [Language.DE]: [
          'Die meisten Begleiter:innen bringen ihre eigenen Klangschalen, Trommeln oder Playlists für das Klangheilung- oder Atemarbeit-Retreat mit. Wir stellen zwanzig Matten, Decken und Bolster; Soundsystem mit Bluetooth und Aux; dimmbare Stimmungsbeleuchtung; Augenmasken zum Kauf. Wir können auch eine private Köchin für die Mahlzeiten nach der Reise organisieren, wenn dein Retreat das verlangt.',
          'Für Gruppen, die tiefe oder verletzliche innere Arbeit machen, halten wir den Ort für die gesamte Dauer für andere Gäste geschlossen. Voller Buyout, keine Ausnahmen.',
        ],
      },
    },
  ],
  facts: [
    {
      number: '65 m²',
      description: {
        [Language.EN]: 'Heated wooden practice barn — wooden ceiling, warm acoustics',
        [Language.NL]: 'Verwarmde houten praktijkruimte — houten plafond, warme akoestiek',
        [Language.DE]: 'Beheizte hölzerne Übungsscheune — Holzdecke, warme Akustik',
      },
    },
    {
      number: '12–20',
      description: {
        [Language.EN]: 'Comfortable group size for active sessions and journeys',
        [Language.NL]: 'Comfortabele groepsgrootte voor actieve sessies en reizen',
        [Language.DE]: 'Komfortable Gruppengröße für aktive Sitzungen und Reisen',
      },
    },
    {
      number: '20',
      description: {
        [Language.EN]: 'Steps from the practice barn to the fire circle',
        [Language.NL]: 'Passen van de praktijkruimte naar de vuurplaats',
        [Language.DE]: 'Schritte von der Übungsscheune zur Feuerstelle',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Can we host journeys late into the evening?',
        [Language.NL]: 'Kunnen we reizen tot laat in de avond houden?',
        [Language.DE]: 'Können wir Reisen bis spät in den Abend abhalten?',
      },
      answer: {
        [Language.EN]:
          'Yes. Full venue buyout means there are no quiet hours imposed by other guests. We ask that very loud drumming or amplified sound respects standard rural neighbour courtesies after 23:00, but our nearest neighbours are well out of earshot.',
        [Language.NL]:
          'Ja. Volledige buyout betekent dat er geen stille uren worden opgelegd door andere gasten. We vragen om bij heel luid drummen of versterkt geluid de gangbare landelijke buurtetiquette na 23.00 uur te respecteren, maar onze dichtstbijzijnde buren liggen ruim buiten gehoorsafstand.',
        [Language.DE]:
          'Ja. Voller Buyout heißt: keine Ruhezeiten, die von anderen Gästen vorgegeben werden. Wir bitten darum, bei sehr lautem Trommeln oder verstärktem Klang nach 23:00 Uhr die übliche ländliche Nachbarschaftsrücksicht zu wahren, aber unsere nächsten Nachbarn sind weit außer Hörweite.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you provide mats, bolsters, and blankets?',
        [Language.NL]: 'Leveren jullie matten, bolsters en dekens?',
        [Language.DE]: 'Stellt ihr Matten, Bolster und Decken zur Verfügung?',
      },
      answer: {
        [Language.EN]:
          'Yes — twenty of each, washed between groups. Bring your own if you have a specific brand preference and we will store them for you between sessions.',
        [Language.NL]:
          'Ja — twintig van elk, gewassen tussen groepen door. Breng je eigen mee als je een specifieke merkvoorkeur hebt, dan bewaren we ze voor je tussen sessies door.',
        [Language.DE]:
          'Ja — zwanzig von jedem, zwischen den Gruppen gewaschen. Bring deine eigenen mit, wenn du eine bestimmte Markenvorliebe hast; wir lagern sie für dich zwischen den Sitzungen ein.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the fire circle available for evening ceremonial work?',
        [Language.NL]: 'Is de vuurplaats beschikbaar voor ceremonieel avondwerk?',
        [Language.DE]: 'Ist die Feuerstelle für zeremonielle Abendarbeit verfügbar?',
      },
      answer: {
        [Language.EN]:
          'Yes. The fire circle sits twenty steps from the practice barn, with seating for fifteen and a wood store we keep filled. It is yours from sundown to whenever you call it.',
        [Language.NL]:
          'Ja. De vuurplaats staat twintig stappen van de praktijkruimte, met zitplek voor vijftien en een houtopslag die we vol houden. Hij is van jou vanaf zonsondergang tot wanneer je hem oproept.',
        [Language.DE]:
          'Ja. Die Feuerstelle liegt zwanzig Schritte von der Übungsscheune entfernt, mit Sitzgelegenheiten für fünfzehn und einem Holzlager, das wir gefüllt halten. Sie gehört dir von Sonnenuntergang bis zu dem Moment, in dem du sie schließt.',
      },
    },
    {
      question: {
        [Language.EN]: 'How does aftercare overnight work?',
        [Language.NL]: 'Hoe werkt de aftercare ’s nachts?',
        [Language.DE]: 'Wie funktioniert die Nachsorge über Nacht?',
      },
      answer: {
        [Language.EN]:
          'Most groups stay one or two nights after the journey itself for proper integration. Beds for fourteen across Horizon and Cosmos. We can arrange catering, walks, gentle yoga, and one-on-one space for facilitators to debrief participants.',
        [Language.NL]:
          'De meeste groepen blijven na de reis zelf nog een of twee nachten voor een goede integratie. Bedden voor veertien, verdeeld over Horizon en Cosmos. We kunnen catering, wandelingen, zachte yoga en één-op-één-ruimtes regelen waarin begeleiders met deelnemers kunnen nabespreken.',
        [Language.DE]:
          'Die meisten Gruppen bleiben nach der eigentlichen Reise noch ein oder zwei Nächte für eine ordentliche Integration. Betten für vierzehn, verteilt auf Horizon und Cosmos. Wir organisieren Catering, Spaziergänge, sanftes Yoga und Eins-zu-Eins-Räume, in denen Begleiter:innen mit Teilnehmenden nachbesprechen können.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your breathwork or sound healing retreat to a venue built for the practice — and the integration after',
      [Language.NL]: 'Breng je ademwerk- of klankhealing-retraite naar een locatie die gemaakt is voor de praktijk — en voor de integratie erna',
      [Language.DE]: 'Bring dein Atemarbeit- oder Klangheilung-Retreat an einen Ort, der für die Praxis gemacht ist — und für die Integration danach',
    },
    body: {
      [Language.EN]:
        'Tell us about your modality, your group size, and your dates. We will come back honestly about whether the venue fits — and what your participants will experience if it does.',
      [Language.NL]:
        'Vertel ons over je modaliteit, je groepsgrootte en je data. We laten je eerlijk weten of de locatie past — en wat je deelnemers zullen ervaren als dat zo is.',
      [Language.DE]:
        'Erzähl uns von deiner Modalität, deiner Gruppengröße und deinen Daten. Wir melden uns ehrlich zurück, ob der Ort passt — und was deine Teilnehmenden erleben werden, wenn ja.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Breathwork facilitators, sound healers, and ceremonial practitioners running multi-day residential retreats',
      [Language.NL]: 'Ademwerk-facilitators, klankbeoefenaars en ceremoniële begeleiders die meerdaagse residentiële retraites leiden',
      [Language.DE]: 'Atem-Facilitator:innen, Klangpraktizierende und zeremonielle Begleiter:innen, die mehrtägige Residential-Retreats leiten',
    },
    cohortSize: { min: 8, max: 16 },
    keywords: {
      [Language.EN]: [
        'breathwork retreat venue',
        'holotropic breathwork retreat venue',
        'conscious connected breathwork venue',
        'sound healing retreat venue',
        'gong bath retreat venue',
        'sound bath retreat venue',
        'ceremonial breathwork venue',
        'vibroacoustic retreat venue',
        'breathwork facilitator retreat',
        'breathwork venue Netherlands',
      ],
      [Language.NL]: [
        'ademwerk retraite locatie',
        'holotropisch ademwerk retraite',
        'conscious connected breathwork locatie',
        'klankhealing retraite locatie',
        'klankschalen retraite locatie',
        'ceremoniële ademwerk locatie',
        'ademwerk retraite Nederland',
      ],
      [Language.DE]: [
        'Atemarbeit Retreat-Ort',
        'Holotropes Atmen Retreat',
        'Conscious Connected Breathwork Ort',
        'Klangheilung Retreat-Ort',
        'Klangschalen Retreat-Ort',
        'zeremonielles Atem-Retreat',
      ],
    },
  },
}
