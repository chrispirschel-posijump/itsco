// Rewrite. Fresh ROI-focused content from the ITSco team.
// Target keywords: "what is IT procurement", "IT procurement process".

export const PAGE_TITLE =
  'What Is IT Procurement? A Practical Guide for Business Leaders | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: 'IT procurement is the process of acquiring the hardware, software, services, and licensing your business needs to operate — done well, it produces better value, lower risk, and a cleaner technology environment. Done poorly, it produces vendor sprawl, surprise costs, and a long tail of underused subscriptions that nobody is willing to cancel.',
  },
  {
    type: 'p',
    text: 'This guide explains what IT procurement actually involves, walks through the procurement lifecycle, and addresses how to do it well in a growing business that does not have a dedicated procurement function.',
  },

  { type: 'h2', text: "What IT Procurement Includes" },
  {
    type: 'p',
    text: 'IT procurement covers more than buying laptops. The typical scope includes:',
  },
  {
    type: 'ul',
    items: [
      'Endpoint hardware (laptops, desktops, monitors, peripherals)',
      'Server, storage, and networking equipment',
      "Software licenses (operating systems, productivity, security, line-of-business apps)",
      'Cloud services and SaaS subscriptions',
      'Telecommunications and connectivity (internet, VoIP, mobile)',
      'Managed services and professional services from IT firms',
      'IT consumables (cables, accessories, replacement components)',
    ],
  },

  { type: 'h2', text: 'Why IT Procurement Matters' },
  {
    type: 'p',
    text: 'In most growing businesses, IT procurement is the cost line that quietly grows faster than the rest of the business. The reasons are familiar: tools accumulate without anyone tracking them, vendors auto-renew without anyone reviewing them, departments buy software with credit cards outside central governance, and the IT person who would consolidate it is too busy to do it.',
  },
  {
    type: 'p',
    text: "Good IT procurement closes those gaps. Common outcomes:",
  },
  {
    type: 'ul',
    items: [
      '15-30% reduction in total IT spending through consolidation and right-sizing',
      'Better vendor terms through volume aggregation',
      'Lifecycle management that prevents end-of-life surprises',
      'Visibility into actual SaaS usage (typically eliminates 20-40% of subscriptions)',
      'Clear ownership and accountability for IT assets',
    ],
  },

  { type: 'h2', text: 'The IT Procurement Lifecycle' },

  { type: 'h3', text: '1. Needs Assessment' },
  {
    type: 'p',
    text: 'Confirm the business need behind a procurement request. What problem is being solved? What scale? What constraints? Procurement requests should connect to business outcomes, not just "the team wants this tool."',
  },

  { type: 'h3', text: '2. Vendor Selection and Sourcing' },
  {
    type: 'p',
    text: 'Identify viable vendors. For commodity items (laptops, monitors, network equipment), this is straightforward. For specialized software or strategic technology, run a structured evaluation against defined criteria.',
  },

  { type: 'h3', text: '3. Pricing and Negotiation' },
  {
    type: 'p',
    text: 'Compare pricing across at least 2-3 vendors for any meaningful purchase. Negotiate volume discounts, multi-year terms, and bundled pricing. IT procurement specialists routinely save 20-40% off list price on hardware and software through informed negotiation.',
  },

  { type: 'h3', text: '4. Contract and Terms Review' },
  {
    type: 'p',
    text: 'Review terms carefully: renewal language, price increase caps, exit clauses, support levels, data ownership, indemnification. Auto-renewing SaaS contracts with 12-month exit windows are particularly expensive when nobody reviews them.',
  },

  { type: 'h3', text: '5. Procurement and Deployment' },
  {
    type: 'p',
    text: 'Place the order, take delivery, deploy the asset, document it in your asset management system, and onboard users. Each step should have a defined owner.',
  },

  { type: 'h3', text: '6. Ongoing Management' },
  {
    type: 'p',
    text: 'Track usage, license compliance, and renewal dates. Review utilization periodically — if a tool is not being used, do not auto-renew. Maintain accurate asset inventory.',
  },

  { type: 'h3', text: '7. End of Life and Disposition' },
  {
    type: 'p',
    text: 'When hardware reaches end of life or software is retired, follow proper disposition procedures — secure data destruction, certified recycling, recovery of any residual value. This is where ITAD (IT Asset Disposition) comes in.',
  },

  { type: 'h2', text: 'Common IT Procurement Mistakes' },
  {
    type: 'p',
    text: 'Patterns that produce expensive procurement outcomes:',
  },
  {
    type: 'ul',
    items: [
      "No central visibility into what is being bought, when, and why",
      'Credit card SaaS purchases outside central governance',
      "Auto-renewing contracts that nobody reviews",
      "Single-source purchasing without comparing alternatives",
      "Buying for peak demand instead of right-sizing",
      "No lifecycle planning — end-of-life surprises become emergency purchases",
      "No retirement process for software no longer in use",
    ],
  },

  { type: 'h2', text: 'How to Do IT Procurement Well in a Growing Business' },
  {
    type: 'p',
    text: 'Practical practices for businesses that do not have a dedicated procurement function:',
  },
  {
    type: 'ul',
    items: [
      'Name a single owner for IT procurement (often the COO, CFO, or operations leader)',
      'Maintain a central inventory of hardware, software, and SaaS subscriptions',
      'Set a threshold above which purchases require approval',
      "Block credit card purchases of SaaS without IT review",
      "Review SaaS portfolio quarterly and cancel what is not used",
      'Negotiate multi-year terms with price caps on renewing software',
      'Use a managed services partner with procurement capacity for hardware and licensing',
    ],
  },

  { type: 'h2', text: 'How a Managed Services Partner Can Help' },
  {
    type: 'p',
    text: 'Most managed services providers offer IT procurement as part of the engagement. The benefits:',
  },
  {
    type: 'ul',
    items: [
      'Access to partner pricing your business size alone could not negotiate',
      'Consolidated procurement across hardware, software, and cloud',
      'Lifecycle management baked into ongoing services',
      'Vendor relationships managed by someone whose job it is',
      'Visibility into actual usage to drive consolidation',
    ],
  },
  {
    type: 'p',
    text: "Most managed services clients save more on procurement through the partner than they spend on the procurement service component of their engagement — and get a cleaner environment as a byproduct.",
  },

  { type: 'h2', text: 'The Bottom Line' },
  {
    type: 'p',
    text: 'IT procurement is one of the underused levers of business efficiency. Most growing businesses are spending 15-30% more on IT than they need to because of accumulated SaaS subscriptions, auto-renewing contracts, and uncoordinated purchasing. A deliberate IT procurement function — internal owner, central visibility, regular review, and a competent partner — captures most of that as savings without sacrificing capability.',
  },
  {
    type: 'p',
    text: 'ITSco offers IT procurement as part of managed IT services for businesses across North Carolina, South Carolina, and Virginia. If you would like an honest assessment of whether your current IT spend could be optimized, a free scoping consultation is the right starting point.',
  },
] as const
