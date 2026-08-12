"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Calculator, Home, KeyRound } from "lucide-react";

/* ── PA fee formulas ── */

// PA title insurance rates (First American filed rates, approx.)
function titlePremium(amount: number): number {
  if (amount <= 0) return 0;
  let p = 0;
  if (amount <= 100_000)      p = amount * (3.5 / 1000);
  else if (amount <= 500_000) p = 100_000 * (3.5 / 1000) + (amount - 100_000) * (3.0 / 1000);
  else                        p = 100_000 * (3.5 / 1000) + 400_000 * (3.0 / 1000) + (amount - 500_000) * (2.5 / 1000);
  return Math.max(p, 125);
}

// PA Realty Transfer Tax: 2% of sale price split 1% state / 1% local (varies by municipality; 2% is standard)
const transferTax = (price: number) => Math.max(price, 0) * 0.02;

// Mortgage recording tax / deed recording: ~$200 est.
const recordingFee = () => 200;

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Field({
  label,
  value,
  onChange,
  prefix = "$",
  suffix,
  step = 1000,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-soft">
        {label}
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 transition-colors focus-within:border-navy/40">
        {prefix && <span className="text-sm text-ink-soft">{prefix}</span>}
        <input
          type="number"
          min={0}
          step={step}
          value={value === 0 ? "" : value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          placeholder="0"
          className="w-full bg-transparent text-base text-ink outline-none placeholder:text-ink-soft/50 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        {suffix && <span className="text-sm text-ink-soft">{suffix}</span>}
      </div>
    </label>
  );
}

function Row({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <div>
        <p className="text-sm text-cream/90">{label}</p>
        {sub && <p className="text-xs text-cream/40">{sub}</p>}
      </div>
      <p className="font-serif text-base tabular-nums text-cream">{value}</p>
    </div>
  );
}

export default function NetSheet() {
  const [mode, setMode] = useState<"seller" | "buyer">("seller");

  const [price, setPrice] = useState(350_000);
  const [payoff, setPayoff] = useState(180_000);
  const [commissionPct, setCommissionPct] = useState(6);

  const [bPrice, setBPrice] = useState(350_000);
  const [loan, setLoan] = useState(280_000);

  const seller = useMemo(() => {
    const commission = (price * commissionPct) / 100;
    const ownersTitle = titlePremium(price);
    const realty = transferTax(price);
    const settlement = 550;
    const misc = recordingFee();
    const costs = commission + ownersTitle + realty + settlement + misc;
    const net = price - payoff - costs;
    return { commission, ownersTitle, realty, settlement, misc, costs, net };
  }, [price, payoff, commissionPct]);

  const buyer = useMemo(() => {
    const down = Math.max(bPrice - loan, 0);
    const lendersTitle = loan > 0 ? titlePremium(loan) * 0.7 : 0;
    const realty = transferTax(bPrice) / 2; // often split in PA
    const recording = recordingFee();
    const settlement = 550;
    const closingCosts = lendersTitle + realty + recording + settlement;
    const cashToClose = down + closingCosts;
    return { down, lendersTitle, realty, recording, settlement, closingCosts, cashToClose };
  }, [bPrice, loan]);

  return (
    <section id="net-sheet" className="relative bg-background py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="eyebrow text-navy/70 mb-4">
            <span className="h-1 w-1 rounded-full bg-white" /> Net Sheet
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Estimate your <span className="italic text-navy">closing costs</span>.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            A quick Pennsylvania estimate for buyers and sellers in Pike and Wayne County.
            For an exact figure on your transaction, just reach out — we'll prepare a
            detailed net sheet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid gap-5 lg:grid-cols-5"
        >
          {/* Inputs */}
          <div className="lg:col-span-3">
            <div className="rounded-[1.6rem] border border-border bg-card p-2.5">
              <div className="rounded-inner bg-cream p-7">
                <div className="mb-7 inline-flex rounded-full border border-border bg-card p-1">
                  {([
                    { key: "seller", label: "I'm Selling", icon: Home },
                    { key: "buyer",  label: "I'm Buying",  icon: KeyRound },
                  ] as const).map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      onClick={() => setMode(key)}
                      className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                        mode === key
                          ? "bg-navy text-cream shadow-soft"
                          : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </button>
                  ))}
                </div>

                {mode === "seller" ? (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Sale Price"       value={price}         onChange={setPrice} />
                    <Field label="Mortgage Payoff"  value={payoff}        onChange={setPayoff} />
                    <Field label="Commission" value={commissionPct} onChange={setCommissionPct} prefix="" suffix="%" step={0.5} />
                  </div>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Purchase Price" value={bPrice} onChange={setBPrice} />
                    <Field label="Loan Amount"    value={loan}   onChange={setLoan} />
                  </div>
                )}

                <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-ink-soft">
                  <Calculator className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-light" />
                  Estimate only. Uses Pennsylvania filed title rates and Pike/Wayne County
                  customary fees. Actual costs vary by contract, lender, and prorations.
                  PA Realty Transfer Tax rates may vary by municipality.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-[1.6rem] bg-navy-deep p-8">
              {mode === "seller" ? (
                <>
                  <p className="text-xs uppercase tracking-wider text-cream/50">
                    Estimated Seller Net
                  </p>
                  <p className="mt-1 font-serif text-4xl tracking-tight text-navy-light">
                    {usd(seller.net)}
                  </p>
                  <div className="mt-6 divide-y divide-white/10 border-t border-white/10">
                    <Row label="Sale price"           value={usd(price)} />
                    <Row label="Mortgage payoff"      value={`– ${usd(payoff)}`} />
                    <Row label={`Commission (${commissionPct}%)`} value={`– ${usd(seller.commission)}`} />
                    <Row label="Owner's title policy" value={`– ${usd(seller.ownersTitle)}`} sub="First American filed rate" />
                    <Row label="Realty transfer tax"  value={`– ${usd(seller.realty)}`} sub="~2% of sale price" />
                    <Row label="Settlement & recording" value={`– ${usd(seller.settlement + seller.misc)}`} sub="estimated" />
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-wider text-cream/50">
                    Estimated Cash to Close
                  </p>
                  <p className="mt-1 font-serif text-4xl tracking-tight text-navy-light">
                    {usd(buyer.cashToClose)}
                  </p>
                  <div className="mt-6 divide-y divide-white/10 border-t border-white/10">
                    <Row label="Down payment"          value={usd(buyer.down)} />
                    <Row label="Lender's title policy" value={usd(buyer.lendersTitle)} sub="estimated" />
                    <Row label="Realty transfer tax"   value={usd(buyer.realty)} sub="buyer's share est." />
                    <Row label="Recording fees"        value={usd(buyer.recording)} sub="estimated" />
                    <Row label="Settlement fee"        value={usd(buyer.settlement)} sub="estimated" />
                  </div>
                </>
              )}

              <a
                href="#consultation"
                className="mt-7 flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-white active:scale-[0.97]"
              >
                Get an exact net sheet
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
