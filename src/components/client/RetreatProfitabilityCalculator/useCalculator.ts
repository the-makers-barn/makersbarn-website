'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { RetreatRole } from '@/constants/tools'
import { decodeCalculatorInputs, encodeCalculatorInputs } from '@/lib/tools'
import type { CalculatorInputs, CalculatorResults } from '@/types/tools'

import { calculateRetreatProfitability } from './calculate'

const URL_DEBOUNCE_MS = 300

interface UseCalculatorReturn {
  inputs: CalculatorInputs
  results: CalculatorResults
  setInput: <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => void
  reset: () => void
}

export function useCalculator(defaults: CalculatorInputs): UseCalculatorReturn {
  const [inputs, setInputs] = useState<CalculatorInputs>(() => {
    if (typeof window === 'undefined') { return defaults }
    const params = new URLSearchParams(window.location.search)
    return decodeCalculatorInputs(params, defaults)
  })

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') { return }
    if (timeoutRef.current !== null) { clearTimeout(timeoutRef.current) }
    timeoutRef.current = setTimeout(() => {
      const params = encodeCalculatorInputs(inputs)
      const newUrl = `${window.location.pathname}?${params.toString()}`
      window.history.replaceState(null, '', newUrl)
    }, URL_DEBOUNCE_MS)

    return () => {
      if (timeoutRef.current !== null) { clearTimeout(timeoutRef.current) }
    }
  }, [inputs])

  const setInput = useCallback(
    <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => {
      setInputs((prev) => {
        const next = { ...prev, [key]: value }
        if (key === 'role' && value !== RetreatRole.ORGANIZER_ONLY) {
          next.facilitatorFee = 0
        }
        return next
      })
    },
    []
  )

  const reset = useCallback(() => {
    setInputs(defaults)
  }, [defaults])

  const results = useMemo(() => calculateRetreatProfitability(inputs), [inputs])

  return { inputs, results, setInput, reset }
}
