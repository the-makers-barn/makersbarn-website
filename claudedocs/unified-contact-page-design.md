# Unified Contact Page Design Specification

## Overview

This document outlines the design for combining the current Contact and Book pages into a single, cohesive "Get in Touch" page. The unified page allows visitors to either ask a quick question or request a booking quote through an elegant intent selector.

---

## Current State Analysis

### Contact Page (`/contact`)
- **Visual Style**: Dark green (#294b3a) form on cream background (#f7f3ee)
- **Form Fields**: name, email, phone, message (4 fields)
- **Layout**: Side-by-side (form + image) on desktop
- **Tone**: Conversational ("Hi! My name is...", "How can we help you?")
- **Additional**: Google Maps embed at bottom, email alternative link

### Book Page (`/book`)
- **Visual Style**: Light gradient background, progress stepper
- **Form Fields**: 15+ fields across 4-step wizard
- **Layout**: Centered single-column wizard
- **Tone**: More formal/transactional
- **Steps**: Contact → Dates → Details → Review

### Design Problem
The two pages have distinctly different visual languages and user experiences. Users may be confused about which to use, and the styles don't feel part of the same brand.

---

## Proposed Solution

### Unified Page Concept

```
┌────────────────────────────────────────────────────────────┐
│                     Get in Touch                           │
│  Whether you're planning a retreat or have a question...  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│    ┌─────────────────────┬─────────────────────────┐      │
│    │  Ask a Question     │  Request a Quote        │      │
│    │  Quick inquiry      │  Plan your retreat      │      │
│    └─────────────────────┴─────────────────────────┘      │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              [FORM CONTENT BASED ON SELECTION]             │
│                                                            │
│              - Question: Dark green form + image           │
│              - Booking: 4-step wizard                      │
│                                                            │
├────────────────────────────────────────────────────────────┤
│           Prefer email? info@themakersbarn.com               │
├────────────────────────────────────────────────────────────┤
│                    [Google Maps]                           │
└────────────────────────────────────────────────────────────┘
```

---

## Component Architecture

### New Component Structure

```
src/components/client/UnifiedContact/
├── UnifiedContact.tsx          # Main page component
├── UnifiedContact.module.css
├── IntentSelector.tsx          # Toggle between modes
├── IntentSelector.module.css
├── QuestionForm.tsx            # Simplified contact form
├── QuestionForm.module.css
├── index.ts
```

### State Management

```typescript
enum ContactIntent {
  QUESTION = 'question',
  BOOKING = 'booking'
}

interface UnifiedContactState {
  intent: ContactIntent
  questionFormData: ContactFormData
  bookingFormData: BookingFormData
  wizardStep: WizardStep
}
```

---

## Intent Selector Component

### Visual Design

```
┌────────────────────────────────────────────────────┐
│  ┌─────────────────────┬─────────────────────┐    │
│  │   Ask a Question    │  Request a Quote    │    │
│  │   Quick inquiry     │  Plan your retreat  │    │
│  └─────────────────────┴─────────────────────┘    │
│       [Active indicator slides between options]    │
└────────────────────────────────────────────────────┘
```

### CSS Specifications

| Property | Value |
|----------|-------|
| Container background | `#ffffff` |
| Container border | `1px solid rgba(41, 75, 58, 0.1)` |
| Container border-radius | `16px` |
| Container padding | `6px` |
| Max width | `560px` |
| Active option background | `#294b3a` |
| Active option text | `#ffffff` |
| Inactive option text | `var(--color-text-muted)` |
| Transition | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` |

### Animation

Use Framer Motion `layoutId` for smooth indicator transitions:

```tsx
<motion.div
  layoutId="intent-indicator"
  className={styles.activeIndicator}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
/>
```

---

## Form Modes

### Mode A: Question Form

Retains the existing dark green aesthetic with conversational labels.

**Layout (Desktop)**:
```
┌─────────────────────────────┬─────────────────────┐
│  DARK GREEN FORM            │  IMAGE              │
│  (#294b3a background)       │  (Hay House Bench)  │
│                             │                     │
│  Hi! My name is...          │                     │
│  [Name input]               │                     │
│                             │                     │
│  and you can reach me at... │                     │
│  [Email input]              │                     │
│                             │                     │
│  or call me at...           │                     │
│  [Phone input]              │                     │
│                             │                     │
│  How can we help you?       │                     │
│  [Message textarea]         │                     │
│                             │                     │
│  [Send Message button]      │                     │
└─────────────────────────────┴─────────────────────┘
```

**Mobile**: Form stacks above image, full width.

### Mode B: Booking Wizard

Retains the existing 4-step wizard with progress stepper.

**Layout**:
```
┌─────────────────────────────────────────────────────┐
│              PROGRESS STEPPER                       │
│    (1)──────(2)──────(3)──────(4)                  │
│  Contact    Dates   Details   Finish               │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Step content with animated transitions             │
│  - Step 1: Name, Email, Phone                       │
│  - Step 2: Retreat type, dates, duration            │
│  - Step 3: Group size, accommodation, catering      │
│  - Step 4: Review summary, extra info               │
│                                                     │
├─────────────────────────────────────────────────────┤
│         [Back]               [Continue/Submit]      │
└─────────────────────────────────────────────────────┘
```

---

## Color System

| Element | Question Mode | Booking Mode |
|---------|---------------|--------------|
| Page background | `#f7f3ee` | `linear-gradient(#f7f3ee, #fff)` |
| Form background | `#294b3a` | `transparent` |
| Form text | `#ffffff` | `var(--color-text)` |
| Input background | `rgba(41, 75, 58, 0.8)` | `#ffffff` |
| Input border | `rgba(255, 255, 255, 0.3)` | `#e2e8f0` |
| Primary button | `#ffffff` on green | `#294b3a` |
| Next button | N/A | `#b8894a` (gold) |

---

## Mobile Layout

```
┌──────────────────────────────────┐
│          Get in Touch            │
│    We're here to help...         │
├──────────────────────────────────┤
│  ┌────────────────────────────┐ │
│  │    Ask a Question         │ │
│  └────────────────────────────┘ │
│  ┌────────────────────────────┐ │
│  │    Request a Quote         │ │
│  └────────────────────────────┘ │
├──────────────────────────────────┤
│  [Form content - full width]    │
├──────────────────────────────────┤
│  [Email alternative]             │
├──────────────────────────────────┤
│  [Google Maps - 350px]          │
└──────────────────────────────────┘
```

Intent selector stacks vertically on mobile for better touch targets.

---

## Accessibility

### ARIA Structure

```tsx
<div role="tablist" aria-label="Contact options">
  <button
    role="tab"
    aria-selected={intent === 'question'}
    aria-controls="question-panel"
  >
    Ask a Question
  </button>
  <button
    role="tab"
    aria-selected={intent === 'booking'}
    aria-controls="booking-panel"
  >
    Request a Quote
  </button>
</div>

<div
  role="tabpanel"
  id="question-panel"
  hidden={intent !== 'question'}
>
  {/* Question form */}
</div>
```

### Keyboard Navigation

- Arrow keys switch between intent options when selector is focused
- Tab moves through form fields
- Focus moves to first form field when intent changes

---

## i18n Dictionary Additions

```typescript
unifiedContact: {
  pageTitle: 'Get in Touch',
  pageSubtitle: 'Whether you\'re planning a retreat or have a quick question, we\'re here to help.',
  intentSelector: {
    questionLabel: 'Ask a Question',
    questionSublabel: 'Quick inquiry',
    bookingLabel: 'Request a Quote',
    bookingSublabel: 'Plan your retreat',
  },
}
```

Dutch translations needed for all new keys.

---

## URL & Routing

### Route Changes

| Old Route | New Route | Notes |
|-----------|-----------|-------|
| `/contact` | `/contact` | Becomes unified page |
| `/book` | Removed | Redirect to `/contact#booking` |

### Hash Support

- `/contact` → Default to "Ask a Question"
- `/contact#question` → "Ask a Question" mode
- `/contact#booking` → "Request a Quote" mode

Internal links should be updated to use appropriate hashes.

---

## Implementation Phases

### Phase 1: Component Creation
1. Create `IntentSelector` component with animations
2. Extract `QuestionForm` from existing `ContactForm`
3. Create `UnifiedContact` wrapper component

### Phase 2: Integration
1. Wire up intent switching with URL hash sync
2. Integrate both form variants with smooth transitions
3. Preserve existing form logic and validation

### Phase 3: Polish
1. Add keyboard navigation
2. Test responsive breakpoints
3. Add loading states

### Phase 4: Migration
1. Update `/contact` page to use new component
2. Set up redirect from `/book` to `/contact#booking`
3. Update all internal navigation links
4. Remove old `BookingForm` and book page files

---

## Files to Modify

### New Files
- `src/components/client/UnifiedContact/UnifiedContact.tsx`
- `src/components/client/UnifiedContact/UnifiedContact.module.css`
- `src/components/client/UnifiedContact/IntentSelector.tsx`
- `src/components/client/UnifiedContact/IntentSelector.module.css`
- `src/components/client/UnifiedContact/QuestionForm.tsx`
- `src/components/client/UnifiedContact/QuestionForm.module.css`
- `src/components/client/UnifiedContact/index.ts`

### Modified Files
- `src/app/[locale]/contact/page.tsx` - Use new component
- `src/i18n/dictionaries/en.ts` - Add unified contact translations
- `src/i18n/dictionaries/nl.ts` - Add Dutch translations
- `src/types/routes.ts` - Remove Book route
- `src/components/client/Navbar/` - Update navigation links

### Deleted Files (after migration)
- `src/app/[locale]/book/page.tsx`
- `src/components/client/BookingForm/` (folder) - After integration

---

## Design Rationale

### Why This Approach?

1. **Single Entry Point**: Users have one clear destination for all contact needs
2. **Clear Intent**: The selector explicitly communicates two distinct paths
3. **Preserved Investment**: Both existing forms are retained with minimal changes
4. **Unified Brand**: Single page with cohesive visual language
5. **SEO Benefit**: One strong page instead of two competing pages

### Alternative Approaches Rejected

1. **Accordion Pattern**: Creates cognitive load deciding which to expand
2. **Keep Separate Pages**: Fragments experience, confuses navigation
3. **Single Adaptive Form**: Muddles mental model, confusing progress stepper

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Form completion rate | +15% improvement |
| Time to first interaction | < 3 seconds |
| Mobile usability score | > 90 (Lighthouse) |
| Accessibility score | 100% (axe) |
