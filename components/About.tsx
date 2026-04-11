export function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-10">
      <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
        About
      </div>
      <div className="mb-8 text-[24px] font-semibold tracking-[-0.8px] text-slate-100">
        A bit about me
      </div>
      <p className="max-w-[520px] text-[15px] leading-[1.85] text-slate-500">
        I&apos;m a frontend developer focused on building{" "}
        <strong className="font-medium text-slate-400">
          scalable, high-performance web applications
        </strong>{" "}
        that are clean under the hood and polished on the surface. I care
        deeply about developer experience, reusable architecture, and shipping
        things that actually work - from auth systems to design systems.
      </p>
    </section>
  );
}
