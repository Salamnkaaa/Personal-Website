import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import { Reveal } from "@/components/Reveal";

const totalSteps = 8;

const steps = [
  {
    number: "01",
    title: "Sample Dataset (1 Week)",
    points: [
      "Simulated order dataset built to mirror weekly operational reality.",
      "Included hourly timestamps, order status, and service zones.",
    ],
    imageKeys: ["01"],
  },
  {
    number: "02",
    title: "Current State Analysis",
    points: [
      "Delivered vs canceled performance was mapped at a granular level.",
      "Core operational gaps were identified before model design.",
    ],
    imageKeys: ["02"],
  },
  {
    number: "03",
    title: "Riyadh Case Study",
    points: [
      "Riyadh was selected as the primary market for the pilot phase.",
      "Demand density and complexity made it ideal for stress-testing.",
    ],
    imageKeys: null,
  },
  {
    number: "04",
    title: "Geofencing & Zone Design",
    points: [
      "District clusters were regrouped into efficient delivery zones.",
      "Travel time was reduced through tighter zone boundaries.",
    ],
    imageKeys: ["03"],
  },
  {
    number: "05",
    title: "Demand Aggregation",
    points: [
      "Legacy subzones were mapped into the new operational zone model.",
      "Total demand was recalculated per zone for planning accuracy.",
    ],
    imageKeys: ["04"],
  },
  {
    number: "06",
    title: "Courier Requirement Modeling",
    points: [
      "Courier requirements were modeled from hourly demand and efficiency.",
      "Output generated couriers-per-hour for every active zone.",
    ],
    imageKeys: ["05"],
  },
  {
    number: "07",
    title: "Shift Planning (North-East Riyadh)",
    points: [
      "10-hour and 5-hour shift blocks were designed for coverage balance.",
      "Supply planning aligned base-load and peak-load windows.",
    ],
    imageKeys: ["06", "07"],
  },
  {
    number: "08",
    title: "Nationwide Scaling",
    points: [
      "The operating model was deployed across Saudi Arabia.",
      "Execution standards were unified across cities and zones.",
    ],
    imageKeys: null,
  },
];

const listProject1Files = cache(() => {
  const dir = path.join(process.cwd(), "public", "images", "project1");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((name) => !name.startsWith("."));
});

/** Parse step index from names like step-01, Step-02, step_03, step04. */
function stepIndexFromFilename(filename) {
  const stem = path.parse(filename).name.trim().replace(/_/g, "-");
  const lower = stem.toLowerCase();
  const hyphen = lower.match(/^step-0*(\d+)$/);
  if (hyphen) return parseInt(hyphen[1], 10);
  const compact = lower.match(/^step0*(\d+)$/);
  if (compact) return parseInt(compact[1], 10);
  return null;
}

function findProject1ImageFile(stepPadded) {
  const files = listProject1Files();
  const target = parseInt(stepPadded, 10);
  if (!Number.isFinite(target)) return null;

  for (const file of files) {
    const idx = stepIndexFromFilename(file);
    if (idx === target) return file;
  }
  return null;
}

export default function TalqaOperationsCaseStudy() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-28 md:px-8 md:pt-36">
      <section className="border-b border-border pb-12 md:pb-16">
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
            Delivery Operations System (Talqa)
          </p>
          <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
            Delivery Operations Optimization - Saudi Arabia
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            Transforming delivery operations into a structured, data-driven system
          </p>
          <div className="mt-10 inline-flex rounded-sm border border-accent/35 bg-accent-soft px-6 py-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
              Achieved 99% Fulfillment Rate
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-6 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Overview
          </h2>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              This case focused on optimizing delivery operations through structured system design,
              replacing fragmented execution with measurable planning.
            </p>
            <p>
              The model combined demand analysis, geofenced zoning, and precise courier allocation
              to improve reliability and reduce operational waste.
            </p>
            <p>
              After validation in Riyadh, the framework was scaled across Saudi Arabia as a unified
              operating standard.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-10 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Process
          </h2>
        </Reveal>
        <div className="space-y-8">
          {steps.map((step, i) => {
            const imageFiles =
              step.imageKeys === null
                ? []
                : step.imageKeys
                    .map((key) => findProject1ImageFile(key))
                    .filter(Boolean);
            return (
              <Reveal key={step.number} delayMs={i * 40}>
                <article className="rounded-sm border border-border bg-card-elevated p-6 md:p-8">
                  <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                      Step {step.number}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                      {step.number}/{totalSteps}
                    </p>
                  </div>

                  <h3 className="mb-4 text-2xl tracking-tight text-foreground md:text-3xl">
                    {step.title}
                  </h3>

                  <ul className="space-y-2 text-[15px] leading-relaxed text-muted md:text-base">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {imageFiles.length > 0 ? (
                    <div className="mt-7 space-y-7">
                      {imageFiles.map((file) => (
                        <div
                          key={file}
                          className="overflow-hidden rounded-sm border border-border bg-background/50"
                        >
                          <Image
                            src={`/images/project1/${file}`}
                            alt={`${step.title} visual`}
                            width={1800}
                            height={1000}
                            className="h-auto w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.01]"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-18">
        <Reveal>
          <h2 className="mb-6 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Cost & Profitability Analysis
          </h2>
          <ul className="max-w-3xl space-y-3 text-base leading-relaxed text-muted md:text-lg">
            <li>Evaluated delivery cost per order against customer fee structure.</li>
            <li>Ensured the operational model remained financially sustainable at scale.</li>
            <li>Balanced courier supply strategy with profitability targets.</li>
            <li>Validated that higher fulfillment did not create cost inefficiency.</li>
          </ul>
        </Reveal>
      </section>

      <section className="py-14 md:py-18">
        <Reveal>
          <h2 className="mb-8 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Results
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "99% Fulfillment Rate",
            "Reduced cancellations",
            "Optimized courier utilization",
            "Improved peak performance",
            "Sustainable delivery cost model",
          ].map((result, i) => (
            <Reveal key={result} delayMs={i * 40}>
              <div className="rounded-sm border border-border bg-card p-6 md:p-7">
                <p className="text-base leading-relaxed text-foreground md:text-lg">{result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
