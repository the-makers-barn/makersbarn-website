import { AGENDA_RULES, AgendaBlockType } from '@/constants/tools'
import type { AgendaResolvedBlock, AgendaResolvedDay } from '@/types/tools'

export type AgendaWarningCode =
  | 'tooMuchStructured'
  | 'noFreeTime'
  | 'overlongBlock'
  | 'earlyStart'
  | 'lateEnd'
  | 'overlap'

export interface AgendaWarning {
  code: AgendaWarningCode
  dayIndex: number
  detail: {
    minutes?: number
    title?: string
  }
}

const STRUCTURED_TYPES: ReadonlySet<AgendaBlockType> = new Set([
  AgendaBlockType.PRACTICE,
  AgendaBlockType.WORKSHOP,
  AgendaBlockType.RITUAL,
])

const FREE_TYPES: ReadonlySet<AgendaBlockType> = new Set([
  AgendaBlockType.FREE,
  AgendaBlockType.REST,
])

function structuredMinutes(blocks: AgendaResolvedBlock[]): number {
  return blocks
    .filter((b) => STRUCTURED_TYPES.has(b.type))
    .reduce((sum, b) => sum + b.durationMinute, 0)
}

function freeMinutes(blocks: AgendaResolvedBlock[]): number {
  return blocks
    .filter((b) => FREE_TYPES.has(b.type))
    .reduce((sum, b) => sum + b.durationMinute, 0)
}

function findOverlap(
  blocks: AgendaResolvedBlock[],
): AgendaResolvedBlock | null {
  const sorted = [...blocks].sort((a, b) => a.startMinute - b.startMinute)
  for (let i = 1; i < sorted.length; i += 1) {
    const prev = sorted[i - 1]
    const cur = sorted[i]
    if (prev.startMinute + prev.durationMinute > cur.startMinute) {
      return cur
    }
  }
  return null
}

function dayWarnings(day: AgendaResolvedDay): AgendaWarning[] {
  const warnings: AgendaWarning[] = []
  const structured = structuredMinutes(day.blocks)
  if (structured > AGENDA_RULES.MAX_STRUCTURED_MIN_PER_DAY) {
    warnings.push({
      code: 'tooMuchStructured',
      dayIndex: day.dayIndex,
      detail: { minutes: structured },
    })
  }
  if (
    freeMinutes(day.blocks) < AGENDA_RULES.MIN_FREE_MIN_PER_DAY &&
    day.blocks.length > 0
  ) {
    warnings.push({ code: 'noFreeTime', dayIndex: day.dayIndex, detail: {} })
  }
  for (const block of day.blocks) {
    if (
      STRUCTURED_TYPES.has(block.type) &&
      block.durationMinute > AGENDA_RULES.MAX_BLOCK_MIN
    ) {
      warnings.push({
        code: 'overlongBlock',
        dayIndex: day.dayIndex,
        detail: { minutes: block.durationMinute, title: block.title },
      })
    }
  }
  const earliest = day.blocks
    .map((b) => b.startMinute)
    .reduce<number | null>((min, cur) => (min === null || cur < min ? cur : min), null)
  if (earliest !== null && earliest < AGENDA_RULES.EARLY_START_THRESHOLD_MIN) {
    warnings.push({ code: 'earlyStart', dayIndex: day.dayIndex, detail: { minutes: earliest } })
  }
  const latest = day.blocks
    .map((b) => b.startMinute + b.durationMinute)
    .reduce<number>((max, cur) => (cur > max ? cur : max), 0)
  if (latest > AGENDA_RULES.LATE_END_THRESHOLD_MIN) {
    warnings.push({ code: 'lateEnd', dayIndex: day.dayIndex, detail: { minutes: latest } })
  }
  const overlap = findOverlap(day.blocks)
  if (overlap) {
    warnings.push({
      code: 'overlap',
      dayIndex: day.dayIndex,
      detail: { title: overlap.title },
    })
  }
  return warnings
}

export function buildAgendaWarnings(days: AgendaResolvedDay[]): AgendaWarning[] {
  return days.flatMap(dayWarnings)
}
