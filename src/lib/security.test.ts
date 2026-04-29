import { describe, expect, it } from 'vitest'

import { sanitizePlainText } from './security'

const ZERO_WIDTH_INPUT = 'hi​there‌‍﻿'
const BIDI_INPUT = 'a‮b⁦c'

describe('sanitizePlainText', () => {
  it('strips angle brackets', () => {
    expect(sanitizePlainText('<script>alert(1)</script>', 100)).toBe('scriptalert(1)/script')
  })

  it('strips ASCII control characters including CR/LF/TAB', () => {
    expect(sanitizePlainText('hello\r\nworld\tend\x00', 100)).toBe('helloworldend')
  })

  it('strips zero-width characters', () => {
    expect(sanitizePlainText(ZERO_WIDTH_INPUT, 100)).toBe('hithere')
  })

  it('strips bidirectional override characters', () => {
    expect(sanitizePlainText(BIDI_INPUT, 100)).toBe('abc')
  })

  it('preserves URL substrings', () => {
    expect(sanitizePlainText('Sign at https://example.com/path?q=1', 100)).toBe(
      'Sign at https://example.com/path?q=1',
    )
  })

  it('trims leading and trailing whitespace', () => {
    expect(sanitizePlainText('  hello  ', 100)).toBe('hello')
  })

  it('caps length at maxLength', () => {
    expect(sanitizePlainText('aaaaaaaaaa', 4)).toBe('aaaa')
  })

  it('returns empty string for input that becomes empty after stripping', () => {
    expect(sanitizePlainText('<><>', 100)).toBe('')
  })
})
