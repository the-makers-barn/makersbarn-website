import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const COACHING_INTENSIVES_SILO: SiloContent = {
  slug: SiloSlug.COACHING_INTENSIVES,
  route: Route.COACHING_INTENSIVES,
  heroImageSrc: IMAGES.accommodation.hayHouseBench,
  heroImageAlt: {
    [Language.EN]: 'A bench at the Hay House at sunset',
    [Language.NL]: 'Een bank bij het Hay House bij zonsondergang',
    [Language.DE]: 'Eine Bank am Hay House bei Sonnenuntergang',
    [Language.ES]: 'Un banco junto al Hay House al atardecer',
    [Language.FR]: 'Un banc au Hay House au coucher du soleil',
  },
  meta: {
    title: {
      [Language.EN]: 'Coaching Intensive Venue for Cohort Programmes — Overijssel',
      [Language.NL]: 'Locatie voor coaching-intensieven & cohortprogramma’s — Overijssel',
      [Language.DE]: 'Ort für Coaching-Intensives & Kohortenprogramme — Overijssel',
      [Language.ES]: 'Espacio para intensivos de coaching y programas de cohorte — Overijssel',
      [Language.FR]: 'Lieu pour intensifs de coaching et programmes de cohortes — Overijssel',
    },
    description: {
      [Language.EN]:
        'A held venue for executive coaches and ICF-certified facilitators running 8–12 person cohort intensives. Workshop barn, full buyout, fifteen minutes from Zwolle.',
      [Language.NL]:
        'Een gedragen locatie voor executive coaches en ICF-gecertificeerde facilitators die intensieven van 8–12 personen leiden. Werkschuur, volledige buyout, vijftien minuten van Zwolle.',
      [Language.DE]:
        'Ein gehaltener Ort für Executive Coaches und ICF-zertifizierte Facilitator:innen, die Kohorten-Intensives für 8–12 Personen leiten. Workshop-Scheune, voller Buyout, fünfzehn Minuten von Zwolle.',
      [Language.ES]:
        'Un espacio sostenido para coaches ejecutivos y facilitadores certificados por ICF que dirigen intensivos de cohorte de 8 a 12 personas. Granero de trabajo, buyout completo, a quince minutos de Zwolle.',
      [Language.FR]:
        'Un lieu soutenu pour les coachs exécutifs et les facilitateurs certifiés ICF qui animent des intensifs de cohorte de 8 à 12 personnes. Grange de travail, buyout complet, à quinze minutes de Zwolle.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For executive coaches & cohort facilitators',
      [Language.NL]: 'Voor executive coaches & cohort-facilitators',
      [Language.DE]: 'Für Executive Coaches & Kohorten-Facilitator:innen',
      [Language.ES]: 'Para coaches ejecutivos y facilitadores de cohorte',
      [Language.FR]: 'Pour les coachs exécutifs et les facilitateurs de cohortes',
    },
    title: {
      [Language.EN]: 'A Held Venue for Coaching Intensives & Leadership Cohorts',
      [Language.NL]: 'Een gedragen locatie voor coaching-intensieven & leiderschapscohorten',
      [Language.DE]: 'Ein gehaltener Ort für Coaching-Intensives und Führungskohorten',
      [Language.ES]: 'Un espacio sostenido para intensivos de coaching y cohortes de liderazgo',
      [Language.FR]: 'Un lieu soutenu pour les intensifs de coaching et les cohortes de leadership',
    },
    subtitle: {
      [Language.EN]:
        'A workshop barn for the deep dyads, private rooms for the integration, and a venue that can hold the kind of conversation a hotel meeting room cannot.',
      [Language.NL]:
        'Een werkschuur voor de diepe duo-sessies, privékamers voor de integratie, en een locatie die het soort gesprek kan dragen dat een hotelvergaderzaal niet aankan.',
      [Language.DE]:
        'Eine Workshop-Scheune für die tiefen Dyaden, private Zimmer für die Integration, und ein Ort, der jene Art von Gespräch tragen kann, die ein Hotel-Meetingraum nicht trägt.',
      [Language.ES]:
        'Un granero de trabajo para las díadas profundas, habitaciones privadas para la integración, y un lugar capaz de sostener el tipo de conversación que una sala de reuniones de hotel no aguanta.',
      [Language.FR]:
        'Une grange de travail pour les dyades profondes, des chambres privées pour l’intégration, et un lieu capable de porter le type de conversation qu’une salle de réunion d’hôtel ne porte pas.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'The work after the workshop ends — held by a place that can hold it.',
      [Language.NL]:
        'Het werk dat begint waar de workshop eindigt — gedragen door een plek die dat aankan.',
      [Language.DE]:
        'Die Arbeit, die nach dem Workshop weitergeht — gehalten von einem Ort, der das tragen kann.',
      [Language.ES]:
        'El trabajo que empieza cuando el taller termina — sostenido por un lugar capaz de hacerlo.',
      [Language.FR]:
        'Le travail qui commence quand l’atelier finit — porté par un lieu capable de le porter.',
    },
    caption: {
      [Language.EN]:
        'Built for cohorts of eight to twelve, three to five days, residential.',
      [Language.NL]:
        'Geschikt voor cohorten van acht tot twaalf, drie tot vijf dagen, residentieel.',
      [Language.DE]:
        'Gemacht für Kohorten von acht bis zwölf, drei bis fünf Tage, mit Übernachtung.',
      [Language.ES]:
        'Pensado para cohortes de ocho a doce, de tres a cinco días, en régimen residencial.',
      [Language.FR]:
        'Conçu pour des cohortes de huit à douze, trois à cinq jours, en résidentiel.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A workshop space that respects what coaching asks of a room',
        [Language.NL]: 'Een werkruimte die respecteert wat coaching van een ruimte vraagt',
        [Language.DE]: 'Ein Workshop-Raum, der respektiert, was Coaching von einem Raum verlangt',
        [Language.ES]: 'Un espacio de trabajo que respeta lo que el coaching le pide a una sala',
        [Language.FR]: 'Un espace de travail qui respecte ce que le coaching demande à une salle',
      },
      body: {
        [Language.EN]: [
          'The Hay House barn is sixty-five square metres of heated wooden floor under a wooden ceiling. Acoustics carry a quiet voice. Light is dimmable and shifts with the day. There is no hum from a corporate HVAC system on the other side of a wall, because there is no other side of a wall.',
          'For dyads and triads we set up the barn with movable seating. For full-circle work we run a single ring of twelve. For one-to-one supervision sessions, the Cosmos cabin and the teahouse are both private and ten metres apart.',
        ],
        [Language.NL]: [
          'De Hay House-schuur is vijfenzestig vierkante meter verwarmde houten vloer onder een houten plafond. De akoestiek draagt een rustige stem. Het licht is dimbaar en verandert met de dag. Er is geen gebrom van een corporate-HVAC-systeem aan de andere kant van een muur, omdat er geen andere kant van een muur is.',
          'Voor duo’s en trio’s richten we de schuur in met verplaatsbare zitplaatsen. Voor full-circle werk draaien we één ring van twaalf. Voor één-op-één-supervisiesessies zijn de Cosmos cabin en het theehuis allebei privé en tien meter uit elkaar.',
        ],
        [Language.DE]: [
          'Die Hay House-Scheune sind fünfundsechzig Quadratmeter beheizter Holzboden unter einer Holzdecke. Die Akustik trägt eine leise Stimme. Das Licht ist dimmbar und verändert sich mit dem Tag. Es gibt kein Brummen einer Konzern-HVAC-Anlage hinter einer Wand, weil es keine andere Seite einer Wand gibt.',
          'Für Dyaden und Triaden richten wir die Scheune mit beweglicher Bestuhlung ein. Für Vollkreis-Arbeit machen wir einen einzigen Ring aus zwölf. Für Eins-zu-Eins-Supervisionssitzungen sind die Cosmos-Hütte und das Teehaus beide privat und zehn Meter voneinander entfernt.',
        ],
        [Language.ES]: [
          'El granero del Hay House son sesenta y cinco metros cuadrados de suelo de madera con calefacción bajo un techo de madera. La acústica recoge una voz tranquila. La luz es regulable y cambia con el día. No hay zumbido de un sistema HVAC corporativo al otro lado de una pared, porque no hay otro lado de una pared.',
          'Para díadas y tríadas montamos el granero con asientos móviles. Para el trabajo en círculo completo formamos un solo anillo de doce. Para sesiones de supervisión uno a uno, la Cosmos cabin y la casa de té son ambas privadas y están a diez metros la una de la otra.',
        ],
        [Language.FR]: [
          'La grange du Hay House, c’est soixante-cinq mètres carrés de sol en bois chauffé sous un plafond en bois. L’acoustique porte une voix calme. La lumière est variable et change avec la journée. Il n’y a pas de bourdonnement d’un système HVAC d’entreprise de l’autre côté d’un mur, parce qu’il n’y a pas d’autre côté de mur.',
          'Pour les dyades et les triades, nous installons la grange avec des sièges mobiles. Pour le travail en cercle entier, nous faisons un seul anneau de douze. Pour les sessions de supervision en tête-à-tête, la Cosmos cabin et la maison de thé sont toutes deux privées et distantes de dix mètres.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House workshop barn glowing in evening light',
        [Language.NL]: 'Hay House-werkschuur in het avondlicht',
        [Language.DE]: 'Hay House-Workshop-Scheune im Abendlicht',
        [Language.ES]: 'Granero de trabajo Hay House con luz vespertina',
        [Language.FR]: 'Grange de travail Hay House dans la lumière du soir',
      },
    },
    {
      h2: {
        [Language.EN]: 'For programmes that need to come back four times a year',
        [Language.NL]: 'Voor programma’s die vier keer per jaar terugkomen',
        [Language.DE]: 'Für Programme, die viermal im Jahr zurückkommen müssen',
        [Language.ES]: 'Para programas que necesitan volver cuatro veces al año',
        [Language.FR]: 'Pour les programmes qui doivent revenir quatre fois par an',
      },
      body: {
        [Language.EN]: [
          'Coaching cohorts often run as a six- or twelve-month programme with quarterly residentials. We hold recurring dates a year out and keep the cohort’s notes, materials, and even rituals — like the way one of our regular programmes opens with a circle the lead coach builds in advance — between visits.',
          'Pricing for the second and third return is something we can negotiate openly. We would rather be the venue your cohort comes back to than the cheapest one for the first booking.',
        ],
        [Language.NL]: [
          'Coaching-cohorten draaien vaak als een programma van zes of twaalf maanden met kwartaalresidentials. We reserveren terugkerende data een jaar van tevoren en bewaren tussen bezoeken door de notities, materialen en zelfs rituelen van het cohort — zoals de manier waarop één van onze terugkerende programma’s opent met een cirkel die de hoofdcoach van tevoren opbouwt.',
          'De prijs voor de tweede en derde terugkomst kunnen we open bespreken. We zijn liever de locatie waar je cohort naar terugkomt dan de goedkoopste bij de eerste boeking.',
        ],
        [Language.DE]: [
          'Coaching-Kohorten laufen oft als sechs- oder zwölfmonatiges Programm mit vierteljährlichen Residentials. Wir halten wiederkehrende Termine ein Jahr im Voraus und bewahren zwischen den Besuchen Notizen, Materialien und sogar Rituale der Kohorte auf — etwa die Art, wie eines unserer regelmäßigen Programme mit einem Kreis öffnet, den der Lead-Coach vorher aufbaut.',
          'Über die Preise für den zweiten und dritten Aufenthalt können wir offen verhandeln. Wir sind lieber der Ort, zu dem deine Kohorte zurückkommt, als der billigste für die erste Buchung.',
        ],
        [Language.ES]: [
          'Las cohortes de coaching suelen funcionar como un programa de seis o doce meses con residenciales trimestrales. Reservamos fechas recurrentes con un año de antelación y guardamos entre visitas las notas, los materiales e incluso los rituales de la cohorte — como la forma en que uno de nuestros programas habituales abre con un círculo que el coach principal monta de antemano.',
          'El precio para la segunda y tercera vuelta lo podemos negociar abiertamente. Preferimos ser el lugar al que tu cohorte vuelve, antes que el más barato en la primera reserva.',
        ],
        [Language.FR]: [
          'Les cohortes de coaching fonctionnent souvent comme un programme de six ou douze mois avec des résidentiels trimestriels. Nous réservons des dates récurrentes un an à l’avance et conservons entre les visites les notes, les supports et même les rituels de la cohorte — comme la manière dont l’un de nos programmes habituels s’ouvre par un cercle que le coach principal prépare à l’avance.',
          'Le tarif pour le deuxième et le troisième retour, on peut en discuter ouvertement. Nous préférons être le lieu où ta cohorte revient plutôt que le moins cher à la première réservation.',
        ],
      },
      imageSrc: IMAGES.accommodation.atticChill,
      imageAlt: {
        [Language.EN]: 'Comfortable shared chill space for cohort breakouts',
        [Language.NL]: 'Comfortabele gedeelde chill-ruimte voor cohort-breakouts',
        [Language.DE]: 'Gemütlicher gemeinsamer Chill-Raum für Kohorten-Breakouts',
        [Language.ES]: 'Espacio compartido y cómodo para los breakouts de la cohorte',
        [Language.FR]: 'Espace de détente partagé et confortable pour les sous-groupes de cohorte',
      },
    },
    {
      h2: {
        [Language.EN]: 'Sleeping arrangements that respect the work being done',
        [Language.NL]: 'Slaapindeling die het werk respecteert',
        [Language.DE]: 'Schlafarrangements, die die Arbeit respektieren',
        [Language.ES]: 'Distribución para dormir que respeta el trabajo en curso',
        [Language.FR]: 'Une organisation des couchages qui respecte le travail en cours',
      },
      body: {
        [Language.EN]: [
          'Most coaching cohorts ask for as many private rooms as possible. Horizon has a mix of single, twin, and shared rooms — we can give the lead coach the Cosmos cabin, six private rooms in Horizon, and the rest as twins. For groups of eight, everyone can sleep alone.',
          'There is a reason the work needs that. We respect it.',
        ],
        [Language.NL]: [
          'De meeste coaching-cohorten vragen om zoveel mogelijk eigen kamers. Horizon heeft een mix van eenpersoons-, tweepersoons- en gedeelde kamers — we kunnen de hoofdcoach de Cosmos cabin geven, zes eigen kamers in Horizon, en de rest als tweepersoons. Voor groepen van acht kan iedereen alleen slapen.',
          'Daar is een reden voor — die het werk zelf vraagt. Die respecteren wij.',
        ],
        [Language.DE]: [
          'Die meisten Coaching-Kohorten bitten um so viele private Zimmer wie möglich. Horizon hat eine Mischung aus Einzel-, Doppel- und Mehrbettzimmern — wir können dem Lead-Coach die Cosmos-Hütte geben, sechs Einzelzimmer in Horizon und den Rest als Doppelzimmer. Bei Gruppen von acht kann jede:r allein schlafen.',
          'Es gibt einen Grund, warum die Arbeit das braucht. Den respektieren wir.',
        ],
        [Language.ES]: [
          'La mayoría de las cohortes de coaching piden tantas habitaciones privadas como sea posible. Horizon tiene una mezcla de individuales, dobles y compartidas — al coach principal le podemos dar la Cosmos cabin, seis habitaciones privadas en Horizon, y el resto como dobles. En grupos de ocho, todo el mundo puede dormir solo.',
          'Hay una razón por la que el trabajo lo necesita. La respetamos.',
        ],
        [Language.FR]: [
          'La plupart des cohortes de coaching demandent autant de chambres privées que possible. Horizon a un mélange de chambres simples, doubles et partagées — nous pouvons donner au coach principal la Cosmos cabin, six chambres privées dans Horizon, et le reste en doubles. Pour des groupes de huit, chacun peut dormir seul.',
          'Il y a une raison à cela — le travail lui-même le demande. Nous la respectons.',
        ],
      },
      imageSrc: IMAGES.accommodation.singleBedWithWood,
      imageAlt: {
        [Language.EN]: 'Quiet single bedroom with wooden walls',
        [Language.NL]: 'Rustige eenpersoonskamer met houten wanden',
        [Language.DE]: 'Ruhiges Einzelzimmer mit Holzwänden',
        [Language.ES]: 'Habitación individual tranquila con paredes de madera',
        [Language.FR]: 'Chambre simple paisible aux murs en bois',
      },
    },
  ],
  facts: [
    {
      number: '8–12',
      description: {
        [Language.EN]: 'Cohort size — full buyout, no other groups',
        [Language.NL]: 'Cohortgrootte — volledige buyout, geen andere groepen',
        [Language.DE]: 'Kohortengröße — voller Buyout, keine anderen Gruppen',
        [Language.ES]: 'Tamaño de cohorte — buyout completo, sin otros grupos',
        [Language.FR]: 'Taille de cohorte — buyout complet, pas d’autres groupes',
      },
    },
    {
      number: '4×/yr',
      description: {
        [Language.EN]: 'Recurring dates — we hold quarterly bookings a year ahead',
        [Language.NL]: 'Terugkerende data — we reserveren kwartaalboekingen een jaar vooruit',
        [Language.DE]: 'Wiederkehrende Termine — wir reservieren Quartalsbuchungen ein Jahr im Voraus',
        [Language.ES]: 'Fechas recurrentes — reservamos las citas trimestrales con un año de antelación',
        [Language.FR]: 'Dates récurrentes — nous réservons les rendez-vous trimestriels un an à l’avance',
      },
    },
    {
      number: '1h15',
      description: {
        [Language.EN]: 'By train from Schiphol — easy to fly the cohort in',
        [Language.NL]: 'Met de trein vanaf Schiphol — handig als het cohort invliegt',
        [Language.DE]: 'Mit dem Zug ab Schiphol — leicht, die Kohorte einfliegen zu lassen',
        [Language.ES]: 'En tren desde Schiphol — fácil para que la cohorte llegue en avión',
        [Language.FR]: 'En train depuis Schiphol — facile pour faire venir la cohorte en avion',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Do you accommodate confidentiality requirements?',
        [Language.NL]: 'Houden jullie rekening met vertrouwelijkheid?',
        [Language.DE]: 'Berücksichtigt ihr Vertraulichkeitsanforderungen?',
        [Language.ES]: '¿Atendéis los requisitos de confidencialidad?',
        [Language.FR]: 'Tenez-vous compte des exigences de confidentialité ?',
      },
      answer: {
        [Language.EN]:
          'Yes. Full venue buyout means no other guests overhear. Our team stays out of the practice barn during sessions unless asked. We can sign cohort-specific NDAs if your programme requires it.',
        [Language.NL]:
          'Ja. Volledige buyout betekent dat geen andere gasten meeluisteren. Ons team blijft tijdens sessies uit de werkschuur, tenzij anders gevraagd. We tekenen cohort-specifieke geheimhoudingsverklaringen als je programma daarom vraagt.',
        [Language.DE]:
          'Ja. Voller Buyout heißt: keine anderen Gäste, die mithören. Unser Team bleibt während der Sitzungen aus der Werkscheune heraus, außer es wird darum gebeten. Wir unterzeichnen kohortenspezifische NDAs, wenn dein Programm das verlangt.',
        [Language.ES]:
          'Sí. El buyout completo significa que no hay otros huéspedes que puedan oír. Nuestro equipo se mantiene fuera del granero de práctica durante las sesiones salvo que pidas otra cosa. Firmamos NDAs específicos de la cohorte si tu programa lo requiere.',
        [Language.FR]:
          'Oui. Le buyout complet signifie qu’aucun autre invité n’écoute. Notre équipe reste hors de la grange de pratique pendant les sessions, sauf demande contraire. Nous signons des NDAs propres à la cohorte si ton programme l’exige.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we recur quarterly with the same cohort?',
        [Language.NL]: 'Kunnen we elk kwartaal terugkomen met hetzelfde cohort?',
        [Language.DE]: 'Können wir vierteljährlich mit derselben Kohorte zurückkehren?',
        [Language.ES]: '¿Podemos volver cada trimestre con la misma cohorte?',
        [Language.FR]: 'Pouvons-nous revenir chaque trimestre avec la même cohorte ?',
      },
      answer: {
        [Language.EN]:
          'Yes — this is one of our most repeated booking patterns. We hold the four dates at booking, lock them in, and offer recurring-cohort pricing.',
        [Language.NL]:
          'Ja — dit is één van onze meest herhaalde boekingspatronen. We reserveren de vier data bij boeking, leggen ze vast, en bieden tarieven voor terugkerende cohorten.',
        [Language.DE]:
          'Ja — das ist eines unserer häufigsten Buchungsmuster. Wir halten die vier Termine bei der Buchung fest, sperren sie ein und bieten Preise für wiederkehrende Kohorten an.',
        [Language.ES]:
          'Sí — es uno de nuestros patrones de reserva más habituales. Bloqueamos las cuatro fechas en el momento de la reserva y ofrecemos tarifas para cohortes recurrentes.',
        [Language.FR]:
          'Oui — c’est l’un de nos schémas de réservation les plus fréquents. Nous bloquons les quatre dates au moment de la réservation et proposons un tarif pour cohortes récurrentes.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you do invoicing for executive education clients?',
        [Language.NL]: 'Verzorgen jullie de facturering voor executive-education-klanten?',
        [Language.DE]: 'Übernehmt ihr die Rechnungsstellung für Executive-Education-Kund:innen?',
        [Language.ES]: '¿Os encargáis de la facturación para clientes de executive education?',
        [Language.FR]: 'Gérez-vous la facturation pour les clients d’executive education ?',
      },
      answer: {
        [Language.EN]:
          'Yes. We can invoice the coaching firm directly, the participating company on a per-seat basis, or split. VAT handled correctly for EU and non-EU.',
        [Language.NL]:
          'Ja. We kunnen rechtstreeks aan de coachingfirma factureren, aan het deelnemende bedrijf per deelnemer, of een splitsing maken. BTW wordt correct verwerkt voor EU en niet-EU.',
        [Language.DE]:
          'Ja. Wir können direkt an die Coaching-Firma fakturieren, an das teilnehmende Unternehmen pro Platz oder die Rechnung aufteilen. Mehrwertsteuer wird korrekt für EU und Nicht-EU behandelt.',
        [Language.ES]:
          'Sí. Podemos facturar directamente a la firma de coaching, a la empresa participante por plaza, o repartido. El IVA se gestiona correctamente para la UE y fuera de la UE.',
        [Language.FR]:
          'Oui. Nous pouvons facturer directement le cabinet de coaching, l’entreprise participante au siège, ou répartir. La TVA est traitée correctement pour l’UE et hors UE.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the venue accessible for international cohorts?',
        [Language.NL]: 'Is de locatie toegankelijk voor internationale cohorten?',
        [Language.DE]: 'Ist der Ort für internationale Kohorten gut erreichbar?',
        [Language.ES]: '¿Es accesible el lugar para cohortes internacionales?',
        [Language.FR]: 'Le lieu est-il accessible pour des cohortes internationales ?',
      },
      answer: {
        [Language.EN]:
          'Yes — Schiphol is one hour fifteen by train. We arrange transfers from Zwolle for the cohort and can coordinate with hotels in Zwolle for early arrivals.',
        [Language.NL]:
          'Ja — Schiphol ligt op een uur en een kwartier met de trein. We regelen transfers vanaf Zwolle voor het cohort en kunnen afstemmen met hotels in Zwolle voor wie eerder aankomt.',
        [Language.DE]:
          'Ja — Schiphol ist eine Stunde fünfzehn mit dem Zug entfernt. Wir organisieren Transfers von Zwolle für die Kohorte und können uns mit Hotels in Zwolle für frühe Anreisen abstimmen.',
        [Language.ES]:
          'Sí — Schiphol está a una hora y cuarto en tren. Organizamos los traslados desde Zwolle para la cohorte y podemos coordinar con hoteles en Zwolle para quienes lleguen antes.',
        [Language.FR]:
          'Oui — Schiphol est à une heure quinze en train. Nous organisons les transferts depuis Zwolle pour la cohorte et pouvons coordonner avec des hôtels à Zwolle pour celles et ceux qui arrivent plus tôt.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your cohort to a venue that gets out of the work’s way',
      [Language.NL]: 'Breng je cohort naar een locatie die het werk niet in de weg zit',
      [Language.DE]: 'Bring deine Kohorte an einen Ort, der der Arbeit aus dem Weg geht',
      [Language.ES]: 'Lleva a tu cohorte a un lugar que se aparta del camino del trabajo',
      [Language.FR]: 'Amène ta cohorte dans un lieu qui s’efface devant le travail',
    },
    body: {
      [Language.EN]:
        'Tell us your dates, your cohort size, and whether this is a one-off or part of a recurring programme. We will come back with availability and a quote within two working days.',
      [Language.NL]:
        'Vertel ons je data, je cohortgrootte en of dit een eenmalige boeking is of onderdeel van een terugkerend programma. We komen binnen twee werkdagen terug met beschikbaarheid en een offerte.',
      [Language.DE]:
        'Erzähl uns deine Daten, deine Kohortengröße und ob das eine einmalige Sache oder Teil eines wiederkehrenden Programms ist. Wir melden uns innerhalb von zwei Werktagen mit Verfügbarkeit und einem Angebot zurück.',
      [Language.ES]:
        'Cuéntanos tus fechas, el tamaño de tu cohorte y si esto es algo puntual o parte de un programa recurrente. Te responderemos en dos días laborables con disponibilidad y presupuesto.',
      [Language.FR]:
        'Dis-nous tes dates, la taille de ta cohorte et s’il s’agit d’un projet ponctuel ou d’un programme récurrent. Nous reviendrons sous deux jours ouvrés avec les disponibilités et un devis.',
    },
  },
}
