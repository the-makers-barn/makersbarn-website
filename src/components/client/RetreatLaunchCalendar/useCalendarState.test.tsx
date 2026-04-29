import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'

import { CALENDAR_STORAGE_KEY, MilestoneStatus } from '@/constants/tools'

import { useCalendarState } from './useCalendarState'

const PERSIST_WAIT_MS = 250

describe('useCalendarState', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with hasHydrated=true after mount and empty default state', () => {
    const { result } = renderHook(() => useCalendarState())
    expect(result.current.hasHydrated).toBe(true)
    expect(result.current.state.itemStates).toEqual({})
    expect(result.current.state.customItems).toEqual([])
  })

  it('persists state changes to localStorage after debounce', async () => {
    const { result } = renderHook(() => useCalendarState())
    act(() => {
      result.current.dispatch({ type: 'TOGGLE_DONE', milestoneId: 'p1-vision' })
    })
    await new Promise((r) => setTimeout(r, PERSIST_WAIT_MS))
    const stored = JSON.parse(localStorage.getItem(CALENDAR_STORAGE_KEY) ?? 'null') as {
      itemStates: Record<string, MilestoneStatus>
    } | null
    expect(stored?.itemStates['p1-vision']).toBe(MilestoneStatus.DONE)
  })

  it('hydrates from localStorage on mount', () => {
    localStorage.setItem(
      CALENDAR_STORAGE_KEY,
      JSON.stringify({
        schemaVersion: 1,
        itemStates: { 'p1-vision': MilestoneStatus.DISMISSED },
        customItems: [],
      }),
    )
    const { result } = renderHook(() => useCalendarState())
    expect(result.current.state.itemStates['p1-vision']).toBe(MilestoneStatus.DISMISSED)
  })

  it('falls back to default state if localStorage is corrupt', () => {
    localStorage.setItem(CALENDAR_STORAGE_KEY, '{not valid json')
    const { result } = renderHook(() => useCalendarState())
    expect(result.current.state.itemStates).toEqual({})
  })

  it('falls back to default state if schemaVersion is unrecognized', () => {
    localStorage.setItem(
      CALENDAR_STORAGE_KEY,
      JSON.stringify({
        schemaVersion: 99,
        itemStates: { x: MilestoneStatus.DONE },
        customItems: [],
      }),
    )
    const { result } = renderHook(() => useCalendarState())
    expect(result.current.state.itemStates).toEqual({})
  })
})
