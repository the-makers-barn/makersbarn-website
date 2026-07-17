import { Language } from './common'

export interface TermsIdentityEntry {
  label: string
  value: string
}

export interface TermsDefinition {
  term: string
  description: string
}

export interface TermsClause {
  text: string
  items?: readonly string[]
}

export interface TermsTable {
  columns: readonly [string, string]
  rows: ReadonlyArray<readonly [string, string]>
}

export interface TermsCallout {
  title: string
  body: string
}

export interface TermsArticle {
  title: string
  intro?: string
  definitions?: readonly TermsDefinition[]
  clauses?: readonly TermsClause[]
  table?: TermsTable
  callout?: TermsCallout
}

export interface TermsVariant {
  documentTitle: string
  subtitle: string
  identity: readonly TermsIdentityEntry[]
  introTitle: string
  introParagraphs: readonly string[]
  articles: readonly TermsArticle[]
}

export type TermsLocalizedString = Record<Language, string>

export interface TermsMeta {
  title: TermsLocalizedString
  description: TermsLocalizedString
}

export interface TermsDisclaimer {
  title: string
  body: string
}
