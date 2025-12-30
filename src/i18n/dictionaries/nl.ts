import type { Dictionary } from '../types'

/**
 * Dutch translations
 */
export const nl: Dictionary = {
  nav: {
    home: 'Home',
    about: 'Over ons',
    facilities: 'Faciliteiten',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Welkom bij',
    emphasis: 'the Makers Barn',
    subtitle: 'Jouw retreat verdient meer dan',
    subtitleBreak: 'alleen een locatie.',
  },

  heroDetails: {
    title: 'Een intieme locatie voor retreats en bijeenkomsten',
    subtitle: 'Op het Nederlandse platteland, omgeven door natuur.',
    body: 'Een retreat ruimte die voelt als thuis, omgeven door velden en grote open luchten. Ontworpen voor diep, transformatief werk met gemak, warmte en schoonheid. Plaats voor maximaal 20 personen.',
    primaryCtaLabel: 'Ontdek de ruimtes',
    secondaryCtaLabel: 'Plan je retreat',
    metaItems: [
      'Ruimte voor intieme groepen',
      'Sauna & natuur voor de deur',
      'Gelegen op het Nederlandse platteland',
    ],
  },

  contact: {
    pageTitle: 'Neem Contact Op',
    introText:
      'We horen graag van je! Of je nu een retreat, workshop plant, of gewoon meer wilt weten over Maker\'s Barn, we helpen je graag. Kies de manier die het beste bij je past:',
    formTitle: 'Contacteer ons',
    options: {
      whatsapp: {
        title: 'WhatsApp',
        description: 'Stuur ons een snel bericht voor directe communicatie',
        buttonText: 'Neem contact op via WhatsApp',
      },
      email: {
        title: 'Stuur een E-mail',
        description: 'Stuur ons een bericht en we nemen contact op',
        buttonText: 'Stuur een E-mail',
      },
      form: {
        title: 'Contactformulier',
        description: 'Vul het formulier hieronder in en we nemen contact op',
        buttonText: 'Ga naar Contactformulier',
      },
    },
    labels: {
      name: 'Hoi! Mijn naam is...',
      email: 'en je kunt me bereiken op...',
      phone: 'of bel me op...',
      message: 'Ik zou graag willen vragen over...',
    },
    placeholders: {
      name: 'Je naam...',
      email: 'Je e-mail...',
      phone: 'Je telefoonnummer...',
      message: 'Wat je hartje begeert :)',
    },
    buttons: {
      submit: 'Versturen',
      submitting: 'Versturen...',
    },
    messages: {
      success: 'Bedankt voor je bericht! We nemen snel contact met je op.',
      emailFailed: 'Er was een probleem bij het verzenden van je bericht. Probeer het later opnieuw.',
      unexpectedError: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw.',
      validationError: 'Controleer je invoer en probeer het opnieuw.',
      rateLimited: 'Te veel verzoeken. Wacht even voordat je het opnieuw probeert.',
      loading: 'Versturen...',
    },
  },

  footer: {
    getInTouch: 'Neem Contact Op',
    followUs: 'Volg Ons',
    tagline: 'Waar creativiteit rust ontmoet',
    copyright: "Maker's Barn. Alle rechten voorbehouden.",
  },

  about: {
    title: 'Over Ons',
    intro: `Welkom bij MakersBarn, een plek waar creativiteit, vakmanschap en gemeenschap samenkomen. Genesteld in het hart van het platteland, hebben we een historische hooischuur getransformeerd tot een levendige ruimte voor retreats, workshops en creatieve bijeenkomsten. Onze missie is het bieden van een toevluchtsoord waar makers, kunstenaars en dromers kunnen verbinden, creëren en inspiratie vinden.`,
    secondary: `We geloven in de kracht van hands-on creatie, de schoonheid van natuurlijke materialen en het belang van ruimtes die zowel individuele groei als collectieve ervaringen voeden. Of je nu een retreat plant, een workshop organiseert of gewoon een rustige plek zoekt om aan je volgende project te werken, MakersBarn biedt de perfecte omgeving om je visie tot leven te brengen.`,
    teamTitle: 'Ontmoet het Team',
    metaTitle: 'Over Ons',
    metaDescription:
      'Ontmoet het team achter MakersBarn. Leer over onze missie om een toevluchtsoord te creëren waar makers, kunstenaars en dromers kunnen verbinden en inspiratie vinden.',
  },

  facilities: {
    title: 'Faciliteiten',
    intro: `Huur de hele locatie voor je retreat, masterclass of creatieve avonturen. We bieden een privétuin, verbouwde hooischuur, 23 bedden en alle ruimte en rust die je nodig hebt.`,
    secondary: `Extra ruimtes nodig tijdens je retreat of wil je een aparte ruimte boeken voor een een-op-een sessie of andere intieme bijeenkomst? We hebben deze pareltjes die we met liefde aanbieden als je thuis weg van huis.`,
    metaTitle: 'Faciliteiten',
    metaDescription:
      'Ontdek onze unieke retreat ruimtes bij MakersBarn. Huur de hele locatie met privétuin, verbouwde hooischuur, 23 bedden en alle rust die je nodig hebt.',
    stats: [
      { number: '60m²+', description: 'Open praktijkruimte.' },
      { number: '14', description: 'Bedden verdeeld over 6 gezellige kamers' },
      { number: '1.3ha+', description: 'Privéterrein met natuurlijke zwemvijver, sauna en vuurplaats.' },
    ],
    categories: {
      groupAccommodation: 'Groepsaccommodatie',
      workshopSpace: 'Workshopruimte',
      outdoors: 'Buiten',
    },
    items: {
      hayHouse: {
        title: 'Betoverend Hooihuis',
        description:
          'Een prachtig verbouwde hooischuur met 23 comfortabele bedden verdeeld over twee voormalige stallen. Perfect voor retreats, workshops en creatieve bijeenkomsten.',
        features: ['Keuken', 'Badkamer', '23 bedden over twee voormalige stallen', 'Grote gemeenschappelijke ruimte'],
      },
      cosmos: {
        title: 'De Cosmos',
        description:
          'Een intieme workshopruimte ontworpen voor kleinere sessies, masterclasses en een-op-een creatief werk. Perfect voor intieme bijeenkomsten en gespecialiseerde workshops.',
        features: ['Workshopruimte', 'Comfortabele zitplaatsen', 'Natuurlijk licht'],
      },
      horizon: {
        title: 'Horizon',
        description:
          'Uitgestrekte buitenruimtes om te verbinden met de natuur en inspiratie te vinden in de open lucht. Perfect voor reflectie, buitenworkshops en genieten van het platteland.',
      },
      sauna: {
        title: 'Sauna & Hot Tub',
        description:
          'Ontspan en verjong in onze privé sauna en hot tub. De perfecte manier om te ontspannen na een dag creatief werk of workshops.',
      },
      pond: {
        title: 'Zwemvijver',
        description:
          'Een natuurlijke zwemvijver omgeven door weelderig groen en lokale wildlife. Perfect voor een verfrissende duik of genieten van de vredige geluiden van de natuur.',
      },
      inBetween: {
        title: 'Alles Daartussen',
        description:
          'Veelzijdige ruimtes door ons terrein, van gezellige zolderkamers tot comfortabele ensuite accommodaties. Flexibele ruimtes die zich aanpassen aan jouw behoeften.',
        features: ['Keuken', 'Badkamer', 'Twee eenpersoons- of een tweepersoonbed', 'Ensuite opties beschikbaar'],
      },
    },
  },

  testimonials: {
    sectionTitle: 'Wat onze gasten zeggen',
    items: [
      {
        testimonial:
          'MakersBarn is pure magie. De combinatie van prachtig platteland, doordachte ruimtes en de sauna maakte onze retreat absoluut transformerend. We vertrokken verfrist en diep verbonden.',
        author: 'Emma K. - Wellness Retreat Organisator',
      },
      {
        testimonial:
          'Dit is de mooiste retreat ruimte die ik ooit heb ervaren. De aandacht voor detail, de natuurlijke omgeving en de vredige sfeer creëerden de perfecte omgeving voor ons team om te herverbinden en op te laden.',
        author: 'Marcus T. - Leiderschapscoach',
      },
      {
        testimonial:
          'Ik heb retreats georganiseerd door heel Europa, en MakersBarn valt op als iets echt bijzonders. De Nederlandse plattelandsomgeving, de warme gastvrijheid en de intieme ruimtes maken het perfect voor diep, betekenisvol werk.',
        author: 'Sophie L. - Workshop Facilitator',
      },
      {
        testimonial:
          'Ons creatieve team vond precies wat we nodig hadden bij MakersBarn. De inspirerende omgeving, omgeven door velden en natuur, hielp ons door creatieve blokkades heen te breken en ons beste werk te produceren.',
        author: 'David R. - Creatief Directeur',
      },
    ],
  },

  team: {
    members: [
      {
        name: 'Nana',
        description:
          'Het echte brein achter de MakersBarn. Zij neemt de meeste communicatie op zich, dus zij zal de eerste persoon zijn die je ontmoet.',
      },
      {
        name: 'Benny',
        description:
          'Benny heeft nog steeds passie voor IT en is vaak achter zijn computer te vinden werkend aan verschillende bedrijven. Houdt van handwerk als pauze, dus is zeer tevreden met het leven bij de MakersBarn.',
      },
      {
        name: 'Noud',
        description:
          'Noud is de echte Maker van ons: CMO, Chief Maker Officer. Ontdekte dat een zaag en boor meer een passie is dan een toetsenbord en computerscherm. Houdt de plek goed onderhouden, is vaak in de buurt, en bouwt meubels wanneer er tijd over is.',
      },
    ],
  },

  common: {
    logoAlt: "Maker's Barn",
    selectLanguage: 'Selecteer taal',
    toggleMenu: 'Menu wisselen',
  },

  metadata: {
    siteName: "The Maker's Barn",
    siteTitle: "The Maker's Barn - Nederlands Platteland Retreat",
    defaultDescription:
      'Jouw retreat verdient meer dan alleen een locatie. 60m²+ praktijkruimte, 14 bedden, 1.3ha+ privéterrein op het Nederlandse platteland.',
    keywords: ['retreat', 'Nederland', 'platteland', 'wellness', 'workshop locatie', 'creatieve retreat'],
  },
} as const
