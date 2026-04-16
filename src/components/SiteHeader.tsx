const links = [
  { href: "#about", label: "About" },
  { href: "#selected-work", label: "Work" },
  { href: "#tools-stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a
          href="#top"
          className="text-[13px] font-medium tracking-[0.12em] text-foreground transition-colors hover:text-muted"
        >
          AM
        </a>
        <nav className="flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-[0.08em] text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
