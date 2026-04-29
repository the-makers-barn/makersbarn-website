import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const MEDITATION_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.MEDITATION_RETREATS,
  route: Route.MEDITATION_RETREATS,
  heroImageSrc: IMAGES.accommodation.fieldWalking,
  heroImageAlt: {
    [Language.EN]: 'Walking meditation through the open fields at The Makers Barn',
    [Language.NL]: 'Loopmeditatie door de open velden bij The Makers Barn',
    [Language.DE]: 'Gehmeditation durch die offenen Felder bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Meditation & Buddhist Retreat Venue — Overijssel, Netherlands',
      [Language.NL]: 'Meditatie- & Boeddhistische Retraite Locatie — Overijssel',
      [Language.DE]: 'Meditations- & buddhistische Retreats — Overijssel, Niederlande',
    },
    description: {
      [Language.EN]:
        'Meditation, dharma, and Buddhist retreat venue in rural Overijssel — a 1.3-hectare farm with open Dutch fields, 14 beds, 65m² heated shala. 15 min from Zwolle.',
      [Language.NL]:
        'Locatie voor meditatie-, dharma- en boeddhistische retraites in landelijk Overijssel — boerderij van 1,3 hectare met open Nederlandse velden, 14 bedden, verwarmde shala van 65m². 15 min van Zwolle.',
      [Language.DE]:
        'Ort für Meditations-, Dharma- und buddhistische Retreats im ländlichen Overijssel — 1,3 Hektar Hof mit offenen niederländischen Feldern, 14 Betten, beheizte 65m²-Shala. 15 Min. von Zwolle.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For meditation & dharma groups',
      [Language.NL]: 'Voor meditatie- & dharma-groepen',
      [Language.DE]: 'Für Meditations- und Dharma-Gruppen',
    },
    title: {
      [Language.EN]: 'Meditation, Zen & Buddhist Retreats — A Rural Farm in Overijssel',
      [Language.NL]: 'Meditatie-, Zen- & Boeddhistische Retraites — een boerderij op het Overijsselse platteland',
      [Language.DE]: 'Meditations-, Zen- und buddhistische Retreats — ein Hof im ländlichen Overijssel',
    },
    subtitle: {
      [Language.EN]:
        'A 1.3-hectare private farm in rural Overijssel, with open Dutch fields and big skies, 15 minutes from Zwolle. A working venue for meditation, dharma, and Buddhist groups.',
      [Language.NL]:
        'Een eigen boerderij van 1,3 hectare in landelijk Overijssel, met open Nederlandse velden en weidse luchten, 15 minuten van Zwolle. Een werkende locatie voor meditatie-, dharma- en boeddhistische groepen.',
      [Language.DE]:
        'Ein 1,3 Hektar großer Privathof im ländlichen Overijssel mit offenen niederländischen Feldern und weitem Himmel, 15 Minuten von Zwolle. Ein eingespielter Ort für Meditations-, Dharma- und buddhistische Gruppen.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        '13,000 m² of private farm in rural Overijssel — open Dutch skies, fields, and the Sallandse Heuvelrug nearby.',
      [Language.NL]:
        '13.000 m² eigen boerderij in landelijk Overijssel — weidse Nederlandse luchten, velden en de Sallandse Heuvelrug om de hoek.',
      [Language.DE]:
        '13.000 m² eigener Hof im ländlichen Overijssel — weiter niederländischer Himmel, Felder und die Sallandse Heuvelrug gleich nebenan.',
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
        [Language.EN]: 'A hay-barn shala built for meditation and dharma teaching',
        [Language.NL]: 'Een shala in de hooischuur, gemaakt voor meditatie en dharmalessen',
        [Language.DE]: 'Eine Heuscheunen-Shala für Meditation und Dharma-Unterweisung',
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
        [Language.EN]: 'Open Dutch fields and big skies for walking practice',
        [Language.NL]: 'Open Nederlandse velden en weidse luchten voor loopmeditatie',
        [Language.DE]: 'Offene niederländische Felder und weiter Himmel für die Gehmeditation',
      },
      body: {
        [Language.EN]: [
          'The farm sits on its own 1.3 hectares (13,000 m²) in rural Overijssel, 15 minutes from Zwolle. Beyond a quiet country lane: fields, the Sallandse Heuvelrug, and the IJssel river. Big Dutch skies, wide horizons, and the kind of calm a working farm naturally holds.',
          'Walking meditation has somewhere to go. Mindful meals have somewhere to be eaten. For a Buddhist retreat, a meditation retreat, or a dharma intensive, the open countryside does half the work for you.',
        ],
        [Language.NL]: [
          'De boerderij ligt op een eigen terrein van 1,3 hectare (13.000 m²) in landelijk Overijssel, 15 minuten van Zwolle. Achter de stille landweg: velden, de Sallandse Heuvelrug en de IJssel. Weidse Nederlandse luchten, brede horizonnen en de rust die een werkende boerderij vanzelf met zich meebrengt.',
          'Voor loopmeditatie is er ruimte om te lopen. Voor aandachtige maaltijden is er een eigen plek. Voor een boeddhistische retraite, een meditatieretraite of een dharma-intensief doet het open platteland al het halve werk voor je.',
        ],
        [Language.DE]: [
          'Der Hof liegt auf eigenem Grund von 1,3 Hektar (13.000 m²) im ländlichen Overijssel, 15 Minuten von Zwolle. Hinter einem ruhigen Feldweg: Felder, die Sallandse Heuvelrug und die IJssel. Weiter niederländischer Himmel, breite Horizonte und die Ruhe, die ein arbeitender Hof von Natur aus trägt.',
          'Für Gehmeditation gibt es Raum zum Gehen. Für achtsame Mahlzeiten gibt es einen eigenen Platz. Für ein buddhistisches Retreat, ein Meditations-Retreat oder ein Dharma-Intensiv übernimmt die offene Landschaft schon die halbe Arbeit.',
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
        [Language.EN]: 'Shrine rooms, vegetarian catering, and a meditation-day kitchen',
        [Language.NL]: 'Altaarruimtes, vegetarische catering en een keuken die meedraait op je meditatiedag',
        [Language.DE]: 'Altarräume, vegetarisches Catering und eine Küche, die mit dem Meditationstag mitläuft',
      },
      body: {
        [Language.EN]: [
          'The Hay House practice barn doubles as a shrine room. We have stored thangkas and altars between retreats and helped set them up before. Vegetarian and Ayurvedic-leaning catering is part of the network we work with.',
          'Sleeping is across single, twin, and shared rooms in Horizon, plus the Cosmos cabin — used as a private teacher\'s lodge or shared between two members of your group, whichever fits. The full venue takes up to fourteen overnight, with day-program capacity of twenty in the practice space.',
        ],
        [Language.NL]: [
          'De Hay House-praktijkruimte fungeert ook als altaarruimte. We hebben thangka’s en altaren tussen retraites door voor groepen bewaard, en helpen graag bij het opbouwen. Vegetarische en ayurvedisch-geïnspireerde catering hoort bij het netwerk waarmee we werken.',
          'Slapen kan in eenpersoons-, tweepersoons- en gedeelde kamers in Horizon, plus de Cosmos cabin — als privéverblijf voor een leraar of gedeeld door twee mensen uit je groep, wat het beste past. De volledige locatie biedt slaapplek voor veertien, met een dagprogramma-capaciteit van twintig in de praktijkruimte.',
        ],
        [Language.DE]: [
          'Die Hay House-Praxisscheune dient zugleich als Altarraum. Wir haben Thangkas und Altäre schon zwischen Retreats gelagert und beim Aufbau geholfen. Vegetarisches und ayurvedisch geprägtes Catering gehört zum Netzwerk, mit dem wir arbeiten.',
          'Geschlafen wird in Einzel-, Doppel- und Mehrbettzimmern in Horizon, dazu die Cosmos-Hütte — entweder als private Lehrer-Unterkunft oder von zwei Personen aus eurer Gruppe geteilt, je nachdem, was passt. Der ganze Ort bietet bis zu vierzehn Übernachtungsplätze, mit einer Tagesprogramm-Kapazität von zwanzig im Praxisraum.',
        ],
      },
    },
  ],
  facts: [
    {
      number: '13.000+ m²',
      description: {
        [Language.EN]: 'Of private farm in rural Overijssel — full buyout, open fields and big skies',
        [Language.NL]: 'Eigen boerderij in landelijk Overijssel — volledige buyout, open velden en weidse luchten',
        [Language.DE]: 'Eigener Hof im ländlichen Overijssel — kompletter Buyout, offene Felder und weiter Himmel',
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
        [Language.EN]: 'Beds across Horizon and the Cosmos cabin for your sangha',
        [Language.NL]: 'Bedden verdeeld over Horizon en de Cosmos cabin voor jouw sangha',
        [Language.DE]: 'Betten verteilt auf Horizon und die Cosmos-Hütte für eure Sangha',
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
          [Language.EN]: 'Lunch',
          [Language.NL]: 'Lunch',
          [Language.DE]: 'Mittagessen',
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
        [Language.EN]: 'What meditation traditions have you hosted?',
        [Language.NL]: 'Welke meditatietradities hebben jullie ontvangen?',
        [Language.DE]: 'Welche Meditationstraditionen habt ihr schon empfangen?',
      },
      answer: {
        [Language.EN]:
          'Tibetan Buddhism, Vipassana, Zen, and breath-based meditation groups have all run programmes here. The venue fits any meditation, dharma, or Buddhist retreat that combines sitting practice, teaching, and walking outside. The buildings sit close together, so we are not the right space for deep noble-silence retreats — but for meditation work with talks, dharma teaching, and shared meals, the venue is well suited.',
        [Language.NL]:
          'Tibetaans-boeddhistische, Vipassana-, Zen- en ademgerichte meditatiegroepen hebben hier al hun programma’s gedraaid. De locatie past bij elke meditatie-, dharma- of boeddhistische retraite met zitpraktijk, onderricht en wandelen buiten. De gebouwen staan dicht bij elkaar, dus voor diepe noble-silence-retraites zijn we niet de juiste plek — voor meditatiewerk met dharmalessen, onderricht en gezamenlijke maaltijden zit de locatie als gegoten.',
        [Language.DE]:
          'Tibetisch-buddhistische, Vipassana-, Zen- und atemorientierte Meditationsgruppen haben hier schon ihre Programme abgehalten. Der Ort passt zu jedem Meditations-, Dharma- oder buddhistischen Retreat, das Sitzpraxis, Unterweisung und Gehen draußen verbindet. Die Gebäude stehen nah beieinander – für tiefe Schweige-Retreats sind wir deshalb nicht der richtige Ort. Für Meditationsarbeit mit Vorträgen, Dharma-Unterweisung und gemeinsamen Mahlzeiten passt der Ort sehr gut.',
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
        [Language.EN]: 'Can a teacher stay in a private cabin?',
        [Language.NL]: 'Kan een leraar in een privé-cabin verblijven?',
        [Language.DE]: 'Kann ein Lehrer in einer privaten Hütte wohnen?',
      },
      answer: {
        [Language.EN]:
          'Yes — the Cosmos cabin is a separate wooden lodge with its own bedroom, kitchen, and bathroom. It works as a private teacher\'s lodge, or as a quieter room shared between two members of your group.',
        [Language.NL]:
          'Ja — de Cosmos cabin is een aparte houten lodge met eigen slaapkamer, keuken en badkamer. Hij werkt als privéverblijf voor een leraar, of als rustigere kamer gedeeld door twee mensen uit je groep.',
        [Language.DE]:
          'Ja — die Cosmos-Hütte ist eine eigene Holz-Lodge mit Schlafzimmer, Küche und Bad. Sie eignet sich als private Lehrer-Unterkunft oder als ruhigeres Zimmer, das zwei Personen aus eurer Gruppe teilen.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your meditation or dharma retreat to a rural Dutch farm',
      [Language.NL]: 'Breng je meditatie- of dharmaretraite naar een boerderij op het Nederlandse platteland',
      [Language.DE]: 'Bring dein Meditations- oder Dharma-Retreat auf einen Hof im ländlichen Holland',
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
        'meditation retreat venue Netherlands',
        'meditation retreat venue Europe',
        'Vipassana retreat venue',
        'Buddhist retreat venue',
        'Tibetan Buddhist retreat venue',
        'Zen retreat venue',
        'mindfulness retreat venue',
        'dharma retreat venue',
        'spiritual retreat venue Netherlands',
        'meditation retreat venue Overijssel',
      ],
      [Language.NL]: [
        'meditatie retraite locatie Nederland',
        'meditatie retraite locatie',
        'Vipassana retraite locatie',
        'boeddhistische retraite locatie',
        'Tibetaans boeddhistische retraite',
        'Zen retraite locatie',
        'mindfulness retraite locatie',
        'dharma retraite locatie',
        'spirituele retraite locatie Nederland',
      ],
      [Language.DE]: [
        'Meditations-Retreat Niederlande',
        'Meditations-Retreat-Ort',
        'Vipassana-Retreat-Ort',
        'buddhistischer Retreat-Ort',
        'tibetisch-buddhistisches Retreat',
        'Zen-Retreat-Ort',
        'Achtsamkeits-Retreat-Ort',
        'spirituelles Retreat Niederlande',
      ],
    },
  },
}
