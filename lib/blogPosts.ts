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
  // ISO-8601 date strings. When present, render in BlogPosting JSON-LD so the
  // post qualifies for Google's enhanced article result. Posts without dates
  // still emit valid schema, just without rich-result eligibility.
  publishedDate?: string
  modifiedDate?: string
  // Optional named author. Falls back to the "ITSco Team" byline when
  // omitted; JSON-LD emits Person schema when set, Organization when not.
  author?: { name: string; title?: string }
  // Optional FAQ block for FAQPage JSON-LD. Renders the eligibility for
  // Google's FAQ rich result on posts that end with a Q&A section.
  faqs?: readonly { question: string; answer: string }[]
  // Draft posts are hidden from the /blog/ index and from related-posts
  // recommendations, and their individual page metadata emits noindex.
  // Toggle to false on the intended publish day.
  draft?: boolean
}

// Reads the current date in a way that stays stable across Next.js's static
// generation (build-time) and runtime queries. Posts whose publishedDate is
// after this date are treated as scheduled and hidden from the index.
function isVisible(post: BlogPost): boolean {
  if (post.draft) return false
  if (post.publishedDate) {
    const scheduled = new Date(post.publishedDate + 'T00:00:00Z').getTime()
    const now = Date.now()
    if (scheduled > now) return false
  }
  return true
}

// Public list — filters drafts and future-dated posts. Use this in the
// /blog/ index and anywhere posts get displayed to visitors. The full
// BLOG_POSTS array is exported below for internal tooling (e.g. metadata
// lookup on scheduled posts that have their own page.tsx).
export function visiblePosts(): BlogPost[] {
  return BLOG_POSTS.filter(isVisible)
}

export const BLOG_POSTS: readonly BlogPost[] = [
  // ── Post 5 of the editorial roadmap ──────────────────────────────────────
  // Scheduled for 2026-09-28. Flip draft: false and redeploy on Sep 28.
  {
    slug: 'cost-of-it-downtime-for-business',
    title: 'The Real Cost of IT Downtime for a Growing Business',
    category: 'Managed IT',
    excerpt:
      "IT downtime costs more than lost hours. Revenue, trust, and recovery expenses add up fast. Here's how to calculate the real number for your business.",
    heroImage: '/images/hero/blog/microsoft-365-oUbzU87d1Gc-unsplash.jpg',
    publishedDate: '2026-09-28',
    author: { name: 'Mike Savino', title: 'CEO, ITSco' },
    faqs: [
      {
        question: 'How much does IT downtime cost per hour for a small business?',
        answer:
          "Published benchmarks put typical ranges at $8K–$25K per hour for companies under 50 employees, $25K–$75K for 50–100, and $75K–$250K for 100–500 — with ITIC finding even micro-businesses lose roughly $1,670 per minute. Where you land depends on revenue per employee and how customer-facing the affected systems are.",
      },
      {
        question: 'How do I calculate the cost of downtime for my business?',
        answer:
          'Use: hourly cost × annual downtime hours × impact factor. Hourly cost is headcount times loaded hourly rate (~$75 for professional services). Impact factor is 0.9–1.0 for company-wide outages, 0.4–0.6 for critical systems, 0.1–0.2 for niche ones. The result is a floor — it prices lost productivity only, before revenue disruption, recovery costs, and trust erosion.',
      },
      {
        question: 'How often do businesses actually experience significant downtime?',
        answer:
          "Per the Uptime Institute's 2026 Annual Outage Analysis, roughly half of operators experienced an impactful outage in the past 3 years, and about 1 in 10 outages causes serious or severe disruption. Frequency is declining, but cost per event is rising — 1 in 5 outages now exceeds $1 million.",
      },
      {
        question: 'What causes most IT downtime?',
        answer:
          'Less hardware failure than most executives assume. Nearly 40% of organizations suffered a major human-error outage in the past 3 years, and 85% of those trace to inadequate or unfollowed procedures. Cybersecurity incidents are a rising cause with unusually long-lasting impacts. Both are manageable variables, not bad luck.',
      },
      {
        question: 'Does managed IT actually reduce downtime?',
        answer:
          "It targets the documented causes: continuous monitoring converts failures-in-progress into scheduled fixes, tested procedures attack the leading human-error driver, 24/7 response shortens every incident, and tested backups compress recovery from days to hours. The honest measure for any provider — including us — is the trend in your own unplanned downtime hours year over year.",
      },
    ],
    draft: true,
  },
  // ── Post 4 of the editorial roadmap ──────────────────────────────────────
  // Scheduled for 2026-09-14. Flip draft: false and redeploy on Sep 14.
  {
    slug: 'when-to-fire-your-msp',
    title: "When to Fire Your MSP: 12 Signs You're With the Wrong Provider",
    category: 'Managed IT',
    excerpt:
      "12 red flags that signal your MSP isn't delivering — plus how to evaluate switching, what it costs, and what to look for in a replacement.",
    heroImage: '/images/hero/blog/vitaly-gariev-biciz2eSkiA-unsplash.jpg',
    publishedDate: '2026-09-14',
    author: { name: 'Mike Savino', title: 'CEO, ITSco' },
    faqs: [
      {
        question: 'How long does it take to switch MSPs?',
        answer:
          'Plan for 60–90 days from signature to full cutover for a 50-person company, including a deliberate overlap period. The calendar time matters less than the sequence: documentation and credential inventory first, monitoring second, helpdesk cutover last.',
      },
      {
        question: "What if I'm still in contract with my current MSP?",
        answer:
          "Read the termination and auto-renewal clauses first — many agreements allow exit with 60–90 days' notice, and persistent SLA failures may trigger a for-cause provision. Some companies run the numbers and find that paying an early termination fee still beats months of continued underservice. Have your attorney review the specifics before acting; contract interpretation is their lane.",
      },
      {
        question: 'Will I lose data or historical tickets when I switch?',
        answer:
          "You shouldn't lose data — your systems and files are yours, and a professional transition transfers documentation, configurations, and credentials intact. Ticket history is less certain: it lives in the old provider's system, so request an export during the notice period, while cooperation is contractually required.",
      },
      {
        question: 'Should I hire in-house IT instead of switching MSPs?',
        answer:
          "At 50 employees, usually not — one in-house generalist costs $80K–$220K all-in and can't cover helpdesk, security, and strategy simultaneously. The exception is when technology is core to your product. If the current MSP failed you, the fix is a better provider or a hybrid model, not necessarily a different model entirely.",
      },
      {
        question: 'How do I evaluate a potential MSP before signing?',
        answer:
          "Use business-outcome measurement, named executive access, transparent pricing, cybersecurity depth, and a real strategic layer as your criteria — then add references: 2 clients your size at 3+ years tenure, and 1 who joined in the past 6 months. The long-tenured clients tell you what the relationship becomes; the recent one tells you what onboarding is really like.",
      },
    ],
    draft: true,
  },
  // ── Post 3 of the editorial roadmap ──────────────────────────────────────
  // Scheduled for 2026-08-31. Flip draft: false and redeploy on Aug 31.
  {
    slug: 'what-does-it-cost-50-person-company',
    title: 'What Does IT Actually Cost for a 50-Person Company?',
    category: 'Managed IT',
    excerpt:
      'A CFO-focused breakdown of real IT costs for a 50-person company — per-user benchmarks, model comparisons, and the hidden costs most miss.',
    heroImage: '/images/hero/blog/israel-andrade-YI_9SivVt_s-unsplash.jpg',
    publishedDate: '2026-08-31',
    author: { name: 'Mike Savino', title: 'CEO, ITSco' },
    faqs: [
      {
        question: 'How does IT cost per employee change as we grow from 25 to 100 employees?',
        answer:
          "It falls — typically from $200–$400 per user per month at 25 employees to $130–$250 at 100. Fixed costs like network infrastructure, security tooling, and strategic oversight amortize across more people. The categories don't change; the denominators do.",
      },
      {
        question: 'Is it cheaper to hire an in-house IT person or use an MSP?',
        answer:
          "At 50 employees, an MSP is usually cheaper for equivalent coverage. One in-house generalist costs $80K–$220K all-in and can't cover 24/7 monitoring, security specialization, and strategy simultaneously. The honest comparison isn't one salary versus one contract — it's one salary versus the 4 or 5 roles that salary is silently expected to cover.",
      },
      {
        question: "What's a typical IT budget as a percentage of revenue?",
        answer:
          'Around 3–6% for a 50-person company, but industry drives it more than size — benchmarks run from roughly 2% in construction and manufacturing to 10% in financial services. High revenue-per-employee firms will land below the range on a healthy budget; use per-user cost as the primary benchmark instead.',
      },
      {
        question: 'Why do MSPs charge per user per month instead of hourly?',
        answer:
          'Because hourly billing rewards the provider when things break. Per-user pricing aligns incentives: the provider makes money by preventing problems, not billing for them. It also gives the CFO the thing hourly IT can never provide — a predictable line item that scales linearly with headcount.',
      },
      {
        question: "How do we know if we're overspending on IT?",
        answer:
          'Benchmark your all-in per-user cost against published ranges, then check the mix. Overspending usually hides in 3 places: unused software licenses, redundant tools doing the same job, and paying senior-engineer rates for password resets. Underspending shows up differently — as downtime and productivity drag. Most companies are doing both at once.',
      },
    ],
    draft: true,
  },
  // ── Post 2 of the editorial roadmap ──────────────────────────────────────
  // Scheduled for 2026-08-17. Draft flag stays true until publish day; flip
  // to false (or remove) on Aug 17 and redeploy.
  {
    slug: 'hipaa-compliance-90-day-roadmap-small-practice',
    title: 'HIPAA Compliance Checklist: 90-Day Roadmap for Small Practices',
    category: 'Cybersecurity',
    excerpt:
      'A practical 90-day HIPAA compliance roadmap for small medical practices — administrative, physical, and technical safeguards, plus audit prep.',
    heroImage: '/images/hero/blog/vitaly-gariev-2kopEHjST-g-unsplash.jpg',
    publishedDate: '2026-08-17',
    author: { name: 'Mike Savino', title: 'CEO, ITSco' },
    faqs: [
      {
        question: 'Do I need a HIPAA compliance officer if I have fewer than 10 employees?',
        answer:
          'Yes. Every covered entity must designate a Privacy Officer and a Security Officer regardless of size. In a small practice, one person can hold both roles — but the appointment must be documented in writing and the person needs actual time allocated to the job.',
      },
      {
        question: "Is my EHR vendor's HIPAA compliance enough to protect me?",
        answer:
          'No. Your EHR vendor is responsible for securing its platform, and your BAA with them covers their side. Your workstations, email, staff training, policies, other vendors, and risk assessment remain your obligation — and those are where most small-practice violations actually occur.',
      },
      {
        question: "What's the average HIPAA fine for a small practice?",
        answer:
          'Recent OCR settlements with small providers have ranged from $10,000 to $250,000, nearly always paired with a 2-year corrective action plan requiring ongoing OCR supervision. Larger organizations have settled for as much as $3 million. The dollar figure is often smaller than the cost of the monitoring, remediation, and disruption that come with it.',
      },
      {
        question: 'Can I do the Security Risk Assessment myself?',
        answer:
          "Legally, yes — HHS publishes a free SRA Tool designed for small practices. Practically, OCR has flagged generic and template-driven assessments as a common deficiency, and a self-assessment tends to miss the risks you don't know to look for. Many practices use the HHS tool as a baseline year over year and bring in an outside assessment when the stakes rise.",
      },
      {
        question: 'How often do I need to update my HIPAA policies?',
        answer:
          'Review the SRA and policies at least annually, and immediately after any material change — new EHR, new location, new telehealth workflow, or a security incident. An SRA dated more than 12 months ago is treated as stale by investigators, insurers, and acquirers alike.',
      },
    ],
    draft: true,
  },
  // ── Post 1 of the editorial roadmap ──────────────────────────────────────
  // Published 2026-08-03.
  {
    slug: 'cyber-insurance-requirements-for-small-business',
    title: 'Cyber Insurance Requirements for SMBs: What Your Underwriter Actually Wants',
    category: 'Cybersecurity',
    excerpt:
      "Cyber insurance underwriters have tightened requirements dramatically. Here's the 12-point checklist your business needs to qualify — and what to do next.",
    heroImage: '/images/hero/blog/microsoft-365-1MeZCPon3vk-unsplash.jpg',
    publishedDate: '2026-08-03',
    author: { name: 'Mike Savino', title: 'CEO, ITSco' },
    faqs: [
      {
        question: "Do I need cyber insurance if I don't handle sensitive customer data?",
        answer:
          "Probably yes. Ransomware doesn't care what data you hold — it monetizes your downtime. Business email compromise targets your money directly. And increasingly, your own customers' contracts require you to carry coverage as a condition of doing business.",
      },
      {
        question: 'What if my broker just tells me to answer "yes" to everything?',
        answer:
          'Get a new broker. Misrepresentation on the application is grounds for claim denial or policy rescission — precisely when you need coverage most. Answer accurately, and note remediation timelines for anything in progress.',
      },
      {
        question: 'How much cyber coverage should a small business carry?',
        answer:
          "It depends on your revenue, data, and contractual obligations, so this is a conversation for your broker. As context, Coalition's 2026 Cyber Claims Report put the average ransomware loss at $269,000 — a useful floor when thinking about limits. Many mid-market companies carry $1M–$5M.",
      },
      {
        question: 'Can I qualify for cyber insurance without hiring an MSP?',
        answer:
          'Yes — the controls matter, not who runs them. In practice, standing up 24/7 monitoring, MDR, tested backups, and documented patching in-house costs more than the managed equivalent for most companies under 500 people, which is why so many route it through a provider.',
      },
      {
        question: "What's the difference between cyber insurance and general liability or E&O?",
        answer:
          "General liability covers physical injury and property damage. E&O covers mistakes in your professional services. Neither covers ransomware, breach response, forensics, or funds transfer fraud — that's what a standalone cyber policy exists for. Confirm the specifics with your broker or attorney; policy language varies by carrier.",
      },
    ],
  },
  {
    slug: 'raleigh-industries',
    title: 'The 7 Biggest, Most Important Industries in Raleigh',
    category: 'Business Insights',
    excerpt:
      'From tech and healthcare to finance and education — a closer look at the seven industries powering Raleigh’s economy.',
    heroImage: '/images/hero/local/raleigh.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'cost-of-it-support-for-small-business',
    title: 'What is the Average Cost of IT Support for Small Businesses?',
    category: 'Managed IT',
    excerpt:
      'In-house IT team or outsourced MSP? A practical breakdown of what IT support actually costs a small business.',
    heroImage: '/images/hero/blog/cardmapr-nl-AWOcmWKnOR8-unsplash.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'why-is-network-security-important',
    title: '10 Reasons Why Network Security is Important for Businesses',
    category: 'Cybersecurity',
    excerpt:
      'Ten concrete reasons network security is mission-critical for businesses of every size — and what’s at stake without it.',
    heroImage: '/images/hero/blog/redd-francisco-5U_28ojjgms-unsplash.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'types-of-cloud-computing',
    title: '6 Types of Cloud Computing',
    category: 'Cloud',
    excerpt:
      'IaaS, PaaS, SaaS, and beyond — the six models of cloud computing and how to know which fits your business.',
    heroImage: '/images/hero/blog/compagnons-psXNymQI7Pk-unsplash.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'infrastructure-outsource',
    title: '5 Reasons Why Businesses Outsource Their Infrastructure',
    category: 'Managed IT',
    excerpt:
      'Five reasons growing businesses hand their IT infrastructure to a managed services partner.',
    heroImage: '/images/hero/blog/claudio-schwarz-08dyHxddcKc-unsplash.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'what-is-cyber-vandalism',
    title: 'What is Cyber Vandalism?',
    category: 'Cybersecurity',
    excerpt:
      'Cyber vandalism defaces and destroys rather than steals — what it is, its common forms, and how to defend against it.',
    heroImage: '/images/hero/blog/shamin-haky-RIk-i9rXPao-unsplash.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'best-remote-support-software-for-small-business',
    title: 'The Best Remote IT Support Software for Small Business',
    category: 'Managed IT',
    excerpt:
      'The remote IT support tools that let support teams diagnose and fix problems fast — without leaving the office.',
    heroImage: '/images/hero/blog/pexels-edmond-dantes-8068258.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'types-of-network-security',
    title: 'The 15 Types of Network Security',
    category: 'Cybersecurity',
    excerpt:
      'From firewalls to zero trust — fifteen types of network security and the role each plays in protecting your business.',
    heroImage: '/images/hero/services/pexels-brett-sayles-4657256.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'network-security-plan',
    title: 'How to Plan & Implement a Network Security Plan',
    category: 'Cybersecurity',
    excerpt:
      'A step-by-step guide to building and implementing a network security plan that actually protects your business.',
    heroImage: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'cloud-migration-challenges',
    title: 'The 10 Most Common Cloud Migration Challenges',
    category: 'Cloud',
    excerpt:
      'The ten challenges that derail cloud migrations most often — and how to plan around each one.',
    heroImage: '/images/hero/services/pexels-brett-sayles-5480781.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'staff-augmentation-vs-managed-services',
    title: 'Staff Augmentation vs. Managed Services: A Comparison',
    category: 'Managed IT',
    excerpt:
      'Staff augmentation or managed services? A clear comparison to help you choose the right IT support model.',
    heroImage: '/images/supporting/services/pexels-theo-decker-5946207.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'it-cost-reduction',
    title: 'How to Reduce Technology Costs: An IT Cost Reduction Guide',
    category: 'Managed IT',
    excerpt:
      'Practical ways to cut technology costs without sacrificing performance, security, or your ability to scale.',
    heroImage: '/images/hero/consulting/path-digital-tR0jvlsmCuQ-unsplash.jpg',
    publishedDate: '2026-05-20',
  },
  {
    slug: 'cyber-security-training-benefits',
    title: 'Eight Benefits of Cyber Security Training for Your Business',
    category: 'Cybersecurity',
    excerpt:
      'Eight ways cybersecurity training strengthens your defenses — because your employees are your first line of defense.',
    heroImage: '/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg',
    publishedDate: '2026-05-20',
  },

  // ─── MSP cluster (rewrite batch — June 2026) ──────────────────────────────
  {
    slug: 'what-are-managed-it-services',
    title: 'What Are Managed IT Services? A Practical Guide for Business Leaders',
    category: 'Managed IT',
    excerpt:
      'A plain-English answer to what managed IT services are, what they include, and what a CEO, COO, or CFO should expect to get for the money.',
    heroImage: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'how-to-choose-a-managed-services-provider',
    title: 'How to Choose a Managed Services Provider: 10 Questions That Separate Good MSPs From Bad Ones',
    category: 'Managed IT',
    excerpt:
      "Ten questions to ask every MSP you evaluate — separating the providers worth working with from the ones to walk away from.",
    heroImage: '/images/supporting/consulting/headway-5QgIuuBxKwM-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'benefits-of-managed-it-services',
    title: '9 Real Benefits of Managed IT Services for Growing Businesses',
    category: 'Managed IT',
    excerpt:
      "Nine concrete, measurable improvements businesses get from a competent managed IT services engagement — and how to evaluate each one.",
    heroImage: '/images/hero/services/pexels-divinetechygirl-1181341.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'why-use-managed-it-services',
    title: 'Why Use Managed IT Services? The Business Case in 7 Points',
    category: 'Managed IT',
    excerpt:
      "The business case for managed IT services in seven plain-English points — and when an MSP is probably NOT the right fit.",
    heroImage: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'break-fix-vs-managed-services',
    title: 'Break-Fix vs. Managed Services: Which IT Support Model Actually Costs Less?',
    category: 'Managed IT',
    excerpt:
      'Break-fix vs managed services — the math, the operating model, and where break-fix still makes sense vs where it costs you money.',
    heroImage: '/images/supporting/industries/austin-distel-DS1hZ4xzD7M-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'managed-services-vs-professional-services',
    title: 'Managed Services vs. Professional Services: What\'s the Difference?',
    category: 'Managed IT',
    excerpt:
      'Managed services are an ongoing subscription. Professional services are defined projects. Why the distinction matters and how they work together.',
    heroImage: '/images/supporting/consulting/copernico-p_kICQCOM4s-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: '7-ways-businesses-can-maximize-roi-with-their-managed-services-provider',
    title: '7 Ways Businesses Can Maximize ROI With Their Managed Services Provider',
    category: 'Managed IT',
    excerpt:
      "Seven concrete habits that consistently separate high-ROI managed services engagements from average ones — practical things any business can do.",
    heroImage: '/images/supporting/consulting/mario-gogh-VBLHICVh-lI-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'common-misconceptions-about-the-value-of-managed-service-providers',
    title: '6 Common Misconceptions About the Value of Managed Service Providers',
    category: 'Managed IT',
    excerpt:
      'Six outdated misconceptions about MSPs that lead business leaders to evaluate them based on what was true in 2014, not what they deliver today.',
    heroImage: '/images/hero/consulting/charlesdeluvio-Lks7vei-eAg-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'managed-it-services-challenges',
    title: '7 Real Challenges of Managed IT Services (And How to Navigate Them)',
    category: 'Managed IT',
    excerpt:
      "An honest look at the friction in managed IT services engagements — what to expect, why it happens, and how to navigate each challenge.",
    heroImage: '/images/supporting/consulting/ant-rozetsky-HXOllTSwrpM-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'helpdesk-vs-it-support',
    title: 'Helpdesk vs. IT Support: The Difference and Why It Matters',
    category: 'Managed IT',
    excerpt:
      'A helpdesk responds to problems. IT support prevents and responds to problems. Why the distinction matters when you are buying either one.',
    heroImage: '/images/hero/services/pexels-divinetechygirl-1181207.jpg',
    publishedDate: '2026-06-11',
  },

  // ─── Cloud cluster (rewrite batch — June 2026) ────────────────────────────
  {
    slug: 'cloud-migration-strategy',
    title: 'How to Build a Cloud Migration Strategy That Actually Delivers ROI',
    category: 'Cloud',
    excerpt:
      'A real cloud migration strategy connects target architecture to business outcomes — what the six components are, the pitfalls that sink most migrations, and what good looks like.',
    heroImage: '/images/hero/services/pexels-brett-sayles-5408005.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'cloud-migration-steps',
    title: 'The 7 Essential Cloud Migration Steps (And the Order That Matters)',
    category: 'Cloud',
    excerpt:
      "The seven steps every successful cloud migration follows — assess, define, design, plan, prepare, execute, optimize — and what goes wrong if you skip any of them.",
    heroImage: '/images/hero/services/pexels-cookiecutter-17489157.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'cloud-computing-service-models',
    title: 'Cloud Computing Service Models: IaaS, PaaS, and SaaS Explained',
    category: 'Cloud',
    excerpt:
      "IaaS, PaaS, SaaS, FaaS, CaaS, DaaS — what each cloud computing service model actually means, when each fits, and how hybrid and multi-cloud patterns work.",
    heroImage: '/images/hero/services/ed-hardie-xG02JzIBf7o-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'what-is-cloud-security',
    title: 'What Is Cloud Security? A Plain-English Guide for Business Leaders',
    category: 'Cloud',
    excerpt:
      "Cloud security explained without jargon — the shared responsibility model, the six core components of a cloud security program, and where most breaches actually happen.",
    heroImage: '/images/supporting/services/network-services.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'cloud-security-threats',
    title: '8 Cloud Security Threats Every Business Should Be Defending Against',
    category: 'Cloud',
    excerpt:
      'The eight cloud security threats most likely to cause real business damage — misconfiguration, identity compromise, API risk, data exposure, and more — with the defenses for each.',
    heroImage: '/images/hero/services/pexels-mikhail-nilov-8108674.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'why-cloud-computing-is-important',
    title: 'Why Cloud Computing Is Important for Business: 8 Concrete Reasons',
    category: 'Cloud',
    excerpt:
      "Eight specific reasons cloud computing matters for business — each tied to a measurable outcome rather than a vague benefit — plus where cloud is NOT the right answer.",
    heroImage: '/images/supporting/services/windows-AigsWJmvoEo-unsplash.jpg',
    publishedDate: '2026-06-11',
  },

  // ─── Outsourcing & Support cluster (rewrite batch — June 2026) ────────────
  {
    slug: 'ultimate-outsourcing-guide',
    title: 'The Ultimate IT Outsourcing Guide for Business Leaders',
    category: 'Managed IT',
    excerpt:
      'Pillar guide to IT outsourcing — the models, the math, when it makes sense (and when it does not), how to evaluate providers, and the playbook for a successful engagement.',
    heroImage: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'benefits-of-it-outsourcing',
    title: '8 Benefits of IT Outsourcing for Growing Businesses',
    category: 'Managed IT',
    excerpt:
      'Eight specific, measurable benefits businesses realize from a competent IT outsourcing engagement — each tied to a business outcome you can defend at a board meeting.',
    heroImage: '/images/supporting/industries/austin-distel-744oGeqpxPQ-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'benefits-of-remote-it-support',
    title: "7 Benefits of Remote IT Support for Today's Distributed Workforce",
    category: 'Managed IT',
    excerpt:
      'Seven specific benefits of remote IT support for distributed and hybrid teams — and what good remote IT support actually looks like in practice.',
    heroImage: '/images/hero/services/aleksei-zhivilov-A6M3aowKR6I-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'network-outsourcing',
    title: 'Network Outsourcing: When It Makes Sense and How to Do It Right',
    category: 'Managed IT',
    excerpt:
      'When network outsourcing makes sense, what a good engagement delivers, and how to evaluate providers without ending up in a relationship that creates more problems.',
    heroImage: '/images/supporting/industries/topsphere-media-WxRd7byFxs4-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'what-is-the-difference-between-it-support-tiers',
    title: 'IT Support Tiers Explained: Tier 1, Tier 2, Tier 3, and Beyond',
    category: 'Managed IT',
    excerpt:
      'The IT support tier model explained — what work belongs at each tier, what staffing model produces good outcomes, and why the structure matters when buying IT support.',
    heroImage: '/images/supporting/services/priscilla-du-preez-xLKg2s4rXWE-unsplash.jpg',
    publishedDate: '2026-06-11',
  },

  // ─── Cybersecurity cluster (rewrite batch — June 2026) ────────────────────
  {
    slug: 'cyber-security-work-from-home',
    title: 'Cyber Security for Work From Home: A Practical Guide for Businesses',
    category: 'Cybersecurity',
    excerpt:
      'The cybersecurity risks specific to remote work — home networks, personal devices, distracted phishing — and the controls that defend against them without making remote work painful.',
    heroImage: '/images/supporting/services/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'encryption-benefits',
    title: '8 Real Benefits of Data Encryption for Business',
    category: 'Cybersecurity',
    excerpt:
      "Eight specific business benefits of data encryption — from neutralizing lost laptops to lowering cyber insurance premiums — plus what encryption does and doesn't protect against.",
    heroImage: '/images/hero/services/pexels-thisisengineering-3861951.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'risks-of-byod',
    title: '7 Real Risks of BYOD (And How to Manage Them Without Killing Productivity)',
    category: 'Cybersecurity',
    excerpt:
      "Seven concrete BYOD security risks every business should know — and the practical controls that close them while keeping BYOD workable for the people doing the work.",
    heroImage: '/images/hero/services/pexels-divinetechygirl-1181676.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'network-security-threats-and-vulnerabilities',
    title: '10 Network Security Threats and Vulnerabilities Every Business Should Know About',
    category: 'Cybersecurity',
    excerpt:
      "Ten network security threats most likely to cause real business damage today — phishing, ransomware, credential theft, supply chain, IoT, shadow IT — and the defenses that work.",
    heroImage: '/images/hero/blog/shamin-haky-RIk-i9rXPao-unsplash.jpg',
    publishedDate: '2026-06-11',
  },

  // ─── Final cluster (rewrite batch — June 2026) ───────────────────────────
  {
    slug: 'ultimate-it-strategic-planning-guide',
    title: 'The Ultimate IT Strategic Planning Guide for Business Leaders',
    category: 'Business Insights',
    excerpt:
      'Pillar guide to IT strategic planning — the 7 components of a real plan, how to do it without an internal CIO, the cadence that works, and the common pitfalls that derail it.',
    heroImage: '/images/hero/services/sophie-paterson-sgCfoY0xXwg-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'how-much-does-it-services-cost',
    title: 'How Much Do IT Services Cost? A Transparent 2026 Pricing Guide',
    category: 'Managed IT',
    excerpt:
      'Transparent 2026 pricing ranges for managed IT services, helpdesk, security, and project work — what drives cost, what is included, and how to compare proposals without being misled.',
    heroImage: '/images/supporting/services/pexels-thirdman-5582868.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'what-is-it-procurement',
    title: 'What Is IT Procurement? A Practical Guide for Business Leaders',
    category: 'Managed IT',
    excerpt:
      'IT procurement explained — the full lifecycle, common mistakes, and how to do it well in a growing business that does not have a dedicated procurement function.',
    heroImage: '/images/hero/services/creatopy-mlwrIzr7yNs-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'it-help-desk-best-practices',
    title: '10 IT Help Desk Best Practices That Actually Move the Needle',
    category: 'Managed IT',
    excerpt:
      "Ten help desk practices that consistently produce better user experience, faster resolution, and lower total cost — plus the anti-patterns that produce the opposite.",
    heroImage: '/images/supporting/services/pexels-mart-production-7255723.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: '7-eye-opening-ai-trends-every-business-should-prepare-for-in-2025-and-beyond',
    title: '7 Eye-Opening AI Trends Every Business Should Prepare For in 2026 and Beyond',
    category: 'AI',
    excerpt:
      'Seven AI trends shaping business in 2026 — from pilots-to-production to AI governance to data quality as the real competitive advantage. With what to do about each one.',
    heroImage: '/images/hero/services/pexels-mikhail-nilov-8108674.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'real-world-examples-of-how-ai-helps-businesses-compete',
    title: '6 Real-World Examples of How AI Helps Businesses Compete',
    category: 'AI',
    excerpt:
      'Six concrete examples of how businesses are using AI to compete more effectively — customer support, sales, document processing, software development, operations, and cybersecurity.',
    heroImage: '/images/hero/services/pexels-divinetechygirl-1181676.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'the-black-box-is-dead-why-business-leaders-can-no-longer-sit-on-the-sidelines',
    title: 'The Black Box Is Dead: Why Business Leaders Can No Longer Sit on the Sidelines of AI',
    category: 'AI',
    excerpt:
      "Why AI has become an executive-level responsibility — not a delegated technical one — and what business leaders specifically need to do about it.",
    heroImage: '/images/hero/services/sophie-paterson-sgCfoY0xXwg-unsplash.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: '6-reasons-healthcare-organizations-need-strong-it-network-services-now-more-than-ever',
    title: '6 Reasons Healthcare Organizations Need Strong IT Network Services Now More Than Ever',
    category: 'Business Insights',
    excerpt:
      'Six reasons strong IT network services are non-negotiable for healthcare organizations — from patient care reliability to HIPAA compliance to telehealth quality.',
    heroImage: '/images/supporting/services/pexels-mart-production-7088498.jpg',
    publishedDate: '2026-06-11',
  },
  {
    slug: 'durham-industries',
    title: 'The 7 Industries Driving Durham, NC: A Local Economy Overview',
    category: 'Business Insights',
    excerpt:
      "The seven industries powering Durham's economy — life sciences, healthcare, higher education, tech, financial services, professional services, manufacturing — and what each means for local businesses.",
    heroImage: '/images/hero/local/durham nc.jpg',
    publishedDate: '2026-06-11',
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

// Related posts: same category first, then top up with others to reach `count`.
export function relatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPost(slug)
  // Filter drafts and scheduled posts out of recommendations so the sidebar
  // never surfaces a link that 404s or previews an unpublished draft.
  const pool = BLOG_POSTS.filter(isVisible)
  if (!current) return pool.slice(0, count) as BlogPost[]
  const sameCategory = pool.filter((p) => p.slug !== slug && p.category === current.category)
  const others = pool.filter((p) => p.slug !== slug && p.category !== current.category)
  return [...sameCategory, ...others].slice(0, count)
}
