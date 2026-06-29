import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-ivory-fade px-6 text-center">
      <div>
        <Logo />
        <h1 className="mt-10 font-display text-7xl text-gold-gradient">404</h1>
        <p className="mt-4 font-serif text-2xl text-charcoal">This page has stepped out.</p>
        <p className="mt-2 font-body text-subtext">The page you're looking for doesn't exist or has moved.</p>
        <Button asChild className="mt-8"><Link href="/">Back to home</Link></Button>
      </div>
    </div>
  );
}
