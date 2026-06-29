import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Equipment Rental" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Equipment Rental" title={<>Premium equipment, <span class="text-gold-gradient">zero capex</span></>} lead="Rent lasers, HIFU, Hydrafacial and more — pay only for what you use." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
