import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { CalendarPhaseId, MilestoneStatus } from '@/constants/tools'
import type { CustomMilestone } from '@/types/tools'

import { CustomItemRow } from './CustomItemRow'

const labels = {
  remove: 'Remove',
  dismiss: 'Dismiss',
  restore: 'Restore',
  markDone: 'Mark done',
  markPending: 'Mark pending',
}

function makeItem(overrides: Partial<CustomMilestone> = {}): CustomMilestone {
  return {
    id: 'custom-1',
    phaseId: CalendarPhaseId.FOUNDATION,
    text: 'Email past attendees',
    status: MilestoneStatus.PENDING,
    ...overrides,
  }
}

describe('CustomItemRow', () => {
  it('renders text and pending checkbox', () => {
    render(
      <CustomItemRow
        item={makeItem()}
        labels={labels}
        disabled={false}
        onToggleDone={vi.fn()}
        onToggleDismissed={vi.fn()}
        onRemove={vi.fn()}
      />,
    )
    expect(screen.getByText('Email past attendees')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('renders URL text as plain text (no anchor tag — security)', () => {
    render(
      <CustomItemRow
        item={makeItem({ text: 'See https://example.com/checklist' })}
        labels={labels}
        disabled={false}
        onToggleDone={vi.fn()}
        onToggleDismissed={vi.fn()}
        onRemove={vi.fn()}
      />,
    )
    expect(screen.getByText('See https://example.com/checklist')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('calls onRemove when remove button clicked', async () => {
    const onRemove = vi.fn()
    render(
      <CustomItemRow
        item={makeItem()}
        labels={labels}
        disabled={false}
        onToggleDone={vi.fn()}
        onToggleDismissed={vi.fn()}
        onRemove={onRemove}
      />,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Remove' }))
    expect(onRemove).toHaveBeenCalledTimes(1)
  })
})
