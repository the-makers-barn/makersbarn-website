import {
  AGENDA_CUSTOM_BLOCK_LIMITS,
  AGENDA_DEFAULT_LENGTH,
  AGENDA_LENGTHS_ORDER,
  AGENDA_NICHE_ORDER,
  AgendaBlockType,
  AgendaLength,
  AgendaNiche,
} from '@/constants/tools'
import { sanitizePlainText } from '@/lib/security'
import type {
  AgendaBlockOverride,
  AgendaCustomBlock,
  AgendaState,
} from '@/types/tools'

export type AgendaAction =
  | { type: 'SET_LENGTH'; length: AgendaLength }
  | { type: 'TOGGLE_HIDE_DEFAULT'; blockId: string }
  | {
      type: 'EDIT_DEFAULT'
      blockId: string
      patch: AgendaBlockOverride
    }
  | { type: 'CLEAR_DEFAULT_OVERRIDE'; blockId: string }
  | {
      type: 'ADD_CUSTOM'
      dayIndex: number
      blockType: AgendaBlockType
      startMinute: number
      durationMinute: number
      title: string
      notes: string
    }
  | {
      type: 'EDIT_CUSTOM'
      localId: string
      patch: Partial<Omit<AgendaCustomBlock, 'id'>>
    }
  | { type: 'REMOVE_CUSTOM'; localId: string }
  | { type: 'RESET' }
  | { type: 'HYDRATE'; state: AgendaState }

const CURRENT_SCHEMA_VERSION = 1 as const

export function createDefaultAgendaState(niche: AgendaNiche): AgendaState {
  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    niche,
    length: AGENDA_DEFAULT_LENGTH,
    hiddenBlockIds: {},
    blockOverrides: {},
    customBlocks: [],
  }
}

function clampStart(value: number): number {
  if (!Number.isFinite(value)) {
    return AGENDA_CUSTOM_BLOCK_LIMITS.MIN_START_MIN
  }
  const rounded = Math.round(value)
  if (rounded < AGENDA_CUSTOM_BLOCK_LIMITS.MIN_START_MIN) {
    return AGENDA_CUSTOM_BLOCK_LIMITS.MIN_START_MIN
  }
  if (rounded > AGENDA_CUSTOM_BLOCK_LIMITS.MAX_START_MIN) {
    return AGENDA_CUSTOM_BLOCK_LIMITS.MAX_START_MIN
  }
  return rounded
}

function clampDuration(value: number): number {
  if (!Number.isFinite(value)) {
    return AGENDA_CUSTOM_BLOCK_LIMITS.MIN_DURATION_MIN
  }
  const rounded = Math.round(value)
  if (rounded < AGENDA_CUSTOM_BLOCK_LIMITS.MIN_DURATION_MIN) {
    return AGENDA_CUSTOM_BLOCK_LIMITS.MIN_DURATION_MIN
  }
  if (rounded > AGENDA_CUSTOM_BLOCK_LIMITS.MAX_DURATION_MIN) {
    return AGENDA_CUSTOM_BLOCK_LIMITS.MAX_DURATION_MIN
  }
  return rounded
}

function generateLocalId(): string {
  return crypto.randomUUID()
}

function toggleHidden(state: AgendaState, blockId: string): AgendaState {
  const next = { ...state.hiddenBlockIds }
  if (blockId in next) {
    delete next[blockId]
  } else {
    next[blockId] = true
  }
  return { ...state, hiddenBlockIds: next }
}

function sanitizeOverridePatch(patch: AgendaBlockOverride): AgendaBlockOverride {
  const out: AgendaBlockOverride = {}
  if (patch.startMinute !== undefined) {
    out.startMinute = clampStart(patch.startMinute)
  }
  if (patch.durationMinute !== undefined) {
    out.durationMinute = clampDuration(patch.durationMinute)
  }
  if (patch.title !== undefined) {
    out.title = sanitizePlainText(patch.title, AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TITLE_LENGTH)
  }
  if (patch.notes !== undefined) {
    out.notes = sanitizePlainText(patch.notes, AGENDA_CUSTOM_BLOCK_LIMITS.MAX_NOTES_LENGTH)
  }
  return out
}

function mergeOverride(
  state: AgendaState,
  blockId: string,
  patch: AgendaBlockOverride,
): AgendaState {
  const sanitized = sanitizeOverridePatch(patch)
  const existing = state.blockOverrides[blockId] ?? {}
  const merged = { ...existing, ...sanitized }
  if (
    merged.startMinute === undefined &&
    merged.durationMinute === undefined &&
    (merged.title === undefined || merged.title === '') &&
    (merged.notes === undefined || merged.notes === '')
  ) {
    const next = { ...state.blockOverrides }
    delete next[blockId]
    return { ...state, blockOverrides: next }
  }
  return {
    ...state,
    blockOverrides: { ...state.blockOverrides, [blockId]: merged },
  }
}

function clearOverride(state: AgendaState, blockId: string): AgendaState {
  if (!(blockId in state.blockOverrides)) {
    return state
  }
  const next = { ...state.blockOverrides }
  delete next[blockId]
  return { ...state, blockOverrides: next }
}

function countCustomInDay(items: AgendaCustomBlock[], dayIndex: number): number {
  return items.filter((item) => item.dayIndex === dayIndex).length
}

function addCustomBlock(
  state: AgendaState,
  draft: {
    dayIndex: number
    blockType: AgendaBlockType
    startMinute: number
    durationMinute: number
    title: string
    notes: string
  },
): AgendaState {
  if (state.customBlocks.length >= AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TOTAL) {
    return state
  }
  if (
    countCustomInDay(state.customBlocks, draft.dayIndex) >=
    AGENDA_CUSTOM_BLOCK_LIMITS.MAX_PER_DAY
  ) {
    return state
  }
  const title = sanitizePlainText(draft.title, AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TITLE_LENGTH)
  if (title.length === 0) {
    return state
  }
  const block: AgendaCustomBlock = {
    id: generateLocalId(),
    dayIndex: draft.dayIndex,
    type: draft.blockType,
    startMinute: clampStart(draft.startMinute),
    durationMinute: clampDuration(draft.durationMinute),
    title,
    notes: sanitizePlainText(draft.notes, AGENDA_CUSTOM_BLOCK_LIMITS.MAX_NOTES_LENGTH),
  }
  return { ...state, customBlocks: [...state.customBlocks, block] }
}

function editCustomBlock(
  state: AgendaState,
  localId: string,
  patch: Partial<Omit<AgendaCustomBlock, 'id'>>,
): AgendaState {
  return {
    ...state,
    customBlocks: state.customBlocks.map((item) => {
      if (item.id !== localId) {
        return item
      }
      const next = { ...item }
      if (patch.dayIndex !== undefined) {
        next.dayIndex = Math.max(1, Math.round(patch.dayIndex))
      }
      if (patch.type !== undefined) {
        next.type = patch.type
      }
      if (patch.startMinute !== undefined) {
        next.startMinute = clampStart(patch.startMinute)
      }
      if (patch.durationMinute !== undefined) {
        next.durationMinute = clampDuration(patch.durationMinute)
      }
      if (patch.title !== undefined) {
        const cleaned = sanitizePlainText(
          patch.title,
          AGENDA_CUSTOM_BLOCK_LIMITS.MAX_TITLE_LENGTH,
        )
        if (cleaned.length > 0) {
          next.title = cleaned
        }
      }
      if (patch.notes !== undefined) {
        next.notes = sanitizePlainText(
          patch.notes,
          AGENDA_CUSTOM_BLOCK_LIMITS.MAX_NOTES_LENGTH,
        )
      }
      return next
    }),
  }
}

export function agendaReducer(state: AgendaState, action: AgendaAction): AgendaState {
  switch (action.type) {
    case 'SET_LENGTH':
      if (action.length === state.length) {
        return state
      }
      // Custom blocks for now-out-of-range dayIndex stay in state; they are
      // hidden from the rendered agenda by the resolver but reappear if the
      // user grows the length back. Intentional — preserves user work.
      return { ...state, length: action.length }
    case 'TOGGLE_HIDE_DEFAULT':
      return toggleHidden(state, action.blockId)
    case 'EDIT_DEFAULT':
      return mergeOverride(state, action.blockId, action.patch)
    case 'CLEAR_DEFAULT_OVERRIDE':
      return clearOverride(state, action.blockId)
    case 'ADD_CUSTOM':
      return addCustomBlock(state, action)
    case 'EDIT_CUSTOM':
      return editCustomBlock(state, action.localId, action.patch)
    case 'REMOVE_CUSTOM':
      return {
        ...state,
        customBlocks: state.customBlocks.filter((item) => item.id !== action.localId),
      }
    case 'RESET':
      return createDefaultAgendaState(state.niche)
    case 'HYDRATE':
      return action.state
  }
}

function isAgendaNiche(value: unknown): value is AgendaNiche {
  return (AGENDA_NICHE_ORDER as readonly string[]).includes(value as string)
}

function isAgendaLength(value: unknown): value is AgendaLength {
  return (AGENDA_LENGTHS_ORDER as readonly number[]).includes(value as number)
}

export function migrateAgendaState(raw: unknown): AgendaState | null {
  if (typeof raw !== 'object' || raw === null) {
    return null
  }
  const candidate = raw as Record<string, unknown>
  if (candidate.schemaVersion !== CURRENT_SCHEMA_VERSION) {
    return null
  }
  if (!isAgendaNiche(candidate.niche)) {
    return null
  }
  if (!isAgendaLength(candidate.length)) {
    return null
  }
  if (
    typeof candidate.hiddenBlockIds !== 'object' ||
    candidate.hiddenBlockIds === null ||
    typeof candidate.blockOverrides !== 'object' ||
    candidate.blockOverrides === null ||
    !Array.isArray(candidate.customBlocks)
  ) {
    return null
  }
  return candidate as unknown as AgendaState
}
