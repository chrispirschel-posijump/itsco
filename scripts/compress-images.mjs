#!/usr/bin/env node
/**
 * Walks public/images/ and recompresses every JPG/PNG > 500 KB in place,
 * resampling to max 2000px on the larger dimension at JPEG quality 80
 * (PNGs stay PNG, just downsampled). Originals are recoverable via git.
 *
 * Usage:
 *   node scripts/compress-images.mjs            # process everything > 500 KB
 *   node scripts/compress-images.mjs --dry-run  # report what would change
 *   node scripts/compress-images.mjs --min 200  # change the size threshold (KB)
 */

import { readdir, stat } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { join, extname } from 'node:path'

const args = parseArgs(process.argv.slice(2))
const DRY = !!args['dry-run']
const MIN_KB = Number(args.min ?? 500)
const MAX_DIM = 2000
const QUALITY = 80
const ROOT = 'public/images'
const EXTS = new Set(['.jpg', '.jpeg', '.png'])

console.log(`${DRY ? '[DRY RUN] ' : ''}Scanning ${ROOT}/ for files > ${MIN_KB} KB...`)
const candidates = []
for await (const path of walk(ROOT)) {
  const ext = extname(path).toLowerCase()
  if (!EXTS.has(ext)) continue
  const sz = (await stat(path)).size
  if (sz > MIN_KB * 1024) candidates.push({ path, before: sz })
}
candidates.sort((a, b) => b.before - a.before)
console.log(`Found ${candidates.length} candidates`)

let totalBefore = 0
let totalAfter = 0
let processed = 0
let skipped = 0
for (const c of candidates) {
  totalBefore += c.before
  if (DRY) {
    console.log(`  ${mb(c.before)}  ${c.path}`)
    continue
  }
  const result = spawnSync('sips', ['-Z', String(MAX_DIM), '-s', 'formatOptions', String(QUALITY), c.path, '--out', c.path], { encoding: 'utf8' })
  if (result.status !== 0) {
    console.log(`  ✗ FAILED  ${c.path}  ${result.stderr.trim()}`)
    skipped++
    totalAfter += c.before
    continue
  }
  const after = (await stat(c.path)).size
  totalAfter += after
  if (after >= c.before) {
    console.log(`  =  ${mb(c.before)} → ${mb(after)}  ${c.path}  (no improvement)`)
    skipped++
  } else {
    const saved = c.before - after
    console.log(`  ✓  ${mb(c.before)} → ${mb(after)}  (-${pct(saved, c.before)}%)  ${c.path}`)
    processed++
  }
}

console.log('')
console.log(`Files processed: ${processed}`)
console.log(`Files skipped:   ${skipped}`)
console.log(`Before total:    ${mb(totalBefore)}`)
console.log(`After total:     ${mb(totalAfter)}`)
console.log(`Saved:           ${mb(totalBefore - totalAfter)}  (${pct(totalBefore - totalAfter, totalBefore)}%)`)

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else yield p
  }
}

function parseArgs(arr) {
  const out = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('--')) {
      const key = arr[i].slice(2)
      const next = arr[i + 1]
      if (next === undefined || next.startsWith('--')) out[key] = true
      else {
        out[key] = next
        i++
      }
    }
  }
  return out
}

function mb(b) { return `${(b / 1024 / 1024).toFixed(2)} MB` }
function pct(part, whole) { return `${Math.round((part / whole) * 100)}` }
