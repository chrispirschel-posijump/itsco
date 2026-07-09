// Content for /employee-onboarding-offboarding/
//
// Template-only page — concise authored content for the rebuild.
// Primary keyword: "employee onboarding offboarding IT".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Employee IT Onboarding & Offboarding Services',
    description:
      'ITSco handles employee IT onboarding and offboarding — accounts, devices, and access provisioned fast and revoked completely. Book a free consultation.',
    canonical: 'https://www.itsco.com/employee-onboarding-offboarding/',
  },
  serviceName: 'Employee IT Onboarding & Offboarding',
  parent: { name: 'Managed IT Services', href: '/managed-it-services/' },
  hero: {
    eyebrow: 'Managed IT · Onboarding & Offboarding',
    headlineLead: 'IT onboarding and offboarding,',
    headlineAccent: 'done right.',
    body: 'Every new hire needs accounts, devices, and access on day one — and every departure needs all of it cleanly and completely revoked. ITSco handles both, so people are productive fast and nothing is left open behind them.',
    utmSuffix: 'employee-onboarding-offboarding-hero',
  },
  heroImage: {
    src: '/images/hero/services/sophie-paterson-sgCfoY0xXwg-unsplash.jpg',
    alt: 'New employee set up and ready to work on their first day',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: "Two moments where IT can't",
    headlineAccent: 'drop the ball.',
    paragraphs: [
      "A slow onboarding wastes a new hire's first week. A sloppy offboarding leaves credentials, data, and licenses exposed long after someone is gone. ITSco turns both into a consistent, documented process — fast for new starters, airtight for departures.",
    ],
  },
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Every step of the employee',
    headlineAccent: 'IT lifecycle.',
  },
  capabilities: [
    {
      slug: 'account-provisioning',
      title: 'Account Provisioning',
      description:
        "Email, directory, and application accounts created and configured before a new hire's first morning.",
    },
    {
      slug: 'device-setup',
      title: 'Device Setup & Imaging',
      description:
        'Laptops and workstations procured, imaged, and ready to use — with the right software and security already in place.',
    },
    {
      slug: 'access-management',
      title: 'Role-Based Access',
      description:
        'Each person granted exactly the systems and permissions their role requires — no more, no less.',
    },
    {
      slug: 'secure-offboarding',
      title: 'Secure Offboarding',
      description:
        'On a departure, every account is disabled and every credential revoked promptly and completely, on a documented checklist.',
    },
    {
      slug: 'data-handover',
      title: 'Data Handover',
      description:
        'Files, mailboxes, and project data preserved and transferred to the right owner so nothing is lost when someone leaves.',
    },
    {
      slug: 'license-recovery',
      title: 'License & Asset Recovery',
      description:
        'Software licenses reclaimed and hardware returned to inventory, so you stop paying for seats no one uses.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Productive on day one.',
    headlineAccent: 'Closed out on the last.',
    paragraphs: [
      'Standardizing onboarding and offboarding removes the scramble — and the risk. New hires contribute sooner, departing employees leave no open doors, and every step is recorded for compliance and audit.',
    ],
    bullets: [
      'New hires fully equipped before their first day',
      'No orphaned accounts or lingering access after a departure',
      'Reclaimed licenses and hardware off your cost line',
      'A documented, repeatable process for every hire and exit',
    ],
    image: {
      src: '/images/supporting/services/pexels-shvets-production-8413332.jpg',
      alt: 'HR and IT coordinating an employee onboarding process',
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
        slug: 'asset-lifecycle-management',
        label: 'Asset Lifecycle Management',
        href: '/asset-lifecycle-management/',
        description: 'Procurement, deployment, and secure end-of-life disposition for IT assets.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Onboarding and offboarding,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How far in advance do you need notice for a new hire?',
      answer: [
        'A few business days is ideal — enough time to procure or image a device and provision accounts. We can move faster when needed; the earlier we know, the smoother day one will be.',
      ],
    },
    {
      question: 'What does offboarding cover?',
      answer: [
        "Disabling accounts, revoking access and credentials, preserving and transferring the employee's data, recovering hardware, and reclaiming software licenses — each step tracked on a checklist you can hand to HR or an auditor.",
      ],
    },
  ],
  bookingUtm: 'employee-onboarding-offboarding-bottom',
}
