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
 * Only the three real locales are valid first segments. Without this, any
 * unknown path (/chefs, /foo, /foo/about) matches [locale] and renders the
 * English page with a 200, giving every bad URL a duplicate of a real page.
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
  // dynamicParams normally stops unknown locales at the router; this is the
  // guarantee for the dynamically rendered path, where params are not matched
  // against generateStaticParams.
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
