export enum RetreatId {
  SHANTI_DEVA = 'shanti-deva',
  AUTUMN_GROUNDING = 'autumn-grounding',
  SWEAT_LODGE = 'sweat-lodge',
}

export enum RetreatDateId {
  JUNE_2027 = 'june-2027',
  JULY_AUGUST_2027 = 'july-august-2027',
  AUGUST_2027 = 'august-2027',
}

export enum ScheduleDayType {
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export interface RetreatDate {
  id: RetreatDateId
  startDate: string
  endDate: string
}

export interface Teacher {
  id: string
  name: string
  title: string
  imageUrl: string
}

/** The three kinds of day a multi-day retreat runs through, in order. */
export enum RetreatDayKind {
  ARRIVAL = 'arrival',
  STUDY = 'study',
  FINAL = 'final',
}

export interface ScheduleItem {
  time: string
  activityKey: string
}

export interface DaySchedule {
  dayType: ScheduleDayType
  items: ScheduleItem[]
}

export interface RetreatLocation {
  nameKey: string
  address: string
  accessibilityKeys: string[]
}

export interface RetreatContact {
  whatsapp: string
  email: string
  /** Public profile URL for the retreat's own Instagram account. */
  instagram: string
  /** The organiser's registration form, hosted on Google Forms. */
  bookingFormUrl: string
  /** The organiser's printable brochure (PDF). */
  brochureUrl: string
}

/*
 * Keys the Shanti Deva retreat data shares with its dictionary block. Typing
 * both sides with the same unions means a key added to the data without a
 * translation in every language fails the type check instead of rendering blank.
 */
export type RetreatProgrammeKey = 'joyfulEffort' | 'mahayana' | 'meditation'

export type RetreatActivityKey =
  | 'checkIn'
  | 'farmTour'
  | 'welcomeReception'
  | 'dinner'
  | 'introduction'
  | 'meditation'
  | 'breakfast'
  | 'teaching'
  | 'lunch'
  | 'teachingsAndWorkshops'
  | 'questionsAndAnswers'
  | 'closing'
  | 'checkOut'

export type RetreatAccessKey = 'carFromZwolle' | 'freePickup' | 'returnTransport'

export type RetreatAccommodationKey = 'duration' | 'sharedRooms' | 'coupleRoom' | 'bedding'

export type RetreatServiceKey = 'vegetarianMeals' | 'drinks' | 'farmFacilities' | 'workshops'

/** One kind of retreat day and its timetable. */
export interface RetreatScheduleDay {
  kind: RetreatDayKind
  items: { time: string; activityKey: RetreatActivityKey }[]
}

/**
 * Whole-euro amounts, as strings like every other price in the retreat data.
 * The VAT share and the balance are derived from these, so the published
 * figures can never disagree with each other.
 */
export interface RetreatPricing {
  currency: string
  /** Price per participant including VAT. */
  total: string
  /** Price per participant excluding VAT. */
  base: string
  vatPercent: number
  /** Paid on registration; the rest of `total` is the balance. */
  deposit: string
}

export interface RetreatData {
  id: RetreatId
  slug: string
  heroImage: string
  /** Embed URL of the promo video shown below the hero. */
  videoEmbedUrl: string
  teachers: Teacher[]
  dates: RetreatDate[]
  location: Omit<RetreatLocation, 'accessibilityKeys'> & {
    /** How to get there, in display order. */
    accessibilityKeys: RetreatAccessKey[]
  }
  /** Study themes, in teaching order. */
  programmeKeys: RetreatProgrammeKey[]
  /** The organiser's timetable, one entry per kind of day. */
  schedule: RetreatScheduleDay[]
  accommodationKeys: RetreatAccommodationKey[]
  serviceKeys: RetreatServiceKey[]
  pricing: RetreatPricing
  contact: RetreatContact
}

/**
 * A separately purchasable ticket on the retreat's ticketshop.
 * `id` keys into the `autumnGrounding.tickets.tiers` dictionary block.
 */
export interface TicketTier {
  id: string
  price: string
  requiresWeekendTicket: boolean
}

export interface RetreatHost {
  id: string
  name: string
  organisation: string
}

export interface RetreatGalleryImage {
  src: string
  altKey: string
}

/**
 * The Autumn Grounding weekend.
 *
 * Deliberately not `RetreatData`: that shape assumes a single total price with a
 * cost breakdown and arrival/study/final days, whereas this retreat sells three
 * independent ticket tiers across a two-day arc. Shared primitives
 * (`DaySchedule`, `RetreatLocation`) are reused; the differing parts are not
 * forced into a common shape while only two retreats exist.
 */
export interface AutumnGroundingRetreat {
  id: RetreatId.AUTUMN_GROUNDING
  slug: string
  /**
   * Promotional graphic with the retreat name set into the artwork. Used for
   * Open Graph and the experiences card, never as a full-bleed background:
   * its baked-in text collides with any overlaid heading.
   */
  heroImage: string
  /** Plain photograph, safe to overlay the hero heading on. */
  heroBackground: string
  startDate: string
  endDate: string
  currency: string
  location: RetreatLocation
  hosts: RetreatHost[]
  schedule: DaySchedule[]
  includedKeys: string[]
  ticketTiers: TicketTier[]
  /** Hipsy ticketshop, embedded in an iframe. */
  ticketShopUrl: string
  /** Public Hipsy event page, used as the fallback link when the frame is blocked. */
  eventUrl: string
  gallery: RetreatGalleryImage[]
}

export interface EventTicketTier {
  id: string
  price: string
}

/**
 * Onder mannen — a single-day men's sweat lodge ceremony hosted by an outside
 * facilitator and sold through Hipsy.
 *
 * Kept apart from `AutumnGroundingRetreat`: one day rather than a weekend, so
 * the schedule is a flat list instead of per-day blocks, and the ticket tiers
 * are independent (no add-on that requires another ticket).
 */
export interface SweatLodgeEvent {
  id: RetreatId.SWEAT_LODGE
  slug: string
  /** Plain photograph; used for Open Graph, the experiences card and the hero. */
  heroImage: string
  startDate: string
  endDate: string
  currency: string
  location: RetreatLocation
  host: RetreatHost & {
    /** Where questions about health or suitability should go. */
    email: string
  }
  schedule: ScheduleItem[]
  bringKeys: string[]
  /**
   * First entry is the lead tier: the price the sticky bar advertises. The
   * cheaper youth ticket is deliberately not the headline number, because most
   * visitors cannot buy it.
   */
  ticketTiers: EventTicketTier[]
  /** Hipsy ticketshop, embedded in an iframe. */
  ticketShopUrl: string
  /** Public Hipsy event page, used as the fallback link when the frame is blocked. */
  eventUrl: string
}
