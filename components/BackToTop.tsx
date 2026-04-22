"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className={`fixed bottom-6 right-[5.5rem] z-[1000] flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/20 bg-[rgba(8,15,26,0.92)] text-[14px] text-blue-500 shadow-[0_10px_30px_rgba(2,8,23,0.28)] backdrop-blur-md transition-[opacity,transform,background-color] duration-200 hover:bg-[rgba(15,23,42,0.96)] ${
        isVisible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
