'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface LeaderCardProps {
  name: string
  title: string
  image: string
  bio: readonly string[]
}

// Uniform leadership card. The card body stays compact and equal-height across
// the row (title height is reserved so a two-line title doesn't make one card
// taller); the full bio opens in a modal. The modal renders through a portal so
// the card's hover transform never becomes its positioning context.
export default function LeaderCard({ name, title, image, bio }: LeaderCardProps) {
  const [open, setOpen] = useState(false)
  const [shown, setShown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])

  // While open: lock body scroll, close on Escape, focus the close button, and
  // trigger the entrance transition on the next frame.
  useEffect(() => {
    if (!open) {
      setShown(false)
      return
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    const raf = requestAnimationFrame(() => setShown(true))
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      cancelAnimationFrame(raf)
    }
  }, [open])

  const titleId = `leader-${name.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#EBEBEB] bg-itsco-card shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      <div className="relative aspect-[4/5] bg-itsco-dark/5">
        <Image
          src={image}
          alt={`${name}, ${title} at ITSco`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-itsco-dark">{name}</h3>
        <p className="mt-1 min-h-[2.4em] text-xs font-semibold uppercase leading-[1.2] tracking-[0.1em] text-itsco-red">
          {title}
        </p>
        {bio[0] && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-itsco-body">{bio[0]}</p>
        )}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-auto inline-flex items-center gap-1 self-start rounded-sm pt-4 text-sm font-semibold text-itsco-red transition-[color] duration-200 hover:text-itsco-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red active:opacity-70"
        >
          Read more
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div
              onClick={() => setOpen(false)}
              className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none ${
                shown ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div
              className={`relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-itsco-card p-6 shadow-[0_24px_64px_rgba(0,0,0,0.3)] transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-none sm:p-8 ${
                shown ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0'
              }`}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-itsco-body/60 transition-[color,background-color,transform] duration-200 hover:bg-itsco-dark/5 hover:text-itsco-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red active:scale-95"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-4 pr-10">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-itsco-dark/5">
                  <Image src={image} alt="" fill className="object-cover object-center" sizes="64px" />
                </div>
                <div>
                  <h3 id={titleId} className="text-xl font-bold tracking-tight text-itsco-dark">
                    {name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-itsco-red">
                    {title}
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {bio.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-itsco-body">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
