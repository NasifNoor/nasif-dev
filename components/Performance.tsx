import { performanceHighlights } from "@/data/site-content";

export function Performance() {
  return (
    <section className="px-5 py-16 sm:px-10">
      <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
        Capabilities
      </div>
      <div className="mb-8 text-[24px] font-semibold tracking-[-0.8px] text-slate-100">
        Performance Highlights
      </div>

      <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
        {performanceHighlights.map((item) => (
          <article
            key={item.title}
            className="flex items-start gap-[14px] rounded-[10px] border border-white/[0.06] bg-white/[0.015] p-[18px]"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-blue-500/[0.12] bg-blue-500/[0.08] text-[14px]">
              {item.icon}
            </div>
            <div>
              <div className="mb-[3px] font-[var(--font-dm-mono)] text-[9px] tracking-[0.8px] text-blue-500">
                {item.metric}
              </div>
              <div className="mb-1 text-[13px] font-semibold text-slate-200">
                {item.title}
              </div>
              <p className="text-[11px] leading-[1.65] text-slate-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
