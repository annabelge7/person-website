export default function PlaceholderPhoto({ label, className = '' }) {
  return (
    <div
      className={`relative flex items-end overflow-hidden border border-line bg-[repeating-linear-gradient(135deg,theme(colors.line)_0,theme(colors.line)_1px,transparent_1px,transparent_14px)] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-transparent to-transparent" />
      {label && (
        <span className="relative m-4 text-xs uppercase tracking-wide2 text-stone">
          {label}
        </span>
      )}
    </div>
  )
}
