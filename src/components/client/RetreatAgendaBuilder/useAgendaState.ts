'use client'

import { useEffect, useReducer, useRef, useState, type Dispatch } from 'react'

import { AGENDA_STORAGE_KEY, type AgendaNiche } from '@/constants/tools'
import { createLogger } from '@/lib/logger'
import {
  type AgendaAction,
  agendaReducer,
  createDefaultAgendaState,
  migrateAgendaState,
} from '@/lib/tools/agenda/state'
import type { AgendaState } from '@/types/tools'

const PERSIST_DEBOUNCE_MS = 200
const logger = createLogger('use-agenda-state')

function storageKey(niche: AgendaNiche): string {
  return `${AGENDA_STORAGE_KEY}:${niche}`
}

export interface UseAgendaStateReturn {
  state: AgendaState
  hasHydrated: boolean
  dispatch: Dispatch<AgendaAction>
}

export function useAgendaState(niche: AgendaNiche): UseAgendaStateReturn {
  const [state, dispatch] = useReducer(agendaReducer, createDefaultAgendaState(niche))
  const [hasHydrated, setHasHydrated] = useState(false)
  const hasMounted = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    try {
      const raw = window.localStorage.getItem(storageKey(niche))
      if (raw) {
        const parsed: unknown = JSON.parse(raw)
        const migrated = migrateAgendaState(parsed)
        if (migrated !== null && migrated.niche === niche) {
          dispatch({ type: 'HYDRATE', state: migrated })
        }
      }
    } catch (error) {
      logger.warn('Failed to hydrate agenda state', { error })
    }
    setHasHydrated(true)
  }, [niche])

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
        window.localStorage.setItem(storageKey(niche), JSON.stringify(state))
      } catch (error) {
        logger.warn('Failed to persist agenda state', { error })
      }
    }, PERSIST_DEBOUNCE_MS)
    return () => {
      window.clearTimeout(handle)
    }
  }, [state, hasHydrated, niche])

  return { state, hasHydrated, dispatch }
}
