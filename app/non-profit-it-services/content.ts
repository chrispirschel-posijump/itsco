// Content for /non-profit-it-services/
//
// Rewrite page — fresh ROI-focused content. Primary keyword:
// "non-profit IT services" / "IT for nonprofits". Audience: executive
// director / COO / CFO / operations director at a 25-500 staff
// nonprofit, foundation, or association. Framing: stewardship of
// donor and beneficiary data, mission-aligned spending, board
// accountability, and getting more from the technology you already
// have through nonprofit-specific pricing (TechSoup, Microsoft Tech
// for Social Impact, Salesforce Power of Us / NPSP, Google for
// Nonprofits).

import type { IndustryContent } from '@/components/IndustryPage'

export const CONTENT: IndustryContent = {
  meta: {
    title: 'Non-Profit IT Services | Managed IT for Nonprofits | ITSco',
    description:
      "IT services built for nonprofits — donor data protection, mission-aligned budgets, board-ready reporting, and full use of Microsoft Tech for Social Impact, TechSoup, and Salesforce nonprofit programs. Book a free consultation with ITSco.",
    canonical: 'https://www.itsco.com/non-profit-it-services/',
  },
  hero: {
    eyebrow: 'Non-Profit IT Services',
    headlineLead: 'Technology that protects',
    headlineAccent: 'donors, beneficiaries, and the mission.',
    body: "Managed IT, cybersecurity, and modernization built for nonprofits — where the budget is mission money, the data belongs to donors and beneficiaries, and the board is going to ask. ITSco brings nonprofit-specific licensing, board-ready reporting, and 25+ years of stewardship to organizations doing important work.",
    utmSuffix: 'non-profit-it-hero',
  },
  heroImage: {
    src: '/images/supporting/industries/pexels-fauxels-3184299.jpg',
    alt: 'Diverse mission-driven team collaborating around a table',
  },
  capabilitiesHeading: {
    eyebrow: 'Complete IT Solutions',
    headlineLead: 'Everything a nonprofit',
    headlineAccent: 'needs to operate.',
  },
  capabilities: [
    {
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, helpdesk, and infrastructure management on a predictable monthly cost — sized to the realities of nonprofit budgets.',
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity & MSSP',
      description:
        '24/7 SOC, MDR, MFA, and email security tuned to the threats targeting donor data, financial systems, and program operations.',
    },
    {
      slug: 'compliance-as-a-service',
      title: 'Compliance & Donor Data Protection',
      description:
        'Donor and beneficiary data safeguards, grant-driven security commitments, and the documentation your funders and board will ask for.',
    },
    {
      slug: 'cloud-services',
      title: 'Microsoft 365 & Cloud',
      description:
        'Full use of Microsoft Tech for Social Impact licensing — managed M365, Teams, SharePoint, and Azure for nonprofits.',
    },
    {
      slug: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description:
        'Tested recovery for donor databases, financial systems, and program records — so a server failure does not become a mission failure.',
    },
    {
      slug: 'remote-it-support',
      title: '24/7 Helpdesk Support',
      description:
        'Helpdesk support that scales with the volunteer hours and event surges your team actually works.',
    },
    {
      slug: 'managed-soc',
      title: 'Managed SOC & MDR',
      description:
        '24/7 detection, investigation, and response — staffed by analysts, not a tier-1 ticket queue.',
    },
    {
      slug: 'vcio-leadership',
      title: 'vCIO, vCTO & vCISO Services',
      description:
        'Strategic IT and security leadership for executive directors who need C-suite expertise without a C-suite hire.',
    },
    {
      slug: 'it-procurement',
      title: 'IT Procurement & Licensing',
      description:
        'TechSoup, Microsoft for Nonprofits, Salesforce Power of Us, Google for Nonprofits — every donated and discounted seat your org qualifies for.',
    },
  ],
  pillars: [
    {
      eyebrow: 'Stewardship Donors Can Trust',
      headlineLead: 'Donor data is sacred.',
      headlineAccent: 'Treat it that way.',
      paragraphs: [
        "Your donors entrusted you with their personal information, their financial details, and in many cases their stories. Your beneficiaries trusted you with even more sensitive information. Stewardship of that data is part of stewardship of the mission. A breach doesn't just create a regulatory problem — it breaks trust that took years to build.",
        "ITSco builds the controls that protect donor and beneficiary data the way you say you do in your privacy policy: identity and access management, phishing-resistant multifactor authentication, monitored logging, encryption at rest and in transit, security awareness training, and incident response procedures. We operate them continuously, not as a project that ended two years ago.",
        "The practical effect: you can tell donors, board members, and funders — credibly and with documentation — that their information is safe.",
      ],
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations protecting donor and beneficiary data',
      imageSide: 'right',
    },
    {
      eyebrow: 'Mission-Aligned, Budget-Conscious',
      headlineLead: 'Every dollar should',
      headlineAccent: 'advance the mission.',
      paragraphs: [
        "Every dollar spent on IT is a dollar not spent on the mission. That math sits behind every nonprofit operating decision. ITSco approaches nonprofit engagements with that math in mind: leveraging every nonprofit licensing program your organization qualifies for, sizing services to actual scale, and replacing surprise project invoices with predictable monthly cost.",
        "We help you take full advantage of Microsoft Tech for Social Impact, Salesforce Power of Us, Google for Nonprofits, TechSoup donations, and the manufacturer programs most nonprofits underuse — often funding a meaningful share of your modernization through licensing programs you weren't fully using.",
        "The goal isn't the cheapest IT. The goal is the most mission-advancing IT for the budget you have — and visibility into where every dollar is going.",
      ],
      image: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
      imageAlt: 'Leadership team weighing mission impact against operating budget',
      imageSide: 'left',
    },
    {
      eyebrow: 'Board-Ready Reporting',
      headlineLead: 'When the board asks',
      headlineAccent: 'about cybersecurity, you can answer.',
      paragraphs: [
        "Nonprofit boards are increasingly aware that cybersecurity and operational technology resilience belong on the risk register — and increasingly asking executive directors what the organization is doing about it. The right answer is no longer 'we have IT support.'",
        "ITSco produces the reporting that lets you answer well: a security posture summary in plain English, the status of the controls auditors and funders actually ask about, what's been tested recently and what hasn't, the incidents the SOC has handled and what they revealed. Quarterly enough to satisfy oversight, sized for an audit committee that has eight other topics to cover.",
        "Strong governance becomes a fundraising and grant-readiness asset — not a quiet anxiety in the back of the executive director's mind.",
      ],
      image: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
      imageAlt: 'Nonprofit leadership presenting an IT and security report to the board',
      imageSide: 'right',
    },
    {
      eyebrow: 'Modernization on a Nonprofit Budget',
      headlineLead: 'Move past the on-premises',
      headlineAccent: "server in the closet.",
      paragraphs: [
        "Many nonprofits are running on technology one or two cycles past replacement: an aging file server, on-premises Exchange, a donor database whose vendor stopped innovating, a network designed for fifteen staff that now supports forty plus volunteers. The risk feels lower than the cost of changing — until it isn't.",
        "ITSco sequences modernization for nonprofit realities: phased moves that fit fiscal year planning and board approval cycles, migrations timed around campaigns and program seasons, licensing structured to maximize donated and discounted seats, training so staff can actually use what you're paying for.",
        "Every step is tied to a measurable outcome — hours of staff time recovered, dollars of vendor spend consolidated, audit findings closed, mission capacity gained — not technology for its own sake.",
      ],
      image: '/images/supporting/industries/kenny-eliason-1-aA2Fadydc-unsplash.jpg',
      imageAlt: 'Modern nonprofit workspace with up-to-date collaboration technology',
      imageSide: 'left',
    },
  ],
  midCta: {
    eyebrow: 'Stewardship Is the Mission',
    headline: "Talk to the IT team that's served nonprofits for 25+ years.",
    utmSuffix: 'non-profit-it-mid',
  },
  caseStudies: {
    eyebrow: 'Proof, Not Promises',
    headlineLead: 'Engineering excellence,',
    headlineAccent: 'delivered.',
    cards: [
      {
        key: 'srn',
        category: 'Healthcare',
        title: 'Unlocking Business Opportunities Through IT Innovation',
        description:
          'A modernized infrastructure and SOC 2 Type 2 program helped Southern Rehabilitation Network qualify for state contracts and reduce risk to the people it serves.',
        stat: 'SOC 2 Type 2',
        statLabel: 'certification earned',
        image: '/images/supporting/industries/pexels-polina-tankilevitch-5234499.jpg',
        imageAlt: 'Healthcare provider with tablet — IT modernization',
        href: '/case-studies/southern-rehabilitation-network/',
      },
      {
        key: 'emergeortho',
        category: 'Healthcare',
        title: 'Transforming Mobile MRI Services Through Remote Operations',
        description:
          "Remote-scanning hubs unlocked 40 extra hours of MRI capacity per truck per week — expanding access to care for patients in underserved communities.",
        stat: '40 hrs',
        statLabel: 'extra service capacity per truck',
        image: '/images/case-studies/healthcare.jpg',
        imageAlt: 'Healthcare imaging environment — remote MRI operations',
        href: '/case-studies/emerge-ortho-mobile-mri-remote-operations/',
      },
      {
        key: 'bank',
        category: 'Financial Services',
        title: 'Helping a $27B Business Upgrade Network Management',
        description:
          'Network automation that improved security and scalability across hundreds of locations — engineering excellence that translates across institutional environments.',
        stat: '2,800',
        statLabel: 'employees across 250 offices',
        image: '/images/case-studies/banking.jpg',
        imageAlt: 'Institutional workplace reviewing operational systems',
        href: '/case-studies/regional-bank/',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Non-profit IT,',
    headlineAccent: 'answered.',
  },
  faqCalendlyUtm: 'non-profit-it-faq',
  faqs: [
    {
      question: 'Do you offer nonprofit-specific pricing?',
      answer: [
        "We do — and we make sure your organization is already getting every discount and donation it qualifies for from the underlying technology vendors. Microsoft Tech for Social Impact (donated and heavily discounted M365 and Azure), Salesforce Power of Us (free seats and discounts on NPSP), Google for Nonprofits, AWS Imagine Grants, TechSoup catalog access — most nonprofits use a fraction of what they're eligible for. ITSco's own services are sized to nonprofit budgets, with engagement structures that match your fiscal year and grant cycles.",
      ],
    },
    {
      question: 'What does engaging ITSco typically cost?',
      answer: [
        "Cost scales with the size and complexity of your environment — staff count, locations, the depth of co-managed support you need, and the security and compliance posture your funders and board expect. For most nonprofits we serve, managed IT plus 24/7 SOC plus continuous security support runs as a predictable monthly fee that replaces ad-hoc vendor spend, surprise project invoices, and the hidden cost of staff time lost to IT issues. Most engagements begin with a free scoping consultation so the proposal reflects your actual environment.",
      ],
    },
    {
      question: 'Can you support our donor database and program systems?',
      answer: [
        "Yes. We support the network, identity, security, and infrastructure these systems depend on — including donor management platforms like Salesforce NPSP, Raiser's Edge / Blackbaud, Bloomerang, Neon CRM, Kindful, and DonorPerfect; financial systems like Sage Intacct, QuickBooks, MIP, and Blackbaud Financial Edge; and program management and case management systems. We don't replace your platform vendors; we make sure the environment around them is reliable, secure, and ready when your team needs it.",
      ],
    },
    {
      question: 'How do you help us report to the board on IT and cybersecurity?',
      answer: [
        "We produce quarterly board-ready reporting in plain English: current security posture, status of the controls funders and auditors ask about, what's been tested recently, incidents the SOC has handled, and a forward-looking view of the work planned for the next quarter. The goal is governance the board can act on — not a forty-page technical document that nobody reads.",
      ],
    },
    {
      question: 'Can you support multi-site nonprofits and program offices?',
      answer: [
        "Yes. ITSco supports nonprofits operating across multiple locations and program offices with consistent service delivery, centralized monitoring, and on-site responsiveness when it matters. Each site gets local helpdesk access; central administration gets unified visibility, consistent controls, and a single team accountable for outcomes across the organization.",
      ],
    },
  ],
  faqInlineCtaIndex: 1,
  faqInlineCtaTrailingText: 'for a scoped, transparent estimate.',
  relatedHeading: {
    eyebrow: 'Related Services',
    headlineLead: 'Explore more from',
    headlineAccent: 'ITSco.',
  },
  relatedServices: [
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description:
        '24/7 SOC, MDR, MFA, and compliance programs scaled to the donor-data and grant obligations your organization carries.',
      href: '/cybersecurity/',
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations engineers reviewing code on multiple monitors',
    },
    {
      slug: 'microsoft-solutions',
      title: 'Microsoft Solutions',
      description:
        'Full use of Microsoft Tech for Social Impact — managed M365, Teams, SharePoint, and Azure built for nonprofits.',
      href: '/microsoft-solutions/',
      image: '/images/supporting/services/windows-AigsWJmvoEo-unsplash.jpg',
      imageAlt: 'Microsoft cloud and productivity tools for organizations',
    },
    {
      slug: 'vcio-vcto-vciso',
      title: 'vCIO, vCTO, vCISO & vCAIO',
      description:
        'Strategic IT, security, and AI leadership for executive directors who need C-suite expertise without a C-suite hire.',
      href: '/vcio-vcto-vciso-services/',
      image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      imageAlt: 'Executive advisors meeting with a leadership team',
    },
  ],
  bookingUtm: 'non-profit-it-bottom',
}
