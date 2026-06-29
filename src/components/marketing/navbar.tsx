"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MEGA = {
  Platform: [
    { label: "Why Join KO Clinics", href: "/why-join", desc: "The partnership model" },
    { label: "AI Healthcare", href: "/ai-healthcare", desc: "QScan & Health ATM" },
    { label: "Partner Benefits", href: "/benefits", desc: "Leads, branding, growth" },
    { label: "Equipment Rental", href: "/equipment", desc: "Lower your capex" },
  ],
  Network: [
    { label: "Find a Clinic", href: "/clinics", desc: "Discover the network" },
    { label: "Doctor Network", href: "/doctors", desc: "Specialists & visiting consultants" },
    { label: "Services", href: "/services", desc: "Derma, hair, anti-ageing, wellness" },
    { label: "Products", href: "/products", desc: "Cosmeceuticals & wholesale" },
  ],
  Company: [
    { label: "About KO Clinics", href: "/about", desc: "Our story & mission" },
    { label: "Leadership", href: "/leadership", desc: "The visionaries" },
    { label: "Global Presence", href: "/global-presence", desc: "India · HK · Dubai · Canada" },
    { label: "Careers", href: "/careers", desc: "Build with us" },
  ],
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-gold-200/40 py-3"
          : "bg-transparent py-5",
      )}
      onMouseLeave={() => setActive(null)}
    >
      <nav className="container flex items-center justify-between">
        <Link href="/" aria-label="KO Clinics home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {Object.keys(MEGA).map((key) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setActive(key)}
            >
              <button className="flex items-center gap-1 px-4 py-2 font-sans text-sm font-medium text-charcoal/80 transition-colors hover:text-gold-700">
                {key}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>
            </div>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 font-sans text-sm font-medium text-charcoal/80 transition-colors hover:text-gold-700"
          >
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="font-sans text-sm font-medium text-charcoal/70 hover:text-gold-700"
          >
            Sign in
          </Link>
          <Button asChild size="sm">
            <Link href="/partner-registration">Become a Partner</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-full text-charcoal lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mega menu panel */}
      {active && (
        <div
          className="absolute inset-x-0 top-full hidden lg:block"
          onMouseEnter={() => setActive(active)}
        >
          <div className="container pt-2">
            <div className="glass rounded-[24px] p-6 shadow-luxe">
              <div className="grid grid-cols-2 gap-2">
                {MEGA[active as keyof typeof MEGA].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActive(null)}
                    className="group rounded-2xl p-4 transition-colors hover:bg-gold-50"
                  >
                    <div className="font-sans text-sm font-semibold text-charcoal group-hover:text-gold-700">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-xs text-subtext">{item.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-gold-200/40 bg-warmwhite lg:hidden">
          <div className="container space-y-4 py-6">
            {Object.entries(MEGA).map(([group, items]) => (
              <div key={group}>
                <div className="eyebrow mb-2">{group}</div>
                <div className="space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 font-sans text-sm text-charcoal/80"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="gold-rule" />
            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link href="/partner-registration">Become a Partner</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/login">Sign in</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
