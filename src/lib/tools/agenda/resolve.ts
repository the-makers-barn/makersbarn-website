import type { AgendaLength, AgendaNiche } from '@/constants/tools'
import type {
  AgendaCustomBlock,
  AgendaDefaultPlan,
  AgendaResolvedBlock,
  AgendaResolvedDay,
  AgendaState,
} from '@/types/tools'
import type { Language } from '@/types/common'

export interface ResolvedAgenda {
  niche: AgendaNiche
  length: AgendaLength
  days: AgendaResolvedDay[]
}

interface ResolveInput {
  plan: AgendaDefaultPlan
  state: AgendaState
  locale: Language
}

function compareBlocks(a: AgendaResolvedBlock, b: AgendaResolvedBlock): number {
  if (a.startMinute !== b.startMinute) {
    return a.startMinute - b.startMinute
  }
  return a.durationMinute - b.durationMinute
}

function customsForDay(
  customs: AgendaCustomBlock[],
  dayIndex: number,
): AgendaResolvedBlock[] {
  return customs
    .filter((c) => c.dayIndex === dayIndex)
    .map((c) => ({
      id: c.id,
      dayIndex: c.dayIndex,
      type: c.type,
      startMinute: c.startMinute,
      durationMinute: c.durationMinute,
      title: c.title,
      notes: c.notes,
      isCustom: true,
    }))
}

function applyOverride(
  block: ResolveInput['plan']['days'][number]['blocks'][number],
  override: AgendaState['blockOverrides'][string] | undefined,
  dayIndex: number,
  locale: Language,
): AgendaResolvedBlock {
  const fallbackNotes = block.notes ? block.notes[locale] : ''
  const startMinute = override && override.startMinute !== undefined
    ? override.startMinute
    : block.startMinute
  const durationMinute = override && override.durationMinute !== undefined
    ? override.durationMinute
    : block.durationMinute
  const title = override && override.title !== undefined
    ? override.title
    : block.title[locale]
  const notes = override && override.notes !== undefined
    ? override.notes
    : fallbackNotes
  return {
    id: block.id,
    dayIndex,
    type: block.type,
    startMinute,
    durationMinute,
    title,
    notes,
    isCustom: false,
  }
}

export function resolveAgenda({ plan, state, locale }: ResolveInput): ResolvedAgenda {
  const days: AgendaResolvedDay[] = plan.days.map((day) => {
    const defaults: AgendaResolvedBlock[] = day.blocks
      .filter((block) => !(block.id in state.hiddenBlockIds))
      .map((block) =>
        applyOverride(block, state.blockOverrides[block.id], day.dayIndex, locale),
      )
    const customs = customsForDay(state.customBlocks, day.dayIndex)
    return {
      dayIndex: day.dayIndex,
      title: day.title[locale],
      blocks: [...defaults, ...customs].sort(compareBlocks),
    }
  })
  return { niche: plan.niche, length: state.length, days }
}
