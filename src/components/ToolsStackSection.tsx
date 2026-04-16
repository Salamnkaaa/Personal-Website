import { Reveal } from "@/components/Reveal";
import type { FC, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

type ToolIcon = FC<IconProps>;

function IconTrello(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M3 5a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm10 0a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2h-4a2 2 0 01-2-2V5z" />
    </svg>
  );
}

function IconNotion(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.5 3.75h15a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 003 18.75V5.25a1.5 1.5 0 011.5-1.5zm1.5 3v10.5h12V6.75h-12zm2.25 2.25h7.5v1.5h-7.5v-1.5zm0 3h5.25v1.5H8.25v-1.5z" />
    </svg>
  );
}

function IconClickUp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4l4 6H8l4-6zm0 16l-4-6h8l-4 6z"
      />
    </svg>
  );
}

function IconGoogleSheets(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2.5L16.5 8H13V4.5zM8 11h8v1.5H8V11zm0 3h8v1.5H8V14zm0 3h5v1.5H8V17z" />
    </svg>
  );
}

function IconMetabase(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path strokeWidth="1.5" strokeLinecap="round" d="M5 19V5m4 14V10m4 9V8m4 12v-6" />
    </svg>
  );
}

function IconPowerBI(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M5 20h3v-8H5v8zm5 0h3V9h-3v11zm5 0h3V4h-3v16z" />
    </svg>
  );
}

function IconTableau(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4 4h7v7H4V4zm9 0h7v4h-7V4zM4 13h4v7H4v-7zm6 5h10v2H10v-2zm0-4h7v3h-7v-3z" />
    </svg>
  );
}

function IconLooker(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 18V6h16v12H4zm4-9h8M8 14h5"
      />
    </svg>
  );
}

function IconAdminDashboard(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14H4V5zm0 6h16M9 5v16"
      />
    </svg>
  );
}

function IconAirtable(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 3L4 7v2l8 4 8-4V7l-8-4zm-8 9.5V19l8 4 8-4v-6.5l-8 4-8-4z" />
    </svg>
  );
}

function IconFigma(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11l-4 4"
      />
    </svg>
  );
}

function IconJira(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M12 3l7.794 9-7.794 9L4.206 12 12 3z"
      />
    </svg>
  );
}

function IconChatGPT(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4z"
      />
    </svg>
  );
}

function IconClaude(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l1.8 5.5h5.7l-4.6 3.3 1.8 5.5L12 14.1 7.3 17.3l1.8-5.5L4.5 8.5h5.7L12 3z"
      />
    </svg>
  );
}

function IconCursor(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4l7 18 2-7 7-2L4 4z"
      />
    </svg>
  );
}

function IconZapier(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
      />
    </svg>
  );
}

function IconSlack(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.5 14a1.5 1.5 0 01-1.5 1.5H3v-3h2a1.5 1.5 0 011.5 1.5zm1.5 0a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5v-2h-3v2zm3-1.5a1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5h-2v3h2zm0-3a1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0111 6.5h2v3h-2zm1.5-3a1.5 1.5 0 001.5-1.5A1.5 1.5 0 0014.5 3H17v3h-2zm3 1.5a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5v-2h3v2zm-1.5 3a1.5 1.5 0 00-1.5 1.5v2h3v-2a1.5 1.5 0 00-1.5-1.5h-2zm0 4.5a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5v-2h3v2zm-4.5 1.5a1.5 1.5 0 00-1.5 1.5H10v-3h2a1.5 1.5 0 011.5 1.5z" />
    </svg>
  );
}

function IconTeams(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16 11a3 3 0 100-6 3 3 0 000 6zm-7 1a4 4 0 10-4 4h8a4 4 0 004-4v-1a3 3 0 00-3-3h-5v4zM20 14h-3v5h3a2 2 0 002-2v-1a2 2 0 00-2-2z" />
    </svg>
  );
}

function IconGoogleWorkspace(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm-1 3h2v5.5l3.5 2-1 .6L11 12.2V7z" />
    </svg>
  );
}

type ToolEntry = {
  id: string;
  name: string;
  Icon: ToolIcon;
  tooltip: string;
};

const categories: { title: string; tools: ToolEntry[] }[] = [
  {
    title: "Operations & Execution",
    tools: [
      {
        id: "trello",
        name: "Trello",
        Icon: IconTrello,
        tooltip: "Kanban boards for day-to-day execution, priorities, and team visibility.",
      },
      {
        id: "airtable-ops",
        name: "Airtable",
        Icon: IconAirtable,
        tooltip:
          "Operational bases for trackers, handoffs, and structured execution across teams.",
      },
      {
        id: "clickup",
        name: "ClickUp",
        Icon: IconClickUp,
        tooltip: "Structured work: timelines, dependencies, and cross-functional follow-through.",
      },
      {
        id: "admin-dash-ops",
        name: "Admin Dashboards",
        Icon: IconAdminDashboard,
        tooltip:
          "Operational consoles for queues, SLAs, live health signals, and agent or field workflows.",
      },
    ],
  },
  {
    title: "Data & Analytics",
    tools: [
      {
        id: "sheets",
        name: "Google Sheets",
        Icon: IconGoogleSheets,
        tooltip: "Fast modeling, shared datasets, and lightweight reporting with stakeholders.",
      },
      {
        id: "metabase",
        name: "Metabase",
        Icon: IconMetabase,
        tooltip: "Self-serve questions and dashboards for recurring operational metrics.",
      },
      {
        id: "powerbi",
        name: "Power BI",
        Icon: IconPowerBI,
        tooltip: "Deeper analytics, semantic models, and executive-ready reporting.",
      },
      {
        id: "tableau",
        name: "Tableau",
        Icon: IconTableau,
        tooltip: "Exploratory analysis and polished visual storytelling on complex data.",
      },
      {
        id: "looker",
        name: "Looker Studio",
        Icon: IconLooker,
        tooltip: "Connected reporting and shareable views across marketing and ops data.",
      },
    ],
  },
  {
    title: "Product & System Design",
    tools: [
      {
        id: "figma",
        name: "Figma",
        Icon: IconFigma,
        tooltip: "Flows, wireframes, and high-fidelity UI aligned with engineering handoff.",
      },
    ],
  },
  {
    title: "Product Management",
    tools: [
      {
        id: "jira",
        name: "Jira",
        Icon: IconJira,
        tooltip: "Backlogs, epics, and delivery tracking tied to engineering execution.",
      },
      {
        id: "notion-pm",
        name: "Notion (PRDs & documentation)",
        Icon: IconNotion,
        tooltip: "PRDs, discovery notes, and living specs stakeholders can actually use.",
      },
    ],
  },
  {
    title: "AI & Automation",
    tools: [
      {
        id: "chatgpt",
        name: "ChatGPT",
        Icon: IconChatGPT,
        tooltip: "Drafting, synthesis, and rapid iteration on ops and product problems.",
      },
      {
        id: "claude",
        name: "Claude AI",
        Icon: IconClaude,
        tooltip: "Long-context reasoning, document review, and structured analysis.",
      },
      {
        id: "cursor",
        name: "Cursor",
        Icon: IconCursor,
        tooltip: "AI-assisted building — prototypes, scripts, and internal tooling faster.",
      },
      {
        id: "zapier",
        name: "Zapier",
        Icon: IconZapier,
        tooltip: "No-code automations between tools to cut manual handoffs and errors.",
      },
    ],
  },
  {
    title: "Communication",
    tools: [
      {
        id: "slack",
        name: "Slack",
        Icon: IconSlack,
        tooltip: "Async coordination, channels by domain, and integrations into daily work.",
      },
      {
        id: "teams",
        name: "Microsoft Teams",
        Icon: IconTeams,
        tooltip: "Structured meetings, files, and org-wide alignment where Teams is standard.",
      },
      {
        id: "workspace",
        name: "Google Workspace",
        Icon: IconGoogleWorkspace,
        tooltip: "Mail, calendar, and docs in one stack for speed and collaboration.",
      },
    ],
  },
];

function ToolTile({
  id,
  name,
  Icon,
  tooltip,
  delayMs,
}: {
  id: string;
  name: string;
  Icon: ToolIcon;
  tooltip: string;
  delayMs: number;
}) {
  return (
    <Reveal delayMs={delayMs}>
      <div className="group relative">
        <div
          className="flex h-full flex-col items-center gap-3.5 rounded-sm border border-border/90 bg-card px-4 py-7 text-center shadow-[0_1px_0_0_rgba(255,255,255,0.035)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.03] hover:border-muted/45 hover:shadow-[0_20px_50px_-18px_rgba(0,0,0,0.65)] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0"
          aria-label={`${name}. ${tooltip}`}
          title={tooltip}
        >
          <span className="flex h-[52px] w-[52px] items-center justify-center rounded-sm border border-border/80 bg-card-elevated text-foreground/88 transition-[color,background-color,border-color] duration-300 group-hover:border-muted/35 group-hover:text-foreground">
            <Icon className="h-[26px] w-[26px]" />
          </span>
          <span className="max-w-[11rem] text-[13px] font-medium leading-snug tracking-[-0.01em] text-muted transition-colors duration-300 group-hover:text-foreground">
            {name}
          </span>
        </div>

        <div
          role="tooltip"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 z-20 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 rounded-sm border border-border bg-card-elevated px-3.5 py-2.5 text-left text-[12px] leading-snug text-muted opacity-0 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] transition-[opacity,transform] duration-200 ease-out invisible group-hover:visible group-hover:opacity-100 max-md:top-[calc(100%+10px)] max-md:group-hover:translate-y-0.5 md:bottom-[calc(100%+12px)] md:group-hover:-translate-y-0.5 motion-reduce:transition-none"
        >
          <span className="text-foreground/90">{tooltip}</span>
        </div>
      </div>
    </Reveal>
  );
}

export function ToolsStackSection() {
  return (
    <section
      id="tools-stack"
      className="mb-28 font-[var(--font-inter)] md:mb-36"
      aria-labelledby="tools-stack-heading"
    >
      <Reveal>
        <h2
          id="tools-stack-heading"
          className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-muted"
        >
          Tools & Stack
        </h2>
        <p className="mb-5 max-w-2xl text-xl font-medium leading-[1.35] tracking-tight text-foreground md:text-2xl md:leading-[1.3]">
          Technologies I use to build, scale, and optimize systems
        </p>
        <p className="mb-16 max-w-2xl text-[15px] leading-relaxed text-muted md:text-base md:leading-[1.7]">
          I use a combination of tools across operations, product, data, and AI — not just to manage work,
          but to design scalable systems and drive better decisions.
        </p>
      </Reveal>

      <div className="flex flex-col gap-14 md:gap-16">
        {categories.map((cat, ci) => (
          <div key={cat.title}>
            <Reveal delayMs={ci * 35}>
              <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted/85">
                {cat.title}
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {cat.tools.map((tool, ti) => (
                <ToolTile
                  key={tool.id}
                  id={tool.id}
                  name={tool.name}
                  Icon={tool.Icon}
                  tooltip={tool.tooltip}
                  delayMs={ci * 70 + ti * 38}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Reveal delayMs={90} className="mt-16 md:mt-20">
        <div className="rounded-sm border border-border/80 bg-gradient-to-b from-card to-card-elevated px-7 py-9 shadow-[0_1px_0_0_rgba(255,255,255,0.04)] md:px-11 md:py-11">
          <p className="max-w-3xl text-[17px] font-normal leading-[1.65] tracking-[-0.01em] text-foreground/95 md:text-xl md:leading-[1.6]">
            I don’t just use tools — I design systems around them to improve efficiency, visibility, and
            execution speed.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
