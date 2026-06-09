import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/blocks";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Termin – Zahnarztpraxis in Zürich",
  description:
    "Vereinbaren Sie Ihren Termin bei Lumident in Zürich. Adresse, Öffnungszeiten, Telefon und Kontaktformular – wir freuen uns auf Sie. Notfalltermine am selben Tag.",
  alternates: { canonical: "/kontakt" },
};

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
  site.contact.geo.lng - 0.01
}%2C${site.contact.geo.lat - 0.006}%2C${site.contact.geo.lng + 0.01}%2C${
  site.contact.geo.lat + 0.006
}&layer=mapnik&marker=${site.contact.geo.lat}%2C${site.contact.geo.lng}`;

export default function KontaktPage() {
  return (
    <>
      <section className="bg-grid">
        <div className="container-px py-16 lg:py-20">
          <SectionHeader
            eyebrow="Kontakt"
            title="Vereinbaren Sie Ihren Termin"
            intro="Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnellstmöglich bei Ihnen. Bei akuten Schmerzen erhalten Sie in der Regel noch am selben Tag einen Termin."
          />
        </div>
      </section>

      <section className="container-px grid gap-12 py-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Kontaktinfos */}
        <Reveal className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard icon="emergency" title="Telefon" >
              <a href={`tel:${site.contact.phoneHref}`} className="link-underline">
                {site.contact.phone}
              </a>
            </InfoCard>
            <InfoCard icon="sparkle" title="E-Mail">
              <a href={`mailto:${site.contact.email}`} className="link-underline break-all">
                {site.contact.email}
              </a>
            </InfoCard>
            <InfoCard icon="shield" title="Adresse">
              <span className="text-ink-soft">
                {site.contact.street}
                <br />
                {site.contact.zip} {site.contact.city}
              </span>
            </InfoCard>
            <InfoCard icon="scan" title="Anfahrt">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  site.contact.mapQuery,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Route planen
              </a>
            </InfoCard>
          </div>

          {/* Öffnungszeiten */}
          <div className="card">
            <h3 className="font-display text-lg font-semibold text-ink">Öffnungszeiten</h3>
            <dl className="mt-4 divide-y divide-ink/[0.06]">
              {site.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                  <dt className="font-medium text-ink-soft">{h.day}</dt>
                  <dd className="text-ink-muted">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Karte */}
          <div className="overflow-hidden rounded-3xl border border-ink/[0.06] shadow-soft">
            <iframe
              title={`Standort ${site.fullName}`}
              src={mapSrc}
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Formular */}
        <Reveal delay={0.1}>
          <div className="card sm:p-9">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Termin anfragen
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Füllen Sie das Formular aus – wir kümmern uns um den Rest.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: Parameters<typeof Icon>[0]["name"];
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card p-5">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-ink-muted">
        {title}
      </h3>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}
