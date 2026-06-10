// Content for /professional-it-services/
//
// Rewrite page — fresh ROI-focused content. Primary keyword:
// "professional IT services" / "IT services for professional services
// firms". Audience: managing director / partner at consulting,
// architecture/engineering, agency, or advisory firms. Per
// stakeholder direction earlier in the session, this page now also
// covers marketing/creative agencies (the standalone marketing
// vertical was retired). Framing: billable hours are the asset,
// client confidentiality is the obligation, hybrid teams are the
// reality.

import type { IndustryContent } from '@/components/IndustryPage'

export const CONTENT: IndustryContent = {
  meta: {
    title: 'Professional Services IT | Managed IT for Consultancies & Agencies | ITSco',
    description:
      'IT services built for consulting, architecture and engineering, and creative agencies. Billable-hour uptime, client confidentiality, hybrid-team enablement, and multi-office scale. Book a free consultation with ITSco.',
    canonical: 'https://www.itsco.com/professional-it-services/',
  },
  hero: {
    eyebrow: 'Professional Services IT',
    headlineLead: 'Your team bills by the hour.',
    headlineAccent: 'Your IT should too.',
    body: "Managed IT, cybersecurity, and modernization for consulting, architecture/engineering, advisory, and creative firms. Built so billable hours stay billable, client data stays private, and hybrid teams stay productive — wherever they're working today.",
    utmSuffix: 'professional-services-it-hero',
  },
  heroImage: {
    src: '/images/supporting/industries/austin-distel-744oGeqpxPQ-unsplash.jpg',
    alt: 'Consultant working at a laptop in a modern professional services workspace',
  },
  capabilitiesHeading: {
    eyebrow: 'Complete IT Solutions',
    headlineLead: 'Everything a professional',
    headlineAccent: 'services firm needs.',
  },
  capabilities: [
    {
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, helpdesk, and infrastructure management on a predictable monthly cost — built for firms without dedicated IT staff.',
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity & MSSP',
      description:
        '24/7 SOC, MDR, identity-led access, and email security tuned to the threats targeting client-data-heavy firms.',
    },
    {
      slug: 'cloud-services',
      title: 'Cloud & Microsoft 365',
      description:
        'Managed cloud, M365, Teams, and SharePoint — letting consultants, designers, and analysts collaborate without losing security.',
    },
    {
      slug: 'remote-it-support',
      title: '24/7 Helpdesk Support',
      description:
        'Hybrid-team-ready helpdesk that supports people wherever they work — home, the office, a client site, a conference, an airport.',
    },
    {
      slug: 'compliance-as-a-service',
      title: 'Compliance as a Service',
      description:
        'SOC 2 readiness, client-NDA-driven control attestation, and the documentation procurement and security teams ask for.',
    },
    {
      slug: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description:
        'Tested recovery for project files, CAD/BIM models, design assets, and the systems your teams cannot afford to lose.',
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
        'Strategic IT, security, and AI leadership for firms that need executive expertise without a full-time hire.',
    },
    {
      slug: 'it-staff-augmentation',
      title: 'IT Outsourcing & Co-Managed',
      description:
        'Co-managed support that supplements your IT person or fully replaces a fragmented in-house setup.',
    },
  ],
  pillars: [
    {
      eyebrow: 'Billable Hours Protected',
      headlineLead: 'Time spent fighting IT',
      headlineAccent: "is time you can't bill.",
      paragraphs: [
        "In a professional services firm, every productive hour shows up on an invoice. Every unproductive hour shows up on a P&L. When a consultant or designer can't log in, can't open a project file, or can't reach a client deliverable, the cost is immediate and measurable — and it scales with how senior the person waiting is.",
        "ITSco engineers your environment so the gap between needing technology and having it shrinks to seconds. Proactive monitoring catches issues before users notice. Helpdesk is staffed for the hours your people actually work, and first-call resolution is the metric we own. After-hours coverage doesn't mean a voicemail; it means an engineer.",
        "The result: senior people spend their time on client work, not on IT tickets — and the firm captures more of the hours it's paying for.",
      ],
      image: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
      imageAlt: 'Helpdesk engineer supporting a professional services team',
      imageSide: 'right',
    },
    {
      eyebrow: 'Client Confidentiality, Defended',
      headlineLead: 'Procurement teams now ask',
      headlineAccent: 'what your security posture looks like.',
      paragraphs: [
        "Your clients trust you with confidential strategy, designs, financial models, customer lists, and intellectual property. Many of them now require — contractually, in MSAs and DPAs — that you protect that information at a defined standard. The bigger the client, the longer the security questionnaire.",
        "ITSco builds the controls those questionnaires ask about: identity and access management, phishing-resistant MFA, endpoint protection and EDR, monitored logging, data loss prevention, encryption, and incident response procedures. For firms pursuing SOC 2 — increasingly required to win larger accounts — we operate the underlying controls and produce the evidence your auditor will need.",
        "The practical effect: NDA renewals, RFPs, and procurement reviews stop being the thing that slows down a deal.",
      ],
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations protecting client confidential data',
      imageSide: 'left',
    },
    {
      eyebrow: 'Hybrid Teams, Multi-Office, One Experience',
      headlineLead: 'Wherever your people work,',
      headlineAccent: 'the firm follows them.',
      paragraphs: [
        "Your people work in the office some days, from home other days, at a client site sometimes, on the road frequently. A consultant flying out Sunday night needs the same access on a Marriott Wi-Fi as a designer sitting at their desk. The firm doesn't slow down because someone changed locations.",
        "ITSco builds the identity, access, and collaboration foundation that makes that real. Microsoft 365 with conditional access. SharePoint and Teams configured for project teams, not folders. SSO and MFA for every system that matters. Endpoint management that works whether the laptop is plugged in or on a plane.",
        "Multi-office firms get one experience across locations — the same login, the same support, the same security posture — instead of three different IT setups quietly diverging.",
      ],
      image: '/images/supporting/industries/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg',
      imageAlt: 'Hybrid professional services team collaborating across locations',
      imageSide: 'right',
    },
    {
      eyebrow: 'Scale Without Scaling Overhead',
      headlineLead: 'Grow practice headcount,',
      headlineAccent: "not the IT department.",
      paragraphs: [
        "Most professional services firms grow in lumps — a new practice, a new office, an acquired team, a client engagement that doubles a project group. Each step adds users, systems, and risk. The firm needs IT that absorbs growth without proportional cost or headcount.",
        "ITSco gives you that elasticity: predictable per-user pricing, onboarding automation, identity-driven provisioning, and engineering capacity that scales with your hiring plan — not in step with your in-house admin's availability. When a new partner brings a team, they're productive on day one.",
        "Every modernization step is tied to a business outcome — utilization, billable yield, deal cycle time, client retention — not technology for its own sake.",
      ],
      image: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
      imageAlt: 'Firm leadership reviewing a growth and modernization roadmap',
      imageSide: 'left',
    },
  ],
  midCta: {
    eyebrow: 'Protect the Billable Hour',
    headline: "Talk to the IT team that's done it before.",
    utmSuffix: 'professional-services-it-mid',
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
          'A modernized infrastructure and SOC 2 Type 2 program helped Southern Rehabilitation Network qualify for state contracts and reduce risk.',
        stat: 'SOC 2 Type 2',
        statLabel: 'certification earned',
        image: '/images/supporting/industries/pexels-polina-tankilevitch-5234499.jpg',
        imageAlt: 'Healthcare provider with tablet — IT modernization',
        href: '/case-studies/southern-rehabilitation-network/',
      },
      {
        key: 'bank',
        category: 'Financial Services',
        title: 'Helping a $27B Business Upgrade Network Management',
        description:
          'Automation enhancing the security, manageability, and scalability of a network supporting thousands of employees across hundreds of offices.',
        stat: '2,800',
        statLabel: 'employees across 250 offices',
        image: '/images/case-studies/banking.jpg',
        imageAlt: 'Banking professional reviewing financial systems',
        href: '/case-studies/regional-bank/',
      },
      {
        key: 'emergeortho',
        category: 'Healthcare',
        title: 'Transforming Mobile MRI Services Through Remote Operations',
        description:
          "Remote-scanning hubs unlocked 40 extra hours of MRI capacity per truck per week and cut labor costs 30–40% across EmergeOrtho's imaging network.",
        stat: '40 hrs',
        statLabel: 'extra capacity per week, per truck',
        image: '/images/case-studies/healthcare.jpg',
        imageAlt: 'Healthcare imaging environment — remote MRI operations',
        href: '/case-studies/emerge-ortho-mobile-mri-remote-operations/',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Professional services IT,',
    headlineAccent: 'answered.',
  },
  faqCalendlyUtm: 'professional-services-it-faq',
  faqs: [
    {
      question: 'What types of firms do you typically work with?',
      answer: [
        "Consulting and advisory firms; architecture, engineering, and AEC firms; creative and marketing agencies; legal-adjacent advisory shops; research and analytics firms; and other knowledge-work businesses where the people are the asset and the deliverables live in files. Most clients are between 20 and 500 staff across one to several locations, with significant hybrid or remote work.",
      ],
    },
    {
      question: 'What does engaging ITSco typically cost?',
      answer: [
        "Cost scales with the size and complexity of your environment — user count, locations, the depth of co-managed support you need, and whether you require SOC 2 evidence or similar attestation. For most firms in this segment, managed IT plus 24/7 SOC plus compliance support runs as a predictable per-user monthly fee that replaces ad-hoc vendor invoices and the hidden cost of senior staff time lost to IT issues. Most engagements start with a free scoping consultation grounded in your actual setup.",
      ],
    },
    {
      question: 'Can you support our client-confidentiality and SOC 2 obligations?',
      answer: [
        "Yes. Our Compliance as a Service practice builds and maintains the access, monitoring, training, encryption, logging, and incident response controls SOC 2 expects, mapped against the specific MSA and DPA language your largest clients impose. We can stand up a fresh SOC 2 program, support your existing auditor, or simply produce the evidence procurement and security questionnaires ask for — without making compliance another part-time job for your COO.",
      ],
    },
    {
      question: 'How do you support hybrid and multi-office teams?',
      answer: [
        "We design the identity, access, and collaboration foundation so that the location of the person and their device is no longer the gate. Microsoft 365 with conditional access, SSO and MFA across every system that matters, centrally managed endpoints, and a helpdesk available across the hours your people actually work — including travel time zones. A consultant in Charlotte, a designer in Raleigh, and a partner at a client site in New York get the same experience and the same security posture.",
      ],
    },
    {
      question: 'Will you replace our internal IT person, or work alongside them?',
      answer: [
        "Either model works. Some firms outsource IT to ITSco completely — we run it end-to-end. Others have an internal IT lead or office administrator and bring us in for 24/7 coverage, security operations, compliance, or specific projects. Co-managed engagements are common: your person owns user-facing concierge support, we own infrastructure, security, and the heavy lifting that wouldn't fit on a single in-house desk.",
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
        '24/7 SOC, MDR, identity-led access, and compliance programs scaled to the client-confidentiality obligations your firm carries.',
      href: '/cybersecurity/',
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations engineers reviewing code on multiple monitors',
    },
    {
      slug: 'cloud-services',
      title: 'Cloud Services',
      description:
        'Managed cloud, M365, Teams, and SharePoint — letting hybrid teams collaborate without slowing down or softening security.',
      href: '/cloud-services/',
      image: '/images/supporting/services/annie-spratt-sggw4-qDD54-unsplash-1024x702.jpg',
      imageAlt: 'Team collaborating around laptops in a modern workspace',
    },
    {
      slug: 'vcio-vcto-vciso',
      title: 'vCIO, vCTO, vCISO & vCAIO',
      description:
        'Strategic IT, security, and AI leadership for firms that need executive expertise without a full-time hire.',
      href: '/vcio-vcto-vciso-services/',
      image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      imageAlt: 'Executive advisors meeting with a leadership team',
    },
  ],
  bookingUtm: 'professional-services-it-bottom',
}
