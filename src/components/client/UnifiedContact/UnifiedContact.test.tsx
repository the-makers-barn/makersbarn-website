import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { UnifiedContact } from './UnifiedContact'

vi.mock('@/context', () => ({
  useTranslation: (ns: string) => {
    if (ns === 'unifiedContact') {
      return {
        t: {
          pageTitle: 'Get in Touch',
          pageSubtitle: 'Subtitle.',
          selectorAriaLabel: 'Contact options',
          intentSelector: {
            questionLabel: 'Ask',
            questionSublabel: 'sub',
            bookingLabel: 'Book',
            bookingSublabel: 'sub',
          },
          mapTitle: 'Map',
          questionFormImageAlt: 'alt',
          intentLeadIn: {
            looking: 'You are asking about finding a chef.',
            join: 'You are asking about joining.',
          },
        },
      }
    }
    return {
      t: {
        emailAlternative: { text: '' },
        whatsappAlternative: { text: '' },
      },
    }
  },
}))

vi.mock('../BookingForm', () => ({ BookingForm: () => <div data-testid="booking-form" /> }))
vi.mock('./QuestionForm', () => ({ QuestionForm: () => <div data-testid="question-form" /> }))

function setHash(hash: string) {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: { ...window.location, hash: `#${hash}` },
  })
}

describe('UnifiedContact', () => {
  it('renders QuestionForm and the looking lead-in for #looking-for-chef', () => {
    setHash('looking-for-chef')
    render(<UnifiedContact />)
    expect(screen.getByTestId('question-form')).toBeInTheDocument()
    expect(screen.queryByTestId('booking-form')).not.toBeInTheDocument()
    expect(screen.getByText('You are asking about finding a chef.')).toBeInTheDocument()
  })

  it('renders QuestionForm and the join lead-in for #chef-join', () => {
    setHash('chef-join')
    render(<UnifiedContact />)
    expect(screen.getByTestId('question-form')).toBeInTheDocument()
    expect(screen.getByText('You are asking about joining.')).toBeInTheDocument()
  })

  it('renders BookingForm only for #booking, no lead-in', () => {
    setHash('booking')
    render(<UnifiedContact />)
    expect(screen.getByTestId('booking-form')).toBeInTheDocument()
    expect(screen.queryByTestId('question-form')).not.toBeInTheDocument()
    expect(screen.queryByText(/asking about/)).not.toBeInTheDocument()
  })

  it('renders QuestionForm with no lead-in for #question (default)', () => {
    setHash('question')
    render(<UnifiedContact />)
    expect(screen.getByTestId('question-form')).toBeInTheDocument()
    expect(screen.queryByText(/asking about/)).not.toBeInTheDocument()
  })
})
