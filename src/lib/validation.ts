/**
 * Validation schemas and utilities using Zod
 */

import { z } from 'zod'

const VALIDATION_LIMITS = {
  NAME_MAX: 100,
  EMAIL_MAX: 254,
  PHONE_MAX: 20,
  MESSAGE_MIN: 1,
  MESSAGE_MAX: 5000,
} as const

const VALIDATION_MESSAGES = {
  NAME_REQUIRED: 'Name is required',
  NAME_TOO_LONG: `Name must be less than ${VALIDATION_LIMITS.NAME_MAX} characters`,
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  EMAIL_TOO_LONG: `Email must be less than ${VALIDATION_LIMITS.EMAIL_MAX} characters`,
  PHONE_TOO_LONG: `Phone must be less than ${VALIDATION_LIMITS.PHONE_MAX} characters`,
  MESSAGE_REQUIRED: 'Message is required',
  MESSAGE_TOO_LONG: `Message must be less than ${VALIDATION_LIMITS.MESSAGE_MAX} characters`,
} as const

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, VALIDATION_MESSAGES.NAME_REQUIRED)
    .max(VALIDATION_LIMITS.NAME_MAX, VALIDATION_MESSAGES.NAME_TOO_LONG)
    .trim(),
  email: z
    .string()
    .min(1, VALIDATION_MESSAGES.EMAIL_REQUIRED)
    .email(VALIDATION_MESSAGES.EMAIL_INVALID)
    .max(VALIDATION_LIMITS.EMAIL_MAX, VALIDATION_MESSAGES.EMAIL_TOO_LONG)
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .max(VALIDATION_LIMITS.PHONE_MAX, VALIDATION_MESSAGES.PHONE_TOO_LONG)
    .trim()
    .optional()
    .transform((val) => val || undefined),
  message: z
    .string()
    .min(VALIDATION_LIMITS.MESSAGE_MIN, VALIDATION_MESSAGES.MESSAGE_REQUIRED)
    .max(VALIDATION_LIMITS.MESSAGE_MAX, VALIDATION_MESSAGES.MESSAGE_TOO_LONG)
    .trim(),
})

export type ValidatedContactFormData = z.infer<typeof ContactFormSchema>

export interface ValidationResult<T> {
  success: boolean
  data?: T
  errors?: Record<string, string>
}

export function validateContactForm(data: unknown): ValidationResult<ValidatedContactFormData> {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  const errors: Record<string, string> = {}
  result.error.issues.forEach((issue) => {
    const field = issue.path[0]
    if (typeof field === 'string') {
      errors[field] = issue.message
    }
  })

  return { success: false, errors }
}
