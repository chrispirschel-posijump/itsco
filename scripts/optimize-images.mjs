#!/usr/bin/env node
/**
 * Downscale + recompress oversized source images in public/images.
 *
 * Caps the long edge at MAX_EDGE px and re-encodes JPEGs at QUALITY.
 * Idempotent — images already within bounds are skipped, so it is safe to
 * re-run after dropping in new images. Uses macOS `sips` (no dependency).
 *
 * Only processes hero/ and supporting/ JPEGs — client logos, badges, and
 * team headshots are intentionally left untouched.
 *
 * Usage (from itsco-website/):  node scripts/optimize-images.mjs
 */

import { readdir, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const run = promisify(execFile)

const MAX_EDGE = 2560
const QUALITY = 80
const ROOTS = ['public/images/hero', 'public/images/supporting']
const EXT = new Set(['.jpg', '.jpeg'])

async function* walk(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else if (EXT.has(extname(entry.name).toLowerCase())) yield p
  }
}

async function dimensions(file) {
  const { stdout } = await run('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file])
  return {
    w: Number(stdout.match(/pixelWidth:\s*(\d+)/)?.[1] ?? 0),
    h: Number(stdout.match(/pixelHeight:\s*(\d+)/)?.[1] ?? 0),
  }
}

const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`

let processed = 0
let skipped = 0
let before = 0
let after = 0

for (const root of ROOTS) {
  for await (const file of walk(root)) {
    const sizeBefore = (await stat(file)).size
    const { w, h } = await dimensions(file)
    if (Math.max(w, h) <= MAX_EDGE) {
      skipped++
      continue
    }
    await run('sips', ['-Z', String(MAX_EDGE), '-s', 'formatOptions', String(QUALITY), file])
    const sizeAfter = (await stat(file)).size
    before += sizeBefore
    after += sizeAfter
    processed++
    console.log(
      `  ${file}  ${mb(sizeBefore)} -> ${mb(sizeAfter)}  (${w}x${h}, long edge capped at ${MAX_EDGE})`,
    )
  }
}

console.log(`\nOptimized ${processed} image(s); skipped ${skipped} already within bounds.`)
if (processed) console.log(`Total: ${mb(before)} -> ${mb(after)}  (saved ${mb(before - after)})`)
