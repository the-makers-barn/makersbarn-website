import type { ChangeEvent, FormEvent } from 'react'
import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { ATTRIBUTION_STORAGE_KEY, Channel } from '@/constants'
import { en } from '@/i18n/dictionaries/en'
import { HeardAboutSource } from '@/types'

import { useBookingForm } from './useBookingForm'

const { submitBookingFormMock } = vi.hoisted(() => ({
  submitBookingFormMock: vi.fn(() => Promise.resolve({ success: true, messageCode: 'success' })),
}))

vi.mock('@/actions', () => ({ submitBookingForm: submitBookingFormMock, notifyBookingStarted: vi.fn() }))
vi.mock('@/lib/analytics', () => ({ track: vi.fn() }))

function typeInto(name: string, value: string): ChangeEvent<HTMLInputElement> {
  return { target: { name, value, type: 'text' } } as ChangeEvent<HTMLInputElement>
}

describe('useBookingForm submission source', () => {
  beforeEach(() => {
    submitBookingFormMock.mockClear()
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify({ attribution_channel: Channel.META_ORGANIC }))
  })

  it('sends the chosen answer and the landing channel to the server action', async () => {
    const { result } = renderHook(() =>
      useBookingForm({
        bookingMessages: en.booking.messages,
        bookingValidation: en.booking.validation,
        retreatTypes: en.booking.retreatTypes,
      })
    )

    act(() => {
      result.current.handleChange(typeInto('name', 'Ada'))
      result.current.handleChange(typeInto('email', 'ada@example.com'))
      result.current.handleHeardAboutChange({ heardAbout: HeardAboutSource.RETURNING, heardAboutDetail: '' })
    })
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as FormEvent<HTMLFormElement>)
    })

    await waitFor(() => expect(submitBookingFormMock).toHaveBeenCalledTimes(1))
    expect(submitBookingFormMock).toHaveBeenCalledWith(
      expect.objectContaining({
        heardAbout: HeardAboutSource.RETURNING,
        attributionChannel: Channel.META_ORGANIC,
      })
    )
  })
})
