import { IMAGES } from '@/data/images'
import { ContactIntent, Language, Route, SiloContent, SiloSlug, SiloTrack } from '@/types'

export const MEETING_VENUE_ZWOLLE_DEVENTER_SILO: SiloContent = {
  slug: SiloSlug.MEETING_VENUE_ZWOLLE_DEVENTER,
  route: Route.MEETING_VENUE_ZWOLLE_DEVENTER,
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
      route: Route.BEDRIJFSUITJE_OVERIJSSEL,
      label: {
        [Language.EN]: 'Staff outing in Overijssel',
        [Language.NL]: 'Bedrijfsuitje in Overijssel',
        [Language.DE]: 'Betriebsausflug in Overijssel',
      },
      description: {
        [Language.EN]: 'When the point of the day is the team rather than the decision.',
        [Language.NL]: 'Als het doel van de dag het team is en niet het besluit.',
        [Language.DE]: 'Wenn es an dem Tag um das Team geht und nicht um die Entscheidung.',
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
        [Language.EN]: 'Fourteen beds on site when one day is not enough to reach the decision.',
        [Language.NL]: 'Veertien bedden op locatie als één dag niet genoeg is voor het besluit.',
        [Language.DE]: 'Vierzehn Betten vor Ort, wenn ein Tag für die Entscheidung nicht reicht.',
      },
    },
  ],
  heroImageSrc: IMAGES.accommodation.hayHouseSun,
  heroImageAlt: {
    [Language.EN]: 'The Hay House barn in evening light at The Makers Barn',
    [Language.NL]: 'De Hay House-schuur in avondlicht bij The Makers Barn',
    [Language.DE]: 'Die Hay-House-Scheune im Abendlicht bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Meeting Venue Between Zwolle and Deventer — A Barn, Not a Hotel Room',
      [Language.NL]: 'Vergaderlocatie tussen Zwolle en Deventer — een schuur, geen hotelzaal',
      [Language.DE]: 'Tagungsort zwischen Zwolle und Deventer — eine Scheune, kein Hotelsaal',
    },
    description: {
      [Language.EN]:
        'A 65 m² heated barn in Wijhe for a strategy day or offsite meeting: beamer, screen, sound, wifi, whiteboards, and 1.3 hectares to break out into. 10 to 30 people, one group at a time.',
      [Language.NL]:
        'Een verwarmde schuur van 65 m² in Wijhe voor een heidag of strategiesessie: beamer, scherm, geluid, wifi, whiteboards, en 1,3 hectare om in uiteen te gaan. 10 tot 30 personen, één groep tegelijk.',
      [Language.DE]:
        'Eine beheizte 65-m²-Scheune in Wijhe für Strategietag oder Klausur: Beamer, Leinwand, Ton, WLAN, Whiteboards und 1,3 Hektar für Kleingruppen. 10 bis 30 Personen, eine Gruppe pro Termin.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'Strategy days, board days, planning sessions',
      [Language.NL]: 'Heidagen, MT-dagen, planningssessies',
      [Language.DE]: 'Strategietage, Vorstandstage, Planungssitzungen',
    },
    title: {
      [Language.EN]: 'A Meeting Room With Fields Outside the Window',
      [Language.NL]: 'Een vergaderruimte met velden voor het raam',
      [Language.DE]: 'Ein Besprechungsraum mit Feldern vor dem Fenster',
    },
    subtitle: {
      [Language.EN]:
        'Wijhe, on the line between Zwolle and Deventer. A heated barn that seats thirty, and 1.3 hectares to walk the hard conversation out of the room.',
      [Language.NL]:
        'Wijhe, op de lijn tussen Zwolle en Deventer. Een verwarmde schuur waar dertig mensen in passen, en 1,3 hectare om het moeilijke gesprek de ruimte uit te lopen.',
      [Language.DE]:
        'Wijhe, an der Strecke zwischen Zwolle und Deventer. Eine beheizte Scheune für dreißig Personen und 1,3 Hektar, um das schwierige Gespräch aus dem Raum zu tragen.',
    },
  },
  hook: {
    text: {
      [Language.EN]: 'A strategy day that does not feel like a meeting room.',
      [Language.NL]: 'Een heidag die niet aanvoelt als een vergaderzaal.',
      [Language.DE]: 'Ein Strategietag, der sich nicht wie ein Konferenzraum anfühlt.',
    },
    caption: {
      [Language.EN]:
        'Beamer, screen, sound, wifi and whiteboards. No badges, no corridor, no second group.',
      [Language.NL]:
        'Beamer, scherm, geluid, wifi en whiteboards. Geen badges, geen gang, geen tweede groep.',
      [Language.DE]:
        'Beamer, Leinwand, Ton, WLAN und Whiteboards. Keine Badges, kein Flur, keine zweite Gruppe.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'One room, and a lot of places to break out into',
        [Language.NL]: 'Eén ruimte, en veel plekken om uiteen te gaan',
        [Language.DE]: 'Ein Raum und viele Orte, um sich aufzuteilen',
      },
      body: {
        [Language.EN]: [
          'The Hay House is 65 m² with a heated floor, and it holds a plenary of thirty. What most venues charge extra for — breakout rooms — is here simply the rest of the property: the tea house, the benches by the pond, the attic space, the fire circle, the paths between the trees.',
          'Four groups of five can go four different directions and still be back in ten minutes. That is a different meeting from four groups sitting in four hotel rooms off one corridor.',
        ],
        [Language.NL]: [
          'Het Hay House is 65 m² met vloerverwarming en biedt plaats aan een plenaire sessie van dertig. Waar de meeste locaties extra voor rekenen — breakoutruimtes — is hier simpelweg de rest van het terrein: het theehuis, de banken bij de vijver, de zolderruimte, de vuurplaats, de paden tussen de bomen.',
          'Vier groepjes van vijf kunnen vier kanten op en zijn binnen tien minuten weer terug. Dat is een andere sessie dan vier groepjes in vier hotelkamers aan één gang.',
        ],
        [Language.DE]: [
          'Das Hay House hat 65 m² mit Fußbodenheizung und fasst ein Plenum von dreißig Personen. Wofür die meisten Häuser extra berechnen — Breakout-Räume — ist hier einfach der Rest des Geländes: Teehaus, Bänke am Teich, Dachraum, Feuerstelle, Wege zwischen den Bäumen.',
          'Vier Gruppen zu fünft gehen in vier Richtungen und sind in zehn Minuten zurück. Das ist eine andere Sitzung als vier Gruppen in vier Hotelzimmern an einem Flur.',
        ],
      },
      imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
      imageAlt: {
        [Language.EN]: 'The 65 m² heated Hay House barn set up for a session',
        [Language.NL]: 'De verwarmde Hay House-schuur van 65 m², klaar voor een sessie',
        [Language.DE]: 'Die beheizte 65-m²-Scheune Hay House, für eine Sitzung hergerichtet',
      },
    },
    {
      h2: {
        [Language.EN]: 'The equipment, listed plainly',
        [Language.NL]: 'De techniek, gewoon opgesomd',
        [Language.DE]: 'Die Technik, schlicht aufgelistet',
      },
      body: {
        [Language.EN]: [
          'Beamer and screen. Sound system. Wifi strong enough to run a video call, so a colleague who could not travel can still be in the session. Whiteboards on request. Heated floor, so a January morning is not a coat-on morning.',
          'What there is not: a reception desk, printed name badges, a conference concierge. If your day needs those, a hotel will serve you better and we would rather say so now than on the day.',
        ],
        [Language.NL]: [
          'Beamer en scherm. Geluidsinstallatie. Wifi die een videocall aankan, zodat een collega die niet kon reizen toch in de sessie zit. Whiteboards op verzoek. Vloerverwarming, dus een ochtend in januari is geen jas-aan-ochtend.',
          'Wat er niet is: een receptie, gedrukte naambadges, een congresconciërge. Heeft je dag die nodig, dan ben je bij een hotel beter af, en dat zeggen we liever nu dan op de dag zelf.',
        ],
        [Language.DE]: [
          'Beamer und Leinwand. Soundanlage. WLAN, das eine Videokonferenz trägt, damit auch mitmachen kann, wer nicht anreisen konnte. Whiteboards auf Wunsch. Fußbodenheizung, damit ein Januarmorgen kein Mantel-an-Morgen wird.',
          'Was es nicht gibt: Empfangstresen, gedruckte Namensschilder, einen Kongress-Concierge. Wenn euer Tag das braucht, seid ihr in einem Hotel besser aufgehoben — und das sagen wir lieber jetzt als am Tag selbst.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseBench,
      imageAlt: {
        [Language.EN]: 'A bench outside the Hay House at sunset',
        [Language.NL]: 'Een bank buiten bij het Hay House bij zonsondergang',
        [Language.DE]: 'Eine Bank vor dem Hay House bei Sonnenuntergang',
      },
    },
    {
      h2: {
        [Language.EN]: 'Half a day, a full day, or a day with a fire at the end',
        [Language.NL]: 'Een halve dag, een hele dag, of een dag met vuur aan het eind',
        [Language.DE]: 'Ein halber Tag, ein ganzer Tag oder ein Tag mit Feuer am Ende',
      },
      body: {
        [Language.EN]: [
          'There is no fixed eight-hour package to buy into. A morning session that ends at lunch is fine. So is a day that finishes at the fire circle with the sauna warm, which is where teams tend to say the thing they were circling all afternoon.',
          'Catering is arranged for you: a chef or caterer from our directory who already knows the kitchen, matched to the group size and the diets in it, on the same invoice as the room. The professional kitchen is also there if a group would rather cook its own lunch as the break.',
        ],
        [Language.NL]: [
          'Er is geen vast achturenpakket waar je in moet stappen. Een ochtendsessie die bij de lunch eindigt kan prima. Net als een dag die eindigt bij de vuurplaats met de sauna warm — dat is waar teams meestal zeggen wat ze de hele middag al omcirkelden.',
          'Catering regelen we voor je: een kok of cateraar uit onze gids die de keuken al kent, afgestemd op groepsgrootte en dieetwensen, op dezelfde factuur als de ruimte. De professionele keuken staat er ook als een groep de lunch liever zelf kookt als pauze.',
        ],
        [Language.DE]: [
          'Es gibt kein festes Acht-Stunden-Paket. Eine Vormittagssitzung, die zum Mittag endet, ist in Ordnung. Ebenso ein Tag, der an der Feuerstelle endet, während die Sauna warm ist — dort sagen Teams meist das, worum sie den ganzen Nachmittag herumgeredet haben.',
          'Catering organisieren wir für euch: eine Köchin oder ein Caterer aus unserem Verzeichnis, die die Küche kennen, passend zu Gruppengröße und Ernährungswünschen, auf derselben Rechnung wie der Raum. Die Profiküche ist auch da, falls eine Gruppe das Mittagessen als Pause lieber selbst kocht.',
        ],
      },
      imageSrc: IMAGES.accommodation.fireCircleWoodLogs,
      imageAlt: {
        [Language.EN]: 'Stacked wood beside the fire circle',
        [Language.NL]: 'Gestapeld hout naast de vuurplaats',
        [Language.DE]: 'Gestapeltes Holz neben der Feuerstelle',
      },
    },
    {
      h2: {
        [Language.EN]: 'Reachable without anyone losing an hour',
        [Language.NL]: 'Bereikbaar zonder dat iemand een uur kwijt is',
        [Language.DE]: 'Erreichbar, ohne dass jemand eine Stunde verliert',
      },
      body: {
        [Language.EN]: [
          'Wijhe has its own station on the Zwolle–Deventer line with intercity trains twice an hour: about nine minutes from Zwolle, fifteen from Deventer. We meet the group on the platform.',
          'Driving, it is roughly fifteen minutes from Zwolle, twenty from Deventer, thirty-five from Apeldoorn. Free parking on the land for ten to fifteen cars. From Schiphol, the train to Zwolle takes about an hour and a quarter.',
        ],
        [Language.NL]: [
          'Wijhe heeft een eigen station op de lijn Zwolle–Deventer, met twee keer per uur een intercity: ongeveer negen minuten vanaf Zwolle, vijftien vanaf Deventer. Wij staan op het perron.',
          'Met de auto is het ongeveer vijftien minuten vanaf Zwolle, twintig vanaf Deventer, vijfendertig vanaf Apeldoorn. Gratis parkeren op het erf voor tien tot vijftien auto’s. Vanaf Schiphol duurt de trein naar Zwolle ongeveer een uur en een kwartier.',
        ],
        [Language.DE]: [
          'Wijhe hat einen eigenen Bahnhof an der Strecke Zwolle–Deventer, zweimal pro Stunde ein Intercity: etwa neun Minuten ab Zwolle, fünfzehn ab Deventer. Wir stehen am Bahnsteig.',
          'Mit dem Auto sind es rund fünfzehn Minuten ab Zwolle, zwanzig ab Deventer, fünfunddreißig ab Apeldoorn. Kostenlose Parkplätze auf dem Gelände für zehn bis fünfzehn Autos. Ab Schiphol dauert der Zug nach Zwolle etwa eine Stunde und fünfzehn Minuten.',
        ],
      },
      imageSrc: IMAGES.accommodation.outsideWalk,
      imageAlt: {
        [Language.EN]: 'The path onto the land at The Makers Barn',
        [Language.NL]: 'Het pad naar het erf van The Makers Barn',
        [Language.DE]: 'Der Weg auf das Gelände von The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '65 m²',
      description: {
        [Language.EN]: 'Heated barn with beamer, screen, sound, wifi and whiteboards',
        [Language.NL]: 'Verwarmde schuur met beamer, scherm, geluid, wifi en whiteboards',
        [Language.DE]: 'Beheizte Scheune mit Beamer, Leinwand, Ton, WLAN und Whiteboards',
      },
    },
    {
      number: '10–30',
      description: {
        [Language.EN]: 'Participants in plenary — breakouts spread across the land',
        [Language.NL]: 'Deelnemers plenair — breakouts verspreid over het erf',
        [Language.DE]: 'Teilnehmende im Plenum — Breakouts verteilt über das Gelände',
      },
    },
    {
      number: '1',
      description: {
        [Language.EN]: 'Group on the property per day, one contact, one invoice',
        [Language.NL]: 'Groep per dag op het terrein, één aanspreekpunt, één factuur',
        [Language.DE]: 'Gruppe pro Tag auf dem Gelände, ein Ansprechpartner, eine Rechnung',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A strategy day, sketched',
      [Language.NL]: 'Een heidag, geschetst',
      [Language.DE]: 'Ein Strategietag, skizziert',
    },
    intro: {
      [Language.EN]:
        'One shape that works when a team has a decision to reach. Bring your own agenda and ignore this.',
      [Language.NL]:
        'Eén vorm die werkt als een team tot een besluit moet komen. Heb je een eigen agenda, negeer deze dan.',
      [Language.DE]:
        'Eine Form, die funktioniert, wenn ein Team zu einer Entscheidung kommen muss. Mit eigener Agenda ignoriert ihr das hier.',
    },
    items: [
      {
        time: '09:00',
        activity: {
          [Language.EN]: 'Arrival from the station, coffee, laptops closed',
          [Language.NL]: 'Aankomst vanaf het station, koffie, laptops dicht',
          [Language.DE]: 'Ankunft vom Bahnhof, Kaffee, Laptops zu',
        },
      },
      {
        time: '09:30',
        activity: {
          [Language.EN]: 'Plenary in the barn — frame the decision to be made',
          [Language.NL]: 'Plenair in de schuur — het te nemen besluit scherp krijgen',
          [Language.DE]: 'Plenum in der Scheune — die Entscheidung schärfen',
        },
      },
      {
        time: '11:00',
        activity: {
          [Language.EN]: 'Breakouts across the land — tea house, pond, attic, paths',
          [Language.NL]: 'Breakouts over het erf — theehuis, vijver, zolder, paden',
          [Language.DE]: 'Breakouts über das Gelände — Teehaus, Teich, Dachraum, Wege',
        },
      },
      {
        time: '12:30',
        activity: {
          [Language.EN]: 'Lunch at the long table',
          [Language.NL]: 'Lunch aan de lange tafel',
          [Language.DE]: 'Mittagessen an der langen Tafel',
        },
      },
      {
        time: '14:00',
        activity: {
          [Language.EN]: 'Bring it back together, write the decisions down',
          [Language.NL]: 'Weer bij elkaar, besluiten opschrijven',
          [Language.DE]: 'Wieder zusammenkommen, Entscheidungen aufschreiben',
        },
      },
      {
        time: '16:30',
        activity: {
          [Language.EN]: 'Close, then sauna and fire — or the 17:12 back to Zwolle',
          [Language.NL]: 'Afsluiten, dan sauna en vuur — of de trein terug naar Zwolle',
          [Language.DE]: 'Abschluss, dann Sauna und Feuer — oder der Zug zurück nach Zwolle',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can we book only a half day?',
        [Language.NL]: 'Kunnen we alleen een dagdeel boeken?',
        [Language.DE]: 'Können wir nur einen halben Tag buchen?',
      },
      answer: {
        [Language.EN]:
          'Yes. There is no fixed four- or eight-hour package. Tell us the hours you want and we quote those hours.',
        [Language.NL]:
          'Ja. Er is geen vast vier- of achturenarrangement. Geef door welke uren je wilt, dan offreren we die uren.',
        [Language.DE]:
          'Ja. Es gibt kein festes Vier- oder Acht-Stunden-Arrangement. Nennt uns die Stunden, wir kalkulieren genau diese.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can someone join the session remotely?',
        [Language.NL]: 'Kan iemand op afstand meedoen?',
        [Language.DE]: 'Kann jemand aus der Ferne teilnehmen?',
      },
      answer: {
        [Language.EN]:
          'Yes. The wifi carries a video call and the barn has a beamer, a screen and a sound system, so a hybrid session works. It is still a barn, so bring your own laptop and camera.',
        [Language.NL]:
          'Ja. De wifi kan een videocall aan en de schuur heeft een beamer, een scherm en een geluidsinstallatie, dus een hybride sessie werkt. Het blijft een schuur, dus neem je eigen laptop en camera mee.',
        [Language.DE]:
          'Ja. Das WLAN trägt eine Videokonferenz, und die Scheune hat Beamer, Leinwand und Soundanlage — eine hybride Sitzung funktioniert. Es bleibt eine Scheune: Laptop und Kamera bringt ihr selbst mit.',
      },
    },
    {
      question: {
        [Language.EN]: 'Are there separate breakout rooms?',
        [Language.NL]: 'Zijn er aparte breakoutruimtes?',
        [Language.DE]: 'Gibt es separate Breakout-Räume?',
      },
      answer: {
        [Language.EN]:
          'Not in the hotel sense of four identical rooms off a corridor. Small groups use the tea house, the attic space, the benches by the pond, the fire circle and the paths through the land. In bad weather the barn and the attic take two groups indoors.',
        [Language.NL]:
          'Niet in de hotelzin van vier identieke zalen aan een gang. Kleine groepen gebruiken het theehuis, de zolderruimte, de banken bij de vijver, de vuurplaats en de paden over het erf. Bij slecht weer kunnen de schuur en de zolder twee groepen binnen kwijt.',
        [Language.DE]:
          'Nicht im Hotelsinn von vier gleichen Räumen an einem Flur. Kleingruppen nutzen Teehaus, Dachraum, Bänke am Teich, Feuerstelle und die Wege über das Gelände. Bei schlechtem Wetter fassen Scheune und Dachraum zwei Gruppen drinnen.',
      },
    },
    {
      question: {
        [Language.EN]: 'Does a strategy day count as work for tax purposes?',
        [Language.NL]: 'Telt een heidag fiscaal als zakelijk?',
        [Language.DE]: 'Gilt ein Strategietag steuerlich als geschäftlich?',
      },
      answer: {
        [Language.EN]:
          'A day with a demonstrable work purpose — training, strategy, skills — can fall under a targeted exemption in the Dutch werkkostenregeling rather than the free space. The judgement is your accountant’s, not ours. We will describe the day on the invoice as what it was.',
        [Language.NL]:
          'Een dag met een aantoonbaar zakelijk doel — training, strategie, vaardigheden — kan onder een gerichte vrijstelling in de werkkostenregeling vallen in plaats van in de vrije ruimte. Het oordeel is aan je accountant, niet aan ons. Wij omschrijven de dag op de factuur zoals hij was.',
        [Language.DE]:
          'Ein Tag mit nachweisbar geschäftlichem Zweck — Training, Strategie, Kompetenzen — kann unter eine gezielte Befreiung der niederländischen werkkostenregeling fallen statt in den Freiraum. Das beurteilt eure Buchhaltung, nicht wir. Wir beschreiben den Tag auf der Rechnung so, wie er war.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you cook the lunch?',
        [Language.NL]: 'Verzorgen jullie de lunch?',
        [Language.DE]: 'Macht ihr das Mittagessen?',
      },
      answer: {
        [Language.EN]:
          'We arrange it. A chef or caterer from our directory who knows the kitchen, matched to the group size and its diets, billed with the room. We do not cook it ourselves. The professional kitchen is open to the group if you would rather cook together.',
        [Language.NL]:
          'Wij regelen het. Een kok of cateraar uit onze gids die de keuken kent, afgestemd op de groepsgrootte en de dieetwensen, samen met de ruimte gefactureerd. Zelf koken we niet. De professionele keuken staat open voor de groep als jullie liever samen koken.',
        [Language.DE]:
          'Wir organisieren es. Eine Köchin oder ein Caterer aus unserem Verzeichnis, die die Küche kennen, passend zu Gruppengröße und Ernährungswünschen, zusammen mit dem Raum abgerechnet. Selbst kochen wir nicht. Die Profiküche steht der Gruppe offen, wenn ihr lieber gemeinsam kocht.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Tell us the date and the decision',
      [Language.NL]: 'Vertel ons de datum en het besluit',
      [Language.DE]: 'Nennt uns Datum und Entscheidung',
    },
    body: {
      [Language.EN]:
        'Group size, the hours you want, and what the team has to work out. We come back with the room set up for it and one price.',
      [Language.NL]:
        'Groepsgrootte, de uren die je wilt, en wat het team eruit moet komen. Wij komen terug met de ruimte daarop ingericht en één prijs.',
      [Language.DE]:
        'Gruppengröße, gewünschte Stunden und was das Team klären muss. Wir melden uns mit dem passend eingerichteten Raum und einem Preis.',
    },
  },
  organizerSeo: {
    keywords: {
      [Language.EN]: [
        'meeting venue Zwolle',
        'meeting venue Deventer',
        'offsite meeting room Netherlands',
        'strategy day venue Overijssel',
      ],
      [Language.NL]: [
        'vergaderlocatie Zwolle',
        'vergaderlocatie Deventer',
        'heidag locatie Overijssel',
        'brainstormdag locatie',
        'vergaderen in de natuur Salland',
        'MT-dag locatie Wijhe',
      ],
      [Language.DE]: [
        'Tagungsort Zwolle',
        'Tagungsraum Deventer',
        'Klausurtagung Niederlande',
        'Strategietag Location Overijssel',
      ],
    },
    audience: {
      [Language.EN]: 'Leadership teams, boards and facilitators running a strategy or planning day',
      [Language.NL]: 'MT’s, besturen en facilitators die een heidag of planningsdag draaien',
      [Language.DE]: 'Führungsteams, Vorstände und Moderatoren mit Strategie- oder Planungstag',
    },
    cohortSize: { min: 10, max: 30 },
    dayProgramCapacityOverride: 30,
  },
}
