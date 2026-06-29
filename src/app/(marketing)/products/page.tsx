import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Products" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Products" title={<>Professional <span class="text-gold-gradient">cosmeceuticals</span></>} lead="Medical-grade products at exclusive partner pricing." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
