"use client";

type ScrollLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function ScrollLink({
  href,
  className,
  children,
  onClick,
}: ScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      onClick?.();
      return;
    }

    const element = document.querySelector(href);
    if (element instanceof HTMLElement) {
      event.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
      onClick?.();
      return;
    }

    if (window.location.pathname !== "/") {
      event.preventDefault();
      window.location.href = `/${href}`;
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
