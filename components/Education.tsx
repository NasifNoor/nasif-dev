import { education } from "@/data/site-content";

export function Education() {
  return (
    <section id="education" className="px-5 py-16 sm:px-10">
      <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
        Academic
      </div>
      <div className="mb-8 text-[24px] font-semibold tracking-[-0.8px] text-slate-100">
        Education
      </div>

      <div className="relative pl-7 before:absolute before:bottom-[6px] before:left-[6px] before:top-[6px] before:w-px before:bg-white/[0.06] before:content-['']">
        {education.map((item) => (
          <article
            key={`${item.duration}-${item.degree}`}
            className="relative mb-[30px] last:mb-0"
          >
            <div className="absolute left-[-25px] top-1 h-[10px] w-[10px] rounded-full border-[1.5px] border-[rgba(59,130,246,0.4)] bg-[#080f1a]" />

            <div className="mb-[3px] font-[var(--font-dm-mono)] text-[10px] text-slate-700">
              Passing Year {item.duration}
            </div>

            <div className="mb-1 text-[14px] font-semibold text-slate-100">
              {item.degree}
            </div>

            <p className="text-[12px] leading-[1.65] text-slate-600">
              {item.institution}
            </p>

            {item.result ? (
              <p className="mt-[6px] font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[0.8px] text-blue-500">
                {item.result}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
