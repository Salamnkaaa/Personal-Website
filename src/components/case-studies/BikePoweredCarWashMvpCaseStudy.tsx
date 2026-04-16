import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

function IconOverview({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 12h18M12 3v18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconProblem({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSolution({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 17L9 11L13 15L21 7M21 7H15M21 7V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBuild({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.7 6.3a4 4 0 11-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 002.4-8.4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconScreens({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-5l-2 2-2-2H6a2 2 0 01-2-2V5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLearnings({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v18M5 8h14M5 16h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconOutcome({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 7L9 18l-5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const sections = [
  {
    title: "Overview",
    icon: IconOverview,
    text: "Built an early-stage MVP to test whether a bike-powered fulfillment model could deliver on-demand car wash services with better cost control and faster local coverage.",
  },
  {
    title: "Problem",
    icon: IconProblem,
    text: "Traditional car wash operations rely on heavy field logistics, inconsistent scheduling, and weak visibility on capacity planning. The model is hard to scale while maintaining healthy unit economics.",
  },
  {
    title: "Solution",
    icon: IconSolution,
    text: "Designed a lightweight model around bike-powered micro-operations, zone-based dispatching, and app-to-dashboard coordination for truly on-demand execution.",
  },
] as const;

const builtItems = [
  "Customer mobile journey: service selection, date/time slot booking, location capture, and payment choice",
  "Operational dashboard: bookings, users/permissions, services, bikers, availability calendar, and zones",
  "Micro-ops control loop: assign riders, monitor throughput, and quickly adjust slot capacity by area",
] as const;

const learnings = [
  "Small operational primitives compound fast when designed for repeatability.",
  "The fastest path to product clarity is pairing user flow with operator constraints from day one.",
  "Local logistics quality improves when routing, staffing, and availability are managed as one system.",
] as const;

const appScreens = [
  { src: "/images/bike-mvp/Bike-01.png", alt: "Home and booking CTA screen" },
  { src: "/images/bike-mvp/Bike-02.png", alt: "Choose service screen with pricing" },
  { src: "/images/bike-mvp/Bike-03.png", alt: "Date and time slot selection screen" },
  { src: "/images/bike-mvp/Bike-04.png", alt: "Location and zone selection screen" },
] as const;

const dashboardScreens = [
  { src: "/images/bike-mvp/Dashboard-01.png", alt: "Analytics overview dashboard" },
  { src: "/images/bike-mvp/Dashboard-02.png", alt: "Bookings management dashboard table" },
] as const;

function GalleryCard({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: "App" | "Dashboard";
  className?: string;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-sm border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-muted/45 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.7)] ${className}`}
    >
      <div className="relative w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={720}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-[11px] uppercase tracking-[0.16em]">
        <span className="text-muted">{label}</span>
        <span className="text-muted">screen</span>
      </div>
    </div>
  );
}

export function BikePoweredCarWashMvpCaseStudy() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-28 font-[var(--font-inter)] md:px-8 md:pt-36">
      <section className="border-b border-border pb-14 md:pb-18">
        <Reveal>
          <Link
            href="/#selected-work"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span>
            Back to Selected Work
          </Link>
        </Reveal>
        <Reveal delayMs={70} className="mt-10">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-muted">Project</p>
          <div className="mb-5 inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Logistics Innovation
          </div>
          <h1 className="max-w-5xl text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Bike-Powered Car Wash — MVP Build
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium text-foreground/90 md:text-xl">
            Reimagining car wash logistics using bike-based micro-operations
          </p>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((section, index) => (
            <Reveal key={section.title} delayMs={index * 50}>
              <article className="h-full rounded-sm border border-border bg-card p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-card-elevated text-foreground">
                  <section.icon className="h-4.5 w-4.5" />
                </div>
                <h2 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted">
                  {section.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">{section.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-12 md:py-14">
        <Reveal>
          <div className="rounded-sm border border-accent/20 bg-accent-soft px-6 py-6 md:px-8">
            <p className="text-lg font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              From heavy operations → to lightweight <span className="text-accent">bike-powered</span>{" "}
              logistics
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <IconBuild className="h-5 w-5 text-foreground" />
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">
              What I Built
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {builtItems.map((item, index) => (
            <Reveal key={item} delayMs={index * 45}>
              <div className="h-full rounded-sm border border-border bg-card-elevated p-6">
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  {item
                    .replace("bike-powered", "__BIKE__")
                    .replace("unit economics", "__UNIT__")
                    .replace("on-demand", "__DEMAND__")
                    .split(/(__BIKE__|__UNIT__|__DEMAND__)/g)
                    .map((part, i) => {
                      if (part === "__BIKE__") return <span key={i} className="font-semibold text-accent">bike-powered</span>;
                      if (part === "__UNIT__") return <span key={i} className="font-semibold text-accent">unit economics</span>;
                      if (part === "__DEMAND__") return <span key={i} className="font-semibold text-accent">on-demand</span>;
                      return <span key={i}>{part}</span>;
                    })}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <IconScreens className="h-5 w-5 text-foreground" />
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">
              Product Screens
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">User App</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {appScreens.map((image, index) => (
            <Reveal key={image.src} delayMs={index * 40}>
              <GalleryCard src={image.src} alt={image.alt} label="App" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            Admin Dashboard
          </p>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-2">
          {dashboardScreens.map((image, index) => (
            <Reveal key={image.src} delayMs={index * 50}>
              <GalleryCard src={image.src} alt={image.alt} label="Dashboard" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <IconLearnings className="h-5 w-5 text-foreground" />
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">
              Key Learnings
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {learnings.map((item, index) => (
            <Reveal key={item} delayMs={index * 45}>
              <div className="h-full rounded-sm border border-border bg-card p-6">
                <p className="text-[15px] leading-relaxed text-foreground/90">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-18">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <IconOutcome className="h-5 w-5 text-foreground" />
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Outcome</h2>
          </div>
          <div className="rounded-sm border border-border bg-card-elevated px-7 py-8">
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/95 md:text-xl">
              The MVP validated a practical path to <span className="font-semibold text-accent">on-demand</span>{" "}
              service with lower operational weight, stronger execution visibility, and a scalable direction
              for healthier <span className="font-semibold text-accent">unit economics</span>.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
