// Pricing model, ROI benchmarks, and lead-quality rules for the IT
// Investment Calculator.
//
// Everything a number depends on lives in this file so Zack can audit or
// adjust rates without touching component code. Rates are ITSco's real
// 2026 per-unit pricing.
//
// KNOWN GAP — systems administration labor is not yet modeled. Mike flagged
// on the Sept 2 review that sys admin time (engineers triaging tool alerts)
// is added back into most quotes by hand and is separate from the help-desk
// users÷3 calculation. Needs a rate and a trigger rule from Zack before
// this goes public.

export const PRICING = {
  /** Per help-desk unit, where one unit covers three knowledge users. */
  mspSupportLaborPerUnit: 95,
  /** Flat monthly platform fee per customer account. */
  psaPortalFlat: 450,
  /** Per managed PC or laptop. */
  rmmPerDevice: 10,
  /** Per server or VM, including server management. */
  serverPerUnit: 210,
  /** Per managed firewall or switch. */
  networkPerDevice: 50,
} as const

export interface AddOn {
  key: string
  name: string
  price: number
  per: 'user' | 'device'
  recommended: boolean
  desc: string
}

// No vendor or product names — Mike: "we don't really want to use any brand
// names ... we're not always going to use [a given vendor]." Descriptions
// stay capability-led so the tooling behind them can change.
export const ADDONS: readonly AddOn[] = [
  {
    key: 'edr',
    name: 'Endpoint Protection (EDR)',
    price: 4.69,
    per: 'device',
    recommended: true,
    desc: 'Malware and ransomware defense with automatic remediation on every device.',
  },
  {
    key: 'siem',
    name: 'SIEM & Security Monitoring',
    price: 10.6,
    per: 'user',
    recommended: true,
    desc: 'Real-time threat detection and automated response across your network and endpoints.',
  },
  {
    key: 'bdr',
    name: 'Backup & Disaster Recovery',
    price: 2.19,
    per: 'user',
    recommended: false,
    desc: 'Automated, encrypted backups with rapid recovery — ransomware, hardware failure, or data loss.',
  },
  {
    key: 'sat',
    name: 'Security Awareness Training',
    price: 2.5,
    per: 'user',
    recommended: false,
    desc: 'Ongoing phishing simulations and employee training to reduce human-error risk.',
  },
  {
    key: 'email',
    name: 'Enhanced Email Security',
    price: 2.5,
    per: 'user',
    recommended: false,
    desc: 'Advanced protection against phishing, malware, and business email compromise.',
  },
  {
    key: 'mfa',
    name: 'Multi-Factor Authentication',
    price: 3.0,
    per: 'user',
    recommended: false,
    desc: 'Second layer of verification beyond passwords across your apps, VPN, and remote access.',
  },
  {
    key: 'dns',
    name: 'DNS Security',
    price: 5.0,
    per: 'user',
    recommended: false,
    desc: 'Blocks malicious sites, malware, and phishing at the network level before a connection is made.',
  },
]

// The comparison every executive makes regardless of current setup: "what
// would it cost to just hire someone?" Fully-loaded cost is the BLS median
// for Network & Computer Systems Administrators (~$96K) x ~1.3 for benefits,
// payroll tax, and tooling. The staffing ratio is the common SMB rule of
// thumb and only drives the "you'd typically staff N" note.
export const INHOUSE_BENCHMARK = {
  loadedAnnualCost: 125_000,
  usersPerFte: 75,
} as const

export type ITModel = 'break-fix' | 'in-house' | 'existing-msp' | 'hybrid' | 'nothing'

export const IT_MODELS: readonly { value: ITModel; label: string }[] = [
  { value: 'break-fix', label: 'Break-fix or ad-hoc' },
  { value: 'in-house', label: 'In-house IT team' },
  { value: 'existing-msp', label: 'Existing MSP contract' },
  { value: 'hybrid', label: 'Hybrid (in-house + MSP)' },
  { value: 'nothing', label: 'Nothing formal' },
]

export const MODEL_LABEL_SHORT: Record<ITModel, string> = {
  'break-fix': 'break-fix',
  'in-house': 'in-house IT',
  'existing-msp': 'your current MSP',
  hybrid: 'your hybrid setup',
  nothing: 'no formal IT',
}

export const MODEL_LABEL_FULL: Record<ITModel, string> = {
  'break-fix': 'Break-fix / ad-hoc',
  'in-house': 'In-house IT team',
  'existing-msp': 'Existing MSP contract',
  hybrid: 'Hybrid (in-house + MSP)',
  nothing: 'Nothing formal',
}

export type Industry =
  | 'professional-services'
  | 'healthcare'
  | 'legal'
  | 'financial-services'
  | 'manufacturing'
  | 'non-profit'
  | 'government-defense'
  | 'real-estate'
  | 'construction'
  | 'other'

export const INDUSTRIES: readonly { value: Industry; label: string }[] = [
  { value: 'professional-services', label: 'Professional Services' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'legal', label: 'Legal' },
  { value: 'financial-services', label: 'Financial Services' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'non-profit', label: 'Non-Profit' },
  { value: 'government-defense', label: 'Government / Defense Industry' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'construction', label: 'Construction' },
  { value: 'other', label: 'Other' },
]

// Asked after an industry is picked. Answers don't affect the estimate —
// they're scoping context that lands in the submission so the first call
// starts further along.
export const INDUSTRY_QUESTIONS: Record<Industry, readonly string[]> = {
  healthcare: [
    'Do you transmit, store, or process Protected Health Information (PHI), and do you have Business Associate Agreements (BAAs) in place with your current vendors?',
    'Do you use any connected medical devices or EHR/EMR systems that require network segmentation?',
  ],
  legal: [
    'Do you use a document/matter management system or trust accounting software that requires specific security controls?',
    'Do you handle privileged or confidential client data that requires dedicated encryption or access restrictions beyond standard email?',
  ],
  'financial-services': [
    'Are you subject to SEC, FINRA, or GLBA requirements for data retention and communications archiving?',
    'Do you process, store, or transmit cardholder data requiring PCI-DSS compliance?',
  ],
  manufacturing: [
    'Do you have operational technology (OT) or industrial control systems (ICS) on the same network as your business IT systems?',
    'Do you have any Department of Defense contracts or supply chain relationships that require CMMC or NIST 800-171 compliance?',
  ],
  'non-profit': [
    'Do you accept online donations or process payment data that would require PCI compliance?',
    'Do you have grant-funded programs with specific data handling or reporting requirements tied to funding sources?',
  ],
  'government-defense': [
    'Do you handle Controlled Unclassified Information (CUI), and if so, do you have a compliant method for exchanging it with third parties?',
    'What is your current CMMC certification level or target level, and what is your assessment timeline?',
  ],
  'real-estate': [
    'Do you handle wire transfers or escrow transactions that could be targeted by business email compromise (BEC) fraud?',
    'Do your agents use personal or field devices to access company systems, and do you need mobile device management for those?',
  ],
  construction: [
    'Do you have field staff working from remote job sites who need mobile connectivity and device support?',
    'Do you have government or prevailing-wage contracts requiring certified payroll data handling or specific compliance controls?',
  ],
  'professional-services': [
    'Do you have industry-specific software or vendor systems that require specialized support or integration?',
    'Do you have seasonal or project-based staffing fluctuations that affect your licensing or device count?',
  ],
  other: [
    'Do you have industry-specific software or vendor systems that require specialized support or integration?',
    'Do you have seasonal or project-based staffing fluctuations that affect your licensing or device count?',
  ],
}

// Directional benchmarks blended from public sources (BLS wage data, IBM
// Cost of a Data Breach, Verizon DBIR, Gartner IT spending, ITIC downtime
// research). These drive the savings picture, never the price.
export const ROI_BENCHMARKS = {
  // Fully loaded hourly payroll cost by industry: blended salary x ~1.3 for
  // benefits and payroll tax, over 2,080 hours. This is what an idle hour
  // COSTS, which is the defensible basis for lost-time math.
  //
  // It deliberately replaces the client billing rate used previously. A law
  // firm charges $250/hour; that is revenue, not cost, and using it assumed
  // 100% utilisation and that lost billable hours are never recovered.
  // Neither holds, and the resulting figures did not survive CFO scrutiny.
  loadedHourlyByIndustry: {
    'professional-services': 55,
    healthcare: 55,
    legal: 60,
    'financial-services': 60,
    manufacturing: 40,
    'non-profit': 35,
    'government-defense': 60,
    'real-estate': 45,
    construction: 40,
    other: 50,
  } as Record<Industry, number>,
  downtimeHoursByModel: {
    'break-fix': 20,
    'in-house': 10,
    'existing-msp': 6,
    hybrid: 8,
    nothing: 36,
  } as Record<ITModel, number>,
  managedDowntimeHours: 4,
  productivityHoursByModel: {
    'break-fix': 18,
    'in-house': 12,
    'existing-msp': 7,
    hybrid: 10,
    nothing: 24,
  } as Record<ITModel, number>,
  managedProductivityHours: 4,
  securityRiskByIndustry: {
    'professional-services': { low: 30_000, high: 90_000 },
    healthcare: { low: 80_000, high: 220_000 },
    legal: { low: 60_000, high: 150_000 },
    'financial-services': { low: 70_000, high: 180_000 },
    manufacturing: { low: 40_000, high: 110_000 },
    'non-profit': { low: 20_000, high: 70_000 },
    'government-defense': { low: 100_000, high: 300_000 },
    'real-estate': { low: 25_000, high: 80_000 },
    construction: { low: 30_000, high: 90_000 },
    other: { low: 30_000, high: 90_000 },
  } as Record<Industry, { low: number; high: number }>,
  riskReductionByCurrent: {
    'break-fix': 0.55,
    'in-house': 0.35,
    'existing-msp': 0.2,
    hybrid: 0.3,
    nothing: 0.7,
  } as Record<ITModel, number>,
  // Share of the workforce genuinely unable to work during a typical
  // incident. Most outages are partial -- one system, one site, one team --
  // so charging every employee for the full outage window overstates the
  // loss. 0.35 is the blended partial-outage assumption.
  outageParticipationFactor: 0.35,
} as const

/* ── Lead quality ─────────────────────────────────────────────────────
   Mike: "One thing I definitely want is no Gmail ... it has to be a company
   domain. Otherwise I don't want it." Quality over quantity — a free-mail
   address almost never belongs to a company that can buy.                */

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'ymail.com', 'rocketmail.com',
  'hotmail.com', 'outlook.com', 'live.com', 'msn.com', 'passport.com',
  'aol.com', 'icloud.com', 'me.com', 'mac.com', 'gmx.com', 'gmx.net',
  'mail.com', 'zoho.com', 'yandex.com', 'protonmail.com', 'proton.me',
  'pm.me', 'tutanota.com', 'hushmail.com', 'fastmail.com', 'inbox.com',
  'mail.ru', 'qq.com', '163.com', '126.com', 'comcast.net', 'verizon.net',
  'att.net', 'sbcglobal.net', 'bellsouth.net', 'cox.net', 'charter.net',
  'earthlink.net', 'juno.com', 'aim.com', 'yahoo.co.uk', 'hotmail.co.uk',
  'outlook.co.uk', 'live.co.uk', 'btinternet.com', 'orange.fr', 'web.de',
])

const DISPOSABLE_HINTS = [
  'mailinator', 'guerrillamail', '10minutemail', 'tempmail', 'throwaway',
  'trashmail', 'yopmail', 'sharklasers', 'dispostable', 'maildrop',
]

/** Returns an error message, or null when the address is acceptable. */
export function emailProblem(email: string): string | null {
  const at = email.lastIndexOf('@')
  if (at < 1 || at === email.length - 1) return 'Enter a valid email address.'
  const domain = email.slice(at + 1).toLowerCase().trim()
  if (!/^[a-z0-9.-]+\.[a-z]{2,}$/.test(domain)) return 'Enter a valid email address.'
  if (FREE_EMAIL_DOMAINS.has(domain)) {
    return 'Please use your company email address — we can’t send estimates to personal accounts.'
  }
  if (DISPOSABLE_HINTS.some((h) => domain.includes(h))) {
    return 'Please use your company email address.'
  }
  return null
}

/** Returns an error message, or null when the phone number is acceptable. */
export function phoneProblem(phone: string): string | null {
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 10) return 'Enter a phone number including area code.'
  if (digits.length > 15) return 'Enter a valid phone number.'
  return null
}

/* ── Derivation helpers ───────────────────────────────────────────────
   Server and network counts are dropdowns rather than exact numbers: the
   executive audience typically doesn't know their infrastructure counts off
   the top of their head. "auto" derives from user count so the estimate
   stays directionally correct without a hard answer.                     */

export function parseServerSelect(val: string, users: number): number {
  if (val === 'auto') {
    if (users < 25) return 1
    if (users < 75) return 2
    if (users < 150) return 4
    if (users < 300) return 8
    return 12
  }
  return Math.max(0, Number(val) || 0)
}

export function parseNetworkSelect(val: string, users: number): number {
  if (val === 'auto') {
    if (users < 50) return 1
    if (users < 150) return 2
    if (users < 300) return 4
    return 6
  }
  return Math.max(0, Number(val) || 0)
}

/* ── Calculation ──────────────────────────────────────────────────────── */

export interface CalcInputs {
  users: number
  devices: number
  mobileDevices: number
  servers: number
  networkGear: number
  industry: Industry
  model: ITModel | null
}

export interface QuoteLine {
  label: string
  qty: number
  rate: number
  monthly: number
  hint: string
}

export interface AddOnLine {
  label: string
  qty: number
  rate: number
  unit: string
  monthly: number
}

export interface Quote {
  base: QuoteLine[]
  addonLines: AddOnLine[]
  baseTotal: number
  addonTotal: number
  monthly: number
  annual: number
}

/**
 * Line-item labels describe what the client receives, not ITSco's internal
 * cost centers — a CFO reading a vendor platform name as a line item asks
 * why they're paying for their provider's tooling.
 */
export function calculateQuote(
  inputs: CalcInputs,
  addons: Record<string, boolean>,
): Quote {
  const { users, devices, servers, networkGear } = inputs

  const mspUnits = Math.max(1, Math.ceil(users / 3))
  const base: QuoteLine[] = [
    {
      label: 'Helpdesk & support staffing',
      qty: mspUnits,
      rate: PRICING.mspSupportLaborPerUnit,
      monthly: mspUnits * PRICING.mspSupportLaborPerUnit,
      hint: `Staffed at 1 support unit per 3 users (${users} users)`,
    },
    {
      label: 'Client portal, ticketing & reporting',
      qty: 1,
      rate: PRICING.psaPortalFlat,
      monthly: PRICING.psaPortalFlat,
      hint: 'Flat per company',
    },
    {
      label: 'Device monitoring & patching',
      qty: devices,
      rate: PRICING.rmmPerDevice,
      monthly: devices * PRICING.rmmPerDevice,
      hint: 'Per PC / laptop',
    },
    {
      label: 'Server management & monitoring',
      qty: servers,
      rate: PRICING.serverPerUnit,
      monthly: servers * PRICING.serverPerUnit,
      hint: 'Per server or VM',
    },
    {
      label: 'Network monitoring',
      qty: networkGear,
      rate: PRICING.networkPerDevice,
      monthly: networkGear * PRICING.networkPerDevice,
      hint: 'Per firewall / switch',
    },
  ]

  const baseTotal = base.reduce((s, l) => s + l.monthly, 0)

  const addonLines: AddOnLine[] = []
  for (const a of ADDONS) {
    if (!addons[a.key]) continue
    const qty = a.per === 'device' ? devices : users
    addonLines.push({
      label: a.name,
      qty,
      rate: a.price,
      unit: a.per,
      monthly: qty * a.price,
    })
  }
  const addonTotal = addonLines.reduce((s, l) => s + l.monthly, 0)

  const monthly = baseTotal + addonTotal
  return { base, addonLines, baseTotal, addonTotal, monthly, annual: monthly * 12 }
}

export interface Range {
  low: number
  high: number
}

export interface Roi {
  downtime: Range
  productivity: Range
  security: Range
  valueLow: number
  valueHigh: number
  valueTotal: number
  netAnnual: number
  netLow: number
  netHigh: number
}

/**
 * Savings are presented as ranges, never a single figure: the price is a
 * hard number from real rates, while this is benchmark-derived and a CFO
 * will (rightly) poke at it. A band is the honest presentation.
 */
export function calculateRoi(inputs: CalcInputs, quote: Quote): Roi | null {
  const { users, industry, model } = inputs
  if (!model) return null

  // One labour-cost basis drives both people-time lines, so the two numbers
  // are consistent with each other and with what the company actually pays.
  const loadedHourly = ROI_BENCHMARKS.loadedHourlyByIndustry[industry] ?? 50

  const dtCurrent = ROI_BENCHMARKS.downtimeHoursByModel[model] ?? 20
  const dtSaved = Math.max(0, dtCurrent - ROI_BENCHMARKS.managedDowntimeHours)
  const downtimeMid =
    dtSaved * users * loadedHourly * ROI_BENCHMARKS.outageParticipationFactor

  // No participation factor here: degraded systems and support waits affect
  // everyone, which is exactly what separates this from an outage.
  const prodCurrent = ROI_BENCHMARKS.productivityHoursByModel[model] ?? 12
  const prodSaved = Math.max(0, prodCurrent - ROI_BENCHMARKS.managedProductivityHours)
  const productivityMid = prodSaved * users * loadedHourly

  const riskRange = ROI_BENCHMARKS.securityRiskByIndustry[industry]
  const riskFactor = ROI_BENCHMARKS.riskReductionByCurrent[model] ?? 0.5
  const userRiskScale = Math.min(2.5, Math.max(0.5, users / 100))
  const securityMid = ((riskRange.low + riskRange.high) / 2) * riskFactor * userRiskScale

  // +/-25% band on the modeled midpoints; security uses its published
  // low/high directly rather than a synthetic band.
  const BAND = 0.25
  const band = (mid: number): Range => ({ low: mid * (1 - BAND), high: mid * (1 + BAND) })
  const downtime = band(downtimeMid)
  const productivity = band(productivityMid)
  const security = {
    low: riskRange.low * riskFactor * userRiskScale,
    high: riskRange.high * riskFactor * userRiskScale,
  }

  const valueTotal = downtimeMid + productivityMid + securityMid
  const valueLow = downtime.low + productivity.low + security.low
  const valueHigh = downtime.high + productivity.high + security.high

  return {
    downtime,
    productivity,
    security,
    valueLow,
    valueHigh,
    valueTotal,
    netAnnual: valueTotal - quote.annual,
    netLow: valueLow - quote.annual,
    netHigh: valueHigh - quote.annual,
  }
}

/* ── Formatting ───────────────────────────────────────────────────────── */

export function fmtCompact(n: number): string {
  const v = Math.round(n)
  if (v >= 1_000_000) return '$' + (v / 1_000_000).toFixed(v >= 10_000_000 ? 0 : 1) + 'M'
  if (v >= 1000) return '$' + Math.round(v / 1000).toLocaleString() + 'K'
  if (v >= 100) return '$' + Math.round(v / 100) * 100
  return '$' + v.toLocaleString()
}

export function fmtDollar(n: number): string {
  return '$' + Math.round(n).toLocaleString()
}

export function fmtCents(n: number): string {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function fmtRange(low: number, high: number): string {
  return `${fmtCompact(low)}–${fmtCompact(high)}`
}
