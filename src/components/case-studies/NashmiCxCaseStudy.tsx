import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

function IconSupport({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 12a8 8 0 0116 0v5a2 2 0 01-2 2h-3v-5h5M4 14h5v5H6a2 2 0 01-2-2v-5zM12 19v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconOps({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 5h16M4 12h16M4 19h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSales({ className }: { className?: string }) {
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

function IconAffiliate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 12a3 3 0 104.24 4.24l2.12-2.12A3 3 0 1011.12 9.9L10 11M15 12a3 3 0 10-4.24-4.24L8.64 9.88A3 3 0 1012.88 14.1L14 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const serviceCards = [
  {
    title: "Customer Support",
    icon: IconSupport,
    body: "Front-line teams that handle high-volume customer touchpoints with brand-aligned quality.",
  },
  {
    title: "Operations",
    icon: IconOps,
    body: "Structured support workflows with reporting, SLA tracking, and daily execution discipline.",
  },
  {
    title: "Telesales",
    icon: IconSales,
    body: "Localized agents focused on lead conversion and revenue growth through controlled scripts.",
  },
  {
    title: "Affiliate Marketing",
    icon: IconAffiliate,
    body: "Affiliate recruitment and performance management to expand acquisition efficiently.",
  },
] as const;

const opportunityPoints = [
  "Excess manpower capacity",
  "Underutilized operational resources",
  "Need for a new revenue stream",
] as const;

const goToMarket = [
  "Positioning as a growth & operations partner",
  "Flexible pricing models",
  "KPI-driven service structure",
] as const;

const leftExecution = [
  "Built teams per account",
  "Training & onboarding",
  "Performance tracking",
] as const;

const rightExecution = [
  "7 partnerships in first month",
  "Clients: Bookr, TryOrder, Fatoora",
  "Fast launch capability (5–7 days)",
] as const;

function QuoteBlock({ quote }: { quote: string }) {
  return (
    <div className="rounded-sm border border-[#8f7cff]/30 bg-[#8f7cff]/10 px-6 py-5 md:px-8">
      <p className="text-sm italic leading-relaxed text-[#c8beff] md:text-base">“{quote}”</p>
    </div>
  );
}

function ProfileSnippetImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-sm border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="relative">
        <Image src={src} alt={alt} width={1200} height={280} className="h-auto w-full" />
      </div>
      <figcaption className="border-t border-border px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function VisualSnippet({
  src,
  alt,
  caption,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-sm border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.04)] ${className}`}
    >
      <div className="relative h-full w-full">
        <Image src={src} alt={alt} fill className={`object-cover ${imageClassName}`} sizes="100vw" />
      </div>
      <figcaption className="border-t border-border px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export function NashmiCxCaseStudy() {
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
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-muted">Case study</p>
          <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Nashmi CX
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium text-foreground/90 md:text-xl">
            Building a BPO Arm from Zero
          </p>
          <p className="mt-3 text-base text-muted md:text-lg">
            Turning Operational Capacity into a Revenue-Generating Business
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
            Founded a BPO arm to monetize excess operational capacity, offering customer experience,
            sales, and outsourcing solutions.
          </p>
        </Reveal>
        <Reveal delayMs={130} className="mt-10 max-w-3xl">
          <QuoteBlock quote="Our teams are trained to work like an extension of your internal staff, not just as a vendor." />
        </Reveal>
        <Reveal delayMs={150} className="mt-8">
          <VisualSnippet
            src="/images/nashmi-cx/slides/page-1.png"
            alt="Nashmi profile cover visual"
            caption="Cover visual from company profile"
            className="aspect-[16/8]"
            imageClassName="object-center"
          />
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            The Opportunity
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {opportunityPoints.map((point, index) => (
            <Reveal key={point} delayMs={index * 50}>
              <div className="rounded-sm border border-border bg-card p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
                <p className="text-[17px] leading-relaxed text-foreground/90">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <VisualSnippet
              src="/images/nashmi-cx/slides/page-3.png"
              alt="About us highlight from profile"
              caption="Origin story highlight"
              className="aspect-[16/8]"
              imageClassName="object-top"
            />
          </Reveal>
          <Reveal delayMs={60}>
            <VisualSnippet
              src="/images/nashmi-cx/slides/page-4.png"
              alt="Operational support and performance tracking from profile"
              caption="Operational model highlight"
              className="aspect-[16/8]"
              imageClassName="object-top"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            The Solution
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {serviceCards.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 55}>
              <article className="h-full rounded-sm border border-border bg-card-elevated p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)] transition-colors hover:border-muted/40">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background/80 text-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">{service.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{service.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={120} className="mt-10 max-w-3xl">
          <QuoteBlock quote="We don't work for your brand, we work as your brand." />
        </Reveal>
        <Reveal delayMs={190} className="mt-6">
          <VisualSnippet
            src="/images/nashmi-cx/slides/page-7.png"
            alt="Services section from company profile"
            caption="Services snapshot from company profile"
            className="aspect-[16/9]"
            imageClassName="object-top"
          />
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Go-To-Market
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {goToMarket.map((item, index) => (
            <Reveal key={item} delayMs={index * 45}>
              <div className="rounded-sm border border-border bg-card p-7">
                <p className="text-base leading-relaxed text-foreground/90">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={100} className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b5a8ff]">
            Built for Scale. Trained for Impact.
          </p>
        </Reveal>
        <Reveal delayMs={135} className="mt-5 max-w-2xl">
          <ProfileSnippetImage
            src="/images/nashmi-cx/snippets/built-scale-impact.png"
            alt="Snippet showing Built for Scale Trained for Impact statement"
            caption="Brand promise from company profile"
          />
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Execution
          </h2>
        </Reveal>
        <div className="grid gap-7 md:grid-cols-2">
          <Reveal>
            <div className="rounded-sm border border-border bg-card p-8">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">
                Operational setup
              </p>
              <ul className="space-y-3 text-base leading-relaxed text-foreground/90">
                {leftExecution.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={70}>
            <div className="rounded-sm border border-border bg-card-elevated p-8">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">
                Early traction
              </p>
              <ul className="space-y-3 text-base leading-relaxed text-foreground/90">
                {rightExecution.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delayMs={120} className="mt-10 max-w-3xl">
          <QuoteBlock quote="Launch within 5–7 business days from contract." />
        </Reveal>
        <Reveal delayMs={190} className="mt-6">
          <VisualSnippet
            src="/images/nashmi-cx/slides/page-8.png"
            alt="How we work process section from profile"
            caption="Launch process visual (workshop to go-live)"
            className="aspect-[16/9]"
            imageClassName="object-top"
          />
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Impact
          </h2>
        </Reveal>
        <div className="grid gap-7 md:grid-cols-3">
          <Reveal>
            <div className="rounded-sm border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
              <p className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Month 1</p>
              <p className="mt-2 text-sm text-muted">Revenue generated from launch month</p>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="rounded-sm border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
              <p className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Break-even</p>
              <p className="mt-2 text-sm text-muted">Achieved immediately through live partnerships</p>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="rounded-sm border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
              <p className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Scalable Unit</p>
              <p className="mt-2 text-sm text-muted">Created a repeatable business arm from zero</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">My Role</h2>
          <blockquote className="max-w-3xl text-xl font-normal leading-relaxed text-foreground/90 md:text-2xl md:leading-relaxed">
            I founded and led Nashmi CX end-to-end, from identifying the opportunity to building
            partnerships, structuring teams, and driving execution.
          </blockquote>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
            Supporting profile excerpts: We launch fast, operate smart, and Built for Scale. Trained for
            Impact.
          </p>
          <div className="mt-6 max-w-3xl">
            <VisualSnippet
              src="/images/nashmi-cx/slides/page-6.png"
              alt="Promise visual from profile about response and issue ownership"
              caption="Brand promise visual"
              className="aspect-[16/9]"
              imageClassName="object-center"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
