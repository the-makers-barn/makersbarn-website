import { describe, expect, it } from 'vitest'

import { ContactIntent } from './contact'

describe('ContactIntent', () => {
  it('exposes the four supported intents with stable string values', () => {
    expect(ContactIntent.QUESTION).toBe('question')
    expect(ContactIntent.BOOKING).toBe('booking')
    expect(ContactIntent.LOOKING_FOR_CHEF).toBe('looking-for-chef')
    expect(ContactIntent.CHEF_JOIN).toBe('chef-join')
  })

  it('has exactly four members', () => {
    expect(Object.values(ContactIntent)).toHaveLength(4)
  })
})
