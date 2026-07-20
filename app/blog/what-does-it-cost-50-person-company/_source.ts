// Post 3 of the editorial roadmap. Draft content authored July 2026 for
// August 31, 2026 publish. Stats verified against public sources at write
// time — BLS OES/OOH May 2024, IBM Cost of a Data Breach 2025, Microsoft
// public pricing July 2026, Avasant industry benchmarks.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  // ── Intro ────────────────────────────────────────────────────────────────
  {
    type: 'p',
    text: 'You\'ve been asked to model next year\'s IT budget, and every source you check dodges the question. Vendor sites say "it depends." Industry reports hide the numbers behind a paywall. Forum threads argue about definitions. Meanwhile you have a board deck due and a line item to defend. This post gives you real per-user ranges, a complete line-by-line budget for a 50-person company, and an honest comparison of the three ways companies buy IT — grounded in public benchmarks from BLS, IBM, and Microsoft\'s own price list, plus 30 years of ITSco operational experience at exactly this company size.',
  },

  // ── H2 · What "IT" Actually Includes ────────────────────────────────────
  { type: 'h2', text: 'What "IT" Actually Includes' },
  {
    type: 'p',
    text: 'Most cost discussions fail before they start because "IT" means different things to different people. A real budget covers 6 categories:',
  },
  {
    type: 'ul',
    items: [
      '**Endpoints** — laptops, desktops, monitors, and the refresh cycle that replaces them (3 years is the working norm; stretching to 5 costs more in productivity than it saves in hardware)',
      '**Software licenses** — productivity suite, line-of-business applications, and the SaaS subscriptions that accumulate quietly',
      '**Infrastructure** — servers, cloud services, networking, internet circuits',
      '**Security** — endpoint protection, email security, monitoring, backup',
      '**Support** — helpdesk, engineering time, on-site work',
      '**Strategy** — the vCIO/CTO function: technology roadmapping, vendor management, budget planning itself',
    ],
  },
  {
    type: 'p',
    text: 'Most published numbers collapse the last 4 into "IT support," which is why they\'re useless for budgeting. When a quote looks suspiciously cheap, one of these categories is usually missing — and you\'ll pay for it separately, reactively, and at a worse rate.',
  },

  // ── H2 · The Three IT Cost Models ───────────────────────────────────────
  { type: 'h2', text: 'The Three IT Cost Models' },

  { type: 'h3', text: 'Model 1: In-House IT' },
  {
    type: 'p',
    text: 'You hire your own team. The [Bureau of Labor Statistics](https://www.bls.gov/ooh/management/computer-and-information-systems-managers.htm) puts the 2024 median wage for computer and information systems managers at $171,200 — that\'s the national median, skewed by enterprise CIOs, so a small-company IT director typically lands in the $110K–$160K salary range. A [support specialist](https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm) runs a $60,340 median for user support and $73,340 for network support. Add 25–30% for benefits and payroll taxes, plus tooling, training, and recruiting, and each IT hire costs $80K–$220K all-in per year. The structural problem at 50 employees: one person can\'t cover helpdesk, security, infrastructure, and strategy — and two people cost more than most 50-person companies should spend on IT in total. The usual result is one overloaded generalist doing reactive support, with security and strategy handled "when there\'s time," which in practice means never. There\'s a third variant worth naming only to dismiss it: break-fix support, where you pay hourly when something breaks. At 50 employees, break-fix isn\'t a cost model — it\'s a deferred-cost model, and the deferral comes due in the hidden-cost section below.',
  },

  { type: 'h3', text: 'Model 2: Fully Managed (MSP)' },
  {
    type: 'p',
    text: "You contract the whole function to a [managed IT services](/managed-it-services/) provider for a per-user monthly fee — typically $125–$250 per user per month all-in, with the spread driven by your security stack and industry requirements. A law firm with compliance obligations sits at the top of the range; a company with simple needs sits near the bottom. The economic logic: you're buying fractional access to a full team — helpdesk, engineers, security analysts, strategists — that no 50-person company could staff internally. The tradeoffs are real, too: you're one client among many, provider quality varies enormously, and the cheapest per-user quote in a bid process is usually cheap because a category from the list above quietly isn't included. Ask any prospective provider to map their fee against all 6 categories before comparing prices.",
  },

  { type: 'h3', text: 'Model 3: Hybrid / Co-Managed' },
  {
    type: 'p',
    text: "You keep internal IT — usually one person who knows the business cold — and add MSP depth behind them through [staff augmentation or co-managed IT](/it-staff-augmentation/). The internal hire handles day-to-day and institutional knowledge; the MSP covers after-hours monitoring, security operations, project surges, and the specialties no single person carries. Budget $50–$120 per user per month on the MSP side, plus the internal salary. This model usually starts making sense between 100 and 500 employees; at 50, it's typically justified only by unusual complexity — custom software, manufacturing systems, heavy compliance.",
  },

  // ── H2 · Per-User IT Cost Benchmarks by Company Size ────────────────────
  { type: 'h2', text: 'Per-User IT Cost Benchmarks by Company Size' },
  {
    type: 'p',
    text: 'Per-user cost falls as headcount rises, because fixed costs — the firewall, the server environment, the strategic layer — spread across more people:',
  },
  {
    type: 'table',
    headers: ['Company size', 'Total IT / user / month', '% of revenue (typical)'],
    rows: [
      ['25 employees', '$200–$400', '4–7%'],
      ['50 employees', '$150–$300', '3–6%'],
      ['100 employees', '$130–$250', '3–5%'],
      ['250 employees', '$110–$200', '2.5–4%'],
      ['500 employees', '$100–$180', '2–3.5%'],
    ],
    caption:
      'Typical market ranges across industries. Per-user figures are the more reliable SMB benchmark; revenue percentages swing widely with revenue-per-employee.',
  },
  {
    type: 'p',
    text: "Two honest caveats CFOs should apply. First, industry moves these numbers more than headcount does: Deloitte's CIO research has tracked average technology spend near 5% of revenue in recent years, but [Avasant's benchmarking](https://avasant.com/report/it-spending-as-a-percentage-of-revenue-by-industry-company-size-and-region/) shows the industry spread runs from roughly 2% in construction and manufacturing to 10% in financial services — a wider gap than any company-size effect. Second, the revenue-percentage metric breaks down for high-revenue-per-employee firms. A 50-person professional services firm billing $10M might spend a perfectly healthy 1.5% of revenue on IT while a 50-person nonprofit spends 6% on the identical stack. Benchmark per user first; use revenue percentage as a cross-check, not a target.",
  },

  // ── H2 · A 50-Person Company's Actual IT Budget ─────────────────────────
  { type: 'h2', text: "A 50-Person Company's Actual IT Budget" },
  {
    type: 'p',
    text: "Here's what the full stack looks like for a 50-person professional services company, line by line. Every figure is a current market rate — Microsoft 365 Business Premium, for instance, is Microsoft's published $22 list price, one of the few plans that held flat through Microsoft's July 2026 price increase. The strategic layer near the bottom is the line most companies omit entirely — the [vCIO function](/vcio-vcto-vciso-services/) that decides what all the other lines should be.",
  },
  {
    type: 'table',
    headers: ['Line item', 'Annual cost', 'Per user / month'],
    rows: [
      ['Microsoft 365 Business Premium (50 seats)', '$13,200', '$22'],
      ['Hardware (3-year refresh cycle)', '$16,700', '$28'],
      ['Endpoint protection (EDR, managed)', '$6,000', '$10'],
      ['Email security', '$3,600', '$6'],
      ['Backup + disaster recovery', '$9,000', '$15'],
      ['Managed monitoring / SOC', '$18,000', '$30'],
      ['Helpdesk + engineering (MSP)', '$30,000', '$50'],
      ['Strategic layer / vCIO', '$12,000', '$20'],
      ['Software (line-of-business, industry-specific)', '$18,000', '$30'],
      ['**Total**', '**$126,500**', '**$211**'],
    ],
    caption:
      'Illustrative market ranges for a 50-person professional services company — directional benchmarks, not ITSco quotes. Every environment is scoped individually.',
  },
  {
    type: 'p',
    text: 'A few things worth noticing. The $211 total sits mid-range in the benchmark table above — this is a normal budget, not a gold-plated one. Security lines (EDR, email, backup, SOC) total $61 per user per month, roughly 29% of spend, which is what cyber insurance underwriters now effectively require anyway. And hardware at $28 assumes disciplined 3-year refresh — companies that "save money" by skipping refresh cycles pay it back in support tickets and lost hours.',
  },
  {
    type: 'p',
    text: "The math behind the bigger lines, since your board will ask. **Hardware:** 50 machines at roughly $1,000 average (a mix of standard laptops and a few higher-spec workstations), replaced on a rolling 3-year cycle, is about $16,700 a year — you're always buying a third of the fleet, never all of it at once, which is exactly how a CFO wants capital spend to behave. **Helpdesk and engineering at $50:** that buys unlimited support tickets plus the project engineering hours (migrations, office moves, new-hire setups) that hourly shops bill separately at $150–$250/hour. **Line-of-business software at $30** is the widest-swinging line on the table: an accounting firm's tax software, an engineering firm's CAD seats, a clinic's EHR. Some companies run $10; some run $80. Pull your actual SaaS spend before using this row — it's the one place the illustration can't substitute for your general ledger.",
  },
  {
    type: 'p',
    text: "What's deliberately absent: internet circuits and phone systems (they belong in facilities or telecom budgets at most companies), one-time projects like a server migration (capital, not run-rate), and any cushion for the hidden costs below — which is the next thing to price.",
  },

  // ── Mid-post CTA ─────────────────────────────────────────────────────────
  {
    type: 'callout',
    text: "**Most 50-person companies we work with run a version of this P&L.** The ranges hold; the mix shifts by industry and risk tolerance. A free 30-minute consultation with Mike Savino can benchmark your current spend against this table and identify where the money's overinvested and underinvested.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=it-cost-50-person-mid',
    },
  },

  // ── H2 · Hidden Costs Most Companies Miss ───────────────────────────────
  { type: 'h2', text: 'Hidden Costs Most Companies Miss' },
  {
    type: 'p',
    text: 'The invoice is the visible half of IT cost. The other half shows up in payroll, lost billings, and executive time:',
  },
  {
    type: 'ul',
    items: [
      '**Downtime.** A 50-person professional services firm with a $150/hour effective billing rate loses roughly $7,500 for every hour the whole company is down. A quarterly 4-hour outage pattern — common with reactive, break-fix IT — runs about $30K a year, invisible on any budget line.',
      '**Productivity drag.** Slow machines, recurring glitches, and "have you tried restarting" cycles cost each employee roughly 8–15 hours a year in our experience. At a $75/hour loaded cost, that\'s $600–$1,100 per employee — $30K–$55K across a 50-person team, often more than the entire helpdesk line.',
      "**Vendor management overhead.** Without a strategic IT layer, a CFO or operations director spends 2–4 hours a month refereeing between the internet provider, the software vendor, and the phone company. At loaded executive rates, that's $6K–$12K a year of expensive time doing cheap work.",
      "**Security incident exposure.** IBM's [2025 Cost of a Data Breach Report](https://www.ibm.com/think/insights/data-matters/cost-of-a-data-breach) puts the average US breach at a record $10.22 million. That study skews toward larger organizations — but even a small fraction of that figure exceeds this entire $126,500 annual budget many times over, which is the actual math behind the security lines in the table.",
      '**Compliance failure.** For regulated industries — healthcare, financial services, government contracting — penalties routinely run to multiples of annual IT spend, before counting remediation and mandated oversight.',
    ],
  },

  // ── H2 · When Each Cost Model Wins ──────────────────────────────────────
  { type: 'h2', text: 'When Each Cost Model Wins' },
  {
    type: 'p',
    text: "There's no universally correct answer — there's a correct answer for your situation.",
  },
  {
    type: 'p',
    text: "**In-house wins** when technology is your product or near it: you're building custom applications, running proprietary systems, or operating in a regulated niche where deep, dedicated institutional knowledge outweighs the cost premium. **Fully managed wins** for most companies between 20 and 100 employees: you get the full specialist bench at a predictable monthly cost, with no single point of failure who can resign, get sick, or go on vacation. **Hybrid wins** when you have — or need — an internal IT leader who's genuinely strategic but shouldn't spend their days resetting passwords; that's typically the 100–500 employee zone, where internal context and external depth both earn their keep.",
  },
  {
    type: 'p',
    text: "Three signals tell you the current model is wrong, whatever it is. Your IT spend is unpredictable month to month — that's a break-fix pattern wearing a different name. Nobody in the building can articulate a 12-month technology plan — the strategic layer is missing, whoever's holding the budget. Or your one IT person hasn't taken a full week off in 2 years — that's not dedication, it's a single point of failure the business hasn't priced.",
  },

  // ── H2 · How to Actually Model Your IT Budget ───────────────────────────
  { type: 'h2', text: 'How to Actually Model Your IT Budget' },
  {
    type: 'p',
    text: 'A 5-step framework you can run in a spreadsheet this week:',
  },
  {
    type: 'ul',
    items: [
      '**1. Count real users** — headcount plus contractors, part-timers, and shared accounts that should be individual ones. Budgets fail when the user count is fiction.',
      '**2. Multiply by the per-user range** for your industry from the benchmark table — professional services and healthcare toward the top, simpler operations toward the bottom.',
      '**3. Add hardware refresh and line-of-business software separately** — these vary too much by company to hide inside a per-user rate.',
      '**4. Price the hidden costs** — estimate your downtime cost per hour and current productivity drag, so the security and support lines can be judged against what they prevent.',
      '**5. Sanity-check against revenue** — for a 50-person company, expect roughly 3–6% of revenue, adjusted for your revenue per employee as covered above.',
    ],
  },
  {
    type: 'p',
    text: "If you'd rather pressure-test the model against your actual environment than a generic table, an [IT ROI assessment](/it-roi-assessment/) does exactly that — current spend, gaps, and where the budget is working against you.",
  },

  // ── H2 · FAQ ─────────────────────────────────────────────────────────────
  { type: 'h2', text: 'Frequently Asked Questions' },

  { type: 'h3', text: 'How does IT cost per employee change as we grow from 25 to 100 employees?' },
  {
    type: 'p',
    text: "It falls — typically from $200–$400 per user per month at 25 employees to $130–$250 at 100. Fixed costs like network infrastructure, security tooling, and strategic oversight amortize across more people. The categories don't change; the denominators do.",
  },

  { type: 'h3', text: 'Is it cheaper to hire an in-house IT person or use an MSP?' },
  {
    type: 'p',
    text: "At 50 employees, an MSP is usually cheaper for equivalent coverage. One in-house generalist costs $80K–$220K all-in and can't cover 24/7 monitoring, security specialization, and strategy simultaneously. The honest comparison isn't one salary versus one contract — it's one salary versus the 4 or 5 roles that salary is silently expected to cover.",
  },

  { type: 'h3', text: "What's a typical IT budget as a percentage of revenue?" },
  {
    type: 'p',
    text: 'Around 3–6% for a 50-person company, but industry drives it more than size — benchmarks run from roughly 2% in construction and manufacturing to 10% in financial services. High revenue-per-employee firms will land below the range on a healthy budget; use per-user cost as the primary benchmark instead.',
  },

  { type: 'h3', text: 'Why do MSPs charge per user per month instead of hourly?' },
  {
    type: 'p',
    text: 'Because hourly billing rewards the provider when things break. Per-user pricing aligns incentives: the provider makes money by preventing problems, not billing for them. It also gives the CFO the thing hourly IT can never provide — a predictable line item that scales linearly with headcount.',
  },

  { type: 'h3', text: "How do we know if we're overspending on IT?" },
  {
    type: 'p',
    text: 'Benchmark your all-in per-user cost against the table above, then check the mix. Overspending usually hides in 3 places: unused software licenses, redundant tools doing the same job, and paying senior-engineer rates for password resets. Underspending shows up differently — in the hidden-cost column, as downtime and drag. Most companies are doing both at once.',
  },

  // ── Closing ──────────────────────────────────────────────────────────────
  { type: 'h2', text: 'The Number Is Knowable' },
  {
    type: 'p',
    text: 'IT budgeting stops being guesswork once you separate the 6 categories, benchmark per user for your size, and price the hidden costs alongside the visible ones. For a typical 50-person company, the honest all-in number lands between $150 and $300 per user per month — and in 30 years of running IT at exactly this scale, the pattern ITSco sees is consistent: predictable models beat reactive ones over any multi-year window, and the strategic layer is where companies underinvest most. That layer is also where [IT spend turns into measurable ROI](/maximize-roi-with-managed-it-services/) — which is the only reason to spend any of it.',
  },
]
