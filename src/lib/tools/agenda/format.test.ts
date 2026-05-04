import { describe, expect, it } from 'vitest'

import { formatDuration, formatMinutesAsTime, parseTimeToMinutes } from './format'

describe('formatMinutesAsTime', () => {
  it('formats hours and minutes with zero-padding', () => {
    expect(formatMinutesAsTime(0)).toBe('00:00')
    expect(formatMinutesAsTime(7 * 60 + 5)).toBe('07:05')
    expect(formatMinutesAsTime(23 * 60 + 59)).toBe('23:59')
  })

  it('clamps out-of-range values', () => {
    expect(formatMinutesAsTime(-10)).toBe('00:00')
    expect(formatMinutesAsTime(99 * 60)).toBe('23:59')
  })
})

describe('formatDuration', () => {
  it('renders short durations in minutes', () => {
    expect(formatDuration(45)).toBe('45 min')
  })

  it('renders hour-rounded durations as h', () => {
    expect(formatDuration(120)).toBe('2h')
  })

  it('renders mixed durations as h Xm', () => {
    expect(formatDuration(90)).toBe('1h 30m')
  })
})

describe('parseTimeToMinutes', () => {
  it('parses HH:MM strings', () => {
    expect(parseTimeToMinutes('07:30')).toBe(7 * 60 + 30)
    expect(parseTimeToMinutes('23:59')).toBe(23 * 60 + 59)
  })

  it('returns null for invalid strings', () => {
    expect(parseTimeToMinutes('25:00')).toBeNull()
    expect(parseTimeToMinutes('not a time')).toBeNull()
    expect(parseTimeToMinutes('')).toBeNull()
  })
})
