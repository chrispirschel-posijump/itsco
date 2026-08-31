// Post 10 of the editorial roadmap. Draft content authored August 2026 for
// December 7, 2026 publish. Targets the AI half of the roadmap's SEO
// cornerstone pair: `ai governance framework` (4,400/mo, KD 10) + `shadow
// ai` (2,900/mo, KD 14) — ~7,300/mo combined, the largest AI content
// opportunity in the plan. Companion to Post 6 (approve-the-pilot); this
// is govern-the-shadow. When publishing, consider adding a forward-link
// from Post 6 to this piece.
//
// All internal service URLs stripped of trailing slashes per the Aug 2026
// canonical fix.
//
// PRE-PUBLISH DECISION: IBM's 2026 Cost of a Data Breach edition reports
// shadow-AI incidents up to 43% (from the 20% figure in the 2025 edition
// cited in this draft). The 2025 numbers are more established; the 2026
// numbers are more current. Decide before publish which set carries the
// stronger citation for the audience.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  {
    type: 'p',
    text: "Shadow AI isn't a future problem to plan for. It's happening in your company right now, and the only variable is whether you know about it. MIT's research found that workers at more than 90% of companies use personal AI tools regardless of official policy — which means your employees are almost certainly running company data through ChatGPT, Claude, Copilot, or Perplexity today, approved or not. The question isn't whether to allow AI. That decision was made for you, by your own team, months ago. The question is whether the use is governed or invisible. This post covers what a CEO of a 50–500 person company is actually accountable for, the minimum viable governance that fits a company your size, and what to do Monday morning — none of which requires the AI committee a Fortune 500 would build.",
  },

  { type: 'h2', text: 'What Shadow AI Actually Looks Like in Your Company' },
  { type: 'p', text: 'Not abstractly. Concretely — these are happening this week:' },
  {
    type: 'ul',
    items: [
      "**The salesperson** pastes a client's email — names, deal terms, the whole thread — into ChatGPT to draft a sharper reply. Fast, effective, and now that client's confidential information lives in a third-party system your contract with them never authorized. *Risk: data leak, contract breach.*",
      "**The engineer** runs a proprietary module through a personal Copilot account to debug it faster. Your source code — the thing that makes your product yours — just left the building. *Risk: IP contamination.*",
      "**The marketing lead** uploads a customer list to a free AI tool for segmentation. That's customer PII in an unvetted vendor's hands, and depending on your industry, a regulatory violation the moment it uploaded. *Risk: privacy and regulatory failure.*",
      "**An executive** drops confidential financials into an AI assistant to summarize them for a board deck. The numbers that aren't public yet are now in a model's context. *Risk: confidentiality and disclosure exposure.*",
    ],
  },
  {
    type: 'p',
    text: "None of these people are bad actors. They're your best employees, trying to work faster with tools that genuinely help. That's exactly why prohibition alone doesn't solve it — and why the CEO, not the intern, owns the outcome.",
  },

  { type: 'h2', text: "Why \"Just Ban It\" Doesn't Work" },
  {
    type: 'p',
    text: "The instinct is to prohibit — one email declaring personal AI tools off-limits. It fails for three reasons. First, the productivity gap is real: employees using AI are measurably faster at certain tasks, and the ones who rely on it won't quietly become slower because a policy said to. They'll find workarounds — personal devices, home logins, the exact channels you can't see. Second, a ban with no approved alternative is a ban on doing the work the fast way, which reads as a leadership team that doesn't understand the job. Third, prohibition drives the behavior underground rather than eliminating it — turning a manageable governance problem into an invisible one, which IBM's data shows is the expensive kind. The honest path isn't prohibition; it's governance — approved tools with clear data-handling rules, enforced against everything outside that boundary. You're not choosing whether employees use AI. You're choosing whether they use it where you can see it.",
  },

  { type: 'h2', text: 'The Three Things CEOs Are Actually Accountable For' },
  {
    type: 'p',
    text: "Not fifteen. Governance content aimed at enterprises lists dozens of controls. A CEO of a 50–500 person company is accountable for three things — the rest is implementation.",
  },
  {
    type: 'p',
    text: "**1. Knowing what data flows where.** If customer PII, employee records, client-confidential material, or company IP is entering AI systems, you own the answer to \"which systems, and who approved that?\" This is the first question a regulator or an insurance underwriter asks after an incident, and \"I didn't know\" is not an answer that reduces liability — IBM found 63% of organizations still lack AI governance policies, and 97% of AI-related breaches happened at organizations without proper AI access controls. The knowing is the job.",
  },
  {
    type: 'p',
    text: "**2. Making the \"if something goes wrong\" decision in advance.** Before an incident, not during: who owns the response, who contacts the affected customer, who notifies the regulator, and what the disclosure obligation actually is. These are the decisions post-incident lawyers wish the company had made six months earlier, because made under pressure they get made badly. Deciding them while calm costs an afternoon; deciding them mid-breach costs far more.",
  },
  {
    type: 'p',
    text: "**3. Documented decisions on high-risk uses.** Not every AI use needs sign-off — but customer-facing AI, uses that affect employment decisions, and anything with regulatory or contractual exposure need a paper trail showing an executive owned the call. Executives sign affirmations to insurers, regulators, and customers constantly, and AI-driven decisions carry the same weight whether or not anyone wrote them down. Pretending they don't is itself the risk pattern — the documentation is what turns an ungoverned accident into a defensible decision.",
  },

  {
    type: 'callout',
    text: "**Not sure what shadow AI is already active in your company?** A free 30-minute call with Mike Savino runs the discovery exercise in about 20 — and the finding is almost always more than the CEO expected. It's a better way to learn your exposure than an incident report.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=ai-governance-mid',
    },
  },

  { type: 'h2', text: 'The Minimum Viable AI Governance Stack' },
  {
    type: 'p',
    text: "What a 50–500 person company should actually have — smaller, cheaper, and operational, not the enterprise apparatus. Six items:",
  },
  {
    type: 'ul',
    items: [
      "**A written AI policy that names approved tools and forbidden data.** Two pages, not forty. It names the stack employees *may* use (ChatGPT Team or Enterprise, Claude Team, Copilot for M365 — whatever you've vetted) and the data that goes into *no* AI system, ever: customer PII, client-confidential material, regulated data, source code. Specificity is the whole value — \"be careful with AI\" governs nothing.",
      "**A named executive owner.** One person accountable — you, the COO, or a [fractional CIO or CAIO](/blog/when-to-hire-fractional-cio) filling the role. Governance without an owner is a document, not a system, and documents don't enforce themselves.",
      "**A monthly review of what's flowing where.** A simplified data-flow check: which AI tools does the company pay for, what data does each touch, and when did we last read the vendor's data-handling terms. Thirty minutes a month beats a $670,000 surprise.",
      "**An intake for new AI proposals.** Every pilot enters through one defined path with executive sign-off before money moves — the same discipline as [evaluating any AI pilot before approving it](/blog/ai-readiness-for-non-technical-executives).",
      "**Incident response with AI-specific procedures.** Your existing IR plan almost certainly doesn't cover \"an employee pasted regulated data into a consumer AI tool.\" Add the addendum: what gets reported, to whom, in what window. Shadow-AI breaches take about a week longer to detect and contain than average — the plan is what closes that gap.",
      "**Vendor governance for AI features already inside your tools.** Copilot in Microsoft 365, Gemini in Google Workspace, Einstein in Salesforce — these arrived switched on, without a decision. Governance means retroactively answering the same data-flow question for each embedded feature you're already paying for.",
    ],
  },
  {
    type: 'p',
    text: "That's the stack. It's the operational core of what [structured AI governance](/ai-governance) and [ongoing AI strategy](/ai-strategy-consulting) deliver as a service — but a company your size can stand up the first version in a few weeks with the list above.",
  },

  { type: 'h2', text: 'Frameworks Worth Using as Scaffolding' },
  {
    type: 'p',
    text: "Don't invent governance from scratch — adapt one of three published frameworks to your size. The NIST AI Risk Management Framework is free, federal-grade, and the most practical starting point for a US company. ISO/IEC 42001 is the certifiable international standard if a customer or contract will eventually require one. And the EU AI Act's risk-classification approach — sorting AI uses by potential harm — is a useful mental model even if you never touch the EU market; its transparency and general-application obligations began phasing in as of August 2026, so it's a live regime, not a future one. Pick one as scaffolding and adapt it down to your scale. A framework nobody operationalizes is a PDF; a framework you actually apply is governance. Readers who want the deep version can click through — the point here is to choose one and start.",
  },

  { type: 'h2', text: 'What to Do Monday Morning' },
  {
    type: 'p',
    text: "Three moves, in order. **First, ask five people what AI tools they've used with company data in the last 30 days.** Not a policy question — a factual one, asked without consequence attached. Those five honest answers map your actual shadow-AI footprint faster than any survey, and the total is almost always larger than you'd guess. **Second, publish or revise the two-page policy** — the one naming approved tools and forbidden data. Circulate it directly to every employee; don't bury it in a wiki nobody opens. **Third, assign the owner.** If it isn't you, name who it is and why — and if they need the capacity to actually do it, that's a [fractional CIO or CAIO conversation](/blog/when-to-hire-fractional-cio), not a job you bolt onto someone already full. For the wider context on why this now sits on the executive desk rather than in IT, [the case that AI is a leadership responsibility](/blog/the-black-box-is-dead-why-business-leaders-can-no-longer-sit-on-the-sidelines) is the companion read.",
  },

  { type: 'h2', text: 'What You Decide to Do About It' },
  {
    type: 'p',
    text: "Shadow AI is what's already happening. Governance is what you decide to do about it. The Fortune 500 version — the AI committee, the chief data officer, the 40-page framework — is not the version that fits a 200-person company; you need less than they build and more than you currently have. Start small, name the owner, publish the policy, run the discovery. What you learn will reshape your budget conversation, your insurance conversation, and probably your next customer contract — because those conversations are already changing, with or without you. Governing shadow AI is simply [the same technology-ROI discipline](/maximize-roi-with-managed-it-services) applied to a risk that arrived faster than the org chart: name the outcome, assign the owner, decide in advance. Ignoring it changes those same conversations too — just less on your terms.",
  },
]
