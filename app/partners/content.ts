// Content for /partners/
//
// The legacy /partners/ page contained only intro text and ten
// unlabeled logos — no descriptive copy and no named brands to
// migrate. This is a substantive rebuild.
//
// Named partners and accreditations included here are those that
// can be confirmed from existing ITSco site content and case
// studies:
//
//   - Microsoft: M365/Azure/Sentinel/SharePoint/Teams referenced
//     across the site (Microsoft Solutions pillar, multiple sub-
//     pages).
//   - Red Hat: explicitly called out in the oil and regional-bank
//     case studies (Red Hat Partner Network, Ansible Tower).
//   - Siemens Healthineers: explicitly called out in the EmergeOrtho
//     case study (syngo Virtual Cockpit).
//   - MSP Alliance: Cyber Verify Level 2 accreditation surfaced on
//     the Meet the Team page (and other places it appears in code).
//
// Other vendors (Cisco, VMware, AWS, Aruba, SonicWall, etc.) are
// referenced obliquely or in one-off spots in the codebase; rather
// than guess at the relationship status, this page describes the
// categories and notes that the full list is available on request.
// Mike should confirm or expand the named-partners list before
// production launch.

export const META = {
  title: 'Our Partners | Technology Alliances & Accreditations | ITSco',
  description:
    "ITSco's technology partnerships and accreditations — the alliances that let us deliver enterprise-grade IT, security, and compliance to organizations of every size. Microsoft, Red Hat, Siemens Healthineers, MSP Alliance, and more.",
  canonical: 'https://www.itsco.com/partners/',
}

export const HERO = {
  eyebrow: 'Our Partners',
  headlineLead: "We're all in IT",
  headlineAccent: 'together.',
  body: "You can tell a lot about a services firm by the company it keeps. ITSco has built relationships with the platform vendors, hardware manufacturers, and accreditation bodies whose technology — and standards — define modern IT. Those partnerships translate directly into better outcomes for the businesses we serve.",
  utmSuffix: 'partners-hero',
}

export const HERO_IMAGE = {
  src: '/images/supporting/industries/pexels-fauxels-3184299.jpg',
  alt: 'ITSco team collaborating with technology partners',
}

export const PHILOSOPHY = {
  eyebrow: 'How We Partner',
  headlineLead: 'Vendor-neutral.',
  headlineAccent: "Client-aligned.",
  paragraphs: [
    "ITSco maintains active partnerships across the platforms our clients depend on — but we are not tied to any single vendor's roadmap or quota. Recommendations are made based on what fits a client's environment, budget, and obligations, not on which partner is paying the highest channel margin this quarter.",
    "That orientation matters because every business we serve is making technology decisions that compound for years. Picking the right platform, the right integrator, and the right ongoing partner is one of the most consequential operational decisions a CEO or CFO makes. We treat it that way.",
  ],
}

export const CATEGORIES_HEADING = {
  eyebrow: 'Partnership Categories',
  headlineLead: 'The alliances that',
  headlineAccent: 'shape what we deliver.',
}

export const CATEGORIES = [
  {
    slug: 'partners-cloud-productivity',
    title: 'Cloud & Productivity Platforms',
    description:
      "Microsoft 365, Azure, and SharePoint are the productivity backbone for most of our clients. Our cloud team also delivers managed AWS and hybrid-cloud environments, with the certifications and engineering depth those platforms require.",
    examples: ['Microsoft 365 & Azure', 'AWS', 'Microsoft Tech for Social Impact (nonprofits)'],
  },
  {
    slug: 'partners-security-compliance',
    title: 'Security & Compliance',
    description:
      "Our managed SOC, MDR, SIEM, endpoint, identity, and email-security stack is built on enterprise-grade tooling from leading vendors — selected for fit, integrated for the threats our clients actually face, and operated by senior analysts.",
    examples: [
      'Microsoft Sentinel & Defender',
      'EDR / XDR and identity-led detection platforms',
      'Compliance frameworks: SOC 2, HIPAA, PCI DSS, NIST 800-171, CMMC, FFIEC, GLBA',
    ],
  },
  {
    slug: 'partners-network-automation',
    title: 'Network & Automation',
    description:
      "Network engineering across IT and OT environments — and the automation expertise that lets us run modern operations at the scale enterprise clients require. The oil-company and $27B-bank case studies on this site were both delivered through our Red Hat Partner Network engagements.",
    examples: ['Red Hat (Ansible Tower / AWX)', 'Cisco', 'Aruba', 'SolarWinds integration experience'],
  },
  {
    slug: 'partners-healthcare-tech',
    title: 'Healthcare Technology',
    description:
      "Specialized partnerships supporting the imaging, clinical, and operational technology healthcare clients depend on. Our EmergeOrtho mobile MRI case study was delivered in direct partnership with Siemens Healthineers, integrating their syngo Virtual Cockpit platform into a mobile environment for the first time.",
    examples: ['Siemens Healthineers', 'Healthcare-specific clinical, EHR, and imaging integrators'],
  },
  {
    slug: 'partners-accreditation',
    title: 'Accreditation & Industry Recognition',
    description:
      "Independent attestation that our security, operational, and compliance controls meet defined standards — verified by third-party assessors, not just claimed.",
    examples: [
      'MSP Alliance Cyber Verify Level 2 — verified cybersecurity, operational, and compliance controls',
      'Microsoft Partner Network competencies',
      'Vendor and product certifications carried by individual engineers',
    ],
  },
  {
    slug: 'partners-procurement',
    title: 'Procurement & Channel',
    description:
      "Through ITSco's vendor and distributor relationships, our clients access hardware, software, and licensing at the discount tiers their size actually qualifies for — without the overhead of managing multiple vendor relationships in-house. Nonprofit clients also reach donated and discounted licensing through TechSoup, Microsoft Tech for Social Impact, Salesforce Power of Us, and Google for Nonprofits.",
    examples: ['Major OEM hardware partners', 'TechSoup', 'Microsoft Tech for Social Impact', 'Salesforce Power of Us', 'Google for Nonprofits'],
  },
]

export const ACCREDITATION = {
  eyebrow: 'Independently Verified',
  headlineLead: 'MSP Alliance',
  headlineAccent: 'Cyber Verify Level 2.',
  body: "ITSco is independently audited under MSP Alliance's Cyber Verify program, which verifies cybersecurity, operational, and compliance controls against a defined industry standard. Level 2 is the senior certification tier — meaningful only because an independent third party signs off, not because we say so.",
  image: '/images/accreditations/cyber-verify-level-2.png',
  alt: 'MSP Alliance Cyber Verify Level 2 accreditation',
}

export const PARTNERSHIP_HEADING = {
  eyebrow: 'Become a Partner',
  headlineLead: 'Interested in partnering',
  headlineAccent: 'with ITSco?',
}

export const PARTNERSHIP_BODY =
  "We work with platform vendors, channel partners, complementary services firms, and industry-specific solution providers across the markets we serve. If your team is building something the businesses we work with should know about — or if you operate in a region where ITSco clients need on-the-ground capability — we want to hear from you."

export const PARTNERSHIP_CTA = {
  label: 'Reserve Your Time Now',
  utmSuffix: 'partners-inquiry',
}

export const RELATED_HEADING = {
  eyebrow: 'Related',
  headlineLead: 'Explore more',
  headlineAccent: 'from ITSco.',
}

export const RELATED = [
  {
    slug: 'case-studies',
    title: 'Case Studies',
    description:
      'Real outcomes delivered through ITSco partnerships — Red Hat, Siemens Healthineers, and the senior engineering work behind each engagement.',
    href: '/case-studies/',
    image: '/images/case-studies/banking.jpg',
    imageAlt: 'Real client outcomes',
  },
  {
    slug: 'about-us',
    title: 'About ITSco',
    description:
      'The team, the philosophy, and the 25-year track record behind every partnership and every client engagement.',
    href: '/about-us/',
    image: '/images/supporting/services/priscilla-du-preez-xLKg2s4rXWE-unsplash.jpg',
    imageAlt: 'ITSco team',
  },
  {
    slug: 'resources',
    title: 'Resources',
    description:
      'Guides, articles, white papers, and case studies — practical knowledge from the work itself.',
    href: '/resources/',
    image: '/images/supporting/services/annie-spratt-sggw4-qDD54-unsplash-1024x702.jpg',
    imageAlt: 'IT resources and insights',
  },
]

export const BOOKING_UTM = 'partners-bottom'
