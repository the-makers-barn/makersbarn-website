import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const ART_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.ART_RETREATS,
  route: Route.ART_RETREATS,
  heroImageSrc: IMAGES.accommodation.hayHouseSun,
  heroImageAlt: {
    [Language.EN]: 'The Hay House barn studio glowing in the evening sun',
    [Language.NL]: 'De Hay House-schuur als atelier, oplichtend in de avondzon',
    [Language.DE]: 'Die Hay-House-Scheune als Atelier im Licht der Abendsonne',
  },
  meta: {
    title: {
      [Language.EN]: 'Art Retreat Venue — Overijssel, Netherlands',
      [Language.NL]: 'Locatie voor kunstretraites — Overijssel, Nederland',
      [Language.DE]: 'Ort für Kunst-Retreats — Overijssel, Niederlande',
    },
    description: {
      [Language.EN]:
        'A 1.3-hectare farm in Overijssel for artists and creative facilitators running multi-day retreats. A 65 m² barn studio, planted woodland and a sculpture-garden castle for plein-air work, accommodation for the cohort.',
      [Language.NL]:
        'Een boerderij van 1,3 hectare in Overijssel voor kunstenaars en creatieve begeleiders die meerdaagse retraites leiden. Een atelier van 65 m² in de schuur, aangeplant bos en een kasteel met beeldentuin voor plein-airwerk, accommodatie voor het cohort.',
      [Language.DE]:
        'Ein Hof von 1,3 Hektar in Overijssel für Künstler:innen und kreative Leiter:innen, die mehrtägige Retreats halten. Ein 65 m² großes Atelier in der Scheune, gepflanzter Wald und ein Schloss mit Skulpturengarten für Pleinair-Arbeit, Unterkunft für die Gruppe.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For artists & creative facilitators',
      [Language.NL]: 'Voor kunstenaars & creatieve begeleiders',
      [Language.DE]: 'Für Künstler:innen & kreative Leiter:innen',
    },
    title: {
      [Language.EN]: 'A Barn Studio for Multi-Day Art & Creative Retreats',
      [Language.NL]: 'Een schuuratelier voor meerdaagse kunst- en creatieve retraites',
      [Language.DE]: 'Ein Scheunenatelier für mehrtägige Kunst- und Kreativ-Retreats',
    },
    subtitle: {
      [Language.EN]:
        'Sixty-five square metres of working space, twelve hundred trees we planted, a sculpture garden five minutes away. A base camp that handles the bedding and the meals so you can spend the day teaching the work.',
      [Language.NL]:
        'Vijfenzestig vierkante meter werkruimte, twaalfhonderd bomen die we hebben geplant, een beeldentuin op vijf minuten. Een basis die het beddengoed en de maaltijden regelt, zodat jij de dag aan het werk kunt besteden.',
      [Language.DE]:
        'Fünfundsechzig Quadratmeter Arbeitsfläche, zwölfhundert Bäume, die wir gepflanzt haben, ein Skulpturengarten fünf Minuten entfernt. Ein Basislager, das Bettwäsche und Mahlzeiten übernimmt, damit du den Tag der Arbeit widmen kannst.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A studio for the morning, a horizon for the afternoon, a long table for the evening critique.',
      [Language.NL]:
        'Een atelier voor de ochtend, een horizon voor de middag, een lange tafel voor de avondbespreking.',
      [Language.DE]:
        'Ein Atelier für den Morgen, ein Horizont für den Nachmittag, ein langer Tisch für die abendliche Critique.',
    },
    caption: {
      [Language.EN]:
        'Built for cohorts of six to twelve, three to seven days, residential.',
      [Language.NL]:
        'Geschikt voor cohorten van zes tot twaalf, drie tot zeven dagen, residentieel.',
      [Language.DE]:
        'Gemacht für Gruppen von sechs bis zwölf, drei bis sieben Tage, mit Übernachtung.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A barn that becomes your studio for the week',
        [Language.NL]: 'Een schuur die een week lang je atelier wordt',
        [Language.DE]: 'Eine Scheune, die eine Woche lang zu deinem Atelier wird',
      },
      body: {
        [Language.EN]: [
          'The Hay House practice barn is sixty-five square metres of heated wooden floor with dimmable light, a sound system, and room for a circle of twelve to spread out at their own easels or tables. Big doors and windows mean generous daylight — though it shifts through the day, so this is a working barn rather than a fixed north-light studio.',
          'It is a wooden floor, so we are honest about mess: dust sheets and floor covering come standard, and the messiest or solvent-heavy work moves to the courtyard or outdoors in good weather. Tell us your medium at booking and we set the room up for it.',
        ],
        [Language.NL]: [
          'De Hay House-praktijkruimte is vijfenzestig vierkante meter verwarmde houten vloer met dimbaar licht, een geluidssysteem en ruimte voor een kring van twaalf om aan eigen ezels of tafels te werken. Grote deuren en ramen zorgen voor royaal daglicht — al verschuift dat door de dag, dus dit is een werkschuur en geen vast noorderlicht-atelier.',
          'Het is een houten vloer, dus we zijn eerlijk over rommel: stofdoeken en vloerbedekking horen er standaard bij, en het meest rommelige of oplosmiddelrijke werk verhuist naar de binnenplaats of naar buiten bij goed weer. Laat ons bij de boeking je medium weten, dan richten we de ruimte daarop in.',
        ],
        [Language.DE]: [
          'Die Hay-House-Praxisscheune sind fünfundsechzig Quadratmeter beheizter Holzboden mit dimmbarem Licht, einer Soundanlage und Platz für einen Kreis von zwölf, die an eigenen Staffeleien oder Tischen arbeiten. Große Türen und Fenster sorgen für reichlich Tageslicht — das sich allerdings über den Tag verschiebt, dies ist also eine Arbeitsscheune und kein festes Nordlicht-Atelier.',
          'Es ist ein Holzboden, deshalb sind wir ehrlich, was Schmutz angeht: Abdeckplanen und Bodenschutz gehören zum Standard, und die schmutzigste oder lösungsmittelintensive Arbeit verlagert sich bei gutem Wetter in den Hof oder nach draußen. Sag uns bei der Buchung dein Medium, dann richten wir den Raum dafür ein.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House barn at the golden hour',
        [Language.NL]: 'Hay House-schuur op het gouden uur',
        [Language.DE]: 'Hay-House-Scheune zur goldenen Stunde',
      },
    },
    {
      h2: {
        [Language.EN]: 'Subjects and inspiration outside the door',
        [Language.NL]: 'Onderwerpen en inspiratie buiten de deur',
        [Language.DE]: 'Motive und Inspiration vor der Tür',
      },
      body: {
        [Language.EN]: [
          'On the farm itself: twelve hundred planted trees, a swimming pond, a thatched teahouse, the long Salland horizon. Five minutes away: the IJssel river and Kasteel Nijenhuis, a 17th-century castle with a sculpture garden that draws painters and drawing groups year-round.',
          'Within thirty minutes: the Sallandse Heuvelrug national park for landscape work and three Hanseatic towns for urban sketching. For plein-air retreats, the subject changes with the weather and the season — and the studio is a five-minute walk back when the light goes.',
        ],
        [Language.NL]: [
          'Op de boerderij zelf: twaalfhonderd aangeplante bomen, een zwemvijver, een rieten theehuis, de lange Salland-horizon. Op vijf minuten: de IJssel en Kasteel Nijenhuis, een 17e-eeuws kasteel met een beeldentuin die het hele jaar door schilders en tekengroepen trekt.',
          'Binnen dertig minuten: het Nationaal Park Sallandse Heuvelrug voor landschapswerk en drie Hanzesteden om de stad te schetsen. Voor plein-airretraites verandert het onderwerp met het weer en het seizoen — en het atelier is op vijf minuten lopen als het licht wegtrekt.',
        ],
        [Language.DE]: [
          'Auf dem Hof selbst: zwölfhundert gepflanzte Bäume, ein Schwimmteich, ein reetgedecktes Teehaus, der weite Salland-Horizont. Fünf Minuten entfernt: die IJssel und Kasteel Nijenhuis, ein Schloss aus dem 17. Jahrhundert mit einem Skulpturengarten, der das ganze Jahr über Maler:innen und Zeichengruppen anzieht.',
          'Innerhalb von dreißig Minuten: der Nationalpark Sallandse Heuvelrug für Landschaftsarbeit und drei Hansestädte für Urban Sketching. Für Pleinair-Retreats wechselt das Motiv mit Wetter und Jahreszeit — und das Atelier ist nur fünf Gehminuten entfernt, wenn das Licht schwindet.',
        ],
      },
      imageSrc: IMAGES.location.kasteelNijenhuis,
      imageAlt: {
        [Language.EN]: 'Kasteel Nijenhuis castle with sculpture gardens',
        [Language.NL]: 'Kasteel Nijenhuis met beeldentuinen',
        [Language.DE]: 'Schloss Kasteel Nijenhuis mit Skulpturengärten',
      },
    },
    {
      h2: {
        [Language.EN]: 'A long table for the evening critique',
        [Language.NL]: 'Een lange tafel voor de avondbespreking',
        [Language.DE]: 'Ein langer Tisch für die abendliche Critique',
      },
      body: {
        [Language.EN]: [
          'After dinner the long table becomes the place to pin work up, talk it through, and look at the day together. We handle the meals — local, generous, and timed around your studio hours rather than a hotel service window — so the evening stays about the work.',
          'Most art retreats run a morning studio session, an afternoon out with the subject or back at the easel, and an evening share. Whatever the rhythm, the kitchen opens when you tell us and the barn stays yours for the whole stay.',
        ],
        [Language.NL]: [
          'Na het eten wordt de lange tafel de plek om werk op te hangen, het te bespreken en samen naar de dag te kijken. Wij regelen de maaltijden — lokaal, gul en afgestemd op jouw atelieruren in plaats van een hotelserviceluik — zodat de avond over het werk blijft gaan.',
          'De meeste kunstretraites draaien een ochtendsessie in het atelier, een middag buiten met het onderwerp of terug aan de ezel, en een avondbespreking. Wat het ritme ook is, de keuken gaat open wanneer jij het zegt en de schuur blijft de hele tijd van jullie.',
        ],
        [Language.DE]: [
          'Nach dem Essen wird der lange Tisch zum Ort, an dem Arbeiten aufgehängt, besprochen und der Tag gemeinsam betrachtet wird. Wir übernehmen die Mahlzeiten — lokal, großzügig und auf deine Atelierzeiten abgestimmt statt auf ein Hotel-Servicefenster — damit der Abend bei der Arbeit bleibt.',
          'Die meisten Kunst-Retreats halten eine Atelier-Session am Morgen, einen Nachmittag draußen mit dem Motiv oder zurück an der Staffelei und eine Besprechung am Abend. Wie der Rhythmus auch ist, die Küche öffnet, wenn du es sagst, und die Scheune bleibt den ganzen Aufenthalt über eure.',
        ],
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'A long shared table at The Makers Barn',
        [Language.NL]: 'Een lange gedeelde tafel bij The Makers Barn',
        [Language.DE]: 'Ein langer gemeinsamer Tisch bei The Makers Barn',
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
      },
    },
    {
      number: '65 m²',
      description: {
        [Language.EN]: 'Heated barn studio with dimmable light and room for twelve',
        [Language.NL]: 'Verwarmd schuuratelier met dimbaar licht en plek voor twaalf',
        [Language.DE]: 'Beheiztes Scheunenatelier mit dimmbarem Licht und Platz für zwölf',
      },
    },
    {
      number: '5 min',
      description: {
        [Language.EN]: 'To the IJssel river and the Kasteel Nijenhuis sculpture park',
        [Language.NL]: 'Naar de IJssel en de beeldentuin van Kasteel Nijenhuis',
        [Language.DE]: 'Zur IJssel und zum Skulpturenpark von Kasteel Nijenhuis',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Can we paint indoors with oils, solvents, or fixatives — is there ventilation?',
        [Language.NL]: 'Kunnen we binnen schilderen met olieverf, oplosmiddelen of fixatief — is er ventilatie?',
        [Language.DE]: 'Können wir drinnen mit Ölfarben, Lösungsmitteln oder Fixativ malen — gibt es eine Belüftung?',
      },
      answer: {
        [Language.EN]:
          'The barn has big doors and windows that open for airflow, which is fine for most water-based and light studio work. There is no mechanical extraction, so heavy solvent work, oil painting in volume, and spray fixing are outdoor or courtyard activities here — easy in good weather, which is most of the season.',
        [Language.NL]:
          'De schuur heeft grote deuren en ramen die opengaan voor luchtcirculatie, wat prima is voor het meeste werk op waterbasis en licht atelierwerk. Er is geen mechanische afzuiging, dus zwaar werk met oplosmiddelen, veel olieverf en spuitfixeren doe je hier buiten of op de binnenplaats — makkelijk bij goed weer, en dat is het grootste deel van het seizoen.',
        [Language.DE]:
          'Die Scheune hat große Türen und Fenster, die sich für die Luftzirkulation öffnen lassen, was für die meiste Arbeit auf Wasserbasis und leichte Atelierarbeit ausreicht. Es gibt keine mechanische Absaugung, daher sind intensive Lösungsmittelarbeit, Ölmalerei in größerem Umfang und Sprühfixieren hier Aktivitäten für draußen oder den Hof — bei gutem Wetter problemlos, und das ist der größte Teil der Saison.',
      },
    },
    {
      question: {
        [Language.EN]: 'What about the floor and mess — and damage?',
        [Language.NL]: 'Hoe zit het met de vloer en rommel — en schade?',
        [Language.DE]: 'Was ist mit dem Boden und dem Schmutz — und mit Schäden?',
      },
      answer: {
        [Language.EN]:
          'The studio is a heated wooden floor, so we cover it. Dust sheets and floor protection come standard, we ask that solvent and wet-clay work happens on covered surfaces or outdoors, and we take a refundable damage deposit for art retreats. Tell us your medium when you book and we will agree the set-up in advance.',
        [Language.NL]:
          'Het atelier heeft een verwarmde houten vloer, dus die dekken we af. Stofdoeken en vloerbescherming horen er standaard bij, we vragen om werk met oplosmiddelen en natte klei op afgedekte oppervlakken of buiten te doen, en we vragen een terugbetaalbare borg voor kunstretraites. Laat bij de boeking je medium weten, dan spreken we de inrichting vooraf af.',
        [Language.DE]:
          'Das Atelier hat einen beheizten Holzboden, deshalb decken wir ihn ab. Abdeckplanen und Bodenschutz gehören zum Standard, wir bitten darum, Arbeit mit Lösungsmitteln und nassem Ton auf abgedeckten Flächen oder draußen zu erledigen, und wir nehmen für Kunst-Retreats eine erstattbare Kaution. Sag uns bei der Buchung dein Medium, dann stimmen wir den Aufbau vorab ab.',
      },
    },
    {
      question: {
        [Language.EN]: 'Where do we wash brushes and dispose of solvent waste?',
        [Language.NL]: 'Waar wassen we kwasten en laten we oplosmiddelafval achter?',
        [Language.DE]: 'Wo waschen wir Pinsel und entsorgen Lösungsmittelabfall?',
      },
      answer: {
        [Language.EN]:
          'Utility and kitchen sinks handle water-based clean-up. Solvent waste cannot go into the farm’s septic system, so please bring sealable containers and take spent solvent and oil-paint waste away with you. We can point you to the local recycling point if you need one.',
        [Language.NL]:
          'Bijkeuken- en keukengootstenen zijn er voor het schoonmaken op waterbasis. Oplosmiddelafval mag niet in het septische systeem van de boerderij, dus neem afsluitbare bakjes mee en voer gebruikt oplosmiddel en olieverfafval zelf af. We wijzen je desgewenst de lokale milieustraat aan.',
        [Language.DE]:
          'Hauswirtschafts- und Küchenspülen sind für die Reinigung auf Wasserbasis da. Lösungsmittelabfall darf nicht in die Klärgrube des Hofs, bring also verschließbare Behälter mit und nimm gebrauchtes Lösungsmittel und Ölfarbenabfall selbst mit. Bei Bedarf nennen wir dir den örtlichen Wertstoffhof.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can drying or wet work be stored safely overnight?',
        [Language.NL]: 'Kan drogend of nat werk veilig blijven staan ’s nachts?',
        [Language.DE]: 'Kann trocknende oder nasse Arbeit über Nacht sicher gelagert werden?',
      },
      answer: {
        [Language.EN]:
          'Yes. There is flat and rack space in the barn that locks overnight. The barn is cool after dark, which slows oil drying — most retreats plan their canvas schedule around that. Tell us how much drying space you need and we will set it aside.',
        [Language.NL]:
          'Ja. Er is platte en rekruimte in de schuur die ’s nachts op slot gaat. De schuur is koel na zonsondergang, wat het drogen van olieverf vertraagt — de meeste retraites plannen hun doekenschema daarop. Laat ons weten hoeveel droogruimte je nodig hebt, dan reserveren we die.',
        [Language.DE]:
          'Ja. In der Scheune gibt es Flächen und Regale, die über Nacht abgeschlossen werden. Die Scheune ist nach Einbruch der Dunkelheit kühl, was das Trocknen von Öl verlangsamt — die meisten Retreats planen ihren Leinwand-Zeitplan danach. Sag uns, wie viel Trockenfläche du brauchst, dann legen wir sie beiseite.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you supply materials, easels, or a kiln?',
        [Language.NL]: 'Leveren jullie materialen, ezels of een oven?',
        [Language.DE]: 'Stellt ihr Materialien, Staffeleien oder einen Brennofen?',
      },
      answer: {
        [Language.EN]:
          'Bring your own kit. We provide the space, long work tables, and storage — but no kiln, printing press, or specialist studio equipment, so it is air-dry or unfired clay only. For life-drawing, we do not provide models but have local contacts; tell us at booking and we will see what we can arrange.',
        [Language.NL]:
          'Neem je eigen spullen mee. Wij bieden de ruimte, lange werktafels en opslag — maar geen oven, drukpers of gespecialiseerde atelierapparatuur, dus alleen luchtdrogende of ongebakken klei. Voor naaktmodeltekenen leveren we geen modellen maar hebben we lokale contacten; laat het bij de boeking weten, dan kijken we wat we kunnen regelen.',
        [Language.DE]:
          'Bring deine eigene Ausrüstung mit. Wir bieten den Raum, lange Arbeitstische und Lagerplatz — aber keinen Brennofen, keine Druckpresse und keine spezielle Atelierausstattung, also nur lufttrocknender oder ungebrannter Ton. Für Aktzeichnen stellen wir keine Modelle, haben aber lokale Kontakte; sag uns bei der Buchung Bescheid, dann schauen wir, was sich machen lässt.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your art retreat to a place with light and time',
      [Language.NL]: 'Breng je kunstretraite naar een plek met licht en tijd',
      [Language.DE]: 'Bring dein Kunst-Retreat an einen Ort mit Licht und Zeit',
    },
    body: {
      [Language.EN]:
        'Tell us your dates, your cohort size, and the medium the retreat is built around — painting, drawing, mixed media, printmaking, or hands-on craft. We will come back with availability and a quote.',
      [Language.NL]:
        'Vertel ons je data, je cohortgrootte en het medium waar de retraite omheen is gebouwd — schilderen, tekenen, mixed media, grafiek of handwerk. We komen terug met beschikbaarheid en een offerte.',
      [Language.DE]:
        'Sag uns deine Daten, eure Gruppengröße und das Medium, um das das Retreat gebaut ist — Malerei, Zeichnung, Mixed Media, Druckgrafik oder handwerkliches Arbeiten. Wir melden uns mit Verfügbarkeit und einem Angebot.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Artists and creative facilitators running multi-day retreats',
      [Language.NL]: 'Kunstenaars en creatieve begeleiders die meerdaagse retraites leiden',
      [Language.DE]: 'Künstler:innen und kreative Leiter:innen, die mehrtägige Retreats halten',
    },
    cohortSize: { min: 6, max: 12 },
    keywords: {
      [Language.EN]: [
        'art retreat venue Netherlands',
        'painting retreat venue',
        'plein air painting retreat',
        'art workshop venue Netherlands',
        'painting holiday venue',
        'mixed media art retreat venue',
        'residential art retreat venue',
        'creative retreat venue',
        'drawing retreat venue Overijssel',
        'multi-day art retreat',
      ],
      [Language.NL]: [
        'kunstretraite locatie Nederland',
        'schilderretraite locatie',
        'plein air schilderretraite',
        'kunstworkshop locatie Nederland',
        'schildervakantie locatie',
        'mixed media kunstretraite',
        'residentiële kunstretraite',
        'creatieve retraite locatie',
      ],
      [Language.DE]: [
        'Kunst-Retreat-Ort Niederlande',
        'Mal-Retreat-Ort',
        'Pleinair-Mal-Retreat',
        'Kunst-Workshop-Ort Niederlande',
        'Malurlaub-Ort',
        'Mixed-Media-Kunst-Retreat',
        'mehrtägiges Kunst-Retreat',
      ],
    },
  },
}
