# Makers Barn Website

A modern, SEO-optimized website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Postmark
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) 10+ (`npm install -g pnpm`)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory (see Environment Variables section below)

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check for code issues
- `pnpm test` - Run the vitest suite

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components (client and server components)
- `src/lib/` - Utility functions and helpers
- `src/constants/` - Application constants
- `src/data/` - Static data and content
- `src/types/` - TypeScript type definitions
- `src/services/` - External service integrations
- `src/actions/` - Server actions

## Environment Variables

Create a `.env.local` file in the root directory to configure environment-specific settings.

### SEO Verification Tags

The following environment variables are used for search engine verification and can be added to your `.env.local` file:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console verification code. Get this from [Google Search Console](https://search.google.com/search-console) after adding your property.
- `NEXT_PUBLIC_BING_VERIFICATION` - (Optional) Bing Webmaster Tools verification code. Get this from [Bing Webmaster Tools](https://www.bing.com/webmasters) after adding your site.

Example `.env.local`:
```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code-here
NEXT_PUBLIC_BING_VERIFICATION=your-bing-verification-code-here
```

These verification codes are used to add meta tags to your site's HTML, allowing search engines to verify ownership of your website.

## Features

- **SEO Optimized**: Comprehensive metadata, structured data (JSON-LD), sitemap, and robots.txt
- **Performance**: Image optimization, code splitting, and optimized package imports
- **Security**: Security headers configured for XSS protection, content type options, and more
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript support throughout the application

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
