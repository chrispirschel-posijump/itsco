# Basis of Estimate — IT Investment Calculator

**Last reviewed:** 2026-10-07
**Next review due:** 2027-01-07 — **quarterly**, per Mike on the Oct 7 call: *"I think we check in on it once a quarter … if a license cost changes or we increase our labor costs a little bit, we'll catch it in the quoting process."*
**Owner:** Certainly (Chris Pirschel) with ITSco (Zack Beckham, pricing)

This file exists because counsel asked for it. Under North Carolina's Unfair
and Deceptive Trade Practices Act (N.C.G.S. Ch. 75) a disclaimer does not cure
a misleading claim, so every number the calculator shows a prospect needs a
traceable basis — a published source, or an honest statement that it is
ITSco's own operating assumption.

It lives next to `pricing.ts` so the two cannot drift apart. **If you change a
constant there, change the entry here in the same commit.**

---

## How to read this

Every figure falls into one of two categories, and we are deliberate about
which claims we attach to which:

- **Sourced** — traceable to a published figure with an edition date. These
  may be presented to prospects as research-backed.
- **Operating assumption** — ITSco's own judgment from 30 years serving
  50–500-person companies. Defensible as experience. **Must never be
  presented as third-party research.**

---

## Part 1 — Pricing inputs (what ITSco charges)

All figures are ITSco's client-facing rates, supplied by Zack Beckham. They
are not estimates and need no external substantiation — they are the rate
card. They are, however, **subject to change**, which is why the disclaimer
says "standard rates as of October 2026" rather than "actual pricing."

| Constant | Value | Basis | Date given |
|---|---|---|---|
| `mspSupportLaborPerUnit` | $95 / unit / mo | Zack — one unit per 3 knowledge users | Aug 2026 |
| `psaPortalFlat` | $450 / mo | Zack — flat per customer account | Aug 2026 |
| `rmmPerDevice` | $10 / device / mo | Zack | Aug 2026 |
| `serverPerUnit` | $210 / server / mo | Zack — each VM counts | Aug 2026 |
| `networkPerDevice` | $50 / device / mo | Zack — per firewall or switch | Aug 2026 |
| `sysAdminHourlyRate` | $125 / hr | Zack — client-facing rate | 2026-10-06 |
| `devicesPerSysAdminHour` | 10 devices = 1 hr / mo | Zack — "always round up". Device-driven as of Oct 7 | 2026-10-07 |
| `sysAdminMaxHours` | 100 hrs (1,000 devices) | Our cap, not Zack's. Uncapped it would quote far more sys admin than ITSco would staff, for a company size it does not sell to. | 2026-10-06 |
| Add-on unit prices | see `ADDONS` | Zack's per-seat and per-device costs | Aug 2026 |

**Settled Oct 7.** The sys admin ratio runs on **device count — computing plus
mobile — not headcount.** Zack: *"I would base it on the number of units or
devices, because if you're a user and you don't have any devices, you can't
really create any alerts."* Chris confirmed mobile devices count the same as
laptops, with no distinction.

> ⚠️ **Worth watching.** Mobile devices attract no other charge in the model —
> no device monitoring, no endpoint protection — but now carry sys admin labor
> at full weight. At the 50-user default this doubles the sys admin line from
> $625 to $1,250 a month and moves the per-user figure from roughly $90 to
> $102. Mike praised $90 on the Oct 7 call as *"a very competitive rate with
> security in it,"* so the headline number he approved has shifted.

---

## Part 2 — Labor cost (SOURCED)

This drives both savings lines. It is the strongest-sourced part of the model.

### Loaded hourly cost by industry

**Source:** U.S. Bureau of Labor Statistics, *Employer Costs for Employee
Compensation*, news release USDL-26-… for the **June 2026** reference period.
Table 5, private industry workers, total compensation cost per hour worked.
<https://www.bls.gov/news.release/ecec.t05.htm>

We use **total compensation per hour worked**, not wages. That figure already
includes benefits, insurance, and legally required contributions, so it is
what an idle hour genuinely costs an employer — the defensible basis for
lost-time math. All-private-industry average for the same period: **$46.89**.

| Calculator industry | Rate | BLS category used |
|---|---|---|
| Professional Services | $63.25 | Professional and business services |
| Legal | $63.25 | Professional and business services |
| Government / Defense | $63.25 | Professional and business services (private contractors) |
| Financial Services | $68.64 | Financial activities |
| Real Estate | $68.64 | Financial activities (includes real estate) |
| Healthcare | $54.83 | Education and health services |
| Construction | $52.73 | Construction |
| Manufacturing | $49.35 | Manufacturing |
| Non-Profit | $46.89 | All private industry (no ECEC non-profit category) |
| Other | $46.89 | All private industry |

**Mapping judgments to be aware of.** ECEC publishes by major industry group,
not by the verticals ITSco sells into, so four rows are proxies:

- *Legal* and *Government/Defense* both map to professional and business
  services. Reasonable, but not a law-firm-specific or defense-specific figure.
- *Real estate* inherits the financial activities rate, which is high for the
  sector's clerical roles. ECEC groups them; we did not override.
- *Non-profit* has no ECEC category at all. All-private-industry is a
  conservative proxy and is documented as such.
- *Healthcare* uses education and health services ($54.83) rather than the
  health-care-and-social-assistance breakout, because the latter is published
  only within the union/non-union tables and is less directly comparable.

### In-house hire comparison

**Sources:**
- BLS *Occupational Outlook Handbook*, Network and Computer Systems
  Administrators — median annual wage **$99,130**, May 2025.
  <https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm>
- BLS ECEC June 2026 — wages are 70.0% of total compensation, giving a
  loading multiplier of **1 ÷ 0.70 = 1.4286**.

**$99,130 × 1.4286 = $141,614 fully loaded.**

This covers wages, benefits, and legally required contributions. It excludes
tooling, training, recruitment, and the cost of coverage during absence, so it
is a conservative floor rather than a true all-in figure.

> ⚠️ **`INHOUSE_BENCHMARK.loadedAnnualCost` currently reads $125,000**, which
> was an estimate from before this research. It understates the BLS-derived
> figure by roughly 12%. Update to $141,614 and revise the page copy, which
> currently says "~$125K/yr."

### Staffing ratio — OPERATING ASSUMPTION

`usersPerFte: 75` — the common SMB rule of thumb of one IT FTE per 50–100
users. **No authoritative source.** Used only for the "a company your size
typically staffs N" note, never for a dollar figure. If that note is ever
promoted into a priced claim, this needs replacing.

---

## Part 3 — Savings model (OPERATING ASSUMPTIONS)

**None of the figures in this section are sourced, and they must not be
presented as research.** They are ITSco's reasoned assumptions about how much
time a company loses under each IT support model. They are applied to the
BLS-sourced labor rates above, so the *price of an hour* is defensible even
where the *number of hours* is judgment.

Published research covers the cost of a downtime hour (ITIC and others). It
does not break down hours of downtime by IT support model at the granularity
this calculator needs. We did not find a citable source and did not invent one.

### Downtime hours avoided per user per year

| Current model | Hours | Rationale |
|---|---|---|
| Nothing formal | 36 | No monitoring; failures found by users |
| Break-fix | 20 | Reactive only; no preventive maintenance |
| In-house team | 10 | Coverage gaps, single points of failure |
| Hybrid | 8 | Partial coverage |
| Existing MSP | 6 | Already monitored |
| **Managed baseline** | **4** | What remains under full management |

### Productivity hours recovered per user per year

| Current model | Hours | Rationale |
|---|---|---|
| Nothing formal | 24 | Workarounds, no helpdesk |
| Break-fix | 18 | Waiting on callouts |
| In-house team | 12 | Queue depth at peak |
| Hybrid | 10 | — |
| Existing MSP | 7 | — |
| **Managed baseline** | **4** | Residual friction |

Break-fix nets 14 hours per person per year — roughly 17 minutes a week.
Deliberately conservative; most prospects say it is low.

### Outage participation factor — 0.35

Share of staff genuinely unable to work during a typical incident. Most
outages are partial: one system, one site, one team. Charging every employee
for the full outage window overstates the loss badly.

Set on 2026-09-16 after Brendan challenged the earlier model, which multiplied
outage hours by every employee at the industry *client billing rate*. That
produced $750,000/year for a 250-person law firm — $3,000 per employee, or 16
full billable hours each. It would not have survived a CFO's first question.

---

## Part 4 — Exposure panel (MIXED)

Replaced the net-return panel on 2026-10-07. Net required the modelled value
to exceed the price before the panel said anything encouraging, and after sys
admin labor entered the price and the unsourced breach line left the model, it
often did not. Exposure makes no claim that has to clear a bar.

### Average cyber claim — $79,000 (SOURCED)

**Source:** Coalition, *2026 Cyber Claims Report* — average claim severity for
businesses under $25M revenue, drawn from 100,000+ policyholders across five
countries. Same report: overall claims frequency 1.54%; sub-$25M frequency
1.21%; overall average claim $116,000.
<https://www.coalitioninc.com/announcements/2026-cyber-claims-report>

### 61% of claims from ransomware or email compromise (SOURCED)

**Source:** NetDiligence, *2026 Cyber Claims Study* (16th annual, 10,309 claims
from incidents 2021–2025). Ransomware and business email compromise together
accounted for 51% of SME claims of at least $1,000 across the five-year period,
rising to nearly 61% in 2025. SMEs are 97% of all claims in the dataset.
<https://netdiligence.com/blog/2026/09/2026-cyber-claims-study-key-findings/>

### One-week incident scenario (MIXED)

`users × 40 hours × loadedHourlyByIndustry`

The labor rate is sourced (Part 2). **The week is not.** It is an illustration,
not a researched recovery time, and the page states it conditionally — "if an
incident took you offline for a week." Published recovery times vary widely and
the figure deliberately excludes recovery fees, legal costs, and lost revenue,
which makes it conservative.

**Do not restate the week as a typical or expected recovery time** without a
source. The conditional framing is what keeps this defensible.

### Why expected-value math was not used

An annualised figure is the more conventional construction, and it was
considered: 1.21% frequency × $79,000 severity ≈ **$956/year** for a company in
this revenue band. Even tripling the frequency to account for weak security
posture — a plausible but unsourceable adjustment — reaches roughly
$2,900/year, under 5% of a typical annual price.

The old breach line showed $16,500 for a 50-person professional services firm,
roughly 17× the defensible expected value. Presenting a small annualised number
would have been honest but unpersuasive; presenting the cost of an actual
incident is both.

---

## Part 5 — Price presentation

### What the prospect sees in the breakdown

**A list of what's included. No quantities, no rates, no per-line prices, no
total row.** Settled on the Oct 7 call, in three escalating steps:

- Zack: *"Can we take out the rate? The quantity is fine, but take out the
  rate — that's just quoting all of our hard pricing."*
- Mike went further: *"I'm not sure we want either in there. If you give them a
  total and a quantity, they can do the math."*
- And further still: *"List just what's included, be a list, and get rid of
  everything else — the price is above in the range."*

The per-line hint text went too, at Zack's request. The **per-user-per-month**
figure stays — Mike: *"I like that. It's an easy way for prospects to compare
us to others."*

**Add-on prices remain visible in the selector**, which is inconsistent with
the above but deliberate: they are the mechanism by which the range responds to
a toggle, and removing them would make the tool feel broken. Flagged for ITSco
to overrule if they want.

Every figure still reaches ITSco in the submission payload, so the sales team
loses nothing.

### ±10% range

The monthly figure is shown as a band rounded to the nearest $50, not a point.

Mike's own reference on the Sept 2 call was that 10% is a meaningful band:
*"10% here is $390 a month … that's barely three hours of labor."* Counsel's
draft disclaimer also assumes a range throughout.

**Confirmed by Mike on Oct 7:** *"I think it's fine. I don't have a strong
opinion … I feel better, again, with the disclaimers. Until we really get in and
talk to somebody and validate certain things, this is really high level, and I'm
not going to worry about somebody suing us for $500 a month."*

The itemised breakdown continues to show exact line items and is labelled as
the mid-point, so the band reads as scoping uncertainty rather than vagueness
about the rate card.

---

## Part 6 — Removed from the model

### Security and breach exposure as a savings line — REMOVED 2026-10-07

Previously shown as a dollar savings figure: industry breach cost × risk
reduction × size factor.

**Removed because it could not be defended.** The industry figures derived from
breach-cost research whose population is *organizations that suffered a
breach*, skewed heavily toward enterprises. Applying that to a 50-person
company and multiplying by an unsourced risk-reduction percentage produced a
dollar figure with no traceable basis — precisely the exposure counsel flagged
under the UDTPA. It carried only 10–20% of the modelled total.

Security still appears on the page, as exposure (Part 4) rather than savings.
**Do not reintroduce a security savings figure** without a defensible source.

### Net annual return panel — REMOVED 2026-10-07

See Part 4. Still calculated and sent to ITSco in the submission payload,
labelled as internal, so the sales team keeps the full picture.

### Sources removed from page copy — 2026-10-07

The footer previously credited BLS, IBM Cost of a Data Breach, Verizon DBIR,
Gartner, and ITIC.

With the breach line removed, IBM and Verizon no longer informed anything, and
**no figure ever traced to Gartner or ITIC at all** — they appear to have been
included because they sound authoritative, which is the exact pattern counsel
warned about. Page copy now cites BLS, Coalition and NetDiligence, each of
which drives a number that appears on screen.

---

## Changelog

Every entry here should correspond to a commit touching `pricing.ts` or the
results panels.

| Date | Change |
|---|---|
| 2026-09-16 | Downtime rebased from client billing rate to loaded payroll cost; outage participation factor set to 0.35 after Brendan challenged the earlier figures |
| 2026-10-06 | Sys admin labor added — $125/hr, 1 hr per 10 users, capped at 100 hrs |
| 2026-10-07 | Industry labor rates and the in-house hire figure replaced with BLS-sourced values; breach-cost savings line removed; IBM, Verizon, Gartner and ITIC dropped from page copy |
| 2026-10-07 | Net-return panel replaced with exposure framing; price shown as a ±10% range; conditional language throughout; counsel's plain-English line and expandable terms added as a draft |
| 2026-10-07 | After the monthly call: sys admin moved from headcount to device count; breakdown table replaced with a plain included-services list; review cadence set to quarterly |

---

## Review checklist

Annually, or on any constant change:

Quarterly, per Mike's Oct 7 direction.

- [ ] Pull the current BLS ECEC release; update industry rates and the 70%
      wage share if it has moved
- [ ] Pull the current OOH sysadmin median; recompute the loaded hire figure
- [ ] Confirm ITSco's rate card with Zack; update the "rates as of" date in
      the page disclaimer
- [ ] Confirm no unsourced figure has been promoted into a sourced claim
- [ ] Confirm page copy cites only sources that drive a number
- [ ] Pull the current Coalition and NetDiligence claims studies; update the
      claim severity and ransomware share figures
- [ ] Confirm the disclaimer language still matches what the calculator does —
      counsel's draft was written against an earlier version
