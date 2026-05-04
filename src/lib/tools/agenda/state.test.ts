import { describe, expect, it } from 'vitest'

import { AgendaBlockType, AgendaLength, AgendaNiche } from '@/constants/tools'

import {
  agendaReducer,
  createDefaultAgendaState,
  migrateAgendaState,
} from './state'

const NICHE = AgendaNiche.GENERIC

describe('createDefaultAgendaState', () => {
  it('returns empty state with current schema version and given niche', () => {
    const state = createDefaultAgendaState(NICHE)
    expect(state.schemaVersion).toBe(1)
    expect(state.niche).toBe(NICHE)
    expect(state.length).toBe(AgendaLength.THREE_DAY)
    expect(state.hiddenBlockIds).toEqual({})
    expect(state.blockOverrides).toEqual({})
    expect(state.customBlocks).toEqual([])
  })
})

describe('agendaReducer · SET_LENGTH', () => {
  it('updates length when different', () => {
    const result = agendaReducer(createDefaultAgendaState(NICHE), {
      type: 'SET_LENGTH',
      length: AgendaLength.SEVEN_DAY,
    })
    expect(result.length).toBe(AgendaLength.SEVEN_DAY)
  })

  it('returns same state when length is unchanged', () => {
    const start = createDefaultAgendaState(NICHE)
    const result = agendaReducer(start, {
      type: 'SET_LENGTH',
      length: start.length,
    })
    expect(result).toBe(start)
  })
})

describe('agendaReducer · TOGGLE_HIDE_DEFAULT', () => {
  it('hides then unhides a default block', () => {
    const blockId = 'generic-3d-d1-arrival-window'
    const hidden = agendaReducer(createDefaultAgendaState(NICHE), {
      type: 'TOGGLE_HIDE_DEFAULT',
      blockId,
    })
    expect(hidden.hiddenBlockIds[blockId]).toBe(true)
    const unhidden = agendaReducer(hidden, {
      type: 'TOGGLE_HIDE_DEFAULT',
      blockId,
    })
    expect(blockId in unhidden.hiddenBlockIds).toBe(false)
  })
})

describe('agendaReducer · EDIT_DEFAULT', () => {
  it('stores override and clamps invalid duration', () => {
    const blockId = 'generic-3d-d1-arrival-window'
    const result = agendaReducer(createDefaultAgendaState(NICHE), {
      type: 'EDIT_DEFAULT',
      blockId,
      patch: { startMinute: 600, durationMinute: 99999, title: 'Custom' },
    })
    expect(result.blockOverrides[blockId].startMinute).toBe(600)
    expect(result.blockOverrides[blockId].durationMinute).toBe(12 * 60)
    expect(result.blockOverrides[blockId].title).toBe('Custom')
  })
})

describe('agendaReducer · ADD_CUSTOM', () => {
  it('appends a sanitized custom block', () => {
    const result = agendaReducer(createDefaultAgendaState(NICHE), {
      type: 'ADD_CUSTOM',
      dayIndex: 1,
      blockType: AgendaBlockType.WORKSHOP,
      startMinute: 540,
      durationMinute: 60,
      title: '  Strategy session  ',
      notes: '<script>alert(1)</script>',
    })
    expect(result.customBlocks).toHaveLength(1)
    const block = result.customBlocks[0]
    expect(block.title).toBe('Strategy session')
    expect(block.notes).not.toContain('<')
    expect(block.dayIndex).toBe(1)
    expect(block.type).toBe(AgendaBlockType.WORKSHOP)
  })

  it('drops blocks with empty titles', () => {
    const result = agendaReducer(createDefaultAgendaState(NICHE), {
      type: 'ADD_CUSTOM',
      dayIndex: 1,
      blockType: AgendaBlockType.WORKSHOP,
      startMinute: 540,
      durationMinute: 60,
      title: '   ',
      notes: '',
    })
    expect(result.customBlocks).toHaveLength(0)
  })
})

describe('agendaReducer · REMOVE_CUSTOM', () => {
  it('removes a custom block by id', () => {
    const added = agendaReducer(createDefaultAgendaState(NICHE), {
      type: 'ADD_CUSTOM',
      dayIndex: 1,
      blockType: AgendaBlockType.WORKSHOP,
      startMinute: 540,
      durationMinute: 60,
      title: 'Removable',
      notes: '',
    })
    const id = added.customBlocks[0].id
    const removed = agendaReducer(added, { type: 'REMOVE_CUSTOM', localId: id })
    expect(removed.customBlocks).toHaveLength(0)
  })
})

describe('agendaReducer · RESET', () => {
  it('returns default state for the current niche', () => {
    const dirty = agendaReducer(createDefaultAgendaState(NICHE), {
      type: 'TOGGLE_HIDE_DEFAULT',
      blockId: 'generic-3d-d1-arrival-window',
    })
    const reset = agendaReducer(dirty, { type: 'RESET' })
    expect(reset.hiddenBlockIds).toEqual({})
    expect(reset.niche).toBe(NICHE)
  })
})

describe('migrateAgendaState', () => {
  it('returns null for non-objects', () => {
    expect(migrateAgendaState('hello')).toBeNull()
    expect(migrateAgendaState(null)).toBeNull()
  })

  it('returns null for mismatched schema version', () => {
    expect(migrateAgendaState({ schemaVersion: 99 })).toBeNull()
  })

  it('returns null for unknown niche (would otherwise crash resolver)', () => {
    const state = { ...createDefaultAgendaState(NICHE), niche: 'unknown-niche' }
    expect(migrateAgendaState(state)).toBeNull()
  })

  it('returns null for unknown length (would otherwise crash resolver)', () => {
    const state = { ...createDefaultAgendaState(NICHE), length: 99 }
    expect(migrateAgendaState(state)).toBeNull()
  })

  it('returns null when required fields are missing', () => {
    expect(
      migrateAgendaState({
        schemaVersion: 1,
        niche: NICHE,
        length: AgendaLength.THREE_DAY,
        // hiddenBlockIds, blockOverrides, customBlocks all missing
      }),
    ).toBeNull()
  })

  it('passes through current schema', () => {
    const state = createDefaultAgendaState(NICHE)
    expect(migrateAgendaState(state)).toEqual(state)
  })
})
