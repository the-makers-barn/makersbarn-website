import type { Metadata } from 'next'

import { StructuredData } from '@/components/server'
import { TERMS_META, getTermsVariant, getTermsDisclaimer } from '@/data/terms'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'
import { generatePageBreadcrumbs } from '@/lib/structuredData'
import { Route } from '@/types'
import type { TermsArticle } from '@/types'

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

function ArticleSection({ article }: { article: TermsArticle }) {
  return (
    <section className={styles.article}>
      <h2 className={styles.articleTitle}>{article.title}</h2>
      {article.intro && <p className={styles.articleIntro}>{article.intro}</p>}
      {article.definitions && (
        <dl className={styles.definitions}>
          {article.definitions.map((definition) => (
            <div key={definition.term} className={styles.definition}>
              <dt className={styles.definitionTerm}>{definition.term}</dt>
              <dd className={styles.definitionDescription}>
                {definition.description}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {article.clauses && (
        <ol className={styles.clauses}>
          {article.clauses.map((clause) => (
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
      )}
      {article.table && (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {article.table.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {article.table.rows.map(([timing, consequence]) => (
                <tr key={timing}>
                  <td>{timing}</td>
                  <td>{consequence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {article.callout && (
        <aside className={styles.callout}>
          <h3 className={styles.calloutTitle}>{article.callout.title}</h3>
          <p className={styles.calloutBody}>{article.callout.body}</p>
        </aside>
      )}
    </section>
  )
}

export default async function TermsAndConditionsPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const terms = getTermsVariant(validLocale)
  const disclaimer = getTermsDisclaimer(validLocale)
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
        {disclaimer && (
          <aside className={styles.disclaimer}>
            <h2 className={styles.disclaimerTitle}>{disclaimer.title}</h2>
            <p className={styles.disclaimerBody}>{disclaimer.body}</p>
          </aside>
        )}
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
