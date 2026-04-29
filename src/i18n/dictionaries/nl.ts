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
    contact: 'Contact',
    book: 'Boek',
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
      title: 'Tools voor retraitebegeleiders',
      intro: 'Plan, prijs en draai winstgevendere retraites. Deze tools zijn gratis, zonder aanmelding, en werken voor elke locatie — ook die je bij MakersBarn overweegt.',
      toolCardCta: 'Open de tool',
    },
    calculator: {
      inputs: {
        hiresFacilitatorsQuestion: 'Betaal ik andere begeleiders? (co-begeleiders, gastdocenten of ingehuurde specialisten)',
        hiresFacilitatorsYes: 'Ja',
        hiresFacilitatorsNo: 'Nee',
        facilitatorFeeLabel: 'Vergoeding ingehuurde begeleider(s)',
        revenueSectionLabel: 'Omzet',
        revenueSectionDescription: 'Wat je binnenhaalt.',
        costsSectionLabel: 'Kosten',
        costsSectionDescription: 'Wat het je kost om de retraite te draaien.',
        guestsLabel: 'Aantal gasten',
        guestsUnit: 'gasten',
        nightsLabel: 'Duur retraite',
        nightsUnit: 'nachten',
        pricePerGuestLabel: 'Prijs per gast',
        venuePerNightLabel: 'Locatie & accommodatie per nacht',
        venueUnit: '/ nacht',
        foodPerGuestPerDayLabel: 'Eten per gast per dag',
        foodUnit: '/ gast / dag',
        marketingAndOtherLabel: 'Marketing & overige kosten',
        advancedLabel: 'Extra kosten',
        travelLabel: 'Reis & vervoer (jouw kosten)',
        insuranceLabel: 'Verzekering',
        paymentFeePercentLabel: 'Betalingsverwerkingskosten',
        planningDaysLabel: 'Planningsdagen',
        daysUnit: 'dagen',
        resetLabel: 'Voorbeeldwaarden herstellen',
      },
      results: {
        kicker: 'Netto winst',
        headlineSentence: 'Bij {price}/persoon met {guests} gasten houd je {profit} over — een marge van {margin}.',
        totalRevenue: 'Totale omzet',
        totalCosts: 'Totale kosten',
        profitMargin: 'Winstmarge',
        profitPerWorkday: 'Winst per werkdag',
        metricsLabel: 'Retraite-economie samenvatting',
        breakevenSentence: 'Je hebt minstens {guests} gasten bij {price} nodig om break-even te draaien.',
        breakevenImpossible: 'Bij deze prijs overstijgen je variabele kosten de omzet per gast — meer gasten alleen brengt je niet op break-even.',
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
        heading: 'E-mail mij de samenvatting',
        placeholder: 'jouw@email.com',
        submit: 'Stuur samenvatting',
        sending: 'Verzenden…',
        success: 'Verzonden! Check je inbox.',
        error: 'Kon nu niet verzenden. Probeer het opnieuw.',
        optInLabel: 'Stuur me af en toe tips over retraiteprijzen (geen spam, makkelijk uitschrijven)',
      },
      share: {
        heading: 'Deel deze cijfers',
        intro: 'Stuur je opzet naar een co-begeleider, partner of accountant om je aannames te toetsen.',
        copy: 'Link kopiëren',
        copied: 'Gekopieerd!',
        copyFailed: 'Kon link niet kopiëren',
        whatsapp: 'Deel via WhatsApp',
        whatsappMessage: 'Dit zijn mijn retraitecijfers uit de MakersBarn-prijscalculator:',
      },
      makersbarnCta: {
        title: 'MakersBarn overwegen voor je retraite?',
        body: 'We stemmen de prijs af op je groepsgrootte en data — vraag een offerte op maat aan. Bovenstaande getallen blijven privé.',
        linkLabel: 'Vraag offerte aan',
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
    howTo: {
      heading: 'Zo gebruik je deze calculator',
    },
    related: {
      heading: 'Gerelateerde calculators',
    },
    faq: {
      heading: 'Veelgestelde vragen',
    },
    translationNotice: 'Deze tools zijn beschikbaar in het Engels, Nederlands en Duits. Lees in het Engels terwijl we naar meer talen uitbreiden.',
  },
} as const
