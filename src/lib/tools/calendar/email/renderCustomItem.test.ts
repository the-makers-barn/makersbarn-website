import { describe, expect, it } from 'vitest'

import { MilestoneStatus } from '@/constants/tools'

import { renderCustomItem } from './renderCustomItem'

describe('renderCustomItem', () => {
  it('escapes HTML', () => {
    const html = renderCustomItem({ text: '<img src=x onerror=alert(1)>', status: MilestoneStatus.PENDING })
    expect(html).not.toContain('<img')
    expect(html).toContain('&lt;img')
  })

  it('renders URLs as plain text without anchor tags', () => {
    const html = renderCustomItem({
      text: 'See notes at https://notion.so/my-doc',
      status: MilestoneStatus.PENDING,
    })
    expect(html).not.toContain('<a ')
    expect(html).toContain('https://notion.so/my-doc')
  })

  it('marks the item as custom with a label or visual cue', () => {
    const html = renderCustomItem({ text: 'My custom thing', status: MilestoneStatus.PENDING })
    expect(html.toLowerCase()).toContain('custom')
  })
})
