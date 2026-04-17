import { ScrollLink } from "@/components/ScrollLink";

const heroSocialLinks = [
  { label: "GitHub", href: "https://github.com/NasifNoor" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nasifh" },
  { label: "Gmail", href: "mailto:nasif.workstation@gmail.com" },
  { label: "Twitter", href: "https://x.com/nasifhasannoor" },
];

function getSocialIcon(label: string) {
  if (label === "GitHub") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (label === "Gmail") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

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
          <a
            href="/M_Nasif_Hasan_Noor_Resume.pdf"
            download
            className="rounded-[8px] bg-blue-500 px-6 py-2.5 text-[13px] font-medium text-white"
          >
            Download CV
          </a>
          <ScrollLink
            href="#projects"
            className="rounded-[8px] border border-white/10 px-6 py-2.5 text-[13px] text-slate-400"
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

        <div className="flex items-center justify-center gap-5 text-center">
          {heroSocialLinks.map((link) => (
            <div key={link.label} className="flex items-center">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-slate-500 transition-colors duration-200 hover:text-slate-300"
              >
                {getSocialIcon(link.label)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
