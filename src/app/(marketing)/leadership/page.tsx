import type { Metadata } from "next";
import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
import { Leadership } from "@/components/marketing/home-sections";

export const metadata: Metadata = { title: "Leadership" };

export default function LeadershipPage() {
  return (
    <MarketingShell>
      <PageHeader
        eyebrow="Leadership"
        title={<>Pioneers in <span className="text-gold-gradient">aesthetic healthcare</span></>}
        lead="Decades of clinical excellence and healthcare entrepreneurship behind every KO Clinics partnership."
      />
      <Leadership />
    </MarketingShell>
  );
}
