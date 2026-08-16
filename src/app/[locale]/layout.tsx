import { notFound } from 'next/navigation'

import { LanguageWrapper, Navbar, FloatingWhatsApp } from '@/components/client'
import { Footer, StructuredData } from '@/components/server'
import { isValidLocale } from '@/lib/locale'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/structuredData'
import { Language } from '@/types'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

/**
 * Declares the three real locales.
 *
 * `dynamicParams = false` does NOT currently reject unknown locales: it only
 * applies to routes Next prerenders, and the root layout reads cookies and
 * headers, so everything below it renders dynamically. Middleware is the actual
 * guard — it 404s unrecognised paths before rendering starts. This stays as the
 * declaration of what a valid locale is, and would begin enforcing on its own
 * if the root layout ever became static.
 */
export const dynamicParams = false

export function generateStaticParams(): { locale: Language }[] {
  return (Object.values(Language) as Language[]).map((locale) => ({ locale }))
}

/**
 * Locale-aware layout for all pages under [locale] route
 *
 * This layout:
 * - Validates the locale from URL params
 * - Wraps the app with LanguageWrapper to provide language context
 * - Includes common layout components (Navbar, Footer)
 * - Sets the HTML lang attribute via LanguageContext (client-side)
 */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params
  // Defence in depth only. By the time this runs the head has already streamed,
  // so notFound() here yields a 200 with the 404 body — middleware is what makes
  // an unknown locale a real 404. This keeps the type narrow and stops a bad
  // locale rendering as English if the route is ever reached directly.
  if (!isValidLocale(locale)) {
    notFound()
  }

  return (
    <LanguageWrapper initialLanguage={locale}>
      <StructuredData
        data={[generateOrganizationSchema(), generateWebSiteSchema()]}
      />
      <Navbar />
      {children}
      <Footer locale={locale} />
      <FloatingWhatsApp />
    </LanguageWrapper>
  )
}
