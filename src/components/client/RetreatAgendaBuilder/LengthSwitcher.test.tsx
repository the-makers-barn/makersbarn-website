import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { AgendaLength } from '@/constants/tools'
import { en as enDictionary } from '@/i18n/dictionaries/en'

import { LengthSwitcher } from './LengthSwitcher'

describe('LengthSwitcher', () => {
  it('renders four tabs and marks the current one as selected', () => {
    render(
      <LengthSwitcher
        current={AgendaLength.THREE_DAY}
        onChange={() => {}}
        disabled={false}
        t={enDictionary}
      />,
    )
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(4)
    expect(screen.getByRole('tab', { name: /3 days/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: /5 days/i })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('calls onChange with the clicked length', () => {
    const onChange = vi.fn()
    render(
      <LengthSwitcher
        current={AgendaLength.THREE_DAY}
        onChange={onChange}
        disabled={false}
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('tab', { name: /7 days/i }))
    expect(onChange).toHaveBeenCalledWith(AgendaLength.SEVEN_DAY)
  })

  it('does not call onChange when disabled', () => {
    const onChange = vi.fn()
    render(
      <LengthSwitcher
        current={AgendaLength.THREE_DAY}
        onChange={onChange}
        disabled
        t={enDictionary}
      />,
    )
    fireEvent.click(screen.getByRole('tab', { name: /5 days/i }))
    expect(onChange).not.toHaveBeenCalled()
  })
})
