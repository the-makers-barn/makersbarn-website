import { ComparisonContent, Language } from '@/types'

export const COMPARISON_CONTENT: ComparisonContent = {
  meta: {
    title: {
      [Language.EN]: 'A Quiet Alternative to a Commercial Retreat Hotel',
      [Language.NL]: 'Een rustig alternatief voor een commerciële retraitelocatie',
      [Language.DE]: 'Eine ruhige Alternative zu einem kommerziellen Retreat-Hotel',
    },
    description: {
      [Language.EN]:
        'How a private 1.3-hectare farm differs from a commercial retreat hotel — capacity, kitchen, soundscape, common spaces. An honest comparison, not a sales pitch.',
      [Language.NL]:
        'Hoe een eigen boerderij van 1.3 hectare verschilt van een commerciële retraitelocatie — capaciteit, keuken, geluidsbeeld, gedeelde ruimtes. Een eerlijke vergelijking, geen verkooppraatje.',
      [Language.DE]:
        'Was einen privaten Hof von 1,3 Hektar von einem kommerziellen Retreat-Hotel unterscheidet — Kapazität, Küche, Klanglandschaft, Gemeinschaftsräume. Ein ehrlicher Vergleich, kein Verkaufsgespräch.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'Comparing options',
      [Language.NL]: 'Opties vergelijken',
      [Language.DE]: 'Optionen vergleichen',
    },
    title: {
      [Language.EN]: 'A Quiet Alternative to a Commercial Retreat Hotel',
      [Language.NL]: 'Een rustig alternatief voor een commerciële retraitelocatie',
      [Language.DE]: 'Eine ruhige Alternative zu einem kommerziellen Retreat-Hotel',
    },
    intro: {
      [Language.EN]:
        'If you are choosing between a small private farm and a commercial retreat hotel for your group, this page is what we would tell you over the phone — without the sales pitch.',
      [Language.NL]:
        'Als je kiest tussen een kleine eigen boerderij en een commerciële retraitelocatie voor je groep, is dit wat we je telefonisch zouden vertellen — zonder verkooppraatje.',
      [Language.DE]:
        'Wenn du für deine Gruppe zwischen einem kleinen privaten Hof und einem kommerziellen Retreat-Hotel schwankst, steht auf dieser Seite das, was wir dir am Telefon sagen würden — ohne Verkaufsgespräch.',
    },
  },
  twoModels: {
    h2: {
      [Language.EN]: 'Two valid models, optimised for different things',
      [Language.NL]: 'Twee geldige modellen, geoptimaliseerd voor verschillende dingen',
      [Language.DE]: 'Zwei sinnvolle Modelle, jeweils auf etwas anderes ausgerichtet',
    },
    body: {
      [Language.EN]: [
        'Commercial retreat hotels optimise for throughput, scale, and consistency. Those are the strengths of a hotel: 24-hour reception, multilingual front desk, large kitchens running set menus, conference rooms that can be converted between groups in an hour. If your retreat needs sixty rooms and predictable everything, that is the right shape.',
        'Slow-living farms like ours optimise for atmosphere, agency, and the kind of quiet that needs distance. We are smaller, less polished in a hospitality sense, and bound by what fourteen beds and one private kitchen can do. If your retreat needs full venue buyout and a kitchen that adapts to your schedule, that is what we are.',
        'Both are right. The page below is about the trade-offs — what changes when you pick one over the other, in plain language.',
      ],
      [Language.NL]: [
        'Commerciële retraitelocaties optimaliseren voor doorvoer, schaal en consistentie. Dat zijn de sterke punten van een hotel: 24-uurs receptie, meertalige balie, grote keukens met vaste menukaarten, vergaderzalen die binnen een uur tussen groepen omgebouwd kunnen worden. Als je retraite zestig kamers en voorspelbaarheid in alles nodig heeft, is dat de juiste vorm.',
        'Slow-living boerderijen zoals die van ons optimaliseren voor sfeer, regie en het soort stilte dat afstand nodig heeft. We zijn kleiner, in horeca-zin minder gepolijst, en gebonden aan wat veertien bedden en één privékeuken kunnen. Als je retraite een volledige buyout en een keuken die zich aanpast aan jouw schema nodig heeft, dan zijn wij dat.',
        'Allebei kloppen. De pagina hieronder gaat over de afwegingen — wat verandert er wanneer je voor het ene of het andere kiest, in gewone taal.',
      ],
      [Language.DE]: [
        'Kommerzielle Retreat-Hotels sind auf Durchsatz, Skalierung und Konsistenz ausgelegt. Das sind die Stärken eines Hotels: 24-Stunden-Rezeption, mehrsprachiger Empfang, große Küchen mit festen Menüs, Tagungsräume, die sich in einer Stunde zwischen Gruppen umrüsten lassen. Wenn dein Retreat sechzig Zimmer und in allem Verlässlichkeit braucht, ist das die richtige Form.',
        'Slow-Living-Höfe wie unserer sind auf Atmosphäre, Eigenverantwortung und die Art von Stille ausgelegt, für die es Abstand braucht. Wir sind kleiner, im Hotelsinn weniger durchgestylt und an das gebunden, was vierzehn Betten und eine private Küche leisten können. Wenn dein Retreat eine komplette Anmietung und eine Küche braucht, die sich nach deinem Zeitplan richtet, dann sind wir das.',
        'Beides hat seine Berechtigung. Auf der Seite unten geht es um die Abwägungen — was sich ändert, wenn du dich für das eine oder andere entscheidest, in einfachen Worten.',
      ],
    },
  },
  table: {
    h2: {
      [Language.EN]: 'What changes — side by side',
      [Language.NL]: 'Wat verandert er — naast elkaar',
      [Language.DE]: 'Was sich ändert — nebeneinander',
    },
    columnLabelCommercial: {
      [Language.EN]: 'Commercial retreat hotel',
      [Language.NL]: 'Commerciële retraitelocatie',
      [Language.DE]: 'Kommerzielles Retreat-Hotel',
    },
    columnLabelMakersBarn: {
      [Language.EN]: 'The Makers Barn',
      [Language.NL]: 'The Makers Barn',
      [Language.DE]: 'The Makers Barn',
    },
    rows: [
      {
        label: {
          [Language.EN]: 'Capacity',
          [Language.NL]: 'Capaciteit',
          [Language.DE]: 'Kapazität',
        },
        commercial: {
          [Language.EN]: '60–200 guests',
          [Language.NL]: '60–200 gasten',
          [Language.DE]: '60–200 Gäste',
        },
        makersBarn: {
          [Language.EN]: 'Up to 20',
          [Language.NL]: 'Tot 20',
          [Language.DE]: 'Bis zu 20',
        },
      },
      {
        label: {
          [Language.EN]: 'Other groups on-site',
          [Language.NL]: 'Andere groepen op locatie',
          [Language.DE]: 'Andere Gruppen vor Ort',
        },
        commercial: {
          [Language.EN]: 'Often',
          [Language.NL]: 'Vaak',
          [Language.DE]: 'Oft',
        },
        makersBarn: {
          [Language.EN]: 'Never',
          [Language.NL]: 'Nooit',
          [Language.DE]: 'Nie',
        },
      },
      {
        label: {
          [Language.EN]: 'Kitchen',
          [Language.NL]: 'Keuken',
          [Language.DE]: 'Küche',
        },
        commercial: {
          [Language.EN]: 'Set menu, fixed times',
          [Language.NL]: 'Vast menu, vaste tijden',
          [Language.DE]: 'Festes Menü, feste Zeiten',
        },
        makersBarn: {
          [Language.EN]: 'Built around your schedule',
          [Language.NL]: 'Aangepast aan jouw schema',
          [Language.DE]: 'Nach deinem Zeitplan',
        },
      },
      {
        label: {
          [Language.EN]: 'Soundscape',
          [Language.NL]: 'Geluidsbeeld',
          [Language.DE]: 'Klanglandschaft',
        },
        commercial: {
          [Language.EN]: 'Other guests, lifts, bar',
          [Language.NL]: 'Andere gasten, liften, bar',
          [Language.DE]: 'Andere Gäste, Aufzüge, Bar',
        },
        makersBarn: {
          [Language.EN]: 'Wind, fire, the pond',
          [Language.NL]: 'Wind, vuur, de vijver',
          [Language.DE]: 'Wind, Feuer, der Teich',
        },
      },
      {
        label: {
          [Language.EN]: 'Common spaces',
          [Language.NL]: 'Gedeelde ruimtes',
          [Language.DE]: 'Gemeinschaftsräume',
        },
        commercial: {
          [Language.EN]: 'Shared with strangers',
          [Language.NL]: 'Gedeeld met onbekenden',
          [Language.DE]: 'Mit Fremden geteilt',
        },
        makersBarn: {
          [Language.EN]: 'Yours for the week',
          [Language.NL]: 'Van jullie de hele week',
          [Language.DE]: 'Die ganze Woche euch allein',
        },
      },
      {
        label: {
          [Language.EN]: 'Booking model',
          [Language.NL]: 'Boekingsmodel',
          [Language.DE]: 'Buchungsmodell',
        },
        commercial: {
          [Language.EN]: 'Per room, per night',
          [Language.NL]: 'Per kamer, per nacht',
          [Language.DE]: 'Pro Zimmer, pro Nacht',
        },
        makersBarn: {
          [Language.EN]: 'The whole farm, your way',
          [Language.NL]: 'De hele boerderij, jouw manier',
          [Language.DE]: 'Der ganze Hof, ganz nach deinen Vorstellungen',
        },
      },
    ],
  },
  whatYouTrade: {
    h2: {
      [Language.EN]: 'What you trade — honestly',
      [Language.NL]: 'Wat je inruilt — eerlijk',
      [Language.DE]: 'Was du eintauschst — ehrlich',
    },
    body: {
      [Language.EN]: [
        'You trade a 24-hour reception for our phone numbers. We are reachable, but we are not standing behind a counter at 03:00. If something is genuinely urgent we are fifteen minutes away — for everything else, the morning works.',
        'You trade lift access for two staircases and a heated barn. Horizon is a converted hay barn — beautiful, but with stairs. Cosmos is on ground level. If your retreat needs fully step-free access, please tell us at booking and we can map out which rooms work.',
        'You trade a hotel spa menu for a sauna, a swimming pond, and a fire circle. There is no spa attendant. The sauna is heated by us on the schedule you tell us, the pond is a natural body of water with a jetty, and the fire is your responsibility once it is lit. Different shape, not less of it.',
      ],
      [Language.NL]: [
        'Je ruilt een 24-uurs receptie in voor onze telefoonnummers. We zijn bereikbaar, maar we staan niet om 03.00 uur achter een balie. Als er echt iets dringends is, zijn we vijftien minuten weg — voor de rest werkt de ochtend prima.',
        'Je ruilt liftbereikbaarheid in voor twee trappen en een verwarmde schuur. Horizon is een omgebouwde hooischuur — mooi, maar met trappen. Cosmos staat op de begane grond. Als je retraite volledig drempelvrije toegang nodig heeft, laat dat dan bij boeking weten en we brengen in kaart welke kamers werken.',
        'Je ruilt een hotelspa-menu in voor een sauna, een zwemvijver en een vuurplaats. Er is geen spa-medewerker. De sauna verwarmen wij op het schema dat jij ons doorgeeft, de vijver is een natuurlijk water met een steiger, en het vuur is jouw verantwoordelijkheid zodra het aan is. Andere vorm, niet minder ervan.',
      ],
      [Language.DE]: [
        'Du tauschst die 24-Stunden-Rezeption gegen unsere Telefonnummern. Wir sind erreichbar, stehen aber nicht um 3 Uhr nachts hinter einem Tresen. Wenn wirklich etwas dringend ist, sind wir fünfzehn Minuten entfernt — alles andere hat Zeit bis zum Morgen.',
        'Du tauschst den Aufzug gegen zwei Treppen und eine beheizte Scheune. Horizon ist eine umgebaute Heuscheune — schön, aber mit Treppen. Cosmos liegt im Erdgeschoss. Wenn dein Retreat komplett stufenfreien Zugang braucht, sag uns das bitte bei der Buchung, dann schauen wir, welche Zimmer passen.',
        'Du tauschst die Hotel-Spa-Karte gegen eine Sauna, einen Schwimmteich und eine Feuerstelle. Es gibt keinen Spa-Mitarbeiter. Die Sauna heizen wir nach dem Zeitplan, den du uns nennst, der Teich ist ein natürliches Gewässer mit Steg, und das Feuer liegt in deiner Verantwortung, sobald es brennt. Eine andere Form — nicht weniger davon.',
      ],
    },
  },
  whatYouGain: {
    h2: {
      [Language.EN]: 'What you gain',
      [Language.NL]: 'Wat je wint',
      [Language.DE]: 'Was du gewinnst',
    },
    body: {
      [Language.EN]: [
        'Privacy. The farm is yours from arrival to departure — no other groups walking through the practice barn at 11 AM, no other guests at the long table, no shared bathrooms with strangers in robes.',
        'A kitchen that moves with your retreat. Catering can be timed around your sessions rather than the other way around — early breakfast for a 6 AM yoga, silent lunch for a meditation day, long late dinner for an offsite. We pre-stock the kitchen for your dietary spread before you arrive.',
        'A practice space that no one else walks through. The Hay House is yours alone for the week. We do not turn the heating off between your sessions to save energy because there is nothing else heating the room.',
        'A team of three who remembers your name. Not five front-desk staff on a rotation. The same three of us who built the farm are the ones answering your call about the catering or unlocking the sauna.',
      ],
      [Language.NL]: [
        'Privacy. De boerderij is van jullie van aankomst tot vertrek — geen andere groepen die om 11.00 uur door de praktijkruimte lopen, geen andere gasten aan de lange tafel, geen gedeelde badkamers met onbekenden in badjassen.',
        'Een keuken die meebeweegt met je retraite. Catering kan rond jouw sessies getimed worden in plaats van andersom — vroeg ontbijt voor yoga om 6.00 uur, stille lunch voor een meditatiedag, lange late maaltijd voor een offsite. We vullen de keuken vooraf met jouw dieetwensen.',
        'Een praktijkruimte waar niemand anders doorheen loopt. De Hay House is de hele week alleen van jullie. We zetten de verwarming tussen sessies niet uit om energie te besparen, want er is niets anders dat de ruimte verwarmt.',
        'Een team van drie dat je naam onthoudt. Geen vijf receptiemedewerkers in een rooster. Dezelfde drie van ons die de boerderij hebben opgebouwd zijn degenen die je telefoon over de catering opnemen of de sauna openen.',
      ],
      [Language.DE]: [
        'Privatsphäre. Der Hof gehört euch von der Ankunft bis zur Abreise — keine anderen Gruppen, die um 11 Uhr durch den Übungsraum laufen, keine fremden Gäste am langen Tisch, keine geteilten Bäder mit Unbekannten im Bademantel.',
        'Eine Küche, die sich nach eurem Retreat richtet. Die Mahlzeiten passen sich euren Sessions an statt umgekehrt — frühes Frühstück vor dem 6-Uhr-Yoga, stilles Mittagessen am Meditationstag, langes spätes Abendessen beim Offsite. Wir füllen die Küche schon vor eurer Ankunft mit euren Ernährungswünschen.',
        'Ein Übungsraum, durch den niemand anders läuft. Das Hay House gehört euch die ganze Woche allein. Wir drehen die Heizung zwischen euren Sessions nicht ab, um Energie zu sparen — denn niemand sonst nutzt den Raum.',
        'Ein Team aus drei Leuten, das sich deinen Namen merkt. Nicht fünf Rezeptionskräfte im Schichtdienst. Dieselben drei, die den Hof aufgebaut haben, gehen ans Telefon, wenn es ums Essen geht, und schließen dir die Sauna auf.',
      ],
    },
  },
  thirdOption: {
    h2: {
      [Language.EN]: 'A third option many groups use',
      [Language.NL]: 'Een derde optie die veel groepen gebruiken',
      [Language.DE]: 'Eine dritte Option, die viele Gruppen nutzen',
    },
    body: {
      [Language.EN]: [
        'Some teachers and facilitators do both — they run open-enrolment retreats at a commercial venue, where the scale and consistency are the right fit, and bring smaller, more advanced cohorts here. We have hosted teachers whose flagship offering is a forty-person hotel-based retreat and whose annual private intensive is twelve people in our barn.',
        'Some companies do the same shape — annual all-hands at a hotel that can hold the full org, leadership offsites here for the conversations that need fewer people in the room.',
        'Both shapes are healthy. The decision is not "one is better than the other" — it is "which one fits this specific group I am bringing."',
      ],
      [Language.NL]: [
        'Sommige docenten en facilitators doen beide — ze runnen open-inschrijving retraites op een commerciële locatie, waar de schaal en consistentie passen, en brengen kleinere, meer gevorderde cohorten hierheen. We hebben docenten ontvangen wier vlaggenschip een retraite voor veertig mensen in een hotel is, en wier jaarlijkse privé-intensive twaalf mensen in onze schuur is.',
        'Sommige bedrijven doen dezelfde vorm — jaarlijkse all-hands op een hotel dat de volledige organisatie aankan, leiderschapsoffsites hier voor de gesprekken die minder mensen in de ruimte vragen.',
        'Beide vormen zijn gezond. De beslissing is niet "het ene is beter dan het andere" — het is "welke past bij deze specifieke groep die ik meebreng."',
      ],
      [Language.DE]: [
        'Manche Lehrer und Facilitatoren machen beides — offene Retreats in einem kommerziellen Haus, wo Größe und Verlässlichkeit passen, und kleinere, fortgeschrittenere Gruppen dann bei uns. Wir hatten schon Lehrer zu Gast, deren Hauptangebot ein Retreat mit vierzig Leuten im Hotel ist und deren jährliches privates Intensiv zwölf Leute in unserer Scheune sind.',
        'Manche Unternehmen machen es genauso — das jährliche All-Hands in einem Hotel, das die ganze Belegschaft fasst, und die Leadership-Offsites hier, für die Gespräche, die weniger Menschen im Raum vertragen.',
        'Beide Formen haben ihren Sinn. Die Frage lautet nicht „was ist besser" — sondern „was passt zu genau dieser Gruppe, die ich mitbringe".',
      ],
    },
  },
  finalCta: {
    title: {
      [Language.EN]: 'See if a private farm-buyout fits your group',
      [Language.NL]: 'Kijk of een eigen-boerderij-buyout past bij je groep',
      [Language.DE]: 'Schau, ob die komplette Anmietung des Hofs zu deiner Gruppe passt',
    },
    body: {
      [Language.EN]:
        'If a small private farm sounds like the right shape for the work you are bringing, the silos below go deeper into what we offer for specific kinds of groups. If you are still deciding, write to us — we will tell you honestly whether we are the fit.',
      [Language.NL]:
        'Als een kleine eigen boerderij de juiste vorm lijkt voor het werk dat je meebrengt, gaan de retraite-types hieronder dieper in op wat we bieden voor specifieke soorten groepen. Twijfel je nog, schrijf ons dan — we zeggen eerlijk of wij de juiste plek zijn.',
      [Language.DE]:
        'Wenn ein kleiner privater Hof die richtige Form für deine Arbeit zu sein scheint, gehen die Bereiche unten tiefer darauf ein, was wir für bestimmte Arten von Gruppen anbieten. Wenn du noch überlegst, schreib uns — wir sagen dir ehrlich, ob wir zusammenpassen.',
    },
  },
}
