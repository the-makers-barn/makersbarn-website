import { z } from 'zod'

import { BOOKING_FIELD_LIMITS } from '@/constants/booking'
import { CHEF_INQUIRY_ERROR_CODES, CHEF_INQUIRY_LIMITS } from '@/constants/chef'

// Reject email values containing CR/LF — guards against header injection
// when the email is reflected into Postmark addresses.
const NO_CRLF = /^[^\r\n]+$/

export const chefInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(CHEF_INQUIRY_LIMITS.NAME_MIN)
    .max(CHEF_INQUIRY_LIMITS.NAME_MAX),
  email: z
    .string()
    .trim()
    .email()
    .regex(NO_CRLF)
    .max(BOOKING_FIELD_LIMITS.EMAIL_MAX),
  dates: z
    .string()
    .trim()
    .min(CHEF_INQUIRY_LIMITS.DATES_MIN)
    .max(CHEF_INQUIRY_LIMITS.DATES_MAX),
  groupSize: z
    .number()
    .int()
    .min(CHEF_INQUIRY_LIMITS.GROUP_SIZE_MIN)
    .max(CHEF_INQUIRY_LIMITS.GROUP_SIZE_MAX),
  location: z
    .string()
    .trim()
    .min(CHEF_INQUIRY_LIMITS.LOCATION_MIN)
    .max(CHEF_INQUIRY_LIMITS.LOCATION_MAX),
  dietary: z
    .string()
    .trim()
    .max(CHEF_INQUIRY_LIMITS.DIETARY_MAX)
    .optional()
    .default(''),
  message: z
    .string()
    .trim()
    .min(CHEF_INQUIRY_LIMITS.MESSAGE_MIN)
    .max(CHEF_INQUIRY_LIMITS.MESSAGE_MAX),
  honeypot: z.string().default(''),
  consent: z.literal(true, { error: CHEF_INQUIRY_ERROR_CODES.CONSENT_REQUIRED }),
})

export type ChefInquiryInput = z.infer<typeof chefInquirySchema>
