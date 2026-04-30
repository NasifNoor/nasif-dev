"use client";

import { type MutableRefObject, useEffect, useRef, useState } from "react";

type ChatNudgeProps = {
  isChatOpen: boolean;
};

const INITIAL_DELAY_MS = 4000;
const AUTO_HIDE_MS = 5000;
const REAPPEAR_DELAY_MS = 25000;

export function ChatNudge({ isChatOpen }: ChatNudgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);
  const [hasOpenedChat, setHasOpenedChat] = useState(false);

  const showTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const reappearTimerRef = useRef<number | null>(null);
  const hideStartedAtRef = useRef<number | null>(null);
  const remainingHideTimeRef = useRef(AUTO_HIDE_MS);
  const totalShowsRef = useRef(0);

  const clearTimer = (timerRef: MutableRefObject<number | null>) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const clearAllTimers = () => {
    clearTimer(showTimerRef);
    clearTimer(hideTimerRef);
    clearTimer(reappearTimerRef);
  };

  const scheduleHide = (delay: number) => {
    clearTimer(hideTimerRef);
    hideStartedAtRef.current = Date.now();
    remainingHideTimeRef.current = delay;

    hideTimerRef.current = window.setTimeout(() => {
      setShowTooltip(false);
      hideStartedAtRef.current = null;
      remainingHideTimeRef.current = AUTO_HIDE_MS;
      hideTimerRef.current = null;

      if (totalShowsRef.current === 1 && !hasOpenedChat) {
        reappearTimerRef.current = window.setTimeout(() => {
          reappearTimerRef.current = null;

          if (hasOpenedChat || totalShowsRef.current >= 2) {
            return;
          }

          totalShowsRef.current += 1;
          setShowTooltip(true);
          scheduleHide(AUTO_HIDE_MS);
        }, REAPPEAR_DELAY_MS);
      }
    }, delay);
  };

  const scheduleInitialShow = () => {
    clearTimer(showTimerRef);

    showTimerRef.current = window.setTimeout(() => {
      showTimerRef.current = null;

      if (hasOpenedChat || totalShowsRef.current >= 2) {
        return;
      }

      totalShowsRef.current += 1;
      setHasShownOnce(true);
      setShowTooltip(true);
      scheduleHide(AUTO_HIDE_MS);
    }, INITIAL_DELAY_MS);
  };

  useEffect(() => {
    if (isChatOpen) {
      setHasOpenedChat(true);
      setShowTooltip(false);
      clearAllTimers();
      return;
    }

    if (!hasOpenedChat && totalShowsRef.current === 0) {
      scheduleInitialShow();
    }

    return clearAllTimers;
  }, [hasOpenedChat, isChatOpen]);

  const handleMouseEnter = () => {
    if (
      !showTooltip ||
      hideTimerRef.current === null ||
      hideStartedAtRef.current === null
    ) {
      return;
    }

    const elapsed = Date.now() - hideStartedAtRef.current;
    remainingHideTimeRef.current = Math.max(
      0,
      remainingHideTimeRef.current - elapsed,
    );
    hideStartedAtRef.current = null;
    clearTimer(hideTimerRef);
  };

  const handleMouseLeave = () => {
    if (!showTooltip || hasOpenedChat || remainingHideTimeRef.current <= 0) {
      return;
    }

    scheduleHide(remainingHideTimeRef.current);
  };

  const isTooltipVisible = showTooltip && !hasOpenedChat;

  return (
    <div
      className={`pointer-events-none absolute bottom-full right-0 mb-3 w-full max-w-[220px] transition-all duration-300 ease-out ${
        isTooltipVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0"
      }`}
      aria-hidden={!isTooltipVisible}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-2xl border border-slate-200/70 bg-white/95 px-4 py-3 text-sm leading-5 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.14)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/95 dark:text-slate-200 ${
          isTooltipVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        Hi {"\u{1F44B}"} Curious about my work?
        <span className="absolute bottom-[-6px] right-5 h-3 w-3 rotate-45 rounded-[3px] border-b border-r border-slate-200/70 bg-white/95 dark:border-white/10 dark:bg-slate-900/95" />
      </div>
    </div>
  );
}
