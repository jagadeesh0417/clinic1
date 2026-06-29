import type { Metadata } from "next";
import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
import { Services } from "@/components/marketing/home-sections";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <MarketingShell>
      <PageHeader
        eyebrow="Services"
        title={<>Care across <span className="text-gold-gradient">every speciality</span></>}
        lead="Dermatology, hair, anti-ageing, slimming, wellness and AI diagnostics — delivered to international protocols."
      />
      <Services />
    </MarketingShell>
  );
}
