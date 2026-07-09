// Content for /managed-firewall/
// Rewrite page — fresh ROI-focused content. Primary keyword: "managed firewall".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Managed Firewall Services',
    description:
      'ITSco managed firewall — expert configuration, 24/7 monitoring, rule management, and updates that keep your perimeter doing its job. Book a free consultation.',
    canonical: 'https://www.itsco.com/managed-firewall/',
  },
  serviceName: 'Managed Firewall',
  parent: { name: 'Cybersecurity & Compliance', href: '/cybersecurity/' },
  hero: {
    eyebrow: 'Cybersecurity · Managed Firewall',
    headlineLead: 'Managed firewall —',
    headlineAccent: 'your first line, properly run.',
    body: 'A firewall left to default settings is barely a firewall. ITSco configures, monitors, updates, and tunes yours so it actually does its job.',
    utmSuffix: 'managed-firewall-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-brett-sayles-5408005.jpg',
    alt: 'Data center infrastructure protected by managed firewall',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'A firewall is only as good',
    headlineAccent: 'as its management.',
    paragraphs: [
      "Most firewall failures aren't the hardware — they're misconfiguration and neglect. ITSco's managed firewall service keeps yours correctly configured and continuously watched.",
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Firewall monitoring and threat alerting' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'A perimeter that is',
    headlineAccent: 'actively managed.',
  },
  capabilities: [
    {
      slug: 'firewall-configuration',
      title: 'Expert Configuration',
      description: 'Firewalls set up correctly from day one, with rules matched to how your business actually works.',
    },
    {
      slug: 'firewall-monitoring',
      title: '24/7 Monitoring',
      description: 'Continuous oversight of firewall traffic and alerts, day and night.',
    },
    {
      slug: 'rule-management',
      title: 'Rule Management',
      description: 'Firewall rules reviewed and refined as your environment changes — no stale, risky openings.',
    },
    {
      slug: 'threat-prevention-firewall',
      title: 'Threat Prevention',
      description: 'Integrated IDS/IPS, content filtering, and threat intelligence built into the perimeter.',
    },
    {
      slug: 'firewall-updates',
      title: 'Updates & Patching',
      description: 'Firmware and security updates applied promptly to close known vulnerabilities.',
    },
    {
      slug: 'firewall-reporting',
      title: 'Reporting & Visibility',
      description: 'Clear reporting on what your firewall is blocking and why.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'A perimeter you can',
    headlineAccent: 'actually trust.',
    paragraphs: [
      'The difference between a firewall and a managed firewall is whether anyone is watching it. ITSco is.',
    ],
    bullets: [
      'Firewalls configured right — no risky default openings',
      'Continuous monitoring instead of set-and-forget',
      'Rules that evolve with your business',
      'Firmware kept current against new vulnerabilities',
    ],
    image: {
      src: '/images/hero/services/pexels-brett-sayles-5480781.jpg',
      alt: 'Network firewall and server infrastructure',
    },
  },
  related: {
    heading: 'Explore more cybersecurity services',
    links: [
      {
        slug: 'ids-ips',
        label: 'IDS/IPS',
        href: '/ids-ips/',
        description: 'Intrusion detection and prevention that catches what others miss.',
      },
      {
        slug: 'network-security',
        label: 'Network Security',
        href: '/network-security/',
        description: 'End-to-end protection for the network your business runs on.',
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
    headlineLead: 'Managed firewall,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'Do you provide the firewall hardware, or manage what we have?',
      answer: [
        'Either. ITSco can manage your existing firewall or recommend and deploy the right one for your environment — then handle configuration, monitoring, and updates from there.',
      ],
    },
    {
      question: 'How is this different from IDS/IPS?',
      answer: [
        "A firewall controls what's allowed in and out; IDS/IPS inspects the allowed traffic for signs of attack. They work together — ITSco's managed firewall integrates both for layered perimeter defense.",
      ],
    },
  ],
  bookingUtm: 'managed-firewall-bottom',
}
