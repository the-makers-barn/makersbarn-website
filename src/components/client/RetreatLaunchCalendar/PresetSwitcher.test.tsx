import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TimelinePreset } from '@/constants/tools'
import { en as enDictionary } from '@/i18n/dictionaries/en'
import { Language } from '@/types/common'

import { PresetSwitcher } from './PresetSwitcher'

describe('PresetSwitcher', () => {
  it('renders all four preset tabs as a tablist', () => {
    render(
      <PresetSwitcher
        currentPreset={TimelinePreset.NINE_MONTHS}
        locale={Language.EN}
        t={enDictionary}
      />,
    )
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(4)
  })

  it('marks the current preset with aria-current="page"', () => {
    render(
      <PresetSwitcher
        currentPreset={TimelinePreset.SIX_MONTHS}
        locale={Language.EN}
        t={enDictionary}
      />,
    )
    const sixMonthTab = screen.getByRole('tab', { name: /6 months/i })
    expect(sixMonthTab).toHaveAttribute('aria-current', 'page')
    const twelveMonthTab = screen.getByRole('tab', { name: /12 months/i })
    expect(twelveMonthTab).not.toHaveAttribute('aria-current')
  })
})
