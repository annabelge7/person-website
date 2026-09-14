import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { resumeFile } from '@/content/work'
import { projects } from '@/content/projects'

export const metadata = {
  title: 'Work — Annabel Edwards',
}

export default function Work() {
  return (
    <section className="mx-auto max-w-site px-6 py-14 sm:px-10 sm:py-20">
      <SectionHeading eyebrow="Work" title="Projects" />
      {/* <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone">
        A look at what I&apos;ve built.
      </p> */}

      <div className="mt-6 flex max-w-xl flex-wrap items-center gap-x-8 gap-y-3 text-sm uppercase tracking-wide2">
        <a
          href={resumeFile}
          download
          className="underline-hover inline-flex w-fit items-center gap-1"
        >
          Download resume
        </a>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
