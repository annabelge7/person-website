import SectionHeading from '@/components/ui/SectionHeading'
import PhotoCollage from '@/components/ui/PhotoCollage'
import HoverRevealCard from '@/components/ui/HoverRevealCard'
import PlaceholderPhoto from '@/components/ui/PlaceholderPhoto'
import { resumeFile } from '@/content/work'

export const metadata = {
  title: 'About — Annabel Edwards',
}

const hobbies = [
  {
    name: 'Surfing',
    src: '/photos/hobbies/surfing.jpg',
    description: 'Forever a kook trying to make my way in the lineup.',
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Hiking',
    src: '/photos/hobbies/hiking.jpg',
    description: '13,045 feet at the top of Acatenango Volcano',
    aspect: 'aspect-[3/4]',
  },
  {
    name: 'Skiing',
    src: '/photos/hobbies/skiing.JPG',
    description: 'Park City 2006, the only reason I love winter',
    aspect: 'aspect-square',
  },
  {
    name: 'Traveling',
    src: '/photos/hobbies/rafting.jpg',
    description: 'Whitewater rafting in Costa Rica',
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Tennis',
    src: '/photos/hobbies/tennis-3.jpg',
    description: 'Walking off the court at illinois state finals',
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Photography',
    src: '/photos/hobbies/photography.jpg',
    description: 'Film and digital',
    aspect: 'aspect-square',
  },
  {
    name: 'Coding',
    src: '/photos/hobbies/coding.jpeg',
    description: 'Remote work in San Diego ',
    aspect: 'aspect-[3/4]',
  },
  {
    name: 'Scuba',
    src: '/photos/hobbies/scuba_diving.JPG',
    description: '10 years of diving',
    aspect: 'aspect-square',
  },
  {
    name: 'Conservation',
    src: '/photos/hobbies/conservation.JPG',
    description: 'Field-work, volunteer work, learning along the way',
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Sailing',
    src: '/photos/hobbies/sailing.jpg',
    description: 'Skippering a 420 on Lake Michigan',
    aspect: 'aspect-[3/4]',
  },
  {
    name: 'Running',
    src: '/photos/hobbies/running.JPG',
    description: 'My Covid activity that stuck',
    aspect: 'aspect-square',
  },
  {
    name: 'Guitar',
    description: 'Photo coming soon',
    aspect: 'aspect-[4/3]',
    placeholder: true,
  },
]

export default function About() {
  return (
    <section className="mx-auto max-w-site px-6 py-14 sm:px-10 sm:py-20">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="About" title="A bit of background" />

          <div className="mt-8 flex max-w-lg flex-col gap-5 text-lg leading-relaxed text-stone">
            <p>
              I grew up in downtown Chicago, which isn&apos;t the obvious
              starting point for someone who ended up chasing the outdoors. But
              after visiting national parks every summer as a kid with my
              family, learning about marine biology in middle school, and
              earning a scuba certification at 15, I began to envision myself
              working and living in a place far from the city.
            </p>
            <p>
              At Northwestern, I studied computer science and environmental
              policy and culture, hoping to eventually combine the two. After
              graduating, I spent about a year as a software developer at
              Capgemini, a tech consulting firm, and was later promoted to
              project lead. Wanting to get back into environmental work, I left
              for a data analyst role at EcoDataLab, a climate tech startup
              modeling and visualizing household consumer emissions for local
              governments across the US.
            </p>
            <p>
              That work made me want to see more tangible environmental results,
              so I decided to pursue a master&apos;s in environmental science
              and management. I&apos;ll be heading to the Bren School at UCSB in
              fall 2027 to study conservation planning and coastal resource
              management.
            </p>
            <p>
              In the meantime, I left EcoDataLab this past February and have
              been solo traveling since: 5 months moving through Central and
              South America, 1.5 months in Europe, 1 month in Asia, and this
              fall, I&apos;m heading to Wanaka, New Zealand on a working holiday
              visa, to work in and learn about conservation firsthand before
              grad school begins. It&apos;s been a roundabout path from Chicago to
              the Californian coast, but each step has gotten me closer to
              finding work that protects the outdoor spaces that have had such
              an influence on me.
            </p>
          </div>

          <a
            href={resumeFile}
            download
            className="underline-hover mt-6 inline-flex w-fit items-center gap-1 text-sm uppercase tracking-wide2"
          >
            Download resume
          </a>
        </div>

        <PhotoCollage
          backSrc="/photos/home-portrait.jpg"
          backLabel="Hiking in the mountains"
          frontSrc="/photos/home-square.jpg"
          frontLabel="On the water in Newport"
        />
      </div>

      <div className="mt-20 border-t border-line pt-14 sm:mt-28">
        <h2 className="font-display text-2xl italic text-ink sm:text-3xl">
          In my free time:
        </h2>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-stone">
          Hover a photo to see what it&apos;s from.
        </p>
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {hobbies.map((hobby) =>
            hobby.placeholder ? (
              <PlaceholderPhoto
                key={hobby.name}
                label={`${hobby.name} — ${hobby.description}`}
                className={`w-full break-inside-avoid rounded-xl ${hobby.aspect}`}
              />
            ) : (
              <HoverRevealCard
                key={hobby.name}
                src={hobby.src}
                alt={hobby.name}
                primary={hobby.name}
                secondary={hobby.description}
                stacked
                className={`w-full break-inside-avoid ${hobby.aspect}`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  )
}
