"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { Menu, X, LogOut, type LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string; icon: LucideIcon };

export function DashboardShell({
  title,
  nav,
  children,
}: {
  title: string;
  nav: NavItem[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pearl lg:flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 -translate-x-full border-r border-beige bg-warmwhite transition-transform lg:static lg:translate-x-0",
          open && "translate-x-0",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-beige px-6 py-5">
            <Link href="/"><Logo /></Link>
            <button onClick={() => setOpen(false)} className="lg:hidden"><X className="h-5 w-5" /></button>
          </div>
          <div className="px-6 pb-2 pt-5">
            <div className="eyebrow">{title}</div>
          </div>
          <nav className="flex-1 space-y-1 overflow-y-auto px-4 pb-6">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-body text-sm transition-colors",
                    active
                      ? "bg-gold-gradient text-white shadow-luxe-sm"
                      : "text-charcoal/70 hover:bg-gold-50 hover:text-gold-700",
                  )}
                >
                  <item.icon className="h-4 w-4" strokeWidth={1.7} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-beige p-4">
            <Link
              href="/api/auth/signout"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-body text-sm text-charcoal/70 hover:bg-beige/60"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-beige bg-warmwhite px-5 py-4 lg:hidden">
          <Link href="/"><Logo /></Link>
          <button onClick={() => setOpen(true)}><Menu className="h-6 w-6" /></button>
        </header>
        <main className="flex-1 p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}

/* ── Reusable dashboard widgets ── */
export function StatCard({
  label, value, delta, icon: Icon,
}: {
  label: string; value: string; delta?: string; icon: LucideIcon;
}) {
  return (
    <div className="luxe-card p-6">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-50 text-gold-600">
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </div>
        {delta && (
          <span className="rounded-full bg-gold-50 px-2.5 py-1 font-body text-xs font-semibold text-gold-700">
            {delta}
          </span>
        )}
      </div>
      <div className="mt-5 font-display text-3xl text-charcoal">{value}</div>
      <div className="mt-1 font-body text-sm text-subtext">{label}</div>
    </div>
  );
}

export function Panel({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="luxe-card p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-lg text-charcoal">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}
