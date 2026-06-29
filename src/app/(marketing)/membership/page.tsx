import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Membership" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Membership" title={<>Plans built for <span class="text-gold-gradient">growth</span></>} lead="Growth, Pro and Enterprise tiers with leads, marketing and AI access." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
