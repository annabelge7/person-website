import Image from 'next/image'

export default function HoverRevealCard({
  src,
  alt,
  primary,
  secondary,
  className = '',
  stacked = false,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-line ${className}`}
    >
      {stacked ? (
        <div className="absolute inset-x-0 top-0 z-0 flex h-[110px] flex-col justify-center gap-1.5 overflow-hidden bg-paper px-5">
          <p className="font-display text-lg italic text-ink">{primary}</p>
          <p className="flex items-start gap-2 text-sm leading-relaxed text-stone">
            <span aria-hidden>&bull;</span>
            <span>{secondary}</span>
          </p>
        </div>
      ) : (
        <div className="absolute inset-x-0 top-0 z-0 flex h-16 items-center gap-2 overflow-hidden bg-paper px-5">
          <span className="shrink-0 font-display text-lg italic text-ink">
            {primary}
          </span>
          <span aria-hidden className="shrink-0 text-stone">
            &bull;
          </span>
          <span className="truncate text-sm leading-relaxed text-stone">
            {secondary}
          </span>
        </div>
      )}

      <div
        className={`absolute inset-x-0 top-0 h-full transition-transform duration-300 ease-out ${
          stacked ? 'group-hover:translate-y-[110px]' : 'group-hover:translate-y-16'
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}
