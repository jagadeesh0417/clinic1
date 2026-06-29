import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Doctor Network" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Doctor Network" title={<>A network of <span class="text-gold-gradient">specialists</span></>} lead="Dermatologists, surgeons, aesthetic physicians and visiting consultants." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
