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
    [Language.ES]: 'Invitados del retiro caminando en silencio por los campos de The Makers Barn',
    [Language.FR]: 'Des retraitants marchant en silence à travers les champs de The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Silent Meditation & Buddhist Retreat Venue — Netherlands',
      [Language.NL]: 'Stille Meditatie & Boeddhistische Retraite Locatie — Nederland',
      [Language.DE]: 'Ort für stille Meditations- und buddhistische Retreats – Niederlande',
      [Language.ES]: 'Lugar para retiros silenciosos de meditación y budistas — Países Bajos',
      [Language.FR]: 'Lieu de retraites silencieuses de méditation et bouddhistes — Pays-Bas',
    },
    description: {
      [Language.EN]:
        'A silent retreat venue for Buddhist and meditation groups in the Dutch countryside. 1.3-hectare private land, no neighbours, kitchen built around your schedule.',
      [Language.NL]:
        'Een stille retraitelocatie voor boeddhistische en meditatiegroepen op het Nederlandse platteland. 1,3 hectare eigen terrein, geen buren, een keuken die zich aanpast aan jouw schema.',
      [Language.DE]:
        'Ein stiller Retreat-Ort für buddhistische Gruppen und Meditationsgruppen mitten in der niederländischen Landschaft. 1,3 Hektar eigenes Land, keine Nachbarn, eine Küche, die sich nach deinem Zeitplan richtet.',
      [Language.ES]:
        'Un lugar de retiro silencioso para grupos budistas y de meditación en el campo neerlandés. 1,3 hectares de terreno privado, sin vecinos, una cocina pensada en torno a tu horario.',
      [Language.FR]:
        'Un lieu de retraite silencieuse pour les groupes bouddhistes et de méditation, dans la campagne néerlandaise. 1,3 hectare de terrain privé, pas de voisins, une cuisine pensée autour de ton emploi du temps.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For meditation & dharma groups',
      [Language.NL]: 'Voor meditatie- & dharma-groepen',
      [Language.DE]: 'Für Meditations- und Dharma-Gruppen',
      [Language.ES]: 'Para grupos de meditación y dharma',
      [Language.FR]: 'Pour les groupes de méditation et de dharma',
    },
    title: {
      [Language.EN]: 'A Silent Retreat Setting for Buddhist & Meditation Groups',
      [Language.NL]: 'Een stille retraite-locatie voor boeddhistische & meditatie-groepen',
      [Language.DE]: 'Ein stiller Retreat-Ort für buddhistische und Meditationsgruppen',
      [Language.ES]: 'Un entorno de retiro silencioso para grupos budistas y de meditación',
      [Language.FR]: 'Un cadre de retraite silencieuse pour les groupes bouddhistes et de méditation',
    },
    subtitle: {
      [Language.EN]:
        'Held by fields and big skies — not by traffic. A private 1.3-hectare farm in rural Overijssel with a precedent of practice.',
      [Language.NL]:
        'Gedragen door velden en grote luchten — niet door verkeer. Een eigen boerderij van 1,3 hectare in landelijk Overijssel met een traditie van beoefening.',
      [Language.DE]:
        'Getragen von Feldern und weitem Himmel – nicht von Verkehrslärm. Ein privater Hof mit 1,3 Hektar im ländlichen Overijssel, an dem schon ernsthaft praktiziert wird.',
      [Language.ES]:
        'Sostenido por campos y cielos amplios — no por el tráfico. Una granja privada de 1,3 hectares en el Overijssel rural con una trayectoria de práctica.',
      [Language.FR]:
        'Porté par les champs et de grands ciels — pas par la circulation. Une ferme privée de 1,3 hectare dans la campagne de l’Overijssel, avec une vraie tradition de pratique installée.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Twelve-thousand square metres of held quiet.',
      [Language.NL]:
        'Twaalfduizend vierkante meter gedragen stilte.',
      [Language.DE]:
        'Zwölftausend Quadratmeter getragene Stille.',
      [Language.ES]:
        'Doce mil metros cuadrados de silencio sostenido.',
      [Language.FR]:
        'Douze mille mètres carrés de silence tenu.',
    },
    caption: {
      [Language.EN]:
        'A practice hall that warms slowly, lights low, and a kitchen that respects your schedule of meals.',
      [Language.NL]:
        'Een praktijkzaal die langzaam opwarmt, gedempt licht, en een keuken die jouw maaltijdschema respecteert.',
      [Language.DE]:
        'Ein Praxisraum, der langsam warm wird, gedämpftes Licht und eine Küche, die deinen Mahlzeitenplan respektiert.',
      [Language.ES]:
        'Una sala de práctica que se calienta poco a poco, luz tenue y una cocina que respeta tu horario de comidas.',
      [Language.FR]:
        'Une salle de pratique qui chauffe lentement, une lumière douce et une cuisine qui respecte ton rythme de repas.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A precedent of practice',
        [Language.NL]: 'Een traditie van beoefening',
        [Language.DE]: 'Eine Tradition der Praxis',
        [Language.ES]: 'Una trayectoria de práctica',
        [Language.FR]: 'Une tradition de pratique',
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
        [Language.DE]: [
          'Geshe Pema Dorjee unterrichtet hier seit der Eröffnung in zwei jährlichen Retreats tibetischen Buddhismus. Sein Programm läuft von 7 bis 20 Uhr — Küche, Heizung und Warmwasser sind darauf eingestellt. Andere Linien haben darauf aufgebaut: Vipassana, Zen, atemorientierte Meditation.',
          'Du bringst deinen Lehrer und deine Tradition mit. Wir bieten einen Ort, der schon weiß, was ein Meditationstag von ihm verlangt.',
        ],
        [Language.ES]: [
          'Geshe Pema Dorjee ha enseñado budismo tibetano aquí en dos retiros anuales desde que abrió el lugar. El ritmo de su programa, de 7:00 a 20:00, ha marcado cómo se organizan la cocina, la calefacción y el agua caliente. Otras tradiciones se han apoyado en eso — Vipassana, Zen, meditación basada en la respiración.',
          'Tú traes a tu maestro y tu tradición. Nosotros ofrecemos un lugar que ya sabe lo que pide un día de meditación.',
        ],
        [Language.FR]: [
          'Geshe Pema Dorjee enseigne ici le bouddhisme tibétain dans deux retraites annuelles depuis l’ouverture du lieu. Le rythme de son programme, de 7 h à 20 h, a façonné notre manière d’organiser la cuisine, le chauffage et l’eau chaude. D’autres lignées s’y sont greffées depuis — Vipassana, zen, méditation centrée sur la respiration.',
          'Tu amènes ton enseignant et ta tradition. Nous apportons un lieu qui sait déjà ce qu’une journée de méditation demande.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'Practice space prepared with cushions and meditation mats',
        [Language.NL]: 'Praktijkruimte met meditatiekussens en matten klaargezet',
        [Language.DE]: 'Praxisraum mit Kissen und Meditationsmatten vorbereitet',
        [Language.ES]: 'Espacio de práctica preparado con cojines y esterillas de meditación',
        [Language.FR]: 'Espace de pratique préparé avec coussins et tapis de méditation',
      },
    },
    {
      h2: {
        [Language.EN]: 'Held by silence — not by walls',
        [Language.NL]: 'Gedragen door stilte — niet door muren',
        [Language.DE]: 'Getragen von Stille — nicht von Wänden',
        [Language.ES]: 'Sostenido por el silencio — no por las paredes',
        [Language.FR]: 'Porté par le silence — pas par les murs',
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
        [Language.DE]: [
          'Der Hof liegt auf eigenem Grund von 1,3 Hektar. Es gibt keine geteilten Gebäude, keine Nachbargäste, keinen Parkplatz vor dem Praxisraum. Die nächste Straße ist ein ruhiger Feldweg, und dahinter: Felder, die Sallandse Heuvelrug, die IJssel.',
          'Für Gehmeditation gibt es Raum zum Gehen. Für schweigende Mahlzeiten gibt es einen eigenen Platz. Türen dürfen geschlossen bleiben für ein edles Schweigen, das niemand verteidigen muss.',
        ],
        [Language.ES]: [
          'La granja se asienta en sus propias 1,3 hectares de terreno. No hay edificios compartidos, ni huéspedes vecinos, ni un aparcamiento frente a la sala de práctica. La carretera más cercana es un camino rural tranquilo, y más allá: campos, la Sallandse Heuvelrug, el río IJssel.',
          'La meditación caminando tiene por dónde discurrir. Las comidas en silencio tienen su propio lugar. Las habitaciones pueden quedar cerradas para un silencio noble que no hay que defender.',
        ],
        [Language.FR]: [
          'La ferme s’étend sur ses 1,3 hectares de terrain. Pas de bâtiments partagés, pas d’invités voisins, pas de parking face à la salle de pratique. La route la plus proche est un chemin rural calme, et au-delà : des champs, la Sallandse Heuvelrug, la rivière IJssel.',
          'La méditation en marchant a de la place pour aller quelque part. Les repas en silence ont leur propre endroit. Les portes peuvent rester closes pour un noble silence qui n’a pas besoin d’être défendu.',
        ],
      },
      imageSrc: IMAGES.accommodation.outsideWalk,
      imageAlt: {
        [Language.EN]: 'Walking path through the trees at The Makers Barn',
        [Language.NL]: 'Wandelpad door de bomen bij The Makers Barn',
        [Language.DE]: 'Wanderweg durch die Bäume bei The Makers Barn',
        [Language.ES]: 'Sendero entre los árboles en The Makers Barn',
        [Language.FR]: 'Sentier à travers les arbres à The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'Accommodating silence, schedules, and shrine rooms',
        [Language.NL]: 'Ruimte voor stilte, ritme en altaren',
        [Language.DE]: 'Raum für Stille, Tagesablauf und Altarräume',
        [Language.ES]: 'Espacio para el silencio, los horarios y las salas de altar',
        [Language.FR]: 'De la place pour le silence, les horaires et les salles d’autel',
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
        [Language.ES]: [
          'El granero de práctica Hay House funciona también como sala de altar. Hemos guardado thangkas y altares entre retiros y ayudado a montarlos. La comida vegetariana y de inspiración ayurvédica forma parte de la red con la que trabajamos.',
          'Se duerme en habitaciones individuales, dobles y compartidas en Horizon, además de la cabaña Cosmos para un maestro. El lugar entero acoge hasta catorce personas para dormir, con capacidad de veinte en el programa de día en el espacio de práctica.',
        ],
        [Language.FR]: [
          'La grange de pratique Hay House sert aussi de salle d’autel. Nous avons déjà entreposé des thangkas et des autels entre les retraites et aidé à les installer. Une cuisine végétarienne et d’inspiration ayurvédique fait partie du réseau avec lequel nous travaillons.',
          'On dort en chambres simples, doubles et partagées dans Horizon, plus la cabane Cosmos pour un enseignant. Le lieu complet accueille jusqu’à quatorze personnes pour la nuit, avec une capacité de vingt en programme de jour dans l’espace de pratique.',
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
        [Language.ES]: 'De terreno privado — buyout completo, sin edificios compartidos ni huéspedes vecinos',
        [Language.FR]: 'De terrain privé — privatisation complète, pas de bâtiments partagés ni d’invités voisins',
      },
    },
    {
      number: '7–20',
      description: {
        [Language.EN]: 'Practice-day window — heating, water, and kitchen built around it',
        [Language.NL]: 'Praktijkdag-venster — verwarming, water en keuken zijn erop afgestemd',
        [Language.DE]: 'Zeitfenster eines Praxistags — Heizung, Wasser und Küche sind darauf eingestellt',
        [Language.ES]: 'Franja del día de práctica — calefacción, agua y cocina pensados para ella',
        [Language.FR]: 'Plage horaire d’une journée de pratique — chauffage, eau et cuisine pensés autour',
      },
    },
    {
      number: '14',
      description: {
        [Language.EN]: 'Beds across Horizon and Cosmos for sangha and teachers',
        [Language.NL]: 'Bedden verdeeld over Horizon en Cosmos voor sangha en leraren',
        [Language.DE]: 'Betten verteilt auf Horizon und Cosmos für Sangha und Lehrer',
        [Language.ES]: 'Camas repartidas entre Horizon y Cosmos para la sangha y los maestros',
        [Language.FR]: 'Lits répartis entre Horizon et Cosmos pour la sangha et les enseignants',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A retreat-day rhythm we already know',
      [Language.NL]: 'Een retraite-ritme dat we al kennen',
      [Language.DE]: 'Ein Retreat-Tagesrhythmus, den wir schon kennen',
      [Language.ES]: 'Un ritmo de día de retiro que ya conocemos',
      [Language.FR]: 'Un rythme de journée de retraite que nous connaissons déjà',
    },
    intro: {
      [Language.EN]:
        'Adapted from the schedule Geshe Pema Dorjee has used here since 2022. The kitchen and heating are pre-configured for it.',
      [Language.NL]:
        'Gebaseerd op het schema dat Geshe Pema Dorjee hier sinds 2022 hanteert. De keuken en verwarming zijn er al op afgestemd.',
      [Language.DE]:
        'Angelehnt an den Tagesablauf, den Geshe Pema Dorjee hier seit 2022 nutzt. Küche und Heizung sind darauf voreingestellt.',
      [Language.ES]:
        'Adaptado del horario que Geshe Pema Dorjee usa aquí desde 2022. La cocina y la calefacción ya están configuradas para él.',
      [Language.FR]:
        'Adapté du programme que Geshe Pema Dorjee utilise ici depuis 2022. La cuisine et le chauffage sont déjà réglés pour cela.',
    },
    items: [
      {
        time: '07:00',
        activity: {
          [Language.EN]: 'Guided meditation',
          [Language.NL]: 'Begeleide meditatie',
          [Language.DE]: 'Geführte Meditation',
          [Language.ES]: 'Meditación guiada',
          [Language.FR]: 'Méditation guidée',
        },
      },
      {
        time: '08:00',
        activity: {
          [Language.EN]: 'Vegetarian breakfast',
          [Language.NL]: 'Vegetarisch ontbijt',
          [Language.DE]: 'Vegetarisches Frühstück',
          [Language.ES]: 'Desayuno vegetariano',
          [Language.FR]: 'Petit-déjeuner végétarien',
        },
      },
      {
        time: '09:30',
        activity: {
          [Language.EN]: 'Morning teaching',
          [Language.NL]: 'Ochtendonderricht',
          [Language.DE]: 'Vormittagsunterweisung',
          [Language.ES]: 'Enseñanza de la mañana',
          [Language.FR]: 'Enseignement du matin',
        },
      },
      {
        time: '12:30',
        activity: {
          [Language.EN]: 'Lunch (silent)',
          [Language.NL]: 'Lunch (in stilte)',
          [Language.DE]: 'Mittagessen (in Stille)',
          [Language.ES]: 'Almuerzo (en silencio)',
          [Language.FR]: 'Déjeuner (en silence)',
        },
      },
      {
        time: '15:00',
        activity: {
          [Language.EN]: 'Afternoon teaching',
          [Language.NL]: 'Middagonderricht',
          [Language.DE]: 'Nachmittagsunterweisung',
          [Language.ES]: 'Enseñanza de la tarde',
          [Language.FR]: 'Enseignement de l’après-midi',
        },
      },
      {
        time: '17:30',
        activity: {
          [Language.EN]: 'Walking meditation outside',
          [Language.NL]: 'Loopmeditatie buiten',
          [Language.DE]: 'Gehmeditation draußen',
          [Language.ES]: 'Meditación caminando al aire libre',
          [Language.FR]: 'Méditation en marchant à l’extérieur',
        },
      },
      {
        time: '19:00',
        activity: {
          [Language.EN]: 'Light dinner',
          [Language.NL]: 'Lichte maaltijd',
          [Language.DE]: 'Leichtes Abendessen',
          [Language.ES]: 'Cena ligera',
          [Language.FR]: 'Dîner léger',
        },
      },
      {
        time: '20:00',
        activity: {
          [Language.EN]: 'Closing sit',
          [Language.NL]: 'Afsluitende sessie',
          [Language.DE]: 'Abschließendes Sitzen',
          [Language.ES]: 'Sentada de cierre',
          [Language.FR]: 'Assise de clôture',
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
        [Language.ES]: '¿Podemos hacer un retiro en silencio total?',
        [Language.FR]: 'Pouvons-nous tenir une retraite en silence total ?',
      },
      answer: {
        [Language.EN]:
          'Yes — full buyout means no other guests will speak in the spaces. We brief our team to stay quiet and only intervene if needed. Many groups do extended silent stretches without issue.',
        [Language.NL]:
          'Ja — bij een volledige buyout zijn er geen andere gasten die in de ruimtes spreken. Ons team houdt zich stil en grijpt alleen in als het nodig is. Veel groepen houden moeiteloos langere periodes van stilte aan.',
        [Language.DE]:
          'Ja — beim vollen Buyout sprechen keine anderen Gäste in den Räumen. Wir weisen unser Team an, leise zu bleiben und nur einzugreifen, wenn es nötig ist. Viele Gruppen halten lange stille Phasen problemlos durch.',
        [Language.ES]:
          'Sí — un buyout completo significa que ningún otro huésped hablará en los espacios. Indicamos a nuestro equipo que se mantenga en silencio y solo intervenga si hace falta. Muchos grupos sostienen tramos largos de silencio sin problema.',
        [Language.FR]:
          'Oui — la privatisation complète signifie qu’aucun autre invité ne parlera dans les espaces. Nous demandons à notre équipe de rester silencieuse et de n’intervenir qu’en cas de besoin. Beaucoup de groupes tiennent de longues plages de silence sans souci.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you accommodate shrine rooms and altars?',
        [Language.NL]: 'Kunnen we een altaarruimte inrichten?',
        [Language.DE]: 'Sind Altarräume und Schreine möglich?',
        [Language.ES]: '¿Se pueden montar salas de altar y altares?',
        [Language.FR]: 'Peut-on installer une salle d’autel et des autels ?',
      },
      answer: {
        [Language.EN]:
          'Yes. The Hay House can be set up as a shrine room and we have storage between retreats for thangkas, statues and ritual objects.',
        [Language.NL]:
          'Ja. Het Hay House kan ingericht worden als altaarruimte en we hebben opslag tussen retraites door voor thangka’s, beelden en rituele objecten.',
        [Language.DE]:
          'Ja. Das Hay House kann als Altarraum eingerichtet werden, und wir haben zwischen den Retreats Stauraum für Thangkas, Statuen und rituelle Objekte.',
        [Language.ES]:
          'Sí. El Hay House se puede montar como sala de altar y disponemos de almacenamiento entre retiros para thangkas, estatuas y objetos rituales.',
        [Language.FR]:
          'Oui. Le Hay House peut être aménagé en salle d’autel, et nous disposons d’espace de rangement entre les retraites pour thangkas, statues et objets rituels.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the catering vegetarian-friendly?',
        [Language.NL]: 'Is de catering vegetarisch-vriendelijk?',
        [Language.DE]: 'Ist das Catering vegetarisch-freundlich?',
        [Language.ES]: '¿La comida es apta para vegetarianos?',
        [Language.FR]: 'Le traiteur est-il adapté aux végétariens ?',
      },
      answer: {
        [Language.EN]:
          'Yes — most retreat groups eat fully vegetarian here, with vegan and Ayurvedic options available through our local kitchen partners.',
        [Language.NL]:
          'Ja — de meeste retraitegroepen eten hier volledig vegetarisch, met veganistische en ayurvedische opties via onze lokale keukenpartners.',
        [Language.DE]:
          'Ja — die meisten Retreatgruppen essen hier komplett vegetarisch, mit veganen und ayurvedischen Optionen über unsere lokalen Küchenpartner.',
        [Language.ES]:
          'Sí — la mayoría de los grupos de retiro come aquí totalmente vegetariano, con opciones veganas y ayurvédicas a través de nuestros socios de cocina locales.',
        [Language.FR]:
          'Oui — la plupart des groupes de retraite mangent entièrement végétarien ici, avec des options véganes et ayurvédiques via nos partenaires culinaires locaux.',
      },
    },
    {
      question: {
        [Language.EN]: 'How does silence work at meal times?',
        [Language.NL]: 'Hoe werkt stilte tijdens maaltijden?',
        [Language.DE]: 'Wie funktioniert die Stille bei den Mahlzeiten?',
        [Language.ES]: '¿Cómo funciona el silencio en las comidas?',
        [Language.FR]: 'Comment fonctionne le silence aux repas ?',
      },
      answer: {
        [Language.EN]:
          'Meals are served in Horizon’s kitchen and dining area. We can plate before guests arrive so the meal stays fully silent, or set up a serve-yourself station — whichever you prefer.',
        [Language.NL]:
          'Maaltijden worden geserveerd in de keuken en eetruimte van Horizon. We kunnen alvast opdienen voordat iedereen binnenkomt, zodat de maaltijd volledig stil blijft, of een buffet inrichten — net wat jullie willen.',
        [Language.DE]:
          'Die Mahlzeiten werden in der Küche und im Essbereich von Horizon serviert. Wir richten die Teller schon an, bevor die Gäste kommen, damit die Mahlzeit ganz still bleibt, oder wir stellen eine Selbstbedienungsstation auf — ganz wie ihr wollt.',
        [Language.ES]:
          'Las comidas se sirven en la cocina y el comedor de Horizon. Podemos emplatar antes de que lleguen los invitados para que la comida sea totalmente silenciosa, o montar un punto de autoservicio — lo que prefiráis.',
        [Language.FR]:
          'Les repas sont servis dans la cuisine et la salle à manger de Horizon. Nous pouvons dresser les assiettes avant l’arrivée des invités pour que le repas reste totalement silencieux, ou installer un point de self-service — comme vous préférez.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Hold your retreat in a place where silence is already at home',
      [Language.NL]: 'Houd je retraite op een plek waar stilte al thuis is',
      [Language.DE]: 'Halte dein Retreat an einem Ort, an dem die Stille schon zu Hause ist',
      [Language.ES]: 'Celebra tu retiro en un lugar donde el silencio ya se siente en casa',
      [Language.FR]: 'Tiens ta retraite dans un lieu où le silence est déjà chez lui',
    },
    body: {
      [Language.EN]:
        'Tell us your tradition, your teacher, your dates. We have hosted lineages from Tibetan Buddhism to secular mindfulness — we will tell you honestly if your retreat fits the venue.',
      [Language.NL]:
        'Vertel ons over je traditie, je leraar, je data. We hebben groepen ontvangen uit tradities die uiteenlopen van het Tibetaans-boeddhisme tot seculiere mindfulness — we zeggen je eerlijk of jouw retraite bij de locatie past.',
      [Language.DE]:
        'Erzähl uns von deiner Tradition, deinem Lehrer, deinen Daten. Wir haben Linien vom tibetischen Buddhismus bis zur säkularen Achtsamkeit beherbergt — wir sagen dir ehrlich, ob dein Retreat zum Ort passt.',
      [Language.ES]:
        'Cuéntanos tu tradición, tu maestro, tus fechas. Hemos acogido linajes desde el budismo tibetano hasta el mindfulness laico — te diremos con sinceridad si tu retiro encaja con el lugar.',
      [Language.FR]:
        'Parle-nous de ta tradition, de ton enseignant, de tes dates. Nous avons accueilli des lignées allant du bouddhisme tibétain à la pleine conscience laïque — nous te dirons honnêtement si ta retraite convient au lieu.',
    },
  },
}
