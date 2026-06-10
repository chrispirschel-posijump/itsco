import type { Metadata } from 'next'
import IndustryPage from '@/components/IndustryPage'
import { CONTENT } from './content'

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
}

export default function ManufacturingITPage() {
  return <IndustryPage content={CONTENT} />
}
