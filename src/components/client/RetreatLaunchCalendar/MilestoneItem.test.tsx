import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { MilestoneStatus } from '@/constants/tools'

import { MilestoneItem } from './MilestoneItem'

const labels = {
  markDone: 'Mark done',
  markPending: 'Mark pending',
  dismiss: 'Dismiss',
  restore: 'Restore',
}

describe('MilestoneItem', () => {
  it('renders text and pending checkbox by default', () => {
    render(
      <MilestoneItem
        text="Sign venue contract"
        status={MilestoneStatus.PENDING}
        labels={labels}
        disabled={false}
        onToggleDone={vi.fn()}
        onToggleDismissed={vi.fn()}
      />,
    )
    expect(screen.getByText('Sign venue contract')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('shows DONE state with checked box', () => {
    render(
      <MilestoneItem
        text="Sign venue contract"
        status={MilestoneStatus.DONE}
        labels={labels}
        disabled={false}
        onToggleDone={vi.fn()}
        onToggleDismissed={vi.fn()}
      />,
    )
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('calls onToggleDone when checkbox clicked', async () => {
    const onToggleDone = vi.fn()
    render(
      <MilestoneItem
        text="x"
        status={MilestoneStatus.PENDING}
        labels={labels}
        disabled={false}
        onToggleDone={onToggleDone}
        onToggleDismissed={vi.fn()}
      />,
    )
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onToggleDone).toHaveBeenCalledTimes(1)
  })

  it('renders strike-through styling for DISMISSED', () => {
    render(
      <MilestoneItem
        text="x"
        status={MilestoneStatus.DISMISSED}
        labels={labels}
        disabled={false}
        onToggleDone={vi.fn()}
        onToggleDismissed={vi.fn()}
      />,
    )
    const text = screen.getByText('x')
    expect(text.className).toMatch(/dismissed/i)
  })

  it('shows aria-pressed=true on dismiss button when dismissed', () => {
    render(
      <MilestoneItem
        text="x"
        status={MilestoneStatus.DISMISSED}
        labels={labels}
        disabled={false}
        onToggleDone={vi.fn()}
        onToggleDismissed={vi.fn()}
      />,
    )
    expect(screen.getByRole('button', { name: /restore/i })).toHaveAttribute('aria-pressed', 'true')
  })

  it('disables interactions when disabled=true', () => {
    render(
      <MilestoneItem
        text="x"
        status={MilestoneStatus.PENDING}
        labels={labels}
        disabled={true}
        onToggleDone={vi.fn()}
        onToggleDismissed={vi.fn()}
      />,
    )
    expect(screen.getByRole('checkbox')).toBeDisabled()
    expect(screen.getByRole('button', { name: /dismiss/i })).toBeDisabled()
  })
})
