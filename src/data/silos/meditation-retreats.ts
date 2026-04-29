import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const MEDITATION_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.MEDITATION_RETREATS,
  route: Route.MEDITATION_RETREATS,
  heroImageSrc: IMAGES.accommodation.fieldWalking,
  heroImageAlt: {
    [Language.EN]: 'Retreat guests walking in silence through the fields at The Makers Barn',
    [Language.NL]: 'Retraite-gasten lopen in stilte door de velden bij The Makers Barn',
    [Language.DE]: 'Retreat-Gäste, die schweigend durch die Felder bei The Makers Barn gehen',
  },
  meta: {
    title: {
      [Language.EN]: 'Silent Meditation & Buddhist Retreat Venue — Overijssel, NL',
      [Language.NL]: 'Stille Meditatie- & Boeddhistische Retraite Locatie — Overijssel',
      [Language.DE]: 'Stille Meditations- & buddhistische Retreats — Overijssel',
    },
    description: {
      [Language.EN]:
        'Silent meditation and Buddhist retreat venue in Overijssel, Netherlands. 1.3 hectares of private land, 14 beds, 65m² heated shala, 15 min from Zwolle.',
      [Language.NL]:
        'Locatie voor stille meditatie- en boeddhistische retraites in Overijssel. 1,3 hectare eigen terrein, 14 bedden, verwarmde shala van 65m², 15 min van Zwolle.',
      [Language.DE]:
        'Ort für stille Meditations- und buddhistische Retreats in Overijssel, Niederlande. 1,3 Hektar eigenes Land, 14 Betten, beheizte 65m²-Shala, 15 Min. von Zwolle.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For meditation & dharma groups',
      [Language.NL]: 'Voor meditatie- & dharma-groepen',
      [Language.DE]: 'Für Meditations- und Dharma-Gruppen',
    },
    title: {
      [Language.EN]: 'Silent Meditation & Buddhist Retreats — Private Venue in Overijssel',
      [Language.NL]: 'Stille Meditatie- & Boeddhistische Retraites — Privé-locatie in Overijssel',
      [Language.DE]: 'Stille Meditations- & buddhistische Retreats — privater Ort in Overijssel',
    },
    subtitle: {
      [Language.EN]:
        'A 1.3-hectare private farm in rural Overijssel — no shared buildings, no neighbouring guests, 15 minutes from Zwolle. A working venue for silent retreats and Buddhist groups.',
      [Language.NL]:
        'Een eigen boerderij van 1,3 hectare in landelijk Overijssel — geen gedeelde gebouwen, geen andere gasten, 15 minuten van Zwolle. Een werkende locatie voor stille retraites en boeddhistische groepen.',
      [Language.DE]:
        'Ein 1,3 Hektar großer Privathof im ländlichen Overijssel — keine geteilten Gebäude, keine Nachbargäste, 15 Minuten von Zwolle. Ein eingespielter Ort für stille Retreats und buddhistische Gruppen.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        '13,000 m² of private land — no roads, no neighbours, no shared buildings.',
      [Language.NL]:
        '13.000 m² eigen terrein — geen wegen, geen buren, geen gedeelde gebouwen.',
      [Language.DE]:
        '13.000 m² Privatgelände — keine Straßen, keine Nachbarn, keine geteilten Gebäude.',
    },
    caption: {
      [Language.EN]:
        'A 65m² heated hay-barn shala, low lighting, and a kitchen that runs on your meditation schedule.',
      [Language.NL]:
        'Een verwarmde shala van 65m² in de hooischuur, gedempt licht en een keuken die meedraait op jouw meditatieschema.',
      [Language.DE]:
        'Eine beheizte 65m²-Shala in der Heuscheune, gedämpftes Licht und eine Küche, die sich nach deinem Meditationsplan richtet.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A hay-barn shala built for long silent sittings',
        [Language.NL]: 'Een shala in de hooischuur, gemaakt voor lange stille zittingen',
        [Language.DE]: 'Eine Heuscheunen-Shala für lange stille Sitzungen',
      },
      body: {
        [Language.EN]: [
          'The Hay House is a 65m² heated practice hall with wooden floors, dimmable light, and room for twenty cushions in a circle. Geshe Pema Dorjee has taught Tibetan Buddhism here in two annual retreats since the venue opened — the 7 AM to 8 PM rhythm of his programme has shaped how the kitchen, the heating, and the hot water run. Vipassana, Zen, and breath-based meditation groups have used the same shape since.',
          'You bring the teacher and the lineage. We bring a meditation retreat venue that already knows what a long sitting day asks of it.',
        ],
        [Language.NL]: [
          'Het Hay House is een verwarmde praktijkruimte van 65m² met houten vloeren, dimbaar licht en plek voor twintig kussens in een kring. Geshe Pema Dorjee geeft hier sinds de opening jaarlijks twee Tibetaans-boeddhistische retraites — zijn programma loopt van 7.00 tot 20.00 uur en de keuken, verwarming en warm water zijn daarop afgestemd. Vipassana-, Zen- en ademgerichte meditatiegroepen werken sindsdien met dezelfde structuur.',
          'Jij brengt de leraar en de traditie mee. Wij bieden een meditatie-retraitelocatie die al weet wat een lange zitdag vraagt.',
        ],
        [Language.DE]: [
          'Das Hay House ist eine beheizte 65m²-Praxishalle mit Holzboden, dimmbarem Licht und Platz für zwanzig Kissen im Kreis. Geshe Pema Dorjee unterrichtet hier seit der Eröffnung in zwei jährlichen Retreats tibetischen Buddhismus — sein Programm läuft von 7 bis 20 Uhr, und Küche, Heizung und Warmwasser sind darauf eingestellt. Vipassana-, Zen- und atemorientierte Meditationsgruppen arbeiten seither mit derselben Form.',
          'Du bringst Lehrer und Linie mit. Wir bringen einen Meditations-Retreat-Ort, der schon weiß, was ein langer Sitztag verlangt.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'Practice space prepared with cushions and meditation mats',
        [Language.NL]: 'Praktijkruimte met meditatiekussens en matten klaargezet',
        [Language.DE]: 'Praxisraum mit Kissen und Meditationsmatten vorbereitet',
      },
    },
    {
      h2: {
        [Language.EN]: 'Silent practice space with no shared neighbours',
        [Language.NL]: 'Stille praktijkruimte zonder gedeelde buren',
        [Language.DE]: 'Stiller Praxisraum ohne geteilte Nachbarn',
      },
      body: {
        [Language.EN]: [
          'The farm sits on its own 1.3 hectares (13,000 m²) in rural Overijssel, 15 minutes from Zwolle. There are no shared buildings, no neighbouring guests, and no parking lot facing the practice room. The closest road is a quiet country lane — beyond it, fields, the Sallandse Heuvelrug, and the IJssel river.',
          'Walking meditation has somewhere to go. Silent meals have somewhere to be eaten. A noble silence holds without anyone having to defend it. For a Buddhist retreat or a fully silent meditation retreat, that lack of background traffic is half the work done.',
        ],
        [Language.NL]: [
          'De boerderij ligt op een eigen terrein van 1,3 hectare (13.000 m²) in landelijk Overijssel, 15 minuten van Zwolle. Er zijn geen gedeelde gebouwen, geen andere gasten, geen parkeerplaats die uitkijkt op de praktijkruimte. De dichtstbijzijnde weg is een stille landweg, en daarachter: velden, de Sallandse Heuvelrug, de IJssel.',
          'Voor loopmeditatie is er ruimte om te lopen. Voor stille maaltijden is er een eigen plek. Een edele stilte houdt stand zonder dat iemand hem hoeft te verdedigen. Voor een boeddhistische retraite of een volledig stille meditatieretraite is die afwezigheid van achtergrondverkeer al het halve werk.',
        ],
        [Language.DE]: [
          'Der Hof liegt auf eigenem Grund von 1,3 Hektar (13.000 m²) im ländlichen Overijssel, 15 Minuten von Zwolle. Es gibt keine geteilten Gebäude, keine Nachbargäste, keinen Parkplatz vor dem Praxisraum. Die nächste Straße ist ein ruhiger Feldweg — dahinter Felder, die Sallandse Heuvelrug und die IJssel.',
          'Für Gehmeditation gibt es Raum zum Gehen. Für schweigende Mahlzeiten gibt es einen eigenen Platz. Ein edles Schweigen trägt, ohne dass jemand es verteidigen muss. Für ein buddhistisches Retreat oder ein vollständig stilles Meditations-Retreat ist genau dieses Fehlen von Hintergrundverkehr schon die halbe Arbeit.',
        ],
      },
      imageSrc: IMAGES.accommodation.outsideWalk,
      imageAlt: {
        [Language.EN]: 'Walking path through the trees at The Makers Barn',
        [Language.NL]: 'Wandelpad door de bomen bij The Makers Barn',
        [Language.DE]: 'Wanderweg durch die Bäume bei The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'Accommodating silence, schedules, and shrine rooms',
        [Language.NL]: 'Ruimte voor stilte, ritme en altaren',
        [Language.DE]: 'Raum für Stille, Tagesablauf und Altarräume',
      },
      body: {
        [Language.EN]: [
          'The Hay House practice barn doubles as a shrine room. We have stored thangkas and altars between retreats and helped set them up before. Vegetarian and Ayurvedic-leaning catering is part of the network we work with.',
          'Sleeping is across single, twin, and shared rooms in Horizon, plus the Cosmos cabin for a teacher. The full venue takes up to fourteen overnight, with day-program capacity of twenty in the practice space.',
        ],
        [Language.NL]: [
          'De Hay House-praktijkruimte fungeert ook als altaarruimte. We hebben thangka’s en altaren tussen retraites door voor groepen bewaard, en helpen graag bij het opbouwen. Vegetarische en ayurvedisch-geïnspireerde catering hoort bij het netwerk waarmee we werken.',
          'Slapen kan in eenpersoons-, tweepersoons- en gedeelde kamers in Horizon, plus de Cosmos cabin voor een leraar. De volledige locatie biedt slaapplek voor veertien, met een dagprogramma-capaciteit van twintig in de praktijkruimte.',
        ],
        [Language.DE]: [
          'Die Hay House-Praxisscheune dient zugleich als Altarraum. Wir haben Thangkas und Altäre schon zwischen Retreats gelagert und beim Aufbau geholfen. Vegetarisches und ayurvedisch geprägtes Catering gehört zum Netzwerk, mit dem wir arbeiten.',
          'Geschlafen wird in Einzel-, Doppel- und Mehrbettzimmern in Horizon, dazu die Cosmos-Hütte für einen Lehrer. Der ganze Ort bietet bis zu vierzehn Übernachtungsplätze, mit einer Tagesprogramm-Kapazität von zwanzig im Praxisraum.',
        ],
      },
    },
  ],
  facts: [
    {
      number: '13.000+ m²',
      description: {
        [Language.EN]: 'Of private land — full buyout, no shared buildings or neighbouring guests',
        [Language.NL]: 'Eigen terrein — volledige buyout, geen gedeelde gebouwen of andere gasten',
        [Language.DE]: 'Eigenes Gelände — kompletter Buyout, keine geteilten Gebäude oder Nachbargäste',
      },
    },
    {
      number: '7–20',
      description: {
        [Language.EN]: 'Practice-day window — heating, water, and kitchen built around it',
        [Language.NL]: 'Praktijkdag-venster — verwarming, water en keuken zijn erop afgestemd',
        [Language.DE]: 'Zeitfenster eines Praxistags — Heizung, Wasser und Küche sind darauf eingestellt',
      },
    },
    {
      number: '14',
      description: {
        [Language.EN]: 'Beds across Horizon and Cosmos for sangha and teachers',
        [Language.NL]: 'Bedden verdeeld over Horizon en Cosmos voor sangha en leraren',
        [Language.DE]: 'Betten verteilt auf Horizon und Cosmos für Sangha und Lehrer',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A retreat-day rhythm we already know',
      [Language.NL]: 'Een retraite-ritme dat we al kennen',
      [Language.DE]: 'Ein Retreat-Tagesrhythmus, den wir schon kennen',
    },
    intro: {
      [Language.EN]:
        'Adapted from the schedule Geshe Pema Dorjee has used here since 2022. The kitchen and heating are pre-configured for it.',
      [Language.NL]:
        'Gebaseerd op het schema dat Geshe Pema Dorjee hier sinds 2022 hanteert. De keuken en verwarming zijn er al op afgestemd.',
      [Language.DE]:
        'Angelehnt an den Tagesablauf, den Geshe Pema Dorjee hier seit 2022 nutzt. Küche und Heizung sind darauf voreingestellt.',
    },
    items: [
      {
        time: '07:00',
        activity: {
          [Language.EN]: 'Guided meditation',
          [Language.NL]: 'Begeleide meditatie',
          [Language.DE]: 'Geführte Meditation',
        },
      },
      {
        time: '08:00',
        activity: {
          [Language.EN]: 'Vegetarian breakfast',
          [Language.NL]: 'Vegetarisch ontbijt',
          [Language.DE]: 'Vegetarisches Frühstück',
        },
      },
      {
        time: '09:30',
        activity: {
          [Language.EN]: 'Morning teaching',
          [Language.NL]: 'Ochtendonderricht',
          [Language.DE]: 'Vormittagsunterweisung',
        },
      },
      {
        time: '12:30',
        activity: {
          [Language.EN]: 'Lunch (silent)',
          [Language.NL]: 'Lunch (in stilte)',
          [Language.DE]: 'Mittagessen (in Stille)',
        },
      },
      {
        time: '15:00',
        activity: {
          [Language.EN]: 'Afternoon teaching',
          [Language.NL]: 'Middagonderricht',
          [Language.DE]: 'Nachmittagsunterweisung',
        },
      },
      {
        time: '17:30',
        activity: {
          [Language.EN]: 'Walking meditation outside',
          [Language.NL]: 'Loopmeditatie buiten',
          [Language.DE]: 'Gehmeditation draußen',
        },
      },
      {
        time: '19:00',
        activity: {
          [Language.EN]: 'Light dinner',
          [Language.NL]: 'Lichte maaltijd',
          [Language.DE]: 'Leichtes Abendessen',
        },
      },
      {
        time: '20:00',
        activity: {
          [Language.EN]: 'Closing sit',
          [Language.NL]: 'Afsluitende sessie',
          [Language.DE]: 'Abschließendes Sitzen',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can we hold a fully silent retreat?',
        [Language.NL]: 'Kunnen we een volledig stille retraite houden?',
        [Language.DE]: 'Können wir ein komplett stilles Retreat halten?',
      },
      answer: {
        [Language.EN]:
          'Yes — full buyout means no other guests will speak in the spaces. We brief our team to stay quiet and only intervene if needed. Many groups do extended silent stretches without issue.',
        [Language.NL]:
          'Ja — bij een volledige buyout zijn er geen andere gasten die in de ruimtes spreken. Ons team houdt zich stil en grijpt alleen in als het nodig is. Veel groepen houden moeiteloos langere periodes van stilte aan.',
        [Language.DE]:
          'Ja — beim vollen Buyout sprechen keine anderen Gäste in den Räumen. Wir weisen unser Team an, leise zu bleiben und nur einzugreifen, wenn es nötig ist. Viele Gruppen halten lange stille Phasen problemlos durch.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you accommodate shrine rooms and altars?',
        [Language.NL]: 'Kunnen we een altaarruimte inrichten?',
        [Language.DE]: 'Sind Altarräume und Schreine möglich?',
      },
      answer: {
        [Language.EN]:
          'Yes. The Hay House can be set up as a shrine room and we have storage between retreats for thangkas, statues and ritual objects.',
        [Language.NL]:
          'Ja. Het Hay House kan ingericht worden als altaarruimte en we hebben opslag tussen retraites door voor thangka’s, beelden en rituele objecten.',
        [Language.DE]:
          'Ja. Das Hay House kann als Altarraum eingerichtet werden, und wir haben zwischen den Retreats Stauraum für Thangkas, Statuen und rituelle Objekte.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the catering vegetarian-friendly?',
        [Language.NL]: 'Is de catering vegetarisch-vriendelijk?',
        [Language.DE]: 'Ist das Catering vegetarisch-freundlich?',
      },
      answer: {
        [Language.EN]:
          'Yes — most retreat groups eat fully vegetarian here, with vegan and Ayurvedic options available through our local kitchen partners.',
        [Language.NL]:
          'Ja — de meeste retraitegroepen eten hier volledig vegetarisch, met veganistische en ayurvedische opties via onze lokale keukenpartners.',
        [Language.DE]:
          'Ja — die meisten Retreatgruppen essen hier komplett vegetarisch, mit veganen und ayurvedischen Optionen über unsere lokalen Küchenpartner.',
      },
    },
    {
      question: {
        [Language.EN]: 'How does silence work at meal times?',
        [Language.NL]: 'Hoe werkt stilte tijdens maaltijden?',
        [Language.DE]: 'Wie funktioniert die Stille bei den Mahlzeiten?',
      },
      answer: {
        [Language.EN]:
          'Meals are served in Horizon’s kitchen and dining area. We can plate before guests arrive so the meal stays fully silent, or set up a serve-yourself station — whichever you prefer.',
        [Language.NL]:
          'Maaltijden worden geserveerd in de keuken en eetruimte van Horizon. We kunnen alvast opdienen voordat iedereen binnenkomt, zodat de maaltijd volledig stil blijft, of een buffet inrichten — net wat jullie willen.',
        [Language.DE]:
          'Die Mahlzeiten werden in der Küche und im Essbereich von Horizon serviert. Wir richten die Teller schon an, bevor die Gäste kommen, damit die Mahlzeit ganz still bleibt, oder wir stellen eine Selbstbedienungsstation auf — ganz wie ihr wollt.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Hold your retreat in a place where silence is already at home',
      [Language.NL]: 'Houd je retraite op een plek waar stilte al thuis is',
      [Language.DE]: 'Halte dein Retreat an einem Ort, an dem die Stille schon zu Hause ist',
    },
    body: {
      [Language.EN]:
        'Tell us your tradition, your teacher, your dates. We have hosted lineages from Tibetan Buddhism to secular mindfulness — we will tell you honestly if your retreat fits the venue.',
      [Language.NL]:
        'Vertel ons over je traditie, je leraar, je data. We hebben groepen ontvangen uit tradities die uiteenlopen van het Tibetaans-boeddhisme tot seculiere mindfulness — we zeggen je eerlijk of jouw retraite bij de locatie past.',
      [Language.DE]:
        'Erzähl uns von deiner Tradition, deinem Lehrer, deinen Daten. Wir haben Linien vom tibetischen Buddhismus bis zur säkularen Achtsamkeit beherbergt — wir sagen dir ehrlich, ob dein Retreat zum Ort passt.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Buddhist sanghas, dharma groups and meditation teachers bringing their own tradition',
      [Language.NL]: "Boeddhistische sangha's, dharmagroepen en meditatieleraren die hun eigen traditie meebrengen",
      [Language.DE]: 'Buddhistische Sanghas, Dharma-Gruppen und Meditationslehrer:innen, die ihre eigene Tradition mitbringen',
    },
    cohortSize: { min: 8, max: 14 },
    linkedEventIds: ['https://themakersbarn.nl/experiences/shanti-deva-retreat#event'],
    keywords: {
      [Language.EN]: [
        'silent retreat venue Netherlands',
        'meditation retreat venue Europe',
        'Vipassana retreat venue',
        'Buddhist retreat venue',
        'Tibetan Buddhist retreat venue',
        'Zen retreat venue',
        'mindfulness retreat venue',
        'dharma retreat venue',
        'shrine room retreat venue',
        'silent meditation venue Overijssel',
      ],
      [Language.NL]: [
        'stille retraite locatie Nederland',
        'meditatie retraite locatie',
        'Vipassana retraite locatie',
        'boeddhistische retraite locatie',
        'Tibetaans boeddhistische retraite',
        'Zen retraite locatie',
        'mindfulness retraite locatie',
        'dharma retraite locatie',
      ],
      [Language.DE]: [
        'Schweige-Retreat Niederlande',
        'Meditations-Retreat-Ort',
        'Vipassana-Retreat-Ort',
        'buddhistischer Retreat-Ort',
        'tibetisch-buddhistisches Retreat',
        'Zen-Retreat-Ort',
        'Achtsamkeits-Retreat-Ort',
      ],
    },
  },
}
