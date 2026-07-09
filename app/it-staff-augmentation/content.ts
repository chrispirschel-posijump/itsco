// Content for /it-staff-augmentation/
//
// Rewrite page — new page (no live equivalent). Fresh ROI-focused content
// authored for the rebuild. Primary keyword: "IT staff augmentation".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'IT Staff Augmentation Services | Scale Your IT Team',
    description:
      'ITSco IT staff augmentation places experienced engineers alongside your team for projects, transitions, and workload peaks — no hiring overhead. Book a free consultation.',
    canonical: 'https://www.itsco.com/it-staff-augmentation/',
  },
  serviceName: 'IT Staff Augmentation',
  parent: { name: 'Managed IT Services', href: '/managed-it-services/' },
  hero: {
    eyebrow: 'Managed IT · Staff Augmentation',
    headlineLead: 'IT staff augmentation that',
    headlineAccent: 'scales with your team.',
    body: 'When a project, transition, or workload spike outpaces your in-house team, ITSco places experienced engineers alongside them — ready to contribute on day one, for exactly as long as you need.',
    utmSuffix: 'it-staff-augmentation-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-mizunokozuki-12902858.jpg',
    alt: 'ITSco engineer working alongside an in-house IT team',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Add capacity without',
    headlineAccent: 'adding headcount.',
    paragraphs: [
      'Hiring is slow, full-time engineers are expensive, and project demand rarely matches a fixed payroll. Staff augmentation gives you senior IT talent on the timeline you actually need it — supplementing your team through migrations, rollouts, and peak periods, then scaling back when the work is done.',
    ],
  },
  stats: [
    { value: '25+', label: 'Years of IT engineering depth to draw from' },
    { value: 'Days', label: 'To place an engineer — not the months a hire takes' },
    { value: '0', label: 'Recruiting, benefits, or training overhead to absorb' },
  ],
  capabilitiesHeading: {
    eyebrow: 'How It Works',
    headlineLead: 'Senior IT talent,',
    headlineAccent: 'on your terms.',
  },
  capabilities: [
    {
      slug: 'embedded-engineers',
      title: 'Embedded Engineers',
      description:
        'Experienced ITSco engineers who work as part of your team — in your tools, your processes, and your reporting lines.',
    },
    {
      slug: 'project-surge-support',
      title: 'Project & Surge Support',
      description:
        "Extra hands for migrations, rollouts, and deadlines, so a big project doesn't stall the rest of your roadmap.",
    },
    {
      slug: 'specialized-skills',
      title: 'Specialized Skills on Demand',
      description:
        'Access niche expertise — cloud, security, networking, infrastructure — without carrying those salaries year-round.',
    },
    {
      slug: 'flexible-engagement',
      title: 'Flexible Engagements',
      description:
        'Part-time, full-time, short-term, or ongoing — engagements sized to the work, not to a fixed contract.',
    },
    {
      slug: 'managed-handoff',
      title: 'Managed Onboarding & Handoff',
      description:
        'Structured ramp-up and documentation mean clean transitions in and out, with no knowledge lost when the engagement ends.',
    },
    {
      slug: 'scalable-capacity',
      title: 'Scalable Capacity',
      description:
        'Scale up for peak demand and back down when it passes — your IT capacity tracks your actual workload.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'The expertise of a hire,',
    headlineAccent: 'without the commitment.',
    paragraphs: [
      'A full-time IT engineer costs far more than salary alone — recruiting, benefits, training, and the risk of turnover all add up, and the role is rarely busy every week of the year. Staff augmentation converts that fixed cost into flexible capacity you turn on and off as the work demands.',
    ],
    bullets: [
      'Senior talent in days, not the months a hire takes',
      'No recruiting, benefits, or training overhead',
      'Coverage for projects, transitions, and workload peaks',
      'In-house knowledge stays in-house — your team keeps ownership',
      'Capacity that scales down as cleanly as it scales up',
    ],
    image: {
      src: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
      alt: 'IT team collaborating on a project plan',
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
        slug: 'remote-it-support',
        label: 'Remote IT Support',
        href: '/remote-it-support/',
        description: 'Fast, senior-staffed remote support that resolves most issues in minutes.',
      },
      {
        slug: 'hardware-software-support',
        label: 'Server Administration & Support',
        href: '/server-admin-and-support-services/',
        description: 'End-to-end server administration backed by certified engineers, 24/7.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'IT staff augmentation,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is staff augmentation different from fully managed IT?',
      answer: [
        'Managed IT places the day-to-day operation of your environment with ITSco. Staff augmentation keeps your in-house team in charge and adds our engineers to their bench.',
        'Many clients use both — managed services for the baseline, augmentation for projects and peaks.',
      ],
    },
    {
      question: 'How quickly can an engineer start?',
      answer: [
        'Typically within days. Because we draw from an existing team of engineers rather than recruiting from scratch, you skip the months-long hiring cycle entirely.',
      ],
    },
    {
      question: 'What happens when the engagement ends?',
      answer: [
        'We document the work and hand it off cleanly to your team, so nothing is lost. Engagements can be extended, scaled, or wound down on your timeline.',
      ],
    },
  ],
  bookingUtm: 'it-staff-augmentation-bottom',
}
