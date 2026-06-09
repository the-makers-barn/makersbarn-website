import type { Metadata } from 'next'
import { Playfair_Display, Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { baseMetadata } from '@/lib/metadata'
import { getServerLanguage } from '@/i18n'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
})

export const metadata: Metadata = baseMetadata

/**
 * Root layout - minimal wrapper for the entire application
 * 
 * This layout handles the basic HTML structure only.
 * The lang attribute is resolved from the request (cookie/domain detection)
 * so non-English locales are declared correctly to crawlers and assistive tech.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const language = await getServerLanguage()

  return (
    <html lang={language} className={`${playfair.variable} ${quicksand.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
