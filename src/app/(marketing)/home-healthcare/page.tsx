import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Home Healthcare" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Home Healthcare" title={<>Care that comes <span class="text-gold-gradient">to you</span></>} lead="Home doctor visits, nursing, IV therapy, physiotherapy and diagnostics." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
