// Central registry for blog posts. Read by the /blog/ index, each post page,
// and the related-posts module. Add an entry here when a new post is built.
//
// heroImage variety pass (June 2026): each post pulls from the broader
// /public/images/ library instead of the small /hero/blog/ pool. Images
// chosen for thematic fit; ~30 distinct images cover the 47 posts, with
// any reuse limited to ~2 uses across different categories.

export interface BlogPost {
  slug: string
  title: string
  category: string
  excerpt: string
  heroImage: string
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'raleigh-industries',
    title: 'The 7 Biggest, Most Important Industries in Raleigh',
    category: 'Business Insights',
    excerpt:
      'From tech and healthcare to finance and education — a closer look at the seven industries powering Raleigh’s economy.',
    heroImage: '/images/hero/local/raleigh.jpg',
  },
  {
    slug: 'cost-of-it-support-for-small-business',
    title: 'What is the Average Cost of IT Support for Small Businesses?',
    category: 'Managed IT',
    excerpt:
      'In-house IT team or outsourced MSP? A practical breakdown of what IT support actually costs a small business.',
    heroImage: '/images/hero/blog/cardmapr-nl-AWOcmWKnOR8-unsplash.jpg',
  },
  {
    slug: 'why-is-network-security-important',
    title: '10 Reasons Why Network Security is Important for Businesses',
    category: 'Cybersecurity',
    excerpt:
      'Ten concrete reasons network security is mission-critical for businesses of every size — and what’s at stake without it.',
    heroImage: '/images/hero/blog/redd-francisco-5U_28ojjgms-unsplash.jpg',
  },
  {
    slug: 'types-of-cloud-computing',
    title: '6 Types of Cloud Computing',
    category: 'Cloud',
    excerpt:
      'IaaS, PaaS, SaaS, and beyond — the six models of cloud computing and how to know which fits your business.',
    heroImage: '/images/hero/blog/compagnons-psXNymQI7Pk-unsplash.jpg',
  },
  {
    slug: 'infrastructure-outsource',
    title: '5 Reasons Why Businesses Outsource Their Infrastructure',
    category: 'Managed IT',
    excerpt:
      'Five reasons growing businesses hand their IT infrastructure to a managed services partner.',
    heroImage: '/images/hero/blog/claudio-schwarz-08dyHxddcKc-unsplash.jpg',
  },
  {
    slug: 'what-is-cyber-vandalism',
    title: 'What is Cyber Vandalism?',
    category: 'Cybersecurity',
    excerpt:
      'Cyber vandalism defaces and destroys rather than steals — what it is, its common forms, and how to defend against it.',
    heroImage: '/images/hero/blog/shamin-haky-RIk-i9rXPao-unsplash.jpg',
  },
  {
    slug: 'best-remote-support-software-for-small-business',
    title: 'The Best Remote IT Support Software for Small Business',
    category: 'Managed IT',
    excerpt:
      'The remote IT support tools that let support teams diagnose and fix problems fast — without leaving the office.',
    heroImage: '/images/hero/blog/pexels-edmond-dantes-8068258.jpg',
  },
  {
    slug: 'types-of-network-security',
    title: 'The 15 Types of Network Security',
    category: 'Cybersecurity',
    excerpt:
      'From firewalls to zero trust — fifteen types of network security and the role each plays in protecting your business.',
    heroImage: '/images/hero/services/pexels-brett-sayles-4657256.jpg',
  },
  {
    slug: 'network-security-plan',
    title: 'How to Plan & Implement a Network Security Plan',
    category: 'Cybersecurity',
    excerpt:
      'A step-by-step guide to building and implementing a network security plan that actually protects your business.',
    heroImage: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
  },
  {
    slug: 'cloud-migration-challenges',
    title: 'The 10 Most Common Cloud Migration Challenges',
    category: 'Cloud',
    excerpt:
      'The ten challenges that derail cloud migrations most often — and how to plan around each one.',
    heroImage: '/images/hero/services/pexels-brett-sayles-5480781.jpg',
  },
  {
    slug: 'staff-augmentation-vs-managed-services',
    title: 'Staff Augmentation vs. Managed Services: A Comparison',
    category: 'Managed IT',
    excerpt:
      'Staff augmentation or managed services? A clear comparison to help you choose the right IT support model.',
    heroImage: '/images/supporting/services/pexels-theo-decker-5946207.jpg',
  },
  {
    slug: 'it-cost-reduction',
    title: 'How to Reduce Technology Costs: An IT Cost Reduction Guide',
    category: 'Managed IT',
    excerpt:
      'Practical ways to cut technology costs without sacrificing performance, security, or your ability to scale.',
    heroImage: '/images/hero/consulting/path-digital-tR0jvlsmCuQ-unsplash.jpg',
  },
  {
    slug: 'cyber-security-training-benefits',
    title: 'Eight Benefits of Cyber Security Training for Your Business',
    category: 'Cybersecurity',
    excerpt:
      'Eight ways cybersecurity training strengthens your defenses — because your employees are your first line of defense.',
    heroImage: '/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg',
  },

  // ─── MSP cluster (rewrite batch — June 2026) ──────────────────────────────
  {
    slug: 'what-are-managed-it-services',
    title: 'What Are Managed IT Services? A Practical Guide for Business Leaders',
    category: 'Managed IT',
    excerpt:
      'A plain-English answer to what managed IT services are, what they include, and what a CEO, COO, or CFO should expect to get for the money.',
    heroImage: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
  },
  {
    slug: 'how-to-choose-a-managed-services-provider',
    title: 'How to Choose a Managed Services Provider: 10 Questions That Separate Good MSPs From Bad Ones',
    category: 'Managed IT',
    excerpt:
      "Ten questions to ask every MSP you evaluate — separating the providers worth working with from the ones to walk away from.",
    heroImage: '/images/supporting/consulting/headway-5QgIuuBxKwM-unsplash.jpg',
  },
  {
    slug: 'benefits-of-managed-it-services',
    title: '9 Real Benefits of Managed IT Services for Growing Businesses',
    category: 'Managed IT',
    excerpt:
      "Nine concrete, measurable improvements businesses get from a competent managed IT services engagement — and how to evaluate each one.",
    heroImage: '/images/hero/services/pexels-divinetechygirl-1181341.jpg',
  },
  {
    slug: 'why-use-managed-it-services',
    title: 'Why Use Managed IT Services? The Business Case in 7 Points',
    category: 'Managed IT',
    excerpt:
      "The business case for managed IT services in seven plain-English points — and when an MSP is probably NOT the right fit.",
    heroImage: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
  },
  {
    slug: 'break-fix-vs-managed-services',
    title: 'Break-Fix vs. Managed Services: Which IT Support Model Actually Costs Less?',
    category: 'Managed IT',
    excerpt:
      'Break-fix vs managed services — the math, the operating model, and where break-fix still makes sense vs where it costs you money.',
    heroImage: '/images/supporting/industries/austin-distel-DS1hZ4xzD7M-unsplash.jpg',
  },
  {
    slug: 'managed-services-vs-professional-services',
    title: 'Managed Services vs. Professional Services: What\'s the Difference?',
    category: 'Managed IT',
    excerpt:
      'Managed services are an ongoing subscription. Professional services are defined projects. Why the distinction matters and how they work together.',
    heroImage: '/images/supporting/consulting/copernico-p_kICQCOM4s-unsplash.jpg',
  },
  {
    slug: '7-ways-businesses-can-maximize-roi-with-their-managed-services-provider',
    title: '7 Ways Businesses Can Maximize ROI With Their Managed Services Provider',
    category: 'Managed IT',
    excerpt:
      "Seven concrete habits that consistently separate high-ROI managed services engagements from average ones — practical things any business can do.",
    heroImage: '/images/supporting/consulting/mario-gogh-VBLHICVh-lI-unsplash.jpg',
  },
  {
    slug: 'common-misconceptions-about-the-value-of-managed-service-providers',
    title: '6 Common Misconceptions About the Value of Managed Service Providers',
    category: 'Managed IT',
    excerpt:
      'Six outdated misconceptions about MSPs that lead business leaders to evaluate them based on what was true in 2014, not what they deliver today.',
    heroImage: '/images/hero/consulting/charlesdeluvio-Lks7vei-eAg-unsplash.jpg',
  },
  {
    slug: 'managed-it-services-challenges',
    title: '7 Real Challenges of Managed IT Services (And How to Navigate Them)',
    category: 'Managed IT',
    excerpt:
      "An honest look at the friction in managed IT services engagements — what to expect, why it happens, and how to navigate each challenge.",
    heroImage: '/images/supporting/consulting/ant-rozetsky-HXOllTSwrpM-unsplash.jpg',
  },
  {
    slug: 'helpdesk-vs-it-support',
    title: 'Helpdesk vs. IT Support: The Difference and Why It Matters',
    category: 'Managed IT',
    excerpt:
      'A helpdesk responds to problems. IT support prevents and responds to problems. Why the distinction matters when you are buying either one.',
    heroImage: '/images/hero/services/pexels-divinetechygirl-1181207.jpg',
  },

  // ─── Cloud cluster (rewrite batch — June 2026) ────────────────────────────
  {
    slug: 'cloud-migration-strategy',
    title: 'How to Build a Cloud Migration Strategy That Actually Delivers ROI',
    category: 'Cloud',
    excerpt:
      'A real cloud migration strategy connects target architecture to business outcomes — what the six components are, the pitfalls that sink most migrations, and what good looks like.',
    heroImage: '/images/hero/services/pexels-brett-sayles-5408005.jpg',
  },
  {
    slug: 'cloud-migration-steps',
    title: 'The 7 Essential Cloud Migration Steps (And the Order That Matters)',
    category: 'Cloud',
    excerpt:
      "The seven steps every successful cloud migration follows — assess, define, design, plan, prepare, execute, optimize — and what goes wrong if you skip any of them.",
    heroImage: '/images/hero/services/pexels-cookiecutter-17489157.jpg',
  },
  {
    slug: 'cloud-computing-service-models',
    title: 'Cloud Computing Service Models: IaaS, PaaS, and SaaS Explained',
    category: 'Cloud',
    excerpt:
      "IaaS, PaaS, SaaS, FaaS, CaaS, DaaS — what each cloud computing service model actually means, when each fits, and how hybrid and multi-cloud patterns work.",
    heroImage: '/images/hero/services/ed-hardie-xG02JzIBf7o-unsplash.jpg',
  },
  {
    slug: 'what-is-cloud-security',
    title: 'What Is Cloud Security? A Plain-English Guide for Business Leaders',
    category: 'Cloud',
    excerpt:
      "Cloud security explained without jargon — the shared responsibility model, the six core components of a cloud security program, and where most breaches actually happen.",
    heroImage: '/images/supporting/services/network-services.jpg',
  },
  {
    slug: 'cloud-security-threats',
    title: '8 Cloud Security Threats Every Business Should Be Defending Against',
    category: 'Cloud',
    excerpt:
      'The eight cloud security threats most likely to cause real business damage — misconfiguration, identity compromise, API risk, data exposure, and more — with the defenses for each.',
    heroImage: '/images/hero/services/pexels-mikhail-nilov-8108674.jpg',
  },
  {
    slug: 'why-cloud-computing-is-important',
    title: 'Why Cloud Computing Is Important for Business: 8 Concrete Reasons',
    category: 'Cloud',
    excerpt:
      "Eight specific reasons cloud computing matters for business — each tied to a measurable outcome rather than a vague benefit — plus where cloud is NOT the right answer.",
    heroImage: '/images/supporting/services/windows-AigsWJmvoEo-unsplash.jpg',
  },

  // ─── Outsourcing & Support cluster (rewrite batch — June 2026) ────────────
  {
    slug: 'ultimate-outsourcing-guide',
    title: 'The Ultimate IT Outsourcing Guide for Business Leaders',
    category: 'Managed IT',
    excerpt:
      'Pillar guide to IT outsourcing — the models, the math, when it makes sense (and when it does not), how to evaluate providers, and the playbook for a successful engagement.',
    heroImage: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
  },
  {
    slug: 'benefits-of-it-outsourcing',
    title: '8 Benefits of IT Outsourcing for Growing Businesses',
    category: 'Managed IT',
    excerpt:
      'Eight specific, measurable benefits businesses realize from a competent IT outsourcing engagement — each tied to a business outcome you can defend at a board meeting.',
    heroImage: '/images/supporting/industries/austin-distel-744oGeqpxPQ-unsplash.jpg',
  },
  {
    slug: 'benefits-of-remote-it-support',
    title: "7 Benefits of Remote IT Support for Today's Distributed Workforce",
    category: 'Managed IT',
    excerpt:
      'Seven specific benefits of remote IT support for distributed and hybrid teams — and what good remote IT support actually looks like in practice.',
    heroImage: '/images/hero/services/aleksei-zhivilov-A6M3aowKR6I-unsplash.jpg',
  },
  {
    slug: 'network-outsourcing',
    title: 'Network Outsourcing: When It Makes Sense and How to Do It Right',
    category: 'Managed IT',
    excerpt:
      'When network outsourcing makes sense, what a good engagement delivers, and how to evaluate providers without ending up in a relationship that creates more problems.',
    heroImage: '/images/supporting/industries/topsphere-media-WxRd7byFxs4-unsplash.jpg',
  },
  {
    slug: 'what-is-the-difference-between-it-support-tiers',
    title: 'IT Support Tiers Explained: Tier 1, Tier 2, Tier 3, and Beyond',
    category: 'Managed IT',
    excerpt:
      'The IT support tier model explained — what work belongs at each tier, what staffing model produces good outcomes, and why the structure matters when buying IT support.',
    heroImage: '/images/supporting/services/priscilla-du-preez-xLKg2s4rXWE-unsplash.jpg',
  },

  // ─── Cybersecurity cluster (rewrite batch — June 2026) ────────────────────
  {
    slug: 'cyber-security-work-from-home',
    title: 'Cyber Security for Work From Home: A Practical Guide for Businesses',
    category: 'Cybersecurity',
    excerpt:
      'The cybersecurity risks specific to remote work — home networks, personal devices, distracted phishing — and the controls that defend against them without making remote work painful.',
    heroImage: '/images/supporting/services/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg',
  },
  {
    slug: 'encryption-benefits',
    title: '8 Real Benefits of Data Encryption for Business',
    category: 'Cybersecurity',
    excerpt:
      "Eight specific business benefits of data encryption — from neutralizing lost laptops to lowering cyber insurance premiums — plus what encryption does and doesn't protect against.",
    heroImage: '/images/hero/services/pexels-thisisengineering-3861951.jpg',
  },
  {
    slug: 'risks-of-byod',
    title: '7 Real Risks of BYOD (And How to Manage Them Without Killing Productivity)',
    category: 'Cybersecurity',
    excerpt:
      "Seven concrete BYOD security risks every business should know — and the practical controls that close them while keeping BYOD workable for the people doing the work.",
    heroImage: '/images/hero/services/pexels-divinetechygirl-1181676.jpg',
  },
  {
    slug: 'network-security-threats-and-vulnerabilities',
    title: '10 Network Security Threats and Vulnerabilities Every Business Should Know About',
    category: 'Cybersecurity',
    excerpt:
      "Ten network security threats most likely to cause real business damage today — phishing, ransomware, credential theft, supply chain, IoT, shadow IT — and the defenses that work.",
    heroImage: '/images/hero/blog/shamin-haky-RIk-i9rXPao-unsplash.jpg',
  },

  // ─── Final cluster (rewrite batch — June 2026) ───────────────────────────
  {
    slug: 'ultimate-it-strategic-planning-guide',
    title: 'The Ultimate IT Strategic Planning Guide for Business Leaders',
    category: 'Business Insights',
    excerpt:
      'Pillar guide to IT strategic planning — the 7 components of a real plan, how to do it without an internal CIO, the cadence that works, and the common pitfalls that derail it.',
    heroImage: '/images/hero/services/sophie-paterson-sgCfoY0xXwg-unsplash.jpg',
  },
  {
    slug: 'how-much-does-it-services-cost',
    title: 'How Much Do IT Services Cost? A Transparent 2026 Pricing Guide',
    category: 'Managed IT',
    excerpt:
      'Transparent 2026 pricing ranges for managed IT services, helpdesk, security, and project work — what drives cost, what is included, and how to compare proposals without being misled.',
    heroImage: '/images/supporting/services/pexels-thirdman-5582868.jpg',
  },
  {
    slug: 'what-is-it-procurement',
    title: 'What Is IT Procurement? A Practical Guide for Business Leaders',
    category: 'Managed IT',
    excerpt:
      'IT procurement explained — the full lifecycle, common mistakes, and how to do it well in a growing business that does not have a dedicated procurement function.',
    heroImage: '/images/hero/services/creatopy-mlwrIzr7yNs-unsplash.jpg',
  },
  {
    slug: 'it-help-desk-best-practices',
    title: '10 IT Help Desk Best Practices That Actually Move the Needle',
    category: 'Managed IT',
    excerpt:
      "Ten help desk practices that consistently produce better user experience, faster resolution, and lower total cost — plus the anti-patterns that produce the opposite.",
    heroImage: '/images/supporting/services/pexels-mart-production-7255723.jpg',
  },
  {
    slug: '7-eye-opening-ai-trends-every-business-should-prepare-for-in-2025-and-beyond',
    title: '7 Eye-Opening AI Trends Every Business Should Prepare For in 2026 and Beyond',
    category: 'AI',
    excerpt:
      'Seven AI trends shaping business in 2026 — from pilots-to-production to AI governance to data quality as the real competitive advantage. With what to do about each one.',
    heroImage: '/images/hero/services/pexels-mikhail-nilov-8108674.jpg',
  },
  {
    slug: 'real-world-examples-of-how-ai-helps-businesses-compete',
    title: '6 Real-World Examples of How AI Helps Businesses Compete',
    category: 'AI',
    excerpt:
      'Six concrete examples of how businesses are using AI to compete more effectively — customer support, sales, document processing, software development, operations, and cybersecurity.',
    heroImage: '/images/hero/services/pexels-divinetechygirl-1181676.jpg',
  },
  {
    slug: 'the-black-box-is-dead-why-business-leaders-can-no-longer-sit-on-the-sidelines',
    title: 'The Black Box Is Dead: Why Business Leaders Can No Longer Sit on the Sidelines of AI',
    category: 'AI',
    excerpt:
      "Why AI has become an executive-level responsibility — not a delegated technical one — and what business leaders specifically need to do about it.",
    heroImage: '/images/hero/services/sophie-paterson-sgCfoY0xXwg-unsplash.jpg',
  },
  {
    slug: '6-reasons-healthcare-organizations-need-strong-it-network-services-now-more-than-ever',
    title: '6 Reasons Healthcare Organizations Need Strong IT Network Services Now More Than Ever',
    category: 'Business Insights',
    excerpt:
      'Six reasons strong IT network services are non-negotiable for healthcare organizations — from patient care reliability to HIPAA compliance to telehealth quality.',
    heroImage: '/images/supporting/services/pexels-mart-production-7088498.jpg',
  },
  {
    slug: 'durham-industries',
    title: 'The 7 Industries Driving Durham, NC: A Local Economy Overview',
    category: 'Business Insights',
    excerpt:
      "The seven industries powering Durham's economy — life sciences, healthcare, higher education, tech, financial services, professional services, manufacturing — and what each means for local businesses.",
    heroImage: '/images/hero/local/durham nc.jpg',
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

// Related posts: same category first, then top up with others to reach `count`.
export function relatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPost(slug)
  if (!current) return BLOG_POSTS.slice(0, count) as BlogPost[]
  const sameCategory = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === current.category)
  const others = BLOG_POSTS.filter((p) => p.slug !== slug && p.category !== current.category)
  return [...sameCategory, ...others].slice(0, count)
}
