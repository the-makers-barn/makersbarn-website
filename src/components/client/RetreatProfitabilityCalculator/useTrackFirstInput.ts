'use client'

import { useCallback, useRef } from 'react'

import { AnalyticsEvent } from '@/constants/analytics'
import type { ToolVariant } from '@/constants/tools'
import { track } from '@/lib/analytics'
import type { CalculatorInputs } from '@/types/tools'

/**
 * Returns a callback that sends CALCULATOR_USED the first time a visitor changes an input.
 * calculator_loaded fires on every page open, robots included; this event marks real use.
 */
export function useTrackFirstInput(variant: ToolVariant): (field: keyof CalculatorInputs) => void {
  const trackedRef = useRef(false)

  return useCallback(
    (field: keyof CalculatorInputs) => {
      if (trackedRef.current) { return }
      trackedRef.current = true
      track(AnalyticsEvent.CALCULATOR_USED, { variant, field })
    },
    [variant]
  )
}
