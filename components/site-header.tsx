"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // overHero = true, solange der Header über dem dunklen Cinematic-Hero liegt
  const [overHero, setOverHero] = useState(() => pathname === "/");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const sentinel = document.getElementById("hero-sentinel");
      setOverHero(!!sentinel && sentinel.getBoundingClientRect().top > 72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Dunkler (heller Text) Modus, solange über dem Hero und Menü geschlossen
  const dark = overHero && !open;

  const headerBg = open
    ? "bg-sand-50"
    : overHero
      ? "border-transparent bg-transparent"
      : scrolled
        ? "border-b border-ink/[0.06] bg-sand-50/85 backdrop-blur-md"
        : "border-b border-transparent bg-transparent";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container-px flex h-20 items-center justify-between py-3.5">
        <Link
          href="/"
          className={`flex items-center gap-2.5 ${dark ? "text-white" : "text-ink"}`}
          aria-label={`${site.fullName} – Startseite`}
        >
          <span className={dark ? "text-white" : "text-teal-600"}>
            <Logo className="h-9 w-9" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight">
              {site.name}
            </span>
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.22em] ${
                dark ? "text-white/70" : "text-ink-muted"
              }`}
            >
              Zahnärztinnen am See
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? dark
                      ? "bg-white/15 text-white"
                      : "bg-teal-600/10 text-teal-700"
                    : dark
                      ? "text-white/85 hover:bg-white/10 hover:text-white"
                      : "text-ink-soft hover:bg-ink/[0.04] hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.contact.phoneHref}`}
            className={`hidden text-sm font-semibold transition-colors lg:inline ${
              dark ? "text-white/90 hover:text-white" : "text-ink-soft hover:text-teal-700"
            }`}
          >
            {site.contact.phone}
          </a>
          <Link href="/kontakt" className="btn-primary hidden sm:inline-flex">
            Termin buchen
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={open}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${
              dark
                ? "border-white/30 bg-white/10 text-white"
                : "border-ink/10 bg-white/70 text-ink"
            }`}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/[0.06] bg-sand-50 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="container-px flex flex-col gap-1 py-4" aria-label="Mobile Navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-soft hover:bg-ink/[0.04]"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/kontakt" className="btn-primary mt-2">
            Termin buchen
          </Link>
        </nav>
      </div>
    </header>
  );
}
