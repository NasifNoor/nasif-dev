"use client";

type ScrollLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function ScrollLink({ href, className, children }: ScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const element = document.querySelector(href);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
