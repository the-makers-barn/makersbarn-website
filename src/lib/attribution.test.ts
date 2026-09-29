import { afterEach, describe, expect, it } from 'vitest'

import { ATTRIBUTION_STORAGE_KEY, Channel } from '@/constants/analytics'

import { classifyChannel, extractCampaign, getAttribution, rememberAttribution } from './attribution'

const HOST = 'themakersbarn.nl'

function classify(referrer: string, query = ''): Channel {
  return classifyChannel({ referrer, currentHost: HOST, params: new URLSearchParams(query) })
}

describe('classifyChannel', () => {
  it.each([
    ['UTM paid Instagram', 'https://l.instagram.com/', 'utm_source=instagram&utm_medium=paid-social', Channel.INSTAGRAM_PAID],
    ['UTM paid with cpc medium and no referrer', '', 'utm_source=fb&utm_medium=cpc', Channel.INSTAGRAM_PAID],
    ['UTM paid is case-insensitive', '', 'utm_source=Instagram&utm_medium=Paid_Social', Channel.INSTAGRAM_PAID],
    ['ChatGPT utm without referrer', '', 'utm_source=chatgpt.com', Channel.AI_ASSISTANT],
    ['Perplexity referrer', 'https://www.perplexity.ai/search/x', '', Channel.AI_ASSISTANT],
    ['Gemini is AI, not Google', 'https://gemini.google.com/app', '', Channel.AI_ASSISTANT],
    ['AI beats a Meta utm without paid medium', 'https://chatgpt.com/', 'utm_source=instagram', Channel.AI_ASSISTANT],
    ['Meta utm source without paid medium', '', 'utm_source=instagram&utm_medium=social', Channel.META_ORGANIC],
    ['fbclid alone is organic', '', 'fbclid=abc123', Channel.META_ORGANIC],
    ['Instagram referrer', 'https://l.instagram.com/?u=x', '', Channel.META_ORGANIC],
    ['Facebook mobile referrer', 'https://m.facebook.com/', '', Channel.META_ORGANIC],
    ['Google search', 'https://www.google.nl/', '', Channel.GOOGLE],
    ['Google with path', 'https://www.google.com/search?q=barn', '', Channel.GOOGLE],
    ['no referrer, no utm', '', '', Channel.DIRECT],
    ['no referrer, only fbclid-less unrelated params', '', 'ref=newsletter', Channel.DIRECT],
    ['same-origin referrer is direct', 'https://themakersbarn.nl/en/about', '', Channel.DIRECT],
    ['same-origin with www prefix is direct', 'https://www.themakersbarn.nl/', '', Channel.DIRECT],
    ['unknown referrer', 'https://duckduckgo.com/', '', Channel.OTHER],
    ['unknown utm source', '', 'utm_source=newsletter', Channel.OTHER],
    ['unparseable referrer', 'not a url', '', Channel.OTHER],
  ])('%s', (_label, referrer, query, expected) => {
    expect(classify(referrer, query)).toBe(expected)
  })
})

describe('extractCampaign', () => {
  it('returns the campaign when present', () => {
    expect(extractCampaign(new URLSearchParams('utm_campaign=autumn'))).toBe('autumn')
  })
  it('returns undefined for missing or empty campaign', () => {
    expect(extractCampaign(new URLSearchParams(''))).toBeUndefined()
    expect(extractCampaign(new URLSearchParams('utm_campaign='))).toBeUndefined()
  })
})

describe('rememberAttribution and getAttribution', () => {
  afterEach(() => {
    window.sessionStorage.clear()
    window.history.replaceState(null, '', '/')
  })

  it('stores the landing attribution and never overwrites it', () => {
    window.history.replaceState(null, '', '/nl?utm_source=instagram&utm_medium=paid-social&utm_campaign=autumn')
    rememberAttribution()
    window.history.replaceState(null, '', '/nl/contact')
    rememberAttribution()
    expect(getAttribution()).toEqual({ attribution_channel: Channel.INSTAGRAM_PAID, attribution_campaign: 'autumn' })
  })

  it('classifies lazily when nothing was stored yet', () => {
    window.history.replaceState(null, '', '/en?fbclid=xyz')
    expect(getAttribution()).toEqual({ attribution_channel: Channel.META_ORGANIC })
    expect(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)).not.toBeNull()
  })

  it('omits the campaign key when there is no campaign', () => {
    rememberAttribution()
    expect(getAttribution()).not.toHaveProperty('attribution_campaign')
  })

  it('returns UNKNOWN when storage throws', () => {
    const original = window.sessionStorage
    Object.defineProperty(window, 'sessionStorage', {
      configurable: true,
      get: () => {
        throw new Error('blocked')
      },
    })
    try {
      expect(getAttribution()).toEqual({ attribution_channel: Channel.UNKNOWN })
    } finally {
      Object.defineProperty(window, 'sessionStorage', { configurable: true, value: original })
    }
  })

  it('ignores corrupt stored values', () => {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, '{not json')
    window.history.replaceState(null, '', '/en')
    expect(getAttribution()).toEqual({ attribution_channel: Channel.DIRECT })
  })
})
