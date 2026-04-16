import { IntroSection } from "@/components/IntroSection";
import { ContactSection } from "@/components/ContactSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { ToolsStackSection } from "@/components/ToolsStackSection";
import { site } from "@/lib/site";

const buildBlocks = [
  {
    title: "Operations Systems",
    body: "Structuring workflows and execution.",
  },
  {
    title: "Logistics Optimization",
    body: "Improving delivery performance and fulfillment.",
  },
  {
    title: "Business Growth & Expansion",
    body: "Designing campaigns, partnerships, and revenue strategies.",
  },
  {
    title: "Dashboards & Data",
    body: "Turning data into clear decisions.",
  },
  {
    title: "System Building",
    body: "Creating internal tools, MVPs, and automation.",
  },
  {
    title: "Venture Building",
    body: "Launching and scaling ventures from 0 → 1.",
  },
] as const;

const projects = [
  {
    title: "Delivery Operations System (Talqa)",
    description:
      "Transforming driver behavior from freelance chaos into a structured shift-based system that improved fulfillment dramatically.",
    href: "/projects/talqa-operations",
  },
  {
    title: "Grow Together (Nangah Sawa)",
    description:
      "End-to-end growth execution — marketplace incentives, retention loops, and scalable order volume across Saudi Arabia.",
    href: "/projects/grow-together",
  },
  {
    title: "In-House Live Chat System",
    description:
      "Replacing Intercom with a scalable internal solution — routing, agent dashboard, and ~1M SAR cost elimination.",
    href: "/projects/live-chat-system",
  },
  {
    title: "Nashmi CX",
    description:
      "Building a BPO arm from zero to turn excess operational capacity into a scalable revenue-generating business unit.",
    href: "/projects/nashmi-cx",
  },
  {
    title: "Bike-Powered Car Wash — MVP Build",
    description:
      "Reimagining car wash logistics with bike-powered micro-operations, on-demand booking flows, and lean dashboard control.",
    href: "/projects/bike-powered-car-wash-mvp",
  },
  {
    title: "B2B Express Delivery — 1-Hour Service",
    description:
      "Building a fast on-demand B2B delivery solution for vendors with enterprise SLA focus and 0 → 1 execution.",
    href: "/projects/b2b-express-delivery",
  },
] as const;

const steps = [
  "Understand the system deeply",
  "Identify bottlenecks and opportunities",
  "Design the right solution",
  "Execute and iterate",
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto max-w-6xl px-6 pb-32 pt-32 md:px-8 md:pt-40">
        <IntroSection />

        {/* About */}
        <section id="about" className="mb-28 md:mb-36">
          <Reveal>
            <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              About
            </h2>
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted md:text-xl md:leading-[1.65]">
              <p>
                I’ve worked across operations, logistics, and business growth — building teams, systems,
                and strategies that scale.
              </p>
              <p className="text-foreground/90">
                My focus is always the same: clarity, execution, and real results.
              </p>
            </div>
          </Reveal>
        </section>

        {/* What I Build */}
        <section id="what-i-build" className="mb-28 md:mb-36">
          <Reveal>
            <h2 className="mb-4 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              What I Build
            </h2>
            <p className="mb-14 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl md:leading-relaxed">
              I design systems across operations, logistics, growth, and technology — focusing on real
              execution, not just ideas.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buildBlocks.map((b, i) => (
              <Reveal key={b.title} delayMs={i * 50}>
                <div className="h-full rounded-sm border border-border bg-card p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.04)] transition-colors duration-300 hover:border-muted/35 md:p-8">
                  <h3 className="mb-2 text-base font-medium tracking-tight text-foreground">{b.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section id="selected-work" className="mb-28 md:mb-36">
          <Reveal>
            <h2 className="mb-14 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              Selected Work
            </h2>
          </Reveal>
          <div className="flex flex-col gap-5">
            {projects.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 60}>
                <ProjectCard title={p.title} description={p.description} index={i + 1} href={p.href} />
              </Reveal>
            ))}
          </div>
        </section>

        <ToolsStackSection />

        {/* How I Work */}
        <section className="mb-28 md:mb-36" aria-labelledby="how-heading">
          <Reveal>
            <h2 id="how-heading" className="mb-4 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              How I Work
            </h2>
            <p className="mb-14 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
              I don’t just analyze problems — I build systems that solve them.
            </p>
          </Reveal>
          <ol className="max-w-xl space-y-6 border-l border-border pl-8">
            {steps.map((step, i) => (
              <Reveal key={step} delayMs={i * 70}>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background text-[11px] font-medium text-muted">
                    {i + 1}
                  </span>
                  <p className="text-[17px] leading-relaxed text-foreground md:text-lg">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        <ContactSection />
      </main>
      <footer className="border-t border-border py-10 text-center text-[12px] text-muted">
        <p>© {new Date().getFullYear()} {site.name}</p>
      </footer>
    </>
  );
}
