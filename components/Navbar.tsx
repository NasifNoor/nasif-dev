"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site-content";
import { ScrollLink } from "@/components/ScrollLink";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
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
            className="rounded-[6px] bg-blue-500 px-4 py-1.5 text-[12px] font-medium text-white"
          >
            Hire Me
          </ScrollLink>
        </div>

        <ScrollLink
          href="#contact"
          className="rounded-[6px] bg-blue-500 px-4 py-1.5 text-[12px] font-medium text-white sm:hidden"
        >
          Hire Me
        </ScrollLink>
      </div>
    </nav>
  );
}
