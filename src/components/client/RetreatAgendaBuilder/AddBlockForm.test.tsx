import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { AgendaBlockType } from '@/constants/tools'
import { en as enDictionary } from '@/i18n/dictionaries/en'

import { AddBlockForm } from './AddBlockForm'

describe('AddBlockForm', () => {
  it('renders a trigger button when collapsed', () => {
    render(
      <AddBlockForm
        dayIndex={1}
        disabled={false}
        isAtPerDayLimit={false}
        isAtTotalLimit={false}
        dispatch={() => {}}
        t={enDictionary}
      />,
    )
    expect(screen.getByRole('button', { name: /Add a block/ })).toBeInTheDocument()
    expect(screen.queryByLabelText('Title')).not.toBeInTheDocument()
  })

  it('expands to show the form fields when the trigger is clicked', () => {
    render(
      <AddBlockForm
        dayIndex={1}
        disabled={false}
        isAtPerDayLimit={false}
        isAtTotalLimit={false}
        dispatch={() => {}}
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /Add a block/ }))
    expect(screen.getByLabelText('Title')).toBeInTheDocument()
    expect(screen.getByLabelText('Start time')).toBeInTheDocument()
    expect(screen.getByLabelText('Duration (minutes)')).toBeInTheDocument()
  })

  it('uses suggestedStartMin as the default time when provided', () => {
    render(
      <AddBlockForm
        dayIndex={1}
        disabled={false}
        isAtPerDayLimit={false}
        isAtTotalLimit={false}
        suggestedStartMin={10 * 60 + 30}
        dispatch={() => {}}
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /Add a block/ }))
    expect(screen.getByLabelText('Start time')).toHaveValue('10:30')
  })

  it('dispatches ADD_CUSTOM with the form values on submit', () => {
    const dispatch = vi.fn()
    render(
      <AddBlockForm
        dayIndex={2}
        disabled={false}
        isAtPerDayLimit={false}
        isAtTotalLimit={false}
        suggestedStartMin={9 * 60}
        dispatch={dispatch}
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /Add a block/ }))
    fireEvent.change(screen.getByLabelText('Title'), {
      target: { value: 'Sound bath' },
    })
    fireEvent.change(screen.getByLabelText('Duration (minutes)'), {
      target: { value: '45' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Add to day' }))
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch.mock.calls[0][0]).toMatchObject({
      type: 'ADD_CUSTOM',
      dayIndex: 2,
      title: 'Sound bath',
      durationMinute: 45,
      startMinute: 9 * 60,
      blockType: AgendaBlockType.WORKSHOP,
    })
  })

  it('shows the per-day cap note when isAtPerDayLimit is true', () => {
    render(
      <AddBlockForm
        dayIndex={1}
        disabled={false}
        isAtPerDayLimit
        isAtTotalLimit={false}
        dispatch={() => {}}
        t={enDictionary}
      />,
    )
    expect(screen.getByText(/Maximum reached for this day/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Add a block/ })).toBeDisabled()
  })

  it('disables submit when title is blank', () => {
    render(
      <AddBlockForm
        dayIndex={1}
        disabled={false}
        isAtPerDayLimit={false}
        isAtTotalLimit={false}
        dispatch={() => {}}
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /Add a block/ }))
    expect(screen.getByRole('button', { name: 'Add to day' })).toBeDisabled()
  })
})
