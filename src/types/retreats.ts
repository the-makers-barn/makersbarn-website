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

export interface ScheduleItem {
  time: string
  activityKey: string
}

export interface DaySchedule {
  dayType: ScheduleDayType
  items: ScheduleItem[]
}

export interface AccessibilityItem {
  key: string
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
}

export interface ParticipantRange {
  min: number
  max: number
}

export interface RetreatData {
  id: RetreatId
  slug: string
  heroImage: string
  /** Embed URL of the promo video shown below the hero. */
  videoEmbedUrl: string
  teachers: Teacher[]
  dates: RetreatDate[]
  duration: string
  location: RetreatLocation
  /**
   * The rhythm of a typical retreat day, in order. Each entry keys into the
   * `shantiDevaRetreat.schedule.activities` dictionary block. Deliberately
   * untimed — the flow is an indication, not a timetable.
   */
  dayFlowKeys: string[]
  includedServiceKeys: string[]
  accommodationOptionKeys: string[]
  participantRange: ParticipantRange
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
