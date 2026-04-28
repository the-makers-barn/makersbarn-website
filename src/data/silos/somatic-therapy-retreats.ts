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
    [Language.ES]: 'Una sesión uno a uno junto al estanque en The Makers Barn',
    [Language.FR]: 'Une séance en tête-à-tête au bord de l’étang à The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Somatic & Therapeutic Retreat Venue — Netherlands',
      [Language.NL]: 'Locatie voor somatische & therapeutische retraites — Nederland',
      [Language.DE]: 'Ort für somatische & therapeutische Retreats — Niederlande',
      [Language.ES]: 'Espacio para retiros somáticos y terapéuticos — Países Bajos',
      [Language.FR]: 'Lieu pour retraites somatiques et thérapeutiques — Pays-Bas',
    },
    description: {
      [Language.EN]:
        'A trauma-informed venue for licensed therapists and somatic practitioners running residential intensives. Private buyout, sauna, fields outside the practice barn.',
      [Language.NL]:
        'Een trauma-geïnformeerde locatie voor erkende therapeuten en somatische beoefenaars die residentiële intensieven leiden. Volledige buyout, sauna, velden buiten de praktijkruimte.',
      [Language.DE]:
        'Ein traumasensibler Ort für approbierte Therapeut:innen und somatische Praktiker:innen, die residenzielle Intensives leiten. Privater Buyout, Sauna, Felder vor der Übungsscheune.',
      [Language.ES]:
        'Un espacio con enfoque trauma-informed para terapeutas titulados y practicantes somáticos que dirigen intensivos residenciales. Buyout privado, sauna, campos a las puertas del granero de práctica.',
      [Language.FR]:
        'Un lieu trauma-informé pour les thérapeutes diplômés et les praticiens somatiques qui animent des intensifs résidentiels. Buyout privé, sauna, champs aux abords de la grange de pratique.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For licensed therapists & somatic practitioners',
      [Language.NL]: 'Voor erkende therapeuten & somatische beoefenaars',
      [Language.DE]: 'Für approbierte Therapeut:innen & somatische Praktiker:innen',
      [Language.ES]: 'Para terapeutas titulados y practicantes somáticos',
      [Language.FR]: 'Pour les thérapeutes diplômés et les praticiens somatiques',
    },
    title: {
      [Language.EN]: 'A Trauma-Informed Venue for Somatic & Therapeutic Retreats',
      [Language.NL]: 'Een trauma-geïnformeerde locatie voor somatische & therapeutische retraites',
      [Language.DE]: 'Ein traumasensibler Ort für somatische & therapeutische Retreats',
      [Language.ES]: 'Un espacio trauma-informed para retiros somáticos y terapéuticos',
      [Language.FR]: 'Un lieu trauma-informé pour les retraites somatiques et thérapeutiques',
    },
    subtitle: {
      [Language.EN]:
        'Hakomi, IFS, somatic experiencing, EMDR intensives. A held venue for the kind of work that asks for privacy, time, and a path through the trees afterwards.',
      [Language.NL]:
        'Hakomi, IFS, somatic experiencing, EMDR-intensieven. Een gedragen locatie voor het soort werk dat vraagt om privacy, tijd, en een pad door de bomen erna.',
      [Language.DE]:
        'Hakomi, IFS, Somatic Experiencing, EMDR-Intensives. Ein gehaltener Ort für die Art von Arbeit, die Privatsphäre verlangt, Zeit, und einen Pfad durch die Bäume danach.',
      [Language.ES]:
        'Hakomi, IFS, somatic experiencing, intensivos de EMDR. Un espacio sostenido para el tipo de trabajo que pide privacidad, tiempo, y un sendero entre los árboles después.',
      [Language.FR]:
        'Hakomi, IFS, somatic experiencing, intensifs EMDR. Un lieu soutenu pour ce type de travail qui demande de l’intimité, du temps, et un chemin à travers les arbres ensuite.',
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
      [Language.ES]:
        'Un contenedor sostenido, por si el trabajo lo pide.',
      [Language.FR]:
        'Un contenant soutenu, au cas où le travail le demande.',
    },
    caption: {
      [Language.EN]:
        'Full venue buyout, no other guests, fields and pond for what comes up between sessions.',
      [Language.NL]:
        'Volledige buyout, geen andere gasten, velden en vijver voor wat tussen sessies door naar boven komt.',
      [Language.DE]:
        'Voller Buyout, keine anderen Gäste, Felder und Teich für das, was zwischen den Sitzungen hochkommt.',
      [Language.ES]:
        'Buyout completo, sin otros huéspedes, campos y estanque para lo que aflora entre sesiones.',
      [Language.FR]:
        'Buyout complet, pas d’autres invités, des champs et un étang pour ce qui remonte entre les séances.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A practice space that holds the work',
        [Language.NL]: 'Een praktijkruimte die het werk draagt',
        [Language.DE]: 'Ein Übungsraum, der die Arbeit hält',
        [Language.ES]: 'Un espacio de práctica que sostiene el trabajo',
        [Language.FR]: 'Un espace de pratique qui porte le travail',
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
        [Language.ES]: [
          'El granero del Hay House son sesenta y cinco metros cuadrados de suelo de madera con calefacción, con un techo de madera que suaviza el sonido. Lo podemos preparar para trabajo en el suelo con doce esterillas y bolsters, para díadas en silla con asientos móviles, o vacío para modalidades de movimiento.',
          'La iluminación es regulable. La sala puede oscurecerse para trabajo de grounding y aclararse para somatic mapping la misma tarde.',
        ],
        [Language.FR]: [
          'La grange du Hay House, c’est soixante-cinq mètres carrés de sol en bois chauffé avec un plafond en bois qui adoucit le son. Nous pouvons l’installer pour du travail au sol avec douze tapis et bolsters, pour des dyades sur chaises avec des sièges mobiles, ou vide pour des modalités basées sur le mouvement.',
          'L’éclairage est variable. La salle peut être assombrie pour un travail d’ancrage et éclaircie pour du somatic mapping dans le même après-midi.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'Practice barn set up for floor-based somatic work',
        [Language.NL]: 'Praktijkruimte ingericht voor somatisch vloerwerk',
        [Language.DE]: 'Übungsscheune eingerichtet für somatische Bodenarbeit',
        [Language.ES]: 'Granero de práctica preparado para trabajo somático en el suelo',
        [Language.FR]: 'Grange de pratique installée pour du travail somatique au sol',
      },
    },
    {
      h2: {
        [Language.EN]: 'Aftercare is geography, not a checklist',
        [Language.NL]: 'Aftercare is geografie, geen checklist',
        [Language.DE]: 'Nachsorge ist Geografie, keine Checkliste',
        [Language.ES]: 'El aftercare es geografía, no una checklist',
        [Language.FR]: 'Le soin après séance, c’est de la géographie, pas une checklist',
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
        [Language.ES]: [
          'Después de un trabajo duro, lo que la gente necesita rara vez es un pasillo de hotel. Tenemos una granja de 1,3 hectares: senderos entre mil doscientos árboles, un estanque para nadar, una sauna, un círculo de fuego y bancos colocados para la soledad, no para la reunión social.',
          'Los participantes pueden estar solos sin estar aislados. Pueden estar en la naturaleza sin tener que conducir hasta ella. La mayoría de los terapeutas nos dice que esta es la parte que cierra la integración que la sala de taller no puede cerrar.',
        ],
        [Language.FR]: [
          'Après un travail difficile, ce dont les gens ont besoin n’est rarement un couloir d’hôtel. Nous avons une ferme de 1,3 hectares : des chemins parmi mille deux cents arbres, un étang de baignade, un sauna, un cercle de feu, et des bancs placés pour la solitude plutôt que pour le rassemblement.',
          'Les participants peuvent être seuls sans être isolés. Ils peuvent être dans la nature sans avoir à y conduire. La plupart des thérapeutes nous disent que c’est cette partie-là qui réalise l’intégration que la salle d’atelier ne peut pas réaliser.',
        ],
      },
      imageSrc: IMAGES.accommodation.outsideWalk,
      imageAlt: {
        [Language.EN]: 'A path through the trees at The Makers Barn',
        [Language.NL]: 'Een pad door de bomen bij The Makers Barn',
        [Language.DE]: 'Ein Pfad durch die Bäume bei The Makers Barn',
        [Language.ES]: 'Un sendero entre los árboles en The Makers Barn',
        [Language.FR]: 'Un chemin à travers les arbres à The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'Privacy that the work earns and asks for',
        [Language.NL]: 'Privacy die het werk verdient en vraagt',
        [Language.DE]: 'Privatsphäre, die die Arbeit verdient und verlangt',
        [Language.ES]: 'Privacidad que el trabajo se gana y pide',
        [Language.FR]: 'L’intimité que le travail mérite et réclame',
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
        [Language.ES]: [
          'Buyout completo — ningún otro grupo, ningún otro huésped que pase por delante de la ventana de la sala de práctica. Nuestro equipo se mantiene fuera de los edificios durante las sesiones y está localizable por teléfono si hace falta.',
          'Para supervisión uno a uno o tiempo de integración en solitario, la Cosmos cabin y la casa de té son privadas. La distribución para dormir puede ser totalmente individual en grupos de ocho; la mayoría de las cohortes de diez a catorce se reparten entre individuales y dobles.',
        ],
        [Language.FR]: [
          'Buyout complet — pas d’autres groupes, pas d’autres invités qui passent devant la fenêtre de la salle de pratique. Notre équipe reste hors des bâtiments pendant les sessions et reste joignable par téléphone si besoin.',
          'Pour de la supervision en tête-à-tête ou un temps d’intégration en solo, la Cosmos cabin et la maison de thé sont toutes deux privées. La répartition des couchages peut être entièrement en chambres individuelles pour des groupes de huit ; la plupart des cohortes de dix à quatorze se partagent entre chambres individuelles et chambres doubles.',
        ],
      },
      imageSrc: IMAGES.accommodation.cosmosOutside,
      imageAlt: {
        [Language.EN]: 'Cosmos cabin from outside, surrounded by trees',
        [Language.NL]: 'Cosmos cabin van buiten, omringd door bomen',
        [Language.DE]: 'Cosmos-Hütte von außen, umgeben von Bäumen',
        [Language.ES]: 'Cosmos cabin desde fuera, rodeada de árboles',
        [Language.FR]: 'Cosmos cabin vue de l’extérieur, entourée d’arbres',
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
        [Language.ES]: 'Tamaño de cohorte — la mayoría de los grupos somáticos se asienta en torno a diez',
        [Language.FR]: 'Taille de cohorte — la plupart des groupes somatiques s’installent autour de dix',
      },
    },
    {
      number: '1,3 ha',
      description: {
        [Language.EN]: 'Of private land — paths, pond, sauna for between-session integration',
        [Language.NL]: 'Eigen terrein — paden, vijver, sauna voor integratie tussen sessies',
        [Language.DE]: 'Privates Land — Pfade, Teich, Sauna für Integration zwischen den Sitzungen',
        [Language.ES]: 'De terreno privado — senderos, estanque, sauna para integrar entre sesiones',
        [Language.FR]: 'De terrain privé — chemins, étang, sauna pour l’intégration entre les séances',
      },
    },
    {
      number: 'Full',
      description: {
        [Language.EN]: 'Venue buyout always — no exceptions for groups doing inner work',
        [Language.NL]: 'Altijd volledige buyout — geen uitzonderingen voor groepen die innerlijk werk doen',
        [Language.DE]: 'Immer voller Buyout — keine Ausnahmen für Gruppen, die innere Arbeit machen',
        [Language.ES]: 'Siempre buyout completo del lugar — sin excepciones para grupos que hacen trabajo interno',
        [Language.FR]: 'Toujours buyout complet — pas d’exception pour les groupes en travail intérieur',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Do you require professional credentials from the lead facilitator?',
        [Language.NL]: 'Vragen jullie om beroepskwalificaties van de hoofdfacilitator?',
        [Language.DE]: 'Verlangt ihr berufliche Qualifikationen von der leitenden Begleitung?',
        [Language.ES]: '¿Pedís credenciales profesionales al facilitador principal?',
        [Language.FR]: 'Demandez-vous des qualifications professionnelles au facilitateur principal ?',
      },
      answer: {
        [Language.EN]:
          'Yes. For somatic and therapeutic retreats we ask the lead facilitator to share their professional registration (e.g., NIP, BIG, or equivalent international body). This protects participants and us.',
        [Language.NL]:
          'Ja. Voor somatische en therapeutische retraites vragen we de hoofdfacilitator om de beroepsregistratie te delen (bijv. NIP, BIG of een gelijkwaardige internationale organisatie). Dat beschermt zowel de deelnemers als ons.',
        [Language.DE]:
          'Ja. Bei somatischen und therapeutischen Retreats bitten wir die leitende Begleitung darum, ihre Berufsregistrierung zu teilen (z. B. NIP, BIG oder eine gleichwertige internationale Stelle). Das schützt Teilnehmende und uns.',
        [Language.ES]:
          'Sí. Para retiros somáticos y terapéuticos pedimos al facilitador principal que comparta su registro profesional (p. ej., NIP, BIG o un organismo internacional equivalente). Eso protege a los participantes y a nosotros.',
        [Language.FR]:
          'Oui. Pour les retraites somatiques et thérapeutiques, nous demandons au facilitateur principal de partager son enregistrement professionnel (par ex. NIP, BIG ou un organisme international équivalent). Cela protège les participants et nous.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we have on-call medical support nearby?',
        [Language.NL]: 'Is er medische ondersteuning in de buurt beschikbaar?',
        [Language.DE]: 'Können wir medizinische Bereitschaft in der Nähe haben?',
        [Language.ES]: '¿Podemos contar con apoyo médico cerca disponible?',
        [Language.FR]: 'Pouvons-nous disposer d’un soutien médical à proximité ?',
      },
      answer: {
        [Language.EN]:
          'Hospital and 24/7 GP services are in Zwolle, fifteen minutes by car. We share the local emergency contact list with every booking and recommend you brief participants on it at intake.',
        [Language.NL]:
          'Ziekenhuis en 24/7 huisartsendienst zijn in Zwolle, vijftien minuten met de auto. We delen de lokale noodcontactlijst bij elke boeking en adviseren je om deelnemers daarover bij intake te informeren.',
        [Language.DE]:
          'Krankenhaus und 24/7-Hausarztdienste sind in Zwolle, fünfzehn Autominuten entfernt. Wir teilen mit jeder Buchung die lokale Notfallkontaktliste und empfehlen, die Teilnehmenden beim Intake darüber zu informieren.',
        [Language.ES]:
          'El hospital y los servicios de médico de cabecera 24/7 están en Zwolle, a quince minutos en coche. Con cada reserva compartimos la lista local de contactos de emergencia y te recomendamos informar a los participantes en la intake.',
        [Language.FR]:
          'L’hôpital et les services de médecin généraliste 24h/24 se trouvent à Zwolle, à quinze minutes en voiture. Nous partageons la liste locale de contacts d’urgence à chaque réservation et te recommandons d’en informer les participants lors de l’intake.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can a participant extend their stay if they need more integration time?',
        [Language.NL]: 'Kan een deelnemer langer blijven als die meer integratietijd nodig heeft?',
        [Language.DE]: 'Kann eine teilnehmende Person ihren Aufenthalt verlängern, wenn sie mehr Integrationszeit braucht?',
        [Language.ES]: '¿Puede un participante alargar su estancia si necesita más tiempo de integración?',
        [Language.FR]: 'Un participant peut-il prolonger son séjour s’il a besoin de plus de temps d’intégration ?',
      },
      answer: {
        [Language.EN]:
          'Often yes. The Cosmos cabin or a single Horizon room can sometimes be extended for one to three nights after the cohort leaves, depending on the booking calendar. Tell us at intake and we will hold the option.',
        [Language.NL]:
          'Vaak wel. De Cosmos cabin of een eenpersoonskamer in Horizon kan soms één tot drie nachten verlengd worden nadat het cohort vertrekt — afhankelijk van de agenda. Laat het weten bij de intake, dan houden we de optie open.',
        [Language.DE]:
          'Oft ja. Die Cosmos-Hütte oder ein Einzelzimmer in Horizon lässt sich manchmal um ein bis drei Nächte verlängern, nachdem die Kohorte abgereist ist — je nach Buchungskalender. Sag uns Bescheid beim Intake, dann halten wir die Option offen.',
        [Language.ES]:
          'A menudo sí. La Cosmos cabin o una individual en Horizon a veces puede extenderse de una a tres noches después de que la cohorte se vaya, según el calendario de reservas. Coméntanoslo en la intake y mantenemos la opción abierta.',
        [Language.FR]:
          'Souvent, oui. La Cosmos cabin ou une chambre simple à Horizon peut parfois être prolongée d’une à trois nuits après le départ de la cohorte, selon le calendrier des réservations. Dis-le-nous à l’intake et nous garderons l’option ouverte.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can participants self-select rooms?',
        [Language.NL]: 'Kunnen deelnemers zelf hun kamer kiezen?',
        [Language.DE]: 'Können Teilnehmende ihre Zimmer selbst wählen?',
        [Language.ES]: '¿Pueden los participantes elegir su habitación?',
        [Language.FR]: 'Les participants peuvent-ils choisir eux-mêmes leur chambre ?',
      },
      answer: {
        [Language.EN]:
          'We pre-allocate based on the cohort list you send us. For somatic work most groups want all-private or all-twin so the experience is consistent — we will work with you to make that fair within the available rooms.',
        [Language.NL]:
          'We delen de kamers vooraf in op basis van de cohortlijst die je ons stuurt. Voor somatisch werk willen de meeste groepen volledig privé of volledig tweepersoons, zodat de ervaring consistent is — we kijken samen met jou hoe we dat eerlijk verdelen over de beschikbare kamers.',
        [Language.DE]:
          'Wir teilen die Zimmer vorab anhand der Kohortenliste zu, die du uns schickst. Bei somatischer Arbeit wollen die meisten Gruppen entweder durchgehend Einzel- oder durchgehend Doppelzimmer, damit die Erfahrung einheitlich ist — wir stimmen das mit dir ab, sodass es fair innerhalb der verfügbaren Zimmer aufgeht.',
        [Language.ES]:
          'Asignamos las habitaciones por adelantado según la lista de la cohorte que nos envías. Para trabajo somático la mayoría de los grupos prefiere todo individual o todo doble para que la experiencia sea consistente — lo ajustamos contigo para que sea justo dentro de las habitaciones disponibles.',
        [Language.FR]:
          'Nous attribuons les chambres à l’avance à partir de la liste de cohorte que tu nous envoies. Pour le travail somatique, la plupart des groupes veulent tout en chambre individuelle ou tout en chambre double pour que l’expérience soit homogène — nous voyons avec toi comment répartir cela de manière équitable dans les chambres disponibles.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'A held venue for the work that asks for one',
      [Language.NL]: 'Een gedragen locatie voor het werk dat erom vraagt',
      [Language.DE]: 'Ein gehaltener Ort für die Arbeit, die danach verlangt',
      [Language.ES]: 'Un espacio sostenido para el trabajo que lo pide',
      [Language.FR]: 'Un lieu soutenu pour le travail qui le demande',
    },
    body: {
      [Language.EN]:
        'Tell us about your modality, your group size, and your dates. We will come back honestly about whether the venue fits — and what your participants will experience if it does.',
      [Language.NL]:
        'Vertel ons over je modaliteit, je groepsgrootte en je data. We laten je eerlijk weten of de locatie past — en wat je deelnemers zullen ervaren als dat zo is.',
      [Language.DE]:
        'Erzähl uns von deiner Modalität, deiner Gruppengröße und deinen Daten. Wir melden uns ehrlich zurück, ob der Ort passt — und was deine Teilnehmenden erleben werden, wenn ja.',
      [Language.ES]:
        'Cuéntanos tu modalidad, el tamaño de tu grupo y tus fechas. Te responderemos con honestidad si el lugar encaja — y qué van a vivir tus participantes si así es.',
      [Language.FR]:
        'Parle-nous de ta modalité, de la taille de ton groupe et de tes dates. Nous reviendrons honnêtement vers toi pour dire si le lieu convient — et ce que tes participants vivront s’il convient.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Licensed therapists and somatic practitioners running residential intensives',
      [Language.NL]: 'Erkende therapeuten en somatische beoefenaars die residentiële intensieven leiden',
      [Language.DE]: 'Approbierte Therapeut:innen und somatische Praktiker:innen für residenzielle Intensives',
      [Language.ES]: 'Terapeutas titulados y practicantes somáticos que dirigen intensivos residenciales',
      [Language.FR]: 'Thérapeutes diplômés et praticiens somatiques qui mènent des intensifs résidentiels',
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
      [Language.ES]: [
        'lugar para retiros somáticos',
        'lugar para retiros trauma-informed',
        'retiro Hakomi',
        'retiro IFS Sistemas Familiares Internos',
        'retiro somatic experiencing',
        'intensivo EMDR',
        'retiro de terapia corporal',
      ],
      [Language.FR]: [
        'lieu de retraite somatique',
        'lieu de retraite trauma-informé',
        'retraite Hakomi',
        'retraite IFS Internal Family Systems',
        'retraite somatic experiencing',
        'intensif EMDR',
        'retraite de thérapie corporelle',
      ],
    },
  },
}
