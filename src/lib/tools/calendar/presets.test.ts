import { describe, expect, it } from 'vitest'

import { CalendarPhaseId, TimelinePreset } from '@/constants/tools'
import type { CalendarContent, CalendarMilestone, CalendarPhase } from '@/types/tools'
import type { Language } from '@/types/common'

import { resolvePhases } from './presets'

const localized = (s: string): Record<Language, string> => ({
  en: s, nl: s, de: s,
})

const milestone = (id: string, text = id): CalendarMilestone => ({ id, text: localized(text) })

const phase = (id: CalendarPhaseId, milestones: CalendarMilestone[]): CalendarPhase => ({
  id,
  range: localized('canonical'),
  rangeStartMonth: 12,
  rangeEndMonth: 9,
  eyebrow: localized('Phase'),
  title: localized('Title'),
  milestones,
})

const sampleContent: CalendarContent = {
  canonical: [
    phase(CalendarPhaseId.FOUNDATION, [milestone('p1-a'), milestone('p1-b')]),
    phase(CalendarPhaseId.ANCHOR, [milestone('p2-a')]),
    phase(CalendarPhaseId.LAUNCH, [milestone('p3-a')]),
  ],
  overrides: {
    [TimelinePreset.SIX_MONTHS]: {
      impactSubtitle: localized('compressed'),
      phases: {
        [CalendarPhaseId.FOUNDATION]: { kind: 'remove' },
        [CalendarPhaseId.ANCHOR]: {
          kind: 'modify',
          patch: { title: localized('Sprint') },
          extraMilestones: [
            { position: 'prepend', milestone: milestone('p1-a') },
            { position: 'prepend', milestone: milestone('p1-b') },
          ],
        },
      },
    },
    [TimelinePreset.NINE_MONTHS]: {
      impactSubtitle: localized('shorter'),
      phases: {
        [CalendarPhaseId.FOUNDATION]: {
          kind: 'modify',
          patch: { range: localized('6-9 months') },
        },
      },
    },
  },
}

describe('resolvePhases', () => {
  it('returns canonical phases for the 12-month preset', () => {
    const result = resolvePhases(sampleContent, TimelinePreset.TWELVE_MONTHS)
    expect(result.map((p) => p.id)).toEqual([
      CalendarPhaseId.FOUNDATION, CalendarPhaseId.ANCHOR, CalendarPhaseId.LAUNCH,
    ])
  })

  it('removes phases marked kind: remove', () => {
    const result = resolvePhases(sampleContent, TimelinePreset.SIX_MONTHS)
    expect(result.map((p) => p.id)).toEqual([CalendarPhaseId.ANCHOR, CalendarPhaseId.LAUNCH])
  })

  it('preserves original milestone IDs when phases merge via prepend', () => {
    const result = resolvePhases(sampleContent, TimelinePreset.SIX_MONTHS)
    const sprint = result.find((p) => p.id === CalendarPhaseId.ANCHOR)
    expect(sprint?.milestones.map((m) => m.id)).toEqual(['p1-a', 'p1-b', 'p2-a'])
  })

  it('applies field-level patch via kind: modify', () => {
    const result = resolvePhases(sampleContent, TimelinePreset.NINE_MONTHS)
    const foundation = result.find((p) => p.id === CalendarPhaseId.FOUNDATION)
    expect(foundation?.range.en).toBe('6-9 months')
  })

  it('returns canonical when no override exists for the preset', () => {
    const result = resolvePhases(sampleContent, TimelinePreset.THREE_MONTHS)
    expect(result.map((p) => p.id)).toEqual([
      CalendarPhaseId.FOUNDATION, CalendarPhaseId.ANCHOR, CalendarPhaseId.LAUNCH,
    ])
  })

  it('appends extraMilestones with position: append', () => {
    const content: CalendarContent = {
      canonical: [phase(CalendarPhaseId.FOUNDATION, [milestone('p1-a')])],
      overrides: {
        [TimelinePreset.SIX_MONTHS]: {
          impactSubtitle: localized('x'),
          phases: {
            [CalendarPhaseId.FOUNDATION]: {
              kind: 'modify', patch: {},
              extraMilestones: [{ position: 'append', milestone: milestone('p1-z') }],
            },
          },
        },
      },
    }
    const result = resolvePhases(content, TimelinePreset.SIX_MONTHS)
    expect(result[0].milestones.map((m) => m.id)).toEqual(['p1-a', 'p1-z'])
  })

  it('inserts after named milestone via position: { afterId }', () => {
    const content: CalendarContent = {
      canonical: [phase(CalendarPhaseId.FOUNDATION, [milestone('p1-a'), milestone('p1-b')])],
      overrides: {
        [TimelinePreset.SIX_MONTHS]: {
          impactSubtitle: localized('x'),
          phases: {
            [CalendarPhaseId.FOUNDATION]: {
              kind: 'modify', patch: {},
              extraMilestones: [{ position: { afterId: 'p1-a' }, milestone: milestone('p1-x') }],
            },
          },
        },
      },
    }
    const result = resolvePhases(content, TimelinePreset.SIX_MONTHS)
    expect(result[0].milestones.map((m) => m.id)).toEqual(['p1-a', 'p1-x', 'p1-b'])
  })

  it('throws when afterId target does not exist', () => {
    const content: CalendarContent = {
      canonical: [phase(CalendarPhaseId.FOUNDATION, [milestone('p1-a')])],
      overrides: {
        [TimelinePreset.SIX_MONTHS]: {
          impactSubtitle: localized('x'),
          phases: {
            [CalendarPhaseId.FOUNDATION]: {
              kind: 'modify', patch: {},
              extraMilestones: [{ position: { afterId: 'does-not-exist' }, milestone: milestone('p1-x') }],
            },
          },
        },
      },
    }
    expect(() => resolvePhases(content, TimelinePreset.SIX_MONTHS)).toThrow(/afterId/)
  })
})
