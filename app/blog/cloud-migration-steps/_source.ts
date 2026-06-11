// Rewrite. Fresh ROI-focused content from the ITSco team.
// Target keywords: "cloud migration steps", "cloud migration process".

export const PAGE_TITLE =
  'The 7 Essential Cloud Migration Steps (And the Order That Matters) | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: 'A successful cloud migration is the result of following a structured set of steps in a specific order. Skip steps, or do them out of sequence, and the migration either fails outright or delivers a more expensive version of what you had before. This guide walks through the seven essential cloud migration steps, what each one actually involves, and what can go wrong if you rush or skip them.',
  },
  {
    type: 'p',
    text: 'The order matters. Step 1 informs every subsequent decision; step 7 only delivers value if the prior six were done well.',
  },

  { type: 'h2', text: 'Step 1: Assess and Inventory' },
  {
    type: 'p',
    text: "Catalog every workload in scope: servers, applications, databases, file shares, identity, dependencies, integration points, data volumes, and the people who own each one. Document current state thoroughly. Tools like cloud assessment platforms (Azure Migrate, AWS Application Discovery, ITSco's discovery tooling) automate most of the data collection.",
  },
  {
    type: 'p',
    text: "What goes wrong if you skip it: every subsequent decision is a guess. Migrations fail in unexpected places because dependencies were not understood up front.",
  },

  { type: 'h2', text: 'Step 2: Define the Business Case and Success Metrics' },
  {
    type: 'p',
    text: "Translate business goals into measurable success metrics. Target cost reduction, target time-to-deploy, target uptime, target security posture, target compliance attestation — whatever the business actually needs. Document each metric, the current baseline, and the target by a specific date.",
  },
  {
    type: 'p',
    text: "What goes wrong if you skip it: nobody can tell whether the migration is delivering value. Leadership loses confidence in the program halfway through.",
  },

  { type: 'h2', text: 'Step 3: Design the Target Architecture' },
  {
    type: 'p',
    text: 'Document the target state in detail: which cloud (Azure, AWS, Google, hybrid), network topology, identity and access model, security operations, monitoring, backup, disaster recovery, and FinOps practices. Build the architecture document before the first workload moves.',
  },
  {
    type: 'p',
    text: 'What goes wrong if you skip it: each workload gets a one-off design. Six months in, you have a cloud environment with three identity systems, four security models, and no coherent operations plan.',
  },

  { type: 'h2', text: 'Step 4: Build the Migration Plan and Wave Schedule' },
  {
    type: 'p',
    text: 'Sequence workloads into waves of 5-20 items each. Early waves take on lower-risk workloads to prove the mechanics. Later waves take on business-critical systems with more dependencies. Each wave has defined entry criteria, success metrics, and exit review.',
  },
  {
    type: 'p',
    text: 'What goes wrong if you skip it: everything happens at once. Risk concentrates. Mistakes affect business-critical workloads. Recovery from failure is painful.',
  },

  { type: 'h2', text: 'Step 5: Prepare and Pilot' },
  {
    type: 'p',
    text: 'Stand up the target cloud environment, configure identity, security, networking, and operations. Run a pilot wave with low-risk workloads to validate the migration playbooks, tooling, and team readiness. Fix what does not work before you scale.',
  },
  {
    type: 'p',
    text: "What goes wrong if you skip it: process problems get discovered on business-critical workloads instead of on pilot workloads. Recoverable mistakes become career-defining ones.",
  },

  { type: 'h2', text: 'Step 6: Execute Migration Waves' },
  {
    type: 'p',
    text: "Run each wave through a consistent execution pattern: pre-migration validation, cutover, post-migration validation, user acceptance testing, monitoring period, and formal closeout. Document lessons learned at each wave's exit review. Improve the playbook between waves.",
  },
  {
    type: 'p',
    text: "What goes wrong if you skip it: every wave is improvised. Quality varies. Issues that should have been fixed after wave 1 recur in wave 5.",
  },

  { type: 'h2', text: 'Step 7: Optimize, Operate, and Improve' },
  {
    type: 'p',
    text: 'The migration is not done when the last workload cuts over. The first 90 days post-migration are when cost, performance, and security gaps surface. Right-size instances, eliminate idle resources, refine security controls, tune monitoring, and update documentation. Bake FinOps discipline into ongoing operations so cloud spend stays accountable.',
  },
  {
    type: 'p',
    text: "What goes wrong if you skip it: cloud costs spiral; performance gets blamed on the cloud rather than on the absence of optimization; security gaps stay open until an incident exposes them.",
  },

  { type: 'h2', text: 'The Common Mistake at Every Step' },
  {
    type: 'p',
    text: "The single most common mistake across cloud migrations is treating the work as a technology project rather than a business transformation. Technology projects optimize for completing migration tasks; business transformations optimize for delivering business outcomes. The former produces a migrated environment that nobody is sure how to evaluate. The latter produces measurable improvements in cost, agility, security, and resilience that leadership can defend.",
  },

  { type: 'h2', text: 'How Long Does a Cloud Migration Take?' },
  {
    type: 'p',
    text: 'For a mid-sized business — 50-300 workloads, mixed complexity — a full cloud migration typically runs 6-18 months end to end, with most workloads moved in months 3-12 and the final optimization phase running another 3-6 months. Larger or more complex environments take longer. Skipping steps does not actually speed things up; it just shifts the time from execution into rework.',
  },

  { type: 'h2', text: 'Getting Help With Cloud Migration' },
  {
    type: 'p',
    text: 'For most mid-sized businesses, working with an experienced cloud migration partner significantly improves outcomes. ITSco has run cloud migrations for clients across financial services, healthcare, professional services, manufacturing, and non-profits. If you are planning a cloud migration and want an honest scoping conversation about what the work would look like for your environment, a free consultation is the right place to start.',
  },
] as const
