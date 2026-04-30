"use client";

import { useEffect, useRef, useState } from "react";
import { ChatNudge } from "@/components/ChatNudge";

type ChatMessage = {
  role: "user" | "ai";
  text: string;
};

const initialGreeting =
  "Hi \u{1F44B} Ask me anything about my experience, projects, or skills.";

const fallbackReply =
  "I'm having trouble replying right now. Please try again in a moment.";

export function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen || hasOpenedOnce) {
      return;
    }

    setMessages([{ role: "ai", text: initialGreeting }]);
    setHasOpenedOnce(true);
  }, [hasOpenedOnce, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading, isOpen]);

  const handleToggle = () => {
    setIsOpen((open) => !open);
  };

  const handleSend = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      role: "user",
      text: trimmedInput,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "chat",
          message: trimmedInput,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch chat response");
      }

      const data: { reply?: string } = await response.json();

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "ai",
          text: data.reply?.trim() || fallbackReply,
        },
      ]);
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "ai",
          text: fallbackReply,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[1100] flex flex-col items-end gap-3">
      <div
        className={`w-[calc(100vw-1.5rem)] max-w-[20rem] origin-bottom-right overflow-hidden rounded-[14px] border border-white/10 bg-slate-950/95 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl transition-all duration-300 ease-out ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 px-4 py-2 text-white">
          <div>
            <p className="text-sm font-semibold">Chat with nasif.</p>
            <p className="text-[11px] text-white/80">Here to help 🔍</p>
          </div>
          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-150 hover:bg-white/25"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="flex h-[26.25rem] flex-col">
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-950/80 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}-${message.text.slice(0, 16)}`}
                className={`flex transition-opacity duration-200 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-6 shadow-sm ${
                    message.role === "user"
                      ? "rounded-br-md bg-blue-500 text-white"
                      : "rounded-bl-md bg-slate-800 text-slate-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-slate-800 px-3.5 py-2.5 text-[13px] text-slate-300">
                  Typing...
                </div>
              </div>
            ) : null}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 bg-slate-950">
            <div className="flex items-center gap-2 border-white/10 bg-white/[0.03] px-2 py-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    void handleSend();
                  }
                }}
                placeholder="Ask about my work..."
                disabled={isLoading}
                className="flex-1 bg-transparent px-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={() => void handleSend()}
                disabled={isLoading || !input.trim()}
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-blue-500 px-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22 11 13 2 9 22 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full justify-end">
        <ChatNudge isChatOpen={isOpen} />

        <button
          type="button"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          aria-expanded={isOpen}
          onClick={handleToggle}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-[0_18px_45px_rgba(37,99,235,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_22px_55px_rgba(34,211,238,0.32)]"
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
    </div>
  );
}
