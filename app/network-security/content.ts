// Content for /network-security/
// Rewrite page — fresh ROI-focused content. Primary keyword: "network security".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Network Security Services | ITSco',
    description:
      'ITSco network security protects the infrastructure your business runs on — firewalls, segmentation, intrusion prevention, and 24/7 monitoring. Book a free consultation.',
    canonical: 'https://www.itsco.com/network-security/',
  },
  serviceName: 'Network Security',
  hero: {
    eyebrow: 'Cybersecurity · Network Security',
    headlineLead: 'Network security that protects',
    headlineAccent: 'what your business runs on.',
    body: 'Your network connects every user, device, and application — which makes it the path attackers want most. ITSco secures it end to end.',
    utmSuffix: 'network-security-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-field-engineer-147254-442150.jpg',
    alt: 'Network engineer securing a server rack switch',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'A secure network is',
    headlineAccent: 'a productive network.',
    paragraphs: [
      'Downtime, breaches, and slowdowns all trace back to the network. ITSco designs, hardens, and monitors yours so it stays fast, available, and protected.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Network traffic monitoring and response' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Defense in depth for',
    headlineAccent: 'your network.',
  },
  capabilities: [
    {
      slug: 'firewall-protection',
      title: 'Firewall Protection',
      description: 'Properly configured, actively monitored firewalls that screen every connection in and out.',
    },
    {
      slug: 'network-segmentation',
      title: 'Network Segmentation',
      description: "Critical systems isolated so a breach in one area can't spread across your business.",
    },
    {
      slug: 'intrusion-prevention',
      title: 'Intrusion Prevention',
      description: 'Continuous monitoring that detects and blocks unauthorized access attempts in real time.',
    },
    {
      slug: 'secure-remote-access',
      title: 'Secure Remote Access',
      description: 'Encrypted VPN and access controls that protect remote and hybrid teams.',
    },
    {
      slug: 'wifi-security',
      title: 'Wireless Security',
      description: 'Locked-down Wi-Fi with guest isolation and rogue-device detection.',
    },
    {
      slug: 'network-monitoring-security',
      title: 'Continuous Monitoring',
      description: '24/7 visibility into network traffic, with alerts the moment something looks wrong.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Fast, available,',
    headlineAccent: 'and protected.',
    paragraphs: [
      'A well-secured network does more than block attacks — it keeps the business running. ITSco builds yours to do both.',
    ],
    bullets: [
      'Threats stopped at the perimeter, before they reach your data',
      "Breaches contained by segmentation, not free to spread",
      'Secure access for every location and remote worker',
      'Continuous monitoring that catches problems early',
    ],
    image: {
      src: '/images/hero/services/pexels-field-engineer-147254-442151.jpg',
      alt: 'Technicians working on network infrastructure',
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
        slug: 'managed-firewall',
        label: 'Managed Firewall',
        href: '/managed-firewall/',
        description: 'Properly configured, monitored firewalls as a reliable first line of defense.',
      },
      {
        slug: 'endpoint-security',
        label: 'Endpoint Security',
        href: '/endpoint-security/',
        description: 'Protection for every laptop, desktop, server, and mobile device.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Network security,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is network security different from endpoint security?',
      answer: [
        'Network security protects the connections and infrastructure that tie your systems together; endpoint security protects the individual devices. You need both — ITSco delivers them as one coordinated program.',
      ],
    },
    {
      question: "We already have a firewall. Isn't that enough?",
      answer: [
        'A firewall is one layer. Real network security adds segmentation, intrusion prevention, secure access, and continuous monitoring — because modern threats routinely get past a firewall alone.',
      ],
    },
  ],
  bookingUtm: 'network-security-bottom',
}
