// Post 6 of the editorial roadmap. Draft content authored August 2026 for
// October 12, 2026 publish. Structured to drive qualified traffic to the
// /ai-readiness-assessment service page — every AI adoption stat cites a
// named primary source (MIT NANDA 2025, McKinsey State of AI 2025, Lancet
// Gastroenterology Aug 2025). Companion piece to /blog/the-black-box-is-dead
// (executive AI responsibility) and Post 10 (AI Governance + Shadow AI).

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  // ── Intro ────────────────────────────────────────────────────────────────
  {
    type: 'p',
    text: "I've had conversations like this recently: the CEO of a 200-person company gets a slide deck from the marketing director or head of operations proposing an AI pilot. The tool promises to automate something painful, the ask is a $30K–$80K annual subscription plus a few months of team time, and the deck looks great. The CEO now has three options — say yes based on trust, say no based on discomfort, or ask the questions that would reveal which answer is actually right. Most default to the first two, because nobody handed them the questions. Here they are: 5 questions that turn AI pilot approval from a gut call into an executive decision. None of them require you to write code.",
  },

  // ── H2 · Why Trust Your Tech Team Is No Longer Enough ────────────────────
  { type: 'h2', text: 'Why "Trust Your Tech Team" Is No Longer Enough' },
  {
    type: 'p',
    text: "Not long ago, tool decisions like this were legitimately delegable to IT. AI broke that pattern for 3 reasons. First, AI touches parts of the business the tech team doesn't own — how customer conversations get handled, what claims marketing makes, how contracts get drafted. Those are executive decisions with technical implementation underneath, not the reverse. Second, AI failures have executive-level consequences: regulatory attention, brand damage when the bot says something wrong under your name, contractual exposure when client data lands in the wrong vendor's training set. Third, AI ROI is a business calculation — \"will this actually save 20 hours a week, and is that worth the trade-offs?\" is a judgment only leadership can make.",
  },
  {
    type: 'p',
    text: "The data says most companies are getting this wrong. [MIT's GenAI Divide report](https://finance.yahoo.com/news/mit-report-95-generative-ai-105412686.html) (State of AI in Business 2025) found that 95% of enterprise AI pilots deliver no measurable P&L impact — only 5% reach production with real value. [McKinsey's latest State of AI survey](https://www.mckinsey.com/capabilities/operations/our-insights/the-state-of-ai) tells the same story from the other side: 88% of organizations now use AI somewhere, but only 7% have scaled it across the enterprise. The gap between those numbers isn't a technology problem. It's an evaluation problem — and evaluation is an executive job.",
  },

  // ── H2 · The 5 Questions ─────────────────────────────────────────────────
  { type: 'h2', text: 'The 5 Questions' },

  { type: 'h3', text: '1. What specific business problem does this solve — and how will we measure success?' },
  {
    type: 'p',
    text: "The question screens out AI-for-AI's-sake, which is most of what fails. A good answer names a metric you already measure and the specific change expected: \"proposal turnaround averages 9 days; this should bring it under 5 within a quarter.\" A bad answer is \"let's see what we learn\" — that's not a pilot, it's a subscription with optimism attached. MIT's researchers found the successful 5% share a profile: tightly scoped initiatives aimed at one specific pain point. If the sponsor can't state the pain point as a number, the pilot isn't ready for a yes.",
  },

  { type: 'h3', text: '2. Whose data goes into this system — and where does it end up?' },
  {
    type: 'p',
    text: "The single most important compliance question, and the one sponsors most often can't answer. Get specific: does customer PII, employee data, client-confidential material, or company IP flow into this tool? Does the vendor train its models on your inputs, or is it inference-only? Is it hosted in your tenant or theirs? A good answer traces the data flow end to end and names the vendor's data-handling terms alongside whatever frameworks bind you — HIPAA, GLBA, client contracts. A wave of the hand here is disqualifying, because this is the question that turns into a breach notification or a contract violation 8 months after everyone stopped paying attention. It's also exactly the question a structured [AI governance](/ai-governance) review is built to answer before the pilot starts, not after.",
  },

  { type: 'h3', text: "3. Who owns the output — and who's accountable when it's wrong?" },
  {
    type: 'p',
    text: "Every AI system produces confident errors. The question is whether a named human catches them before they reach a customer, a contract, or a regulator. A good answer specifies the reviewer role, the review step before anything AI-generated ships externally, and the escalation path for edge cases. The two answers that should end the meeting: \"the AI checks itself\" and \"we'll fix it if it comes up.\" Accountability that gets assigned after the mistake isn't accountability — it's blame allocation.",
  },

  { type: 'h3', text: '4. What does a successful pilot trigger — and what does failure trigger?' },
  {
    type: 'p',
    text: "This question prevents pilot purgatory — the state where experiments run indefinitely because nobody defined what happens next. Success should trigger a named deployment plan, a budget line, and the workflow changes that scaling requires. Failure should trigger something too: contract termination, data cleanup, and a written capture of what was learned. McKinsey's data shows why the workflow half matters — redesigning workflows around AI is the single strongest driver of real impact, and it's the step companies skip when a pilot drifts into production by inertia instead of decision. \"We'll figure it out if it works\" means the pilot has no exit in either direction.",
  },

  { type: 'h3', text: '5. What happens to our data and workflows if we walk away?' },
  {
    type: 'p',
    text: "The lock-in question. Before the pilot starts is the only time you can ask it with a clear head and full negotiating position: can we export our data in a usable format? Do we own anything the system produced or learned? What do the exit terms actually say? A good answer articulates the switching cost honestly. A bad answer — \"we'd just stop paying\" — usually means nobody read the contract, and the real answer is buried in it. Companies that ask this question up front negotiate better terms; companies that ask it 18 months later discover what the vendor's retention policy really means.",
  },

  // ── Mid-post callout · action framing + CTA ──────────────────────────────
  {
    type: 'callout',
    text: "**Bring this list to your next pilot approval meeting.** Ask each question aloud and watch what happens — the pilots worth funding survive all 5, and the ones that were always going to fail reveal themselves in about 10 minutes. If you'd rather pressure-test your pilot pipeline with someone who evaluates these weekly, a free 30-minute conversation with Mike Savino is the fastest version of this exercise.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=ai-readiness-mid',
    },
  },

  // ── H2 · What Happens When Questions Aren't Asked ────────────────────────
  { type: 'h2', text: "What Happens When These Questions Don't Get Asked" },
  {
    type: 'p',
    text: "Three failure patterns, all documented. **Pilot theater:** a company runs 6–12 pilots simultaneously, none reaches production, and leadership concludes \"we tried AI.\" MIT's funnel data shows how common this is — 60% of firms evaluate enterprise AI tools, 20% pilot them, 5% deploy them. **Compliance surprise:** the pilot works, quietly expands, and months later someone discovers customer data has been flowing into a vendor's model — the failure mode Question 2 exists to prevent, discovered at the worst possible time. **Skill drift:** the subtlest one. A 2025 study in [The Lancet Gastroenterology & Hepatology](https://www.thelancet.com/journals/langas/article/PIIS2468-1253(25)00133-5/abstract) found clinicians' unassisted detection rates dropped from 28.4% to 22.4% after just months of routine AI assistance — the first real-world evidence that leaning on AI erodes the human skill underneath it. In a business context: when the team stops being able to tell whether the AI's output is right, the AI's errors become the company's errors.",
  },

  // ── H2 · Frameworks Worth Borrowing ──────────────────────────────────────
  { type: 'h2', text: 'The Frameworks Worth Borrowing' },
  {
    type: 'p',
    text: "You don't need to invent governance from scratch. The NIST AI Risk Management Framework is a free, federal-grade structure for exactly the questions above. ISO/IEC 42001 is the international AI management standard if you need something certifiable. And the EU AI Act's risk-classification approach — sorting AI uses by potential harm rather than by technology — is a useful mental model even for US companies nobody in Brussels is regulating. Treat all 3 as scaffolding for the conversation, not as shortcut answers; a framework nobody operationalizes is a PDF.",
  },

  // ── H2 · What to Do Next ─────────────────────────────────────────────────
  { type: 'h2', text: 'What to Do Next' },
  {
    type: 'p',
    text: "Three moves, in order. **First, audit the pilots already running.** MIT's research found workers at more than 90% of companies use personal AI tools regardless of official policy — which means your organization almost certainly has informal AI in production right now that nobody approved with any of the 5 questions. Inventory before you evaluate anything new. **Second, make the 5 questions an intake template.** Anyone proposing a pilot answers them in writing before the meeting — it shortens approvals and improves what gets proposed. **Third, build the interpreting capacity.** The questions are only as good as the person reading the answers. That can be an internal role, [fractional executive capacity like a vCIO or vCAIO](/vcio-vcto-vciso-services), or a structured external review — an [AI readiness assessment](/ai-readiness-assessment) evaluates your strategic alignment, data readiness, infrastructure, and organizational capacity before the first dollar gets committed, with [AI strategy consulting](/ai-strategy-consulting) as the ongoing version once pilots are moving. If AI feels like unfamiliar territory for executive judgment, [the sidelines stopped being a safe place to stand](/blog/the-black-box-is-dead-why-business-leaders-can-no-longer-sit-on-the-sidelines) a while ago.",
  },

  // ── H2 · Closing ─────────────────────────────────────────────────────────
  { type: 'h2', text: 'A Lens, Not a Gate' },
  {
    type: 'p',
    text: "The 5 questions aren't designed to slow AI down. Executives who use them don't approve fewer pilots — they approve better ones, and they say no faster to the ones that were always going to fail, which frees budget for the ones that can work. That's the same discipline behind [every technology investment that returns more than it costs](/maximize-roi-with-managed-it-services): define the outcome, trace the risk, name the owner, plan both exits. AI didn't change that math. It just raised the stakes for skipping it.",
  },
]
