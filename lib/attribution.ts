// Lead-source attribution for website forms. Records, per browser session:
//   landing_page  first page of the visit (with any campaign tags)
//   referrer      the outside site that sent the visitor, origin + path only
//   utm_*         campaign tags from the landing URL
//   last_page     the last page viewed before the contact page
// Stored in sessionStorage only (cleared when the tab closes) and sent with
// the contact form so each inquiry shows which page brought it in. No
// personal data. Every storage call is guarded: private windows and blocked
// storage simply send empty fields.

const KEY = 'itsco_attribution'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

export type Attribution = Partial<Record<'landing_page' | 'referrer' | 'last_page' | (typeof UTM_KEYS)[number], string>>

function read(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || '{}') as Attribution
  } catch {
    return {}
  }
}

function write(a: Attribution) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(a))
  } catch {
    // Storage unavailable: attribution is best-effort.
  }
}

/** Record first-touch details once per session, and the latest page viewed. */
export function trackPageView(pathname: string) {
  const a = read()
  if (!a.landing_page) {
    const url = new URL(window.location.href)
    a.landing_page = url.pathname + url.search
    for (const k of UTM_KEYS) {
      const v = url.searchParams.get(k)
      if (v) a[k] = v.slice(0, 200)
    }
    try {
      const ref = document.referrer ? new URL(document.referrer) : null
      if (ref && ref.hostname !== window.location.hostname) a.referrer = ref.origin + ref.pathname
    } catch {
      // Malformed referrer: leave it out.
    }
  }
  if (pathname !== '/contact-us') a.last_page = pathname
  write(a)
}

/** Current session attribution, for hidden form fields. */
export function getAttribution(): Attribution {
  return read()
}

export const ATTRIBUTION_FIELDS = ['landing_page', 'last_page', 'referrer', ...UTM_KEYS] as const
