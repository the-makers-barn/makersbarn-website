import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { CALENDAR_CUSTOM_ITEM_LIMITS, CalendarPhaseId } from '@/constants/tools'

import { CustomItemInput } from './CustomItemInput'

describe('CustomItemInput', () => {
  it('renders input with placeholder and disabled add button when empty', () => {
    render(
      <CustomItemInput
        phaseId={CalendarPhaseId.FOUNDATION}
        placeholder="Add a milestone"
        addLabel="Add"
        disabled={false}
        currentCount={0}
        onAdd={vi.fn()}
      />,
    )
    expect(screen.getByPlaceholderText('Add a milestone')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add' })).toBeDisabled()
  })

  it('enables add button when text is typed and calls onAdd on submit', async () => {
    const onAdd = vi.fn()
    render(
      <CustomItemInput
        phaseId={CalendarPhaseId.FOUNDATION}
        placeholder="Add a milestone"
        addLabel="Add"
        disabled={false}
        currentCount={0}
        onAdd={onAdd}
      />,
    )
    const input = screen.getByPlaceholderText('Add a milestone')
    await userEvent.type(input, 'Book speakers')
    const button = screen.getByRole('button', { name: 'Add' })
    expect(button).not.toBeDisabled()
    await userEvent.click(button)
    expect(onAdd).toHaveBeenCalledWith('Book speakers')
    expect(input).toHaveValue('')
  })

  it('shows current/max counter using configured limits', () => {
    render(
      <CustomItemInput
        phaseId={CalendarPhaseId.FOUNDATION}
        placeholder="Add"
        addLabel="Add"
        disabled={false}
        currentCount={3}
        onAdd={vi.fn()}
      />,
    )
    expect(
      screen.getByText(`3/${CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH}`),
    ).toBeInTheDocument()
  })
})
