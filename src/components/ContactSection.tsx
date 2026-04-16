"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const EMAIL = "abdelsalam.elnashartyy@gmail.com";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 10v8M7 7h.01M11 10v8M11 14a4 4 0 018 0v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm0 1l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 11.5A8.5 8.5 0 105.4 18l-2.4 3.2 4-1.2A8.5 8.5 0 0020 11.5zM9 8.8c.3 1.4 1 2.8 2 3.8 1 1 2.2 1.8 3.6 2.1l1-1.1c.2-.2.4-.2.7-.1l1.5.6c.3.1.4.4.3.7l-.5 1.6c-.1.3-.3.5-.6.6-.9.2-2.4 0-4.3-1-1.2-.7-2.3-1.7-3.2-2.7-1-1.1-1.6-2.3-1.9-3.5-.3-1.1-.2-2 .1-2.7.1-.3.3-.5.6-.6l1.5-.5c.3-.1.6 0 .7.3l.6 1.5c.1.2 0 .5-.2.7L9 8.8z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "LinkedIn",
    hint: "Open LinkedIn",
    href: "https://www.linkedin.com/in/abdelsalammuhammed/",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    hint: "Click to send email",
    href: `mailto:${EMAIL}`,
    Icon: MailIcon,
  },
  {
    label: "WhatsApp",
    hint: "Open WhatsApp",
    href: "https://wa.me/201148311124",
    Icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    hint: "Open Instagram",
    href: "https://www.instagram.com/Salamnkaa",
    Icon: InstagramIcon,
  },
] as const;

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const onCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border pt-20 md:pt-24">
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Open to collaborations, projects, and opportunities.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
            {contactLinks.map(({ label, hint, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                title={hint}
                className="group relative inline-flex h-14 w-14 items-center justify-center rounded-sm border border-border bg-card-elevated text-foreground/90 transition-all duration-300 hover:scale-[1.07] hover:border-accent/50 hover:text-accent hover:shadow-[0_0_22px_-8px_rgba(96,165,250,0.8)]"
              >
                <span className="pointer-events-none absolute -top-8 rounded-sm border border-border bg-background px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {hint}
                </span>
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 rounded-sm border border-border bg-card px-5 py-4 sm:flex-row sm:gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              title="Click to send email"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={onCopyEmail}
              className="inline-flex items-center justify-center rounded-sm border border-border bg-card-elevated px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent/45 hover:text-accent"
              title="Copy email"
            >
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
