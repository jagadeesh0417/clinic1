import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { isAdmin } from "@/lib/rbac";
import { sendLeadConfirmation } from "@/lib/email";

const createSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().optional(),
  serviceTag: z.string().optional(),
  clinicId: z.string().optional(),
  source: z
    .enum([
      "WEBSITE", "WALK_IN", "TELECONSULT", "CORPORATE", "HEALTH_CAMP",
      "MEDICAL_TOURISM", "REFERRAL", "CALL_CENTRE", "INSURANCE", "CAMPAIGN",
    ])
    .default("WEBSITE"),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = createSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }
  const d = parsed.data;

  const lead = await prisma.lead.create({
    data: {
      name: d.name,
      phone: d.phone,
      email: d.email || null,
      note: d.message ?? null,
      serviceTag: d.serviceTag ?? null,
      clinicId: d.clinicId ?? null,
      source: d.source,
    },
  });

  if (d.email) sendLeadConfirmation(d.email, d.name).catch(() => {});

  return NextResponse.json({ ok: true, leadId: lead.id }, { status: 201 });
}

// List leads — partners see their clinic leads, admins see all.
export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const where = isAdmin(session.user.role)
    ? {}
    : { assigneeId: session.user.id };

  const leads = await prisma.lead.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json({ leads });
}
