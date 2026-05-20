import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Gastonia',
  slug: 'gastonia',
  region: 'the Charlotte metro',
  heroAccent: 'keep your business running smoothly.',
  positioningAccent: 'scale with your business.',
  whyUsLead: 'The managed IT partner',
  whyUsAccent: 'Gastonia businesses choose.',
  securityLead: 'Shield your business from',
  securityAccent: 'a relentless threat landscape.',
  heroImage: {
    src: '/images/supporting/services/beatriz-cattel-JtcJoKiz-m4-unsplash.jpg',
    alt: 'IT professional supporting a Gastonia business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/pexels-pavel-danilyuk-6340648.jpg',
    alt: 'ITSco team collaborating with a client',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-shvetsa-5324853.jpg',
    alt: 'Cybersecurity monitoring for a Gastonia business',
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
