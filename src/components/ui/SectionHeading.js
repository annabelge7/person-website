export default function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-wide2 text-sage">
          {eyebrow}
        </p>
      )}
      {title && (
        <h1 className="font-display text-4xl italic text-ink sm:text-5xl">
          {title}
        </h1>
      )}
    </div>
  )
}
