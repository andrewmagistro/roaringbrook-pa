import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import StatBar from "@/components/stat-bar";
import TeamCarousel from "@/components/team-carousel";

export const metadata: Metadata = {
  title: "Meet Our Team | Roaring Brook Abstract",
  description:
    "Roaring Brook Abstract was founded by Chris Kimler and is now owned and operated in Pennsylvania by Jason Ohliger and Nick McIntyre, Pike County attorneys who handle your title work and closing directly.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Team"
        title="Attorney-Led"
        italic="with Proven Results."
      />

      {/* Bios */}
      <section className="bg-background py-24">
        <div className="container mx-auto max-w-7xl px-6 space-y-20">
          <TeamCarousel />

          {/* Shared firm note */}
          <div className="rounded-[1.6rem] border border-border bg-cream p-8 lg:ml-[calc(41.6667%+4rem)]">
            <h3 className="font-serif text-2xl tracking-tight text-ink">
              One name, new ownership
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Roaring Brook Abstract was founded by Chris Kimler and has
              served Pike County for years. Today, Jason and Nick — partners
              at{" "}
              <span className="font-medium text-ink">Ohliger &amp; McIntyre, LLC</span>{" "}
              — own and run the company, carrying forward the same hands-on,
              attorney-led approach to title work that Chris established from
              the start.
            </p>
          </div>
        </div>
      </section>

      <StatBar />
    </>
  );
}
