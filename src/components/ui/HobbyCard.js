'use client'

import { useState } from 'react'

export default function HobbyCard({ name, description }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-label={`${name}. Click to flip.`}
      className="group relative block aspect-[4/3] w-full text-left [perspective:1200px]"
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-line bg-paper p-4 text-center transition-all duration-200 [backface-visibility:hidden] group-hover:-translate-y-0.5 group-hover:border-sage-light group-hover:shadow-[0_12px_28px_-16px_rgba(33,29,24,0.25)]">
          <span className="font-display text-lg italic text-ink">{name}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-line bg-paper p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-sm leading-relaxed text-stone">{description}</p>
        </div>
      </div>
    </button>
  )
}
