"use client";

import { motion } from "motion/react";

const partners = [
  { src: "/bbb-logo.png",           alt: "BBB Accredited Business A+" },
  { src: "/first-american-logo.png", alt: "First American Title Insurance" },
  { src: "/alta-logo.png",           alt: "American Land Title Association" },
  { src: "/copa-logo.svg",           alt: "Pike/Wayne County Realtors" },
];

export default function Partners() {
  return (
    <section className="border-y border-border bg-muted/40 py-12 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft/60"
        >
          Trusted affiliations &amp; accreditations
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map(({ src, alt }, i) => (
            <motion.img
              key={alt}
              src={src}
              alt={alt}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
