import { techStack } from "@/data/site-content";

export function TechStack() {
  return (
    <section id="stack" className="px-5 py-16 sm:px-10">
      <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
        Technologies
      </div>
      <div className="mb-8 text-[24px] font-semibold tracking-[-0.8px] text-slate-100">
        Tech Stack
      </div>

      <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 lg:grid-cols-6">
        {techStack.map((item) => (
          <div
            key={item.name}
            className="rounded-[10px] border border-white/[0.06] bg-white/[0.02] px-2 py-[18px] text-center"
          >
            <span
              className={`mb-2 block text-[18px] ${item.iconClassName ?? ""}`}
            >
              {item.icon}
            </span>
            <span className="block text-[7px]" style={{ color: item.dotColor }}>
              {"\u25cf"}
            </span>
            <div className="text-[10px] font-medium text-slate-500">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
