import type { Dictionary } from '../types'

/**
 * Dutch translations
 */
export const nl: Dictionary = {
  nav: {
    home: 'Home',
    about: 'Over ons',
    facilities: 'Faciliteiten',
    experiences: 'Kom als gast',
    surroundings: 'Omgeving',
    tools: 'Gratis tools',
    contact: 'Contact',
    book: 'Boek',
    chefs: 'Koks',
  },

  hero: {
    eyebrow: 'Welkom op',
    emphasis: 'The MakersBarn',
    subtitle: 'Een thuis voor je retraite',
    subtitleBreak: '',
  },

  heroDetails: {
    title: 'Een fijne, intieme locatie voor retraites en sessies',
    subtitle: 'Midden op het Nederlandse platteland, omringd door natuur.',
    body: 'Een plek die voelt als thuiskomen, omringd door bomen met daarbuiten weidse weilanden. Opgezet voor transformerende bijeenkomsten die je bijblijven. Of je nu een yoga retraite, een workshop of een creatieve bijeenkomst geeft, onze plek staat voor je klaar.',
    primaryCtaLabel: 'Ontdek de ruimtes',
    secondaryCtaLabel: 'Reserveer je retraite',
    metaItems: [
      'Plek voor kleine groepen tot 20 personen',
      'Sauna & natuur op loopafstand',
      'Midden op het platteland',
    ],
  },

  contact: {
    pageTitle: 'Plan je retraite',
    metaTitle: 'Contact',
    metaDescription:
      'Neem contact op met MakersBarn. We horen graag van je over het plannen van je retraite, workshop of creatieve bijeenkomst.',
    introText:
      'Leuk dat je contact wilt opnemen! Of je nu een retraite of workshop wilt plannen, of gewoon meer wilt weten over the MakersBarn - we horen graag van je.',
    formTitle: 'Stuur ons een bericht',
    labels: {
      name: 'Hoi! Ik ben...',
      email: 'Je kunt me bereiken via...',
      phone: 'Of bel me op...',
      message: 'Hoe kunnen we je helpen?',
    },
    placeholders: {
      name: 'Je naam...',
      email: 'Je e-mailadres...',
      phone: 'Je telefoonnummer...',
      message: 'Vertel, waar kunnen we je mee helpen?',
    },
    buttons: {
      submit: 'Versturen',
      submitting: 'Bezig met versturen...',
    },
    messages: {
      success: 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.',
      emailFailed: 'Oeps, er ging iets mis bij het versturen. Probeer het later nog eens.',
      unexpectedError: 'Er ging iets mis. Probeer het later nog eens.',
      validationError: 'Kun je je gegevens even checken en het opnieuw proberen?',
      rateLimited: 'Rustig aan! Wacht even en probeer het dan opnieuw.',
      loading: 'Bezig met versturen...',
    },
    emailAlternative: {
      text: 'Liever mailen? Bereik ons direct via',
    },
    whatsappAlternative: {
      text: 'Of stuur ons een WhatsApp',
    },
  },

  unifiedContact: {
    pageTitle: 'We horen graag van je',
    pageSubtitle:
      'Of je nu een retraite wilt plannen of gewoon een vraag hebt, we helpen je graag. Kies hoe je contact wilt opnemen.',
    selectorAriaLabel: 'Contact opties',
    intentSelector: {
      questionLabel: 'Stel een Vraag',
      questionSublabel: 'Snel & eenvoudig',
      bookingLabel: 'Vraag een Offerte',
      bookingSublabel: 'Vrijblijvend',
    },
    mapTitle: 'Locatiekaart met Maker\'s Barn',
    questionFormImageAlt: 'Gezellige bank bij de Hay House accommodatie',
    intentLeadIn: {
      looking: 'Je vraagt naar het vinden van een kok voor je retraite. Vertel ons wat je van plan bent en we koppelen je aan iemand uit onze gids of wijzen je de weg.',
      join: 'Je vraagt naar toelating tot de Makers Barn koksengids. Vertel ons over je keuken en we nemen contact met je op.',
    },
  },

  booking: {
    pageTitle: 'Boek je Retraite',
    metaTitle: 'Boek je Retraite',
    metaDescription:
      'Boek je retraite bij The Makers Barn. Kies je voorkeursdata, groepsgrootte en accommodatieopties voor je perfecte escape op het platteland.',
    introText:
      'Klaar om je retraite te plannen? Vul het formulier hieronder in met je voorkeuren en we nemen contact met je op over beschikbaarheid en een gepersonaliseerde offerte.',
    formTitle: 'Retraite Boekingsaanvraag',
    progressLabel: 'Boekingsvoortgang',
    sections: {
      contact: 'Contactgegevens',
      retreat: 'Retraite Details',
      dates: 'Voorkeursdata',
      groupSize: 'Groepsgrootte',
      accommodation: 'Accommodatie & Catering',
      extraInfo: 'Extra Informatie',
    },
    steps: {
      contact: 'Contact',
      retreat: 'Data',
      details: 'Details',
      review: 'Afronden',
    },
    stepDescriptions: {
      contact: 'Laten we beginnen met je contactgegevens zodat we je kunnen bereiken.',
      retreat: 'Vertel ons over je retraite: type, data en duur.',
      details: 'Deel je groepsgrootte en accommodatievoorkeuren.',
      review: 'Voeg eventuele extra informatie toe voor het versturen.',
    },
    validation: {
      nameRequired: 'Vul je naam in',
      emailRequired: 'Vul je e-mailadres in',
      emailInvalid: 'Vul een geldig e-mailadres in',
      retreatTypeOtherRequired: 'Specificeer je type retraite',
    },
    labels: {
      name: 'Je naam',
      email: 'E-mailadres',
      phone: 'Telefoonnummer',
      startDate: 'Voorkeurs startdatum',
      duration: 'Duur (dagen)',
      flexibleDates: 'Mijn data zijn flexibel',
      flexibleDatesText: 'Flexibiliteit details',
      minGroupSize: 'Minimale groepsgrootte',
      maxGroupSize: 'Maximale groepsgrootte',
      retreatType: 'Type retraite',
      retreatTypeOther: 'Specificeer',
      accommodationPreferences: 'Accommodatievoorkeuren',
      cateringNeeded: 'We hebben catering nodig',
      cateringDetails: 'Catering details',
      extraInfo: 'Is er nog iets dat je wilt delen?',
    },
    placeholders: {
      name: 'Je volledige naam',
      email: 'jouw@email.nl',
      phone: '+31 6 12345678',
      duration: 'bijv. 3',
      flexibleDatesText: 'bijv. We kunnen ook de volgende week, of een kortere 2-daagse retraite...',
      minGroupSize: 'Min',
      maxGroupSize: 'Max',
      retreatTypeOther: 'Beschrijf je type retraite...',
      accommodationPreferences: 'bijv. We hebben 3 privékamers nodig en de rest kan gedeeld...',
      cateringDetails: 'bijv. Alleen ontbijt, volpension, vegetarische opties...',
      extraInfo: 'bijv. Toegankelijkheid, specifieke apparatuur, speciale verzoeken...',
      selectDate: 'Selecteer een datum',
    },
    retreatTypes: {
      privateGroup: 'Privé/Groep Retraite',
      yoga: 'Yoga Retraite',
      workshop: 'Workshop',
      other: 'Anders',
    },
    cateringOptions: {
      yes: 'Ja',
      no: 'Nee',
    },
    reviewLabels: {
      contact: 'Contact',
      retreat: 'Retraite',
      group: 'Groep',
      catering: 'Catering',
      notProvided: 'Niet opgegeven',
    },
    datePicker: {
      unavailable: 'Niet beschikbaar',
      dateUnavailable: 'Deze datum is niet beschikbaar',
    },
    helpText: {
      startDate: 'Selecteer je voorkeursaankomstdatum',
      duration: 'Hoeveel dagen duurt je retraite?',
      accommodationIntro: 'Onze faciliteiten omvatten:',
      accommodationCosmos: 'De Cosmos cabin: 1 privékamer (2-3 personen)',
      accommodationGroup: 'Horizon gebouw: Meerdere kamers (10-12 personen)',
    },
    buttons: {
      submit: 'Boekingsaanvraag Versturen',
      submitting: 'Versturen...',
      next: 'Volgende',
      back: 'Terug',
    },
    messages: {
      success: 'Bedankt voor je boekingsaanvraag! We nemen zo snel mogelijk contact met je op.',
      emailFailed: 'Er ging iets mis bij het versturen. Probeer het later nog eens.',
      unexpectedError: 'Er ging iets mis. Probeer het later nog eens.',
      validationError: 'Controleer je gegevens en probeer het opnieuw.',
      rateLimited: 'Te veel aanvragen. Wacht even en probeer het dan opnieuw.',
      loading: 'Versturen...',
    },
    alert: {
      title: 'Deze pagina is voor retraite-organisatoren',
      description:
        'Dit is voor groepen van 6+ personen. Wil je deelnemen aan een bestaande retraite of heb je andere vragen?',
      joinRetreatLink: 'Bekijk andere opties',
      contactLink: 'Neem contact op',
    },
    success: {
      title: 'Aanvraag Ontvangen!',
      subtitle: 'Bedankt voor je interesse in The Makers Barn',
      description:
        'We hebben je boekingsaanvraag ontvangen en kijken ernaar uit om je te helpen een onvergetelijke retraite-ervaring te creëren.',
      whatNext: 'Wat gebeurt er nu?',
      steps: [
        'We bekijken je aanvraag binnen 24-48 uur',
        'Je ontvangt een gepersonaliseerde offerte via e-mail',
        'We kunnen een gesprek inplannen om je specifieke wensen te bespreken',
      ],
      newRequestButton: 'Nieuwe Aanvraag Indienen',
      homeButton: 'Terug naar Home',
    },
  },

  footer: {
    getInTouch: 'Neem contact op',
    followUs: 'Volg ons',
    tagline: 'Where creativity meets tranquility',
    copyright: "The MakersBarn.",
    viewLocation: 'Bekijk locatie',
  },

  about: {
    title: 'Over ons',
    intro: `The MakersBarn begon als een plek voor allerlei soorten Makers: houtbewerkers, zakenmensen, kunstenaars en dromers. Gaandeweg leerde we dat wat mensen het meest nodig hebben niet zomaar een plek om te werken is. Het is een plek om tot rust te komen. Dus dat zijn we gaan maken.`,
    secondary: `Wij geloven dat er in ieder van ons een Maker schuilt. Of dat nu iets is wat we met onze handen maken, plezier maken, of het maken van herinneringen. Samenkomen, delen en verbinden zijn allemaal kernwaarden van Makers.`,
    tertiary: `Wij drieën kwamen samen met een visie en een drang om te ontsnappen aan de drukte van het stadsleven. Een prachtige herenboerderij uit de jaren '20, onze liefde voor het land en onze toewijding aan het creëren van unieke verblijven hebben tot een plek geleid waar planten, dieren én mensen geluk vinden.`,
    fourth: `Of je nu je volgende retraite wilt organiseren, aan een retraite wilt deelnemen, of gewoon wilt genieten van een rustig verblijf; the MakersBarn staat voor je klaar.`,
    teamTitle: 'Wie we zijn',
    metaTitle: 'Over ons',
    metaDescription:
      'Maak kennis met het team achter de MakersBarn. Een plek waar makers, kunstenaars en dromers samenkomen en inspiratie vinden.',
    cta: 'We delen graag onze favoriete plekjes! Tips nodig voor wandelingen, lokale activiteiten of verborgen pareltjes in de omgeving? Vraag het ons gerust.',
    ctaButton: 'Neem Contact Op',
  },

  facilities: {
    title: 'Faciliteiten',
    intro: `Huur de ruimtes die je nodig hebt voor je retraite, masterclass of creatieve uitjes. We hebben een eigen tuin, een verbouwde hooischuur, 14 bedden, plus ruimte voor tenten en campers, en alle rust die je nodig hebt. We helpen je ook graag met het regelen van catering op basis van jouw wensen en behoeften.`,
    metaTitle: 'Faciliteiten',
    metaDescription:
      'Huur de ruimtes die je nodig hebt bij MakersBarn. Eigen tuin, verbouwde hooischuur, 14 bedden, ruimte voor tenten en campers, plus catering op maat.',
    stats: [
      { number: '1200+', description: 'Bomen geplant op het terrein' },
      { number: '13.000+ m²', description: 'Eigen terrein met zwemvijver, sauna en vuurplaats' },
      { number: '∞', description: 'Oneindige mogelijkheden' },
    ],
    categories: {
      groupAccommodation: 'Groepsaccommodatie',
      workshopSpace: 'Workshopruimte',
      outdoors: 'Buiten',
    },
    ctaTitle: 'Klaar om je retraite te plannen?',
    ctaSubtitle: 'Laat ons je helpen een onvergetelijke ervaring te creëren voor je groep.',
    ctaButton: 'Boek nu je retraite',
    carousel: {
      previousImage: 'Vorige afbeelding',
      nextImage: 'Volgende afbeelding',
      viewFullscreen: 'Bekijk afbeelding op volledig scherm',
      goToImage: 'Ga naar afbeelding',
      imageNavigation: 'afbeelding navigatie',
    },
    items: {
      hayHouse: {
        title: 'Hooischuur - oefenruimte',
        description:
          'Een betoverend hooischuur met ruimte voor yoga, breathwork en nog veel meer! Zelfs nog mooier wanneer de zon schijnt en betoverende kleurrijke reflecties van de glazen stenen.',
        features: ['65+ m² ruimte', 'Vloerverwarming', 'Yogamatten en accessoires', 'Geluidssysteem'],
      },
      cosmos: {
        title: 'De Cosmos',
        description:
          'Een houten cabin met houtkachel. Luxe ingericht maar toch gezelliger dan welke andere plek ook. Privéterras met een van de mooiste uitzichten die Nederland te bieden heeft.',
        features: ['60 m²', 'Tweepersoonsbed of twee eenpersoonsbedden', 'Slaapbank', 'Douche', 'Keuken'],
      },
      horizon: {
        title: 'Horizon',
        description:
          'Oude schuur omgetoverd tot luxe slaapgelegenheid. Chill area, kamers met privé- en gedeelde douches. Keuken aanwezig op de tweede verdieping.',
        features: [
          '3-persoonskamer met gedeelde douche',
          '2-persoonskamer met eigen douche',
          'Privékamer met gedeelde douche',
          'Grote zolder (2-4 bedden, douche)',
          'Zolderruimte voor binnen praktijksessies',
        ],
      },
      sauna: {
        title: 'Sauna, Hot Tub & Vuurkuil',
        description:
          'Ontspan en kom tot rust in onze eigen sauna, Hot Tub en vuurkuil. De perfecte manier om bij te komen na een dag vol creativiteit of workshops.',
      },
      pond: {
        title: 'Zwemvijver',
        description:
          'Een natuurlijke zwemvijver omringd door groen en lokale dieren. Heerlijk voor een frisse duik of om te genieten van de rust van de natuur.',
      },
      inBetween: {
        title: 'Alles ertussenin',
        description:
          'Alle gebouwen en faciliteiten zijn natuurlijk essentieel voor een retraite, maar het zijn juist de kleine dingen daartussen die een plek echt bijzonder maken.',
        features: ['Mooie paden', '1000+ bomen', 'Theehuis', 'Vogelgebied', 'Weidse uitzichten'],
      },
    },
  },

  experiences: {
    metaTitle: 'Ervaringen',
    metaDescription: 'Ontdek jouw perfecte retraite-ervaring bij MakersBarn. Boek een solo yoga retraite, huur onze accommodatie, of sluit je aan bij een groepsweekend.',
    title: 'Ervaringen',
    intro: 'Of je nu op zoek bent naar rust, je eigen uitje wilt samenstellen, of wilt deelnemen aan een samengestelde retraite met anderen, we hebben de perfecte ervaring voor je klaar.',
    createExperience: {
      title: 'Geniet op jouw manier',
      subtitle: 'Je kan ons ook bezoeken zonder zelf een retraite te hosten. Een privé- of duo-retraite, met een groepje vrienden of kennissen, of gun jezelf rust door een van onze vakantiehuisjes te boeken. Of wordt deelnemer van een van de retraites door ons gehost.',
      alternativeText: 'Iets anders in gedachten?',
      alternativeCta: 'Neem contact op voor meer opties',
    },
    soloRetreat: {
      title: 'Solo / Duo Yoga Retraite',
      description: 'Een gepersonaliseerde retraite-ervaring in de Cosmos cabin. Op maat gemaakte yoga sessies, sauna, hot tub en complete rust voor je persoonlijke reis.',
      features: [
        '2-3 nachten pakketten',
        'Gepersonaliseerde yoga sessies',
        'Sauna & hot tub toegang',
        'Vers ontbijt inbegrepen',
      ],
      ctaLabel: 'Ontdek Solo Retraite',
    },
    bookingPlatforms: {
      airbnb: 'Boek via Airbnb',
      natuurhuisje: 'Boek via Natuurhuisje',
    },
    cabins: {
      cosmos: {
        title: 'Boek Cosmos Cabin',
        description: "Een houten cabin met houtkachel, gezellig als geen ander en omgeven door een van de mooiste uitzichten die Nederland te bieden heeft. Gemaakt voor stellen of duo's die zich willen terugtrekken in de natuur.",
        features: [
          'Houtkachel & privé terras',
          'Hot tub & sauna toegang',
          'Yoga sessies op aanvraag',
          'Massage beschikbaar',
          'Catering op aanvraag',
        ],
      },
      horizon: {
        title: 'Boek Horizon Loft',
        description: 'Een nieuw gebouwde luxe loft met premium afwerking, midden in het platteland. Open keuken, regendouche en een glazen paviljoen met uitzicht op gedeeld 13.000 m² terrein met wilde bloemenweiden.',
        features: [
          'Premium afwerking & regendouche',
          'Sauna toegang',
          'Gratis fiets',
          'Zwemvijver & vuurplaats',
          'Catering op aanvraag',
        ],
      },
    },
    togetherRetreat: {
      title: 'Vrienden Retraite',
      description: 'Een all-inclusive escape met vrienden. Yoga, creatieve workshops, heerlijke maaltijden en betekenisvolle connecties in een prachtige omgeving.',
      features: [
        'All-inclusive ervaring',
        'Yoga & creatieve workshops',
        'Ayurvedisch geïnspireerde maaltijden',
        'Exclusieve groepstoegang',
      ],
      ctaLabel: 'Ontdek Groepsretraites',
    },
    featuredRetreats: {
      title: 'Uitgelichte Retraites',
      subtitle: 'Sluit je aan bij een van onze aankomende samengestelde retraite-ervaringen',
      bookNow: 'Boek Nu',
      spotsLeft: 'plekken beschikbaar',
      fullyBooked: 'Volgeboekt',
    },
    ctaTitle: 'Niet zeker welke ervaring bij je past?',
    ctaSubtitle: 'Neem contact met ons op en we helpen je de perfecte match te vinden.',
    ctaButton: 'Neem Contact Op',
  },

  impressionCarousel: {
    kicker: 'Een kleine impressie',
    title: 'Neem de tijd, kijk rond',
    subtitle:
      'Ontdek de kracht van langzaam leven. Ontdek de schoonheid van langzaam leven. Elk moment hier nodigt je uit om te pauzeren, te ademen en opnieuw verbinding te maken met wat echt belangrijk is.',
    facilitiesButton: 'Ontdek onze faciliteiten',
    previousImage: 'Vorige afbeelding',
    nextImage: 'Volgende afbeelding',
    carouselNavigation: 'Carrousel navigatie',
    viewFullscreen: 'Bekijk impressie op volledig scherm',
    goToSlide: 'Ga naar slide',
  },

  impressionPolaroids: {
    kicker: 'Een kleine impressie',
    title: 'Een plek om blijvende herinneringen te maken',
    subtitle:
      'Ruimtes om je te focussen, te dwalen, te dutten, te schrijven, te reflecteren en samen te zijn. Hier is een glimp van hoe je retraite zou kunnen aanvoelen.',
  },

  testimonials: {
    sectionTitle: 'Wat onze gasten zeggen',
    items: [
      {
        testimonial:
          'De MakersBarn is pure magie. De combinatie van prachtig platteland, doordachte ruimtes en de sauna maakte onze retraite echt transformerend. We gingen verfrist en diep verbonden naar huis.',
        author: 'Emma K. - Wellness Retraite Organisator',
      },
      {
        testimonial:
          'Dit is de mooiste retraite plek die ik ooit heb meegemaakt. De aandacht voor detail, de natuurlijke omgeving en de rustige sfeer waren precies wat ons team nodig had om weer op te laden.',
        author: 'Marcus T. - Leiderschapscoach',
      },
      {
        testimonial:
          'Ik heb retraites georganiseerd door heel Europa, maar de MakersBarn is echt bijzonder. Het Nederlandse platteland, de warme gastvrijheid en de knusse ruimtes maken het ideaal voor diepgaand, betekenisvol werk.',
        author: 'Sophie L. - Workshop Facilitator',
      },
      {
        testimonial:
          'Ons creatieve team vond precies wat we zochten bij de MakersBarn. De inspirerende omgeving, te midden van weilanden en natuur, hielp ons om creatieve blokkades te doorbreken en ons beste werk te maken.',
        author: 'David R. - Creatief Directeur',
      },
    ],
  },

  team: {
    members: [
      {
        name: 'Nana',
        description:
          'Nana is het brein achter The MakersBarn. Deze plek met zijn rustgevende sfeer is een reflective van haar eigen levensreis en helingsproces. Ze is de person met wie je vanaf het begin contact hebt en degene die ervoor zorgt dat jouw retraite preceis aanvoelt zoals je hem voorstelt. Nana brengt een kalme aanwezigheid gevoed door haar liefde voor natuur, yoga, mindful leven en genieten van kleine creatieve momenten. Ze begrijpt wat retraitebegeleiders nodig hebben en ondersteund op een zorgzame manier.',
      },
      {
        name: 'Benny',
        description:
          'Deels tech wizard, deels keukenliefhebber, Benny creërt graag magie en doet dit zowel op zijn computerscherm als bij het fornuis. Met zijn speelse nieuwsgierigheid is het geen wonder dat de aap zijn spirit animal is. Hij balanceert computerwerk met yoga en mindfulness, is altijd blij met een cocktail, of een leuk gesprek over de dingen die jouw op het moment bezighouden.',
      },
      {
        name: 'Noud',
        description:
          'Noud is de echte Maker van ons: CMO, Chief Maker Officer. Zijn schroeven, spijkers, boompjes en liefde voor de plek zorgt dat alles tip-top in orde is. Wanneer er tijd over is kan je hem regelmatig in de werkplaats aantreffen waar hij met plezier meubels bouwt.',
      },
    ],
  },

  common: {
    logoAlt: "Maker's Barn",
    selectLanguage: 'Kies je taal',
    toggleMenu: 'Menu openen',
    previousImage: 'Vorige afbeelding',
    nextImage: 'Volgende afbeelding',
    closeGallery: 'Galerij sluiten',
    imageNavigation: 'Afbeelding navigatie',
    imageThumbnails: 'Afbeelding miniaturen',
    imageGallery: 'Afbeelding galerij',
    floatingWhatsApp: {
      ariaLabel: 'Open WhatsApp chat',
      tooltip: 'Chat met ons via WhatsApp',
    },
    lightbox: {
      closeGallery: 'Galerij sluiten',
      previousImage: 'Vorige afbeelding',
      nextImage: 'Volgende afbeelding',
      imageOf: 'van',
      viewImage: 'Bekijk afbeelding',
      current: 'huidig',
      imageNavigation: 'Afbeelding navigatie',
      imageThumbnails: 'Afbeelding miniaturen',
      keyboardInstructions:
        'Gebruik de pijltjestoetsen links en rechts om tussen afbeeldingen te navigeren. Druk op Escape om de galerij te sluiten.',
    },
  },

  metadata: {
    siteName: "The Maker's Barn",
    siteTitle: "The Maker's Barn - Retraite op het Nederlandse platteland",
    defaultDescription:
      'Geef je retraite de plek die het verdient. 60m²+ praktijkzaal, 14 bedden, 1.3ha+ eigen terrein midden op het Nederlandse platteland.',
    keywords: ['retraite', 'Nederland', 'platteland', 'wellness', 'workshop locatie', 'creatieve retraite'],
  },

  location: {
    metaTitle: 'Omgeving',
    metaDescription:
      'The Makers Barn ligt in het prachtige Overijssel, omringd door natuur, historische steden en eindeloze outdoor activiteiten.',
    title: 'Onze Omgeving',
    intro:
      'The Makers Barn ligt midden in het Overijsselse Salland, een plek bekend om haar natuur en landelijkheid. Omringd door bossen, rivieren en open landschappen is er geen gebrek aan dingen om te ontdekken.',
    surroundings:
      'Op loopafstand bevindt zich \'Kasteel Nijenhuis\', een historisch kasteel met museum en beeldentuinen. Lokale boerderijen bieden verse producten, en de charmante dorpen Heino en Wijhe zijn makkelijk te bereiken. Wellness-liefhebbers zitten goed, de fijne sauna \'Sauna Swoll\' is slechts 15 minuten rijden.',
    hiking:
      'De omgeving biedt talloze wandel- en fietsroutes door natuurgebieden, langs de IJssel en door de prachtige Sallandse Heuvelrug. We stellen gratis fietsen beschikbaar zodat onze gasten op eigen tempo kunnen verkennen.',
    cities:
      'Historische Hanzesteden zoals Zwolle, Deventer en Kampen zijn gemakkelijk bereikbaar met de trein (station op 10 minuten fietsen) of auto, elk met een rijke geschiedenis, prachtige architectuur en levendige lokale cultuur.',
    cta: 'Neem contact met ons op voor meer informatie.',
    ctaButton: 'Neem Contact Op',
  },

  shantiDevaRetreat: {
    metaTitle: 'Shanti Deva Boeddhistisch Tibetaans Retraite',
    metaDescription: 'Doe mee met Gen La Geshe Pema Dorjee voor een 6-daagse Boeddhistische retraite op het Nederlandse platteland. Studeer Tibetaans Boeddhisme met meditatie, onderricht en vegetarische maaltijden inbegrepen.',
    backToExperiences: 'Terug naar Ervaringen',

    hero: {
      title: 'Shanti Deva Boeddhistisch Tibetaans Retraite',
      subtitle: 'Studie van Tibetaans Boeddhisme',
      withTeachers: 'met Gen La Geshe Pema Dorjee & de Gerespecteerde monnik Lobsang',
      dailyTime: 'Dagelijks van 7:00 tot 20:00 uur',
      bookNow: 'Reserveer Je Plek',
    },

    dates: {
      title: 'Beschikbare Data',
      firstRetreat: 'Eerste retraite',
      secondRetreat: 'Tweede retraite',
      duration: '5 nachten (6 dagen)',
    },

    teacher: {
      sectionTitle: 'Wie is Geshe Pema Dorjee?',
      biography: 'Geshe Pema Dorjee werd geboren in Tibet en vluchtte met zijn familie in 1959 naar Dharamsala, India. Hij studeerde Boeddhistische filosofie en ontving in 1995 de Geshe-graad - de hoogste academische titel in het Tibetaans Boeddhisme. Meer dan 20 jaar gaf hij les en was hij directeur van het Tibetan Children\'s Village. Op verzoek van Zijne Heiligheid de Dalai Lama richtte hij het Bodong Research Center en een klooster in Kathmandu op. Hij heeft ook uitgebreide humanitaire projecten geleid, waaronder scholen, weeshuizen, watersystemen en aardbevingshulp in Nepal. Sinds 1997 geeft hij wereldwijd les, bekend om zijn helderheid, warmte en mededogen.',
      gesheTitle: 'Geshe',
      monkTitle: 'Gerespecteerde Monnik',
    },

    details: {
      title: 'Retraite Details',
      location: 'Locatie',
      locationDescription: 'Een plattelandsboerderij in Nederland',
      address: 'Adres boerderij',
      accessibility: 'Bereikbaarheid',
      accessibilityItems: {
        carFromZwolle: '15 minuten met de auto vanaf Zwolle (1 uur 15 met de trein vanaf Schiphol Airport, Amsterdam)',
        freePickup: 'Gratis ophaalservice vanaf station Zwolle (14:00-16:00)',
        sharedTransport: 'Gedeeld vervoer terug naar het station aan het einde: ~€10 per persoon',
      },
    },

    schedule: {
      title: 'Dagprogramma',
      arrivalDay: 'Aankomstdag',
      studyDays: 'Studiedagen',
      finalDay: 'Laatste Dag',
      specialActivity: 'Een Tibetaanse Momo Kookworkshop wordt gehouden op een van de retraitedagen.',
      activities: {
        arrivalCheckin: 'Aankomst & Kamer Inchecken',
        farmTour: 'Rondleiding Boerderij',
        dinner: 'Diner',
        introProgram: 'Introductie & Programma Overzicht',
        guidedMeditation: 'Geleide Meditatie',
        breakfast: 'Ontbijt',
        morningTeaching: 'Ochtend Onderricht (met korte pauze)',
        lunch: 'Lunch',
        afternoonTeaching: 'Middag Onderricht (met korte pauze)',
        qaSession: 'Vraag & Antwoord Sessie',
        closingSession: 'Afsluitende Sessie & V&A',
        freeTime: 'Vrije Tijd',
        checkout: 'Uitchecken',
      },
    },

    included: {
      title: 'Wat is Inbegrepen',
      accommodation: 'Accommodatie',
      accommodationOptions: {
        duration: '5 nachten (6 dagen)',
        doubleRooms: 'Tweepersoonskamers',
        sharedRooms: 'Kamers voor 3-4 personen',
        singleRoom: 'Eenpersoonskamer',
        tentCaravan: 'Optie om in eigen tent of caravan te verblijven tegen gereduceerd tarief',
      },
      servicesTitle: 'Diensten',
      services: {
        beddingTowels: 'Beddengoed & handdoeken (zwembad/sauna handdoek niet inbegrepen)',
        vegetarianMeals: '3 vegetarische maaltijden per dag + drankjes & snacks',
        farmFacilities: 'Gebruik van alle boerderijfaciliteiten - Buiten hot tub, Sauna, Ecologisch zwembad en meer',
      },
    },

    pricing: {
      title: 'Prijzen',
      totalPrice: '€640',
      perParticipant: 'per deelnemer (inclusief btw)',
      breakdown: 'Prijsoverzicht',
      breakdownItems: {
        accommodation: 'Accommodatie',
        meals: 'Maaltijden',
        venueRental: 'Locatie huur bijdrage',
        teacherSupport: 'Ondersteuning reis & verblijf Geshe Pema Dorjee & monnik Lobsang',
      },
      paymentTerms: 'Betalingsvoorwaarden',
      paymentItems: {
        depositPayment: 'Eerste betaling (aanbetaling): €140 bij inschrijving',
        secondPayment: 'Tweede betaling: €500, vier maanden voor de retraite',
      },
      cancellation: 'Annuleringsbeleid',
      cancellationItems: {
        fourMonthsRefund: 'Tot 4 maanden voor aanvang: volledige terugbetaling aanbetaling',
        afterFullPayment: 'Na tweede betaling (volledige betaling): 25% terugbetaling',
        replacementRefund: 'Als een vervangende deelnemer wordt gevonden: volledige terugbetaling',
      },
    },

    registration: {
      title: 'Klaar om Mee te Doen?',
      subtitle: 'Plaatsen zijn beperkt. Reserveer vandaag nog je plek.',
      participantRange: '10-15 deelnemers',
      contact: 'Vragen? Neem direct contact op met de retreat organisatoren',
      whatsapp: 'WhatsApp',
      email: 'E-mail',
      registerButton: 'Inschrijven',
    },
  },

  silos: {
    backToRetreats: 'Alle retraite-types',
    hookEyebrow: 'Kort gezegd',
    factsTitle: 'Waarom The Makers Barn',
    scheduleTitle: 'Een dag op de boerderij',
    faqTitle: 'Vragen die ertoe doen',
    primaryCta: 'Plan je retraite',
    secondaryCta: 'Stel een vraag',
    finalCtaPrimary: 'Vraag een offerte aan',
    finalCtaSecondary: 'Neem contact op',
    toolCtaTitle: 'Prijs je retraite plannen?',
    toolCtaBody: 'Gebruik onze gratis calculator om omzet, kosten, marge en break-even te plannen.',
    toolCtaLabel: 'Open de calculator',
    calendarCtaTitle: 'De timing plannen?',
    calendarCtaBody: 'Gebruik onze gratis 12-maanden launch-kalender om fasen, mijlpalen en de realistische planning uit te werken.',
    calendarCtaLabel: 'Open de launch-kalender',
    auditCtaTitle: 'Spot de fouten voor je tekent',
    auditCtaBody: 'Loop de 25 meest gemaakte retraitefouten langs je plan. 5 minuten, geen aanmelding, een persoonlijk risicoverslag.',
    auditCtaLabel: 'Doe de audit van 5 minuten',
  },

  comparisonTeaser: {
    eyebrow: 'Opties vergelijken',
    headline: 'Een ander soort locatie',
    ctaLabel: 'Lees de volledige vergelijking',
  },

  retreats: {
    metaTitle: 'Organiseer een retraite',
    metaDescription:
      'Organiseer je retraite bij The Makers Barn. Een boerderij uit 1920 in Overijssel voor yoga, meditatie, schrijvers, teams, ademwerk en meer.',
    eyebrow: 'Organiseer een retraite',
    title: 'Rustige manieren om een boerderij uit 1920 te gebruiken',
    intro:
      'The Makers Barn leent zich voor verschillende soorten werk. Kies het retraite-type dat past — elke pagina gaat dieper in op wat we voor zo’n groep bieden.',
    cardCta: 'Bekijk dit retraite-type',
    helpTitle: 'Niet zeker welke past?',
    helpBody:
      'Vertel ons iets over je groep en we helpen je de juiste vorm te vinden — soms is het iets anders, en ook dat is prima.',
    helpCta: 'Praat met ons',
    cards: {
      yogaTeachers: {
        title: 'Yogadocenten',
        pitch:
          'Een verwarmde hooischuur-shala voor maximaal 20 studenten, een keuken die meebeweegt met jouw schema, en de rest is geregeld.',
      },
      meditationRetreats: {
        title: 'Meditatie & dharma-groepen',
        pitch:
          'Twaalfduizend vierkante meter gedragen stilte, een traditie van beoefening, en een keuken die jouw maaltijdschema respecteert.',
      },
      writingRetreats: {
        title: 'Schrijfretraites',
        pitch:
          'Voor gepubliceerde auteurs en schrijfdocenten die meerdaagse schrijfintensieven leiden. Werkruimte, privécabines en een lange tafel voor de avondlezingen.',
      },
      teamOffsites: {
        title: 'Teamuitjes',
        pitch:
          'Een boerderij uit 1920, exclusief voor je team. Strategiedagen die niet aanvoelen als vergaderzalen.',
      },
      breathworkSoundHealing: {
        title: 'Ademwerk & klank',
        pitch:
          'Een verwarmde hooischuur die meeklinkt met de bowls, een vuurplaats buiten, en een sauna voor wat daarna naar boven komt.',
      },
      coachingIntensives: {
        title: 'Coaching-intensieven',
        pitch:
          'Een gedragen locatie voor coaches die intensieven van 8–12 personen leiden. Het werk dat na de workshop begint, op een plek die het kan dragen.',
      },
      somaticTherapyRetreats: {
        title: 'Somatische & therapeutische retraites',
        pitch:
          'Voor erkende therapeuten en somatische beoefenaars die trauma-geïnformeerde residentials leiden. Volledige buyout, sauna, velden buiten de praktijkruimte.',
      },
      wellnessDetoxRetreats: {
        title: 'Wellness & detox',
        pitch:
          'Voor wellness-coaches, natuurgeneeskundigen en Ayurveda-docenten die clean-eating-, sauna- en yogaprogramma’s leiden op een eigen boerderij van 1,3 hectare.',
      },
      circleRetreats: {
        title: 'Circle-retraites',
        pitch:
          'Voor facilitators van vrouwen-, mannen- en gemengde circles. Een vuurplaats, een schuur, en de privacy die het werk vraagt.',
      },
      photographyWorkshops: {
        title: 'Fotografie-workshops',
        pitch:
          'Voor professionele fotografen die meerdaagse workshops leiden. Grote luchten, 1,3 hectare verschuivend licht, en een basis die de rest regelt.',
      },
    },
    comparisonCard: {
      eyebrow: 'Nog aan het twijfelen?',
      headline: 'Een eigen boerderij of een commerciële locatie?',
      body:
        'Als je een kleine eigen boerderij afweegt tegen een commerciële retraitelocatie, schreven we een eerlijke vergelijking. Capaciteit, keuken, geluidsbeeld, wat je inruilt en wat je wint — zonder verkooppraatje.',
      ctaLabel: 'Lees de vergelijking',
    },
    toolsBlock: {
      eyebrow: 'Gratis planningstools',
      title: 'Tools voor retraitebegeleiders',
      intro: 'Gratis tools om je te helpen een retraite te plannen die echt werkt — bij MakersBarn of elders.',
      calendarTitle: 'De 12-maanden launch-kalender',
      calendarBody: 'Fasen, mijlpalen en de realistische planning. Kies je aanloopduur (3, 6, 9 of 12 maanden) en streep af wat je hebt afgerond.',
      calendarCtaLabel: 'Open de launch-kalender',
      calculatorTitle: 'Winstgevendheidscalculator voor retraites',
      calculatorBody: 'Plan omzet, kosten, marge en break-even-bezetting voordat je een locatie vastlegt.',
      calculatorCtaLabel: 'Open de calculator',
    },
  },

  tools: {
    hub: {
      metaTitle: 'Gratis tools voor retraitebegeleiders',
      metaDescription: 'Gratis calculators en tools voor retraitebegeleiders — prijsbepaling, winstgevendheid en planning. Geen aanmelding.',
      eyebrow: 'Gratis tools',
      title: 'Een toolkit voor retraitehosts',
      intro: 'Vijf lastige vragen, twintig gratis tools, één gids van gecheckte chefs. Geen aanmelding, geen e-mailmuur — en het werkt voor elke locatie, ook die je bij MakersBarn overweegt.',
      toolCardCta: 'Openen',
      workflowEyebrow: 'Kies waar je begint',
      workflowTitle: 'De vijf vragen die elke retraitehost moet beantwoorden',
      workflowIntro: 'Vijf lastige onderdelen van een retraite organiseren, elk met een eigen antwoord. Gebruik er één, gebruik ze alle vijf — in elke volgorde.',
      workflowSteps: [
        { title: 'Wat zie ik over het hoofd?', body: 'Een audit van 10 vragen die de blinde vlekken blootlegt voordat ze je geld kosten.' },
        { title: 'Word ik er winstgevend mee?', body: 'Prijzen, marge en het aantal gasten dat je nodig hebt om break-even te draaien.' },
        { title: 'Wanneer kan ik lanceren?', body: 'Een realistische planning van 3, 6, 9 of 12 maanden met mijlpalen.' },
        { title: 'Hoe ziet een dag eruit?', body: 'Een dagelijkse agenda met zinnige standaarden die je kunt aanpassen.' },
      ],
      freeBadge: '100% gratis',
      noSignupBadge: 'Geen aanmelding',
      categories: {
        audit: {
          label: 'Fouten-audits',
          title: 'Toets je retraiteplan',
          description: 'Een diagnose van 10 vragen die de blinde vlekken blootlegt die zowel beginnende als ervaren hosts missen — prijs, programma, logistiek en groepsdynamiek.',
          variantsLabel: 'Of gebruik een niche-versie:',
        },
        calculator: {
          label: 'Prijscalculators',
          title: 'Prijs je retraite met vertrouwen',
          description: 'Zie omzet, totale kosten, winstmarge en break-evenbezetting in realtime. Niche-afgestemde standaarden uit benchmarks voor yoga, wellness, meditatie en coaching.',
          variantsLabel: 'Of gebruik een niche-versie:',
        },
        planner: {
          label: 'Lanceringskalenders',
          title: 'Plan je lancering in de tijd',
          description: 'Mijlpalen per fase die je kunt afvinken, aanpassen en naar jezelf mailen. Kies de looptijd die past bij je lanceerdatum.',
          variantsLabel: 'Of kies een andere looptijd:',
        },
        agenda: {
          label: 'Agenda-bouwers',
          title: 'Ontwerp de dagelijkse flow',
          description: 'Onderbouwde retraiteschema\'s met niche-passende standaarden — vinyasa-flows, zit-loop-zitcycli, coaching hot-seats — allemaal bewerkbaar.',
          variantsLabel: 'Of gebruik een niche-versie:',
        },
      },
      chefsSection: {
        workflowQuestion: 'Wie kookt er?',
        workflowBody: 'Een gids van gecheckte retraitechefs die door heel Nederland werken.',
        label: 'Retraitechefs',
        title: 'Vind een chef die voor je retraite kan koken',
        description: 'Koken voor een retraite lijkt meer op het runnen van een kleine keuken dan op catering. Bekijk gecheckte profielen, dagtarieven, doorlooptijden, en wat je vóór een boeking moet vragen.',
        cardTag: 'Gids',
        cardTitle: 'Retraitechefs in Nederland',
        cardBody: 'Elk profiel is gecontroleerd en goedgekeurd door de chef zelf. Dagtarieven, dieetwensen, doorlooptijden en reisdekking — allemaal op de listing.',
        cardCta: 'Bekijk chefs',
      },
    },
    calculator: {
      inputs: {
        hiresFacilitatorsQuestion: 'Betaal je iemand van hen?',
        hiresFacilitatorsYes: 'Ja',
        hiresFacilitatorsNo: 'Nee',
        facilitatorFeeLabel: 'Totale vergoeding voor je team',
        revenueSectionLabel: 'Wat binnenkomt',
        revenueSectionDescription: 'De prijs die je je gasten rekent.',
        costsSectionLabel: 'Wat eruit gaat',
        costsSectionDescription: 'Alles wat de retraite je daadwerkelijk kost.',
        guestsLabel: 'Betalende gasten',
        guestsUnit: 'gasten',
        teamBlockTitle: 'Jouw team ter plekke',
        teamBlockDescription: 'Mensen die op de locatie blijven naast de betalende gasten.',
        teamCountLabel: 'Extra mensen die ter plekke blijven',
        teamCountUnit: 'extra',
        teamCountHelper: 'Jij, co-hosts en eventuele begeleiders die op de locatie slapen en eten. Meestal 1 tot 3.',
        nightsLabel: 'Aantal nachten',
        nightsUnit: 'nachten',
        pricePerGuestLabel: 'Prijs per gast',
        venuePerNightLabel: 'Locatie + accommodatie, per nacht',
        venueUnit: '/ nacht',
        venueAllPeopleNote: 'Totale nachtprijs voor iedereen die blijft slapen — zie de uitleg onder de calculator.',
        foodPerGuestPerDayLabel: 'Eten per persoon per dag',
        foodUnit: '/ persoon / dag',
        foodAllPeopleNote: 'Wordt automatisch vermenigvuldigd met gasten + jouw team — niemand eet gratis mee.',
        marketingAndOtherLabel: 'Marketing & overige kosten',
        advancedLabel: 'Extra\'s (open indien nodig)',
        travelLabel: 'Eigen reis & vervoer',
        insuranceLabel: 'Verzekering',
        paymentFeePercentLabel: 'Transactiekosten',
        vatToggleLabel: 'Mijn prijzen zijn incl. BTW',
        vatToggleHelper: 'Vink aan als de bedragen die je invoert bruto zijn. Standaard {percent}% — het algemene Nederlandse tarief.',
        vatPercentLabel: 'BTW-tarief',
        vatPercentHelper: 'In Nederland geldt nu één tarief van 21% voor retraites — voor accommodatie, eten én dienstverlening.',
        planningDaysLabel: 'Planningsdagen',
        daysUnit: 'dagen',
        resetLabel: 'Voorbeeldwaarden herstellen',
      },
      results: {
        kicker: 'Wat je overhoudt',
        headlineSentence: 'Bij {price} per gast met {guests} gasten houd je {profit} over — een marge van {margin}.',
        totalRevenue: 'Totale omzet',
        totalCosts: 'Totale kosten',
        profitMargin: 'Winstmarge',
        profitPerWorkday: 'Winst per werkdag',
        metricsLabel: 'Samenvatting retraite-economie',
        breakevenSentence: 'Je hebt minstens {guests} gasten bij {price} nodig voordat de retraite zichzelf terugverdient.',
        breakevenImpossible: 'Bij deze prijs vreten je kosten per gast het hele ticket op — meer gasten alleen brengt je niet bij break-even.',
        vatNoticeNet: 'getoond ex. {percent}% BTW',
        vatNoticeGross: 'getoond zoals ingevoerd',
        vatGrossHint: 'Gasten betalen {gross} per plek. Na {percent}% BTW houd je {net} per plek over om mee te werken — daarmee rekent de calculator.',
        breakdownLabels: {
          venue: 'Locatie',
          food: 'Eten',
          facilitator: 'Begeleider',
          marketing: 'Marketing & overig',
          travel: 'Reizen',
          insurance: 'Verzekering',
          fees: 'Betaalkosten',
          profit: 'Winst',
          barAriaLabel: 'Kosten- en winstverdeling',
        },
      },
      email: {
        heading: 'Mail me de samenvatting',
        placeholder: 'jouw@email.com',
        submit: 'Stuur samenvatting',
        sending: 'Verzenden…',
        success: 'Verzonden! Kijk maar even in je inbox.',
        error: 'Lukt nu niet — probeer het zo nog eens.',
        optInLabel: 'Stuur me af en toe een berichtje over retraiteprijzen (geen spam, met één klik weer uit)',
      },
      share: {
        heading: 'Deel deze cijfers',
        intro: 'Stuur het naar een co-host, partner of accountant — kijk of je aannames blijven staan.',
        copy: 'Link kopiëren',
        copied: 'Gekopieerd!',
        copyFailed: 'Kon link niet kopiëren',
        whatsapp: 'Deel via WhatsApp',
        whatsappMessage: 'Mijn retraitecijfers uit de MakersBarn-calculator:',
      },
      venueExplainer: {
        heading: 'Hoe locaties hun prijs opbouwen',
        paragraphs: [
          'De meeste retraitelocaties offreren in drie lagen: een basisprijs per nacht voor het gebruik van het pand, een eenmalige schoonmaakvergoeding en een prijs per persoon voor elk bed dat daadwerkelijk gebruikt wordt. Die prijs per persoon geldt voor iedereen die er slaapt — betalende gasten én jouw team.',
          'Organisatoren denken soms dat de prijs per persoon alleen voor de betalende gasten geldt en schrikken later van de eindfactuur. Vul de nachtprijs hierboven dus in als het totaal voor iedereen die blijft slapen — gasten + de mensen uit jouw team-slider — en gebruik dat bedrag.',
        ],
        example: 'Voorbeeld — 12 gasten + 2 team = 14 personen. Locatie €400 basis + €50 schoonmaak per nacht + €60 per persoon = 400 + 50 + (14 × 60) = €1.290 per nacht. Niet 12 × 60.',
      },
      makersbarnCta: {
        title: 'Denk je aan MakersBarn als locatie?',
        body: 'We bekijken samen wat eerlijk is voor jouw groep en data — laat het weten, dan sturen we je een offerte. De cijfers hierboven blijven van jou.',
        linkLabel: 'Vraag een offerte',
      },
    },
    calendar: {
      metaTitle: 'The {months}-Month Retreat Launch Calendar | MakersBarn',
      metaDescription: 'A {months}-month interactive launch calendar for retreat hosts — phases, milestones, and the realistic timeline that actually works.',
      heroEyebrow: 'Free planning tool',
      heroTitle: 'The {months}-Month Retreat Launch Calendar',
      heroIntro: 'Plan your retreat launch over {months} months with this interactive timeline. Check off phases as you finish them, dismiss what does not apply, and add your own milestones.',
      heroAfterIntro: 'First time hosting? Validate your retreat profitability first with the Profitability Calculator.',
      presetSwitcher: {
        label: 'Choose your runway',
        preset3: '3 months',
        preset6: '6 months',
        preset9: '9 months',
        preset12: '12 months',
      },
      impactSubtitleAria: 'Trade-offs of this runway',
      milestoneItem: {
        markDone: 'Mark done',
        markPending: 'Mark pending',
        dismiss: 'Dismiss',
        restore: 'Restore',
      },
      customItem: {
        addLabel: 'Add a milestone',
        placeholder: 'What else needs to happen?',
        remove: 'Remove',
        capReached: 'Maximum reached for this phase',
        totalCapReached: "You've reached the total custom-item limit",
        counterFormat: '{current}/{max}',
      },
      urlNote: 'Links you add will appear as plain text in your saved plan and emails.',
      inlineCta: {
        anchorTitle: 'Looking for a venue?',
        anchorBody: 'MakersBarn is a quiet retreat venue in the Dutch countryside, designed for slow-living retreats.',
        anchorLink: 'Check MakersBarn dates',
        postRetreatTitle: 'Planning the next one?',
        postRetreatBody: 'MakersBarn dates fill 12 months out — secure your spot for next year.',
        postRetreatLink: 'Inquire about dates',
      },
      reset: {
        button: 'Reset progress',
        confirm: 'Clear all your progress on this calendar?',
      },
      emailForm: {
        heading: 'Email me my {months}-month plan',
        placeholder: 'your@email.com',
        contactConsent: 'MakersBarn may contact me about retreat hosting at this venue.',
        submit: 'Email my plan',
        sending: 'Sending…',
        success: 'Sent — check your inbox.',
        errorRateLimit: 'Too many emails just now — try again in a minute.',
        errorInvalidEmail: 'That email looks invalid — please double-check and try again.',
        errorGeneric: "Couldn't send — please try again.",
        errorSendFailed: 'Send failed — please retry.',
      },
      email: {
        subject: 'Your {months}-month retreat launch plan',
        greeting: 'Your {months}-month retreat launch plan',
        intro: 'Here is the personalized plan you saved on the calendar — done items, dismissed items, and your custom additions.',
        backToPlanCta: 'Continue editing your plan online:',
        backToPlanLabel: 'Open your saved plan',
        signoff: '— The MakersBarn team',
      },
      howTo: {
        heading: 'How to use this calendar',
        steps: [
          'Pick the runway that matches your situation — 3, 6, 9, or 12 months.',
          'Work through the phases top-to-bottom, checking off what you complete.',
          'Dismiss anything that does not apply (you can restore it later).',
          'Add your own milestones with the inline input — each phase has its own.',
          'Email yourself the plan when you want to take it offline or share with co-hosts.',
        ],
      },
      faq: {
        heading: 'Frequently asked questions',
        entries: [
          { question: 'How long does it take to plan a retreat?', answer: '12 months is the unhurried, honest answer for a first retreat. 6 months works if you already have a venue identified and a warm audience. 3 months is possible only if your venue is booked and your audience is ready.' },
          { question: 'How far in advance do retreats sell out?', answer: 'Strong retreats with established hosts often sell out 4–6 months out. First-time retreats usually fill in the final 6–8 weeks if at all — early-bird incentives help compress this curve.' },
          { question: 'When should I open registration for a retreat?', answer: 'Open registration as soon as your venue contract is signed and your landing page is live — typically 6 months before. Early-bird tiers can run for the first 4–6 weeks.' },
          { question: 'How early should I book a retreat venue?', answer: 'Suitable retreat venues book 9–12 months in advance for popular seasons (spring, summer, early autumn). Start scouting at the 12-month mark.' },
          { question: 'Can I launch a retreat in 3 months?', answer: 'Yes, if your venue is already booked and you have a warm audience. Use the 3-month variant of this calendar — it skips standalone foundation work and assumes warm-outreach drives early registrations.' },
          { question: "What's the minimum lead time for an international retreat?", answer: 'Plan on 9–12 months minimum. International retreats add visa requirements, currency considerations, and longer travel-booking windows for guests.' },
          { question: "What's a realistic retreat launch timeline for a first-time host?", answer: 'For a first retreat, 12 months gives you the most realistic runway — time to validate the concept, build an audience, and learn pricing. The 12-month variant is the canonical version of this calendar.' },
          { question: 'Is my progress saved across devices?', answer: 'No — your check-offs and custom items are saved on this device only. Use the email-the-list option to take your plan with you or share it with co-hosts.' },
          { question: 'Does this work for any retreat type?', answer: 'Yes — the canonical timeline applies broadly. We will add yoga / wellness / meditation / coaching variants in a future update with niche-specific milestones.' },
          { question: "What's the most common reason retreats don't sell out?", answer: "Late launch — opening registration less than 3 months before the retreat without a warm audience. The second-most-common: pricing that does not match the audience's perceived value." },
          { question: 'Should I run the Profitability Calculator before or after the calendar?', answer: 'Before. Validate that the numbers work first, then plan the timeline. The Profitability Calculator is in the related tools below.' },
          { question: 'How do I share my plan with co-facilitators?', answer: 'Use the email-the-list option to send your personalized plan to your co-host. Each device has its own progress, so each co-host can have their own view.' },
        ],
      },
      guideHeading: 'About this calendar',
      related: {
        heading: 'Related tools',
        hostARetreatTitle: 'Host a retreat at MakersBarn',
        profitabilityCalculatorTitle: 'Retreat Profitability Calculator',
        auditTitle: 'Audit retraitefouten',
      },
      crossLinks: {
        heading: 'Other runways',
        intro: 'Less or more time? Try one of the other variants of this calendar.',
        linkLabel: '{months}-month plan',
      },
      sticky: {
        cta: 'Host your retreat at MakersBarn →',
      },
    },
    agenda: {
      rootAriaLabel: 'Retreat agenda builder',
      blockTypeLabels: {
        ritual: 'Ritual',
        practice: 'Practice',
        workshop: 'Workshop',
        meal: 'Meal',
        free: 'Free time',
        rest: 'Rest',
        travel: 'Travel',
      },
      lengthSwitcher: {
        label: 'Choose retreat length',
        preset2: 'Weekend (2 days)',
        preset3: '3 days',
        preset5: '5 days',
        preset7: '7 days',
      },
      dayHeading: 'Day {day}',
      warnings: {
        heading: 'A few things to consider',
        tooMuchStructured: 'Day {day}: {minutes} of structured content. Most retreats keep this under 4 hours so people can integrate.',
        noFreeTime: 'Day {day}: no free or rest block. Aim for at least an hour of unstructured space.',
        overlongBlock: 'Day {day}: "{title}" runs {minutes}. Attention dips after ~90 minutes — consider splitting it.',
        earlyStart: 'Day {day} starts at {time}. Very early starts work for meditation retreats but tire most groups quickly.',
        lateEnd: 'Day {day} runs until {time}. Late nights compound across a multi-day retreat.',
        overlap: 'Day {day}: "{title}" overlaps with the previous block.',
      },
      block: {
        timeLabel: 'Start time',
        durationLabel: 'Duration (minutes)',
        titleLabel: 'Title',
        notesLabel: 'Notes',
        typeLabel: 'Type',
        edit: 'Edit',
        save: 'Save',
        cancel: 'Cancel',
        hide: 'Hide',
        restore: 'Restore',
        remove: 'Remove',
      },
      addBlock: {
        button: 'Add a block',
        heading: 'New block',
        submit: 'Add to day',
        cancel: 'Cancel',
        titlePlaceholder: 'What is this block?',
        notesPlaceholder: 'Optional notes — facilitator cues, materials, etc.',
        capReached: 'Maximum reached for this day',
        totalCapReached: 'You have reached the total custom-block limit',
      },
      emptyDay: 'No blocks for this day yet — add one to get started.',
      inlineHostCta: {
        title: 'Need a venue for the retreat?',
        body: 'MakersBarn is a quiet retreat venue in the Dutch countryside, designed for slow-living retreats. Dates fill 9–12 months out.',
        linkLabel: 'Check MakersBarn dates →',
      },
      print: {
        button: 'Print agenda',
        heading: 'Use the print dialog to save as PDF or print on paper.',
      },
      reset: {
        button: 'Reset to defaults',
        confirm: 'Clear all your edits and restore the default agenda?',
      },
      emailForm: {
        heading: 'Email me my {length}-day agenda',
        placeholder: 'your@email.com',
        contactConsent: 'MakersBarn may contact me about retreat hosting at this venue.',
        submit: 'Email my agenda',
        sending: 'Sending…',
        success: 'Sent — check your inbox.',
        errorRateLimit: 'Too many emails just now — try again in a minute.',
        errorInvalidEmail: 'That email looks invalid — please double-check and try again.',
        errorGeneric: "Couldn't send — please try again.",
        errorSendFailed: 'Send failed — please retry.',
      },
      email: {
        subject: 'Your {length}-day retreat agenda',
        greeting: 'Your {length}-day retreat agenda',
        intro: 'Here is the day-by-day plan you saved on the agenda builder — defaults, your edits, and any custom blocks you added.',
        backToPlanCta: 'Continue editing your agenda online:',
        backToPlanLabel: 'Open your saved agenda',
        signoff: '— The MakersBarn team',
      },
      howTo: {
        heading: 'How to use this builder',
        steps: [
          'Pick the retreat length that matches your runway — 2, 3, 5, or 7 days.',
          'Walk through the defaults. The structure is opinionated on purpose — built from the patterns that work across yoga, wellness, meditation, and coaching retreats.',
          'Hide any block that does not fit your container. Edit times, titles, or notes for blocks you keep.',
          'Add your own blocks per day — meals, optional sessions, vendor windows, transport.',
          'Watch the warnings panel. They are soft nudges, not blockers — but they catch the most common scheduling traps.',
          'Email yourself the final agenda or print it for the venue.',
        ],
      },
      faq: {
        heading: 'Frequently asked questions',
        entries: [
          { question: 'How many hours of structured content should a retreat have per day?', answer: '3–4 hours of structured content is the sweet spot. Beyond that, most groups burn out and stop integrating. The builder warns you when a day exceeds this.' },
          { question: 'Why are session blocks 90 minutes by default?', answer: 'Attention spans peak around 90 minutes — long enough to go deep, short enough that people stay engaged. It is also the dominant convention for both wellness and mastermind retreats.' },
          { question: 'Why does the builder protect free time?', answer: 'Unstructured time is when integration happens. It is also when the spontaneous conversations and breakthroughs that make a retreat memorable tend to occur. We flag any day with less than an hour of free time.' },
          { question: 'Should I follow the defaults exactly?', answer: 'No — the defaults are a starting point grounded in best practice. Your group, venue, and theme are unique. Hide what does not fit, edit what is close, and add what is missing.' },
          { question: 'How is this different from a calendar app?', answer: 'A calendar app starts blank. This builder starts opinionated — with the patterns that consistently work for the niche you chose. You spend your time customising, not designing from scratch.' },
          { question: 'Can I share the agenda with co-hosts?', answer: 'Yes — email yourself the agenda from the form below. The plan is printed in full in that email so co-hosts and participants alike can read it without opening the tool.' },
          { question: 'Is my agenda saved across devices?', answer: 'No — your edits live on this device only. Use the email-the-agenda option to take your plan with you or share with co-hosts.' },
          { question: 'Should I run the Profitability Calculator before or after this?', answer: 'Before. Validate the numbers first; design the days only when you know the retreat is viable. The calculator is in the related tools below.' },
          { question: 'When should I lock the agenda?', answer: 'A draft 6–8 weeks out is typical, with a final version 1–2 weeks before. Build flex into the agenda so you can adjust based on the energy of the actual group.' },
          { question: 'How early should the day start?', answer: 'Wellness and yoga groups tend to land between 7:00 and 7:30. Meditation retreats often start at 6:00. Coaching and corporate offsites start later. The builder warns when a day starts before 7:00 — that is a deliberate cue to check your defaults.' },
        ],
      },
      related: {
        heading: 'Related tools',
        hostARetreatTitle: 'Host a retreat at MakersBarn',
        launchCalendarTitle: '12-Month Retreat Launch Calendar',
        auditTitle: 'Doe de Retreat Mistakes Audit van 5 minuten',
      },
      crossLinks: {
        heading: 'Designing for a different group?',
        intro: 'Each variant has its own defaults — modelled on the patterns that work for that niche.',
      },
      niches: {
        generic: {
          metaTitle: 'Retreat Agenda Builder — Free Day-by-Day Schedule Template',
          metaDescription: 'Free retreat agenda builder with research-backed daily defaults. Edit blocks, add your own, email or print. No signup. Works for any retreat.',
          heroEyebrow: 'Free planning tool',
          heroTitle: 'The Retreat Agenda Builder',
          heroIntro: 'Design the day-by-day flow of your retreat in under ten minutes. Pick a length, work from research-backed defaults, then hide what does not fit, edit what is close, and add what is missing — until the schedule matches your group, venue, and theme.',
          heroAfterIntro: 'Already have your dates? Pair this with the Launch Calendar and Profitability Calculator below.',
          shortLabel: 'Any retreat',
          relatedCalculatorTitle: 'Retreat Profitability Calculator',
          guideSections: [
            {
              heading: 'What makes a retreat schedule actually work',
              paragraphs: [
                'Three patterns show up in nearly every retreat that participants rate as transformational, regardless of niche. First, the day mirrors a natural energy curve: dynamic in the morning, reflective after lunch, integrative in the evening. Second, structured content stays under four hours per day — past that point, the group stops integrating and starts performing. Third, at least one hour of unstructured time per day is non-negotiable. Most facilitators discover the third rule the hard way, after a retreat that overran every block by twenty minutes.',
                'The defaults in this builder bake those three rules in. You can ignore them — every retreat is different — but you will see warnings if you stray too far. Treat them as nudges, not blockers.',
              ],
            },
            {
              heading: 'Common scheduling traps',
              paragraphs: [
                'Stacking the morning. Two ninety-minute workshops back-to-back before lunch sounds productive on paper. By 11am the group is cognitively saturated and the afternoon has nowhere to land. Spread the work across the day instead.',
                'Underestimating transitions. A ten-minute buffer between every block compounds — across a seven-block day that is over an hour of buffer time. The builder includes natural buffers in the defaults; do not squeeze them out.',
                'Programming around your strongest content. It is tempting to put your signature workshop on Day 1, when the group is freshest. The reverse usually works better: arrive, settle, then dive into the deepest material on Day 2 or 3 once the container has formed.',
              ],
            },
            {
              heading: 'When to lock the agenda — and when not to',
              paragraphs: [
                'Most retreat hosts draft the agenda 6–8 weeks out and lock the final version 1–2 weeks before. That cadence gives time to adjust based on the actual registrants — group size, experience level, dietary needs, energy.',
                'Build in optional blocks. Two or three slots labelled "optional" or "choose your own" across the retreat means you can flex with the room without rewriting the whole schedule. The most experienced facilitators we know plan tightly and then improvise within that structure.',
              ],
            },
          ],
          faqExtras: [
            { question: 'How long should each session be?', answer: 'Default to ninety minutes for teaching and workshop blocks. It is long enough to go deep, short enough that attention holds. Practice and ritual blocks vary: thirty minutes for an opening circle, 45–60 for a guided practice, 60–75 for a workshop discussion.' },
            { question: 'Should I plan every minute of the retreat?', answer: 'No. Plan the structured blocks; leave breathing room around them. A retreat that is 100% scheduled feels like a conference. Build in soft transitions where the next block does not start sharply — meals especially.' },
            { question: 'What if my group’s energy is different on the day?', answer: 'Adjust. The agenda is a plan, not a contract. Cut a workshop short if the group has gone deep, or extend free time if energy is low. The schedule serves the group, not the reverse.' },
            { question: 'How do I price a retreat to match the agenda I am building?', answer: 'Use the Profitability Calculator linked below — it factors group size, nights, venue, and your facilitator fee. Pair it with this builder so you are not designing a 7-day retreat that the numbers cannot support.' },
          ],
        },
        yoga: {
          metaTitle: 'Yoga Retreat Schedule Builder — Free Itinerary Template',
          metaDescription: 'Plan a balanced yoga retreat schedule with morning vinyasa, yin, pranayama, and protected free time. Free, editable, no signup. Email or print your itinerary.',
          heroEyebrow: 'Free planning tool · Yoga',
          heroTitle: 'The Yoga Retreat Schedule Builder',
          heroIntro: 'Plan a yoga retreat day that respects the body’s natural rhythm. The defaults pair morning vinyasa with afternoon yin or restorative practice, build in a workshop or pranayama deep-dive, and protect free time for spa, walks, or solo practice. Edit anything to fit your style and lineage.',
          heroAfterIntro: 'Pricing the retreat next? Use the Yoga Retreat Pricing Calculator below.',
          shortLabel: 'Yoga retreat',
          relatedCalculatorTitle: 'Yoga Retreat Pricing Calculator',
          guideSections: [
            {
              heading: 'Anatomy of a balanced yoga retreat day',
              paragraphs: [
                'A well-paced yoga retreat day has six anchors: a strong morning practice when the body is ready for asana, a nourishing breakfast, one teaching or pranayama block, lunch, protected unstructured time, and a softer evening practice that brings the nervous system down. Most retreats that under-deliver miss either the protected free time or the parasympathetic evening practice.',
                'The defaults here put vinyasa at 7am — early enough to honour the brahma muhurta tradition without making it a 5am wake-up that exhausts the group by Day 3. Yin or restorative lands at 4pm, when the body has been moving and is ready to release. The rest is breathing room.',
              ],
            },
            {
              heading: 'Why morning vinyasa, evening yin (and not the reverse)',
              paragraphs: [
                'Asana is most accessible to most students mid-morning, when the spine has had time to wake up and core temperature is rising. Vinyasa or hatha at 7–9am uses that window. Inversions, arm balances, and deeper backbends fit here too if you have a more advanced group.',
                'Yin and restorative work better in the late afternoon and evening because parasympathetic activation supports sleep and integration. A 4pm yin class — long holds, props, gentle breathwork — followed by dinner and a quiet evening is the most consistent recipe for participants reporting they slept the deepest of their lives.',
              ],
            },
            {
              heading: 'Free time is part of the practice',
              paragraphs: [
                'Yoga retreats that schedule six or more hours of asana per day end up exhausted, achy, and cranky. The body needs time to integrate. Two practices per day — one strong, one gentle — totalling 3 to 3.5 hours of asana is the upper bound for most groups.',
                'Protect a 2–3 hour midday window with no scheduled content. Some students will book massages, others will walk or read or nap. That choice is itself part of the retreat.',
              ],
            },
          ],
          faqExtras: [
            { question: 'How many yoga sessions per day?', answer: 'Two is the sweet spot for most retreats: one stronger morning class (vinyasa, hatha, or ashtanga) and one softer afternoon class (yin, restorative, or guided meditation). A third optional session works for advanced groups, but make it optional.' },
            { question: 'Should I do morning and evening practice?', answer: 'Yes — and the evening practice should be markedly different from the morning. If morning is dynamic, evening is still. If morning is silent, evening can be sound bath or kirtan. Contrast keeps the day textured.' },
            { question: 'How long should a yoga retreat be?', answer: '3–7 nights is the typical range. A weekend (2–3 nights) suits beginners and locals. Five nights is the sweet spot for transformation. Seven-plus works for international destinations or teacher trainings — but expect Day 4 to feel flat without a built-in rest day.' },
            { question: 'Do I need to teach pranayama too?', answer: 'Not required, but a 30–45 minute pranayama or meditation block (often after morning asana, before breakfast) deepens the retreat significantly. If you are not comfortable teaching it, bring in a guest teacher for that one block.' },
            { question: 'What if some students have injuries?', answer: 'Pre-retreat intake form. Ask about injuries, medications, and recent surgeries. Adjust the schedule (or have private modifications ready) for anyone who flags. The agenda is the menu — meet each student where they are.' },
          ],
        },
        wellness: {
          metaTitle: 'Wellness Retreat Schedule Builder — Detox & Spa Itinerary',
          metaDescription: 'Plan a wellness or detox retreat with nervous-system practices, spa windows, and integration time. Free, editable agenda builder. No signup, no fluff.',
          heroEyebrow: 'Free planning tool · Wellness',
          heroTitle: 'The Wellness Retreat Schedule Builder',
          heroIntro: 'Design a wellness retreat that resets the nervous system without overwhelming the group. The defaults blend morning movement with workshops on breath, sleep, and habit change, protect generous spa-treatment windows, and end the day with a reflection circle or gentle yin.',
          heroAfterIntro: 'Pricing the retreat next? Use the Wellness Retreat Pricing Calculator below.',
          shortLabel: 'Wellness retreat',
          relatedCalculatorTitle: 'Wellness Retreat Pricing Calculator',
          guideSections: [
            {
              heading: 'What makes a wellness retreat different from a yoga retreat',
              paragraphs: [
                'Yoga retreats are built around asana practice. Wellness retreats are built around regulating the nervous system. The difference shows up in the schedule: a wellness day usually has only one movement block (often gentler than a yoga retreat’s morning vinyasa), more workshop time on practical health topics, and a much larger window for treatments and spa.',
                'If your retreat title includes words like reset, detox, restore, or rejuvenate, you are hosting a wellness retreat — and the defaults here will fit better than the yoga template.',
              ],
            },
            {
              heading: 'Why nervous-system work belongs in the morning',
              paragraphs: [
                'The first structured block of the day frames everything that follows. Starting with a slower, vagus-nerve-friendly practice — gentle yoga, breathwork, qi gong — primes the group for the rest of the day. Starting with a high-intensity workout has the opposite effect: cortisol spikes, sleep suffers.',
                'The 7:00–8:00am movement default in this builder is intentionally short and gentle. If your retreat is more athletic, lengthen it to 75–90 minutes and add a second walk or stretch in the afternoon.',
              ],
            },
            {
              heading: 'Spa-time as a structural block, not an afterthought',
              paragraphs: [
                'Most wellness retreats book massages and treatments during "free time" and watch the schedule unravel as appointments overlap with workshops. Treat the spa window as a real, named block on the agenda — 1:45pm to 4:00pm in the defaults — and slot appointments only inside it.',
                'Communicate this to participants on Day 1. Hand out a spa menu, let them book in, and they will respect the schedule because they know exactly when they need to be where.',
              ],
            },
          ],
          faqExtras: [
            { question: 'Should we keep meals together?', answer: 'Yes for most wellness retreats — meals are a connection point and a teaching opportunity (introducing the day’s nutritional theme, plating principles, mindful eating). Reserve solo meals for true silent retreats.' },
            { question: 'How do treatments fit into the schedule?', answer: 'Block a single 2–2.5 hour spa window each afternoon and run all appointments inside it. Avoid scheduling treatments during workshops or meals — participants will be split between the two and resent both.' },
            { question: 'What about a detox or fasting day?', answer: 'If you are including a fasting day, lighten the schedule dramatically: drop the workshops, add restorative yoga or sound bath, expand free time. Hungry brains cannot absorb teaching.' },
            { question: 'How quiet is too quiet?', answer: 'Wellness retreats benefit from partial silence — the morning before breakfast, perhaps an evening hour. Full Noble Silence is for meditation retreats; in a wellness context it can feel imposed if the group came to connect.' },
            { question: 'Do I need a nutritionist or doctor on-site?', answer: 'For most wellness retreats, no — a thoughtful menu and clear health disclaimers in the registration form are enough. For true detox or fasting retreats, having a qualified professional available (even on-call) is responsible practice.' },
          ],
        },
        meditation: {
          metaTitle: 'Meditation Retreat Schedule — Vipassana & Silent Itinerary',
          metaDescription: 'Plan a silent or meditation retreat with sittings, walking meditation, dharma talks, and Noble Silence. Free agenda builder, modelled on Plum Village & vipassana.',
          heroEyebrow: 'Free planning tool · Meditation',
          heroTitle: 'The Meditation Retreat Schedule Builder',
          heroIntro: 'Plan a meditation retreat with the rhythm that Plum Village and vipassana traditions have refined over decades: four sittings, walking meditation between them, a daily dharma talk, and Noble Silence from the last evening sit through the next morning’s breakfast. Edit to fit your tradition.',
          heroAfterIntro: 'Pricing the retreat next? Use the Meditation Retreat Pricing Calculator below.',
          shortLabel: 'Meditation retreat',
          relatedCalculatorTitle: 'Meditation Retreat Pricing Calculator',
          guideSections: [
            {
              heading: 'Why four sittings, not five',
              paragraphs: [
                'Three sittings is too few — the day collapses around them and the container weakens. Five or more, and most participants without a strong existing practice reach diminishing returns. Four sittings of 45–60 minutes each, spaced through the day, is the convention in both Theravada vipassana lineages and Plum Village’s mindfulness tradition for good reason.',
                'The defaults place sittings at 6am, 9am, mid-afternoon, and 7:30pm. That spacing matches circadian rhythms — strongest concentration in the morning, a gentler middle sit after the midday rest, and a final sit that closes the day before Noble Silence begins.',
              ],
            },
            {
              heading: 'Walking meditation between sittings',
              paragraphs: [
                'Walking meditation is not filler. It is where embodied awareness is consolidated and where the body recovers from sitting still. A 30–45 minute walking meditation between two sittings extends the meditative state without forcing the body to stay seated.',
                'Indoor or outdoor walking both work. Walking outdoors adds nature contact, which supports parasympathetic activation; indoor walking is more controlled and works in any weather. The defaults assume one of each per day.',
              ],
            },
            {
              heading: 'Noble Silence and the social container',
              paragraphs: [
                'Noble Silence is not just personal practice — it is a group container. When the silence runs from the last evening sit through breakfast, the social pressure to perform drops away and people drop into themselves. The defaults make this explicit: a "Noble Silence begins" block at 8:45pm, breaking only at breakfast.',
                'First-time silent retreatants often find the first 24 hours hardest. Brief the group on Day 1 about what to expect: the inner restlessness around hour twelve, the settling that usually comes around hour 36, and the clarity that often arrives by Day 3 or 4.',
              ],
            },
          ],
          faqExtras: [
            { question: 'How long should each sitting be?', answer: '45 minutes is the standard for most lineages. Some traditions sit for 60 minutes; some shorten to 30 for groups with less experience. Vipassana retreats typically scale up — 45 minutes on Day 1, 60-plus by Day 4.' },
            { question: 'Do I need to lead the dharma talks?', answer: 'If you are certified to teach, yes. If not, use recorded talks (Plum Village offers many freely) or invite a guest teacher for that one block. The dharma talk is the intellectual scaffolding for the practice — do not skip it.' },
            { question: 'What about beginners on a silent retreat?', answer: 'Plan a longer Day 1 orientation (1.5–2 hours instead of 60 minutes) and consider a "practice-only" period before silence begins. Many retreats run beginner-friendly versions with shorter sittings (30 minutes) and optional partial silence — that is a valid adaptation.' },
            { question: 'Can a meditation retreat be shorter than 7 days?', answer: 'Yes — weekend silent retreats (2–3 nights) work as introductions. They do not reach the deeper settling of a full week, but they are an honest gateway into the practice. Use the 2-day or 3-day variants here for that format.' },
            { question: 'Should I include yoga or movement?', answer: 'Most modern silent retreats include 30–45 minutes of yoga or qi gong before the morning sit. It is not strictly traditional, but it makes long sittings physically possible for most participants. The defaults assume this — adapt to your tradition.' },
          ],
        },
        coaching: {
          metaTitle: 'Coaching Retreat Agenda — Mastermind Schedule Template',
          metaDescription: 'Plan a coaching, mastermind, or leadership retreat with 90-min hot-seats, integration walks, and a commitments circle. Free agenda builder, fully editable.',
          heroEyebrow: 'Free planning tool · Coaching',
          heroTitle: 'The Coaching Retreat Agenda Builder',
          heroIntro: 'Plan a coaching, mastermind, or leadership retreat that turns into commitments. The defaults schedule 90-minute hot-seats with structured space between them, paired integration walks for the back-channel processing that makes the work stick, and a closing accountability circle that locks in what each person leaves with.',
          heroAfterIntro: 'Pricing the retreat next? Use the Coaching Retreat Pricing Calculator below.',
          shortLabel: 'Coaching retreat',
          relatedCalculatorTitle: 'Coaching Retreat Pricing Calculator',
          guideSections: [
            {
              heading: 'Hot-seats are 90 minutes — here is why',
              paragraphs: [
                'Coaching, mastermind, and leadership work happens in 90-minute blocks because attention peaks there. Shorter blocks (60 min) leave the conversation surface-level. Longer blocks (2-plus hours) drift, repeat, and lose the room. The 90-minute container has been refined in coaching traditions from Strategic Coach to YPO forums for the same reason.',
                'Inside each 90 minutes, expect roughly ten minutes of context-setting, sixty minutes of focused work on one person’s challenge, and twenty minutes for the group to reflect back what they heard. A facilitator who watches the clock is doing their job.',
              ],
            },
            {
              heading: 'Integration walks between sessions',
              paragraphs: [
                'Two 90-minute hot-seats back-to-back without space between them is a waste — the second person’s work will not land, because the group is still processing the first. A 30-minute integration walk, ideally in pairs, is where the back-channel processing happens.',
                'Give the walk a structured prompt: "What did you notice about how she framed the problem?" or "What did the group reflect back that you would want to apply to your own situation?" Without a prompt, the conversation drifts to weekend plans.',
              ],
            },
            {
              heading: 'The commitments circle is the most important block',
              paragraphs: [
                'Coaching retreats live or die in the final session. A commitments circle — each person, in front of the group, names one specific action they will take in the next 30 days — is the single block that determines whether the retreat translates into change.',
                'Make it specific. "I will think about it" is not a commitment. "By next Friday, I will have the conversation with my co-founder" is. Hold the room to that standard. Follow up two weeks later with a group email or call asking how each commitment landed.',
              ],
            },
          ],
          faqExtras: [
            { question: 'How many hot-seats per day?', answer: 'Four is the maximum for most groups. Two before lunch, two after — with an integration walk between each pair. More than four and the group stops contributing meaningfully. Fewer than four and you waste the retreat’s intensity.' },
            { question: 'What if my group is bigger than 6?', answer: 'Hot-seats do not scale beyond 8–10 people. For larger groups, split into pods of 5–6, run hot-seats in parallel pods, and bring the full group together for opening, closing, and meals. The default agenda assumes a single pod.' },
            { question: 'Should the facilitator participate in the hot-seat?', answer: 'Usually no — the facilitator’s job is to hold space, watch time, and reflect back patterns. Some senior coaches take a hot-seat at the end of the retreat to model vulnerability, but it is not required.' },
            { question: 'How do I structure a corporate offsite vs a coaching retreat?', answer: 'Corporate offsites usually run shorter (2.5 days), have more facilitator-led content (less peer hot-seat), and end with team commitments rather than individual commitments. The coaching defaults here are closer to a mastermind retreat — adapt by replacing some hot-seats with strategy workshops.' },
            { question: 'When should I run the next retreat?', answer: 'Most mastermind groups run 2–4 retreats per year. The first one tends to be deeper (the container forms); subsequent retreats deepen the work. Do not run them less than three months apart — people need time to act on commitments before the next one.' },
          ],
        },
      },
    },
    related: {
      heading: 'Gerelateerde tools',
      auditCardTitle: 'Check je aannames: doe de audit van 5 minuten',
    },
    faq: {
      heading: 'Veelgestelde vragen',
    },
  },

  chef: {
    backLink: 'Ontdek meer chefs',
    draftBadge: 'CONCEPT — alleen ter preview',
    metaTitle: '{name} — Retreatchef in {region}, Nederland',
    cta: { sendInquiry: 'Stuur {name} een aanvraag' },
    statStrip: {
      rightFor: 'GESCHIKT VOOR',
      cooks: 'KOOKT',
      accommodates: 'DIËTEN',
      dayRate: 'DAGTARIEF',
      dayRateUnit: 'pp / dag',
      dayRateExBtw: 'excl. btw · reiskosten op aanvraag',
      tierLabel: { budget: 'Budget', standard: 'Standaard', premium: 'Premium' },
      tierAriaLabel: '{tier} prijspeil',
    },
    headerMeta: {
      guests: '{min} – {max} gasten',
      yearsCooking: '{years} jaar kookervaring',
      summaryAriaLabel: 'Chef-overzicht',
    },
    galleryLabel: 'Uit de keuken',
    about: 'OVER',
    signatureDishes: 'SIGNATUURGERECHTEN',
    signatureDishItemPrefix: 'NR. {n}',
    testimonials: 'WAT ORGANISATOREN ZEGGEN',
    additionalOfferings: 'OVERIGE DIENSTEN',
    sidebar: {
      operatesIn: 'WERKT IN',
      travelsNationwide: 'Reist door heel Nederland',
      travelsRegional: 'Werkt regionaal',
      strongestIn: 'Sterkst in {regions}',
      homeBase: 'Standplaats',
      atAGlance: 'IN HET KORT',
      atAGlanceLabels: {
        groupSize: 'Groepsgrootte',
        languages: 'Talen',
        experience: 'Ervaring',
        sourcing: 'Inkoop',
        credentials: 'Kwalificaties',
        press: 'Pers',
      },
      pastRetreats: 'EERDERE RETRAITES',
      kitchenRequirements: 'KEUKENBENODIGDHEDEN',
    },
    enums: {
      retreatType: {
        yoga: 'Yoga-retraites',
        wellness: 'Wellness',
        creative: 'Creatieve bijeenkomsten',
        corporate: 'Bedrijfsuitjes',
        breathwork: 'Ademwerk',
        meditation: 'Meditatie',
        writing: 'Schrijfretraites',
        photography: 'Fotografie-retraites',
      },
      dietary: {
        vegan: 'Veganistisch',
        vegetarian: 'Vegetarisch',
        gluten_free: 'Glutenvrij',
        dairy_free: 'Lactosevrij',
        nut_free: 'Notenvrij',
        kosher: 'Koosjer',
        halal: 'Halal',
        allergy_aware: 'Allergiebewust',
        raw: 'Rauwkost',
        keto: 'Keto',
      },
      region: {
        drenthe: 'Drenthe',
        flevoland: 'Flevoland',
        friesland: 'Friesland',
        gelderland: 'Gelderland',
        groningen: 'Groningen',
        limburg: 'Limburg',
        noord_brabant: 'Noord-Brabant',
        noord_holland: 'Noord-Holland',
        overijssel: 'Overijssel',
        utrecht: 'Utrecht',
        zeeland: 'Zeeland',
        zuid_holland: 'Zuid-Holland',
      },
    },
    inquiry: {
      modalTitle: 'Stuur {name} een aanvraag',
      closeAriaLabel: 'Sluit aanvraagformulier',
      field: {
        name: 'Je naam',
        email: 'E-mail',
        dates: 'Retraite-data (een schatting is genoeg)',
        datesPlaceholder: '5–9 mei 2026',
        groupSize: 'Groepsgrootte',
        location: 'Waar vindt de retraite plaats?',
        dietary: 'Dieetwensen / voorkeuren (optioneel)',
        message: 'Vertel {name} over je retraite',
      },
      consent: 'Ik geef toestemming dat MakersBarn deze aanvraag doorstuurt naar {name}.',
      submit: 'Aanvraag versturen',
      submitting: 'Versturen…',
      success: {
        title: 'Je aanvraag is onderweg naar {name}',
        body: '{name} reageert meestal binnen 2–3 dagen. We hebben je een bevestiging gestuurd op {email}.',
      },
      errors: {
        rate_limited: 'Te veel aanvragen. Probeer het over een paar minuten opnieuw.',
        validation: 'Controleer de gemarkeerde velden en probeer het opnieuw.',
        chef_not_found: 'Deze chef is op dit moment niet beschikbaar. Probeer het later opnieuw.',
        email_failed: 'We konden je aanvraag niet bezorgen. Probeer het opnieuw of mail ons rechtstreeks.',
        unexpected_error: 'Er ging iets mis. Probeer het opnieuw.',
      },
    },
  },

  chefsListing: {
    meta: {
      title: 'Privékoks voor retraites in Nederland',
      description: 'Een gids van retraitkoks die door heel Nederland werken, plus praktisch advies over het beoordelen en boeken van de juiste kok voor je retraite. Prijzen, doorlooptijden, dieetwensen.',
    },
    hero: {
      eyebrow: 'Koks',
      h1: 'Privékoks voor retraites in Nederland',
      subtitle: 'Een gids van retraitkoks die door heel Nederland werken, plus praktisch advies over het beoordelen en boeken van de juiste kok voor je retraite.',
    },
    intro: 'De meeste retraite-organisatoren onderschatten wat er bij het boeken van een kok komt kijken. Doorlooptijden, dieetwensen, logistiek op locatie en prijsstructuren lopen sterk uiteen. Deze gids behandelt waar je op moet letten, hoe de prijzen in Nederland werken en waar je koks vindt die bereid zijn te reizen.',
    sections: {
      whatToLookFor: {
        h2: 'Waar je op moet letten bij een retraitkok',
        paragraphs: [
          'Koken voor een retraite lijkt meer op het runnen van een kleine keuken dan op het cateren van een evenement. Zoek naar koks met ervaring in het meerdere dagen achtereen koken voor groepen van 8–20 personen — niet alleen voor eenmalige diners. Het ritme, de inkoop en het herstel tussen de maaltijden zijn echt anders.',
          'Vraag hoe ze omgaan met het mengen van dieetwensen: hoe houden ze een veganistische hoofdmaaltijd bevredigend wanneer de helft van de tafel omnivoor is, en hoe voorkomen ze dat aanpassingen als een bijzaak aanvoelen? Sterke retraitkoks zien dieetdiversiteit als een creatieve uitdaging, niet als een logistiek probleem.',
          'Controleer de transparantie over inkoop. De meeste Nederlandse retraitkoks werken met één of twee vaste boerderijen, zuivelbedrijven of vishandelaren. Als ze die niet kunnen benoemen, is dat een signaal dat het waard is om door te vragen.',
        ],
      },
      pricing: {
        h2: 'Hoe de prijzen van retraitkoks in Nederland werken',
        paragraphs: [
          'Twee prijsstructuren domineren de Nederlandse markt. Dagtarieven (€350–€650/dag voor één kok, plus voedselkosten) zijn geschikt voor retraites waarbij je flexibiliteit wilt in menu en inkoop. Prijzen per maaltijd (€35–€90+ per persoon per maaltijd — extra\'s zoals reizen kunnen erbij komen) zijn gebruikelijk voor kortere retraites en geven je een helder budget per hoofd.',
          'Let op wat er niet is inbegrepen. Reistijd, keukenapparatuur, afwaswerk en dieetaanpassingen zijn de meest voorkomende posten die de uiteindelijke factuur stilletjes opdrijven. Vraag altijd om een voorbeeldcontract voordat je akkoord gaat.',
          'De doorlooptijd is 4–8 wkn voor gevestigde koks, langer in het hoogseizoen (mei–september). Boek op tijd.',
        ],
      },
      coverage: {
        h2: 'Regionale dekking en reizen',
        paragraphs: [
          'De meeste gevestigde retraitkoks zijn gebaseerd in Noord-Holland, Utrecht of Gelderland en reizen naar locaties in Drenthe, Friesland, Overijssel en Flevoland voor retraites van twee dagen of langer. Reizen binnen Nederland is over het algemeen inbegrepen bij dagtarieven boven €450; daaronder kun je een kilometertoeslag verwachten.',
          'Voor meerdaagse retraites buiten hun thuisprovincie geven de meeste koks de voorkeur aan overnachting op locatie in plaats van pendelen. Plan een extra bed voor de kok in je boeking.',
          'De gids hieronder bevat koks die door heel Nederland werken. Als je host bij Makers Barn in Wijhe (Overijssel), neem dan rechtstreeks contact op met de koks om beschikbaarheid voor jouw data te bevestigen.',
        ],
      },
    },
    grid: {
      h2: 'Retraitkoks in Nederland',
      framingLine: 'Geverifieerde retraitkoks in Nederland. Elk profiel is door de kok zelf gecontroleerd en goedgekeurd — verken om de juiste kok voor jouw retraite te vinden.',
      card: {
        viewProfile: 'Bekijk profiel',
        draftBadge: 'CONCEPT',
        cuisinesAriaLabel: 'Kookstijlen',
      },
    },
    launchingSoon: {
      headline: 'Onze gids is in besloten beta.',
      body: 'We beoordelen koks in kleine groepen. De bovenstaande informatie is vrij te gebruiken — en als je gekoppeld wilt worden zodra er koks beschikbaar zijn, vertel ons wat je van plan bent.',
      inlineCtaLabel: 'Vertel ons wat je van plan bent →',
    },
    facts: [
      { number: '8–20', description: 'Gebruikelijke groepsgrootte voor een retraite' },
      { number: '€35–€90+', description: 'Per persoon per maaltijd, basis — reizen & extra\'s kunnen erbij komen' },
      { number: '4–8 wkn', description: 'Gebruikelijke doorlooptijd om te boeken' },
    ],
    faq: {
      h2: 'Veelgestelde vragen',
      items: [
        {
          question: 'Wat kost een privékok voor een retraite in Nederland?',
          answer: 'Dagtarieven liggen tussen €350–€650 voor één kok plus voedselkosten. Prijzen per maaltijd zijn €35–€90+ per persoon — extra\'s zoals reizen kunnen erbij komen. De uiteindelijke kosten hangen af van groepsgrootte, dieetcomplexiteit en of keukenapparatuur aanwezig is.',
        },
        {
          question: 'Wat is de gebruikelijke doorlooptijd voor het boeken van een retraitkok?',
          answer: 'Reken op 4–8 weken voor de meeste gevestigde koks, langer tussen mei en september. Last-minute boekingen (minder dan twee weken van tevoren) zijn mogelijk, maar verwacht dan een kleinere keuze.',
        },
        {
          question: 'Reizen koks naar retraitelocaties?',
          answer: 'De meeste gevestigde retraitkoks reizen door heel Nederland. Reizen is doorgaans inbegrepen bij dagtarieven boven €450; daaronder kun je een kilometertoeslag verwachten. Voor meerdaagse retraites buiten de thuisprovincie van de kok plan je een overnachtingsplek voor hen op locatie.',
        },
        {
          question: 'Hoe gaan koks om met dieetwensen?',
          answer: 'Sterke retraitkoks verwerken vegetarisch, veganistisch, glutenvrij en zuivelvrij als standaard. Allergieën (noten, schaal- en schelpdieren, sesam) en medische diëten (FODMAP, laag-histamine) worden doorgaans ondersteund met twee weken opzegtermijn. Deel dieetwensen altijd bij de boeking, niet de week ervoor.',
        },
        {
          question: 'Wie sluit het contract met de kok — de locatie of de organisator?',
          answer: 'Vrijwel altijd de organisator. Locaties zoals Makers Barn stellen koks voor en kunnen de planning regelen, maar de contractuele relatie en betaling lopen rechtstreeks tussen organisator en kok. Controleer dit in de boekingsvoorwaarden van je locatie.',
        },
        {
          question: 'Kan ik ook zelf koken?',
          answer: 'Het kan — maar koken voor een retraite is iets anders dan thuis koken. Je maakt 9–15 maaltijden over meerdere dagen voor een groep met uiteenlopende dieetwensen, naast inkoop, voorbereiding en opruimen, terwijl het retraite­programma gewoon doorloopt. We raden sterk aan iemand met retraitkok-ervaring in te zetten: dat houdt de host bij de gasten in plaats van in de keuken. Als het koken niet goed gaat, lijdt de hele retraite eronder — gasten merken het direct, het programma verliest energie, en de host raakt het contact met de groep kwijt.',
        },
      ],
    },
    dualCta: {
      looking: {
        eyebrow: 'Voor retraite-organisatoren',
        h3: 'Hulp nodig bij het vinden van de juiste kok?',
        body: 'Vertel ons wat je van plan bent. We koppelen je aan iemand uit onze gids of wijzen je de weg.',
        button: 'Vind een kok',
      },
      join: {
        eyebrow: 'Voor koks',
        h3: 'Ben je een kok die in Nederland werkt?',
        body: 'Solliciteer om toe te treden tot de Makers Barn koksengids.',
        button: 'Solliciteer',
      },
    },
    crossLink: {
      label: 'Werken met een kok? Bekijk onze gids →',
    },
  },
} as const
