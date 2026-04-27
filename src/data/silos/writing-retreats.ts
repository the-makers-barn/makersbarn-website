import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const WRITING_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.WRITING_RETREATS,
  route: Route.WRITING_RETREATS,
  heroImageSrc: IMAGES.accommodation.lunchTogether,
  heroImageAlt: {
    [Language.EN]: 'A long workshop table at The Makers Barn',
    [Language.NL]: 'Een lange werktafel bij The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Writing Retreat Venue for Authors & Craft Teachers — Overijssel',
      [Language.NL]: 'Schrijfretraite-locatie voor auteurs & schrijfdocenten — Overijssel',
    },
    description: {
      [Language.EN]:
        'A quiet 1.3-hectare farm for published authors and writing teachers running multi-day craft retreats. Workshop barn, private cabins, long table for evening read-arounds.',
      [Language.NL]:
        'Een rustige boerderij van 1,3 hectare voor gepubliceerde auteurs en schrijfdocenten die meerdaagse schrijfretraites leiden. Werkschuur, privécabines, lange tafel voor de avondlezingen.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For published authors & writing teachers',
      [Language.NL]: 'Voor gepubliceerde auteurs & schrijfdocenten',
    },
    title: {
      [Language.EN]: 'A Writing Retreat Venue for Authors Running Craft Intensives',
      [Language.NL]: 'Een schrijfretraite-locatie voor auteurs die schrijfintensieven leiden',
    },
    subtitle: {
      [Language.EN]:
        'A workshop barn for the morning craft session, private rooms for the afternoon writing block, and a long table for the read-arounds after dinner.',
      [Language.NL]:
        'Een werkschuur voor de ochtendsessie, privékamers voor het middagblok, en een lange tafel voor de leesrondes na het eten.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Mornings to teach. Afternoons to write. Evenings to read each other’s work.',
      [Language.NL]:
        'Ochtenden om les te geven. Middagen om te schrijven. Avonden om elkaars werk te lezen.',
    },
    caption: {
      [Language.EN]:
        'A rhythm the venue is shaped to hold — for groups of eight to twelve students.',
      [Language.NL]:
        'Een ritme dat de locatie kan dragen — voor groepen van acht tot twaalf studenten.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A workshop barn that doubles as a quiet writing room',
        [Language.NL]: 'Een werkschuur die ook fungeert als stille schrijfruimte',
      },
      body: {
        [Language.EN]: [
          'The Hay House practice barn is sixty-five square metres of heated wooden floor with a sound system, dimmable light, and space for a circle of twelve. It works for the craft session, the read-around, and the kind of long writing block where students prefer not to be alone.',
          'Between sessions you have private rooms in Horizon and the Cosmos cabin for solitary work. Most retreats run a 9 AM craft session, a 10 AM-to-1 PM writing block, and the barn opens again at 6 PM for the evening read-around.',
        ],
        [Language.NL]: [
          'De Hay House-praktijkruimte is vijfenzestig vierkante meter verwarmde houten vloer met een geluidssysteem, dimbaar licht en ruimte voor een kring van twaalf. Het werkt voor de craft-sessie, de leesronde, en voor dat soort lange schrijfblokken waarbij studenten liever niet alleen zijn.',
          'Tussen de sessies door heb je privékamers in Horizon en de Cosmos cabin voor solitair werk. De meeste retraites draaien een craft-sessie om 9.00 uur, een schrijfblok van 10.00 tot 13.00 uur, en de schuur gaat om 18.00 uur weer open voor de avondlezing.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'Practice barn set up with seating in a circle',
        [Language.NL]: 'Praktijkruimte ingericht met een zitkring',
      },
    },
    {
      h2: {
        [Language.EN]: 'Private rooms for the afternoons that need to be quiet',
        [Language.NL]: 'Privékamers voor de middagen die stil moeten zijn',
      },
      body: {
        [Language.EN]: [
          'Horizon, the converted hay barn, sleeps eleven to fourteen in a mix of single, twin, and shared rooms. The Cosmos cabin gives the lead author a private wooden cabin with woodstove and writing desk by a window.',
          'Each room has space for a working laptop and a notebook. A few have window seats. None of them face a corridor that other students walk past during the writing block.',
        ],
        [Language.NL]: [
          'Horizon, de omgebouwde hooischuur, biedt plaats aan elf tot veertien gasten in een mix van eenpersoons-, tweepersoons- en gedeelde kamers. De Cosmos cabin biedt de hoofdauteur een eigen plek met houtkachel en een schrijftafel bij het raam.',
          'Elke kamer heeft ruimte voor een werklaptop en een notitieboek. Een paar hebben een vensterbankje om in te zitten. Geen ervan komt uit op een gang waar andere studenten tijdens het schrijfblok langslopen.',
        ],
      },
      imageSrc: IMAGES.accommodation.cosmosCouch,
      imageAlt: {
        [Language.EN]: 'Quiet writing nook with couch in the Cosmos cabin',
        [Language.NL]: 'Rustige schrijfhoek met bank in de Cosmos cabin',
      },
    },
    {
      h2: {
        [Language.EN]: 'A long table for the evening read-around',
        [Language.NL]: 'Een lange tafel voor de avondlezing',
      },
      body: {
        [Language.EN]: [
          'The Horizon dining room seats fourteen at a single long table. Most writing retreats use it for both meals and read-arounds — students bring three pages, the room reads, you guide the response. The acoustics carry a low voice without effort.',
          'After the read-around, the fire circle is twenty steps from the door. Some retreats use it for the more honest second-round of feedback that does not happen indoors.',
        ],
        [Language.NL]: [
          'De eetkamer in Horizon biedt plaats aan veertien gasten aan één lange tafel. De meeste schrijfretraites gebruiken hem voor zowel maaltijden als leesrondes — studenten brengen drie pagina’s mee, de kamer leest, jij leidt de feedback. De akoestiek draagt een zachte stem zonder moeite.',
          'Na de leesronde is de vuurplaats twintig stappen van de deur. Sommige retraites gebruiken die voor de eerlijker tweede ronde feedback die binnen niet plaatsvindt.',
        ],
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'Long shared table at The Makers Barn',
        [Language.NL]: 'Lange gedeelde tafel bij The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '8–12',
      description: {
        [Language.EN]: 'Students per cohort — the size most craft retreats are built around',
        [Language.NL]: 'Studenten per cohort — de grootte waar de meeste schrijfretraites om vragen',
      },
    },
    {
      number: '4–10',
      description: {
        [Language.EN]: 'Days — long enough for two drafts, short enough to keep the rhythm',
        [Language.NL]: 'Dagen — lang genoeg voor twee versies, kort genoeg om het ritme te bewaren',
      },
    },
    {
      number: '14',
      description: {
        [Language.EN]: 'Beds across Horizon and Cosmos for the cohort and the lead author',
        [Language.NL]: 'Bedden verdeeld over Horizon en Cosmos voor het cohort en de hoofdauteur',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A sample writing-retreat day',
      [Language.NL]: 'Een voorbeeld van een schrijfretraite-dag',
    },
    intro: {
      [Language.EN]:
        'A rhythm several visiting authors have used here. Yours can be different — the rooms hold both shapes.',
      [Language.NL]:
        'Een ritme dat verschillende gastauteurs hier hebben gehanteerd. Dat van jou mag anders zijn — de ruimtes dragen beide vormen.',
    },
    items: [
      {
        time: '08:00',
        activity: {
          [Language.EN]: 'Slow breakfast on the terrace',
          [Language.NL]: 'Rustig ontbijt op het terras',
        },
      },
      {
        time: '09:00',
        activity: {
          [Language.EN]: 'Craft session in the Hay House',
          [Language.NL]: 'Craft-sessie in het Hay House',
        },
      },
      {
        time: '10:30',
        activity: {
          [Language.EN]: 'Long writing block — private rooms or the barn',
          [Language.NL]: 'Lang schrijfblok — privékamers of de schuur',
        },
      },
      {
        time: '13:00',
        activity: {
          [Language.EN]: 'Lunch (we keep it light, you keep writing if you want)',
          [Language.NL]: 'Lunch (wij houden hem licht, jij blijft schrijven als je wilt)',
        },
      },
      {
        time: '14:30',
        activity: {
          [Language.EN]: 'One-to-one tutorials with the lead author',
          [Language.NL]: 'Eén-op-één-tutorials met de hoofdauteur',
        },
      },
      {
        time: '17:00',
        activity: {
          [Language.EN]: 'Walk, sauna, or pond',
          [Language.NL]: 'Wandeling, sauna of vijver',
        },
      },
      {
        time: '19:00',
        activity: {
          [Language.EN]: 'Long dinner at the shared table',
          [Language.NL]: 'Lang diner aan de gedeelde tafel',
        },
      },
      {
        time: '20:30',
        activity: {
          [Language.EN]: 'Read-around — three pages each, the room responds',
          [Language.NL]: 'Leesronde — drie pagina’s per persoon, de kamer reageert',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can the lead author have a private cabin?',
        [Language.NL]: 'Kan de hoofdauteur een eigen cabin krijgen?',
      },
      answer: {
        [Language.EN]:
          'Yes — the Cosmos cabin is private, separate from Horizon by a short walk, and includes a writing desk and woodstove. Most visiting authors take it.',
        [Language.NL]:
          'Ja — de Cosmos cabin is privé, op een korte wandeling van Horizon, en heeft een schrijftafel en een houtkachel. De meeste gastauteurs kiezen ervoor.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the venue ours alone for the duration?',
        [Language.NL]: 'Is de locatie alleen van ons tijdens de retraite?',
      },
      answer: {
        [Language.EN]:
          'Yes — full venue buyout. No other groups, no other guests walking through the workshop barn at 11 AM.',
        [Language.NL]:
          'Ja — volledige buyout. Geen andere groepen, geen andere gasten die om 11.00 uur door de werkschuur lopen.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can students bring laptops? Is there reliable wifi?',
        [Language.NL]: 'Mogen studenten laptops meenemen? Is er een betrouwbaar wifi-netwerk?',
      },
      answer: {
        [Language.EN]:
          'Yes. Fibre internet covers the whole farm. Some authors prefer to make the workshop barn a no-screen space — we are happy to enforce that as a soft house rule for the retreat.',
        [Language.NL]:
          'Ja. Glasvezelinternet dekt de hele boerderij. Sommige auteurs maken van de werkschuur liever een schermloze ruimte — we hanteren dat graag als zachte huisregel voor de retraite.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you handle catering and dietary needs?',
        [Language.NL]: 'Regelen jullie de catering en dieetwensen?',
      },
      answer: {
        [Language.EN]:
          'Yes. We work with local cooks who do retreat catering for groups of fourteen — vegetarian, vegan, and most allergies handled cleanly. Send us the dietary list at booking and it will be ready.',
        [Language.NL]:
          'Ja. We werken met lokale koks die retraitecatering voor groepen van veertien verzorgen — vegetarisch, veganistisch en de meeste allergieën worden zorgvuldig afgehandeld. Stuur ons de dieetlijst bij de boeking, dan ligt alles klaar.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your craft retreat to a venue that is shaped for it',
      [Language.NL]: 'Breng je schrijfretraite naar een locatie die ervoor gemaakt is',
    },
    body: {
      [Language.EN]:
        'Tell us your dates, your cohort size, and how many days you would like. We will come back with availability and a tailored quote within two working days.',
      [Language.NL]:
        'Vertel ons je data, je cohortgrootte en hoeveel dagen je zou willen. We komen binnen twee werkdagen terug met beschikbaarheid en een offerte op maat.',
    },
  },
}
