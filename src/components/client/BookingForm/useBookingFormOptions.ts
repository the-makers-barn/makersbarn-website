import { useMemo } from 'react'

import { getBlockedDateRanges } from '@/constants'

import { REFERRAL_SOURCE_KEYS, RETREAT_TYPE_KEYS } from './BookingFormConstants'

interface RetreatTypeLabels {
  privateGroup: string
  yoga: string
  workshop: string
  other: string
}

interface ReferralSourceLabels {
  search: string
  socialMedia: string
  wordOfMouth: string
  previousVisit: string
  partner: string
  other: string
}

interface UseBookingFormOptionsProps {
  retreatTypes: RetreatTypeLabels
  referralSources: ReferralSourceLabels
  referralSourcePlaceholder: string
}

/**
 * Derives the translated select options and blocked dates used by the wizard steps
 */
export function useBookingFormOptions({
  retreatTypes,
  referralSources,
  referralSourcePlaceholder,
}: UseBookingFormOptionsProps) {
  const retreatTypeOptions = useMemo(
    () =>
      RETREAT_TYPE_KEYS.map((option) => ({
        value: option.value,
        label: retreatTypes[option.labelKey],
      })),
    [retreatTypes]
  )

  // The empty option keeps "How did you hear about us?" answerable and un-answerable
  const referralSourceOptions = useMemo(
    () => [
      { value: '', label: referralSourcePlaceholder },
      ...REFERRAL_SOURCE_KEYS.map((option) => ({
        value: option.value,
        label: referralSources[option.labelKey],
      })),
    ],
    [referralSources, referralSourcePlaceholder]
  )

  const blockedDateRanges = useMemo(() => getBlockedDateRanges(), [])

  return { retreatTypeOptions, referralSourceOptions, blockedDateRanges }
}
