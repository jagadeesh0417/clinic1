import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

async function main() {
  console.log("🌱  Seeding KO Clinics...");

  // ── Countries ──
  const countries = [
    { name: "India", code: "IN" },
    { name: "Hong Kong", code: "HK" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "Canada", code: "CA" },
  ];
  for (const c of countries) {
    await prisma.country.upsert({ where: { code: c.code }, update: {}, create: c });
  }
  const india = await prisma.country.findUniqueOrThrow({ where: { code: "IN" } });

  await prisma.region.upsert({
    where: { name_countryId: { name: "Karnataka", countryId: india.id } },
    update: {},
    create: { name: "Karnataka", countryId: india.id },
  });

  // ── Membership plans ──
  const plans = [
    { name: "Growth", priceMonthly: 9999, features: ["Website listing", "Patient leads", "CRM access", "AI screening"] },
    { name: "Pro", priceMonthly: 24999, features: ["Everything in Growth", "Priority leads", "Marketing campaigns", "Equipment rental", "30% product discount"] },
    { name: "Enterprise", priceMonthly: 49999, features: ["Everything in Pro", "Dedicated success manager", "Corporate tie-ups", "Medical tourism", "Custom analytics"] },
  ];
  for (const p of plans) {
    await prisma.membershipPlan.upsert({ where: { name: p.name }, update: {}, create: p });
  }

  // ── Service categories + services ──
  const catalog: Record<string, string[]> = {
    Dermatology: ["Acne Treatment", "Pigmentation", "Laser Resurfacing", "Hydrafacial", "Chemical Peels"],
    Hair: ["Hair Transplant", "PRP Therapy", "GFC", "Exosome Therapy", "Hair Analysis"],
    "Anti-Ageing": ["Botox", "Dermal Fillers", "Thread Lift", "Skin Boosters", "Bio-Regenerative Medicine"],
    Slimming: ["Body Contouring", "Fat Reduction", "Weight Management", "Nutrition Plan"],
    Wellness: ["Preventive Health Screening", "Longevity Program", "Lifestyle Medicine"],
  };
  let order = 0;
  for (const [cat, services] of Object.entries(catalog)) {
    const category = await prisma.serviceCategory.upsert({
      where: { slug: slugify(cat) },
      update: {},
      create: { slug: slugify(cat), name: cat, order: order++ },
    });
    for (const s of services) {
      await prisma.service.upsert({
        where: { slug: slugify(s) },
        update: {},
        create: { slug: slugify(s), name: s, categoryId: category.id },
      });
    }
  }

  // ── Product categories + sample products ──
  const productCats: Record<string, { name: string; mrp: number; partner: number }[]> = {
    "Hair Care": [
      { name: "Anti Hair-Fall Serum", mrp: 2400, partner: 1680 },
      { name: "PRP Kit (Single)", mrp: 3500, partner: 2450 },
    ],
    Skincare: [
      { name: "Vitamin C Brightening Serum", mrp: 1900, partner: 1330 },
      { name: "Broad-Spectrum Sunscreen SPF 50", mrp: 1200, partner: 840 },
    ],
    Wellness: [
      { name: "NAD+ Supplement", mrp: 4200, partner: 2940 },
    ],
  };
  for (const [cat, products] of Object.entries(productCats)) {
    const category = await prisma.productCategory.upsert({
      where: { slug: slugify(cat) },
      update: {},
      create: { slug: slugify(cat), name: cat },
    });
    for (const p of products) {
      await prisma.product.upsert({
        where: { slug: slugify(p.name) },
        update: {},
        create: {
          slug: slugify(p.name),
          name: p.name,
          categoryId: category.id,
          mrp: p.mrp,
          partnerPrice: p.partner,
          stock: 100,
        },
      });
    }
  }

  // ── Equipment ──
  const equipment = [
    { name: "Pico Laser System", category: "Laser", dailyRate: 12000 },
    { name: "HIFU Device", category: "Anti-Ageing", dailyRate: 9000 },
    { name: "Hydrafacial Machine", category: "Dermatology", dailyRate: 6000 },
  ];
  for (const e of equipment) {
    const exists = await prisma.equipment.findFirst({ where: { name: e.name } });
    if (!exists) await prisma.equipment.create({ data: e });
  }

  // ── FAQs ──
  const faqs = [
    { question: "What is the investment to become a partner?", answer: "KO Clinics operates a zero-to-low investment partnership model. You retain ownership of your clinic while we provide leads, branding and technology.", category: "Partnership" },
    { question: "How quickly will I start receiving patient leads?", answer: "Most partners begin receiving qualified leads within 2–4 weeks of completing onboarding and digital integration.", category: "Partnership" },
    { question: "What is QScan?", answer: "QScan is our AI Health ATM — an instant health check that measures vitals and body composition and generates a health score with preventive recommendations.", category: "AI Healthcare" },
  ];
  for (const f of faqs) {
    const exists = await prisma.fAQ.findFirst({ where: { question: f.question } });
    if (!exists) await prisma.fAQ.create({ data: f });
  }

  // ── Admin user ──
  const adminEmail = "admin@koclinics.com";
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { role: "SUPER_ADMIN" },
    create: {
      email: adminEmail,
      name: "KO Admin",
      role: "SUPER_ADMIN",
      passwordHash: await bcrypt.hash("ChangeMe!2024", 10),
    },
  });

  // ── Demo partner + published clinic ──
  const partnerUser = await prisma.user.upsert({
    where: { email: "partner@koclinics.com" },
    update: { role: "PARTNER" },
    create: {
      email: "partner@koclinics.com",
      name: "Radiance Owner",
      role: "PARTNER",
      passwordHash: await bcrypt.hash("ChangeMe!2024", 10),
    },
  });
  const partner = await prisma.partner.upsert({
    where: { userId: partnerUser.id },
    update: {},
    create: {
      userId: partnerUser.id,
      legalName: "Radiance Skin & Hair Pvt Ltd",
      contactPerson: "Radiance Owner",
      phone: "+919148717036",
      status: "ACTIVE",
      onboardingStep: 9,
    },
  });
  const existingClinic = await prisma.clinic.findUnique({ where: { slug: "radiance-bengaluru" } });
  if (!existingClinic) {
    await prisma.clinic.create({
      data: {
        slug: "radiance-bengaluru",
        name: "Radiance Skin & Hair",
        type: "AESTHETIC",
        partnerId: partner.id,
        countryId: india.id,
        addressLine: "100ft Road, Koramangala",
        city: "Bengaluru",
        pincode: "560034",
        rating: 4.8,
        reviewCount: 326,
        isPublished: true,
        isVerified: true,
        description: "Premier aesthetic clinic offering dermatology, hair restoration and anti-ageing.",
      },
    });
  }

  console.log("✅  Seed complete.");
  console.log("   Admin:   admin@koclinics.com / ChangeMe!2024");
  console.log("   Partner: partner@koclinics.com / ChangeMe!2024");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
