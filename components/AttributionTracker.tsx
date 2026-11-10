'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/lib/attribution'

// Records lead-source attribution on every page view. Renders nothing.
// See lib/attribution.ts.
export default function AttributionTracker() {
  const pathname = usePathname()
  useEffect(() => {
    if (pathname) trackPageView(pathname)
  }, [pathname])
  return null
}
