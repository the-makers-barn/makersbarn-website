import { IMAGES } from '@/data/images'
import { Language, Route, SiloContent, SiloSlug } from '@/types'

export const TEAM_OFFSITES_SILO: SiloContent = {
  slug: SiloSlug.TEAM_OFFSITES,
  route: Route.TEAM_OFFSITES,
  heroImageSrc: IMAGES.accommodation.outsideGuitarCircle,
  heroImageAlt: {
    [Language.EN]: 'A small group gathered around a fire pit at The Makers Barn',
    [Language.NL]: 'Een kleine groep rond de vuurplaats bij The Makers Barn',
  },
  meta: {
    title: {
      [Language.EN]: 'Slow-Living Team Offsites — Netherlands',
      [Language.NL]: 'Slow-Living Teamuitjes — Nederland',
    },
    description: {
      [Language.EN]:
        'A 1920s farm bought out for your team — 14 beds, capacity 20, 1.3 hectares. Strategy days that do not feel like meeting rooms. 15 minutes from Zwolle, 1h15 from Schiphol.',
      [Language.NL]:
        'Een boerderij uit 1920 exclusief voor je team — 14 bedden, capaciteit 20, 1,3 hectare. Strategiedagen die niet aanvoelen als vergaderzalen. 15 minuten van Zwolle, 1 uur 15 van Schiphol.',
    },
  },
  hero: {
    eyebrow: {
      [Language.EN]: 'For founders, heads of people, creative directors',
      [Language.NL]: 'Voor founders, hoofden HR en creatieve directeuren',
    },
    title: {
      [Language.EN]: 'A Slow-Living Offsite for Teams Who Make Things',
      [Language.NL]: 'Een slow-living offsite voor teams die dingen maken',
    },
    subtitle: {
      [Language.EN]:
        'A 1920s farm, fifteen minutes from Zwolle, an hour and a quarter from Schiphol. Bring the team — leave the laptops shut for the parts that matter.',
      [Language.NL]:
        'Een boerderij uit 1920, vijftien minuten van Zwolle, een uur en een kwartier van Schiphol. Breng het team — laat de laptops dicht voor de momenten die ertoe doen.',
    },
  },
  hook: {
    text: {
      [Language.EN]:
        'Strategy days that don’t feel like meeting rooms.',
      [Language.NL]:
        'Strategiedagen die niet aanvoelen als vergaderzalen.',
    },
    caption: {
      [Language.EN]:
        'Sauna, fire circle, and a kitchen built for long dinners. Logistics handled — including the train from Schiphol.',
      [Language.NL]:
        'Sauna, vuurplaats en een keuken gemaakt voor lange diners. Logistiek geregeld — inclusief de trein vanaf Schiphol.',
    },
  },
  sections: [
    {
      h2: {
        [Language.EN]: 'A venue, not a corporate event space',
        [Language.NL]: 'Een locatie, geen corporate event-ruimte',
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
      },
      imageSrc: IMAGES.accommodation.hayHouseBench,
      imageAlt: {
        [Language.EN]: 'Bench at the Hay House at sunset',
        [Language.NL]: 'Bank bij het Hay House bij zonsondergang',
      },
    },
    {
      h2: {
        [Language.EN]: 'Logistics handled, transparently',
        [Language.NL]: 'Logistiek geregeld, transparant',
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
      },
      imageSrc: IMAGES.accommodation.lunchTogether,
      imageAlt: {
        [Language.EN]: 'A long shared lunch with the team at The Makers Barn',
        [Language.NL]: 'Een lange gedeelde lunch met het team bij The Makers Barn',
      },
    },
    {
      h2: {
        [Language.EN]: 'What 14 people get to themselves for two days',
        [Language.NL]: 'Wat 14 mensen voor zichzelf krijgen in twee dagen',
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
      },
      imageSrc: IMAGES.accommodation.sauna,
      imageAlt: {
        [Language.EN]: 'Outdoor sauna at The Makers Barn',
        [Language.NL]: 'Buitensauna bij The Makers Barn',
      },
    },
  ],
  facts: [
    {
      number: '1h15',
      description: {
        [Language.EN]: 'By train from Schiphol to Zwolle — we handle the last fifteen minutes',
        [Language.NL]: 'Met de trein vanaf Schiphol naar Zwolle — wij doen de laatste vijftien minuten',
      },
    },
    {
      number: '8–20',
      description: {
        [Language.EN]: 'Team size that fits — venue buyout, no shared spaces',
        [Language.NL]: 'Teamgrootte die past — volledige buyout, geen gedeelde ruimtes',
      },
    },
    {
      number: '1',
      description: {
        [Language.EN]: 'Point of contact, one invoice, no surprises',
        [Language.NL]: 'Aanspreekpunt, één factuur, geen verrassingen',
      },
    },
  ],
  schedule: {
    title: {
      [Language.EN]: 'A two-day offsite, sketched',
      [Language.NL]: 'Een tweedaagse offsite, geschetst',
    },
    intro: {
      [Language.EN]:
        'A loose template several leadership teams have used here — yours is yours to design.',
      [Language.NL]:
        'Een losse template die diverse leiderschapsteams hier gebruikten — die van jou ontwerp je zelf.',
    },
    items: [
      {
        time: 'Day 1 · 11:00',
        activity: {
          [Language.EN]: 'Arrival, settle into rooms, kettle on',
          [Language.NL]: 'Aankomst, kamers betrekken, waterkoker aan',
        },
      },
      {
        time: 'Day 1 · 13:00',
        activity: {
          [Language.EN]: 'Long lunch — slow start to the work',
          [Language.NL]: 'Lange lunch — rustige start van het werk',
        },
      },
      {
        time: 'Day 1 · 15:00',
        activity: {
          [Language.EN]: 'Strategy session in the Hay House',
          [Language.NL]: 'Strategiesessie in het Hay House',
        },
      },
      {
        time: 'Day 1 · 19:30',
        activity: {
          [Language.EN]: 'Catered dinner at the long table',
          [Language.NL]: 'Verzorgd diner aan de lange tafel',
        },
      },
      {
        time: 'Day 1 · 21:30',
        activity: {
          [Language.EN]: 'Sauna and fire circle',
          [Language.NL]: 'Sauna en vuurplaats',
        },
      },
      {
        time: 'Day 2 · 09:00',
        activity: {
          [Language.EN]: 'Working session — second strategic block',
          [Language.NL]: 'Werksessie — tweede strategisch blok',
        },
      },
      {
        time: 'Day 2 · 13:00',
        activity: {
          [Language.EN]: 'Walking lunch through the trees',
          [Language.NL]: 'Wandellunch door de bomen',
        },
      },
      {
        time: 'Day 2 · 15:30',
        activity: {
          [Language.EN]: 'Closing circle, write-up, departure',
          [Language.NL]: 'Slotrondje, vastleggen, vertrek',
        },
      },
    ],
  },
  faq: [
    {
      question: {
        [Language.EN]: 'Can we invoice this through one company invoice?',
        [Language.NL]: 'Kunnen we dit via één bedrijfsfactuur afrekenen?',
      },
      answer: {
        [Language.EN]:
          'Yes. One quote, one invoice, payable in two instalments. We handle VAT correctly for EU and non-EU companies.',
        [Language.NL]:
          'Ja. Eén offerte, één factuur, betaalbaar in twee termijnen. We regelen de BTW correct voor zowel EU- als niet-EU-bedrijven.',
      },
    },
    {
      question: {
        [Language.EN]: 'Do you have AV for presentations and workshops?',
        [Language.NL]: 'Hebben jullie AV voor presentaties en workshops?',
      },
      answer: {
        [Language.EN]:
          'The Hay House has sound and we can bring in a projector and screen. Whiteboards, flipcharts, and post-its are stocked. Tell us your set-up and we will have it ready before you arrive.',
        [Language.NL]:
          'Het Hay House beschikt over een geluidsinstallatie en we kunnen een beamer en scherm meenemen. Whiteboards, flip-overs en post-its zijn aanwezig. Laat ons je opzet weten, dan hebben we alles klaarstaan voor jullie aankomst.',
      },
    },
    {
      question: {
        [Language.EN]: 'What about facilitators or coaches?',
        [Language.NL]: 'En hoe zit het met facilitators of coaches?',
      },
      answer: {
        [Language.EN]:
          'We do not facilitate, but we work with a small network of facilitators and coaches in the Netherlands. We can introduce you to a few who fit your team’s shape.',
        [Language.NL]:
          'Wij faciliteren niet zelf, maar we werken met een klein netwerk van facilitators en coaches in Nederland. We kunnen je in contact brengen met enkelen die bij je team passen.',
      },
    },
    {
      question: {
        [Language.EN]: 'Is the venue accessible by public transport?',
        [Language.NL]: 'Is de locatie bereikbaar met openbaar vervoer?',
      },
      answer: {
        [Language.EN]:
          'Yes — Zwolle station is fifteen minutes by car or twenty minutes by bicycle. We arrange transfers for the team in one or two trips.',
        [Language.NL]:
          'Ja — station Zwolle is vijftien minuten met de auto of twintig minuten met de fiets. We regelen de transfer voor het team in één of twee ritten.',
      },
    },
  ],
  finalCta: {
    title: {
      [Language.EN]: 'Bring the team to a place that does the logistics so they can do the thinking',
      [Language.NL]: 'Breng het team naar een plek die de logistiek regelt, zodat zij kunnen denken',
    },
    body: {
      [Language.EN]:
        'Tell us your team size, your dates, and roughly what kind of work you need to do. We will come back with a quote, a sample agenda, and a transfer plan.',
      [Language.NL]:
        'Vertel ons je teamgrootte, je data en ongeveer wat voor werk er gedaan moet worden. We komen terug met een offerte, een voorbeeldagenda en een transferplan.',
    },
  },
}
