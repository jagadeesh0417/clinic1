import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Find a Clinic" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Find a Clinic" title={<>Discover the <span class="text-gold-gradient">network</span></>} lead="Verified clinics across 100+ cities and four countries." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
