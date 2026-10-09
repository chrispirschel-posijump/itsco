// Calculator -> GlassHive sync (Netlify Function, v2 signature).
//
// The IT Investment Calculator already posts every submission to Netlify
// Forms (/__forms.html), which fires the sales notification email with the
// paste-ready block for Hats. THAT path is the source of truth and is not
// touched by this function. This is a second, additive, fire-and-forget
// call from the browser: it drops the prospect onto a GlassHive list so
// ITSco can run follow-up automation from inside GlassHive.
//
// Ships DARK. If either env var is missing it no-ops with 204, so the code
// can merge and launch before the list exists or the key is set. It turns
// on the moment both vars are present on the Netlify context:
//   GLASSHIVE_API_KEY  - the key generated in GlassHive account settings.
//                        Lives ONLY here, never in the repo or the client.
//   GLASSHIVE_LIST_ID  - integer id of the "ROI Calculator Submissions"
//                        list, created in GlassHive.
//
// Endpoint: PUT https://rest.api.glasshive.com/partner/v1/lists/{id}/upload
// (the upload operation is a PUT; a POST returns a 404 from the gateway).
// Upserts Companies by Name/Phone/Website and Contacts by Email, so a
// prospect who runs the calculator twice updates rather than duplicates.
// There is no custom-field mechanism on this endpoint, so the estimate,
// industry, IT model and add-ons do NOT come here -- they stay in the
// Netlify notification email. GlassHive gets identity + list membership.

const GLASSHIVE_URL = 'https://rest.api.glasshive.com/partner/v1/lists'
const TIMEOUT_MS = 8000

/** Split a single "name" field into first / last on the first space. */
function splitName(full) {
  const parts = String(full || '').trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return { first: undefined, last: undefined }
  if (parts.length === 1) return { first: parts[0], last: undefined }
  return { first: parts[0], last: parts.slice(1).join(' ') }
}

/** Coerce a numeric string to an int, or undefined if it isn't one. */
function toInt(v) {
  const n = parseInt(String(v ?? ''), 10)
  return Number.isFinite(n) ? n : undefined
}

/** Drop undefined keys so omitted fields aren't sent (upsert ignores them). */
function compact(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined))
}

export default async (req) => {
  // No-op quietly on anything but POST so a stray GET never errors loudly.
  if (req.method !== 'POST') return new Response(null, { status: 405 })

  const apiKey = process.env.GLASSHIVE_API_KEY
  const listId = process.env.GLASSHIVE_LIST_ID
  // Dark-ship switch: without both, do nothing and succeed.
  if (!apiKey || !listId) return new Response(null, { status: 204 })

  let data
  try {
    data = await req.json()
  } catch {
    return new Response(null, { status: 400 })
  }

  const email = String(data.email || '').trim()
  const company = String(data.company || '').trim()
  // Email is the contact upsert key and company is the company upsert key;
  // with neither there is nothing meaningful to send.
  if (!email && !company) return new Response(null, { status: 204 })

  const { first, last } = splitName(data.name)

  const payload = {
    Companies: [
      compact({
        Name: company || undefined,
        EmployeeCount: toInt(data.users),
        DeviceCount: toInt(data.devices),
        Contacts: [
          compact({
            Email: email || undefined,
            FirstName: first,
            LastName: last,
            Phone: String(data.phone || '').trim() || undefined,
          }),
        ],
      }),
    ],
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(
      `${GLASSHIVE_URL}/${encodeURIComponent(listId)}/upload`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // GlassHive's docs pass the key bare in the Authorization header.
          Authorization: apiKey,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      },
    )
    if (!res.ok) {
      // Log for us; never surface to the prospect (they already have their
      // estimate and sales already got the Netlify email).
      const detail = await res.text().catch(() => '')
      console.error('GlassHive upload failed', res.status, detail.slice(0, 500))
      return new Response(null, { status: 502 })
    }
    return new Response(null, { status: 204 })
  } catch (err) {
    console.error('GlassHive upload error', err?.name || err)
    return new Response(null, { status: 502 })
  } finally {
    clearTimeout(timer)
  }
}
