import { describe, expect, it } from 'vitest'

import { CalendarPhaseId, MilestoneStatus, TimelinePreset } from '@/constants/tools'
import { Language } from '@/types/common'
import type { CalendarPhase, CustomMilestone, MilestoneNonDefaultStatus } from '@/types/tools'

import { composeEmailHtml } from './compose'

const localized = (s: string): Record<Language, string> => ({ en: s, nl: s, de: s, es: s, fr: s })

const phases: CalendarPhase[] = [
  {
    id: CalendarPhaseId.FOUNDATION,
    range: localized('9-12 months before'),
    rangeStartMonth: 12, rangeEndMonth: 9,
    eyebrow: localized('Phase 1 · Foundation'),
    title: localized('Vision & venue'),
    milestones: [{ id: 'p1-vision', text: localized('Define vision') }],
  },
]

const customItems: CustomMilestone[] = [
  { id: 'c1', phaseId: CalendarPhaseId.FOUNDATION, text: 'Reach out to bookkeeper', status: MilestoneStatus.PENDING },
]

const itemStates: Record<string, MilestoneNonDefaultStatus> = {
  'p1-vision': MilestoneStatus.DONE,
}

describe('composeEmailHtml', () => {
  it('produces HTML containing all phases, milestones, and custom items', () => {
    const html = composeEmailHtml({
      phases, itemStates, customItems, locale: Language.EN,
      preset: TimelinePreset.TWELVE_MONTHS,
      backToPlanUrl: 'https://example.com/12-month',
      copy: {
        greeting: 'Your 12-month plan',
        intro: 'Here is your saved plan.',
        ctaLine: 'Hosting at MakersBarn?',
        ctaLabel: 'Open your saved plan',
        signoff: '— The MakersBarn team',
      },
    })
    expect(html).toContain('Phase 1 · Foundation')
    expect(html).toContain('Define vision')
    expect(html).toContain('Reach out to bookkeeper')
    expect(html).toContain('https://example.com/12-month')
  })

  it('applies escapeHtml at every interpolation', () => {
    const html = composeEmailHtml({
      phases, itemStates, customItems, locale: Language.EN,
      preset: TimelinePreset.TWELVE_MONTHS,
      backToPlanUrl: 'https://example.com/12-month',
      copy: {
        greeting: '<script>alert(1)</script>',
        intro: '<b>bold</b>',
        ctaLine: 'safe',
        ctaLabel: 'open',
        signoff: 'team',
      },
    })
    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
  })
})
