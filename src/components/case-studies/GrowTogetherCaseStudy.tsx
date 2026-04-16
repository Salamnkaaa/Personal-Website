import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Reveal } from "@/components/Reveal";

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.5L12 15.8 6.4 19.3l2.1-6.5L3 8.8h6.8L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStore({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10V20H20V10M4 10L6 4H18L20 10M4 10H20M9 14V20M15 14V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTrend({ className }: { className?: string }) {
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

function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const strategyCards = [
  {
    title: "Customer Value",
    icon: IconSparkles,
    points: ["20 SAR discount on first order", "1 SAR delivery fee"],
  },
  {
    title: "Merchant Model",
    icon: IconStore,
    points: [
      "Merchants fund discounts and delivery",
      "Flexible pricing model (~25–30% equivalent commission)",
    ],
  },
  {
    title: "Platform Profitability",
    icon: IconTrend,
    points: ["5 SAR profit per order", "No subsidy from platform"],
  },
] as const;

const retentionSteps = [
  { ordinal: "1st", label: "Discounted Order" },
  { ordinal: "2nd", label: "Full Price Order" },
  { ordinal: "3rd", label: "Discounted Order" },
  { ordinal: "4th", label: "Full Price Order" },
] as const;

const channelImages = [
  { src: "/images/grow-together/channel-01.png", alt: "Social campaign creative — Shawermagy" },
  { src: "/images/grow-together/channel-02.png", alt: "Social campaign creative — Chicket" },
  { src: "/images/grow-together/channel-03.png", alt: "Social campaign creative — Makbusah" },
  { src: "/images/grow-together/channel-04.png", alt: "In-store branding — kebab offer" },
] as const;

const metrics = [
  { line1: "200 → 2,000", line2: "orders/day" },
  { line1: "10×", line2: "growth" },
  { line1: "+60%", line2: "organic growth (pre-paid marketing)" },
  { line1: "< 50,000 SAR", line2: "total marketing spend" },
] as const;

export function GrowTogetherCaseStudy() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:px-8 md:pt-32">
      {/* Hero */}
      <section className="border-b border-border pb-16 md:pb-20">
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
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-muted">
            Case study
          </p>
          <h1 className="max-w-4xl text-4xl font-normal tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Grow Together (Nangah Sawa)
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/85 md:text-xl">End-to-End Growth Execution</p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
            A scalable growth initiative designed to revive business performance, align marketplace
            incentives, and drive sustainable order volume growth.
          </p>
        </Reveal>
      </section>

      {/* Problem */}
      <section className="border-b border-border py-16 md:py-20">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            The Challenge
          </h2>
          <ul className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted md:text-xl">
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              Business slowdown and declining order volume
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              Low customer engagement
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              Need for a sustainable growth strategy beyond short-term campaigns
            </li>
          </ul>
        </Reveal>
      </section>

      {/* Strategy */}
      <section className="border-b border-border py-16 md:py-20">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            The Strategy
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {strategyCards.map((card, i) => (
            <Reveal key={card.title} delayMs={i * 60}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)] transition-colors duration-300 hover:border-muted/35">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card-elevated text-muted">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-foreground">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-muted">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Retention */}
      <section className="border-b border-border py-16 md:py-20">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Retention Loop
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-nowrap md:justify-between md:gap-2 md:overflow-visible [&::-webkit-scrollbar]:hidden">
            {retentionSteps.map((step, idx) => (
              <Fragment key={step.ordinal}>
                <div className="min-w-[min(220px,85vw)] shrink-0 snap-center rounded-xl border border-border bg-card-elevated px-5 py-6 text-center shadow-[0_1px_0_0_rgba(255,255,255,0.04)] md:min-w-0 md:flex-1">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                    {step.ordinal}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-snug text-foreground md:text-base">
                    {step.label}
                  </p>
                </div>
                {idx < retentionSteps.length - 1 ? (
                  <div
                    className="hidden shrink-0 items-center self-center text-muted/50 md:flex"
                    aria-hidden
                  >
                    <IconArrow className="h-5 w-5" />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            This loop drives habit formation and increases customer lifetime value.
          </p>
        </Reveal>
      </section>

      {/* Execution */}
      <section className="border-b border-border py-16 md:py-20">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Execution
          </h2>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <ul className="space-y-4 text-lg leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                Telesales team (Egypt) for scaling outreach
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                Field sales team (Saudi Arabia) for on-ground conversion
              </li>
            </ul>
          </Reveal>
          <Reveal delayMs={80}>
            <ul className="space-y-4 text-lg leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                700+ restaurants onboarded across Saudi Arabia
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                Strong merchant adoption through performance-based model
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-border py-16 md:py-20">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Results
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.line2} delayMs={i * 50}>
              <div className="rounded-xl border border-border bg-card px-6 py-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
                <p className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  {m.line1}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.line2}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Growth channels */}
      <section className="border-b border-border py-16 md:py-20">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Growth Channels
          </h2>
          <ul className="mb-10 max-w-xl space-y-3 text-lg text-muted">
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              Social media campaigns
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              In-store branding (banners)
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              Offline street marketing
            </li>
          </ul>
          <p className="mb-10 text-sm italic text-muted">
            Scaling validated success, not experimenting.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {channelImages.map((img, i) => (
            <Reveal key={img.src} delayMs={i * 60}>
              <figure className="group overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="border-b border-border py-16 md:py-20">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Sustainability
          </h2>
          <ul className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted md:text-xl">
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              Maintained order volume post-growth
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              Stable operations performance
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              Strong merchant retention
            </li>
          </ul>
        </Reveal>
      </section>

      {/* Role */}
      <section className="py-16 md:py-20">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            My Role
          </h2>
          <blockquote className="max-w-3xl text-xl font-normal leading-relaxed text-foreground/90 md:text-2xl md:leading-relaxed">
            I led this initiative end-to-end, from concept and business model design to execution,
            team structuring, and scaling.
          </blockquote>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            All visual designs and campaign creatives were produced by the design team.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
