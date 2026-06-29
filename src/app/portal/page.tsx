import { StatCard, Panel } from "@/components/portal/dashboard-shell";
import { Activity, CalendarCheck, ScanLine, Heart } from "lucide-react";

const STATS = [
  { label: "Health Score", value: "82", delta: "+4", icon: Activity },
  { label: "Upcoming Visits", value: "2", icon: CalendarCheck },
  { label: "AI Scans", value: "5", icon: ScanLine },
  { label: "Saved Doctors", value: "8", icon: Heart },
];

export default function ClientDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl text-charcoal">Hello, Aisha</h1>
        <p className="mt-1 font-body text-sm text-subtext">Your preventive health at a glance.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Panel title="Latest QScan Report" action={<a href="/portal/reports" className="font-body text-sm text-gold-700">All reports</a>}>
            <div className="grid gap-4 sm:grid-cols-3">
              {[["Heart Rate", "72 bpm"], ["BP", "118/76"], ["SpO₂", "98%"], ["BMI", "22.4"], ["Body Fat", "19%"], ["Risk", "Low"]].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-beige bg-ivory p-4">
                  <div className="font-eyebrow text-[10px] uppercase tracking-luxe text-subtext">{k}</div>
                  <div className="mt-1 font-display text-xl text-charcoal">{v}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
        <Panel title="Upcoming">
          <ul className="space-y-3 font-body text-sm">
            <li className="rounded-2xl border border-beige p-4">
              <div className="font-semibold text-charcoal">Dermatology consult</div>
              <div className="mt-1 text-subtext">Tue, 10:30 AM · Radiance, Bengaluru</div>
            </li>
            <li className="rounded-2xl border border-beige p-4">
              <div className="font-semibold text-charcoal">Teleconsult — Nutrition</div>
              <div className="mt-1 text-subtext">Fri, 6:00 PM · Video</div>
            </li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}
