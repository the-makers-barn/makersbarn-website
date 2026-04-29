import type { TimelinePreset } from '@/constants/tools'
import { escapeHtml } from '@/lib/html'
import type { Language } from '@/types/common'
import type { CalendarPhase, CustomMilestone, MilestoneNonDefaultStatus } from '@/types/tools'

import { renderEmailShell } from './renderEmailShell'
import { renderPhaseSection } from './renderPhaseSection'

export interface ComposeEmailHtmlInput {
  phases: CalendarPhase[]
  itemStates: Record<string, MilestoneNonDefaultStatus>
  customItems: CustomMilestone[]
  locale: Language
  preset: TimelinePreset
  backToPlanUrl: string
  copy: {
    greeting: string
    intro: string
    ctaLine: string
    ctaLabel: string
    signoff: string
  }
}

export function composeEmailHtml(input: ComposeEmailHtmlInput): string {
  const bodyHtml = input.phases
    .map((phase) =>
      renderPhaseSection({
        phase,
        itemStates: input.itemStates,
        customItemsForPhase: input.customItems.filter((c) => c.phaseId === phase.id),
        locale: input.locale,
      }),
    )
    .join('')

  return renderEmailShell({
    greeting: input.copy.greeting,
    introHtml: escapeHtml(input.copy.intro),
    bodyHtml,
    ctaLine: input.copy.ctaLine,
    ctaUrl: input.backToPlanUrl,
    ctaLabel: input.copy.ctaLabel,
    signoff: input.copy.signoff,
  })
}
