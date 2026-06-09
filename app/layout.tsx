import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Zahnarzt in ${site.contact.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Moderne Zahnarztpraxis in Zürich: Prophylaxe, ästhetische Zahnmedizin, Implantate und unsichtbare Zahnkorrektur. Sanfte Behandlung, digitale Planung, jetzt Termin buchen.",
  keywords: [
    "Zahnarzt Zürich",
    "Zahnärztin Zürich",
    "Zahnarztpraxis",
    "Dentalhygiene",
    "Implantate",
    "Bleaching",
    "unsichtbare Zahnspange",
    "Kinderzahnarzt",
    "Zahnarzt Notfall Zürich",
  ],
  authors: [{ name: site.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: site.url,
    siteName: site.fullName,
    title: `${site.fullName} | Zahnarzt in ${site.contact.city}`,
    description:
      "Moderne Zahnmedizin mit Herz – Prophylaxe, Ästhetik, Implantate und mehr. Jetzt Termin in Zürich buchen.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Zahnarzt in ${site.contact.city}`,
    description:
      "Moderne Zahnmedizin mit Herz – Prophylaxe, Ästhetik, Implantate und mehr.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${site.url}/#praxis`,
    name: site.fullName,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "$$",
    image: `${site.url}/og.jpg`,
    description:
      "Moderne Zahnarztpraxis in Zürich für Prophylaxe, ästhetische Zahnmedizin, Implantologie und unsichtbare Zahnkorrektur.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.street,
      postalCode: site.contact.zip,
      addressLocality: site.contact.city,
      addressCountry: site.contact.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.geo.lat,
      longitude: site.contact.geo.lng,
    },
    openingHoursSpecification: [
      { days: ["Monday", "Tuesday", "Wednesday"], open: "08:00", close: "18:00" },
      { days: ["Thursday"], open: "08:00", close: "20:00" },
      { days: ["Friday"], open: "08:00", close: "16:00" },
    ].map((o) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: o.days,
      opens: o.open,
      closes: o.close,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "214",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
