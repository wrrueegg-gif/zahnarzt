import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import { Logo } from "./icons";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink/[0.08] bg-ink text-sand-100">
      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="text-teal-300">
              <Logo className="h-9 w-9" />
            </span>
            <span className="font-display text-xl font-semibold text-white">
              {site.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-100/70">
            {site.claim} Moderne Zahnmedizin mit Herz – mitten in {site.contact.city}.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sand-100/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            Leistungen
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href="/leistungen"
                  className="text-sand-100/75 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            Kontakt
          </h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-sand-100/75">
            <p>
              {site.contact.street}
              <br />
              {site.contact.zip} {site.contact.city}
            </p>
            <p>
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="transition-colors hover:text-white"
              >
                {site.contact.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-white"
              >
                {site.contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand-100/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="transition-colors hover:text-white">
              Impressum
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
