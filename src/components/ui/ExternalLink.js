import { ArrowUpRightIcon } from '@/components/ui/icons'

export default function ExternalLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline-hover group inline-flex w-fit items-center gap-1 ${className}`}
    >
      {children}
      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
