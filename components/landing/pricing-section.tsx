"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useDemoModal } from "./demo-modal-context";

const plans = [
  {
    name: "Wholesale VoIP Routes",
    description: "Direct Tier-1 CLI voice termination for contact centers, switches & carriers",
    unitPrice: { monthly: 0.0049, annual: 0.0039 },
    pricePrefix: "From $",
    priceSuffix: "/ min",
    subtext: "Volume-tiered termination",
    features: [
      "Direct CLI routes with 99.999% SLA",
      "STIR/SHAKEN Level A-attestation",
      "Sub-30ms PDD (Post-Dial Delay)",
      "G.711u & Opus HD audio codecs",
      "Compatible with any BYO dialer / PBX",
      "Live CDR portal & ASR/ACD analytics",
    ],
    cta: "Test VoIP Routes",
    popular: false,
  },
  {
    name: "VoIP Routes + Hosted Dialer",
    description: "Turnkey stack: premium voice routes bundled with full predictive dialer seats",
    unitPrice: { monthly: 49, annual: 39 },
    pricePrefix: "$",
    priceSuffix: "/ seat / mo",
    subtext: "Includes preferred route rates",
    features: [
      "Everything in Wholesale VoIP Routes",
      "Predictive, power & preview dialer suite",
      "Real-time whisper, listen & barge-in",
      "Dynamic local caller ID pool rotation",
      "TCPA quiet hours & automated DNC scrub",
      "Bi-directional CRM & webhook integration",
    ],
    cta: "Book Route & Dialer Demo",
    popular: true,
  },
  {
    name: "Enterprise Carrier Interconnect",
    description: "Dedicated infrastructure for telcos, BPOs & high-concurrency operations",
    unitPrice: null,
    pricePrefix: "Custom",
    priceSuffix: "",
    subtext: "Dedicated SLA & 24/7 NOC",
    features: [
      "Private cross-connects & dedicated SIP SBCs",
      "Custom Least Cost Routing (LCR) tables",
      "Multi-tenant dialer cluster partitioning",
      "Unlimited concurrent call channels (CPS)",
      "Dedicated 24/7/365 US engineering NOC",
      "Custom billing & Master Services Agreement",
    ],
    cta: "Contact Telephony Architect",
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { openDemo } = useDemoModal();

  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-36 border-t border-foreground/10 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-[11px] sm:text-xs tracking-widest text-muted-foreground uppercase block mb-4 sm:mb-6">
            VoIP & Dialer Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-4 sm:mb-6">
            Transparent VoIP rates.
            <br />
            <span className="text-muted-foreground">Predictable dialer scaling.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Direct Tier-1 wholesale voice routes with optional hosted dialer seats. No hidden surcharges, no long-term lock-in.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span
            className={`text-sm transition-colors ${
              !isAnnual ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            Standard Rates
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20 cursor-pointer"
            aria-label="Toggle annual volume discount"
          >
            <div
              className={`w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm transition-colors ${
              isAnnual ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            High-Volume Tier
          </span>
          {isAnnual && (
            <span className="ml-2 px-2 py-0.5 sm:py-1 bg-foreground text-primary-foreground text-xs font-mono rounded">
              Volume Discount Applied
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-px rounded-2xl md:rounded-none overflow-hidden md:bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-6 sm:p-8 lg:p-12 bg-background border border-foreground/10 md:border-0 rounded-2xl md:rounded-none ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 md:border-2 md:border-foreground md:shadow-xl" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.unitPrice !== null ? (
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl lg:text-5xl text-foreground">
                        {plan.pricePrefix}
                        {isAnnual ? plan.unitPrice.annual : plan.unitPrice.monthly}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{plan.priceSuffix}</span>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mt-1.5">{plan.subtext}</div>
                  </div>
                ) : (
                  <div>
                    <span className="font-display text-4xl text-foreground">{plan.pricePrefix}</span>
                    <div className="text-xs font-mono text-muted-foreground mt-1.5">{plan.subtext}</div>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => openDemo({ plan: plan.name, interest: plan.name })}
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group cursor-pointer ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All routes backed by STIR/SHAKEN Level-A signing, 99.999% SLA, and redundant SIP gateways.{" "}
          <button
            onClick={() => openDemo({ interest: "Direct VoIP Routes & SIP Trunking" })}
            className="underline underline-offset-4 hover:text-foreground transition-colors cursor-pointer"
          >
            Request route rate sheet & test trunk
          </button>
        </p>
      </div>
    </section>
  );
}
