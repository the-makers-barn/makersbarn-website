import { Fragment } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

import { StructuredData } from '@/components/server'
import { SITE_CONFIG } from '@/constants/site'
import { ToolKind } from '@/constants/tools'
import { TOOLS_HUB_ITEMS } from '@/data/tools'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import {
  generateBreadcrumbListSchema,
  generateCollectionPageSchema,
} from '@/lib/structuredData'
import { Language, Route } from '@/types'
import type { ToolsHubTranslations } from '@/i18n/types'
import type { ToolsHubItem } from '@/types/tools'

import styles from './page.module.css'

interface PageProps {
  params: Promise<{ locale: string }>
}

const CATEGORY_ORDER: readonly ToolKind[] = [
  ToolKind.AUDIT,
  ToolKind.CALCULATOR,
  ToolKind.PLANNER,
  ToolKind.AGENDA,
] as const

const CATEGORY_KEY_BY_KIND: Record<ToolKind, 'audit' | 'calculator' | 'planner' | 'agenda'> = {
  [ToolKind.AUDIT]: 'audit',
  [ToolKind.CALCULATOR]: 'calculator',
  [ToolKind.PLANNER]: 'planner',
  [ToolKind.AGENDA]: 'agenda',
}

const CATEGORY_ANCHOR: Record<ToolKind, string> = {
  [ToolKind.AUDIT]: 'audits',
  [ToolKind.CALCULATOR]: 'calculators',
  [ToolKind.PLANNER]: 'calendars',
  [ToolKind.AGENDA]: 'agendas',
}

const CHEFS_ANCHOR = 'chefs'

function ChefIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 14h12v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
      <path d="M6 14a3.5 3.5 0 0 1-1.4-6.7A4 4 0 0 1 12 4.5a4 4 0 0 1 7.4 2.8A3.5 3.5 0 0 1 18 14" />
      <path d="M9 17h.01M12 17h.01M15 17h.01" />
    </svg>
  )
}

function CategoryIcon({ kind, size = 28 }: { kind: ToolKind; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (kind) {
    case ToolKind.AUDIT:
      return (
        <svg {...common}>
          <path d="M9 12.5l2 2 4-4.5" />
          <path d="M12 3l8 4v5c0 4.5-3.4 8.5-8 9-4.6-.5-8-4.5-8-9V7l8-4z" />
        </svg>
      )
    case ToolKind.CALCULATOR:
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
        </svg>
      )
    case ToolKind.PLANNER:
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4M8 14h2M14 14h2M8 18h2" />
        </svg>
      )
    case ToolKind.AGENDA:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
  }
}

function ChefsSection({
  chefs,
  chefsHref,
}: {
  chefs: ToolsHubTranslations['chefsSection']
  chefsHref: string
}) {
  return (
    <>
      <div className={styles.divider} aria-hidden>
        <span />
      </div>
      <section
        id={CHEFS_ANCHOR}
        className={`${styles.category} ${styles.categoryHighlighted}`}
        aria-labelledby="chefs-heading"
      >
        <header className={styles.categoryHeader}>
          <span className={styles.categoryIcon} aria-hidden>
            <ChefIcon size={64} />
          </span>
          <div className={styles.categoryHeaderText}>
            <p className={styles.categoryLabel}>{chefs.label}</p>
            <h2 id="chefs-heading" className={styles.categoryTitle}>
              {chefs.title}
            </h2>
            <p className={styles.categoryDescription}>{chefs.description}</p>
          </div>
        </header>

        <Link href={chefsHref} className={styles.primaryCard}>
          <span className={styles.primaryCardTag}>{chefs.cardTag}</span>
          <span className={styles.primaryCardTitle}>{chefs.cardTitle}</span>
          <span className={styles.primaryCardDescription}>{chefs.cardBody}</span>
          <span className={styles.primaryCardCta}>
            {chefs.cardCta}
            <span aria-hidden>→</span>
          </span>
        </Link>
      </section>
    </>
  )
}

function CategorySection({
  kind,
  category,
  items,
  primaryCardCta,
  locale,
}: {
  kind: ToolKind
  category: ToolsHubTranslations['categories'][keyof ToolsHubTranslations['categories']]
  items: ToolsHubItem[]
  primaryCardCta: string
  locale: Language
}) {
  if (items.length === 0) {
    return null
  }
  const [primary, ...variants] = items
  const primaryHref = getLocalizedPath(primary.route, locale)
  const anchor = CATEGORY_ANCHOR[kind]
  return (
    <Fragment>
      <div className={styles.divider} aria-hidden>
        <span />
      </div>
      <section
        id={anchor}
        className={styles.category}
        aria-labelledby={`${anchor}-heading`}
      >
        <header className={styles.categoryHeader}>
          <span className={styles.categoryIcon} aria-hidden>
            <CategoryIcon kind={kind} size={64} />
          </span>
          <div className={styles.categoryHeaderText}>
            <p className={styles.categoryLabel}>{category.label}</p>
            <h2 id={`${anchor}-heading`} className={styles.categoryTitle}>
              {category.title}
            </h2>
            <p className={styles.categoryDescription}>{category.description}</p>
          </div>
        </header>

        <Link href={primaryHref} className={styles.primaryCard}>
          <span className={styles.primaryCardTag}>{primary.tag[locale]}</span>
          <span className={styles.primaryCardTitle}>{primary.title[locale]}</span>
          <span className={styles.primaryCardDescription}>{primary.intro[locale]}</span>
          <span className={styles.primaryCardCta}>
            {primaryCardCta}
            <span aria-hidden>→</span>
          </span>
        </Link>

        {variants.length > 0 && (
          <div className={styles.variantsBlock}>
            <p className={styles.variantsLabel}>{category.variantsLabel}</p>
            <ul className={styles.variantsList}>
              {variants.map((item) => {
                const href = getLocalizedPath(item.route, locale)
                return (
                  <li key={item.route}>
                    <Link href={href} className={styles.variantPill}>
                      {item.tag[locale]}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </section>
    </Fragment>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return generatePageMetadata({
    title: t.tools.hub.metaTitle,
    description: t.tools.hub.metaDescription,
    path: Route.TOOLS,
    locale: validLocale,
  })
}

export default async function ToolsHubPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const hub = t.tools.hub

  const itemsByKind = CATEGORY_ORDER.reduce<Record<ToolKind, ToolsHubItem[]>>(
    (acc, kind) => {
      acc[kind] = TOOLS_HUB_ITEMS.filter((item) => item.kind === kind)
      return acc
    },
    {
      [ToolKind.AUDIT]: [],
      [ToolKind.CALCULATOR]: [],
      [ToolKind.PLANNER]: [],
      [ToolKind.AGENDA]: [],
    },
  )

  const hubUrl = `${SITE_CONFIG.url}${getLocalizedPath(Route.TOOLS, validLocale)}`
  const breadcrumb = generateBreadcrumbListSchema([
    { name: 'Home', path: Route.HOME },
    { name: hub.title, path: Route.TOOLS },
  ])
  const collection = generateCollectionPageSchema({
    name: hub.title,
    url: hubUrl,
    description: hub.metaDescription,
    locale: validLocale,
    items: TOOLS_HUB_ITEMS.map((item) => ({
      name: item.title[validLocale],
      url: `${SITE_CONFIG.url}${getLocalizedPath(item.route, validLocale)}`,
      description: item.intro[validLocale],
    })),
  })

  return (
    <>
      <StructuredData data={[breadcrumb, collection]} />
      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{hub.eyebrow}</p>
          <h1 className={styles.title}>{hub.title}</h1>
          <p className={styles.intro}>{hub.intro}</p>
          <ul className={styles.badges} aria-label="Tool benefits">
            <li className={styles.badge}>{hub.freeBadge}</li>
            <li className={styles.badge}>{hub.noSignupBadge}</li>
          </ul>
        </header>

        <section className={styles.workflow} aria-labelledby="workflow-heading">
          <p className={styles.workflowEyebrow}>{hub.workflowEyebrow}</p>
          <h2 id="workflow-heading" className={styles.workflowTitle}>
            {hub.workflowTitle}
          </h2>
          <p className={styles.workflowIntro}>{hub.workflowIntro}</p>
          <ul className={styles.workflowSteps}>
            <li className={`${styles.workflowStep} ${styles.workflowStepHighlighted}`}>
              <a href={`#${CHEFS_ANCHOR}`} className={styles.workflowStepLink}>
                <span className={styles.workflowStepIcon} aria-hidden>
                  <ChefIcon size={48} />
                </span>
                <h3 className={styles.workflowStepTitle}>
                  {hub.chefsSection.workflowQuestion}
                </h3>
                <p className={styles.workflowStepBody}>
                  {hub.chefsSection.workflowBody}
                </p>
                <span className={styles.workflowStepCount}>{hub.chefsSection.cardCta}</span>
              </a>
            </li>
            {CATEGORY_ORDER.map((kind, index) => {
              const step = hub.workflowSteps[index]
              return (
                <li key={kind} className={styles.workflowStep}>
                  <a href={`#${CATEGORY_ANCHOR[kind]}`} className={styles.workflowStepLink}>
                    <span className={styles.workflowStepIcon} aria-hidden>
                      <CategoryIcon kind={kind} size={48} />
                    </span>
                    <h3 className={styles.workflowStepTitle}>{step.title}</h3>
                    <p className={styles.workflowStepBody}>{step.body}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        <ChefsSection
          chefs={hub.chefsSection}
          chefsHref={getLocalizedPath(Route.CHEFS, validLocale)}
        />

        {CATEGORY_ORDER.map((kind) => (
          <CategorySection
            key={kind}
            kind={kind}
            category={hub.categories[CATEGORY_KEY_BY_KIND[kind]]}
            items={itemsByKind[kind]}
            primaryCardCta={hub.toolCardCta}
            locale={validLocale}
          />
        ))}

      </main>
    </>
  )
}
