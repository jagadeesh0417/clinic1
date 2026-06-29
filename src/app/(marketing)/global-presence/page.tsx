import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Global Presence" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Global Presence" title={<>Healthcare <span class="text-gold-gradient">without borders</span></>} lead="India, Hong Kong, Dubai and Canada — and expanding." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
