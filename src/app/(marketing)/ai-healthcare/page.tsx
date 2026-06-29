import type { Metadata } from "next";
import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
import { AIHealthcare } from "@/components/marketing/home-sections";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = { title: "AI Healthcare" };

const QSCAN = [
  "Vital parameters", "Body composition", "Health score", "Risk prediction",
  "Lifestyle analysis", "Preventive recommendations", "Digital reports", "AI consultation",
];

export default function AIHealthcarePage() {
  return (
    <MarketingShell>
      <PageHeader
        eyebrow="AI Healthcare"
        title={<>The intelligence layer for <span className="text-gold-gradient">modern clinics</span></>}
        lead="QScan AI Health ATM turns every partner clinic into a preventive, data-driven destination."
      />
      <section className="section pt-4">
        <div className="container">
          <Reveal>
            <div className="rounded-[30px] border border-beige bg-ivory p-10">
              <div className="eyebrow mb-2">QScan AI · Instant Health Check</div>
              <h2 className="font-display text-3xl text-charcoal">A complete screening in minutes</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {QSCAN.map((q) => (
                  <div key={q} className="rounded-2xl bg-warmwhite px-5 py-4 font-body text-sm text-charcoal/80 shadow-luxe-sm">
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <AIHealthcare />
    </MarketingShell>
  );
}
