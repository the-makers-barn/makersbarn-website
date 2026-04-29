import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi, beforeEach } from 'vitest'

import { emailCalendarPlan } from '@/actions/tools'
import { TimelinePreset } from '@/constants/tools'
import { en as enDictionary } from '@/i18n/dictionaries/en'
import { Language } from '@/types/common'
import type { CalendarState } from '@/types/tools'

import { EmailPlanForm } from './EmailPlanForm'

vi.mock('@/actions/tools', () => ({
  emailCalendarPlan: vi.fn(() => Promise.resolve({ ok: true })),
}))

beforeEach(() => {
  vi.mocked(emailCalendarPlan).mockReset()
  vi.mocked(emailCalendarPlan).mockResolvedValue({ ok: true })
})

const emptyState: CalendarState = {
  schemaVersion: 1,
  itemStates: {},
  customItems: [],
}

describe('EmailPlanForm', () => {
  it('renders heading, email input, consent checkbox, and submit button', () => {
    render(
      <EmailPlanForm
        preset={TimelinePreset.TWELVE_MONTHS}
        locale={Language.EN}
        t={enDictionary}
        state={emptyState}
        disabled={false}
      />,
    )
    expect(
      screen.getByRole('heading', { name: /email me my 12-month plan/i }),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /email my plan/i })).toBeInTheDocument()
  })

  it('disables the submit button when disabled prop is true', () => {
    render(
      <EmailPlanForm
        preset={TimelinePreset.TWELVE_MONTHS}
        locale={Language.EN}
        t={enDictionary}
        state={emptyState}
        disabled={true}
      />,
    )
    expect(screen.getByRole('button', { name: /email my plan/i })).toBeDisabled()
    expect(screen.getByPlaceholderText('your@email.com')).toBeDisabled()
  })

  it('shows success message when server action resolves ok', async () => {
    render(
      <EmailPlanForm
        preset={TimelinePreset.TWELVE_MONTHS}
        locale={Language.EN}
        t={enDictionary}
        state={emptyState}
        disabled={false}
      />,
    )
    await userEvent.type(
      screen.getByPlaceholderText('your@email.com'),
      'test@example.com',
    )
    await userEvent.click(screen.getByRole('button', { name: /email my plan/i }))
    expect(await screen.findByText(/sent — check your inbox/i)).toBeInTheDocument()
  })

  it('shows the rate-limit error and keeps the email value when the action returns rate_limit', async () => {
    vi.mocked(emailCalendarPlan).mockResolvedValueOnce({ ok: false, error: 'rate_limit' })
    render(
      <EmailPlanForm
        preset={TimelinePreset.TWELVE_MONTHS}
        locale={Language.EN}
        t={enDictionary}
        state={emptyState}
        disabled={false}
      />,
    )
    const emailInput = screen.getByPlaceholderText('your@email.com')
    await userEvent.type(emailInput, 'host@example.com')
    await userEvent.click(screen.getByRole('button', { name: /email my plan/i }))
    expect(await screen.findByText(/too many emails just now/i)).toBeInTheDocument()
    expect(emailInput).toHaveValue('host@example.com')
  })
})
