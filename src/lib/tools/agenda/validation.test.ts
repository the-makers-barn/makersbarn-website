import { describe, expect, it } from 'vitest'

import { AgendaBlockType, AgendaNiche } from '@/constants/tools'
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

  it('skips noFreeTime warning on travel/arrival days', () => {
    const warnings = buildAgendaWarnings([
      day([
        block(14 * 60, 120, AgendaBlockType.TRAVEL, 'Arrival'),
        block(17 * 60, 75, AgendaBlockType.RITUAL, 'Opening circle'),
        block(19 * 60, 75, AgendaBlockType.MEAL, 'Welcome dinner'),
      ]),
    ])
    expect(warnings.some((w) => w.code === 'noFreeTime')).toBe(false)
  })

  it('skips earlyStart warning when niche is meditation', () => {
    const warnings = buildAgendaWarnings(
      [
        day([
          block(6 * 60, 60, AgendaBlockType.PRACTICE, 'Sitting 1'),
          block(13 * 60, 60, AgendaBlockType.REST),
        ]),
      ],
      { niche: AgendaNiche.MEDITATION },
    )
    expect(warnings.some((w) => w.code === 'earlyStart')).toBe(false)
  })

  it('uses niche-specific structured-time threshold', () => {
    // Coaching cap is 8h; 6h of workshops shouldn't trip
    const blocks = Array.from({ length: 4 }, (_, i) =>
      block(9 * 60 + i * 100, 90, AgendaBlockType.WORKSHOP),
    )
    blocks.push(block(15 * 60, 75, AgendaBlockType.FREE))
    const warnings = buildAgendaWarnings([day(blocks)], { niche: AgendaNiche.COACHING })
    expect(warnings.some((w) => w.code === 'tooMuchStructured')).toBe(false)
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
