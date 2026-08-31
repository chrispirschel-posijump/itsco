// Post 11 of the editorial roadmap. Draft content authored August 2026 for
// December 21, 2026 publish. Targets `cloud migration cost` (110/mo, KD 0)
// — low volume, zero difficulty, CFO/CEO intent (funder question), which
// is deliberately distinct from the how-to intent served by the three
// existing cloud-migration posts (/blog/cloud-migration-strategy,
// /cloud-migration-steps, /cloud-migration-challenges). Positioned as the
// CFO-tier companion, cross-linked in the intro.
//
// All internal service URLs stripped of trailing slashes per the Aug 2026
// canonical fix.
//
// PRE-PUBLISH VERIFY: AWS reorganizes pricing pages regularly. Confirm
// the aws.amazon.com/ec2/pricing URL still resolves to the egress pricing
// table before publish; swap in a live URL if it moved.
//
// PRE-PUBLISH SOURCING: The 80%/12-month IDC repatriation figure is
// widely attributed but currently linked via a secondary roundup. If
// Mike wants a bulletproof link, source IDC's own press release at
// publish time.
//
// TIMING NOTE: publishes into slow pre-Christmas week; social should
// front-load Dec 15-18 for the year-end budget-conversation window.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  {
    type: 'p',
    text: "Cloud migrations blow their budgets in a predictable way: the categories nobody planned for are the categories that cost the most. A project scoped at $200,000 lands at $400,000, and every dollar of the overage was foreseeable — it just wasn't on the proposal, because the costs that don't win the pitch rarely make it onto the slide. This isn't the how-to-migrate post; for the technical plan, our existing guides on [cloud migration strategy](/blog/cloud-migration-strategy), [the migration steps themselves](/blog/cloud-migration-steps), and [the common challenges](/blog/cloud-migration-challenges) are written for the IT lead running the project. This one is written for the person who signs off on it — what a CFO of a 50–500 person company should actually budget when the migration proposal hits the desk, including the three line items that turn a clean estimate into a messy invoice.",
  },

  { type: 'h2', text: 'The Three Hidden Costs That Blow Migration Budgets' },
  {
    type: 'p',
    text: "Three categories account for most migration overruns. None are secrets — they're just usually absent from the proposal.",
  },
  { type: 'h3', text: '1. Data egress' },
  {
    type: 'p',
    text: "The cloud's pricing model is asymmetric: moving data in is free, moving it out is metered. AWS charges [$0.09 per GB for the first 10TB of internet egress each month](https://aws.amazon.com/ec2/pricing/on-demand/) (US regions, 2026), and Azure and GCP price similarly. That sounds trivial until you run real volume — a workload pushing 50TB a month to the internet runs roughly $4,400 in base egress alone, before the cross-availability-zone and NAT-gateway surcharges that ride on top. At mid-to-large scale, data transfer routinely becomes 10–20% of the total cloud bill, and it's the line that shows up in month four, not month one. The cruelest version of this fee is the one you pay to *leave*: egress applies to migrating data out, so the cost of correcting a cloud decision is itself metered. Budget it explicitly, or discover it on an invoice.",
  },
  { type: 'h3', text: '2. Integration and rewriting effort' },
  {
    type: 'p',
    text: "Most migrations aren't clean lift-and-shift. Integrations break, authentication flows need rework, data pipelines need re-pointing, and applications that assumed an on-prem network behave differently in a cloud one. The vendor estimate almost always assumes a smoother path than reality delivers, because the estimate is priced to win the deal and assumes your team has the internal capacity to absorb the migration cleanly. The reliable planning move: budget roughly 1.5x the vendor's engineering estimate. The half you're adding isn't padding — it's the integration work the estimate quietly assumed away.",
  },
  { type: 'h3', text: '3. The dual-run period' },
  {
    type: 'p',
    text: "For 3 to 12 months, you pay for both environments at once. The old system can't be switched off until the new one is proven, so the migration period means two infrastructure bills stacked on top of each other — plus the team effort of running both. Almost nobody budgets this line, and every migration incurs it. A six-month dual-run on a meaningful workload is a real five- or six-figure cost that belongs on the proposal as its own line, not absorbed as a surprise.",
  },

  { type: 'h2', text: "Cloud Isn't Always Cheaper Anymore (The 2027 Repatriation Reality)" },
  {
    type: 'p',
    text: "For a decade the assumption was simple: cloud is cheaper, migration is the direction of progress. Around 2023 that stopped being universally true, and 2027 is the year honest CFOs stop budgeting on the old version. The data is no longer ambiguous. Flexera's [2026 State of the Cloud report](https://www.flexera.com/blog/finops/flexera-2026-state-of-the-cloud-report-the-convergence-of-cloud-and-value/) found wasted cloud spend rose to 29% — the first increase in five years — and that organizations have already repatriated roughly 21% of their workloads. An [IDC survey found 80% of enterprises](https://sentrytechsolutions.com/blog/cloud-vs-on-prem-2026-the-debate-that-will-not-die) expect to move at least some compute or storage back on-prem within 12 months.",
  },
  {
    type: 'p',
    text: "The canonical case grounds it. Software company 37signals left AWS in 2023 and [published every number](https://world.hey.com/dhh): its annual cloud bill fell from $3.2 million to about $1.3 million — nearly $2 million saved per year — against a one-time hardware outlay of roughly $700,000 that was recouped inside the first year. Their five-year projected savings now exceed $10 million. The lesson isn't \"leave the cloud.\" It's that the workloads driving those savings share a profile, and you can identify yours. On-prem now tends to win for: steady-state databases with predictable resource needs; batch processing on known schedules; high-egress data pipelines (where the transfer fees above dominate); and fixed, high-utilization compute that runs hot around the clock. Cloud still wins clearly for: variable or bursty load; genuine global geographic distribution; rapid experimentation environments where you spin things up and tear them down; and anything with truly unpredictable scale — the elasticity you're paying a premium for is worth it only when you actually use it.",
  },
  {
    type: 'p',
    text: "And the honest counterweight: cloud is not shrinking. Gartner projects worldwide public cloud spending will keep climbing past $700 billion, because for the right workloads the economics still favor renting over owning. The 2027 question was never cloud yes-or-no. It's cloud *for what, specifically* — a placement decision made per workload, not a directional bet made once for the whole company.",
  },

  {
    type: 'callout',
    text: "**Draft cloud migration proposal on your desk?** A free 30-minute call with Mike Savino runs the three-hidden-costs check against the actual numbers in front of you — and the answer sometimes changes what gets migrated, not just what it costs.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=cloud-cost-mid',
    },
  },

  { type: 'h2', text: 'When to Migrate Now vs. Wait' },
  {
    type: 'p',
    text: "The decision comes down to whether there's a business driver beyond momentum. **Migrate now if:** your on-prem hardware is at end-of-life and the refresh dollar was coming anyway (migrating instead of re-buying is a genuine wash-or-better); you need geographic distribution or scale you can't practically build yourself; or a compliance or contractual obligation requires a cloud posture. **Wait if:** the workload is steady-state, your on-prem hardware has three or more good years left, and the only real driver is that everyone else is doing it. \"Everyone else is doing it\" is how a company ends up in Flexera's 29%-wasted-spend statistic. The strongest position is neither cloud-first nor cloud-averse — it's workload-by-workload honesty about which location earns its cost for each specific thing you run.",
  },

  { type: 'h2', text: 'The Four-Phase Budget Structure That Survives Contact With Reality' },
  {
    type: 'p',
    text: "A migration budget that holds up has four phases, and the last one is the phase most budgets skip entirely:",
  },
  {
    type: 'ul',
    items: [
      "**Assessment and planning — roughly $15K–$40K.** Workload inventory, TCO modeling, target architecture, and migration sequence. Skipping this doesn't save the money; it moves the cost into the execution phase at a worse exchange rate, because unplanned migration is the expensive kind.",
      "**Migration execution — budget 1.5x the vendor estimate.** This is where engineering effort exceeds the quote most predictably, for the integration reasons above. The multiplier isn't pessimism; it's the historical average made into a planning number.",
      "**Dual-run overlap — 3 to 12 months of both bills.** Budget it as its own explicit line rather than absorbing it. It is the single most common surprise on migration invoices, and it is entirely foreseeable.",
      "**Optimization and repatriation review — ongoing, year one onward.** Right-sizing, reserved-capacity commitments, and — critically — a formal 12-month review to identify the workloads that turned out to belong on-prem after all. This is the phase every migration budget omits, and it's the one that catches the 29% waste before it compounds.",
    ],
  },

  { type: 'h2', text: "What to Do Before the Proposal Hits the CFO's Desk" },
  {
    type: 'p',
    text: "If you're the one building the migration proposal, three additions make it survivable — and more likely to get funded, because they signal you've costed it honestly. First, put explicit line items on all three hidden costs: egress, the integration overrun (the 1.5x), and the dual-run period, each named and priced rather than buried. Second, write in a repatriation clause — name which workloads get a 12-month cost review and what result triggers moving them back, so the decision is a scheduled checkpoint instead of an admission of error later. Third, cross-reference the full-year plan: show how this migration lands inside the [2027 IT budget](/blog/2027-it-budget-planning-guide), running it through the same five-outcome test every other line item faces. A proposal that names its own hidden costs is the one a CFO can actually trust.",
  },

  { type: 'h2', text: 'A Location Decision, Remade Per Workload' },
  {
    type: 'p',
    text: "The cloud migration you should fund and the one you shouldn't are separated by a single question: does the plan on the desk name the costs the vendor left out? The three hidden costs aren't secrets — they're just not on most proposals, because they don't win the pitch. Budget them explicitly, keep a repatriation review on the calendar, and treat cloud as a location decision that gets remade per workload rather than a directional bet made once and defended forever. That's what [technology ROI](/maximize-roi-with-managed-it-services) looks like at the infrastructure layer: cost accountability, revisited on a schedule, without pretending any location is permanent. The companies that budget this way don't spend less because they fear the cloud — they spend well because they priced it honestly. A [cloud consulting](/cloud-consulting-services) or [hybrid infrastructure](/public-hybrid-cloud-services) review is simply that honesty, applied before the invoice teaches it.",
  },
]
