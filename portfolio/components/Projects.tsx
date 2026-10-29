import Reveal from "./Reveal";
import ProjectGallery from "./ProjectGallery";
import { PROJECTS, type Project } from "@/lib/projects";

function ProjectContent({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article id={project.id} className={`h-full scroll-mt-20 rounded-2xl border p-6 md:p-8 ${featured ? "bg-ink text-white border-ink" : "bg-paper text-ink border-hairline"}`}>
      <p className="font-mono text-xs text-accent">{project.subtitle}</p>
      <h3 className={`mt-3 font-display font-semibold tracking-tight ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>{project.title}</h3>
      <ProjectGallery images={project.images} title={project.title} />
      <p className={`mt-5 text-[15px] leading-relaxed ${featured ? "text-white/75" : "text-fog"}`}>{project.desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span key={technology} className={`font-mono text-xs rounded border px-2 py-1 ${featured ? "border-white/25 text-white/80" : "border-hairline text-ink/75"}`}>{technology}</span>
        ))}
      </div>
      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${featured ? "border-white/30 hover:bg-white/10" : "border-accent/30 text-accent hover:bg-accent/5"}`}>
              {link.label}<span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-accent mb-4">Selected work / {PROJECTS.length} projects</p>
          <h2 className="font-display font-semibold tracking-tighter text-[32px] md:text-[40px] leading-[1.1] text-ink max-w-[24ch]">Applications, secure delivery, and interactive experiences.</h2>
          <p className="mt-5 max-w-[62ch] text-fog leading-relaxed">Personal projects, university coursework and a team hackathon prototype, spanning web, mobile, IoT, graphics and augmented reality.</p>
        </Reveal>
        <Reveal delay={100} className="mt-12"><ProjectContent project={PROJECTS[0]} featured /></Reveal>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {PROJECTS.slice(1).map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 80} className="h-full"><ProjectContent project={project} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
