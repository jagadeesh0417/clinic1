import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory-fade pt-40 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-champagne-glow" />
      <div className="container relative max-w-3xl text-center">
        <div className="eyebrow mb-4">{eyebrow}</div>
        <h1 className="font-display text-4xl leading-tight text-charcoal md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-subtext">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
