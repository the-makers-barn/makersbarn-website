import { describe, expect, it } from 'vitest'

import { MEDITATION_RETREATS_SILO } from '@/data/silos/meditation-retreats'
import { Language } from '@/types'

import { SHANTI_DEVA_RETREAT_EVENT_ID, generateEventVenueSchema } from './structuredData'

describe('generateEventVenueSchema', () => {
  it('references linked events by @id only, so Google does not read them as Events', () => {
    const schema = generateEventVenueSchema(MEDITATION_RETREATS_SILO, Language.EN, {
      linkedEventIds: [SHANTI_DEVA_RETREAT_EVENT_ID],
    })

    expect(schema.subjectOf).toEqual([{ '@id': SHANTI_DEVA_RETREAT_EVENT_ID }])
  })

  it('omits subjectOf when no events are linked', () => {
    const schema = generateEventVenueSchema(MEDITATION_RETREATS_SILO, Language.EN)

    expect(schema).not.toHaveProperty('subjectOf')
  })
})
