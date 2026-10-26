import Link from 'next/link'
import type { ReactNode } from 'react'

// Minimal inline-link parser for FAQ answers: [label](href). Internal hrefs
// (starting with "/") use next/link; external open in a new tab. Plain text
// with no link markup passes through unchanged.
export function renderAnswer(text: string): ReactNode[] {
  const out: ReactNode[] = []
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let k = 0
  let m: RegExpExecArray | null
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const label = m[1]
    const href = m[2]
    const linkClass =
      'font-medium text-itsco-red underline underline-offset-2 rounded-sm hover:text-itsco-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-itsco-red active:opacity-80'
    out.push(
      /^https?:\/\//.test(href) ? (
        <a key={k++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
        </a>
      ) : (
        <Link key={k++} href={href} className={linkClass}>
          {label}
        </Link>
      ),
    )
    last = pattern.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

// Plain-text version of an answer for JSON-LD (FAQPage schema): [label](href)
// collapses to its label so raw markdown never reaches structured data.
export function stripMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
}
