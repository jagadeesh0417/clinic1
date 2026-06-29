import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
export const metadata = { title: "Careers" };
export default function Page() {
  return (
    <MarketingShell>
      <PageHeader eyebrow="Careers" title={<>Build the future of <span class="text-gold-gradient">healthcare</span></>} lead="Join a team redefining how clinics grow." />
      <section className="section pt-4"><div className="container">
        <div className="luxe-card mx-auto max-w-2xl p-10 text-center">
          <p className="font-body text-subtext">This section is part of the KO Clinics platform and is ready for content via the CMS.</p>
        </div>
      </div></section>
    </MarketingShell>
  );
}
