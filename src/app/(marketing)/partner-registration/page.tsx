import type { Metadata } from "next";
import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
import { RegistrationForm } from "@/components/marketing/registration-form";

export const metadata: Metadata = {
  title: "Partner Registration",
  description:
    "Register your clinic with KO Clinics. Zero investment, AI healthcare, national marketing and patient leads.",
};

const PERKS = [
  "Qualified patient leads & walk-ins",
  "National brand recognition",
  "AI Healthcare platform (QScan)",
  "Marketing, SEO & social media",
  "Staffing & training support",
  "Wholesale product pricing",
];

export default function PartnerRegistrationPage() {
  return (
    <MarketingShell>
      <PageHeader
        eyebrow="Join the Network"
        title={<>Become a <span className="text-gold-gradient">KO Clinics</span> Partner</>}
        lead="Zero investment. Maximum returns. Tell us about your clinic and our onboarding team takes it from there."
      />
      <section className="section pt-4">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="eyebrow mb-4">What you get</div>
            <ul className="space-y-4">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3 font-body text-charcoal/80">
                  <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-gradient text-[10px] text-white">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[24px] border border-beige bg-ivory p-6">
              <div className="font-body text-sm text-subtext">Prefer to talk first?</div>
              <a href="mailto:register@koclinics.com" className="mt-1 block font-display text-lg text-gold-700">register@koclinics.com</a>
              <a href="tel:+919148717036" className="font-display text-lg text-gold-700">+91 91487 17036</a>
            </div>
          </div>
          <RegistrationForm />
        </div>
      </section>
    </MarketingShell>
  );
}
