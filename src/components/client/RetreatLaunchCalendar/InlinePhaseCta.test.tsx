import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { InlinePhaseCta } from './InlinePhaseCta'

describe('InlinePhaseCta', () => {
  it('renders title, body, and an accessible link', () => {
    render(
      <InlinePhaseCta
        title="Looking for a venue?"
        body="MakersBarn is a quiet retreat venue in the Dutch countryside."
        linkLabel="Check MakersBarn dates"
        linkHref="/en/host-a-retreat?src=tool-calendar-phase-anchor"
      />,
    )
    expect(screen.getByText('Looking for a venue?')).toBeInTheDocument()
    expect(
      screen.getByText('MakersBarn is a quiet retreat venue in the Dutch countryside.'),
    ).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Check MakersBarn dates' })
    expect(link).toHaveAttribute(
      'href',
      '/en/host-a-retreat?src=tool-calendar-phase-anchor',
    )
  })
})
