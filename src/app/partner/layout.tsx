import { DashboardShell, type NavItem } from "@/components/portal/dashboard-shell";
import {
  LayoutDashboard, Users, CalendarCheck, TrendingUp, Megaphone, GraduationCap,
  Stethoscope, Boxes, LifeBuoy, BarChart3, BadgeCheck, Share2, Building2,
} from "lucide-react";

const nav: NavItem[] = [
  { label: "Dashboard", href: "/partner", icon: LayoutDashboard },
  { label: "Patient Leads", href: "/partner/leads", icon: Users },
  { label: "Appointments", href: "/partner/appointments", icon: CalendarCheck },
  { label: "Revenue", href: "/partner/revenue", icon: TrendingUp },
  { label: "Marketing Assets", href: "/partner/marketing", icon: Megaphone },
  { label: "Training", href: "/partner/training", icon: GraduationCap },
  { label: "Doctor Referrals", href: "/partner/referrals", icon: Stethoscope },
  { label: "Equipment", href: "/partner/equipment", icon: Building2 },
  { label: "Products", href: "/partner/products", icon: Boxes },
  { label: "Analytics", href: "/partner/analytics", icon: BarChart3 },
  { label: "Membership", href: "/partner/membership", icon: BadgeCheck },
  { label: "Referral Tracking", href: "/partner/referral-tracking", icon: Share2 },
  { label: "Support", href: "/partner/support", icon: LifeBuoy },
];

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell title="Partner Portal" nav={nav}>{children}</DashboardShell>;
}
