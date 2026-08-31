// Post 9 of the editorial roadmap. Draft content authored August 2026 for
// November 23, 2026 publish. Targets `it budget planning` (140/mo, KD 0) —
// low absolute volume but zero difficulty and compounding seasonal-search
// bumps every November/December. Companion piece to Post 3 (what does IT
// cost) — planning-intent, distinct from Post 3's cost-benchmark intent.
//
// All internal service URLs stripped of trailing slashes per the Aug 2026
// canonical fix.
//
// PRE-PUBLISH REFRESH (date-sensitive):
//  - Gartner's Q4 forecast release (~mid-Oct) will carry first formal 2027
//    projections — swap in the 2027 number and refresh the 14.2%/2026
//    framing where applicable.
//  - Confirm cyber-insurance soft market held through Q3 2026 (Marsh/WTW).
//  - Windows 10 consumer ESU: one mid-2026 report suggests extension to
//    Oct 2027; body deliberately avoids hard-dating consumer deadlines
//    and leans on commercial ESU's escalating-cost structure. If extension
//    is real at publish, it strengthens the framing.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  {
    type: 'p',
    text: "Budget season has a ritual: take last year's IT number, add a percentage, defend it in one meeting, move on. It's fast, it feels reasonable, and it quietly locks in every bad decision already inside the number — the unused licenses renew, the underfunded gaps stay underfunded, and the new obligations arrive unbudgeted in March as \"surprises.\" This post is the working alternative for 50–500 person companies: a five-outcome test that tells you what any line item should produce, the three things genuinely different about budgeting for 2027, and a line-by-line pass through the 7 categories that make up the modern IT budget — with an honest cut, keep, or grow call on each.",
  },

  { type: 'h2', text: 'The Five-Outcome Test' },
  {
    type: 'p',
    text: "Every dollar in an IT budget should trace to one of five outcomes: **revenue protected or created** (the systems sales and delivery run on), **risk reduced** (security, backup, compliance controls), **cost avoided** (the downtime that doesn't happen, the emergency that stays scheduled), **capacity gained** (people producing more per hour), or **an obligation met** (insurance requirements, contract clauses, regulatory mandates). A line item that can't name its outcome isn't automatically waste — but it is automatically a question, and budget season is when questions get asked. The test works because it's concrete. \"Backup and disaster recovery — $14K\" maps instantly: risk reduced, obligation met (your insurer asks). \"Analytics platform, tier 3 — $11K\" makes the room go quiet, because the person who championed it left in 2024 and nobody has opened it since. Run the test against last year's actuals before building next year's plan; most budgets contain 2 or 3 line items nobody can assign an outcome to, and that's where the cuts fund the grows.",
  },

  { type: 'h2', text: "What's Actually Different About 2027" },
  {
    type: 'p',
    text: "Three shifts change the defaults this cycle. **First, the spending environment is accelerating, not stabilizing.** [Gartner's latest forecast](https://www.gartner.com/en/newsroom/press-releases/2026-07-27-gartner-forecasts-worldwide-it-spending-to-grow-14-point-2-percent-in-2026-totaling-6-point-37-trillion) has worldwide IT spending up 14.2% in 2026 — revised upward three consecutive quarters — with software spending rising roughly 15%, partly because, as Gartner's John-David Lovelock put it, GenAI features are now ubiquitous in software companies already own, \"and these features cost more money.\" Flat-budgeting into that environment is a real-terms cut you didn't decide to make. **Second, cyber insurance flipped in an unintuitive way:** prices and scrutiny are moving in opposite directions. [Rates have been flat to declining](https://www.wtwco.com/en-us/insights/2025/10/insurance-marketplace-realities-2026-cyber-risk) — Marsh's index recorded cyber rates falling about 5% in early 2026, part of a run that reached twelve consecutive quarters of decline by mid-year — while the controls required to qualify tightened into hard gates, with underwriters demanding evidence rather than attestations. The budget implication: don't budget for premium spikes; budget for the controls that qualify you for soft-market pricing, because the gap between qualified and unqualified companies is where the real money moves. **Third, the Windows 10 bill is coming due.** Nearly a year after end-of-support, enterprise asset-tracking firm Lansweeper found [Windows 10 still running on about 17% of enterprise PCs](https://www.windowslatest.com/2026/08/11/5-years-later-windows-10-refuses-to-die-and-microsoft-just-cant-push-holdouts-to-windows-11/) — each carrying an average of 1,903 known vulnerabilities, against 652 on a typical Windows 11 machine. The easy migrations are already done; what's left is the hardware-blocked remainder, and Extended Security Updates pricing escalates each year by design. Every machine still on Windows 10 in your fleet is either a 2027 refresh line item or a growing ESU line item; the one thing it isn't is free.",
  },

  { type: 'h2', text: 'The 7 Line Items, Scored' },

  { type: 'h3', text: '1. AI and pilot budget — GROW (carefully)' },
  {
    type: 'p',
    text: "New standing line for most companies, and small on purpose: fund 1–2 gated pilots, not a portfolio. MIT's research found 95% of enterprise AI pilots deliver no measurable P&L impact — and the successful few were tightly scoped against one pain point. Budget the evaluation discipline alongside the spend: every pilot enters through [the 5-question test](/blog/ai-readiness-for-non-technical-executives), and success triggers a funded deployment path or the line doesn't renew. Outcome: capacity gained — provable, or the money comes back.",
  },

  { type: 'h3', text: '2. Security stack — KEEP, fund fully' },
  {
    type: 'p',
    text: "MFA, EDR, email security, monitoring, tested backups — this is no longer discretionary spend; it's the qualification layer for insurance, for enterprise customers' vendor reviews, and for the contracts that ask before they sign. Companies running a full stack typically land around 25–30% of total IT spend here, and the five-outcome test scores it twice: risk reduced and obligation met. Cutting it saves pennies that reappear as premium surcharges, failed questionnaires, and incident bills.",
  },

  { type: 'h3', text: '3. Cyber insurance — KEEP, rebalance' },
  {
    type: 'p',
    text: "The counterintuitive 2027 call: for companies with documented controls, this line may hold flat or shrink at renewal — the soft market is real for the qualified. The rebalance: move a slice of what you expected to spend on premium into the evidence work that keeps you qualified — the enforcement reports, restore tests, and documented policies underwriters now verify. Our [cyber insurance requirements guide](/blog/cyber-insurance-requirements-for-small-business) maps the 12 controls; the budget line for proving them is smaller than the premium delta for lacking them. Outcome: obligation met, cost avoided.",
  },

  {
    type: 'callout',
    text: "**Want a second set of eyes on the draft budget before it goes to the board?** A free 30-minute session with Mike Savino runs the five-outcome test against your actual line items — including the ones that can't name their outcome.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=2027-budget-mid',
    },
  },

  { type: 'h3', text: '4. Hardware refresh — GROW (the catch-up year)' },
  {
    type: 'p',
    text: "If any part of the fleet is still on Windows 10, 2027 is the forced-decision year: escalating ESU costs on one side, replacement on the other, and no third option that includes staying secure. Budget the refresh as a rolling third-of-the-fleet-per-year rhythm rather than a one-time spike — and use the forced cycle to standardize hardware, which quietly reduces the support line below. Outcome: risk reduced now, cost avoided later.",
  },

  { type: 'h3', text: '5. Software licensing — CUT, then defend' },
  {
    type: 'p',
    text: "The line most likely to contain money nobody decided to spend. Before renewing anything: pull actual usage per seat, kill the duplicates (two tools doing one job is the classic), and question every auto-renewal older than 2 years. Then defend what remains against the ~15% inflation Gartner projects for software — vendors are repricing around embedded AI features whether you use them or not, so the audit isn't optional this cycle; it's what funds the increase on the tools that earn it. Outcome varies by tool — which is exactly the point of asking.",
  },

  { type: 'h3', text: '6. Cloud spend — KEEP, with discipline' },
  {
    type: 'p',
    text: "Cloud line items grow by default — usage creeps, instances outlive their projects, storage accumulates. The 2027 discipline: a quarterly right-sizing review with someone accountable for it by name, reserved-capacity pricing for steady workloads, and a genuine cost-per-workload view instead of one monthly invoice nobody can decompose. The named owner matters more than the tooling: cloud bills shrink when one person answers for the number each quarter, and they creep when \"everyone\" owns it. This isn't a retreat from cloud; it's refusing to let the elasticity that makes cloud valuable run in only one direction. Outcome: cost avoided, measurably.",
  },

  { type: 'h3', text: '7. Managed services and the strategic layer — KEEP' },
  {
    type: 'p',
    text: "The [managed IT](/managed-it-services) line is the one that decides whether the other six get managed at all — and inside it, the strategic layer (the [vCIO function](/vcio-vcto-vciso-services)) is what most companies still underfund at exactly the moment the decisions got harder: AI pilots, insurance evidence, refresh sequencing, cloud governance. If your budget process for the other six items felt like guesswork, that's this line item telling you it's understaffed. Benchmark the whole stack against our [50-person budget breakdown](/blog/what-does-it-cost-50-person-company); the per-user math scales.",
  },

  { type: 'h2', text: 'How to Run the Process' },
  {
    type: 'p',
    text: "The sequence, start to finish: pull 12 months of actuals and map every line to one of the five outcomes; score the 7 categories above as cut, keep, or grow for your situation; price the 2027-specific items (Windows 10 exposure, insurance evidence, pilot budget) explicitly rather than burying them in \"miscellaneous\"; then pressure-test the draft against what it's supposed to produce — an [IT ROI assessment](/it-roi-assessment) does this formally, turning the budget from a cost list into a set of claims about outcomes that next year's actuals can verify. Two mechanics make the plan survive contact with the year: hold back 5–10% of the total as an unallocated contingency line — so the March surprise draws from a plan instead of breaking one — and put a 30-minute quarterly checkpoint on the calendar now, where each grow line reports against the outcome it claimed. That last step is the difference between a budget you defend once and [a budget that defends itself](/maximize-roi-with-managed-it-services) every quarter.",
  },

  { type: 'h2', text: "Decide the Number — Don't Inherit It" },
  {
    type: 'p',
    text: "Last year plus 3% isn't a budget; it's an inheritance, and 2027 is a bad year to inherit — software inflating, insurance rewarding evidence, the Windows 10 bill arriving, and AI spending that either has a gate or has a graveyard. Run the five-outcome test, score the seven lines, and walk into the board meeting with a number where every dollar can say what it's for. The companies that do this annually don't spend more than their peers. They just stop paying for the parts nobody decided.",
  },
]
