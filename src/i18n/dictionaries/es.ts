import type { Dictionary } from '../types'

/**
 * Spanish translations.
 *
 * NOT ACTIVELY MAINTAINED. When adding new dictionary keys, copy the EN strings
 * verbatim into this file to satisfy the `Dictionary` type. Do not invest time
 * in proper Spanish translations for new copy. (See CLAUDE.md > i18n.)
 */
export const es: Dictionary = {
  nav: {
    home: 'Inicio',
    about: 'Sobre nosotros',
    facilities: 'Instalaciones',
    experiences: 'Únete como huésped',
    surroundings: 'Alrededores',
    contact: 'Contacto',
    book: 'Reservar',
  },

  hero: {
    eyebrow: 'Bienvenido a',
    emphasis: 'The MakersBarn',
    subtitle: 'Un hogar para tu retiro',
    subtitleBreak: '',
  },

  heroDetails: {
    title: 'Un lugar acogedor e íntimo para retiros y encuentros',
    subtitle: 'En el campo neerlandés, rodeado de naturaleza.',
    body: 'Un espacio de retiro con sabor a hogar, entre campos y cielos abiertos. Pensado para acompañar un trabajo hondo y transformador con calidez, sencillez y belleza. Tanto si organizas un retiro de yoga, un taller de bienestar o un encuentro creativo, este lugar se amolda a tu visión.',
    primaryCtaLabel: 'Descubre los espacios',
    secondaryCtaLabel: 'Planea tu retiro',
    metaItems: [
      'Espacio para grupos íntimos de hasta 20 personas',
      'Sauna y naturaleza a la puerta',
      'Ubicado en el campo neerlandés',
    ],
  },

  contact: {
    pageTitle: 'Planea tu retiro',
    metaTitle: 'Contacto',
    metaDescription:
      'Escríbenos a MakersBarn. Nos encantará ayudarte a preparar tu retiro, taller o encuentro creativo.',
    introText:
      `Cuéntanos. Tanto si tienes en mente un retiro o un taller como si quieres conocer mejor Maker's Barn, aquí estamos.`,
    formTitle: 'Escríbenos',
    labels: {
      name: '¡Hola! Me llamo...',
      email: 'y puedes escribirme a...',
      phone: 'o llamarme al...',
      message: '¿En qué podemos ayudarte?',
    },
    placeholders: {
      name: 'Tu nombre...',
      email: 'Tu correo...',
      phone: 'Tu teléfono...',
      message: 'Lo que te apetezca contarnos :)',
    },
    buttons: {
      submit: 'Enviar',
      submitting: 'Enviando...',
    },
    messages: {
      success: '¡Gracias por tu mensaje! Te respondemos pronto.',
      emailFailed: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo en un rato.',
      unexpectedError: 'Algo no ha ido bien. Inténtalo de nuevo en un rato.',
      validationError: 'Revisa los datos y vuelve a intentarlo.',
      rateLimited: 'Demasiados intentos. Espera un momento antes de volver a probar.',
      loading: 'Enviando...',
    },
    emailAlternative: {
      text: '¿Prefieres el correo? Escríbenos directamente a',
    },
    whatsappAlternative: {
      text: 'O mándanos un WhatsApp',
    },
  },

  unifiedContact: {
    pageTitle: 'Hablemos',
    pageSubtitle:
      'Tanto si tienes en mente un retiro como si solo quieres preguntarnos algo, aquí estamos. Elige cómo prefieres escribirnos.',
    selectorAriaLabel: 'Opciones de contacto',
    intentSelector: {
      questionLabel: 'Hacer una pregunta',
      questionSublabel: 'Consulta rápida',
      bookingLabel: 'Pedir un presupuesto',
      bookingSublabel: 'Sin compromiso',
    },
    mapTitle: `Mapa con la ubicación de Maker's Barn`,
    questionFormImageAlt: 'Banco acogedor en el alojamiento Hay House',
  },

  booking: {
    pageTitle: 'Reserva tu retiro',
    metaTitle: 'Reserva tu retiro',
    metaDescription:
      'Reserva tu retiro en The Makers Barn. Elige las fechas, el tamaño del grupo y las opciones de alojamiento para tu escapada al campo.',
    introText:
      '¿Listo para preparar tu retiro? Rellena el formulario con tus preferencias y te volvemos con la disponibilidad y un presupuesto a medida.',
    formTitle: 'Solicitud de reserva de retiro',
    progressLabel: 'Progreso de la reserva',
    sections: {
      contact: 'Datos de contacto',
      retreat: 'Detalles del retiro',
      dates: 'Fechas preferidas',
      groupSize: 'Tamaño del grupo',
      accommodation: 'Alojamiento y catering',
      extraInfo: 'Información adicional',
    },
    steps: {
      contact: 'Contacto',
      retreat: 'Fechas',
      details: 'Detalles',
      review: 'Finalizar',
    },
    stepDescriptions: {
      contact: 'Empecemos por tus datos para poder responderte.',
      retreat: 'Cuéntanos cómo es tu retiro: tipo, fechas y duración.',
      details: 'Cuéntanos el tamaño del grupo y tus preferencias de alojamiento.',
      review: 'Añade lo que quieras contarnos antes de enviar.',
    },
    validation: {
      nameRequired: 'Escribe tu nombre',
      emailRequired: 'Escribe tu correo electrónico',
      emailInvalid: 'Escribe un correo electrónico válido',
      retreatTypeOtherRequired: 'Cuéntanos qué tipo de retiro tienes en mente',
    },
    labels: {
      name: 'Tu nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      startDate: 'Fecha de inicio preferida',
      duration: 'Duración (días)',
      flexibleDates: 'Tengo flexibilidad con las fechas',
      flexibleDatesText: 'Cuéntanos qué flexibilidad tienes',
      minGroupSize: 'Tamaño mínimo del grupo',
      maxGroupSize: 'Tamaño máximo del grupo',
      retreatType: 'Tipo de retiro',
      retreatTypeOther: 'Cuéntanos cuál',
      accommodationPreferences: 'Preferencias de alojamiento',
      cateringNeeded: 'Nos interesa el catering',
      cateringDetails: 'Detalles del catering',
      extraInfo: '¿Algo más que quieras contarnos?',
    },
    placeholders: {
      name: 'Tu nombre y apellidos',
      email: 'tu@email.com',
      phone: '+31 6 12345678',
      duration: 'p. ej., 3',
      flexibleDatesText: 'p. ej., también nos vale la semana siguiente, o un retiro más corto de 2 días...',
      minGroupSize: 'Mín',
      maxGroupSize: 'Máx',
      retreatTypeOther: 'Describe tu tipo de retiro...',
      accommodationPreferences: 'p. ej., necesitamos 3 habitaciones privadas y el resto puede ser compartido...',
      cateringDetails: 'p. ej., solo desayuno, pensión completa, opciones vegetarianas...',
      extraInfo: 'p. ej., necesidades de accesibilidad, equipo concreto, peticiones especiales...',
      selectDate: 'Elige una fecha',
    },
    retreatTypes: {
      privateGroup: 'Retiro privado/grupal',
      yoga: 'Retiro de yoga',
      workshop: 'Taller',
      other: 'Otro',
    },
    cateringOptions: {
      yes: 'Sí',
      no: 'No',
    },
    reviewLabels: {
      contact: 'Contacto',
      retreat: 'Retiro',
      group: 'Grupo',
      catering: 'Catering',
      notProvided: 'No indicado',
    },
    datePicker: {
      unavailable: 'No disponible',
      dateUnavailable: 'Esta fecha no está disponible',
    },
    helpText: {
      startDate: 'Elige tu fecha de llegada preferida',
      duration: '¿Cuántos días dura el retiro?',
      accommodationIntro: 'Esto es lo que tenemos:',
      accommodationCosmos: 'Cabaña Cosmos: 1 habitación privada (para 2-3 personas)',
      accommodationGroup: 'Edificio Horizon: varias habitaciones (para 10-12 personas)',
    },
    buttons: {
      submit: 'Enviar solicitud',
      submitting: 'Enviando...',
      next: 'Continuar',
      back: 'Atrás',
    },
    messages: {
      success: '¡Gracias por tu solicitud! Te respondemos en breve.',
      emailFailed: 'No hemos podido enviar tu solicitud. Inténtalo de nuevo en un rato.',
      unexpectedError: 'Algo no ha ido bien. Inténtalo de nuevo en un rato.',
      validationError: 'Revisa los datos y vuelve a intentarlo.',
      rateLimited: 'Demasiados intentos. Espera un momento antes de volver a probar.',
      loading: 'Enviando...',
    },
    alert: {
      title: 'Esta página es para quienes organizan un retiro',
      description:
        'Pensada para grupos de 6 personas o más. ¿Quieres unirte a un retiro ya organizado o tienes otra pregunta?',
      joinRetreatLink: 'Ver otras opciones',
      contactLink: 'Escríbenos',
    },
    success: {
      title: '¡Solicitud recibida!',
      subtitle: 'Gracias por pensar en The Makers Barn para tu retiro',
      description:
        'Hemos recibido tu solicitud y nos hace mucha ilusión ayudarte a montar un retiro inolvidable.',
      whatNext: '¿Y ahora qué?',
      steps: [
        'Revisamos tu solicitud en 24-48 horas',
        'Te mandamos un presupuesto a medida por correo',
        'Si quieres, concertamos una llamada para hablar de los detalles',
      ],
      newRequestButton: 'Enviar otra solicitud',
      homeButton: 'Volver al inicio',
    },
  },

  footer: {
    getInTouch: 'Contacta con nosotros',
    followUs: 'Síguenos',
    tagline: 'Where creativity meets tranquility',
    copyright: 'The MakersBarn.',
    viewLocation: 'Ver ubicación',
  },

  about: {
    title: 'Sobre nosotros',
    intro: `The MakersBarn nació como punto de encuentro para Makers de todo tipo: carpinteros, gente del mundo corporativo, artistas y soñadores. Por el camino nos dimos cuenta de que lo que la gente más necesitaba no era solo un taller, sino un lugar donde bajar el ritmo. Y en eso nos convertimos.`,
    secondary: `Creemos que dentro de cada persona vive un Maker. Lo llevamos en el corazón. Ya sea creando algo con las manos, haciendo las paces o tejiendo recuerdos. Reunirse, el trabajo transformador, compartir y conectar forman parte esencial de ser Maker.`,
    tertiary: `Los tres nos juntamos con una visión y con la necesidad de escapar del ruido de la ciudad. Una preciosa granja de los años 20, nuestro amor por la tierra y las ganas de crear alojamientos con alma han dado lugar a un sitio donde plantas, animales y personas se sienten en casa.`,
    fourth: `Si estás pensando en organizar tu próximo retiro, unirte a uno o simplemente disfrutar de unos días tranquilos, MakersBarn te espera.`,
    teamTitle: 'Conoce al equipo',
    metaTitle: 'Sobre nosotros',
    metaDescription:
      'Conoce al equipo de MakersBarn. Nuestra misión: crear un refugio donde makers, artistas y soñadores se encuentren y se inspiren.',
    cta: '¡Nos encanta compartir nuestros sitios favoritos! ¿Quieres recomendaciones de rutas, planes locales o rincones escondidos? Solo tienes que pedírnoslo.',
    ctaButton: 'Escríbenos',
  },

  facilities: {
    title: 'Instalaciones',
    intro: `Alquila los espacios que necesites para tu retiro, masterclass o aventura creativa. Jardín privado, una hooischuur (granero de heno) reformada, 14 camas, sitio para tiendas y autocaravanas, y toda la calma que puedas pedir. También te echamos una mano para organizar el catering a tu medida.`,
    metaTitle: 'Instalaciones',
    metaDescription:
      'Alquila los espacios que necesitas en MakersBarn: jardín privado, granero de heno reformado, 14 camas, sitio para tiendas y autocaravanas, y catering a medida.',
    stats: [
      { number: '1200+', description: 'Árboles plantados en la finca' },
      { number: '13.000+ m²', description: 'De terreno privado, con piscina natural, sauna y círculo de fuego.' },
      { number: '∞', description: 'Posibilidades infinitas' },
    ],
    categories: {
      groupAccommodation: 'Alojamiento en grupo',
      workshopSpace: 'Espacio para talleres',
      outdoors: 'Al aire libre',
    },
    ctaTitle: '¿Listo para preparar tu retiro?',
    ctaSubtitle: 'Te ayudamos a montar una experiencia inolvidable para tu grupo.',
    ctaButton: 'Reserva tu retiro',
    carousel: {
      previousImage: 'Imagen anterior',
      nextImage: 'Imagen siguiente',
      viewFullscreen: 'Ver imagen en pantalla completa',
      goToImage: 'Ir a la imagen',
      imageNavigation: 'navegación de imágenes',
    },
    items: {
      hayHouse: {
        title: 'Sala de práctica Hay House',
        description:
          'Un granero de heno encantador con sitio para yoga, sesiones de respiración y mucho más. Más bonito todavía cuando entra el sol y dibuja reflejos de colores que hipnotizan.',
        features: ['65+ m² de espacio', 'Suelo radiante', 'Esterillas y accesorios de yoga', 'Equipo de sonido'],
      },
      cosmos: {
        title: 'The Cosmos',
        description:
          'Una cabaña de madera con estufa de leña. Acogedora como pocas y con un punto de lujo. Terraza privada con una de las mejores vistas de los Países Bajos.',
        features: ['60 m²', 'Cama doble o dos individuales', 'Sofá cama', 'Ducha', 'Cocina'],
      },
      horizon: {
        title: 'Horizon',
        description:
          'Antiguo granero convertido en alojamiento de lujo. Zona de descanso y habitaciones con baño privado o compartido. Cocina en la planta de arriba.',
        features: [
          'Habitación de 3 camas con ducha compartida',
          'Habitación de 2 camas con ducha privada',
          'Habitación privada con ducha compartida',
          'Buhardilla amplia (2-4 camas, ducha)',
          'Espacio en la buhardilla para practicar en el interior',
        ],
      },
      sauna: {
        title: 'Sauna, jacuzzi y círculo de fuego',
        description:
          'Relájate y recárgate en nuestra sauna privada, el jacuzzi y la zona de círculo de fuego. El cierre perfecto después de un día de trabajo creativo o talleres.',
      },
      pond: {
        title: 'Piscina natural',
        description:
          'Una piscina natural rodeada de vegetación y fauna local. Perfecta para darse un chapuzón o dejarse llevar por los sonidos tranquilos del entorno.',
      },
      inBetween: {
        title: 'Todo lo que hay en medio',
        description:
          'Las instalaciones son la base de un buen retiro, pero son los pequeños detalles de en medio los que hacen que un sitio sea de verdad especial.',
        features: ['Senderos preciosos', '1000+ árboles', 'Casa del té', 'Zona de aves', 'Vistas amplias'],
      },
    },
  },

  experiences: {
    metaTitle: 'Experiencias',
    metaDescription: 'Encuentra tu retiro en MakersBarn. Reserva un retiro de yoga a solas, alquila nuestros alojamientos o únete a un retiro de fin de semana en grupo.',
    title: 'Experiencias',
    intro: 'Si buscas soledad, te apetece montar tu propia escapada o quieres sumarte a un retiro abierto a otras personas, aquí hay algo para ti.',
    createExperience: {
      title: 'Monta tu propia experiencia',
      subtitle: '¿No vas a organizar un retiro? Hay muchas otras formas de disfrutar de unos días con nosotros. Apúntate a un retiro privado o en dúo, ven con un grupo de amigos o regálate descanso reservando una de nuestras casas. También puedes unirte a alguno de los retiros que organizamos.',
      alternativeText: '¿Buscas otra cosa?',
      alternativeCta: 'Escríbenos para ver más opciones',
    },
    soloRetreat: {
      title: 'Retiro de yoga en solitario o en dúo',
      description: 'Una experiencia de retiro a tu medida en la cabaña Cosmos. Yoga personalizado, sauna, jacuzzi y calma total para tu camino personal.',
      features: [
        'Paquetes de 2-3 noches',
        'Sesiones de yoga a medida',
        'Acceso a sauna y jacuzzi',
        'Desayuno fresco incluido',
      ],
      ctaLabel: 'Descubre el retiro en solitario',
    },
    bookingPlatforms: {
      airbnb: 'Reserva en Airbnb',
      natuurhuisje: 'Reserva en Natuurhuisje',
    },
    cabins: {
      cosmos: {
        title: 'Reserva la cabaña Cosmos',
        description: 'Una cabaña de madera con estufa de leña, acogedora como pocas y con algunas de las mejores vistas de los Países Bajos. Pensada para parejas o dúos que buscan una escapada íntima cerca de la naturaleza.',
        features: [
          'Estufa de leña y terraza privada',
          'Acceso a jacuzzi y sauna',
          'Sesiones de yoga a petición',
          'Masaje disponible',
          'Catering a petición',
        ],
      },
      horizon: {
        title: 'Reserva el loft Horizon',
        description: 'Un loft de lujo recién construido, con acabados premium y vistas al campo. Cocina abierta, ducha de lluvia y un pabellón acristalado que asoma a 13.000 m² de terreno común con prados de flores silvestres.',
        features: [
          'Acabados premium y ducha de lluvia',
          'Acceso a la sauna',
          'Bicicleta gratuita',
          'Piscina natural y zona de fuego',
          'Catering a petición',
        ],
      },
    },
    togetherRetreat: {
      title: 'Retiro entre amigos',
      description: 'Una escapada todo incluido con amigos. Yoga, talleres creativos, buenas comidas y conexiones con sentido en un entorno precioso.',
      features: [
        'Experiencia todo incluido',
        'Yoga y talleres creativos',
        'Comidas de inspiración ayurvédica',
        'Acceso exclusivo para el grupo',
      ],
      ctaLabel: 'Descubre los retiros en grupo',
    },
    featuredRetreats: {
      title: 'Retiros destacados',
      subtitle: 'Apúntate a alguno de nuestros próximos retiros',
      bookNow: 'Reservar',
      spotsLeft: 'plazas disponibles',
      fullyBooked: 'Completo',
    },
    ctaTitle: '¿No sabes qué experiencia te encaja?',
    ctaSubtitle: 'Escríbenos y te ayudamos a dar con la opción que mejor se adapta a ti.',
    ctaButton: 'Escríbenos',
  },

  location: {
    metaTitle: 'Ubicación y alrededores',
    metaDescription: 'The Makers Barn está en pleno Overijssel, rodeado de naturaleza, ciudades históricas y un sinfín de planes al aire libre.',
    title: 'Nuestro entorno',
    intro: 'The Makers Barn está en el corazón de Overijssel, una de las provincias más bonitas y verdes de los Países Bajos. Entre bosques, ríos y horizontes abiertos, hay muchísimo por descubrir.',
    surroundings: `Andando se llega al «Kasteel Nijenhuis», un castillo histórico con museo y unos jardines de esculturas impresionantes. Las granjas de la zona ofrecen productos frescos y los pueblos con encanto salpican el campo. Para los amantes del bienestar, la sauna premium «Sauna Swoll» queda a solo 15 minutos.`,
    hiking: 'La zona se presta al senderismo y a la bici: rutas que cruzan reservas naturales, bordean el río IJssel y suben al espectacular parque nacional Sallandse Heuvelrug. Dejamos bicis gratis a nuestros huéspedes para que exploren a su aire.',
    cities: 'Las ciudades hanseáticas históricas como Zwolle, Deventer o Kampen quedan cerca en tren (la estación está a 10 minutos en bici) o en coche. Cada una guarda una historia rica, una arquitectura preciosa y una cultura local muy viva.',
    cta: 'Escríbenos para saber más.',
    ctaButton: 'Escríbenos',
  },

  shantiDevaRetreat: {
    metaTitle: 'Retiro budista tibetano Shanti Deva',
    metaDescription: 'Únete a Gen La Geshe Pema Dorjee en un retiro budista de 6 días en el campo neerlandés. Estudio del budismo tibetano con meditación, enseñanzas y comidas vegetarianas incluidas.',
    backToExperiences: 'Volver a Experiencias',

    hero: {
      title: 'Retiro budista tibetano Shanti Deva',
      subtitle: 'Estudio del budismo tibetano',
      withTeachers: 'con Gen La Geshe Pema Dorjee y el respetado monje Lobsang',
      dailyTime: 'De 7:00 a 20:00 todos los días',
      bookNow: 'Reserva tu plaza',
    },

    dates: {
      title: 'Fechas disponibles',
      firstRetreat: 'Primer retiro',
      secondRetreat: 'Segundo retiro',
      duration: '5 noches (6 días)',
    },

    teacher: {
      sectionTitle: '¿Quién es Geshe Pema Dorjee?',
      biography: `Geshe Pema Dorjee nació en Tíbet y huyó con su familia en 1959, criándose en Dharamsala (India). Estudió filosofía budista y en 1995 recibió el grado de Geshe, el título académico más alto del budismo tibetano. Durante más de 20 años fue profesor y director del Tibetan Children's Village. A petición de Su Santidad el Dalai Lama, fundó el Bodong Research Center y un monasterio en Katmandú. También ha impulsado importantes proyectos humanitarios: escuelas, orfanatos, sistemas de agua y ayuda tras los terremotos de Nepal. Desde 1997 enseña por todo el mundo, conocido por su claridad, su calidez y su compasión.`,
      gesheTitle: 'Geshe',
      monkTitle: 'Respetado monje',
    },

    details: {
      title: 'Detalles del retiro',
      location: 'Ubicación',
      locationDescription: 'Una granja en el campo neerlandés',
      address: 'Dirección de la granja',
      accessibility: 'Cómo llegar',
      accessibilityItems: {
        carFromZwolle: '15 minutos en coche desde Zwolle (1 h 15 min en tren desde el aeropuerto de Schiphol, Ámsterdam)',
        freePickup: 'Recogida gratuita en la estación de tren de Zwolle (14:00-16:00)',
        sharedTransport: 'Transporte compartido de vuelta a la estación al terminar el retiro: ~10 € por persona',
      },
    },

    schedule: {
      title: 'Programa diario',
      arrivalDay: 'Día de llegada',
      studyDays: 'Días de estudio',
      finalDay: 'Último día',
      specialActivity: 'Uno de los días haremos un taller de cocina de momos tibetanos.',
      activities: {
        arrivalCheckin: 'Llegada y entrada en la habitación',
        farmTour: 'Recorrido por la granja',
        dinner: 'Cena',
        introProgram: 'Presentación y repaso del programa',
        guidedMeditation: 'Meditación guiada',
        breakfast: 'Desayuno',
        morningTeaching: 'Enseñanza matinal (con pausa corta)',
        lunch: 'Comida',
        afternoonTeaching: 'Enseñanza de tarde (con pausa corta)',
        qaSession: 'Sesión de preguntas y respuestas',
        closingSession: 'Sesión de cierre y preguntas',
        freeTime: 'Tiempo libre',
        checkout: 'Salida',
      },
    },

    included: {
      title: 'Qué incluye',
      accommodation: 'Alojamiento',
      accommodationOptions: {
        duration: '5 noches (6 días)',
        doubleRooms: 'Habitaciones dobles',
        sharedRooms: 'Habitaciones para 3-4 personas',
        singleRoom: 'Habitación individual',
        tentCaravan: 'Posibilidad de quedarse en tienda o caravana a precio reducido',
      },
      servicesTitle: 'Servicios',
      services: {
        beddingTowels: 'Ropa de cama y toallas (no se incluye toalla para la piscina ni la sauna)',
        vegetarianMeals: '3 comidas vegetarianas al día, además de bebidas y picoteo',
        farmFacilities: 'Acceso a todas las instalaciones: jacuzzi exterior, sauna, piscina natural y más',
      },
    },

    pricing: {
      title: 'Precios',
      totalPrice: '640 €',
      perParticipant: 'por participante (impuestos incluidos)',
      breakdown: 'Desglose del precio',
      breakdownItems: {
        accommodation: 'Alojamiento',
        meals: 'Comidas',
        venueRental: 'Parte del alquiler del espacio',
        teacherSupport: 'Aporte para el viaje y la estancia de Geshe Pema Dorjee y el monje Lobsang',
      },
      paymentTerms: 'Condiciones de pago',
      paymentItems: {
        depositPayment: 'Primer pago (depósito): 140 € al inscribirse',
        secondPayment: 'Segundo pago: 500 €, cuatro meses antes del retiro',
      },
      cancellation: 'Política de cancelación',
      cancellationItems: {
        fourMonthsRefund: 'Hasta 4 meses antes del inicio: reembolso íntegro del depósito',
        afterFullPayment: 'Tras el segundo pago (pago completo): reembolso del 25 %',
        replacementRefund: 'Si encuentras a alguien que ocupe tu plaza: reembolso íntegro',
      },
    },

    registration: {
      title: '¿Te animas?',
      subtitle: 'Las plazas son limitadas. Reserva la tuya hoy.',
      participantRange: '10-15 participantes',
      contact: '¿Tienes dudas? Escribe directamente a quienes organizan el retiro',
      whatsapp: 'WhatsApp',
      email: 'Correo',
      registerButton: 'Inscribirse',
    },
  },

  impressionCarousel: {
    kicker: 'Un pequeño avance',
    title: 'Baja el ritmo, mira a tu alrededor.',
    subtitle:
      'Descubre la belleza de vivir despacio. Cada momento aquí invita a parar, respirar y volver a lo que de verdad importa.',
    facilitiesButton: 'Descubre nuestras instalaciones',
    previousImage: 'Imagen anterior',
    nextImage: 'Imagen siguiente',
    carouselNavigation: 'Navegación del carrusel',
    viewFullscreen: 'Ver imagen en pantalla completa',
    goToSlide: 'Ir a la diapositiva',
  },

  impressionPolaroids: {
    kicker: 'Un pequeño avance',
    title: 'Un lugar para crear recuerdos que se quedan',
    subtitle:
      'Espacios para concentrarse, pasear, echarse una siesta, escribir, pensar y estar juntos. Una pequeña muestra de cómo se siente un retiro aquí.',
  },

  testimonials: {
    sectionTitle: 'Lo que dicen nuestros huéspedes',
    items: [
      {
        testimonial:
          'MakersBarn es pura magia. La combinación de un campo precioso, espacios cuidados y la sauna hizo que nuestro retiro fuera realmente transformador. Volvimos renovados y muy conectados.',
        author: 'Emma K. — Organizadora de retiros de bienestar',
      },
      {
        testimonial:
          'Es el espacio de retiro más bonito que he visto. La atención al detalle, el entorno natural y la atmósfera de calma crearon el ambiente perfecto para que nuestro equipo reconectara y se recargara.',
        author: 'Marcus T. — Coach de liderazgo',
      },
      {
        testimonial:
          'He organizado retiros por toda Europa y MakersBarn tiene algo verdaderamente especial. El entorno del campo neerlandés, la hospitalidad cercana y los espacios íntimos lo hacen perfecto para un trabajo hondo y con sentido.',
        author: 'Sophie L. — Facilitadora de talleres',
      },
      {
        testimonial:
          'Nuestro equipo creativo encontró justo lo que necesitábamos en MakersBarn. Un entorno inspirador, entre campos y naturaleza, que nos ayudó a desbloquearnos y a sacar nuestro mejor trabajo.',
        author: 'David R. — Director creativo',
      },
    ],
  },

  team: {
    members: [
      {
        name: 'Nana',
        description:
          'Nana es la cabeza y el corazón de The Makers Barn. Este lugar nació de su propio camino vital y de su proceso de sanación, y eso impregna la atmósfera que tratamos de crear aquí. Es quien te acompaña desde el primer mensaje y quien se ocupa de que tu retiro se sienta tal y como lo imaginas. Aporta una presencia tranquila y serena, alimentada por su amor por la naturaleza, el yoga, la vida consciente y los pequeños momentos creativos. Sabe lo que necesitan quienes facilitan retiros y los acompaña con claridad, cariño y sentido práctico.',
      },
      {
        name: 'Benny',
        description:
          'Maker de corazón, a Benny le encanta crear magia tanto en la pantalla como en los fogones. Con el mono como animal espiritual, pone curiosidad juguetona y alegría en todo lo que hace. Se mueve entre lo virtual y lo físico con presencia, y siempre está dispuesto a echar una mano, repartir cariño y charlar sobre lo que te ronda por la cabeza.',
      },
      {
        name: 'Noud',
        description:
          'Noud es el Maker más auténtico de los tres: CMO, Chief Maker Officer. Sus tornillos, sus clavos, sus árboles y su cariño son los que mantienen este sitio impecable. Cuando le queda tiempo libre, le gusta pasarlo en el taller, montando muebles preciosos.',
      },
    ],
  },

  common: {
    logoAlt: "Maker's Barn",
    selectLanguage: 'Seleccionar idioma',
    toggleMenu: 'Abrir menú',
    previousImage: 'Imagen anterior',
    nextImage: 'Imagen siguiente',
    closeGallery: 'Cerrar galería',
    imageNavigation: 'Navegación de imágenes',
    imageThumbnails: 'Miniaturas de imágenes',
    imageGallery: 'Galería de imágenes',
    floatingWhatsApp: {
      ariaLabel: 'Abrir chat de WhatsApp',
      tooltip: 'Escríbenos por WhatsApp',
    },
    lightbox: {
      closeGallery: 'Cerrar galería',
      previousImage: 'Imagen anterior',
      nextImage: 'Imagen siguiente',
      imageOf: 'de',
      viewImage: 'Ver imagen',
      current: 'actual',
      imageNavigation: 'Navegación de imágenes',
      imageThumbnails: 'Miniaturas de imágenes',
      keyboardInstructions:
        'Usa las flechas izquierda y derecha para pasar de una imagen a otra. Pulsa Escape para cerrar la galería.',
    },
  },

  metadata: {
    siteName: "The Maker's Barn",
    siteTitle: "The Maker's Barn — Retiro en el campo neerlandés",
    defaultDescription:
      'Dale a tu retiro el lugar que se merece. Sala de práctica de 60+ m², 14 camas y 1,3+ hectáreas de terreno privado en el campo neerlandés.',
    keywords: ['retiro', 'Países Bajos', 'campo', 'bienestar', 'espacio para talleres', 'retiro creativo'],
  },

  silos: {
    backToRetreats: 'Todos los tipos de retiro',
    hookEyebrow: 'En pocas palabras',
    factsTitle: 'Por qué The Makers Barn',
    scheduleTitle: 'Un día en la granja',
    faqTitle: 'Preguntas que vale la pena hacerse',
    primaryCta: 'Prepara tu retiro',
    secondaryCta: 'Hacer una pregunta',
    finalCtaPrimary: 'Pedir un presupuesto',
    finalCtaSecondary: 'Escríbenos',
    toolCtaTitle: 'Pricing your retreat?',
    toolCtaBody: 'Use our free calculator to plan your revenue, costs, profit margin, and breakeven occupancy.',
    toolCtaLabel: 'Open the calculator',
  },

  comparisonTeaser: {
    eyebrow: 'Comparando opciones',
    headline: 'Otra clase de lugar',
    ctaLabel: 'Lee la comparación entera',
  },

  retreats: {
    metaTitle: 'Organiza un retiro',
    metaDescription:
      'Organiza tu retiro en The Makers Barn. Una granja de los años 20 en Overijssel para yoga, meditación, escritura, equipos, respiración consciente y mucho más.',
    eyebrow: 'Organiza un retiro',
    title: 'Maneras tranquilas de aprovechar una granja de los años 20',
    intro:
      'The Makers Barn da soporte a formas de trabajo muy distintas. Elige el tipo de retiro que mejor encaje: en cada página entramos a fondo en lo que ofrecemos para ese tipo de grupo.',
    cardCta: 'Ver este tipo de retiro',
    helpTitle: '¿No sabes cuál te encaja?',
    helpBody:
      'Cuéntanos un poco sobre tu grupo y te ayudamos a dar con el formato. A veces no es ninguno de estos, y también está bien.',
    helpCta: 'Cuéntanos',
    cards: {
      yogaTeachers: {
        title: 'Profesores de yoga',
        pitch:
          'Una shala climatizada en el granero de heno para hasta 20 alumnos, una cocina pensada para encajar con tu horario y el resto resuelto.',
      },
      meditationRetreats: {
        title: 'Grupos de meditación y dharma',
        pitch:
          'Doce mil metros cuadrados de silencio cuidado, un poso de práctica acumulada y una cocina que respeta tu calendario de comidas.',
      },
      writingRetreats: {
        title: 'Retiros de escritura',
        pitch:
          'Para autores publicados y profesores de escritura que dirigen intensivos de varios días. Sala de taller, cabañas privadas y una mesa larga para las lecturas de la tarde.',
      },
      teamOffsites: {
        title: 'Jornadas de equipo fuera de la oficina',
        pitch:
          'Una granja de los años 20 reservada para tu equipo. Jornadas de estrategia que no saben a sala de reuniones.',
      },
      breathworkSoundHealing: {
        title: 'Respiración y sonido',
        pitch:
          'Un granero de heno climatizado que vibra con los cuencos, un círculo de fuego fuera y una sauna para lo que aflora después.',
      },
      coachingIntensives: {
        title: 'Intensivos de coaching',
        pitch:
          'Un espacio que sostiene a quienes facilitan intensivos con grupos de 8-12 personas. El trabajo que empieza cuando termina el taller, en un sitio capaz de acompañarlo.',
      },
      somaticTherapyRetreats: {
        title: 'Retiros somáticos y terapéuticos',
        pitch:
          'Para terapeutas titulados y profesionales del trabajo somático que dirigen residenciales con mirada al trauma. Recinto privado, sauna y campos pegados a la sala de práctica.',
      },
      wellnessDetoxRetreats: {
        title: 'Bienestar y detox',
        pitch:
          'Para coaches de bienestar, naturópatas y profesores de Ayurveda que dirigen programas de alimentación limpia, sauna y yoga en una granja privada de 1,3 hectáreas.',
      },
      circleRetreats: {
        title: 'Retiros de círculo',
        pitch:
          'Para quienes facilitan círculos de mujeres, hombres o mixtos. Un círculo de fuego, un granero y la privacidad que pide este trabajo.',
      },
      photographyWorkshops: {
        title: 'Talleres de fotografía',
        pitch:
          'Para fotógrafos profesionales que dirigen talleres de varios días. Cielos amplios, 1,3 hectáreas de luz cambiante y un campamento base que se encarga del resto.',
      },
    },
    comparisonCard: {
      eyebrow: '¿Sigues dudando?',
      headline: '¿Una granja privada o un local comercial?',
      body:
        'Si estás sopesando una pequeña granja privada frente a un hotel-retiro comercial, hemos escrito una comparación honesta a dos columnas. Capacidad, cocina, paisaje sonoro, lo que cambias y lo que ganas, sin discurso de ventas.',
      ctaLabel: 'Lee la comparación',
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
        hiresFacilitatorsQuestion: 'Do I pay other facilitators? (co-facilitators, guest teachers, or hired specialists)',
        hiresFacilitatorsYes: 'Yes',
        hiresFacilitatorsNo: 'No',
        facilitatorFeeLabel: 'Hired facilitator(s) fee',
        revenueSectionLabel: 'Revenue',
        revenueSectionDescription: 'How much you bring in.',
        costsSectionLabel: 'Costs',
        costsSectionDescription: 'What it costs you to run the retreat.',
        guestsLabel: 'Number of guests',
        guestsUnit: 'guests',
        nightsLabel: 'Retreat length',
        nightsUnit: 'nights',
        pricePerGuestLabel: 'Price per guest',
        venuePerNightLabel: 'Venue & accommodation per night',
        venueUnit: '/ night',
        foodPerGuestPerDayLabel: 'Food per guest per day',
        foodUnit: '/ guest / day',
        marketingAndOtherLabel: 'Marketing & other costs',
        advancedLabel: 'Extra costs',
        travelLabel: 'Travel & transport (yours)',
        insuranceLabel: 'Insurance',
        paymentFeePercentLabel: 'Payment processing fee',
        planningDaysLabel: 'Planning days',
        daysUnit: 'days',
        resetLabel: 'Restore example values',
      },
      results: {
        kicker: 'Net profit',
        headlineSentence: 'At {price}/person with {guests} guests, you\'ll net {profit} — a {margin} margin.',
        totalRevenue: 'Total revenue',
        totalCosts: 'Total costs',
        profitMargin: 'Profit margin',
        profitPerWorkday: 'Profit per workday',
        breakevenSentence: 'You need at least {guests} guests at {price} to break even.',
        breakevenImpossible: 'At this price, your variable costs exceed revenue per guest — you can\'t break even with more guests alone.',
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
