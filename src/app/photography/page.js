import SectionHeading from '@/components/ui/SectionHeading'
import HoverRevealCard from '@/components/ui/HoverRevealCard'
import { filmPhotos, digitalPhotos } from '@/content/photography'

export const metadata = {
  title: 'Photography — Annabel Edwards',
}

const groups = [
  { label: 'Film', photos: filmPhotos },
  { label: 'Digital', photos: digitalPhotos },
]

export default function Photography() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20">
      <SectionHeading eyebrow="Photography" title="Film & digital" />
      <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
        Hover a photo to see where and when it was taken.
      </p>

      <div className="mt-16 flex flex-col gap-16">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="flex items-baseline justify-between border-b border-line pb-3">
              <h2 className="font-display text-2xl italic text-ink">
                {group.label}
              </h2>
            </div>
            {group.photos.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {group.photos.map((photo) => (
                  <HoverRevealCard
                    key={photo.id}
                    src={photo.src}
                    alt={photo.place}
                    primary={photo.place}
                    secondary={photo.date}
                    className="aspect-[3/2]"
                  />
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm text-stone">Photos coming soon.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
