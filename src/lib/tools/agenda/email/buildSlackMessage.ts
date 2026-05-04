import type { ValidatedEmailAgendaPlanInput } from '@/data/tools'
import { maskEmail } from '@/lib'
import { escapeSlackMarkdown } from '@/services/slack'

export function buildAgendaSlackMessage(data: ValidatedEmailAgendaPlanInput): string {
  return [
    '🗒️ *Agenda plan lead captured*',
    `*Niche:* ${data.niche}`,
    `*Length:* ${data.length}-day`,
    `*Email:* ${escapeSlackMarkdown(maskEmail(data.email))}`,
    `*Hidden defaults:* ${data.hiddenBlockIds.length}`,
    `*Edited defaults:* ${data.blockOverrides.length}`,
    `*Custom blocks:* ${data.customBlocks.length}`,
    `*Contact consent:* ${data.contactConsent ? 'yes' : 'no'}`,
  ].join('\n')
}
