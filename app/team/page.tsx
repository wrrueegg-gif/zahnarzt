import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeader, StatsBar, CtaBand } from "@/components/blocks";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Praxis & Team – Ihre Zahnärzte in Zürich",
  description:
    "Lernen Sie das Team von Lumident kennen: erfahrene Zahnärztinnen und Dentalhygienikerinnen, die sich Zeit für Sie nehmen. Eine Praxis von Frauen für die ganze Familie – persönlich, herzlich, kompetent.",
  alternates: { canonical: "/team" },
};

const values = [
  { t: "Empathie", d: "Wir hören zu und behandeln Sie so, wie wir selbst behandelt werden möchten." },
  { t: "Kompetenz", d: "Kontinuierliche Weiterbildung und modernste Verfahren auf dem neuesten Stand." },
  { t: "Ehrlichkeit", d: "Klare Empfehlungen, transparente Kosten und keine unnötigen Behandlungen." },
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-grid">
        <div className="container-px py-16 lg:py-20">
          <SectionHeader
            eyebrow="Praxis & Team"
            title="Frauen, die für Ihr Lächeln brennen"
            intro="Hinter jeder guten Behandlung steht ein eingespieltes Team. Bei uns erwartet Sie ein reines Zahnärztinnen-Team – Fachkompetenz mit einer grossen Portion Herzlichkeit."
          />
        </div>
      </section>

      <section className="container-px py-6">
        <StatsBar />
      </section>

      <section className="container-px py-20">
        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={m.image}
                    alt={`Porträt von ${m.name}, ${m.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-ink">
                  {m.name}
                </h2>
                <p className="text-sm font-medium text-teal-600">{m.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-white">
        <div className="container-px py-20">
          <SectionHeader
            center
            eyebrow="Unsere Werte"
            title="Wofür wir jeden Tag stehen"
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.t}>
                <div className="card h-full text-center">
                  <h3 className="font-display text-xl font-semibold text-ink">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-px py-16">
        <Reveal className="overflow-hidden rounded-[2rem] shadow-lift">
          <Image
            src="/images/team-gruppe.png"
            alt="Das Zahnärztinnen-Team von Lumident in der hellen, modernen Praxis"
            width={1376}
            height={768}
            className="h-full w-full object-cover"
            sizes="100vw"
          />
        </Reveal>
      </section>

      <div className="pb-8">
        <CtaBand />
      </div>
    </>
  );
}
