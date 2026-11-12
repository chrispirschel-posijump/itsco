// Content for /cmmc-compliance-services
// New page (Nov 2026). Compliance Services pillar, alongside Compliance as a
// Service and HIPAA. DRAFT: noindex + excluded from the sitemap until Mike
// approves.
//
// Why this page exists: CMMC searches already reach ITSco through the
// Charlotte consulting page and the CMMC blog post, and AI engines name a
// competitor for CMMC questions, because no ITSco page owns the service.
//
// Keyword targets (US monthly volume / difficulty, DataForSEO Nov 12, 2026):
//   primary   cmmc compliance services (210 / 2), cmmc consultant and cmmc
//             consulting (320 each / 0, ~$158 CPC), cmmc compliance (9,900 /
//             16, informational, via intro + FAQs)
//   secondary cmmc level 1 (1,600 / 0), cmmc level 2 (4,400 / 16), sprs score
//             (720 / 0), cmmc self assessment (210 / 4), nist 800-171
//             compliance (260 / 26), cmmc gap assessment (50 / 0)
//   do not target here: the July 2026 suspension story, owned by
//   /blog/cmmc-2-nc-defense-contractors.
//
// Regulatory facts verified Nov 12, 2026 against the DoW CIO "About CMMC"
// page and war.gov releases (see memory: cmmc-status-verified): Phase 2
// suspended July 13, 2026; Sept 3 class deviation; program paused in Phase 1;
// L1 = 15 FAR 52.204-21 requirements, annual self-assessment + affirmation,
// no POA&Ms; L2 = 110 NIST SP 800-171 Rev 2 requirements, self-assessment
// every 3 years, annual affirmation, POA&Ms closed within 180 days.
// RE-VERIFY the dated intro paragraph and FAQ 2 before publishing.
//
// Pending Mike (do not add claims until confirmed): RPO / Registered
// Practitioner status, past CMMC or NIST 800-171 client work, CUI enclave and
// Microsoft GCC High offering. Copy below avoids all three.

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    // Root layout template appends " | ITSco".
    title: 'CMMC Compliance Services for NC Defense Contractors',
    description:
      'CMMC compliance services and consulting for North Carolina defense contractors: NIST 800-171 gap assessments, SPRS scoring, SSPs, and year-round evidence.',
    canonical: 'https://www.itsco.com/cmmc-compliance-services',
  },
  serviceName: 'CMMC Compliance Services',
  parent: { name: 'Compliance as a Service', href: '/compliance-as-a-service' },
  hero: {
    eyebrow: 'Compliance Services · CMMC',
    headlineLead: 'CMMC compliance that holds up',
    headlineAccent: 'whenever someone checks.',
    body: 'For manufacturers, engineering firms, and other defense suppliers that handle federal contract information or controlled unclassified information. ITSco runs the technology side of CMMC and NIST SP 800-171 as an ongoing service, so your SPRS score is accurate and your annual affirmation rests on evidence.',
    utmSuffix: 'cmmc-compliance-services-hero',
  },
  heroImage: {
    // Placeholder: shares the manufacturing page hero until a CMMC image is chosen.
    src: '/images/hero/industries/pexels-equalstock-31336012.jpg',
    alt: 'Operator overseeing a production line on the shop floor',
  },
  intro: {
    eyebrow: 'Why It Matters',
    headlineLead: 'The certification deadline moved.',
    headlineAccent: 'Your obligations did not.',
    paragraphs: [
      'If your company handles federal contract information (FCI) or controlled unclassified information (CUI) for the Department of War, CMMC already applies. Since November 10, 2025, new solicitations can require a CMMC Level 1 or Level 2 self-assessment, with the score entered in the Supplier Performance Risk System (SPRS) and an affirmation signed by a senior official. DFARS 252.204-7012 still requires you to protect CUI under NIST SP 800-171.',
      'Here is what changed. On July 13, 2026, the Department [suspended CMMC Phase 2](https://www.war.gov/News/Releases/Release/Article/4542329/forging-the-arsenal-of-freedom-department-of-war-suspends-cmmc-phase-ii-require/), which would have required third-party certification at contract award, and a September 2026 class deviation removed those requirements from contracts. The [program is paused in Phase 1](https://dodcio.defense.gov/cmmc/About/): self-assessments remain required, and the Department enforces NIST SP 800-171 through them and through select government-led assessments. As of November 2026, no new Phase 2 date has been set.',
      'That puts more weight on your own score. An SPRS score or affirmation that overstates your controls can create False Claims Act exposure. ITSco handles the technology side: finding the gaps, closing them, documenting the evidence, and keeping it current. Your leadership signs the affirmation, and we make sure the systems behind it match what it says.',
    ],
  },
  stats: [
    { value: '1996', label: 'Protecting Triangle businesses since' },
    { value: '0', label: 'Clients with a serious security breach' },
    { value: '60%', label: 'Of clients with ITSco 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Every CMMC control,',
    headlineAccent: 'implemented and documented.',
  },
  capabilities: [
    {
      slug: 'cyber-risk-assessment',
      title: 'NIST 800-171 Gap Assessment',
      description:
        'A control-by-control review against the 110 NIST SP 800-171 Rev 2 requirements, or the 15 Level 1 requirements, with a prioritized plan to close what is missing.',
    },
    {
      slug: 'compliance-reporting',
      title: 'SPRS Score Support',
      description:
        'An accurate self-assessment score calculated with the DoD Assessment Methodology and backed by evidence, ready to enter in SPRS and defend if anyone asks.',
    },
    {
      slug: 'caas-policy-management',
      title: 'System Security Plan & POA&Ms',
      description:
        'A written system security plan showing how each control is met, plus plans of action that close open items inside the 180 days Level 2 allows.',
    },
    {
      slug: 'cloud-compliance',
      title: 'CUI Scoping & Boundaries',
      description:
        'A clear map of where controlled unclassified information lives, so the controls apply to the right systems instead of to your entire company.',
    },
    {
      slug: 'endpoint-security',
      title: 'Technical Controls',
      description:
        'Multi-factor authentication, encryption, access control, logging, and endpoint protection on every system in scope, configured to the requirements.',
    },
    {
      slug: 'managed-soc',
      title: '24/7 Monitoring & Incident Response',
      description:
        'Around-the-clock threat detection and a documented response process, including the 72-hour cyber incident reporting DFARS 252.204-7012 requires.',
    },
    {
      slug: 'caas-audit-prep',
      title: 'Annual Affirmation Readiness',
      description:
        'Evidence kept current all year, so each annual affirmation is signed on facts and your CMMC status never lapses for a missed affirmation.',
    },
    {
      slug: 'compliance-management',
      title: 'Certification Assessment Prep',
      description:
        'If third-party certification returns or a customer asks for it, a mock assessment and an evidence package ready for an authorized assessor.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'A score you can defend,',
    headlineAccent: 'not just a number you entered.',
    tone: 'payoff',
    paragraphs: [
      'CMMC is now a self-reported program, which makes accuracy the whole game. A defensible score protects the contracts you have, keeps you eligible for new ones, and leaves you ready if third-party certification comes back.',
    ],
    bullets: [
      'An SPRS score backed by documented evidence',
      'Annual affirmations signed on facts, not memory',
      'Open items closed inside the 180-day window',
      'Ready for a certification assessment if it returns',
    ],
    image: {
      src: '/images/supporting/consulting/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
      alt: 'Compliance reporting dashboard',
    },
  },
  related: {
    heading: 'Explore more compliance and industry services',
    links: [
      {
        slug: 'compliance-as-a-service',
        label: 'Compliance as a Service',
        href: '/compliance-as-a-service',
        description: 'Ongoing compliance for CMMC, HIPAA, SOC 2, GovRAMP, and the frameworks other providers turn down.',
      },
      {
        slug: 'manufacturing-it',
        label: 'Manufacturing IT',
        href: '/manufacturing-it',
        description: 'Managed IT and security for manufacturers, from the front office to the plant floor.',
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
    headlineLead: 'CMMC compliance,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'What do CMMC compliance services include?',
      answer: [
        'CMMC compliance services cover the technology side of the program: a gap assessment against NIST SP 800-171 or the Level 1 requirements, closing the gaps, a system security plan, an accurate SPRS score, plans of action for open items, and evidence kept current for each annual affirmation. ITSco runs it as an ongoing service, not a one-time project.',
      ],
    },
    {
      question: 'Is CMMC still required after the Phase 2 suspension?',
      answer: [
        'Yes. The July 2026 suspension paused third-party certification, not the program. As of November 2026, CMMC is paused in Phase 1: solicitations can still require Level 1 or Level 2 self-assessments with scores in SPRS and annual affirmations, and DFARS 252.204-7012 still applies. Our [CMMC suspension guide](/blog/cmmc-2-nc-defense-contractors) explains what changed.',
      ],
    },
    {
      question: 'What is the difference between CMMC Level 1 and Level 2?',
      answer: [
        'Level 1 covers federal contract information and requires the 15 safeguards in FAR 52.204-21, with an annual self-assessment and no open items allowed. Level 2 covers controlled unclassified information and requires the 110 controls in NIST SP 800-171 Rev 2, with a self-assessment every three years and an affirmation every year.',
      ],
    },
    {
      question: 'What is an SPRS score?',
      answer: [
        'It is the score your company enters in the Supplier Performance Risk System after a NIST SP 800-171 self-assessment, calculated with the DoD Assessment Methodology. A perfect score is 110, and points come off for each control not fully in place. Contracting officers can see it, so it needs to be accurate and backed by evidence.',
      ],
    },
    {
      question: 'How often do we have to assess and affirm?',
      answer: [
        'Level 1 requires a self-assessment and an affirmation every year. Level 2 requires a self-assessment every three years and an affirmation after each assessment and every year in between. If the annual affirmation is missed, your CMMC status lapses. Open Level 2 items must be closed within 180 days of the assessment.',
      ],
    },
    {
      question: 'Does ITSco perform CMMC certification assessments?',
      answer: [
        'No. Certification assessments are performed by authorized third-party assessment organizations (C3PAOs), and keeping that separate protects the integrity of your result. ITSco does the work before and between assessments: closing gaps, documenting controls, supporting your self-assessment, and preparing your evidence if a certification assessment is ever required.',
      ],
    },
    {
      question: 'Where should a small defense contractor start with CMMC?',
      answer: [
        'Start by confirming what information you handle. Federal contract information alone means Level 1; controlled unclassified information means Level 2. Then run a gap assessment against the matching requirements and fix the highest-risk gaps first. A [cyber risk assessment](/cyber-risk-assessment) is a practical first step if you are not sure where you stand.',
      ],
    },
    {
      question: 'Can ITSco work alongside our existing IT person or team?',
      answer: [
        'Yes. Many contractors keep an internal IT person for day-to-day support and bring in ITSco for the compliance work: the gap assessment, security monitoring, documentation, and SPRS support. We share the evidence and the remediation plan, so your team always knows what is covered and who owns each task.',
      ],
    },
    {
      question: 'How are CMMC compliance services priced?',
      answer: [
        'As a predictable monthly fee built into your IT services, not a surprise project before a deadline. The price depends on your users and locations, how much of your environment handles CUI, and the controls already in place. Our [IT Investment Calculator](/it-investment-calculator) estimates your monthly IT cost in minutes, and a free consultation turns that into a number.',
      ],
    },
    {
      question: 'Do you work with defense contractors outside Raleigh and Durham?',
      answer: [
        'Yes. ITSco is based in Durham with an office in Raleigh, and we work with defense suppliers across North Carolina and beyond. Most compliance work, from monitoring to documentation, happens remotely, so distance is rarely a barrier. When on-site work is needed, we build it into the scope based on your locations and needs.',
      ],
    },
  ],
  bookingUtm: 'cmmc-compliance-services-bottom',
}
