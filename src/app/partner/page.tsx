import { StatCard, Panel } from "@/components/portal/dashboard-shell";
import { Users, CalendarCheck, TrendingUp, Star } from "lucide-react";

const STATS = [
  { label: "New Leads (7d)", value: "126", delta: "+18%", icon: Users },
  { label: "Appointments", value: "84", delta: "+9%", icon: CalendarCheck },
  { label: "Revenue (30d)", value: "₹12.4 L", delta: "+22%", icon: TrendingUp },
  { label: "Avg. Rating", value: "4.8", delta: "+0.2", icon: Star },
];

const LEADS = [
  ["Ananya Rao", "Hydrafacial", "New", "Website"],
  ["Karthik M", "Hair Transplant", "Contacted", "Walk-in"],
  ["Priya S", "Botox", "Booked", "Teleconsult"],
  ["Rahul N", "Slimming", "Qualified", "Campaign"],
];

const statusColor: Record<string, string> = {
  New: "bg-blue-50 text-blue-700",
  Contacted: "bg-amber-50 text-amber-700",
  Qualified: "bg-purple-50 text-purple-700",
  Booked: "bg-green-50 text-green-700",
};

export default function PartnerDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-charcoal">Welcome back</h1>
          <p className="mt-1 font-body text-sm text-subtext">Radiance Skin & Hair · Bengaluru · <span className="text-gold-700">Active Partner</span></p>
        </div>
        <div className="rounded-full bg-gold-gradient px-5 py-2 font-body text-sm font-semibold text-white shadow-gold">
          Pro Membership
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Panel title="Recent Patient Leads" action={<a href="/partner/leads" className="font-body text-sm text-gold-700">View all</a>}>
            <div className="overflow-hidden rounded-2xl border border-beige">
              <table className="w-full text-left text-sm">
                <thead className="bg-ivory font-eyebrow text-[10px] uppercase tracking-luxe text-subtext">
                  <tr><th className="px-4 py-3">Patient</th><th className="px-4 py-3">Service</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Source</th></tr>
                </thead>
                <tbody className="font-body">
                  {LEADS.map(([name, service, status, source]) => (
                    <tr key={name} className="border-t border-beige">
                      <td className="px-4 py-3 font-medium text-charcoal">{name}</td>
                      <td className="px-4 py-3 text-subtext">{service}</td>
                      <td className="px-4 py-3"><span className={`rounded-full px-2.5 py-1 text-xs ${statusColor[status] ?? "bg-beige text-charcoal"}`}>{status}</span></td>
                      <td className="px-4 py-3 text-subtext">{source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
        <Panel title="Growth Insights">
          <ul className="space-y-4 font-body text-sm">
            <li className="rounded-2xl bg-gold-50 p-4">
              <div className="font-semibold text-gold-800">Lead conversion up 18%</div>
              <div className="mt-1 text-gold-700/80">Faster response times this week are paying off.</div>
            </li>
            <li className="rounded-2xl border border-beige p-4">
              <div className="font-semibold text-charcoal">Add 2 visiting doctors</div>
              <div className="mt-1 text-subtext">Estimated +₹1.8L/month from room rental.</div>
            </li>
            <li className="rounded-2xl border border-beige p-4">
              <div className="font-semibold text-charcoal">Restock PRP kits</div>
              <div className="mt-1 text-subtext">Partner pricing: 30% off this cycle.</div>
            </li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}
