import type { Metadata } from 'next'
import WhitePaperPage from '@/components/WhitePaperPage'
import { CONTENT } from './content'

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
}

export default function Page() {
  return <WhitePaperPage content={CONTENT} />
}
