import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const BREATHWORK_SOUND_HEALING_SILO: SiloContent = {
  slug: SiloSlug.BREATHWORK_SOUND_HEALING,
  route: Route.BREATHWORK_SOUND_HEALING,
  heroImageSrc: IMAGES.accommodation.fireCircleGathering,
  heroImageAlt: {
    [Language.EN]: 'Group gathering around the fire circle at The Makers Barn',
    [Language.NL]: 'Groep rond de vuurplaats bij The Makers Barn',
    [Language.DE]: 'Gruppe versammelt sich um die Feuerstelle bei The Makers Barn',
    [Language.ES]: 'Grupo reunido en torno al círculo de fuego en The Makers Barn',
    [Language.FR]: 'Groupe rassemblé autour du cercle de feu à The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Breathwork & Sound Healing Retreat Venue — Netherlands',
      [Language.NL]: 'Ademwerk- & sound healing-retraitelocatie — Nederland',
      [Language.DE]: 'Retreat-Location für Atemarbeit & Klangheilung — Niederlande',
      [Language.ES]: 'Espacio para retiros de breathwork y sanación con sonido — Países Bajos',
      [Language.FR]: 'Lieu de retraite pour respiration et soins sonores — Pays-Bas',
    },
    description: {
      [Language.EN]:
        'A heated wooden hay barn that hums when the bowls do. A held space for breathwork and sound retreats in Overijssel. Sauna, fire circle, and a swimming pond for aftercare.',
      [Language.NL]:
        'Een verwarmde houten hooischuur die meeklinkt met de bowls. Een gedragen ruimte voor ademwerk- en klankretraites in Overijssel. Sauna, vuurplaats en een zwemvijver voor de aftercare.',
      [Language.DE]:
        'Eine beheizte hölzerne Heuscheune, die mitschwingt, wenn die Klangschalen erklingen. Ein gehaltener Raum für Atem- und Klangretreats in Overijssel. Sauna, Feuerstelle und ein Schwimmteich für die Nachsorge.',
      [Language.ES]:
        'Un granero de heno de madera con calefacción que vibra cuando suenan los cuencos. Un espacio sostenido para retiros de breathwork y sonido en Overijssel. Sauna, círculo de fuego y un estanque para nadar como parte del aftercare.',
      [Language.FR]:
        'Une grange de foin en bois chauffée qui vibre avec les bols. Un espace soutenu pour les retraites de respiration et de son en Overijssel. Sauna, cercle de feu et un étang de baignade pour le soin après séance.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For breathwork & sound facilitators',
      [Language.NL]: 'Voor ademwerk- en klankbegeleiders',
      [Language.DE]: 'Für Atem- und Klangbegleiter:innen',
      [Language.ES]: 'Para facilitadores de breathwork y sonido',
      [Language.FR]: 'Pour les facilitateurs de respiration et de son',
    },
    title: {
      [Language.EN]: 'A Held Space for Breathwork & Sound Retreats',
      [Language.NL]: 'Een gedragen ruimte voor ademwerk- en klankretraites',
      [Language.DE]: 'Ein gehaltener Raum für Atem- und Klangretreats',
      [Language.ES]: 'Un espacio sostenido para retiros de breathwork y sonido',
      [Language.FR]: 'Un espace soutenu pour les retraites de respiration et de son',
    },
    subtitle: {
      [Language.EN]:
        'Acoustics that breathe. Heated wooden floor for two-hour lie-downs. Fields outside, fire circle outside, sauna for what comes up afterwards.',
      [Language.NL]:
        'Akoestiek die ademt. Verwarmde houten vloer voor lig-sessies van twee uur. Velden buiten, vuurplaats buiten, sauna voor wat daarna naar boven komt.',
      [Language.DE]:
        'Eine Akustik, die atmet. Beheizter Holzboden für zweistündige Liegeritte. Felder draußen, Feuerstelle draußen, Sauna für das, was danach hochkommt.',
      [Language.ES]:
        'Una acústica que respira. Suelo de madera con calefacción para sesiones tumbadas de dos horas. Campos afuera, círculo de fuego afuera, sauna para lo que aflora después.',
      [Language.FR]:
        'Une acoustique qui respire. Sol en bois chauffé pour des séances allongées de deux heures. Des champs dehors, un cercle de feu dehors, un sauna pour ce qui remonte ensuite.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A hay barn that hums when the bowls do.',
      [Language.NL]:
        'Een hooischuur die meeklinkt met de bowls.',
      [Language.DE]:
        'Eine Heuscheune, die mitschwingt, wenn die Klangschalen erklingen.',
      [Language.ES]:
        'Un granero de heno que vibra cuando suenan los cuencos.',
      [Language.FR]:
        'Une grange de foin qui vibre quand les bols résonnent.',
    },
    caption: {
      [Language.EN]:
        'No neighbours, no shared walls, no programme on the other side of the door.',
      [Language.NL]:
        'Geen buren, geen gedeelde muren, geen ander programma aan de andere kant van de deur.',
      [Language.DE]:
        'Keine Nachbarn, keine geteilten Wände, kein anderes Programm hinter der Tür.',
      [Language.ES]:
        'Sin vecinos, sin paredes compartidas, sin otro programa al otro lado de la puerta.',
      [Language.FR]:
        'Pas de voisins, pas de murs partagés, pas d’autre programme de l’autre côté de la porte.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'Acoustics that breathe',
        [Language.NL]: 'Akoestiek die ademt',
        [Language.DE]: 'Eine Akustik, die atmet',
        [Language.ES]: 'Una acústica que respira',
        [Language.FR]: 'Une acoustique qui respire',
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
        [Language.DE]: [
          'Das Hay House sind fünfundsechzig Quadratmeter beheizter Holzboden unter einer Holzdecke. Der Raum ist warm vor dem ersten Einatmen, der Boden bleibt durch die längste Reise hindurch warm, und das Holz hat genau jenes akustische Nachklingen, in das Klangschalen und Atem sich legen können.',
          'Der Raum fasst zwanzig großzügig ausgelegte Matten. Zwölf bis vierzehn mit Bolstern, Decken und ganzkörperlichem Liegen sind das komfortable Maximum für eine aktive Sitzung.',
        ],
        [Language.ES]: [
          'El Hay House son sesenta y cinco metros cuadrados de suelo de madera con calefacción bajo un techo de madera. La sala está cálida antes de la primera inhalación, el suelo permanece tibio durante el viaje más largo, y la madera tiene esa caída acústica en la que los cuencos y la respiración pueden descansar.',
          'El espacio acoge veinte esterillas dispuestas con holgura. De doce a catorce, con bolsters, mantas y sesiones tumbadas de cuerpo entero, es el máximo cómodo para una sesión activa.',
        ],
        [Language.FR]: [
          'Le Hay House, c’est soixante-cinq mètres carrés de sol en bois chauffé sous un plafond en bois. La salle est chaude avant la première inspiration, le sol reste chaud durant le plus long voyage, et le bois offre ce type de décroissance acoustique dans lequel les bols et le souffle peuvent se poser.',
          'L’espace accueille vingt tapis disposés généreusement. Douze à quatorze avec bolsters, couvertures et séances allongées corps entier, c’est le maximum confortable pour une séance active.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House practice barn glowing in golden light',
        [Language.NL]: 'Hay House praktijkruimte in gouden licht',
        [Language.DE]: 'Hay House-Übungsscheune in goldenem Licht',
        [Language.ES]: 'Granero de práctica Hay House con luz dorada',
        [Language.FR]: 'Grange de pratique Hay House baignée de lumière dorée',
      },
    },
    {
      h2: {
        [Language.EN]: 'Aftercare built into the venue',
        [Language.NL]: 'Aftercare ingebakken in de locatie',
        [Language.DE]: 'Nachsorge, fest in den Ort eingebaut',
        [Language.ES]: 'Aftercare integrado en el lugar',
        [Language.FR]: 'Le soin après séance intégré au lieu',
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
        [Language.DE]: [
          'Nach einer langen Atem- oder Klangreise braucht man selten einen Hotelflur. Die Feuerstelle ist zwanzig Schritte von der Übungsscheune entfernt. Sauna und Whirlpool noch einmal zwanzig. Der Schwimmteich ist ein langsamer Spaziergang durch die Bäume.',
          'Die Morgen öffnen sich auf einen 1,3 Hektar großen Hof — Felder zum Gehen, Pfade durch den angepflanzten Wald, ein Teehaus mit einem einzigen Stuhl zum Fenster hin. Integration hat einen Ort, der kein Parkplatz ist.',
        ],
        [Language.ES]: [
          'Después de un viaje largo de breathwork o sonido, lo que la gente necesita rara vez es un pasillo de hotel. El círculo de fuego está a veinte pasos del granero de práctica. La sauna y el hot tub, otros veinte. El estanque de baño queda a un paseo tranquilo entre los árboles.',
          'Las mañanas se abren a una granja de 1,3 hectares — campos para caminar, senderos por el bosque plantado, una casa de té con una sola silla frente a la ventana. La integración tiene un sitio adonde ir que no es un aparcamiento.',
        ],
        [Language.FR]: [
          'Après un long voyage de respiration ou de son, ce dont les gens ont besoin n’est rarement un couloir d’hôtel. Le cercle de feu est à vingt pas de la grange de pratique. Le sauna et le bain chaud à vingt de plus. L’étang de baignade se rejoint par une marche tranquille entre les arbres.',
          'Les matins s’ouvrent sur une ferme de 1,3 hectares — des champs où marcher, des chemins à travers le bois planté, une maison de thé avec une seule chaise face à la fenêtre. L’intégration a un endroit où aller qui n’est pas un parking.',
        ],
      },
      imageSrc: IMAGES.accommodation.pondComplete,
      imageAlt: {
        [Language.EN]: 'Natural swimming pond at The Makers Barn',
        [Language.NL]: 'Natuurlijke zwemvijver bij The Makers Barn',
        [Language.DE]: 'Natürlicher Schwimmteich bei The Makers Barn',
        [Language.ES]: 'Estanque natural para nadar en The Makers Barn',
        [Language.FR]: 'Étang naturel de baignade à The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'What facilitators say to bring',
        [Language.NL]: 'Wat begeleiders meebrengen',
        [Language.DE]: 'Was Begleiter:innen mitbringen',
        [Language.ES]: 'Lo que los facilitadores suelen traer',
        [Language.FR]: 'Ce que les facilitateurs apportent',
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
        [Language.DE]: [
          'Die meisten Begleiter:innen bringen ihre eigenen Klangschalen, Trommeln oder Playlists mit. Wir stellen zwanzig Matten, Decken und Bolster; Soundsystem mit Bluetooth und Aux; dimmbare Stimmungsbeleuchtung; Augenmasken zum Kauf. Wir können auch eine private Köchin für die Mahlzeiten nach der Reise organisieren, wenn dein Retreat das verlangt.',
          'Für Gruppen, die tiefe oder verletzliche innere Arbeit machen, halten wir den Ort für die gesamte Dauer für andere Gäste geschlossen. Voller Buyout, keine Ausnahmen.',
        ],
        [Language.ES]: [
          'La mayoría de los facilitadores traen sus propios cuencos, tambores o playlists. Nosotros ponemos veinte esterillas, mantas y bolsters; equipo de sonido con bluetooth y auxiliar; iluminación regulable; antifaces a la venta. También podemos organizar un chef privado para las comidas después del viaje si tu retiro lo pide.',
          'Para grupos que hacen un trabajo interno profundo o vulnerable, mantenemos el lugar cerrado a otros huéspedes durante toda la estancia. Buyout completo, sin excepciones.',
        ],
        [Language.FR]: [
          'La plupart des facilitateurs apportent leurs propres bols, tambours ou playlists. Nous fournissons vingt tapis, couvertures et bolsters ; système son avec bluetooth et auxiliaire ; éclairage d’ambiance sur variateurs ; masques pour les yeux à la vente. Nous pouvons aussi organiser un chef privé pour les repas après le voyage si ta retraite le demande.',
          'Pour les groupes qui font un travail intérieur profond ou vulnérable, nous gardons le lieu fermé aux autres invités pendant toute la durée. Buyout complet, sans exception.',
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
        [Language.DE]: 'Beheizte hölzerne Übungsscheune — Holzdecke, warme Akustik',
        [Language.ES]: 'Granero de práctica de madera con calefacción — techo de madera, acústica cálida',
        [Language.FR]: 'Grange de pratique en bois chauffée — plafond en bois, acoustique chaleureuse',
      },
    },
    {
      number: '12–20',
      description: {
        [Language.EN]: 'Comfortable group size for active sessions and journeys',
        [Language.NL]: 'Comfortabele groepsgrootte voor actieve sessies en reizen',
        [Language.DE]: 'Komfortable Gruppengröße für aktive Sitzungen und Reisen',
        [Language.ES]: 'Tamaño de grupo cómodo para sesiones activas y viajes',
        [Language.FR]: 'Taille de groupe confortable pour les séances actives et les voyages',
      },
    },
    {
      number: '20',
      description: {
        [Language.EN]: 'Steps from the practice barn to the fire circle',
        [Language.NL]: 'Passen van de praktijkruimte naar de vuurplaats',
        [Language.DE]: 'Schritte von der Übungsscheune zur Feuerstelle',
        [Language.ES]: 'Pasos desde el granero de práctica hasta el círculo de fuego',
        [Language.FR]: 'Pas de la grange de pratique au cercle de feu',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Can we host journeys late into the evening?',
        [Language.NL]: 'Kunnen we reizen tot laat in de avond houden?',
        [Language.DE]: 'Können wir Reisen bis spät in den Abend abhalten?',
        [Language.ES]: '¿Podemos hacer viajes hasta tarde en la noche?',
        [Language.FR]: 'Pouvons-nous tenir des voyages tard le soir ?',
      },
      answer: {
        [Language.EN]:
          'Yes. Full venue buyout means there are no quiet hours imposed by other guests. We ask that very loud drumming or amplified sound respects standard rural neighbour courtesies after 23:00, but our nearest neighbours are well out of earshot.',
        [Language.NL]:
          'Ja. Volledige buyout betekent dat er geen stille uren worden opgelegd door andere gasten. We vragen om bij heel luid drummen of versterkt geluid de gangbare landelijke buurtetiquette na 23.00 uur te respecteren, maar onze dichtstbijzijnde buren liggen ruim buiten gehoorsafstand.',
        [Language.DE]:
          'Ja. Voller Buyout heißt: keine Ruhezeiten, die von anderen Gästen vorgegeben werden. Wir bitten darum, bei sehr lautem Trommeln oder verstärktem Klang nach 23:00 Uhr die übliche ländliche Nachbarschaftsrücksicht zu wahren, aber unsere nächsten Nachbarn sind weit außer Hörweite.',
        [Language.ES]:
          'Sí. El buyout completo significa que no hay horas de silencio impuestas por otros huéspedes. Pedimos que el tambor muy fuerte o el sonido amplificado respeten la cortesía vecinal habitual del campo después de las 23:00, pero nuestros vecinos más cercanos están muy fuera del alcance del oído.',
        [Language.FR]:
          'Oui. Le buyout complet signifie qu’aucune plage de silence n’est imposée par d’autres invités. Nous demandons que les percussions très fortes ou le son amplifié respectent la courtoisie rurale habituelle après 23h00, mais nos plus proches voisins sont bien hors de portée d’ouïe.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you provide mats, bolsters, and blankets?',
        [Language.NL]: 'Leveren jullie matten, bolsters en dekens?',
        [Language.DE]: 'Stellt ihr Matten, Bolster und Decken zur Verfügung?',
        [Language.ES]: '¿Proporcionáis esterillas, bolsters y mantas?',
        [Language.FR]: 'Fournissez-vous tapis, bolsters et couvertures ?',
      },
      answer: {
        [Language.EN]:
          'Yes — twenty of each, washed between groups. Bring your own if you have a specific brand preference and we will store them for you between sessions.',
        [Language.NL]:
          'Ja — twintig van elk, gewassen tussen groepen door. Breng je eigen mee als je een specifieke merkvoorkeur hebt, dan bewaren we ze voor je tussen sessies door.',
        [Language.DE]:
          'Ja — zwanzig von jedem, zwischen den Gruppen gewaschen. Bring deine eigenen mit, wenn du eine bestimmte Markenvorliebe hast; wir lagern sie für dich zwischen den Sitzungen ein.',
        [Language.ES]:
          'Sí — veinte de cada, lavados entre grupos. Trae los tuyos si tienes una marca preferida y los guardamos para ti entre sesiones.',
        [Language.FR]:
          'Oui — vingt de chaque, lavés entre les groupes. Apporte les tiens si tu as une marque préférée et nous les rangerons pour toi entre les séances.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the fire circle available for evening ceremonial work?',
        [Language.NL]: 'Is de vuurplaats beschikbaar voor ceremonieel avondwerk?',
        [Language.DE]: 'Ist die Feuerstelle für zeremonielle Abendarbeit verfügbar?',
        [Language.ES]: '¿Está disponible el círculo de fuego para trabajo ceremonial nocturno?',
        [Language.FR]: 'Le cercle de feu est-il disponible pour un travail cérémoniel en soirée ?',
      },
      answer: {
        [Language.EN]:
          'Yes. The fire circle sits twenty steps from the practice barn, with seating for fifteen and a wood store we keep filled. It is yours from sundown to whenever you call it.',
        [Language.NL]:
          'Ja. De vuurplaats staat twintig stappen van de praktijkruimte, met zitplek voor vijftien en een houtopslag die we vol houden. Hij is van jou vanaf zonsondergang tot wanneer je hem oproept.',
        [Language.DE]:
          'Ja. Die Feuerstelle liegt zwanzig Schritte von der Übungsscheune entfernt, mit Sitzgelegenheiten für fünfzehn und einem Holzlager, das wir gefüllt halten. Sie gehört dir von Sonnenuntergang bis zu dem Moment, in dem du sie schließt.',
        [Language.ES]:
          'Sí. El círculo de fuego está a veinte pasos del granero de práctica, con asientos para quince y una leñera que mantenemos llena. Es tuyo desde la puesta de sol hasta cuando decidas cerrarlo.',
        [Language.FR]:
          'Oui. Le cercle de feu se trouve à vingt pas de la grange de pratique, avec des sièges pour quinze et une réserve de bois que nous gardons remplie. Il est à toi du coucher du soleil jusqu’au moment où tu le clôtures.',
      },
    },
    {
      question: {
        [Language.EN]: 'How does aftercare overnight work?',
        [Language.NL]: 'Hoe werkt de aftercare ’s nachts?',
        [Language.DE]: 'Wie funktioniert die Nachsorge über Nacht?',
        [Language.ES]: '¿Cómo funciona el aftercare durante la noche?',
        [Language.FR]: 'Comment se passe le soin après séance pendant la nuit ?',
      },
      answer: {
        [Language.EN]:
          'Most groups stay one or two nights after the journey itself for proper integration. Beds for fourteen across Horizon and Cosmos. We can arrange catering, walks, gentle yoga, and one-on-one space for facilitators to debrief participants.',
        [Language.NL]:
          'De meeste groepen blijven na de reis zelf nog een of twee nachten voor een goede integratie. Bedden voor veertien, verdeeld over Horizon en Cosmos. We kunnen catering, wandelingen, zachte yoga en één-op-één-ruimtes regelen waarin begeleiders met deelnemers kunnen nabespreken.',
        [Language.DE]:
          'Die meisten Gruppen bleiben nach der eigentlichen Reise noch ein oder zwei Nächte für eine ordentliche Integration. Betten für vierzehn, verteilt auf Horizon und Cosmos. Wir organisieren Catering, Spaziergänge, sanftes Yoga und Eins-zu-Eins-Räume, in denen Begleiter:innen mit Teilnehmenden nachbesprechen können.',
        [Language.ES]:
          'La mayoría de los grupos se queda una o dos noches después del viaje para una buena integración. Camas para catorce repartidas entre Horizon y Cosmos. Podemos organizar catering, paseos, yoga suave y espacios uno a uno para que los facilitadores hagan el debrief con los participantes.',
        [Language.FR]:
          'La plupart des groupes restent une ou deux nuits après le voyage lui-même pour une bonne intégration. Quatorze couchages répartis entre Horizon et Cosmos. Nous organisons le traiteur, les promenades, du yoga doux et des espaces en tête-à-tête pour que les facilitateurs débriefent avec les participants.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'A held space for the journey, and the day after the journey',
      [Language.NL]: 'Een gedragen ruimte voor de reis, en de dag erna',
      [Language.DE]: 'Ein gehaltener Raum für die Reise — und den Tag danach',
      [Language.ES]: 'Un espacio sostenido para el viaje, y para el día después del viaje',
      [Language.FR]: 'Un espace soutenu pour le voyage, et pour le jour d’après',
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
}
