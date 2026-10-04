import { useState } from 'react'
import { createEvent, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { HeardAboutSource } from '@/types'

import { HeardAboutField, HeardAboutTone, type HeardAboutValue } from './HeardAboutField'

vi.mock('@/context', async () => {
  const { en } = await import('@/i18n/dictionaries/en')
  return { useTranslation: () => ({ t: en.heardAbout }) }
})

const ID_PREFIX = 'test-heard-about'

function Harness({ onValue }: { onValue: (value: HeardAboutValue) => void }) {
  const [value, setValue] = useState<HeardAboutValue>({ heardAboutDetail: '' })
  return (
    <HeardAboutField
      idPrefix={ID_PREFIX}
      tone={HeardAboutTone.LIGHT}
      {...value}
      onChange={(next) => {
        setValue(next)
        onValue(next)
      }}
    />
  )
}

describe('HeardAboutField', () => {
  it('starts with nothing selected and no follow-up box', () => {
    render(<Harness onValue={vi.fn()} />)
    expect(screen.getAllByRole('radio').every((radio) => !(radio as HTMLInputElement).checked)).toBe(true)
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('opens the follow-up box for a friend and sends the typed detail', () => {
    const onValue = vi.fn()
    render(<Harness onValue={onValue} />)
    fireEvent.click(screen.getByLabelText('A friend or colleague'))
    fireEvent.change(screen.getByLabelText('Who told you about us?'), { target: { value: 'Anna' } })
    expect(onValue).toHaveBeenLastCalledWith({ heardAbout: HeardAboutSource.FRIEND, heardAboutDetail: 'Anna' })
  })

  it('shows no follow-up box for Google', () => {
    render(<Harness onValue={vi.fn()} />)
    fireEvent.click(screen.getByLabelText('Google search'))
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('clears the answer when the selected chip is tapped again', () => {
    const onValue = vi.fn()
    render(<Harness onValue={onValue} />)
    const chip = screen.getByLabelText('Something else')
    fireEvent.click(chip)
    fireEvent.click(chip)
    expect(onValue).toHaveBeenLastCalledWith({ heardAbout: undefined, heardAboutDetail: '' })
    expect((chip as HTMLInputElement).checked).toBe(false)
  })

  it('selects through a real tap on the chip text', async () => {
    const onValue = vi.fn()
    render(<Harness onValue={onValue} />)
    await userEvent.click(screen.getByText('Google search'))
    expect(onValue).toHaveBeenLastCalledWith({ heardAbout: HeardAboutSource.GOOGLE, heardAboutDetail: '' })
  })

  it('drops the typed detail when another chip is chosen', () => {
    const onValue = vi.fn()
    render(<Harness onValue={onValue} />)
    fireEvent.click(screen.getByLabelText('A friend or colleague'))
    fireEvent.change(screen.getByLabelText('Who told you about us?'), { target: { value: 'Anna' } })
    fireEvent.click(screen.getByLabelText('Something else'))
    expect(onValue).toHaveBeenLastCalledWith({ heardAbout: HeardAboutSource.OTHER, heardAboutDetail: '' })
  })

  it('keeps Enter in the follow-up box from submitting the surrounding form', () => {
    render(<Harness onValue={vi.fn()} />)
    fireEvent.click(screen.getByLabelText('Something else'))
    const detail = screen.getByLabelText('Where did you hear about us?')
    const enter = createEvent.keyDown(detail, { key: 'Enter' })
    fireEvent(detail, enter)
    expect(enter.defaultPrevented).toBe(true)
  })
})
