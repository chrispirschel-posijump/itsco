// Content for /ai-readiness-assessment/
//
// INVENTORY: 1:1 Migrate, Priority 1, "Lead gen priority page".
// 7,654 monthly impressions, 11 GSC clicks, best position p9 on
// "ai readiness assessments for enterprises providers" — meaningful
// organic equity to preserve. Body copy below is transcribed from
// the live page; the layout is purpose-built for this content (it
// runs Why → Benefits → Who → Framework → Why ITSco rather than a
// standard ServiceSubPage / IndustryPage shape).
//
// The live legacy page includes three pricing tiers (Standard,
// Enhanced, Ultimate) shown at $199/mo each. That pricing structure
// looks placeholder-ish and inconsistent with the rest of the site,
// so it is NOT migrated here; flagged for Mike to confirm.

export const META = {
  title: 'AI Readiness Assessment for Businesses | AI Readiness Consulting',
  description:
    'ITSco AI Readiness Assessment — strategic adoption, data and security readiness, workforce enablement, and compliance for organizations preparing to adopt AI. Lead-gen priority engagement. Book a free consultation.',
  canonical: 'https://www.itsco.com/ai-readiness-assessment/',
}

export const HERO = {
  eyebrow: 'AI Readiness Assessment',
  headlineLead: 'AI Readiness Assessment',
  headlineAccent: 'for Businesses.',
  body: "With over 72% of businesses integrating AI into their operations, companies that fail to adapt risk falling behind. Our AI Readiness Assessment ensures your organization is prepared to harness AI's full potential while mitigating risks and ensuring compliance.",
  utmSuffix: 'ai-readiness-assessment-hero',
}

export const HERO_IMAGE = {
  src: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
  alt: 'Executive leadership team evaluating AI readiness across the organization',
}

export const STATS = [
  { value: '72%', label: 'Of businesses are integrating AI into operations' },
  { value: '25+', label: 'Years of IT, cybersecurity, and AI-driven solutions' },
  { value: '0%', label: 'Of our clients have suffered a serious security breach' },
]

export const WHY = {
  eyebrow: 'Why AI Readiness Matters',
  headlineLead: 'Adopt AI deliberately —',
  headlineAccent: 'or be left behind by competitors who did.',
  paragraphs: [
    "AI is moving faster than most executive teams can evaluate it. Pilots multiply, vendors promise transformation, and a year later very little has moved the business. The companies that get measurable value from AI start with a deliberate evaluation: where adoption delivers ROI, where the foundation is ready, where the risk lives, and what to sequence first.",
    "ITSco's AI Readiness Assessment gives your leadership team the clear-eyed view needed to make those decisions confidently — grounded in your actual data, infrastructure, security posture, workforce, and the regulations you answer to.",
  ],
}

export const BENEFITS_HEADING = {
  eyebrow: 'Key Benefits',
  headlineLead: 'What the assessment',
  headlineAccent: 'delivers for your business.',
}

export const BENEFITS = [
  {
    slug: 'ai-strategic-adoption',
    title: 'Strategic AI Adoption',
    description:
      'Align AI initiatives with your business objectives to maximize ROI and efficiency.',
  },
  {
    slug: 'ai-data-readiness',
    title: 'Data Readiness & Governance',
    description:
      'Ensure your data infrastructure is AI-ready, compliant with GDPR, HIPAA, and CCPA, and structured for seamless integration.',
  },
  {
    slug: 'ai-infrastructure-security',
    title: 'Infrastructure & Security Optimization',
    description:
      'Identify gaps in your IT systems, cybersecurity measures, and compliance frameworks to safeguard AI-powered workflows.',
  },
  {
    slug: 'ai-workforce-enablement',
    title: 'Workforce AI Enablement',
    description:
      'Bridge the AI talent gap with customized training, upskilling programs, and expert hiring recommendations.',
  },
  {
    slug: 'ai-compliance-risk',
    title: 'Compliance & Risk Mitigation',
    description:
      'Navigate AI ethics, governance, and regulatory requirements with confidence.',
  },
  {
    slug: 'ai-competitive-edge',
    title: 'Competitive Edge & Innovation',
    description:
      'Leverage AI for automation, predictive analytics, customer personalization, and process optimization to stay ahead.',
  },
  {
    slug: 'ai-strategy-roadmap',
    title: 'Customized AI Roadmap & Implementation Plan',
    description:
      'Receive a tailored strategy that aligns with your industry, AI use cases, and long-term business goals.',
  },
  {
    slug: 'ai-pilot-design',
    title: 'Pilot Programs & Scalable AI Deployment',
    description:
      'Test AI solutions in a controlled environment before full-scale implementation.',
  },
]

export const FRAMEWORK_HEADING = {
  eyebrow: 'The Framework',
  headlineLead: 'A four-part assessment',
  headlineAccent: 'covering the whole picture.',
}

export const FRAMEWORK = [
  {
    number: '01',
    title: 'AI Strategy & Business Alignment',
    description:
      "Map prospective AI use cases to your business objectives. Identify where AI compounds operational leverage — and where it doesn't justify the investment.",
  },
  {
    number: '02',
    title: 'Data & Security Readiness',
    description:
      'Evaluate your data infrastructure, governance, classification, and security posture against the standard AI workloads require. Identify the foundation work that must precede deployment.',
  },
  {
    number: '03',
    title: 'Workforce & AI Talent Development',
    description:
      'Assess current capabilities, training needs, and the skills gap. Recommend upskilling, hiring, and external partnerships sized to your AI roadmap.',
  },
  {
    number: '04',
    title: 'AI Deployment & Scaling',
    description:
      'Design phased deployment with pilot programs, measurable outcomes, and a path from controlled environment to full production — with the security and compliance controls in place from day one.',
  },
]

export const INDUSTRIES_HEADING = {
  eyebrow: 'Who Can Benefit',
  headlineLead: 'Built for organizations',
  headlineAccent: 'across regulated and high-stakes industries.',
}

export const INDUSTRIES = [
  {
    slug: 'cybersecurity',
    title: 'IT & Cybersecurity',
    description:
      'AI-driven threat detection, anomaly identification, and security automation — with the governance to deploy responsibly.',
  },
  {
    slug: 'healthcare-managed-it-services',
    title: 'Healthcare & Pharmaceuticals',
    description:
      'AI for clinical decision support, operations optimization, and pharma research — with HIPAA and FDA pathway readiness.',
  },
  {
    slug: 'financial-services-it',
    title: 'Finance & Banking',
    description:
      'AI for fraud detection, customer insight, and operational efficiency — with FFIEC, GLBA, and SOX alignment.',
  },
  {
    slug: 'professional-it-services',
    title: 'Retail & E-commerce',
    description:
      'AI for personalization, demand forecasting, and customer experience — with the data governance that protects your brand.',
  },
  {
    slug: 'manufacturing-it',
    title: 'Manufacturing & Supply Chain',
    description:
      'AI for predictive maintenance, quality, and supply-chain optimization — supporting automation readiness assessments across complex operations.',
  },
]

export const WHY_ITSCO = {
  eyebrow: 'Why Choose ITSco for AI Readiness',
  headlineLead: 'AI readiness consulting,',
  headlineAccent: 'grounded in 25+ years of IT discipline.',
  paragraphs: [
    "ITSco brings a combination most AI consultancies cannot: deep experience operating the IT, security, and compliance foundation AI workloads actually depend on, paired with vendor-neutral AI strategy and implementation guidance.",
  ],
  bullets: [
    '25+ years in IT, cybersecurity, and AI-driven solutions',
    'End-to-end AI strategy, security, and implementation',
    'Custom AI roadmaps aligned with industry-specific needs',
    'Focus on compliance, risk mitigation, and data protection',
  ],
  image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
  imageAlt: 'ITSco advisors guiding a leadership team through AI readiness',
}

export const MID_CTA = {
  eyebrow: 'Make AI a Measurable Advantage',
  headline: "Talk to the team that's been building AI-ready foundations for 25 years.",
  utmSuffix: 'ai-readiness-assessment-mid',
}

export const RELATED_HEADING = {
  eyebrow: 'Related Services',
  headlineLead: 'Explore more',
  headlineAccent: 'AI services from ITSco.',
}

export const RELATED = [
  {
    slug: 'ai-strategy-consulting',
    title: 'AI Strategy Consulting',
    description:
      'Once the assessment is complete, build the phased roadmap, governance framework, and vendor selection that turn AI into a measurable business advantage.',
    href: '/ai-strategy-consulting/',
    image: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    imageAlt: 'Executive AI strategy session',
  },
  {
    slug: 'ai-governance',
    title: 'AI Governance',
    description:
      'The policy, control, and oversight frameworks that keep AI adoption aligned with your security, compliance, and ethical obligations.',
    href: '/ai-governance/',
    image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
    imageAlt: 'AI governance review',
  },
  {
    slug: 'vcio-leadership',
    title: 'vCIO, vCTO, vCISO & vCAIO',
    description:
      'Ongoing virtual executive leadership — including vCAIO for organizations that want AI direction continuously, not project-by-project.',
    href: '/vcio-vcto-vciso-services/',
    image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
    imageAlt: 'Virtual executive leadership advising a leadership team',
  },
]

export const BOOKING_UTM = 'ai-readiness-assessment-bottom'
