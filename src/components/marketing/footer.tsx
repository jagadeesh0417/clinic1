import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Mail, Phone, MapPin } from "lucide-react";

const COLS = [
  {
    title: "Platform",
    links: [
      ["Why Join KO Clinics", "/why-join"],
      ["AI Healthcare", "/ai-healthcare"],
      ["Partner Benefits", "/benefits"],
      ["Equipment Rental", "/equipment"],
      ["Membership", "/membership"],
    ],
  },
  {
    title: "Network",
    links: [
      ["Find a Clinic", "/clinics"],
      ["Doctor Network", "/doctors"],
      ["Services", "/services"],
      ["Products", "/products"],
      ["Home Healthcare", "/home-healthcare"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Leadership", "/leadership"],
      ["Global Presence", "/global-presence"],
      ["Careers", "/careers"],
      ["Blog", "/blog"],
    ],
  },
  {
    title: "Portals",
    links: [
      ["Partner Portal", "/partner"],
      ["Client Portal", "/portal"],
      ["Book Consultation", "/book"],
      ["Partner Registration", "/partner-registration"],
      ["Contact", "/contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-beige bg-ivory">
      <div className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-subtext">
              India's largest AI-powered clinic network. One network, thousands
              of clinics, unlimited growth.
            </p>
            <div className="mt-6 space-y-2.5 font-body text-sm text-subtext">
              <a href="mailto:info@koclinics.com" className="flex items-center gap-2.5 hover:text-gold-700">
                <Mail className="h-4 w-4 text-gold-500" /> info@koclinics.com
              </a>
              <a href="tel:+919148717036" className="flex items-center gap-2.5 hover:text-gold-700">
                <Phone className="h-4 w-4 text-gold-500" /> +91 91487 17036
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-gold-500" /> Koramangala, Bengaluru
              </div>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="eyebrow mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-body text-sm text-charcoal/70 transition-colors hover:text-gold-700"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-12 gold-rule" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-eyebrow text-[10px] uppercase tracking-luxe text-subtext">
            <span>India</span><span>Hong Kong</span><span>Dubai</span><span>Canada</span>
            <span className="text-gold-600">100+ Cities</span>
          </div>
          <p className="font-body text-xs text-subtext">
            © {new Date().getFullYear()} KO Clinics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
