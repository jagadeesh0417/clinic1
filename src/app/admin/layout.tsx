import { DashboardShell, type NavItem } from "@/components/portal/dashboard-shell";
import {
  LayoutDashboard, Building2, Users, Stethoscope, Boxes, BadgeCheck,
  Megaphone, BarChart3, CreditCard, ScanLine, FileText, Settings, ShieldCheck,
} from "lucide-react";

const nav: NavItem[] = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Clinics", href: "/admin/clinics", icon: Building2 },
  { label: "Partners", href: "/admin/partners", icon: BadgeCheck },
  { label: "Patients", href: "/admin/patients", icon: Users },
  { label: "Doctors", href: "/admin/doctors", icon: Stethoscope },
  { label: "Products", href: "/admin/products", icon: Boxes },
  { label: "Campaigns", href: "/admin/campaigns", icon: Megaphone },
  { label: "AI Reports", href: "/admin/ai-reports", icon: ScanLine },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "CMS", href: "/admin/cms", icon: FileText },
  { label: "Permissions", href: "/admin/permissions", icon: ShieldCheck },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell title="Admin Panel" nav={nav}>{children}</DashboardShell>;
}
