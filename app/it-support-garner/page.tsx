import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Garner',
  slug: 'garner',
  region: 'the Triangle',
  serviceNoun: 'IT support',
  serviceNounTitle: 'IT Support',
  canonicalPath: '/it-support-garner/',
  utmBase: 'it-support-garner',
  heroAccent: 'keeps your business running.',
  positioningAccent: 'pay for themselves.',
  whyUsLead: 'An IT support partner',
  whyUsAccent: 'Garner businesses trust.',
  securityLead: 'Defend your business against',
  securityAccent: 'an evolving threat landscape.',
  heroImage: {
    src: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
    alt: 'IT support team supporting a Garner business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/charlesdeluvio-Lks7vei-eAg-unsplash.jpg',
    alt: 'ITSco IT support team at work',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-theo-decker-5946207.jpg',
    alt: 'Cybersecurity monitoring for a Garner business',
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
