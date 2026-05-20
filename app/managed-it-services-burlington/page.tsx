import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Burlington',
  slug: 'burlington',
  region: 'the Triad',
  heroAccent: 'drive efficiency and business growth.',
  positioningAccent: 'support your bottom line.',
  whyUsLead: 'A locally based IT team for',
  whyUsAccent: 'Burlington businesses.',
  securityLead: 'Protect your data against',
  securityAccent: 'ransomware and cyberattacks.',
  heroImage: {
    src: '/images/supporting/services/annie-spratt-MChSQHxGZrQ-unsplash.jpg',
    alt: 'IT professional supporting a Burlington business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/creatopy-E3LsanLgkLM-unsplash.jpg',
    alt: 'ITSco team collaborating with a client',
  },
  securityImage: {
    src: '/images/supporting/services/windows-AigsWJmvoEo-unsplash.jpg',
    alt: 'Cybersecurity monitoring for a Burlington business',
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
