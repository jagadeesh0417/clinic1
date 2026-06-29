"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const METRICS = [
  { value: "100+", label: "Cities" },
  { value: "4", label: "Countries" },
  { value: "20+", label: "Years Experience" },
  { value: "1000s", label: "of Clinics" },
];

// Deterministic node positions for the "network" signature motif
const NODES = [
  { x: 12, y: 22 }, { x: 28, y: 12 }, { x: 46, y: 26 }, { x: 64, y: 14 },
  { x: 82, y: 28 }, { x: 92, y: 50 }, { x: 78, y: 68 }, { x: 58, y: 78 },
  { x: 38, y: 70 }, { x: 18, y: 58 }, { x: 50, y: 48 }, { x: 70, y: 44 },
];
const LINKS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8],
  [8, 9], [9, 0], [10, 2], [10, 8], [10, 11], [11, 3], [11, 6], [10, 0],
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ivory-fade pt-36 pb-24 md:pt-44 md:pb-32">
      {/* ambient champagne glow */}
      <div className="pointer-events-none absolute inset-0 bg-champagne-glow" />

      {/* signature: gold clinic-network constellation */}
      <svg
        className="pointer-events-none absolute right-0 top-20 hidden h-[520px] w-[620px] opacity-[0.55] lg:block"
        viewBox="0 0 100 90"
        fill="none"
        aria-hidden
      >
        {LINKS.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="url(#goldline)"
            strokeWidth="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.3 + i * 0.06, ease: "easeInOut" }}
          />
        ))}
        {NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === 10 ? "1.4" : "0.8"}
            fill={i === 10 ? "#B58B3A" : "#D6B46A"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
            className="animate-float"
            style={{ transformOrigin: "center", animationDelay: `${i * 0.4}s` }}
          />
        ))}
        <defs>
          <linearGradient id="goldline" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B58B3A" />
            <stop offset="100%" stopColor="#D6B46A" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-200 bg-warmwhite/70 px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-gradient" />
            <span className="font-eyebrow text-[10px] uppercase tracking-luxe text-gold-700">
              India's Largest Clinic Chain Network
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-charcoal sm:text-6xl md:text-[4.25rem]">
            India's Largest{" "}
            <span className="text-gold-gradient">AI-Powered</span>
            <br />
            Clinic Network
          </h1>

          <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-charcoal/70 md:text-[1.75rem]">
            One Network. Thousands of Clinics. Unlimited Growth.
          </p>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-subtext">
            KO Clinics connects hospitals, aesthetic clinics, dermatology and
            wellness centers, diagnostics and specialist doctors under one
            trusted national ecosystem — the OYO model, reimagined for
            healthcare.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/partner-registration">
                Become a Partner <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/clinics">Find a Clinic</Link>
            </Button>
            <Link
              href="/book"
              className="group inline-flex items-center gap-2.5 pl-2 font-sans text-sm font-medium text-charcoal/70 hover:text-gold-700"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-300/60 transition-colors group-hover:bg-gold-50">
                <Play className="h-4 w-4 fill-gold-600 text-gold-600" />
              </span>
              Watch overview
            </Link>
          </div>
        </motion.div>

        {/* Metric band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-beige bg-beige md:grid-cols-4"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="bg-warmwhite px-6 py-7 text-center">
              <div className="font-display text-3xl text-gold-gradient md:text-4xl">
                {m.value}
              </div>
              <div className="mt-1 font-eyebrow text-[10px] uppercase tracking-luxe text-subtext">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
