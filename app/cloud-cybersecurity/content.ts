// Content for /cloud-cybersecurity/
// Rewrite page — fresh ROI-focused content. Primary keyword: "cloud cybersecurity".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Cloud Cybersecurity Services | ITSco',
    description:
      'ITSco cloud cybersecurity closes the gap providers leave to you — configuration, identity, data protection, and monitoring across Microsoft 365, Azure, and AWS. Book a free consultation.',
    canonical: 'https://www.itsco.com/cloud-cybersecurity/',
  },
  serviceName: 'Cloud Cybersecurity',
  parent: { name: 'Cybersecurity & Compliance', href: '/cybersecurity/' },
  hero: {
    eyebrow: 'Cybersecurity · Cloud Security',
    headlineLead: 'Cloud cybersecurity — the cloud',
    headlineAccent: "isn't secure by default.",
    body: "Moving to the cloud doesn't hand security to your provider. ITSco secures your cloud the way it actually needs to be secured.",
    utmSuffix: 'cloud-cybersecurity-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-cookiecutter-17489157.jpg',
    alt: 'Cloud server infrastructure with security monitoring',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Your cloud,',
    headlineAccent: 'your responsibility.',
    paragraphs: [
      'Cloud providers secure the infrastructure — your data, identities, and configurations are on you. Most cloud breaches come from that gap. ITSco closes it.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Cloud activity monitoring and response' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Security for the cloud',
    headlineAccent: 'you actually run.',
  },
  capabilities: [
    {
      slug: 'cloud-config-management',
      title: 'Configuration Hardening',
      description: 'Misconfigurations are the #1 cause of cloud breaches — we find and fix them.',
    },
    {
      slug: 'cloud-identity-access',
      title: 'Identity & Access Management',
      description: 'Tight, least-privilege access controls across every cloud account and app.',
    },
    {
      slug: 'cloud-data-protection',
      title: 'Data Protection & Encryption',
      description: 'Sensitive cloud data encrypted, classified, and guarded against leakage.',
    },
    {
      slug: 'cloud-threat-monitoring',
      title: 'Threat Monitoring',
      description: 'Continuous monitoring of cloud activity for suspicious behavior and intrusions.',
    },
    {
      slug: 'cloud-compliance',
      title: 'Cloud Compliance',
      description: 'Cloud environments aligned with HIPAA, PCI-DSS, SOC 2, and your regulatory needs.',
    },
    {
      slug: 'cloud-backup-resilience',
      title: 'Backup & Resilience',
      description: 'Cloud-native backup and recovery so an incident never means lost data.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Cloud you can',
    headlineAccent: 'trust.',
    paragraphs: [
      'The cloud is only as secure as the way it is configured and watched. ITSco makes sure yours holds up.',
    ],
    bullets: [
      'Misconfigurations found and fixed before attackers find them',
      'Least-privilege access across every cloud account',
      'Sensitive data encrypted and monitored',
      'Cloud environments that hold up to a compliance audit',
    ],
    image: {
      src: '/images/hero/services/pexels-divinetechygirl-1181341.jpg',
      alt: 'Specialist reviewing cloud security posture',
    },
  },
  related: {
    heading: 'Explore more cybersecurity services',
    links: [
      {
        slug: 'fully-managed-cybersecurity',
        label: 'Fully-Managed Cybersecurity',
        href: '/fully-managed-cybersecurity/',
        description: 'End-to-end cybersecurity, monitored and managed by ITSco.',
      },
      {
        slug: 'security-audits-compliance',
        label: 'Security Audits & Compliance',
        href: '/security-audits-compliance/',
        description: 'In-depth audits and remediation roadmaps that keep you compliant.',
      },
      {
        slug: 'network-security',
        label: 'Network Security',
        href: '/network-security/',
        description: 'End-to-end protection for the network your business runs on.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Cloud cybersecurity,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: "Isn't our cloud provider responsible for security?",
      answer: [
        'Only partly. Under the shared-responsibility model, providers secure the infrastructure — but your data, access, and configuration are yours to protect. That is exactly where ITSco focuses.',
      ],
    },
    {
      question: 'Does this cover Microsoft 365 and Azure?',
      answer: [
        'Yes. ITSco secures the major platforms — Microsoft 365, Azure, AWS, and Google Workspace — including identity, configuration, and data protection across each.',
      ],
    },
  ],
  bookingUtm: 'cloud-cybersecurity-bottom',
}
