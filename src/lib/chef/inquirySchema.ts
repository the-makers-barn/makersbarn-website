import { z } from 'zod'

import { CHEF_INQUIRY_LIMITS } from '@/constants/chef'

// Reject email values containing CR/LF — guards against header injection
// when the email is reflected into Postmark addresses.
const NO_CRLF = /^[^\r\n]+$/

const EMAIL_MAX_LENGTH = 254 // RFC 5321 hard cap

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
    .max(EMAIL_MAX_LENGTH),
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
  consent: z.literal(true, { error: 'consent_required' }),
})

export type ChefInquiryInput = z.infer<typeof chefInquirySchema>
