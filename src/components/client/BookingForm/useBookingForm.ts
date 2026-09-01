import { useState, useCallback, useMemo, FormEvent, ChangeEvent } from 'react'

import { submitBookingForm } from '@/actions'
import { FormStatus, ReferralSource, type BookingFormData } from '@/types'

import {
  INITIAL_FORM_DATA,
  WizardStep,
  parseReferralSource,
} from './BookingFormConstants'
import { useBookingFormOptions } from './useBookingFormOptions'
import { useStepHeadingFocus } from './useStepHeadingFocus'
import { handleSubmitSuccess, handleSubmitError } from './bookingFormHandlers'
import { validateStep, notifyContactStep } from './bookingFormValidation'

interface UseBookingFormProps {
  bookingMessages: {
    success: string
    unexpectedError: string
    loading: string
    [key: string]: string
  }
  bookingValidation: {
    nameRequired: string
    emailRequired: string
    emailInvalid: string
    retreatTypeOtherRequired: string
  }
  retreatTypes: {
    privateGroup: string
    yoga: string
    workshop: string
    other: string
  }
  referralSources: {
    search: string
    socialMedia: string
    wordOfMouth: string
    previousVisit: string
    partner: string
    other: string
  }
  referralSourcePlaceholder: string
}

export function useBookingForm({
  bookingMessages,
  bookingValidation,
  retreatTypes,
  referralSources,
  referralSourcePlaceholder,
}: UseBookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>(INITIAL_FORM_DATA)
  const [currentStep, setCurrentStep] = useState<WizardStep>(WizardStep.CONTACT)
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE)
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [hasNotifiedStart, setHasNotifiedStart] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const stepHeadingRef = useStepHeadingFocus(currentStep, hasAnimated)

  const statusMessages = useMemo(
    () => ({
      [FormStatus.SUCCESS]: bookingMessages.success,
      [FormStatus.ERROR]: bookingMessages.unexpectedError,
      [FormStatus.LOADING]: bookingMessages.loading,
      [FormStatus.IDLE]: '',
    }),
    [bookingMessages]
  )

  const { retreatTypeOptions, referralSourceOptions, blockedDateRanges } = useBookingFormOptions({
    retreatTypes,
    referralSources,
    referralSourcePlaceholder,
  })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData((prev) => ({ ...prev, [name]: newValue }))
    setErrors((prev) => {
      if (prev[name]) {
        const { [name]: _, ...rest } = prev
        return rest
      }
      return prev
    })
  }, [])

  const validateCurrentStep = useCallback((step: WizardStep): boolean => {
    const result = validateStep({ step, formData, validation: bookingValidation })
    setErrors(result.errors)
    return result.isValid
  }, [formData, bookingValidation])

  const handleNextStep = useCallback(() => {
    if (!validateCurrentStep(currentStep)) {
      return
    }

    if (currentStep === WizardStep.CONTACT && !hasNotifiedStart) {
      notifyContactStep({
        formData,
        onNotified: () => setHasNotifiedStart(true),
      })
    }

    if (currentStep < WizardStep.REVIEW) {
      setCurrentStep((prev) => prev + 1)
    }
  }, [currentStep, validateCurrentStep, formData, hasNotifiedStart])

  const handlePrevStep = useCallback(() => {
    if (currentStep > WizardStep.CONTACT) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!validateCurrentStep(currentStep)) {
        return
      }

      setStatus(FormStatus.LOADING)
      setStatusMessage(statusMessages[FormStatus.LOADING])
      setErrors({})

      try {
        const result = await submitBookingForm(formData)
        const messageKey = result.messageCode as keyof typeof bookingMessages
        const translatedMessage = bookingMessages[messageKey] || bookingMessages.unexpectedError

        if (result.success) {
          handleSubmitSuccess({
            translatedMessage,
            retreatType: formData.retreatType,
            setStatus,
            setStatusMessage,
          })
        } else {
          handleSubmitError({
            result,
            translatedMessage,
            currentStep,
            setStatus,
            setStatusMessage,
            setErrors,
            setCurrentStep,
          })
        }
      } catch {
        setStatus(FormStatus.ERROR)
        setStatusMessage(statusMessages[FormStatus.ERROR])
      }
    },
    [formData, statusMessages, currentStep, validateCurrentStep, bookingMessages]
  )

  const handleNewRequest = useCallback(() => {
    setFormData(INITIAL_FORM_DATA)
    setCurrentStep(WizardStep.CONTACT)
    setStatus(FormStatus.IDLE)
    setStatusMessage('')
    setErrors({})
    setHasNotifiedStart(false)
  }, [])

  const handleAnimationComplete = useCallback(() => {
    if (!hasAnimated) {setHasAnimated(true)}
  }, [hasAnimated])

  const setReferralSource = useCallback((value: string) => {
    const referralSource = parseReferralSource(value)
    setFormData((prev) => ({
      ...prev,
      referralSource,
      referralSourceOther: referralSource === ReferralSource.OTHER ? prev.referralSourceOther : '',
    }))
  }, [])

  const setCateringNeeded = useCallback((value: boolean) => {
    setFormData((prev) => ({ ...prev, cateringNeeded: value, cateringDetails: value ? prev.cateringDetails : '' }))
  }, [])

  return {
    formData,
    currentStep,
    status,
    statusMessage,
    errors,
    hasAnimated,
    stepHeadingRef,
    retreatTypeOptions,
    referralSourceOptions,
    blockedDateRanges,
    handleChange,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
    handleNewRequest,
    handleAnimationComplete,
    setCateringNeeded,
    setReferralSource,
  }
}
