import Image from 'next/image'
import Link from 'next/link'

const textShadow = { textShadow: '0 2px 12px rgba(0,0,0,0.4)' }

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/photos/home_background.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Mobile: gradient rises from the bottom edge so wrapped text stays over the
          cleaner sand/water part of the photo, not the busier cliff face */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/75 via-black/35 to-transparent sm:hidden" />

      {/* Desktop: soft band centered where the text now sits (vertical middle, left side) */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 55% at 15% 46%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 45%, transparent 75%)',
        }}
      />

      <div className="relative z-10 flex min-h-screen items-end pb-14 pl-6 pr-6 pt-10 sm:items-center sm:pb-[8vh] sm:pl-[clamp(24px,8vw,120px)] sm:pr-10 sm:pt-0 lg:pr-16">
        <div className="flex max-w-[650px] flex-col gap-6 sm:gap-8">
          <h1
            style={textShadow}
            className="font-display text-[2.75rem] font-bold text-white sm:text-[3.5rem] lg:text-[4rem]"
          >
            Annabel Edwards
          </h1>
          <p
            style={textShadow}
            className="text-base font-light leading-relaxed text-white/85 sm:text-lg"
          >
            Environmentalist and engineer dedicated to protecting natural and
            marine spaces through research, policy, and education.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            {[
              { href: '/about', label: 'Learn about me' },
              { href: '/work', label: 'View my work' },
              { href: '/photography', label: 'Check out some photos' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={textShadow}
                className="group inline-flex w-fit items-center gap-2 text-sm uppercase tracking-wide2 text-white transition-opacity hover:opacity-80"
              >
                {label}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
