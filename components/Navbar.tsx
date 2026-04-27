"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site-content";
import { ScrollLink } from "@/components/ScrollLink";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-[73px] border-b border-white/5 transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
        isScrolled
          ? "bg-[rgba(8,15,26,0.92)] backdrop-blur-md shadow-[0_8px_30px_rgba(2,8,23,0.22)]"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="flex h-full items-center justify-between px-5 sm:px-10">
        <ScrollLink
          href="#top"
          className="font-[var(--font-dm-mono)] text-[14px] text-slate-200"
        >
          nasif<span className="text-blue-500">.</span>
        </ScrollLink>

        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              href={item.href}
              className="text-[13px] text-slate-500 transition-colors duration-150 hover:text-slate-400"
            >
              {item.label}
            </ScrollLink>
          ))}
          <ScrollLink
            href="#contact"
            focusTargetId="contact-name"
            className="rounded-[6px] bg-blue-500 px-4 py-1.5 text-[12px] font-medium text-white"
          >
            Hire Me
          </ScrollLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.03] text-slate-200 transition-colors duration-150 hover:bg-white/[0.06] sm:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 bg-[rgba(8,15,26,0.98)] backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out sm:hidden ${
          isMenuOpen
            ? "pointer-events-auto max-h-80 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-5 py-4 transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[13px] text-slate-300 transition-colors duration-150 hover:text-white"
              >
                {item.label}
              </ScrollLink>
            ))}
            <ScrollLink
              href="#contact"
              focusTargetId="contact-name"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 inline-flex w-fit rounded-[6px] bg-blue-500 px-4 py-2 text-[12px] font-medium text-white"
            >
              Hire Me
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
