import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const YOGA_TEACHERS_SILO: SiloContent = {
  slug: SiloSlug.YOGA_TEACHERS,
  route: Route.YOGA_TEACHERS,
  heroImageSrc: IMAGES.accommodation.practiceRoomsWithMats,
  heroImageAlt: {
    [Language.EN]: 'Heated hay barn shala with yoga mats laid out at The Makers Barn',
    [Language.NL]: 'Verwarmde hooischuur-shala met yogamatten bij The Makers Barn',
    [Language.DE]: 'Beheizter Shala in der Heuscheune mit ausgelegten Yogamatten bei The Makers Barn',
    [Language.ES]: 'Shala en el granero de heno climatizado, con las esterillas de yoga preparadas, en The Makers Barn',
    [Language.FR]: 'Shala dans la grange à foin chauffée avec tapis de yoga déroulés à The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Yoga Retreat Venue for Teachers — Overijssel',
      [Language.NL]: 'Yoga Retraite Locatie voor Docenten — Overijssel',
      [Language.DE]: 'Yoga-Retreat-Location für Lehrer – Overijssel',
      [Language.ES]: 'Lugar de retiros de yoga para profesores — Overijssel',
      [Language.FR]: 'Lieu de retraite de yoga pour professeurs — Overijssel',
    },
    description: {
      [Language.EN]:
        'A heated 65m² hay barn shala, sleeps 14, capacity 20. The Makers Barn is a quiet yoga retreat venue in Overijssel for teachers building their own retreats.',
      [Language.NL]:
        'Een verwarmde hooischuur-shala van 65 m², slaapplek voor 14, capaciteit 20. The Makers Barn is een rustige yoga-retraitelocatie in Overijssel voor docenten die hun eigen retraite organiseren.',
      [Language.DE]:
        'Ein beheizter Shala in der Heuscheune, 65 m², 14 Schlafplätze, Kapazität für 20 Personen. The Makers Barn ist ein ruhiger Ort in Overijssel für Lehrer, die ihre eigenen Yoga-Retreats gestalten.',
      [Language.ES]:
        'Un shala de 65 m² en granero de heno climatizado, 14 plazas para dormir y capacidad para 20. The Makers Barn es un lugar tranquilo en Overijssel para profesores que montan sus propios retiros de yoga.',
      [Language.FR]:
        'Une shala dans une grange à foin chauffée de 65 m², 14 couchages, capacité 20. The Makers Barn est un lieu de retraite de yoga paisible dans l’Overijssel, pour les professeurs qui construisent leurs propres retraites.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For yoga teachers',
      [Language.NL]: 'Voor yogadocenten',
      [Language.DE]: 'Für Yogalehrer',
      [Language.ES]: 'Para profesores de yoga',
      [Language.FR]: 'Pour les professeurs de yoga',
    },
    title: {
      [Language.EN]: 'A Quiet Yoga Retreat Venue for Teachers in Overijssel',
      [Language.NL]: 'Een rustige yoga retraite-locatie voor docenten in Overijssel',
      [Language.DE]: 'Ein ruhiger Yoga-Retreat-Ort für Lehrer in Overijssel',
      [Language.ES]: 'Un lugar tranquilo de retiros de yoga para profesores en Overijssel',
      [Language.FR]: 'Un lieu de retraite de yoga paisible pour les professeurs, dans l’Overijssel',
    },
    subtitle: {
      [Language.EN]:
        'A heated hay barn shala, fourteen beds, and a private 1.3-hectare farm — for teachers building their first retreat or their fifth.',
      [Language.NL]:
        'Een verwarmde hooischuur-shala, veertien bedden en een eigen boerderij van 1,3 hectare — voor docenten die hun eerste retraite organiseren of hun vijfde.',
      [Language.DE]:
        'Eine beheizte Heuscheunen-Shala, vierzehn Betten und ein privater Hof mit 1,3 Hektar – für Lehrer, die ihr erstes Retreat auf die Beine stellen oder ihr fünftes.',
      [Language.ES]:
        'Una shala en un granero de heno climatizado, catorce camas y una granja privada de 1,3 hectáreas: para profesores que montan su primer retiro o el quinto.',
      [Language.FR]:
        'Une shala dans une grange à foin chauffée, quatorze lits et une ferme privée de 1,3 hectare — pour les professeurs qui montent leur première retraite, ou leur cinquième.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Your retreat, held by a place that already knows how to hold space.',
      [Language.NL]:
        'Jouw retraite, gedragen door een plek die al weet hoe je ruimte houdt.',
      [Language.DE]:
        'Dein Retreat, getragen von einem Ort, der schon weiß, wie man Raum hält.',
      [Language.ES]:
        'Tu retiro, sostenido por un lugar que ya sabe cómo sostener el espacio.',
      [Language.FR]:
        'Ta retraite, portée par un lieu qui sait déjà tenir l’espace.',
    },
    caption: {
      [Language.EN]:
        'We handle the bedlinen, the firewood, and the kettle. You hold the room.',
      [Language.NL]:
        'Wij regelen het beddengoed, het haardhout en de waterkoker. Jij houdt de ruimte.',
      [Language.DE]:
        'Wir kümmern uns um Bettwäsche, Brennholz und Wasserkocher. Du hältst den Raum.',
      [Language.ES]:
        'Nosotros nos ocupamos de la ropa de cama, la leña y el hervidor. Tú sostienes la sala.',
      [Language.FR]:
        'On s’occupe du linge de lit, du bois de chauffage et de la bouilloire. Toi, tu tiens la salle.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A shala designed around teachers, not guests',
        [Language.NL]: 'Een shala ontworpen rond docenten, niet rond gasten',
        [Language.DE]: 'Eine Shala, gedacht für Lehrer, nicht für Gäste',
        [Language.ES]: 'Una shala pensada para profesores, no para invitados',
        [Language.FR]: 'Une shala pensée pour les professeurs, pas pour les invités',
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
        [Language.DE]: [
          'Der Praxisraum im Hay House sind 65 Quadratmeter beheizter Holzboden – Soundanlage, Matten und Props liegen schon bereit. Die Akustik trägt eine ruhige Stimme mühelos, und das Licht wandert im Lauf des Tages so, wie es Fotos kaum einfangen.',
          'Während du hier bist, teilst du den Ort mit niemandem. Die Scheune öffnet, wenn du es sagst, und bleibt dir, bis dein letzter Schüler geht.',
        ],
        [Language.ES]: [
          'El espacio de práctica del Hay House son 65 metros cuadrados de suelo de madera climatizado, con equipo de sonido, esterillas y props ya preparados. La acústica sostiene una voz pausada sin esfuerzo y la luz va cambiando a lo largo del día de una forma que las fotos no acaban de captar.',
          'No hay otros grupos en el recinto mientras estás aquí. El granero abre a la hora que tú digas y es tuyo hasta que se marcha tu último alumno.',
        ],
        [Language.FR]: [
          'L’espace de pratique du Hay House, c’est 65 mètres carrés de plancher en bois chauffé, avec sono, tapis et accessoires déjà en place. L’acoustique porte sans effort une voix posée, et la lumière change au fil de la journée comme les photos ne savent pas tout à fait le rendre.',
          'Aucun autre groupe ne partage le lieu pendant ton séjour. La grange ouvre à l’heure que tu choisis, et reste à toi jusqu’au départ du dernier élève.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House practice barn glowing in evening sun',
        [Language.NL]: 'Hooischuur-praktijkruimte in het avondlicht',
        [Language.DE]: 'Die Hay-House-Praxisscheune leuchtet in der Abendsonne',
        [Language.ES]: 'El granero de práctica Hay House iluminado por el sol de la tarde',
        [Language.FR]: 'La grange de pratique Hay House baignée par le soleil du soir',
      },
    },
    {
      h2: {
        [Language.EN]: 'Sleeping fourteen, hosting up to twenty',
        [Language.NL]: 'Slapen voor veertien, ontvangen tot twintig',
        [Language.DE]: 'Vierzehn Schlafplätze, bis zu zwanzig in der Praxis',
        [Language.ES]: 'Catorce camas, hasta veinte personas en el programa',
        [Language.FR]: 'Quatorze couchages, jusqu’à vingt personnes accueillies',
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
        [Language.DE]: [
          'Horizon, unsere umgebaute Heuscheune, bietet Platz für elf bis vierzehn Gäste in Einzel- und Mehrbettzimmern. Die Cosmos-Hütte gibt dem Hauptlehrer eine eigene Holzhütte mit Holzofen und Aussicht. Für die Praxis selbst können tagsüber insgesamt bis zu zwanzig Personen dazukommen.',
          'Die Küche liegt im zweiten Stock von Horizon und ist eingerichtet für gemeinsames Kochen oder für das Catering-Team, das du mitbringst.',
        ],
        [Language.ES]: [
          'Horizon, nuestro granero de heno reformado, acoge de once a catorce personas entre habitaciones privadas y compartidas. La cabaña Cosmos le da al profesor principal una cabaña de madera para él, con estufa de leña y vistas. Si hay programa de día, pueden sumarse hasta veinte a la práctica.',
          'La cocina está en la planta de arriba de Horizon, lista para cocinar en grupo o para el equipo de catering que traigas tú.',
        ],
        [Language.FR]: [
          'Horizon, notre grange à foin réaménagée, accueille de onze à quatorze personnes en chambres privées ou partagées. La cabane Cosmos offre au professeur principal une cabane en bois rien qu’à lui, avec poêle à bois et vue. En journée, jusqu’à vingt personnes peuvent rejoindre la pratique.',
          'La cuisine se trouve au deuxième étage de Horizon, prête pour cuisiner ensemble ou pour l’équipe traiteur que tu amènes avec toi.',
        ],
      },
      imageSrc: IMAGES.accommodation.atticBeds,
      imageAlt: {
        [Language.EN]: 'Attic bedroom with comfortable beds in the Horizon barn',
        [Language.NL]: 'Zolderkamer met comfortabele bedden in de Horizon-schuur',
        [Language.DE]: 'Dachgeschoss-Zimmer mit gemütlichen Betten in der Horizon-Scheune',
        [Language.ES]: 'Habitación abuhardillada con camas acogedoras en el granero Horizon',
        [Language.FR]: 'Chambre sous les combles avec lits confortables dans la grange Horizon',
      },
    },
    {
      h2: {
        [Language.EN]: 'What is included when you bring your group',
        [Language.NL]: 'Wat is inbegrepen als je je groep meebrengt',
        [Language.DE]: 'Was inbegriffen ist, wenn du deine Gruppe mitbringst',
        [Language.ES]: 'Qué se incluye cuando traes a tu grupo',
        [Language.FR]: 'Ce qui est inclus quand tu amènes ton groupe',
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
        [Language.DE]: [
          'Betten und Bettwäsche für vierzehn, die beheizte Praxisscheune, die Küche, Sauna, Hot Tub, Schwimmteich, Feuerstelle und freie Nutzung der Fahrräder. Das Catering können wir übernehmen oder du bringst es selbst mit – lokale Köche mit ayurvedischer Note gehören zu unserem Netzwerk.',
          'Für Solo-Retreats und Intensives reservieren wir den Hof auch für kleinere Gruppen und passen das Paket entsprechend an.',
        ],
        [Language.ES]: [
          'Camas y ropa de cama para catorce, el granero de práctica climatizado, la cocina, sauna, jacuzzi, piscina natural, círculo de fuego y bicicletas a tu disposición. El catering te lo organizamos nosotros o lo traes tú: en nuestra red hay cocineros locales con un toque ayurvédico.',
          'Para retiros en solitario o intensivos también podemos privatizar el sitio para grupos más pequeños y ajustar el paquete.',
        ],
        [Language.FR]: [
          'Lits et linge de lit pour quatorze, la grange de pratique chauffée, la cuisine, le sauna, le bain nordique, l’étang de baignade, le cercle de feu et les vélos en libre accès. On peut s’occuper du traiteur, ou tu l’amènes toi-même — des cuisinier·e·s du coin, d’inspiration ayurvédique, font partie de notre réseau.',
          'Pour les retraites solo et les intensives, on peut aussi privatiser le lieu pour des effectifs plus réduits, et adapter le forfait en conséquence.',
        ],
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'A long shared lunch table at The Makers Barn',
        [Language.NL]: 'Een lange gedeelde lunchtafel bij The Makers Barn',
        [Language.DE]: 'Eine lange gemeinsame Mittagstafel bei The Makers Barn',
        [Language.ES]: 'Una larga mesa compartida para el almuerzo en The Makers Barn',
        [Language.FR]: 'Une longue table partagée pour le déjeuner à The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '65 m²',
      description: {
        [Language.EN]: 'Heated practice barn — sound system, mats, props in place',
        [Language.NL]: 'Verwarmde praktijkruimte — geluidssysteem, matten, props aanwezig',
        [Language.DE]: 'Beheizte Praxisscheune – Soundanlage, Matten und Props liegen bereit',
        [Language.ES]: 'Granero de práctica climatizado: equipo de sonido, esterillas y props listos',
        [Language.FR]: 'Grange de pratique chauffée — sonorisation, tapis et accessoires en place',
      },
    },
    {
      number: '14',
      description: {
        [Language.EN]: 'Beds across Horizon and Cosmos, capacity twenty for practice',
        [Language.NL]: 'Bedden verdeeld over Horizon en Cosmos, capaciteit twintig voor beoefening',
        [Language.DE]: 'Betten verteilt auf Horizon und Cosmos, Kapazität für zwanzig in der Praxis',
        [Language.ES]: 'Camas repartidas entre Horizon y Cosmos; capacidad para veinte en la práctica',
        [Language.FR]: 'Lits répartis entre Horizon et Cosmos, capacité de vingt pour la pratique',
      },
    },
    {
      number: '15 min',
      description: {
        [Language.EN]: 'By car from Zwolle station — 1h15 by train from Schiphol',
        [Language.NL]: 'Met de auto vanaf station Zwolle — 1 uur 15 met de trein vanaf Schiphol',
        [Language.DE]: 'Mit dem Auto vom Bahnhof Zwolle – 1 Std. 15 Min. mit dem Zug ab Schiphol',
        [Language.ES]: 'En coche desde la estación de Zwolle. 1 h 15 en tren desde Schiphol',
        [Language.FR]: 'En voiture depuis la gare de Zwolle — 1h15 en train depuis Schiphol',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A sample teacher-led day',
      [Language.NL]: 'Een voorbeeld van een door de docent geleide dag',
      [Language.DE]: 'Ein Beispieltag mit Lehrer-Programm',
      [Language.ES]: 'Un día de ejemplo, con el profesor al frente',
      [Language.FR]: 'Un exemple de journée menée par le professeur',
    },
    intro: {
      [Language.EN]: 'A rhythm many of our visiting teachers settle into — yours can be entirely different.',
      [Language.NL]: 'Een ritme waar veel van onze gastdocenten in landen — jouw versie mag heel anders.',
      [Language.DE]: 'Ein Rhythmus, in den viele unserer Gastlehrer hineinfinden – deiner darf ganz anders aussehen.',
      [Language.ES]: 'Un ritmo en el que se asientan muchos de los profesores que pasan por aquí. El tuyo puede ser muy distinto.',
      [Language.FR]: 'Un rythme dans lequel beaucoup de nos professeurs invités finissent par s’installer — le tien peut être tout autre.',
    },
    items: [
      {
        time: '07:00',
        activity: {
          [Language.EN]: 'Optional silent sit by the pond',
          [Language.NL]: 'Optionele stilte-sessie bij de vijver',
          [Language.DE]: 'Optionales stilles Sitzen am Teich',
          [Language.ES]: 'Sentada en silencio (opcional) junto al estanque',
          [Language.FR]: 'Assise en silence (facultative) au bord de l’étang',
        },
      },
      {
        time: '08:00',
        activity: {
          [Language.EN]: 'Morning practice in the Hay House',
          [Language.NL]: 'Ochtendpraktijk in het Hay House',
          [Language.DE]: 'Morgenpraxis im Hay House',
          [Language.ES]: 'Práctica matinal en el Hay House',
          [Language.FR]: 'Pratique du matin au Hay House',
        },
      },
      {
        time: '10:00',
        activity: {
          [Language.EN]: 'Slow breakfast on the terrace',
          [Language.NL]: 'Rustig ontbijt op het terras',
          [Language.DE]: 'Langsames Frühstück auf der Terrasse',
          [Language.ES]: 'Desayuno tranquilo en la terraza',
          [Language.FR]: 'Petit-déjeuner tranquille sur la terrasse',
        },
      },
      {
        time: '12:30',
        activity: {
          [Language.EN]: 'Free time — pond, paths, hammocks',
          [Language.NL]: 'Vrije tijd — vijver, paden, hangmatten',
          [Language.DE]: 'Freie Zeit – Teich, Wege, Hängematten',
          [Language.ES]: 'Tiempo libre: estanque, senderos, hamacas',
          [Language.FR]: 'Temps libre — étang, sentiers, hamacs',
        },
      },
      {
        time: '16:00',
        activity: {
          [Language.EN]: 'Afternoon practice or workshop block',
          [Language.NL]: 'Middagpraktijk of workshopblok',
          [Language.DE]: 'Nachmittagspraxis oder Workshopblock',
          [Language.ES]: 'Práctica de tarde o bloque de taller',
          [Language.FR]: 'Pratique de l’après-midi ou créneau d’atelier',
        },
      },
      {
        time: '19:00',
        activity: {
          [Language.EN]: 'Long shared dinner',
          [Language.NL]: 'Lange gedeelde maaltijd',
          [Language.DE]: 'Langes gemeinsames Abendessen',
          [Language.ES]: 'Cena larga compartida',
          [Language.FR]: 'Long dîner partagé',
        },
      },
      {
        time: '21:00',
        activity: {
          [Language.EN]: 'Sauna, fire circle, or rest',
          [Language.NL]: 'Sauna, vuurplaats of rust',
          [Language.DE]: 'Sauna, Feuerstelle oder Ruhe',
          [Language.ES]: 'Sauna, círculo de fuego o descanso',
          [Language.FR]: 'Sauna, cercle de feu ou repos',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can I bring my own caterer?',
        [Language.NL]: 'Mag ik mijn eigen cateraar meebrengen?',
        [Language.DE]: 'Kann ich meinen eigenen Caterer mitbringen?',
        [Language.ES]: '¿Puedo traer a mi propio servicio de catering?',
        [Language.FR]: 'Puis-je amener mon propre traiteur ?',
      },
      answer: {
        [Language.EN]:
          'Yes — most visiting teachers do. The kitchen on the second floor of Horizon is fully equipped, and we can introduce you to local cooks if you would prefer to outsource it.',
        [Language.NL]:
          'Ja — de meeste gastdocenten doen dat. De keuken op de tweede verdieping van Horizon is volledig uitgerust, en we kunnen je in contact brengen met lokale koks als je het liever uitbesteedt.',
        [Language.DE]:
          'Ja – die meisten Gastlehrer machen das. Die Küche im zweiten Stock von Horizon ist voll ausgestattet, und wir vermitteln dich gerne an lokale Köche, wenn du es lieber abgeben möchtest.',
        [Language.ES]:
          'Sí. Es lo que hace la mayoría. La cocina de la planta de arriba de Horizon está totalmente equipada, y, si prefieres delegarlo, te ponemos en contacto con cocineros locales.',
        [Language.FR]:
          'Oui — c’est ce que font la plupart des professeurs invités. La cuisine au deuxième étage de Horizon est entièrement équipée, et on peut te mettre en contact avec des cuisinier·e·s du coin si tu préfères déléguer.',
      },
    },
    {
      question: {
        [Language.EN]: 'How early can my retreat start in the day?',
        [Language.NL]: 'Hoe vroeg kan mijn retraite beginnen op de dag?',
        [Language.DE]: 'Wie früh am Tag kann mein Retreat beginnen?',
        [Language.ES]: '¿A qué hora del día puede empezar mi retiro?',
        [Language.FR]: 'À quelle heure peut commencer ma retraite dans la journée ?',
      },
      answer: {
        [Language.EN]:
          'The barn is yours from 4 PM on arrival day and must be cleared by 11 AM on departure day, but the practice space is available from sunrise on full retreat days.',
        [Language.NL]:
          'De boerderij is van jou vanaf 16.00 uur op de aankomstdag en moet om 11.00 uur op de vertrekdag vrij zijn — maar de praktijkruimte is op volledige retraitedagen beschikbaar vanaf zonsopgang.',
        [Language.DE]:
          'Die Scheune gehört dir ab 16 Uhr am Anreisetag und muss am Abreisetag bis 11 Uhr geräumt sein – an vollen Retreat-Tagen steht der Praxisraum aber schon ab Sonnenaufgang zur Verfügung.',
        [Language.ES]:
          'El granero es tuyo desde las 16:00 del día de llegada y hay que dejarlo libre antes de las 11:00 del día de salida. La sala de práctica, eso sí, está disponible desde el amanecer los días enteros de retiro.',
        [Language.FR]:
          'La grange est à toi à partir de 16 h le jour d’arrivée et doit être libérée avant 11 h le jour du départ. En revanche, l’espace de pratique est disponible dès le lever du soleil les journées pleines de retraite.',
      },
    },
    {
      question: {
        [Language.EN]: 'Are mats and props really included?',
        [Language.NL]: 'Zijn matten en props echt inbegrepen?',
        [Language.DE]: 'Sind Matten und Props wirklich inbegriffen?',
        [Language.ES]: '¿Las esterillas y los props están de verdad incluidos?',
        [Language.FR]: 'Les tapis et accessoires sont-ils vraiment inclus ?',
      },
      answer: {
        [Language.EN]:
          'Yes. Mats, blocks, bolsters, blankets and straps for fourteen are kept in the Hay House. We replace and clean them between groups.',
        [Language.NL]:
          'Ja. Matten, blokken, bolsters, dekens en straps voor veertien personen liggen in het Hay House. We vervangen en reinigen ze tussen groepen door.',
        [Language.DE]:
          'Ja. Matten, Blöcke, Bolster, Decken und Gurte für vierzehn liegen im Hay House bereit. Wir ersetzen und reinigen sie zwischen den Gruppen.',
        [Language.ES]:
          'Sí. En el Hay House hay esterillas, bloques, bolsters, mantas y cinchas para catorce personas. Los reponemos y limpiamos entre un grupo y otro.',
        [Language.FR]:
          'Oui. Tapis, blocs, bolsters, couvertures et sangles pour quatorze, tout est rangé au Hay House. On les remplace et on les nettoie entre les groupes.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the venue ours alone for the duration of the retreat?',
        [Language.NL]: 'Is de locatie alleen van ons tijdens de retraite?',
        [Language.DE]: 'Gehört der Ort während des Retreats nur uns?',
        [Language.ES]: '¿El lugar es solo nuestro durante el retiro?',
        [Language.FR]: 'Le lieu est-il à nous seuls pendant toute la retraite ?',
      },
      answer: {
        [Language.EN]:
          'Yes — full buyout. No other groups, no other guests, no shared spaces. The three of us who run the place stay on call but stay out of your way.',
        [Language.NL]:
          'Ja — volledige buyout. Geen andere groepen, geen andere gasten, geen gedeelde ruimtes. Wij drieën zijn beschikbaar maar blijven uit je vaarwater.',
        [Language.DE]:
          'Ja – kompletter Buyout. Keine anderen Gruppen, keine anderen Gäste, keine geteilten Räume. Wir drei, die den Ort führen, sind im Hintergrund erreichbar, halten uns aber raus.',
        [Language.ES]:
          'Sí: privatización completa. Nada de otros grupos, ni otros huéspedes, ni espacios compartidos. Los tres que llevamos el sitio estamos a mano, pero te dejamos espacio.',
        [Language.FR]:
          'Oui — privatisation complète. Pas d’autres groupes, pas d’autres invités, pas d’espaces partagés. Nous trois, qui faisons tourner le lieu, on reste joignables mais on te laisse la voie libre.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your retreat to a place that already knows how to hold space',
      [Language.NL]: 'Breng je retraite naar een plek die al weet hoe je ruimte draagt',
      [Language.DE]: 'Bring deinen Retreat an einen Ort, der schon weiß, wie man Raum hält',
      [Language.ES]: 'Trae tu retiro a un sitio que ya sabe sostener el espacio',
      [Language.FR]: 'Amène ta retraite dans un lieu qui sait déjà tenir l’espace',
    },
    body: {
      [Language.EN]:
        'Tell us your dates and rough group size. We will come back with availability and a tailored quote within two working days.',
      [Language.NL]:
        'Vertel ons je data en geschatte groepsgrootte. We komen binnen twee werkdagen terug met beschikbaarheid en een offerte op maat.',
      [Language.DE]:
        'Sag uns deine Wunschtermine und die ungefähre Gruppengröße. Wir melden uns innerhalb von zwei Werktagen mit Verfügbarkeit und einem maßgeschneiderten Angebot.',
      [Language.ES]:
        'Cuéntanos las fechas y el tamaño aproximado del grupo. Te respondemos con la disponibilidad y un presupuesto a medida en un par de días laborables.',
      [Language.FR]:
        'Donne-nous tes dates et la taille approximative du groupe. On revient vers toi avec les disponibilités et un devis sur mesure sous deux jours ouvrés.',
    },
  },
}
