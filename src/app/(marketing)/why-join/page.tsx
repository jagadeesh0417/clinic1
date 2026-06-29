import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Why Join" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Why Join" title={<>Grow with <span class="text-gold-gradient">India's largest network</span></>} lead="Zero investment, qualified leads, national branding and AI healthcare — everything your clinic needs to scale." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
