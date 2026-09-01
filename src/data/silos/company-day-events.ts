import { IMAGES } from '@/data/images'
import { ContactIntent, Language, Route, SiloContent, SiloSlug, SiloTrack } from '@/types'

export const COMPANY_DAY_EVENTS_SILO: SiloContent = {
  slug: SiloSlug.COMPANY_DAY_EVENTS,
  route: Route.COMPANY_DAY_EVENTS,
  contactIntent: ContactIntent.COMPANY_DAY,
  track: SiloTrack.COMPANY,
  backLink: {
    route: Route.FACILITIES,
    label: {
      [Language.EN]: 'All facilities',
      [Language.NL]: 'Alle faciliteiten',
      [Language.DE]: 'Alle Einrichtungen',
    },
  },
  relatedLinks: [
    {
      route: Route.BEDRIJFSUITJE_OVERIJSSEL,
      label: {
        [Language.EN]: 'Staff outing in Overijssel',
        [Language.NL]: 'Bedrijfsuitje in Overijssel',
        [Language.DE]: 'Betriebsausflug in Overijssel',
      },
      description: {
        [Language.EN]: 'The same farm, written for a day that is about the team rather than the agenda.',
        [Language.NL]: 'Dezelfde boerderij, beschreven voor een dag die over het team gaat en niet over de agenda.',
        [Language.DE]: 'Derselbe Hof, beschrieben für einen Tag, bei dem das Team zählt und nicht die Agenda.',
      },
    },
    {
      route: Route.MEETING_VENUE_ZWOLLE_DEVENTER,
      label: {
        [Language.EN]: 'Meeting venue between Zwolle and Deventer',
        [Language.NL]: 'Vergaderlocatie tussen Zwolle en Deventer',
        [Language.DE]: 'Tagungsort zwischen Zwolle und Deventer',
      },
      description: {
        [Language.EN]: 'Room specifications, breakout spots and how a strategy day runs here.',
        [Language.NL]: 'Ruimtespecificaties, breakoutplekken en hoe een heidag hier verloopt.',
        [Language.DE]: 'Raumdaten, Breakout-Orte und wie ein Strategietag hier abläuft.',
      },
    },
    {
      route: Route.TEAM_OFFSITES,
      label: {
        [Language.EN]: 'Two-day team offsites with beds',
        [Language.NL]: 'Tweedaagse teamoffsites met bedden',
        [Language.DE]: 'Zweitägige Team-Offsites mit Betten',
      },
      description: {
        [Language.EN]: 'When the group stays the night: fourteen beds and a full venue buyout.',
        [Language.NL]: 'Als de groep blijft slapen: veertien bedden en een volledige buyout.',
        [Language.DE]: 'Wenn die Gruppe übernachtet: vierzehn Betten und ein kompletter Buyout.',
      },
    },
  ],
  heroImageSrc: IMAGES.accommodation.gardenViewWithHammocks,
  heroImageAlt: {
    [Language.EN]: 'Wide garden view across the fields at The Makers Barn',
    [Language.NL]: 'Wijds tuinzicht over de velden bij The Makers Barn',
    [Language.DE]: 'Weiter Blick über Garten und Felder bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Company Day Events on a Farm near Zwolle — The Makers Barn',
      [Language.NL]: 'Bedrijfsdag op een boerderij bij Zwolle — The Makers Barn',
      [Language.DE]: 'Firmentage auf einem Hof bei Zwolle — The Makers Barn',
    },
    description: {
      [Language.EN]:
        'A whole 1.3-hectare farm to yourselves for one day. 10 to 30 people, a heated 65 m² barn with beamer and wifi, sauna, fire circle and swimming pond. Wijhe has its own station: 9 minutes from Zwolle, 15 from Deventer.',
      [Language.NL]:
        'Een hele boerderij van 1,3 hectare voor jullie alleen, één dag lang. 10 tot 30 personen, een verwarmde schuur van 65 m² met beamer en wifi, sauna, vuurplaats en zwemvijver. Wijhe heeft een eigen station: 9 minuten vanaf Zwolle, 15 vanaf Deventer.',
      [Language.DE]:
        'Ein ganzer Hof von 1,3 Hektar für euch allein, einen Tag lang. 10 bis 30 Personen, eine beheizte 65-m²-Scheune mit Beamer und WLAN, Sauna, Feuerstelle und Schwimmteich. Wijhe hat einen eigenen Bahnhof: 9 Minuten ab Zwolle, 15 ab Deventer.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For teams of 10 to 30, one day, no overnight stay needed',
      [Language.NL]: 'Voor teams van 10 tot 30, één dag, overnachten hoeft niet',
      [Language.DE]: 'Für Teams von 10 bis 30, ein Tag, ohne Übernachtung',
    },
    title: {
      [Language.EN]: 'A Company Day Where the Only Group on the Land Is Yours',
      [Language.NL]: 'Een bedrijfsdag waarbij jullie de enige groep op het erf zijn',
      [Language.DE]: 'Ein Firmentag, an dem ihr die einzige Gruppe auf dem Hof seid',
    },
    subtitle: {
      [Language.EN]:
        'A 1920s farm in Wijhe, between Zwolle and Deventer. You get the barn, the fields, the pond and the fire circle for the day — no other party in the next room, no hotel corridor.',
      [Language.NL]:
        'Een boerderij uit 1920 in Wijhe, tussen Zwolle en Deventer. Voor die dag zijn de schuur, de velden, de vijver en de vuurplaats van jullie — geen ander gezelschap in de zaal ernaast, geen hotelgang.',
      [Language.DE]:
        'Ein Hof aus den 1920ern in Wijhe, zwischen Zwolle und Deventer. Für diesen Tag gehören euch die Scheune, die Felder, der Teich und die Feuerstelle — keine andere Gruppe im Nebenraum, kein Hotelflur.',
    },
  },
  hook: {
    text: {
      [Language.EN]: 'One day. One group. The whole place.',
      [Language.NL]: 'Eén dag. Eén groep. De hele plek.',
      [Language.DE]: 'Ein Tag. Eine Gruppe. Der ganze Ort.',
    },
    caption: {
      [Language.EN]:
        'You set the start and end time. We handle the room, the caterer and the invoice.',
      [Language.NL]:
        'Jullie bepalen begin- en eindtijd. Wij regelen de ruimte, de catering en de factuur.',
      [Language.DE]:
        'Ihr legt Anfang und Ende fest. Wir kümmern uns um Raum, Catering und Rechnung.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'The room, and everything that is not a room',
        [Language.NL]: 'De ruimte, en alles wat geen ruimte is',
        [Language.DE]: 'Der Raum — und alles, was kein Raum ist',
      },
      body: {
        [Language.EN]: [
          'The Hay House is a 65 m² barn with a heated floor, a sound system, a beamer and screen, wifi that holds a video call, and whiteboards when you want them. It seats a workshop of thirty and still has room to stand up and move.',
          'The rest of the day does not have to happen indoors. There are 1.3 hectares, more than a thousand trees, a tea house, a swimming pond and a fire circle. Groups split into pairs and walk. That is often where the honest part of the conversation happens.',
        ],
        [Language.NL]: [
          'Het Hay House is een schuur van 65 m² met vloerverwarming, geluidsinstallatie, beamer en scherm, wifi die een videocall aankan, en whiteboards als je die wilt. Er kan een workshop van dertig personen in, met ruimte om op te staan en te bewegen.',
          'De rest van de dag hoeft niet binnen te gebeuren. Er is 1,3 hectare, meer dan duizend bomen, een theehuis, een zwemvijver en een vuurplaats. Groepen splitsen zich op in tweetallen en gaan lopen. Daar komt het eerlijke deel van het gesprek meestal vandaan.',
        ],
        [Language.DE]: [
          'Das Hay House ist eine 65-m²-Scheune mit Fußbodenheizung, Soundanlage, Beamer und Leinwand, WLAN, das eine Videokonferenz trägt, und Whiteboards, wenn ihr sie wollt. Ein Workshop mit dreißig Personen passt hinein, mit Platz zum Aufstehen und Bewegen.',
          'Der Rest des Tages muss nicht drinnen stattfinden. Es gibt 1,3 Hektar, über tausend Bäume, ein Teehaus, einen Schwimmteich und eine Feuerstelle. Gruppen teilen sich in Paare und gehen los. Genau dort entsteht meist der ehrliche Teil des Gesprächs.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'The heated Hay House barn, laid out for a group session',
        [Language.NL]: 'De verwarmde Hay House-schuur, ingericht voor een groepssessie',
        [Language.DE]: 'Die beheizte Hay-House-Scheune, für eine Gruppensitzung hergerichtet',
      },
    },
    {
      h2: {
        [Language.EN]: 'Food, arranged for you',
        [Language.NL]: 'Eten, voor jullie geregeld',
        [Language.DE]: 'Essen, für euch organisiert',
      },
      body: {
        [Language.EN]: [
          'Tell us the group size and the diets in it, and we book the catering: a chef or caterer from our directory who has cooked here before and already knows the kitchen. You approve the menu, and it lands on the same invoice as the rest of the day.',
          'We do not cook it ourselves, which we say plainly because it means the cooking is done by people who do it for a living. The professional kitchen is also open to the group if you would rather cook together — say so and we set it up.',
        ],
        [Language.NL]: [
          'Geef ons de groepsgrootte en de dieetwensen door, dan boeken wij de catering: een kok of cateraar uit onze gids die hier eerder heeft gekookt en de keuken al kent. Jullie keuren het menu goed, en het komt op dezelfde factuur als de rest van de dag.',
          'Wij koken het niet zelf, en dat zeggen we gewoon, want het betekent dat er gekookt wordt door mensen die dat beroepsmatig doen. De professionele keuken staat ook open voor de groep als jullie liever samen koken — geef het aan, dan zetten we hem klaar.',
        ],
        [Language.DE]: [
          'Nennt uns Gruppengröße und Ernährungswünsche, dann buchen wir das Catering: eine Köchin, einen Koch oder einen Caterer aus unserem Verzeichnis, die hier schon gekocht haben und die Küche kennen. Ihr gebt das Menü frei, und es steht auf derselben Rechnung wie der restliche Tag.',
          'Wir kochen nicht selbst, und das sagen wir offen, denn es heißt, dass Leute kochen, die das beruflich tun. Die Profiküche steht der Gruppe auch offen, wenn ihr lieber gemeinsam kocht — sagt Bescheid, wir richten sie her.',
        ],
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'A long shared lunch table at The Makers Barn',
        [Language.NL]: 'Een lange gedeelde lunchtafel bij The Makers Barn',
        [Language.DE]: 'Ein langer gemeinsamer Mittagstisch bei The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'Getting here without a coach hire',
        [Language.NL]: 'Hierheen komen zonder touringcar',
        [Language.DE]: 'Anreise ohne Reisebus',
      },
      body: {
        [Language.EN]: [
          'Wijhe has its own railway station on the Zwolle–Deventer line, with intercity trains twice an hour. Zwolle to Wijhe is about nine minutes, Deventer to Wijhe about fifteen. We collect the group from the platform.',
          'By car it is roughly fifteen minutes from Zwolle, twenty from Deventer, thirty-five from Apeldoorn. There is parking for ten to fifteen cars on the land, free.',
        ],
        [Language.NL]: [
          'Wijhe heeft een eigen station op de lijn Zwolle–Deventer, met twee keer per uur een intercity. Zwolle–Wijhe duurt ongeveer negen minuten, Deventer–Wijhe ongeveer vijftien. Wij halen de groep van het perron.',
          'Met de auto is het ongeveer vijftien minuten vanaf Zwolle, twintig vanaf Deventer, vijfendertig vanaf Apeldoorn. Op het erf is gratis parkeerruimte voor tien tot vijftien auto’s.',
        ],
        [Language.DE]: [
          'Wijhe hat einen eigenen Bahnhof an der Strecke Zwolle–Deventer, zweimal pro Stunde hält ein Intercity. Zwolle–Wijhe dauert etwa neun Minuten, Deventer–Wijhe etwa fünfzehn. Wir holen die Gruppe vom Bahnsteig ab.',
          'Mit dem Auto sind es rund fünfzehn Minuten ab Zwolle, zwanzig ab Deventer, fünfunddreißig ab Apeldoorn. Auf dem Gelände gibt es kostenlose Parkplätze für zehn bis fünfzehn Autos.',
        ],
      },
      imageSrc: IMAGES.accommodation.outsideWalk,
      imageAlt: {
        [Language.EN]: 'The path leading onto the land at The Makers Barn',
        [Language.NL]: 'Het pad naar het erf van The Makers Barn',
        [Language.DE]: 'Der Weg auf das Gelände von The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'When one day turns out not to be enough',
        [Language.NL]: 'Als één dag toch te kort blijkt',
        [Language.DE]: 'Wenn ein Tag doch nicht reicht',
      },
      body: {
        [Language.EN]: [
          'Some days end with the group not wanting to drive home. There are fourteen beds across Horizon and Cosmos, so a day can become an overnight without moving venue.',
          'If you already know you want two days and a night, start on the offsite page instead — it is written for that shape.',
        ],
        [Language.NL]: [
          'Sommige dagen eindigen met een groep die niet naar huis wil rijden. Er zijn veertien bedden verdeeld over Horizon en Cosmos, dus een dag kan een overnachting worden zonder van locatie te wisselen.',
          'Weet je nu al dat je twee dagen en een nacht wilt? Begin dan op de offsite-pagina — die is voor die vorm geschreven.',
        ],
        [Language.DE]: [
          'Manche Tage enden damit, dass die Gruppe nicht nach Hause fahren will. Vierzehn Betten verteilen sich auf Horizon und Cosmos, ein Tag kann also zur Übernachtung werden, ohne den Ort zu wechseln.',
          'Wenn ihr schon wisst, dass es zwei Tage und eine Nacht werden sollen, fangt auf der Offsite-Seite an — sie ist für dieses Format geschrieben.',
        ],
      },
      imageSrc: IMAGES.accommodation.fireCircleGathering,
      imageAlt: {
        [Language.EN]: 'A group gathered around the fire circle in the evening',
        [Language.NL]: 'Een groep rond de vuurplaats in de avond',
        [Language.DE]: 'Eine Gruppe abends rund um die Feuerstelle',
      },
    },
  ],
  facts: [
    {
      number: '10–30',
      description: {
        [Language.EN]: 'People on a day programme — larger groups on request',
        [Language.NL]: 'Personen op een dagprogramma — grotere groepen in overleg',
        [Language.DE]: 'Personen im Tagesprogramm — größere Gruppen auf Anfrage',
      },
    },
    {
      number: '65 m²',
      description: {
        [Language.EN]: 'Heated barn with beamer, screen, sound and wifi',
        [Language.NL]: 'Verwarmde schuur met beamer, scherm, geluid en wifi',
        [Language.DE]: 'Beheizte Scheune mit Beamer, Leinwand, Ton und WLAN',
      },
    },
    {
      number: '9 min',
      description: {
        [Language.EN]: 'By train from Zwolle to Wijhe station — we meet the platform',
        [Language.NL]: 'Met de trein van Zwolle naar station Wijhe — wij staan op het perron',
        [Language.DE]: 'Mit dem Zug von Zwolle nach Wijhe — wir stehen am Bahnsteig',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A full day, sketched',
      [Language.NL]: 'Een hele dag, geschetst',
      [Language.DE]: 'Ein ganzer Tag, skizziert',
    },
    intro: {
      [Language.EN]:
        'Start and end times are yours to set. This is one shape that works; yours can look nothing like it.',
      [Language.NL]:
        'Begin- en eindtijd bepaal je zelf. Dit is één vorm die werkt; die van jou mag er heel anders uitzien.',
      [Language.DE]:
        'Anfang und Ende legt ihr fest. Das ist eine Form, die funktioniert; eure darf ganz anders aussehen.',
    },
    items: [
      {
        time: '09:30',
        activity: {
          [Language.EN]: 'Arrival, coffee in the barn, boots on if it rained',
          [Language.NL]: 'Aankomst, koffie in de schuur, laarzen aan als het geregend heeft',
          [Language.DE]: 'Ankunft, Kaffee in der Scheune, Stiefel an, wenn es geregnet hat',
        },
      },
      {
        time: '10:00',
        activity: {
          [Language.EN]: 'First working block — the thing you actually came for',
          [Language.NL]: 'Eerste werkblok — waar je eigenlijk voor gekomen bent',
          [Language.DE]: 'Erster Arbeitsblock — das, wofür ihr eigentlich hier seid',
        },
      },
      {
        time: '12:30',
        activity: {
          [Language.EN]: 'Lunch at the long table, cooked by the caterer we booked',
          [Language.NL]: 'Lunch aan de lange tafel, gemaakt door de cateraar die wij boekten',
          [Language.DE]: 'Mittagessen an der langen Tafel, vom gebuchten Caterer zubereitet',
        },
      },
      {
        time: '14:00',
        activity: {
          [Language.EN]: 'Walking pairs across the land — one question each',
          [Language.NL]: 'In tweetallen over het erf lopen — één vraag per paar',
          [Language.DE]: 'Zu zweit über das Gelände gehen — eine Frage pro Paar',
        },
      },
      {
        time: '15:30',
        activity: {
          [Language.EN]: 'Second working block, decisions written down',
          [Language.NL]: 'Tweede werkblok, besluiten opgeschreven',
          [Language.DE]: 'Zweiter Arbeitsblock, Entscheidungen schriftlich festhalten',
        },
      },
      {
        time: '17:00',
        activity: {
          [Language.EN]: 'Fire circle, sauna, drinks — or straight to the station',
          [Language.NL]: 'Vuurplaats, sauna, borrel — of meteen naar het station',
          [Language.DE]: 'Feuerstelle, Sauna, Umtrunk — oder direkt zum Bahnhof',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'How many people fit on a day programme?',
        [Language.NL]: 'Hoeveel mensen passen er op een dagprogramma?',
        [Language.DE]: 'Wie viele Personen passen in ein Tagesprogramm?',
      },
      answer: {
        [Language.EN]:
          'Ten to thirty is the range the place is built for. Larger groups are sometimes possible — ask, and we will tell you honestly whether it still works or whether it starts to feel crowded.',
        [Language.NL]:
          'Tien tot dertig is waar de plek op gebouwd is. Grotere groepen kunnen soms — vraag het, dan zeggen we eerlijk of het nog werkt of dat het te vol wordt.',
        [Language.DE]:
          'Zehn bis dreißig ist der Bereich, für den der Ort gebaut ist. Größere Gruppen sind manchmal möglich — fragt nach, wir sagen ehrlich, ob es noch funktioniert oder zu eng wird.',
      },
    },
    {
      question: {
        [Language.EN]: 'Will another group be here at the same time?',
        [Language.NL]: 'Is er tegelijk een andere groep aanwezig?',
        [Language.DE]: 'Ist gleichzeitig eine andere Gruppe da?',
      },
      answer: {
        [Language.EN]:
          'No. We take one group at a time. The land, the barn, the sauna and the pond are yours for the day.',
        [Language.NL]:
          'Nee. We nemen één groep tegelijk. Het erf, de schuur, de sauna en de vijver zijn die dag van jullie.',
        [Language.DE]:
          'Nein. Wir nehmen eine Gruppe pro Termin. Gelände, Scheune, Sauna und Teich gehören an diesem Tag euch.',
      },
    },
    {
      question: {
        [Language.EN]: 'What time can we start and finish?',
        [Language.NL]: 'Hoe laat kunnen we beginnen en eindigen?',
        [Language.DE]: 'Wann können wir anfangen und aufhören?',
      },
      answer: {
        [Language.EN]:
          'You choose. There is no fixed eight-hour block. Some groups want 09:00 to 16:00, some want to arrive at noon and stay until the fire goes out.',
        [Language.NL]:
          'Dat kies je zelf. Er is geen vast blok van acht uur. Sommige groepen willen 09:00 tot 16:00, andere komen om twaalf uur en blijven tot het vuur uit is.',
        [Language.DE]:
          'Ihr entscheidet. Es gibt keinen festen Acht-Stunden-Block. Manche Gruppen wollen 09:00 bis 16:00, andere kommen mittags und bleiben, bis das Feuer aus ist.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is there a projector and wifi?',
        [Language.NL]: 'Is er een beamer en wifi?',
        [Language.DE]: 'Gibt es Beamer und WLAN?',
      },
      answer: {
        [Language.EN]:
          'Yes to both, plus a screen, a sound system and whiteboards on request. The wifi carries a video call, so a remote colleague can join a session.',
        [Language.NL]:
          'Allebei aanwezig, plus een scherm, geluidsinstallatie en whiteboards op verzoek. De wifi kan een videocall aan, dus een collega op afstand kan aanschuiven.',
        [Language.DE]:
          'Beides vorhanden, dazu Leinwand, Soundanlage und Whiteboards auf Wunsch. Das WLAN trägt eine Videokonferenz, eine Kollegin aus der Ferne kann also dazukommen.',
      },
    },
    {
      question: {
        [Language.EN]: 'What does a day cost?',
        [Language.NL]: 'Wat kost een dag?',
        [Language.DE]: 'Was kostet ein Tag?',
      },
      answer: {
        [Language.EN]:
          'It depends on group size, how long you stay and what food you want, so we quote per request rather than publish a per-head figure that would be wrong for most of you. Send us the group size, a date and the goal of the day and you get one price and one invoice.',
        [Language.NL]:
          'Dat hangt af van groepsgrootte, duur en catering, dus we offreren per aanvraag in plaats van een bedrag per persoon te publiceren dat voor de meesten niet klopt. Stuur groepsgrootte, datum en doel van de dag, dan krijg je één prijs en één factuur.',
        [Language.DE]:
          'Das hängt von Gruppengröße, Dauer und Verpflegung ab. Deshalb kalkulieren wir pro Anfrage, statt einen Pro-Kopf-Preis zu veröffentlichen, der für die meisten nicht stimmt. Schickt Gruppengröße, Datum und Ziel des Tages — ihr bekommt einen Preis und eine Rechnung.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Tell us what the day has to achieve',
      [Language.NL]: 'Vertel ons wat de dag moet opleveren',
      [Language.DE]: 'Sagt uns, was der Tag erreichen soll',
    },
    body: {
      [Language.EN]:
        'Group size, a date, and what you want to be true by the end of it. We come back with a plan for the day and one price.',
      [Language.NL]:
        'Groepsgrootte, een datum, en wat er aan het eind waar moet zijn. Wij komen terug met een dagopzet en één prijs.',
      [Language.DE]:
        'Gruppengröße, ein Datum und was am Ende gelten soll. Wir melden uns mit einem Tagesablauf und einem Preis.',
    },
  },
  organizerSeo: {
    keywords: {
      [Language.EN]: [
        'company day event',
        'team day venue',
        'away day venue Netherlands',
        'corporate day venue near Zwolle',
        'exclusive use venue day hire',
      ],
      [Language.NL]: [
        'bedrijfsdag locatie',
        'teamdag locatie',
        'dagarrangement bedrijven',
        'exclusieve locatie bedrijfsdag',
        'bedrijfsdag Zwolle Deventer',
      ],
      [Language.DE]: [
        'Firmentag Location',
        'Teamtag Location Niederlande',
        'Tagesveranstaltung Firma',
        'Firmentag bei Zwolle',
      ],
    },
    audience: {
      [Language.EN]: 'Company teams, leadership groups and HR organisers booking a single day',
      [Language.NL]: 'Bedrijfsteams, MT’s en HR-organisatoren die één dag boeken',
      [Language.DE]: 'Firmenteams, Führungsgruppen und HR-Organisatoren, die einen Tag buchen',
    },
    cohortSize: { min: 10, max: 30 },
    dayProgramCapacityOverride: 30,
  },
}
