import type { Dictionary } from '../types'

/**
 * German translations
 */
export const de: Dictionary = {
  nav: {
    home: 'Start',
    about: 'Über uns',
    facilities: 'Räume',
    experiences: 'Zu Gast sein',
    surroundings: 'Umgebung',
    tools: 'Gratis-Tools',
    contact: 'Kontakt',
    book: 'Buchen',
    chefs: 'Köche',
  },

  hero: {
    eyebrow: 'Willkommen bei',
    emphasis: 'The MakersBarn',
    subtitle: 'Ein Zuhause für dein Retreat',
    subtitleBreak: '',
  },

  heroDetails: {
    title: 'Ein geerdeter, intimer Ort für Retreats und Zusammenkünfte',
    subtitle: 'Mitten in der niederländischen Landschaft, umgeben von Natur.',
    body: 'Ein Retreat-Ort, an dem du dich vom ersten Moment an zu Hause fühlst – umgeben von Feldern und weitem Himmel. Gemacht, um tiefe, verwandelnde Arbeit mit Leichtigkeit, Wärme und Schönheit zu tragen. Ob Yoga-Retreat, Wellness-Workshop oder kreative Zusammenkunft – wir gestalten den Ort nach deiner Vision.',
    primaryCtaLabel: 'Räume entdecken',
    secondaryCtaLabel: 'Retreat planen',
    metaItems: [
      'Platz für kleine Gruppen bis 20 Personen',
      'Sauna und Natur direkt vor der Tür',
      'Mitten in der niederländischen Landschaft',
    ],
  },

  contact: {
    pageTitle: 'Plane dein Retreat',
    metaTitle: 'Kontakt',
    metaDescription:
      'Schreib uns bei MakersBarn. Wir freuen uns, von dir zu hören – ob du ein Retreat, einen Workshop oder eine kreative Zusammenkunft planst.',
    introText:
      'Schön, dass du dich meldest! Ob du ein Retreat oder einen Workshop planst oder einfach mehr über The MakersBarn erfahren möchtest – wir sind für dich da.',
    formTitle: 'Schreib uns',
    labels: {
      name: 'Hallo, ich heiße …',
      email: 'und du erreichst mich unter …',
      phone: 'oder ruf mich an unter …',
      message: 'Wie können wir dir helfen?',
    },
    placeholders: {
      name: 'Dein Name …',
      email: 'Deine E-Mail …',
      phone: 'Deine Telefonnummer …',
      message: 'Schreib einfach drauflos :)',
    },
    buttons: {
      submit: 'Senden',
      submitting: 'Wird gesendet …',
    },
    messages: {
      success: 'Danke für deine Nachricht! Wir melden uns bald bei dir.',
      emailFailed: 'Beim Senden ist etwas schiefgelaufen. Bitte versuche es später noch einmal.',
      unexpectedError: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später noch einmal.',
      validationError: 'Bitte überprüfe deine Eingaben und versuche es erneut.',
      rateLimited: 'Zu viele Anfragen. Bitte warte einen Moment und versuche es dann erneut.',
      loading: 'Wird gesendet …',
    },
    emailAlternative: {
      text: 'Lieber per E-Mail? Du erreichst uns direkt unter',
    },
    whatsappAlternative: {
      text: 'Oder schreib uns auf WhatsApp',
    },
  },

  unifiedContact: {
    pageTitle: 'Lass uns reden',
    pageSubtitle:
      'Ob du ein Retreat planst oder nur kurz eine Frage hast – wir helfen dir gern. Wähle, wie du Kontakt aufnehmen möchtest.',
    selectorAriaLabel: 'Kontaktoptionen',
    intentSelector: {
      questionLabel: 'Frage stellen',
      questionSublabel: 'Schnelle Anfrage',
      bookingLabel: 'Angebot anfragen',
      bookingSublabel: 'Unverbindlich',
    },
    mapTitle: 'Standortkarte mit Maker\'s Barn',
    questionFormImageAlt: 'Gemütliche Bank vor dem Hay House',
    intentLeadIn: {
      looking: 'Du fragst nach einem Koch für dein Retreat. Erzähl uns, was du planst – wir vermitteln aus unserem Verzeichnis oder helfen dir weiter.',
      join: 'Du möchtest dich im Makers Barn Köche-Verzeichnis eintragen. Erzähl uns von deiner Arbeit – wir melden uns bei dir.',
    },
  },

  booking: {
    pageTitle: 'Buche dein Retreat',
    metaTitle: 'Buche dein Retreat',
    metaDescription:
      'Buche dein Retreat bei The Makers Barn. Wähle Wunschdaten, Gruppengröße und Unterkunft für deine Auszeit auf dem Land.',
    introText:
      'Bereit, dein Retreat zu planen? Fülle das Formular mit deinen Wünschen aus – wir melden uns mit Verfügbarkeit und einem persönlichen Angebot.',
    formTitle: 'Anfrage für dein Retreat',
    progressLabel: 'Buchungsfortschritt',
    sections: {
      contact: 'Deine Kontaktdaten',
      retreat: 'Zum Retreat',
      dates: 'Wunschdaten',
      groupSize: 'Gruppengröße',
      accommodation: 'Unterkunft & Verpflegung',
      extraInfo: 'Sonstiges',
    },
    steps: {
      contact: 'Kontakt',
      retreat: 'Daten',
      details: 'Details',
      review: 'Abschluss',
    },
    stepDescriptions: {
      contact: 'Starten wir mit deinen Kontaktdaten – damit wir dich erreichen können.',
      retreat: 'Erzähl uns von deinem Retreat: Art, Zeitraum und Dauer.',
      details: 'Wie groß ist die Gruppe und wie möchtet ihr wohnen?',
      review: 'Ergänze noch, was uns helfen würde – dann ab damit.',
    },
    validation: {
      nameRequired: 'Bitte gib deinen Namen ein',
      emailRequired: 'Bitte gib deine E-Mail-Adresse ein',
      emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein',
      retreatTypeOtherRequired: 'Bitte gib deinen Retreat-Typ an',
    },
    labels: {
      name: 'Dein Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      startDate: 'Wunsch-Anreisedatum',
      duration: 'Dauer (Tage)',
      flexibleDates: 'Ich bin bei den Terminen flexibel',
      flexibleDatesText: 'Wie flexibel?',
      minGroupSize: 'Minimale Gruppengröße',
      maxGroupSize: 'Maximale Gruppengröße',
      retreatType: 'Art des Retreats',
      retreatTypeOther: 'Bitte kurz beschreiben',
      accommodationPreferences: 'Unterkunftswünsche',
      cateringNeeded: 'Wir möchten Verpflegung',
      cateringDetails: 'Was darf es sein?',
      extraInfo: 'Möchtest du uns sonst noch etwas sagen?',
    },
    placeholders: {
      name: 'Dein vollständiger Name',
      email: 'deine@email.de',
      phone: '+49 151 12345678',
      duration: 'z. B. 3',
      flexibleDatesText: 'z. B. die Woche darauf ginge auch, oder ein kürzeres 2-Tage-Retreat …',
      minGroupSize: 'Min',
      maxGroupSize: 'Max',
      retreatTypeOther: 'Beschreibe deine Retreat-Art …',
      accommodationPreferences: 'z. B. wir brauchen 3 Einzelzimmer, der Rest kann geteilt werden …',
      cateringDetails: 'z. B. nur Frühstück, Vollpension, vegetarische Optionen …',
      extraInfo: 'z. B. Barrierefreiheit, spezielle Ausstattung, besondere Wünsche …',
      selectDate: 'Datum wählen',
    },
    retreatTypes: {
      privateGroup: 'Privat- oder Gruppenretreat',
      yoga: 'Yoga-Retreat',
      workshop: 'Workshop',
      other: 'Sonstiges',
    },
    cateringOptions: {
      yes: 'Ja',
      no: 'Nein',
    },
    reviewLabels: {
      contact: 'Kontakt',
      retreat: 'Retreat',
      group: 'Gruppe',
      catering: 'Verpflegung',
      notProvided: 'Nicht angegeben',
    },
    datePicker: {
      unavailable: 'Nicht verfügbar',
      dateUnavailable: 'Dieses Datum ist nicht verfügbar',
    },
    helpText: {
      startDate: 'Wähle dein Wunsch-Anreisedatum',
      duration: 'Wie viele Tage soll dein Retreat dauern?',
      accommodationIntro: 'Unsere Räume umfassen:',
      accommodationCosmos: 'Cosmos-Hütte: 1 Privatzimmer (für 2–3 Personen)',
      accommodationGroup: 'Horizon-Gebäude: mehrere Zimmer (für 10–12 Personen)',
    },
    buttons: {
      submit: 'Buchungsanfrage senden',
      submitting: 'Wird gesendet …',
      next: 'Weiter',
      back: 'Zurück',
    },
    messages: {
      success: 'Danke für deine Buchungsanfrage! Wir melden uns in Kürze bei dir.',
      emailFailed: 'Beim Senden deiner Anfrage ist etwas schiefgelaufen. Bitte versuche es später noch einmal.',
      unexpectedError: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später noch einmal.',
      validationError: 'Bitte überprüfe deine Eingaben und versuche es erneut.',
      rateLimited: 'Zu viele Anfragen. Bitte warte einen Moment und versuche es dann erneut.',
      loading: 'Wird gesendet …',
    },
    alert: {
      title: 'Diese Seite ist für Retreat-Veranstalter',
      description:
        'Sie ist für Gruppen ab 6 Personen gedacht. Möchtest du an einem bestehenden Retreat teilnehmen oder hast du eine andere Frage?',
      joinRetreatLink: 'Andere Optionen ansehen',
      contactLink: 'Schreib uns',
    },
    success: {
      title: 'Anfrage erhalten!',
      subtitle: 'Danke, dass du bei The Makers Barn zu Gast sein möchtest',
      description:
        'Deine Anfrage ist bei uns angekommen. Wir freuen uns darauf, gemeinsam mit dir ein unvergessliches Retreat auf die Beine zu stellen.',
      whatNext: 'Wie geht es weiter?',
      steps: [
        'Wir schauen uns deine Anfrage innerhalb von 24–48 Stunden an',
        'Du bekommst ein persönliches Angebot per E-Mail',
        'Auf Wunsch sprechen wir in einem kurzen Call über deine Ideen',
      ],
      newRequestButton: 'Weitere Anfrage senden',
      homeButton: 'Zurück zur Startseite',
    },
  },

  footer: {
    getInTouch: 'Kontakt aufnehmen',
    followUs: 'Folge uns',
    tagline: 'Where creativity meets tranquility',
    copyright: "The MakersBarn.",
    viewLocation: 'Standort ansehen',
    hostRetreat: 'Retreat veranstalten',
    exploreTools: 'Gratis-Tools für Gastgeber',
  },

  about: {
    title: 'Über uns',
    intro: `The MakersBarn begann als Treffpunkt für Maker aller Art – Holzhandwerker, Unternehmerinnen, Künstler und Träumer. Irgendwann haben wir gemerkt: Was die Menschen wirklich suchten, war nicht in erster Linie eine Werkstatt. Sie suchten einen Ort, an dem sie langsamer werden können. Also sind wir genau das geworden.`,
    secondary: `Wir glauben, in jedem von uns steckt ein Maker. Im Herzen sind wir alle Macher – ob wir mit den Händen etwas bauen, Frieden stiften oder Erinnerungen schaffen. Zusammenkommen, an etwas arbeiten, das uns verändert, teilen und sich verbinden – das alles macht für uns einen Maker aus.`,
    tertiary: `Wir drei haben uns mit einer gemeinsamen Vision zusammengetan – und mit dem Wunsch, der Hektik der Stadt zu entkommen. Eine wunderschöne Hofstelle aus den 1920er-Jahren, unsere Liebe zum Land und das Herzblut, mit dem wir besondere Unterkünfte gestalten, haben einen Ort entstehen lassen, an dem Pflanzen, Tiere und Menschen gleichermaßen aufblühen.`,
    fourth: `Ob du dein nächstes Retreat hier veranstalten, an einem teilnehmen oder einfach ein paar ruhige Tage verbringen möchtest – MakersBarn ist für dich da.`,
    teamTitle: 'Lerne das Team kennen',
    metaTitle: 'Über uns',
    metaDescription:
      'Lerne das Team hinter MakersBarn kennen. Erfahre mehr über unsere Idee, einen Ort zu schaffen, an dem Maker, Künstler und Träumer zusammenkommen und Inspiration finden.',
    cta: 'Wir verraten gern unsere Lieblingsplätze! Du brauchst Tipps für Wanderungen, Aktivitäten in der Gegend oder versteckte Ecken? Frag einfach.',
    ctaButton: 'Schreib uns',
  },

  facilities: {
    title: 'Räume',
    intro: `Miete genau die Räume, die du für dein Retreat, deine Masterclass oder dein kreatives Vorhaben brauchst. Privater Garten, umgebaute Heuscheune, 14 Betten und Platz für Zelte und Wohnmobile – dazu so viel Ruhe, wie du dir wünschst. Auch bei der Verpflegung helfen wir gern, ganz nach deinen Vorstellungen.`,
    metaTitle: 'Räume',
    metaDescription:
      'Miete die Räume, die du bei MakersBarn brauchst: privater Garten, umgebaute Heuscheune, 14 Betten, Platz für Zelte und Wohnmobile – dazu Verpflegung auf Wunsch.',
    stats: [
      { number: '1200+', description: 'gepflanzte Bäume auf dem Gelände' },
      { number: '13.000+ m²', description: 'eigenes Land, dazu Naturschwimmteich, Sauna und Feuerstelle.' },
      { number: '∞', description: 'Unendliche Möglichkeiten' },
    ],
    categories: {
      groupAccommodation: 'Gruppenunterkunft',
      workshopSpace: 'Workshopraum',
      outdoors: 'Draußen',
    },
    ctaTitle: 'Bereit, dein Retreat zu planen?',
    ctaSubtitle: 'Wir helfen dir, deiner Gruppe ein Erlebnis zu schenken, das bleibt.',
    ctaButton: 'Jetzt Retreat buchen',
    carousel: {
      previousImage: 'Vorheriges Bild',
      nextImage: 'Nächstes Bild',
      viewFullscreen: 'Bild im Vollbild ansehen',
      goToImage: 'Zum Bild gehen',
      imageNavigation: 'Bildnavigation',
    },
    items: {
      hayHouse: {
        title: 'Hay House Übungsraum',
        description:
          'Eine bezaubernde Heuscheune mit Platz für Yoga, Atemarbeit und vieles mehr. Wenn die Sonne hereinfällt, zaubert sie wunderschöne Lichtspiele an die Wände.',
        features: ['65+ m² Fläche', 'Fußbodenheizung', 'Yogamatten und Zubehör', 'Soundanlage'],
      },
      cosmos: {
        title: 'The Cosmos',
        description:
          'Eine Holzhütte mit Holzofen – so gemütlich wie kaum eine andere und mit einem Hauch Luxus. Eigene Terrasse mit einem der schönsten Ausblicke, die die Niederlande zu bieten haben.',
        features: ['60 m²', 'Doppelbett oder zwei Einzelbetten', 'Schlafsofa', 'Dusche', 'Küche'],
      },
      horizon: {
        title: 'Horizon',
        description:
          'Eine alte Scheune, behutsam zur Übernachtungsmöglichkeit umgebaut: mit Loungebereich, Zimmern mit eigenem oder geteiltem Bad und einer Küche im Obergeschoss.',
        features: [
          '3-Bett-Zimmer mit Gemeinschaftsbad',
          '2-Bett-Zimmer mit eigenem Bad',
          'Einzelzimmer mit Gemeinschaftsbad',
          'Großer Dachboden (2–4 Betten, Dusche)',
          'Dachgeschoss für Übungseinheiten im Innenraum',
        ],
      },
      sauna: {
        title: 'Sauna, Hot Tub und Feuerstelle',
        description:
          'Komm in unserer privaten Sauna, im Hot Tub und an der Feuerstelle zur Ruhe und tanke neue Energie. Der perfekte Ort, um nach einem Tag voller kreativer Arbeit oder Workshops abzuschalten.',
      },
      pond: {
        title: 'Schwimmteich',
        description:
          'Ein natürlicher Schwimmteich, umgeben von viel Grün und heimischer Tierwelt. Perfekt für ein erfrischendes Bad – oder einfach, um den leisen Klängen der Natur zu lauschen.',
      },
      inBetween: {
        title: 'Alles dazwischen',
        description:
          'Die genannten Räume bilden das Grundgerüst jedes Retreats – aber es sind die kleinen Dinge dazwischen, die einen Ort wirklich besonders machen.',
        features: ['Schöne Pfade', '1000+ Bäume', 'Teehaus', 'Vogelareal', 'Weite Ausblicke'],
      },
    },
  },

  experiences: {
    metaTitle: 'Erlebnisse',
    metaDescription: 'Finde dein passendes Retreat-Erlebnis bei MakersBarn: ein Solo-Yoga-Retreat, eine unserer Unterkünfte oder ein Wochenendretreat in der Gruppe.',
    title: 'Erlebnisse',
    intro: 'Ob du Ruhe suchst, dir deine eigene Auszeit gestalten oder dich einem kuratierten Retreat anschließen möchtest – hier findest du das passende Erlebnis.',
    createExperience: {
      title: 'Gestalte deine eigene Auszeit',
      subtitle: 'Du planst kein eigenes Retreat? Es gibt viele andere Wege, ein paar Tage bei uns zu verbringen. Komm allein oder zu zweit, trommle eine Runde Freunde zusammen oder gönn dir einfach ein paar ruhige Tage in einem unserer Ferienhäuser. Genauso gern bist du bei einem unserer geführten Retreats willkommen.',
      alternativeText: 'Du suchst etwas anderes?',
      alternativeCta: 'Schreib uns für weitere Optionen',
    },
    soloRetreat: {
      title: 'Solo- oder Duo-Yoga-Retreat',
      description: 'Eine ganz persönliche Auszeit in der Cosmos-Hütte. Maßgeschneiderte Yogastunden, Sauna, Hot Tub und tiefe Ruhe für deinen eigenen Weg.',
      features: [
        'Pakete für 2–3 Nächte',
        'Persönliche Yogastunden',
        'Sauna- und Hot-Tub-Zugang',
        'Frisches Frühstück inklusive',
      ],
      ctaLabel: 'Solo-Retreat entdecken',
    },
    bookingPlatforms: {
      airbnb: 'Auf Airbnb buchen',
      natuurhuisje: 'Auf Natuurhuisje buchen',
    },
    cabins: {
      cosmos: {
        title: 'Cosmos-Hütte buchen',
        description: 'Eine Holzhütte mit Holzofen, so gemütlich wie kaum eine andere – und mit einem der schönsten Ausblicke der Niederlande. Gemacht für Paare oder zu zweit, die sich nah an der Natur einkuscheln möchten.',
        features: [
          'Holzofen und eigene Terrasse',
          'Zugang zu Hot Tub und Sauna',
          'Yogastunden auf Anfrage',
          'Massage auf Anfrage',
          'Verpflegung auf Anfrage',
        ],
      },
      horizon: {
        title: 'Horizon-Loft buchen',
        description: 'Ein neu gebautes Luxus-Loft mit hochwertiger Ausstattung und Blick in die Landschaft. Offene Küche, Regendusche und ein Glaspavillon mit Blick auf das gemeinsame, 13.000 m² große Gelände mit Wildblumenwiesen.',
        features: [
          'Hochwertige Ausstattung und Regendusche',
          'Sauna-Zugang',
          'Fahrrad inklusive',
          'Schwimmteich und Feuerstelle',
          'Verpflegung auf Anfrage',
        ],
      },
    },
    togetherRetreat: {
      title: 'Retreat mit Freunden',
      description: 'Eine All-inclusive-Auszeit mit Freunden. Yoga, kreative Workshops, gutes Essen und echte Verbindung in einer schönen Umgebung.',
      features: [
        'All-inclusive-Erlebnis',
        'Yoga und kreative Workshops',
        'Ayurvedisch inspirierte Mahlzeiten',
        'Exklusiv für eure Gruppe',
      ],
      ctaLabel: 'Gruppen-Retreats entdecken',
    },
    featuredRetreats: {
      title: 'Ausgewählte Retreats',
      subtitle: 'Sei bei einem unserer kommenden Retreat-Erlebnisse dabei',
      bookNow: 'Jetzt buchen',
      spotsLeft: 'Plätze frei',
      fullyBooked: 'Ausgebucht',
    },
    ctaTitle: 'Nicht sicher, was zu dir passt?',
    ctaSubtitle: 'Melde dich – wir helfen dir, das Richtige zu finden.',
    ctaButton: 'Schreib uns',
  },

  location: {
    metaTitle: 'Lage und Umgebung',
    metaDescription: 'The Makers Barn liegt im schönen Overijssel – umgeben von Natur, historischen Städten und unzähligen Outdoor-Möglichkeiten.',
    title: 'Unsere Umgebung',
    intro: 'The Makers Barn liegt mitten in Overijssel, einer der schönsten und naturnahesten Provinzen der Niederlande. Wälder, Flüsse und weite Landschaften – hier gibt es endlos viel zu entdecken.',
    surroundings: 'Zu Fuß erreichst du Kasteel Nijenhuis, ein historisches Schloss mit Museum und beeindruckenden Skulpturengärten. Auf den Höfen ringsum bekommst du frische Produkte, und charmante Dörfer säumen die Landschaft. Wer entspannen möchte: das Premium-Saunaresort Sauna Swoll liegt nur 15 Minuten entfernt.',
    hiking: 'Rund um den Hof führen unzählige Wander- und Radwege durch Naturschutzgebiete, an der IJssel entlang und durch den Nationalpark Sallandse Heuvelrug. Unseren Gästen stellen wir kostenlos Fahrräder zur Verfügung – so kannst du die Gegend in deinem eigenen Tempo erkunden.',
    cities: 'Die historischen Hansestädte Zwolle, Deventer und Kampen sind bequem mit dem Zug (zum Bahnhof sind es 10 Minuten mit dem Rad) oder dem Auto zu erreichen – jede mit reicher Geschichte, schöner Architektur und lebendigem Stadtleben.',
    cta: 'Schreib uns, wenn du mehr wissen möchtest.',
    ctaButton: 'Kontakt aufnehmen',
  },

  shantiDevaRetreat: {
    metaTitle: 'Shanti Deva – Tibetisch-Buddhistisches Retreat',
    metaDescription: 'Komm mit Gen La Geshe Pema Dorjee zu einem 6-tägigen buddhistischen Retreat in der niederländischen Landschaft. Tibetischer Buddhismus mit Meditation, Lehrgesprächen und vegetarischer Verpflegung.',
    backToExperiences: 'Zurück zu den Erlebnissen',

    hero: {
      title: 'Shanti Deva – Tibetisch-Buddhistisches Retreat',
      subtitle: 'Tibetischen Buddhismus studieren',
      withTeachers: 'mit Gen La Geshe Pema Dorjee und dem ehrwürdigen Mönch Lobsang',
      dailyTime: 'Täglich von 7 bis 20 Uhr',
      bookNow: 'Platz reservieren',
    },

    dates: {
      title: 'Verfügbare Termine',
      firstRetreat: 'Erstes Retreat',
      secondRetreat: 'Zweites Retreat',
      duration: '5 Nächte (6 Tage)',
    },

    teacher: {
      sectionTitle: 'Wer ist Geshe Pema Dorjee?',
      biography: 'Geshe Pema Dorjee wurde in Tibet geboren und floh 1959 mit seiner Familie nach Dharamsala in Indien, wo er aufwuchs. Er studierte buddhistische Philosophie und erhielt 1995 den Geshe-Grad – den höchsten akademischen Titel im tibetischen Buddhismus. Über 20 Jahre lang lehrte er am Tibetan Children\'s Village und leitete es als Direktor. Auf Wunsch Seiner Heiligkeit des Dalai Lama gründete er das Bodong Research Center und ein Kloster in Kathmandu. Außerdem hat er umfangreiche humanitäre Projekte ins Leben gerufen – Schulen, Waisenhäuser, Wasserversorgung und Erdbebenhilfe in Nepal. Seit 1997 lehrt er weltweit und ist bekannt für seine Klarheit, Wärme und sein Mitgefühl.',
      gesheTitle: 'Geshe',
      monkTitle: 'Ehrwürdiger Mönch',
    },

    details: {
      title: 'Retreat-Details',
      location: 'Standort',
      locationDescription: 'Ein Bauernhof auf dem Land in den Niederlanden',
      address: 'Adresse des Hofes',
      accessibility: 'Anreise',
      accessibilityItems: {
        carFromZwolle: '15 Minuten mit dem Auto von Zwolle (1 Std. 15 Min. mit dem Zug ab Flughafen Schiphol, Amsterdam)',
        freePickup: 'Kostenlose Abholung vom Bahnhof Zwolle (14:00–16:00)',
        sharedTransport: 'Sammeltransfer zurück zum Bahnhof am Ende: ca. 10 € pro Person',
      },
    },

    schedule: {
      title: 'Tagesablauf',
      arrivalDay: 'Anreisetag',
      studyDays: 'Studientage',
      finalDay: 'Letzter Tag',
      specialActivity: 'An einem der Retreat-Tage gibt es einen tibetischen Momo-Kochworkshop.',
      activities: {
        arrivalCheckin: 'Ankunft und Zimmer-Check-in',
        farmTour: 'Hofführung',
        dinner: 'Abendessen',
        introProgram: 'Einführung und Programmübersicht',
        guidedMeditation: 'Geführte Meditation',
        breakfast: 'Frühstück',
        morningTeaching: 'Vormittagslehre (mit kurzer Pause)',
        lunch: 'Mittagessen',
        afternoonTeaching: 'Nachmittagslehre (mit kurzer Pause)',
        qaSession: 'Fragen und Antworten',
        closingSession: 'Abschlusssitzung mit Fragen und Antworten',
        freeTime: 'Freizeit',
        checkout: 'Check-out',
      },
    },

    included: {
      title: 'Was ist inbegriffen',
      accommodation: 'Unterkunft',
      accommodationOptions: {
        duration: '5 Nächte (6 Tage)',
        doubleRooms: 'Doppelzimmer',
        sharedRooms: 'Zimmer für 3–4 Personen',
        singleRoom: 'Einzelzimmer',
        tentCaravan: 'Übernachtung im Zelt oder Wohnwagen möglich – zum vergünstigten Preis',
      },
      servicesTitle: 'Leistungen',
      services: {
        beddingTowels: 'Bettwäsche und Handtücher (Bade- und Saunatuch nicht inbegriffen)',
        vegetarianMeals: '3 vegetarische Mahlzeiten am Tag, dazu Getränke und Snacks',
        farmFacilities: 'Nutzung aller Hofeinrichtungen: Outdoor-Hot-Tub, Sauna, ökologischer Pool und mehr',
      },
    },

    pricing: {
      title: 'Preise',
      totalPrice: '€640',
      perParticipant: 'pro Teilnehmer (inkl. MwSt.)',
      breakdown: 'Preisaufschlüsselung',
      breakdownItems: {
        accommodation: 'Unterkunft',
        meals: 'Mahlzeiten',
        venueRental: 'Anteil Standortmiete',
        teacherSupport: 'Unterstützung für Anreise und Aufenthalt von Geshe Pema Dorjee und Mönch Lobsang',
      },
      paymentTerms: 'Zahlungsbedingungen',
      paymentItems: {
        depositPayment: 'Erste Zahlung (Anzahlung): 140 € bei Anmeldung',
        secondPayment: 'Zweite Zahlung: 500 €, vier Monate vor dem Retreat',
      },
      cancellation: 'Stornierungsbedingungen',
      cancellationItems: {
        fourMonthsRefund: 'Bis 4 Monate vor Beginn: volle Rückerstattung der Anzahlung',
        afterFullPayment: 'Nach der zweiten Zahlung (Vollzahlung): 25 % Rückerstattung',
        replacementRefund: 'Wenn sich ein Ersatzteilnehmer findet: volle Rückerstattung',
      },
    },

    registration: {
      title: 'Bist du dabei?',
      subtitle: 'Die Plätze sind begrenzt. Sichere dir heute deinen Platz.',
      participantRange: '10–15 Teilnehmer',
      contact: 'Fragen? Melde dich direkt beim Retreat-Team',
      whatsapp: 'WhatsApp',
      email: 'E-Mail',
      registerButton: 'Jetzt anmelden',
    },
  },

  impressionCarousel: {
    kicker: 'Ein kleiner Eindruck',
    title: 'Komm zur Ruhe, schau dich um.',
    subtitle:
      'Entdecke die Schönheit eines langsameren Lebens. Jeder Moment hier lädt dich ein, innezuhalten, durchzuatmen und dich wieder mit dem zu verbinden, was wirklich zählt.',
    facilitiesButton: 'Räume entdecken',
    previousImage: 'Vorheriges Bild',
    nextImage: 'Nächstes Bild',
    carouselNavigation: 'Karussell-Navigation',
    viewFullscreen: 'Eindruck im Vollbild ansehen',
    goToSlide: 'Zur Folie gehen',
  },

  impressionPolaroids: {
    kicker: 'Ein kleiner Eindruck',
    title: 'Ein Ort für Erinnerungen, die bleiben',
    subtitle:
      'Räume zum Vertiefen, Wandern, Dösen, Schreiben, Nachdenken und Zusammensein. Ein kleiner Vorgeschmack darauf, wie sich dein Retreat anfühlen kann.',
  },

  testimonials: {
    sectionTitle: 'Was unsere Gäste sagen',
    items: [
      {
        testimonial:
          'MakersBarn hat etwas Magisches. Die Kombination aus wunderschöner Landschaft, durchdachten Räumen und der Sauna hat unser Retreat zu einer wirklich verändernden Erfahrung gemacht. Wir sind erholt und tief verbunden nach Hause gefahren.',
        author: 'Emma K. – Wellness-Retreat-Veranstalterin',
      },
      {
        testimonial:
          'Das ist der schönste Retreat-Ort, an dem ich je war. Die Liebe zum Detail, die Natur ringsum und die ruhige Atmosphäre haben den perfekten Rahmen geschaffen, in dem unser Team wieder zueinanderfinden und auftanken konnte.',
        author: 'Marcus T. – Leadership-Coach',
      },
      {
        testimonial:
          'Ich habe in ganz Europa Retreats organisiert, und MakersBarn ist wirklich etwas Besonderes. Die niederländische Landschaft, die herzliche Gastfreundschaft und die intimen Räume machen diesen Ort perfekt für tiefe, bedeutungsvolle Arbeit.',
        author: 'Sophie L. – Workshop-Leiterin',
      },
      {
        testimonial:
          'Unser Kreativteam hat bei MakersBarn genau das gefunden, was wir gebraucht haben. Die inspirierende Umgebung mit den Feldern und der Natur ringsum hat uns geholfen, kreative Blockaden zu lösen und unsere bisher beste Arbeit zu machen.',
        author: 'David R. – Creative Director',
      },
    ],
  },

  team: {
    members: [
      {
        name: 'Nana',
        description:
          'Nana ist der kreative Kopf und das Herz hinter The Makers Barn. Dieser Ort ist aus ihrer eigenen Lebensreise und ihrem Heilungsweg gewachsen – und genau das prägt die Atmosphäre, die wir hier schaffen. Sie ist von der ersten Mail an für dich da und sorgt dafür, dass sich dein Retreat genau so anfühlt, wie du es dir vorstellst. Nana bringt eine ruhige, geerdete Präsenz mit, geprägt von ihrer Liebe zur Natur, zu Yoga, zu einem achtsamen Leben und zu kleinen kreativen Momenten. Sie weiß, was Retreat-Leitende brauchen, und begleitet sie klar, fürsorglich und mit Sinn fürs Praktische.',
      },
      {
        name: 'Benny',
        description:
          'Ein Maker durch und durch – Benny liebt es, sowohl am Bildschirm als auch in der Küche etwas zu zaubern. Mit dem Affen als Krafttier bringt er verspielte Neugier und Freude in alles, was er tut. Er pendelt achtsam zwischen virtueller und physischer Welt, hilft gern, teilt ein freundliches Wort und ist offen für ein Gespräch über das, was dich gerade beschäftigt.',
      },
      {
        name: 'Noud',
        description:
          'Noud ist der wohl echteste Maker unter uns: CMO, Chief Maker Officer. Seine Schrauben, Nägel, Bäume und vor allem seine Hingabe halten den Ort in Bestform. In seiner freien Zeit ist er am liebsten in der Werkstatt und baut wunderschöne Möbel.',
      },
    ],
  },

  common: {
    logoAlt: "Maker's Barn",
    selectLanguage: 'Sprache wählen',
    toggleMenu: 'Menü öffnen',
    previousImage: 'Vorheriges Bild',
    nextImage: 'Nächstes Bild',
    closeGallery: 'Galerie schließen',
    imageNavigation: 'Bildnavigation',
    imageThumbnails: 'Bild-Miniaturen',
    imageGallery: 'Bildergalerie',
    floatingWhatsApp: {
      ariaLabel: 'WhatsApp-Chat öffnen',
      tooltip: 'Schreib uns auf WhatsApp',
    },
    lightbox: {
      closeGallery: 'Galerie schließen',
      previousImage: 'Vorheriges Bild',
      nextImage: 'Nächstes Bild',
      imageOf: 'von',
      viewImage: 'Bild ansehen',
      current: 'aktuell',
      imageNavigation: 'Bildnavigation',
      imageThumbnails: 'Bild-Miniaturen',
      keyboardInstructions:
        'Verwende die linke und rechte Pfeiltaste, um zwischen den Bildern zu navigieren. Drücke Escape, um die Galerie zu schließen.',
    },
  },

  metadata: {
    siteName: "The Maker's Barn",
    siteTitle: "The Maker's Barn – Retreat in der niederländischen Landschaft",
    defaultDescription:
      'Gib deinem Retreat den Ort, den er verdient. Über 60 m² Übungsraum, 14 Betten, mehr als 1,3 ha eigenes Land in der niederländischen Landschaft.',
    keywords: ['Retreat', 'Niederlande', 'Landschaft', 'Wellness', 'Workshop-Location', 'Kreativretreat'],
  },

  silos: {
    backToRetreats: 'Alle Retreat-Arten',
    hookEyebrow: 'Kurz gesagt',
    factsTitle: 'Warum The Makers Barn',
    scheduleTitle: 'Ein Tag auf dem Hof',
    faqTitle: 'Häufig gestellte Fragen',
    primaryCta: 'Retreat planen',
    secondaryCta: 'Stell eine Frage',
    finalCtaPrimary: 'Angebot anfragen',
    finalCtaSecondary: 'Kontakt aufnehmen',
    toolCtaTitle: 'Pricing your retreat?',
    toolCtaBody: 'Use our free calculator to plan your revenue, costs, profit margin, and breakeven occupancy.',
    toolCtaLabel: 'Open the calculator',
    calendarCtaTitle: 'Planning the timeline?',
    calendarCtaBody: 'Use our free 12-month launch calendar to plan phases, milestones, and the realistic timeline that actually works.',
    calendarCtaLabel: 'Open the launch calendar',
    auditCtaTitle: 'Spot the mistakes before you sign',
    auditCtaBody: 'Run the 25 most common retreat-host mistakes against your plan. 5 minutes, no signup, personalised risk report.',
    auditCtaLabel: 'Take the 5-minute audit',
  },

  comparisonTeaser: {
    eyebrow: 'Optionen vergleichen',
    headline: 'Ein Ort der anderen Art',
    ctaLabel: 'Den vollständigen Vergleich lesen',
  },

  retreats: {
    metaTitle: 'Retreat veranstalten',
    metaDescription:
      'Veranstalte deinen Retreat bei The Makers Barn. Ein Hof aus den 1920er-Jahren in Overijssel für Yoga, Meditation, Schreiben, Teams, Atemarbeit und mehr.',
    eyebrow: 'Retreat veranstalten',
    title: 'Ein Zuhause für dein Retreat',
    intro:
      'The Makers Barn trägt ganz unterschiedliche Arten von Arbeit. Wähle die Retreat-Art, die passt – jede Seite geht ins Detail, was wir für genau diese Art von Gruppe bieten.',
    cardCta: 'Diese Retreat-Art ansehen',
    helpTitle: 'Nicht sicher, was passt?',
    helpBody:
      'Erzähl uns ein wenig von deiner Gruppe – wir helfen dir, die richtige Form zu finden. Manchmal ist es nichts davon, und auch das ist in Ordnung.',
    helpCta: 'Sprich mit uns',
    cards: {
      yogaTeachers: {
        title: 'Yogalehrer',
        pitch:
          'Eine beheizte Shala in der Heuscheune für bis zu 20 Schüler, eine Küche, die sich nach deinem Stundenplan richtet – um den Rest kümmern wir uns.',
      },
      meditationRetreats: {
        title: 'Meditations- und Dharma-Gruppen',
        pitch:
          'Zwölftausend Quadratmeter geschützte Stille, ein Hof mit gelebter Praxis – und eine Küche, die sich nach deinem Mahlzeitenplan richtet.',
      },
      writingRetreats: {
        title: 'Schreibretreats',
        pitch:
          'Für veröffentlichte Autoren und Schreiblehrende, die mehrtägige Schreibintensivtage leiten. Workshopraum, eigene Hütten und ein langer Tisch für die abendlichen Leserunden.',
      },
      teamOffsites: {
        title: 'Team-Offsites',
        pitch:
          'Ein Hof aus den 1920er-Jahren, exklusiv für dein Team. Strategietage, die sich nicht nach Konferenzraum anfühlen.',
      },
      breathworkSoundHealing: {
        title: 'Atemarbeit und Klang',
        pitch:
          'Eine beheizte Heuscheune, die mitschwingt, wenn die Klangschalen tönen. Eine Feuerstelle draußen und eine Sauna für das, was danach hochkommt.',
      },
      coachingIntensives: {
        title: 'Coaching-Intensivtage',
        pitch:
          'Ein getragener Ort für Coaches, die Gruppen-Intensivtage mit 8–12 Personen leiten. Die Arbeit geht nach dem Workshop weiter – hier ist Platz dafür.',
      },
      somaticTherapyRetreats: {
        title: 'Somatische und therapeutische Retreats',
        pitch:
          'Für lizenzierte Therapeuten und somatische Praktiker, die trauma-informierte mehrtägige Aufenthalte leiten. Hof exklusiv für euch, Sauna, Felder direkt vor der Praxisscheune.',
      },
      wellnessDetoxRetreats: {
        title: 'Wellness und Detox',
        pitch:
          'Für Wellness-Coaches, Heilpraktiker und Ayurveda-Lehrende, die Clean-Eating-, Sauna- und Yoga-Programme auf einem privaten Hof mit 1,3 Hektar leiten.',
      },
      circleRetreats: {
        title: 'Circle-Retreats',
        pitch:
          'Für Facilitator von Frauen-, Männer- und gemischten Circles. Eine Feuerstelle, eine Scheune – und die Privatsphäre, die diese Arbeit verlangt.',
      },
      photographyWorkshops: {
        title: 'Fotografie-Workshops',
        pitch:
          'Für professionelle Fotografen, die mehrtägige Workshops leiten. Weiter Himmel, 1,3 Hektar mit wechselndem Licht und ein Basislager, das sich um den Rest kümmert.',
      },
    },
    comparisonCard: {
      eyebrow: 'Noch am Überlegen?',
      headline: 'Ein privater Hof oder ein kommerzielles Retreat-Hotel?',
      body:
        'Wenn du einen kleinen privaten Hof gegen ein kommerzielles Retreat-Hotel abwägst, haben wir dazu einen ehrlichen Vergleich geschrieben. Kapazität, Küche, Akustik, was du eintauschst und was du gewinnst – ganz ohne Werbesprech.',
      ctaLabel: 'Vergleich lesen',
    },
    toolsBlock: {
      eyebrow: 'Kostenlose Planungstools',
      title: 'Tools für Retreat-Veranstalter',
      intro: 'Kostenlose, frei zugängliche Tools, mit denen du ein Retreat planst, das wirklich funktioniert — bei MakersBarn oder anderswo.',
      calendarTitle: 'Der 12-Monats-Launch-Kalender',
      calendarBody: 'Phasen, Meilensteine und ein realistischer Zeitplan. Wähle deinen Vorlauf (3, 6, 9 oder 12 Monate) und hake die Schritte ab, sobald sie erledigt sind.',
      calendarCtaLabel: 'Launch-Kalender öffnen',
      calculatorTitle: 'Rentabilitätsrechner für Retreats',
      calculatorBody: 'Plane Umsatz, Kosten, Marge und Break-even-Belegung, bevor du dich auf eine Location festlegst.',
      calculatorCtaLabel: 'Rechner öffnen',
    },
  },

  tools: {
    hub: {
      metaTitle: 'Gratis-Tools für Retreat-Leitende',
      metaDescription: 'Kostenlose Rechner und Tools für Retreat-Leitende — Preisgestaltung, Rentabilität und Planung. Keine Anmeldung nötig.',
      eyebrow: 'Gratis-Tools',
      title: 'Ein Werkzeugkasten für Retreat-Hosts',
      intro: 'Fünf harte Fragen, zwanzig kostenlose Tools, ein geprüftes Koch-Verzeichnis. Keine Anmeldung, keine E-Mail-Hürde — und es funktioniert für jeden Ort, auch für den, den du bei MakersBarn in Betracht ziehst.',
      toolCardCta: 'Öffnen',
      workflowEyebrow: 'Wähle, wo du startest',
      workflowTitle: 'Die fünf Fragen, die jede:r Retreat-Host beantworten muss',
      workflowIntro: 'Fünf harte Stellen beim Retreat-Hosting, jede mit einer eigenen Antwort. Nimm eine, nimm alle fünf — in beliebiger Reihenfolge.',
      workflowSteps: [
        { title: 'Was übersehe ich?', body: 'Ein 10-Fragen-Audit, das die blinden Flecken aufdeckt, bevor sie dich Geld kosten.' },
        { title: 'Werde ich profitabel?', body: 'Preise, Marge und die Teilnehmerzahl, die du für den Break-even brauchst.' },
        { title: 'Wann kann ich starten?', body: 'Ein realistischer Zeitplan über 3, 6, 9 oder 12 Monate mit Meilensteinen.' },
        { title: 'Wie sieht ein Tag aus?', body: 'Ein Tag-für-Tag-Plan mit sinnvollen Vorgaben, die du anpassen kannst.' },
      ],
      freeBadge: '100% gratis',
      noSignupBadge: 'Keine Anmeldung',
      categories: {
        audit: {
          label: 'Fehler-Audits',
          title: 'Prüfe deinen Retreat-Plan',
          description: 'Ein 10-Fragen-Check, der die blinden Flecken aufdeckt, die sowohl Erstlinge als auch erfahrene Hosts übersehen — Preis, Programm, Logistik und Gruppendynamik.',
          variantsLabel: 'Oder nutze eine Nischen-Version:',
        },
        calculator: {
          label: 'Preisrechner',
          title: 'Setze deine Preise mit Rückgrat',
          description: 'Sieh Umsatz, Gesamtkosten, Marge und Break-even-Belegung in Echtzeit. Nischen-typische Vorgaben aus Yoga-, Wellness-, Meditations- und Coaching-Benchmarks.',
          variantsLabel: 'Oder nutze eine Nischen-Version:',
        },
        planner: {
          label: 'Launch-Kalender',
          title: 'Plane deinen Launch über die Zeit',
          description: 'Phase-für-Phase-Meilensteine zum Abhaken, Anpassen und an dich selbst per Mail senden. Wähle die Vorlaufzeit, die zu deinem Launch-Datum passt.',
          variantsLabel: 'Oder wähle eine andere Vorlaufzeit:',
        },
        agenda: {
          label: 'Tagesplan-Builder',
          title: 'Gestalte den Tag-für-Tag-Ablauf',
          description: 'Klar strukturierte Retreat-Pläne mit nischen-passenden Vorgaben — Vinyasa-Flows, Sitz-Geh-Sitz-Zyklen, Coaching-Hot-Seats — alles editierbar.',
          variantsLabel: 'Oder nutze eine Nischen-Version:',
        },
      },
      chefsSection: {
        workflowQuestion: 'Wer kocht?',
        workflowBody: 'Ein Verzeichnis geprüfter Retreat-Köch:innen, die in den ganzen Niederlanden arbeiten.',
        label: 'Retreat-Köch:innen',
        title: 'Finde eine Köchin oder einen Koch für dein Retreat',
        description: 'Für ein Retreat zu kochen ähnelt eher einer kleinen Küche als einem Catering. Sieh dir geprüfte Profile, Tagessätze, Vorlaufzeiten und das, was du vor einer Buchung fragen solltest, an.',
        cardTag: 'Verzeichnis',
        cardTitle: 'Retreat-Köch:innen in den Niederlanden',
        cardBody: 'Jedes Profil ist geprüft und von der Köchin oder dem Koch selbst freigegeben. Tagessätze, Ernährungsweisen, Vorlaufzeiten und Reiseabdeckung — alles in der Übersicht.',
        cardCta: 'Köche durchsuchen',
      },
    },
    calculator: {
      inputs: {
        hiresFacilitatorsQuestion: 'Bezahlst du jemanden von ihnen?',
        hiresFacilitatorsYes: 'Ja',
        hiresFacilitatorsNo: 'Nein',
        facilitatorFeeLabel: 'Gesamthonorar für dein Team',
        revenueSectionLabel: 'Was reinkommt',
        revenueSectionDescription: 'Der Preis, den du deinen Gästen berechnest.',
        costsSectionLabel: 'Was rausgeht',
        costsSectionDescription: 'Alles, was das Retreat dich tatsächlich kostet.',
        guestsLabel: 'Zahlende Gäste',
        guestsUnit: 'Gäste',
        teamBlockTitle: 'Dein Team vor Ort',
        teamBlockDescription: 'Personen, die zusätzlich zu den zahlenden Gästen vor Ort bleiben.',
        teamCountLabel: 'Zusätzliche Personen vor Ort',
        teamCountUnit: 'extra',
        teamCountHelper: 'Du, Co-Hosts und Facilitator, die am Ort schlafen und essen. Meist 1 bis 3.',
        nightsLabel: 'Anzahl Nächte',
        nightsUnit: 'Nächte',
        pricePerGuestLabel: 'Preis pro Gast',
        venuePerNightLabel: 'Location + Unterkunft, pro Nacht',
        venueUnit: '/ Nacht',
        venueAllPeopleNote: 'Gesamt­übernachtungs­kosten für alle Übernachtenden — siehe Hinweis unter dem Rechner.',
        foodPerGuestPerDayLabel: 'Verpflegung pro Person pro Tag',
        foodUnit: '/ Person / Tag',
        foodAllPeopleNote: 'Wird automatisch mit Gästen + deinem Team multipliziert — niemand isst umsonst.',
        marketingAndOtherLabel: 'Marketing & sonstige Kosten',
        advancedLabel: 'Extras (bei Bedarf öffnen)',
        travelLabel: 'Eigene Reise & Transport',
        insuranceLabel: 'Versicherung',
        paymentFeePercentLabel: 'Zahlungsgebühren',
        vatToggleLabel: 'Meine Preise sind inkl. MwSt.',
        vatToggleHelper: 'Aktivieren, wenn die eingegebenen Beträge brutto sind. Standard {percent}% — niederländischer Regelsatz.',
        vatPercentLabel: 'MwSt.-Satz',
        vatPercentHelper: 'In den Niederlanden gilt für Retreat-Leistungen jetzt einheitlich der Satz von 21% — für Unterkunft, Verpflegung und Dienstleistungen.',
        planningDaysLabel: 'Planungstage',
        daysUnit: 'Tage',
        resetLabel: 'Beispielwerte wiederherstellen',
      },
      results: {
        kicker: 'Was du behältst',
        headlineSentence: 'Bei {price} pro Gast mit {guests} Gästen behältst du {profit} — eine Marge von {margin}.',
        totalRevenue: 'Gesamtumsatz',
        totalCosts: 'Gesamtkosten',
        profitMargin: 'Gewinnmarge',
        profitPerWorkday: 'Gewinn pro Arbeitstag',
        metricsLabel: 'Retreat-Wirtschaftlichkeit Übersicht',
        breakevenSentence: 'Du brauchst mindestens {guests} Gäste zu {price}, bevor sich das Retreat trägt.',
        breakevenImpossible: 'Zu diesem Preis fressen deine Kosten pro Gast das ganze Ticket — mehr Gäste allein bringen dich nicht zum Break-even.',
        vatNoticeNet: 'gezeigt exkl. {percent}% MwSt.',
        vatNoticeGross: 'gezeigt wie eingegeben',
        vatGrossHint: 'Gäste zahlen {gross} pro Platz. Nach {percent}% MwSt. bleiben dir {net} pro Platz — damit rechnet der Rechner.',
        breakdownLabels: {
          venue: 'Location',
          food: 'Verpflegung',
          facilitator: 'Honorar',
          marketing: 'Marketing & Sonstiges',
          travel: 'Reise',
          insurance: 'Versicherung',
          fees: 'Zahlungsgebühren',
          profit: 'Gewinn',
          barAriaLabel: 'Kosten- und Gewinnaufstellung',
        },
      },
      email: {
        heading: 'Schick mir die Zusammenfassung per Mail',
        placeholder: 'deine@email.com',
        submit: 'Zusammenfassung senden',
        sending: 'Wird gesendet…',
        success: 'Gesendet! Schau in dein Postfach.',
        error: 'Geht gerade nicht — versuch es bitte gleich nochmal.',
        optInLabel: 'Schick mir gelegentlich Tipps zur Retreat-Preisgestaltung (kein Spam, jederzeit kündbar)',
      },
      share: {
        heading: 'Diese Zahlen teilen',
        intro: 'Schick den Link einem Co-Host, Partner oder Steuerberater — schau, ob deine Annahmen tragen.',
        copy: 'Link kopieren',
        copied: 'Kopiert!',
        copyFailed: 'Link konnte nicht kopiert werden',
        whatsapp: 'Über WhatsApp teilen',
        whatsappMessage: 'Meine Retreat-Zahlen aus dem MakersBarn-Rechner:',
      },
      venueExplainer: {
        heading: 'Wie Locations meistens kalkulieren',
        paragraphs: [
          'Die meisten Retreat-Locations bieten in drei Schichten an: ein Grundpreis pro Nacht für die Nutzung des Hauses, eine einmalige Reinigungs­pauschale und ein Pro-Person-Preis für jedes tatsächlich belegte Bett. Der Pro-Person-Preis gilt für alle Übernachtenden — zahlende Gäste und dein Team.',
          'Organisatoren nehmen manchmal an, dass der Pro-Person-Preis nur für die zahlenden Gäste gilt, und sind später überrascht von der Schlussrechnung. Trag bei der Nachtmiete oben also die Gesamtsumme für alle Übernachtenden ein — Gäste + die Personen aus deinem Team-Slider.',
        ],
        example: 'Beispiel — 12 Gäste + 2 Team = 14 Personen. Location €400 Grund + €50 Reinigung pro Nacht + €60 pro Person = 400 + 50 + (14 × 60) = €1.290 pro Nacht. Nicht 12 × 60.',
      },
      makersbarnCta: {
        title: 'Denkst du an MakersBarn als Location?',
        body: 'Wir machen einen fairen Preis für deine Gruppengröße und Termine — schreib uns kurz, wir schicken dir ein Angebot. Die Zahlen oben bleiben bei dir.',
        linkLabel: 'Angebot anfragen',
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
        auditTitle: 'Retreat-Fehler-Audit',
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
        auditTitle: 'Das 5-Minuten-Retreat-Mistakes-Audit starten',
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
      heading: 'Verwandte Tools',
      auditCardTitle: 'Annahmen prüfen: 5-Minuten-Fehler-Audit starten',
    },
    faq: {
      heading: 'Frequently asked questions',
    },
  },

  chef: {
    backLink: 'Weitere Chefs entdecken',
    draftBadge: 'ENTWURF — nur Vorschau',
    metaTitle: '{name} — Retreat-Koch in {region}, Niederlande',
    cta: { sendInquiry: 'Anfrage an {name} senden' },
    statStrip: {
      rightFor: 'GEEIGNET FÜR',
      cooks: 'KOCHT',
      accommodates: 'ERNÄHRUNG',
      dayRate: 'TAGESSATZ',
      dayRateUnit: 'p.P. / Tag',
      dayRateExBtw: 'exkl. MwSt. · Reisekosten auf Anfrage',
      tierLabel: { budget: 'Budget', standard: 'Standard', premium: 'Premium' },
      tierAriaLabel: '{tier}-Preisniveau',
    },
    headerMeta: {
      guests: '{min} – {max} Gäste',
      yearsCooking: '{years} Jahre Kocherfahrung',
      summaryAriaLabel: 'Chef-Übersicht',
    },
    galleryLabel: 'Aus der Küche',
    about: 'ÜBER',
    signatureDishes: 'SIGNATURGERICHTE',
    signatureDishItemPrefix: 'NR. {n}',
    testimonials: 'WAS ORGANISATOREN SAGEN',
    additionalOfferings: 'WEITERE ANGEBOTE',
    sidebar: {
      operatesIn: 'TÄTIG IN',
      travelsNationwide: 'Reist landesweit',
      travelsRegional: 'Tätig regional',
      strongestIn: 'Am stärksten in {regions}',
      homeBase: 'Standort',
      atAGlance: 'AUF EINEN BLICK',
      atAGlanceLabels: {
        groupSize: 'Gruppengröße',
        languages: 'Sprachen',
        experience: 'Erfahrung',
        sourcing: 'Bezug',
        credentials: 'Qualifikationen',
        press: 'Presse',
      },
      pastRetreats: 'FRÜHERE RETREATS',
      kitchenRequirements: 'KÜCHENANFORDERUNGEN',
    },
    enums: {
      retreatType: {
        yoga: 'Yoga-Retreats',
        wellness: 'Wellness',
        creative: 'Kreative Zusammenkünfte',
        corporate: 'Firmen-Offsites',
        breathwork: 'Atemarbeit',
        meditation: 'Meditation',
        writing: 'Schreibretreats',
        photography: 'Fotografie-Retreats',
      },
      dietary: {
        vegan: 'Vegan',
        vegetarian: 'Vegetarisch',
        gluten_free: 'Glutenfrei',
        dairy_free: 'Laktosefrei',
        nut_free: 'Nussfrei',
        kosher: 'Koscher',
        halal: 'Halal',
        allergy_aware: 'Allergiebewusst',
        raw: 'Rohkost',
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
      modalTitle: 'Anfrage an {name} senden',
      closeAriaLabel: 'Anfrageformular schließen',
      field: {
        name: 'Dein Name',
        email: 'E-Mail',
        dates: 'Retreat-Daten (eine grobe Schätzung reicht)',
        datesPlaceholder: '5.–9. Mai 2026',
        groupSize: 'Gruppengröße',
        location: 'Wo findet das Retreat statt?',
        dietary: 'Ernährungsbedürfnisse / Vorlieben (optional)',
        message: 'Erzähl {name} von deinem Retreat',
      },
      consent: 'Ich willige ein, dass MakersBarn diese Anfrage an {name} weiterleitet.',
      submit: 'Anfrage senden',
      submitting: 'Wird gesendet…',
      success: {
        title: 'Deine Anfrage ist auf dem Weg zu {name}',
        body: '{name} antwortet in der Regel innerhalb von 2–3 Tagen. Wir haben dir eine Bestätigung an {email} gesendet.',
      },
      errors: {
        rate_limited: 'Zu viele Anfragen. Bitte versuche es in ein paar Minuten erneut.',
        validation: 'Bitte überprüfe die markierten Felder und versuche es erneut.',
        chef_not_found: 'Dieser Chef ist gerade nicht verfügbar. Bitte versuche es später erneut.',
        email_failed: 'Wir konnten deine Anfrage nicht zustellen. Bitte versuche es erneut oder schreib uns direkt.',
        unexpected_error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
      },
    },
  },

  chefsListing: {
    meta: {
      title: 'Privatköche für Retreats in den Niederlanden',
      description: 'Ein Verzeichnis von Retreat-Köchen, die in den gesamten Niederlanden arbeiten, plus ein praktischer Leitfaden zum Bewerten und Buchen des richtigen Kochs für dein Retreat. Preise, Vorlaufzeiten, Ernährungsanforderungen.',
    },
    hero: {
      eyebrow: 'Köche',
      h1: 'Privatköche für Retreats in den Niederlanden',
      subtitle: 'Ein Verzeichnis von Retreat-Köchen, die in den gesamten Niederlanden arbeiten, plus ein praktischer Leitfaden zum Bewerten und Buchen des richtigen Kochs für dein Retreat.',
    },
    intro: 'Die meisten Retreat-Veranstalter unterschätzen, was die Buchung eines Kochs tatsächlich bedeutet. Vorlaufzeiten, Ernährungsanforderungen, Logistik vor Ort und Preisstrukturen variieren stark. Dieser Leitfaden erklärt, worauf du achten solltest, wie die Preisgestaltung in den Niederlanden funktioniert und wo du Köche findest, die auch reisen.',
    sections: {
      whatToLookFor: {
        h2: 'Worauf du bei einem Retreat-Koch achten solltest',
        paragraphs: [
          'Das Kochen für ein Retreat ähnelt eher dem Betrieb einer kleinen Küche als dem Catering einer Veranstaltung. Suche nach Köchen mit Erfahrung im Kochen für Gruppen von 8–20 Personen über mehrere Tage hinweg — nicht nur für einmalige Abendessen. Der Rhythmus, die Beschaffung und die Erholung zwischen den Mahlzeiten sind grundlegend anders.',
          'Frage, wie der Koch mit unterschiedlichen Ernährungsanforderungen umgeht: Wie bleibt ein veganes Hauptgericht befriedigend, wenn die Hälfte der Gruppe Allesesser ist — und wie vermeidet er, dass Sonderwünsche wie ein Anhängsel wirken? Starke Retreat-Köche sehen Ernährungsvielfalt als kreative Herausforderung, nicht als logistisches Problem.',
          'Achte auf Transparenz bei der Beschaffung. Die meisten Retreat-Köche in den Niederlanden arbeiten mit ein oder zwei bestimmten Höfen, Molkereien oder Fischhändlern zusammen. Wenn jemand diese nicht benennen kann, ist das ein Zeichen, dem es sich lohnt nachzugehen.',
        ],
      },
      pricing: {
        h2: 'Wie die Preisgestaltung für Retreat-Köche in den Niederlanden funktioniert',
        paragraphs: [
          'Zwei Preismodelle dominieren den niederländischen Markt. Tagessätze (€350–€650/Tag für einen Koch, zuzüglich Lebensmittelkosten) eignen sich für Retreats, bei denen du Flexibilität bei Menü und Einkauf möchtest. Preise pro Mahlzeit (€35–€90+ pro Person pro Mahlzeit — Extras wie Anreise können hinzukommen) sind bei kürzeren Retreats üblich und geben dir ein klares Budget pro Kopf.',
          'Achte darauf, was ausgeschlossen ist. Anfahrtszeit, Küchenausrüstung, Spülarbeit und Sonderwünsche bei der Ernährung sind die häufigsten Posten, die die Endrechnung still und leise in die Höhe treiben. Bitte vor der Buchung um einen Mustervertrag.',
          'Die Vorlaufzeit beträgt für etablierte Köche 4–8 Wo., in der Hauptsaison (Mai–September) länger. Frühzeitig buchen.',
        ],
      },
      coverage: {
        h2: 'Regionale Abdeckung und Reisebereitschaft',
        paragraphs: [
          'Die meisten etablierten Retreat-Köche sind in Noord-Holland, Utrecht oder Gelderland ansässig und reisen für Retreats ab zwei Tagen zu Veranstaltungsorten in Drenthe, Friesland, Overijssel und Flevoland. Fahrten innerhalb des Landes sind in der Regel bei Tagessätzen über €450 enthalten; darunter ist ein Kilometeraufschlag üblich.',
          'Bei mehrtägigen Retreats außerhalb ihrer Heimatprovinz bevorzugen die meisten Köche eine Übernachtungsmöglichkeit vor Ort statt einer täglichen Anfahrt. Plane eine Unterkunft für den Koch in deiner Buchung ein.',
          'Das untenstehende Verzeichnis umfasst Köche, die in den gesamten Niederlanden arbeiten. Wenn du in Makers Barn in Wijhe (Overijssel) veranstaltest, kontaktiere die Köche direkt, um die Verfügbarkeit für deine Termine zu bestätigen.',
        ],
      },
    },
    grid: {
      h2: 'Retreat-Köche in den Niederlanden',
      framingLine: 'Verifizierte Retreat-Köche in den Niederlanden. Jedes Profil wird vom Koch selbst geprüft und freigegeben — entdecke den richtigen Koch für dein Retreat.',
      card: {
        viewProfile: 'Profil ansehen',
        draftBadge: 'ENTWURF',
        cuisinesAriaLabel: 'Küchenstile',
      },
    },
    launchingSoon: {
      headline: 'Unser Verzeichnis befindet sich in einer geschlossenen Beta.',
      body: 'Wir prüfen Köche in kleinen Gruppen. Den obigen Leitfaden kannst du frei nutzen — und wenn du vermittelt werden möchtest, sobald Köche verfügbar sind, erzähl uns einfach, was du planst.',
      inlineCtaLabel: 'Erzähl uns, was du planst →',
    },
    facts: [
      { number: '8–20', description: 'Typische Retreat-Gruppengröße' },
      { number: '€35–€90+', description: 'Pro Person pro Mahlzeit, Basis — Anreise & Extras können hinzukommen' },
      { number: '4–8 Wo.', description: 'Typische Vorlaufzeit für die Buchung' },
    ],
    faq: {
      h2: 'Häufig gestellte Fragen',
      items: [
        {
          question: 'Was kostet ein Privatkoch für ein Retreat in den Niederlanden?',
          answer: 'Tagessätze liegen bei €350–€650 für einen Koch zuzüglich Lebensmittelkosten. Der Preis pro Mahlzeit beträgt €35–€90+ pro Person — Extras wie Anreise können hinzukommen. Die Endkosten hängen von Gruppengröße, Ernährungskomplexität und der Verfügbarkeit von Küchenausrüstung ab.',
        },
        {
          question: 'Wie lange ist die typische Vorlaufzeit für die Buchung eines Retreat-Kochs?',
          answer: 'Plane 4–8 Wo. für die meisten etablierten Köche, länger zwischen Mai und September. Kurzfristige Buchungen (unter zwei Wochen) sind möglich, aber die Auswahl ist dann eingeschränkter.',
        },
        {
          question: 'Reisen Köche zu Retreat-Veranstaltungsorten?',
          answer: 'Die meisten etablierten Retreat-Köche reisen innerhalb der Niederlande. Fahrtkosten sind in der Regel bei Tagessätzen über €450 inbegriffen; darunter ist ein Kilometer-Aufschlag zu erwarten. Bei mehrtägigen Retreats außerhalb der Heimatprovinz des Kochs solltest du eine Übernachtungsmöglichkeit vor Ort einplanen.',
        },
        {
          question: 'Wie gehen Köche mit Ernährungsanforderungen um?',
          answer: 'Starke Retreat-Köche handhaben vegetarische, vegane, glutenfreie und laktosefreie Ernährung als Standard. Allergien (Nüsse, Meeresfrüchte, Sesam) und medizinische Diäten (FODMAP, Histaminintoleranz) werden in der Regel mit zwei Wochen Vorlaufzeit berücksichtigt. Teile Ernährungsbedürfnisse immer zum Zeitpunkt der Buchung mit — nicht erst die Woche davor.',
        },
        {
          question: 'Wer schließt den Vertrag mit dem Koch — der Veranstaltungsort oder der Gastgeber?',
          answer: 'Fast immer der Gastgeber. Veranstaltungsorte wie Makers Barn stellen Köche vor und können bei der Terminplanung helfen, aber die Vertragsbeziehung und Zahlung läuft direkt zwischen Gastgeber und Koch. Prüfe dies in den Buchungsbedingungen deines Veranstaltungsortes.',
        },
        {
          question: 'Kann ich auch selbst kochen?',
          answer: 'Möglich ist es — aber Kochen für ein Retreat ist nicht dasselbe wie Kochen zu Hause. Du bereitest 9–15 Mahlzeiten über mehrere Tage für eine Gruppe mit unterschiedlichen Ernährungsbedürfnissen zu, dazu Einkauf, Vorbereitung und Reinigung, während das Retreat-Programm weiterläuft. Wir empfehlen ausdrücklich, jemanden mit Retreat-Koch-Erfahrung einzubinden: Das hält den Gastgeber bei den Teilnehmenden statt in der Küche. Wenn das Kochen nicht gut läuft, leidet das gesamte Retreat — Gäste merken es sofort, das Programm verliert Energie, und der Gastgeber verliert den Kontakt zur Gruppe.',
        },
      ],
    },
    dualCta: {
      looking: {
        eyebrow: 'Für Retreat-Veranstalter',
        h3: 'Brauchst du Hilfe beim Finden des richtigen Kochs?',
        body: 'Erzähl uns, was du planst. Wir vermitteln aus unserem Verzeichnis oder helfen dir weiter.',
        button: 'Koch finden',
      },
      join: {
        eyebrow: 'Für Köche',
        h3: 'Bist du Koch und arbeitest in den Niederlanden?',
        body: 'Bewirb dich für das Makers Barn Verzeichnis.',
        button: 'Bewerben',
      },
    },
    crossLink: {
      label: 'Zusammenarbeit mit einem Koch? Unser Leitfaden →',
    },
  },
} as const
