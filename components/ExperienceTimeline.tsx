import { experience } from "@/data/site-content";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-10">
      <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
        Career
      </div>
      <div className="mb-8 text-[24px] font-semibold tracking-[-0.8px] text-slate-100">
        Experience
      </div>

      <div className="relative pl-7 before:absolute before:bottom-[6px] before:left-[6px] before:top-[6px] before:w-px before:bg-white/[0.06] before:content-['']">
        {experience.map((item) => (
          <div
            key={`${item.period}-${item.role}`}
            className="relative mb-[30px] last:mb-0"
          >
            <div
              className={`absolute left-[-25px] top-1 h-[10px] w-[10px] rounded-full border-[1.5px] ${
                item.current
                  ? "border-blue-500 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                  : "border-[rgba(59,130,246,0.4)] bg-[#080f1a]"
              }`}
            />

            <div className="mb-[3px] font-[var(--font-dm-mono)] text-[10px] text-slate-700">
              {item.period}
            </div>

            <div className="mb-1 text-[14px] font-semibold text-slate-100">
              {item.role}
              {item.current ? (
                <span className="ml-[6px] inline-block rounded-[4px] border border-blue-500/20 bg-blue-500/10 px-[5px] py-px align-middle font-[var(--font-dm-mono)] text-[8px] text-blue-500">
                  Current
                </span>
              ) : null}
            </div>

            <p className="text-[12px] leading-[1.65] text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
