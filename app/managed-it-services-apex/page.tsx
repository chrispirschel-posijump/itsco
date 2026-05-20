import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Apex',
  slug: 'apex',
  region: 'the Triangle',
  heroAccent: 'minimize cost and maximize uptime.',
  positioningAccent: 'deliver predictable value.',
  whyUsLead: 'An IT partner',
  whyUsAccent: 'Apex businesses rely on.',
  securityLead: 'Keep your network secure',
  securityAccent: 'from evolving threats.',
  heroImage: {
    src: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
    alt: 'Business team planning IT strategy in Apex',
  },
  whyUsImage: {
    src: '/images/hero/consulting/pexels-karola-g-8546816.jpg',
    alt: 'ITSco team collaborating with a client',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-shvets-production-8413332.jpg',
    alt: 'Cybersecurity monitoring for an Apex business',
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
