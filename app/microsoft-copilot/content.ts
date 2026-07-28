// Content for /microsoft-copilot/
// Rewrite page — fresh ROI-focused content. Primary keyword: "Microsoft Copilot".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Microsoft Copilot Services | Deployment & Adoption',
    description:
      'ITSco helps you deploy Microsoft Copilot securely — readiness, data governance, and adoption so the AI actually saves your team time. Book a free consultation.',
    canonical: 'https://www.itsco.com/microsoft-copilot',
  },
  serviceName: 'Microsoft Copilot',
  parent: { name: 'Microsoft Solutions', href: '/microsoft-solutions/' },
  hero: {
    eyebrow: 'Microsoft · Copilot',
    headlineLead: 'Microsoft Copilot,',
    headlineAccent: 'deployed so it pays off.',
    body: "Copilot brings AI into the Microsoft tools your team already uses. ITSco makes sure it's rolled out securely, adopted properly, and actually saving time.",
    utmSuffix: 'microsoft-copilot-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-thisisengineering-3861951.jpg',
    alt: 'Working with AI-assisted Microsoft Copilot tools',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'AI in the apps your',
    headlineAccent: 'team already lives in.',
    paragraphs: [
      'Copilot can draft, summarize, analyze, and automate across Word, Excel, Outlook, and Teams. But the value depends on a secure rollout, clean data, and real adoption — which is exactly where ITSco comes in.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of IT and Microsoft expertise' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: 'How We Help',
    headlineLead: 'Copilot, rolled out',
    headlineAccent: 'the right way.',
  },
  capabilities: [
    {
      slug: 'copilot-readiness',
      title: 'Copilot Readiness Assessment',
      description: 'A check of your data, licensing, and security posture before you roll Copilot out.',
    },
    {
      slug: 'copilot-deployment',
      title: 'Secure Deployment',
      description: 'Copilot enabled with the access controls and data boundaries it needs to be safe.',
    },
    {
      slug: 'copilot-data-governance',
      title: 'Data Governance',
      description: 'Permissions and data hygiene sorted first — so Copilot surfaces the right things, not the wrong ones.',
    },
    {
      slug: 'copilot-integration',
      title: 'Microsoft 365 Integration',
      description: 'Copilot working across Word, Excel, Outlook, Teams, and the rest of your 365 suite.',
    },
    {
      slug: 'copilot-training',
      title: 'Training & Adoption',
      description: 'Hands-on training so your team uses Copilot well — and actually uses it.',
    },
    {
      slug: 'copilot-optimization',
      title: 'Ongoing Optimization',
      description: 'Usage reviewed and tuned so Copilot keeps delivering real time savings.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'AI that earns',
    headlineAccent: 'its license fee.',
    paragraphs: [
      'Copilot licenses are not cheap. A guided rollout is the difference between a line item and a genuine productivity gain.',
    ],
    bullets: [
      'A secure rollout that respects your data boundaries',
      'Permissions cleaned up before Copilot can over-share',
      'A team trained to actually get value from it',
      'Usage measured against real time saved',
    ],
    image: {
      src: '/images/hero/services/pexels-divinetechygirl-1181207.jpg',
      alt: 'AI-assisted productivity with Microsoft Copilot',
    },
  },
  related: {
    heading: 'Explore more services',
    links: [
      {
        slug: 'microsoft-365-services',
        label: 'Microsoft 365 Services',
        href: '/microsoft-365-services/',
        description: 'Deployment, management, and security across the full Microsoft 365 suite.',
      },
      {
        slug: 'ai-automation',
        label: 'AI & Automation',
        href: '/ai-automation/',
        description: 'Practical AI strategy and process automation for measurable business gains.',
      },
      {
        slug: 'microsoft-solutions',
        label: 'Microsoft Solutions Overview',
        href: '/microsoft-solutions/',
        description: 'The full ITSco Microsoft program — 365, Azure, Teams, and more.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Microsoft Copilot,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'Is Microsoft Copilot safe with our company data?',
      answer: [
        'It can be — but only with the right groundwork. Copilot respects existing permissions, which means loose or messy permissions are a real risk. ITSco tightens data governance first, so Copilot only surfaces what each person should see.',
      ],
    },
    {
      question: 'Will Copilot actually save us time?',
      answer: [
        'For the right tasks — drafting, summarizing, analyzing, searching — yes, meaningfully. The gains depend on adoption. ITSco focuses the rollout on real use cases and trains your team, so the licenses translate into time saved.',
      ],
    },
  ],
  bookingUtm: 'microsoft-copilot-bottom',
}
