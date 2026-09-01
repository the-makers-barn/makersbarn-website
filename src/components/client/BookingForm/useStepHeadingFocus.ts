import { useEffect, useRef } from 'react'

import { WizardStep } from './BookingFormConstants'

const FOCUS_DELAY_MS = 50

/**
 * Moves focus to the heading of the step the wizard just navigated to
 */
export function useStepHeadingFocus(currentStep: WizardStep, hasAnimated: boolean) {
  const stepHeadingRef = useRef<HTMLHeadingElement>(null)
  const previousStepRef = useRef<WizardStep>(currentStep)

  useEffect(() => {
    if (previousStepRef.current !== currentStep && hasAnimated) {
      const timer = setTimeout(() => {
        stepHeadingRef.current?.focus()
      }, FOCUS_DELAY_MS)
      previousStepRef.current = currentStep
      return () => clearTimeout(timer)
    }
  }, [currentStep, hasAnimated])

  return stepHeadingRef
}
