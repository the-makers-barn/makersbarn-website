import { describe, expect, it } from 'vitest'

import { isAuthorized } from './auth'

describe('isAuthorized', () => {
  it('accepts the exact bearer secret', () => {
    expect(isAuthorized('Bearer s3cret', 's3cret')).toBe(true)
  })
  it.each([
    ['missing header', null],
    ['wrong scheme', 'Basic s3cret'],
    ['wrong secret of the same length', 'Bearer s3cREt'],
    ['different length', 'Bearer s3cret-longer'],
    ['empty bearer', 'Bearer '],
  ])('rejects %s', (_label, header) => {
    expect(isAuthorized(header, 's3cret')).toBe(false)
  })
  it('never accepts an empty configured secret', () => {
    expect(isAuthorized('Bearer ', '')).toBe(false)
  })
})
