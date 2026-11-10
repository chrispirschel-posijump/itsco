#!/usr/bin/env node
// Ping IndexNow (Bing, Yandex, and other participating engines) after a
// production deploy so changed pages are re-crawled within days. ChatGPT
// search leans on Bing's index, so this speeds up AI answers too.
//
// Usage, AFTER the deploy is live on www.itsco.com (never for previews):
//   node scripts/indexnow.mjs /it-support-charlotte /raleigh-it-helpdesk
//   node scripts/indexnow.mjs --all      # every URL in the live sitemap
//
// The key file public/26c65e69dcd7715d27f9b4924c895793.txt must stay deployed; IndexNow
// fetches it to confirm we own the site. Max 10,000 URLs per request.

const HOST = 'www.itsco.com'
const KEY = '26c65e69dcd7715d27f9b4924c895793'

async function sitemapUrls() {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Pass paths (e.g. /it-support-charlotte) or --all.')
  process.exit(1)
}
const urlList = args.includes('--all')
  ? await sitemapUrls()
  : args.map((p) => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`)

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
})
// 200 = received, 202 = received and the key is still being verified.
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URL(s)`)
if (!res.ok) process.exit(1)
