import { MilestoneStatus } from '@/constants/tools'
import type { ValidatedEmailCalendarPlanInput } from '@/data/tools'
import { maskEmail } from '@/lib'
import { escapeSlackMarkdown } from '@/services/slack'
import type { CustomMilestone } from '@/types/tools'

export function buildCalendarSlackMessage(
  data: ValidatedEmailCalendarPlanInput,
  customItems: CustomMilestone[],
): string {
  const completedCount = Object.values(data.itemStates).filter(
    (status) => status === MilestoneStatus.DONE,
  ).length
  return [
    '🗓️ *Calendar plan lead captured*',
    `*Preset:* ${data.preset}-month`,
    `*Email:* ${escapeSlackMarkdown(maskEmail(data.email))}`,
    `*Done items:* ${completedCount}`,
    `*Custom items:* ${customItems.length}`,
    `*Contact consent:* ${data.contactConsent ? 'yes' : 'no'}`,
  ].join('\n')
}
