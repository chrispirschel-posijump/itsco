// Content for /siem-services/
// Rewrite page — fresh ROI-focused content. Primary keyword: "SIEM services".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'SIEM Services | Managed Security Information & Event Management',
    description:
      'ITSco managed SIEM correlates security data in real time so genuine threats surface instantly — without the staffing overhead. Book a free consultation.',
    canonical: 'https://www.itsco.com/siem-services/',
  },
  serviceName: 'SIEM Services',
  parent: { name: 'Cybersecurity & Compliance', href: '/cybersecurity/' },
  hero: {
    eyebrow: 'Cybersecurity · SIEM',
    headlineLead: 'SIEM that turns noise',
    headlineAccent: 'into signal.',
    body: "Your systems generate millions of log events a day. ITSco's managed SIEM correlates them in real time — so genuine threats surface instantly instead of hiding in the noise.",
    utmSuffix: 'siem-services-hero',
  },
  heroImage: {
    src: '/images/supporting/consulting/israel-andrade-YI_9SivVt_s-unsplash.jpg',
    alt: 'Security monitoring dashboards in a dark operations room',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'See everything.',
    headlineAccent: 'Miss nothing.',
    paragraphs: [
      'A SIEM platform is only as good as the team running it. ITSco delivers fully managed SIEM — deployment, tuning, monitoring, and response — so you get enterprise-grade visibility without the staffing overhead.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Real-time log monitoring and analysis' },
  ],
  capabilitiesHeading: {
    eyebrow: 'What Managed SIEM Delivers',
    headlineLead: 'Visibility across',
    headlineAccent: 'your whole environment.',
  },
  capabilities: [
    {
      slug: 'log-collection-correlation',
      title: 'Log Collection & Correlation',
      description:
        'Security data from across your network, endpoints, and cloud gathered and correlated into a single view.',
    },
    {
      slug: 'realtime-threat-detection',
      title: 'Real-Time Threat Detection',
      description:
        'Continuous analysis flags suspicious patterns the moment they appear — not hours or days later.',
    },
    {
      slug: 'siem-alerting',
      title: 'Prioritized Alerting',
      description: 'Tuned rules cut false positives so your team acts on what genuinely matters.',
    },
    {
      slug: 'threat-intelligence',
      title: 'Threat Intelligence',
      description: 'Global threat feeds enrich every alert with context on who, what, and how.',
    },
    {
      slug: 'compliance-reporting',
      title: 'Compliance Reporting',
      description: 'Audit-ready logs and reports that satisfy HIPAA, PCI-DSS, SOC 2, and more.',
    },
    {
      slug: 'siem-managed-response',
      title: 'Managed Response',
      description:
        'ITSco analysts investigate and act on alerts around the clock — SIEM that does something.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'From raw logs to',
    headlineAccent: 'real protection.',
    paragraphs: [
      'A SIEM that just collects logs is an expense. A SIEM that is monitored, tuned, and acted on is a defense. ITSco runs yours as the latter.',
    ],
    bullets: [
      'Threats surfaced in real time, not buried in log noise',
      'Fewer false positives — your team focuses on real incidents',
      'Audit-ready reporting for compliance requirements',
      'Enterprise-grade visibility without enterprise staffing costs',
    ],
    image: {
      src: '/images/hero/services/pexels-divinetechygirl-1181341.jpg',
      alt: 'Security analyst reviewing event data',
    },
  },
  related: {
    heading: 'Explore more cybersecurity services',
    links: [
      {
        slug: 'managed-soc',
        label: 'Managed SOC',
        href: '/managed-soc/',
        description: 'A 24/7 security operations center watching your environment.',
      },
      {
        slug: 'mdr-monitoring-and-response',
        label: 'MDR Monitoring & Response',
        href: '/mdr-monitoring-and-response/',
        description: 'Proactive threat hunting and rapid incident response, fully managed.',
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
    headlineLead: 'SIEM services,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: "What's the difference between SIEM and a SOC?",
      answer: [
        'A SIEM is the platform that collects and correlates security data; a SOC is the team that watches it. ITSco’s managed SIEM includes both — the technology and the analysts who act on it.',
      ],
    },
    {
      question: 'Will SIEM help with compliance audits?',
      answer: [
        'Yes. SIEM centralizes and retains the security logs and generates the reports that frameworks like HIPAA, PCI-DSS, and SOC 2 require — turning audit prep from a scramble into a routine export.',
      ],
    },
  ],
  bookingUtm: 'siem-services-bottom',
}
