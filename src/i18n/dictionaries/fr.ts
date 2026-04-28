import type { Dictionary } from '../types'

export const fr: Dictionary = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    facilities: 'Espaces',
    experiences: 'Rejoindre en tant qu’invité·e',
    surroundings: 'Environs',
    contact: 'Contact',
    book: 'Réserver',
  },

  hero: {
    eyebrow: 'Bienvenue à',
    emphasis: 'The MakersBarn',
    subtitle: 'Un foyer pour ta retraite',
    subtitleBreak: '',
  },

  heroDetails: {
    title: 'Un lieu intime et ancré pour les retraites et les rassemblements',
    subtitle: 'Au cœur de la campagne néerlandaise, en pleine nature.',
    body: `Un lieu de retraite où l’on se sent chez soi, au milieu des champs et sous de grands ciels ouverts. Pensé pour accueillir un travail profond et transformateur, avec douceur, chaleur et beauté. Retraite de yoga, atelier de bien-être ou rassemblement créatif : la ferme s’adapte à ce que tu imagines.`,
    primaryCtaLabel: 'Découvrir les espaces',
    secondaryCtaLabel: 'Planifier ta retraite',
    metaItems: [
      'De la place pour des groupes intimes, jusqu’à 20 personnes',
      'Sauna et nature au pas de la porte',
      'Au cœur de la campagne néerlandaise',
    ],
  },

  contact: {
    pageTitle: 'Planifie ta retraite',
    metaTitle: 'Contact',
    metaDescription:
      'Contacte MakersBarn. On serait ravis d’échanger avec toi autour de ta retraite, de ton atelier ou de ton rassemblement créatif.',
    introText:
      `On serait ravis d’avoir de tes nouvelles. Que tu prépares une retraite, un atelier, ou que tu veuilles simplement en savoir plus sur Maker's Barn, on est là pour t’aider.`,
    formTitle: 'Écris-nous',
    labels: {
      name: 'Salut ! Moi, c’est...',
      email: 'tu peux me joindre à...',
      phone: 'ou m’appeler au...',
      message: 'Comment peut-on t’aider ?',
    },
    placeholders: {
      name: 'Ton prénom...',
      email: 'Ton e-mail...',
      phone: 'Ton numéro...',
      message: 'Tout ce qui te passe par la tête :)',
    },
    buttons: {
      submit: 'Envoyer',
      submitting: 'Envoi en cours...',
    },
    messages: {
      success: 'Merci pour ton message ! On te répond très vite.',
      emailFailed: 'L’envoi de ton message a échoué. Réessaie plus tard.',
      unexpectedError: 'Une erreur inattendue est survenue. Réessaie plus tard.',
      validationError: 'Vérifie tes informations et réessaie.',
      rateLimited: 'Trop de tentatives. Patiente un instant avant de réessayer.',
      loading: 'Envoi en cours...',
    },
    emailAlternative: {
      text: 'Tu préfères l’e-mail ? Écris-nous directement à',
    },
    whatsappAlternative: {
      text: 'Ou un petit message sur WhatsApp',
    },
  },

  unifiedContact: {
    pageTitle: 'Contacte-nous',
    pageSubtitle:
      'Que tu prépares une retraite ou que tu aies simplement une question, on est là pour t’aider. Choisis le moyen qui te convient le mieux.',
    selectorAriaLabel: 'Options de contact',
    intentSelector: {
      questionLabel: 'Poser une question',
      questionSublabel: 'Demande rapide',
      bookingLabel: 'Demander un devis',
      bookingSublabel: 'Sans engagement',
    },
    mapTitle: `Carte de localisation de Maker's Barn`,
    questionFormImageAlt: 'Banc cosy devant Hay House',
  },

  booking: {
    pageTitle: 'Réserve ta retraite',
    metaTitle: 'Réserve ta retraite',
    metaDescription:
      'Réserve ta retraite à The Makers Barn. Choisis tes dates, la taille du groupe et les options d’hébergement pour ton escapade idéale à la campagne.',
    introText:
      'Prêt·e à planifier ta retraite ? Remplis le formulaire ci-dessous avec tes préférences, et on te recontacte avec les disponibilités et un devis personnalisé.',
    formTitle: 'Demande de réservation de retraite',
    progressLabel: 'Progression de la réservation',
    sections: {
      contact: 'Coordonnées',
      retreat: 'Détails de la retraite',
      dates: 'Dates souhaitées',
      groupSize: 'Taille du groupe',
      accommodation: 'Hébergement & restauration',
      extraInfo: 'Informations complémentaires',
    },
    steps: {
      contact: 'Contact',
      retreat: 'Dates',
      details: 'Détails',
      review: 'Finaliser',
    },
    stepDescriptions: {
      contact: 'On commence par tes coordonnées pour pouvoir te joindre.',
      retreat: 'Parle-nous de ta retraite : type, dates et durée.',
      details: 'Indique la taille du groupe et tes préférences d’hébergement.',
      review: 'Ajoute tout ce qui peut nous être utile avant l’envoi.',
    },
    validation: {
      nameRequired: 'Indique ton nom',
      emailRequired: 'Indique ton adresse e-mail',
      emailInvalid: 'Indique une adresse e-mail valide',
      retreatTypeOtherRequired: 'Précise le type de ta retraite',
    },
    labels: {
      name: 'Ton nom',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      startDate: 'Date d’arrivée souhaitée',
      duration: 'Durée (jours)',
      flexibleDates: 'Mes dates sont flexibles',
      flexibleDatesText: 'Précise ta flexibilité',
      minGroupSize: 'Taille minimale du groupe',
      maxGroupSize: 'Taille maximale du groupe',
      retreatType: 'Type de retraite',
      retreatTypeOther: 'Précise',
      accommodationPreferences: 'Préférences d’hébergement',
      cateringNeeded: 'On aurait besoin de restauration',
      cateringDetails: 'Détails de la restauration',
      extraInfo: 'Autre chose à partager ?',
    },
    placeholders: {
      name: 'Ton nom complet',
      email: 'ton@email.com',
      phone: '+31 6 12345678',
      duration: 'ex. 3',
      flexibleDatesText: 'ex. la semaine suivante nous irait aussi, ou une retraite plus courte de 2 jours...',
      minGroupSize: 'Min',
      maxGroupSize: 'Max',
      retreatTypeOther: 'Décris le type de retraite...',
      accommodationPreferences: 'ex. il nous faut 3 chambres privatives, le reste peut être partagé...',
      cateringDetails: 'ex. petit-déjeuner uniquement, pension complète, options végétariennes...',
      extraInfo: 'ex. besoins d’accessibilité, matériel particulier, demandes spéciales...',
      selectDate: 'Choisis une date',
    },
    retreatTypes: {
      privateGroup: 'Retraite privée / de groupe',
      yoga: 'Retraite de yoga',
      workshop: 'Atelier',
      other: 'Autre',
    },
    cateringOptions: {
      yes: 'Oui',
      no: 'Non',
    },
    reviewLabels: {
      contact: 'Contact',
      retreat: 'Retraite',
      group: 'Groupe',
      catering: 'Restauration',
      notProvided: 'Non renseigné',
    },
    datePicker: {
      unavailable: 'Indisponible',
      dateUnavailable: 'Cette date n’est pas disponible',
    },
    helpText: {
      startDate: 'Choisis ta date d’arrivée préférée',
      duration: 'Combien de jours dure ta retraite ?',
      accommodationIntro: 'Nos espaces, en bref :',
      accommodationCosmos: 'La cabane Cosmos : 1 chambre privative (2 à 3 personnes)',
      accommodationGroup: 'Bâtiment Horizon : plusieurs chambres (10 à 12 personnes)',
    },
    buttons: {
      submit: 'Envoyer la demande',
      submitting: 'Envoi en cours...',
      next: 'Continuer',
      back: 'Retour',
    },
    messages: {
      success: 'Merci pour ta demande ! On revient vers toi très vite.',
      emailFailed: 'L’envoi de ta demande a échoué. Réessaie plus tard.',
      unexpectedError: 'Une erreur inattendue est survenue. Réessaie plus tard.',
      validationError: 'Vérifie tes informations et réessaie.',
      rateLimited: 'Trop de tentatives. Patiente un instant avant de réessayer.',
      loading: 'Envoi en cours...',
    },
    alert: {
      title: 'Cette page s’adresse aux organisateurs de retraite',
      description:
        'Elle est pensée pour les groupes de 6 personnes ou plus. Envie de rejoindre une retraite existante ou besoin d’autres infos ?',
      joinRetreatLink: 'Voir les autres options',
      contactLink: 'Contacte-nous',
    },
    success: {
      title: 'Demande reçue !',
      subtitle: 'Merci d’envisager The Makers Barn pour ta retraite',
      description:
        'On a bien reçu ta demande et on a hâte de t’aider à imaginer une retraite vraiment mémorable.',
      whatNext: 'Et maintenant ?',
      steps: [
        'On étudie ta demande sous 24 à 48 heures',
        'Tu reçois un devis personnalisé par e-mail',
        'On peut caler un appel pour parler de ce dont tu as besoin',
      ],
      newRequestButton: 'Envoyer une autre demande',
      homeButton: 'Retour à l’accueil',
    },
  },

  footer: {
    getInTouch: 'Contacte-nous',
    followUs: 'Suis-nous',
    tagline: 'Where creativity meets tranquility',
    copyright: 'The MakersBarn.',
    viewLocation: 'Voir le lieu',
  },

  about: {
    title: 'À propos',
    intro: `The MakersBarn a d’abord été un point de rencontre pour des Makers de toutes sortes : artisans du bois, professionnels de l’entreprise, artistes et rêveurs. Au fil du temps, on s’est rendu compte que ce dont les gens avaient le plus besoin, ce n’était pas un atelier. C’était un endroit pour ralentir. C’est ce qu’on est devenus.`,
    secondary: `On est convaincus qu’il y a un Maker en chacun de nous. Les humains sont des Makers dans l’âme. Façonner quelque chose de ses mains, cultiver la paix, fabriquer des souvenirs. Se rassembler, traverser un travail transformateur, partager et se relier : tout cela fait partie de ce qu’est un Maker.`,
    tertiary: `On s’est retrouvés à trois autour d’une même vision et d’une même envie : quitter l’agitation de la ville. Une magnifique ferme des années 1920, l’amour de la terre et le goût de façonner des lieux à part — tout cela a donné naissance à un endroit où plantes, animaux et humains se sentent bien.`,
    fourth: `Que tu veuilles organiser ta prochaine retraite, en rejoindre une, ou simplement passer un séjour paisible, MakersBarn t’ouvre ses portes.`,
    teamTitle: 'L’équipe',
    metaTitle: 'À propos',
    metaDescription:
      'Rencontre l’équipe de MakersBarn. Notre mission : un refuge où makers, artistes et rêveurs se relient et retrouvent l’inspiration.',
    cta: 'On adore partager nos endroits préférés. Envie de recommandations pour des balades, des activités locales ou des petits trésors cachés ? Demande-nous.',
    ctaButton: 'Contacte-nous',
  },

  facilities: {
    title: 'Espaces',
    intro: `Réserve les espaces dont tu as besoin pour ta retraite, ta masterclass ou tes projets créatifs. On met à ta disposition un jardin privé, une grange à foin réaménagée, 14 lits, un emplacement pour tentes et camping-cars, et tout le calme qu’il te faut. On t’accompagne aussi pour organiser la restauration selon tes envies.`,
    metaTitle: 'Espaces',
    metaDescription:
      'Réserve les espaces dont tu as besoin à MakersBarn. Jardin privé, grange à foin réaménagée, 14 lits, emplacement pour tentes et camping-cars, restauration sur demande.',
    stats: [
      { number: '1200+', description: 'Arbres plantés sur le domaine' },
      { number: '13 000+ m²', description: 'De terrain privé, un étang naturel, un sauna et un cercle de feu.' },
      { number: '∞', description: 'Possibilités infinies' },
    ],
    categories: {
      groupAccommodation: 'Hébergement de groupe',
      workshopSpace: 'Espace atelier',
      outdoors: 'Extérieur',
    },
    ctaTitle: 'Prêt·e à planifier ta retraite ?',
    ctaSubtitle: 'On t’aide à composer une expérience dont ton groupe se souviendra.',
    ctaButton: 'Réserver une retraite',
    carousel: {
      previousImage: 'Image précédente',
      nextImage: 'Image suivante',
      viewFullscreen: 'Voir l’image en plein écran',
      goToImage: 'Aller à l’image',
      imageNavigation: 'navigation des images',
    },
    items: {
      hayHouse: {
        title: 'Hay House — espace de pratique',
        description:
          'Une ancienne grange à foin pleine de charme, avec la place qu’il faut pour le yoga, les séances de respiration et bien plus. Encore plus belle quand le soleil traverse les vitraux et dépose ses reflets colorés sur les murs.',
        features: ['Plus de 65 m²', 'Sol chauffé', 'Tapis et accessoires de yoga', 'Sono'],
      },
      cosmos: {
        title: 'Le Cosmos',
        description:
          'Une cabane en bois avec poêle à bois. Douillette comme nulle part ailleurs, avec ce qu’il faut de petit luxe. Terrasse privée et l’une des plus belles vues qu’on puisse trouver aux Pays-Bas.',
        features: ['60 m²', 'Lit double ou deux lits simples', 'Canapé-lit', 'Douche', 'Cuisine'],
      },
      horizon: {
        title: 'Horizon',
        description:
          'Une ancienne grange transformée en hébergement haut de gamme. Coin détente, chambres avec douche privée ou partagée. Cuisine au premier étage.',
        features: [
          'Chambre de 3 lits avec douche partagée',
          'Chambre de 2 lits avec douche privée',
          'Chambre individuelle avec douche partagée',
          'Grand grenier (2 à 4 lits, douche)',
          'Espace de pratique sous les combles',
        ],
      },
      sauna: {
        title: 'Sauna, bain nordique et cercle de feu',
        description:
          'Détends-toi et ressource-toi dans notre sauna privé, le bain nordique et autour du cercle de feu. La meilleure manière de décompresser après une journée de travail créatif ou d’atelier.',
      },
      pond: {
        title: 'Étang de baignade',
        description:
          'Un étang naturel niché dans une végétation généreuse, animé par la faune locale. Parfait pour une baignade rafraîchissante ou pour profiter des sons paisibles de la nature.',
      },
      inBetween: {
        title: 'Et tout ce qu’il y a autour',
        description:
          'Les espaces, c’est essentiel pour une retraite. Mais ce sont les petites choses, entre deux, qui rendent un lieu vraiment particulier.',
        features: ['Beaux sentiers', 'Plus de 1 000 arbres', 'Maison de thé', 'Refuge pour les oiseaux', 'Vues dégagées'],
      },
    },
  },

  experiences: {
    metaTitle: 'Expériences',
    metaDescription:
      'Trouve l’expérience de retraite qui te ressemble à MakersBarn. Réserve une retraite de yoga en solo, loue un de nos hébergements, ou rejoins une retraite de groupe le temps d’un week-end.',
    title: 'Expériences',
    intro:
      'Que tu cherches la solitude, que tu veuilles créer ta propre escapade ou rejoindre une retraite déjà préparée avec d’autres, il y a forcément une expérience faite pour toi.',
    createExperience: {
      title: 'Crée ta propre expérience',
      subtitle:
        `Tu n’organises pas de retraite ? Il y a plein d’autres façons de profiter d’un séjour ici. Viens en retraite privée ou en duo, réunis un groupe d’amis, ou offre-toi simplement du repos en réservant l’une de nos maisons. Tu peux aussi rejoindre l’une des retraites qu’on accueille.`,
      alternativeText: 'Tu cherches autre chose ?',
      alternativeCta: 'Contacte-nous pour d’autres options',
    },
    soloRetreat: {
      title: 'Retraite de yoga solo / duo',
      description:
        'Une retraite sur mesure dans la cabane Cosmos. Séances de yoga adaptées, sauna, bain nordique et calme absolu pour ton chemin personnel.',
      features: [
        'Forfaits de 2 à 3 nuits',
        'Séances de yoga personnalisées',
        'Accès sauna et bain nordique',
        'Petit-déjeuner frais inclus',
      ],
      ctaLabel: 'Découvrir la retraite solo',
    },
    bookingPlatforms: {
      airbnb: 'Réserver sur Airbnb',
      natuurhuisje: 'Réserver sur Natuurhuisje',
    },
    cabins: {
      cosmos: {
        title: 'Réserver la cabane Cosmos',
        description:
          'Une cabane en bois avec poêle à bois, douillette comme nulle part ailleurs, posée devant l’une des plus belles vues qu’on puisse trouver aux Pays-Bas. Pour les couples ou les duos en quête d’une parenthèse au cœur de la nature.',
        features: [
          'Poêle à bois et terrasse privée',
          'Accès bain nordique et sauna',
          'Séances de yoga sur demande',
          'Massage sur demande',
          'Restauration sur demande',
        ],
      },
      horizon: {
        title: 'Réserver le loft Horizon',
        description:
          'Un loft de luxe récemment construit, finitions haut de gamme, vues sur la campagne. Cuisine ouverte, douche à l’italienne, et un pavillon vitré qui donne sur 13 000 m² de terrain partagé, avec des prairies de fleurs sauvages.',
        features: [
          'Finitions haut de gamme et douche à l’italienne',
          'Accès sauna',
          'Vélos à disposition',
          'Étang de baignade et cercle de feu',
          'Restauration sur demande',
        ],
      },
    },
    togetherRetreat: {
      title: 'Retraite entre amis',
      description:
        'Une escapade tout compris entre amis. Yoga, ateliers créatifs, bons repas et liens sincères dans un cadre magnifique.',
      features: [
        'Formule tout compris',
        'Yoga et ateliers créatifs',
        'Repas inspirés de l’Ayurveda',
        'Accès exclusif pour ton groupe',
      ],
      ctaLabel: 'Découvrir les retraites de groupe',
    },
    featuredRetreats: {
      title: 'Les retraites à l’affiche',
      subtitle: 'Rejoins l’une de nos prochaines retraites, déjà prêtes à t’accueillir',
      bookNow: 'Réserver',
      spotsLeft: 'places restantes',
      fullyBooked: 'Complet',
    },
    ctaTitle: 'Pas sûr·e de l’expérience qui te correspond ?',
    ctaSubtitle: 'Écris-nous, on t’aide à trouver ce qui te conviendra le mieux.',
    ctaButton: 'Contacte-nous',
  },

  location: {
    metaTitle: 'Lieu & environs',
    metaDescription:
      'The Makers Barn se trouve dans la magnifique province d’Overijssel, entouré de nature, de villes historiques et d’innombrables activités en plein air.',
    title: 'Nos environs',
    intro:
      'The Makers Barn est niché au cœur de l’Overijssel, l’une des provinces les plus belles et les mieux préservées des Pays-Bas. Entre forêts, rivières et grands paysages ouverts, tu n’auras que l’embarras du choix pour partir explorer.',
    surroundings:
      `À distance de marche, tu trouveras Kasteel Nijenhuis, un château historique qui abrite un musée et de splendides jardins de sculptures. Les fermes du coin proposent des produits frais, et de jolis villages ponctuent la campagne. Pour les amateurs de bien-être, le sauna haut de gamme Sauna Swoll est à seulement 15 minutes.`,
    hiking:
      'La région compte une multitude de sentiers de randonnée et de pistes cyclables qui traversent les réserves naturelles, longent l’IJssel et serpentent dans le superbe parc national du Sallandse Heuvelrug. On met des vélos à disposition pour que tu puisses partir explorer à ton rythme.',
    cities:
      'Les villes hanséatiques de Zwolle, Deventer et Kampen sont facilement accessibles en train (gare à 10 minutes à vélo) ou en voiture. Chacune a son histoire, sa belle architecture et sa culture locale bien vivante.',
    cta: 'Écris-nous pour en savoir plus.',
    ctaButton: 'Contacte-nous',
  },

  shantiDevaRetreat: {
    metaTitle: 'Retraite bouddhiste tibétaine Shanti Deva',
    metaDescription:
      'Rejoins Gen La Geshe Pema Dorjee pour une retraite bouddhiste de 6 jours dans la campagne néerlandaise. Étudie le bouddhisme tibétain : méditation, enseignements et repas végétariens inclus.',
    backToExperiences: 'Retour aux expériences',

    hero: {
      title: 'Retraite bouddhiste tibétaine Shanti Deva',
      subtitle: 'Étude du bouddhisme tibétain',
      withTeachers: 'avec Gen La Geshe Pema Dorjee et le vénérable moine Lobsang',
      dailyTime: 'De 7 h à 20 h, tous les jours',
      bookNow: 'Réserve ta place',
    },

    dates: {
      title: 'Dates disponibles',
      firstRetreat: 'Première retraite',
      secondRetreat: 'Deuxième retraite',
      duration: '5 nuits (6 jours)',
    },

    teacher: {
      sectionTitle: 'Qui est Geshe Pema Dorjee ?',
      biography:
        `Geshe Pema Dorjee est né au Tibet. Il a fui avec sa famille en 1959 et a grandi à Dharamsala, en Inde. Il a étudié la philosophie bouddhiste et reçu en 1995 le titre de Geshe — le plus haut grade académique du bouddhisme tibétain. Pendant plus de 20 ans, il a enseigné et dirigé le Tibetan Children's Village en tant que principal. À la demande de Sa Sainteté le Dalai Lama, il a fondé le Bodong Research Center et un monastère à Katmandou. Il a aussi mené de vastes projets humanitaires : écoles, orphelinats, systèmes d’adduction d’eau, secours après le tremblement de terre au Népal. Depuis 1997, il enseigne dans le monde entier, salué pour sa clarté, sa chaleur et sa compassion.`,
      gesheTitle: 'Geshe',
      monkTitle: 'Vénérable moine',
    },

    details: {
      title: 'Détails de la retraite',
      location: 'Lieu',
      locationDescription: 'Une ferme en pleine campagne, aux Pays-Bas',
      address: 'Adresse de la ferme',
      accessibility: 'Comment venir',
      accessibilityItems: {
        carFromZwolle: '15 minutes en voiture depuis Zwolle (1 h 15 en train depuis l’aéroport de Schiphol, Amsterdam)',
        freePickup: 'Navette gratuite depuis la gare de Zwolle (entre 14 h et 16 h)',
        sharedTransport: 'Trajet retour partagé jusqu’à la gare à la fin du séjour : environ 10 € par personne',
      },
    },

    schedule: {
      title: 'Programme quotidien',
      arrivalDay: 'Jour d’arrivée',
      studyDays: 'Jours d’étude',
      finalDay: 'Dernier jour',
      specialActivity: 'Un atelier de cuisine autour des momos tibétains est prévu pendant la retraite.',
      activities: {
        arrivalCheckin: 'Arrivée et installation en chambre',
        farmTour: 'Visite de la ferme',
        dinner: 'Dîner',
        introProgram: 'Introduction et présentation du programme',
        guidedMeditation: 'Méditation guidée',
        breakfast: 'Petit-déjeuner',
        morningTeaching: 'Enseignement du matin (avec courte pause)',
        lunch: 'Déjeuner',
        afternoonTeaching: 'Enseignement de l’après-midi (avec courte pause)',
        qaSession: 'Questions-réponses',
        closingSession: 'Session de clôture et questions-réponses',
        freeTime: 'Temps libre',
        checkout: 'Départ',
      },
    },

    included: {
      title: 'Ce qui est inclus',
      accommodation: 'Hébergement',
      accommodationOptions: {
        duration: '5 nuits (6 jours)',
        doubleRooms: 'Chambres doubles',
        sharedRooms: 'Chambres pour 3 à 4 personnes',
        singleRoom: 'Chambre individuelle',
        tentCaravan: 'Possibilité de dormir en tente ou en caravane à tarif réduit',
      },
      servicesTitle: 'Services',
      services: {
        beddingTowels: 'Linge de lit et serviettes (serviette piscine/sauna non incluse)',
        vegetarianMeals: '3 repas végétariens par jour + boissons et en-cas',
        farmFacilities: 'Accès à toutes les installations de la ferme : bain nordique extérieur, sauna, piscine écologique et bien plus',
      },
    },

    pricing: {
      title: 'Tarifs',
      totalPrice: '€640',
      perParticipant: 'par participant (taxes incluses)',
      breakdown: 'Détail du prix',
      breakdownItems: {
        accommodation: 'Hébergement',
        meals: 'Repas',
        venueRental: 'Part de location du lieu',
        teacherSupport: 'Soutien au voyage et au séjour de Geshe Pema Dorjee et du moine Lobsang',
      },
      paymentTerms: 'Conditions de paiement',
      paymentItems: {
        depositPayment: 'Premier versement (acompte) : 140 € à l’inscription',
        secondPayment: 'Second versement : 500 €, quatre mois avant la retraite',
      },
      cancellation: 'Annulation',
      cancellationItems: {
        fourMonthsRefund: 'Jusqu’à 4 mois avant le début : remboursement intégral de l’acompte',
        afterFullPayment: 'Après le second versement (paiement complet) : 25 % remboursés',
        replacementRefund: 'Si un·e remplaçant·e est trouvé·e : remboursement intégral',
      },
    },

    registration: {
      title: 'Prêt·e à nous rejoindre ?',
      subtitle: 'Les places sont limitées. Réserve la tienne dès maintenant.',
      participantRange: '10 à 15 participants',
      contact: 'Des questions ? Écris directement aux organisateurs de la retraite.',
      whatsapp: 'WhatsApp',
      email: 'E-mail',
      registerButton: 'S’inscrire maintenant',
    },
  },

  impressionCarousel: {
    kicker: 'Un aperçu',
    title: 'Ralentis, regarde autour de toi.',
    subtitle:
      'Goûte à la beauté du slow living. Chaque instant ici invite à faire une pause, à respirer et à se relier à ce qui compte vraiment.',
    facilitiesButton: 'Découvrir nos espaces',
    previousImage: 'Image précédente',
    nextImage: 'Image suivante',
    carouselNavigation: 'Navigation du carrousel',
    viewFullscreen: 'Voir l’image en plein écran',
    goToSlide: 'Aller à la diapositive',
  },

  impressionPolaroids: {
    kicker: 'Un aperçu',
    title: 'Un lieu pour fabriquer des souvenirs qui durent',
    subtitle:
      'Des espaces pour se concentrer, flâner, faire la sieste, écrire, prendre le temps de réfléchir, ou simplement être ensemble. Voici un aperçu de ce que pourrait être ta retraite.',
  },

  testimonials: {
    sectionTitle: 'Ce que nos invités en disent',
    items: [
      {
        testimonial:
          'MakersBarn, c’est de la magie pure. Cette campagne magnifique, ces espaces pensés avec soin, le sauna : tout cela a rendu notre retraite vraiment transformatrice. On en est repartis renouvelés, et profondément reliés.',
        author: 'Emma K. — Organisatrice de retraites bien-être',
      },
      {
        testimonial:
          'C’est le plus bel espace de retraite que j’aie connu. Le soin du détail, le cadre naturel et la sérénité des lieux ont offert exactement ce qu’il fallait à notre équipe pour se reconnecter et se ressourcer.',
        author: 'Marcus T. — Coach en leadership',
      },
      {
        testimonial:
          'J’ai animé des retraites dans toute l’Europe, et MakersBarn sort vraiment du lot. La campagne néerlandaise, l’accueil chaleureux et l’intimité des espaces : tout est réuni pour un travail profond, qui prend du sens.',
        author: 'Sophie L. — Animatrice d’ateliers',
      },
      {
        testimonial:
          'Notre équipe créative a trouvé exactement ce qu’il lui fallait à MakersBarn. Le cadre inspirant, les champs, la nature partout : tout cela nous a aidés à surmonter nos blocages créatifs et à donner le meilleur de nous-mêmes.',
        author: 'David R. — Directeur créatif',
      },
    ],
  },

  team: {
    members: [
      {
        name: 'Nana',
        description:
          `Nana est le cerveau et le cœur de The Makers Barn. Ce lieu est né de son propre chemin de vie et de son processus de guérison — c’est ce qui a façonné l’atmosphère qu’on essaie de cultiver ici. C’est la personne avec qui tu seras en contact dès le début, celle qui veille à ce que ta retraite ait exactement la couleur que tu imagines. Nana apporte une présence calme et ancrée, nourrie par son amour de la nature, du yoga, de la vie consciente et des petits moments créatifs. Elle sait ce dont les facilitateurs de retraite ont besoin, et les accompagne avec clarté, douceur et bon sens.`,
      },
      {
        name: 'Benny',
        description:
          `Maker dans l’âme, Benny adore faire naître de la magie aussi bien à l’écran qu’aux fourneaux. Avec le singe pour animal totem, il met de la curiosité joueuse et de la joie dans tout ce qu’il touche. Il navigue avec présence entre virtuel et réel, toujours prêt à donner un coup de main, à offrir un peu de bienveillance ou à discuter de ce qui te trotte dans la tête.`,
      },
      {
        name: 'Noud',
        description:
          'Noud est le plus Maker d’entre nous : CMO, Chief Maker Officer. Ce sont ses vis, ses clous, ses arbres et son amour qui font tenir la maison. Dès qu’il a un peu de temps, il file à l’atelier fabriquer de beaux meubles.',
      },
    ],
  },

  common: {
    logoAlt: `Maker's Barn`,
    selectLanguage: 'Choisir la langue',
    toggleMenu: 'Ouvrir le menu',
    previousImage: 'Image précédente',
    nextImage: 'Image suivante',
    closeGallery: 'Fermer la galerie',
    imageNavigation: 'Navigation des images',
    imageThumbnails: 'Miniatures',
    imageGallery: 'Galerie d’images',
    floatingWhatsApp: {
      ariaLabel: 'Ouvrir la discussion WhatsApp',
      tooltip: 'Écris-nous sur WhatsApp',
    },
    lightbox: {
      closeGallery: 'Fermer la galerie',
      previousImage: 'Image précédente',
      nextImage: 'Image suivante',
      imageOf: 'sur',
      viewImage: 'Voir l’image',
      current: 'actuelle',
      imageNavigation: 'Navigation des images',
      imageThumbnails: 'Miniatures',
      keyboardInstructions:
        'Utilise les flèches gauche et droite pour passer d’une image à l’autre. Appuie sur Échap pour fermer la galerie.',
    },
  },

  metadata: {
    siteName: `The Maker's Barn`,
    siteTitle: `The Maker's Barn — Retraite à la campagne aux Pays-Bas`,
    defaultDescription:
      'Offre à ta retraite la place qu’elle mérite. Salle de pratique de plus de 60 m², 14 lits, plus de 1,3 hectare de terrain privé en pleine campagne néerlandaise.',
    keywords: ['retraite', 'Pays-Bas', 'campagne', 'bien-être', 'lieu d’atelier', 'retraite créative'],
  },

  silos: {
    backToRetreats: 'Tous les types de retraite',
    hookEyebrow: 'En bref',
    factsTitle: 'Pourquoi The Makers Barn',
    scheduleTitle: 'Une journée à la ferme',
    faqTitle: 'Les questions à se poser',
    primaryCta: 'Planifie ta retraite',
    secondaryCta: 'Pose une question',
    finalCtaPrimary: 'Demander un devis',
    finalCtaSecondary: 'Contacte-nous',
    toolCtaTitle: 'Pricing your retreat?',
    toolCtaBody: 'Use our free calculator to plan your revenue, costs, profit margin, and breakeven occupancy.',
    toolCtaLabel: 'Open the calculator',
  },

  comparisonTeaser: {
    eyebrow: 'Comparer les options',
    headline: 'Un autre type de lieu',
    ctaLabel: 'Lire la comparaison complète',
  },

  retreats: {
    metaTitle: 'Organiser une retraite',
    metaDescription:
      'Organise ta retraite à The Makers Barn. Une ferme des années 1920 en Overijssel pour le yoga, la méditation, l’écriture, les équipes, le travail du souffle et bien plus.',
    eyebrow: 'Organiser une retraite',
    title: 'Des manières paisibles d’habiter une ferme des années 1920',
    intro:
      'The Makers Barn sait accueillir des travaux très différents. Choisis le type de retraite qui te correspond — chaque page entre dans le détail de ce qu’on propose pour ce genre de groupe.',
    cardCta: 'Voir ce type de retraite',
    helpTitle: 'Pas sûr·e de ce qui te correspond ?',
    helpBody:
      'Parle-nous un peu de ton groupe et on t’aidera à trouver la bonne forme — et parfois ce n’est aucune de ces propositions, c’est très bien aussi.',
    helpCta: 'Parle avec nous',
    cards: {
      yogaTeachers: {
        title: 'Professeurs de yoga',
        pitch:
          'Une shala dans la grange à foin chauffée, jusqu’à 20 élèves, une cuisine calée sur ton planning, et le reste pris en charge.',
      },
      meditationRetreats: {
        title: 'Méditation et groupes dharma',
        pitch:
          'Douze mille mètres carrés de silence tenu, un véritable ancrage dans la pratique, et une cuisine qui respecte tes horaires de repas.',
      },
      writingRetreats: {
        title: 'Retraites d’écriture',
        pitch:
          'Pour les auteurs publiés et les enseignants d’écriture qui animent des stages intensifs sur plusieurs jours. Espace d’atelier, cabines privées et une longue table pour les lectures du soir.',
      },
      teamOffsites: {
        title: 'Séminaires d’équipe',
        pitch:
          'Une ferme des années 1920 privatisée pour ton équipe. Des journées de stratégie qui n’ont rien à voir avec une salle de réunion.',
      },
      breathworkSoundHealing: {
        title: 'Travail du souffle et son',
        pitch:
          'Une grange à foin chauffée qui vibre quand les bols résonnent, un cercle de feu dehors, et un sauna pour ce qui remonte ensuite.',
      },
      coachingIntensives: {
        title: 'Stages intensifs de coaching',
        pitch:
          'Un cadre solide pour les coachs qui animent des stages intensifs en cohorte de 8 à 12 personnes. Le travail qui commence après l’atelier, dans un lieu qui sait le porter.',
      },
      somaticTherapyRetreats: {
        title: 'Retraites somatiques et thérapeutiques',
        pitch:
          'Pour les thérapeutes agréés et les praticien·ne·s somatiques qui animent des résidentiels en approche trauma-informée. Privatisation, sauna, champs tout autour de la grange de pratique.',
      },
      wellnessDetoxRetreats: {
        title: 'Bien-être et détox',
        pitch:
          'Pour les coachs bien-être, les naturopathes et les professeurs d’Ayurveda qui animent des programmes alimentation saine, sauna et yoga, dans une ferme privée de 1,3 hectare.',
      },
      circleRetreats: {
        title: 'Retraites en cercle',
        pitch:
          'Pour les facilitatrices et facilitateurs de cercles de femmes, d’hommes ou mixtes. Un cercle de feu, une grange, et l’intimité qu’exige ce genre de travail.',
      },
      photographyWorkshops: {
        title: 'Ateliers de photographie',
        pitch:
          'Pour les photographes professionnel·le·s qui animent des ateliers sur plusieurs jours. De grands ciels, 1,3 hectare de lumière changeante, et un camp de base qui s’occupe du reste.',
      },
    },
    comparisonCard: {
      eyebrow: 'Encore en train d’hésiter ?',
      headline: 'Une ferme privée ou un lieu commercial ?',
      body:
        'Si tu hésites entre une petite ferme privée et un hôtel-retraite commercial, on a écrit une comparaison honnête, point par point. Capacité, cuisine, ambiance sonore, ce que tu y perds et ce que tu y gagnes — sans baratin commercial.', 
      ctaLabel: 'Lire la comparaison',
    },
  },

  tools: {
    hub: {
      metaTitle: 'Free Tools for Retreat Facilitators',
      metaDescription: 'Free, ungated calculators and tools for retreat facilitators — pricing, profitability, and planning.',
      eyebrow: 'Free Tools',
      title: 'Tools for retreat facilitators',
      intro: "Plan, price, and run more profitable retreats. These tools are free, with no signup required, and work for any venue — including the one you’re considering at MakersBarn.",
      toolCardCta: 'Open the tool',
    },
    calculator: {
      inputs: {
        guestsLabel: 'Number of guests',
        guestsUnit: 'guests',
        nightsLabel: 'Retreat length',
        nightsUnit: 'nights',
        pricePerGuestLabel: 'Price per guest',
        venuePerNightLabel: 'Venue & accommodation per night',
        venueUnit: '/ night',
        foodPerGuestPerDayLabel: 'Food per guest per day',
        foodUnit: '/ guest / day',
        facilitatorFeeLabel: 'Facilitator compensation (your fee)',
        marketingAndOtherLabel: 'Marketing & other costs',
        advancedLabel: 'Advanced costs',
        coFacilitatorsLabel: 'Co-facilitators / guest teachers',
        travelLabel: 'Travel & transport (yours)',
        insuranceLabel: 'Insurance',
        paymentFeePercentLabel: 'Payment processing fee',
        planningDaysLabel: 'Planning days',
        daysUnit: 'days',
        resetLabel: 'Restore example values',
      },
      results: {
        kicker: 'Net profit',
        headlineSentence: "At {price}/person with {guests} guests, you’ll net {profit} — a {margin} margin.",
        totalRevenue: 'Total revenue',
        totalCosts: 'Total costs',
        profitMargin: 'Profit margin',
        profitPerWorkday: 'Profit per workday',
        breakevenSentence: 'You need at least {guests} guests at {price} to break even.',
        breakevenImpossible: "At this price, your variable costs exceed revenue per guest — you can’t break even with more guests alone.",
        breakdownLabels: {
          venue: 'Venue',
          food: 'Food',
          facilitator: 'Facilitator',
          marketing: 'Marketing & other',
          coFacilitators: 'Co-facilitators',
          travel: 'Travel',
          insurance: 'Insurance',
          fees: 'Payment fees',
          profit: 'Profit',
          barAriaLabel: 'Cost and profit breakdown',
        },
      },
      email: {
        heading: 'Email me my summary',
        placeholder: 'your@email.com',
        submit: 'Email summary',
        sending: 'Sending…',
        success: 'Sent! Check your inbox.',
        error: 'Could not send right now. Please try again.',
        optInLabel: 'Send me occasional retreat-pricing tips (no spam, easy unsubscribe)',
      },
      share: {
        heading: 'Share these numbers',
        intro: 'Send your draft to a co-facilitator, partner, or accountant to gut-check your assumptions.',
        copy: 'Copy link',
        copied: 'Copied!',
        whatsapp: 'Share on WhatsApp',
        whatsappMessage: 'These are my retreat numbers from the MakersBarn pricing calculator:',
      },
      makersbarnCta: {
        title: 'Considering MakersBarn for your retreat?',
        body: 'We tailor pricing to your group size and dates — request a custom quote. The numbers above stay private.',
        linkLabel: 'Request a custom quote',
      },
    },
    howTo: {
      heading: 'How to use this calculator',
    },
    related: {
      heading: 'Related calculators',
    },
    faq: {
      heading: 'Frequently asked questions',
    },
  },
} as const
