'use client'

import type { ReactNode } from 'react'
import { track } from '@vercel/analytics'

import { AnalyticsEvent, WhatsAppCtaLocation } from '@/constants/analytics'

interface WhatsAppCtaLinkProps {
  href: string
  location: WhatsAppCtaLocation
  className?: string
  children: ReactNode
}

export function WhatsAppCtaLink({ href, location, className, children }: WhatsAppCtaLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track(AnalyticsEvent.WHATSAPP_BOOKING_CLICKED, { location })}
    >
      {children}
    </a>
  )
}
