import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import {
  SectionHeader,
  StatsBar,
  ServicesGrid,
  Testimonials,
  FaqList,
  CtaBand,
} from "@/components/blocks";
import { Icon } from "@/components/icons";
import { ScrollSequence } from "@/components/scroll-sequence";
import { site } from "@/lib/site";

const trustPoints = [
  "Sanfte, angstfreie Behandlung",
  "Modernste digitale Technik",
  "Termine auch am Donnerstagabend",
];

const steps = [
  {
    n: "01",
    title: "Kennenlernen",
    text: "Wir hören zu und verschaffen uns in Ruhe einen Überblick über Ihre Situation.",
  },
  {
    n: "02",
    title: "Diagnose & Plan",
    text: "Mit digitaler 3D-Diagnostik erstellen wir einen klaren, verständlichen Behandlungsplan.",
  },
  {
    n: "03",
    title: "Behandlung",
    text: "Schonend und präzise – mit allem Komfort, den moderne Zahnmedizin bietet.",
  },
  {
    n: "04",
    title: "Vorsorge",
    text: "Mit individueller Prophylaxe bleibt Ihr Lächeln langfristig gesund und schön.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ CINEMATISCHER HERO (Scroll-Sequenz) ============ */}
      <ScrollSequence manifestUrl="/generated/hero-scroll/manifest.json" />
      {/* Sentinel: schaltet den Header von hell auf dunkel, sobald der Hero durchgescrollt ist */}
      <div id="hero-sentinel" aria-hidden="true" />

      {/* ===================== WILLKOMMEN ===================== */}
      <section className="relative overflow-hidden bg-grid">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal-200/40 blur-3xl" />
        <div className="container-px relative grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-teal-500" />
                Zahnärztinnen am See · {site.contact.city}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Ihr Lächeln in
                <span className="text-teal-600"> besten Händen.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Moderne Zahnmedizin mit Herz: von der sanften Vorsorge über
                ästhetische Behandlungen bis zu Implantaten. Persönlich, präzise
                und so angenehm wie möglich.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="btn-primary">
                  Termin buchen
                </Link>
                <Link href="/leistungen" className="btn-ghost">
                  Unsere Leistungen
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="/images/hero-zahnaerztin.png"
                alt="Freundliche Zahnärztin im weissen Kittel in einer hellen, modernen Praxis am See"
                width={896}
                height={1200}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating rating card */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-ink/[0.06] bg-white/95 p-4 shadow-lift backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5 text-gold-500" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="font-display text-lg font-semibold text-ink">4,9</span>
              </div>
              <p className="mt-1 text-xs text-ink-muted">aus 214 Patientenbewertungen</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="container-px py-12">
        <StatsBar />
      </section>

      {/* ===================== LEISTUNGEN ===================== */}
      <section className="container-px py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Leistungen"
            title="Alles für gesunde, schöne Zähne"
            intro="Von der Vorsorge bis zur Ästhetik – das gesamte Spektrum moderner Zahnmedizin unter einem Dach."
          />
          <Reveal delay={0.1}>
            <Link href="/leistungen" className="link-underline shrink-0">
              Alle Leistungen ansehen
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12">
          <ServicesGrid limit={6} />
        </div>
      </section>

      {/* ===================== ÜBER / PRAXIS ===================== */}
      <section className="bg-white">
        <div className="container-px grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=80"
                alt="Helle, moderne Zahnarztpraxis mit Behandlungsstuhl und beruhigender Atmosphäre"
                width={1100}
                height={820}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Unsere Praxis"
              title="Zahnmedizin, die sich gut anfühlt"
              intro="Bei uns stehen Sie als Mensch im Mittelpunkt – nicht nur Ihre Zähne. In ruhiger, einladender Atmosphäre nehmen wir uns die Zeit, die Sie verdienen."
            />
            <Stagger className="mt-8 space-y-5">
              {[
                {
                  icon: "scan" as const,
                  t: "Digitale Präzision",
                  d: "3D-Röntgen und digitale Abdrücke für punktgenaue, angenehme Behandlungen.",
                },
                {
                  icon: "shield" as const,
                  t: "Ehrliche Beratung",
                  d: "Transparente Kostenvoranschläge und nur Behandlungen, die wirklich sinnvoll sind.",
                },
                {
                  icon: "child" as const,
                  t: "Für die ganze Familie",
                  d: "Vom ersten Milchzahn bis zum Implantat – wir begleiten alle Generationen.",
                },
              ].map((f) => (
                <StaggerItem key={f.t} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{f.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <Link href="/team" className="btn-ghost mt-8">
                Lernen Sie unser Team kennen
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== ABLAUF ===================== */}
      <section className="container-px py-20">
        <SectionHeader
          center
          eyebrow="So läuft es ab"
          title="Ihr Weg zu uns – in vier Schritten"
          intro="Klar, transparent und ohne Überraschungen. So fühlen Sie sich von Anfang an gut aufgehoben."
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="card h-full">
                <span className="font-display text-3xl font-semibold text-teal-200">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="bg-white">
        <div className="container-px py-20">
          <SectionHeader
            center
            eyebrow="Bewertungen"
            title="Was unsere Patienten sagen"
            intro="Vertrauen entsteht durch Erfahrung – über 12.000 Behandlungen und unzählige zufriedene Lächeln."
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="container-px py-20">
        <SectionHeader
          center
          eyebrow="Häufige Fragen"
          title="Gut zu wissen"
        />
        <div className="mt-12">
          <FaqList />
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <div className="pb-8">
        <CtaBand />
      </div>
    </>
  );
}
