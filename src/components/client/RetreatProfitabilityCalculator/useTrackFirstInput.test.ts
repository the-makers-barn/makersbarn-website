import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { AnalyticsEvent } from '@/constants/analytics'
import { ToolVariant } from '@/constants/tools'
import { track } from '@/lib/analytics'

import { useTrackFirstInput } from './useTrackFirstInput'

vi.mock('@/lib/analytics', () => ({ track: vi.fn() }))

const VARIANT = ToolVariant.YOGA

describe('useTrackFirstInput', () => {
  beforeEach(() => {
    vi.mocked(track).mockClear()
  })

  it('does not track before any input changes', () => {
    renderHook(() => useTrackFirstInput(VARIANT))
    expect(track).not.toHaveBeenCalled()
  })

  it('tracks the first changed input with the variant', () => {
    const { result } = renderHook(() => useTrackFirstInput(VARIANT))
    result.current('pricePerGuest')
    expect(track).toHaveBeenCalledWith(AnalyticsEvent.CALCULATOR_USED, {
      variant: VARIANT,
      field: 'pricePerGuest',
    })
  })

  it('tracks only once per page view', () => {
    const { result, rerender } = renderHook(() => useTrackFirstInput(VARIANT))
    result.current('pricePerGuest')
    rerender()
    result.current('guests')
    result.current('pricePerGuest')
    expect(track).toHaveBeenCalledTimes(1)
  })
})
