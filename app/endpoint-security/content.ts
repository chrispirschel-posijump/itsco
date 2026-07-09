// Content for /endpoint-security/
// Rewrite page — fresh ROI-focused content. Primary keyword: "endpoint security".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Endpoint Security Services | EDR & Device Protection',
    description:
      'ITSco endpoint security protects every laptop, desktop, server, and mobile device with EDR, encryption, and patching — centrally managed. Book a free consultation.',
    canonical: 'https://www.itsco.com/endpoint-security/',
  },
  serviceName: 'Endpoint Security',
  parent: { name: 'Cybersecurity & Compliance', href: '/cybersecurity/' },
  hero: {
    eyebrow: 'Cybersecurity · Endpoint Security',
    headlineLead: 'Endpoint security for every device',
    headlineAccent: 'that touches your data.',
    body: 'Laptops, desktops, phones, servers — every endpoint is a potential way in. ITSco protects them all with monitoring, detection, and response that never lets up.',
    utmSuffix: 'endpoint-security-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-mizunokozuki-12902858.jpg',
    alt: 'IT team working across multiple devices',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Your weakest device',
    headlineAccent: 'sets your security level.',
    paragraphs: [
      'Hybrid work has scattered your endpoints across homes, offices, and the road. ITSco secures every one of them with a single, centrally managed program.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Endpoint monitoring, detection, and response' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Complete protection for',
    headlineAccent: 'every endpoint.',
  },
  capabilities: [
    {
      slug: 'edr',
      title: 'Endpoint Detection & Response (EDR)',
      description: 'Continuous monitoring that detects, isolates, and remediates threats on every device.',
    },
    {
      slug: 'next-gen-antivirus',
      title: 'Next-Gen Antivirus',
      description: 'AI-driven protection that stops malware and ransomware traditional antivirus misses.',
    },
    {
      slug: 'device-encryption',
      title: 'Device Encryption',
      description: 'Full-disk encryption so lost or stolen devices never become a data breach.',
    },
    {
      slug: 'patch-management-security',
      title: 'Patch Management',
      description: 'Operating systems and apps kept current automatically, closing known vulnerabilities.',
    },
    {
      slug: 'application-control',
      title: 'Application Control',
      description: 'Only trusted, approved software runs on your endpoints — nothing else.',
    },
    {
      slug: 'mobile-device-security',
      title: 'Mobile Device Management',
      description: 'Phones and tablets secured, managed, and wiped remotely when needed.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Every device, accounted for',
    headlineAccent: 'and protected.',
    paragraphs: [
      'Attackers look for the one unpatched laptop or unmanaged phone. Endpoint security makes sure that device does not exist on your network.',
    ],
    bullets: [
      'Threats detected and contained on the device, before they spread',
      "Lost or stolen devices that can't leak data",
      'Known vulnerabilities closed automatically with patching',
      'One managed program covering office, home, and mobile',
    ],
    image: {
      src: '/images/hero/services/pexels-divinetechygirl-1181354.jpg',
      alt: 'Endpoint security specialist at work',
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
        slug: 'fully-managed-cybersecurity',
        label: 'Fully-Managed Cybersecurity',
        href: '/fully-managed-cybersecurity/',
        description: 'End-to-end cybersecurity, monitored and managed by ITSco.',
      },
      {
        slug: 'managed-soc',
        label: 'Managed SOC',
        href: '/managed-soc/',
        description: 'A 24/7 security operations center watching your environment.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Endpoint security,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: "Isn't antivirus enough for our laptops?",
      answer: [
        "Traditional antivirus only catches known threats. Modern endpoint security adds behavior-based detection, response, encryption, and patching — because today's attacks are built specifically to slip past antivirus.",
      ],
    },
    {
      question: 'Can you secure personal devices employees use for work?',
      answer: [
        'Yes. Mobile device management lets us secure and segment work data on personal phones and tablets, and remotely wipe just that data if a device is lost — without touching personal content.',
      ],
    },
  ],
  bookingUtm: 'endpoint-security-bottom',
}
