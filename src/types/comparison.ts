import { Language } from './common'

export type ComparisonLocalizedString = Record<Language, string>
export type ComparisonLocalizedStringList = Record<Language, readonly string[]>

export interface ComparisonRow {
  label: ComparisonLocalizedString
  commercial: ComparisonLocalizedString
  makersBarn: ComparisonLocalizedString
}

export interface ComparisonContent {
  meta: {
    title: ComparisonLocalizedString
    description: ComparisonLocalizedString
  }
  hero: {
    eyebrow: ComparisonLocalizedString
    title: ComparisonLocalizedString
    intro: ComparisonLocalizedString
  }
  twoModels: {
    h2: ComparisonLocalizedString
    body: ComparisonLocalizedStringList
  }
  table: {
    h2: ComparisonLocalizedString
    columnLabelCommercial: ComparisonLocalizedString
    columnLabelMakersBarn: ComparisonLocalizedString
    rows: readonly ComparisonRow[]
  }
  whatYouTrade: {
    h2: ComparisonLocalizedString
    body: ComparisonLocalizedStringList
  }
  whatYouGain: {
    h2: ComparisonLocalizedString
    body: ComparisonLocalizedStringList
  }
  thirdOption: {
    h2: ComparisonLocalizedString
    body: ComparisonLocalizedStringList
  }
  finalCta: {
    title: ComparisonLocalizedString
    body: ComparisonLocalizedString
  }
}
