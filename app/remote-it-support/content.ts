// Content for /remote-it-support/
//
// Rewrite page — fresh ROI-focused content authored for the rebuild.
// Primary keyword: "remote IT support".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Remote IT Support Services | Fast, Senior-Staffed Help Desk | ITSco',
    description:
      'ITSco remote IT support resolves most issues in minutes — secure remote access, a senior-staffed help desk, and predictable monthly cost. Book a free consultation.',
    canonical: 'https://www.itsco.com/remote-it-support/',
  },
  serviceName: 'Remote IT Support',
  parent: { name: 'Managed IT Services', href: '/managed-it-services/' },
  hero: {
    eyebrow: 'Managed IT · Remote Support',
    headlineLead: 'Remote IT support that',
    headlineAccent: 'resolves issues fast.',
    body: "When something breaks, your team can't wait for a technician to drive across town. ITSco's remote IT support resolves most issues the moment they're reported — no scheduling, no travel, no lost afternoon.",
    utmSuffix: 'remote-it-support-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-olly-3763998.jpg',
    alt: 'ITSco support engineer assisting a client remotely',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: "Most IT problems don't need",
    headlineAccent: 'someone on-site.',
    paragraphs: [
      'The fastest fix is the one that starts immediately. With secure remote access and a help desk staffed by senior engineers, ITSco diagnoses and resolves the large majority of issues within minutes of a ticket — keeping your people productive and your costs predictable.',
    ],
  },
  stats: [
    { value: '< 1 hr', label: 'Average response time for critical issues' },
    { value: '25+', label: 'Years supporting businesses across NC, SC & VA' },
    { value: '24/7', label: 'Remote monitoring and help desk coverage' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Full IT support,',
    headlineAccent: 'delivered remotely.',
  },
  capabilities: [
    {
      slug: 'rapid-remote-resolution',
      title: 'Rapid Remote Resolution',
      description:
        'Secure remote access lets our engineers take action the moment a ticket is opened — most issues are fixed before an on-site visit would even be scheduled.',
    },
    {
      slug: 'remote-helpdesk',
      title: 'Senior-Staffed Help Desk',
      description:
        'Every request reaches an experienced engineer who already knows your environment — not a script-reading first-tier queue.',
    },
    {
      slug: 'remote-patch-management',
      title: 'Patching & Updates',
      description:
        'Operating systems and applications kept current automatically, closing security gaps without interrupting your team’s day.',
    },
    {
      slug: 'endpoint-management',
      title: 'Endpoint Management',
      description:
        'Laptops and desktops monitored, configured, and protected from a central platform — wherever your people work.',
    },
    {
      slug: 'remote-security-monitoring',
      title: 'Security Monitoring',
      description:
        'Continuous monitoring for threats, failures, and anomalies so problems are caught and contained before they spread.',
    },
    {
      slug: 'distributed-team-support',
      title: 'Distributed Team Support',
      description:
        'Consistent, responsive IT support for remote and hybrid staff, branch offices, and field teams across every location.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Less downtime. Lower cost.',
    headlineAccent: 'Happier teams.',
    paragraphs: [
      'Every hour an employee waits on a broken laptop is an hour of payroll spent on nothing. Remote support compresses that wait to minutes — and removes the travel time, trip charges, and scheduling friction of dispatching a technician for routine fixes.',
    ],
    bullets: [
      'Issues resolved in minutes, not on the next available appointment',
      'No trip charges or travel time for routine fixes',
      'Predictable monthly cost instead of unpredictable hourly billing',
      'Senior engineers who already know your systems',
      'Support that scales with remote, hybrid, and multi-site teams',
    ],
    image: {
      src: '/images/supporting/services/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg',
      alt: 'Employee working productively with reliable IT support',
    },
  },
  related: {
    heading: 'Explore more managed IT services',
    links: [
      {
        slug: 'managed-it-services',
        label: 'Managed IT Services',
        href: '/managed-it-services/',
        description: 'The full ITSco managed IT program — monitoring, helpdesk, security, and more.',
      },
      {
        slug: 'raleigh-it-helpdesk',
        label: 'HelpDesk & Service Desk',
        href: '/raleigh-it-helpdesk/',
        description: 'Local, responsive help desk support staffed by senior engineers.',
      },
      {
        slug: 'it-staff-augmentation',
        label: 'IT Staff Augmentation',
        href: '/it-staff-augmentation/',
        description: 'Embedded engineers who supplement your in-house team when you need them.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Remote IT support,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'What kinds of issues can be handled remotely?',
      answer: [
        'The large majority — software errors, account and password issues, email and connectivity problems, performance slowdowns, updates, and configuration changes.',
        'When hardware genuinely needs hands on it, we coordinate on-site support. Everything else is resolved the moment it’s reported.',
      ],
    },
    {
      question: 'How fast will someone respond?',
      answer: [
        'Critical issues are typically picked up within the hour, and most routine tickets far sooner. Because our engineers already know your environment, response and resolution often happen in the same session.',
      ],
    },
    {
      question: 'Is remote access to our systems secure?',
      answer: [
        'Yes. Remote sessions use encrypted, access-controlled connections and are logged for accountability. You retain full visibility and control over what we access and when.',
      ],
    },
  ],
  bookingUtm: 'remote-it-support-bottom',
}
