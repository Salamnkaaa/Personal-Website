import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

function IconOverview({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 12h16M12 4v16"
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
        d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
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
        d="M14.5 5.5a3.5 3.5 0 11-5 5L3 17v4h4l6.5-6.5a3.5 3.5 0 001-4.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconImpact({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 19V10m7 9V5m7 14v-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconScreen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

const whatIBuilt = [
  {
    title: "Product & Concept Development",
    points: [
      "Defined the core 1-hour service proposition, operating model, and launch scope.",
      "Translated the business concept into an executable product flow from order intake to delivery handoff.",
    ],
  },
  {
    title: "Sales Engine (Telesales + Field Sales)",
    points: [
      "Built both telesales and field sales teams to run parallel outreach and conversion.",
      "Structured qualification, pitch, and onboarding workflows to create a scalable acquisition system.",
    ],
  },
  {
    title: "Vendor Acquisition & Partnerships",
    points: [
      "Led enterprise vendor acquisition and partnership execution with brands like Al-Dawaa and Panda.",
      "Built a repeatable pipeline for partner activation from first contact to live operations.",
    ],
  },
  {
    title: "Vendor Management & Operations",
    points: [
      "Established a vendor management team focused on retention, follow-ups, and usage tracking.",
      "Drove continuous engagement after onboarding to protect activation quality and repeat order flow.",
    ],
  },
  {
    title: "Operations & Execution",
    points: [
      "Owned daily execution loops across dispatch readiness, SLA control, and escalation handling.",
      "Connected sales commitments to operational delivery to support sustainable scale.",
    ],
  },
] as const;

const metrics = [
  { value: "2,000+", label: "orders handled in launch phase" },
  { value: "50%", label: "faster SLA performance vs baseline process" },
  { value: "0 → 1", label: "full product + operations launch" },
] as const;

export function B2BExpressDeliveryCaseStudy() {
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
        <Reveal delayMs={80} className="mt-10">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-muted">Project</p>
          <div className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            0 → 1 Launch
          </div>
          <h1 className="max-w-5xl text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            B2B Express Delivery — 1-Hour Service
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium text-foreground/90 md:text-xl">
            Building a fast, on-demand delivery solution for vendors to serve their own customers
          </p>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <IconOverview className="h-5 w-5 text-foreground" />
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Overview</h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
            Built and launched a high-urgency logistics model to shift from marketplace fulfillment into a
            vendor-first B2B delivery engine with predictable 1-hour operations.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-sm border border-border bg-card p-7">
              <div className="mb-4 flex items-center gap-3">
                <IconProblem className="h-5 w-5 text-foreground" />
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Problem</h2>
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/90">
                Vendors needed fast last-mile delivery without building their own fleet and dispatch
                systems. Existing marketplaces were not optimized for strict B2B SLA execution.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={70}>
            <div className="rounded-sm border border-border bg-card-elevated p-7">
              <div className="mb-4 flex items-center gap-3">
                <IconSolution className="h-5 w-5 text-foreground" />
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Solution</h2>
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/90">
                Built an on-demand fulfillment layer designed for vendor workflows, enabling 1-hour
                dispatch cycles, SLA-first routing, and live operational visibility.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-12 md:py-14">
        <Reveal>
          <div className="rounded-sm border border-accent/20 bg-accent-soft px-6 py-6 md:px-8">
            <p className="text-lg font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              B2C Marketplace → <span className="text-accent">B2B Logistics Platform</span>
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
        <Reveal delayMs={40}>
          <p className="mb-6 text-base font-semibold leading-relaxed text-foreground md:text-lg">
            Built a complete B2B growth and operations engine covering acquisition, activation, and
            retention.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {whatIBuilt.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 50}>
              <div className="h-full rounded-sm border border-border bg-card p-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-[15px] leading-relaxed text-foreground/90">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={120} className="mt-8">
          <p className="text-sm leading-relaxed text-muted md:text-base">
            This was an end-to-end ownership track: from idea and build, through sales and vendor
            activation, to operations discipline and scale. Partnerships included major brands such as{" "}
            <span className="font-semibold text-foreground">Al-Dawaa</span>,{" "}
            <span className="font-semibold text-foreground">Panda</span>, and other high-volume vendors.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <IconImpact className="h-5 w-5 text-foreground" />
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Impact</h2>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delayMs={index * 50}>
              <div className="rounded-sm border border-border bg-card-elevated p-7">
                <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <IconScreen className="h-5 w-5 text-foreground" />
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">
              Product Screens
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <figure className="overflow-hidden rounded-sm border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
            <div className="relative mx-auto aspect-[3/5] w-full max-w-sm overflow-hidden bg-background">
              <Image
                src="/images/b2b-express/hero.png"
                alt="B2B Express Delivery request creation screen"
                fill
                className="object-cover object-[center_22%]"
                sizes="(min-width: 768px) 360px, 90vw"
              />
            </div>
          </figure>
        </Reveal>
      </section>

      <section className="py-14 md:py-18">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <IconOutcome className="h-5 w-5 text-foreground" />
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Outcome</h2>
          </div>
          <div className="rounded-sm border border-border bg-card-elevated px-7 py-8">
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/95 md:text-xl">
              The 1-hour service proved demand for enterprise-grade speed and validated a repeatable
              operations model that can scale beyond pilot geography while preserving SLA discipline.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
