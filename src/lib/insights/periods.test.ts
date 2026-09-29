import { describe, expect, it } from 'vitest'

import { InsightsPeriod, INSIGHTS_TIMEZONE } from '@/constants/insights'

import { resolvePeriods } from './periods'

const HOUR = 60 * 60 * 1000

describe('resolvePeriods', () => {
  it('week: last complete Monday-to-Sunday week and the one before, Amsterdam midnight', () => {
    const now = new Date('2026-09-28T06:00:00Z') // Monday 08:00 in Amsterdam (CEST)
    const periods = resolvePeriods(InsightsPeriod.WEEK, now)
    expect(periods.kind).toBe(InsightsPeriod.WEEK)
    expect(periods.timezone).toBe(INSIGHTS_TIMEZONE)
    expect(periods.current).toEqual({
      startAt: Date.parse('2026-09-20T22:00:00Z'),
      endAt: Date.parse('2026-09-27T22:00:00Z'),
      from: '2026-09-21',
      to: '2026-09-27',
    })
    expect(periods.previous).toEqual({
      startAt: Date.parse('2026-09-13T22:00:00Z'),
      endAt: Date.parse('2026-09-20T22:00:00Z'),
      from: '2026-09-14',
      to: '2026-09-20',
    })
  })

  it('week: a Sunday still reports the week that ended a week ago', () => {
    const periods = resolvePeriods(InsightsPeriod.WEEK, new Date('2026-09-27T10:00:00Z'))
    expect(periods.current.from).toBe('2026-09-14')
    expect(periods.current.to).toBe('2026-09-20')
  })

  it('week: now the Monday right after DST ends, current week is the transition week at 169 hours', () => {
    const periods = resolvePeriods(InsightsPeriod.WEEK, new Date('2026-10-26T07:00:00Z'))
    expect(periods.current.from).toBe('2026-10-19')
    expect(periods.current.to).toBe('2026-10-25')
    expect(periods.current.startAt).toBe(Date.parse('2026-10-18T22:00:00Z'))
    expect(periods.current.endAt).toBe(Date.parse('2026-10-25T23:00:00Z'))
    expect((periods.current.endAt - periods.current.startAt) / HOUR).toBe(169)
  })

  it('week: now the Monday right after DST starts, current week is the transition week at 167 hours', () => {
    const periods = resolvePeriods(InsightsPeriod.WEEK, new Date('2026-03-30T06:00:00Z'))
    expect(periods.current.from).toBe('2026-03-23')
    expect(periods.current.to).toBe('2026-03-29')
    expect(periods.current.startAt).toBe(Date.parse('2026-03-22T23:00:00Z'))
    expect(periods.current.endAt).toBe(Date.parse('2026-03-29T22:00:00Z'))
    expect((periods.current.endAt - periods.current.startAt) / HOUR).toBe(167)
  })

  it('week: now exactly at Monday 00:00 Amsterdam, the week that just completed is still current', () => {
    const periods = resolvePeriods(InsightsPeriod.WEEK, new Date('2026-09-27T22:00:00Z'))
    expect(periods.current.from).toBe('2026-09-21')
    expect(periods.current.to).toBe('2026-09-27')
    expect(periods.previous.from).toBe('2026-09-14')
    expect(periods.previous.to).toBe('2026-09-20')
  })

  it('week: the DST-end week is 169 hours long and boundaries stay at local midnight', () => {
    const periods = resolvePeriods(InsightsPeriod.WEEK, new Date('2026-11-02T07:00:00Z'))
    expect(periods.current.from).toBe('2026-10-26')
    expect(periods.current.to).toBe('2026-11-01')
    expect(periods.current.startAt).toBe(Date.parse('2026-10-25T23:00:00Z'))
    expect(periods.current.endAt).toBe(Date.parse('2026-11-01T23:00:00Z'))
    expect((periods.current.endAt - periods.current.startAt) / HOUR).toBe(168)
    expect((periods.previous.endAt - periods.previous.startAt) / HOUR).toBe(169)
  })

  it('month: last complete calendar month and the one before it', () => {
    const periods = resolvePeriods(InsightsPeriod.MONTH, new Date('2026-10-01T05:00:00Z'))
    expect(periods.current).toEqual({
      startAt: Date.parse('2026-08-31T22:00:00Z'),
      endAt: Date.parse('2026-09-30T22:00:00Z'),
      from: '2026-09-01',
      to: '2026-09-30',
    })
    expect(periods.previous.from).toBe('2026-08-01')
    expect(periods.previous.to).toBe('2026-08-31')
  })

  it('month: January reports December of the previous year', () => {
    const periods = resolvePeriods(InsightsPeriod.MONTH, new Date('2027-01-01T05:00:00Z'))
    expect(periods.current.from).toBe('2026-12-01')
    expect(periods.current.to).toBe('2026-12-31')
    expect(periods.previous.from).toBe('2026-11-01')
    expect(periods.current.startAt).toBe(Date.parse('2026-11-30T23:00:00Z'))
  })
})
