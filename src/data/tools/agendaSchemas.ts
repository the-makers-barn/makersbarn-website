import { z } from 'zod'

import {
  AGENDA_CUSTOM_BLOCK_LIMITS,
  AGENDA_LENGTHS_ORDER,
  AGENDA_NICHE_ORDER,
  AgendaBlockType,
  AgendaLength,
  AgendaNiche,
} from '@/constants/tools'

import { AGENDA_KNOWN_BLOCK_IDS } from './agendaContent'

const HEADER_INJECTION_GUARD = /^[^\r\n\t]+$/
const BLOCK_ID_MAX_LENGTH = 80
const HIDDEN_BLOCK_IDS_MAX = 200
const OVERRIDES_MAX = 200

const blockIdSchema = z
  .string()
  .min(1)
  .max(BLOCK_ID_MAX_LENGTH)
  .refine((id) => AGENDA_KNOWN_BLOCK_IDS.has(id), { message: 'Unknown block ID' })

const minuteSchema = z
  .number()
  .int()
  .min(AGENDA_CUSTOM_BLOCK_LIMITS.MIN_START_MIN)
  .max(AGENDA_CUSTOM_BLOCK_LIMITS.MAX_START_MIN)

const durationSchema = z
  .number()
  .int()
  .min(AGENDA_CUSTOM_BLOCK_LIMITS.MIN_DURATION_MIN)
  .max(AGENDA_CUSTOM_BLOCK_LIMITS.MAX_DURATION_MIN)

const titleSchema = z.string().min(1).max(AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TITLE_LENGTH)
const notesSchema = z.string().max(AGENDA_CUSTOM_BLOCK_LIMITS.MAX_NOTES_LENGTH)

const blockTypeSchema = z.nativeEnum(AgendaBlockType)
const nicheSchema = z
  .nativeEnum(AgendaNiche)
  .refine((value) => AGENDA_NICHE_ORDER.includes(value), { message: 'Unknown niche' })
const lengthSchema = z
  .nativeEnum(AgendaLength)
  .refine((value) => AGENDA_LENGTHS_ORDER.includes(value), { message: 'Unknown length' })

const overrideSchema = z
  .object({
    blockId: blockIdSchema,
    startMinute: minuteSchema.optional(),
    durationMinute: durationSchema.optional(),
    title: titleSchema.optional(),
    notes: notesSchema.optional(),
  })
  .refine(
    (o) =>
      o.startMinute !== undefined ||
      o.durationMinute !== undefined ||
      o.title !== undefined ||
      o.notes !== undefined,
    { message: 'Override must contain at least one field' },
  )

const customBlockSchema = z.object({
  dayIndex: z.number().int().min(1).max(14),
  type: blockTypeSchema,
  startMinute: minuteSchema,
  durationMinute: durationSchema,
  title: titleSchema,
  notes: notesSchema,
})

export const emailAgendaPlanSchema = z.object({
  email: z
    .string()
    .max(254)
    .email()
    .regex(HEADER_INJECTION_GUARD, 'Invalid characters in email'),
  niche: nicheSchema,
  length: lengthSchema,
  hiddenBlockIds: z.array(blockIdSchema).max(HIDDEN_BLOCK_IDS_MAX),
  blockOverrides: z.array(overrideSchema).max(OVERRIDES_MAX),
  customBlocks: z.array(customBlockSchema).max(AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TOTAL),
  contactConsent: z.boolean(),
})

export type ValidatedEmailAgendaPlanInput = z.infer<typeof emailAgendaPlanSchema>
