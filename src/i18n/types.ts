import { AccommodationCabin, Language } from '@/types'
import type { DietaryCapability, NlRegion, RetreatType } from '@/constants/chef'
import type { ChefInquiryDict } from '@/types/chef'

/**
 * Navigation translations
 */
export interface NavTranslations {
  home: string
  about: string
  facilities: string
  experiences: string
  surroundings: string
  tools: string
  contact: string
  book: string
  chefs: string
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
  hostRetreat: string
  exploreTools: string
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
  intentLeadIn: {
    looking: string
    join: string
  }
}

export interface ChefsListingFaqItem {
  question: string
  answer: string
}

export interface ChefsListingFactItem {
  number: string
  description: string
}

export interface ChefsListingSection {
  h2: string
  paragraphs: readonly string[]
}

export interface ChefsListingDualCtaCard {
  eyebrow: string
  h3: string
  body: string
  button: string
}

export interface ChefsListingDict {
  meta: { title: string; description: string }
  hero: { eyebrow: string; h1: string; subtitle: string }
  intro: string
  sections: {
    whatToLookFor: ChefsListingSection
    pricing: ChefsListingSection
    coverage: ChefsListingSection
  }
  grid: {
    h2: string
    framingLine: string
    card: { viewProfile: string; draftBadge: string; cuisinesAriaLabel: string }
  }
  launchingSoon: {
    headline: string
    body: string
    inlineCtaLabel: string
  }
  facts: readonly ChefsListingFactItem[]
  faq: {
    h2: string
    items: readonly ChefsListingFaqItem[]
  }
  dualCta: {
    looking: ChefsListingDualCtaCard
    join: ChefsListingDualCtaCard
  }
  crossLink: { label: string }
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
  auditCtaTitle: string
  auditCtaBody: string
  auditCtaLabel: string
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

export interface ToolsHubCategoryTranslations {
  label: string
  title: string
  description: string
  /** Prompt above the niche/variant chooser pills (e.g. "Or pick your niche"). */
  variantsLabel: string
}

export interface ToolsHubTranslations {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  intro: string
  toolCardCta: string
  workflowEyebrow: string
  workflowTitle: string
  workflowIntro: string
  workflowSteps: readonly { title: string; body: string }[]
  freeBadge: string
  noSignupBadge: string
  categories: {
    audit: ToolsHubCategoryTranslations
    calculator: ToolsHubCategoryTranslations
    planner: ToolsHubCategoryTranslations
    agenda: ToolsHubCategoryTranslations
  }
  chefsSection: {
    workflowQuestion: string
    workflowBody: string
    label: string
    title: string
    description: string
    cardTag: string
    cardTitle: string
    cardBody: string
    cardCta: string
  }
}

export interface ToolsRelatedTranslations {
  heading: string
  auditCardTitle: string
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
    auditTitle: string
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

/**
 * Retreat Agenda Builder tool translations.
 *
 * Per-niche copy lives under `niches.<niche>` so each landing page has
 * unique meta, hero, guide, and FAQ content (avoiding duplicate-content
 * SEO issues across the 5 niche routes).
 */
export interface AgendaGuideSection {
  heading: string
  paragraphs: readonly string[]
}

export interface AgendaFaqEntry {
  question: string
  answer: string
}

export interface AgendaNicheCopy {
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroIntro: string
  heroAfterIntro: string
  shortLabel: string
  guideSections: readonly AgendaGuideSection[]
  faqExtras: readonly AgendaFaqEntry[]
  relatedCalculatorTitle: string
}

export interface ToolsAgendaTranslations {
  rootAriaLabel: string
  blockTypeLabels: {
    ritual: string
    practice: string
    workshop: string
    meal: string
    free: string
    rest: string
    travel: string
  }
  lengthSwitcher: {
    label: string
    preset2: string
    preset3: string
    preset5: string
    preset7: string
  }
  dayHeading: string
  warnings: {
    heading: string
    tooMuchStructured: string
    noFreeTime: string
    overlongBlock: string
    earlyStart: string
    lateEnd: string
    overlap: string
  }
  block: {
    timeLabel: string
    durationLabel: string
    titleLabel: string
    notesLabel: string
    typeLabel: string
    edit: string
    save: string
    cancel: string
    hide: string
    restore: string
    remove: string
  }
  addBlock: {
    button: string
    heading: string
    submit: string
    cancel: string
    titlePlaceholder: string
    notesPlaceholder: string
    capReached: string
    totalCapReached: string
  }
  emptyDay: string
  inlineHostCta: {
    title: string
    body: string
    linkLabel: string
  }
  print: {
    button: string
    heading: string
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
    entries: readonly AgendaFaqEntry[]
  }
  related: {
    heading: string
    hostARetreatTitle: string
    launchCalendarTitle: string
    auditTitle: string
  }
  crossLinks: {
    heading: string
    intro: string
  }
  niches: {
    generic: AgendaNicheCopy
    yoga: AgendaNicheCopy
    wellness: AgendaNicheCopy
    meditation: AgendaNicheCopy
    coaching: AgendaNicheCopy
  }
}

export interface ToolsTranslations {
  hub: ToolsHubTranslations
  calculator: ToolsCalculatorTranslations
  calendar: ToolsCalendarTranslations
  agenda: ToolsAgendaTranslations
  related: ToolsRelatedTranslations
  faq: ToolsFaqTranslations
}

/**
 * Chef detail page translations
 */
export interface ChefDictionary {
  backLink: string
  draftBadge: string
  metaTitle: string
  cta: { sendInquiry: string }
  statStrip: {
    rightFor: string
    cooks: string
    accommodates: string
    dayRate: string
    dayRateUnit: string
    dayRateExBtw: string
    tierLabel: { budget: string; standard: string; premium: string }
    tierAriaLabel: string
  }
  headerMeta: { guests: string; yearsCooking: string; summaryAriaLabel: string }
  galleryLabel: string
  about: string
  signatureDishes: string
  signatureDishItemPrefix: string
  testimonials: string
  additionalOfferings: string
  sidebar: {
    operatesIn: string
    travelsNationwide: string
    travelsRegional: string
    strongestIn: string
    homeBase: string
    atAGlance: string
    atAGlanceLabels: {
      groupSize: string
      languages: string
      experience: string
      sourcing: string
      credentials: string
      press: string
    }
    pastRetreats: string
    kitchenRequirements: string
  }
  enums: {
    retreatType: Record<RetreatType, string>
    dietary: Record<DietaryCapability, string>
    region: Record<NlRegion, string>
  }
  inquiry: ChefInquiryDict
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
  chef: ChefDictionary
  chefsListing: ChefsListingDict
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
