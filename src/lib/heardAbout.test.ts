import { describe, expect, it } from 'vitest'

import { HeardAboutSource } from '@/types'

import { formatHeardAbout } from './heardAbout'

describe('formatHeardAbout', () => {
  it('adds the detail for answers that ask for one', () => {
    expect(formatHeardAbout({ heardAbout: HeardAboutSource.FRIEND, heardAboutDetail: 'Anna' })).toBe(
      'Friend or colleague: Anna'
    )
  })

  it('ignores a detail sent with an answer that never asks for one', () => {
    expect(formatHeardAbout({ heardAbout: HeardAboutSource.GOOGLE, heardAboutDetail: 'x' })).toBe('Google search')
  })

  it('returns undefined when the question was skipped', () => {
    expect(formatHeardAbout({ heardAboutDetail: 'Anna' })).toBeUndefined()
  })
})
