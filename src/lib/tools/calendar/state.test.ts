import { describe, expect, it } from 'vitest'

import { CALENDAR_CUSTOM_ITEM_LIMITS, CalendarPhaseId, MilestoneStatus } from '@/constants/tools'

import {
  calendarReducer,
  createDefaultCalendarState,
  migrateState,
} from './state'

describe('createDefaultCalendarState', () => {
  it('returns empty state with current schema version', () => {
    const state = createDefaultCalendarState()
    expect(state.schemaVersion).toBe(1)
    expect(state.itemStates).toEqual({})
    expect(state.customItems).toEqual([])
  })
})

describe('calendarReducer', () => {
  it('TOGGLE_DONE adds DONE status', () => {
    const result = calendarReducer(createDefaultCalendarState(), {
      type: 'TOGGLE_DONE', milestoneId: 'p1-vision',
    })
    expect(result.itemStates['p1-vision']).toBe(MilestoneStatus.DONE)
  })

  it('TOGGLE_DONE removes status when already DONE', () => {
    const start = { ...createDefaultCalendarState(), itemStates: { 'p1-vision': MilestoneStatus.DONE as const } }
    const result = calendarReducer(start, { type: 'TOGGLE_DONE', milestoneId: 'p1-vision' })
    expect(result.itemStates['p1-vision']).toBeUndefined()
  })

  it('TOGGLE_DISMISSED replaces DONE with DISMISSED', () => {
    const start = { ...createDefaultCalendarState(), itemStates: { 'p1-vision': MilestoneStatus.DONE as const } }
    const result = calendarReducer(start, { type: 'TOGGLE_DISMISSED', milestoneId: 'p1-vision' })
    expect(result.itemStates['p1-vision']).toBe(MilestoneStatus.DISMISSED)
  })

  it('ADD_CUSTOM appends a custom item with generated ID', () => {
    const result = calendarReducer(createDefaultCalendarState(), {
      type: 'ADD_CUSTOM', phaseId: CalendarPhaseId.FOUNDATION, text: 'Reach out to massage therapist',
    })
    expect(result.customItems).toHaveLength(1)
    expect(result.customItems[0].text).toBe('Reach out to massage therapist')
    expect(result.customItems[0].id).toMatch(/^[0-9a-f-]{36}$/)
  })

  it('ADD_CUSTOM is a no-op when phase already has MAX_PER_PHASE items', () => {
    const items = Array.from({ length: CALENDAR_CUSTOM_ITEM_LIMITS.MAX_PER_PHASE }, (_, i) => ({
      id: `existing-${i}`,
      phaseId: CalendarPhaseId.FOUNDATION,
      text: `existing ${i}`,
      status: MilestoneStatus.PENDING,
    }))
    const start = { ...createDefaultCalendarState(), customItems: items }
    const result = calendarReducer(start, {
      type: 'ADD_CUSTOM', phaseId: CalendarPhaseId.FOUNDATION, text: 'one more',
    })
    expect(result.customItems).toHaveLength(CALENDAR_CUSTOM_ITEM_LIMITS.MAX_PER_PHASE)
  })

  it('ADD_CUSTOM is a no-op when total custom items reaches MAX_TOTAL', () => {
    const items = Array.from({ length: CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TOTAL }, (_, i) => ({
      id: `existing-${i}`,
      phaseId: i % 2 === 0 ? CalendarPhaseId.FOUNDATION : CalendarPhaseId.ANCHOR,
      text: `existing ${i}`,
      status: MilestoneStatus.PENDING,
    }))
    const start = { ...createDefaultCalendarState(), customItems: items }
    const result = calendarReducer(start, {
      type: 'ADD_CUSTOM', phaseId: CalendarPhaseId.LAUNCH, text: 'one more',
    })
    expect(result.customItems).toHaveLength(CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TOTAL)
  })

  it('ADD_CUSTOM sanitizes the text input', () => {
    const result = calendarReducer(createDefaultCalendarState(), {
      type: 'ADD_CUSTOM', phaseId: CalendarPhaseId.FOUNDATION, text: '<script>x</script>',
    })
    expect(result.customItems[0].text).toBe('scriptx/script')
  })

  it('ADD_CUSTOM truncates text at MAX_TEXT_LENGTH', () => {
    const result = calendarReducer(createDefaultCalendarState(), {
      type: 'ADD_CUSTOM', phaseId: CalendarPhaseId.FOUNDATION, text: 'a'.repeat(200),
    })
    expect(result.customItems[0].text.length).toBe(CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH)
  })

  it('REMOVE_CUSTOM removes by id', () => {
    const start = {
      ...createDefaultCalendarState(),
      customItems: [{ id: 'a', phaseId: CalendarPhaseId.FOUNDATION, text: 'x', status: MilestoneStatus.PENDING }],
    }
    const result = calendarReducer(start, { type: 'REMOVE_CUSTOM', localId: 'a' })
    expect(result.customItems).toHaveLength(0)
  })

  it('RESET returns default state', () => {
    const start = {
      ...createDefaultCalendarState(),
      itemStates: { 'p1-vision': MilestoneStatus.DONE as const },
    }
    const result = calendarReducer(start, { type: 'RESET' })
    expect(result).toEqual(createDefaultCalendarState())
  })

  it('HYDRATE replaces state', () => {
    const incoming = {
      schemaVersion: 1 as const,
      itemStates: { 'p1-vision': MilestoneStatus.DONE as const },
      customItems: [],
    }
    const result = calendarReducer(createDefaultCalendarState(), { type: 'HYDRATE', state: incoming })
    expect(result).toEqual(incoming)
  })
})

describe('migrateState', () => {
  it('returns the input unchanged for v1 state', () => {
    const v1 = { schemaVersion: 1, itemStates: { 'p1-vision': MilestoneStatus.DONE }, customItems: [] }
    expect(migrateState(v1)).toEqual(v1)
  })

  it('returns null for unknown schemaVersion', () => {
    expect(migrateState({ schemaVersion: 99, itemStates: {}, customItems: [] })).toBeNull()
  })

  it('returns null for non-object input', () => {
    expect(migrateState(null)).toBeNull()
    expect(migrateState('garbage')).toBeNull()
    expect(migrateState(undefined)).toBeNull()
  })

  it('returns null for missing schemaVersion', () => {
    expect(migrateState({ itemStates: {}, customItems: [] })).toBeNull()
  })
})
