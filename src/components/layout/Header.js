'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/content/site'
import { LinkedInIcon, SubstackIcon } from '@/components/ui/icons'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/photography', label: 'Photography' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-line">
      <div className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-ink"
        >
          Annabel Edwards
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wide2 transition-colors ${
                  active ? 'text-sage' : 'text-stone hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden text-stone transition-colors hover:text-sage sm:inline"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.substack}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="hidden text-stone transition-colors hover:text-sage sm:inline"
          >
            <SubstackIcon className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  )
}
