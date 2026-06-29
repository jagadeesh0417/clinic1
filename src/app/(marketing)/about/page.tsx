import type { Metadata } from "next";
import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = { title: "About" };

const MISSION = [
  "Digitize independent healthcare practices",
  "Increase patient access",
  "Build India's largest AI-enabled clinic chain",
  "Support doctors with business growth",
  "Deliver affordable healthcare",
  "Build an international healthcare ecosystem",
];

export default function AboutPage() {
  return (
    <MarketingShell>
      <PageHeader
        eyebrow="About KO Clinics"
        title={<>Where aesthetics meets <span className="text-gold-gradient">excellence</span></>}
        lead="An AI-powered healthcare aggregator making quality care accessible while helping clinics grow revenue, visibility and efficiency."
      />
      <section className="section pt-4">
        <div className="container grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[30px] border border-beige bg-ivory p-10">
              <div className="eyebrow mb-3">Vision</div>
              <p className="font-serif text-2xl leading-snug text-charcoal/80">
                To become the world's largest integrated healthcare network —
                connecting clinics, hospitals, doctors and wellness centers
                through technology, innovation and patient trust.
              </p>
            </div>
          </Reveal>
          <Reveal delayIndex={1}>
            <div className="eyebrow mb-5">Mission</div>
            <ul className="space-y-4">
              {MISSION.map((m) => (
                <li key={m} className="flex items-start gap-3 border-b border-beige pb-4 font-body text-charcoal/80">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-gradient" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </MarketingShell>
  );
}
