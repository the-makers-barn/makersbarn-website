import { MilestoneStatus } from '@/constants/tools'
import { escapeHtml } from '@/lib/html'
import type { Language } from '@/types/common'
import type { CalendarPhase, CustomMilestone, MilestoneNonDefaultStatus } from '@/types/tools'

import { renderCustomItem } from './renderCustomItem'
import { renderMilestoneRow } from './renderMilestoneRow'

interface RenderPhaseSectionInput {
  phase: CalendarPhase
  itemStates: Record<string, MilestoneNonDefaultStatus>
  customItemsForPhase: CustomMilestone[]
  locale: Language
}

export function renderPhaseSection({
  phase,
  itemStates,
  customItemsForPhase,
  locale,
}: RenderPhaseSectionInput): string {
  const heading = escapeHtml(phase.eyebrow[locale])
  const range = escapeHtml(phase.range[locale])
  const title = escapeHtml(phase.title[locale])
  const milestoneRows = phase.milestones
    .map((m) => renderMilestoneRow({
      text: m.text[locale],
      status: itemStates[m.id] ?? MilestoneStatus.PENDING,
    }))
    .join('')
  const customRows = customItemsForPhase
    .map((c) => renderCustomItem({ text: c.text, status: c.status }))
    .join('')
  return `
    <section style="margin-bottom:1.5rem">
      <p style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#b8894a;font-weight:600;margin:0">${heading}</p>
      <p style="font-size:0.85rem;color:#5c554c;margin:0.25rem 0 0.5rem">${range}</p>
      <h2 style="font-family:Georgia,serif;font-size:1.1rem;margin:0 0 0.5rem">${title}</h2>
      <ul style="margin:0;padding-left:1.25rem;color:#1f130c">
        ${milestoneRows}
        ${customRows}
      </ul>
    </section>
  `
}
