import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const WRITING_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.WRITING_RETREATS,
  route: Route.WRITING_RETREATS,
  heroImageSrc: IMAGES.accommodation.lunchTogether,
  heroImageAlt: {
    [Language.EN]: 'A long workshop table at The Makers Barn',
    [Language.NL]: 'Een lange werktafel bij The Makers Barn',
    [Language.DE]: 'Ein langer Werktisch bei The Makers Barn',
    [Language.ES]: 'Una larga mesa de taller en The Makers Barn',
    [Language.FR]: 'Une longue table d’atelier à The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Writing Retreat Venue for Authors & Craft Teachers — Overijssel',
      [Language.NL]: 'Schrijfretraite-locatie voor auteurs & schrijfdocenten — Overijssel',
      [Language.DE]: 'Schreibretreat-Ort für Autoren & Schreiblehrer — Overijssel',
      [Language.ES]: 'Lugar para retiros de escritura para autores y profesores de oficio — Overijssel',
      [Language.FR]: 'Lieu de retraite d’écriture pour auteurs et enseignants de l’écriture — Overijssel',
    },
    description: {
      [Language.EN]:
        'A quiet 1.3-hectare farm for published authors and writing teachers running multi-day craft retreats. Workshop barn, private cabins, long table for evening read-arounds.',
      [Language.NL]:
        'Een rustige boerderij van 1,3 hectare voor gepubliceerde auteurs en schrijfdocenten die meerdaagse schrijfretraites leiden. Werkschuur, privécabines, lange tafel voor de avondlezingen.',
      [Language.DE]:
        'Ein ruhiger Hof von 1,3 Hektar für veröffentlichte Autoren und Schreiblehrer, die mehrtägige Craft-Retreats leiten. Werkscheune, private Hütten, lange Tafel für die Lesungen am Abend.',
      [Language.ES]:
        'Una granja tranquila de 1,3 hectares para autores publicados y profesores de escritura que dirigen retiros de varios días. Granero taller, cabañas privadas y mesa larga para las lecturas de la noche.',
      [Language.FR]:
        'Une ferme paisible de 1,3 hectares pour auteurs publiés et enseignants de l’écriture qui mènent des retraites de plusieurs jours. Grange-atelier, cabanes privées, longue table pour les lectures du soir.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For published authors & writing teachers',
      [Language.NL]: 'Voor gepubliceerde auteurs & schrijfdocenten',
      [Language.DE]: 'Für veröffentlichte Autoren & Schreiblehrer',
      [Language.ES]: 'Para autores publicados y profesores de escritura',
      [Language.FR]: 'Pour les auteurs publiés et les enseignants de l’écriture',
    },
    title: {
      [Language.EN]: 'A Writing Retreat Venue for Authors Running Craft Intensives',
      [Language.NL]: 'Een schrijfretraite-locatie voor auteurs die schrijfintensieven leiden',
      [Language.DE]: 'Ein Schreibretreat-Ort für Autoren, die Craft-Intensives leiten',
      [Language.ES]: 'Un lugar de retiro de escritura para autores que dirigen intensivos de oficio',
      [Language.FR]: 'Un lieu de retraite d’écriture pour les auteurs qui mènent des intensifs d’écriture',
    },
    subtitle: {
      [Language.EN]:
        'A workshop barn for the morning craft session, private rooms for the afternoon writing block, and a long table for the read-arounds after dinner.',
      [Language.NL]:
        'Een werkschuur voor de ochtendsessie, privékamers voor het middagblok, en een lange tafel voor de leesrondes na het eten.',
      [Language.DE]:
        'Eine Werkscheune für die Craft-Session am Morgen, private Zimmer für den Schreibblock am Nachmittag und eine lange Tafel für die Leserunden nach dem Essen.',
      [Language.ES]:
        'Un granero taller para la sesión de oficio de la mañana, habitaciones privadas para el bloque de escritura de la tarde y una mesa larga para las lecturas después de cenar.',
      [Language.FR]:
        'Une grange-atelier pour la séance d’écriture du matin, des chambres privées pour le bloc d’écriture de l’après-midi, et une longue table pour les lectures après le dîner.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Mornings to teach. Afternoons to write. Evenings to read each other’s work.',
      [Language.NL]:
        'Ochtenden om les te geven. Middagen om te schrijven. Avonden om elkaars werk te lezen.',
      [Language.DE]:
        'Vormittage zum Unterrichten. Nachmittage zum Schreiben. Abende, um sich gegenseitig vorzulesen.',
      [Language.ES]:
        'Mañanas para enseñar. Tardes para escribir. Noches para leer el trabajo de los demás.',
      [Language.FR]:
        'Les matins pour enseigner. Les après-midi pour écrire. Les soirs pour lire le travail des autres.',
    },
    caption: {
      [Language.EN]:
        'A rhythm the venue is shaped to hold — for groups of eight to twelve students.',
      [Language.NL]:
        'Een ritme dat de locatie kan dragen — voor groepen van acht tot twaalf studenten.',
      [Language.DE]:
        'Ein Rhythmus, für den der Ort gemacht ist — für Gruppen von acht bis zwölf Studierenden.',
      [Language.ES]:
        'Un ritmo que el lugar está hecho para sostener — para grupos de ocho a doce estudiantes.',
      [Language.FR]:
        'Un rythme que le lieu est fait pour porter — pour des groupes de huit à douze étudiants.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A workshop barn that doubles as a quiet writing room',
        [Language.NL]: 'Een werkschuur die ook fungeert als stille schrijfruimte',
        [Language.DE]: 'Eine Werkscheune, die zugleich ein stiller Schreibraum ist',
        [Language.ES]: 'Un granero taller que también sirve como sala de escritura tranquila',
        [Language.FR]: 'Une grange-atelier qui sert aussi de salle d’écriture silencieuse',
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
        [Language.DE]: [
          'Die Hay House-Praxisscheune sind fünfundsechzig Quadratmeter beheizter Holzboden, mit Soundanlage, dimmbarem Licht und Platz für einen Kreis von zwölf. Sie funktioniert für die Craft-Session, die Leserunde und für die Art langer Schreibblöcke, in denen Studierende lieber nicht allein sind.',
          'Zwischen den Sessions hast du private Zimmer in Horizon und die Cosmos-Hütte für die stille Arbeit. Die meisten Retreats fahren um 9 Uhr eine Craft-Session, einen Schreibblock von 10 bis 13 Uhr, und die Scheune öffnet um 18 Uhr wieder für die abendliche Leserunde.',
        ],
        [Language.ES]: [
          'El granero de práctica Hay House es de sesenta y cinco metros cuadrados de suelo de madera climatizado, con equipo de sonido, luz regulable y espacio para un círculo de doce. Funciona para la sesión de oficio, la lectura en círculo y ese tipo de bloque largo de escritura en el que los estudiantes prefieren no estar solos.',
          'Entre sesiones tienes habitaciones privadas en Horizon y la cabaña Cosmos para el trabajo en solitario. La mayoría de los retiros hace una sesión de oficio a las 9:00, un bloque de escritura de 10:00 a 13:00, y el granero vuelve a abrir a las 18:00 para la lectura de la noche.',
        ],
        [Language.FR]: [
          'La grange de pratique Hay House, c’est soixante-cinq mètres carrés de plancher en bois chauffé, avec sonorisation, lumière variable et de la place pour un cercle de douze. Elle fonctionne pour la séance d’écriture, la lecture en cercle, et ce genre de long bloc d’écriture où les étudiants préfèrent ne pas être seuls.',
          'Entre les séances, tu as des chambres privées dans Horizon et la cabane Cosmos pour le travail en solitaire. La plupart des retraites font une séance d’écriture à 9 h, un bloc d’écriture de 10 h à 13 h, et la grange rouvre à 18 h pour la lecture du soir.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'Practice barn set up with seating in a circle',
        [Language.NL]: 'Praktijkruimte ingericht met een zitkring',
        [Language.DE]: 'Praxisscheune im Kreis bestuhlt',
        [Language.ES]: 'Granero de práctica dispuesto con sillas en círculo',
        [Language.FR]: 'Grange de pratique disposée en cercle de chaises',
      },
    },
    {
      h2: {
        [Language.EN]: 'Private rooms for the afternoons that need to be quiet',
        [Language.NL]: 'Privékamers voor de middagen die stil moeten zijn',
        [Language.DE]: 'Private Zimmer für die Nachmittage, die still sein müssen',
        [Language.ES]: 'Habitaciones privadas para las tardes que necesitan silencio',
        [Language.FR]: 'Des chambres privées pour les après-midi qui doivent être silencieux',
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
        [Language.DE]: [
          'Horizon, die umgebaute Heuscheune, schläft elf bis vierzehn in einer Mischung aus Einzel-, Doppel- und Mehrbettzimmern. Die Cosmos-Hütte gibt dem Hauptautor eine eigene Holzhütte mit Holzofen und Schreibtisch am Fenster.',
          'Jedes Zimmer hat Platz für einen Laptop und ein Notizbuch. Einige haben Fensterplätze. Keines liegt an einem Flur, an dem andere Studierende während des Schreibblocks vorbeigehen.',
        ],
        [Language.ES]: [
          'Horizon, el granero de heno reconvertido, acoge entre once y catorce personas en una mezcla de habitaciones individuales, dobles y compartidas. La cabaña Cosmos ofrece al autor principal una cabaña de madera privada con estufa de leña y un escritorio junto a la ventana.',
          'Cada habitación tiene espacio para un portátil y una libreta. Algunas tienen un asiento junto a la ventana. Ninguna da a un pasillo por el que otros estudiantes pasen durante el bloque de escritura.',
        ],
        [Language.FR]: [
          'Horizon, la grange à foin réaménagée, accueille onze à quatorze personnes en chambres simples, doubles et partagées. La cabane Cosmos offre à l’auteur principal une cabane en bois privée avec poêle à bois et un bureau près d’une fenêtre.',
          'Chaque chambre a de la place pour un ordinateur portable et un carnet. Quelques-unes ont une assise sous la fenêtre. Aucune ne donne sur un couloir emprunté par d’autres étudiants pendant le bloc d’écriture.',
        ],
      },
      imageSrc: IMAGES.accommodation.cosmosCouch,
      imageAlt: {
        [Language.EN]: 'Quiet writing nook with couch in the Cosmos cabin',
        [Language.NL]: 'Rustige schrijfhoek met bank in de Cosmos cabin',
        [Language.DE]: 'Ruhige Schreibecke mit Couch in der Cosmos-Hütte',
        [Language.ES]: 'Rincón de escritura tranquilo con sofá en la cabaña Cosmos',
        [Language.FR]: 'Coin d’écriture tranquille avec canapé dans la cabane Cosmos',
      },
    },
    {
      h2: {
        [Language.EN]: 'A long table for the evening read-around',
        [Language.NL]: 'Een lange tafel voor de avondlezing',
        [Language.DE]: 'Eine lange Tafel für die abendliche Leserunde',
        [Language.ES]: 'Una mesa larga para la lectura en círculo de la noche',
        [Language.FR]: 'Une longue table pour la lecture en cercle du soir',
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
        [Language.DE]: [
          'Der Essraum in Horizon bietet vierzehn Plätze an einer einzigen langen Tafel. Die meisten Schreibretreats nutzen ihn für Mahlzeiten und Leserunden — Studierende bringen drei Seiten mit, der Raum liest, du leitest das Feedback. Die Akustik trägt eine leise Stimme mühelos.',
          'Nach der Leserunde ist die Feuerstelle zwanzig Schritte von der Tür entfernt. Manche Retreats nutzen sie für die ehrlichere zweite Feedbackrunde, die drinnen nicht stattfindet.',
        ],
        [Language.ES]: [
          'El comedor de Horizon acomoda a catorce personas en una sola mesa larga. La mayoría de los retiros de escritura lo usa tanto para las comidas como para las lecturas en círculo — los estudiantes traen tres páginas, la sala lee, tú guías la respuesta. La acústica lleva una voz baja sin esfuerzo.',
          'Después de la lectura, el círculo de fuego queda a veinte pasos de la puerta. Algunos retiros lo usan para esa segunda ronda de feedback más sincera que no sucede dentro.',
        ],
        [Language.FR]: [
          'La salle à manger de Horizon accueille quatorze personnes à une seule longue table. La plupart des retraites d’écriture s’en servent pour les repas comme pour les lectures en cercle — les étudiants apportent trois pages, la salle lit, tu guides les retours. L’acoustique porte une voix basse sans effort.',
          'Après la lecture, le cercle de feu est à vingt pas de la porte. Certaines retraites l’utilisent pour cette seconde ronde de retours, plus franche, qui ne se passe pas à l’intérieur.',
        ],
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'Long shared table at The Makers Barn',
        [Language.NL]: 'Lange gedeelde tafel bij The Makers Barn',
        [Language.DE]: 'Lange gemeinsame Tafel bei The Makers Barn',
        [Language.ES]: 'Mesa larga compartida en The Makers Barn',
        [Language.FR]: 'Longue table partagée à The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '8–12',
      description: {
        [Language.EN]: 'Students per cohort — the size most craft retreats are built around',
        [Language.NL]: 'Studenten per cohort — de grootte waar de meeste schrijfretraites om vragen',
        [Language.DE]: 'Studierende pro Kohorte — die Größe, um die die meisten Craft-Retreats gebaut sind',
        [Language.ES]: 'Estudiantes por cohorte — el tamaño en torno al que se montan la mayoría de los retiros de oficio',
        [Language.FR]: 'Étudiants par cohorte — la taille autour de laquelle la plupart des retraites d’écriture sont pensées',
      },
    },
    {
      number: '4–10',
      description: {
        [Language.EN]: 'Days — long enough for two drafts, short enough to keep the rhythm',
        [Language.NL]: 'Dagen — lang genoeg voor twee versies, kort genoeg om het ritme te bewaren',
        [Language.DE]: 'Tage — lang genug für zwei Fassungen, kurz genug, um den Rhythmus zu halten',
        [Language.ES]: 'Días — lo bastante largos para dos versiones, lo bastante cortos para mantener el ritmo',
        [Language.FR]: 'Jours — assez long pour deux versions, assez court pour garder le rythme',
      },
    },
    {
      number: '14',
      description: {
        [Language.EN]: 'Beds across Horizon and Cosmos for the cohort and the lead author',
        [Language.NL]: 'Bedden verdeeld over Horizon en Cosmos voor het cohort en de hoofdauteur',
        [Language.DE]: 'Betten verteilt auf Horizon und Cosmos für die Kohorte und den Hauptautor',
        [Language.ES]: 'Camas repartidas entre Horizon y Cosmos para la cohorte y el autor principal',
        [Language.FR]: 'Lits répartis entre Horizon et Cosmos pour la cohorte et l’auteur principal',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A sample writing-retreat day',
      [Language.NL]: 'Een voorbeeld van een schrijfretraite-dag',
      [Language.DE]: 'Ein Beispieltag eines Schreibretreats',
      [Language.ES]: 'Un día de ejemplo en un retiro de escritura',
      [Language.FR]: 'Un exemple de journée en retraite d’écriture',
    },
    intro: {
      [Language.EN]:
        'A rhythm several visiting authors have used here. Yours can be different — the rooms hold both shapes.',
      [Language.NL]:
        'Een ritme dat verschillende gastauteurs hier hebben gehanteerd. Dat van jou mag anders zijn — de ruimtes dragen beide vormen.',
      [Language.DE]:
        'Ein Rhythmus, den mehrere Gastautoren hier genutzt haben. Deiner darf anders aussehen — die Räume tragen beide Formen.',
      [Language.ES]:
        'Un ritmo que han usado aquí varios autores invitados. El tuyo puede ser distinto — las salas sostienen ambas formas.',
      [Language.FR]:
        'Un rythme que plusieurs auteurs invités ont utilisé ici. Le tien peut être différent — les pièces tiennent les deux formes.',
    },
    items: [
      {
        time: '08:00',
        activity: {
          [Language.EN]: 'Slow breakfast on the terrace',
          [Language.NL]: 'Rustig ontbijt op het terras',
          [Language.DE]: 'Langsames Frühstück auf der Terrasse',
          [Language.ES]: 'Desayuno tranquilo en la terraza',
          [Language.FR]: 'Petit-déjeuner tranquille sur la terrasse',
        },
      },
      {
        time: '09:00',
        activity: {
          [Language.EN]: 'Craft session in the Hay House',
          [Language.NL]: 'Craft-sessie in het Hay House',
          [Language.DE]: 'Craft-Session im Hay House',
          [Language.ES]: 'Sesión de oficio en el Hay House',
          [Language.FR]: 'Séance d’écriture au Hay House',
        },
      },
      {
        time: '10:30',
        activity: {
          [Language.EN]: 'Long writing block — private rooms or the barn',
          [Language.NL]: 'Lang schrijfblok — privékamers of de schuur',
          [Language.DE]: 'Langer Schreibblock — private Zimmer oder die Scheune',
          [Language.ES]: 'Bloque largo de escritura — habitaciones privadas o el granero',
          [Language.FR]: 'Long bloc d’écriture — chambres privées ou la grange',
        },
      },
      {
        time: '13:00',
        activity: {
          [Language.EN]: 'Lunch (we keep it light, you keep writing if you want)',
          [Language.NL]: 'Lunch (wij houden hem licht, jij blijft schrijven als je wilt)',
          [Language.DE]: 'Mittagessen (wir halten es leicht, du schreibst weiter, wenn du willst)',
          [Language.ES]: 'Almuerzo (lo mantenemos ligero, tú sigues escribiendo si quieres)',
          [Language.FR]: 'Déjeuner (nous le faisons léger, tu continues à écrire si tu veux)',
        },
      },
      {
        time: '14:30',
        activity: {
          [Language.EN]: 'One-to-one tutorials with the lead author',
          [Language.NL]: 'Eén-op-één-tutorials met de hoofdauteur',
          [Language.DE]: 'Einzeltutorials mit dem Hauptautor',
          [Language.ES]: 'Tutorías individuales con el autor principal',
          [Language.FR]: 'Tutorats en tête-à-tête avec l’auteur principal',
        },
      },
      {
        time: '17:00',
        activity: {
          [Language.EN]: 'Walk, sauna, or pond',
          [Language.NL]: 'Wandeling, sauna of vijver',
          [Language.DE]: 'Spaziergang, Sauna oder Teich',
          [Language.ES]: 'Paseo, sauna o estanque',
          [Language.FR]: 'Marche, sauna ou étang',
        },
      },
      {
        time: '19:00',
        activity: {
          [Language.EN]: 'Long dinner at the shared table',
          [Language.NL]: 'Lang diner aan de gedeelde tafel',
          [Language.DE]: 'Langes Abendessen an der gemeinsamen Tafel',
          [Language.ES]: 'Cena larga en la mesa compartida',
          [Language.FR]: 'Long dîner à la table partagée',
        },
      },
      {
        time: '20:30',
        activity: {
          [Language.EN]: 'Read-around — three pages each, the room responds',
          [Language.NL]: 'Leesronde — drie pagina’s per persoon, de kamer reageert',
          [Language.DE]: 'Leserunde — drei Seiten pro Person, der Raum reagiert',
          [Language.ES]: 'Lectura en círculo — tres páginas cada uno, la sala responde',
          [Language.FR]: 'Lecture en cercle — trois pages chacun, la salle réagit',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can the lead author have a private cabin?',
        [Language.NL]: 'Kan de hoofdauteur een eigen cabin krijgen?',
        [Language.DE]: 'Kann der Hauptautor eine eigene Hütte bekommen?',
        [Language.ES]: '¿El autor principal puede tener una cabaña privada?',
        [Language.FR]: 'L’auteur principal peut-il avoir une cabane privée ?',
      },
      answer: {
        [Language.EN]:
          'Yes — the Cosmos cabin is private, separate from Horizon by a short walk, and includes a writing desk and woodstove. Most visiting authors take it.',
        [Language.NL]:
          'Ja — de Cosmos cabin is privé, op een korte wandeling van Horizon, en heeft een schrijftafel en een houtkachel. De meeste gastauteurs kiezen ervoor.',
        [Language.DE]:
          'Ja — die Cosmos-Hütte ist privat, durch einen kurzen Weg von Horizon getrennt, und hat einen Schreibtisch und einen Holzofen. Die meisten Gastautoren nehmen sie.',
        [Language.ES]:
          'Sí — la cabaña Cosmos es privada, separada de Horizon por un paseo corto, e incluye un escritorio y una estufa de leña. La mayoría de los autores invitados la elige.',
        [Language.FR]:
          'Oui — la cabane Cosmos est privée, séparée de Horizon par une courte marche, et comprend un bureau et un poêle à bois. La plupart des auteurs invités la prennent.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the venue ours alone for the duration?',
        [Language.NL]: 'Is de locatie alleen van ons tijdens de retraite?',
        [Language.DE]: 'Gehört der Ort während des gesamten Retreats nur uns?',
        [Language.ES]: '¿El lugar es solo nuestro durante toda la estancia?',
        [Language.FR]: 'Le lieu est-il à nous seuls pendant toute la durée ?',
      },
      answer: {
        [Language.EN]:
          'Yes — full venue buyout. No other groups, no other guests walking through the workshop barn at 11 AM.',
        [Language.NL]:
          'Ja — volledige buyout. Geen andere groepen, geen andere gasten die om 11.00 uur door de werkschuur lopen.',
        [Language.DE]:
          'Ja — kompletter Buyout. Keine anderen Gruppen, keine anderen Gäste, die um 11 Uhr durch die Werkscheune laufen.',
        [Language.ES]:
          'Sí — buyout completo del lugar. No hay otros grupos ni otros huéspedes cruzando el granero taller a las 11:00.',
        [Language.FR]:
          'Oui — privatisation complète du lieu. Pas d’autres groupes, pas d’autres invités qui traversent la grange-atelier à 11 h.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can students bring laptops? Is there reliable wifi?',
        [Language.NL]: 'Mogen studenten laptops meenemen? Is er een betrouwbaar wifi-netwerk?',
        [Language.DE]: 'Dürfen Studierende Laptops mitbringen? Gibt es zuverlässiges WLAN?',
        [Language.ES]: '¿Pueden traer portátiles los estudiantes? ¿Hay wifi fiable?',
        [Language.FR]: 'Les étudiants peuvent-ils apporter leur ordinateur portable ? Y a-t-il un wifi fiable ?',
      },
      answer: {
        [Language.EN]:
          'Yes. Fibre internet covers the whole farm. Some authors prefer to make the workshop barn a no-screen space — we are happy to enforce that as a soft house rule for the retreat.',
        [Language.NL]:
          'Ja. Glasvezelinternet dekt de hele boerderij. Sommige auteurs maken van de werkschuur liever een schermloze ruimte — we hanteren dat graag als zachte huisregel voor de retraite.',
        [Language.DE]:
          'Ja. Glasfaser-Internet deckt den ganzen Hof ab. Manche Autoren machen die Werkscheune lieber zur bildschirmfreien Zone — wir setzen das gern als sanfte Hausregel für das Retreat um.',
        [Language.ES]:
          'Sí. La fibra cubre toda la granja. Algunos autores prefieren convertir el granero taller en un espacio sin pantallas — lo aplicamos con gusto como una norma suave de la casa durante el retiro.',
        [Language.FR]:
          'Oui. La fibre couvre toute la ferme. Certains auteurs préfèrent faire de la grange-atelier un espace sans écran — nous l’appliquons volontiers comme règle douce de la maison pour la retraite.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you handle catering and dietary needs?',
        [Language.NL]: 'Regelen jullie de catering en dieetwensen?',
        [Language.DE]: 'Kümmert ihr euch um Catering und Essenswünsche?',
        [Language.ES]: '¿Os encargáis del catering y de las necesidades dietéticas?',
        [Language.FR]: 'Vous occupez-vous du traiteur et des besoins alimentaires ?',
      },
      answer: {
        [Language.EN]:
          'Yes. We work with local cooks who do retreat catering for groups of fourteen — vegetarian, vegan, and most allergies handled cleanly. Send us the dietary list at booking and it will be ready.',
        [Language.NL]:
          'Ja. We werken met lokale koks die retraitecatering voor groepen van veertien verzorgen — vegetarisch, veganistisch en de meeste allergieën worden zorgvuldig afgehandeld. Stuur ons de dieetlijst bij de boeking, dan ligt alles klaar.',
        [Language.DE]:
          'Ja. Wir arbeiten mit lokalen Köchen, die Retreat-Catering für Gruppen von vierzehn machen — vegetarisch, vegan und die meisten Allergien werden sauber abgedeckt. Schick uns bei der Buchung die Liste mit den Ernährungswünschen, dann steht alles bereit.',
        [Language.ES]:
          'Sí. Trabajamos con cocineros locales que hacen catering de retiro para grupos de catorce — vegetariano, vegano y la mayoría de las alergias se gestionan con cuidado. Mándanos la lista dietética al hacer la reserva y estará todo listo.',
        [Language.FR]:
          'Oui. Nous travaillons avec des cuisiniers locaux qui font du traiteur de retraite pour des groupes de quatorze — végétarien, végan, et la plupart des allergies prises en compte proprement. Envoie-nous la liste alimentaire à la réservation, tout sera prêt.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your craft retreat to a venue that is shaped for it',
      [Language.NL]: 'Breng je schrijfretraite naar een locatie die ervoor gemaakt is',
      [Language.DE]: 'Bring dein Craft-Retreat an einen Ort, der dafür gemacht ist',
      [Language.ES]: 'Trae tu retiro de oficio a un lugar pensado para ello',
      [Language.FR]: 'Amène ta retraite d’écriture dans un lieu pensé pour ça',
    },
    body: {
      [Language.EN]:
        'Tell us your dates, your cohort size, and how many days you would like. We will come back with availability and a tailored quote within two working days.',
      [Language.NL]:
        'Vertel ons je data, je cohortgrootte en hoeveel dagen je zou willen. We komen binnen twee werkdagen terug met beschikbaarheid en een offerte op maat.',
      [Language.DE]:
        'Sag uns deine Daten, die Größe deiner Kohorte und wie viele Tage du möchtest. Wir melden uns innerhalb von zwei Werktagen mit Verfügbarkeit und einem maßgeschneiderten Angebot.',
      [Language.ES]:
        'Cuéntanos tus fechas, el tamaño de la cohorte y cuántos días querrías. Volvemos con disponibilidad y un presupuesto a medida en dos días laborables.',
      [Language.FR]:
        'Donne-nous tes dates, la taille de la cohorte et le nombre de jours souhaité. On revient vers toi avec les disponibilités et un devis sur mesure sous deux jours ouvrés.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Published authors and craft teachers running multi-day writing retreats',
      [Language.NL]: 'Gepubliceerde auteurs en schrijfdocenten die meerdaagse schrijfretraites leiden',
      [Language.DE]: 'Veröffentlichte Autor:innen und Schreiblehrer:innen, die mehrtägige Schreibretreats leiten',
      [Language.ES]: 'Autores publicados y profesores de escritura que dirigen retiros de varios días',
      [Language.FR]: 'Auteurs publiés et enseignants de l’écriture qui mènent des retraites de plusieurs jours',
    },
    cohortSize: { min: 8, max: 12 },
    keywords: {
      [Language.EN]: [
        'writing retreat venue Netherlands',
        'author retreat venue',
        'writing workshop venue Europe',
        'craft retreat venue',
        'fiction writing retreat venue',
        'novel writing retreat venue',
        'screenwriting retreat venue',
        'memoir writing retreat venue',
        'residential writing retreat',
        'writing intensive venue',
      ],
      [Language.NL]: [
        'schrijfretraite locatie Nederland',
        'auteur retraite locatie',
        'schrijfworkshop locatie',
        'craft schrijfretraite',
        'fictie schrijfretraite locatie',
        'roman schrijfretraite locatie',
        'residentiële schrijfretraite',
      ],
      [Language.DE]: [
        'Schreibretreat Niederlande',
        'Autoren-Retreat-Ort',
        'Schreibworkshop-Location',
        'Craft-Schreibretreat',
        'Roman-Schreibretreat',
        'Drehbuch-Schreibretreat',
      ],
      [Language.ES]: [
        'lugar para retiros de escritura Países Bajos',
        'retiro de escritores',
        'lugar para taller de escritura',
        'retiro de escritura creativa',
        'retiro de escritura de novela',
        'retiro residencial de escritura',
      ],
      [Language.FR]: [
        'lieu de retraite d’écriture Pays-Bas',
        'retraite d’auteurs',
        'lieu d’atelier d’écriture',
        'retraite d’écriture créative',
        'retraite d’écriture de roman',
        'retraite d’écriture résidentielle',
      ],
    },
  },
}
