'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { AUDIT_STORAGE_KEY, type AuditVariant } from '@/constants/tools'

export interface AuditState {
  variant: AuditVariant
  answers: Record<string, string>
  index: number
  showReport: boolean
  started: boolean
}

interface PersistedState {
  schemaVersion: 1
  variant: AuditVariant
  answers: Record<string, string>
  index: number
  showReport: boolean
}

const DEFAULT_STATE: Omit<AuditState, 'variant'> = {
  answers: {},
  index: 0,
  showReport: false,
  started: false,
}

const storageKey = (variant: AuditVariant) =>
  `${AUDIT_STORAGE_KEY}:${variant}`

function readPersisted(variant: AuditVariant): PersistedState | null {
  if (typeof window === 'undefined') {
    return null
  }
  try {
    const raw = window.localStorage.getItem(storageKey(variant))
    if (!raw) {
      return null
    }
    const parsed = JSON.parse(raw) as Record<string, unknown>
    if (
      parsed.schemaVersion !== 1 ||
      parsed.variant !== variant ||
      typeof parsed.answers !== 'object' ||
      parsed.answers === null ||
      typeof parsed.index !== 'number'
    ) {
      return null
    }
    return parsed as unknown as PersistedState
  } catch {
    return null
  }
}

export function useAuditState(variant: AuditVariant) {
  const [state, setState] = useState<AuditState>({
    variant,
    ...DEFAULT_STATE,
  })
  const [hasResumable, setHasResumable] = useState(false)
  const hydrated = useRef(false)

  // Hydrate once on the client.
  useEffect(() => {
    if (hydrated.current) {
      return
    }
    hydrated.current = true
    const persisted = readPersisted(variant)
    if (persisted && Object.keys(persisted.answers).length > 0) {
      setHasResumable(true)
    }
  }, [variant])

  // Persist whenever state moves forward.
  useEffect(() => {
    if (typeof window === 'undefined' || !state.started) {
      return
    }
    const payload: PersistedState = {
      schemaVersion: 1,
      variant: state.variant,
      answers: state.answers,
      index: state.index,
      showReport: state.showReport,
    }
    try {
      window.localStorage.setItem(
        storageKey(variant),
        JSON.stringify(payload),
      )
    } catch {
      /* localStorage full or disabled — not fatal */
    }
  }, [variant, state])

  const startFresh = useCallback(() => {
    setHasResumable(false)
    setState({ variant, ...DEFAULT_STATE, started: true })
  }, [variant])

  const resume = useCallback(() => {
    const persisted = readPersisted(variant)
    if (!persisted) {
      startFresh()
      return
    }
    setHasResumable(false)
    setState({
      variant,
      answers: persisted.answers,
      index: persisted.index,
      showReport: persisted.showReport,
      started: true,
    })
  }, [variant, startFresh])

  const restart = useCallback(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(storageKey(variant))
      } catch {
        /* ignore */
      }
    }
    setHasResumable(false)
    setState({ variant, ...DEFAULT_STATE, started: true })
  }, [variant])

  const setAnswer = useCallback((questionId: string, optionId: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: optionId },
    }))
  }, [])

  const setIndex = useCallback((updater: (prev: number) => number) => {
    setState((prev) => ({ ...prev, index: updater(prev.index) }))
  }, [])

  const showReport = useCallback(() => {
    setState((prev) => ({ ...prev, showReport: true }))
  }, [])

  return {
    state,
    hasResumable,
    startFresh,
    resume,
    restart,
    setAnswer,
    setIndex,
    showReport,
  }
}
