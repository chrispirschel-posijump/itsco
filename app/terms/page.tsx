import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { CONTENT } from './content'

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
}

export default function TermsOfUsePage() {
  return <LegalPage content={CONTENT} />
}
