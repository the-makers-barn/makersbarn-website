'use client'

import { useState, type Dispatch, type ReactNode } from 'react'

import type { AgendaBlockType } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { formatDuration, formatMinutesAsTime } from '@/lib/tools/agenda/format'
import type { AgendaAction } from '@/lib/tools/agenda/state'
import type { AgendaResolvedBlock } from '@/types/tools'

import { BlockEditForm, type BlockEditDraft } from './BlockEditForm'
import styles from './RetreatAgendaBuilder.module.css'

export interface BlockRowProps {
  block: AgendaResolvedBlock
  disabled: boolean
  dispatch: Dispatch<AgendaAction>
  t: Dictionary
}

function blockTypeLabel(type: AgendaBlockType, t: Dictionary): string {
  return t.tools.agenda.blockTypeLabels[type]
}

function dispatchEdit(
  block: AgendaResolvedBlock,
  draft: BlockEditDraft,
  dispatch: Dispatch<AgendaAction>,
): void {
  if (block.isCustom) {
    dispatch({
      type: 'EDIT_CUSTOM',
      localId: block.id,
      patch: {
        startMinute: draft.startMinute,
        durationMinute: draft.durationMinute,
        title: draft.title,
        notes: draft.notes,
        type: draft.type,
      },
    })
    return
  }
  dispatch({
    type: 'EDIT_DEFAULT',
    blockId: block.id,
    patch: {
      startMinute: draft.startMinute,
      durationMinute: draft.durationMinute,
      title: draft.title,
      notes: draft.notes,
    },
  })
}

export function BlockRow({ block, disabled, dispatch, t }: BlockRowProps): ReactNode {
  const labels = t.tools.agenda.block
  const [editing, setEditing] = useState(false)

  const className = block.isCustom
    ? `${styles.blockRow} ${styles.blockRowCustom}`
    : styles.blockRow

  if (editing) {
    return (
      <li className={className}>
        <span className={styles.blockTime}>{formatMinutesAsTime(block.startMinute)}</span>
        <div className={styles.blockBody}>
          <p className={styles.blockTitle}>{block.title}</p>
          <BlockEditForm
            block={block}
            disabled={disabled}
            onSave={(draft) => {
              dispatchEdit(block, draft, dispatch)
              setEditing(false)
            }}
            onCancel={() => setEditing(false)}
            t={t}
          />
        </div>
        <span className={styles.blockActions} aria-hidden="true" />
      </li>
    )
  }

  return (
    <li className={className}>
      <span className={styles.blockTime}>{formatMinutesAsTime(block.startMinute)}</span>
      <div className={styles.blockBody}>
        <p className={styles.blockTitle}>{block.title}</p>
        <span className={styles.blockMeta}>
          <span className={styles.blockType}>{blockTypeLabel(block.type, t)}</span>
          <span>{formatDuration(block.durationMinute)}</span>
        </span>
        {block.notes && <p className={styles.blockNotes}>{block.notes}</p>}
      </div>
      <div className={styles.blockActions}>
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => setEditing(true)}
          disabled={disabled}
        >
          {labels.edit}
        </button>
        {block.isCustom ? (
          <button
            type="button"
            className={`${styles.iconButton} ${styles.iconButtonDanger}`}
            onClick={() => dispatch({ type: 'REMOVE_CUSTOM', localId: block.id })}
            disabled={disabled}
          >
            {labels.remove}
          </button>
        ) : (
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => dispatch({ type: 'TOGGLE_HIDE_DEFAULT', blockId: block.id })}
            disabled={disabled}
          >
            {labels.hide}
          </button>
        )}
      </div>
    </li>
  )
}
