import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const SOMATIC_THERAPY_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.SOMATIC_THERAPY_RETREATS,
  route: Route.SOMATIC_THERAPY_RETREATS,
  heroImageSrc: IMAGES.accommodation.pondCoachingSession,
  heroImageAlt: {
    [Language.EN]: 'A one-to-one session by the pond at The Makers Barn',
    [Language.NL]: 'Een één-op-één-sessie bij de vijver bij The Makers Barn',
    [Language.DE]: 'Eine Eins-zu-Eins-Sitzung am Teich bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Somatic & Therapeutic Retreat Venue — Netherlands',
      [Language.NL]: 'Locatie voor somatische & therapeutische retraites — Nederland',
      [Language.DE]: 'Ort für somatische & therapeutische Retreats — Niederlande',
    },
    description: {
      [Language.EN]:
        'A trauma-informed venue for licensed therapists and somatic practitioners running residential intensives. Private buyout, sauna, fields outside the practice barn.',
      [Language.NL]:
        'Een trauma-geïnformeerde locatie voor erkende therapeuten en somatische beoefenaars die residentiële intensieven leiden. Volledige buyout, sauna, velden buiten de praktijkruimte.',
      [Language.DE]:
        'Ein traumasensibler Ort für approbierte Therapeut:innen und somatische Praktiker:innen, die residenzielle Intensives leiten. Privater Buyout, Sauna, Felder vor der Übungsscheune.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For licensed therapists & somatic practitioners',
      [Language.NL]: 'Voor erkende therapeuten & somatische beoefenaars',
      [Language.DE]: 'Für approbierte Therapeut:innen & somatische Praktiker:innen',
    },
    title: {
      [Language.EN]: 'A Trauma-Informed Venue for Somatic & Therapeutic Retreats',
      [Language.NL]: 'Een trauma-geïnformeerde locatie voor somatische & therapeutische retraites',
      [Language.DE]: 'Ein traumasensibler Ort für somatische & therapeutische Retreats',
    },
    subtitle: {
      [Language.EN]:
        'Hakomi, IFS, somatic experiencing, EMDR intensives. A held venue for the kind of work that asks for privacy, time, and a path through the trees afterwards.',
      [Language.NL]:
        'Hakomi, IFS, somatic experiencing, EMDR-intensieven. Een gedragen locatie voor het soort werk dat vraagt om privacy, tijd, en een pad door de bomen erna.',
      [Language.DE]:
        'Hakomi, IFS, Somatic Experiencing, EMDR-Intensives. Ein gehaltener Ort für die Art von Arbeit, die Privatsphäre verlangt, Zeit, und einen Pfad durch die Bäume danach.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A held container, in case the work calls for one.',
      [Language.NL]:
        'Een gedragen ruimte, voor als het werk daarom vraagt.',
      [Language.DE]:
        'Ein gehaltener Raum, falls die Arbeit danach verlangt.',
    },
    caption: {
      [Language.EN]:
        'Full venue buyout, no other guests, fields and pond for what comes up between sessions.',
      [Language.NL]:
        'Volledige buyout, geen andere gasten, velden en vijver voor wat tussen sessies door naar boven komt.',
      [Language.DE]:
        'Voller Buyout, keine anderen Gäste, Felder und Teich für das, was zwischen den Sitzungen hochkommt.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A practice space that holds the work',
        [Language.NL]: 'Een praktijkruimte die het werk draagt',
        [Language.DE]: 'Ein Übungsraum, der die Arbeit hält',
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
        [Language.DE]: [
          'Die Hay House-Scheune ist fünfundsechzig Quadratmeter beheizter Holzboden mit einer Holzdecke, die den Klang weich macht. Wir richten sie für Bodenarbeit mit zwölf Matten und Bolstern ein, für Stuhl-Dyaden mit beweglicher Bestuhlung, oder leer für bewegungsbasierte Modalitäten.',
          'Die Beleuchtung ist dimmbar. Der Raum kann am gleichen Nachmittag für Grounding-Arbeit verdunkelt und für somatisches Mapping wieder hell gemacht werden.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'Practice barn set up for floor-based somatic work',
        [Language.NL]: 'Praktijkruimte ingericht voor somatisch vloerwerk',
        [Language.DE]: 'Übungsscheune eingerichtet für somatische Bodenarbeit',
      },
    },
    {
      h2: {
        [Language.EN]: 'Aftercare is geography, not a checklist',
        [Language.NL]: 'Aftercare is geografie, geen checklist',
        [Language.DE]: 'Nachsorge ist Geografie, keine Checkliste',
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
        [Language.DE]: [
          'Nach einem harten Stück Arbeit ist ein Hotelflur selten das, was Menschen brauchen. Wir haben einen 1,3 Hektar großen Hof: Pfade durch zwölfhundert Bäume, einen Schwimmteich, eine Sauna, eine Feuerstelle und Bänke, die für Alleinsein gestellt sind, nicht für Geselligkeit.',
          'Teilnehmende können allein sein, ohne isoliert zu sein. Sie können in der Natur sein, ohne dorthin fahren zu müssen. Die meisten Therapeut:innen sagen uns, dass genau das der Teil ist, der die Integration leistet, die der Workshop-Raum nicht leisten kann.',
        ],
      },
      imageSrc: IMAGES.accommodation.outsideWalk,
      imageAlt: {
        [Language.EN]: 'A path through the trees at The Makers Barn',
        [Language.NL]: 'Een pad door de bomen bij The Makers Barn',
        [Language.DE]: 'Ein Pfad durch die Bäume bei The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'Privacy that the work earns and asks for',
        [Language.NL]: 'Privacy die het werk verdient en vraagt',
        [Language.DE]: 'Privatsphäre, die die Arbeit verdient und verlangt',
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
        [Language.DE]: [
          'Voller Buyout — keine anderen Gruppen, keine anderen Gäste, die am Fenster des Übungsraums vorbeigehen. Unser Team bleibt während der Sitzungen aus den Gebäuden heraus und ist bei Bedarf telefonisch erreichbar.',
          'Für Eins-zu-Eins-Supervision oder Solo-Integrationszeit sind die Cosmos-Hütte und das Teehaus beide privat. Die Schlafordnung kann für Gruppen von acht ganz auf Einzelzimmern beruhen; die meisten Kohorten von zehn bis vierzehn verteilen sich auf Einzel- und Doppelzimmer.',
        ],
      },
      imageSrc: IMAGES.accommodation.cosmosOutside,
      imageAlt: {
        [Language.EN]: 'Cosmos cabin from outside, surrounded by trees',
        [Language.NL]: 'Cosmos cabin van buiten, omringd door bomen',
        [Language.DE]: 'Cosmos-Hütte von außen, umgeben von Bäumen',
      },
    },
  ],
  facts: [
    {
      number: '8–14',
      description: {
        [Language.EN]: 'Cohort size — most somatic groups settle around ten',
        [Language.NL]: 'Cohortgrootte — de meeste somatische groepen landen rond tien',
        [Language.DE]: 'Kohortengröße — die meisten somatischen Gruppen pendeln sich bei zehn ein',
      },
    },
    {
      number: '1,3 ha',
      description: {
        [Language.EN]: 'Of private land — paths, pond, sauna for between-session integration',
        [Language.NL]: 'Eigen terrein — paden, vijver, sauna voor integratie tussen sessies',
        [Language.DE]: 'Privates Land — Pfade, Teich, Sauna für Integration zwischen den Sitzungen',
      },
    },
    {
      number: 'Full',
      description: {
        [Language.EN]: 'Venue buyout always — no exceptions for groups doing inner work',
        [Language.NL]: 'Altijd volledige buyout — geen uitzonderingen voor groepen die innerlijk werk doen',
        [Language.DE]: 'Immer voller Buyout — keine Ausnahmen für Gruppen, die innere Arbeit machen',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Do you require professional credentials from the lead facilitator?',
        [Language.NL]: 'Vragen jullie om beroepskwalificaties van de hoofdfacilitator?',
        [Language.DE]: 'Verlangt ihr berufliche Qualifikationen von der leitenden Begleitung?',
      },
      answer: {
        [Language.EN]:
          'Yes. For somatic and therapeutic retreats we ask the lead facilitator to share their professional registration (e.g., NIP, BIG, or equivalent international body). This protects participants and us.',
        [Language.NL]:
          'Ja. Voor somatische en therapeutische retraites vragen we de hoofdfacilitator om de beroepsregistratie te delen (bijv. NIP, BIG of een gelijkwaardige internationale organisatie). Dat beschermt zowel de deelnemers als ons.',
        [Language.DE]:
          'Ja. Bei somatischen und therapeutischen Retreats bitten wir die leitende Begleitung darum, ihre Berufsregistrierung zu teilen (z. B. NIP, BIG oder eine gleichwertige internationale Stelle). Das schützt Teilnehmende und uns.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we have on-call medical support nearby?',
        [Language.NL]: 'Is er medische ondersteuning in de buurt beschikbaar?',
        [Language.DE]: 'Können wir medizinische Bereitschaft in der Nähe haben?',
      },
      answer: {
        [Language.EN]:
          'Hospital and 24/7 GP services are in Zwolle, fifteen minutes by car. We share the local emergency contact list with every booking and recommend you brief participants on it at intake.',
        [Language.NL]:
          'Ziekenhuis en 24/7 huisartsendienst zijn in Zwolle, vijftien minuten met de auto. We delen de lokale noodcontactlijst bij elke boeking en adviseren je om deelnemers daarover bij intake te informeren.',
        [Language.DE]:
          'Krankenhaus und 24/7-Hausarztdienste sind in Zwolle, fünfzehn Autominuten entfernt. Wir teilen mit jeder Buchung die lokale Notfallkontaktliste und empfehlen, die Teilnehmenden beim Intake darüber zu informieren.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can a participant extend their stay if they need more integration time?',
        [Language.NL]: 'Kan een deelnemer langer blijven als die meer integratietijd nodig heeft?',
        [Language.DE]: 'Kann eine teilnehmende Person ihren Aufenthalt verlängern, wenn sie mehr Integrationszeit braucht?',
      },
      answer: {
        [Language.EN]:
          'Often yes. The Cosmos cabin or a single Horizon room can sometimes be extended for one to three nights after the cohort leaves, depending on the booking calendar. Tell us at intake and we will hold the option.',
        [Language.NL]:
          'Vaak wel. De Cosmos cabin of een eenpersoonskamer in Horizon kan soms één tot drie nachten verlengd worden nadat het cohort vertrekt — afhankelijk van de agenda. Laat het weten bij de intake, dan houden we de optie open.',
        [Language.DE]:
          'Oft ja. Die Cosmos-Hütte oder ein Einzelzimmer in Horizon lässt sich manchmal um ein bis drei Nächte verlängern, nachdem die Kohorte abgereist ist — je nach Buchungskalender. Sag uns Bescheid beim Intake, dann halten wir die Option offen.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can participants self-select rooms?',
        [Language.NL]: 'Kunnen deelnemers zelf hun kamer kiezen?',
        [Language.DE]: 'Können Teilnehmende ihre Zimmer selbst wählen?',
      },
      answer: {
        [Language.EN]:
          'We pre-allocate based on the cohort list you send us. For somatic work most groups want all-private or all-twin so the experience is consistent — we will work with you to make that fair within the available rooms.',
        [Language.NL]:
          'We delen de kamers vooraf in op basis van de cohortlijst die je ons stuurt. Voor somatisch werk willen de meeste groepen volledig privé of volledig tweepersoons, zodat de ervaring consistent is — we kijken samen met jou hoe we dat eerlijk verdelen over de beschikbare kamers.',
        [Language.DE]:
          'Wir teilen die Zimmer vorab anhand der Kohortenliste zu, die du uns schickst. Bei somatischer Arbeit wollen die meisten Gruppen entweder durchgehend Einzel- oder durchgehend Doppelzimmer, damit die Erfahrung einheitlich ist — wir stimmen das mit dir ab, sodass es fair innerhalb der verfügbaren Zimmer aufgeht.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'A held venue for the work that asks for one',
      [Language.NL]: 'Een gedragen locatie voor het werk dat erom vraagt',
      [Language.DE]: 'Ein gehaltener Ort für die Arbeit, die danach verlangt',
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
      [Language.EN]: 'Licensed therapists and somatic practitioners running residential intensives',
      [Language.NL]: 'Erkende therapeuten en somatische beoefenaars die residentiële intensieven leiden',
      [Language.DE]: 'Approbierte Therapeut:innen und somatische Praktiker:innen für residenzielle Intensives',
    },
    cohortSize: { min: 8, max: 14 },
    keywords: {
      [Language.EN]: [
        'somatic retreat venue',
        'trauma-informed retreat venue',
        'Hakomi retreat venue',
        'IFS retreat venue',
        'Internal Family Systems retreat venue',
        'somatic experiencing retreat venue',
        'EMDR intensive venue',
        'body-based therapy retreat venue',
        'somatic therapy residential venue',
        'licensed therapist retreat venue Netherlands',
      ],
      [Language.NL]: [
        'somatische retraite locatie',
        'trauma-geïnformeerde retraite locatie',
        'Hakomi retraite locatie',
        'IFS retraite locatie',
        'somatic experiencing retraite locatie',
        'EMDR intensief locatie',
        'lichaamsgerichte therapie retraite',
        'therapeut retraite locatie Nederland',
      ],
      [Language.DE]: [
        'somatischer Retreat-Ort',
        'traumasensibler Retreat-Ort',
        'Hakomi Retreat-Ort',
        'IFS Retreat-Ort',
        'Somatic Experiencing Retreat',
        'EMDR-Intensive-Ort',
        'körperorientierte Therapie-Retreat',
      ],
    },
  },
}
