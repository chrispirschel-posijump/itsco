// Post 4 of the editorial roadmap. Draft content authored July 2026 for
// September 14, 2026 publish. Directional claims (switching cost ranges,
// migration timeline) grounded in the Post 3 IT-cost benchmarks.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  // ── Intro ────────────────────────────────────────────────────────────────
  {
    type: 'p',
    text: "You already suspect something's off — that's why you searched for this. Let's be fair to your provider first: most MSPs are competent operators, and some of what's bothering you may be fixable with a direct conversation. But relationships with IT providers drift the same way any service relationship drifts — gradually, then suddenly — and the executives who switch usually say the signs were visible long before they acted. This post gives you 12 specific signs to check against, a contract evaluation checklist, the real cost of switching, and what to demand from a replacement. Some of these signs are conversation-starters. Four or more of them together is a decision.",
  },

  // ── H2 · The 12 Signs ───────────────────────────────────────────────────
  { type: 'h2', text: 'The 12 Signs' },

  { type: 'h3', text: '1. You never talk to a strategic partner — only a ticket queue' },
  {
    type: 'p',
    text: "Your entire relationship runs through a ticketing system. Nobody at the provider knows your industry, your growth plans, or what your busy season looks like — they know your open tickets. Ticket resolution is table stakes, not partnership. What good looks like: a named senior contact who initiates [strategic conversations](/it-management-consulting/) about where the business is going, not just what's currently broken.",
  },

  { type: 'h3', text: '2. Your invoices are unpredictable' },
  {
    type: 'p',
    text: 'Monthly bills swing 20% or more on surprise project fees, "out of scope" charges, and hardware pass-throughs you didn\'t approve in any meaningful sense. If your bookkeeper flinches when the IT invoice arrives, the pricing model is broken. What good looks like: predictable per-user pricing with the scope boundary defined in writing — and change orders that arrive before the work, not on the invoice after it.',
  },

  { type: 'h3', text: '3. Response times have quietly stretched' },
  {
    type: 'p',
    text: "A year ago tickets closed same-day. Now they linger, and your team has developed workarounds — the surest symptom, because employees route around a helpdesk they've stopped trusting before anyone says so out loud. What good looks like: SLA performance tracked and shared with you quarterly, without you asking. A provider hiding its own response metrics is telling you what they show.",
  },

  { type: 'h3', text: '4. Every project needs a scope change' },
  {
    type: 'p',
    text: "The 40-hour quote became an 80-hour delivery — again. That's one of two problems: chronic underscoping, which is a competence issue, or intentional underquoting to win approval and grow revenue on the back half, which is worse. What good looks like: fixed-fee projects where scope changes require your sign-off, with the reason documented each time.",
  },

  { type: 'h3', text: "5. You've never had a strategic review" },
  {
    type: 'p',
    text: 'No quarterly business review, no annual technology roadmap, no security posture review — just another year of tickets. Without a standing review, IT spend has no direction and no accountability. What good looks like: quarterly reviews with real content — what was delivered, what it cost, what\'s recommended next and why — attended by someone senior enough to commit to answers.',
  },

  { type: 'h3', text: '6. They can\'t answer "what\'s our security posture?"' },
  {
    type: 'p',
    text: 'Your CFO asks about cybersecurity risk and gets back a list of tool names — the digital equivalent of answering "are we insured?" with the brand of the fire extinguisher. What good looks like: risk articulated in business terms — what\'s protected, what\'s exposed, what it would cost, what closing the gap costs — backed by control evidence an insurance underwriter would accept.',
  },

  // ── Mid-post CTA callout ─────────────────────────────────────────────────
  {
    type: 'callout',
    text: "**If four or more of these first six describe your current MSP, you're not imagining things** — the relationship has drifted. A free 30-minute consultation with Mike Savino can help you name what's specifically underserved, whether it's fixable, and what a switch would actually cost.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=fire-msp-mid',
    },
  },

  { type: 'h3', text: '7. The same issues keep recurring' },
  {
    type: 'p',
    text: 'Your team files tickets for the same 3–5 problems month after month — the printer mapping, the VPN drop, the email sync. Each gets "resolved." None gets fixed. That\'s symptom management, and under hourly or ticket-count economics, symptoms are more profitable than cures. What good looks like: root-cause analysis on repeat issues, with recurring-ticket volume trending visibly down.',
  },

  { type: 'h3', text: '8. They dismiss business questions with tech answers' },
  {
    type: 'p',
    text: 'You ask "should we move to the cloud?" and receive a lecture on Azure versus AWS instead of an analysis of cost, risk, and operational impact for your company. Translation work is the job. What good looks like: every technology recommendation framed as a business case — what it costs, what it returns, what happens if you don\'t.',
  },

  { type: 'h3', text: "9. They don't measure or report ROI" },
  {
    type: 'p',
    text: "You get invoices, not evidence. No reporting on downtime avoided, incidents prevented, costs reduced, or projects delivered — which leaves you defending the IT line to your board with nothing but a feeling. What good looks like: a documented [ROI framework](/maximize-roi-with-managed-it-services/) with quarterly reporting against it. If a provider can't demonstrate its own value, that's not modesty — it's an answer.",
  },

  { type: 'h3', text: "10. They've turned down growth" },
  {
    type: 'p',
    text: 'You opened a second location, evaluated an acquisition, or scoped a new system — and the response was "we can\'t really support that." A provider that can\'t scale with you isn\'t a partner; it\'s a ceiling, and the business will hit it at the worst possible moment. What good looks like: a provider who treats your growth events as their planning inputs.',
  },

  { type: 'h3', text: "11. Your executives don't trust them" },
  {
    type: 'p',
    text: 'The CEO and CFO now make technology decisions without involving the provider at all — new software gets bought, vendors get signed, and IT hears about it afterward. This is usually the last sign before a full break: leadership has already fired them informally. What good looks like: a provider your executives actively pull into decisions because their input has proven valuable.',
  },

  { type: 'h3', text: '12. You feel like a small account' },
  {
    type: 'p',
    text: 'Getting attention is a negotiation. Your account manager left and was never really replaced. Service is visibly worse than in year one, when you were the new client worth impressing. What good looks like: providers built on long-term retention treat every account like a renewal decision — at ITSco, 60% of clients have been with us for more than 5 years, and that number only happens when 50-person companies get senior attention year after year.',
  },

  // ── H2 · How to Evaluate Your Current Contract ──────────────────────────
  { type: 'h2', text: 'How to Evaluate Your Current Contract' },
  {
    type: 'p',
    text: 'Before any conversation with a replacement, pull the contract and check 5 things:',
  },
  {
    type: 'ul',
    items: [
      '**Termination clauses.** What\'s the notice period, is there an early termination fee, and is there a "for cause" provision that persistent SLA failures might already satisfy?',
      '**Data and system ownership.** Do you own your systems, licenses, and documentation outright — or does the provider hold the admin credentials, the domain registration, and the backup encryption keys? This is the single most important line item.',
      "**Transition assistance.** Does the contract obligate them to cooperate with an orderly handover? Most professional agreements do; knowing it's in writing changes the tone of the exit conversation.",
      '**Software licensing.** Licenses bought through the MSP may need re-provisioning under your own agreements. Usually straightforward — but inventory it before, not during, the switch.',
      '**Auto-renewal.** Check the renewal date and notice window now. Companies routinely discover they missed the window by 2 weeks and bought another year of the relationship this post is about.',
    ],
  },

  // ── H2 · The Real Cost of Switching ─────────────────────────────────────
  { type: 'h2', text: 'The Real Cost of Switching (Usually Less Than You Think)' },
  {
    type: 'p',
    text: "Directional ranges for a 50-person company, since fear of switching costs keeps more bad relationships alive than loyalty does. New-provider onboarding typically runs $5K–$25K, and reputable providers often waive or amortize it into the monthly fee. Plan a 30–90 day overlap period during transition. License re-provisioning is usually free — it's administrative work, not new spend. And expect a 2–4 week internal adjustment dip as your team learns new contacts and processes.",
  },
  {
    type: 'p',
    text: "Now the comparison that matters: a 50-person company paying roughly $150K a year for underservice is paying full price for partial value — before counting the hidden costs of recurring issues, slow response, and strategic drift covered in our [IT cost breakdown](/blog/what-does-it-cost-50-person-company/). Against that baseline, a one-time transition cost pays for itself within 6–12 months in most cases. Staying isn't the free option; it just invoices differently.",
  },

  // ── H2 · What to Look for in a Replacement ──────────────────────────────
  { type: 'h2', text: 'What to Look for in a Replacement' },
  {
    type: 'p',
    text: "Don't evaluate replacements against your current provider — a low bar clears easily. Evaluate against 5 criteria:",
  },
  {
    type: 'ul',
    items: [
      "**1. Business-outcome measurement.** They should explain, unprompted, how they'll measure and report the ROI of your IT spend — not just SLA compliance. Ask to see a sample quarterly report from a real (anonymized) client.",
      '**2. Named executive access.** You should know exactly which decision-maker — owner, CEO, CIO — you can reach, and have met them before signing. At ITSco, clients work directly with senior leadership, not a sales tier; whoever you choose, demand the same.',
      "**3. Transparent pricing.** Fixed per-user pricing, scope defined in writing, and clear project boundaries. If the proposal's pricing section confuses you now, imagine the invoices later.",
      "**4. Cybersecurity depth.** A documented security philosophy, managed detection and response, and a tested incident response process — the controls cyber insurance underwriters check are a convenient audit of any [managed IT provider's](/managed-it-services/) real depth.",
      '**5. A strategic layer.** Genuine [vCIO capability](/vcio-vcto-vciso-services/) — technology roadmapping, budget planning, vendor management — as a defined part of the service, not a sales-cycle promise that evaporates after onboarding.',
    ],
  },

  // ── H2 · A Reasonable Migration Timeline ────────────────────────────────
  { type: 'h2', text: 'A Reasonable Migration Timeline' },
  {
    type: 'p',
    text: "A competent transition for a 50-person company runs about 12 weeks in 3 phases. **Weeks 1–4, discovery and contract review:** the new provider documents your environment, inventories licenses and credentials, and you work the termination mechanics on the old agreement. **Weeks 5–8, overlap onboarding:** monitoring, security tooling, and documentation transfer while the incumbent still holds primary support — the overlap is what makes the switch boring instead of dramatic. **Weeks 9–12, full cutover:** helpdesk moves, credentials rotate, the old provider's access is formally revoked, and the first quarterly review gets scheduled before the transition team leaves. If a prospective provider can't walk you through their version of this plan in the first meeting, that's your evaluation result.",
  },

  // ── H2 · FAQ ─────────────────────────────────────────────────────────────
  { type: 'h2', text: 'Frequently Asked Questions' },

  { type: 'h3', text: 'How long does it take to switch MSPs?' },
  {
    type: 'p',
    text: 'Plan for 60–90 days from signature to full cutover for a 50-person company, including a deliberate overlap period. The calendar time matters less than the sequence: documentation and credential inventory first, monitoring second, helpdesk cutover last.',
  },

  { type: 'h3', text: "What if I'm still in contract with my current MSP?" },
  {
    type: 'p',
    text: "Read the termination and auto-renewal clauses first — many agreements allow exit with 60–90 days' notice, and persistent SLA failures may trigger a for-cause provision. Some companies run the numbers and find that paying an early termination fee still beats months of continued underservice. Have your attorney review the specifics before acting; contract interpretation is their lane.",
  },

  { type: 'h3', text: 'Will I lose data or historical tickets when I switch?' },
  {
    type: 'p',
    text: "You shouldn't lose data — your systems and files are yours, and a professional transition transfers documentation, configurations, and credentials intact. Ticket history is less certain: it lives in the old provider's system, so request an export during the notice period, while cooperation is contractually required.",
  },

  { type: 'h3', text: 'Should I hire in-house IT instead of switching MSPs?' },
  {
    type: 'p',
    text: "At 50 employees, usually not — one in-house generalist costs $80K–$220K all-in and can't cover helpdesk, security, and strategy simultaneously. The exception is when technology is core to your product. If the current MSP failed you, the fix is a better provider or a hybrid model, not necessarily a different model entirely.",
  },

  { type: 'h3', text: 'How do I evaluate a potential MSP before signing?' },
  {
    type: 'p',
    text: "Use the 5 criteria above, then add references: ask to speak with 2 clients your size who've been with the provider 3+ years, and 1 who joined in the past 6 months. The long-tenured clients tell you what the relationship becomes; the recent one tells you what onboarding is really like.",
  },

  // ── Closing ──────────────────────────────────────────────────────────────
  { type: 'h2', text: 'Name It, Then Act on It' },
  {
    type: 'p',
    text: 'The signs are usually there — the harder step is naming them and acting instead of renewing by default. When executives describe why they finally switched providers, the pattern is nearly always some version of "we knew for over a year." You don\'t have to decide today whether to switch. You just have to decide whether the evidence deserves a real evaluation — and an [IT ROI assessment](/it-roi-assessment/) of your current environment is the lowest-risk way to turn a suspicion into a documented answer.',
  },
]
