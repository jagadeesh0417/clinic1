"use client";
import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "WEBSITE" }),
      });
      if (res.ok) setSent(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="luxe-card grid place-items-center p-12 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-gradient text-white"><Check className="h-7 w-7" /></div>
        <h3 className="mt-5 font-display text-2xl text-charcoal">Message received.</h3>
        <p className="mt-2 font-body text-subtext">A care advisor will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="luxe-card space-y-4 p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Name" value={form.name} onChange={set("name")} className="c-input" />
        <input required type="email" placeholder="Email" value={form.email} onChange={set("email")} className="c-input" />
      </div>
      <input placeholder="Phone / WhatsApp" value={form.phone} onChange={set("phone")} className="c-input" />
      <textarea required placeholder="How can we help?" value={form.message} onChange={set("message")} className="c-input min-h-32" />
      <Button type="submit" disabled={sending} className="w-full">
        {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending</> : "Send Message"}
      </Button>
      <style>{`.c-input{width:100%;border:1px solid #EEE8DD;background:#fff;border-radius:14px;padding:12px 16px;font-family:var(--font-manrope);font-size:14px;outline:none;transition:border-color .2s,box-shadow .2s}.c-input:focus{border-color:#B58B3A;box-shadow:0 0 0 3px rgba(181,139,58,.12)}`}</style>
    </form>
  );
}
