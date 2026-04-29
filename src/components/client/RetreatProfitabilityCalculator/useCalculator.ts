'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { decodeCalculatorInputs, encodeCalculatorInputs } from '@/lib/tools'
import type { CalculatorInputs, CalculatorResults } from '@/types/tools'

import { calculateRetreatProfitability } from './calculate'

const URL_DEBOUNCE_MS = 300

const MONETARY_KEYS = [
  'pricePerGuest',
  'venuePerNight',
  'foodPerGuestPerDay',
  'facilitatorFee',
  'marketingAndOther',
  'travel',
  'insurance',
] as const satisfies readonly (keyof CalculatorInputs)[]

interface UseCalculatorReturn {
  inputs: CalculatorInputs
  results: CalculatorResults
  setInput: <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => void
  reset: () => void
}

function scaleMonetary(inputs: CalculatorInputs, factor: number): CalculatorInputs {
  if (factor === 1) { return inputs }
  const next = { ...inputs }
  for (const key of MONETARY_KEYS) {
    next[key] = Math.round(inputs[key] * factor)
  }
  return next
}

function applyDefaultsVatScaling(defaults: CalculatorInputs): CalculatorInputs {
  if (!defaults.pricesIncludeVat || defaults.vatPercent <= 0) { return defaults }
  return scaleMonetary(defaults, 1 + defaults.vatPercent / 100)
}

export function useCalculator(defaults: CalculatorInputs): UseCalculatorReturn {
  const scaledDefaults = useMemo(() => applyDefaultsVatScaling(defaults), [defaults])

  const [inputs, setInputs] = useState<CalculatorInputs>(() => {
    if (typeof window === 'undefined') { return scaledDefaults }
    const params = new URLSearchParams(window.location.search)
    return decodeCalculatorInputs(params, scaledDefaults)
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
        let next: CalculatorInputs = { ...prev, [key]: value }
        if (key === 'hiresFacilitators' && value === false) {
          next.facilitatorFee = 0
        }
        if (key === 'pricesIncludeVat' && prev.pricesIncludeVat !== value && prev.vatPercent > 0) {
          const factor = (value as boolean)
            ? 1 + prev.vatPercent / 100
            : 1 / (1 + prev.vatPercent / 100)
          next = scaleMonetary(next, factor)
        }
        return next
      })
    },
    []
  )

  const reset = useCallback(() => {
    setInputs(scaledDefaults)
  }, [scaledDefaults])

  const results = useMemo(() => calculateRetreatProfitability(inputs), [inputs])

  return { inputs, results, setInput, reset }
}
