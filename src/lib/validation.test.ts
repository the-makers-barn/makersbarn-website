import { describe, expect, it } from 'vitest'

import { ContactIntent } from '@/types'

import { validateContactForm } from './validation'

describe('validateContactForm — source field', () => {
  const base = { name: 'Ada', email: 'ada@example.com', phone: '', message: 'hello world' }

  it('accepts a valid ContactIntent as source', () => {
    const result = validateContactForm({ ...base, source: ContactIntent.LOOKING_FOR_CHEF })
    expect(result.success).toBe(true)
    expect(result.data?.source).toBe(ContactIntent.LOOKING_FOR_CHEF)
  })

  it('accepts payloads without a source (back-compat)', () => {
    const result = validateContactForm(base)
    expect(result.success).toBe(true)
    expect(result.data?.source).toBeUndefined()
  })

  it('rejects an invalid source value', () => {
    const result = validateContactForm({ ...base, source: 'not-an-intent' })
    expect(result.success).toBe(false)
  })
})
