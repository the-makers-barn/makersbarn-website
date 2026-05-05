import { describe, expect, it } from 'vitest'

import { ContactIntent } from '@/types'

import { formatContactFormMessage } from './slack'

describe('formatContactFormMessage', () => {
  const base = { name: 'Ada', email: 'ada@example.com', phone: undefined, message: 'hello' } as const

  it('includes the chef-join source label when source is CHEF_JOIN', () => {
    const out = formatContactFormMessage({ ...base, source: ContactIntent.CHEF_JOIN })
    expect(out).toContain('Chef directory — apply to join')
  })

  it('includes the looking-for-chef source label when source is LOOKING_FOR_CHEF', () => {
    const out = formatContactFormMessage({ ...base, source: ContactIntent.LOOKING_FOR_CHEF })
    expect(out).toContain('Chef directory — looking for a chef')
  })

  it('omits any source line when source is undefined', () => {
    const out = formatContactFormMessage(base)
    expect(out).not.toContain('Chef directory')
  })
})
