import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { AgendaBlockType } from '@/constants/tools'
import { en as enDictionary } from '@/i18n/dictionaries/en'
import type { AgendaAction } from '@/lib/tools/agenda/state'
import type { AgendaResolvedBlock } from '@/types/tools'

import { BlockRow } from './BlockRow'

type MockDispatch = ReturnType<typeof vi.fn<(action: AgendaAction) => void>>

const defaultBlock: AgendaResolvedBlock = {
  id: 'yoga-3d-d2-morning-vinyasa',
  dayIndex: 2,
  type: AgendaBlockType.PRACTICE,
  startMinute: 7 * 60,
  durationMinute: 90,
  title: 'Morning vinyasa',
  notes: 'Dynamic practice',
  isCustom: false,
}

const customBlock: AgendaResolvedBlock = {
  ...defaultBlock,
  id: 'custom-1',
  title: 'Custom workshop',
  isCustom: true,
}

describe('BlockRow', () => {
  it('renders the time, title, type, and duration', () => {
    render(
      <BlockRow
        block={defaultBlock}
        disabled={false}
        dispatch={() => {}}
        t={enDictionary}
      />,
    )
    expect(screen.getByText('07:00')).toBeInTheDocument()
    expect(screen.getByText('Morning vinyasa')).toBeInTheDocument()
    expect(screen.getByText('Practice')).toBeInTheDocument()
    expect(screen.getByText('1h 30m')).toBeInTheDocument()
  })

  it('shows Hide on default blocks and Remove on custom blocks', () => {
    const { rerender } = render(
      <BlockRow
        block={defaultBlock}
        disabled={false}
        dispatch={() => {}}
        t={enDictionary}
      />,
    )
    expect(screen.getByRole('button', { name: 'Hide' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Remove' })).not.toBeInTheDocument()

    rerender(
      <BlockRow
        block={customBlock}
        disabled={false}
        dispatch={() => {}}
        t={enDictionary}
      />,
    )
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Hide' })).not.toBeInTheDocument()
  })

  it('dispatches TOGGLE_HIDE_DEFAULT when Hide is clicked on a default block', () => {
    const dispatch = vi.fn()
    render(
      <BlockRow
        block={defaultBlock}
        disabled={false}
        dispatch={dispatch}
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Hide' }))
    expect(dispatch).toHaveBeenCalledWith({
      type: 'TOGGLE_HIDE_DEFAULT',
      blockId: defaultBlock.id,
    })
  })

  it('dispatches REMOVE_CUSTOM when Remove is clicked on a custom block', () => {
    const dispatch = vi.fn()
    render(
      <BlockRow
        block={customBlock}
        disabled={false}
        dispatch={dispatch}
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Remove' }))
    expect(dispatch).toHaveBeenCalledWith({
      type: 'REMOVE_CUSTOM',
      localId: customBlock.id,
    })
  })

  it('switches to edit form when Edit is clicked, dispatches EDIT_DEFAULT on save', () => {
    const dispatch: MockDispatch = vi.fn()
    render(
      <BlockRow
        block={defaultBlock}
        disabled={false}
        dispatch={dispatch}
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))
    expect(screen.getByLabelText('Start time')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Save' }))
    expect(dispatch).toHaveBeenCalledTimes(1)
    const action = dispatch.mock.calls[0][0]
    expect(action.type).toBe('EDIT_DEFAULT')
    if (action.type === 'EDIT_DEFAULT') {
      expect(action.blockId).toBe(defaultBlock.id)
    }
  })
})
