// Rewrite. Fresh ROI-focused content from the ITSco team.
// Target keywords: "cloud migration strategy", "cloud migration plan".

export const PAGE_TITLE =
  'How to Build a Cloud Migration Strategy That Actually Delivers ROI | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: 'Most cloud migration projects do not fail because the technology is hard. They fail because nobody built a real strategy before the work started. A cloud migration without a strategy is a series of expensive lift-and-shift moves that produce a cloud bill, not a transformation.',
  },
  {
    type: 'p',
    text: 'This guide walks through what an actual cloud migration strategy looks like — the components, the decisions, the common pitfalls — and how to build one that delivers measurable ROI instead of a more expensive version of what you already had.',
  },

  { type: 'h2', text: 'What a Cloud Migration Strategy Is (And Is Not)' },
  {
    type: 'p',
    text: 'A cloud migration strategy is a documented plan that translates business goals into a sequenced set of technology decisions: which workloads move, in what order, to which cloud, using which migration approach, against what success metrics. It is not a Visio diagram of the target architecture. It is the operating plan that connects the architecture to the business outcomes that justify the spend.',
  },
  {
    type: 'p',
    text: 'A real strategy answers questions like: which workloads deliver the highest ROI when migrated, which ones should never move, what the total cost of ownership looks like across three years, what the security and compliance posture will be in the new environment, and what milestones determine whether the migration is succeeding.',
  },

  { type: 'h2', text: 'The 6 Components of a Cloud Migration Strategy' },

  { type: 'h3', text: '1. Business Case and Success Metrics' },
  {
    type: 'p',
    text: "Start with the outcomes the business actually needs: cost reduction, scalability, faster product release, better resilience, simpler compliance, or some combination. Each outcome should have a defined metric (target cost savings, target uptime, target time-to-deploy, etc.) and a target date. Without measurable success criteria, you cannot tell whether the migration is working.",
  },

  { type: 'h3', text: '2. Workload Inventory and Assessment' },
  {
    type: 'p',
    text: 'Catalog every workload in scope. For each, assess: dependencies, performance profile, data sensitivity, regulatory constraints, expected migration effort, expected ROI. This is where most strategies live or die — without this inventory, every other decision is a guess.',
  },

  { type: 'h3', text: '3. Migration Approach Per Workload' },
  {
    type: 'p',
    text: 'Not every workload should move the same way. The five common approaches:',
  },
  {
    type: 'ul',
    items: [
      'Rehost ("lift and shift") — fastest, lowest immediate value',
      'Replatform ("lift and reshape") — moderate effort, moderate benefit',
      'Refactor ("rearchitect") — high effort, highest cloud benefit',
      'Repurchase (move to SaaS) — eliminates the workload entirely',
      'Retire — turn it off; nobody uses it anymore',
    ],
  },
  {
    type: 'p',
    text: 'Apply the right approach to each workload based on its business value, technical complexity, and the ROI of investing more migration effort.',
  },

  { type: 'h3', text: '4. Target Architecture and Cloud Selection' },
  {
    type: 'p',
    text: 'Document the target state: which cloud (Azure, AWS, Google Cloud, hybrid, multi-cloud), how identity and access will work, how networking connects on-prem and cloud, how security operations will run, how monitoring and observability will be unified. This is the architectural plan that subsequent migration waves are built against.',
  },

  { type: 'h3', text: '5. Cost Model and FinOps Discipline' },
  {
    type: 'p',
    text: "Build a 3-year total cost of ownership (TCO) model. Cloud costs without discipline routinely come in 40-60% higher than estimated because nobody is right-sizing instances, shutting down idle resources, or using reserved capacity. Bake FinOps practices — tagging, ownership, budgets, monthly reviews — into the strategy from day one.",
  },

  { type: 'h3', text: '6. Migration Sequence and Wave Plan' },
  {
    type: 'p',
    text: 'Sequence the work into waves of 5-20 workloads each. Early waves should be lower-risk workloads that prove the migration mechanics; later waves take on more business-critical systems. Each wave needs defined entry criteria, success metrics, and exit reviews before the next wave begins.',
  },

  { type: 'h2', text: 'The Pitfalls That Sink Cloud Migration Strategies' },
  {
    type: 'p',
    text: 'Patterns that consistently produce failed or underperforming migrations:',
  },
  {
    type: 'ul',
    items: [
      'Lift-and-shift everything because it is fastest, then discover the cloud bill is higher than the data center bill',
      'No FinOps discipline — costs spiral; nobody is accountable',
      "Security as an afterthought — gaps exposed during the first audit after go-live",
      'Ignoring identity and access management — every workload ends up with its own access model',
      'No success metrics — leadership cannot tell whether the migration is delivering anything',
      'Trying to migrate during peak operational periods or major product cycles',
    ],
  },

  { type: 'h2', text: 'What a Good Strategy Delivers' },
  {
    type: 'p',
    text: 'A well-built cloud migration strategy produces clarity at three levels: executive (we know what success looks like), engineering (we know how to build it), and operations (we know how to run it). When all three levels agree on what the migration is supposed to deliver and how progress will be measured, success becomes much more likely.',
  },
  {
    type: 'p',
    text: 'Concrete outcomes most organizations should expect from a well-executed cloud migration strategy include:',
  },
  {
    type: 'ul',
    items: [
      'Predictable, justifiable cloud spend tracked against a TCO model',
      'Measurable improvements in scalability, resilience, and time-to-deploy',
      'Security and compliance posture maintained or improved in the new environment',
      'Reduced data center footprint and associated operational costs',
      'A foundation for the next generation of business capabilities (AI, advanced analytics, modern application architectures)',
    ],
  },

  { type: 'h2', text: 'When to Build the Strategy Yourself vs. With a Partner' },
  {
    type: 'p',
    text: 'Building a cloud migration strategy internally is possible for organizations with deep cloud engineering and FinOps expertise. For most mid-sized businesses, working with a managed cloud services partner produces a better strategy faster — because the partner has done this work many times before, has seen what works, and has FinOps tooling and processes ready to deploy.',
  },
  {
    type: 'p',
    text: 'ITSco builds and executes cloud migration strategies for businesses across North Carolina, South Carolina, and Virginia. If you are at the strategy stage of a cloud move, a free scoping consultation can help you decide what work to do internally and where a partner would add the most value.',
  },
] as const
