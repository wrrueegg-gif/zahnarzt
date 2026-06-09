"use client";

import { useState } from "react";
import { services } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo: keine echte Übermittlung – hier würde die Anbindung an
    // E-Mail/CRM erfolgen. Für die Mockup-Präsentation reicht der Erfolgs-State.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-teal-600/20 bg-teal-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Wir melden uns schnellstmöglich bei Ihnen, um einen Termin zu vereinbaren.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Vorname" name="vorname" required />
        <Field label="Nachname" name="nachname" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="E-Mail" name="email" type="email" required />
        <Field label="Telefon" name="telefon" type="tel" />
      </div>

      <div>
        <label htmlFor="anliegen" className="mb-1.5 block text-sm font-medium text-ink">
          Anliegen
        </label>
        <select
          id="anliegen"
          name="anliegen"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors focus:border-teal-500"
          defaultValue=""
        >
          <option value="" disabled>
            Bitte auswählen …
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="sonstiges">Allgemeine Anfrage</option>
        </select>
      </div>

      <div>
        <label htmlFor="nachricht" className="mb-1.5 block text-sm font-medium text-ink">
          Ihre Nachricht
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors focus:border-teal-500"
          placeholder="Wie können wir Ihnen helfen?"
        />
      </div>

      <label className="flex items-start gap-2.5 text-sm text-ink-soft">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-ink/25 text-teal-600 focus:ring-teal-500"
        />
        <span>
          Ich bin mit der Verarbeitung meiner Daten gemäss Datenschutzerklärung
          einverstanden.
        </span>
      </label>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Anfrage senden
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-teal-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors focus:border-teal-500"
      />
    </div>
  );
}
