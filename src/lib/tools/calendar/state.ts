import {
  CALENDAR_CUSTOM_ITEM_LIMITS,
  CalendarPhaseId,
  MilestoneStatus,
} from '@/constants/tools'
import { sanitizePlainText } from '@/lib/security'
import type {
  CalendarState,
  CustomMilestone,
  MilestoneNonDefaultStatus,
} from '@/types/tools'

export type CalendarAction =
  | { type: 'TOGGLE_DONE'; milestoneId: string }
  | { type: 'TOGGLE_DISMISSED'; milestoneId: string }
  | { type: 'ADD_CUSTOM'; phaseId: CalendarPhaseId; text: string }
  | { type: 'EDIT_CUSTOM'; localId: string; text: string }
  | { type: 'REMOVE_CUSTOM'; localId: string }
  | { type: 'TOGGLE_CUSTOM_DONE'; localId: string }
  | { type: 'TOGGLE_CUSTOM_DISMISSED'; localId: string }
  | { type: 'RESET' }
  | { type: 'HYDRATE'; state: CalendarState }

const CURRENT_SCHEMA_VERSION = 1 as const

export function createDefaultCalendarState(): CalendarState {
  return { schemaVersion: CURRENT_SCHEMA_VERSION, itemStates: {}, customItems: [] }
}

function toggleItemState(
  state: CalendarState,
  milestoneId: string,
  target: MilestoneNonDefaultStatus,
): CalendarState {
  const current = state.itemStates[milestoneId]
  const next = { ...state.itemStates }
  if (current === target) {
    delete next[milestoneId]
  } else {
    next[milestoneId] = target
  }
  return { ...state, itemStates: next }
}

function countCustomItemsInPhase(items: CustomMilestone[], phaseId: CalendarPhaseId): number {
  return items.filter((item) => item.phaseId === phaseId).length
}

function generateLocalId(): string {
  return crypto.randomUUID()
}

function addCustomItem(
  state: CalendarState,
  phaseId: CalendarPhaseId,
  rawText: string,
): CalendarState {
  if (state.customItems.length >= CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TOTAL) {
    return state
  }
  if (countCustomItemsInPhase(state.customItems, phaseId) >= CALENDAR_CUSTOM_ITEM_LIMITS.MAX_PER_PHASE) {
    return state
  }
  const text = sanitizePlainText(rawText, CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH)
  if (text.length === 0) {
    return state
  }
  const newItem: CustomMilestone = {
    id: generateLocalId(),
    phaseId,
    text,
    status: MilestoneStatus.PENDING,
  }
  return { ...state, customItems: [...state.customItems, newItem] }
}

function editCustomItem(state: CalendarState, localId: string, rawText: string): CalendarState {
  const text = sanitizePlainText(rawText, CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH)
  if (text.length === 0) {
    return state
  }
  return {
    ...state,
    customItems: state.customItems.map((item) =>
      item.id === localId ? { ...item, text } : item,
    ),
  }
}

function toggleCustomItemStatus(
  state: CalendarState,
  localId: string,
  target: MilestoneNonDefaultStatus,
): CalendarState {
  return {
    ...state,
    customItems: state.customItems.map((item) => {
      if (item.id !== localId) {
        return item
      }
      const nextStatus = item.status === target ? MilestoneStatus.PENDING : target
      return { ...item, status: nextStatus }
    }),
  }
}

export function calendarReducer(state: CalendarState, action: CalendarAction): CalendarState {
  switch (action.type) {
    case 'TOGGLE_DONE':
      return toggleItemState(state, action.milestoneId, MilestoneStatus.DONE)
    case 'TOGGLE_DISMISSED':
      return toggleItemState(state, action.milestoneId, MilestoneStatus.DISMISSED)
    case 'ADD_CUSTOM':
      return addCustomItem(state, action.phaseId, action.text)
    case 'EDIT_CUSTOM':
      return editCustomItem(state, action.localId, action.text)
    case 'REMOVE_CUSTOM':
      return {
        ...state,
        customItems: state.customItems.filter((item) => item.id !== action.localId),
      }
    case 'TOGGLE_CUSTOM_DONE':
      return toggleCustomItemStatus(state, action.localId, MilestoneStatus.DONE)
    case 'TOGGLE_CUSTOM_DISMISSED':
      return toggleCustomItemStatus(state, action.localId, MilestoneStatus.DISMISSED)
    case 'RESET':
      return createDefaultCalendarState()
    case 'HYDRATE':
      return action.state
  }
}

export function migrateState(raw: unknown): CalendarState | null {
  if (typeof raw !== 'object' || raw === null) {
    return null
  }
  const candidate = raw as Partial<CalendarState>
  if (candidate.schemaVersion !== CURRENT_SCHEMA_VERSION) {
    return null
  }
  return candidate as CalendarState
}
