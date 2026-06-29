"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Loader2, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  legalName: z.string().min(2, "Enter your clinic's legal name"),
  contactPerson: z.string().min(2, "Enter a contact name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  city: z.string().min(2, "Enter your city"),
  clinicType: z.enum([
    "HOSPITAL", "AESTHETIC", "DERMATOLOGY", "DENTAL", "WELLNESS", "DIAGNOSTIC", "SPECIALIST",
  ]),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const STEPS = [
  { id: 0, title: "Your Clinic", fields: ["legalName", "clinicType", "city"] as const },
  { id: 1, title: "Contact", fields: ["contactPerson", "email", "phone"] as const },
  { id: 2, title: "Tell us more", fields: ["message"] as const },
];

const TYPES: { value: FormData["clinicType"]; label: string }[] = [
  { value: "AESTHETIC", label: "Aesthetic Clinic" },
  { value: "DERMATOLOGY", label: "Dermatology" },
  { value: "DENTAL", label: "Dental" },
  { value: "WELLNESS", label: "Wellness" },
  { value: "HOSPITAL", label: "Hospital" },
  { value: "DIAGNOSTIC", label: "Diagnostics" },
  { value: "SPECIALIST", label: "Specialist" },
];

export function RegistrationForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register, handleSubmit, trigger, setValue, watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onTouched" });

  const clinicType = watch("clinicType");

  const next = async () => {
    const ok = await trigger(STEPS[step].fields as unknown as (keyof FormData)[]);
    if (ok) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
    } catch {
      alert("Something went wrong. Please try again or email register@koclinics.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="luxe-card mx-auto max-w-xl p-12 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-white shadow-gold">
          <PartyPopper className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-3xl text-charcoal">You're in the network.</h3>
        <p className="mt-3 font-body text-subtext">
          Our onboarding team will reach out within 48 hours to begin your
          evaluation and site inspection. Welcome to KO Clinics.
        </p>
      </div>
    );
  }

  return (
    <div className="luxe-card mx-auto max-w-xl p-8 md:p-10">
      <div className="mb-8 flex items-center justify-between">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex flex-1 items-center">
            <div
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-sans text-sm font-semibold transition-colors ${
                i < step
                  ? "bg-gold-gradient text-white"
                  : i === step
                  ? "border-2 border-gold-500 text-gold-700"
                  : "border border-beige text-subtext"
              }`}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`mx-2 h-px flex-1 ${i < step ? "bg-gold-400" : "bg-beige"}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <h3 className="font-display text-2xl text-charcoal">{STEPS[step].title}</h3>

            {step === 0 && (
              <>
                <Field label="Clinic legal name" error={errors.legalName?.message}>
                  <input className="ko-input" placeholder="e.g. Radiance Skin & Hair Pvt Ltd" {...register("legalName")} />
                </Field>
                <div>
                  <label className="ko-label">Clinic type</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {TYPES.map((t) => (
                      <button
                        type="button"
                        key={t.value}
                        onClick={() => setValue("clinicType", t.value, { shouldValidate: true })}
                        className={`rounded-xl border px-3 py-2.5 text-left font-body text-xs transition-colors ${
                          clinicType === t.value
                            ? "border-gold-500 bg-gold-50 text-gold-700"
                            : "border-beige text-charcoal/70 hover:border-gold-300"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  {errors.clinicType && <p className="ko-error">Select a clinic type</p>}
                </div>
                <Field label="City" error={errors.city?.message}>
                  <input className="ko-input" placeholder="e.g. Bengaluru" {...register("city")} />
                </Field>
              </>
            )}

            {step === 1 && (
              <>
                <Field label="Contact person" error={errors.contactPerson?.message}>
                  <input className="ko-input" placeholder="Full name" {...register("contactPerson")} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input className="ko-input" type="email" placeholder="you@clinic.com" {...register("email")} />
                </Field>
                <Field label="Phone / WhatsApp" error={errors.phone?.message}>
                  <input className="ko-input" placeholder="+91 ..." {...register("phone")} />
                </Field>
              </>
            )}

            {step === 2 && (
              <Field label="Anything we should know? (optional)" error={errors.message?.message}>
                <textarea className="ko-input min-h-28" placeholder="Specialities, equipment, goals..." {...register("message")} />
              </Field>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          {step > 0 ? (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-subtext hover:text-charcoal">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          ) : <span />}

          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={next}>
              Continue <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={submitting}>
              {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting</> : <>Submit Registration <ArrowRight className="h-4 w-4" /></>}
            </Button>
          )}
        </div>
      </form>

      <style>{`
        .ko-input{width:100%;border:1px solid #EEE8DD;background:#fff;border-radius:14px;padding:12px 16px;font-family:var(--font-manrope);font-size:14px;color:#1E1E1E;outline:none;transition:border-color .2s,box-shadow .2s}
        .ko-input:focus{border-color:#B58B3A;box-shadow:0 0 0 3px rgba(181,139,58,.12)}
        .ko-input::placeholder{color:#9b9b9b}
        .ko-label{display:block;font-family:var(--font-manrope);font-size:13px;font-weight:600;color:#1E1E1E;margin-bottom:8px}
        .ko-error{color:#b4452f;font-size:12px;margin-top:6px}
      `}</style>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="ko-label">{label}</label>
      {children}
      {error && <p className="ko-error">{error}</p>}
    </div>
  );
}
