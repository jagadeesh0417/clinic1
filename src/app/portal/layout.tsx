import { DashboardShell, type NavItem } from "@/components/portal/dashboard-shell";
import {
  LayoutDashboard, MapPin, CalendarPlus, ScanLine, FileText, BadgeCheck,
  Video, ShoppingBag, Heart, FolderHeart, Bell, CreditCard, User,
} from "lucide-react";

const nav: NavItem[] = [
  { label: "Dashboard", href: "/portal", icon: LayoutDashboard },
  { label: "Find a Clinic", href: "/portal/clinics", icon: MapPin },
  { label: "Book Appointment", href: "/portal/book", icon: CalendarPlus },
  { label: "AI Screening", href: "/portal/screening", icon: ScanLine },
  { label: "Health Reports", href: "/portal/reports", icon: FileText },
  { label: "Membership", href: "/portal/membership", icon: BadgeCheck },
  { label: "Teleconsult", href: "/portal/teleconsult", icon: Video },
  { label: "Orders", href: "/portal/orders", icon: ShoppingBag },
  { label: "Saved Doctors", href: "/portal/saved", icon: Heart },
  { label: "Medical Records", href: "/portal/records", icon: FolderHeart },
  { label: "Notifications", href: "/portal/notifications", icon: Bell },
  { label: "Payments", href: "/portal/payments", icon: CreditCard },
  { label: "Profile", href: "/portal/profile", icon: User },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell title="My Health" nav={nav}>{children}</DashboardShell>;
}
