// Content for /onsite-it-support-services/
//
// Template-only page — concise authored content for the rebuild.
// Primary keyword: "onsite IT support".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'On-Site IT Support Services | NC, SC & VA',
    description:
      'ITSco on-site IT support — experienced engineers dispatched for installations, cabling, hardware, and office moves across NC, SC & VA. Book a free consultation.',
    canonical: 'https://www.itsco.com/onsite-it-support-services/',
  },
  serviceName: 'On-Site IT Support',
  parent: { name: 'Managed IT Services', href: '/managed-it-services/' },
  hero: {
    eyebrow: 'Managed IT · On-Site Support',
    headlineLead: 'On-site IT support when the job',
    headlineAccent: 'needs hands on it.',
    body: "Most issues are solved remotely — but cabling, hardware, installations, and office moves need someone in the room. ITSco dispatches experienced engineers across NC, SC, and VA for the work that can't be done over a wire.",
    utmSuffix: 'onsite-it-support-hero',
  },
  heroImage: {
    src: '/images/supporting/services/pexels-mart-production-7255723.jpg',
    alt: 'ITSco engineer providing on-site IT support at a client office',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Remote-first,',
    headlineAccent: 'on-site when it counts.',
    paragraphs: [
      "Remote support is faster and cheaper for the everyday — but it has limits. When you need physical hands on equipment, ITSco sends an engineer who already knows your environment, so the visit is short, scheduled around your operations, and done right the first time.",
    ],
  },
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'The work that has to',
    headlineAccent: 'happen in person.',
  },
  capabilities: [
    {
      slug: 'onsite-dispatch',
      title: 'Scheduled On-Site Dispatch',
      description:
        'Experienced engineers dispatched to your location on a schedule that works around your operations.',
    },
    {
      slug: 'hardware-installation',
      title: 'Hardware Installation & Repair',
      description:
        'Workstations, servers, printers, and peripherals installed, configured, and repaired on-site.',
    },
    {
      slug: 'network-cabling',
      title: 'Network Cabling & Setup',
      description:
        'Structured cabling, switch and access-point placement, and physical network buildouts done cleanly.',
    },
    {
      slug: 'hands-on-troubleshooting',
      title: 'Hands-On Troubleshooting',
      description:
        "The issues a remote session can't reach — physical faults, connectivity, and hardware diagnostics — resolved in person.",
    },
    {
      slug: 'office-moves',
      title: 'Office Moves & Buildouts',
      description:
        'IT relocation planned and executed so a new or expanded office is ready to work from day one.',
    },
    {
      slug: 'scheduled-onsite-visits',
      title: 'Regular On-Site Visits',
      description:
        'Recurring on-site time for proactive checks, projects, and the in-person presence some teams prefer.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'The right fix, in person,',
    headlineAccent: 'the first time.',
    paragraphs: [
      'Pairing remote support with on-site coverage means you never have to choose between speed and a real solution. The everyday is handled instantly over a wire; the physical work is handled by an engineer who knows your setup — no second trips, no guesswork.',
    ],
    bullets: [
      'Coverage across North Carolina, South Carolina, and Virginia',
      'Visits scheduled around your operations, not the other way around',
      'Engineers who already know your environment',
      'Remote speed for the everyday, on-site depth when it matters',
    ],
    image: {
      src: '/images/supporting/services/pexels-shvetsa-5324853.jpg',
      alt: 'IT technician installing hardware at a client site',
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
        slug: 'managed-network-services',
        label: 'Managed Network Services',
        href: '/managed-network-services/',
        description: 'Proactive monitoring, design, and support across your entire network.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'On-site IT support,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'What areas do you cover for on-site visits?',
      answer: [
        'ITSco serves businesses across North Carolina, South Carolina, and Virginia from our Durham headquarters, with engineers dispatched throughout the Triangle and beyond.',
      ],
    },
    {
      question: 'When should we request on-site instead of remote support?',
      answer: [
        "Whenever the work is physical — hardware installs and repairs, cabling, network buildouts, or an office move. For everything else, remote support is faster. We'll always recommend the quickest route to a real fix.",
      ],
    },
  ],
  bookingUtm: 'onsite-it-support-bottom',
}
