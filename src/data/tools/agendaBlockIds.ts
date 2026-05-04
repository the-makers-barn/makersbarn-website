/**
 * Stable IDs for default agenda blocks. Once shipped, these IDs are part
 * of the localStorage state contract — renaming or removing requires a
 * state migration.
 *
 * Convention:
 *   <niche>-<length>d-d<dayIndex>-<slug>
 * e.g. "yoga-3d-d1-arrival"
 *
 * This file just collects the prefixes; the data lives in agendaContent.
 */
export const AGENDA_BLOCK_ID_SEPARATOR = '-'

export function buildAgendaBlockId(parts: {
  niche: string
  length: number
  dayIndex: number
  slug: string
}): string {
  return [parts.niche, `${parts.length}d`, `d${parts.dayIndex}`, parts.slug].join(
    AGENDA_BLOCK_ID_SEPARATOR,
  )
}
