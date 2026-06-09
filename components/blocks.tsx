import Link from "next/link";
import { Icon } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { services, stats, testimonials, faqs, site } from "@/lib/site";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">
        <span className="h-px w-6 bg-teal-500" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>
      )}
    </Reveal>
  );
}

export function StatsBar() {
  return (
    <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/[0.06] bg-ink/[0.06] shadow-soft md:grid-cols-4">
      {stats.map((s) => (
        <StaggerItem key={s.label} className="bg-white">
          <div className="px-6 py-8 text-center">
            <div className="font-display text-4xl font-semibold text-teal-700">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-medium text-ink-muted">{s.label}</div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <StaggerItem key={s.slug} id={s.slug}>
          <article className="card group h-full hover:-translate-y-1 hover:border-teal-600/20 hover:shadow-lift">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
              <Icon name={s.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.short}</p>
            <ul className="mt-4 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink-soft">
                  <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Testimonials() {
  return (
    <Stagger className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <StaggerItem key={t.author}>
          <figure className="card h-full">
            <div className="flex gap-0.5 text-gold-500" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              „{t.quote}"
            </blockquote>
            <figcaption className="mt-5 border-t border-ink/[0.06] pt-4 text-sm">
              <span className="font-semibold text-ink">{t.author}</span>
              <span className="text-ink-muted"> · {t.detail}</span>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function FaqList() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink/[0.08] overflow-hidden rounded-3xl border border-ink/[0.06] bg-white shadow-soft">
      {faqs.map((f) => (
        <details key={f.q} className="group px-6 py-5 [&_summary]:list-none">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-medium text-ink">
            {f.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-transform group-open:rotate-45">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <Reveal as="section" className="container-px">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-center sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bereit für ein gesundes, strahlendes Lächeln?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-sand-100/75">
            Vereinbaren Sie noch heute Ihren Termin – wir nehmen uns Zeit für Sie.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/kontakt" className="btn-light">
              Termin buchen
            </Link>
            <a href={`tel:${site.contact.phoneHref}`} className="btn-ghost border-white/25 bg-transparent text-white hover:bg-white/10">
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
