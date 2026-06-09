import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeader, ServicesGrid, CtaBand } from "@/components/blocks";
import { Icon } from "@/components/icons";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen – Zahnmedizin von Vorsorge bis Implantat",
  description:
    "Unser Leistungsspektrum: Prophylaxe & Dentalhygiene, ästhetische Zahnmedizin, Implantologie, unsichtbare Zahnkorrektur, Kinderzahnmedizin und Notfallbehandlung in Zürich.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-grid">
        <div className="container-px py-16 lg:py-20">
          <SectionHeader
            eyebrow="Leistungen"
            title="Das gesamte Spektrum moderner Zahnmedizin"
            intro="Hochwertige Behandlungen mit modernster Technik – immer abgestimmt auf Ihre individuellen Bedürfnisse."
          />
        </div>
      </section>

      <section className="container-px py-12">
        <ServicesGrid />
      </section>

      {/* Detailbereiche je Leistung */}
      <section className="bg-white">
        <div className="container-px space-y-16 py-20">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="article">
              <div
                id={s.slug}
                className="grid items-center gap-8 scroll-mt-28 lg:grid-cols-[auto_1fr] lg:gap-12"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-teal-50 text-teal-600">
                  <Icon name={s.icon} className="h-9 w-9" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-teal-600">
                    0{i + 1}
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">
                    {s.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-teal-600/15 bg-teal-50/60 px-4 py-1.5 text-sm font-medium text-teal-700"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px py-16">
        <Stagger className="grid gap-6 rounded-[2rem] border border-ink/[0.06] bg-sand-100 p-8 sm:grid-cols-3 sm:p-12">
          {[
            { t: "Transparente Preise", d: "Vorab klarer Kostenvoranschlag – ohne versteckte Kosten." },
            { t: "Modernste Technik", d: "Digitale Diagnostik für präzise, schonende Behandlungen." },
            { t: "Zeit für Sie", d: "Wir planen grosszügig, damit nichts unter Zeitdruck passiert." },
          ].map((b) => (
            <StaggerItem key={b.t}>
              <h3 className="font-display text-lg font-semibold text-ink">{b.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="pb-8">
        <CtaBand />
      </div>
    </>
  );
}
