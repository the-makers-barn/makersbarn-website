import { describe, expect, it } from 'vitest'

import { CalendarPhaseId, MilestoneStatus } from '@/constants/tools'
import type { CalendarPhase } from '@/types/tools'
import { Language } from '@/types/common'

import { renderPhaseSection } from './renderPhaseSection'

const localized = (s: string): Record<Language, string> => ({ en: s, nl: s, de: s })

const samplePhase: CalendarPhase = {
  id: CalendarPhaseId.FOUNDATION,
  range: localized('9-12 months before'),
  rangeStartMonth: 12,
  rangeEndMonth: 9,
  eyebrow: localized('Phase 1 · Foundation'),
  title: localized('Set the vision'),
  milestones: [
    { id: 'p1-vision', text: localized('Define vision') },
    { id: 'p1-avatar', text: localized('Identify ideal guest') },
  ],
}

describe('renderPhaseSection', () => {
  it('renders phase heading, range, and all milestones', () => {
    const html = renderPhaseSection({
      phase: samplePhase,
      itemStates: {},
      customItemsForPhase: [],
      locale: Language.EN,
    })
    expect(html).toContain('Phase 1 · Foundation')
    expect(html).toContain('9-12 months before')
    expect(html).toContain('Define vision')
    expect(html).toContain('Identify ideal guest')
  })

  it('marks DONE milestones with checkmark', () => {
    const html = renderPhaseSection({
      phase: samplePhase,
      itemStates: { 'p1-vision': MilestoneStatus.DONE },
      customItemsForPhase: [],
      locale: Language.EN,
    })
    expect(html).toContain('✓ Define vision')
  })

  it('appends custom items after canonical milestones', () => {
    const html = renderPhaseSection({
      phase: samplePhase,
      itemStates: {},
      customItemsForPhase: [
        { id: 'c1', phaseId: CalendarPhaseId.FOUNDATION, text: 'My custom item', status: MilestoneStatus.PENDING },
      ],
      locale: Language.EN,
    })
    const visionIndex = html.indexOf('Define vision')
    const customIndex = html.indexOf('My custom item')
    expect(visionIndex).toBeGreaterThan(-1)
    expect(customIndex).toBeGreaterThan(visionIndex)
  })

  it('escapes HTML in localized phase content', () => {
    const phaseWithHtml: CalendarPhase = {
      ...samplePhase,
      title: localized('<script>alert(1)</script>'),
    }
    const html = renderPhaseSection({ phase: phaseWithHtml, itemStates: {}, customItemsForPhase: [], locale: Language.EN })
    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
  })
})
