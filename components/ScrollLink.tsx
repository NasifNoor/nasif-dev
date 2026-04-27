"use client";

type ScrollLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  focusTargetId?: string;
};

export function ScrollLink({
  href,
  className,
  children,
  onClick,
  focusTargetId,
}: ScrollLinkProps) {
  const focusTarget = () => {
    if (!focusTargetId) {
      return;
    }

    window.setTimeout(() => {
      const target = document.getElementById(focusTargetId);
      if (target instanceof HTMLElement) {
        target.focus({ preventScroll: true });
      }
    }, 450);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      onClick?.();
      return;
    }

    const element = document.querySelector(href);
    if (element instanceof HTMLElement) {
      event.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      const nextUrl = focusTargetId
        ? `/?focus=${encodeURIComponent(focusTargetId)}${href}`
        : href;
      window.history.replaceState(null, "", nextUrl);
      focusTarget();
      onClick?.();
      return;
    }

    if (window.location.pathname !== "/") {
      event.preventDefault();
      window.location.href = focusTargetId
        ? `/?focus=${encodeURIComponent(focusTargetId)}${href}`
        : `/${href}`;
      onClick?.();
      return;
    }

    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
