import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import StatBar from "@/components/stat-bar";
import WhyUs from "@/components/why-us";
import Credentials from "@/components/credentials";

// NOTE: TestimonialsSection is intentionally left out for now — the FL
// version is full of real Google reviews naming Chris Kimler and his staff
// by name, which can't be reused for Jason/Nick's PA business. Re-add once
// real Roaring Brook Abstract (PA) reviews are sourced. See CLAUDE.md.

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatBar />
      <WhyUs />
      <Credentials />
    </>
  );
}
