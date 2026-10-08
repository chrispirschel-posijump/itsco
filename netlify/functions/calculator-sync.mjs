// Calculator -> GlassHive sync (Netlify Function, v2 signature).
//
// The IT Investment Calculator already posts every submission to Netlify
// Forms (/__forms.html), which fires the sales notification email with the
// paste-ready block for Hats. THAT path is the source of truth and is not
// touched by this function. This is a second, additive, fire-and-forget
// call from the browser: it drops the prospect onto a GlassHive list so
// ITSco can run follow-up automation from inside GlassHive.
//
// Ships DARK. If either env var is missing it no-ops, so the code can merge
// and launch before the list exists or the key is set. It turns on the
// moment both vars are present on the Netlify context:
//   GLASSHIVE_API_KEY  - the key generated in GlassHive account settings.
//                        Lives ONLY here, never in the repo or the client.
//   GLASSHIVE_LIST_ID  - integer id of the "ROI Calculator Submissions"
//                        list, created in GlassHive.
//
// Endpoint: POST https://rest.api.glasshive.com/partner/v1/lists/{id}/upload
// Upserts Companies by Name/Phone/Website and Contacts by Email.
//
// NOTE (temporary): this build returns GlassHive's status/body in the HTTP
// response for debugging on the dark preview. Strip the diagnostics before
// production -- see the json() calls below.

const GLASSHIVE_URL = 'https://rest.api.glasshive.com/partner/v1/lists'
const TIMEOUT_MS = 8000

/** JSON response helper (debug build echoes diagnostics to the browser). */
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

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
  if (req.method !== 'POST') return new Response(null, { status: 405 })

  const apiKey = process.env.GLASSHIVE_API_KEY
  const listId = process.env.GLASSHIVE_LIST_ID
  if (!apiKey || !listId) {
    // DEBUG: report which var is missing instead of a silent no-op.
    return json({ ok: false, stage: 'config', hasKey: Boolean(apiKey), hasListId: Boolean(listId) })
  }

  let data
  try {
    data = await req.json()
  } catch {
    return json({ ok: false, stage: 'parse' }, 400)
  }

  const email = String(data.email || '').trim()
  const company = String(data.company || '').trim()
  if (!email && !company) return json({ ok: false, stage: 'empty' })

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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: apiKey,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      },
    )
    const body = await res.text().catch(() => '')
    if (!res.ok) {
      console.error('GlassHive upload failed', res.status, body.slice(0, 500))
      // DEBUG: echo GlassHive's status + body so it reads in the Network tab.
      return json({ ok: false, stage: 'glasshive', ghStatus: res.status, ghBody: body.slice(0, 800) })
    }
    return json({ ok: true, ghStatus: res.status, ghBody: body.slice(0, 300) })
  } catch (err) {
    console.error('GlassHive upload error', err?.name || err)
    return json({ ok: false, stage: 'fetch', error: String(err?.name || err) })
  } finally {
    clearTimeout(timer)
  }
}
