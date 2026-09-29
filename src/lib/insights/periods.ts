import { tz } from '@date-fns/tz'
import { addDays, addMonths, addWeeks, format, startOfMonth, startOfWeek } from 'date-fns'

import { INSIGHTS_TIMEZONE, InsightsPeriod } from '@/constants/insights'

/** A half-open range: startAt inclusive, endAt exclusive, both Amsterdam midnight in ms. */
export interface DateRange {
  startAt: number
  endAt: number
  /** Inclusive first day, YYYY-MM-DD in the reporting timezone. */
  from: string
  /** Inclusive last day, YYYY-MM-DD in the reporting timezone. */
  to: string
}

export interface ReportingPeriods {
  kind: InsightsPeriod
  timezone: string
  current: DateRange
  previous: DateRange
}

const MONDAY = 1
const IN_ZONE = { in: tz(INSIGHTS_TIMEZONE) }
const DAY_FORMAT = 'yyyy-MM-dd'

function toRange(start: Date, end: Date): DateRange {
  return {
    startAt: start.getTime(),
    endAt: end.getTime(),
    from: format(start, DAY_FORMAT, IN_ZONE),
    to: format(addDays(end, -1, IN_ZONE), DAY_FORMAT, IN_ZONE),
  }
}

/**
 * The last complete week or month before `now`, plus the one before it.
 * Calendar arithmetic runs in the reporting zone so DST changes keep
 * boundaries at local midnight (a DST week is 167 or 169 hours).
 */
export function resolvePeriods(kind: InsightsPeriod, now: Date): ReportingPeriods {
  if (kind === InsightsPeriod.WEEK) {
    const thisWeek = startOfWeek(now, { ...IN_ZONE, weekStartsOn: MONDAY })
    const currentStart = addWeeks(thisWeek, -1, IN_ZONE)
    const previousStart = addWeeks(thisWeek, -2, IN_ZONE)
    return {
      kind,
      timezone: INSIGHTS_TIMEZONE,
      current: toRange(currentStart, thisWeek),
      previous: toRange(previousStart, currentStart),
    }
  }
  const thisMonth = startOfMonth(now, IN_ZONE)
  const currentStart = addMonths(thisMonth, -1, IN_ZONE)
  const previousStart = addMonths(thisMonth, -2, IN_ZONE)
  return {
    kind,
    timezone: INSIGHTS_TIMEZONE,
    current: toRange(currentStart, thisMonth),
    previous: toRange(previousStart, currentStart),
  }
}
