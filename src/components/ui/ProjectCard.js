import ExternalLink from '@/components/ui/ExternalLink'

export default function ProjectCard({
  title,
  context,
  dates,
  description,
  stack,
  href,
}) {
  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-line border-l-[3px] border-l-sage bg-paper p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-light hover:shadow-[0_12px_28px_-16px_rgba(33,29,24,0.25)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-sm uppercase tracking-wide2 text-sage">
          {context}
        </p>
        <span className="text-sm text-stone">{dates}</span>
      </div>
      <h3 className="font-display text-xl italic text-ink">{title}</h3>
      <p className="text-[15px] leading-relaxed text-stone">{description}</p>
      {stack && stack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-sage-light/50 bg-sage-light/15 px-2.5 py-1 text-xs text-teal-dark"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {href ? (
        <ExternalLink href={href} className="mt-auto pt-1">
          View project
        </ExternalLink>
      ) : (
        <p className="mt-auto pt-1 text-sm text-stone">Internal project</p>
      )}
    </div>
  )
}
