// Content for /hipaa-compliance-services
// New page (Nov 2026). Compliance Services pillar, alongside Compliance as a
// Service. DRAFT: noindex + excluded from the sitemap until Mike approves.
//
// Why this page exists: in the 12 months to Nov 1, 2026 ITSco appeared 1,120
// times for HIPAA searches with 0 clicks, spread across 10+ pages (Raleigh
// cybersecurity, Durham/Raleigh managed IT, the healthcare page, city pages)
// because no page owned the topic.
//
// Keyword targets (US monthly volume / difficulty, DataForSEO Nov 2026):
//   primary   hipaa compliance services (480 / 33), hipaa compliance consultant
//             and consulting (880 each / 0), hipaa compliant it services (50 / 0)
//             plus the Durham/Raleigh variants Search Console already shows
//   secondary hipaa risk assessment (480 / 14), hipaa security risk assessment
//             (260 / 7), hipaa compliant email (1,600 / 8), hipaa compliance as
//             a service (40), hipaa compliant backup (50), hipaa penetration
//             testing (50)
//   do not target here: "hipaa compliance checklist" (owned by the Aug 17 blog
//   post), "healthcare managed it services" (owned by
//   /healthcare-managed-it-services, the industry page).
//
// Regulatory facts verified Nov 4, 2026: the HIPAA Security Rule NPRM
// (Federal Register, Jan 6, 2025) is still a proposal; the regulatory agenda
// targets a final rule in 2027; the current Security Rule remains in force.

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    // Root layout template appends " | ITSco".
    title: 'HIPAA Compliance Services for Healthcare Practices in NC',
    description:
      'HIPAA compliance services and consulting for North Carolina practices: risk assessments, safeguards, Microsoft 365, and 24/7 monitoring, managed year-round.',
    canonical: 'https://www.itsco.com/hipaa-compliance-services',
  },
  serviceName: 'HIPAA Compliance Services',
  parent: { name: 'Compliance as a Service', href: '/compliance-as-a-service' },
  hero: {
    eyebrow: 'Compliance Services · HIPAA',
    headlineLead: 'HIPAA compliance, managed',
    headlineAccent: 'year-round, not just at audit time.',
    body: 'For medical practices, specialty groups, and the businesses that handle their patient data. ITSco runs the technology side of HIPAA as an ongoing service, so you stay audit-ready every month instead of scrambling before an audit.',
    utmSuffix: 'hipaa-compliance-services-hero',
  },
  heroImage: {
    src: '/images/supporting/industries/vitaly-gariev-2kopEHjST-g-unsplash.jpg',
    alt: 'Two healthcare professionals reviewing patient information on a tablet',
  },
  intro: {
    eyebrow: 'Why It Matters',
    headlineLead: 'HIPAA is not a one-time project.',
    headlineAccent: 'Your risk changes every month.',
    paragraphs: [
      'Every new hire, laptop, cloud app, and vendor changes how patient data moves through your practice, and the HIPAA Security Rule expects your safeguards to keep pace. When the HHS Office for Civil Rights investigates a breach, one of the first documents it asks for is your [security risk analysis](https://www.hhs.gov/hipaa/for-professionals/security/guidance/risk-analysis/index.html), and a missing or outdated one is among the failures it cites most often.',
      'ITSco handles the technology side of HIPAA: the risk assessment, the safeguards it calls for, the documentation that proves them, and the monitoring that keeps them in place. Your attorney and compliance officer decide what HIPAA requires of your organization. We make sure your systems meet it, and we build that work into a predictable monthly cost.',
      'The rules are also changing. In January 2025, HHS [proposed a major update to the Security Rule](https://www.federalregister.gov/documents/2025/01/06/2024-30983/hipaa-security-rule-to-strengthen-the-cybersecurity-of-electronic-protected-health-information) with stricter requirements for encryption, multi-factor authentication, asset inventories, and annual compliance audits. It is not final yet, and regulators now [target 2027](https://www.hipaajournal.com/final-rule-implementing-hipaa-security-rule-updates-edges-closer/), but practices that close those gaps now will not face a rushed project later.',
    ],
  },
  stats: [
    { value: '1996', label: 'Protecting Triangle businesses since' },
    { value: '0', label: 'Clients with a serious security breach' },
    { value: '60%', label: 'Of clients with ITSco 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Every HIPAA safeguard,',
    headlineAccent: 'managed and documented.',
  },
  capabilities: [
    {
      slug: 'cyber-risk-assessment',
      title: 'HIPAA Security Risk Assessment',
      description:
        'A documented, dated analysis of every system that touches patient data, with a prioritized plan to close the gaps. Refreshed every year and after any major change.',
    },
    {
      slug: 'caas-policy-management',
      title: 'Policies & Documentation',
      description:
        'Written safeguards, procedures, and evidence kept current, so you can show an auditor what you do instead of describing it.',
    },
    {
      slug: 'endpoint-security',
      title: 'Technical Safeguards',
      description:
        'Multi-factor authentication, encryption, endpoint protection, and access controls on every device and account that handles protected health information.',
    },
    {
      slug: 'managed-soc',
      title: '24/7 Monitoring & Response',
      description:
        'Around-the-clock threat detection and a documented incident response process, so a suspicious login is handled before it becomes a reportable breach.',
    },
    {
      slug: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description:
        'Encrypted, tested backups and a recovery plan that keep patient records available after ransomware or an outage, as HIPAA’s contingency requirements expect.',
    },
    {
      slug: 'microsoft-365-services',
      title: 'HIPAA-Ready Microsoft 365',
      description:
        'Email encryption, data loss prevention, retention, and access settings configured for patient data, so your email and files hold up to a HIPAA review.',
    },
    {
      slug: 'compliance-management',
      title: 'Vendor & BAA Management',
      description:
        'An inventory of every vendor that touches patient data and the Business Associate Agreements that should cover them, from your EHR to your backup service.',
    },
    {
      slug: 'caas-audit-prep',
      title: 'Training & Audit Readiness',
      description:
        'Staff security training with completion records, plus an evidence package ready for an auditor, insurer, or acquirer whenever they ask.',
    },
  ],
  outcomes: {
    eyebrow: 'Client Story · EmergeOrtho',
    headlineLead: 'HIPAA-aligned from',
    headlineAccent: 'the first design decision.',
    tone: 'payoff',
    paragraphs: [
      'EmergeOrtho, a multi-location orthopedic practice in North Carolina, wanted to operate its mobile MRI trucks remotely so one technologist could run scans across several sites. ITSco designed a network that holds up on the highway, encrypted patient data in transit, tied access to Active Directory, and built the whole system into EmergeOrtho’s HIPAA-compliant infrastructure.',
      'The result was more patient access and lower cost, with compliance designed in from the start. [Read the full EmergeOrtho case study](/case-studies/emerge-ortho-mobile-mri-remote-operations).',
    ],
    bullets: [
      '40 extra hours of MRI scanning per week, per truck',
      '30 to 40% lower labor costs',
      'A 4 to 5 month project payback',
      'Patient data encrypted in transit, with access tied to Active Directory',
    ],
    image: {
      src: '/images/case-studies/healthcare.jpg',
      alt: 'Healthcare imaging technology',
    },
  },
  related: {
    heading: 'Explore more healthcare and compliance services',
    links: [
      {
        slug: 'compliance-as-a-service',
        label: 'Compliance as a Service',
        href: '/compliance-as-a-service',
        description: 'Ongoing compliance for HIPAA, CMMC, SOC 2, GovRAMP, and the frameworks other providers turn down.',
      },
      {
        slug: 'healthcare-managed-it-services',
        label: 'Healthcare IT Services',
        href: '/healthcare-managed-it-services',
        description: 'Managed IT built for practices, specialty groups, and healthcare organizations.',
      },
      {
        slug: 'cyber-risk-assessment',
        label: 'Cyber Risk Assessment',
        href: '/cyber-risk-assessment',
        description: 'A clear view of your exposure and a prioritized plan to close it.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'HIPAA compliance,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'What do HIPAA compliance services include?',
      answer: [
        'HIPAA compliance services cover the technology side of the Security Rule: a documented security risk assessment, the safeguards it calls for (encryption, multi-factor authentication, monitoring, and backups), written policies and evidence, staff training, vendor Business Associate Agreements, and an annual reassessment. ITSco runs all of it as an ongoing service, not a one-time project.',
      ],
    },
    {
      question: 'What is a HIPAA security risk assessment, and how often do we need one?',
      answer: [
        'It is a documented review of every system that stores or moves patient data, the threats to each, and what you are doing about them. HIPAA requires one, and investigators ask for it early. Update it at least once a year and after any major change, such as a new EHR, office, or cloud system.',
      ],
    },
    {
      question: 'Does our IT provider need to sign a Business Associate Agreement?',
      answer: [
        'Yes, if they can access protected health information, and nearly every IT provider can. A Business Associate Agreement makes the provider legally responsible for safeguarding that data. ITSco signs BAAs with healthcare clients and helps you inventory the other vendors that need one, from your EHR to your email and backup services.',
      ],
    },
    {
      question: 'Is Microsoft 365 HIPAA compliant?',
      answer: [
        'Microsoft 365 can support HIPAA compliance, but not out of the box. Microsoft will sign a Business Associate Agreement, and your tenant still needs the right settings: email encryption, multi-factor authentication, data loss prevention, retention, and access controls. Default setups are a common gap. ITSco configures and monitors these settings for healthcare clients.',
      ],
    },
    {
      question: 'What is changing in the HIPAA Security Rule?',
      answer: [
        'HHS [proposed a major Security Rule update](https://www.federalregister.gov/documents/2025/01/06/2024-30983/hipaa-security-rule-to-strengthen-the-cybersecurity-of-electronic-protected-health-information) in January 2025, adding stricter requirements for encryption, multi-factor authentication, asset inventories, and annual compliance audits. It is not final; regulators now target 2027, and the current rule stays in force until then. Practices that close those gaps now avoid a rushed project later.',
      ],
    },
    {
      question: 'Who has to comply with HIPAA?',
      answer: [
        'Covered entities, meaning healthcare providers, health plans, and clearinghouses, plus their business associates: any vendor that handles patient data on their behalf, such as billing companies, IT providers, and law firms. Business associates are directly liable for Security Rule violations, so HIPAA reaches well beyond the practice itself.',
      ],
    },
    {
      question: 'How long does it take to become HIPAA compliant?',
      answer: [
        'Most small and mid-size practices can close their highest-risk gaps in about 90 days: the risk assessment first, then the critical safeguards, then documentation and training. Staying compliant is ongoing after that. Our [90-day HIPAA roadmap](/blog/hipaa-compliance-90-day-roadmap-small-practice) walks through the sequence step by step.',
      ],
    },
    {
      question: 'Can ITSco work alongside our existing IT person or team?',
      answer: [
        'Yes. Many practices keep an internal IT person for day-to-day support and bring in ITSco for the compliance work: the risk assessment, security monitoring, documentation, and audit preparation. We share the evidence and the remediation plan, so your team always knows what is covered and who owns each task.',
      ],
    },
    {
      question: 'How are HIPAA compliance services priced?',
      answer: [
        'As a predictable monthly fee built into your IT services, not a surprise project before an audit. The price depends on your users and locations, the systems that hold patient data, and the safeguards already in place. Our [IT Investment Calculator](/it-investment-calculator) estimates your monthly IT cost in minutes, and a free consultation turns that into a number for your practice.',
      ],
    },
    {
      question: 'Do you work with healthcare organizations outside Raleigh and Durham?',
      answer: [
        'Yes. ITSco is based in Durham with an office in Raleigh and supports healthcare organizations across North Carolina, South Carolina, and Virginia. Most compliance work, from monitoring to documentation, happens remotely, and our team is on-site in the Triangle when a project needs hands-on work.',
      ],
    },
  ],
  bookingUtm: 'hipaa-compliance-services-bottom',
}
