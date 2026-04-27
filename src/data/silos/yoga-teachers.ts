import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const YOGA_TEACHERS_SILO: SiloContent = {
  slug: SiloSlug.YOGA_TEACHERS,
  route: Route.YOGA_TEACHERS,
  heroImageSrc: IMAGES.accommodation.practiceRoomsWithMats,
  heroImageAlt: {
    [Language.EN]: 'Heated hay barn shala with yoga mats laid out at The Makers Barn',
    [Language.NL]: 'Verwarmde hooischuur-shala met yogamatten bij The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Yoga Retreat Venue for Teachers — Overijssel',
      [Language.NL]: 'Yoga Retraite Locatie voor Docenten — Overijssel',
    },
    description: {
      [Language.EN]:
        'A heated 65m² hay barn shala, sleeps 14, capacity 20. The Makers Barn is a quiet yoga retreat venue in Overijssel for teachers building their own retreats.',
      [Language.NL]:
        'Een verwarmde hooischuur-shala van 65 m², slaapplek voor 14, capaciteit 20. The Makers Barn is een rustige yoga-retraitelocatie in Overijssel voor docenten die hun eigen retraite organiseren.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For yoga teachers',
      [Language.NL]: 'Voor yogadocenten',
    },
    title: {
      [Language.EN]: 'A Quiet Yoga Retreat Venue for Teachers in Overijssel',
      [Language.NL]: 'Een rustige yoga retraite-locatie voor docenten in Overijssel',
    },
    subtitle: {
      [Language.EN]:
        'A heated hay barn shala, fourteen beds, and a private 1.3-hectare farm — for teachers building their first retreat or their fifth.',
      [Language.NL]:
        'Een verwarmde hooischuur-shala, veertien bedden en een eigen boerderij van 1,3 hectare — voor docenten die hun eerste retraite organiseren of hun vijfde.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Your retreat, held by a place that already knows how to hold space.',
      [Language.NL]:
        'Jouw retraite, gedragen door een plek die al weet hoe je ruimte houdt.',
    },
    caption: {
      [Language.EN]:
        'We handle the bedlinen, the firewood, and the kettle. You hold the room.',
      [Language.NL]:
        'Wij regelen het beddengoed, het haardhout en de waterkoker. Jij houdt de ruimte.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A shala designed around teachers, not guests',
        [Language.NL]: 'Een shala ontworpen rond docenten, niet rond gasten',
      },
      body: {
        [Language.EN]: [
          'The Hay House practice space is 65 square metres of heated wooden floor, with sound system, mats and props already in place. The acoustics carry a slow voice without effort and the light shifts through the day in a way photographs cannot quite capture.',
          'No other groups share the venue while you are here. The barn opens at the time you ask it to, and stays yours until your last student leaves.',
        ],
        [Language.NL]: [
          'De Hay House-praktijkruimte is 65 vierkante meter verwarmde houten vloer, met geluidssysteem, matten en props al aanwezig. De akoestiek draagt een rustige stem moeiteloos, en het licht verandert door de dag op een manier die foto’s niet helemaal kunnen vangen.',
          'Er zijn geen andere groepen op de locatie tijdens jouw verblijf. De schuur gaat open wanneer jij dat wilt, en blijft van jou tot de laatste student vertrekt.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House practice barn glowing in evening sun',
        [Language.NL]: 'Hooischuur-praktijkruimte in het avondlicht',
      },
    },
    {
      h2: {
        [Language.EN]: 'Sleeping fourteen, hosting up to twenty',
        [Language.NL]: 'Slapen voor veertien, ontvangen tot twintig',
      },
      body: {
        [Language.EN]: [
          'Horizon, our converted hay barn, holds eleven to fourteen guests across private and shared rooms. The Cosmos cabin gives the lead teacher a private wooden cabin with woodstove and view. Day-program guests can join you up to a total of twenty for the practice itself.',
          'The kitchen is on the second floor of Horizon, set up for shared cooking or for the catering team you bring with you.',
        ],
        [Language.NL]: [
          'Horizon, onze omgebouwde hooischuur, biedt plaats aan elf tot veertien gasten in privé- en gedeelde kamers. De Cosmos cabin biedt de hoofddocent een eigen plek met houtkachel en uitzicht. Voor het dagprogramma kunnen er tot twintig in totaal aansluiten bij de beoefening zelf.',
          'De keuken bevindt zich op de tweede verdieping van Horizon, geschikt voor gezamenlijk koken of voor het cateringteam dat je meebrengt.',
        ],
      },
      imageSrc: IMAGES.accommodation.atticBeds,
      imageAlt: {
        [Language.EN]: 'Attic bedroom with comfortable beds in the Horizon barn',
        [Language.NL]: 'Zolderkamer met comfortabele bedden in de Horizon-schuur',
      },
    },
    {
      h2: {
        [Language.EN]: 'What is included when you bring your group',
        [Language.NL]: 'Wat is inbegrepen als je je groep meebrengt',
      },
      body: {
        [Language.EN]: [
          'Beds and bedlinen for fourteen, the heated practice barn, the kitchen, sauna, hot tub, swimming pond, fire circle, and free use of bicycles. Catering can be arranged or brought in by you — local Ayurvedic-leaning cooks are part of our network.',
          'For solo retreats and intensives, we can also block the venue for smaller numbers and adjust the package accordingly.',
        ],
        [Language.NL]: [
          'Bedden en beddengoed voor veertien, de verwarmde praktijkruimte, de keuken, sauna, hot tub, zwemvijver, vuurplaats en vrij gebruik van fietsen. Wij regelen de catering of jij brengt je eigen team mee — lokale, ayurvedisch-geïnspireerde koks zijn onderdeel van ons netwerk.',
          'Voor solo-retraites en intensieven kunnen we de locatie ook voor kleinere aantallen reserveren en het pakket aanpassen.',
        ],
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'A long shared lunch table at The Makers Barn',
        [Language.NL]: 'Een lange gedeelde lunchtafel bij The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '65 m²',
      description: {
        [Language.EN]: 'Heated practice barn — sound system, mats, props in place',
        [Language.NL]: 'Verwarmde praktijkruimte — geluidssysteem, matten, props aanwezig',
      },
    },
    {
      number: '14',
      description: {
        [Language.EN]: 'Beds across Horizon and Cosmos, capacity twenty for practice',
        [Language.NL]: 'Bedden verdeeld over Horizon en Cosmos, capaciteit twintig voor beoefening',
      },
    },
    {
      number: '15 min',
      description: {
        [Language.EN]: 'By car from Zwolle station — 1h15 by train from Schiphol',
        [Language.NL]: 'Met de auto vanaf station Zwolle — 1 uur 15 met de trein vanaf Schiphol',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A sample teacher-led day',
      [Language.NL]: 'Een voorbeeld van een door de docent geleide dag',
    },
    intro: {
      [Language.EN]: 'A rhythm many of our visiting teachers settle into — yours can be entirely different.',
      [Language.NL]: 'Een ritme waar veel van onze gastdocenten in landen — jouw versie mag heel anders.',
    },
    items: [
      {
        time: '07:00',
        activity: {
          [Language.EN]: 'Optional silent sit by the pond',
          [Language.NL]: 'Optionele stilte-sessie bij de vijver',
        },
      },
      {
        time: '08:00',
        activity: {
          [Language.EN]: 'Morning practice in the Hay House',
          [Language.NL]: 'Ochtendpraktijk in het Hay House',
        },
      },
      {
        time: '10:00',
        activity: {
          [Language.EN]: 'Slow breakfast on the terrace',
          [Language.NL]: 'Rustig ontbijt op het terras',
        },
      },
      {
        time: '12:30',
        activity: {
          [Language.EN]: 'Free time — pond, paths, hammocks',
          [Language.NL]: 'Vrije tijd — vijver, paden, hangmatten',
        },
      },
      {
        time: '16:00',
        activity: {
          [Language.EN]: 'Afternoon practice or workshop block',
          [Language.NL]: 'Middagpraktijk of workshopblok',
        },
      },
      {
        time: '19:00',
        activity: {
          [Language.EN]: 'Long shared dinner',
          [Language.NL]: 'Lange gedeelde maaltijd',
        },
      },
      {
        time: '21:00',
        activity: {
          [Language.EN]: 'Sauna, fire circle, or rest',
          [Language.NL]: 'Sauna, vuurplaats of rust',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can I bring my own caterer?',
        [Language.NL]: 'Mag ik mijn eigen cateraar meebrengen?',
      },
      answer: {
        [Language.EN]:
          'Yes — most visiting teachers do. The kitchen on the second floor of Horizon is fully equipped, and we can introduce you to local cooks if you would prefer to outsource it.',
        [Language.NL]:
          'Ja — de meeste gastdocenten doen dat. De keuken op de tweede verdieping van Horizon is volledig uitgerust, en we kunnen je in contact brengen met lokale koks als je het liever uitbesteedt.',
      },
    },
    {
      question: {
        [Language.EN]: 'How early can my retreat start in the day?',
        [Language.NL]: 'Hoe vroeg kan mijn retraite beginnen op de dag?',
      },
      answer: {
        [Language.EN]:
          'The barn is yours from 4 PM on arrival day and must be cleared by 11 AM on departure day, but the practice space is available from sunrise on full retreat days.',
        [Language.NL]:
          'De boerderij is van jou vanaf 16.00 uur op de aankomstdag en moet om 11.00 uur op de vertrekdag vrij zijn — maar de praktijkruimte is op volledige retraitedagen beschikbaar vanaf zonsopgang.',
      },
    },
    {
      question: {
        [Language.EN]: 'Are mats and props really included?',
        [Language.NL]: 'Zijn matten en props echt inbegrepen?',
      },
      answer: {
        [Language.EN]:
          'Yes. Mats, blocks, bolsters, blankets and straps for fourteen are kept in the Hay House. We replace and clean them between groups.',
        [Language.NL]:
          'Ja. Matten, blokken, bolsters, dekens en straps voor veertien personen liggen in het Hay House. We vervangen en reinigen ze tussen groepen door.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the venue ours alone for the duration of the retreat?',
        [Language.NL]: 'Is de locatie alleen van ons tijdens de retraite?',
      },
      answer: {
        [Language.EN]:
          'Yes — full buyout. No other groups, no other guests, no shared spaces. The three of us who run the place stay on call but stay out of your way.',
        [Language.NL]:
          'Ja — volledige buyout. Geen andere groepen, geen andere gasten, geen gedeelde ruimtes. Wij drieën zijn beschikbaar maar blijven uit je vaarwater.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your retreat to a place that already knows how to hold space',
      [Language.NL]: 'Breng je retraite naar een plek die al weet hoe je ruimte draagt',
    },
    body: {
      [Language.EN]:
        'Tell us your dates and rough group size. We will come back with availability and a tailored quote within two working days.',
      [Language.NL]:
        'Vertel ons je data en geschatte groepsgrootte. We komen binnen twee werkdagen terug met beschikbaarheid en een offerte op maat.',
    },
  },
}
