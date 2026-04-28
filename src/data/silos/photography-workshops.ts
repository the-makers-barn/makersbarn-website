import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const PHOTOGRAPHY_WORKSHOPS_SILO: SiloContent = {
  slug: SiloSlug.PHOTOGRAPHY_WORKSHOPS,
  route: Route.PHOTOGRAPHY_WORKSHOPS,
  heroImageSrc: IMAGES.accommodation.gardenViewWithHammocks,
  heroImageAlt: {
    [Language.EN]: 'Wide garden view with hammocks at The Makers Barn',
    [Language.NL]: 'Wijds tuinzicht met hangmatten bij The Makers Barn',
    [Language.DE]: 'Weiter Gartenblick mit Hängematten bei The Makers Barn',
    [Language.ES]: 'Vista amplia del jardín con hamacas en The Makers Barn',
    [Language.FR]: 'Vue large du jardin avec hamacs à The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Photography Workshop Venue — Overijssel, Netherlands',
      [Language.NL]: 'Locatie voor fotografie-workshops — Overijssel, Nederland',
      [Language.DE]: 'Ort für Fotografie-Workshops — Overijssel, Niederlande',
      [Language.ES]: 'Lugar para talleres de fotografía — Overijssel, Países Bajos',
      [Language.FR]: 'Lieu pour ateliers de photographie — Overijssel, Pays-Bas',
    },
    description: {
      [Language.EN]:
        'A 1.3-hectare farm in Overijssel for pro photographers running multi-day workshops. Big skies, planted woodland, the Sallandse Heuvelrug nearby, accommodation for the cohort.',
      [Language.NL]:
        'Een boerderij van 1,3 hectare in Overijssel voor professionele fotografen die meerdaagse workshops leiden. Grote luchten, aangeplant bos, de Sallandse Heuvelrug op een steenworp, accommodatie voor het cohort.',
      [Language.DE]:
        'Ein Hof von 1,3 Hektar in Overijssel für Profifotografen, die mehrtägige Workshops leiten. Weite Himmel, gepflanzter Wald, die Sallandse Heuvelrug in der Nähe, Unterkunft für die Gruppe.',
      [Language.ES]:
        'Una finca de 1,3 hectáreas en Overijssel para fotógrafos profesionales que dirigen talleres de varios días. Grandes cielos, bosque plantado, el Sallandse Heuvelrug a un paso, alojamiento para todo el grupo.',
      [Language.FR]:
        'Une ferme de 1,3 hectares en Overijssel pour photographes pros qui animent des ateliers sur plusieurs jours. Grands ciels, bois planté, le Sallandse Heuvelrug à proximité, hébergement pour tout le groupe.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For professional photographers',
      [Language.NL]: 'Voor professionele fotografen',
      [Language.DE]: 'Für professionelle Fotografen',
      [Language.ES]: 'Para fotógrafos profesionales',
      [Language.FR]: 'Pour photographes professionnels',
    },
    title: {
      [Language.EN]: 'A Workshop Base for Multi-Day Photography Retreats',
      [Language.NL]: 'Een werkbasis voor meerdaagse fotografie-retraites',
      [Language.DE]: 'Eine Basis für mehrtägige Fotografie-Retreats',
      [Language.ES]: 'Una base de trabajo para retiros de fotografía de varios días',
      [Language.FR]: 'Une base de travail pour des retraites photo de plusieurs jours',
    },
    subtitle: {
      [Language.EN]:
        'Big skies, twelve hundred trees we planted, the IJssel river ten minutes away. A base camp that handles the bedding, the meals, and the dark room you will need at the end of each day.',
      [Language.NL]:
        'Grote luchten, twaalfhonderd bomen die we hebben geplant, de IJssel op tien minuten. Een basis die het beddengoed, de maaltijden en de donkere kamer regelt die je aan het einde van elke dag nodig hebt.',
      [Language.DE]:
        'Weite Himmel, zwölfhundert Bäume, die wir gepflanzt haben, die IJssel zehn Minuten entfernt. Ein Basislager, das Bettwäsche, Mahlzeiten und den Dunkelraum übernimmt, den du am Ende jedes Tages brauchst.',
      [Language.ES]:
        'Grandes cielos, mil doscientos árboles que plantamos, el río IJssel a diez minutos. Un campamento base que se ocupa de la ropa de cama, las comidas y la sala oscura que necesitarás al final de cada día.',
      [Language.FR]:
        'Grands ciels, mille deux cents arbres que nous avons plantés, l’IJssel à dix minutes. Un camp de base qui s’occupe du linge, des repas et de la chambre noire dont tu auras besoin à la fin de chaque journée.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A subject for the morning, a base for the afternoon, a long table for the evening edit.',
      [Language.NL]:
        'Een onderwerp voor de ochtend, een basis voor de middag, een lange tafel voor de avondbewerking.',
      [Language.DE]:
        'Ein Motiv für den Morgen, eine Basis für den Nachmittag, ein langer Tisch für den Edit am Abend.',
      [Language.ES]:
        'Un tema para la mañana, una base para la tarde, una mesa larga para la edición de la noche.',
      [Language.FR]:
        'Un sujet pour le matin, une base pour l’après-midi, une longue table pour l’édition du soir.',
    },
    caption: {
      [Language.EN]:
        'Built for cohorts of six to twelve, three to seven days, residential.',
      [Language.NL]:
        'Geschikt voor cohorten van zes tot twaalf, drie tot zeven dagen, residentieel.',
      [Language.DE]:
        'Gemacht für Gruppen von sechs bis zwölf, drei bis sieben Tage, mit Übernachtung.',
      [Language.ES]:
        'Pensado para grupos de seis a doce, de tres a siete días, en régimen residencial.',
      [Language.FR]:
        'Conçu pour des groupes de six à douze, de trois à sept jours, en résidentiel.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'Subjects in walking distance — and a horizon when you need one',
        [Language.NL]: 'Onderwerpen op loopafstand — en een horizon als je die nodig hebt',
        [Language.DE]: 'Motive in Gehweite — und ein Horizont, wenn du einen brauchst',
        [Language.ES]: 'Temas a distancia caminable — y un horizonte cuando lo necesitas',
        [Language.FR]: 'Des sujets à distance de marche — et un horizon quand tu en as besoin',
      },
      body: {
        [Language.EN]: [
          'On the farm itself: twelve hundred planted trees, a swimming pond, a thatched teahouse, the Hay House barn at golden hour. Within a five-minute drive: the IJssel river, a 17th-century castle (Kasteel Nijenhuis) with a sculpture garden, working dairy farms, and the long Salland horizon.',
          'Within thirty minutes: the Sallandse Heuvelrug national park for landscape work, three Hanseatic towns for street photography, and the heath if your workshop needs heather in bloom.',
        ],
        [Language.NL]: [
          'Op de boerderij zelf: twaalfhonderd aangeplante bomen, een zwemvijver, een rieten theehuis, de Hay House-schuur op het gouden uur. Binnen vijf minuten met de auto: de IJssel, een 17e-eeuws kasteel (Kasteel Nijenhuis) met een beeldentuin, werkende melkveebedrijven, en de lange Salland-horizon.',
          'Binnen dertig minuten: het Nationaal Park Sallandse Heuvelrug voor landschapswerk, drie Hanzesteden voor straatfotografie, en de heide als je workshop bloeiende heide nodig heeft.',
        ],
        [Language.DE]: [
          'Auf dem Hof selbst: zwölfhundert gepflanzte Bäume, ein Schwimmteich, ein reetgedecktes Teehaus, die Hay House-Scheune zur goldenen Stunde. Fünf Autominuten entfernt: die IJssel, ein Schloss aus dem 17. Jahrhundert (Kasteel Nijenhuis) mit Skulpturengarten, aktive Milchhöfe und der weite Salland-Horizont.',
          'Innerhalb von dreißig Minuten: der Nationalpark Sallandse Heuvelrug für Landschaftsarbeit, drei Hansestädte für Straßenfotografie, und die Heide, wenn dein Workshop blühende Heide braucht.',
        ],
        [Language.ES]: [
          'En la propia finca: mil doscientos árboles plantados, un estanque de natación, una casa de té con techo de paja, el granero Hay House en la hora dorada. A cinco minutos en coche: el río IJssel, un castillo del siglo XVII (Kasteel Nijenhuis) con jardín de esculturas, granjas lecheras en activo y el largo horizonte de Salland.',
          'En treinta minutos: el parque nacional Sallandse Heuvelrug para trabajo de paisaje, tres ciudades hanseáticas para fotografía callejera y el brezal si tu taller necesita brezo en flor.',
        ],
        [Language.FR]: [
          'Sur la ferme elle-même : mille deux cents arbres plantés, un étang de baignade, une maison de thé au toit de chaume, la grange Hay House à l’heure dorée. À cinq minutes en voiture : l’IJssel, un château du XVIIe siècle (Kasteel Nijenhuis) avec un jardin de sculptures, des fermes laitières en activité, et le long horizon de Salland.',
          'À trente minutes : le parc national Sallandse Heuvelrug pour le travail de paysage, trois villes hanséatiques pour la photo de rue, et la lande si ton atelier a besoin de bruyère en fleur.',
        ],
      },
      imageSrc: IMAGES.location.kasteelNijenhuis,
      imageAlt: {
        [Language.EN]: 'Kasteel Nijenhuis castle with sculpture gardens',
        [Language.NL]: 'Kasteel Nijenhuis met beeldentuinen',
        [Language.DE]: 'Schloss Kasteel Nijenhuis mit Skulpturengärten',
        [Language.ES]: 'Castillo Kasteel Nijenhuis con jardines de esculturas',
        [Language.FR]: 'Château Kasteel Nijenhuis avec jardins de sculptures',
      },
    },
    {
      h2: {
        [Language.EN]: 'A barn that becomes a daily review room',
        [Language.NL]: 'Een schuur die een dagelijkse reviewruimte wordt',
        [Language.DE]: 'Eine Scheune, die zum täglichen Review-Raum wird',
        [Language.ES]: 'Un granero que se convierte en sala de revisión diaria',
        [Language.FR]: 'Une grange qui devient une salle de revue quotidienne',
      },
      body: {
        [Language.EN]: [
          'The Hay House practice barn turns into your evening review space. Sound system, dimmable light, big wall projection if you bring a projector, and seating for the cohort. Most photography workshops use it for the daily critique session and the technique demonstrations the morning shoots build on.',
          'The kitchen on the second floor of Horizon doubles as the editing room — long table, plenty of outlets, fibre internet for cloud workflows.',
        ],
        [Language.NL]: [
          'De Hay House-praktijkruimte wordt je reviewruimte voor de avond. Geluidssysteem, dimbare verlichting, grote muurprojectie als je een beamer meebrengt, en zitplaatsen voor het cohort. De meeste fotografie-workshops gebruiken hem voor de dagelijkse critique-sessie en de techniekdemonstraties waar de ochtendshoots op voortbouwen.',
          'De keuken op de tweede verdieping van Horizon fungeert als editingruimte — lange tafel, voldoende stopcontacten, glasvezelinternet voor cloud-workflows.',
        ],
        [Language.DE]: [
          'Die Praxisscheune Hay House wird zu eurem Review-Raum am Abend. Soundsystem, dimmbares Licht, große Wandprojektion, wenn du einen Beamer mitbringst, und Sitzplätze für die Gruppe. Die meisten Fotografie-Workshops nutzen sie für die tägliche Critique-Session und die Technik-Demos, auf denen die Morgenshoots aufbauen.',
          'Die Küche im zweiten Stock von Horizon dient zugleich als Editing-Raum — langer Tisch, genug Steckdosen, Glasfaserinternet für Cloud-Workflows.',
        ],
        [Language.ES]: [
          'El granero de práctica Hay House se convierte en tu sala de revisión nocturna. Sistema de sonido, luz regulable, gran proyección en pared si traes un proyector, y asientos para todo el grupo. La mayoría de los talleres de fotografía lo usan para la sesión de crítica diaria y las demostraciones técnicas sobre las que se construyen los shoots de la mañana.',
          'La cocina de la segunda planta de Horizon hace también de sala de edición — mesa larga, muchos enchufes, internet por fibra para flujos en la nube.',
        ],
        [Language.FR]: [
          'La grange de pratique Hay House devient ta salle de revue du soir. Système son, lumière variable, grande projection murale si tu apportes un projecteur, et des places assises pour tout le groupe. La plupart des ateliers photo l’utilisent pour la session de critique quotidienne et les démos techniques sur lesquelles s’appuient les prises de vue du matin.',
          'La cuisine au deuxième étage de Horizon fait aussi office de salle d’édition — longue table, beaucoup de prises, internet en fibre pour les workflows cloud.',
        ],
      },
      imageSrc: IMAGES.accommodation.horizonKitchen,
      imageAlt: {
        [Language.EN]: 'Horizon barn kitchen — long table, good light',
        [Language.NL]: 'Horizon-schuur keuken — lange tafel, goed licht',
        [Language.DE]: 'Küche der Horizon-Scheune — langer Tisch, gutes Licht',
        [Language.ES]: 'Cocina del granero Horizon — mesa larga, buena luz',
        [Language.FR]: 'Cuisine de la grange Horizon — longue table, belle lumière',
      },
    },
    {
      h2: {
        [Language.EN]: 'Sunrises that justify the early call time',
        [Language.NL]: 'Zonsopkomsten die het vroege opstaan waard zijn',
        [Language.DE]: 'Sonnenaufgänge, die das frühe Aufstehen rechtfertigen',
        [Language.ES]: 'Amaneceres que justifican el madrugón',
        [Language.FR]: 'Des levers de soleil qui justifient le réveil aux aurores',
      },
      body: {
        [Language.EN]: [
          'For workshops that build around blue-hour and golden-hour shoots, we open the kitchen at the time you tell us. Pre-shoot coffee at 4:45 AM is a normal request. Post-shoot brunch at 11 AM is the natural counterpart.',
          'In December the sun rises late enough that everyone gets a proper night’s sleep. In June, the early light is worth the alarm — and the sauna at 22:00 is worth the long day.',
        ],
        [Language.NL]: [
          'Voor workshops die zich richten op blauwe-uur- en gouden-uur-shoots openen we de keuken op het tijdstip dat jij doorgeeft. Pre-shoot koffie om 4.45 uur is een normaal verzoek. Post-shoot brunch om 11.00 uur is de natuurlijke tegenhanger.',
          'In december komt de zon laat genoeg op dat iedereen behoorlijk uitslaapt. In juni is het vroege licht de wekker waard — en de sauna om 22.00 uur de lange dag.',
        ],
        [Language.DE]: [
          'Für Workshops rund um Blaue-Stunde- und Goldene-Stunde-Shoots öffnen wir die Küche zu der Zeit, die du uns nennst. Pre-Shoot-Kaffee um 4:45 Uhr ist eine normale Anfrage. Post-Shoot-Brunch um 11:00 Uhr ist das natürliche Gegenstück.',
          'Im Dezember geht die Sonne spät genug auf, dass alle ordentlich schlafen. Im Juni ist das frühe Licht den Wecker wert — und die Sauna um 22:00 Uhr den langen Tag.',
        ],
        [Language.ES]: [
          'Para talleres construidos en torno a la hora azul y la hora dorada, abrimos la cocina a la hora que nos digas. Café antes del shoot a las 4:45 AM es una petición normal. Brunch después del shoot a las 11 AM es su contrapartida natural.',
          'En diciembre el sol sale lo bastante tarde como para que todos duerman bien. En junio, la luz temprana vale la alarma — y la sauna a las 22:00 vale el día largo.',
        ],
        [Language.FR]: [
          'Pour les ateliers construits autour de l’heure bleue et de l’heure dorée, nous ouvrons la cuisine à l’heure que tu nous indiques. Café avant la prise de vue à 4 h 45 est une demande normale. Brunch après la prise de vue à 11 h en est la contrepartie naturelle.',
          'En décembre, le soleil se lève assez tard pour que tout le monde dorme correctement. En juin, la lumière du petit matin vaut le réveil — et le sauna à 22 h vaut la longue journée.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House barn at the golden hour',
        [Language.NL]: 'Hay House-schuur op het gouden uur',
        [Language.DE]: 'Hay House-Scheune zur goldenen Stunde',
        [Language.ES]: 'Granero Hay House en la hora dorada',
        [Language.FR]: 'Grange Hay House à l’heure dorée',
      },
    },
  ],
  facts: [
    {
      number: '6–12',
      description: {
        [Language.EN]: 'Cohort size — small enough for one-to-one feedback per day',
        [Language.NL]: 'Cohortgrootte — klein genoeg voor één-op-één feedback per dag',
        [Language.DE]: 'Gruppengröße — klein genug für tägliches Eins-zu-eins-Feedback',
        [Language.ES]: 'Tamaño del grupo — pequeño para feedback individual cada día',
        [Language.FR]: 'Taille du groupe — assez restreinte pour un feedback individuel chaque jour',
      },
    },
    {
      number: '5 min',
      description: {
        [Language.EN]: 'To the IJssel river and Kasteel Nijenhuis sculpture park',
        [Language.NL]: 'Naar de IJssel en de beeldentuin van Kasteel Nijenhuis',
        [Language.DE]: 'Zur IJssel und zum Skulpturenpark von Kasteel Nijenhuis',
        [Language.ES]: 'Hasta el río IJssel y el parque de esculturas de Kasteel Nijenhuis',
        [Language.FR]: 'Jusqu’à l’IJssel et au parc de sculptures de Kasteel Nijenhuis',
      },
    },
    {
      number: '30 min',
      description: {
        [Language.EN]: 'To the Sallandse Heuvelrug national park for landscape work',
        [Language.NL]: 'Naar het Nationaal Park Sallandse Heuvelrug voor landschapswerk',
        [Language.DE]: 'Zum Nationalpark Sallandse Heuvelrug für Landschaftsarbeit',
        [Language.ES]: 'Hasta el parque nacional Sallandse Heuvelrug para trabajo de paisaje',
        [Language.FR]: 'Jusqu’au parc national Sallandse Heuvelrug pour le travail de paysage',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Is the wifi fast enough for cloud-based editing workflows?',
        [Language.NL]: 'Is de wifi snel genoeg voor cloud-based editingworkflows?',
        [Language.DE]: 'Ist das WLAN schnell genug für cloudbasierte Editing-Workflows?',
        [Language.ES]: '¿Es el wifi lo bastante rápido para flujos de edición en la nube?',
        [Language.FR]: 'Le wifi est-il assez rapide pour les workflows d’édition en cloud ?',
      },
      answer: {
        [Language.EN]:
          'Yes. Fibre internet covers the whole farm. We have hosted workshops where every participant uploaded a day of RAW files to Lightroom Cloud overnight without trouble.',
        [Language.NL]:
          'Ja. Glasvezelinternet dekt de hele boerderij. We hebben workshops gehad waarbij elke deelnemer ’s nachts moeiteloos een dag aan RAW-bestanden naar Lightroom Cloud uploadde.',
        [Language.DE]:
          'Ja. Glasfaser deckt den gesamten Hof ab. Wir hatten Workshops, in denen jede Teilnehmerin nachts problemlos einen Tag RAW-Dateien zu Lightroom Cloud hochgeladen hat.',
        [Language.ES]:
          'Sí. La fibra cubre toda la finca. Hemos acogido talleres en los que cada participante subió un día de archivos RAW a Lightroom Cloud durante la noche sin problemas.',
        [Language.FR]:
          'Oui. La fibre couvre toute la ferme. Nous avons accueilli des ateliers où chaque participant a téléversé une journée de fichiers RAW vers Lightroom Cloud pendant la nuit sans souci.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can you arrange transport to nearby shoot locations?',
        [Language.NL]: 'Kunnen jullie vervoer naar nabijgelegen shoot-locaties regelen?',
        [Language.DE]: 'Könnt ihr Transport zu nahe gelegenen Shoot-Locations organisieren?',
        [Language.ES]: '¿Podéis organizar transporte a localizaciones cercanas para shoots?',
        [Language.FR]: 'Pouvez-vous organiser le transport vers les lieux de shoot proches ?',
      },
      answer: {
        [Language.EN]:
          'For day trips to the Sallandse Heuvelrug or the Hanseatic cities, we arrange a private van for the cohort. For shorter walks to the IJssel or the castle, bicycles are free to use.',
        [Language.NL]:
          'Voor dagtochten naar de Sallandse Heuvelrug of de Hanzesteden regelen we een privébusje voor het cohort. Voor kortere wandelingen naar de IJssel of het kasteel zijn de fietsen vrij te gebruiken.',
        [Language.DE]:
          'Für Tagesausflüge zur Sallandse Heuvelrug oder in die Hansestädte organisieren wir einen privaten Van für die Gruppe. Für kürzere Wege zur IJssel oder zum Schloss könnt ihr die Fahrräder kostenlos nutzen.',
        [Language.ES]:
          'Para excursiones de un día al Sallandse Heuvelrug o a las ciudades hanseáticas, organizamos una furgoneta privada para el grupo. Para paseos más cortos hasta el IJssel o el castillo, las bicis están a vuestra disposición.',
        [Language.FR]:
          'Pour les sorties à la journée vers le Sallandse Heuvelrug ou les villes hanséatiques, nous organisons un van privé pour le groupe. Pour les balades plus courtes jusqu’à l’IJssel ou au château, les vélos sont libres d’usage.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you have models or subjects available for portraiture workshops?',
        [Language.NL]: 'Zijn er modellen of onderwerpen beschikbaar voor portretworkshops?',
        [Language.DE]: 'Gibt es Modelle oder Motive für Porträt-Workshops?',
        [Language.ES]: '¿Hay modelos o sujetos disponibles para talleres de retrato?',
        [Language.FR]: 'Y a-t-il des modèles ou sujets disponibles pour les ateliers de portrait ?',
      },
      answer: {
        [Language.EN]:
          'We do not provide models, but we have local network connections — agricultural workers, craftspeople, and locals who have modelled for previous workshops. Tell us your needs at booking and we will see what we can arrange.',
        [Language.NL]:
          'We leveren geen modellen, maar we hebben lokale contacten — landarbeiders, ambachtslieden en bewoners die voor eerdere workshops hebben gemodelleerd. Laat ons bij de boeking weten wat je nodig hebt, dan kijken we wat we kunnen regelen.',
        [Language.DE]:
          'Wir stellen keine Modelle, aber wir haben lokale Kontakte — Landarbeiter, Handwerker und Anwohner, die schon für frühere Workshops Modell gestanden haben. Sag uns bei der Buchung, was du brauchst, und wir schauen, was sich machen lässt.',
        [Language.ES]:
          'No proporcionamos modelos, pero tenemos contactos locales — trabajadores agrícolas, artesanos y vecinos que han posado para talleres anteriores. Dinos tus necesidades al reservar y vemos qué podemos organizar.',
        [Language.FR]:
          'Nous ne fournissons pas de modèles, mais nous avons des contacts locaux — agriculteurs, artisans et habitants qui ont déjà posé pour des ateliers précédents. Dis-nous tes besoins à la réservation et nous voyons ce qu’on peut organiser.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is there a darkroom for film-based workshops?',
        [Language.NL]: 'Is er een doka voor analoge workshops?',
        [Language.DE]: 'Gibt es eine Dunkelkammer für analoge Workshops?',
        [Language.ES]: '¿Hay un cuarto oscuro para talleres de fotografía analógica?',
        [Language.FR]: 'Y a-t-il une chambre noire pour les ateliers en argentique ?',
      },
      answer: {
        [Language.EN]:
          'Not a built darkroom — but we can blackout the teahouse for tray-developed black-and-white work and have hosted analog workshops that did exactly this. Tell us at booking and we will set it up.',
        [Language.NL]:
          'Geen vaste doka — maar we kunnen het theehuis verduisteren voor zwart-wit-ontwikkeling met bakken, en we hebben al analoge workshops gehad die precies dit deden. Laat het weten bij de boeking, dan richten we het in.',
        [Language.DE]:
          'Keine fest eingerichtete Dunkelkammer — aber wir können das Teehaus abdunkeln für Schwarz-Weiß-Entwicklung in Schalen und haben schon analoge Workshops gehostet, die genau das gemacht haben. Sag uns bei der Buchung Bescheid, dann richten wir es ein.',
        [Language.ES]:
          'No tenemos un cuarto oscuro fijo — pero podemos oscurecer la casa de té para revelado en cubetas en blanco y negro, y ya hemos acogido talleres analógicos que hicieron exactamente eso. Dínoslo al reservar y lo preparamos.',
        [Language.FR]:
          'Pas de chambre noire dédiée — mais nous pouvons obscurcir la maison de thé pour le développement en cuvettes noir et blanc, et nous avons déjà accueilli des ateliers argentiques qui faisaient exactement cela. Dis-le-nous à la réservation et nous l’installons.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your photography workshop to a place with weather and time',
      [Language.NL]: 'Breng je fotografie-workshop naar een plek met weer en tijd',
      [Language.DE]: 'Bring deinen Fotografie-Workshop an einen Ort mit Wetter und Zeit',
      [Language.ES]: 'Trae tu taller de fotografía a un lugar con clima y tiempo',
      [Language.FR]: 'Amène ton atelier photo dans un lieu avec de la météo et du temps',
    },
    body: {
      [Language.EN]:
        'Tell us your dates, your cohort size, and the kind of work the workshop is built around — landscape, portrait, documentary, fine art. We will come back with availability and a quote.',
      [Language.NL]:
        'Vertel ons je data, je cohortgrootte en het soort werk waar de workshop omheen is gebouwd — landschap, portret, documentair, fine art. We komen terug met beschikbaarheid en een offerte.',
      [Language.DE]:
        'Sag uns deine Daten, eure Gruppengröße und die Art Arbeit, um die der Workshop gebaut ist — Landschaft, Porträt, Dokumentarisch, Fine Art. Wir melden uns mit Verfügbarkeit und einem Angebot.',
      [Language.ES]:
        'Dinos tus fechas, el tamaño del grupo y el tipo de trabajo en torno al que se construye el taller — paisaje, retrato, documental, fine art. Volveremos con disponibilidad y un presupuesto.',
      [Language.FR]:
        'Dis-nous tes dates, la taille du groupe et le type de travail autour duquel l’atelier est bâti — paysage, portrait, documentaire, fine art. Nous revenons avec les disponibilités et un devis.',
    },
  },
}
