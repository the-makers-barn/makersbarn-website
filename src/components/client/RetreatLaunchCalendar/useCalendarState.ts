'use client'

import { useEffect, useReducer, useRef, useState, type Dispatch } from 'react'

import { CALENDAR_STORAGE_KEY } from '@/constants/tools'
import { createLogger } from '@/lib/logger'
import {
  type CalendarAction,
  calendarReducer,
  createDefaultCalendarState,
  migrateState,
} from '@/lib/tools/calendar/state'
import type { CalendarState } from '@/types/tools'

const PERSIST_DEBOUNCE_MS = 200
const logger = createLogger('use-calendar-state')

export interface UseCalendarStateReturn {
  state: CalendarState
  hasHydrated: boolean
  dispatch: Dispatch<CalendarAction>
}

export function useCalendarState(): UseCalendarStateReturn {
  const [state, dispatch] = useReducer(calendarReducer, createDefaultCalendarState())
  const [hasHydrated, setHasHydrated] = useState(false)
  const hasMounted = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    try {
      const raw = window.localStorage.getItem(CALENDAR_STORAGE_KEY)
      if (raw) {
        const parsed: unknown = JSON.parse(raw)
        const migrated = migrateState(parsed)
        if (migrated !== null) {
          dispatch({ type: 'HYDRATE', state: migrated })
        }
      }
    } catch (error) {
      logger.warn('Failed to hydrate calendar state', { error })
    }
    setHasHydrated(true)
  }, [])

  useEffect(() => {
    if (!hasHydrated) {
      return
    }
    if (typeof window === 'undefined') {
      return
    }
    if (!hasMounted.current) {
      hasMounted.current = true
      return
    }
    const handle = window.setTimeout(() => {
      try {
        window.localStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(state))
      } catch (error) {
        logger.warn('Failed to persist calendar state', { error })
      }
    }, PERSIST_DEBOUNCE_MS)
    return () => {
      window.clearTimeout(handle)
    }
  }, [state, hasHydrated])

  return { state, hasHydrated, dispatch }
}
