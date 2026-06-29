import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Book Consultation" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Book Consultation" title={<>Book your <span class="text-gold-gradient">consultation</span></>} lead="In-clinic, teleconsult or home visit — care on your terms." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
