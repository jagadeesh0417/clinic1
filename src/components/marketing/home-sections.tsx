"use client";
import Link from "next/link";
import {
  Sparkles, ShieldCheck, TrendingUp, Users, Boxes, GraduationCap,
  Stethoscope, Activity, Brain, HeartPulse, Globe2, ArrowRight,
  ScanLine, BadgePercent, Building2,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

/* ── Section heading helper ── */
function Heading({
  eyebrow, title, lead, center = true,
}: { eyebrow: string; title: React.ReactNode; lead?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="eyebrow mb-4">{eyebrow}</div>
      <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 font-body text-base leading-relaxed text-subtext">
          {lead}
        </p>
      )}
    </div>
  );
}

/* ════════════════ WHY JOIN — partner value props ════════════════ */
const VALUES = [
  { icon: ShieldCheck, title: "Zero Investment, Maximum Returns", body: "Start with minimal investment and unlock national growth opportunities." },
  { icon: TrendingUp, title: "Backed by 20+ Years", body: "Partner with industry pioneers in aesthetics and regenerative medicine." },
  { icon: Sparkles, title: "End-to-End Business Support", body: "Lead generation, sales, branding, marketing and operations — handled." },
  { icon: Users, title: "Staffing Assistance", body: "Doctors, nurses, therapists, managers and receptionists on demand." },
  { icon: Boxes, title: "Easy Product Procurement", body: "Professional products at exclusive partner pricing and discounts." },
  { icon: GraduationCap, title: "Professional Training", body: "Certification, clinical education and hands-on workshops." },
];

export function WhyJoin() {
  return (
    <section className="section bg-warmwhite">
      <div className="container">
        <Reveal>
          <Heading
            eyebrow="Why Join KO Clinics"
            title={<>A partnership built on <span className="text-gold-gradient">shared success</span></>}
            lead="India's fastest-growing healthcare aggregator. Grow with a brand that supports you at every step."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delayIndex={i}>
              <div className="luxe-card h-full p-8">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-50 text-gold-600">
                  <v.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl text-charcoal">{v.title}</h3>
                <p className="mt-2.5 font-body text-sm leading-relaxed text-subtext">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {/* perk strip */}
        <Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-beige bg-beige sm:grid-cols-2">
            <div className="flex items-center gap-4 bg-ivory px-7 py-6">
              <BadgePercent className="h-7 w-7 text-gold-600" strokeWidth={1.5} />
              <div>
                <div className="font-display text-lg text-charcoal">30% off Homecare Products</div>
                <div className="text-sm text-subtext">Exclusive partner pricing</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-ivory px-7 py-6">
              <TrendingUp className="h-7 w-7 text-gold-600" strokeWidth={1.5} />
              <div>
                <div className="font-display text-lg text-charcoal">20% Referral Bonus</div>
                <div className="text-sm text-subtext">Earn incentives on every referral</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════ AI HEALTHCARE ════════════════ */
const AI = [
  { icon: ScanLine, title: "QScan AI Health ATM", body: "Instant health check — vitals, body composition and a health score in minutes." },
  { icon: Brain, title: "Risk Prediction", body: "Preventive analysis and lifestyle assessment powered by AI." },
  { icon: Activity, title: "Digital Reports", body: "Shareable health reports and EMR for every patient encounter." },
  { icon: HeartPulse, title: "Smart Patient Management", body: "Telemedicine, AI consultation and online screening, end to end." },
];

export function AIHealthcare() {
  return (
    <section className="section relative overflow-hidden bg-charcoal text-ivory">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-champagne/10 blur-3xl" />
      <div className="container relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="font-eyebrow mb-4 text-xs uppercase tracking-luxe text-champagne">
              AI Healthcare
            </div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              India's First <span className="text-gold-gradient">AI Clinic Network</span>
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-ivory/60">
              Technology that turns every partner clinic into a preventive,
              data-driven healthcare destination.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {AI.map((a, i) => (
            <Reveal key={a.title} delayIndex={i}>
              <div className="h-full rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-champagne/40">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-white">
                  <a.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-lg">{a.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ivory/55">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-champagne/50 text-champagne hover:bg-white/5">
              <Link href="/ai-healthcare">Explore AI Healthcare <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════ SERVICES ════════════════ */
const SERVICES = [
  { icon: Sparkles, name: "Dermatology", items: "Acne · Pigmentation · Laser · Hydrafacial · Peels" },
  { icon: Activity, name: "Hair", items: "Transplant · PRP · GFC · Exosomes · Hair Analysis" },
  { icon: HeartPulse, name: "Anti-Ageing", items: "Botox · Fillers · Threads · Bio-Regenerative Medicine" },
  { icon: TrendingUp, name: "Slimming", items: "Body Contouring · Fat Reduction · Weight Management" },
  { icon: Stethoscope, name: "Wellness", items: "Longevity · Preventive Care · Lifestyle Medicine" },
  { icon: Brain, name: "Diagnostics", items: "AI Screening · Health Score · Risk Prediction" },
];

export function Services() {
  return (
    <section className="section bg-ivory">
      <div className="container">
        <Reveal>
          <Heading
            eyebrow="Services"
            title={<>Where aesthetics meets <span className="text-gold-gradient">excellence</span></>}
            lead="Internationally approved protocols delivered across the KO Clinics network."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delayIndex={i}>
              <Link href="/services" className="luxe-card group flex h-full flex-col p-8">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-50 text-gold-600">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gold-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-charcoal">{s.name}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-subtext">{s.items}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════ REGISTRATION STEPS (real sequence → numbered) ════════════════ */
const STEPS = [
  "Fill Registration Form", "Upload Clinic Details", "Business Evaluation",
  "Site Inspection", "Partnership Proposal", "Agreement Signing",
  "Brand Onboarding", "Digital Integration", "Receive Patient Leads",
];

export function Steps() {
  return (
    <section className="section bg-warmwhite">
      <div className="container">
        <Reveal>
          <Heading
            eyebrow="How to Join"
            title={<>Nine steps to <span className="text-gold-gradient">growth</span></>}
            lead="A clear, guided onboarding journey — from first form to your first leads."
          />
        </Reveal>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {STEPS.map((label, i) => (
            <Reveal key={label} delayIndex={i % 3}>
              <div className="flex items-start gap-5 rounded-[24px] border border-beige bg-ivory p-6">
                <span className="font-display text-3xl leading-none text-gold-gradient">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <div className="font-sans text-sm font-semibold text-charcoal">{label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════ LEADERSHIP ════════════════ */
const LEADERS = [
  {
    name: "Dr Vikas Singh", role: "Co-Founder",
    tags: ["Celebrity Hair Transplant Surgeon", "Cosmetic Dermatologist", "20+ Years Experience", "Regenerative Medicine"],
    brands: "Founder — Bodyline · Ree Age · Kosmedixx · May Center",
    initials: "VS",
  },
  {
    name: "Geeta Paul", role: "Co-Founder",
    tags: ["Healthcare Entrepreneur", "Business Strategist", "35+ Years Experience", "Network Expansion"],
    brands: "VLCC · Vibes · Sculpt Clinic",
    initials: "GP",
  },
];

export function Leadership() {
  return (
    <section className="section bg-ivory">
      <div className="container">
        <Reveal>
          <Heading
            eyebrow="Leadership"
            title={<>The visionaries behind <span className="text-gold-gradient">KO Clinics</span></>}
          />
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {LEADERS.map((l, i) => (
            <Reveal key={l.name} delayIndex={i}>
              <div className="luxe-card h-full p-8">
                <div className="flex items-center gap-5">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-gold-gradient font-display text-2xl text-white shadow-gold">
                    {l.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-charcoal">{l.name}</h3>
                    <div className="font-eyebrow text-[10px] uppercase tracking-luxe text-gold-600">{l.role}</div>
                  </div>
                </div>
                <div className="my-6 gold-rule" />
                <div className="flex flex-wrap gap-2">
                  {l.tags.map((t) => (
                    <span key={t} className="rounded-full bg-gold-50 px-3 py-1 font-body text-xs text-gold-700">{t}</span>
                  ))}
                </div>
                <p className="mt-5 font-body text-sm text-subtext">{l.brands}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════ GLOBAL PRESENCE ════════════════ */
const LOCATIONS = [
  { city: "Bengaluru", note: "India HQ · Koramangala" },
  { city: "Hong Kong", note: "Tuen Mun Centre" },
  { city: "Dubai", note: "Middle East" },
  { city: "Canada", note: "North America" },
];

export function GlobalPresence() {
  return (
    <section className="section relative overflow-hidden bg-charcoal text-ivory">
      <Globe2 className="pointer-events-none absolute -right-20 top-1/2 h-[480px] w-[480px] -translate-y-1/2 text-white/[0.03]" strokeWidth={0.5} />
      <div className="container relative">
        <Reveal>
          <div className="max-w-2xl">
            <div className="font-eyebrow mb-4 text-xs uppercase tracking-luxe text-champagne">Global Presence</div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              A healthcare ecosystem <span className="text-gold-gradient">without borders</span>
            </h2>
            <p className="mt-5 font-body text-base text-ivory/60">
              Expanding across Asia, the Middle East, Europe and North America.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.city} delayIndex={i}>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7">
                <Globe2 className="h-6 w-6 text-champagne" strokeWidth={1.4} />
                <div className="mt-4 font-display text-2xl">{loc.city}</div>
                <div className="mt-1 font-body text-sm text-ivory/50">{loc.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════ FINAL CTA ════════════════ */
export function FinalCTA() {
  return (
    <section className="section bg-warmwhite">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-gold-gradient px-8 py-20 text-center shadow-luxe md:px-16">
            <Building2 className="pointer-events-none absolute -left-8 -top-8 h-48 w-48 text-white/10" strokeWidth={0.6} />
            <Building2 className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 text-white/10" strokeWidth={0.6} />
            <h2 className="relative font-display text-4xl leading-tight text-white md:text-6xl">
              Ready to grow your clinic?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl font-serif text-xl text-white/90">
              Become a KO Clinics partner today. Zero investment. AI platform.
              National marketing. Unlimited growth.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild variant="dark" size="lg">
                <Link href="/partner-registration">
                  Start Your Growth Journey <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-gold-700 shadow-luxe hover:bg-white/90">
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
            <p className="relative mx-auto mt-8 max-w-lg font-body text-xs text-white/70">
              Returns depend on market conditions, clinic performance and
              implementation of the KO Clinics partnership program.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
