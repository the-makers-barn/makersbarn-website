import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { CalendarPhaseId, MilestoneStatus } from '@/constants/tools'
import { en as enDictionary } from '@/i18n/dictionaries/en'
import { Language } from '@/types/common'
import type { CalendarPhase, CalendarState } from '@/types/tools'

import { PhaseCard } from './PhaseCard'

const samplePhase: CalendarPhase = {
  id: CalendarPhaseId.FOUNDATION,
  range: { en: 'Months 12–10', nl: 'Maanden 12–10', de: '', es: '', fr: '' },
  rangeStartMonth: 12,
  rangeEndMonth: 10,
  eyebrow: { en: 'Phase 1', nl: 'Fase 1', de: '', es: '', fr: '' },
  title: { en: 'Foundation', nl: 'Fundament', de: '', es: '', fr: '' },
  milestones: [
    {
      id: 'p1-vision',
      text: { en: 'Define your retreat vision', nl: 'Bepaal je visie', de: '', es: '', fr: '' },
    },
  ],
}

const emptyState: CalendarState = {
  schemaVersion: 1,
  itemStates: {},
  customItems: [],
}

describe('PhaseCard', () => {
  it('renders eyebrow, title, range, and milestones', () => {
    render(
      <PhaseCard
        phase={samplePhase}
        state={emptyState}
        customItemsForPhase={[]}
        locale={Language.EN}
        t={enDictionary}
        disabled={false}
        dispatch={vi.fn()}
      />,
    )
    expect(screen.getByText('Phase 1')).toBeInTheDocument()
    expect(screen.getByText('Foundation')).toBeInTheDocument()
    expect(screen.getByText('Months 12–10')).toBeInTheDocument()
    expect(screen.getByText('Define your retreat vision')).toBeInTheDocument()
  })

  it('renders custom items in plain text', () => {
    const stateWithCustom: CalendarState = {
      ...emptyState,
      customItems: [
        {
          id: 'cm-1',
          phaseId: CalendarPhaseId.FOUNDATION,
          text: 'Buy notebook',
          status: MilestoneStatus.PENDING,
        },
      ],
    }
    render(
      <PhaseCard
        phase={samplePhase}
        state={stateWithCustom}
        customItemsForPhase={stateWithCustom.customItems}
        locale={Language.EN}
        t={enDictionary}
        disabled={false}
        dispatch={vi.fn()}
      />,
    )
    expect(screen.getByText('Buy notebook')).toBeInTheDocument()
  })
})
