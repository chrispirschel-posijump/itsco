// Content for /business-continuity-planning/
// Rewrite page — new page (in Nav, no live equivalent). Fresh ROI-focused
// content. Primary keyword: "business continuity planning".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Business Continuity Planning Services',
    description:
      'ITSco business continuity planning — keep critical operations running through an outage, attack, or disaster, and recover fast. Book a free consultation.',
    canonical: 'https://www.itsco.com/business-continuity-planning/',
  },
  serviceName: 'Business Continuity Planning',
  parent: { name: 'IT Strategy & Consulting', href: '/it-management-consulting/' },
  hero: {
    eyebrow: 'Strategy · Business Continuity',
    headlineLead: 'A plan for the day',
    headlineAccent: 'everything goes wrong.',
    body: "Outages, cyberattacks, and disasters aren't a question of if. Business continuity planning makes sure that when one hits, your business keeps running — and recovers fast.",
    utmSuffix: 'business-continuity-planning-hero',
  },
  heroImage: {
    src: '/images/supporting/industries/pexels-fauxels-3184299.jpg',
    alt: 'ITSco team building a business continuity plan',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Hope is not',
    headlineAccent: 'a continuity plan.',
    paragraphs: [
      'Most businesses assume they would cope with a major disruption. Few have actually planned and tested it. ITSco builds and tests a continuity plan so the answer is not a guess.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of IT resilience and recovery expertise' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'A continuity plan',
    headlineAccent: 'that actually holds.',
  },
  capabilities: [
    {
      slug: 'bcp-risk-assessment',
      title: 'Business Impact Analysis',
      description: 'Which systems and processes matter most — and what an hour of downtime really costs.',
    },
    {
      slug: 'bcp-continuity-strategy',
      title: 'Continuity Strategy',
      description: 'A practical plan to keep critical operations running through a disruption.',
    },
    {
      slug: 'bcp-recovery-planning',
      title: 'Disaster Recovery Planning',
      description: 'Defined recovery steps, targets, and responsibilities for restoring systems and data.',
    },
    {
      slug: 'bcp-backup',
      title: 'Backup & Data Protection',
      description: 'Resilient, tested backups so a disruption never means permanent data loss.',
    },
    {
      slug: 'bcp-testing',
      title: 'Plan Testing & Drills',
      description: 'Continuity plans tested and rehearsed — because an untested plan is just a document.',
    },
    {
      slug: 'bcp-maintenance',
      title: 'Plan Maintenance',
      description: 'The plan kept current as your systems, team, and risks change.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Resilience you',
    headlineAccent: 'can count on.',
    paragraphs: [
      'A continuity plan turns a potential catastrophe into a managed event — one your team has rehearsed and knows how to handle.',
    ],
    bullets: [
      'Critical operations that survive an outage or attack',
      'Recovery measured in hours, not days or weeks',
      "A plan that's been tested, not just written",
      'Confidence for leadership, customers, and auditors',
    ],
    image: {
      src: '/images/supporting/services/pexels-theo-decker-5946207.jpg',
      alt: 'Resilient data infrastructure for business continuity',
    },
  },
  related: {
    heading: 'Explore related services',
    links: [
      {
        slug: 'backup-disaster-recovery',
        label: 'Backup & Disaster Recovery',
        href: '/backup-disaster-recovery/',
        description: 'Automated backups and tested recovery that protect against data loss.',
      },
      {
        slug: 'it-assessments-strategies',
        label: 'IT Assessments & Strategies',
        href: '/it-assessments-strategies/',
        description: 'In-depth evaluations of infrastructure, security, and resilience.',
      },
      {
        slug: 'it-management-consulting',
        label: 'Strategy & Consulting Overview',
        href: '/it-management-consulting/',
        description: 'The full ITSco strategy program — leadership, roadmaps, and assessments.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Business continuity planning,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is this different from backup and disaster recovery?',
      answer: [
        'Backup and disaster recovery restore your systems and data. Business continuity is the wider plan — keeping the whole business operating during a disruption, including people, processes, and communication. ITSco handles both, and continuity planning ties them together.',
      ],
    },
    {
      question: "We have backups — isn't that enough?",
      answer: [
        "Backups are essential but not sufficient. They restore data; they don't tell your team what to do, in what order, or how to keep serving customers while systems are down. A continuity plan does — and testing proves it works.",
      ],
    },
  ],
  bookingUtm: 'business-continuity-planning-bottom',
}
