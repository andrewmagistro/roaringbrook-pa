"use client";

import { motion } from "motion/react";
import { FileText, User, Calculator, HelpCircle } from "lucide-react";

const items = [
  { icon: FileText, label: "Order Title", sub: "Start your transaction", href: "#consultation" },
  { icon: User,     label: "Meet Chris",  sub: "Attorney & title agent", href: "#attorneys" },
  { icon: Calculator, label: "Net Sheet", sub: "Estimate your costs",   href: "#net-sheet" },
  { icon: HelpCircle, label: "FAQs",      sub: "Common questions",      href: "#faq" },
];

export default function QuickAccess() {
  return (
    <section className="relative z-10 -mt-8 px-6 pb-0">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {items.map(({ icon: Icon, label, sub, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center gap-3 rounded-[1.4rem] border border-border bg-card p-5 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/[0.07] transition-colors duration-500 group-hover:bg-navy-light/15">
                <Icon className="h-5 w-5 text-navy transition-colors duration-500 group-hover:text-navy-light" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{label}</span>
                <span className="block text-[11px] text-ink-soft mt-0.5">{sub}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
