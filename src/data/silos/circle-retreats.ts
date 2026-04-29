import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const CIRCLE_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.CIRCLE_RETREATS,
  route: Route.CIRCLE_RETREATS,
  heroImageSrc: IMAGES.accommodation.playingMusicFirePit,
  heroImageAlt: {
    [Language.EN]: 'A circle gathered around the fire pit at The Makers Barn',
    [Language.NL]: 'Een kring rond de vuurplaats bij The Makers Barn',
    [Language.DE]: 'Ein Kreis versammelt um die Feuerstelle bei The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Circle Retreat Venue in Overijssel — Women’s, Men’s & Mixed',
      [Language.NL]: 'Locatie voor circle-retraites in Overijssel — vrouwen, mannen & gemengd',
      [Language.DE]: 'Circle-Retreat-Ort in Overijssel — Frauen, Männer & gemischt',
    },
    description: {
      [Language.EN]:
        'A private 1.3-hectare farm in Overijssel, 15 minutes from Zwolle. Fire circle, heated hay barn, full venue buyout for women’s, men’s, and mixed circle retreats.',
      [Language.NL]:
        'Een eigen boerderij van 1,3 hectare in Overijssel, 15 minuten van Zwolle. Vuurplaats, verwarmde hooischuur en volledige buyout voor vrouwen-, mannen- en gemengde circle-retraites.',
      [Language.DE]:
        'Ein privater Hof von 1,3 Hektar in Overijssel, 15 Minuten von Zwolle. Feuerkreis, beheizte Heuscheune und volle Buyout-Buchung für Frauen-, Männer- und gemischte Circle-Retreats.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For circle facilitators',
      [Language.NL]: 'Voor circle-facilitators',
      [Language.DE]: 'Für Circle-Facilitatorinnen',
    },
    title: {
      [Language.EN]: 'Circle Retreats for Women’s, Men’s & Mixed Groups — Private Venue in Overijssel',
      [Language.NL]: 'Circle-retraites voor vrouwen, mannen & gemengde groepen — privélocatie in Overijssel',
      [Language.DE]: 'Circle-Retreats für Frauen, Männer & gemischte Gruppen — Privater Ort in Overijssel',
    },
    subtitle: {
      [Language.EN]:
        'A fire circle for the evening work, a heated hay barn for the morning sit, and a 1.3-hectare farm for the walks between. Fifteen minutes from Zwolle.',
      [Language.NL]:
        'Een vuurplaats voor het avondwerk, een verwarmde hooischuur voor de ochtendzit, en een boerderij van 1,3 hectare voor de wandelingen ertussen. Vijftien minuten van Zwolle.',
      [Language.DE]:
        'Ein Feuerkreis für die Abendarbeit, eine beheizte Heuscheune für die Morgensitzung und ein Hof von 1,3 Hektar für die Spaziergänge dazwischen. Fünfzehn Minuten von Zwolle.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A fire pit, a hay barn, and full venue buyout — circle work without other guests, neighbours out of earshot.',
      [Language.NL]:
        'Een vuurplaats, een hooischuur en volledige buyout — circle-werk zonder andere gasten, buren ruim buiten gehoorsafstand.',
      [Language.DE]:
        'Eine Feuerstelle, eine Heuscheune und volle Buyout-Buchung — Circle-Arbeit ohne andere Gäste, Nachbarn weit außer Hörweite.',
    },
    caption: {
      [Language.EN]:
        'Built for groups of 8 to 16. 14 beds, capacity 20, 65 m² heated shala, fields out the door for the long walks between rounds.',
      [Language.NL]:
        'Gemaakt voor groepen van 8 tot 16. 14 bedden, capaciteit 20, 65 m² verwarmde shala, velden buiten de deur voor de lange wandelingen tussen rondes.',
      [Language.DE]:
        'Gemacht für Gruppen von 8 bis 16. 14 Betten, Kapazität 20, 65 m² beheizte Shala, Felder direkt vor der Tür für die langen Spaziergänge zwischen den Runden.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A fire circle yours alone — no shared buildings, no other guests',
        [Language.NL]: 'Een vuurplaats die alleen van jullie is — geen gedeelde gebouwen, geen andere gasten',
        [Language.DE]: 'Ein Feuerkreis nur für euch — keine geteilten Gebäude, keine anderen Gäste',
      },
      body: {
        [Language.EN]: [
          'Most circle retreats use the fire as the centre of the work. Ours sits out in the field on our private 1.3-hectare farm in Overijssel, twenty steps from the practice barn, with logs that seat fifteen and a wood store we keep filled. The fire is yours from sundown to whenever you call it.',
          'No other groups can hear it. No staff member walks through. The closest neighbour is well out of earshot. What is said in the circle stays in the circle.',
        ],
        [Language.NL]: [
          'De meeste circle-retraites gebruiken het vuur als hart van het werk. Het onze ligt midden in het veld op onze eigen boerderij van 1,3 hectare in Overijssel, twintig stappen van de praktijkruimte, met boomstammen voor vijftien en een houtopslag die we vol houden. Het vuur is van jullie, van zonsondergang tot wanneer jullie het laten doven.',
          'Geen andere groep kan het horen. Niemand van ons team loopt erdoorheen. De dichtstbijzijnde buur ligt ruim buiten gehoorsafstand. Wat in de kring wordt gezegd, blijft in de kring.',
        ],
        [Language.DE]: [
          'Die meisten Circle-Retreats stellen das Feuer ins Zentrum der Arbeit. Unseres steht draußen im Feld auf unserem privaten Hof von 1,3 Hektar in Overijssel, zwanzig Schritte von der Praxisscheune entfernt, mit Baumstämmen für fünfzehn Personen und einem Holzlager, das wir gefüllt halten. Das Feuer gehört euch, von Sonnenuntergang bis ihr es löschen lasst.',
          'Keine andere Gruppe kann es hören. Niemand vom Team läuft hindurch. Der nächste Nachbar ist weit außer Hörweite. Was im Kreis gesagt wird, bleibt im Kreis.',
        ],
      },
      imageSrc: IMAGES.accommodation.fireCircleWoodLogs,
      imageAlt: {
        [Language.EN]: 'Fire circle with wood logs ready at The Makers Barn',
        [Language.NL]: 'Vuurplaats met boomstammen klaargelegd bij The Makers Barn',
        [Language.DE]: 'Feuerkreis mit bereitgelegten Baumstämmen bei The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'A heated 65 m² hay barn shala for the morning circle',
        [Language.NL]: 'Een verwarmde shala van 65 m² in de hooischuur voor de ochtendkring',
        [Language.DE]: 'Eine beheizte 65-m²-Heuscheune-Shala für den Morgenkreis',
      },
      body: {
        [Language.EN]: [
          'The Hay House barn is sixty-five square metres and seats a circle of fifteen comfortably. Heated wooden floor, dimmable light, sound system if you want one, full silence if you do not. We lay out cushions for floor work or chairs for chair work the night before.',
          'Most circle retreats here run a morning session in the barn, an afternoon walk on the land, and an evening fire circle. The venue is shaped to make that rhythm easy — and the barn is twenty steps from the fire pit, so transitions take minutes, not logistics.',
        ],
        [Language.NL]: [
          'De Hay House-schuur is vijfenzestig vierkante meter en biedt comfortabel plaats aan een kring van vijftien. Verwarmde houten vloer, dimbaar licht, geluidssysteem als je dat wilt, volledige stilte als je dat niet wilt. De avond ervoor leggen we kussens neer voor vloerwerk of stoelen voor stoelwerk.',
          'De meeste circle-retraites hier draaien een ochtendsessie in de schuur, een middagwandeling over het land en een vuurkring in de avond. De locatie is gemaakt om dat ritme moeiteloos te laten lopen — en de schuur ligt twintig stappen van de vuurplaats, dus overgangen kosten minuten, geen logistiek.',
        ],
        [Language.DE]: [
          'Die Hay House-Scheune misst fünfundsechzig Quadratmeter und bietet komfortabel Platz für einen Kreis von fünfzehn. Beheizter Holzboden, dimmbares Licht, Soundsystem wenn ihr wollt, volle Stille wenn nicht. Am Abend vorher legen wir Kissen für die Bodenarbeit aus oder stellen Stühle für die Stuhlarbeit bereit.',
          'Die meisten Circle-Retreats hier machen morgens eine Session in der Scheune, nachmittags einen Spaziergang über das Land und abends den Feuerkreis. Der Ort ist auf diesen Rhythmus gebaut — und die Scheune liegt zwanzig Schritte von der Feuerstelle, Übergänge kosten Minuten, keine Logistik.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House barn glowing in evening light',
        [Language.NL]: 'Hay House-schuur in het avondlicht',
        [Language.DE]: 'Hay House-Scheune im Abendlicht',
      },
    },
    {
      h2: {
        [Language.EN]: '1.3 hectares of private land for the walks between rounds',
        [Language.NL]: '1,3 hectare eigen terrein voor de wandelingen tussen rondes',
        [Language.DE]: '1,3 Hektar eigenes Land für die Spaziergänge zwischen den Runden',
      },
      body: {
        [Language.EN]: [
          'After a heavy round, participants often need to walk alone before they come back to the circle. The farm has twelve hundred trees we planted ourselves, a swimming pond, a teahouse with a single chair facing the window, and paths that loop back to the house without crossing.',
          'Many facilitators tell us this is what makes their three-day circle retreat feel like a five-day one — the land does some of the integration the indoor work cannot.',
        ],
        [Language.NL]: [
          'Na een zware ronde willen deelnemers vaak alleen lopen voordat ze weer in de kring terugkomen. De boerderij heeft twaalfhonderd bomen die we zelf hebben geplant, een zwemvijver, een theehuis met één stoel naar het raam toe, en paden die teruglopen naar het huis zonder elkaar te kruisen.',
          'Veel facilitators vertellen ons dat dit hun driedaagse circle-retraite laat aanvoelen als een vijfdaagse — het land doet een deel van de integratie die het werk binnen niet kan doen.',
        ],
        [Language.DE]: [
          'Nach einer intensiven Runde brauchen Teilnehmende oft, allein zu gehen, bevor sie in den Kreis zurückkommen. Auf dem Hof stehen zwölfhundert Bäume, die wir selbst gepflanzt haben, ein Schwimmteich, ein Teehaus mit einem einzelnen Stuhl zum Fenster und Pfade, die zum Haus zurückführen, ohne sich zu kreuzen.',
          'Viele Facilitatorinnen erzählen uns, das sei der Grund, warum sich ihr dreitägiges Circle-Retreat wie ein fünftägiges anfühlt — das Land übernimmt einen Teil der Integration, den die Arbeit drinnen nicht leisten kann.',
        ],
      },
      imageSrc: IMAGES.accommodation.teahouse,
      imageAlt: {
        [Language.EN]: 'Teahouse with a single chair facing the window',
        [Language.NL]: 'Theehuis met één stoel gericht op het raam',
        [Language.DE]: 'Teehaus mit einem einzelnen Stuhl zum Fenster',
      },
    },
  ],
  facts: [
    {
      number: '15',
      description: {
        [Language.EN]: 'Comfortable circle size — barn and fire pit both built around it',
        [Language.NL]: 'Comfortabele kringgrootte — schuur en vuurplaats beide erop afgestemd',
        [Language.DE]: 'Bequeme Kreisgröße — Scheune und Feuerstelle beide darauf gebaut',
      },
    },
    {
      number: '20',
      description: {
        [Language.EN]: 'Steps from the practice barn to the fire circle',
        [Language.NL]: 'Stappen van de praktijkruimte naar de vuurplaats',
        [Language.DE]: 'Schritte von der Praxisscheune zum Feuerkreis',
      },
    },
    {
      number: '0',
      description: {
        [Language.EN]: 'Other guests during your retreat — full buyout always',
        [Language.NL]: 'Andere gasten tijdens jullie retraite — altijd volledige buyout',
        [Language.DE]: 'Andere Gäste während eures Retreats — immer volle Buyout-Buchung',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Do you accommodate gender-specific retreats?',
        [Language.NL]: 'Faciliteren jullie gender-specifieke retraites?',
        [Language.DE]: 'Ermöglicht ihr geschlechtsspezifische Retreats?',
      },
      answer: {
        [Language.EN]:
          'Yes — many of our circle bookings are women-only or men-only. Full venue buyout means the space genuinely is just for your group, including bathrooms and shared areas.',
        [Language.NL]:
          'Ja — veel van onze circle-boekingen zijn alleen-vrouwen of alleen-mannen. Volledige buyout betekent dat de ruimte werkelijk alleen voor jullie groep is, inclusief badkamers en gedeelde ruimtes.',
        [Language.DE]:
          'Ja — viele unserer Circle-Buchungen sind reine Frauen- oder Männergruppen. Volle Buyout-Buchung heißt, dass der Ort wirklich nur euch gehört — inklusive Bäder und Gemeinschaftsbereiche.',
      },
    },
    {
      question: {
        [Language.EN]: 'How late can the fire circle run?',
        [Language.NL]: 'Hoe laat mag de vuurkring doorgaan?',
        [Language.DE]: 'Wie lange darf der Feuerkreis dauern?',
      },
      answer: {
        [Language.EN]:
          'The fire is yours through the night if needed. We ask that loud singing or drumming respects rural neighbour courtesies after 23:00, but our nearest neighbour is well out of earshot for normal circle work.',
        [Language.NL]:
          'Het vuur mag desnoods de hele nacht branden. Bij luid zingen of drummen na 23.00 uur vragen we om de gangbare landelijke buurtetiquette te respecteren, maar onze dichtstbijzijnde buur ligt ruim buiten gehoorsafstand voor normaal circle-werk.',
        [Language.DE]:
          'Das Feuer kann bei Bedarf die ganze Nacht brennen. Bei lautem Singen oder Trommeln nach 23:00 bitten wir, die ländliche Nachbarschaftsetikette zu wahren, aber unser nächster Nachbar ist für normale Kreisarbeit weit außer Hörweite.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you provide ritual or ceremonial supplies?',
        [Language.NL]: 'Leveren jullie rituele of ceremoniële benodigdheden?',
        [Language.DE]: 'Stellt ihr rituelle oder zeremonielle Materialien bereit?',
      },
      answer: {
        [Language.EN]:
          'Firewood and fire-starting supplies, yes. Specific ritual items — herbs, drums, cloths, ceremonial objects — most facilitators bring their own. Tell us what you need and we will tell you honestly what we can source locally.',
        [Language.NL]:
          'Haardhout en aanmaakmateriaal, ja. Specifieke rituele items — kruiden, drums, doeken, ceremoniële objecten — brengen de meeste facilitators zelf mee. Vertel ons wat je nodig hebt en we zeggen eerlijk wat we lokaal kunnen vinden.',
        [Language.DE]:
          'Brennholz und Anzündmaterial, ja. Spezifische Ritualgegenstände — Kräuter, Trommeln, Tücher, Zeremonialobjekte — bringen die meisten Facilitatorinnen selbst mit. Sag uns, was du brauchst, und wir sagen dir ehrlich, was wir vor Ort bekommen können.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we host a sweat lodge or similar deeper ceremonial form?',
        [Language.NL]: 'Kunnen we een sweat lodge of vergelijkbare diepere ceremonie houden?',
        [Language.DE]: 'Können wir eine Schwitzhütte oder ähnliche tiefere zeremonielle Form abhalten?',
      },
      answer: {
        [Language.EN]:
          'For sweat-lodge or similar work, please ask us at booking. We have hosted some forms and not others — we are honest about what fits the venue and what does not.',
        [Language.NL]:
          'Voor sweat-lodge of vergelijkbaar werk: vraag het ons bij de boeking. We hebben sommige vormen wel ontvangen en andere niet — we zijn eerlijk over wat bij de locatie past en wat niet.',
        [Language.DE]:
          'Für Schwitzhütten oder ähnliche Arbeit: Frag uns bei der Buchung. Manche Formen haben wir schon gehostet, andere nicht — wir sind ehrlich, was zum Ort passt und was nicht.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your circle retreat to a private venue in Overijssel',
      [Language.NL]: 'Breng je circle-retraite naar een privélocatie in Overijssel',
      [Language.DE]: 'Bring dein Circle-Retreat an einen privaten Ort in Overijssel',
    },
    body: {
      [Language.EN]:
        'Tell us your group size, your dates, and what shape your circle takes — women’s, men’s, mixed, council, ceremonial. We will come back honestly about whether the venue fits and what your participants can expect.',
      [Language.NL]:
        'Vertel ons je groepsgrootte, je data en welke vorm je kring heeft — vrouwen, mannen, gemengd, council, ceremonieel. We laten je eerlijk weten of de locatie past en wat je deelnemers kunnen verwachten.',
      [Language.DE]:
        'Sag uns eure Gruppengröße, eure Daten und welche Form euer Kreis hat — Frauen, Männer, gemischt, Council, zeremoniell. Wir melden uns ehrlich zurück, ob der Ort passt und was eure Teilnehmenden erwarten können.',
    },
  },
  organizerSeo: {
    audience: {
      [Language.EN]: 'Facilitators of women’s, men’s, and mixed circle retreats',
      [Language.NL]: 'Facilitators van vrouwen-, mannen- en gemengde circle-retraites',
      [Language.DE]: 'Facilitator:innen von Frauen-, Männer- und gemischten Circle-Retreats',
    },
    cohortSize: { min: 8, max: 16 },
    keywords: {
      [Language.EN]: [
        'women’s circle retreat venue',
        'men’s circle retreat venue',
        'mixed circle retreat venue',
        'sisterhood retreat venue',
        'brotherhood retreat venue',
        'fire circle retreat venue',
        'council retreat venue',
        'circle facilitator venue',
        'ceremony retreat venue Netherlands',
        'communal circle retreat venue',
      ],
      [Language.NL]: [
        'vrouwencirkel retraite locatie',
        'mannencirkel retraite locatie',
        'gemengde circle retraite locatie',
        'zusterschap retraite locatie',
        'broederschap retraite locatie',
        'vuurkring retraite locatie',
        'council retraite locatie',
        'ceremonie retraite locatie Nederland',
      ],
      [Language.DE]: [
        'Frauenkreis-Retreat-Ort',
        'Männerkreis-Retreat-Ort',
        'gemischter Circle-Retreat-Ort',
        'Sisterhood-Retreat-Ort',
        'Bruderschaft-Retreat-Ort',
        'Feuerkreis-Retreat-Ort',
        'Council-Retreat-Ort',
      ],
    },
  },
}
