import Link from "next/link";
import { projects } from "@/data/site-content";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-16 sm:px-10">
      <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
        Work
      </div>
      <div className="mb-8 text-[24px] font-semibold tracking-[-0.8px] text-slate-100">
        Featured Projects
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            className="block"
          >
            <article className="relative overflow-hidden rounded-[12px] border border-white/[0.06] bg-white/[0.02] p-[22px] transition-colors duration-200 hover:bg-white/[0.03]">
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 to-transparent opacity-40" />
              <div className="mb-2 font-[var(--font-dm-mono)] text-[9px] uppercase tracking-[1.5px] text-blue-500">
                {project.highlight}
              </div>
              <div className="mb-2 text-[13px] font-semibold tracking-[-0.2px] text-slate-100">
                {project.title}
              </div>
              <p className="mb-[14px] text-[11px] leading-[1.65] text-slate-600">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[5px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[4px] border border-white/[0.06] bg-white/[0.02] px-[7px] py-[2px] font-[var(--font-dm-mono)] text-[9px] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
