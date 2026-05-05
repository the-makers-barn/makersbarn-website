import { describe, expect, it } from 'vitest'

import { AgendaBlockType, AgendaLength, AgendaNiche } from '@/constants/tools'
import type { AgendaResolvedDay } from '@/types/tools'

import { renderAgendaEmailHtml } from './renderAgendaEmail'

function day(blocks: AgendaResolvedDay['blocks']): AgendaResolvedDay {
  return { dayIndex: 1, title: 'Arrival day', blocks }
}

const baseInput = {
  niche: AgendaNiche.GENERIC,
  length: AgendaLength.THREE_DAY,
  greeting: 'Your 3-day plan',
  intro: 'Here is the agenda.',
  ctaLine: 'Open it online:',
  ctaUrl: 'https://www.themakersbarn.com/en/tools/retreat-agenda-builder',
  ctaLabel: 'Open',
  signoff: '— MakersBarn',
}

describe('renderAgendaEmailHtml', () => {
  it('renders blocks with formatted time and duration', () => {
    const html = renderAgendaEmailHtml({
      ...baseInput,
      days: [
        day([
          {
            id: 'b1',
            dayIndex: 1,
            type: AgendaBlockType.WORKSHOP,
            startMinute: 9 * 60 + 30,
            durationMinute: 90,
            title: 'Morning workshop',
            notes: 'Bring a journal',
            isCustom: false,
          },
        ]),
      ],
    })
    expect(html).toContain('09:30')
    expect(html).toContain('Morning workshop')
    expect(html).toContain('Bring a journal')
    expect(html).toContain('1h 30m')
  })

  it('renders the empty-day placeholder when a day has no blocks', () => {
    const html = renderAgendaEmailHtml({ ...baseInput, days: [day([])] })
    expect(html).toContain('— No blocks scheduled —')
  })

  it('escapes HTML in user-supplied block titles and notes', () => {
    const html = renderAgendaEmailHtml({
      ...baseInput,
      days: [
        day([
          {
            id: 'b1',
            dayIndex: 1,
            type: AgendaBlockType.WORKSHOP,
            startMinute: 600,
            durationMinute: 60,
            title: '<script>alert(1)</script>',
            notes: '"><img onerror=x>',
            isCustom: true,
          },
        ]),
      ],
    })
    expect(html).not.toContain('<script>alert(1)</script>')
    expect(html).not.toContain('<img onerror=')
    expect(html).toContain('&lt;script&gt;')
  })

  it('escapes the CTA URL', () => {
    const html = renderAgendaEmailHtml({
      ...baseInput,
      ctaUrl: 'https://evil.com/?x="><script>',
      days: [day([])],
    })
    expect(html).not.toContain('"><script>')
    expect(html).toContain('&quot;&gt;&lt;script&gt;')
  })
})
