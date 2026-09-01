import { IMAGES } from '@/data/images'
import { ContactIntent, Language, Route, SiloContent, SiloSlug, SiloTrack } from '@/types'

export const BEDRIJFSUITJE_OVERIJSSEL_SILO: SiloContent = {
  slug: SiloSlug.BEDRIJFSUITJE_OVERIJSSEL,
  route: Route.BEDRIJFSUITJE_OVERIJSSEL,
  contactIntent: ContactIntent.COMPANY_DAY,
  track: SiloTrack.COMPANY,
  backLink: {
    route: Route.COMPANY_DAY_EVENTS,
    label: {
      [Language.EN]: 'All company day events',
      [Language.NL]: 'Alle bedrijfsdagen',
      [Language.DE]: 'Alle Firmentage',
    },
  },
  relatedLinks: [
    {
      route: Route.MEETING_VENUE_ZWOLLE_DEVENTER,
      label: {
        [Language.EN]: 'Meeting venue between Zwolle and Deventer',
        [Language.NL]: 'Vergaderlocatie tussen Zwolle en Deventer',
        [Language.DE]: 'Tagungsort zwischen Zwolle und Deventer',
      },
      description: {
        [Language.EN]: 'If the day is really a strategy day: room specifications, equipment and breakout spots.',
        [Language.NL]: 'Als de dag eigenlijk een heidag is: ruimtespecificaties, techniek en breakoutplekken.',
        [Language.DE]: 'Wenn der Tag eigentlich ein Strategietag ist: Raumdaten, Technik und Breakout-Orte.',
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
        [Language.EN]: 'Fourteen beds, a full buyout, and an evening that does not end at the station.',
        [Language.NL]: 'Veertien bedden, een volledige buyout, en een avond die niet op het station eindigt.',
        [Language.DE]: 'Vierzehn Betten, ein kompletter Buyout und ein Abend, der nicht am Bahnhof endet.',
      },
    },
  ],
  heroImageSrc: IMAGES.accommodation.fireCircleGathering,
  heroImageAlt: {
    [Language.EN]: 'A group gathered around the fire circle at The Makers Barn',
    [Language.NL]: 'Een groep rond de vuurplaats bij The Makers Barn',
    [Language.DE]: 'Eine Gruppe rund um die Feuerstelle bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Staff Outing in Overijssel — A Farm in Wijhe, Not a Package Deal',
      [Language.NL]: 'Bedrijfsuitje in Overijssel — een boerderij in Wijhe, geen pakketdeal',
      [Language.DE]: 'Betriebsausflug in Overijssel — ein Hof in Wijhe, kein Paketangebot',
    },
    description: {
      [Language.EN]:
        'A staff outing in Salland without laser tag or a bowling lane. 1.3 hectares in Wijhe for 10 to 30 people: catering arranged, swim in the pond, sauna, fire circle. Own railway station, free parking.',
      [Language.NL]:
        'Een bedrijfsuitje in Salland zonder lasergame of bowlingbaan. 1,3 hectare in Wijhe voor 10 tot 30 personen: catering geregeld, zwemmen in de vijver, sauna, vuurplaats. Eigen station, gratis parkeren.',
      [Language.DE]:
        'Ein Betriebsausflug in Salland ohne Lasertag und Bowlingbahn. 1,3 Hektar in Wijhe für 10 bis 30 Personen: Catering organisiert, im Teich schwimmen, Sauna, Feuerstelle. Eigener Bahnhof, kostenlose Parkplätze.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'Wijhe, Salland — between Zwolle and Deventer',
      [Language.NL]: 'Wijhe, Salland — tussen Zwolle en Deventer',
      [Language.DE]: 'Wijhe, Salland — zwischen Zwolle und Deventer',
    },
    title: {
      [Language.EN]: 'A Staff Outing Nobody Has to Be Talked Into',
      [Language.NL]: 'Een bedrijfsuitje waar niemand toe overgehaald hoeft te worden',
      [Language.DE]: 'Ein Betriebsausflug, zu dem niemand überredet werden muss',
    },
    subtitle: {
      [Language.EN]:
        'No activity package, no host with a microphone. A farm of 1.3 hectares, a long table a chef cooks for, a pond you may swim in, and a fire that stays lit until you leave.',
      [Language.NL]:
        'Geen activiteitenpakket, geen presentator met een microfoon. Een boerderij van 1,3 hectare, een lange tafel waarvoor een kok kookt, een vijver waarin je mag zwemmen, en een vuur dat blijft branden tot je weggaat.',
      [Language.DE]:
        'Kein Aktivitätenpaket, kein Moderator mit Mikrofon. Ein Hof von 1,3 Hektar, eine lange Tafel, für die ein Koch kocht, ein Teich, in dem ihr schwimmen dürft, und ein Feuer, das brennt, bis ihr geht.',
    },
  },
  hook: {
    text: {
      [Language.EN]: 'The kind of day people talk about in the office afterwards.',
      [Language.NL]: 'Zo’n dag waar op kantoor daarna nog over gepraat wordt.',
      [Language.DE]: 'So ein Tag, über den im Büro danach noch geredet wird.',
    },
    caption: {
      [Language.EN]:
        'Ten to thirty people, one group on the land, one invoice at the end.',
      [Language.NL]:
        'Tien tot dertig personen, één groep op het erf, één factuur achteraf.',
      [Language.DE]:
        'Zehn bis dreißig Personen, eine Gruppe auf dem Gelände, eine Rechnung am Ende.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'What this is not',
        [Language.NL]: 'Wat dit niet is',
        [Language.DE]: 'Was das nicht ist',
      },
      body: {
        [Language.EN]: [
          'There is no laser tag, no escape room, no quiz master and no segway clinic. If that is the day you want, several places nearby do it well and we will happily say so.',
          'What we have instead is space and time. Thirty people can spread across 1.3 hectares and more than a thousand trees and not run into each other. That turns out to be what most teams are short of.',
        ],
        [Language.NL]: [
          'Er is geen lasergame, geen escape room, geen quizmaster en geen segwayclinic. Wil je zo’n dag, dan zijn er in de buurt locaties die dat goed doen, en dat zeggen we dan gewoon.',
          'Wat er wel is: ruimte en tijd. Dertig mensen kunnen zich verdelen over 1,3 hectare en meer dan duizend bomen zonder elkaar tegen te komen. Dat blijkt precies te zijn wat de meeste teams tekortkomen.',
        ],
        [Language.DE]: [
          'Es gibt kein Lasertag, keinen Escape Room, keinen Quizmaster und kein Segway-Training. Wenn ihr diesen Tag wollt, machen das mehrere Orte in der Nähe gut — und das sagen wir euch auch.',
          'Was es stattdessen gibt: Platz und Zeit. Dreißig Menschen verteilen sich auf 1,3 Hektar und über tausend Bäume, ohne sich zu begegnen. Genau daran fehlt es den meisten Teams.',
        ],
      },
      imageSrc: IMAGES.accommodation.gardenViewWithHammocks,
      imageAlt: {
        [Language.EN]: 'Hammocks in the garden with a wide view over the fields',
        [Language.NL]: 'Hangmatten in de tuin met wijds uitzicht over de velden',
        [Language.DE]: 'Hängematten im Garten mit weitem Blick über die Felder',
      },
    },
    {
      h2: {
        [Language.EN]: 'Food, and a kitchen you may use',
        [Language.NL]: 'Eten, en een keuken die je mag gebruiken',
        [Language.DE]: 'Essen, und eine Küche, die ihr nutzen dürft',
      },
      body: {
        [Language.EN]: [
          'Most groups want to sit down to the meal rather than make it. Give us the group size and the diets in it and we book a chef or caterer from our directory who has cooked here before and knows the kitchen. You see the menu in advance and it goes on the same invoice as the day.',
          'If your group does want to cook, the professional kitchen is theirs. Splitting people into a prep team, a grill team and a dessert team is one of the few team activities with a real result at the end. Tell us which way you want it and we set the day up for it.',
        ],
        [Language.NL]: [
          'De meeste groepen willen aanschuiven en niet zelf staan te koken. Geef ons de groepsgrootte en de dieetwensen door, dan boeken wij een kok of cateraar uit onze gids die hier eerder gekookt heeft en de keuken kent. Je ziet het menu vooraf en het komt op dezelfde factuur als de dag.',
          'Wil je groep wél koken, dan is de professionele keuken voor hen. Mensen verdelen over een snijploeg, een grillploeg en een nagerechtploeg is een van de weinige teamactiviteiten met aan het eind een echt resultaat. Zeg welke kant je op wilt, dan richten we de dag daarop in.',
        ],
        [Language.DE]: [
          'Die meisten Gruppen wollen sich an den Tisch setzen und nicht selbst kochen. Nennt uns Gruppengröße und Ernährungswünsche, dann buchen wir eine Köchin oder einen Caterer aus unserem Verzeichnis, die hier schon gekocht haben und die Küche kennen. Ihr seht das Menü vorab, und es steht auf derselben Rechnung wie der Tag.',
          'Will eure Gruppe doch selbst kochen, gehört die Profiküche ihr. Die Aufteilung in Schnippel-, Grill- und Dessert-Team ist eine der wenigen Teamaktivitäten mit echtem Ergebnis am Ende. Sagt uns, was ihr wollt, dann richten wir den Tag danach aus.',
        ],
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'A long table set for a shared meal',
        [Language.NL]: 'Een lange tafel gedekt voor een gedeelde maaltijd',
        [Language.DE]: 'Eine lange Tafel, gedeckt für ein gemeinsames Essen',
      },
    },
    {
      h2: {
        [Language.EN]: 'Water, heat and fire, in that order',
        [Language.NL]: 'Water, warmte en vuur, in die volgorde',
        [Language.DE]: 'Wasser, Wärme und Feuer, in dieser Reihenfolge',
      },
      body: {
        [Language.EN]: [
          'A natural swimming pond for the warm months. An outdoor sauna and a hot tub in the field for the cold ones. A fire circle for every month of the year — it is where the day usually ends and where people say the things they did not say in the meeting.',
          'None of it is scheduled. It is simply there, and groups use it in whatever order the weather allows.',
        ],
        [Language.NL]: [
          'Een natuurlijke zwemvijver voor de warme maanden. Een buitensauna en een hot tub in het veld voor de koude. Een vuurplaats voor elke maand van het jaar — daar eindigt de dag meestal, en daar zeggen mensen wat ze in de vergadering niet zeiden.',
          'Niets daarvan staat in een programma. Het is er gewoon, en groepen gebruiken het in de volgorde die het weer toelaat.',
        ],
        [Language.DE]: [
          'Ein natürlicher Schwimmteich für die warmen Monate. Eine Außensauna und ein Hot Tub im Feld für die kalten. Eine Feuerstelle für jeden Monat — dort endet der Tag meistens, und dort sagen Leute, was sie im Meeting nicht gesagt haben.',
          'Nichts davon steht im Programm. Es ist einfach da, und Gruppen nutzen es in der Reihenfolge, die das Wetter erlaubt.',
        ],
      },
      imageSrc: IMAGES.accommodation.pondComplete,
      imageAlt: {
        [Language.EN]: 'The natural swimming pond surrounded by greenery',
        [Language.NL]: 'De natuurlijke zwemvijver omringd door groen',
        [Language.DE]: 'Der natürliche Schwimmteich, umgeben von Grün',
      },
    },
    {
      h2: {
        [Language.EN]: 'Salland starts at the gate',
        [Language.NL]: 'Salland begint bij het hek',
        [Language.DE]: 'Salland beginnt am Tor',
      },
      body: {
        [Language.EN]: [
          'Wijhe sits between Zwolle and Deventer, with the IJssel floodplains a short walk away. Groups that want to move take the paths through the fields rather than a bus to an activity park.',
          'Wijhe has its own railway station with intercity trains twice an hour: nine minutes from Zwolle, fifteen from Deventer. That matters more than it sounds for a staff outing — nobody has to be the one who does not drink.',
        ],
        [Language.NL]: [
          'Wijhe ligt tussen Zwolle en Deventer, met de uiterwaarden van de IJssel op loopafstand. Groepen die willen bewegen nemen de paden door de velden, en niet een bus naar een activiteitenpark.',
          'Wijhe heeft een eigen station met twee keer per uur een intercity: negen minuten vanaf Zwolle, vijftien vanaf Deventer. Voor een bedrijfsuitje scheelt dat veel — niemand hoeft de bob te zijn.',
        ],
        [Language.DE]: [
          'Wijhe liegt zwischen Zwolle und Deventer, die IJssel-Auen sind zu Fuß erreichbar. Wer sich bewegen will, nimmt die Wege durch die Felder statt einen Bus in einen Freizeitpark.',
          'Wijhe hat einen eigenen Bahnhof mit zwei Intercity-Verbindungen pro Stunde: neun Minuten ab Zwolle, fünfzehn ab Deventer. Für einen Betriebsausflug zählt das mehr, als es klingt — niemand muss der Fahrer sein, der nichts trinkt.',
        ],
      },
      imageSrc: IMAGES.accommodation.fieldWalking,
      imageAlt: {
        [Language.EN]: 'Walking through the fields near The Makers Barn',
        [Language.NL]: 'Wandelen door de velden bij The Makers Barn',
        [Language.DE]: 'Ein Spaziergang durch die Felder bei The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '1,3 ha',
      description: {
        [Language.EN]: 'Of land and 1000+ trees, yours alone for the day',
        [Language.NL]: 'Grond en 1000+ bomen, die dag alleen van jullie',
        [Language.DE]: 'Gelände und über 1000 Bäume, an diesem Tag nur für euch',
      },
    },
    {
      number: '10–30',
      description: {
        [Language.EN]: 'People per outing — larger groups on request',
        [Language.NL]: 'Personen per uitje — grotere groepen in overleg',
        [Language.DE]: 'Personen pro Ausflug — größere Gruppen auf Anfrage',
      },
    },
    {
      number: '2x/uur',
      description: {
        [Language.EN]: 'Intercity trains to Wijhe station — nobody has to drive',
        [Language.NL]: 'Intercity’s naar station Wijhe — niemand hoeft te rijden',
        [Language.DE]: 'Intercity-Züge nach Wijhe — niemand muss fahren',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'An afternoon and evening, sketched',
      [Language.NL]: 'Een middag en avond, geschetst',
      [Language.DE]: 'Ein Nachmittag und Abend, skizziert',
    },
    intro: {
      [Language.EN]:
        'Many outings start after lunch and run into the evening. Times are yours to move.',
      [Language.NL]:
        'Veel uitjes beginnen na de lunch en lopen door tot in de avond. De tijden mag je verschuiven.',
      [Language.DE]:
        'Viele Ausflüge starten nach dem Mittag und laufen in den Abend. Die Zeiten könnt ihr verschieben.',
    },
    items: [
      {
        time: '13:00',
        activity: {
          [Language.EN]: 'Arrival at the farm, coffee, a walk around the land',
          [Language.NL]: 'Aankomst op de boerderij, koffie, rondje over het erf',
          [Language.DE]: 'Ankunft auf dem Hof, Kaffee, Runde übers Gelände',
        },
      },
      {
        time: '14:30',
        activity: {
          [Language.EN]: 'Spread out — the fields, the fire circle, the tea house',
          [Language.NL]: 'Uitwaaieren — de velden, de vuurplaats, het theehuis',
          [Language.DE]: 'Ausschwärmen — Felder, Feuerstelle, Teehaus',
        },
      },
      {
        time: '16:30',
        activity: {
          [Language.EN]: 'Sauna, hot tub, or the pond if the summer allows it',
          [Language.NL]: 'Sauna, hot tub, of de vijver als de zomer meewerkt',
          [Language.DE]: 'Sauna, Hot Tub oder der Teich, wenn der Sommer mitspielt',
        },
      },
      {
        time: '18:30',
        activity: {
          [Language.EN]: 'Dinner at the long table, cooked by the chef we booked',
          [Language.NL]: 'Diner aan de lange tafel, gekookt door de kok die wij boekten',
          [Language.DE]: 'Abendessen an der langen Tafel, gekocht vom gebuchten Koch',
        },
      },
      {
        time: '21:00',
        activity: {
          [Language.EN]: 'Fire circle until the last train, or later',
          [Language.NL]: 'Vuurplaats tot de laatste trein, of later',
          [Language.DE]: 'Feuerstelle bis zum letzten Zug, oder länger',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'What is there actually to do?',
        [Language.NL]: 'Wat is er eigenlijk te doen?',
        [Language.DE]: 'Was kann man dort eigentlich machen?',
      },
      answer: {
        [Language.EN]:
          'Swim in the natural pond, use the outdoor sauna and hot tub, sit at the fire circle, walk the paths through the land and out towards the IJssel floodplains, and eat a long dinner cooked by a chef we booked for you. Groups that would rather cook their own can use the professional kitchen. If you want a facilitated programme on top of that, we can bring one in.',
        [Language.NL]:
          'Zwemmen in de natuurlijke vijver, de buitensauna en hot tub gebruiken, bij de vuurplaats zitten, de paden over het erf en richting de uiterwaarden lopen, en lang tafelen bij een diner van een kok die wij voor je boeken. Groepen die liever zelf koken kunnen de professionele keuken gebruiken. Wil je daarbovenop een begeleid programma, dan halen we dat erbij.',
        [Language.DE]:
          'Im Naturteich schwimmen, Außensauna und Hot Tub nutzen, an der Feuerstelle sitzen, über das Gelände Richtung IJssel-Auen laufen und lange an einem Essen sitzen, das ein von uns gebuchter Koch zubereitet. Gruppen, die lieber selbst kochen, können die Profiküche nutzen. Wenn ihr zusätzlich ein begleitetes Programm wollt, holen wir das dazu.',
      },
    },
    {
      question: {
        [Language.EN]: 'And if it rains all day?',
        [Language.NL]: 'En als het de hele dag regent?',
        [Language.DE]: 'Und wenn es den ganzen Tag regnet?',
      },
      answer: {
        [Language.EN]:
          'The Hay House barn is heated and holds the whole group indoors, and the kitchen and the sauna do not care about weather. Dutch rain has not cancelled a day here yet.',
        [Language.NL]:
          'De Hay House-schuur is verwarmd en de hele groep kan er binnen terecht, en de keuken en de sauna hebben geen last van het weer. Nederlandse regen heeft hier nog nooit een dag afgelast.',
        [Language.DE]:
          'Die Hay-House-Scheune ist beheizt und fasst die ganze Gruppe drinnen, Küche und Sauna stört das Wetter ohnehin nicht. Niederländischer Regen hat hier noch keinen Tag gekippt.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is a staff outing taxed for the employer?',
        [Language.NL]: 'Is een bedrijfsuitje belast voor de werkgever?',
        [Language.DE]: 'Wird ein Betriebsausflug für den Arbeitgeber besteuert?',
      },
      answer: {
        [Language.EN]:
          'In the Netherlands it usually goes into the free space of the werkkostenregeling, which in 2026 is 2% of the first EUR 400,000 of payroll and 1.18% above that; anything over the free space is taxed at 80%. A day with a demonstrable work purpose — training, strategy, skills — can instead fall under a targeted exemption. We are a venue, not tax advisers, so put the actual case to your own accountant. We will write the invoice so the purpose of the day is clear on it.',
        [Language.NL]:
          'In Nederland valt het meestal in de vrije ruimte van de werkkostenregeling, in 2026 2% over de eerste EUR 400.000 loonsom en 1,18% daarboven; wat boven de vrije ruimte uitkomt wordt belast met 80% eindheffing. Een dag met een aantoonbaar zakelijk doel — training, strategie, vaardigheden — kan in plaats daarvan onder een gerichte vrijstelling vallen. Wij zijn een locatie en geen fiscalist, dus leg je eigen situatie voor aan je accountant. Wij zetten het doel van de dag duidelijk op de factuur.',
        [Language.DE]:
          'In den Niederlanden fällt das meist in den Freiraum der werkkostenregeling: 2026 sind das 2% der ersten 400.000 EUR Lohnsumme und 1,18% darüber; was den Freiraum übersteigt, wird mit 80% besteuert. Ein Tag mit nachweisbar geschäftlichem Zweck — Training, Strategie, Kompetenzen — kann stattdessen unter eine gezielte Befreiung fallen. Wir sind ein Veranstaltungsort, keine Steuerberatung: Legt euren Fall eurer Buchhaltung vor. Wir schreiben den Zweck des Tages klar auf die Rechnung.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we stay the night after all?',
        [Language.NL]: 'Kunnen we toch blijven slapen?',
        [Language.DE]: 'Können wir doch übernachten?',
      },
      answer: {
        [Language.EN]:
          'There are fourteen beds on site across Horizon and Cosmos. Say so when you enquire and we hold them; a group of thirty cannot all sleep here, so we are honest about who goes home.',
        [Language.NL]:
          'Er zijn veertien bedden op het terrein, verdeeld over Horizon en Cosmos. Geef het aan bij je aanvraag, dan houden we ze vast; een groep van dertig kan hier niet allemaal slapen, dus daar zijn we eerlijk over.',
        [Language.DE]:
          'Es gibt vierzehn Betten vor Ort, verteilt auf Horizon und Cosmos. Sagt es bei der Anfrage, dann halten wir sie frei; eine Gruppe von dreißig kann hier nicht komplett schlafen, das sagen wir offen.',
      },
    },
    {
      question: {
        [Language.EN]: 'How far is it from Zwolle, Deventer and Apeldoorn?',
        [Language.NL]: 'Hoe ver is het vanaf Zwolle, Deventer en Apeldoorn?',
        [Language.DE]: 'Wie weit ist es von Zwolle, Deventer und Apeldoorn?',
      },
      answer: {
        [Language.EN]:
          'By car roughly fifteen minutes from Zwolle, twenty from Deventer and thirty-five from Apeldoorn, with free parking for ten to fifteen cars. By train, Wijhe station is nine minutes from Zwolle and fifteen from Deventer, and we collect the group from the platform.',
        [Language.NL]:
          'Met de auto ongeveer vijftien minuten vanaf Zwolle, twintig vanaf Deventer en vijfendertig vanaf Apeldoorn, met gratis parkeerruimte voor tien tot vijftien auto’s. Met de trein is station Wijhe negen minuten vanaf Zwolle en vijftien vanaf Deventer, en wij halen de groep van het perron.',
        [Language.DE]:
          'Mit dem Auto rund fünfzehn Minuten ab Zwolle, zwanzig ab Deventer und fünfunddreißig ab Apeldoorn, mit kostenlosen Parkplätzen für zehn bis fünfzehn Autos. Mit dem Zug ist Wijhe neun Minuten von Zwolle und fünfzehn von Deventer entfernt, und wir holen die Gruppe vom Bahnsteig ab.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Send us the group size and a date',
      [Language.NL]: 'Stuur ons de groepsgrootte en een datum',
      [Language.DE]: 'Schickt uns Gruppengröße und ein Datum',
    },
    body: {
      [Language.EN]:
        'Tell us how many people, roughly when, and what the group eats. You get one plan and one price back, catering included.',
      [Language.NL]:
        'Vertel ons met hoeveel mensen, ongeveer wanneer, en wat de groep eet. Je krijgt één opzet en één prijs terug, catering inbegrepen.',
      [Language.DE]:
        'Sagt uns, wie viele Personen, ungefähr wann, und was die Gruppe isst. Ihr bekommt einen Ablauf und einen Preis zurück, Catering inbegriffen.',
    },
  },
  organizerSeo: {
    keywords: {
      [Language.EN]: [
        'staff outing Overijssel',
        'company outing Salland',
        'team outing near Zwolle',
        'farm venue staff day Netherlands',
      ],
      [Language.NL]: [
        'bedrijfsuitje Overijssel',
        'bedrijfsuitje Salland',
        'teamuitje Zwolle',
        'personeelsuitje Deventer',
        'bedrijfsuitje boerderij Wijhe',
        'teambuilding Overijssel',
      ],
      [Language.DE]: [
        'Betriebsausflug Overijssel',
        'Firmenausflug Niederlande',
        'Teamausflug bei Zwolle',
        'Bauernhof Location Betriebsausflug',
      ],
    },
    audience: {
      [Language.EN]: 'HR teams, office managers and team leads organising a staff outing',
      [Language.NL]: 'HR-teams, officemanagers en teamleiders die een bedrijfsuitje organiseren',
      [Language.DE]: 'HR-Teams, Office Manager und Teamleitungen, die einen Betriebsausflug planen',
    },
    cohortSize: { min: 10, max: 30 },
    dayProgramCapacityOverride: 30,
  },
}
