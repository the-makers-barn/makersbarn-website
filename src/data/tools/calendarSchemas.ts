import { z } from 'zod'

import {
  CALENDAR_CUSTOM_ITEM_LIMITS,
  CalendarPhaseId,
  MilestoneStatus,
  TimelinePreset,
} from '@/constants/tools'

import { CALENDAR_KNOWN_MILESTONE_IDS } from './calendarMilestoneIds'

const HEADER_INJECTION_GUARD = /^[^\r\n\t]+$/
const MILESTONE_ID_MAX_LENGTH = 40
const ITEM_STATES_MAX_KEYS = 200

const milestoneNonDefaultStatusSchema = z.union([
  z.literal(MilestoneStatus.DONE),
  z.literal(MilestoneStatus.DISMISSED),
])

const milestoneIdSchema = z
  .string()
  .min(1)
  .max(MILESTONE_ID_MAX_LENGTH)
  .refine(
    (id) => CALENDAR_KNOWN_MILESTONE_IDS.has(id),
    { message: 'Unknown milestone ID' },
  )

export const emailCalendarPlanSchema = z.object({
  email: z
    .string()
    .max(254)
    .email()
    .regex(HEADER_INJECTION_GUARD, 'Invalid characters in email'),
  preset: z.nativeEnum(TimelinePreset),
  itemStates: z
    .record(milestoneIdSchema, milestoneNonDefaultStatusSchema)
    .refine(
      (states) => Object.keys(states).length <= ITEM_STATES_MAX_KEYS,
      { message: 'Too many item states' },
    ),
  customItems: z
    .array(
      z.object({
        phaseId: z.nativeEnum(CalendarPhaseId),
        text: z.string().min(1).max(CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH),
        status: milestoneNonDefaultStatusSchema,
      }),
    )
    .max(CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TOTAL),
  contactConsent: z.boolean(),
})

export type ValidatedEmailCalendarPlanInput = z.infer<typeof emailCalendarPlanSchema>
