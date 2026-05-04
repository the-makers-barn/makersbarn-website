import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'

import {
  AGENDA_STORAGE_KEY,
  AgendaBlockType,
  AgendaLength,
  AgendaNiche,
} from '@/constants/tools'
import type { AgendaState } from '@/types/tools'

import { useAgendaState } from './useAgendaState'

const PERSIST_WAIT_MS = 250
const NICHE = AgendaNiche.GENERIC
const NICHE_KEY = `${AGENDA_STORAGE_KEY}:${NICHE}`

describe('useAgendaState', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with hasHydrated=true after mount and default state for given niche', () => {
    const { result } = renderHook(() => useAgendaState(NICHE))
    expect(result.current.hasHydrated).toBe(true)
    expect(result.current.state.niche).toBe(NICHE)
    expect(result.current.state.length).toBe(AgendaLength.THREE_DAY)
    expect(result.current.state.customBlocks).toEqual([])
  })

  it('persists state changes to localStorage after debounce', async () => {
    const { result } = renderHook(() => useAgendaState(NICHE))
    act(() => {
      result.current.dispatch({
        type: 'ADD_CUSTOM',
        dayIndex: 1,
        blockType: AgendaBlockType.WORKSHOP,
        startMinute: 540,
        durationMinute: 60,
        title: 'Smoke test',
        notes: '',
      })
    })
    await new Promise((r) => setTimeout(r, PERSIST_WAIT_MS))
    const stored = JSON.parse(localStorage.getItem(NICHE_KEY) ?? 'null') as
      | AgendaState
      | null
    expect(stored?.customBlocks.length).toBe(1)
    expect(stored?.customBlocks[0]?.title).toBe('Smoke test')
  })

  it('hydrates from localStorage on mount when niche matches', () => {
    const seed: AgendaState = {
      schemaVersion: 1,
      niche: NICHE,
      length: AgendaLength.SEVEN_DAY,
      hiddenBlockIds: { 'generic-3d-d1-arrival-window': true },
      blockOverrides: {},
      customBlocks: [],
    }
    localStorage.setItem(NICHE_KEY, JSON.stringify(seed))
    const { result } = renderHook(() => useAgendaState(NICHE))
    expect(result.current.state.length).toBe(AgendaLength.SEVEN_DAY)
    expect(
      'generic-3d-d1-arrival-window' in result.current.state.hiddenBlockIds,
    ).toBe(true)
  })

  it('does not hydrate when stored niche does not match the page niche', () => {
    const seed = {
      schemaVersion: 1,
      niche: AgendaNiche.YOGA,
      length: AgendaLength.SEVEN_DAY,
      hiddenBlockIds: {},
      blockOverrides: {},
      customBlocks: [],
    }
    localStorage.setItem(NICHE_KEY, JSON.stringify(seed))
    const { result } = renderHook(() => useAgendaState(NICHE))
    expect(result.current.state.niche).toBe(NICHE)
    expect(result.current.state.length).toBe(AgendaLength.THREE_DAY)
  })

  it('falls back to default state if localStorage is corrupt JSON', () => {
    localStorage.setItem(NICHE_KEY, '{not valid json')
    const { result } = renderHook(() => useAgendaState(NICHE))
    expect(result.current.state.length).toBe(AgendaLength.THREE_DAY)
    expect(result.current.state.customBlocks).toEqual([])
  })

  it('falls back to default state if length is out of range (corrupt state)', () => {
    localStorage.setItem(
      NICHE_KEY,
      JSON.stringify({
        schemaVersion: 1,
        niche: NICHE,
        length: 99,
        hiddenBlockIds: {},
        blockOverrides: {},
        customBlocks: [],
      }),
    )
    const { result } = renderHook(() => useAgendaState(NICHE))
    expect(result.current.state.length).toBe(AgendaLength.THREE_DAY)
  })

  it('falls back to default state if schemaVersion is unrecognized', () => {
    localStorage.setItem(
      NICHE_KEY,
      JSON.stringify({
        schemaVersion: 99,
        niche: NICHE,
        length: AgendaLength.THREE_DAY,
        hiddenBlockIds: {},
        blockOverrides: {},
        customBlocks: [],
      }),
    )
    const { result } = renderHook(() => useAgendaState(NICHE))
    expect(result.current.state.customBlocks).toEqual([])
  })
})
