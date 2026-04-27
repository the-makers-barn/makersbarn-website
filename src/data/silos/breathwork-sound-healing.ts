import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const BREATHWORK_SOUND_HEALING_SILO: SiloContent = {
  slug: SiloSlug.BREATHWORK_SOUND_HEALING,
  route: Route.BREATHWORK_SOUND_HEALING,
  heroImageSrc: IMAGES.accommodation.fireCircleGathering,
  heroImageAlt: {
    [Language.EN]: 'Group gathering around the fire circle at The Makers Barn',
    [Language.NL]: 'Groep rond de vuurplaats bij The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Breathwork & Sound Healing Retreat Venue — Netherlands',
      [Language.NL]: 'Ademwerk- & sound healing-retraitelocatie — Nederland',
    },
    description: {
      [Language.EN]:
        'A heated wooden hay barn that hums when the bowls do. A held space for breathwork and sound retreats in Overijssel. Sauna, fire circle, and a swimming pond for aftercare.',
      [Language.NL]:
        'Een verwarmde houten hooischuur die meeklinkt met de bowls. Een gedragen ruimte voor ademwerk- en klankretraites in Overijssel. Sauna, vuurplaats en een zwemvijver voor de aftercare.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For breathwork & sound facilitators',
      [Language.NL]: 'Voor ademwerk- en klankbegeleiders',
    },
    title: {
      [Language.EN]: 'A Held Space for Breathwork & Sound Retreats',
      [Language.NL]: 'Een gedragen ruimte voor ademwerk- en klankretraites',
    },
    subtitle: {
      [Language.EN]:
        'Acoustics that breathe. Heated wooden floor for two-hour lie-downs. Fields outside, fire circle outside, sauna for what comes up afterwards.',
      [Language.NL]:
        'Akoestiek die ademt. Verwarmde houten vloer voor lig-sessies van twee uur. Velden buiten, vuurplaats buiten, sauna voor wat daarna naar boven komt.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A hay barn that hums when the bowls do.',
      [Language.NL]:
        'Een hooischuur die meeklinkt met de bowls.',
    },
    caption: {
      [Language.EN]:
        'No neighbours, no shared walls, no programme on the other side of the door.',
      [Language.NL]:
        'Geen buren, geen gedeelde muren, geen ander programma aan de andere kant van de deur.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'Acoustics that breathe',
        [Language.NL]: 'Akoestiek die ademt',
      },
      body: {
        [Language.EN]: [
          'The Hay House is sixty-five square metres of heated wooden floor under a wooden ceiling. The room is warm before the first inhale, the floor stays warm through the longest journey, and the wood has the kind of acoustic decay that bowls and breath can rest into.',
          'The space holds twenty mats laid out generously. Twelve to fourteen with bolsters, blankets, and full-body lie-downs is the comfortable maximum for an active session.',
        ],
        [Language.NL]: [
          'Het Hay House is vijfenzestig vierkante meter verwarmde houten vloer onder een houten plafond. De ruimte is warm voor de eerste inademing, de vloer blijft warm door de langste reis, en het hout heeft het soort akoestische nagalm waar bowls en adem in kunnen rusten.',
          'Er passen twintig matten ruim opgesteld. Twaalf tot veertien deelnemers met bolsters, dekens en uitgestrekte lig-sessies is het comfortabele maximum voor een actieve sessie.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House practice barn glowing in golden light',
        [Language.NL]: 'Hay House praktijkruimte in gouden licht',
      },
    },
    {
      h2: {
        [Language.EN]: 'Aftercare built into the venue',
        [Language.NL]: 'Aftercare ingebakken in de locatie',
      },
      body: {
        [Language.EN]: [
          'After a long breathwork or sound journey, what people need is rarely a hotel corridor. The fire circle is twenty steps from the practice barn. The sauna and hot tub are another twenty. The swimming pond is a slow walk through the trees.',
          'Mornings open onto a 1.3-hectare farm — fields to walk, paths through the planted woodland, a teahouse with a single chair facing the window. Integration has somewhere to go that is not a parking lot.',
        ],
        [Language.NL]: [
          'Na een lange ademwerk- of klankreis is een hotelgang zelden wat mensen nodig hebben. De vuurplaats is twintig passen van de praktijkruimte. De sauna en hot tub nog eens twintig. De zwemvijver ligt op een rustige wandeling door de bomen.',
          'Ochtenden openen op een boerderij van 1,3 hectare — velden om te lopen, paden door het aangeplante bos, een theehuis met één stoel naar het raam toe. Integratie heeft een plek om naartoe te gaan die geen parkeerplaats is.',
        ],
      },
      imageSrc: IMAGES.accommodation.pondComplete,
      imageAlt: {
        [Language.EN]: 'Natural swimming pond at The Makers Barn',
        [Language.NL]: 'Natuurlijke zwemvijver bij The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'What facilitators say to bring',
        [Language.NL]: 'Wat begeleiders meebrengen',
      },
      body: {
        [Language.EN]: [
          'Most facilitators bring their own bowls, drums, or playlists. We provide twenty mats, blankets, and bolsters; sound system with bluetooth and aux; mood lighting on dimmers; eye masks for purchase. We can also arrange a private chef for the post-journey meals if your retreat asks for that.',
          'For groups doing deep or vulnerable inner work, we keep the venue closed to other guests for the full duration. Full buyout, no exceptions.',
        ],
        [Language.NL]: [
          'De meeste begeleiders brengen hun eigen bowls, drums of playlists mee. Wij leveren twintig matten, dekens en bolsters; geluidssysteem met bluetooth en aux; sfeerverlichting met dimmers; oogmaskers te koop. We kunnen ook een privékok regelen voor de maaltijden na de reis, als je retraite daarom vraagt.',
          'Voor groepen die diep of kwetsbaar innerlijk werk doen, houden we de locatie de volledige duur gesloten voor andere gasten. Volledige buyout, geen uitzonderingen.',
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
      },
    },
    {
      number: '12–20',
      description: {
        [Language.EN]: 'Comfortable group size for active sessions and journeys',
        [Language.NL]: 'Comfortabele groepsgrootte voor actieve sessies en reizen',
      },
    },
    {
      number: '20',
      description: {
        [Language.EN]: 'Steps from the practice barn to the fire circle',
        [Language.NL]: 'Passen van de praktijkruimte naar de vuurplaats',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Can we host journeys late into the evening?',
        [Language.NL]: 'Kunnen we reizen tot laat in de avond houden?',
      },
      answer: {
        [Language.EN]:
          'Yes. Full venue buyout means there are no quiet hours imposed by other guests. We ask that very loud drumming or amplified sound respects standard rural neighbour courtesies after 23:00, but our nearest neighbours are well out of earshot.',
        [Language.NL]:
          'Ja. Volledige buyout betekent dat er geen stille uren worden opgelegd door andere gasten. We vragen om bij heel luid drummen of versterkt geluid de gangbare landelijke buurtetiquette na 23.00 uur te respecteren, maar onze dichtstbijzijnde buren liggen ruim buiten gehoorsafstand.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you provide mats, bolsters, and blankets?',
        [Language.NL]: 'Leveren jullie matten, bolsters en dekens?',
      },
      answer: {
        [Language.EN]:
          'Yes — twenty of each, washed between groups. Bring your own if you have a specific brand preference and we will store them for you between sessions.',
        [Language.NL]:
          'Ja — twintig van elk, gewassen tussen groepen door. Breng je eigen mee als je een specifieke merkvoorkeur hebt, dan bewaren we ze voor je tussen sessies door.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the fire circle available for evening ceremonial work?',
        [Language.NL]: 'Is de vuurplaats beschikbaar voor ceremonieel avondwerk?',
      },
      answer: {
        [Language.EN]:
          'Yes. The fire circle sits twenty steps from the practice barn, with seating for fifteen and a wood store we keep filled. It is yours from sundown to whenever you call it.',
        [Language.NL]:
          'Ja. De vuurplaats staat twintig stappen van de praktijkruimte, met zitplek voor vijftien en een houtopslag die we vol houden. Hij is van jou vanaf zonsondergang tot wanneer je hem oproept.',
      },
    },
    {
      question: {
        [Language.EN]: 'How does aftercare overnight work?',
        [Language.NL]: 'Hoe werkt de aftercare ’s nachts?',
      },
      answer: {
        [Language.EN]:
          'Most groups stay one or two nights after the journey itself for proper integration. Beds for fourteen across Horizon and Cosmos. We can arrange catering, walks, gentle yoga, and one-on-one space for facilitators to debrief participants.',
        [Language.NL]:
          'De meeste groepen blijven na de reis zelf nog een of twee nachten voor een goede integratie. Bedden voor veertien, verdeeld over Horizon en Cosmos. We kunnen catering, wandelingen, zachte yoga en één-op-één-ruimtes regelen waarin begeleiders met deelnemers kunnen nabespreken.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'A held space for the journey, and the day after the journey',
      [Language.NL]: 'Een gedragen ruimte voor de reis, en de dag erna',
    },
    body: {
      [Language.EN]:
        'Tell us about your modality, your group size, and your dates. We will come back honestly about whether the venue fits — and what your participants will experience if it does.',
      [Language.NL]:
        'Vertel ons over je modaliteit, je groepsgrootte en je data. We laten je eerlijk weten of de locatie past — en wat je deelnemers zullen ervaren als dat zo is.',
    },
  },
}
