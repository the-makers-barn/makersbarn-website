import type { Metadata } from 'next'

import { StructuredData } from '@/components/server'
import { TERMS_META, getTermsVariant } from '@/data/terms'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'
import { generatePageBreadcrumbs } from '@/lib/structuredData'
import {
  Route,
  type TermsArticle,
  type TermsCallout,
  type TermsClause,
  type TermsDefinition,
  type TermsTable,
} from '@/types'

import styles from './page.module.css'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  return generatePageMetadata({
    title: TERMS_META.title[validLocale],
    description: TERMS_META.description[validLocale],
    path: Route.TERMS_AND_CONDITIONS,
    locale: validLocale,
  })
}

function ArticleDefinitions({ definitions }: { definitions: readonly TermsDefinition[] }) {
  return (
    <dl className={styles.definitions}>
      {definitions.map((definition) => (
        <div key={definition.term} className={styles.definition}>
          <dt className={styles.definitionTerm}>{definition.term}</dt>
          <dd className={styles.definitionDescription}>
            {definition.description}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function ArticleClauses({ clauses }: { clauses: readonly TermsClause[] }) {
  return (
    <ol className={styles.clauses}>
      {clauses.map((clause) => (
        <li key={clause.text} className={styles.clause}>
          {clause.text}
          {clause.items && (
            <ul className={styles.clauseItems}>
              {clause.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}

function ArticleTable({ table }: { table: TermsTable }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map(([timing, consequence]) => (
            <tr key={timing}>
              <td>{timing}</td>
              <td>{consequence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ArticleCalloutAside({ callout }: { callout: TermsCallout }) {
  return (
    <aside className={styles.callout}>
      <h3 className={styles.calloutTitle}>{callout.title}</h3>
      <p className={styles.calloutBody}>{callout.body}</p>
    </aside>
  )
}

function ArticleSection({ article }: { article: TermsArticle }) {
  return (
    <section className={styles.article}>
      <h2 className={styles.articleTitle}>{article.title}</h2>
      {article.intro && <p className={styles.articleIntro}>{article.intro}</p>}
      {article.definitions && (
        <ArticleDefinitions definitions={article.definitions} />
      )}
      {article.clauses && <ArticleClauses clauses={article.clauses} />}
      {article.table && <ArticleTable table={article.table} />}
      {article.callout && <ArticleCalloutAside callout={article.callout} />}
    </section>
  )
}

export default async function TermsAndConditionsPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const terms = getTermsVariant(validLocale)
  const breadcrumb = generatePageBreadcrumbs({
    name: TERMS_META.title[validLocale],
    path: getLocalizedPath(Route.TERMS_AND_CONDITIONS, validLocale),
  })

  return (
    <main className={styles.page} lang={terms.lang}>
      <StructuredData data={[breadcrumb]} />
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{terms.documentTitle}</h1>
          <p className={styles.subtitle}>{terms.subtitle}</p>
        </div>
      </header>
      <div className={styles.body}>
        <dl className={styles.identity}>
          {terms.identity.map((entry) => (
            <div key={entry.label} className={styles.identityRow}>
              <dt className={styles.identityLabel}>{entry.label}</dt>
              <dd className={styles.identityValue}>{entry.value}</dd>
            </div>
          ))}
        </dl>
        <section className={styles.article}>
          <h2 className={styles.articleTitle}>{terms.introTitle}</h2>
          {terms.introParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>
        {terms.articles.map((article) => (
          <ArticleSection key={article.title} article={article} />
        ))}
      </div>
    </main>
  )
}
