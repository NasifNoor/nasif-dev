import { ScrollLink } from "@/components/ScrollLink";
import { socialLinks } from "@/data/site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-[90px] text-center sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(59,130,246,0.12),transparent),repeating-linear-gradient(rgba(59,130,246,0.025)_0px,rgba(59,130,246,0.025)_1px,transparent_1px,transparent_40px),repeating-linear-gradient(90deg,rgba(59,130,246,0.025)_0px,rgba(59,130,246,0.025)_1px,transparent_1px,transparent_40px)]" />

      <div className="relative z-[1]">
        <div className="mb-7 inline-flex items-center gap-[6px] rounded-[20px] border border-white/10 bg-white/[0.02] px-3 py-1 font-[var(--font-dm-mono)] text-[11px] text-slate-500">
          <span className="h-[6px] w-[6px] rounded-full bg-emerald-400" />
          Available for new opportunities
        </div>

        <h1 className="mb-2.5 text-[38px] font-semibold leading-[1.05] tracking-[-2px] text-slate-100 sm:text-[52px]">
          M. Nasif Hasan <span className="text-blue-500">Noor</span>
        </h1>

        <p className="mb-4 font-[var(--font-dm-mono)] text-[13px] uppercase tracking-[2.5px] text-blue-500">
          Frontend Developer
        </p>

        <p className="mx-auto mb-8 max-w-[380px] text-[15px] leading-[1.75] text-slate-500">
          Building scalable, high-performance web applications with clean
          architecture.
        </p>

        <div className="mb-9 flex flex-col justify-center gap-2.5 sm:flex-row">
          <ScrollLink
            href="#projects"
            className="rounded-[8px] bg-blue-500 px-6 py-2.5 text-[13px] font-medium text-white"
          >
            View Projects
          </ScrollLink>
          <ScrollLink
            href="#contact"
            className="rounded-[8px] border border-white/10 px-6 py-2.5 text-[13px] text-slate-400"
          >
            Contact Me
          </ScrollLink>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
          {socialLinks.map((link, index) => (
            <div key={link.label} className="flex items-center gap-5">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-slate-600"
              >
                {link.label}
              </a>
              {index < socialLinks.length - 1 ? (
                <span className="hidden h-3 w-px bg-white/10 sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
