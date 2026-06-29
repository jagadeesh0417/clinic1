import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const schema = z.object({
  clinicId: z.string().optional(),
  doctorId: z.string().optional(),
  mode: z.enum(["IN_CLINIC", "TELECONSULT", "HOME_VISIT"]).default("IN_CLINIC"),
  scheduledAt: z.string().datetime(),
  reason: z.string().optional(),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in to book" }, { status: 401 });
  }

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }
  const d = parsed.data;

  const appointment = await prisma.appointment.create({
    data: {
      patientId: session.user.id,
      clinicId: d.clinicId ?? null,
      doctorId: d.doctorId ?? null,
      mode: d.mode,
      scheduledAt: new Date(d.scheduledAt),
      reason: d.reason ?? null,
      status: "REQUESTED",
    },
  });

  return NextResponse.json({ ok: true, appointmentId: appointment.id }, { status: 201 });
}
