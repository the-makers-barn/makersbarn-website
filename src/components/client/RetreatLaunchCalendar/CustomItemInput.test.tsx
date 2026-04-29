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

  it('shows 0/MAX counter when input is empty', () => {
    render(
      <CustomItemInput
        phaseId={CalendarPhaseId.FOUNDATION}
        placeholder="Add"
        addLabel="Add"
        disabled={false}
        onAdd={vi.fn()}
      />,
    )
    expect(
      screen.getByText(`0/${CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH}`),
    ).toBeInTheDocument()
  })

  it('updates the counter to current/MAX as the user types characters', async () => {
    render(
      <CustomItemInput
        phaseId={CalendarPhaseId.FOUNDATION}
        placeholder="Add a milestone"
        addLabel="Add"
        disabled={false}
        onAdd={vi.fn()}
      />,
    )
    const input = screen.getByPlaceholderText('Add a milestone')
    await userEvent.type(input, 'hello')
    expect(
      screen.getByText(`5/${CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH}`),
    ).toBeInTheDocument()
  })

  it('caps input at MAX_TEXT_LENGTH via the maxLength attribute', () => {
    render(
      <CustomItemInput
        phaseId={CalendarPhaseId.FOUNDATION}
        placeholder="Add a milestone"
        addLabel="Add"
        disabled={false}
        onAdd={vi.fn()}
      />,
    )
    const input = screen.getByPlaceholderText('Add a milestone')
    expect(input).toHaveAttribute(
      'maxLength',
      String(CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH),
    )
  })
})
