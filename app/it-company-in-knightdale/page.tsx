import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Knightdale',
  slug: 'knightdale',
  region: 'the Triangle',
  serviceNoun: 'IT services',
  serviceNounTitle: 'IT Company',
  canonicalPath: '/it-company-in-knightdale/',
  utmBase: 'it-company-knightdale',
  heroAccent: 'generate real business value.',
  positioningAccent: 'spend smarter.',
  whyUsLead: 'A locally based IT company',
  whyUsAccent: 'Knightdale businesses trust.',
  securityLead: 'Defend your business against',
  securityAccent: 'an evolving threat landscape.',
  heroImage: {
    src: '/images/supporting/services/beatriz-cattel-JtcJoKiz-m4-unsplash.jpg',
    alt: 'IT professionals supporting a Knightdale business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/creatopy-E3LsanLgkLM-unsplash.jpg',
    alt: 'ITSco team at work',
  },
  securityImage: {
    src: '/images/supporting/services/windows-AigsWJmvoEo-unsplash.jpg',
    alt: 'Cybersecurity monitoring for a Knightdale business',
  },
})

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
}

export default function Page() {
  return <CityServicePage content={CONTENT} />
}
