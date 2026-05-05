import { describe, expect, it } from 'vitest'

import { AgendaLength, AgendaNiche } from '@/constants/tools'
import type { ValidatedEmailAgendaPlanInput } from '@/data/tools'

import { buildAgendaSlackMessage } from './buildSlackMessage'

const RAW_EMAIL = 'host@example.com'

const validData: ValidatedEmailAgendaPlanInput = {
  email: RAW_EMAIL,
  niche: AgendaNiche.YOGA,
  length: AgendaLength.FIVE_DAY,
  hiddenBlockIds: ['yoga-3d-d1-arrival-window', 'yoga-3d-d2-restorative'],
  blockOverrides: [{ blockId: 'yoga-3d-d2-morning-vinyasa', durationMinute: 75 }],
  customBlocks: [],
  contactConsent: true,
}

describe('buildAgendaSlackMessage', () => {
  it('includes niche, length, and counts', () => {
    const msg = buildAgendaSlackMessage(validData)
    expect(msg).toContain('yoga')
    expect(msg).toContain('5-day')
    expect(msg).toContain('Hidden defaults:* 2')
    expect(msg).toContain('Edited defaults:* 1')
    expect(msg).toContain('Custom blocks:* 0')
    expect(msg).toContain('Contact consent:* yes')
  })

  it('does not leak the raw email address', () => {
    const msg = buildAgendaSlackMessage(validData)
    expect(msg).not.toContain(RAW_EMAIL)
  })
})
