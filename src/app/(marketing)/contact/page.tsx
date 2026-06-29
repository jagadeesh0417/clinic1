import type { Metadata } from "next";
import { MarketingShell, PageHeader } from "@/components/marketing/page-shell";
import { ContactForm } from "@/components/marketing/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <MarketingShell>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="text-gold-gradient">talk</span></>}
        lead="Whether you're a clinic, a doctor or a patient — we'd love to hear from you."
      />
      <section className="section pt-4">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "info@koclinics.com", href: "mailto:info@koclinics.com" },
              { icon: Phone, label: "WhatsApp", value: "+91 91487 17036", href: "tel:+919148717036" },
              { icon: MapPin, label: "India HQ", value: "Koramangala, Bengaluru", href: undefined },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-[24px] border border-beige bg-ivory p-6">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-50 text-gold-600">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="eyebrow">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="font-display text-lg text-charcoal hover:text-gold-700">{c.value}</a>
                  ) : (
                    <div className="font-display text-lg text-charcoal">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </MarketingShell>
  );
}
