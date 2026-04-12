import { contactLinks } from "@/data/site-content";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-10">
      <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
        Contact
      </div>
      <div className="mb-8 text-[24px] font-semibold tracking-[-0.8px] text-slate-100">
        Get in touch
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-[16px] font-semibold text-slate-100">
            Let&apos;s work together
          </div>
          <p className="mb-6 text-[13px] leading-[1.7] text-slate-600">
            Open to full-time roles, freelance projects, and interesting
            collaborations.
          </p>

          <div className="flex flex-col gap-2">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[8px] border border-white/[0.07] bg-white/[0.02] px-[14px] py-2 text-[12px] text-slate-500"
              >
                <span>{index === 0 ? "\u2709" : "in"}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form className="flex flex-col gap-[10px]">
          <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-[14px] py-[10px] text-[12px] text-slate-600 placeholder:text-slate-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-[14px] py-[10px] text-[12px] text-slate-600 placeholder:text-slate-600"
            />
          </div>
          <textarea
            placeholder="Message"
            className="h-[90px] w-full rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-[14px] py-[10px] text-[12px] text-slate-600 placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="rounded-[8px] bg-blue-500 px-4 py-[11px] text-center text-[13px] font-medium text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
