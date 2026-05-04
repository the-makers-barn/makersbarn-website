import { describe, expect, it } from 'vitest'

import { AgendaBlockType } from '@/constants/tools'
import type { AgendaResolvedBlock, AgendaResolvedDay } from '@/types/tools'

import { buildAgendaWarnings } from './validation'

function block(
  start: number,
  duration: number,
  type: AgendaBlockType,
  title = 'Block',
): AgendaResolvedBlock {
  return {
    id: `b-${start}`,
    dayIndex: 1,
    type,
    startMinute: start,
    durationMinute: duration,
    title,
    notes: '',
    isCustom: false,
  }
}

function day(blocks: AgendaResolvedBlock[]): AgendaResolvedDay {
  return { dayIndex: 1, title: 'Day 1', blocks }
}

describe('buildAgendaWarnings', () => {
  it('flags too much structured time', () => {
    const warnings = buildAgendaWarnings([
      day([
        block(8 * 60, 90, AgendaBlockType.WORKSHOP),
        block(10 * 60, 90, AgendaBlockType.WORKSHOP),
        block(13 * 60, 90, AgendaBlockType.PRACTICE),
        block(15 * 60, 75, AgendaBlockType.WORKSHOP),
        block(17 * 60, 60, AgendaBlockType.FREE),
      ]),
    ])
    expect(warnings.some((w) => w.code === 'tooMuchStructured')).toBe(true)
  })

  it('flags missing free time', () => {
    const warnings = buildAgendaWarnings([
      day([
        block(9 * 60, 60, AgendaBlockType.WORKSHOP),
        block(13 * 60, 60, AgendaBlockType.MEAL),
      ]),
    ])
    expect(warnings.some((w) => w.code === 'noFreeTime')).toBe(true)
  })

  it('flags overlong structured blocks', () => {
    const warnings = buildAgendaWarnings([
      day([
        block(9 * 60, 180, AgendaBlockType.WORKSHOP, 'Marathon'),
        block(13 * 60, 60, AgendaBlockType.FREE),
      ]),
    ])
    expect(warnings.some((w) => w.code === 'overlongBlock')).toBe(true)
  })

  it('flags early starts', () => {
    const warnings = buildAgendaWarnings([
      day([
        block(5 * 60, 60, AgendaBlockType.PRACTICE),
        block(13 * 60, 60, AgendaBlockType.FREE),
      ]),
    ])
    expect(warnings.some((w) => w.code === 'earlyStart')).toBe(true)
  })

  it('flags overlapping blocks', () => {
    const warnings = buildAgendaWarnings([
      day([
        block(9 * 60, 90, AgendaBlockType.WORKSHOP),
        block(10 * 60, 30, AgendaBlockType.MEAL, 'Lunch'),
      ]),
    ])
    expect(warnings.some((w) => w.code === 'overlap')).toBe(true)
  })

  it('returns no warnings for a balanced day', () => {
    const warnings = buildAgendaWarnings([
      day([
        block(8 * 60, 60, AgendaBlockType.PRACTICE),
        block(9 * 60, 60, AgendaBlockType.MEAL),
        block(10 * 60 + 30, 90, AgendaBlockType.WORKSHOP),
        block(13 * 60, 75, AgendaBlockType.MEAL),
        block(14 * 60 + 30, 120, AgendaBlockType.FREE),
        block(16 * 60 + 30, 60, AgendaBlockType.WORKSHOP),
        block(18 * 60, 60, AgendaBlockType.MEAL),
      ]),
    ])
    expect(warnings).toEqual([])
  })
})
