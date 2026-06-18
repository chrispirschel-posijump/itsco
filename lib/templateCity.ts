// Templated content generator for thin "Template only" Local SEO city pages.
//
// These pages are explicitly templated in INVENTORY.csv — same structure and
// copy across cities, with the city name swapped in. Higher-traffic cities use
// verbatim per-city content files instead (see app/managed-it-services-*/).

import type { CityServiceContent } from '@/components/CityServicePage'

interface TemplateCityInput {
  name: string
  slug: string
  region: string
  heroImage: { src: string; alt: string }
  whyUsImage: { src: string; alt: string }
  securityImage: { src: string; alt: string }
  // Optional headline overrides so templated pages don't read identically.
  heroAccent?: string
  positioningAccent?: string
  whyUsLead?: string
  whyUsAccent?: string
  securityLead?: string
  securityAccent?: string
  // Optional service-type / URL overrides for non-managed-IT template pages
  // (e.g. it-support, it-company, it-outsourcing). Default to managed IT.
  serviceNoun?: string       // e.g. 'IT support' — used mid-headline/body
  serviceNounTitle?: string  // e.g. 'IT Support' — used in meta title + eyebrow
  canonicalPath?: string     // e.g. '/it-support-garner/'
  utmBase?: string           // e.g. 'it-support-garner'
}

export function makeTemplateCityContent(c: TemplateCityInput): CityServiceContent {
  const noun = c.serviceNoun ?? 'Managed IT services'
  const nounTitle = c.serviceNounTitle ?? 'Managed IT Services'
  const canonical = `https://www.itsco.com${c.canonicalPath ?? `/managed-it-services-${c.slug}/`}`
  const utm = c.utmBase ?? `managed-it-${c.slug}`
  return {
    meta: {
      title: `${nounTitle} in ${c.name}, NC | ITSco`,
      description: `ITSco delivers ${noun.toLowerCase()} in ${c.name}, NC — monitoring, cybersecurity, help desk, and cloud — with predictable pricing and measurable ROI. Book a free consultation.`,
      canonical,
    },
    hero: {
      eyebrow: `${nounTitle} · ${c.name}, NC`,
      headlineLead: `${noun} in ${c.name} that`,
      headlineAccent: c.heroAccent ?? 'control costs and reduce risk.',
      body: `Let ITSco manage your IT infrastructure so you can focus on running and growing your ${c.name} business. As an established North Carolina IT company, we deliver proactive, fixed-rate ${noun.toLowerCase()} built around measurable business outcomes.`,
      utmSuffix: `${utm}-hero`,
    },
    heroImage: c.heroImage,
    capabilitiesHeading: {
      eyebrow: 'Full-Suite Business IT Services',
      headlineLead: `Comprehensive ${noun.toLowerCase()}`,
      headlineAccent: `in ${c.name}, NC.`,
    },
    capabilities: [
      {
        slug: 'remote-monitoring',
        title: 'Remote Monitoring',
        description:
          'Our IT services team remotely monitors and proactively manages your network and devices, detecting and resolving issues before they can impact your business.',
      },
      {
        slug: 'cyber-security-management',
        title: 'Cyber Security Management',
        description:
          'Mitigate business risk with a multi-layered cybersecurity defense — including SIEM and SOC services, firewall management, and endpoint protection.',
      },
      {
        slug: 'help-desk-services',
        title: 'Help Desk Services',
        description:
          'Reduce end-user frustration with knowledgeable, courteous help desk support, available both remotely and on-site.',
      },
      {
        slug: 'cloud-computing',
        title: 'Cloud Services',
        description:
          'Improve reliability and scalability with cloud solutions our engineers plan, migrate, secure, and manage for you.',
      },
      {
        slug: 'custom-slas',
        title: 'Customized SLAs',
        description:
          'Choose only the services you need, with guaranteed response times defined in a service level agreement built around your business.',
      },
      {
        slug: 'disaster-recovery',
        title: 'Disaster Recovery',
        description:
          'Protect your data and operations from man-made and natural disasters with secure backups and tested disaster recovery plans.',
      },
      {
        slug: 'vulnerability-management',
        title: 'Vulnerability Management',
        description:
          'Reduce risk to your infrastructure with automated vulnerability scanning and proactive, managed remediation.',
      },
      {
        slug: 'it-automation',
        title: 'IT Automation',
        description:
          'Work smarter — reduce errors, effort, and cost by automating routine IT tasks and enforcing security standards.',
      },
      {
        slug: 'it-project-management',
        title: 'IT Project Management',
        description:
          'Our seasoned engineers and technical project managers deliver your IT projects on time, on budget, and aligned with your goals.',
      },
    ],
    positioning: {
      eyebrow: 'Predictable Pricing, Measurable ROI',
      headlineLead: `IT services in ${c.name} that`,
      headlineAccent: c.positioningAccent ?? 'pay for themselves.',
      paragraphs: [
        `For your ${c.name} business, technology should be more than a cost center — it should be an engine of productivity and growth. ITSco's managed IT services are designed to improve functionality, reduce technical debt, and make every IT dollar work harder.`,
        `With customized, fixed-rate pricing, you can plan your IT budget with confidence and focus your spending on the services that matter most to your business.`,
      ],
    },
    stats: [
      { value: '60%', label: 'Of our clients have been with us for 5+ years' },
      { value: '25+', label: `Years serving ${c.region} & North Carolina` },
      { value: '0%', label: 'Of our clients have experienced a serious security breach' },
    ],
    whyUs: {
      eyebrow: 'Why ITSco',
      headlineLead: c.whyUsLead ?? 'A managed services provider',
      headlineAccent: c.whyUsAccent ?? `${c.name} businesses trust.`,
      paragraphs: [
        `ITSco has delivered trusted IT services across North Carolina for more than 25 years. We've built our business on engineering excellence, honesty, and a genuine dedication to customer success.`,
        `Our results speak for themselves: 60% of our clients have been with us for five or more years, and over a third have been with us for more than a decade — in an industry where 40% of businesses look to switch providers every year.`,
        `When you partner with ITSco, you get a locally based team that treats your ${c.name} business as if it were their own — combining senior engineering talent with responsive, personal service.`,
      ],
      image: c.whyUsImage,
    },
    security: {
      eyebrow: `Cybersecurity in ${c.name}`,
      headlineLead: c.securityLead ?? 'Defend your business against',
      headlineAccent: c.securityAccent ?? 'an evolving threat landscape.',
      paragraphs: [
        `Ransomware, phishing, and data breaches are a constant and evolving threat to businesses of every size. Improving your cybersecurity defenses needs to be an ongoing priority — not an afterthought.`,
        `Partner with ITSco to design and deploy a layered, proactive defense strategy that helps keep your ${c.name} business secure across North Carolina, South Carolina, and Virginia. None of our managed services clients has ever experienced a serious security breach.`,
      ],
      image: c.securityImage,
    },
    // Default "Related services" block — links templated city pages out to the
    // four ITSco service pillars + the ROI hub. Without this, templated city
    // pages render no internal-services links at the bottom, hurting site-wide
    // internal link equity. Per-city content files can override by setting
    // `related` directly.
    related: {
      heading: `More IT services available in ${c.name} and across North Carolina`,
      links: [
        {
          slug: 'managed-it-services',
          label: 'Managed IT Services',
          href: '/managed-it-services/',
          description:
            'Predictable, fixed-rate IT management with proactive monitoring, helpdesk, and 24/7 cybersecurity — sized for businesses across NC, SC, and VA.',
        },
        {
          slug: 'cybersecurity',
          label: 'Cybersecurity & Compliance',
          href: '/cybersecurity/',
          description:
            'Managed SOC, MDR, firewall, vulnerability management, and continuous compliance (SOC 2, HIPAA, PCI DSS, NIST 800-171) as one program.',
        },
        {
          slug: 'cloud-services',
          label: 'Cloud Services',
          href: '/cloud-services/',
          description:
            'Cloud strategy, migration, and managed cloud across Azure, AWS, and hybrid — with FinOps and identity wrapped in.',
        },
        {
          slug: 'maximize-roi',
          label: 'Maximize IT ROI',
          href: '/maximize-roi-with-managed-it-services/',
          description:
            'See how ITSco measures the ROI of managed IT services across four dimensions — and what to expect from your engagement.',
        },
      ],
    },
    // City slug for the nearby-cities block. lib/nearbyCities.ts maps the
    // adjacency; pages without an entry there render no nearby-cities section.
    citySlug: c.slug,
    bookingUtm: `${utm}-bottom`,
  }
}
