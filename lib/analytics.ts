// Analytics event helper.
//
// GA4 reaches this site through Google Tag Manager (GTM-NKZ96XQ), loaded in
// app/layout.tsx. Events pushed here land in GTM's dataLayer, where a Custom
// Event trigger forwards them to GA4.
//
// Why push from code rather than let GTM detect submissions itself: both
// forms on this site submit with fetch() and never navigate, so GA4's
// automatic form tracking cannot see them. GTM could watch for DOM clicks
// instead, but those rules key off CSS classes that change on any restyle.
// An explicit push fires on actual success — never on a failed submit — and
// survives redesigns.
//
// NEVER pass personal data. Names, email addresses and phone numbers must
// not reach Google Analytics: it violates the GA terms of service and can
// get a property purged. Pass only categorical context useful for
// segmenting: which form, which industry, what size company.

/** Shape of a dataLayer entry. Values stay primitive so GTM can read them. */
type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

/**
 * Push a named event into GTM's dataLayer.
 *
 * Safe to call anywhere: no-ops during server rendering, and when GTM is
 * absent — which is every deploy preview, since NEXT_PUBLIC_GTM_ID is only
 * set on the production context so QA traffic stays out of analytics.
 */
export function pushEvent(event: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return
  try {
    window.dataLayer = window.dataLayer || []
    // Undefined values are dropped so GTM never sees empty parameters.
    const clean: Record<string, unknown> = { event }
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined) clean[k] = v
    }
    window.dataLayer.push(clean)
  } catch {
    // Analytics must never break a form submission. If the push fails the
    // visitor still completes what they came to do.
  }
}

/** Event names, kept here so GTM triggers have one source of truth. */
export const ANALYTICS_EVENTS = {
  /** Contact form submitted successfully. */
  contactFormSubmit: 'contact_form_submit',
  /** Calculator lead captured — estimate revealed. */
  calculatorLead: 'calculator_lead',
  /** Calculator results printed or saved as PDF. */
  calculatorPdf: 'calculator_pdf',
} as const
