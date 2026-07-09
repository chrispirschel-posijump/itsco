// Content for /microsoft-sentinel/
// Rewrite page — new page (in Nav, no live equivalent). Fresh ROI-focused
// content. Primary keyword: "Microsoft Sentinel".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Microsoft Sentinel Services | Cloud SIEM',
    description:
      'ITSco deploys, tunes, and monitors Microsoft Sentinel — Microsoft’s cloud-native SIEM — paired with analysts who act on what it finds. Book a free consultation.',
    canonical: 'https://www.itsco.com/microsoft-sentinel/',
  },
  serviceName: 'Microsoft Sentinel',
  parent: { name: 'Microsoft Solutions', href: '/microsoft-solutions/' },
  hero: {
    eyebrow: 'Microsoft · Sentinel',
    headlineLead: 'Microsoft Sentinel —',
    headlineAccent: 'cloud-native security monitoring.',
    body: "Sentinel is Microsoft's cloud SIEM — powerful, and only as good as the team running it. ITSco deploys, tunes, and monitors Sentinel so threats surface and get answered.",
    utmSuffix: 'microsoft-sentinel-hero',
  },
  heroImage: {
    src: '/images/supporting/consulting/israel-andrade-YI_9SivVt_s-unsplash.jpg',
    alt: 'Security monitoring with Microsoft Sentinel',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Security monitoring,',
    headlineAccent: 'built on the cloud.',
    paragraphs: [
      'Microsoft Sentinel collects and correlates security signals across your whole environment. ITSco deploys it, tunes the detections, and pairs it with analysts who act on what it finds.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Security monitoring and response coverage' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Sentinel, run as',
    headlineAccent: 'a managed service.',
  },
  capabilities: [
    {
      slug: 'sentinel-deployment',
      title: 'Sentinel Deployment',
      description: 'Sentinel stood up and connected to your Microsoft 365, Azure, and other data sources.',
    },
    {
      slug: 'sentinel-detection',
      title: 'Detection Engineering',
      description: "Analytics rules tuned to your environment so real threats surface and noise doesn't.",
    },
    {
      slug: 'sentinel-monitoring',
      title: '24/7 Monitoring',
      description: "Continuous monitoring of Sentinel alerts by ITSco's security team.",
    },
    {
      slug: 'sentinel-response',
      title: 'Incident Response',
      description: 'Investigation and response when Sentinel flags a genuine threat.',
    },
    {
      slug: 'sentinel-automation',
      title: 'Automation & Playbooks',
      description: 'Automated response playbooks that contain common threats in seconds.',
    },
    {
      slug: 'sentinel-reporting',
      title: 'Reporting & Compliance',
      description: 'Clear reporting and audit-ready records of your security posture.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'A SIEM that',
    headlineAccent: 'does something.',
    paragraphs: [
      'A SIEM platform on its own is just storage. Sentinel plus a team that acts on it is a defense.',
    ],
    bullets: [
      'Security signals from across Microsoft and beyond, in one place',
      'Detections tuned to your environment, not generic',
      'Analysts who act on alerts, not just collect them',
      'Audit-ready reporting built in',
    ],
    image: {
      src: '/images/hero/services/pexels-cookiecutter-17489157.jpg',
      alt: 'Cloud security infrastructure',
    },
  },
  related: {
    heading: 'Explore related services',
    links: [
      {
        slug: 'managed-soc',
        label: 'Managed SOC',
        href: '/managed-soc/',
        description: 'A 24/7 security operations center watching your environment.',
      },
      {
        slug: 'siem-services',
        label: 'SIEM Services',
        href: '/siem-services/',
        description: 'Platform-agnostic managed SIEM — real-time correlation and response.',
      },
      {
        slug: 'microsoft-solutions',
        label: 'Microsoft Solutions Overview',
        href: '/microsoft-solutions/',
        description: 'The full ITSco Microsoft program — 365, Azure, Teams, and more.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Microsoft Sentinel,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is Sentinel different from your other SIEM services?',
      answer: [
        "Microsoft Sentinel is a specific, cloud-native SIEM platform that fits naturally if you're already invested in Microsoft 365 and Azure. ITSco's broader SIEM and SOC services are platform-agnostic — we'll recommend whichever fits your environment best.",
      ],
    },
    {
      question: 'We have Microsoft 365 — is Sentinel worth it?',
      answer: [
        'Often, yes. Sentinel integrates tightly with the Microsoft signals you already generate, and consolidates security monitoring you might otherwise spread across tools. ITSco can assess whether it is the right fit before you commit.',
      ],
    },
  ],
  bookingUtm: 'microsoft-sentinel-bottom',
}
