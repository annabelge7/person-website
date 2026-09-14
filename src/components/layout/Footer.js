import { site } from '@/content/site'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="flex flex-col gap-2 px-6 py-8 text-sm text-stone sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="underline-hover w-fit transition-colors hover:text-sage"
        >
          {site.email}
        </a>
      </div>
    </footer>
  )
}
