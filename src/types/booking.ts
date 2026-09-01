/**
 * Retreat type options for booking form
 */
export enum RetreatType {
  PRIVATE_GROUP = 'private_group',
  YOGA = 'yoga',
  WORKSHOP = 'workshop',
  OTHER = 'other',
}

/**
 * Referral source options for booking form ("How did you hear about us?")
 * Optional question - empty string means the visitor did not answer
 */
export enum ReferralSource {
  SEARCH = 'search',
  SOCIAL_MEDIA = 'social_media',
  WORD_OF_MOUTH = 'word_of_mouth',
  PREVIOUS_VISIT = 'previous_visit',
  PARTNER = 'partner',
  OTHER = 'other',
}

/**
 * Date range for blocked dates (runtime - uses Date objects)
 */
export interface DateRange {
  start: Date
  end: Date
}

/**
 * Date range configuration (static - uses ISO strings)
 * Prevents hydration mismatch by avoiding Date object creation at module load
 */
export interface DateRangeConfig {
  start: string
  end: string
}

/**
 * Form data structure for booking form (client-side)
 */
export interface BookingFormData {
  name: string
  email: string
  phone: string
  startDate: string
  duration: string
  flexibleDates: boolean
  flexibleDatesText: string
  minGroupSize: string
  maxGroupSize: string
  retreatType: RetreatType
  retreatTypeOther: string
  accommodationPreferences: string
  cateringNeeded: boolean
  cateringDetails: string
  referralSource: ReferralSource | ''
  referralSourceOther: string
  extraInfo: string
}

/**
 * Validated booking form data (after Zod validation)
 * Only name and email are required - everything else captures intent
 */
export interface ValidatedBookingFormData {
  name: string
  email: string
  phone?: string
  startDate?: string
  duration?: number
  flexibleDates: boolean
  flexibleDatesText?: string
  minGroupSize?: number
  maxGroupSize?: number
  retreatType?: RetreatType
  retreatTypeOther?: string
  accommodationPreferences?: string
  cateringNeeded: boolean
  cateringDetails?: string
  referralSource?: ReferralSource
  referralSourceOther?: string
  extraInfo?: string
}

/**
 * Result of booking form submission
 * Uses messageCode for i18n - client maps codes to translations
 */
export interface SubmitBookingFormResult {
  success: boolean
  messageCode: string
  errors?: Record<string, string>
}

/**
 * Partial booking contact data (step 1 of wizard)
 */
export interface PartialBookingContactData {
  name: string
  email: string
  phone?: string
}

/**
 * Result of partial booking notification
 */
export interface PartialBookingResult {
  success: boolean
  message?: string
}
