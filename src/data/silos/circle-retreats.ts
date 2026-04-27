import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const CIRCLE_RETREATS_SILO: SiloContent = {
  slug: SiloSlug.CIRCLE_RETREATS,
  route: Route.CIRCLE_RETREATS,
  heroImageSrc: IMAGES.accommodation.playingMusicFirePit,
  heroImageAlt: {
    [Language.EN]: 'A circle gathered around the fire pit at The Makers Barn',
    [Language.NL]: 'Een kring rond de vuurplaats bij The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Circle Retreat Venue — Women’s, Men’s & Mixed Circles',
      [Language.NL]: 'Locatie voor Circle-retraites — vrouwen, mannen & gemengd',
    },
    description: {
      [Language.EN]:
        'A private 1.3-hectare farm for facilitators of women’s, men’s, and mixed circle retreats. Fire circle, hay barn, full venue buyout, the privacy the work asks for.',
      [Language.NL]:
        'Een eigen boerderij van 1,3 hectare voor facilitators van vrouwen-, mannen- en gemengde circle-retraites. Vuurplaats, hooischuur, volledige buyout, de privacy die het werk vraagt.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For circle facilitators',
      [Language.NL]: 'Voor circle-facilitators',
    },
    title: {
      [Language.EN]: 'A Held Venue for Circle Retreats — Women’s, Men’s & Mixed',
      [Language.NL]: 'Een gedragen locatie voor circle-retraites — vrouwen, mannen & gemengd',
    },
    subtitle: {
      [Language.EN]:
        'A fire circle for the evening work, a hay barn for the morning sit, and a 1.3-hectare farm for the walks between.',
      [Language.NL]:
        'Een vuurplaats voor het avondwerk, een hooischuur voor de ochtendzit, en een boerderij van 1,3 hectare voor de wandelingen ertussen.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'A fire pit, a barn, and the privacy that circle work asks for.',
      [Language.NL]:
        'Een vuurplaats, een schuur, en de privacy die circle-werk vraagt.',
    },
    caption: {
      [Language.EN]:
        'Full venue buyout, no other guests, fields out the door for the long walks the work creates.',
      [Language.NL]:
        'Volledige buyout, geen andere gasten, velden direct buiten de deur voor de lange wandelingen die het werk oproept.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A fire circle that does not have to be shared',
        [Language.NL]: 'Een vuurplaats die niet gedeeld hoeft te worden',
      },
      body: {
        [Language.EN]: [
          'Most circle retreats use the fire circle as the centre of the work. Ours is built into the field, twenty steps from the practice barn, with logs that seat fifteen and a wood store that we keep filled. The fire is yours from sundown to whenever you call it.',
          'No other groups can hear it. No staff member walks through. The closest neighbour is well out of earshot. What is said in the circle stays in the circle.',
        ],
        [Language.NL]: [
          'De meeste circle-retraites gebruiken de vuurplaats als hart van het werk. Die van ons is in het veld aangelegd, twintig stappen van de praktijkruimte, met boomstammen die plaats bieden aan vijftien en een houtopslag die we vol houden. Het vuur is van jullie, van zonsondergang tot wanneer jullie het laten doven.',
          'Geen andere groep kan het horen. Niemand van ons team loopt erdoorheen. De dichtstbijzijnde buur ligt ruim buiten gehoorsafstand. Wat in de kring wordt gezegd, blijft in de kring.',
        ],
      },
      imageSrc: IMAGES.accommodation.fireCircleWoodLogs,
      imageAlt: {
        [Language.EN]: 'Fire circle with wood logs ready at The Makers Barn',
        [Language.NL]: 'Vuurplaats met boomstammen klaargelegd bij The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'A barn for the morning work — soft floor, soft light',
        [Language.NL]: 'Een schuur voor het ochtendwerk — zachte vloer, zacht licht',
      },
      body: {
        [Language.EN]: [
          'The Hay House barn holds a circle of fifteen comfortably. Heated wooden floor, dimmable light, sound system if you want one, full silence if you do not. We can lay out cushions for floor work or chairs for chair work the night before.',
          'Most circle retreats run a morning session in the barn, an afternoon walk on the land, and an evening fire circle. The venue is shaped to make that rhythm easy.',
        ],
        [Language.NL]: [
          'De Hay House-schuur biedt comfortabel plaats aan een kring van vijftien. Verwarmde houten vloer, dimbaar licht, geluidssysteem als je dat wilt, volledige stilte als je dat niet wilt. De avond ervoor leggen we kussens neer voor vloerwerk, of stoelen klaar voor stoelwerk.',
          'De meeste circle-retraites draaien een ochtendsessie in de schuur, een middagwandeling over het land en een vuurkring in de avond. De locatie is gemaakt om dat ritme moeiteloos te laten lopen.',
        ],
      },
      imageSrc: IMAGES.accommodation.hayHouseSun,
      imageAlt: {
        [Language.EN]: 'Hay House barn glowing in evening light',
        [Language.NL]: 'Hay House-schuur in het avondlicht',
      },
    },
    {
      h2: {
        [Language.EN]: 'For the kind of work that needs solitude between rounds',
        [Language.NL]: 'Voor het soort werk dat alleen-zijn vraagt tussen rondes',
      },
      body: {
        [Language.EN]: [
          'After a heavy circle, what people often need is to walk alone. Twelve hundred trees we planted ourselves, a swimming pond, a teahouse with a single chair facing the window, paths that loop back to the house without crossing.',
          'The work the room does, the land continues. Many facilitators tell us this is what makes their three-day retreat feel like a five-day one.',
        ],
        [Language.NL]: [
          'Na een zware kring willen mensen vaak alleen lopen. Twaalfhonderd bomen die we zelf hebben geplant, een zwemvijver, een theehuis met één stoel naar het raam toe, paden die teruglopen naar het huis zonder elkaar te kruisen.',
          'Wat de kamer in gang zet, voltooit het land. Veel facilitators vertellen ons dat dit hun driedaagse retraite laat aanvoelen als een vijfdaagse.',
        ],
      },
      imageSrc: IMAGES.accommodation.teahouse,
      imageAlt: {
        [Language.EN]: 'Teahouse with a single chair facing the window',
        [Language.NL]: 'Theehuis met één stoel gericht op het raam',
      },
    },
  ],
  facts: [
    {
      number: '15',
      description: {
        [Language.EN]: 'Comfortable circle size — barn and fire pit both built around it',
        [Language.NL]: 'Comfortabele kringgrootte — schuur en vuurplaats beide erop afgestemd',
      },
    },
    {
      number: '20',
      description: {
        [Language.EN]: 'Steps from the practice barn to the fire circle',
        [Language.NL]: 'Stappen van de praktijkruimte naar de vuurplaats',
      },
    },
    {
      number: '0',
      description: {
        [Language.EN]: 'Other guests during your retreat — full buyout always',
        [Language.NL]: 'Andere gasten tijdens jullie retraite — altijd volledige buyout',
      },
    },
  ],
  faq: [
    {
      question: {
        [Language.EN]: 'Do you accommodate gender-specific retreats?',
        [Language.NL]: 'Faciliteren jullie gender-specifieke retraites?',
      },
      answer: {
        [Language.EN]:
          'Yes — many of our circle bookings are women-only or men-only. Full venue buyout means the space genuinely is just for your group, including bathrooms and shared areas.',
        [Language.NL]:
          'Ja — veel van onze circle-boekingen zijn alleen-vrouwen of alleen-mannen. Volledige buyout betekent dat de ruimte werkelijk alleen voor jullie groep is, inclusief badkamers en gedeelde ruimtes.',
      },
    },
    {
      question: {
        [Language.EN]: 'How late can the fire circle run?',
        [Language.NL]: 'Hoe laat mag de vuurkring doorgaan?',
      },
      answer: {
        [Language.EN]:
          'The fire is yours through the night if needed. We ask that loud singing or drumming respects rural neighbour courtesies after 23:00, but our nearest neighbour is well out of earshot for normal circle work.',
        [Language.NL]:
          'Het vuur mag desnoods de hele nacht branden. Bij luid zingen of drummen na 23.00 uur vragen we om de gangbare landelijke buurtetiquette te respecteren, maar onze dichtstbijzijnde buur ligt ruim buiten gehoorsafstand voor normaal circle-werk.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you provide ritual or ceremonial supplies?',
        [Language.NL]: 'Leveren jullie rituele of ceremoniële benodigdheden?',
      },
      answer: {
        [Language.EN]:
          'Firewood and fire-starting supplies, yes. Specific ritual items — herbs, drums, cloths, ceremonial objects — most facilitators bring their own. Tell us what you need and we will tell you honestly what we can source locally.',
        [Language.NL]:
          'Haardhout en aanmaakmateriaal, ja. Specifieke rituele items — kruiden, drums, doeken, ceremoniële objecten — brengen de meeste facilitators zelf mee. Vertel ons wat je nodig hebt en we zeggen eerlijk wat we lokaal kunnen vinden.',
      },
    },
    {
      question: {
        [Language.EN]: 'Can we host a sweat lodge or similar deeper ceremonial form?',
        [Language.NL]: 'Kunnen we een sweat lodge of vergelijkbare diepere ceremonie houden?',
      },
      answer: {
        [Language.EN]:
          'For sweat-lodge or similar work, please ask us at booking. We have hosted some forms and not others — we are honest about what fits the venue and what does not.',
        [Language.NL]:
          'Voor sweat-lodge of vergelijkbaar werk: vraag het ons bij de boeking. We hebben sommige vormen wel ontvangen en andere niet — we zijn eerlijk over wat bij de locatie past en wat niet.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring your circle to a place that knows how to hold one',
      [Language.NL]: 'Breng je kring naar een plek die weet hoe je een kring draagt',
    },
    body: {
      [Language.EN]:
        'Tell us your group size, your dates, and what shape your circle takes. We will come back honestly about whether the venue fits and what your participants can expect.',
      [Language.NL]:
        'Vertel ons je groepsgrootte, je data en welke vorm je kring heeft. We laten je eerlijk weten of de locatie past en wat je deelnemers kunnen verwachten.',
    },
  },
}
