"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

function LoginInner() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") ?? "/portal";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await signIn("credentials", { email, password, redirect: false, callbackUrl });
    setLoading(false);
    if (res?.error) setError("Invalid email or password.");
    else window.location.href = res?.url ?? callbackUrl;
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-charcoal lg:block">
        <div className="pointer-events-none absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 -left-10 h-80 w-80 rounded-full bg-champagne/10 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Logo variant="light" />
          <div>
            <h2 className="font-display text-4xl leading-tight text-ivory">
              One Network.<br />Thousands of Clinics.<br />
              <span className="text-gold-gradient">Unlimited Growth.</span>
            </h2>
            <p className="mt-5 max-w-sm font-body text-ivory/60">
              The AI-powered healthcare ecosystem — for partners, doctors and
              patients alike.
            </p>
          </div>
          <div className="font-eyebrow text-[10px] uppercase tracking-luxe text-ivory/40">
            India · Hong Kong · Dubai · Canada
          </div>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-warmwhite px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden"><Logo /></div>
          <h1 className="mt-8 font-display text-3xl text-charcoal lg:mt-0">Welcome back</h1>
          <p className="mt-1 font-body text-sm text-subtext">Sign in to your KO Clinics account.</p>

          <Button
            type="button"
            variant="outline"
            className="mt-8 w-full"
            onClick={() => signIn("google", { callbackUrl })}
          >
            Continue with Google
          </Button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-beige" />
            <span className="font-body text-xs text-subtext">or</span>
            <div className="h-px flex-1 bg-beige" />
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="mb-1.5 block font-body text-sm font-semibold text-charcoal">Email</label>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="l-input" placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-body text-sm font-semibold text-charcoal">Password</label>
              <input
                type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                className="l-input" placeholder="••••••••"
              />
            </div>
            {error && <p className="font-body text-sm text-red-600">{error}</p>}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Signing in</> : "Sign in"}
            </Button>
          </form>

          <p className="mt-6 text-center font-body text-sm text-subtext">
            New clinic?{" "}
            <Link href="/partner-registration" className="font-semibold text-gold-700">Become a partner</Link>
          </p>
        </div>
      </div>

      <style>{`.l-input{width:100%;border:1px solid #EEE8DD;background:#fff;border-radius:14px;padding:12px 16px;font-family:var(--font-manrope);font-size:14px;outline:none;transition:border-color .2s,box-shadow .2s}.l-input:focus{border-color:#B58B3A;box-shadow:0 0 0 3px rgba(181,139,58,.12)}`}</style>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="grid min-h-screen place-items-center bg-warmwhite"><Loader2 className="h-6 w-6 animate-spin text-gold-600" /></div>}>
      <LoginInner />
    </Suspense>
  );
}
