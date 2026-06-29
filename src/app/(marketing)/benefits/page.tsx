import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Partner Benefits" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Partner Benefits" title={<>Benefits that <span class="text-gold-gradient">compound</span></>} lead="Patient acquisition, corporate tie-ups, insurance support, memberships and revenue growth." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
