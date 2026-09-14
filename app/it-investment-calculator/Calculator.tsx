'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Printer, X } from 'lucide-react'
import {
  ADDONS,
  INDUSTRIES,
  INDUSTRY_QUESTIONS,
  INHOUSE_BENCHMARK,
  IT_MODELS,
  MODEL_LABEL_FULL,
  MODEL_LABEL_SHORT,
  calculateQuote,
  calculateRoi,
  emailProblem,
  fmtCents,
  fmtDollar,
  fmtRange,
  fmtCompact,
  parseNetworkSelect,
  parseServerSelect,
  phoneProblem,
  type CalcInputs,
  type ITModel,
  type Industry,
} from './pricing'

const CALENDLY_BASE =
  'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco'

/* ── Shared class tokens ───────────────────────────────────────────────
   Kept as constants rather than repeated inline so the form reads as one
   system and a spacing change lands in a single place.                  */

const FIELD =
  'w-full rounded-lg border border-[#EBEBEB] bg-white px-3.5 py-2.5 text-base text-itsco-dark tabular-nums placeholder:text-itsco-body/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-itsco-red transition-[border-color] duration-200'

const SELECT = `${FIELD} appearance-none cursor-pointer pr-10 text-base sm:text-sm`

const PANEL =
  'bg-itsco-card border border-[#EBEBEB] rounded-2xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'

const SECTION_LABEL =
  'text-[11px] font-bold uppercase tracking-[0.16em] text-itsco-body/60 mb-4'

const FIELD_LABEL = 'block text-sm font-semibold text-itsco-dark mb-1.5'

const BTN_BASE =
  'group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg transition-[background-color,color,border-color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-cta active:scale-[0.98]'

const BTN_PRIMARY = `${BTN_BASE} bg-itsco-cta text-white hover:bg-itsco-cta-hover`
const BTN_SECONDARY = `${BTN_BASE} bg-transparent text-itsco-cta border border-itsco-cta hover:bg-itsco-cta/10`

interface Contact {
  name: string
  email: string
  phone: string
  company: string
}

type Errors = Partial<Record<keyof Contact, string>>

const EMPTY_CONTACT: Contact = { name: '', email: '', phone: '', company: '' }

export default function Calculator() {
  /* ── Form state ───────────────────────────────────────────────────── */
  const [users, setUsers] = useState('50')
  const [devices, setDevices] = useState('55')
  const [mobileDevices, setMobileDevices] = useState('40')
  const [serversSel, setServersSel] = useState('')
  const [networkSel, setNetworkSel] = useState('')
  const [industry, setIndustry] = useState<Industry>('professional-services')
  const [followups, setFollowups] = useState<Record<string, Record<number, string>>>({})
  const [model, setModel] = useState<ITModel | null>(null)
  const [addons, setAddons] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(ADDONS.map((a) => [a.key, a.recommended])),
  )

  /* ── Flow state ───────────────────────────────────────────────────── */
  const [modelPrompt, setModelPrompt] = useState(false)
  const [gateOpen, setGateOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [bookingCampaign, setBookingCampaign] = useState('roi-calc')
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT)
  const [errors, setErrors] = useState<Errors>({})
  const [revealed, setRevealed] = useState(false)
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'error'>('idle')

  const resultsRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLFieldSetElement>(null)
  const gateFirstFieldRef = useRef<HTMLInputElement>(null)
  const bookingCloseRef = useRef<HTMLButtonElement>(null)

  /* ── Derived numbers ──────────────────────────────────────────────── */
  const inputs: CalcInputs = useMemo(() => {
    const u = Math.max(1, Number(users) || 1)
    return {
      users: u,
      devices: Math.max(0, Number(devices) || 0),
      mobileDevices: Math.max(0, Number(mobileDevices) || 0),
      servers: parseServerSelect(serversSel, u),
      networkGear: parseNetworkSelect(networkSel, u),
      industry,
      model,
    }
  }, [users, devices, mobileDevices, serversSel, networkSel, industry, model])

  const quote = useMemo(() => calculateQuote(inputs, addons), [inputs, addons])
  const roi = useMemo(() => calculateRoi(inputs, quote), [inputs, quote])

  const questions = INDUSTRY_QUESTIONS[industry] ?? []

  /* ── Escape closes whichever dialog is open ───────────────────────── */
  useEffect(() => {
    if (!gateOpen && !bookingOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Escape') return
      if (bookingOpen) setBookingOpen(false)
      else if (gateOpen) setGateOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [gateOpen, bookingOpen])

  useEffect(() => {
    if (gateOpen) gateFirstFieldRef.current?.focus()
  }, [gateOpen])

  useEffect(() => {
    if (bookingOpen) bookingCloseRef.current?.focus()
  }, [bookingOpen])

  /* ── Submission payload ───────────────────────────────────────────── */
  // Netlify Forms receives a flat field set plus a pre-formatted text block,
  // so the notification email is readable as-is and can be pasted straight
  // into a proposal drafter without preprocessing.
  const buildSubmission = useCallback(() => {
    const industryLabel = INDUSTRIES.find((i) => i.value === industry)?.label ?? industry
    const answered = questions.map((q, i) => ({
      question: q,
      answer: followups[industry]?.[i] || 'Not answered',
    }))
    const selected = ADDONS.filter((a) => addons[a.key])

    const lines: string[] = []
    const push = (k: string, v: string | number) => lines.push(`${k}: ${v}`)
    lines.push('=== ITSCO CALCULATOR SUBMISSION ===')
    push('Submitted', new Date().toISOString())
    lines.push('', '--- CONTACT ---')
    push('Name', contact.name)
    push('Email', contact.email)
    push('Phone', contact.phone)
    push('Company', contact.company)
    lines.push('', '--- ENVIRONMENT ---')
    push('Knowledge users', inputs.users)
    push('Computing devices', inputs.devices)
    push('Mobile devices', inputs.mobileDevices)
    push('Servers (used in pricing)', inputs.servers)
    push('Network devices (used in pricing)', inputs.networkGear)
    lines.push('', '--- INDUSTRY ---')
    push('Industry', industryLabel)
    answered.forEach((a, i) => {
      push(`Q${i + 1}`, a.question)
      push(`A${i + 1}`, a.answer)
    })
    lines.push('', '--- CURRENT IT ---')
    push('Model', model ? MODEL_LABEL_FULL[model] : 'Not specified')
    lines.push('', '--- ADD-ONS SELECTED ---')
    if (!selected.length) lines.push('None')
    selected.forEach((a) => {
      const qty = a.per === 'device' ? inputs.devices : inputs.users
      push(a.name, `$${a.price.toFixed(2)}/${a.per} = $${(qty * a.price).toFixed(2)}/mo`)
    })
    lines.push('', '--- ESTIMATE ---')
    push('Monthly', fmtCents(quote.monthly))
    push('Annual', fmtDollar(quote.annual))
    push('Per user / month', fmtCents(quote.monthly / inputs.users))
    lines.push('', 'Line items:')
    quote.base
      .filter((l) => l.monthly > 0)
      .forEach((l) => lines.push(`  ${l.label} | ${l.qty} x ${fmtCents(l.rate)} | ${fmtCents(l.monthly)}/mo`))
    if (roi) {
      lines.push('', '--- ROI RANGE (annual) ---')
      push('Downtime avoided', fmtRange(roi.downtime.low, roi.downtime.high))
      push('Productivity recovered', fmtRange(roi.productivity.low, roi.productivity.high))
      push('Security exposure reduced', fmtRange(roi.security.low, roi.security.high))
      push('Total annual value', fmtRange(roi.valueLow, roi.valueHigh))
      push('Net annual return', fmtRange(roi.netLow, roi.netHigh))
    }
    lines.push('', '=== END ===')

    return {
      'form-name': 'calculator',
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      company: contact.company,
      industry: industryLabel,
      'current-it-model': model ? MODEL_LABEL_FULL[model] : 'Not specified',
      users: String(inputs.users),
      devices: String(inputs.devices),
      'mobile-devices': String(inputs.mobileDevices),
      servers: String(inputs.servers),
      'network-devices': String(inputs.networkGear),
      'addons-selected': selected.map((a) => a.name).join('; ') || 'None',
      'estimate-monthly': quote.monthly.toFixed(2),
      'estimate-annual': String(Math.round(quote.annual)),
      summary: lines.join('\n'),
    }
  }, [contact, inputs, industry, questions, followups, addons, model, quote, roi])

  /* ── Handlers ─────────────────────────────────────────────────────── */

  function handleCalculate() {
    // ROI leads the results, so a current-IT baseline is required. Still no
    // default selection — pre-checking break-fix would produce the largest
    // possible savings figure, which reads as self-serving.
    if (!model) {
      setModelPrompt(true)
      modelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setGateOpen(true)
  }

  async function handleGateSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Validate everything at once so the prospect sees every problem in one
    // pass rather than fixing them one at a time.
    const next: Errors = {}
    if (!contact.name.trim()) next.name = 'Enter your name.'
    next.email = contact.email.trim()
      ? emailProblem(contact.email.trim()) ?? undefined
      : 'Enter your work email address.'
    next.phone = contact.phone.trim()
      ? phoneProblem(contact.phone.trim()) ?? undefined
      : 'Enter a phone number.'
    if (!contact.company.trim()) next.company = 'Enter your company name.'

    const cleaned = Object.fromEntries(
      Object.entries(next).filter(([, v]) => Boolean(v)),
    ) as Errors
    setErrors(cleaned)
    if (Object.keys(cleaned).length) return

    setSubmitState('sending')
    const body = new URLSearchParams(buildSubmission())
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      setSubmitState('idle')
    } catch {
      // The prospect still gets their estimate — a failed notification is
      // ours to chase, not a reason to withhold what they asked for.
      setSubmitState('error')
    }
    setRevealed(true)
    setGateOpen(false)
    requestAnimationFrame(() =>
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    )
  }

  function openBooking(campaign: string) {
    setBookingCampaign(campaign)
    setBookingOpen(true)
  }

  const bookingUrl =
    `${CALENDLY_BASE}?utm_source=calculator&utm_medium=cta&utm_campaign=${bookingCampaign}` +
    `&hide_gdpr_banner=1&background_color=F0EADA&text_color=111111&primary_color=CA3C27` +
    (contact.name ? `&name=${encodeURIComponent(contact.name)}` : '') +
    (contact.email ? `&email=${encodeURIComponent(contact.email)}` : '')

  /* ── In-house anchor ──────────────────────────────────────────────── */
  const hires = quote.annual / INHOUSE_BENCHMARK.loadedAnnualCost
  const typicalFte = Math.max(1, Math.round(inputs.users / INHOUSE_BENCHMARK.usersPerFte))
  const inhouseValue = hires < 1 ? `${Math.round(hires * 100)}%` : `${hires.toFixed(1)}×`
  const inhouseLabel =
    hires < 1
      ? 'of one full-time IT hire, fully loaded (~$125K/yr)'
      : typicalFte > 1
        ? `one full-time IT hire — a ${inputs.users}-person company typically staffs ${typicalFte}`
        : 'one full-time IT hire, fully loaded (~$125K/yr)'

  const comparison = !model
    ? ''
    : model === 'in-house'
      ? 'Put this number next to your current IT payroll — salaries, benefits, tooling, and the cost of coverage when someone is out.'
      : model === 'break-fix' || model === 'nothing'
        ? 'Replaces unpredictable break-fix invoicing and hourly rates with a fixed monthly line item.'
        : model === 'existing-msp'
          ? "Compare against your current MSP's monthly invoice as a starting point."
          : 'This is the MSP-side cost only — your existing internal IT salaries would remain.'

  const MEANINGFUL_NET = 5000
  const showNetFigure = roi && roi.netAnnual >= MEANINGFUL_NET && roi.netLow > 0

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[minmax(340px,400px)_1fr] items-start">
        {/* ── Inputs ──────────────────────────────────────────────── */}
        <section className={`${PANEL} print:hidden`} aria-label="Your inputs">
          <div className="mb-7">
            <p className={SECTION_LABEL}>Your Environment</p>

            <NumberField
              id="users" label="Knowledge users" hint="People with a computer, incl. contractors"
              value={users} onChange={setUsers} min={1} max={5000}
            />
            <NumberField
              id="devices" label="Computing devices" hint="PCs/laptops accessing the network"
              value={devices} onChange={setDevices} min={0} max={10000}
            />
            <NumberField
              id="mobileDevices" label="Mobile devices" hint="Company iPads, phones, etc."
              value={mobileDevices} onChange={setMobileDevices} min={0} max={10000}
            />

            <SelectField
              id="servers" label="Servers" hint="Best guess — includes cloud VMs and on-prem"
              value={serversSel} onChange={setServersSel}
              options={[
                { value: '0', label: 'None (all cloud)' },
                { value: '2', label: '1–3' },
                { value: '6', label: '4–10' },
                { value: '12', label: '10+' },
                { value: 'auto', label: 'Not sure — estimate for me' },
              ]}
            />
            <SelectField
              id="networkGear" label="Firewalls + switches" hint="Best guess — managed network devices"
              value={networkSel} onChange={setNetworkSel}
              options={[
                { value: '1', label: '1 (single office)' },
                { value: '2', label: '2–3 (multiple offices)' },
                { value: '5', label: '4+' },
                { value: 'auto', label: 'Not sure — estimate for me' },
              ]}
            />
          </div>

          <div className="mb-7 border-t border-[#EBEBEB] pt-6">
            <p className={SECTION_LABEL}>Your Industry</p>
            <label htmlFor="industry" className={FIELD_LABEL}>Industry</label>
            <SelectShell>
              <select
                id="industry" className={SELECT} value={industry}
                onChange={(e) => setIndustry(e.target.value as Industry)}
              >
                {INDUSTRIES.map((i) => (
                  <option key={i.value} value={i.value}>{i.label}</option>
                ))}
              </select>
            </SelectShell>

            {questions.length > 0 && (
              <div className="mt-3 rounded-lg border border-dashed border-[#DDD6C4] bg-white/60 px-4 py-3.5">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-itsco-body/60 mb-3">
                  A couple more about your industry
                </h3>
                {questions.map((q, i) => (
                  <div key={i} className="mb-2.5 last:mb-0">
                    <label htmlFor={`fu-${industry}-${i}`} className="block text-[13px] leading-snug text-itsco-body mb-1.5">
                      {q}
                    </label>
                    <SelectShell>
                      <select
                        id={`fu-${industry}-${i}`}
                        className={SELECT}
                        value={followups[industry]?.[i] ?? ''}
                        onChange={(e) =>
                          setFollowups((prev) => ({
                            ...prev,
                            [industry]: { ...(prev[industry] ?? {}), [i]: e.target.value },
                          }))
                        }
                      >
                        <option value="">Select…</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="not-sure">Not sure</option>
                      </select>
                    </SelectShell>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-7 border-t border-[#EBEBEB] pt-6">
            <p className={SECTION_LABEL}>Current IT Setup</p>
            <fieldset ref={modelRef}>
              <legend className={FIELD_LABEL}>How is IT handled today?</legend>
              <div className="flex flex-col gap-1.5 mt-1.5">
                {IT_MODELS.map((m) => (
                  <label
                    key={m.value}
                    className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 cursor-pointer transition-[border-color,background-color] duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-itsco-red ${
                      model === m.value
                        ? 'border-itsco-red bg-itsco-red/[0.07]'
                        : 'border-[#EBEBEB] bg-white hover:border-itsco-dark'
                    }`}
                  >
                    <input
                      type="radio" name="model" value={m.value}
                      checked={model === m.value}
                      onChange={() => { setModel(m.value); setModelPrompt(false) }}
                      className="w-4 h-4 accent-itsco-red"
                    />
                    <span className={`text-sm ${model === m.value ? 'font-semibold text-itsco-dark' : 'text-itsco-body'}`}>
                      {m.label}
                    </span>
                  </label>
                ))}
              </div>
              <p className={`text-xs leading-relaxed mt-2 ${modelPrompt ? 'text-itsco-red font-semibold' : 'text-itsco-body/60'}`}>
                {modelPrompt
                  ? 'Pick how IT is handled today so we can show what a partnership would save you.'
                  : 'Doesn’t change your price — it sets the baseline we compare your savings against.'}
              </p>
            </fieldset>
          </div>

          <div className="mb-7 border-t border-[#EBEBEB] pt-6">
            <p className={SECTION_LABEL}>Security &amp; Add-Ons</p>
            <div className="flex flex-col gap-2">
              {ADDONS.map((a) => (
                <label
                  key={a.key}
                  className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-[border-color,background-color] duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-itsco-red ${
                    addons[a.key]
                      ? 'border-itsco-red bg-itsco-red/[0.07]'
                      : 'border-[#EBEBEB] bg-white hover:border-itsco-dark'
                  }`}
                >
                  <input
                    type="checkbox" checked={addons[a.key]}
                    onChange={(e) => setAddons((p) => ({ ...p, [a.key]: e.target.checked }))}
                    className="w-[18px] h-[18px] shrink-0 accent-itsco-red"
                  />
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-2 text-sm font-semibold text-itsco-dark">
                      {a.name}
                      {a.recommended && (
                        <span className="rounded bg-itsco-red/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-itsco-red">
                          Recommended
                        </span>
                      )}
                    </span>
                    <span className="block text-xs text-itsco-body/70 mt-0.5">{a.desc}</span>
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-itsco-body">
                    {fmtCents(a.price)}/{a.per}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button type="button" onClick={handleCalculate} className={`${BTN_PRIMARY} w-full`}>
            Calculate My Investment
            <ArrowRight size={16} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </section>

        {/* ── Results ─────────────────────────────────────────────── */}
        <div ref={resultsRef} className="flex flex-col gap-5">
          {!revealed ? (
            <div className="rounded-2xl border border-dashed border-[#DDD6C4] bg-itsco-card/60 px-8 py-16 text-center">
              <h2 className="text-xl font-bold text-itsco-body leading-[1.15] tracking-tight mb-2">
                Your pricing estimate will appear here
              </h2>
              <p className="mx-auto max-w-[40ch] text-sm text-itsco-body/70 leading-relaxed">
                Fill in your details and select <strong>Calculate My Investment</strong> to see what a
                managed partnership would save you — and what it costs.
              </p>
            </div>
          ) : (
            <>
              {submitState === 'error' ? (
                <p className="rounded-lg border border-[#EBEBEB] border-l-[3px] border-l-itsco-red bg-white px-4 py-3 text-[13px] leading-relaxed text-itsco-body print:hidden">
                  <strong className="text-itsco-dark">Your estimate is ready below.</strong> We couldn’t
                  log your details automatically — if you don’t hear from us, call{' '}
                  <a href="tel:+19192499556" className="font-semibold text-itsco-red underline underline-offset-2 hover:text-itsco-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red">
                    (919) 249-9556
                  </a>.
                </p>
              ) : (
                <p className="rounded-lg border border-[#EBEBEB] border-l-[3px] border-l-itsco-dark bg-white px-4 py-3 text-[13px] leading-relaxed text-itsco-body print:hidden">
                  <strong className="text-itsco-dark">Estimate ready.</strong> A copy has gone to our team
                  at ITSco — we’ll follow up if you’d like to talk the numbers through.
                </p>
              )}

              {/* Savings lead the results: quantify the value before the price. */}
              {roi && model && (
                <>
                  <article className={`${PANEL} border-l-4 border-l-[#6B665D]`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                      <h2 className="text-xl md:text-2xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
                        What a managed partnership typically saves
                      </h2>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-itsco-body/60">
                        vs. {MODEL_LABEL_SHORT[model]}
                      </span>
                    </div>
                    <p className="max-w-[62ch] text-sm leading-relaxed text-itsco-body mb-5">
                      Directional ranges from public industry benchmarks — costs that don’t show up on an
                      invoice but land on the P&amp;L in downtime, lost employee hours, and security
                      exposure. Every business is different; these are starting points for a conversation,
                      not a forecast.
                    </p>
                    <dl>
                      <ValueRow label="Fewer outages (downtime avoided)" value={fmtRange(roi.downtime.low, roi.downtime.high)} />
                      <ValueRow label="Team productivity recovered" value={fmtRange(roi.productivity.low, roi.productivity.high)} />
                      <ValueRow label="Security & breach exposure reduced" value={fmtRange(roi.security.low, roi.security.high)} />
                      <div className="flex items-baseline justify-between gap-5 border-t-2 border-[#DDD6C4] mt-2 pt-4">
                        <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-itsco-body/60">
                          Typical range, per year
                        </dt>
                        <dd className="text-2xl font-extrabold text-itsco-dark tracking-tight tabular-nums">
                          {fmtRange(roi.valueLow, roi.valueHigh)}
                        </dd>
                      </div>
                    </dl>
                  </article>

                  <article className={`${PANEL} border-l-[5px] border-l-itsco-dark`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                      <h2 className="text-xl md:text-2xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
                        What this typically returns
                      </h2>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-itsco-body/60">
                        Directional estimate
                      </span>
                    </div>
                    <p className="max-w-[62ch] text-sm leading-relaxed text-itsco-body mb-6">
                      After the ITSco monthly investment, this is the range that typically stays in the
                      budget instead of being absorbed by preventable downtime, lost time, and unmanaged
                      risk.
                    </p>

                    {showNetFigure ? (
                      <div className="flex flex-col gap-3.5">
                        <p className="text-5xl md:text-6xl font-extrabold text-itsco-dark tracking-tight leading-none tabular-nums">
                          {fmtRange(roi.netLow, roi.netHigh)}
                        </p>
                        <span className="text-xs font-medium uppercase tracking-[0.06em] text-itsco-body/60">
                          Per year, typical net return
                        </span>
                        <span className="self-start rounded-full border border-[#EBEBEB] bg-white px-3.5 py-2 text-[13px] font-semibold tabular-nums text-itsco-body">
                          Roughly {fmtRange(roi.netLow / 12, roi.netHigh / 12)} a month — directional, not a guarantee
                        </span>
                      </div>
                    ) : (
                      <div className="rounded-lg border border-[#EBEBEB] bg-white p-5">
                        <p className="text-[15px] leading-relaxed text-itsco-body">
                          {model === 'existing-msp'
                            ? 'Your existing MSP appears to be delivering most of the operational value already. This calculator can’t measure the strategic upside — vendor consolidation, roadmap advisory, executive-level IT leadership, or specialty security expertise. That’s what a conversation is for.'
                            : roi.netAnnual < 0
                              ? 'Your current setup looks competitive with a fully managed partnership on paper. This napkin math doesn’t capture the strategic value ITSco delivers — vCIO advisory, security expertise, or vendor consolidation. We can walk through where those gaps typically sit.'
                              : 'You’re close to break-even on paper. The real value at this size usually comes from strategic upside — vCIO advisory, better security posture, freed-up executive attention. Worth a 30-minute conversation.'}
                        </p>
                      </div>
                    )}
                  </article>
                </>
              )}

              {/* Price follows the value. */}
              <article className={`${PANEL} border-l-4 border-l-[#6B665D]`}>
                <h2 className="text-xl md:text-2xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-3">
                  Your monthly ITSco pricing estimate
                </h2>
                <p className="max-w-[62ch] text-sm leading-relaxed text-itsco-body mb-5">
                  Based on ITSco’s real per-unit pricing for your environment. Adjust the add-ons to see
                  the total update live.
                </p>

                <p className="text-4xl md:text-5xl font-extrabold text-itsco-dark tracking-tight leading-none tabular-nums">
                  {fmtCents(quote.monthly)}
                </p>
                <span className="mt-2.5 block text-xs font-medium uppercase tracking-[0.06em] text-itsco-body/60">
                  Per month
                </span>
                <p className="mt-2.5 text-[13px] tabular-nums text-itsco-body">
                  {fmtCompact(quote.annual)} per year, all in.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Anchor value={fmtDollar(quote.monthly / inputs.users)} label="per user, per month" />
                  <Anchor value={inhouseValue} label={inhouseLabel} />
                </div>

                {comparison && (
                  <p className="mt-2.5 text-[13px] leading-relaxed text-itsco-body/70">{comparison}</p>
                )}

                <div className="mt-5 overflow-x-auto">
                  <table className="w-full border-collapse text-[13px] tabular-nums">
                    <thead>
                      <tr>
                        <th className="border-t border-[#EBEBEB] py-2 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-itsco-body/60">
                          Line item
                        </th>
                        <th className="border-t border-[#EBEBEB] py-2 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-itsco-body/60">
                          Qty × rate
                        </th>
                        <th className="border-t border-[#EBEBEB] py-2 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-itsco-body/60">
                          Monthly
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {quote.base.map((l) => (
                        <tr key={l.label}>
                          <td className="border-t border-[#EBEBEB] py-2 pr-3 text-itsco-body">
                            {l.label}
                            <span className="block text-[11px] text-itsco-body/60">{l.hint}</span>
                          </td>
                          <td className="border-t border-[#EBEBEB] py-2 text-right text-xs text-itsco-body/60 whitespace-nowrap">
                            {l.qty} × {fmtCents(l.rate)}
                          </td>
                          <td className="border-t border-[#EBEBEB] py-2 text-right font-semibold text-itsco-dark whitespace-nowrap">
                            {fmtCents(l.monthly)}
                          </td>
                        </tr>
                      ))}
                      {quote.addonLines.length > 0 && (
                        <tr>
                          <td colSpan={3} className="border-t border-[#DDD6C4] pt-3.5 pb-1 text-[11px] uppercase tracking-[0.1em] text-itsco-body/60">
                            Add-ons
                          </td>
                        </tr>
                      )}
                      {quote.addonLines.map((l) => (
                        <tr key={l.label}>
                          <td className="border-t border-[#EBEBEB] py-2 pr-3 text-itsco-body">
                            {l.label}
                            <span className="block text-[11px] text-itsco-body/60">per {l.unit}</span>
                          </td>
                          <td className="border-t border-[#EBEBEB] py-2 text-right text-xs text-itsco-body/60 whitespace-nowrap">
                            {l.qty} × {fmtCents(l.rate)}
                          </td>
                          <td className="border-t border-[#EBEBEB] py-2 text-right font-semibold text-itsco-dark whitespace-nowrap">
                            {fmtCents(l.monthly)}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="border-t-2 border-[#DDD6C4] pt-3 font-bold text-itsco-dark">Total monthly</td>
                        <td className="border-t-2 border-[#DDD6C4]" />
                        <td className="border-t-2 border-[#DDD6C4] pt-3 text-right text-lg font-extrabold text-itsco-dark tracking-tight tabular-nums whitespace-nowrap">
                          {fmtCents(quote.monthly)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-itsco-body/60">
                  Excludes Microsoft 365 licensing (most companies pay this separately, and pricing is
                  publicly available). One-time setup fees and contract-term discounts aren’t included — we
                  can walk through those on a discovery call.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 border-t border-[#EBEBEB] pt-5 print:hidden">
                  <button type="button" onClick={() => openBooking('roi-calc-estimate-panel')} className={BTN_PRIMARY}>
                    Book a call with us
                    <ArrowRight size={16} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                  <button type="button" onClick={() => window.print()} className={BTN_SECONDARY}>
                    <Printer size={16} className="shrink-0" />
                    Save as PDF
                  </button>
                </div>
              </article>
            </>
          )}
        </div>
      </div>

      {/* ── Gating modal ──────────────────────────────────────────── */}
      {gateOpen && (
        <Overlay onDismiss={() => setGateOpen(false)} labelledBy="gate-title">
          <div className="w-full max-w-[460px] rounded-2xl border border-[#EBEBEB] bg-itsco-card p-6 sm:p-8 shadow-[0_24px_64px_rgba(17,17,17,0.22)]">
            <h2 id="gate-title" className="text-2xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-2">
              Get your ITSco IT Investment Report
            </h2>
            <p className="text-sm leading-relaxed text-itsco-body mb-6">
              We’ll show your results and send a copy to our team so we can follow up if you’d like to
              talk through the numbers. Please use your company email address.
            </p>

            <form onSubmit={handleGateSubmit} noValidate>
              <GateField
                id="userName" label="Your name" value={contact.name} error={errors.name}
                autoComplete="name" placeholder="Jane Smith" inputRef={gateFirstFieldRef}
                onChange={(v) => setContact((c) => ({ ...c, name: v }))}
              />
              <GateField
                id="userEmail" label="Work email" type="email" value={contact.email} error={errors.email}
                autoComplete="email" placeholder="you@company.com"
                onChange={(v) => setContact((c) => ({ ...c, email: v }))}
              />
              <GateField
                id="userPhone" label="Phone" type="tel" value={contact.phone} error={errors.phone}
                autoComplete="tel" placeholder="(919) 555-0142"
                onChange={(v) => setContact((c) => ({ ...c, phone: v }))}
              />
              <GateField
                id="userCompany" label="Company name" value={contact.company} error={errors.company}
                autoComplete="organization" placeholder="Acme Manufacturing"
                onChange={(v) => setContact((c) => ({ ...c, company: v }))}
              />

              <div className="mt-6 flex flex-wrap justify-end gap-3">
                <button type="button" onClick={() => setGateOpen(false)} className={`${BTN_SECONDARY} flex-1 sm:flex-none`}>
                  Cancel
                </button>
                <button type="submit" disabled={submitState === 'sending'} className={`${BTN_PRIMARY} flex-1 sm:flex-none disabled:opacity-60`}>
                  {submitState === 'sending' ? 'Sending…' : 'Show me my results'}
                  {submitState !== 'sending' && (
                    <ArrowRight size={16} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </Overlay>
      )}

      {/* ── Booking modal ─────────────────────────────────────────── */}
      {bookingOpen && (
        <Overlay onDismiss={() => setBookingOpen(false)} labelledBy="booking-title">
          <div className="w-full max-w-[760px] rounded-2xl border border-[#EBEBEB] bg-itsco-card p-4 sm:p-6 shadow-[0_24px_64px_rgba(17,17,17,0.22)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 id="booking-title" className="text-xl sm:text-2xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
                  Book your 30-minute consultation
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-itsco-body">
                  Pick a time that works. We’ll walk through your estimate and scope the real numbers.
                </p>
              </div>
              <button
                ref={bookingCloseRef} type="button" onClick={() => setBookingOpen(false)}
                aria-label="Close"
                className="shrink-0 rounded-lg border border-[#EBEBEB] p-1.5 text-itsco-body transition-[border-color,color] duration-200 hover:border-itsco-dark hover:text-itsco-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red active:scale-[0.98]"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src={bookingUrl}
              title="Schedule a consultation with ITSco"
              className="block h-[min(640px,70vh)] w-full rounded-lg border-0 bg-white"
            />
            <p className="mt-3 text-center text-xs text-itsco-body/60">
              Trouble loading?{' '}
              <a
                href={bookingUrl} target="_blank" rel="noopener noreferrer"
                className="font-semibold text-itsco-red underline underline-offset-2 hover:text-itsco-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red"
              >
                Open the scheduling page in a new tab
              </a>
              .
            </p>
          </div>
        </Overlay>
      )}
    </>
  )
}

/* ── Small presentational pieces ──────────────────────────────────────── */

function Overlay({
  children, onDismiss, labelledBy,
}: {
  children: React.ReactNode
  onDismiss: () => void
  labelledBy: string
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-itsco-dark/55 p-3 backdrop-blur-[4px] print:hidden"
      role="dialog" aria-modal="true" aria-labelledby={labelledBy}
      onClick={(e) => { if (e.target === e.currentTarget) onDismiss() }}
    >
      {children}
    </div>
  )
}

/**
 * Wraps a native <select> so every dropdown on the page carries the same
 * chevron affordance. The icon is pointer-events-none so clicks fall
 * through to the select underneath.
 */
function SelectShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown
        size={16} aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-itsco-body/60"
      />
    </div>
  )
}

function NumberField({
  id, label, hint, value, onChange, min, max,
}: {
  id: string; label: string; hint: string; value: string
  onChange: (v: string) => void; min: number; max: number
}) {
  return (
    <div className="mb-4 grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[1fr_100px] sm:gap-3">
      <label htmlFor={id} className="text-sm font-medium text-itsco-body">
        {label}
        <span className="block text-[11px] text-itsco-body/60">{hint}</span>
      </label>
      <input
        id={id} type="number" inputMode="numeric" min={min} max={max} value={value}
        onChange={(e) => onChange(e.target.value)}
        // Spinners crowd the digits and add nothing — people type these.
        className={`${FIELD} text-right text-base sm:text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
      />
    </div>
  )
}

function SelectField({
  id, label, hint, value, onChange, options,
}: {
  id: string; label: string; hint: string; value: string
  onChange: (v: string) => void
  options: readonly { value: string; label: string }[]
}) {
  return (
    <div className="mb-4 grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[1fr_170px] sm:gap-3">
      <label htmlFor={id} className="text-sm font-medium text-itsco-body">
        {label}
        <span className="block text-[11px] text-itsco-body/60">{hint}</span>
      </label>
      <SelectShell>
        <select id={id} className={SELECT} value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="" disabled>Select…</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </SelectShell>
    </div>
  )
}

function GateField({
  id, label, value, onChange, error, type = 'text', autoComplete, placeholder, inputRef,
}: {
  id: string; label: string; value: string; onChange: (v: string) => void
  error?: string; type?: string; autoComplete?: string; placeholder?: string
  inputRef?: React.Ref<HTMLInputElement>
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className={FIELD_LABEL}>{label}</label>
      <input
        ref={inputRef} id={id} type={type} value={value} placeholder={placeholder}
        autoComplete={autoComplete} onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`${FIELD} ${error ? 'border-itsco-red' : ''}`}
      />
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-xs leading-snug text-itsco-red">{error}</p>
      )}
    </div>
  )
}

function ValueRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-5 border-t border-[#EBEBEB] py-3 first:border-t-0 first:pt-1">
      <dt className="text-sm text-itsco-body">{label}</dt>
      <dd className="text-base font-bold tabular-nums text-itsco-dark">{value}</dd>
    </div>
  )
}

function Anchor({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-[#EBEBEB] bg-white px-3.5 py-3">
      <p className="text-2xl font-extrabold text-itsco-dark tracking-tight leading-none tabular-nums">{value}</p>
      <p className="mt-1 text-xs leading-snug text-itsco-body/60">{label}</p>
    </div>
  )
}
