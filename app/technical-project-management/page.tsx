import type { Metadata } from 'next'
import ServiceSubPage from '@/components/ServiceSubPage'
import { CONTENT } from './content'

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
}

export default function TechnicalProjectManagementPage() {
  return <ServiceSubPage content={CONTENT} />
}
