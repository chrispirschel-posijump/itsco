'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const FIELD =
  'w-full rounded-lg border border-[#EBEBEB] bg-white px-4 py-3 text-base text-[#111111] placeholder:text-[#999] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#CA3C27] transition-[border-color] duration-200'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    const body = new URLSearchParams()
    data.forEach((value, key) => body.append(key, value.toString()))
    body.append('form-name', 'contact')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) throw new Error(`${res.status}`)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-center">
        <div className="w-12 h-12 rounded-xl bg-[#CA3C27]/10 flex items-center justify-center mx-auto mb-5">
          <Check size={24} className="text-[#CA3C27]" />
        </div>
        <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-2">Message sent</h3>
        <p className="text-base text-[#404040] leading-relaxed">
          Thanks for reaching out — a member of our team will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-semibold text-[#111111] mb-1.5">
            Name <span className="text-[#CA3C27]">*</span>
          </label>
          <input id="cf-name" name="name" type="text" required className={FIELD} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-semibold text-[#111111] mb-1.5">
            Email <span className="text-[#CA3C27]">*</span>
          </label>
          <input id="cf-email" name="email" type="email" required className={FIELD} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="cf-company" className="block text-sm font-semibold text-[#111111] mb-1.5">
            Company
          </label>
          <input id="cf-company" name="company" type="text" className={FIELD} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-semibold text-[#111111] mb-1.5">
            Phone
          </label>
          <input id="cf-phone" name="phone" type="tel" className={FIELD} placeholder="(919) 000-0000" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className="block text-sm font-semibold text-[#111111] mb-1.5">
          How can we help? <span className="text-[#CA3C27]">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          className={`${FIELD} resize-y`}
          placeholder="Tell us a bit about your IT challenges or goals."
        />
      </div>

      {status === 'error' && (
        <p className="mt-4 text-sm text-[#CA3C27]">
          Something went wrong sending your message. Please try again, or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#CA3C27] rounded-xl hover:bg-[#B4311E] transition-[background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27] active:scale-[0.98] disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
