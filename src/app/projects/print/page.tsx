import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects Portfolio — Print Version",
  description: "Print-optimized project portfolio for PDF export.",
};

type ProjectDoc = {
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  whatIDid: string[];
  impact: { value: string; label: string }[];
  screenshots: { src: string; alt: string }[];
};

const projects: ProjectDoc[] = [
  {
    title: "Delivery Operations System (Talqa)",
    subtitle: "Built a structured operating model that pushed fulfillment to 99% at scale.",
    overview:
      "Transformed fragmented delivery execution into a measurable nationwide operating framework using data-driven planning and geofenced courier allocation.",
    problem:
      "Unstructured courier behavior, cancellations, and inconsistent peak-hour performance were creating revenue and reliability losses.",
    solution:
      "Designed demand-aware zoning, courier allocation logic, and operational controls to improve reliability while preserving cost sustainability.",
    whatIDid: [
      "Defined the end-to-end operations framework and rollout model.",
      "Designed geofence-based demand segmentation and courier distribution logic.",
      "Built the performance review loop for cancellations, utilization, and peak execution.",
    ],
    impact: [
      { value: "99%", label: "Fulfillment rate achieved" },
      { value: "↓", label: "Cancellations reduced" },
      { value: "↑", label: "Peak-hour performance improved" },
    ],
    screenshots: [
      { src: "/images/project1/Step-01.png", alt: "Talqa operations process step 1" },
      { src: "/images/project1/Step-04.png", alt: "Talqa operations process step 4" },
      { src: "/images/project1/Step-07.png", alt: "Talqa operations process step 7" },
    ],
  },
  {
    title: "Grow Together (Nangah Sawa)",
    subtitle: "Executed a full growth system that scaled orders from 200 to 2,000/day.",
    overview:
      "Led a multi-channel growth initiative combining marketplace incentives, retention sequencing, telesales, field sales, and partner onboarding.",
    problem:
      "Order volume slowdown and weak engagement required a sustainable growth engine, not one-off campaign spikes.",
    solution:
      "Built an end-to-end growth loop with clear economics, retention mechanics, and expansion channels tied to measurable output.",
    whatIDid: [
      "Structured the growth model and channel operating plan.",
      "Led execution across telesales, field sales, and merchant onboarding.",
      "Designed the retention sequence and performance tracking rhythm.",
    ],
    impact: [
      { value: "10×", label: "Order growth" },
      { value: "200→2,000", label: "Orders/day scaled" },
      { value: "+60%", label: "Organic growth (pre-paid marketing)" },
    ],
    screenshots: [
      { src: "/images/grow-together/channel-01.png", alt: "Grow Together social campaign creative 1" },
      { src: "/images/grow-together/channel-02.png", alt: "Grow Together social campaign creative 2" },
      { src: "/images/grow-together/channel-04.png", alt: "Grow Together in-store branding visual" },
    ],
  },
  {
    title: "In-House Live Chat System",
    subtitle: "Replaced Intercom with an internal platform and eliminated ~1M SAR monthly cost.",
    overview:
      "Built and launched an in-house live chat system to regain routing control, improve operational efficiency, and scale support reliability.",
    problem:
      "Support operations were dependent on an external tool with high recurring cost and limited routing/performance control.",
    solution:
      "Implemented a full internal stack: chat classification, smart routing, load-based assignment, and a unified agent dashboard.",
    whatIDid: [
      "Defined product requirements and routing logic with operations and tech.",
      "Led migration strategy from parallel run to full transition.",
      "Established live performance tracking for FRT, AHT, and queue health.",
    ],
    impact: [
      { value: "~1M SAR", label: "Monthly cost eliminated" },
      { value: "100%", label: "Operational control reclaimed" },
      { value: "↑", label: "Efficiency and scalability improved" },
    ],
    screenshots: [
      { src: "/images/live-chat/hero-dashboard.png", alt: "Live chat in-house dashboard" },
      { src: "/images/nashmi-cx/snippets/launch-fast-operate-smart.png", alt: "Performance-oriented operations snippet" },
    ],
  },
  {
    title: "Nashmi CX",
    subtitle: "Built a BPO arm from zero into a revenue-generating operational business unit.",
    overview:
      "Founded and launched a BPO operation to monetize excess capacity through customer support, telesales, and outsourced execution services.",
    problem:
      "Underutilized operational resources and manpower needed to be converted into a sustainable, repeatable revenue stream.",
    solution:
      "Positioned Nashmi as an extension-team model with fast onboarding, KPI-based service structures, and flexible engagement formats.",
    whatIDid: [
      "Identified opportunity, defined service architecture, and built GTM strategy.",
      "Structured delivery teams, onboarding process, and execution model.",
      "Led partnerships and early client activation with rapid launch cycles.",
    ],
    impact: [
      { value: "Month 1", label: "Revenue generated from launch" },
      { value: "Break-even", label: "Reached immediately" },
      { value: "7", label: "Partnerships in first month" },
    ],
    screenshots: [
      { src: "/images/nashmi-cx/slides/page-1.png", alt: "Nashmi cover visual" },
      { src: "/images/nashmi-cx/slides/page-7.png", alt: "Nashmi services visual" },
      { src: "/images/nashmi-cx/slides/page-8.png", alt: "Nashmi process visual" },
    ],
  },
  {
    title: "Bike-Powered Car Wash — MVP Build",
    subtitle: "Validated a bike-powered on-demand model for leaner local service operations.",
    overview:
      "Built and tested an MVP that connects customer booking flow with operational dashboard controls for lightweight field execution.",
    problem:
      "Traditional service delivery models carry heavy operational overhead and weak visibility over slot-level execution quality.",
    solution:
      "Designed micro-operations around bike-powered fulfillment, zone scheduling, and dashboard-led dispatch controls.",
    whatIDid: [
      "Built core mobile flow: service, slot, location, and booking confirmation.",
      "Built admin modules: services, bookings, zones, availability, and rider management.",
      "Connected user demand and operator controls in one execution loop.",
    ],
    impact: [
      { value: "0→1", label: "MVP launched end-to-end" },
      { value: "Lean ops", label: "Lower operational weight" },
      { value: "↑", label: "Visibility into execution and unit economics" },
    ],
    screenshots: [
      { src: "/images/bike-mvp/Bike-01.png", alt: "Bike MVP user app home screen" },
      { src: "/images/bike-mvp/Bike-03.png", alt: "Bike MVP date and slot selection" },
      { src: "/images/bike-mvp/Dashboard-01.png", alt: "Bike MVP admin analytics dashboard" },
    ],
  },
];

export default function PrintProjectsPage() {
  return (
    <>
      <main className="print-doc bg-white text-black">
        <header className="doc-header">
          <p className="doc-kicker">Portfolio — Print Version</p>
          <h1>Projects Case Studies</h1>
          <p className="doc-subtitle">
            Clean export format prepared for client submissions (Upwork / Mostaql).
          </p>
        </header>

        {projects.map((project, idx) => (
          <article key={project.title} className={`project-sheet ${idx === 0 ? "first-sheet" : ""}`}>
            <div className="sheet-head">
              <h2>{project.title}</h2>
              <p className="sheet-subtitle">{project.subtitle}</p>
            </div>

            <div className="section-block">
              <h3>Overview</h3>
              <p>{project.overview}</p>
            </div>

            <div className="two-col">
              <section className="section-block">
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </section>
              <section className="section-block">
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </section>
            </div>

            <section className="section-block">
              <h3>What I Did</h3>
              <ul>
                {project.whatIDid.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="section-block">
              <h3>Impact</h3>
              <div className="impact-grid">
                {project.impact.map((item) => (
                  <div key={`${item.value}-${item.label}`} className="impact-card">
                    <p className="impact-value">{item.value}</p>
                    <p className="impact-label">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="section-block">
              <h3>Screenshots</h3>
              <div className="image-grid">
                {project.screenshots.slice(0, 3).map((image) => (
                  <figure key={image.src} className="image-card">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1400}
                      height={900}
                      className="doc-image"
                    />
                  </figure>
                ))}
              </div>
            </section>
          </article>
        ))}
      </main>

      <style>{`
        .print-doc {
          min-height: 100vh;
          background: #fff;
          color: #111;
          padding: 32px;
          font-family: var(--font-inter), var(--font-dm-sans), Arial, sans-serif;
          line-height: 1.5;
        }

        .doc-header {
          margin: 0 auto 28px;
          max-width: 1000px;
          border-bottom: 1px solid #d8d8d8;
          padding-bottom: 20px;
        }

        .doc-kicker {
          margin: 0 0 8px;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6a6a6a;
        }

        .doc-header h1 {
          margin: 0;
          font-size: 36px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .doc-subtitle {
          margin: 10px 0 0;
          font-size: 15px;
          color: #404040;
        }

        .project-sheet {
          margin: 0 auto 28px;
          max-width: 1000px;
          border: 1px solid #e1e1e1;
          padding: 24px;
          page-break-before: always;
          break-before: page;
          page-break-inside: avoid;
          break-inside: avoid-page;
        }

        .project-sheet.first-sheet {
          page-break-before: auto;
          break-before: auto;
        }

        .sheet-head {
          border-bottom: 1px solid #ececec;
          margin-bottom: 18px;
          padding-bottom: 14px;
        }

        .sheet-head h2 {
          margin: 0;
          font-size: 30px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .sheet-subtitle {
          margin: 8px 0 0;
          font-size: 17px;
          font-weight: 600;
        }

        .section-block {
          margin-top: 18px;
          page-break-inside: avoid;
          break-inside: avoid-page;
        }

        .section-block h3 {
          margin: 0 0 8px;
          font-size: 20px;
          line-height: 1.2;
        }

        .section-block p,
        .section-block li {
          font-size: 15px;
          color: #222;
          margin: 0;
        }

        .section-block ul {
          margin: 0;
          padding-left: 18px;
          display: grid;
          gap: 6px;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .impact-card {
          border: 1px solid #dedede;
          padding: 12px;
        }

        .impact-value {
          margin: 0;
          font-size: 28px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .impact-label {
          margin: 6px 0 0;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #555;
        }

        .image-grid {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          page-break-inside: avoid;
          break-inside: avoid-page;
        }

        .image-card {
          margin: 0;
          border: 1px solid #e0e0e0;
          overflow: hidden;
          page-break-inside: avoid;
          break-inside: avoid-page;
        }

        .doc-image {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        @media (min-width: 900px) {
          .two-col {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }

        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          html,
          body {
            background: #fff !important;
            color: #000 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .print-doc {
            padding: 0;
          }

          .doc-header {
            margin-bottom: 16px;
          }

          .doc-header h1 {
            font-size: 28px;
          }

          .sheet-head h2 {
            font-size: 24px;
          }

          .section-block h3 {
            font-size: 16px;
          }

          .section-block p,
          .section-block li {
            font-size: 12px;
            line-height: 1.45;
          }

          .project-sheet {
            border: 0;
            padding: 0;
            margin: 0 0 10mm;
          }

          .image-grid {
            gap: 6px;
          }

          .impact-value {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}
