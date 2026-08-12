"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    audience: "Realtors",
    headline: "We close deals fast — and keep you in the loop.",
    body: "Your clients expect a smooth closing. We handle every detail from title search to policy so you can focus on the next deal. One call gets it started.",
    cta: "Work with us",
    href: "#consultation",
    accent: true,
  },
  {
    audience: "Buyers & Sellers",
    headline: "Your home is protected — long after closing day.",
    body: "Title insurance protects you from hidden defects, unpaid liens, and ownership disputes that could surface years later. We explain every step in plain language.",
    cta: "Learn more",
    href: "#practice-areas",
    accent: false,
  },
  {
    audience: "Lenders",
    headline: "Attorney-examined title. No surprises at the table.",
    body: "Chris personally examines every title search. When issues arise, we resolve them in-house — faster and with less back-and-forth than you'd get elsewhere.",
    cta: "Get in touch",
    href: "#consultation",
    accent: false,
  },
];

export default function AudienceCards() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="eyebrow text-navy/70 mb-4">
            <span className="h-1 w-1 rounded-full bg-white" /> Who we serve
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            The right title partner for <span className="italic text-navy">everyone at the table</span>.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map(({ audience, headline, body, cta, href, accent }, i) => (
            <motion.a
              key={audience}
              href={href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`group rounded-[1.6rem] border p-2.5 transition-all duration-500 hover:shadow-lift ${
                accent ? "border-navy/20 bg-navy" : "border-border bg-card"
              }`}
            >
              <div className={`flex h-full flex-col rounded-inner p-7 ${accent ? "bg-navy-dark" : ""}`}>
                <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${accent ? "text-white" : "text-navy"}`}>
                  {audience}
                </span>
                <h3 className={`mt-4 font-serif text-xl leading-snug tracking-tight ${accent ? "text-cream" : "text-ink"}`}>
                  {headline}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed flex-1 ${accent ? "text-cream/65" : "text-ink-soft"}`}>
                  {body}
                </p>
                <div className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${accent ? "text-white" : "text-navy"}`}>
                  {cta}
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${accent ? "bg-cream/10" : "bg-navy/[0.08]"}`}>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
