# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Hosted on **Vercel**. Pushes to `main` branch trigger automatic deployments.

## Architecture

Next.js 15 App Router with TypeScript, Tailwind CSS, and Framer Motion.

### Directory Structure

```
src/
├── app/              # Next.js pages (App Router)
├── components/
│   ├── client/       # 'use client' components (interactive: Navbar, Hero, Carousels, Forms)
│   └── server/       # Server components (static: Footer, TeamGrid, Stats)
├── actions/          # Server actions (contact form submission)
├── services/         # External service integrations (Postmark email, Slack webhooks)
├── lib/              # Utilities (cn, validation, security, logger, metadata)
├── constants/        # App-wide constants and enums
├── context/          # React context providers (LanguageContext)
├── data/             # Static data (team, testimonials, accommodation, images)
├── i18n/             # Internationalization (dictionaries, types, server utilities)
├── types/            # TypeScript type definitions
├── middleware.ts     # Security headers, language detection, malicious path blocking
```

### Key Patterns

- **Component Organization**: Components are split into `client/` and `server/` directories based on rendering strategy. Each component has its own folder with `index.ts` barrel export.
- **Path Alias**: Use `@/*` for imports from `src/` (configured in tsconfig.json)
- **Barrel Exports**: All directories use `index.ts` files for clean imports
- **Server Actions**: Contact form uses server action in `src/actions/contact.ts` with rate limiting and validation
- **External Services**: Email via Postmark (`src/services/email.ts`), notifications via Slack webhooks (`src/services/slack.ts`)

### Internationalization (i18n)

Supports English (EN) and Dutch (NL) languages:
- **Dictionaries**: Translation files in `src/i18n/dictionaries/` (en.ts, nl.ts)
- **Language Detection**: Domain-based detection in middleware, stored in cookie
- **Context Provider**: `LanguageContext` for client-side language switching
- **Server Utilities**: `getServerTranslations()` for server components

### Styling

- Tailwind CSS for utility classes
- CSS Modules (`*.module.css`) for component-specific styles
- Fonts: Playfair Display (headings), Quicksand (body) - loaded via `next/font/google`

### Typography System

The project uses a centralized typography system with CSS custom properties. All typography tokens are defined in `src/constants/typography.ts` and exposed as CSS variables in `globals.css`.

**Font Families** (use CSS variables, not hardcoded font stacks):
- `var(--font-playfair)` - Headings, titles, accent text
- `var(--font-quicksand)` - Body text (set as default on body element)

**Font Sizes** (fluid scaling with `clamp()`):
- `var(--font-size-xs)` through `var(--font-size-5xl)`
- Common mappings: xs (0.75rem), sm (0.875rem), base (1rem), md (1.1rem), lg (1.25rem), xl (1.5rem), 2xl (1.75rem), 3xl (2.25rem), 4xl (3rem), 5xl (3.5rem)

**Text Colors** (semantic naming):
- `var(--color-text)` - Primary text (#1f130c)
- `var(--color-text-muted)` - Secondary body text (#4c4336)
- `var(--color-text-tertiary)` - Subtle text (#5c554c)
- `var(--color-primary)` - Brand green (#294b3a)
- `var(--color-secondary)` - Brand gold (#b8894a)
- `var(--color-text-inverse)` - Text on dark backgrounds (#ffffff)
- `var(--color-text-inverse-muted)` - Muted text on dark backgrounds (rgba(255,255,255,0.85))
- `var(--color-text-error)` - Error messages (#dc2626)
- `var(--color-background)` - Background color (#ffffff)

**Line Heights**:
- `var(--line-height-tight)` (1.2) - Headings
- `var(--line-height-snug)` (1.4) - Compact text
- `var(--line-height-normal)` (1.5) - Default
- `var(--line-height-relaxed)` (1.7) - Body paragraphs

**Letter Spacing**:
- `var(--letter-spacing-tight)` (-0.01em) - Headings
- `var(--letter-spacing-normal)` (0) - Default
- `var(--letter-spacing-wide)` (0.05em) - Uppercase labels, kickers

**Usage Guidelines**:
- Always use CSS variables for typography, never hardcode values
- Import typography constants from `@/constants/typography` for TypeScript usage
- Tailwind classes are extended to use these tokens (e.g., `text-primary`, `font-playfair`)

### Environment Variables

Required for contact form functionality (see `.env.example`):
- `POSTMARKAPP_API_TOKEN` - Postmark API token
- `POSTMARK_SENDER_EMAIL` - Email address used as sender for both admin notifications and user confirmations
- `POSTMARK_ADMIN_EMAIL` - Email address(es) to receive admin notifications (comma-separated for multiple recipients)
- `SLACK_WEBHOOK_USER_CONTACTS` - Slack webhook URL for contact form notifications
- `SUPPRESS_SLACK_MESSAGES` - set to `true` to disable Slack in development

### ESLint Configuration

Uses flat config (`eslint.config.js`). Unused variables prefixed with `_` are allowed.
