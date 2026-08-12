// Post 5 of the editorial roadmap. Draft content authored August 2026 for
// September 28, 2026 publish. Serves as the citable sourcing backbone for
// the ROI calculator's downtime math — every industry stat cites a named,
// verified primary source (ITIC, Uptime Institute 2026, Gartner, Verizon
// DBIR 2025). Calculator not named in-body pending site-integration timing.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  // ── Intro ────────────────────────────────────────────────────────────────
  {
    type: 'p',
    text: "I hear a version of this on discovery calls every month: \"The email server was down for a couple hours last week, but honestly, nobody was locked out that long.\" Here's the problem with that sentence — a 2-hour email outage was never 2 hours of lost email. It was missed meetings, delayed decisions, salespeople not answering inbound leads, customers who reached out and got silence, and an IT resource dropping everything to firefight. The cost was real; it just never appeared on an invoice, so it never made it into a spreadsheet. This post shows you how to calculate what downtime actually costs your business — using published industry benchmarks and a formula you can run on a napkin today.",
  },

  // ── H2 · 4 Cost Categories ───────────────────────────────────────────────
  { type: 'h2', text: 'The 4 Cost Categories Most CEOs Miss' },
  {
    type: 'p',
    text: "Executives usually count downtime as \"employees can't work.\" That's 1 of 4 buckets:",
  },
  {
    type: 'ul',
    items: [
      "**Employee productivity.** The obvious one: loaded hourly cost × affected headcount × duration. Fifty people idled for 2 hours at a $75 loaded rate is $7,500 — before anything else happens.",
      "**Revenue disruption.** The deal call that didn't happen, the inbound lead that went to a competitor who answered, the e-commerce cart abandoned at checkout. This bucket scales with how customer-facing the failed system is.",
      "**Recovery costs.** Emergency IT hours at premium rates, overtime, vendor callouts, replacement hardware bought same-day at whatever it costs. Reactive recovery is always the most expensive kind.",
      "**Trust erosion.** Customers who quietly don't come back, deal cycles that lengthen after a visible failure, and employees who lose confidence in their tools. The slowest bucket to fill — and the slowest to drain.",
    ],
  },
  {
    type: 'p',
    text: "Worth knowing when you read headline benchmarks: most published downtime studies measure only the first 2 buckets. The real number for your business is likely higher than the industry figures suggest, not lower.",
  },

  // ── H2 · Per-Hour Numbers ────────────────────────────────────────────────
  { type: 'h2', text: 'The Per-Hour Numbers, by Company Size' },
  {
    type: 'p',
    text: "The published data is blunt. [ITIC's Hourly Cost of Downtime research](https://itic-corp.com/itic-reports-surveys/) finds a single hour of downtime now costs more than $300,000 for over 90% of mid-size and large enterprises — and 41% put the figure between $1 million and $5 million. Even at the smallest end, ITIC estimates a micro-business under 25 employees with a single server loses roughly $1,670 per minute, calling that figure \"extremely conservative.\" The [Uptime Institute's 2026 Annual Outage Analysis](https://intelligence.uptimeinstitute.com/resource/annual-outage-analysis-2026) points the same direction: 57% of organizations say their most recent major outage cost over $100,000, and for the second consecutive year, 1 in 5 outages exceeded $1 million. Gartner's widely cited 2014 estimate — $5,600 per minute, about $336,000 per hour — now reads as the conservative baseline the newer surveys have left behind.",
  },
  {
    type: 'p',
    text: "Those studies skew toward larger organizations. Calibrating the published data down to the companies this blog serves:",
  },
  {
    type: 'table',
    headers: ['Company size', 'Typical hourly downtime cost'],
    rows: [
      ['Under 50 employees', '$8K–$25K per hour'],
      ['50–100 employees', '$25K–$75K per hour'],
      ['100–500 employees', '$75K–$250K per hour'],
    ],
    caption:
      'Ranges synthesized from published industry benchmarks (ITIC, Uptime Institute) scaled to SMB and mid-market profiles — not ITSco client data. Your number depends on revenue per employee and how customer-facing the affected systems are.',
  },
  {
    type: 'p',
    text: "Ranges, deliberately. A point estimate for \"your\" downtime cost from someone who hasn't seen your P&L isn't analysis — it's marketing. The ranges hold up; where you sit inside them is what the napkin math below is for.",
  },

  // ── H2 · Frequency ───────────────────────────────────────────────────────
  { type: 'h2', text: 'How Often Does This Actually Happen?' },
  {
    type: 'p',
    text: "Fair question — an expensive event that never occurs costs nothing. The honest news from the Uptime Institute is that outage frequency has declined for 5 consecutive years as infrastructure improves. The rest of the picture: roughly half of operators still experienced at least one impactful outage in the past 3 years, about 1 in 10 outages causes serious or severe disruption, and the events that do land are getting more expensive, not less. Two findings matter most for a growing business. First, nearly 40% of organizations suffered a major outage caused by human error in the past 3 years — and 85% of those trace back to staff failing to follow procedures, or procedures that were inadequate to begin with. Second, Uptime flags cybersecurity incidents as a rising cause with unusually severe, lasting impacts — consistent with [Verizon's 2025 DBIR](https://www.verizon.com/business/resources/reports/dbir/) finding ransomware present in 44% of breaches. Downtime isn't primarily a hardware lottery. It's a process and security posture problem — which means it's largely a managed variable.",
  },
  {
    type: 'p',
    text: "Duration matters as much as frequency. Uptime's 2025 survey data puts the median significant outage at 53 minutes — but the distribution has a long tail, with nearly 1 in 5 outages running past 4 hours. Multiply that tail against the per-hour figures above and the shape of the risk becomes clear: the median event stings, while the tail event is the one that shows up in the annual report. Budgeting against the median is how companies end up surprised.",
  },

  // ── Mid-post callout · worked example + CTA ──────────────────────────────
  {
    type: 'callout',
    text: "**The napkin version:** take a 100-person firm at $50,000 per hour — mid-range for its size in the table above. On reactive, break-fix support absorbing roughly 20 hours of unplanned downtime a year, that's about $1,000,000 annually. Cut downtime to 4 hours with proactive management and the same math says $200,000 — roughly $800,000 a year in avoided cost. Run your own numbers in a free 30-minute consultation with Mike Savino.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=downtime-cost-mid',
    },
  },

  // ── H2 · Napkin Math Formula ─────────────────────────────────────────────
  { type: 'h2', text: "The CEO's Napkin Math Formula" },
  {
    type: 'p',
    text: "**Annual downtime cost = hourly cost × annual downtime hours × impact factor.** Hourly cost is headcount × loaded hourly rate (about $75 for typical professional services — the same loaded-cost basis as our [50-person IT budget breakdown](/blog/what-does-it-cost-50-person-company)). Downtime hours come from your IT provider or internal team — the actual unplanned-outage total for the last 12 months. The impact factor adjusts for scope: 0.9–1.0 when the whole company is down, 0.4–0.6 for a critical system, 0.1–0.2 for a niche one.",
  },
  {
    type: 'p',
    text: "Worked example: a 75-person firm runs 75 × $75 = $5,625 per hour of company-wide productivity. Say last year brought 12 hours of unplanned downtime, mostly critical-system events, so apply a 0.5 factor: $5,625 × 12 × 0.5 ≈ **$34,000 a year** — and that's the floor, because this formula only prices the first of the 4 buckets. Layer in revenue disruption, emergency recovery, and trust erosion, and the published per-hour benchmarks above explain why real totals run multiples of the payroll math. If the floor alone exceeds what prevention costs, the decision has made itself.",
  },

  // ── H2 · Proactive Management ────────────────────────────────────────────
  { type: 'h2', text: 'What Proactive Management Actually Prevents' },
  {
    type: 'p',
    text: "Not everything — a hurricane doesn't care about your monitoring stack. But look at what the outage data says actually causes downtime, and the preventable share is large. Continuous [managed IT monitoring](/managed-it-services) catches the failing drive, the certificate about to expire, and the server running out of headroom while they're still tickets instead of outages. Documented, tested procedures attack the single biggest human-error driver in the Uptime data — the 85% of error-caused outages rooted in process failures. [24/7 detection and response](/mdr-monitoring-and-response) compresses the gap between \"something's wrong\" and \"someone's on it,\" which is where an incident either stays small or doesn't. Redundancy in the right places — failover internet, replicated critical systems — means a partial failure degrades service instead of stopping the company, converting would-be outages into events most employees never notice. And when something does get through, tested [backup and disaster recovery](/backup-disaster-recovery) is the difference between restoring in hours and rebuilding over days — the single largest lever on the \"annual downtime hours\" term in your formula. None of this eliminates the impact factor; it shrinks every term it touches.",
  },

  // ── H2 · What to Do ──────────────────────────────────────────────────────
  { type: 'h2', text: 'What to Do With These Numbers' },
  {
    type: 'ul',
    items: [
      "**1. Run the napkin math for your business.** Ten minutes, real numbers, no vendor involved — use the formula above with your own headcount, downtime hours, and impact factor to size what you're absorbing today.",
      "**2. Ask your current provider or internal team one question:** how many hours of unplanned downtime did we have in the last 12 months? A precise answer tells you they're managing it. \"Let me get back to you\" is also an answer.",
      "**3. Compare what you're absorbing to what prevention costs.** For most 50–500 person companies, the downtime line alone covers a meaningful share of a managed IT budget — before counting anything else it buys. An [IT ROI assessment](/it-roi-assessment) turns that comparison into a documented number.",
    ],
  },

  // ── H2 · Closing ─────────────────────────────────────────────────────────
  { type: 'h2', text: 'The Cheapest Hour Is the One That Never Happens' },
  {
    type: 'p',
    text: "Downtime cost is knowable — 4 buckets, published per-hour benchmarks, one napkin formula. What the exercise usually reveals is that the status quo has a price tag nobody had written down. If you want a second set of eyes on your math, book a 30-minute call with Mike Savino and bring last year's outage history; measured against [what IT spend should return](/maximize-roi-with-managed-it-services), downtime avoided is the most quantifiable ROI in the entire budget.",
  },
]
