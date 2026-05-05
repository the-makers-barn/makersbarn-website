import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { en as enDictionary } from '@/i18n/dictionaries/en'
import type { AgendaWarning } from '@/lib/tools/agenda/validation'

import { WarningsPanel } from './WarningsPanel'

describe('WarningsPanel', () => {
  it('renders nothing when there are no warnings', () => {
    const { container } = render(<WarningsPanel warnings={[]} t={enDictionary} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders one item per warning with day index interpolated', () => {
    const warnings: AgendaWarning[] = [
      { code: 'tooMuchStructured', dayIndex: 2, detail: { minutes: 360 } },
      { code: 'noFreeTime', dayIndex: 3, detail: {} },
    ]
    render(<WarningsPanel warnings={warnings} t={enDictionary} />)
    expect(screen.getByText(/Day 2:.*structured content/)).toBeInTheDocument()
    expect(screen.getByText(/Day 3.*no free or rest block/)).toBeInTheDocument()
  })

  it('formats minutes as durations in the message', () => {
    const warnings: AgendaWarning[] = [
      {
        code: 'overlongBlock',
        dayIndex: 1,
        detail: { minutes: 120, title: 'Marathon workshop' },
      },
    ]
    render(<WarningsPanel warnings={warnings} t={enDictionary} />)
    expect(screen.getByText(/Marathon workshop/)).toBeInTheDocument()
    expect(screen.getByText(/2h/)).toBeInTheDocument()
  })

  it('formats minutes as clock times for early-start warning', () => {
    const warnings: AgendaWarning[] = [
      { code: 'earlyStart', dayIndex: 2, detail: { minutes: 6 * 60 } },
    ]
    render(<WarningsPanel warnings={warnings} t={enDictionary} />)
    expect(screen.getByText(/06:00/)).toBeInTheDocument()
  })
})
