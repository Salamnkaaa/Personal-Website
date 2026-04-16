import { HeroPhotoSlider } from "@/components/HeroPhotoSlider";
import { Reveal } from "@/components/Reveal";

const introParagraphs = [
  <>
    Hi, I&apos;m Abdelsalam Muhammed — also known as <span className="text-foreground/95">Salamnka</span>{" "}
    <span className="text-muted">(long story).</span>
  </>,
  <>
    I&apos;m a 30-year-old Computer Science graduate based in Egypt, and I&apos;m all-in when it comes
    to business — especially on the technology side.
  </>,
  <>
    I&apos;m the kind of person who doesn&apos;t just come up with ideas… I execute them. I enjoy
    building things, fixing what&apos;s broken, and scaling what actually works. If there&apos;s a
    challenge, I&apos;m probably already thinking about how to solve it (and how to make it better).
  </>,
  <>
    I&apos;m ambitious about what I do, and I take my work seriously — but not myself all the time.
  </>,
  <>
    Outside of work, I sometimes do photography, and I&apos;m surprisingly good at coordinating events
    — which taught me a lot about attention to detail, structure, and delivering under pressure.
  </>,
  <>
    If you&apos;re building something interesting, or just want to connect — I&apos;m always open to
    a good conversation.
  </>,
] as const;

export function IntroSection() {
  return (
    <section className="mb-28 md:mb-36" aria-labelledby="intro-lead">
      <div className="flex flex-col items-stretch gap-12 md:flex-row md:items-start md:gap-14 lg:gap-20">
        <Reveal className="mx-auto md:mx-0 md:pt-1">
          <HeroPhotoSlider />
        </Reveal>

        <div className="min-w-0 flex-1 space-y-6 md:space-y-7">
          {introParagraphs.map((para, i) => (
            <Reveal key={i} delayMs={80 + i * 45}>
              <p
                id={i === 0 ? "intro-lead" : undefined}
                className={`text-[clamp(1.05rem,1.35vw,1.2rem)] leading-relaxed text-muted md:leading-[1.7] ${
                  i === 0 ? "text-[clamp(1.15rem,1.8vw,1.35rem)] font-medium text-foreground/95" : ""
                }`}
              >
                {para}
              </p>
            </Reveal>
          ))}
          <Reveal delayMs={380}>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-card-elevated px-4 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:border-muted/50"
            >
              About Me
              <span aria-hidden>↓</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
