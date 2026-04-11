import { navItems } from "@/data/portfolio";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 bg-[rgba(8,15,26,0.95)] px-5 py-[18px] backdrop-blur-sm sm:px-10">
      <a
        href="#top"
        className="font-[var(--font-dm-mono)] text-[14px] text-slate-200"
      >
        nasif<span className="text-blue-500">.</span>dev
      </a>

      <div className="hidden items-center gap-6 sm:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[13px] text-slate-500 transition-colors duration-150 hover:text-slate-400"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-[6px] bg-blue-500 px-4 py-1.5 text-[12px] font-medium text-white"
        >
          Hire Me
        </a>
      </div>

      <a
        href="#contact"
        className="rounded-[6px] bg-blue-500 px-4 py-1.5 text-[12px] font-medium text-white sm:hidden"
      >
        Hire Me
      </a>
    </nav>
  );
}
