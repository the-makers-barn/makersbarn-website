import { AccommodationCabin, Language } from '@/types'

/**
 * Navigation translations
 */
export interface NavTranslations {
  home: string
  about: string
  facilities: string
  experiences: string
  surroundings: string
  contact: string
  book: string
}

/**
 * Hero section translations
 */
export interface HeroTranslations {
  eyebrow: string
  emphasis: string
  subtitle: string
  subtitleBreak: string
}

/**
 * Hero details section translations
 */
export interface HeroDetailsTranslations {
  title: string
  subtitle: string
  body: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  metaItems: readonly string[]
}

/**
 * Contact form translations
 */
export interface ContactTranslations {
  pageTitle: string
  metaTitle: string
  metaDescription: string
  introText: string
  formTitle: string
  labels: {
    name: string
    email: string
    phone: string
    message: string
  }
  placeholders: {
    name: string
    email: string
    phone: string
    message: string
  }
  buttons: {
    submit: string
    submitting: string
  }
  messages: {
    success: string
    emailFailed: string
    unexpectedError: string
    validationError: string
    rateLimited: string
    loading: string
  }
  emailAlternative: {
    text: string
  }
  whatsappAlternative: {
    text: string
  }
}

/**
 * Footer translations
 */
export interface FooterTranslations {
  getInTouch: string
  followUs: string
  tagline: string
  copyright: string
  viewLocation: string
}

/**
 * About page translations
 */
export interface AboutTranslations {
  title: string
  intro: string
  secondary: string
  tertiary: string
  fourth: string
  teamTitle: string
  metaTitle: string
  metaDescription: string
  cta: string
  ctaButton: string
}

/**
 * Facilities page translations
 */
export interface FacilitiesTranslations {
  title: string
  intro: string
  metaTitle: string
  metaDescription: string
  stats: readonly {
    number: string
    description: string
  }[]
  categories: {
    groupAccommodation: string
    workshopSpace: string
    outdoors: string
  }
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
  carousel: {
    previousImage: string
    nextImage: string
    viewFullscreen: string
    goToImage: string
    imageNavigation: string
  }
  items: {
    hayHouse: {
      title: string
      description: string
      features: readonly string[]
    }
    cosmos: {
      title: string
      description: string
      features: readonly string[]
    }
    horizon: {
      title: string
      description: string
      features: readonly string[]
    }
    sauna: {
      title: string
      description: string
    }
    pond: {
      title: string
      description: string
    }
    inBetween: {
      title: string
      description: string
      features: readonly string[]
    }
  }
}

/**
 * Impression carousel section translations
 */
export interface ImpressionCarouselTranslations {
  kicker: string
  title: string
  subtitle: string
  facilitiesButton: string
  previousImage: string
  nextImage: string
  carouselNavigation: string
  viewFullscreen: string
  goToSlide: string
}

/**
 * Impression polaroids section translations
 */
export interface ImpressionPolaroidsTranslations {
  kicker: string
  title: string
  subtitle: string
}

/**
 * Testimonials section translations
 */
export interface TestimonialsTranslations {
  sectionTitle: string
  items: readonly {
    testimonial: string
    author: string
  }[]
}

/**
 * Team member translations
 */
export interface TeamTranslations {
  members: readonly {
    name: string
    description: string
  }[]
}

/**
 * Floating WhatsApp button translations
 */
export interface FloatingWhatsAppTranslations {
  ariaLabel: string
  tooltip: string
}

/**
 * Common/shared translations
 */
export interface CommonTranslations {
  logoAlt: string
  selectLanguage: string
  toggleMenu: string
  previousImage: string
  nextImage: string
  closeGallery: string
  imageNavigation: string
  imageThumbnails: string
  imageGallery: string
  floatingWhatsApp: FloatingWhatsAppTranslations
  lightbox: {
    closeGallery: string
    previousImage: string
    nextImage: string
    imageOf: string
    viewImage: string
    current: string
    imageNavigation: string
    imageThumbnails: string
    keyboardInstructions: string
  }
}

/**
 * Metadata translations for SEO
 */
export interface MetadataTranslations {
  siteName: string
  siteTitle: string
  defaultDescription: string
  keywords: readonly string[]
}

/**
 * Experiences page translations
 */
export interface ExperiencesTranslations {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  createExperience: {
    title: string
    subtitle: string
    alternativeText: string
    alternativeCta: string
  }
  soloRetreat: {
    title: string
    description: string
    features: readonly string[]
    ctaLabel: string
  }
  bookingPlatforms: {
    airbnb: string
    natuurhuisje: string
  }
  cabins: Record<AccommodationCabin, {
    title: string
    description: string
    features: readonly string[]
  }>
  togetherRetreat: {
    title: string
    description: string
    features: readonly string[]
    ctaLabel: string
  }
  featuredRetreats: {
    title: string
    subtitle: string
    bookNow: string
    spotsLeft: string
    fullyBooked: string
  }
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
}

/**
 * Location page translations
 */
export interface LocationTranslations {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  surroundings: string
  hiking: string
  cities: string
  cta: string
  ctaButton: string
}

/**
 * Shanti Deva Retreat page translations
 */
export interface ShantiDevaRetreatTranslations {
  metaTitle: string
  metaDescription: string
  backToExperiences: string

  hero: {
    title: string
    subtitle: string
    withTeachers: string
    dailyTime: string
    bookNow: string
  }

  dates: {
    title: string
    firstRetreat: string
    secondRetreat: string
    duration: string
  }

  teacher: {
    sectionTitle: string
    biography: string
    gesheTitle: string
    monkTitle: string
  }

  details: {
    title: string
    location: string
    locationDescription: string
    address: string
    accessibility: string
    accessibilityItems: {
      carFromZwolle: string
      freePickup: string
      sharedTransport: string
    }
  }

  schedule: {
    title: string
    arrivalDay: string
    studyDays: string
    finalDay: string
    specialActivity: string
    activities: {
      arrivalCheckin: string
      farmTour: string
      dinner: string
      introProgram: string
      guidedMeditation: string
      breakfast: string
      morningTeaching: string
      lunch: string
      afternoonTeaching: string
      qaSession: string
      closingSession: string
      freeTime: string
      checkout: string
    }
  }

  included: {
    title: string
    accommodation: string
    accommodationOptions: {
      duration: string
      doubleRooms: string
      sharedRooms: string
      singleRoom: string
      tentCaravan: string
    }
    servicesTitle: string
    services: {
      beddingTowels: string
      vegetarianMeals: string
      farmFacilities: string
    }
  }

  pricing: {
    title: string
    totalPrice: string
    perParticipant: string
    breakdown: string
    breakdownItems: {
      accommodation: string
      meals: string
      venueRental: string
      teacherSupport: string
    }
    paymentTerms: string
    paymentItems: {
      depositPayment: string
      secondPayment: string
    }
    cancellation: string
    cancellationItems: {
      fourMonthsRefund: string
      afterFullPayment: string
      replacementRefund: string
    }
  }

  registration: {
    title: string
    subtitle: string
    participantRange: string
    contact: string
    whatsapp: string
    email: string
    registerButton: string
  }
}

/**
 * Unified Contact page translations
 */
export interface UnifiedContactTranslations {
  pageTitle: string
  pageSubtitle: string
  selectorAriaLabel: string
  intentSelector: {
    questionLabel: string
    questionSublabel: string
    bookingLabel: string
    bookingSublabel: string
  }
  mapTitle: string
  questionFormImageAlt: string
}

/**
 * Booking form translations
 */
export interface BookingTranslations {
  pageTitle: string
  metaTitle: string
  metaDescription: string
  introText: string
  formTitle: string
  progressLabel: string
  sections: {
    contact: string
    retreat: string
    dates: string
    groupSize: string
    accommodation: string
    extraInfo: string
  }
  steps: {
    contact: string
    retreat: string
    details: string
    review: string
  }
  stepDescriptions: {
    contact: string
    retreat: string
    details: string
    review: string
  }
  validation: {
    nameRequired: string
    emailRequired: string
    emailInvalid: string
    retreatTypeOtherRequired: string
  }
  labels: {
    name: string
    email: string
    phone: string
    startDate: string
    duration: string
    flexibleDates: string
    flexibleDatesText: string
    minGroupSize: string
    maxGroupSize: string
    retreatType: string
    retreatTypeOther: string
    accommodationPreferences: string
    cateringNeeded: string
    cateringDetails: string
    extraInfo: string
  }
  placeholders: {
    name: string
    email: string
    phone: string
    duration: string
    flexibleDatesText: string
    minGroupSize: string
    maxGroupSize: string
    retreatTypeOther: string
    accommodationPreferences: string
    cateringDetails: string
    extraInfo: string
    selectDate: string
  }
  retreatTypes: {
    privateGroup: string
    yoga: string
    workshop: string
    other: string
  }
  cateringOptions: {
    yes: string
    no: string
  }
  reviewLabels: {
    contact: string
    retreat: string
    group: string
    catering: string
    notProvided: string
  }
  datePicker: {
    unavailable: string
    dateUnavailable: string
  }
  helpText: {
    startDate: string
    duration: string
    accommodationIntro: string
    accommodationCosmos: string
    accommodationGroup: string
  }
  buttons: {
    submit: string
    submitting: string
    next: string
    back: string
  }
  messages: {
    success: string
    emailFailed: string
    unexpectedError: string
    validationError: string
    rateLimited: string
    loading: string
  }
  alert: {
    title: string
    description: string
    joinRetreatLink: string
    contactLink: string
  }
  success: {
    title: string
    subtitle: string
    description: string
    whatNext: string
    steps: readonly string[]
    newRequestButton: string
    homeButton: string
  }
}

/**
 * Shared chrome for silo landing pages (CTAs, section labels, etc.)
 */
export interface SilosChromeTranslations {
  backToRetreats: string
  hookEyebrow: string
  factsTitle: string
  scheduleTitle: string
  faqTitle: string
  primaryCta: string
  secondaryCta: string
  finalCtaPrimary: string
  finalCtaSecondary: string
  toolCtaTitle: string
  toolCtaBody: string
  toolCtaLabel: string
  calendarCtaTitle: string
  calendarCtaBody: string
  calendarCtaLabel: string
}

/**
 * Comparison teaser embedded on every silo page
 */
export interface ComparisonTeaserTranslations {
  eyebrow: string
  headline: string
  ctaLabel: string
}

/**
 * Host a Retreat hub page (`/host-a-retreat`) translations
 */
export interface RetreatsHubTranslations {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  intro: string
  cardCta: string
  helpTitle: string
  helpBody: string
  helpCta: string
  cards: {
    yogaTeachers: { title: string; pitch: string }
    meditationRetreats: { title: string; pitch: string }
    writingRetreats: { title: string; pitch: string }
    teamOffsites: { title: string; pitch: string }
    breathworkSoundHealing: { title: string; pitch: string }
    coachingIntensives: { title: string; pitch: string }
    somaticTherapyRetreats: { title: string; pitch: string }
    wellnessDetoxRetreats: { title: string; pitch: string }
    circleRetreats: { title: string; pitch: string }
    photographyWorkshops: { title: string; pitch: string }
  }
  comparisonCard: {
    eyebrow: string
    headline: string
    body: string
    ctaLabel: string
  }
  toolsBlock: {
    eyebrow: string
    title: string
    intro: string
    calendarTitle: string
    calendarBody: string
    calendarCtaLabel: string
    calculatorTitle: string
    calculatorBody: string
    calculatorCtaLabel: string
  }
}

/**
 * Tools section — calculator chrome translations
 */
export interface ToolsCalculatorInputsTranslations {
  hiresFacilitatorsQuestion: string
  hiresFacilitatorsYes: string
  hiresFacilitatorsNo: string
  facilitatorFeeLabel: string
  revenueSectionLabel: string
  revenueSectionDescription: string
  costsSectionLabel: string
  costsSectionDescription: string
  guestsLabel: string
  guestsUnit: string
  teamBlockTitle: string
  teamBlockDescription: string
  teamCountLabel: string
  teamCountUnit: string
  teamCountHelper: string
  nightsLabel: string
  nightsUnit: string
  pricePerGuestLabel: string
  venuePerNightLabel: string
  venueUnit: string
  venueAllPeopleNote: string
  foodPerGuestPerDayLabel: string
  foodUnit: string
  foodAllPeopleNote: string
  marketingAndOtherLabel: string
  advancedLabel: string
  travelLabel: string
  insuranceLabel: string
  paymentFeePercentLabel: string
  vatToggleLabel: string
  vatToggleHelper: string
  vatPercentLabel: string
  vatPercentHelper: string
  planningDaysLabel: string
  daysUnit: string
  resetLabel: string
}

export interface ToolsCalculatorVenueExplainerTranslations {
  heading: string
  paragraphs: readonly string[]
  example: string
}

export interface ToolsCalculatorResultsTranslations {
  kicker: string
  headlineSentence: string
  totalRevenue: string
  totalCosts: string
  profitMargin: string
  profitPerWorkday: string
  metricsLabel: string
  breakevenSentence: string
  breakevenImpossible: string
  vatNoticeNet: string
  vatNoticeGross: string
  vatGrossHint: string
  breakdownLabels: {
    venue: string
    food: string
    facilitator: string
    marketing: string
    travel: string
    insurance: string
    fees: string
    profit: string
    barAriaLabel: string
  }
}

export interface ToolsCalculatorEmailTranslations {
  heading: string
  placeholder: string
  submit: string
  sending: string
  success: string
  error: string
  optInLabel: string
}

export interface ToolsCalculatorShareTranslations {
  heading: string
  intro: string
  copy: string
  copied: string
  copyFailed: string
  whatsapp: string
  whatsappMessage: string
}

export interface ToolsCalculatorMakersBarnCtaTranslations {
  title: string
  body: string
  linkLabel: string
}

export interface ToolsCalculatorTranslations {
  inputs: ToolsCalculatorInputsTranslations
  results: ToolsCalculatorResultsTranslations
  venueExplainer: ToolsCalculatorVenueExplainerTranslations
  email: ToolsCalculatorEmailTranslations
  share: ToolsCalculatorShareTranslations
  makersbarnCta: ToolsCalculatorMakersBarnCtaTranslations
}

export interface ToolsHubTranslations {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  intro: string
  toolCardCta: string
}

export interface ToolsRelatedTranslations {
  heading: string
}

export interface ToolsFaqTranslations {
  heading: string
}

/**
 * Retreat Launch Calendar tool translations.
 * Strings prefixed with `// {var}` accept template-style interpolation.
 */
export interface ToolsCalendarTranslations {
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroIntro: string
  heroAfterIntro: string
  presetSwitcher: {
    label: string
    preset3: string
    preset6: string
    preset9: string
    preset12: string
  }
  impactSubtitleAria: string
  milestoneItem: {
    markDone: string
    markPending: string
    dismiss: string
    restore: string
  }
  customItem: {
    addLabel: string
    placeholder: string
    remove: string
    capReached: string
    totalCapReached: string
    counterFormat: string
  }
  urlNote: string
  inlineCta: {
    anchorTitle: string
    anchorBody: string
    anchorLink: string
    postRetreatTitle: string
    postRetreatBody: string
    postRetreatLink: string
  }
  reset: {
    button: string
    confirm: string
  }
  emailForm: {
    heading: string
    placeholder: string
    contactConsent: string
    submit: string
    sending: string
    success: string
    errorRateLimit: string
    errorInvalidEmail: string
    errorGeneric: string
    errorSendFailed: string
  }
  email: {
    subject: string
    greeting: string
    intro: string
    backToPlanCta: string
    backToPlanLabel: string
    signoff: string
  }
  howTo: {
    heading: string
    steps: readonly string[]
  }
  faq: {
    heading: string
    entries: readonly { question: string; answer: string }[]
  }
  guideHeading: string
  related: {
    heading: string
    hostARetreatTitle: string
    profitabilityCalculatorTitle: string
  }
  crossLinks: {
    heading: string
    intro: string
    linkLabel: string
  }
  sticky: {
    cta: string
  }
}

export interface ToolsTranslations {
  hub: ToolsHubTranslations
  calculator: ToolsCalculatorTranslations
  calendar: ToolsCalendarTranslations
  related: ToolsRelatedTranslations
  faq: ToolsFaqTranslations
}

/**
 * Complete dictionary structure for a single language
 */
export interface Dictionary {
  nav: NavTranslations
  hero: HeroTranslations
  heroDetails: HeroDetailsTranslations
  contact: ContactTranslations
  unifiedContact: UnifiedContactTranslations
  booking: BookingTranslations
  footer: FooterTranslations
  about: AboutTranslations
  facilities: FacilitiesTranslations
  experiences: ExperiencesTranslations
  location: LocationTranslations
  shantiDevaRetreat: ShantiDevaRetreatTranslations
  impressionCarousel: ImpressionCarouselTranslations
  impressionPolaroids: ImpressionPolaroidsTranslations
  testimonials: TestimonialsTranslations
  team: TeamTranslations
  common: CommonTranslations
  metadata: MetadataTranslations
  silos: SilosChromeTranslations
  retreats: RetreatsHubTranslations
  comparisonTeaser: ComparisonTeaserTranslations
  tools: ToolsTranslations
}

/**
 * Type-safe dictionary collection indexed by language
 */
export type Dictionaries = Record<Language, Dictionary>

/**
 * Type utility for extracting nested keys from dictionary
 * Enables autocomplete for translation keys like 'nav.home', 'contact.labels.name'
 */
export type NestedKeyOf<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends readonly unknown[]
        ? `${Prefix}${K}`
        : T[K] extends object
          ? NestedKeyOf<T[K], `${Prefix}${K}.`> | `${Prefix}${K}`
          : `${Prefix}${K}`
    }[keyof T & string]
  : never

/**
 * All possible translation keys
 */
export type TranslationKey = NestedKeyOf<Dictionary>
