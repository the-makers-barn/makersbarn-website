import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const MEDITATION_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.MEDITATION_RETREATS,
  route: Route.MEDITATION_RETREATS,
  heroImageSrc: IMAGES.accommodation.fieldWalking,
  heroImageAlt: {
    [Language.EN]: 'Retreat guests walking in silence through the fields at The Makers Barn',
    [Language.NL]: 'Retraite-gasten lopen in stilte door de velden bij The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Silent Meditation & Buddhist Retreat Venue — Netherlands',
      [Language.NL]: 'Stille Meditatie & Boeddhistische Retraite Locatie — Nederland',
    },
    description: {
      [Language.EN]:
        'A silent retreat venue for Buddhist and meditation groups in the Dutch countryside. 1.3-hectare private land, no neighbours, kitchen built around your schedule.',
      [Language.NL]:
        'Een stille retraitelocatie voor boeddhistische en meditatiegroepen op het Nederlandse platteland. 1,3 hectare eigen terrein, geen buren, een keuken die zich aanpast aan jouw schema.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For meditation & dharma groups',
      [Language.NL]: 'Voor meditatie- & dharma-groepen',
    },
    title: {
      [Language.EN]: 'A Silent Retreat Setting for Buddhist & Meditation Groups',
      [Language.NL]: 'Een stille retraite-locatie voor boeddhistische & meditatie-groepen',
    },
    subtitle: {
      [Language.EN]:
        'Held by fields and big skies — not by traffic. A private 1.3-hectare farm in rural Overijssel with a precedent of practice.',
      [Language.NL]:
        'Gedragen door velden en grote luchten — niet door verkeer. Een eigen boerderij van 1,3 hectare in landelijk Overijssel met een traditie van beoefening.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Twelve-thousand square metres of held quiet.',
      [Language.NL]:
        'Twaalfduizend vierkante meter gedragen stilte.',
    },
    caption: {
      [Language.EN]:
        'A practice hall that warms slowly, lights low, and a kitchen that respects your schedule of meals.',
      [Language.NL]:
        'Een praktijkzaal die langzaam opwarmt, gedempt licht, en een keuken die jouw maaltijdschema respecteert.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A precedent of practice',
        [Language.NL]: 'Een traditie van beoefening',
      },
      body: {
        [Language.EN]: [
          'Geshe Pema Dorjee has taught Tibetan Buddhism here in two annual retreats since the venue opened. The 7 AM to 8 PM rhythm of his programme has shaped how the kitchen, the heating, and the hot water are scheduled. Other lineages have built on top of that — Vipassana, Zen, breath-based meditation.',
          'You bring your teacher and your tradition. We bring a venue that already knows what a meditation day asks of it.',
        ],
        [Language.NL]: [
          'Geshe Pema Dorjee geeft hier sinds de opening jaarlijks twee Tibetaans-boeddhistische retraites. Zijn programma loopt van 7.00 tot 20.00 uur — de keuken, de verwarming en het warme water zijn daarop afgestemd. Andere tradities hebben daarop voortgebouwd: Vipassana, Zen, ademgerichte meditatie.',
          'Jij brengt je leraar en je traditie. Wij bieden een plek die al weet wat een meditatiedag vraagt.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'Practice space prepared with cushions and meditation mats',
        [Language.NL]: 'Praktijkruimte met meditatiekussens en matten klaargezet',
      },
    },
    {
      h2: {
        [Language.EN]: 'Held by silence — not by walls',
        [Language.NL]: 'Gedragen door stilte — niet door muren',
      },
      body: {
        [Language.EN]: [
          'The farm sits on its own 1.3 hectares of land. There are no shared buildings, no neighbouring guests, no parking lot facing the practice room. The closest road is a quiet country lane, and beyond it: fields, the Sallandse Heuvelrug, the IJssel river.',
          'Walking meditation has somewhere to go. Silent meals have somewhere to be eaten. Rooms can stay closed for a noble silence that does not have to be defended.',
        ],
        [Language.NL]: [
          'De boerderij ligt op een eigen terrein van 1,3 hectare. Er zijn geen gedeelde gebouwen, geen andere gasten, geen parkeerplaats die uitkijkt op de praktijkruimte. De dichtstbijzijnde weg is een stille landweg, en daarachter: velden, de Sallandse Heuvelrug, de IJssel.',
          'Voor loopmeditatie is er ruimte om te lopen. Voor stille maaltijden is er een eigen plek. Kamers kunnen dicht blijven voor een edele stilte die niemand hoeft te verdedigen.',
        ],
      },
      imageSrc: IMAGES.accommodation.outsideWalk,
      imageAlt: {
        [Language.EN]: 'Walking path through the trees at The Makers Barn',
        [Language.NL]: 'Wandelpad door de bomen bij The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'Accommodating silence, schedules, and shrine rooms',
        [Language.NL]: 'Ruimte voor stilte, ritme en altaren',
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
      },
    },
  ],
  facts: [
    {
      number: '13.000+ m²',
      description: {
        [Language.EN]: 'Of private land — full buyout, no shared buildings or neighbouring guests',
        [Language.NL]: 'Eigen terrein — volledige buyout, geen gedeelde gebouwen of andere gasten',
      },
    },
    {
      number: '7–20',
      description: {
        [Language.EN]: 'Practice-day window — heating, water, and kitchen built around it',
        [Language.NL]: 'Praktijkdag-venster — verwarming, water en keuken zijn erop afgestemd',
      },
    },
    {
      number: '14',
      description: {
        [Language.EN]: 'Beds across Horizon and Cosmos for sangha and teachers',
        [Language.NL]: 'Bedden verdeeld over Horizon en Cosmos voor sangha en leraren',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A retreat-day rhythm we already know',
      [Language.NL]: 'Een retraite-ritme dat we al kennen',
    },
    intro: {
      [Language.EN]:
        'Adapted from the schedule Geshe Pema Dorjee has used here since 2022. The kitchen and heating are pre-configured for it.',
      [Language.NL]:
        'Gebaseerd op het schema dat Geshe Pema Dorjee hier sinds 2022 hanteert. De keuken en verwarming zijn er al op afgestemd.',
    },
    items: [
      {
        time: '07:00',
        activity: {
          [Language.EN]: 'Guided meditation',
          [Language.NL]: 'Begeleide meditatie',
        },
      },
      {
        time: '08:00',
        activity: {
          [Language.EN]: 'Vegetarian breakfast',
          [Language.NL]: 'Vegetarisch ontbijt',
        },
      },
      {
        time: '09:30',
        activity: {
          [Language.EN]: 'Morning teaching',
          [Language.NL]: 'Ochtendonderricht',
        },
      },
      {
        time: '12:30',
        activity: {
          [Language.EN]: 'Lunch (silent)',
          [Language.NL]: 'Lunch (in stilte)',
        },
      },
      {
        time: '15:00',
        activity: {
          [Language.EN]: 'Afternoon teaching',
          [Language.NL]: 'Middagonderricht',
        },
      },
      {
        time: '17:30',
        activity: {
          [Language.EN]: 'Walking meditation outside',
          [Language.NL]: 'Loopmeditatie buiten',
        },
      },
      {
        time: '19:00',
        activity: {
          [Language.EN]: 'Light dinner',
          [Language.NL]: 'Lichte maaltijd',
        },
      },
      {
        time: '20:00',
        activity: {
          [Language.EN]: 'Closing sit',
          [Language.NL]: 'Afsluitende sessie',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can we hold a fully silent retreat?',
        [Language.NL]: 'Kunnen we een volledig stille retraite houden?',
      },
      answer: {
        [Language.EN]:
          'Yes — full buyout means no other guests will speak in the spaces. We brief our team to stay quiet and only intervene if needed. Many groups do extended silent stretches without issue.',
        [Language.NL]:
          'Ja — bij een volledige buyout zijn er geen andere gasten die in de ruimtes spreken. Ons team houdt zich stil en grijpt alleen in als het nodig is. Veel groepen houden moeiteloos langere periodes van stilte aan.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you accommodate shrine rooms and altars?',
        [Language.NL]: 'Kunnen we een altaarruimte inrichten?',
      },
      answer: {
        [Language.EN]:
          'Yes. The Hay House can be set up as a shrine room and we have storage between retreats for thangkas, statues and ritual objects.',
        [Language.NL]:
          'Ja. Het Hay House kan ingericht worden als altaarruimte en we hebben opslag tussen retraites door voor thangka’s, beelden en rituele objecten.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the catering vegetarian-friendly?',
        [Language.NL]: 'Is de catering vegetarisch-vriendelijk?',
      },
      answer: {
        [Language.EN]:
          'Yes — most retreat groups eat fully vegetarian here, with vegan and Ayurvedic options available through our local kitchen partners.',
        [Language.NL]:
          'Ja — de meeste retraitegroepen eten hier volledig vegetarisch, met veganistische en ayurvedische opties via onze lokale keukenpartners.',
      },
    },
    {
      question: {
        [Language.EN]: 'How does silence work at meal times?',
        [Language.NL]: 'Hoe werkt stilte tijdens maaltijden?',
      },
      answer: {
        [Language.EN]:
          'Meals are served in Horizon’s kitchen and dining area. We can plate before guests arrive so the meal stays fully silent, or set up a serve-yourself station — whichever you prefer.',
        [Language.NL]:
          'Maaltijden worden geserveerd in de keuken en eetruimte van Horizon. We kunnen alvast opdienen voordat iedereen binnenkomt, zodat de maaltijd volledig stil blijft, of een buffet inrichten — net wat jullie willen.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Hold your retreat in a place where silence is already at home',
      [Language.NL]: 'Houd je retraite op een plek waar stilte al thuis is',
    },
    body: {
      [Language.EN]:
        'Tell us your tradition, your teacher, your dates. We have hosted lineages from Tibetan Buddhism to secular mindfulness — we will tell you honestly if your retreat fits the venue.',
      [Language.NL]:
        'Vertel ons over je traditie, je leraar, je data. We hebben groepen ontvangen uit tradities die uiteenlopen van het Tibetaans-boeddhisme tot seculiere mindfulness — we zeggen je eerlijk of jouw retraite bij de locatie past.',
    },
  },
}
