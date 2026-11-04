import type { Metadata } from 'next'
import ServiceSubPage from '@/components/ServiceSubPage'
import { CONTENT } from './content'

// DRAFT until Mike approves: kept out of search results (noindex) and out of
// the sitemap (EXCLUDED_ROUTES in app/sitemap.ts). To publish, delete the
// robots line below and remove the route from EXCLUDED_ROUTES.
export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
  robots: { index: false, follow: false },
}

export default function HipaaComplianceServicesPage() {
  return <ServiceSubPage content={CONTENT} />
}
