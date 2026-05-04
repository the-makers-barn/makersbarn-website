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
import { Route } from '@/types'
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

function CategoryIcon({ kind }: { kind: ToolKind }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.6,
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
            <li className={styles.badge}>{hub.multilingualBadge}</li>
          </ul>
          <nav className={styles.jumpNav} aria-label={hub.jumpToLabel}>
            <span className={styles.jumpLabel}>{hub.jumpToLabel}</span>
            <ul className={styles.jumpList}>
              {CATEGORY_ORDER.map((kind) => {
                const cat = hub.categories[CATEGORY_KEY_BY_KIND[kind]]
                const count = itemsByKind[kind].length
                return (
                  <li key={kind}>
                    <a href={`#${CATEGORY_ANCHOR[kind]}`} className={styles.jumpLink}>
                      <span className={styles.jumpIcon} aria-hidden>
                        <CategoryIcon kind={kind} />
                      </span>
                      <span className={styles.jumpText}>
                        <span className={styles.jumpTitle}>{cat.label}</span>
                        <span className={styles.jumpCount}>{count}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>

        {CATEGORY_ORDER.map((kind) => {
          const cat = hub.categories[CATEGORY_KEY_BY_KIND[kind]]
          const items = itemsByKind[kind]
          return (
            <section
              key={kind}
              id={CATEGORY_ANCHOR[kind]}
              className={styles.category}
              aria-labelledby={`${CATEGORY_ANCHOR[kind]}-heading`}
            >
              <header className={styles.categoryHeader}>
                <span className={styles.categoryIcon} aria-hidden>
                  <CategoryIcon kind={kind} />
                </span>
                <div>
                  <p className={styles.categoryLabel}>{cat.label}</p>
                  <h2 id={`${CATEGORY_ANCHOR[kind]}-heading`} className={styles.categoryTitle}>
                    {cat.title}
                  </h2>
                  <p className={styles.categoryDescription}>{cat.description}</p>
                </div>
              </header>
              <ul className={styles.toolList}>
                {items.map((item) => {
                  const href = getLocalizedPath(item.route, validLocale)
                  return (
                    <li key={item.route}>
                      <Link href={href} className={styles.toolCard}>
                        <span className={styles.toolCardTag}>{item.tag[validLocale]}</span>
                        <span className={styles.toolCardTitle}>{item.title[validLocale]}</span>
                        <span className={styles.toolCardDescription}>
                          {item.intro[validLocale]}
                        </span>
                        <span className={styles.toolCardCta}>
                          {hub.toolCardCta}
                          <span aria-hidden>→</span>
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}

        <section className={styles.workflow} aria-labelledby="workflow-heading">
          <p className={styles.workflowEyebrow}>{hub.workflowEyebrow}</p>
          <h2 id="workflow-heading" className={styles.workflowTitle}>
            {hub.workflowTitle}
          </h2>
          <p className={styles.workflowIntro}>{hub.workflowIntro}</p>
          <ol className={styles.workflowSteps}>
            {hub.workflowSteps.map((step, index) => (
              <li key={step.title} className={styles.workflowStep}>
                <span className={styles.workflowNumber}>{index + 1}</span>
                <h3 className={styles.workflowStepTitle}>{step.title}</h3>
                <p className={styles.workflowStepBody}>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  )
}
