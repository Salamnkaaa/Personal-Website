import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

function IconCost({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSpeed({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconControl({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852 1 1.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRoute({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 19l4-14M20 19l-4-14M12 5v14M9 9h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLayout({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 4h16v16H4V4zM9 4v16M4 9h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAlert({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const objectives = [
  {
    title: "Cost Efficiency",
    icon: IconCost,
    points: ["Eliminate recurring external tool cost"],
  },
  {
    title: "Performance Optimization",
    icon: IconSpeed,
    points: ["Improve FRT (First Response Time)", "Improve AHT (Average Handling Time)"],
  },
  {
    title: "Operational Control",
    icon: IconControl,
    points: ["Custom routing logic", "Better workload distribution"],
  },
] as const;

const systemCards = [
  {
    title: "Chat Classification",
    icon: IconTag,
    points: [
      "Identify Customer vs Courier",
      "Attach order and user metadata",
    ],
  },
  {
    title: "Smart Routing",
    icon: IconRoute,
    points: ["Route based on type, priority, workload", "Prioritize active orders"],
  },
  {
    title: "Auto Assignment",
    icon: IconUsers,
    points: [
      "Load-based distribution",
      "Max chat limit per agent",
      "Auto reassignment on inactivity",
    ],
  },
  {
    title: "Agent Dashboard",
    icon: IconLayout,
    points: [
      "Unified inbox",
      "Clear tagging (Customer / Courier)",
      "Order details + chat context",
      "Quick replies (macros)",
    ],
  },
] as const;

const metrics = [
  { label: "FRT", sub: "First Response Time" },
  { label: "AHT", sub: "Average Handling Time" },
  { label: "Chats / agent", sub: "Throughput" },
  { label: "Queue wait", sub: "Waiting time" },
] as const;

const challenges = [
  "Real-time chat classification accuracy",
  "Handling peak traffic and sudden spikes",
  "Preventing agent overload",
  "Ensuring fair chat distribution",
  "Maintaining SLA during high volume",
  "Change management during migration",
] as const;

const migrationSteps = [
  "Build in parallel with Intercom",
  "Gradual rollout to agents",
  "Training and onboarding",
  "Full transition",
] as const;

export function LiveChatSystemCaseStudy() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-28 md:px-8 md:pt-36">
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
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-accent">
            Case study
          </p>
          <h1 className="max-w-4xl text-4xl font-normal leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            In-House Live Chat System
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium text-foreground/90 md:text-xl">
            Replacing Intercom with a Scalable Internal Solution
          </p>
          <p className="mt-3 text-base text-muted md:text-lg">
            From 1M SAR Monthly Cost to Full Operational Control
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
            Led the transition from a costly third-party chat tool to a fully in-house system,
            improving efficiency, control, and scalability.
          </p>
        </Reveal>
        <Reveal delayMs={120} className="mt-12">
          <figure className="overflow-hidden rounded-sm border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
            <div className="relative aspect-[16/10] w-full bg-card-elevated">
              <Image
                src="/images/live-chat/hero-dashboard.png"
                alt="Agent dashboard — unified inbox, routing filters, and chat queue"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 896px, 100vw"
                priority
              />
            </div>
            <figcaption className="border-t border-border px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Agent dashboard — classification, routing, and inbox
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            The Challenge
          </h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <Reveal>
            <ul className="space-y-4 text-lg leading-relaxed text-muted md:text-xl">
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                Intercom used as live chat solution
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                Agents fully dependent on external tool
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                Monthly cost reached ~1M SAR
              </li>
            </ul>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="rounded-sm border border-accent/25 bg-accent-soft p-8 md:p-10">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                Constraints
              </p>
              <ul className="space-y-4 text-base leading-relaxed text-foreground/90 md:text-lg">
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                  Limited control over routing
                </li>
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                  Limited performance optimization
                </li>
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                  High operational cost
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Objectives
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {objectives.map((card, i) => (
            <Reveal key={card.title} delayMs={i * 50}>
              <article className="flex h-full flex-col rounded-sm border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)] transition-colors hover:border-muted/35">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card-elevated text-foreground">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-foreground">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-muted/60">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Core System Design
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {systemCards.map((card, i) => (
            <Reveal key={card.title} delayMs={i * 45}>
              <article className="flex h-full flex-col rounded-sm border border-border bg-card-elevated p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)] transition-colors hover:border-muted/35">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background/80 text-foreground">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-foreground">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-muted/60">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Performance Tracking
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delayMs={i * 40}>
              <div className="rounded-sm border border-border bg-card px-6 py-8 text-center shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
                <p className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">{m.label}</p>
                <p className="mt-2 text-sm text-muted">{m.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={120} className="mt-8">
          <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Real-time tracking enabled continuous operational optimization.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Key Challenges
          </h2>
        </Reveal>
        <ul className="space-y-4">
          {challenges.map((c, i) => (
            <Reveal key={c} delayMs={i * 35}>
              <li className="flex gap-4 text-base leading-relaxed text-muted md:text-lg">
                <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-accent/80" />
                <span>{c}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Migration Strategy
          </h2>
        </Reveal>
        <ol className="max-w-2xl space-y-6 border-l border-border pl-8">
          {migrationSteps.map((step, i) => (
            <Reveal key={step} delayMs={i * 55}>
              <li className="relative">
                <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-[11px] font-medium text-muted">
                  {i + 1}
                </span>
                <p className="text-lg leading-relaxed text-foreground md:text-xl">{step}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delayMs={120} className="mt-10">
          <p className="max-w-2xl text-sm italic text-muted md:text-base">
            Ensured zero disruption to live operations.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Impact
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          <Reveal>
            <div className="rounded-sm border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
              <p className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">~1M SAR</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">monthly cost eliminated</p>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="rounded-sm border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
              <p className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
                Full control
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">over chat operations</p>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="rounded-sm border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
              <p className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
                Efficiency & scale
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">improved throughput and reliability</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            My Role
          </h2>
          <blockquote className="max-w-3xl text-xl font-normal leading-relaxed text-foreground/90 md:text-2xl md:leading-relaxed">
            Led the initiative alongside the tech team, defining product requirements, operational
            workflows, routing logic, and execution strategy.
          </blockquote>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Focused on bridging business needs with technical implementation.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
