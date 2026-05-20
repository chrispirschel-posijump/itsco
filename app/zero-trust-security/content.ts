// Content for /zero-trust-security/
// Rewrite page — new page (in Nav, no live equivalent). Fresh ROI-focused
// content. Primary keyword: "zero trust security".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Zero Trust Security Services | ITSco',
    description:
      'ITSco helps you adopt zero trust security — verify every user, device, and request, so one stolen password never becomes a breach. Book a free consultation.',
    canonical: 'https://www.itsco.com/zero-trust-security/',
  },
  serviceName: 'Zero Trust Security',
  hero: {
    eyebrow: 'Cybersecurity · Zero Trust',
    headlineLead: 'Zero trust security —',
    headlineAccent: 'never assume, always verify.',
    body: 'The old model trusted anything inside the network. Zero trust verifies every user, device, and request — every time. ITSco helps you get there.',
    utmSuffix: 'zero-trust-security-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-divinetechygirl-1181676.jpg',
    alt: 'Secure access verification at a workstation',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Trust is',
    headlineAccent: 'a vulnerability.',
    paragraphs: [
      "Once an attacker is 'inside,' a traditional network trusts them. Zero trust removes that assumption — so a single stolen password no longer means a breach.",
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Continuous verification and monitoring' },
  ],
  capabilitiesHeading: {
    eyebrow: 'The Zero Trust Model',
    headlineLead: 'Verify everything,',
    headlineAccent: 'trust nothing by default.',
  },
  capabilities: [
    {
      slug: 'identity-verification',
      title: 'Identity Verification',
      description: 'Every user continuously verified — strong authentication on every access request.',
    },
    {
      slug: 'mfa',
      title: 'Multi-Factor Authentication',
      description: 'MFA enforced everywhere, closing the door on stolen-password attacks.',
    },
    {
      slug: 'least-privilege-access',
      title: 'Least-Privilege Access',
      description: 'Each person and device gets only the access they need — nothing more.',
    },
    {
      slug: 'device-trust',
      title: 'Device Trust',
      description: 'Only known, healthy, compliant devices reach your systems and data.',
    },
    {
      slug: 'microsegmentation',
      title: 'Microsegmentation',
      description: "The network divided into secure zones so a breach can't move laterally.",
    },
    {
      slug: 'continuous-verification',
      title: 'Continuous Verification',
      description: "Access isn't granted once — it's re-checked continuously as context changes.",
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: "One stolen credential shouldn't",
    headlineAccent: 'end your day.',
    paragraphs: [
      'Zero trust assumes a breach will happen — and makes sure it goes nowhere when it does.',
    ],
    bullets: [
      'Stolen passwords stopped cold by enforced MFA',
      'Attackers unable to move freely once inside',
      'Access that matches each role — no standing over-permission',
      'Only trusted, healthy devices on your network',
    ],
    image: {
      src: '/images/hero/blog/claudio-schwarz-08dyHxddcKc-unsplash.jpg',
      alt: 'Secure authentication at a keyboard',
    },
  },
  related: {
    heading: 'Explore more cybersecurity services',
    links: [
      {
        slug: 'network-security',
        label: 'Network Security',
        href: '/network-security/',
        description: 'End-to-end protection for the network your business runs on.',
      },
      {
        slug: 'endpoint-security',
        label: 'Endpoint Security',
        href: '/endpoint-security/',
        description: 'Protection for every laptop, desktop, server, and mobile device.',
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
    headlineLead: 'Zero trust security,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'Is zero trust a product we buy?',
      answer: [
        'No — it is an architecture and a strategy. ITSco implements it using tools you likely already have (identity, MFA, device management) plus targeted additions, rolled out in practical phases.',
      ],
    },
    {
      question: 'Will zero trust make things harder for our employees?',
      answer: [
        'Done well, barely. Modern zero trust uses single sign-on and risk-based prompts — so employees authenticate less often for routine work, and more only when something looks unusual.',
      ],
    },
  ],
  bookingUtm: 'zero-trust-security-bottom',
}
