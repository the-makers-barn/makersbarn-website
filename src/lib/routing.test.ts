import { describe, expect, it } from 'vitest'

import { Route } from '@/types/navigation'

import {
  hasStaticAssetExtension,
  isKnownRoute,
  isNonLocalizedRoute,
} from './routing'

/**
 * These predicates decide whether a path reaches a page or a 404.
 *
 * The site repeatedly shipped unanchored prefix tests — on the middleware
 * matcher, on "path contains a dot", and on the /go base — and each one let
 * probes through to the [locale] segment, where an unknown locale rendered the
 * English page with a 200. Google filed the result as "Duplicate without
 * user-selected canonical". The near-miss cases below are the regression guard.
 */
describe('isKnownRoute', () => {
  it('accepts every route in the Route enum', () => {
    for (const route of Object.values(Route)) {
      expect(isKnownRoute(route)).toBe(true)
    }
  })

  it('accepts chef detail paths', () => {
    expect(isKnownRoute('/chefs/eveline-cooks')).toBe(true)
  })

  it('rejects paths that merely start with a real route', () => {
    expect(isKnownRoute('/chefsfoo')).toBe(false)
    expect(isKnownRoute('/aboutus')).toBe(false)
    expect(isKnownRoute('/toolsy')).toBe(false)
  })

  it('rejects unknown paths', () => {
    expect(isKnownRoute('/foo')).toBe(false)
    expect(isKnownRoute('/publications')).toBe(false)
    expect(isKnownRoute('')).toBe(false)
  })
})

describe('hasStaticAssetExtension', () => {
  it('accepts the extensions served from /public', () => {
    expect(hasStaticAssetExtension('/favicon/favicon.ico')).toBe(true)
    expect(hasStaticAssetExtension('/images/two-beds.jpg')).toBe(true)
    expect(hasStaticAssetExtension('/tmb-logo.webp')).toBe(true)
    expect(hasStaticAssetExtension('/favicon/site.webmanifest')).toBe(true)
    expect(hasStaticAssetExtension('/sitemap.xml')).toBe(true)
  })

  it('ignores extension case', () => {
    expect(hasStaticAssetExtension('/images/PHOTO.JPG')).toBe(true)
  })

  it('rejects a dot that is not a served extension', () => {
    expect(hasStaticAssetExtension('/index.php')).toBe(false)
    expect(hasStaticAssetExtension('/foo.bar')).toBe(false)
    expect(hasStaticAssetExtension('/config.json')).toBe(false)
    expect(hasStaticAssetExtension('/sitemap.xml.gz')).toBe(false)
    expect(hasStaticAssetExtension('/.env')).toBe(false)
  })

  it('rejects paths with no extension', () => {
    expect(hasStaticAssetExtension('/en/about')).toBe(false)
    expect(hasStaticAssetExtension('/foo.')).toBe(false)
  })
})

describe('isNonLocalizedRoute', () => {
  it('accepts paths beneath the QR short-link base', () => {
    expect(isNonLocalizedRoute('/go/instagram')).toBe(true)
    expect(isNonLocalizedRoute('/go/links')).toBe(true)
  })

  it('rejects the base itself, which has no route', () => {
    expect(isNonLocalizedRoute('/go')).toBe(false)
  })

  it('rejects paths that merely start with the base', () => {
    expect(isNonLocalizedRoute('/golf')).toBe(false)
    expect(isNonLocalizedRoute('/google-thing')).toBe(false)
  })
})
