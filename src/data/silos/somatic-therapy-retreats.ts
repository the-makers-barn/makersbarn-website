import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const SOMATIC_THERAPY_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.SOMATIC_THERAPY_RETREATS,
  route: Route.SOMATIC_THERAPY_RETREATS,
  heroImageSrc: IMAGES.accommodation.pondCoachingSession,
  heroImageAlt: {
    [Language.EN]: 'A one-to-one session by the pond at The Makers Barn',
    [Language.NL]: 'Een één-op-één-sessie bij de vijver bij The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Somatic & Therapeutic Retreat Venue — Netherlands',
      [Language.NL]: 'Locatie voor somatische & therapeutische retraites — Nederland',
    },
    description: {
      [Language.EN]:
        'A trauma-informed venue for licensed therapists and somatic practitioners running residential intensives. Private buyout, sauna, fields outside the practice barn.',
      [Language.NL]:
        'Een trauma-geïnformeerde locatie voor erkende therapeuten en somatische beoefenaars die residentiële intensieven leiden. Volledige buyout, sauna, velden buiten de praktijkruimte.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For licensed therapists & somatic practitioners',
      [Language.NL]: 'Voor erkende therapeuten & somatische beoefenaars',
    },
    title: {
      [Language.EN]: 'A Trauma-Informed Venue for Somatic & Therapeutic Retreats',
      [Language.NL]: 'Een trauma-geïnformeerde locatie voor somatische & therapeutische retraites',
    },
    subtitle: {
      [Language.EN]:
        'Hakomi, IFS, somatic experiencing, EMDR intensives. A held venue for the kind of work that asks for privacy, time, and a path through the trees afterwards.',
      [Language.NL]:
        'Hakomi, IFS, somatic experiencing, EMDR-intensieven. Een gedragen locatie voor het soort werk dat vraagt om privacy, tijd, en een pad door de bomen erna.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A held container, in case the work calls for one.',
      [Language.NL]:
        'Een gedragen ruimte, voor als het werk daarom vraagt.',
    },
    caption: {
      [Language.EN]:
        'Full venue buyout, no other guests, fields and pond for what comes up between sessions.',
      [Language.NL]:
        'Volledige buyout, geen andere gasten, velden en vijver voor wat tussen sessies door naar boven komt.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A practice space that holds the work',
        [Language.NL]: 'Een praktijkruimte die het werk draagt',
      },
      body: {
        [Language.EN]: [
          'The Hay House barn is sixty-five square metres of heated wooden floor with a wooden ceiling that softens sound. We can lay it out for floor work with twelve mats and bolsters, or for chair-based dyads with movable seating, or empty for movement-based modalities.',
          'Lighting is dimmable. The room can be made dark for grounding work and bright for somatic mapping in the same afternoon.',
        ],
        [Language.NL]: [
          'De Hay House-schuur is vijfenzestig vierkante meter verwarmde houten vloer met een houten plafond dat geluid verzacht. We kunnen hem inrichten voor vloerwerk met twaalf matten en bolsters, voor stoelduo’s met verplaatsbare zitplaatsen, of helemaal leeg voor bewegingsmodaliteiten.',
          'De verlichting is dimbaar. In dezelfde middag kan de ruimte verduisterd worden voor grounding-werk en weer helder gemaakt worden voor somatische mapping.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'Practice barn set up for floor-based somatic work',
        [Language.NL]: 'Praktijkruimte ingericht voor somatisch vloerwerk',
      },
    },
    {
      h2: {
        [Language.EN]: 'Aftercare is geography, not a checklist',
        [Language.NL]: 'Aftercare is geografie, geen checklist',
      },
      body: {
        [Language.EN]: [
          'After a hard piece of work, what people need is rarely a hotel corridor. We have a 1.3-hectare farm: paths through twelve hundred trees, a swimming pond, a sauna, a fire circle, and benches positioned for solitude rather than social gathering.',
          'Participants can be alone without being isolated. They can be in nature without having to drive to it. Most therapists tell us this is the part that does the integration the workshop room cannot.',
        ],
        [Language.NL]: [
          'Na een zwaar stuk werk is een hotelgang zelden wat mensen nodig hebben. We hebben een boerderij van 1,3 hectare: paden door twaalfhonderd bomen, een zwemvijver, een sauna, een vuurplaats, en banken die zijn neergezet voor afzondering in plaats van voor groepsgezelligheid.',
          'Deelnemers kunnen alleen zijn zonder geïsoleerd te zijn. Ze kunnen in de natuur zijn zonder ernaartoe te moeten rijden. De meeste therapeuten zeggen ons dat dit het deel is dat de integratie voltooit die de werkkamer niet kan afronden.',
        ],
      },
      imageSrc: IMAGES.accommodation.outsideWalk,
      imageAlt: {
        [Language.EN]: 'A path through the trees at The Makers Barn',
        [Language.NL]: 'Een pad door de bomen bij The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'Privacy that the work earns and asks for',
        [Language.NL]: 'Privacy die het werk verdient en vraagt',
      },
      body: {
        [Language.EN]: [
          'Full venue buyout — no other groups, no other guests passing the practice room window. Our team stays out of the buildings during sessions and is reachable by phone if needed.',
          'For one-to-one supervision or solo integration time, the Cosmos cabin and the teahouse are both private. Sleeping arrangements can be all-private for groups of eight, with most cohorts of ten to fourteen splitting between private and twin rooms.',
        ],
        [Language.NL]: [
          'Volledige buyout — geen andere groepen, geen andere gasten die langs het raam van de praktijkruimte lopen. Ons team blijft tijdens sessies uit de gebouwen en is telefonisch bereikbaar indien nodig.',
          'Voor één-op-één-supervisie of solo-integratietijd zijn de Cosmos cabin en het theehuis allebei privé. De slaapindeling kan volledig privé zijn voor groepen van acht; de meeste cohorten van tien tot veertien verdelen we over eenpersoons- en tweepersoonskamers.',
        ],
      },
      imageSrc: IMAGES.accommodation.cosmosOutside,
      imageAlt: {
        [Language.EN]: 'Cosmos cabin from outside, surrounded by trees',
        [Language.NL]: 'Cosmos cabin van buiten, omringd door bomen',
      },
    },
  ],
  facts: [
    {
      number: '8–14',
      description: {
        [Language.EN]: 'Cohort size — most somatic groups settle around ten',
        [Language.NL]: 'Cohortgrootte — de meeste somatische groepen landen rond tien',
      },
    },
    {
      number: '1,3 ha',
      description: {
        [Language.EN]: 'Of private land — paths, pond, sauna for between-session integration',
        [Language.NL]: 'Eigen terrein — paden, vijver, sauna voor integratie tussen sessies',
      },
    },
    {
      number: 'Full',
      description: {
        [Language.EN]: 'Venue buyout always — no exceptions for groups doing inner work',
        [Language.NL]: 'Altijd volledige buyout — geen uitzonderingen voor groepen die innerlijk werk doen',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Do you require professional credentials from the lead facilitator?',
        [Language.NL]: 'Vragen jullie om beroepskwalificaties van de hoofdfacilitator?',
      },
      answer: {
        [Language.EN]:
          'Yes. For somatic and therapeutic retreats we ask the lead facilitator to share their professional registration (e.g., NIP, BIG, or equivalent international body). This protects participants and us.',
        [Language.NL]:
          'Ja. Voor somatische en therapeutische retraites vragen we de hoofdfacilitator om de beroepsregistratie te delen (bijv. NIP, BIG of een gelijkwaardige internationale organisatie). Dat beschermt zowel de deelnemers als ons.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we have on-call medical support nearby?',
        [Language.NL]: 'Is er medische ondersteuning in de buurt beschikbaar?',
      },
      answer: {
        [Language.EN]:
          'Hospital and 24/7 GP services are in Zwolle, fifteen minutes by car. We share the local emergency contact list with every booking and recommend you brief participants on it at intake.',
        [Language.NL]:
          'Ziekenhuis en 24/7 huisartsendienst zijn in Zwolle, vijftien minuten met de auto. We delen de lokale noodcontactlijst bij elke boeking en adviseren je om deelnemers daarover bij intake te informeren.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can a participant extend their stay if they need more integration time?',
        [Language.NL]: 'Kan een deelnemer langer blijven als die meer integratietijd nodig heeft?',
      },
      answer: {
        [Language.EN]:
          'Often yes. The Cosmos cabin or a single Horizon room can sometimes be extended for one to three nights after the cohort leaves, depending on the booking calendar. Tell us at intake and we will hold the option.',
        [Language.NL]:
          'Vaak wel. De Cosmos cabin of een eenpersoonskamer in Horizon kan soms één tot drie nachten verlengd worden nadat het cohort vertrekt — afhankelijk van de agenda. Laat het weten bij de intake, dan houden we de optie open.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can participants self-select rooms?',
        [Language.NL]: 'Kunnen deelnemers zelf hun kamer kiezen?',
      },
      answer: {
        [Language.EN]:
          'We pre-allocate based on the cohort list you send us. For somatic work most groups want all-private or all-twin so the experience is consistent — we will work with you to make that fair within the available rooms.',
        [Language.NL]:
          'We delen de kamers vooraf in op basis van de cohortlijst die je ons stuurt. Voor somatisch werk willen de meeste groepen volledig privé of volledig tweepersoons, zodat de ervaring consistent is — we kijken samen met jou hoe we dat eerlijk verdelen over de beschikbare kamers.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'A held venue for the work that asks for one',
      [Language.NL]: 'Een gedragen locatie voor het werk dat erom vraagt',
    },
    body: {
      [Language.EN]:
        'Tell us about your modality, your group size, and your dates. We will come back honestly about whether the venue fits — and what your participants will experience if it does.',
      [Language.NL]:
        'Vertel ons over je modaliteit, je groepsgrootte en je data. We laten je eerlijk weten of de locatie past — en wat je deelnemers zullen ervaren als dat zo is.',
    },
  },
}
