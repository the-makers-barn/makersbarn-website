import type { Dictionary } from '../types'

export const en: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    facilities: 'Facilities',
    experiences: 'Join as a guest',
    surroundings: 'Surroundings',
    tools: 'Free tools',
    contact: 'Contact',
    book: 'Book',
    hostARetreat: 'Host a Retreat',
  },

  hero: {
    eyebrow: 'Welcome to',
    emphasis: 'The MakersBarn',
    subtitle: 'A home for your retreat',
    subtitleBreak: '',
  },

  heroDetails: {
    title: 'A grounded, intimate location for retreats and gatherings',
    subtitle: 'In the Dutch countryside, surrounded by nature.',
    body: 'A retreat space that feels like home, surrounded by fields and big open skies. Designed to hold deep, transformative work with ease, warmth and beauty. Whether you\'re hosting a yoga retreat, a wellness workshop, or a creative gathering, our space adapts to your vision.',
    primaryCtaLabel: 'Explore the spaces',
    secondaryCtaLabel: 'Plan your retreat',
    metaItems: [
      'Space for intimate groups up to 20 people',
      'Sauna & nature on your doorstep',
      'Located in the Dutch countryside',
    ],
  },

  contact: {
    pageTitle: 'Plan Your Retreat',
    metaTitle: 'Contact',
    metaDescription:
      "Get in touch with MakersBarn. We'd love to hear from you about planning your retreat, workshop, or creative gathering.",
    introText:
      "We'd love to hear from you! Whether you're planning a retreat, workshop, or just want to learn more about Maker's Barn, we're here to help.",
    formTitle: 'Contact us',
    labels: {
      name: 'Hi! My name is...',
      email: 'and you can reach me at...',
      phone: 'or call me at...',
      message: 'How can we help you?',
    },
    placeholders: {
      name: 'Your name...',
      email: 'Your email...',
      phone: 'Your phone number...',
      message: 'Whatever your heart desires :)',
    },
    buttons: {
      submit: 'Submit',
      submitting: 'Sending...',
    },
    messages: {
      success: 'Thank you for your message! We will get back to you soon.',
      emailFailed: 'There was an issue sending your message. Please try again later.',
      unexpectedError: 'An unexpected error occurred. Please try again later.',
      validationError: 'Please check your input and try again.',
      rateLimited: 'Too many requests. Please wait a moment before trying again.',
      loading: 'Sending...',
    },
    emailAlternative: {
      text: 'Prefer email? Reach us directly at',
    },
    whatsappAlternative: {
      text: 'Or send us a WhatsApp',
    },
  },

  unifiedContact: {
    pageTitle: 'Get in Touch',
    pageSubtitle:
      "Whether you're planning a retreat or have a quick question, we're here to help. Choose how you'd like to connect.",
    selectorAriaLabel: 'Contact options',
    intentSelector: {
      questionLabel: 'Ask a Question',
      questionSublabel: 'Quick inquiry',
      bookingLabel: 'Request a Quote',
      bookingSublabel: 'No commitment required',
    },
    mapTitle: 'Location map showing Maker\'s Barn',
    questionFormImageAlt: 'Cozy bench at the Hay House accommodation',
  },

  booking: {
    pageTitle: 'Book Your Retreat',
    metaTitle: 'Book Your Retreat',
    metaDescription:
      'Book your retreat at The Makers Barn. Select your preferred dates, group size, and accommodation options for your perfect countryside escape.',
    introText:
      "Ready to plan your retreat? Fill out the form below with your preferences and we'll get back to you with availability and a personalized quote.",
    formTitle: 'Retreat Booking Request',
    progressLabel: 'Booking progress',
    sections: {
      contact: 'Contact Information',
      retreat: 'Retreat Details',
      dates: 'Preferred Dates',
      groupSize: 'Group Size',
      accommodation: 'Accommodation & Catering',
      extraInfo: 'Extra Information',
    },
    steps: {
      contact: 'Contact',
      retreat: 'Dates',
      details: 'Details',
      review: 'Finish',
    },
    stepDescriptions: {
      contact: "Let's start with your contact details so we can reach you.",
      retreat: 'Tell us about your retreat: type, dates, and duration.',
      details: 'Share your group size and accommodation preferences.',
      review: 'Add any additional information before submitting.',
    },
    validation: {
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter your email address',
      emailInvalid: 'Please enter a valid email address',
      retreatTypeOtherRequired: 'Please specify your retreat type',
    },
    labels: {
      name: 'Your name',
      email: 'Email address',
      phone: 'Phone number',
      startDate: 'Preferred start date',
      duration: 'Duration (days)',
      flexibleDates: 'My dates are flexible',
      flexibleDatesText: 'Flexibility details',
      minGroupSize: 'Minimum group size',
      maxGroupSize: 'Maximum group size',
      retreatType: 'Type of retreat',
      retreatTypeOther: 'Please specify',
      accommodationPreferences: 'Accommodation preferences',
      cateringNeeded: 'We need catering',
      cateringDetails: 'Catering details',
      extraInfo: 'Anything else you would like to share?',
    },
    placeholders: {
      name: 'Your full name',
      email: 'your@email.com',
      phone: '+31 6 12345678',
      duration: 'e.g., 3',
      flexibleDatesText: 'e.g., We could also do the following week, or a shorter 2-day retreat...',
      minGroupSize: 'Min',
      maxGroupSize: 'Max',
      retreatTypeOther: 'Describe your retreat type...',
      accommodationPreferences: 'e.g., We need 3 private rooms and the rest can be shared...',
      cateringDetails: 'e.g., Breakfast only, full board, vegetarian options...',
      extraInfo: 'e.g., Accessibility needs, specific equipment, special requests...',
      selectDate: 'Select a date',
    },
    retreatTypes: {
      privateGroup: 'Private/Group Retreat',
      yoga: 'Yoga Retreat',
      workshop: 'Workshop',
      other: 'Other',
    },
    cateringOptions: {
      yes: 'Yes',
      no: 'No',
    },
    reviewLabels: {
      contact: 'Contact',
      retreat: 'Retreat',
      group: 'Group',
      catering: 'Catering',
      notProvided: 'Not provided',
    },
    datePicker: {
      unavailable: 'Unavailable',
      dateUnavailable: 'This date is not available',
    },
    helpText: {
      startDate: 'Select your preferred arrival date',
      duration: 'How many days will your retreat last?',
      accommodationIntro: 'Our facilities include:',
      accommodationCosmos: 'The Cosmos cabin: 1 private room (sleeps 2-3)',
      accommodationGroup: 'Horizon building: Multiple rooms (sleeps 10-12)',
    },
    buttons: {
      submit: 'Submit Booking Request',
      submitting: 'Sending...',
      next: 'Continue',
      back: 'Back',
    },
    messages: {
      success: 'Thank you for your booking request! We will get back to you shortly.',
      emailFailed: 'There was an issue sending your request. Please try again later.',
      unexpectedError: 'An unexpected error occurred. Please try again later.',
      validationError: 'Please check your input and try again.',
      rateLimited: 'Too many requests. Please wait a moment before trying again.',
      loading: 'Sending...',
    },
    alert: {
      title: 'This page is for retreat organizers',
      description:
        'This is for groups of 6+ people. Want to join an existing retreat or have other questions?',
      joinRetreatLink: 'View other options',
      contactLink: 'Contact us',
    },
    success: {
      title: 'Request Received!',
      subtitle: 'Thank you for your interest in hosting at The Makers Barn',
      description:
        'We have received your booking request and are excited to help you create an unforgettable retreat experience.',
      whatNext: 'What happens next?',
      steps: [
        'We will review your request within 24-48 hours',
        'You will receive a personalized quote via email',
        'We can schedule a call to discuss your specific needs',
      ],
      newRequestButton: 'Submit Another Request',
      homeButton: 'Back to Home',
    },
  },

  footer: {
    getInTouch: 'Get in Touch',
    followUs: 'Follow Us',
    explore: 'Explore',
    tagline: 'Where creativity meets tranquility',
    copyright: "The MakersBarn.",
    viewLocation: 'View location',
  },

  about: {
    title: 'About Us',
    intro: `The MakersBarn started as a hub for Makers of different kinds, wood workers, corporate professionals, artists, and dreamers. Somewhere along the way, we realized that what people needed most wasn't just a workshop. It was a place to slow down. So that's what we became.`,
    secondary: `We believe everyone has a Maker in us. Humans are Makers in the heart. Whether that's crafting something with our hands, making peace, or making memories. A gathering, transformative work, sharing and connecting are all core aspects of Makers.`,
    tertiary: `The three of us came together with a vision and a way to escape the hustle and bustle of city life. A stunning 1920s farm, our love for the land, and a dedication to crafting unique lodges have created a place where plants, animals, and people all find happiness.`,
    fourth: `If you're looking to host your next retreat, join one, or simply enjoy a peaceful stay, MakersBarn is ready for you.`,
    teamTitle: 'Meet the Team',
    metaTitle: 'About Us',
    metaDescription:
      'Meet the team behind MakersBarn. Learn about our mission to create a sanctuary where makers, artists, and dreamers can connect and find inspiration.',
    cta: 'We love sharing our favorite spots! Need recommendations for hikes, local activities, or hidden gems in the area? Just ask.',
    ctaButton: 'Get in Touch',
  },

  facilities: {
    title: 'Facilities',
    intro: `Rent the spaces you need for your retreat, masterclass, or creative adventures. We offer a private garden, converted hay barn, 14 beds, plus space for tents and campervans, and all the tranquility you need. We also help arranging catering based on your requirements and needs.`,
    metaTitle: 'Facilities',
    metaDescription:
      'Rent the spaces you need at MakersBarn. Private garden, converted hay barn, 14 beds, space for tents and campervans, plus catering arrangements available.',
    stats: [
      { number: '1200+', description: 'Trees planted on the area' },
      { number: '13.000+ m²', description: 'Of private land, a natural swimming pond, sauna, and fire circle.' },
      { number: '∞', description: 'Infinite possibilities' },
    ],
    categories: {
      groupAccommodation: 'Group Accommodation',
      workshopSpace: 'Workshop Space',
      outdoors: 'Outdoors',
    },
    ctaTitle: 'Ready to Plan Your Retreat?',
    ctaSubtitle: 'Let us help you create an unforgettable experience for your group.',
    ctaButton: 'Book a Retreat Now',
    carousel: {
      previousImage: 'Previous image',
      nextImage: 'Next image',
      viewFullscreen: 'View image in fullscreen',
      goToImage: 'Go to image',
      imageNavigation: 'image navigation',
    },
    items: {
      hayHouse: {
        title: 'Hay House Practice Space',
        description:
          'An enchanting hay house with space for yoga, breathing sessions, and much more! Even more beautiful when the sun is out creating mesmerizing colorful reflections.',
        features: ['65+ m² space', 'Heated floor', 'Yoga mats and accessories', 'Sound system'],
      },
      cosmos: {
        title: 'The Cosmos',
        description:
          'A wooden cabin with wood stove. Cosy as no other while creating a luxury vibe. Private terrace with one of the best views the Netherlands has to offer.',
        features: ['60 m²', 'Double bed or two singles', 'Sleeper sofa', 'Shower', 'Kitchen'],
      },
      horizon: {
        title: 'Horizon',
        description:
          'Old barn turned into luxury sleeping arrangement. Chill area, rooms with private and shared showers. Kitchen present on the second floor',
        features: [
          '3 bed room with shared shower',
          '2 bed room with ensuit shower',
          'Private room with shared shower',
          'Large attic (2-4 beds, shower)',
          'Attic space for indoor practic sessions',
        ],
      },
      sauna: {
        title: 'Sauna, Hot Tub & Fire Circle',
        description:
          'Unwind and rejuvenate in our private sauna, hot tub, and fire circle area. The perfect way to decompress after a day of creative work or workshops.',
      },
      pond: {
        title: 'Swimming Pond',
        description:
          'A natural swimming pond surrounded by lush greenery and local wildlife. Perfect for a refreshing swim or enjoying the peaceful sounds of nature.',
      },
      inBetween: {
        title: 'Everything in Between',
        description:
          'The offered Facilities are essential for a retreat, but it\'s the little things in between that make a place truly special',
        features: ['Beautiful paths', '1000+ trees', 'Tea house', 'Bird area', 'Wide views'],
      },
    },
  },

  experiences: {
    metaTitle: 'Experiences',
    metaDescription: 'Discover your perfect retreat experience at MakersBarn. Book a solo yoga retreat, rent our accommodation, or join a group weekend retreat.',
    title: 'Experiences',
    intro: 'Whether you seek solitude, want to create your own getaway, or join a curated retreat with others, we have the perfect experience waiting for you.',
    createExperience: {
      title: 'Create Your Own Experience',
      subtitle: 'No plans to host a retreat? There are plenty of other ways to enjoy a stay with us. Join us for a private or duo retreat, gather a group of friends, or simply treat yourself to some rest by booking one of our vacation homes. You\'re also welcome to participate in one of our hosted retreats.',
      alternativeText: 'Want something else?',
      alternativeCta: 'Contact us for additional options',
    },
    soloRetreat: {
      title: 'Solo / Duo Yoga Retreat',
      description: 'A personalized retreat experience in the Cosmos cabin. Tailored yoga sessions, sauna, hot tub, and complete tranquility for your personal journey.',
      features: [
        '2-3 night packages',
        'Personalized yoga sessions',
        'Sauna & hot tub access',
        'Fresh breakfast included',
      ],
      ctaLabel: 'Explore Solo Retreat',
    },
    bookingPlatforms: {
      airbnb: 'Book on Airbnb',
      natuurhuisje: 'Book on Natuurhuisje',
    },
    cabins: {
      cosmos: {
        title: 'Book Cosmos Cabin',
        description: 'A wooden cabin with wood stove, cosy as no other and bathed in some of the best views the Netherlands has to offer. Made for couples or duos craving a cocooned escape close to nature.',
        features: [
          'Wood stove & private terrace',
          'Hot tub & sauna access',
          'Yoga sessions on request',
          'Massage available',
          'Catering on request',
        ],
      },
      horizon: {
        title: 'Book Horizon Loft',
        description: 'A newly built luxury loft with premium finishes and countryside views. Open kitchen, rainfall shower, and a glass pavilion overlooking shared 13,000 m² grounds with wildflower meadows.',
        features: [
          'Premium finishes & rainfall shower',
          'Sauna access',
          'Free bicycle',
          'Swimming pond & fire pit',
          'Catering on request',
        ],
      },
    },
    togetherRetreat: {
      title: 'Friends Retreat',
      description: 'An all-inclusive escape with friends. Yoga, creative workshops, delicious meals, and meaningful connections in a beautiful setting.',
      features: [
        'All-inclusive experience',
        'Yoga & creative workshops',
        'Ayurvedic-inspired meals',
        'Exclusive group access',
      ],
      ctaLabel: 'Explore Group Retreats',
    },
    featuredRetreats: {
      title: 'Featured Retreats',
      subtitle: 'Join one of our upcoming curated retreat experiences',
      bookNow: 'Book Now',
      spotsLeft: 'spots left',
      fullyBooked: 'Fully Booked',
    },
    ctaTitle: 'Not sure which experience is right for you?',
    ctaSubtitle: 'Get in touch and we\'ll help you find the perfect fit for your needs.',
    ctaButton: 'Contact Us',
  },

  location: {
    metaTitle: 'Location & Surroundings',
    metaDescription: 'The Makers Barn is located in beautiful Overijssel, surrounded by nature, historic cities, and endless outdoor activities.',
    title: 'Our Surroundings',
    intro: 'The Makers Barn is nestled in the heart of Overijssel, one of the most beautiful and natural provinces of the Netherlands. Surrounded by forests, rivers, and open landscapes, there is no shortage of things to explore.',
    surroundings: 'Within walking distance you will find \'Kasteel Nijenhuis\', a historic castle containing a museum and impressive sculpture gardens. Local farms offer fresh produce, and charming villages dot the countryside. For wellness seekers, the premium sauna resort \'Sauna Swoll\' is just 15 minutes away.',
    hiking: 'The area offers countless hiking and biking routes through nature reserves, along the IJssel river, and through the stunning Sallandse Heuvelrug national park. We provide free bikes for our guests to explore at their own pace.',
    cities: 'Historic Hanseatic cities like Zwolle, Deventer, and Kampen are easily accessible by train (station reachable in 10 minutes by bike) or car, each offering rich history, beautiful architecture, and vibrant local culture.',
    cta: 'Contact us to learn more.',
    ctaButton: 'Get in Touch',
  },

  shantiDevaRetreat: {
    metaTitle: 'Shanti Deva Buddhist Tibetan Retreat',
    metaDescription: 'Join Gen La Geshe Pema Dorjee for a 6-day Buddhist retreat in the Dutch countryside. Study Tibetan Buddhism with meditation, teachings, and vegetarian meals included.',
    backToExperiences: 'Back to Experiences',

    hero: {
      title: 'Shanti Deva Buddhist Tibetan Retreat',
      subtitle: 'Study of Tibetan Buddhism',
      withTeachers: 'with Gen La Geshe Pema Dorjee & the Respected monk Lobsang',
      dailyTime: 'From 7 AM to 8 PM daily',
      bookNow: 'Book Your Spot',
    },

    dates: {
      title: 'Available Dates',
      firstRetreat: 'First retreat',
      secondRetreat: 'Second retreat',
      duration: '5 nights (6 days)',
    },

    teacher: {
      sectionTitle: 'Who is Geshe Pema Dorjee?',
      biography: 'Geshe Pema Dorjee was born in Tibet and fled with his family in 1959, growing up in Dharamsala, India. He studied Buddhist philosophy and in 1995 was awarded the Geshe degree - the highest academic title in Tibetan Buddhism. For over 20 years he taught and served as principal at the Tibetan Children\'s Village. At the request of His Holiness the Dalai Lama, he founded the Bodong Research Center and a monastery in Kathmandu. He has also led extensive humanitarian projects, including schools, orphanages, water systems, and earthquake relief in Nepal. Since 1997 he has been teaching worldwide, known for his clarity, warmth, and compassion.',
      gesheTitle: 'Geshe',
      monkTitle: 'Respected Monk',
    },

    details: {
      title: 'Retreat Details',
      location: 'Location',
      locationDescription: 'A countryside farm in the Netherlands',
      address: 'Farm address',
      accessibility: 'Accessibility',
      accessibilityItems: {
        carFromZwolle: '15 minutes by car from Zwolle (1h15 by train from Schiphol Airport, Amsterdam)',
        freePickup: 'Free pickup from Zwolle train station (14:00-16:00)',
        sharedTransport: 'Shared transport back to the station at the end: ~€10 per person',
      },
    },

    schedule: {
      title: 'Daily Schedule',
      arrivalDay: 'Arrival Day',
      studyDays: 'Study Days',
      finalDay: 'Final Day',
      specialActivity: 'A Tibetan Momo Cooking Workshop will be held on one of the retreat days.',
      activities: {
        arrivalCheckin: 'Arrival & Room Check-in',
        farmTour: 'Farm Tour',
        dinner: 'Dinner',
        introProgram: 'Introduction & Program Overview',
        guidedMeditation: 'Guided Meditation',
        breakfast: 'Breakfast',
        morningTeaching: 'Morning Teaching (with short break)',
        lunch: 'Lunch',
        afternoonTeaching: 'Afternoon Teaching (with short break)',
        qaSession: 'Q&A Session',
        closingSession: 'Closing Session & Q&A',
        freeTime: 'Free Time',
        checkout: 'Check-out',
      },
    },

    included: {
      title: 'What\'s Included',
      accommodation: 'Accommodation',
      accommodationOptions: {
        duration: '5 nights (6 days)',
        doubleRooms: 'Double rooms',
        sharedRooms: 'Rooms for 3-4 people',
        singleRoom: 'Single room',
        tentCaravan: 'Option to stay in a tent or caravan at reduced price',
      },
      servicesTitle: 'Services',
      services: {
        beddingTowels: 'Bedding & towels (pool/sauna towel not included)',
        vegetarianMeals: '3 vegetarian meals daily + drinks & snacks',
        farmFacilities: 'Use of all farm facilities - Outdoor hot tub, Sauna, Ecological pool and more',
      },
    },

    pricing: {
      title: 'Pricing',
      totalPrice: '€640',
      perParticipant: 'per participant (tax included)',
      breakdown: 'Price Breakdown',
      breakdownItems: {
        accommodation: 'Accommodation',
        meals: 'Meals',
        venueRental: 'Venue rental share',
        teacherSupport: 'Support for travel & stay of Geshe Pema Dorjee & monk Lobsang',
      },
      paymentTerms: 'Payment Terms',
      paymentItems: {
        depositPayment: 'First payment (deposit): €140 upon registration',
        secondPayment: 'Second payment: €500, four months before retreat',
      },
      cancellation: 'Cancellation Policy',
      cancellationItems: {
        fourMonthsRefund: 'Up to 4 months before start: full refund of deposit',
        afterFullPayment: 'After second payment (full payment): 25% refund',
        replacementRefund: 'If a replacement participant is found: full refund',
      },
    },

    registration: {
      title: 'Ready to Join?',
      subtitle: 'Spaces are limited. Reserve your spot today.',
      participantRange: '10-15 participants',
      contact: 'Questions? Contact retreat organisers directly',
      whatsapp: 'WhatsApp',
      email: 'Email',
      registerButton: 'Register Now',
    },
  },

  impressionCarousel: {
    kicker: 'A little impression',
    title: 'Slow down, look around.',
    subtitle:
      'Discover the beauty of slow living. Each moment here invites you to pause, breathe, and reconnect with what truly matters.',
    facilitiesButton: 'Explore our facilities',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    carouselNavigation: 'Carousel navigation',
    viewFullscreen: 'View impression in fullscreen',
    goToSlide: 'Go to slide',
  },

  impressionPolaroids: {
    kicker: 'A little impression',
    title: 'A place to create lasting memories',
    subtitle:
      "Spaces to focus, wander, nap, write, reflect, and be together. Here's a glimpse of what your retreat might feel like.",
  },

  testimonials: {
    sectionTitle: 'What our guests say',
    items: [
      {
        testimonial:
          'MakersBarn is pure magic. The combination of stunning countryside, thoughtful spaces, and the sauna made our retreat absolutely transformative. We left feeling renewed and deeply connected.',
        author: 'Emma K. - Wellness Retreat Organizer',
      },
      {
        testimonial:
          "This is the most beautiful retreat space I've ever experienced. The attention to detail, the natural surroundings, and the peaceful atmosphere created the perfect environment for our team to reconnect and recharge.",
        author: 'Marcus T. - Leadership Coach',
      },
      {
        testimonial:
          "I've organized retreats all over Europe, and MakersBarn stands out as something truly special. The Dutch countryside setting, the warm hospitality, and the intimate spaces make it perfect for deep, meaningful work.",
        author: 'Sophie L. - Workshop Facilitator',
      },
      {
        testimonial:
          'Our creative team found exactly what we needed at MakersBarn. The inspiring environment, surrounded by fields and nature, helped us break through creative blocks and produce our best work yet.',
        author: 'David R. - Creative Director',
      },
    ],
  },

  team: {
    members: [
      {
        name: 'Nana',
        description:
          "Nana is the mastermind and the heart behind The Makers Barn. The place grew out of her own life journey and healing process, which shaped the atmosphere we try to create here. She's the person you'll be in touch with from the start and the one who helps make sure your retreat feels exactly the way you imagine it. Nana brings a calm, grounded presence, influenced by her love for nature, yoga, mindful living, and small creative moments. She understands what retreat facilitators need and supports them in a clear, caring, and practical way.",
      },
      {
        name: 'Benny',
        description:
          "A true maker at heart, Benny loves creating magic both on screen and in the kitchen. With the monkey as his spirit animal, he brings playful curiosity and joy to everything he does. Balances the virtual and physical world with mindfulness, and is always ready to help, share some kindness, and chat about whatever's on your mind.",
      },
      {
        name: 'Noud',
        description:
          'Noud is the truest Maker of us: CMO, Chief Maker Officer. It are his screws, nails, trees and love which keep the place in prime condition. When there is time to spare he likes to spend his time in the workshop, building cool furniture.',
      },
    ],
  },

  common: {
    logoAlt: "Maker's Barn",
    selectLanguage: 'Select language',
    toggleMenu: 'Toggle menu',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    closeGallery: 'Close gallery',
    imageNavigation: 'Image navigation',
    imageThumbnails: 'Image thumbnails',
    imageGallery: 'Image gallery',
    floatingWhatsApp: {
      ariaLabel: 'Open WhatsApp chat',
      tooltip: 'Chat with us on WhatsApp',
    },
    lightbox: {
      closeGallery: 'Close gallery',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      imageOf: 'of',
      viewImage: 'View image',
      current: 'current',
      imageNavigation: 'Image navigation',
      imageThumbnails: 'Image thumbnails',
      keyboardInstructions:
        'Use left and right arrow keys to navigate between images. Press Escape to close the gallery.',
    },
  },

  metadata: {
    siteName: "The Maker's Barn",
    siteTitle: "The Maker's Barn - Dutch Countryside Retreat",
    defaultDescription:
      'Give your retreat the place it deserves. 60m²+ practice hall, 14 beds, 1.3ha+ private land in the Dutch countryside.',
    keywords: ['retreat', 'Netherlands', 'countryside', 'wellness', 'workshop venue', 'creative retreat'],
  },

  silos: {
    backToRetreats: 'All retreat types',
    hookEyebrow: 'In short',
    factsTitle: 'Why The Makers Barn',
    scheduleTitle: 'A day at the barn',
    faqTitle: 'Questions worth asking',
    primaryCta: 'Plan your retreat',
    secondaryCta: 'Ask a question',
    finalCtaPrimary: 'Request a quote',
    finalCtaSecondary: 'Get in touch',
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
    eyebrow: 'Comparing options',
    headline: 'A different kind of venue',
    ctaLabel: 'Read the full comparison',
  },

  retreats: {
    metaTitle: 'Host a Retreat',
    metaDescription:
      'Host your retreat at The Makers Barn. A 1920s farm in Overijssel for yoga, meditation, writers, teams, breathwork, and more.',
    eyebrow: 'Host a retreat',
    title: 'Retreats we host at The Makers Barn',
    intro:
      'A few examples of the groups The Makers Barn fits well. Pick the type closest to yours — each page goes deeper, and we keep adding more as new kinds of retreat find their way here.',
    cardCta: 'See this retreat type',
    helpTitle: 'Not sure which fits?',
    helpBody:
      'Tell us a little about your group and we will help you find the right shape — sometimes it is none of these, and that is fine too.',
    helpCta: 'Talk to us',
    cards: {
      yogaTeachers: {
        title: 'Yoga teachers',
        pitch:
          'A heated hay barn shala for up to 20 students, a kitchen built around your schedule, and the rest taken care of.',
      },
      meditationRetreats: {
        title: 'Meditation & dharma groups',
        pitch:
          'Twelve-thousand square metres of held quiet, a precedent of practice, and a kitchen that respects your schedule of meals.',
      },
      writingRetreats: {
        title: 'Writing retreats',
        pitch:
          'For published authors and craft teachers running multi-day writing intensives. Workshop space, private cabins, and a long table for the evening read-arounds.',
      },
      teamOffsites: {
        title: 'Team offsites',
        pitch:
          'A 1920s farm bought out for your team. Strategy days that do not feel like meeting rooms.',
      },
      breathworkSoundHealing: {
        title: 'Breathwork & sound',
        pitch:
          'A heated hay barn that hums when the bowls do, a fire circle outside, and a sauna for what comes up afterwards.',
      },
      coachingIntensives: {
        title: 'Coaching intensives',
        pitch:
          'A held venue for coaches running 8–12 person cohort intensives. The work after the workshop ends, in a place that can hold it.',
      },
      somaticTherapyRetreats: {
        title: 'Somatic & therapeutic retreats',
        pitch:
          'For licensed therapists and somatic practitioners running trauma-informed residentials. Private buyout, sauna, fields outside the practice barn.',
      },
      wellnessDetoxRetreats: {
        title: 'Wellness & detox',
        pitch:
          'For wellness coaches, naturopaths, and Ayurveda teachers running clean-eating, sauna, and yoga programmes on a private 1.3-hectare farm.',
      },
      circleRetreats: {
        title: 'Circle retreats',
        pitch:
          'For facilitators of women’s, men’s, and mixed circle work. A fire pit, a barn, and the privacy that the work asks for.',
      },
      photographyWorkshops: {
        title: 'Photography workshops',
        pitch:
          'For pro photographers running multi-day workshops. Big skies, 1.3 hectares of shifting light, and a base camp that handles the rest.',
      },
    },
    comparisonCard: {
      eyebrow: 'Still deciding?',
      headline: 'A private farm or a commercial venue?',
      body:
        'If you are weighing a small private farm against a commercial retreat hotel, we wrote an honest side-by-side. Capacity, kitchen, soundscape, what you trade and what you gain — without the sales pitch.',
      ctaLabel: 'Read the comparison',
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
      title: 'A toolkit for retreat hosts',
      intro: 'Plan, price, and run more profitable retreats. Twenty free tools — no signup, no email wall — that work for any venue, including the one you\'re considering at MakersBarn.',
      toolCardCta: 'Open',
      workflowEyebrow: 'Pick where to start',
      workflowTitle: 'What do you need to figure out?',
      workflowIntro: 'Four areas of retreat hosting, each with its own tool. Use one, use all four — they work in any order.',
      workflowSteps: [
        { title: 'Audit', body: 'Catch the mistakes before they cost you. 10 questions, 5 minutes.' },
        { title: 'Calculate', body: 'Pricing, profit margin, and break-even — before you commit to a venue.' },
        { title: 'Plan', body: 'A realistic 3, 6, 9 or 12-month launch timeline with milestones.' },
        { title: 'Schedule', body: 'A day-by-day agenda with sensible defaults you can edit.' },
      ],
      freeBadge: '100% free',
      noSignupBadge: 'No signup',
      categories: {
        audit: {
          label: 'Mistake audits',
          title: 'Audit your retreat plan',
          description: 'A 10-question diagnostic that surfaces the blind spots first-time and seasoned hosts both miss — pricing, programming, logistics, and group dynamics.',
          variantsLabel: 'Or use a niche-tuned version:',
        },
        calculator: {
          label: 'Pricing calculators',
          title: 'Price your retreat with confidence',
          description: 'See revenue, total costs, profit margin, and break-even occupancy in real time. Niche-tuned defaults from yoga, wellness, meditation, and coaching benchmarks.',
          variantsLabel: 'Or use a niche-tuned version:',
        },
        planner: {
          label: 'Launch calendars',
          title: 'Plan your launch over time',
          description: 'Phase-by-phase milestones you can check off, customise, and email to yourself. Pick the runway that matches your launch date.',
          variantsLabel: 'Or pick a different runway:',
        },
        agenda: {
          label: 'Agenda builders',
          title: 'Design the day-by-day flow',
          description: 'Opinionated retreat schedules with niche-appropriate defaults — vinyasa flows, sit-walk-sit cycles, hot-seat coaching slots — all editable.',
          variantsLabel: 'Or use a niche-tuned version:',
        },
      },
    },
    calculator: {
      inputs: {
        hiresFacilitatorsQuestion: 'Are you paying any of them?',
        hiresFacilitatorsYes: 'Yes',
        hiresFacilitatorsNo: 'No',
        facilitatorFeeLabel: 'Total fee paid to your team',
        revenueSectionLabel: 'What comes in',
        revenueSectionDescription: 'The price you charge guests.',
        costsSectionLabel: 'What goes out',
        costsSectionDescription: 'Everything the retreat actually costs you.',
        guestsLabel: 'Paying guests',
        guestsUnit: 'guests',
        teamBlockTitle: 'Your team onsite',
        teamBlockDescription: 'People staying at the venue on top of the paying guests.',
        teamCountLabel: 'Extra people staying onsite',
        teamCountUnit: 'extra',
        teamCountHelper: 'You, co-hosts and any facilitators who sleep and eat at the venue. Most retreats have 1–3.',
        nightsLabel: 'Number of nights',
        nightsUnit: 'nights',
        pricePerGuestLabel: 'Price per guest',
        venuePerNightLabel: 'Venue + accommodation, per night',
        venueUnit: '/ night',
        venueAllPeopleNote: 'Total nightly cost for everyone staying — see the note under the calculator.',
        foodPerGuestPerDayLabel: 'Food per person per day',
        foodUnit: '/ person / day',
        foodAllPeopleNote: 'Multiplied by guests + your team automatically — nobody eats for free.',
        marketingAndOtherLabel: 'Marketing & other costs',
        advancedLabel: 'Extras (open if needed)',
        travelLabel: 'Your own travel & transport',
        insuranceLabel: 'Insurance',
        paymentFeePercentLabel: 'Payment processing fee',
        vatToggleLabel: 'My prices include BTW (VAT)',
        vatToggleHelper: 'Toggle on if the amounts you enter are gross. Default is the Dutch standard {percent}% rate.',
        vatPercentLabel: 'BTW (VAT) rate',
        vatPercentHelper: 'The Netherlands now applies a single 21% BTW rate across retreat work — accommodation, food and services alike.',
        planningDaysLabel: 'Planning days',
        daysUnit: 'days',
        resetLabel: 'Restore example values',
      },
      results: {
        kicker: 'What you keep',
        headlineSentence: 'At {price} per guest with {guests} of them, you take home {profit} — a {margin} margin.',
        totalRevenue: 'Total revenue',
        totalCosts: 'Total costs',
        profitMargin: 'Profit margin',
        profitPerWorkday: 'Profit per workday',
        metricsLabel: 'Retreat economics summary',
        breakevenSentence: 'You need at least {guests} guests at {price} before the retreat pays for itself.',
        breakevenImpossible: 'At this price, your per-guest costs eat the whole ticket — adding guests alone won\'t get you to break-even.',
        vatNoticeNet: 'shown ex. {percent}% BTW',
        vatNoticeGross: 'shown as-entered',
        vatGrossHint: 'Guests pay {gross} per spot. After {percent}% BTW you keep {net} per spot to work with — that\'s the figure used here.',
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
        success: 'Sent! Have a look in your inbox.',
        error: 'Couldn\'t send just now. Mind trying again?',
        optInLabel: 'Send me an occasional note about retreat pricing (no spam, unsubscribe with one click)',
      },
      share: {
        heading: 'Share these numbers',
        intro: 'Send the link to a co-host, partner or accountant — see if your assumptions hold up.',
        copy: 'Copy link',
        copied: 'Copied!',
        copyFailed: 'Could not copy link',
        whatsapp: 'Share on WhatsApp',
        whatsappMessage: 'My retreat numbers from the MakersBarn calculator:',
      },
      venueExplainer: {
        heading: 'How most venues price you',
        paragraphs: [
          'Most retreat venues quote in three layers: a base nightly rate for the use of the property, a one-off cleaning fee, and a per-person charge for every bed actually used. The per-person line applies to anyone sleeping there — paying guests and your team alike.',
          'Organisers sometimes assume the per-person fee only counts paying guests, and end up surprised at the final invoice. So when you fill in the venue per-night cost above, work out the total for everyone staying — guests + the people on your team slider — and use that figure.',
        ],
        example: 'Example — 12 guests + 2 team = 14 people. Venue €400 base + €50 cleaning per night + €60 per person = 400 + 50 + (14 × 60) = €1,290 per night. Not 12 × 60.',
      },
      makersbarnCta: {
        title: 'Thinking of MakersBarn as your venue?',
        body: 'We work out a fair price for your group size and dates — drop us a line and we\'ll send a quote. The numbers above stay with you.',
        linkLabel: 'Ask us for a quote',
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
        auditTitle: 'Retreat Mistakes Audit',
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
        auditTitle: 'Run the 5-minute Retreat Mistakes Audit',
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
      heading: 'Related tools',
      auditCardTitle: 'Sanity-check the assumptions: take the 5-minute mistakes audit',
    },
    faq: {
      heading: 'Frequently asked questions',
    },
  },
} as const
