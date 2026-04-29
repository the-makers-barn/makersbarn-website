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
    contact: 'Kontakt',
    book: 'Buchen',
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
    title: 'Leise Wege, einen Hof aus den 1920ern zu nutzen',
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
      eyebrow: 'Free planning tools',
      title: 'Tools for retreat hosts',
      intro: 'Free, ungated tools to help you plan a retreat that actually works — at MakersBarn or anywhere else.',
      calendarTitle: 'The 12-Month Retreat Launch Calendar',
      calendarBody: 'Phases, milestones, and the realistic timeline. Pick your runway (3, 6, 9, or 12 months) and check off the work as you finish it.',
      calendarCtaLabel: 'Open the launch calendar',
      calculatorTitle: 'Retreat Profitability Calculator',
      calculatorBody: 'Plan your revenue, costs, profit margin, and breakeven occupancy before you commit to a venue.',
      calculatorCtaLabel: 'Open the calculator',
    },
  },

  tools: {
    hub: {
      metaTitle: 'Free Tools for Retreat Facilitators',
      metaDescription: 'Free, ungated calculators and tools for retreat facilitators — pricing, profitability, and planning.',
      eyebrow: 'Free Tools',
      title: 'Tools for retreat facilitators',
      intro: 'Plan, price, and run more profitable retreats. These tools are free, with no signup required, and work for any venue — including the one you\'re considering at MakersBarn.',
      toolCardCta: 'Open the tool',
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
          venue: 'Venue',
          food: 'Food',
          facilitator: 'Facilitator',
          marketing: 'Marketing & other',
          travel: 'Travel',
          insurance: 'Insurance',
          fees: 'Payment fees',
          profit: 'Profit',
          barAriaLabel: 'Cost and profit breakdown',
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
    related: {
      heading: 'Related calculators',
    },
    faq: {
      heading: 'Frequently asked questions',
    },
  },
} as const
