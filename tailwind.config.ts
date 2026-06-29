import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem", xl: "3rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        // KO Clinics brand system
        gold: {
          DEFAULT: "#B58B3A", // Primary Gold
          50: "#FBF7EF",
          100: "#F3E9D2",
          200: "#E6D2A4",
          300: "#D6B46A", // Champagne Gold
          400: "#C8A25A",
          500: "#B58B3A", // Primary
          600: "#9A742F",
          700: "#7C5C26",
          800: "#5E461D",
          900: "#3F2F13",
        },
        champagne: "#D6B46A",
        ivory: "#FAF7F2",
        warmwhite: "#FDFCF9",
        pearl: "#F8F6F2",
        beige: "#EEE8DD",
        charcoal: "#1E1E1E",
        ink: "#1B1B1B",
        subtext: "#6B6B6B",
        // shadcn semantic tokens mapped to brand
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        eyebrow: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "30px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B58B3A 0%, #D6B46A 100%)",
        "gold-sheen": "linear-gradient(135deg, #9A742F 0%, #D6B46A 50%, #B58B3A 100%)",
        "ivory-fade": "linear-gradient(180deg, #FDFCF9 0%, #FAF7F2 100%)",
        "champagne-glow": "radial-gradient(60% 60% at 50% 40%, rgba(214,180,106,0.18) 0%, rgba(250,247,242,0) 70%)",
      },
      boxShadow: {
        luxe: "0 24px 60px -28px rgba(122, 92, 38, 0.28)",
        "luxe-sm": "0 12px 32px -18px rgba(122, 92, 38, 0.22)",
        gold: "0 8px 30px -8px rgba(181, 139, 58, 0.45)",
        card: "0 1px 2px rgba(27,27,27,0.04), 0 12px 40px -24px rgba(27,27,27,0.18)",
      },
      letterSpacing: {
        luxe: "0.22em",
        wide2: "0.3em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
