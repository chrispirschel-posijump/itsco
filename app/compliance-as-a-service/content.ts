// Content for /compliance-as-a-service/
// Rewrite page — fresh ROI-focused content. Primary keyword: "compliance as a service".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Compliance as a Service | Continuous Compliance Management | ITSco',
    description:
      "ITSco Compliance as a Service keeps you aligned to HIPAA, PCI-DSS, SOC 2, NIST, and more — every day, not just before audits. Book a free consultation.",
    canonical: 'https://www.itsco.com/compliance-as-a-service/',
  },
  serviceName: 'Compliance as a Service',
  hero: {
    eyebrow: 'Cybersecurity · Compliance as a Service',
    headlineLead: 'Compliance, kept current —',
    headlineAccent: 'every day, not just at audit time.',
    body: "Audits are point-in-time. Compliance is continuous. ITSco's Compliance as a Service keeps you aligned to the frameworks you answer to — between audits, not just before them.",
    utmSuffix: 'compliance-as-a-service-hero',
  },
  heroImage: {
    src: '/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg',
    alt: 'Reviewing compliance documentation and controls',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: "Compliance isn't a project.",
    headlineAccent: "It's a posture.",
    paragraphs: [
      'Most businesses scramble before audits and drift between them. Compliance as a Service replaces that cycle with continuous posture management — policies, controls, evidence, and reporting maintained as part of how you operate.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of compliance and security expertise' },
    { value: '24/7', label: 'Continuous compliance posture monitoring' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Compliance, run',
    headlineAccent: 'as a managed service.',
  },
  capabilities: [
    {
      slug: 'caas-framework-alignment',
      title: 'Framework Alignment',
      description:
        'Continuous alignment with HIPAA, PCI-DSS, SOC 2, NIST, ISO 27001, and the other frameworks that apply to you.',
    },
    {
      slug: 'caas-continuous-monitoring',
      title: 'Continuous Control Monitoring',
      description:
        'Security and compliance controls watched continuously — gaps surfaced early, not at audit time.',
    },
    {
      slug: 'caas-policy-management',
      title: 'Policy & Procedure Management',
      description:
        'Policies authored, maintained, and kept current as your business and the regulations both change.',
    },
    {
      slug: 'caas-control-testing',
      title: 'Control Testing & Evidence',
      description:
        'Controls tested on a schedule, with evidence collected and organized so audits are routine, not a fire drill.',
    },
    {
      slug: 'caas-audit-prep',
      title: 'Audit Preparation & Support',
      description:
        'Pre-audit readiness reviews, auditor liaison, and remediation support throughout the engagement.',
    },
    {
      slug: 'caas-reporting',
      title: 'Compliance Reporting',
      description:
        'Clear, on-demand reporting your leadership, board, and auditors can act on.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Audit-ready,',
    headlineAccent: 'every day.',
    paragraphs: [
      'When compliance is continuous, audits stop being events. They become a routine confirmation of a posture you already maintain.',
    ],
    bullets: [
      'Continuous compliance instead of pre-audit scramble',
      'Posture maintained as your business and the regulations change',
      'Evidence ready for any audit, anytime',
      'Reporting your board and auditors can act on',
    ],
    image: {
      src: '/images/supporting/consulting/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
      alt: 'Compliance reporting dashboard',
    },
  },
  related: {
    heading: 'Explore more cybersecurity & compliance services',
    links: [
      {
        slug: 'security-audits-compliance',
        label: 'Security Audits & Compliance',
        href: '/security-audits-compliance/',
        description: 'In-depth point-in-time audits and remediation roadmaps that keep you compliant.',
      },
      {
        slug: 'cyber-risk-assessment',
        label: 'Cyber Risk Assessment',
        href: '/cyber-risk-assessment/',
        description: 'A clear-eyed view of your exposure and a prioritized plan to close it.',
      },
      {
        slug: 'cybersecurity-consulting-services',
        label: 'Cybersecurity Consulting',
        href: '/cybersecurity-consulting-services/',
        description: 'Strategic security guidance and execution from a vendor-neutral team.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Compliance as a Service,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is this different from Security Audits & Compliance?',
      answer: [
        'Audits are point-in-time engagements that tell you where you stand. Compliance as a Service is ongoing — it keeps you compliant between audits, so the next audit is a confirmation rather than a fire drill. Most clients use both: the audits validate, the service maintains.',
      ],
    },
    {
      question: 'Which frameworks do you support?',
      answer: [
        'The major ones — HIPAA, PCI-DSS, SOC 2, NIST CSF, ISO 27001, CMMC, GDPR — and the industry-specific ones our clients answer to (FFIEC for financial services, HITRUST for healthcare, and more). We meet you where you are.',
      ],
    },
  ],
  bookingUtm: 'compliance-as-a-service-bottom',
}
