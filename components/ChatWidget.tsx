"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { BackToTop } from "@/components/BackToTop";

// Neither of these can be seen on first paint: the panel starts closed and the
// nudge waits several seconds before it shows. Keep them out of the initial
// bundle so a visit that never opens the chat never downloads them.
const ChatPanel = dynamic(
  () => import("@/components/ChatPanel").then((mod) => mod.ChatPanel),
  { ssr: false },
);

const ChatNudge = dynamic(
  () => import("@/components/ChatNudge").then((mod) => mod.ChatNudge),
  { ssr: false },
);

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  const handleToggle = () => {
    setIsOpen((open) => {
      if (!open) {
        setHasOpenedOnce(true);
      }

      return !open;
    });
  };

  return (
    // The width is pinned here rather than inherited from the panel, which is
    // no longer mounted on first paint — the nudge sizes itself against it.
    <div className="pointer-events-none fixed bottom-5 right-5 z-[1100] flex w-[calc(100vw-1.5rem)] max-w-[20rem] flex-col items-end gap-3">
      {/* Stays mounted after the first open so the conversation survives a close. */}
      {hasOpenedOnce ? (
        <ChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
      ) : null}

      <div className="relative flex w-full justify-end">
        <ChatNudge isChatOpen={isOpen} />

        <button
          type="button"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          aria-expanded={isOpen}
          onClick={handleToggle}
          className="group pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-[0_18px_45px_rgba(37,99,235,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_22px_55px_rgba(34,211,238,0.32)]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={`h-6 w-6 transition-transform duration-200 ${
              isOpen ? "scale-90" : "scale-100"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      <BackToTop />
    </div>
  );
}
