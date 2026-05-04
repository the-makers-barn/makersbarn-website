import {
  AGENDA_LENGTHS_ORDER,
  AGENDA_NICHE_ORDER,
  AgendaBlockType,
  AgendaLength,
  AgendaNiche,
} from '@/constants/tools'
import type {
  AgendaDefaultBlock,
  AgendaDefaultDay,
  AgendaDefaultPlan,
  LocalizedString,
} from '@/types/tools'

import { buildAgendaBlockId } from './agendaBlockIds'

// During scaffolding, NL/DE strings are EN-verbatim per CLAUDE.md i18n
// policy — proper translations land in a later commit.
const en = (s: string): LocalizedString => ({ en: s, nl: s, de: s })

interface BlockSpec {
  slug: string
  type: AgendaBlockType
  start: number
  duration: number
  title: string
  notes?: string
}

function blocksFromSpecs(
  niche: AgendaNiche,
  length: AgendaLength,
  dayIndex: number,
  specs: BlockSpec[],
): AgendaDefaultBlock[] {
  return specs.map((spec) => ({
    id: buildAgendaBlockId({ niche, length, dayIndex, slug: spec.slug }),
    type: spec.type,
    startMinute: spec.start,
    durationMinute: spec.duration,
    title: en(spec.title),
    notes: spec.notes ? en(spec.notes) : undefined,
  }))
}

const hm = (h: number, m: number = 0): number => h * 60 + m

// ─────────────────────────────────────────────────────────────────────
// Arrival & departure patterns (shared across all niches)
// ─────────────────────────────────────────────────────────────────────

function arrivalDaySpecs(niche: AgendaNiche): BlockSpec[] {
  const evening: BlockSpec =
    niche === AgendaNiche.MEDITATION
      ? {
          slug: 'evening-orientation',
          type: AgendaBlockType.RITUAL,
          start: hm(20, 0),
          duration: 45,
          title: 'Orientation & noble silence begins',
          notes: 'Walk through the silence guidelines before retiring.',
        }
      : {
          slug: 'evening-rest',
          type: AgendaBlockType.FREE,
          start: hm(20, 30),
          duration: 90,
          title: 'Evening unwind',
          notes: 'Optional: tea by the fire, journaling, early to bed.',
        }
  return [
    {
      slug: 'arrival-window',
      type: AgendaBlockType.TRAVEL,
      start: hm(14, 0),
      duration: 120,
      title: 'Arrival & check-in',
      notes: 'Stagger arrivals between 2–4 PM. Show rooms, hand out welcome packs.',
    },
    {
      slug: 'welcome-tea',
      type: AgendaBlockType.MEAL,
      start: hm(16, 30),
      duration: 45,
      title: 'Welcome tea & informal mingling',
    },
    {
      slug: 'opening-circle',
      type: AgendaBlockType.RITUAL,
      start: hm(17, 30),
      duration: 75,
      title: 'Opening circle & intentions',
      notes:
        'House rules, retreat container, names, and one intention per person. The single most important block of the retreat.',
    },
    {
      slug: 'welcome-dinner',
      type: AgendaBlockType.MEAL,
      start: hm(19, 0),
      duration: 75,
      title: 'Welcome dinner',
    },
    evening,
  ]
}

function departureMorningSpec(niche: AgendaNiche): BlockSpec {
  if (niche === AgendaNiche.MEDITATION) {
    return {
      slug: 'closing-sitting',
      type: AgendaBlockType.PRACTICE,
      start: hm(7, 0),
      duration: 45,
      title: 'Final sitting & breaking of silence',
    }
  }
  if (niche === AgendaNiche.COACHING) {
    return {
      slug: 'morning-walk',
      type: AgendaBlockType.PRACTICE,
      start: hm(7, 30),
      duration: 45,
      title: 'Reflection walk',
      notes: 'Solo walk with one prompt: what will I take home?',
    }
  }
  return {
    slug: 'closing-practice',
    type: AgendaBlockType.PRACTICE,
    start: hm(7, 30),
    duration: 60,
    title: 'Gentle closing practice',
  }
}

function departureDaySpecs(niche: AgendaNiche): BlockSpec[] {
  const morning = departureMorningSpec(niche)
  return [
    morning,
    {
      slug: 'farewell-brunch',
      type: AgendaBlockType.MEAL,
      start: hm(9, 0),
      duration: 75,
      title: 'Farewell brunch',
    },
    {
      slug: 'closing-circle',
      type: AgendaBlockType.RITUAL,
      start: hm(10, 30),
      duration: 75,
      title: 'Closing circle & integration commitments',
      notes: 'Each guest names one practice or commitment to take home.',
    },
    {
      slug: 'departure-window',
      type: AgendaBlockType.TRAVEL,
      start: hm(12, 0),
      duration: 60,
      title: 'Departures',
      notes: 'Aim to clear by early afternoon — leaves room for slow goodbyes.',
    },
  ]
}

// ─────────────────────────────────────────────────────────────────────
// Per-niche full-day templates
// ─────────────────────────────────────────────────────────────────────

function genericFullDaySpecs(): BlockSpec[] {
  return [
    {
      slug: 'morning-movement',
      type: AgendaBlockType.PRACTICE,
      start: hm(7, 30),
      duration: 60,
      title: 'Morning movement',
      notes: 'Light, grounding practice — yoga, qi gong, or a brisk walk.',
    },
    {
      slug: 'breakfast',
      type: AgendaBlockType.MEAL,
      start: hm(8, 45),
      duration: 60,
      title: 'Breakfast',
    },
    {
      slug: 'morning-workshop',
      type: AgendaBlockType.WORKSHOP,
      start: hm(10, 0),
      duration: 90,
      title: 'Morning workshop',
      notes: 'Most demanding teaching block — schedule the deep work here.',
    },
    {
      slug: 'midday-buffer',
      type: AgendaBlockType.FREE,
      start: hm(11, 30),
      duration: 60,
      title: 'Buffer & integration',
    },
    {
      slug: 'lunch',
      type: AgendaBlockType.MEAL,
      start: hm(12, 30),
      duration: 75,
      title: 'Lunch',
    },
    {
      slug: 'afternoon-free',
      type: AgendaBlockType.FREE,
      start: hm(13, 45),
      duration: 135,
      title: 'Free time',
      notes: 'Rest, walks, optional spa or solo work. Protect this block.',
    },
    {
      slug: 'afternoon-workshop',
      type: AgendaBlockType.WORKSHOP,
      start: hm(16, 0),
      duration: 90,
      title: 'Afternoon workshop',
      notes: 'Softer, more reflective — pairs, sharing, integration.',
    },
    {
      slug: 'dinner',
      type: AgendaBlockType.MEAL,
      start: hm(18, 30),
      duration: 75,
      title: 'Dinner',
    },
    {
      slug: 'evening-reflection',
      type: AgendaBlockType.RITUAL,
      start: hm(20, 0),
      duration: 60,
      title: 'Evening reflection circle',
    },
  ]
}

function yogaFullDaySpecs(): BlockSpec[] {
  return [
    {
      slug: 'morning-vinyasa',
      type: AgendaBlockType.PRACTICE,
      start: hm(7, 0),
      duration: 90,
      title: 'Morning vinyasa',
      notes: 'Dynamic practice to match natural energy peak.',
    },
    {
      slug: 'breakfast',
      type: AgendaBlockType.MEAL,
      start: hm(8, 45),
      duration: 60,
      title: 'Breakfast',
    },
    {
      slug: 'workshop',
      type: AgendaBlockType.WORKSHOP,
      start: hm(10, 30),
      duration: 90,
      title: 'Workshop or pranayama deep-dive',
      notes: 'Alignment, philosophy, or breathwork — pick one.',
    },
    {
      slug: 'lunch',
      type: AgendaBlockType.MEAL,
      start: hm(12, 30),
      duration: 75,
      title: 'Lunch',
    },
    {
      slug: 'afternoon-free',
      type: AgendaBlockType.FREE,
      start: hm(13, 45),
      duration: 135,
      title: 'Free time / optional spa',
      notes: 'Massages, nature walks, solo practice.',
    },
    {
      slug: 'restorative',
      type: AgendaBlockType.PRACTICE,
      start: hm(16, 0),
      duration: 75,
      title: 'Yin or restorative practice',
      notes: 'Slow, parasympathetic practice as the day winds down.',
    },
    {
      slug: 'dinner',
      type: AgendaBlockType.MEAL,
      start: hm(18, 30),
      duration: 75,
      title: 'Dinner',
    },
    {
      slug: 'evening-sound',
      type: AgendaBlockType.RITUAL,
      start: hm(20, 0),
      duration: 60,
      title: 'Sound bath, journaling or kirtan',
      notes: 'Optional. Keep it gentle.',
    },
  ]
}

function wellnessFullDaySpecs(): BlockSpec[] {
  return [
    {
      slug: 'morning-movement',
      type: AgendaBlockType.PRACTICE,
      start: hm(7, 0),
      duration: 60,
      title: 'Morning movement & breathwork',
    },
    {
      slug: 'nourishing-brunch',
      type: AgendaBlockType.MEAL,
      start: hm(8, 30),
      duration: 75,
      title: 'Nourishing brunch',
      notes: 'Anti-inflammatory plates; introduce the day’s nutrition theme.',
    },
    {
      slug: 'detox-workshop',
      type: AgendaBlockType.WORKSHOP,
      start: hm(10, 30),
      duration: 90,
      title: 'Workshop: nervous-system reset',
      notes: 'Vagal-tone practices, breath, or gentle somatic work.',
    },
    {
      slug: 'lunch',
      type: AgendaBlockType.MEAL,
      start: hm(12, 30),
      duration: 60,
      title: 'Light lunch',
    },
    {
      slug: 'spa-time',
      type: AgendaBlockType.FREE,
      start: hm(13, 45),
      duration: 150,
      title: 'Spa & treatments window',
      notes: 'Slot massages, sauna, or solo nature time. Treat this as protected.',
    },
    {
      slug: 'nutrition-session',
      type: AgendaBlockType.WORKSHOP,
      start: hm(16, 30),
      duration: 75,
      title: 'Nutrition or habits session',
      notes: 'Practical, take-home framing — not lecture-heavy.',
    },
    {
      slug: 'dinner',
      type: AgendaBlockType.MEAL,
      start: hm(18, 30),
      duration: 75,
      title: 'Dinner',
    },
    {
      slug: 'evening-reflection',
      type: AgendaBlockType.RITUAL,
      start: hm(20, 0),
      duration: 60,
      title: 'Reflection circle or gentle yin',
    },
  ]
}

function meditationFullDaySpecs(): BlockSpec[] {
  return [
    {
      slug: 'sitting-1',
      type: AgendaBlockType.PRACTICE,
      start: hm(6, 0),
      duration: 60,
      title: 'Sitting 1 (silent)',
      notes: 'Vipassana convention: first sitting before sunrise.',
    },
    {
      slug: 'breakfast',
      type: AgendaBlockType.MEAL,
      start: hm(7, 30),
      duration: 60,
      title: 'Breakfast (held in silence)',
    },
    {
      slug: 'sitting-2',
      type: AgendaBlockType.PRACTICE,
      start: hm(9, 0),
      duration: 60,
      title: 'Sitting 2',
    },
    {
      slug: 'walking-meditation-am',
      type: AgendaBlockType.PRACTICE,
      start: hm(10, 15),
      duration: 45,
      title: 'Walking meditation',
    },
    {
      slug: 'lunch',
      type: AgendaBlockType.MEAL,
      start: hm(12, 0),
      duration: 60,
      title: 'Lunch (silent)',
    },
    {
      slug: 'mindful-rest',
      type: AgendaBlockType.REST,
      start: hm(13, 15),
      duration: 75,
      title: 'Mindful rest',
      notes: 'Short rest, optional walking, no electronics.',
    },
    {
      slug: 'sitting-3',
      type: AgendaBlockType.PRACTICE,
      start: hm(14, 45),
      duration: 60,
      title: 'Sitting 3',
    },
    {
      slug: 'dharma-talk',
      type: AgendaBlockType.WORKSHOP,
      start: hm(16, 0),
      duration: 60,
      title: 'Dharma talk or guided instruction',
    },
    {
      slug: 'walking-meditation-pm',
      type: AgendaBlockType.PRACTICE,
      start: hm(17, 15),
      duration: 30,
      title: 'Walking meditation',
    },
    {
      slug: 'dinner',
      type: AgendaBlockType.MEAL,
      start: hm(18, 0),
      duration: 60,
      title: 'Light dinner (silent)',
    },
    {
      slug: 'sitting-4',
      type: AgendaBlockType.PRACTICE,
      start: hm(19, 30),
      duration: 60,
      title: 'Sitting 4 (final of the day)',
    },
    {
      slug: 'noble-silence',
      type: AgendaBlockType.RITUAL,
      start: hm(20, 45),
      duration: 30,
      title: 'Noble silence until breakfast',
    },
  ]
}

function coachingFullDaySpecs(): BlockSpec[] {
  return [
    {
      slug: 'morning-movement',
      type: AgendaBlockType.PRACTICE,
      start: hm(7, 30),
      duration: 45,
      title: 'Morning movement',
      notes: 'Optional: walk, light yoga, run.',
    },
    {
      slug: 'breakfast',
      type: AgendaBlockType.MEAL,
      start: hm(8, 30),
      duration: 60,
      title: 'Breakfast',
    },
    {
      slug: 'hot-seat-1',
      type: AgendaBlockType.WORKSHOP,
      start: hm(9, 30),
      duration: 90,
      title: 'Hot-seat 1',
      notes: '90-min focused session. One member, group as mirror.',
    },
    {
      slug: 'hot-seat-2',
      type: AgendaBlockType.WORKSHOP,
      start: hm(11, 15),
      duration: 90,
      title: 'Hot-seat 2',
    },
    {
      slug: 'lunch',
      type: AgendaBlockType.MEAL,
      start: hm(12, 45),
      duration: 75,
      title: 'Lunch',
    },
    {
      slug: 'integration-walk',
      type: AgendaBlockType.FREE,
      start: hm(14, 0),
      duration: 90,
      title: 'Integration walk (pairs)',
      notes: 'Walking 1-1s with a structured prompt.',
    },
    {
      slug: 'hot-seat-3',
      type: AgendaBlockType.WORKSHOP,
      start: hm(15, 45),
      duration: 90,
      title: 'Hot-seat 3',
    },
    {
      slug: 'hot-seat-4',
      type: AgendaBlockType.WORKSHOP,
      start: hm(17, 30),
      duration: 90,
      title: 'Hot-seat 4',
    },
    {
      slug: 'dinner',
      type: AgendaBlockType.MEAL,
      start: hm(19, 15),
      duration: 75,
      title: 'Dinner',
    },
    {
      slug: 'commitments-circle',
      type: AgendaBlockType.RITUAL,
      start: hm(20, 45),
      duration: 60,
      title: 'Commitments & accountability circle',
    },
  ]
}

function lazyDaySpecs(): BlockSpec[] {
  return [
    {
      slug: 'slow-morning',
      type: AgendaBlockType.FREE,
      start: hm(7, 30),
      duration: 120,
      title: 'Slow morning (no formal practice)',
      notes:
        'Plum-Village-style "lazy day" — sleep in, drift, journal. Critical for week-long retreats.',
    },
    {
      slug: 'late-brunch',
      type: AgendaBlockType.MEAL,
      start: hm(10, 0),
      duration: 90,
      title: 'Late brunch',
    },
    {
      slug: 'afternoon-excursion',
      type: AgendaBlockType.FREE,
      start: hm(12, 0),
      duration: 240,
      title: 'Optional excursion or solo time',
      notes: 'Nature, town visit, swimming — keep it loose.',
    },
    {
      slug: 'dinner',
      type: AgendaBlockType.MEAL,
      start: hm(18, 30),
      duration: 75,
      title: 'Dinner',
    },
    {
      slug: 'optional-evening',
      type: AgendaBlockType.RITUAL,
      start: hm(20, 0),
      duration: 60,
      title: 'Optional fireside circle',
      notes: 'Attendance optional — the day is theirs.',
    },
  ]
}

// ─────────────────────────────────────────────────────────────────────
// Day-title helpers
// ─────────────────────────────────────────────────────────────────────

function arrivalTitle(): LocalizedString {
  return en('Arrival day')
}

function departureTitle(): LocalizedString {
  return en('Closing day')
}

function fullDayTitle(index: number): LocalizedString {
  return en(`Full day ${index}`)
}

function lazyDayTitle(): LocalizedString {
  return en('Integration day')
}

// ─────────────────────────────────────────────────────────────────────
// Plan composition per length
// ─────────────────────────────────────────────────────────────────────

interface DayBlueprint {
  kind: 'arrival' | 'departure' | 'full' | 'lazy'
  title: LocalizedString
}

function blueprintFor(length: AgendaLength): DayBlueprint[] {
  switch (length) {
    case AgendaLength.TWO_DAY:
      // 2-day weekend: arrival evening + one full day + closing
      // Modeled as 2 days because the "weekend retreat" pattern is
      // typically Fri-eve to Sun-noon. The full day is sandwiched.
      return [
        { kind: 'arrival', title: arrivalTitle() },
        { kind: 'full', title: fullDayTitle(1) },
        { kind: 'departure', title: departureTitle() },
      ]
    case AgendaLength.THREE_DAY:
      return [
        { kind: 'arrival', title: arrivalTitle() },
        { kind: 'full', title: fullDayTitle(1) },
        { kind: 'departure', title: departureTitle() },
      ]
    case AgendaLength.FIVE_DAY:
      return [
        { kind: 'arrival', title: arrivalTitle() },
        { kind: 'full', title: fullDayTitle(1) },
        { kind: 'full', title: fullDayTitle(2) },
        { kind: 'full', title: fullDayTitle(3) },
        { kind: 'departure', title: departureTitle() },
      ]
    case AgendaLength.SEVEN_DAY:
      return [
        { kind: 'arrival', title: arrivalTitle() },
        { kind: 'full', title: fullDayTitle(1) },
        { kind: 'full', title: fullDayTitle(2) },
        { kind: 'lazy', title: lazyDayTitle() },
        { kind: 'full', title: fullDayTitle(3) },
        { kind: 'full', title: fullDayTitle(4) },
        { kind: 'departure', title: departureTitle() },
      ]
  }
}

function fullDaySpecsFor(niche: AgendaNiche): BlockSpec[] {
  switch (niche) {
    case AgendaNiche.GENERIC:
      return genericFullDaySpecs()
    case AgendaNiche.YOGA:
      return yogaFullDaySpecs()
    case AgendaNiche.WELLNESS:
      return wellnessFullDaySpecs()
    case AgendaNiche.MEDITATION:
      return meditationFullDaySpecs()
    case AgendaNiche.COACHING:
      return coachingFullDaySpecs()
  }
}

function specsForBlueprint(
  kind: DayBlueprint['kind'],
  niche: AgendaNiche,
): BlockSpec[] {
  switch (kind) {
    case 'arrival':
      return arrivalDaySpecs(niche)
    case 'departure':
      return departureDaySpecs(niche)
    case 'lazy':
      return lazyDaySpecs()
    case 'full':
      return fullDaySpecsFor(niche)
  }
}

function buildPlan(niche: AgendaNiche, length: AgendaLength): AgendaDefaultPlan {
  const days: AgendaDefaultDay[] = blueprintFor(length).map((bp, idx) => {
    const dayIndex = idx + 1
    const specs = specsForBlueprint(bp.kind, niche)
    return {
      dayIndex,
      title: bp.title,
      blocks: blocksFromSpecs(niche, length, dayIndex, specs),
    }
  })
  return { niche, length, days }
}

export type AgendaContent = Record<AgendaNiche, Record<AgendaLength, AgendaDefaultPlan>>

function buildAgendaContent(): AgendaContent {
  const result = {} as AgendaContent
  for (const niche of AGENDA_NICHE_ORDER) {
    const inner = {} as Record<AgendaLength, AgendaDefaultPlan>
    for (const length of AGENDA_LENGTHS_ORDER) {
      inner[length] = buildPlan(niche, length)
    }
    result[niche] = inner
  }
  return result
}

export const AGENDA_CONTENT: AgendaContent = buildAgendaContent()

export function getAgendaPlan(
  niche: AgendaNiche,
  length: AgendaLength,
): AgendaDefaultPlan {
  return AGENDA_CONTENT[niche][length]
}

/**
 * Set of all default block IDs across every niche × length combo.
 * Used by the email server-action validator to whitelist override IDs.
 */
function buildKnownBlockIds(): Set<string> {
  const ids = new Set<string>()
  for (const niche of AGENDA_NICHE_ORDER) {
    for (const length of AGENDA_LENGTHS_ORDER) {
      for (const day of AGENDA_CONTENT[niche][length].days) {
        for (const block of day.blocks) {
          ids.add(block.id)
        }
      }
    }
  }
  return ids
}

export const AGENDA_KNOWN_BLOCK_IDS: ReadonlySet<string> = buildKnownBlockIds()
