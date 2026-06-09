"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Manifest = {
  frameCount: number;
  indexBase: number;
  pad: number;
  frameUrlTemplate: string;
  poster: string;
};

export type Beat = {
  range: [number, number];
  headline: string;
  body?: string;
  cta?: { label: string; href: string };
};

const DEFAULT_BEATS: Beat[] = [
  {
    range: [0.0, 0.32],
    headline: "Ankommen. Durchatmen.",
    body: "Willkommen in Ihrer Wohlfühl-Praxis am See.",
  },
  {
    range: [0.34, 0.66],
    headline: "Präzision, die man spürt.",
    body: "Modernste Zahnmedizin – ruhig, sanft und auf den Punkt.",
  },
  {
    range: [0.68, 1.0],
    headline: "Ihr schönstes Lächeln beginnt hier.",
    body: "Lernen Sie unser Zahnärztinnen-Team kennen.",
    cta: { label: "Termin buchen", href: "/kontakt" },
  },
];

export function ScrollSequence({
  manifestUrl,
  beats = DEFAULT_BEATS,
}: {
  manifestUrl: string;
  beats?: Beat[];
}) {
  const reduce = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawn = useRef<number>(-1);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Manifest laden
  useEffect(() => {
    let alive = true;
    fetch(manifestUrl)
      .then((r) => r.json())
      .then((m: Manifest) => {
        if (alive) setManifest(m);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [manifestUrl]);

  // Frames vorladen
  useEffect(() => {
    if (!manifest) return;
    const { frameCount, indexBase, pad, frameUrlTemplate } = manifest;
    const imgs: HTMLImageElement[] = new Array(frameCount);
    for (let i = 0; i < frameCount; i++) {
      const idx = String(i + indexBase).padStart(pad, "0");
      const img = new Image();
      img.decoding = "async";
      img.src = frameUrlTemplate.replace("{index}", idx);
      imgs[i] = img;
    }
    imagesRef.current = imgs;
    // Erstes Frame zeichnen, sobald geladen
    if (imgs[0].complete) draw(0);
    else imgs[0].onload = () => draw(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest]);

  function resize() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    if (lastDrawn.current >= 0) drawImage(lastDrawn.current);
  }

  function drawImage(index: number) {
    const canvas = canvasRef.current;
    const imgs = imagesRef.current;
    if (!canvas || !imgs.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas-Backing-Store immer auf die aktuelle Anzeigegrösse bringen
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const wantW = Math.round(rect.width * dpr);
    const wantH = Math.round(rect.height * dpr);
    if (wantW > 0 && wantH > 0 && (canvas.width !== wantW || canvas.height !== wantH)) {
      canvas.width = wantW;
      canvas.height = wantH;
    }

    let img = imgs[index];
    // Falls Ziel-Frame noch nicht geladen: nächstgelegenes geladenes Frame zeigen
    if (!img || !img.complete || img.naturalWidth === 0) {
      let found: HTMLImageElement | null = null;
      for (let d = 1; d < imgs.length; d++) {
        const lo = imgs[index - d];
        const hi = imgs[index + d];
        if (lo && lo.complete && lo.naturalWidth) { found = lo; break; }
        if (hi && hi.complete && hi.naturalWidth) { found = hi; break; }
      }
      if (img && !img.complete) {
        img.onload = () => {
          if (lastDrawn.current === index) drawImage(index);
        };
      }
      if (!found) return;
      img = found;
    }

    const cw = canvas.width;
    const ch = canvas.height;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    lastDrawn.current = index;
  }

  function draw(index: number) {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawImage(index));
  }

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest]);

  // Scroll → Frame
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!manifest || reduce) return;
    const clamped = Math.min(1, Math.max(0, p));
    const frame = Math.round(clamped * (manifest.frameCount - 1));
    if (frame !== lastDrawn.current) draw(frame);
  });

  // ---------- Reduced Motion: statisches Posterbild ----------
  if (reduce) {
    return (
      <section className="relative -mt-20 h-[70vh] min-h-[420px] w-full overflow-hidden bg-ink">
        {manifest && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={manifest.poster}
            alt="Zahnärztin in einer hellen, modernen Praxis"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="container-px absolute inset-x-0 bottom-12">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {beats[beats.length - 1].headline}
          </h2>
          <p className="mt-2 max-w-md text-white/80">
            {beats[beats.length - 1].body}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={wrapperRef}
      aria-label="Cinematische Bildsequenz der Praxis"
      // -mt-20 hebt die Sektion um die Höhe des (Platz reservierenden) sticky Headers
      // an, damit das gepinnte Canvas sofort bei top:0 sitzt und beim ersten Scroll nicht springt.
      className="relative -mt-20 h-[320vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        {/* Scrims für Lesbarkeit */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-ink/25" />
        {/* Top-Scrim sichert die Lesbarkeit des hellen Headers */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/55 to-transparent" />

        {/* Text-Beats */}
        <div className="container-px absolute inset-0 flex items-end pb-[12vh] sm:items-center sm:pb-0">
          <div className="relative w-full max-w-xl">
            {beats.map((b, i) => (
              <BeatText key={i} beat={b} progress={scrollYProgress} />
            ))}
          </div>
        </div>

        {/* Scroll-Hinweis */}
        <ScrollHint progress={scrollYProgress} />
      </div>
    </section>
  );
}

function BeatText({
  beat,
  progress,
}: {
  beat: Beat;
  progress: MotionValue<number>;
}) {
  const [start, end] = beat.range;
  const fadeIn = Math.min(start + 0.06, end);
  const fadeOutStart = Math.max(end - 0.06, start);
  // Erster Beat (start = 0) ist sofort sichtbar – ohne Einblende-Verzögerung
  const fromStart = start <= 0;
  const opacity = useTransform(
    progress,
    fromStart ? [start, fadeOutStart, end] : [start, fadeIn, fadeOutStart, end],
    fromStart ? [1, 1, 0] : [0, 1, 1, 0],
  );
  const y = useTransform(progress, [start, fadeIn], fromStart ? [0, 0] : [28, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 bottom-0"
    >
      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
        {beat.headline}
      </h2>
      {beat.body && (
        <p className="mt-4 max-w-md text-lg text-white/85">{beat.body}</p>
      )}
      {beat.cta && (
        <Link href={beat.cta.href} className="btn-light mt-7">
          {beat.cta.label}
        </Link>
      )}
    </motion.div>
  );
}

function ScrollHint({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.08], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 text-white/70"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.2em]">
          Scrollen
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-white/80"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </motion.div>
  );
}
