import type { TimelinePreset } from '@/constants/tools'
import type {
  CalendarContent,
  CalendarMilestone,
  CalendarPhase,
  CalendarPhaseOverride,
} from '@/types/tools'

interface ExtraMilestoneInsertion {
  position: 'prepend' | 'append' | { afterId: string }
  milestone: CalendarMilestone
}

function applyExtraMilestones(
  base: CalendarMilestone[],
  insertions: ExtraMilestoneInsertion[] | undefined,
): CalendarMilestone[] {
  if (!insertions || insertions.length === 0) {
    return base
  }
  const prepends: CalendarMilestone[] = []
  let result = [...base]
  for (const { position, milestone } of insertions) {
    if (position === 'prepend') {
      prepends.push(milestone)
      continue
    }
    if (position === 'append') {
      result = [...result, milestone]
      continue
    }
    const targetIndex = result.findIndex((m) => m.id === position.afterId)
    if (targetIndex === -1) {
      throw new Error(`extraMilestone afterId "${position.afterId}" not found in phase`)
    }
    result = [...result.slice(0, targetIndex + 1), milestone, ...result.slice(targetIndex + 1)]
  }
  return prepends.length === 0 ? result : [...prepends, ...result]
}

function applyPhaseOverride(
  phase: CalendarPhase,
  override: CalendarPhaseOverride,
): CalendarPhase | null {
  if (override.kind === 'remove') {
    return null
  }
  return {
    ...phase,
    ...override.patch,
    milestones: applyExtraMilestones(phase.milestones, override.extraMilestones),
  }
}

export function resolvePhases(
  content: CalendarContent,
  preset: TimelinePreset,
): CalendarPhase[] {
  const overrides = content.overrides[preset]
  if (!overrides?.phases) {
    return content.canonical
  }

  const result: CalendarPhase[] = []
  for (const phase of content.canonical) {
    const phaseOverride = overrides.phases[phase.id]
    if (!phaseOverride) {
      result.push(phase)
      continue
    }
    const transformed = applyPhaseOverride(phase, phaseOverride)
    if (transformed !== null) {
      result.push(transformed)
    }
  }
  return result
}
