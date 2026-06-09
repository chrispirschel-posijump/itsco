import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'
import { CONTENT } from './content'

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
}

export default function NetworkAutomationCaseStudyPage() {
  return <CaseStudyPage content={CONTENT} />
}
