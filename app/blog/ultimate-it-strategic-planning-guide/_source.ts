// Rewrite. Pillar content from the ITSco team — extended length.
// Target keywords: "IT strategic planning", "IT strategy guide", "IT roadmap".

export const PAGE_TITLE =
  'The Ultimate IT Strategic Planning Guide for Business Leaders | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: 'IT strategic planning is the work that connects technology decisions to business outcomes — what to invest in, what to defer, what to retire, and what to do next year vs. three years out. Done well, it produces an IT operation that compounds business value over time. Done poorly, or skipped entirely, it produces an IT environment that costs more every year and delivers less.',
  },
  {
    type: 'p',
    text: 'This pillar guide walks through what IT strategic planning actually involves, how to do it without an internal CIO, the frameworks that work in practice, and the common pitfalls that produce planning documents nobody acts on. It is written for CEOs, COOs, CFOs, and operations leaders who are responsible for technology decisions without necessarily having deep technology backgrounds.',
  },

  { type: 'h2', text: 'What IT Strategic Planning Actually Is' },
  {
    type: 'p',
    text: 'IT strategic planning is the structured process of deciding what technology your business needs to operate well today and compete effectively tomorrow — and translating those decisions into a sequenced, costed, and accountable plan of action. It is not a Visio diagram of the target environment. It is the operating plan that connects technology decisions to revenue, cost, risk, and operations.',
  },
  {
    type: 'p',
    text: 'A real IT strategic plan answers questions like: which capabilities matter most over the next three years? Where are the biggest risks? Where should we invest more, and where should we hold? What is the technology roadmap that supports our business plan? What is the right operating model — internal, outsourced, hybrid? How will we measure whether the plan is working?',
  },

  { type: 'h2', text: 'Why Most Businesses Skip Strategic IT Planning' },
  {
    type: 'p',
    text: 'In most growing businesses, IT strategic planning is the work that keeps getting deferred. The reasons are familiar:',
  },
  {
    type: 'ul',
    items: [
      'Whoever would do the planning is consumed by tactical IT work',
      'Leadership does not have the technology background to lead it',
      'Past planning efforts produced documents nobody acted on',
      'The right cadence for it is unclear (annual? quarterly? when?)',
      'Strategic planning feels expensive relative to its visible payoff',
    ],
  },
  {
    type: 'p',
    text: 'The cost of skipping it is invisible until it is not. Technology decisions made reactively under deadline pressure compound for years. The strategic value of an IT function that aligns to business goals is meaningful and measurable; the strategic value of an IT function that is purely reactive is hard to find.',
  },

  { type: 'h2', text: 'The 7 Components of an IT Strategic Plan' },

  { type: 'h3', text: '1. Business Context and Strategic Drivers' },
  {
    type: 'p',
    text: "Start with the business. What is the company strategy for the next 3 years? What growth targets? What markets? What operational changes? What constraints? IT strategy is downstream of business strategy — if you are planning IT in isolation from the business plan, the IT plan will not actually serve the business.",
  },

  { type: 'h3', text: '2. Current State Assessment' },
  {
    type: 'p',
    text: 'Honest baseline of where you are today: infrastructure, applications, security posture, compliance state, vendor relationships, internal capabilities, technical debt, known risks, ongoing initiatives. Without an accurate current state, the plan is based on assumptions that may be wrong.',
  },

  { type: 'h3', text: '3. Target State Architecture' },
  {
    type: 'p',
    text: 'Where do you need to be in 3 years to support the business plan? Infrastructure model (cloud, hybrid, on-prem), security posture, application portfolio, integration architecture, identity and access model, operating model. The target state is the destination the roadmap moves toward.',
  },

  { type: 'h3', text: '4. Gap Analysis and Prioritization' },
  {
    type: 'p',
    text: 'The space between current and target is the gap. Decompose it into specific initiatives, estimate effort and cost, identify dependencies, and rank by business value. Prioritization is where strategic plans live or die — most plans include too many initiatives, and ranking ruthlessly is the discipline that produces an executable plan.',
  },

  { type: 'h3', text: '5. Roadmap and Sequencing' },
  {
    type: 'p',
    text: 'Map prioritized initiatives onto a timeline. What ships in the next 12 months? What is staged for year 2? What is in the year 3 backlog? Where are the dependencies that force sequencing? The roadmap is the bridge between strategy and execution.',
  },

  { type: 'h3', text: '6. Operating Model and Resource Plan' },
  {
    type: 'p',
    text: 'Who is going to do the work? Internal hires, outsourced partners, project-based professional services, or some combination? What does the steady-state operating model look like once major initiatives are complete? Operating model decisions affect both cost and execution capacity.',
  },

  { type: 'h3', text: '7. Success Metrics and Governance' },
  {
    type: 'p',
    text: 'How will you measure whether the plan is working? What metrics matter: cost predictability, security posture, audit results, customer satisfaction, project delivery, business impact metrics? Who reviews progress, on what cadence, and decides what changes? Without metrics and governance, plans drift into wishful thinking.',
  },

  { type: 'h2', text: 'How to Do Strategic IT Planning Without an Internal CIO' },
  {
    type: 'p',
    text: "Most mid-sized businesses cannot justify a full-time CIO — but they still need the strategic capacity that a CIO would provide. Three common patterns:",
  },

  { type: 'h3', text: 'Virtual CIO (vCIO) Engagement' },
  {
    type: 'p',
    text: 'A managed services partner provides vCIO capacity as part of the engagement — typically 1-2 days per month of strategic IT leadership integrated with the broader managed services relationship. This is the most common pattern for businesses 25-300 employees and produces real strategic capability at a fraction of full-time CIO cost.',
  },

  { type: 'h3', text: 'Project-Based Strategic Consulting' },
  {
    type: 'p',
    text: "An external strategy consulting engagement to build the initial plan, with internal staff (or vCIO) maintaining it over time. Good when the business is at an inflection point — major growth, M&A, post-incident reset — and needs deep planning capacity for a defined period.",
  },

  { type: 'h3', text: 'Internal Leadership With External Partnership' },
  {
    type: 'p',
    text: 'A senior internal leader (COO, CFO, or operations leader) owns the strategic planning, with an external partner providing analytical and architectural depth. Works well when leadership has the bandwidth to drive the process but needs technology depth to inform decisions.',
  },

  { type: 'h2', text: 'The Cadence That Works' },
  {
    type: 'p',
    text: 'A realistic IT strategic planning cadence for most businesses:',
  },
  {
    type: 'ul',
    items: [
      'Annual: full strategic plan refresh aligned with business planning and budget cycles',
      'Quarterly: business reviews (QBRs) that check progress against the plan and adjust priorities',
      'Monthly: operational reviews that handle tactical issues and escalations',
      'Ad-hoc: major events (M&A, incidents, large project decisions) that warrant focused planning sessions',
    ],
  },
  {
    type: 'p',
    text: 'The annual cadence keeps the plan current; the quarterly cadence keeps execution on track; the monthly and ad-hoc cadences keep operations from derailing strategic work.',
  },

  { type: 'h2', text: 'Common Pitfalls in IT Strategic Planning' },
  {
    type: 'p',
    text: 'Patterns that produce strategic plans that fail:',
  },
  {
    type: 'ul',
    items: [
      'Planning done in isolation from business strategy — IT plan does not actually support what the business is trying to do',
      'Wishful current-state assessment — minimizing problems leads to a plan based on incorrect assumptions',
      'Too many initiatives — every team gets their preferred project; nothing ships on time',
      'No measurable success criteria — nobody can tell whether the plan is working',
      'Plan produced but not acted on — leadership does not commit to executing what was planned',
      'No QBR cadence — the plan becomes irrelevant within 90 days',
      "Treating the plan as immovable — the world changes; the plan should adapt",
    ],
  },

  { type: 'h2', text: 'What a Good IT Strategic Plan Looks Like' },
  {
    type: 'p',
    text: 'In practice, a good IT strategic plan is concise — typically 15-40 pages depending on business complexity — and has these characteristics:',
  },
  {
    type: 'ul',
    items: [
      'Reads as a business document, not a technology document',
      'Connects every initiative to a business outcome',
      'Includes specific success metrics and target dates',
      'Has a clear ranked priority list, not just an exhaustive backlog',
      'Includes a costed and resourced roadmap',
      'Is signed off by business leadership, not just IT',
      'Is reviewed and updated on a defined cadence',
    ],
  },

  { type: 'h2', text: 'The Bottom Line' },
  {
    type: 'p',
    text: 'IT strategic planning is the work that turns IT from a cost center into a capability that compounds business value. It is achievable for businesses of every size when approached with the right scope, the right cadence, and the right operating model. The businesses that invest in it consistently outperform the ones that do not.',
  },
  {
    type: 'p',
    text: 'ITSco delivers IT strategic planning — through vCIO engagements, project-based consulting, and managed services relationships — for businesses across North Carolina, South Carolina, and Virginia. If you are at the strategic planning stage of your IT work, a free scoping consultation is the right place to start.',
  },
] as const
