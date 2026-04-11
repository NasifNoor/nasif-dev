import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/site-content";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="portfolio-shell">
          <section className="px-5 pb-16 pt-12 sm:px-10">
            <Link
              href="/"
              className="mb-8 inline-flex font-[var(--font-dm-mono)] text-[11px] uppercase tracking-[2px] text-slate-500 transition-colors duration-150 hover:text-slate-400"
            >
              Back to portfolio
            </Link>

            <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
              {project.highlight}
            </div>
            <h1 className="mb-4 text-[32px] font-semibold tracking-[-1px] text-slate-100 sm:text-[40px]">
              {project.title}
            </h1>
            <p className="mb-8 max-w-3xl text-[15px] leading-[1.85] text-slate-500">
              {project.overview}
            </p>

            <div className="mb-8 flex flex-wrap gap-[5px]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[4px] border border-white/[0.06] bg-white/[0.02] px-[7px] py-[2px] font-[var(--font-dm-mono)] text-[9px] text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.details.map((detail) => (
                <article
                  key={detail}
                  className="rounded-[12px] border border-white/[0.06] bg-white/[0.02] p-[22px]"
                >
                  <p className="text-[12px] leading-[1.75] text-slate-500">
                    {detail}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
