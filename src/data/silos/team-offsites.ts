import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const TEAM_OFFSITES_SILO: SiloContent = {
  slug: SiloSlug.TEAM_OFFSITES,
  route: Route.TEAM_OFFSITES,
  heroImageSrc: IMAGES.accommodation.outsideGuitarCircle,
  heroImageAlt: {
    [Language.EN]: 'A small group gathered around a fire pit at The Makers Barn',
    [Language.NL]: 'Een kleine groep rond de vuurplaats bij The Makers Barn',
    [Language.DE]: 'Eine kleine Gruppe um die Feuerstelle bei The Makers Barn',
    [Language.ES]: 'Un grupo pequeño reunido en torno al fuego en The Makers Barn',
    [Language.FR]: 'Un petit groupe rassemblé autour du foyer à The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Slow-Living Team Offsites — Netherlands',
      [Language.NL]: 'Slow-Living Teamuitjes — Nederland',
      [Language.DE]: 'Slow-Living-Team-Offsites — Niederlande',
      [Language.ES]: 'Team offsites slow-living — Países Bajos',
      [Language.FR]: 'Team offsites slow-living — Pays-Bas',
    },
    description: {
      [Language.EN]:
        'A 1920s farm bought out for your team — 14 beds, capacity 20, 1.3 hectares. Strategy days that do not feel like meeting rooms. 15 minutes from Zwolle, 1h15 from Schiphol.',
      [Language.NL]:
        'Een boerderij uit 1920 exclusief voor je team — 14 bedden, capaciteit 20, 1,3 hectare. Strategiedagen die niet aanvoelen als vergaderzalen. 15 minuten van Zwolle, 1 uur 15 van Schiphol.',
      [Language.DE]:
        'Ein Hof aus den 1920ern, exklusiv für dein Team — 14 Betten, Kapazität 20, 1,3 Hektar. Strategietage, die sich nicht wie Konferenzräume anfühlen. 15 Minuten von Zwolle, 1h15 von Schiphol.',
      [Language.ES]:
        'Una granja de los años 1920 reservada en exclusiva para tu equipo — 14 camas, capacidad para 20, 1,3 hectares. Días de estrategia que no se sienten como salas de reuniones. A 15 minutos de Zwolle, a 1h15 de Schiphol.',
      [Language.FR]:
        'Une ferme des années 1920 privatisée pour ton équipe — 14 lits, capacité 20, 1,3 hectares. Des journées stratégiques qui ne ressemblent pas à une salle de réunion. À 15 minutes de Zwolle, à 1h15 de Schiphol.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For founders, heads of people, creative directors',
      [Language.NL]: 'Voor founders, hoofden HR en creatieve directeuren',
      [Language.DE]: 'Für Gründer, People-Leads und Creative Directors',
      [Language.ES]: 'Para fundadores, responsables de personas y directores creativos',
      [Language.FR]: 'Pour fondateurs, responsables RH et directeurs créatifs',
    },
    title: {
      [Language.EN]: 'A Slow-Living Offsite for Teams Who Make Things',
      [Language.NL]: 'Een slow-living offsite voor teams die dingen maken',
      [Language.DE]: 'Ein Slow-Living-Offsite für Teams, die Dinge machen',
      [Language.ES]: 'Un offsite slow-living para equipos que crean cosas',
      [Language.FR]: 'Un offsite slow-living pour les équipes qui font des choses',
    },
    subtitle: {
      [Language.EN]:
        'A 1920s farm, fifteen minutes from Zwolle, an hour and a quarter from Schiphol. Bring the team — leave the laptops shut for the parts that matter.',
      [Language.NL]:
        'Een boerderij uit 1920, vijftien minuten van Zwolle, een uur en een kwartier van Schiphol. Breng het team — laat de laptops dicht voor de momenten die ertoe doen.',
      [Language.DE]:
        'Ein Hof aus den 1920ern, fünfzehn Minuten von Zwolle, eine Stunde und eine Viertelstunde von Schiphol. Bring das Team mit — und lass die Laptops für die Momente, die zählen, zugeklappt.',
      [Language.ES]:
        'Una granja de los años 1920, a quince minutos de Zwolle y a una hora y cuarto de Schiphol. Trae al equipo — y deja los portátiles cerrados para lo que de verdad importa.',
      [Language.FR]:
        'Une ferme des années 1920, à quinze minutes de Zwolle, à une heure et quart de Schiphol. Amène l’équipe — et laisse les ordinateurs fermés pour les moments qui comptent.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Strategy days that don’t feel like meeting rooms.',
      [Language.NL]:
        'Strategiedagen die niet aanvoelen als vergaderzalen.',
      [Language.DE]:
        'Strategietage, die sich nicht wie Konferenzräume anfühlen.',
      [Language.ES]:
        'Días de estrategia que no parecen una sala de reuniones.',
      [Language.FR]:
        'Des journées stratégiques qui n’ont pas le goût d’une salle de réunion.',
    },
    caption: {
      [Language.EN]:
        'Sauna, fire circle, and a kitchen built for long dinners. Logistics handled — including the train from Schiphol.',
      [Language.NL]:
        'Sauna, vuurplaats en een keuken gemaakt voor lange diners. Logistiek geregeld — inclusief de trein vanaf Schiphol.',
      [Language.DE]:
        'Sauna, Feuerstelle und eine Küche, die für lange Abendessen gemacht ist. Logistik übernommen — inklusive Zug ab Schiphol.',
      [Language.ES]:
        'Sauna, círculo de fuego y una cocina hecha para cenas largas. Logística cubierta — incluido el tren desde Schiphol.',
      [Language.FR]:
        'Sauna, cercle de feu et une cuisine faite pour les longs dîners. Logistique gérée — y compris le train depuis Schiphol.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A venue, not a corporate event space',
        [Language.NL]: 'Een locatie, geen corporate event-ruimte',
        [Language.DE]: 'Ein Ort, kein Corporate-Event-Raum',
        [Language.ES]: 'Un lugar, no un salón de eventos corporativos',
        [Language.FR]: 'Un lieu, pas une salle d’événements d’entreprise',
      },
      body: {
        [Language.EN]: [
          'No conference badges, no laser-tag package, no hotel banquet hall. The Hay House barn becomes your strategy room — heated floor, sound system, big whiteboards if you want them, fields outside the window if you don’t.',
          'Most teams find that the work changes when the room does. The kind of conversation that needs hours instead of forty-five minutes happens because the room can hold it.',
        ],
        [Language.NL]: [
          'Geen badges, geen lasergame-pakket, geen hotelzaal. De Hay House-schuur wordt je strategieruimte — verwarmde vloer, geluidssysteem, grote whiteboards als je wilt, anders velden buiten het raam.',
          'Veel teams merken dat het werk verandert als de ruimte verandert. Het soort gesprek dat uren vraagt in plaats van vijfenveertig minuten, gebeurt omdat de ruimte het kan dragen.',
        ],
        [Language.DE]: [
          'Keine Konferenzbadges, kein Lasertag-Paket, kein Hotelbankettsaal. Die Hay House-Scheune wird dein Strategieraum — beheizter Boden, Soundanlage, große Whiteboards, wenn du sie willst, sonst Felder vor dem Fenster.',
          'Die meisten Teams merken, dass die Arbeit sich verändert, wenn der Raum sich verändert. Die Art von Gespräch, die Stunden braucht statt fünfundvierzig Minuten, passiert, weil der Raum sie tragen kann.',
        ],
        [Language.ES]: [
          'Sin acreditaciones de congreso, sin paquete de láser-tag, sin salón de hotel. El granero Hay House se convierte en tu sala de estrategia — suelo climatizado, equipo de sonido, pizarras grandes si las quieres, campos al otro lado de la ventana si no.',
          'La mayoría de los equipos descubre que el trabajo cambia cuando lo hace la sala. El tipo de conversación que necesita horas en lugar de cuarenta y cinco minutos ocurre porque la sala puede sostenerla.',
        ],
        [Language.FR]: [
          'Pas de badges de conférence, pas de pack laser-tag, pas de salle de banquet d’hôtel. La grange du Hay House devient ta salle de stratégie — sol chauffé, sonorisation, grands tableaux blancs si tu en veux, des champs derrière la fenêtre sinon.',
          'La plupart des équipes constatent que le travail change quand la pièce change. Le genre de conversation qui demande des heures plutôt que quarante-cinq minutes a lieu parce que la pièce peut la tenir.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseBench,
      imageAlt: {
        [Language.EN]: 'Bench at the Hay House at sunset',
        [Language.NL]: 'Bank bij het Hay House bij zonsondergang',
        [Language.DE]: 'Bank am Hay House bei Sonnenuntergang',
        [Language.ES]: 'Banco junto al Hay House al atardecer',
        [Language.FR]: 'Banc devant le Hay House au coucher du soleil',
      },
    },
    {
      h2: {
        [Language.EN]: 'Logistics handled, transparently',
        [Language.NL]: 'Logistiek geregeld, transparant',
        [Language.DE]: 'Logistik übernommen, transparent',
        [Language.ES]: 'Logística cubierta, con transparencia',
        [Language.FR]: 'Logistique gérée, en toute transparence',
      },
      body: {
        [Language.EN]: [
          'Train from Schiphol to Zwolle takes one hour fifteen. We arrange transfers from Zwolle station, pre-stock the kitchen with what your dietary spread needs, and bring in catering teams who have done forty-person dinners here without breaking stride.',
          'You get one point of contact, one invoice, and one place where everyone in the team is sleeping under the same set of roofs.',
        ],
        [Language.NL]: [
          'De trein van Schiphol naar Zwolle duurt een uur en een kwartier. Wij regelen de transfer vanaf station Zwolle, stemmen de keuken af op jullie voedingswensen, en schakelen cateringteams in die hier zonder problemen diners voor veertig hebben verzorgd.',
          'Je krijgt één aanspreekpunt, één factuur, en één plek waar iedereen in het team onder hetzelfde dak slaapt.',
        ],
        [Language.DE]: [
          'Der Zug von Schiphol nach Zwolle dauert eine Stunde fünfzehn. Wir organisieren die Transfers ab dem Bahnhof Zwolle, statten die Küche passend zu eurer Ernährungssituation aus und bringen Catering-Teams ins Haus, die hier schon Abendessen für vierzig serviert haben, ohne ins Stocken zu kommen.',
          'Du bekommst einen Ansprechpartner, eine Rechnung und einen Ort, an dem alle im Team unter denselben Dächern schlafen.',
        ],
        [Language.ES]: [
          'El tren de Schiphol a Zwolle tarda una hora y cuarto. Organizamos los traslados desde la estación de Zwolle, dejamos la cocina lista para vuestras necesidades dietéticas y traemos equipos de catering que ya han servido aquí cenas para cuarenta sin despeinarse.',
          'Tienes un único interlocutor, una sola factura y un solo lugar donde todo el equipo duerme bajo el mismo conjunto de tejados.',
        ],
        [Language.FR]: [
          'Le train de Schiphol à Zwolle prend une heure quinze. Nous organisons les transferts depuis la gare de Zwolle, garnissons la cuisine selon vos besoins alimentaires, et faisons venir des équipes de traiteur qui ont déjà servi ici des dîners pour quarante personnes sans broncher.',
          'Tu as un seul interlocuteur, une seule facture et un seul lieu où toute l’équipe dort sous le même ensemble de toits.',
        ],
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'A long shared lunch with the team at The Makers Barn',
        [Language.NL]: 'Een lange gedeelde lunch met het team bij The Makers Barn',
        [Language.DE]: 'Ein langes gemeinsames Mittagessen mit dem Team bei The Makers Barn',
        [Language.ES]: 'Un almuerzo largo compartido con el equipo en The Makers Barn',
        [Language.FR]: 'Un long déjeuner partagé avec l’équipe à The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'What 14 people get to themselves for two days',
        [Language.NL]: 'Wat 14 mensen voor zichzelf krijgen in twee dagen',
        [Language.DE]: 'Was 14 Personen in zwei Tagen für sich allein bekommen',
        [Language.ES]: 'Lo que 14 personas tienen para sí mismas durante dos días',
        [Language.FR]: 'Ce que 14 personnes ont pour elles seules pendant deux jours',
      },
      body: {
        [Language.EN]: [
          'A full venue buyout — 14 beds across Horizon and Cosmos, the practice barn for sessions, the sauna and hot tub for evenings, the swimming pond when it is warm enough, the fire circle when it is not. Capacity goes up to 20 for sessions if you bring day-only attendees.',
          'Bring 8, bring 14, bring a board. Pricing scales accordingly and we are honest with you about what works at each size.',
        ],
        [Language.NL]: [
          'Volledige buyout — 14 bedden verdeeld over Horizon en Cosmos, de praktijkruimte voor sessies, de sauna en hot tub voor de avond, de zwemvijver als het warm genoeg is, de vuurplaats als het dat niet is. Voor sessies kan de capaciteit naar 20 als je dagdeelnemers meeneemt.',
          'Breng er 8, breng er 14, breng een bestuur. De prijs schaalt mee en we zeggen je eerlijk wat bij welke groepsgrootte werkt.',
        ],
        [Language.DE]: [
          'Kompletter Buyout — 14 Betten verteilt auf Horizon und Cosmos, die Praxisscheune für Sessions, Sauna und Hot Tub für die Abende, der Schwimmteich, wenn es warm genug ist, die Feuerstelle, wenn nicht. Für Sessions geht die Kapazität auf 20, wenn du Tagesgäste mitbringst.',
          'Bring 8, bring 14, bring einen Vorstand. Der Preis skaliert entsprechend, und wir sagen dir ehrlich, was bei welcher Gruppengröße funktioniert.',
        ],
        [Language.ES]: [
          'Buyout completo — 14 camas repartidas entre Horizon y Cosmos, el granero de práctica para las sesiones, el sauna y el hot tub para la tarde-noche, el estanque para nadar cuando hace calor y el círculo de fuego cuando no. Para las sesiones la capacidad sube a 20 si traes asistentes solo de día.',
          'Trae a 8, trae a 14, trae a un consejo. El precio escala en consecuencia y te decimos con honestidad qué funciona en cada tamaño.',
        ],
        [Language.FR]: [
          'Privatisation complète — 14 lits répartis entre Horizon et Cosmos, la grange de pratique pour les sessions, le sauna et le hot tub pour les soirées, l’étang de baignade quand il fait assez chaud, le cercle de feu sinon. Pour les sessions, la capacité monte à 20 si tu amènes des participants à la journée.',
          'Amène 8 personnes, 14 personnes, un conseil d’administration. Le prix s’adapte en conséquence, et nous te disons honnêtement ce qui fonctionne à chaque taille.',
        ],
      },
      imageSrc: IMAGES.accommodation.sauna,
      imageAlt: {
        [Language.EN]: 'Outdoor sauna at The Makers Barn',
        [Language.NL]: 'Buitensauna bij The Makers Barn',
        [Language.DE]: 'Außensauna bei The Makers Barn',
        [Language.ES]: 'Sauna al aire libre en The Makers Barn',
        [Language.FR]: 'Sauna extérieur à The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '1h15',
      description: {
        [Language.EN]: 'By train from Schiphol to Zwolle — we handle the last fifteen minutes',
        [Language.NL]: 'Met de trein vanaf Schiphol naar Zwolle — wij doen de laatste vijftien minuten',
        [Language.DE]: 'Mit dem Zug von Schiphol nach Zwolle — die letzten fünfzehn Minuten übernehmen wir',
        [Language.ES]: 'En tren de Schiphol a Zwolle — los últimos quince minutos los hacemos nosotros',
        [Language.FR]: 'En train de Schiphol à Zwolle — les quinze dernières minutes, c’est nous qui les faisons',
      },
    },
    {
      number: '8–20',
      description: {
        [Language.EN]: 'Team size that fits — venue buyout, no shared spaces',
        [Language.NL]: 'Teamgrootte die past — volledige buyout, geen gedeelde ruimtes',
        [Language.DE]: 'Teamgröße, die passt — kompletter Buyout, keine geteilten Räume',
        [Language.ES]: 'Tamaño de equipo que encaja — buyout completo, sin espacios compartidos',
        [Language.FR]: 'Taille d’équipe qui rentre — privatisation complète, pas d’espaces partagés',
      },
    },
    {
      number: '1',
      description: {
        [Language.EN]: 'Point of contact, one invoice, no surprises',
        [Language.NL]: 'Aanspreekpunt, één factuur, geen verrassingen',
        [Language.DE]: 'Ansprechpartner, eine Rechnung, keine Überraschungen',
        [Language.ES]: 'Interlocutor, una factura, sin sorpresas',
        [Language.FR]: 'Interlocuteur, une facture, sans surprise',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A two-day offsite, sketched',
      [Language.NL]: 'Een tweedaagse offsite, geschetst',
      [Language.DE]: 'Ein zweitägiges Offsite, skizziert',
      [Language.ES]: 'Un offsite de dos días, esbozado',
      [Language.FR]: 'Un offsite de deux jours, esquissé',
    },
    intro: {
      [Language.EN]:
        'A loose template several leadership teams have used here — yours is yours to design.',
      [Language.NL]:
        'Een losse template die diverse leiderschapsteams hier gebruikten — die van jou ontwerp je zelf.',
      [Language.DE]:
        'Eine lose Vorlage, die mehrere Führungsteams hier genutzt haben — deine gestaltest du selbst.',
      [Language.ES]:
        'Una plantilla flexible que han usado aquí varios equipos directivos — la tuya la diseñas tú.',
      [Language.FR]:
        'Un canevas souple que plusieurs équipes de direction ont utilisé ici — le tien, c’est à toi de le dessiner.',
    },
    items: [
      {
        time: 'Day 1 · 11:00',
        activity: {
          [Language.EN]: 'Arrival, settle into rooms, kettle on',
          [Language.NL]: 'Aankomst, kamers betrekken, waterkoker aan',
          [Language.DE]: 'Ankunft, in den Zimmern ankommen, Wasserkocher an',
          [Language.ES]: 'Llegada, instalación en las habitaciones, hervidor en marcha',
          [Language.FR]: 'Arrivée, installation dans les chambres, bouilloire en route',
        },
      },
      {
        time: 'Day 1 · 13:00',
        activity: {
          [Language.EN]: 'Long lunch — slow start to the work',
          [Language.NL]: 'Lange lunch — rustige start van het werk',
          [Language.DE]: 'Langes Mittagessen — ruhiger Einstieg in die Arbeit',
          [Language.ES]: 'Almuerzo largo — comienzo pausado del trabajo',
          [Language.FR]: 'Long déjeuner — début tranquille du travail',
        },
      },
      {
        time: 'Day 1 · 15:00',
        activity: {
          [Language.EN]: 'Strategy session in the Hay House',
          [Language.NL]: 'Strategiesessie in het Hay House',
          [Language.DE]: 'Strategie-Session im Hay House',
          [Language.ES]: 'Sesión de estrategia en el Hay House',
          [Language.FR]: 'Séance de stratégie au Hay House',
        },
      },
      {
        time: 'Day 1 · 19:30',
        activity: {
          [Language.EN]: 'Catered dinner at the long table',
          [Language.NL]: 'Verzorgd diner aan de lange tafel',
          [Language.DE]: 'Catered Dinner an der langen Tafel',
          [Language.ES]: 'Cena con catering en la mesa larga',
          [Language.FR]: 'Dîner traiteur à la longue table',
        },
      },
      {
        time: 'Day 1 · 21:30',
        activity: {
          [Language.EN]: 'Sauna and fire circle',
          [Language.NL]: 'Sauna en vuurplaats',
          [Language.DE]: 'Sauna und Feuerstelle',
          [Language.ES]: 'Sauna y círculo de fuego',
          [Language.FR]: 'Sauna et cercle de feu',
        },
      },
      {
        time: 'Day 2 · 09:00',
        activity: {
          [Language.EN]: 'Working session — second strategic block',
          [Language.NL]: 'Werksessie — tweede strategisch blok',
          [Language.DE]: 'Arbeitssession — zweiter strategischer Block',
          [Language.ES]: 'Sesión de trabajo — segundo bloque estratégico',
          [Language.FR]: 'Séance de travail — deuxième bloc stratégique',
        },
      },
      {
        time: 'Day 2 · 13:00',
        activity: {
          [Language.EN]: 'Walking lunch through the trees',
          [Language.NL]: 'Wandellunch door de bomen',
          [Language.DE]: 'Wander-Lunch durch die Bäume',
          [Language.ES]: 'Almuerzo caminando entre los árboles',
          [Language.FR]: 'Déjeuner en marchant à travers les arbres',
        },
      },
      {
        time: 'Day 2 · 15:30',
        activity: {
          [Language.EN]: 'Closing circle, write-up, departure',
          [Language.NL]: 'Slotrondje, vastleggen, vertrek',
          [Language.DE]: 'Abschlusskreis, Festhalten, Abreise',
          [Language.ES]: 'Círculo de cierre, recogida de notas, salida',
          [Language.FR]: 'Cercle de clôture, mise au propre, départ',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can we invoice this through one company invoice?',
        [Language.NL]: 'Kunnen we dit via één bedrijfsfactuur afrekenen?',
        [Language.DE]: 'Können wir das über eine einzige Firmenrechnung abrechnen?',
        [Language.ES]: '¿Podemos pagarlo con una sola factura de empresa?',
        [Language.FR]: 'Pouvons-nous régler cela via une seule facture d’entreprise ?',
      },
      answer: {
        [Language.EN]:
          'Yes. One quote, one invoice, payable in two instalments. We handle VAT correctly for EU and non-EU companies.',
        [Language.NL]:
          'Ja. Eén offerte, één factuur, betaalbaar in twee termijnen. We regelen de BTW correct voor zowel EU- als niet-EU-bedrijven.',
        [Language.DE]:
          'Ja. Ein Angebot, eine Rechnung, zahlbar in zwei Raten. Die Mehrwertsteuer regeln wir korrekt für EU- und Nicht-EU-Unternehmen.',
        [Language.ES]:
          'Sí. Un presupuesto, una factura, pagadera en dos plazos. Gestionamos correctamente el IVA tanto para empresas de la UE como de fuera de la UE.',
        [Language.FR]:
          'Oui. Un devis, une facture, payable en deux versements. Nous gérons correctement la TVA pour les entreprises de l’UE comme hors UE.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you have AV for presentations and workshops?',
        [Language.NL]: 'Hebben jullie AV voor presentaties en workshops?',
        [Language.DE]: 'Habt ihr AV-Technik für Präsentationen und Workshops?',
        [Language.ES]: '¿Tenéis equipo audiovisual para presentaciones y talleres?',
        [Language.FR]: 'Avez-vous un équipement audiovisuel pour les présentations et ateliers ?',
      },
      answer: {
        [Language.EN]:
          'The Hay House has sound and we can bring in a projector and screen. Whiteboards, flipcharts, and post-its are stocked. Tell us your set-up and we will have it ready before you arrive.',
        [Language.NL]:
          'Het Hay House beschikt over een geluidsinstallatie en we kunnen een beamer en scherm meenemen. Whiteboards, flip-overs en post-its zijn aanwezig. Laat ons je opzet weten, dan hebben we alles klaarstaan voor jullie aankomst.',
        [Language.DE]:
          'Das Hay House hat eine Soundanlage, und wir können Beamer und Leinwand bereitstellen. Whiteboards, Flipcharts und Post-its sind vorrätig. Sag uns dein Setup, und wir haben es vor eurer Ankunft bereit.',
        [Language.ES]:
          'El Hay House tiene equipo de sonido y podemos traer proyector y pantalla. Hay pizarras, rotafolios y post-its disponibles. Cuéntanos tu montaje y lo tendremos listo antes de que lleguéis.',
        [Language.FR]:
          'Le Hay House a une sonorisation et nous pouvons fournir un vidéoprojecteur et un écran. Tableaux blancs, paperboards et post-it sont en stock. Dis-nous ton dispositif et nous l’aurons prêt avant votre arrivée.',
      },
    },
    {
      question: {
        [Language.EN]: 'What about facilitators or coaches?',
        [Language.NL]: 'En hoe zit het met facilitators of coaches?',
        [Language.DE]: 'Und wie ist es mit Facilitators oder Coaches?',
        [Language.ES]: '¿Y los facilitadores o coaches?',
        [Language.FR]: 'Et pour les facilitateurs ou les coachs ?',
      },
      answer: {
        [Language.EN]:
          'We do not facilitate, but we work with a small network of facilitators and coaches in the Netherlands. We can introduce you to a few who fit your team’s shape.',
        [Language.NL]:
          'Wij faciliteren niet zelf, maar we werken met een klein netwerk van facilitators en coaches in Nederland. We kunnen je in contact brengen met enkelen die bij je team passen.',
        [Language.DE]:
          'Wir moderieren nicht selbst, aber wir arbeiten mit einem kleinen Netzwerk von Facilitators und Coaches in den Niederlanden. Wir vermitteln dich gern an einige, die zu deinem Team passen.',
        [Language.ES]:
          'No facilitamos nosotros mismos, pero trabajamos con una pequeña red de facilitadores y coaches en los Países Bajos. Podemos ponerte en contacto con algunos que encajen con tu equipo.',
        [Language.FR]:
          'Nous ne facilitons pas nous-mêmes, mais nous travaillons avec un petit réseau de facilitateurs et coachs aux Pays-Bas. Nous pouvons te mettre en contact avec quelques-uns qui correspondent à ton équipe.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the venue accessible by public transport?',
        [Language.NL]: 'Is de locatie bereikbaar met openbaar vervoer?',
        [Language.DE]: 'Ist der Ort mit öffentlichen Verkehrsmitteln erreichbar?',
        [Language.ES]: '¿Se puede llegar al lugar en transporte público?',
        [Language.FR]: 'Le lieu est-il accessible en transports en commun ?',
      },
      answer: {
        [Language.EN]:
          'Yes — Zwolle station is fifteen minutes by car or twenty minutes by bicycle. We arrange transfers for the team in one or two trips.',
        [Language.NL]:
          'Ja — station Zwolle is vijftien minuten met de auto of twintig minuten met de fiets. We regelen de transfer voor het team in één of twee ritten.',
        [Language.DE]:
          'Ja — der Bahnhof Zwolle ist fünfzehn Minuten mit dem Auto oder zwanzig Minuten mit dem Fahrrad entfernt. Wir organisieren die Transfers für das Team in ein oder zwei Fahrten.',
        [Language.ES]:
          'Sí — la estación de Zwolle está a quince minutos en coche o a veinte en bicicleta. Organizamos los traslados del equipo en uno o dos viajes.',
        [Language.FR]:
          'Oui — la gare de Zwolle est à quinze minutes en voiture ou à vingt minutes à vélo. Nous organisons les transferts de l’équipe en un ou deux trajets.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring the team to a place that does the logistics so they can do the thinking',
      [Language.NL]: 'Breng het team naar een plek die de logistiek regelt, zodat zij kunnen denken',
      [Language.DE]: 'Bring das Team an einen Ort, der die Logistik übernimmt, damit es denken kann',
      [Language.ES]: 'Lleva al equipo a un lugar que se ocupa de la logística para que ellos puedan pensar',
      [Language.FR]: 'Amène l’équipe dans un lieu qui s’occupe de la logistique pour qu’elle puisse réfléchir',
    },
    body: {
      [Language.EN]:
        'Tell us your team size, your dates, and roughly what kind of work you need to do. We will come back with a quote, a sample agenda, and a transfer plan.',
      [Language.NL]:
        'Vertel ons je teamgrootte, je data en ongeveer wat voor werk er gedaan moet worden. We komen terug met een offerte, een voorbeeldagenda en een transferplan.',
      [Language.DE]:
        'Sag uns deine Teamgröße, deine Daten und ungefähr, welche Art von Arbeit ihr machen müsst. Wir melden uns mit einem Angebot, einer Beispielagenda und einem Transferplan.',
      [Language.ES]:
        'Cuéntanos el tamaño del equipo, vuestras fechas y a grandes rasgos qué tipo de trabajo necesitáis hacer. Volvemos con un presupuesto, una agenda de ejemplo y un plan de traslados.',
      [Language.FR]:
        'Donne-nous la taille de l’équipe, tes dates et grosso modo le type de travail à faire. Nous revenons avec un devis, un exemple d’agenda et un plan de transferts.',
    },
  },
}
