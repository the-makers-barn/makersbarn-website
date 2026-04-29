import { describe, expect, it } from 'vitest'

import { CalendarPhaseId, TimelinePreset } from '@/constants/tools'
import { resolvePhases } from '@/lib/tools/calendar/presets'

import { CALENDAR_CONTENT } from './calendarContent'
import { CALENDAR_KNOWN_MILESTONE_IDS, CALENDAR_MILESTONE_IDS } from './calendarMilestoneIds'

describe('CALENDAR_CONTENT regression — content × resolver', () => {
  it('12-month preset returns all 6 canonical phases unchanged', () => {
    const phases = resolvePhases(CALENDAR_CONTENT, TimelinePreset.TWELVE_MONTHS)
    expect(phases.map((p) => p.id)).toEqual([
      CalendarPhaseId.FOUNDATION,
      CalendarPhaseId.ANCHOR,
      CalendarPhaseId.LAUNCH,
      CalendarPhaseId.LOCK_IN,
      CalendarPhaseId.FINAL_WEEKS,
      CalendarPhaseId.POST_RETREAT,
    ])
  })

  it('6-month preset removes FOUNDATION', () => {
    const phases = resolvePhases(CALENDAR_CONTENT, TimelinePreset.SIX_MONTHS)
    expect(phases.find((p) => p.id === CalendarPhaseId.FOUNDATION)).toBeUndefined()
  })

  it('6-month preset preserves original P1_* IDs inside the merged Anchor phase', () => {
    const phases = resolvePhases(CALENDAR_CONTENT, TimelinePreset.SIX_MONTHS)
    const anchor = phases.find((p) => p.id === CalendarPhaseId.ANCHOR)
    expect(anchor).toBeDefined()
    const ids = anchor!.milestones.map((m) => m.id)
    // Original Foundation IDs must appear (mandate per spec §4.2)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.P1_VISION)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.P1_AVATAR)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.P1_BUDGET)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.P1_PRICING_MODEL)
    // Preset-specific M6_* IDs also present
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.M6_SPRINT_VENUE_LOCK)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.M6_SPRINT_PARALLEL_LANDING)
    // Original Anchor canonical IDs preserved (e.g. P2_VENUE_CONTRACT)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.P2_VENUE_CONTRACT)
  })

  it('6-month preset prepends Foundation milestones BEFORE canonical Anchor milestones', () => {
    const phases = resolvePhases(CALENDAR_CONTENT, TimelinePreset.SIX_MONTHS)
    const anchor = phases.find((p) => p.id === CalendarPhaseId.ANCHOR)!
    const ids = anchor.milestones.map((m) => m.id)
    const visionIdx = ids.indexOf(CALENDAR_MILESTONE_IDS.P1_VISION)
    const venueContractIdx = ids.indexOf(CALENDAR_MILESTONE_IDS.P2_VENUE_CONTRACT)
    expect(visionIdx).toBeGreaterThanOrEqual(0)
    expect(venueContractIdx).toBeGreaterThan(visionIdx)
  })

  it('3-month preset removes FOUNDATION and merges P1 IDs into Anchor', () => {
    const phases = resolvePhases(CALENDAR_CONTENT, TimelinePreset.THREE_MONTHS)
    expect(phases.find((p) => p.id === CalendarPhaseId.FOUNDATION)).toBeUndefined()
    const anchor = phases.find((p) => p.id === CalendarPhaseId.ANCHOR)!
    const ids = anchor.milestones.map((m) => m.id)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.M3_VENUE_PREBOOKED)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.P1_VISION)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.P1_AVATAR)
    expect(ids).toContain(CALENDAR_MILESTONE_IDS.M3_FOUNDING_TIER)
  })

  it('every milestone ID in the resolved 12-month phases is in CALENDAR_KNOWN_MILESTONE_IDS', () => {
    const phases = resolvePhases(CALENDAR_CONTENT, TimelinePreset.TWELVE_MONTHS)
    for (const phase of phases) {
      for (const milestone of phase.milestones) {
        expect(CALENDAR_KNOWN_MILESTONE_IDS.has(milestone.id)).toBe(true)
      }
    }
  })
})
