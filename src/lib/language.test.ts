import { describe, expect, it } from 'vitest'

import { Language } from '@/types'

import { detectLanguageFromAcceptLanguage } from './language'

/**
 * This replaced detection from the hostname, which never worked: the whitelist
 * named domains that do not exist, and the .com domain redirects to the .nl one
 * anyway, so every visitor arrives on the same host.
 */
describe('detectLanguageFromAcceptLanguage', () => {
  it('picks a supported language from a plain header', () => {
    expect(detectLanguageFromAcceptLanguage('nl')).toBe(Language.NL)
    expect(detectLanguageFromAcceptLanguage('de')).toBe(Language.DE)
    expect(detectLanguageFromAcceptLanguage('en')).toBe(Language.EN)
  })

  it('matches on the primary subtag, so regional variants count', () => {
    expect(detectLanguageFromAcceptLanguage('nl-BE')).toBe(Language.NL)
    expect(detectLanguageFromAcceptLanguage('de-AT,de;q=0.9')).toBe(Language.DE)
    expect(detectLanguageFromAcceptLanguage('en-GB,en;q=0.9')).toBe(Language.EN)
  })

  it('honours quality ordering rather than header order', () => {
    expect(detectLanguageFromAcceptLanguage('en;q=0.3,nl;q=0.9')).toBe(Language.NL)
    expect(detectLanguageFromAcceptLanguage('nl;q=0.2,de;q=0.8')).toBe(Language.DE)
  })

  it('skips unsupported languages instead of giving up at the first one', () => {
    expect(detectLanguageFromAcceptLanguage('fr,nl;q=0.8')).toBe(Language.NL)
    expect(detectLanguageFromAcceptLanguage('ja,ko;q=0.9,de;q=0.7')).toBe(Language.DE)
  })

  it('ignores entries the client marked unacceptable', () => {
    expect(detectLanguageFromAcceptLanguage('nl;q=0,de')).toBe(Language.DE)
  })

  it('falls back to the default when no preference is expressed', () => {
    // A crawler sends no Accept-Language, and must land on the x-default locale.
    expect(detectLanguageFromAcceptLanguage(null)).toBe(Language.EN)
    expect(detectLanguageFromAcceptLanguage('')).toBe(Language.EN)
    expect(detectLanguageFromAcceptLanguage('*')).toBe(Language.EN)
    expect(detectLanguageFromAcceptLanguage('fr,es;q=0.8')).toBe(Language.EN)
  })

  it('falls back rather than throwing on a malformed header', () => {
    expect(detectLanguageFromAcceptLanguage(';;;')).toBe(Language.EN)
    expect(detectLanguageFromAcceptLanguage('nl;q=notanumber')).toBe(Language.EN)
    expect(detectLanguageFromAcceptLanguage(',,')).toBe(Language.EN)
  })

  it('is case-insensitive', () => {
    expect(detectLanguageFromAcceptLanguage('NL-nl')).toBe(Language.NL)
    expect(detectLanguageFromAcceptLanguage('DE')).toBe(Language.DE)
  })
})
