import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { sendPartnerWelcome } from "@/lib/email";

const bodySchema = z.object({
  legalName: z.string().min(2),
  contactPerson: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  city: z.string().min(2),
  clinicType: z.enum([
    "HOSPITAL", "AESTHETIC", "DERMATOLOGY", "DENTAL", "WELLNESS", "DIAGNOSTIC", "SPECIALIST",
  ]),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }
  const d = parsed.data;

  try {
    // Find or create the user + partner profile. A temporary password is set;
    // the partner completes setup via the welcome email magic link in production.
    const tempPassword = await bcrypt.hash(crypto.randomUUID(), 10);

    const user = await prisma.user.upsert({
      where: { email: d.email },
      update: { name: d.contactPerson, phone: d.phone, role: "PARTNER" },
      create: {
        email: d.email,
        name: d.contactPerson,
        phone: d.phone,
        role: "PARTNER",
        passwordHash: tempPassword,
      },
    });

    const partner = await prisma.partner.upsert({
      where: { userId: user.id },
      update: { legalName: d.legalName, contactPerson: d.contactPerson, phone: d.phone },
      create: {
        userId: user.id,
        legalName: d.legalName,
        contactPerson: d.contactPerson,
        phone: d.phone,
        status: "PENDING",
        onboardingStep: 1,
      },
    });

    // Seed a draft clinic for the onboarding pipeline
    await prisma.clinic.create({
      data: {
        slug: `${slugify(d.legalName)}-${partner.id.slice(0, 5)}`,
        name: d.legalName,
        type: d.clinicType,
        partnerId: partner.id,
        addressLine: "To be confirmed",
        city: d.city,
        description: d.message ?? null,
        country: {
          connectOrCreate: {
            where: { code: "IN" },
            create: { name: "India", code: "IN" },
          },
        },
      },
    });

    await prisma.auditLog.create({
      data: { action: "PARTNER_REGISTERED", entity: "Partner", entityId: partner.id },
    });

    // Fire-and-forget welcome email (won't block the response on failure)
    sendPartnerWelcome(d.email, d.contactPerson).catch(() => {});

    return NextResponse.json({ ok: true, partnerId: partner.id }, { status: 201 });
  } catch (err) {
    console.error("partner registration error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
