'use client'

import Image from 'next/image'
import { useState } from 'react'

interface LeaderCardProps {
  name: string
  title: string
  image: string
  bio: readonly string[]
}

// Inline-expandable card for the Meet the Team senior-leadership section.
// Collapsed: shows the first paragraph only. Click "Read more" to expand the
// rest via a smooth grid-rows transition (no layout snap, no JS height math).
export default function LeaderCard({ name, title, image, bio }: LeaderCardProps) {
  const [expanded, setExpanded] = useState(false)
  const firstParagraph = bio[0]
  const restParagraphs = bio.slice(1)
  const hasMore = restParagraphs.length > 0

  return (
    <div className="bg-itsco-card border border-[#EBEBEB] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
      <div className="relative aspect-[4/5] bg-[#111111]/5">
        <Image
          src={image}
          alt={`${name}, ${title} at ITSco`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#111111] tracking-tight">{name}</h3>
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#CA3C27] mt-1 mb-4">
          {title}
        </p>
        {firstParagraph && (
          <p
            className={`text-sm text-[#404040] leading-relaxed ${expanded ? 'line-clamp-none' : 'line-clamp-3'}`}
          >
            {firstParagraph}
          </p>
        )}

        {hasMore && (
          <>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
              aria-hidden={!expanded}
            >
              <div className="min-h-0">
                <div className="space-y-3 pt-3">
                  {restParagraphs.map((p, i) => (
                    <p key={i} className="text-sm text-[#404040] leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#CA3C27] hover:text-[#B4311E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27] rounded-sm active:opacity-70 transition-[color] duration-200"
            >
              {expanded ? 'Read less' : 'Read more'}
              <span aria-hidden className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
