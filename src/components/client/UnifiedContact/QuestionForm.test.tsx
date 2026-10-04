import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { ATTRIBUTION_STORAGE_KEY, Channel } from '@/constants'
import { HeardAboutSource } from '@/types'

import { QuestionForm } from './QuestionForm'

const { submitContactFormMock } = vi.hoisted(() => ({
  submitContactFormMock: vi.fn(() => Promise.resolve({ success: true, message: 'ok' })),
}))

vi.mock('@/actions', () => ({ submitContactForm: submitContactFormMock }))
vi.mock('@/lib/analytics', () => ({ track: vi.fn() }))
vi.mock('@/context', async () => {
  const { en } = await import('@/i18n/dictionaries/en')
  return { useTranslation: (namespace: keyof typeof en) => ({ t: en[namespace] }) }
})

describe('QuestionForm submission source', () => {
  beforeEach(() => {
    submitContactFormMock.mockClear()
    window.sessionStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify({ attribution_channel: Channel.GOOGLE, attribution_campaign: 'spring' })
    )
  })

  it('sends the chosen answer, its detail and the landing channel to the server action', async () => {
    render(<QuestionForm />)
    fireEvent.change(screen.getByPlaceholderText('Your name...'), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByPlaceholderText('Your email...'), { target: { value: 'ada@example.com' } })
    fireEvent.change(screen.getByLabelText('How can we help you?'), { target: { value: 'hello' } })
    fireEvent.click(screen.getByText('A friend or colleague'))
    fireEvent.change(screen.getByLabelText('Who told you about us?'), { target: { value: 'Anna' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }).closest('form') as HTMLFormElement)

    await waitFor(() => expect(submitContactFormMock).toHaveBeenCalledTimes(1))
    expect(submitContactFormMock).toHaveBeenCalledWith(
      expect.objectContaining({
        heardAbout: HeardAboutSource.FRIEND,
        heardAboutDetail: 'Anna',
        attributionChannel: Channel.GOOGLE,
        attributionCampaign: 'spring',
      })
    )
  })
})
