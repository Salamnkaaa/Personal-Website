import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  index: number;
  href?: string;
};

export function ProjectCard({ title, description, index, href }: ProjectCardProps) {
  return (
    <article className="group w-full rounded-sm border border-border bg-card p-8 text-left shadow-[0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-muted/40 hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.75)] motion-reduce:transition-none md:p-10">
      <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mb-3 text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-accent md:text-xl">
        {title}
      </h3>
      <p className="max-w-xl text-[15px] leading-relaxed text-muted md:text-base">{description}</p>
      {href ? (
        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-foreground/70 transition-colors hover:text-foreground"
        >
          View
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      ) : (
        <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-foreground/45">
          View
          <span aria-hidden>→</span>
        </span>
      )}
    </article>
  );
}
