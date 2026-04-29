import { MetadataRoute } from 'next'

import { SITE_CONFIG } from '@/constants/site'
import { getLocalizedPath } from '@/lib/routing'
import { Route, Language } from '@/types'

const TOOL_ROUTE_PATHS = new Set<string>([
  Route.TOOLS,
  Route.RETREAT_PROFITABILITY_CALCULATOR,
  Route.YOGA_RETREAT_PRICING_CALCULATOR,
  Route.WELLNESS_RETREAT_PRICING_CALCULATOR,
  Route.MEDITATION_RETREAT_PRICING_CALCULATOR,
  Route.COACHING_RETREAT_PRICING_CALCULATOR,
  Route.THREE_MONTH_RETREAT_LAUNCH_CALENDAR,
  Route.SIX_MONTH_RETREAT_LAUNCH_CALENDAR,
  Route.NINE_MONTH_RETREAT_LAUNCH_CALENDAR,
  Route.TWELVE_MONTH_RETREAT_LAUNCH_CALENDAR,
])

const TOOL_LOCALES: readonly Language[] = [Language.EN, Language.NL, Language.DE]

interface PageRoute {
  path: Route
  changeFrequency: 'weekly' | 'monthly'
  priority: number
}

const PAGE_ROUTES: readonly PageRoute[] = [
  { path: Route.HOME, changeFrequency: 'weekly', priority: 1.0 },
  { path: Route.ABOUT, changeFrequency: 'monthly', priority: 0.8 },
  { path: Route.FACILITIES, changeFrequency: 'weekly', priority: 0.9 },
  { path: Route.CONTACT, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.HOST_A_RETREAT, changeFrequency: 'weekly', priority: 0.9 },
  { path: Route.COMPARISON, changeFrequency: 'monthly', priority: 0.8 },
  { path: Route.YOGA_TEACHERS, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.MEDITATION_RETREATS, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.WRITING_RETREATS, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.TEAM_OFFSITES, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.BREATHWORK_SOUND_HEALING, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.COACHING_INTENSIVES, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.SOMATIC_THERAPY_RETREATS, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.WELLNESS_DETOX_RETREATS, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.CIRCLE_RETREATS, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.PHOTOGRAPHY_WORKSHOPS, changeFrequency: 'monthly', priority: 0.85 },
  { path: Route.TOOLS, changeFrequency: 'weekly', priority: 0.7 },
  { path: Route.RETREAT_PROFITABILITY_CALCULATOR, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.YOGA_RETREAT_PRICING_CALCULATOR, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.WELLNESS_RETREAT_PRICING_CALCULATOR, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.MEDITATION_RETREAT_PRICING_CALCULATOR, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.COACHING_RETREAT_PRICING_CALCULATOR, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.THREE_MONTH_RETREAT_LAUNCH_CALENDAR, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.SIX_MONTH_RETREAT_LAUNCH_CALENDAR, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.NINE_MONTH_RETREAT_LAUNCH_CALENDAR, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.TWELVE_MONTH_RETREAT_LAUNCH_CALENDAR, changeFrequency: 'monthly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  const allLocales = Object.values(Language) as Language[]
  const routes: MetadataRoute.Sitemap = []

  for (const pageRoute of PAGE_ROUTES) {
    const localesForRoute = TOOL_ROUTE_PATHS.has(pageRoute.path)
      ? TOOL_LOCALES
      : allLocales

    for (const locale of localesForRoute) {
      const localizedPath = getLocalizedPath(pageRoute.path, locale)
      routes.push({
        url: `${baseUrl}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: pageRoute.changeFrequency,
        priority: pageRoute.priority,
      })
    }
  }

  return routes
}
