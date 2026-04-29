import { describe, expect, it } from 'vitest'

import { MilestoneStatus } from '@/constants/tools'

import { renderMilestoneRow } from './renderMilestoneRow'

describe('renderMilestoneRow', () => {
  it('renders pending milestone as plain bullet', () => {
    const html = renderMilestoneRow({ text: 'Sign venue contract', status: MilestoneStatus.PENDING })
    expect(html).toContain('Sign venue contract')
    expect(html).not.toContain('text-decoration')
    expect(html).not.toContain('☑')
  })

  it('renders DONE milestone with checkmark', () => {
    const html = renderMilestoneRow({ text: 'Sign venue contract', status: MilestoneStatus.DONE })
    expect(html).toContain('Sign venue contract')
    expect(html).toContain('✓')
  })

  it('renders DISMISSED milestone with strike-through', () => {
    const html = renderMilestoneRow({ text: 'Sign venue contract', status: MilestoneStatus.DISMISSED })
    expect(html).toContain('text-decoration:line-through')
  })

  it('escapes HTML in milestone text', () => {
    const html = renderMilestoneRow({ text: '<script>alert(1)</script>', status: MilestoneStatus.PENDING })
    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
  })
})
