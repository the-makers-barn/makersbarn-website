export enum RetreatId {
  SHANTI_DEVA = 'shanti-deva',
  AUTUMN_GROUNDING = 'autumn-grounding',
}

export enum RetreatDateId {
  JUNE_2026 = 'june-2026',
  AUGUST_2026 = 'august-2026',
}

export enum ScheduleDayType {
  ARRIVAL = 'arrival',
  STUDY = 'study',
  FINAL = 'final',
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

export interface PriceBreakdownItem {
  labelKey: string
  amount: string
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
}

export interface ParticipantRange {
  min: number
  max: number
}

export interface RetreatData {
  id: RetreatId
  slug: string
  heroImage: string
  teachers: Teacher[]
  dates: RetreatDate[]
  duration: string
  dailyTime: string
  location: RetreatLocation
  schedule: DaySchedule[]
  specialActivityKeys: string[]
  includedServiceKeys: string[]
  accommodationOptionKeys: string[]
  priceBreakdown: PriceBreakdownItem[]
  totalPrice: string
  paymentTermKeys: string[]
  cancellationPolicyKeys: string[]
  participantRange: ParticipantRange
  contact: RetreatContact
  bookingUrl: string
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
  heroImage: string
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
