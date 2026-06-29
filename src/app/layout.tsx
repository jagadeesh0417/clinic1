import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Cinzel,
  Inter,
  Manrope,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.koclinics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KO Clinics — India's Largest AI-Powered Clinic Network",
    template: "%s · KO Clinics",
  },
  description:
    "KO Clinics is India's fastest-growing AI-powered healthcare aggregator. One network, thousands of clinics, unlimited growth. Partner with us — the OYO model for healthcare.",
  keywords: [
    "healthcare aggregator",
    "clinic network India",
    "AI healthcare",
    "clinic partnership",
    "aesthetic clinic franchise",
    "dermatology network",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "KO Clinics — India's Largest AI-Powered Clinic Network",
    description:
      "One Network. Thousands of Clinics. Unlimited Growth. Partner with KO Clinics.",
    siteName: "KO Clinics",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "KO Clinics",
    url: siteUrl,
    slogan: "India's Largest AI-Powered Clinic Network",
    areaServed: ["India", "Hong Kong", "United Arab Emirates", "Canada"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${inter.variable} ${manrope.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
