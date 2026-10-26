import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const BASE = makeTemplateCityContent({
  serviceType: 'IT Outsourcing',
  name: 'Charlotte',
  slug: 'charlotte',
  region: 'the Charlotte metro',
  serviceNoun: 'IT outsourcing',
  serviceNounTitle: 'IT Outsourcing',
  canonicalPath: '/charlotte-it-outsourcing',
  utmBase: 'it-outsourcing-charlotte',
  heroAccent: 'empowers your team to achieve more.',
  positioningAccent: 'maximize your IT ROI.',
  whyUsLead: 'An IT outsourcing partner',
  whyUsAccent: 'Charlotte businesses rely on.',
  securityLead: 'Protect your business against',
  securityAccent: 'an evolving threat landscape.',
  heroImage: {
    src: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
    alt: 'IT outsourcing team supporting a Charlotte business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    alt: 'ITSco team at work',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-shvets-production-8413332.jpg',
    alt: 'Cybersecurity monitoring for a Charlotte business',
  },
})

// Override the template's default service-pillar links with the sibling
// Charlotte pages.
const CONTENT = {
  ...BASE,
  // Sibling city pages: each links the others with its target phrase so
  // Google sees one owner per keyword in Charlotte (Oct 2026).
  related: {
    heading: 'Our other IT services in Charlotte',
    links: [
      {
        slug: 'managed-it-services',
        label: 'Managed IT Services in Charlotte',
        href: '/managed-it-services-charlotte',
        description: 'Fully managed IT for Charlotte businesses, from monitoring and help desk to cloud and security.',
      },
      {
        slug: 'remote-it-support',
        label: 'IT Support in Charlotte',
        href: '/it-support-charlotte',
        description: 'Responsive IT support and help desk for Charlotte businesses.',
      },
      {
        slug: 'it-management-consulting',
        label: 'IT Consulting in Charlotte',
        href: '/charlotte-it-consulting',
        description: 'Strategic technology guidance that aligns IT with your business goals.',
      },
      {
        slug: 'cyber-security-management',
        label: 'Cyber Security Services in Charlotte',
        href: '/charlotte-cyber-security-services',
        description: 'Layered security, monitoring and compliance support for Charlotte businesses.',
      },
      {
        slug: 'help-desk-services',
        label: 'IT Helpdesk in Charlotte',
        href: '/charlotte-it-helpdesk',
        description: 'A dedicated help desk team that resolves end-user issues fast.',
      },
      {
        slug: 'network-security-services',
        label: 'IT Network Support in Charlotte',
        href: '/charlotte-it-network-support',
        description: 'Network design, monitoring and support that keeps your business connected.',
      },
    ],
  },
}

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
}

export default function Page() {
  return <CityServicePage content={CONTENT} />
}
