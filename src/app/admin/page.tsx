import { StatCard, Panel } from "@/components/portal/dashboard-shell";
import { Building2, BadgeCheck, Users, CreditCard } from "lucide-react";

// In production these come from prisma aggregate queries.
const STATS = [
  { label: "Active Clinics", value: "1,284", delta: "+6.2%", icon: Building2 },
  { label: "Pending Partners", value: "37", delta: "+12", icon: BadgeCheck },
  { label: "Patients (30d)", value: "48,910", delta: "+9.1%", icon: Users },
  { label: "Revenue (30d)", value: "₹1.92 Cr", delta: "+14%", icon: CreditCard },
];

const PIPELINE = [
  ["Radiance Skin & Hair", "Bengaluru", "Site Inspection"],
  ["GlowMed Aesthetics", "Mumbai", "Under Review"],
  ["Derma Luxe", "Hyderabad", "Proposal"],
  ["Vitalis Wellness", "Pune", "Agreement"],
];

export default function AdminOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl text-charcoal">Network Overview</h1>
        <p className="mt-1 font-body text-sm text-subtext">Super Admin · All regions</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Panel title="Partner Onboarding Pipeline">
            <div className="overflow-hidden rounded-2xl border border-beige">
              <table className="w-full text-left text-sm">
                <thead className="bg-ivory font-eyebrow text-[10px] uppercase tracking-luxe text-subtext">
                  <tr><th className="px-4 py-3">Clinic</th><th className="px-4 py-3">City</th><th className="px-4 py-3">Stage</th></tr>
                </thead>
                <tbody className="font-body">
                  {PIPELINE.map(([name, city, stage]) => (
                    <tr key={name} className="border-t border-beige">
                      <td className="px-4 py-3 font-medium text-charcoal">{name}</td>
                      <td className="px-4 py-3 text-subtext">{city}</td>
                      <td className="px-4 py-3"><span className="rounded-full bg-gold-50 px-2.5 py-1 text-xs text-gold-700">{stage}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
        <Panel title="Role Distribution">
          <ul className="space-y-3 font-body text-sm">
            {[["Partners", "1,284"], ["Doctors", "3,902"], ["Patients", "212k"], ["Admins", "46"]].map(([k, v]) => (
              <li key={k} className="flex items-center justify-between border-b border-beige pb-3">
                <span className="text-subtext">{k}</span>
                <span className="font-display text-lg text-charcoal">{v}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
