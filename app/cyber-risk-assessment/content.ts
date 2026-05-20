// Content for /cyber-risk-assessment/
// Rewrite page — fresh ROI-focused content. Primary keyword: "cyber risk assessment".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Cyber Risk Assessment Services | ITSco',
    description:
      'ITSco cyber risk assessment maps your real exposure and delivers a prioritized, costed remediation roadmap — so security spending hits what matters. Book a free consultation.',
    canonical: 'https://www.itsco.com/cyber-risk-assessment/',
  },
  serviceName: 'Cyber Risk Assessment',
  hero: {
    eyebrow: 'Cybersecurity · Risk Assessment',
    headlineLead: 'Cyber risk assessment —',
    headlineAccent: 'know exactly where you stand.',
    body: "You can't fix what you can't see. ITSco's cyber risk assessment maps your real exposure and hands you a prioritized plan to close it.",
    utmSuffix: 'cyber-risk-assessment-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-thisisengineering-3861951.jpg',
    alt: 'Security analyst assessing cyber risk',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Clarity before you spend',
    headlineAccent: 'a dollar on security.',
    paragraphs: [
      'Security budgets get wasted on the wrong things. A risk assessment shows you what actually threatens your business — so every dollar after it is well spent.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of cybersecurity and risk expertise' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: 'What the Assessment Covers',
    headlineLead: 'A complete picture of',
    headlineAccent: 'your exposure.',
  },
  capabilities: [
    {
      slug: 'risk-discovery',
      title: 'Asset & Risk Discovery',
      description: 'A full inventory of your systems, data, and the risks attached to each.',
    },
    {
      slug: 'vulnerability-identification',
      title: 'Vulnerability Identification',
      description: 'Scanning and testing that surface the weaknesses attackers would target first.',
    },
    {
      slug: 'threat-modeling',
      title: 'Threat Modeling',
      description: 'An honest look at who would attack you, how, and what it would cost.',
    },
    {
      slug: 'compliance-gap-analysis',
      title: 'Compliance Gap Analysis',
      description: 'Where you stand against HIPAA, PCI-DSS, SOC 2, and other frameworks that apply to you.',
    },
    {
      slug: 'risk-prioritization',
      title: 'Risk Prioritization',
      description: 'Findings ranked by real business impact — so you fix the right things first.',
    },
    {
      slug: 'remediation-roadmap',
      title: 'Remediation Roadmap',
      description: 'A clear, costed, step-by-step plan to close the gaps that matter.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'A plan,',
    headlineAccent: 'not just a problem list.',
    paragraphs: [
      'A risk assessment that ends in a 60-page PDF helps no one. ITSco ends with a roadmap you can act on Monday.',
    ],
    bullets: [
      'A clear picture of your real exposure',
      'Risks ranked by business impact, not severity score alone',
      'A prioritized, costed remediation roadmap',
      'Security spending aimed at what actually matters',
    ],
    image: {
      src: '/images/supporting/consulting/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
      alt: 'Risk analysis dashboard and reporting',
    },
  },
  related: {
    heading: 'Explore more cybersecurity services',
    links: [
      {
        slug: 'security-audits-compliance',
        label: 'Security Audits & Compliance',
        href: '/security-audits-compliance/',
        description: 'In-depth audits and remediation roadmaps that keep you compliant.',
      },
      {
        slug: 'penetration-testing-services',
        label: 'Penetration Testing',
        href: '/penetration-testing-services/',
        description: 'Real-world attack simulations that surface weaknesses before attackers do.',
      },
      {
        slug: 'fully-managed-cybersecurity',
        label: 'Fully-Managed Cybersecurity',
        href: '/fully-managed-cybersecurity/',
        description: 'End-to-end cybersecurity, monitored and managed by ITSco.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Cyber risk assessment,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How long does a risk assessment take?',
      answer: [
        "Most assessments run a few weeks end to end, depending on the size of your environment. You'll have a clear findings review and remediation roadmap at the end — not a vague report.",
      ],
    },
    {
      question: 'What happens after the assessment?',
      answer: [
        'You own the roadmap and can act on it however you choose. Many clients have ITSco implement the priority fixes and provide ongoing managed security — but there is no obligation to.',
      ],
    },
  ],
  bookingUtm: 'cyber-risk-assessment-bottom',
}
