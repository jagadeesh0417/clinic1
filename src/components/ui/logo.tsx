import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-ivory" : "text-charcoal";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gold-gradient shadow-gold">
        <span className="font-display text-sm font-bold text-white">KO</span>
        <span className="absolute -inset-px rounded-xl ring-1 ring-white/30" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-bold tracking-tight", text)}>
          KO Clinics
        </span>
        <span className="font-eyebrow text-[8px] uppercase tracking-luxe text-gold-600">
          AI Clinic Network
        </span>
      </span>
    </span>
  );
}
