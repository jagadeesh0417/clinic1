import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import {
  WhyJoin,
  AIHealthcare,
  Services,
  Steps,
  Leadership,
  GlobalPresence,
  FinalCTA,
} from "@/components/marketing/home-sections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyJoin />
        <AIHealthcare />
        <Services />
        <Steps />
        <Leadership />
        <GlobalPresence />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
