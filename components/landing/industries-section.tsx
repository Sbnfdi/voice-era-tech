"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "./demo-modal-context";
import { 
  Building2, 
  TrendingUp, 
  HeartPulse, 
  Home, 
  ShieldCheck, 
  ShoppingBag, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface IndustryItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  tagline: string;
  description: string;
  metric: { value: string; label: string };
  features: string[];
  compliance: string;
}

const industries: IndustryItem[] = [
  {
    id: "bpo",
    icon: Building2,
    name: "BPO & Multi-Tenant Call Centers",
    tagline: "High-density multi-tenant dialers with granular client partitioning.",
    description: "Designed for operations handling millions of calls across hundreds of client campaigns. Dynamic agent seat balancing, white-label client dashboards, and automated per-minute billing.",
    metric: { value: "+340%", label: "agent connect velocity" },
    features: [
      "Multi-campaign tenant isolation & custom caller ID pools",
      "Real-time whisper, listen, and live barge-in supervision",
      "Automated client-level SLA reporting & billable analytics",
      "Predictive pacing algorithms tuned for 99% agent occupancy"
    ],
    compliance: "PCI-DSS & SOC 2 Type II Certified"
  },
  {
    id: "financial",
    icon: TrendingUp,
    name: "Financial Services & Collections",
    tagline: "FDCPA and TCPA compliant progressive dialers with PCI safeguards.",
    description: "Built for banks, loan originators, and recovery agencies where compliance is existential. Automated consent tracking, real-time dual-party recording, and sensitive data masking.",
    metric: { value: "100%", label: "TCPA & FDCPA guardrail compliance" },
    features: [
      "State-specific calling window auto-enforcement & holiday guards",
      "Automatic DTMF audio muting during credit card payment capture",
      "Dual-consent recording disclosure triggers & audit logging",
      "Automated skip-trace CRM bidirectional sync"
    ],
    compliance: "FDCPA, TCPA Safe-Harbor, PCI-DSS Level 1"
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    name: "Healthcare & Clinical Outreach",
    tagline: "HIPAA-compliant communications, automated appointment & recall outreach.",
    description: "Empower healthcare systems to engage patients securely. Reduce clinic no-show rates, coordinate post-discharge follow-ups, and route urgent telehealth inquiries with zero latency.",
    metric: { value: "-45%", label: "patient appointment no-shows" },
    features: [
      "End-to-end encrypted audio transit & HIPAA-compliant storage",
      "Bidirectional EHR/EMR scheduling sync (Epic, Cerner, Athena)",
      "Automated multilingual interactive voice & SMS reminders",
      "Intelligent nurse triage queue routing & doctor transfer"
    ],
    compliance: "HIPAA Compliant & BAA Executable"
  },
  {
    id: "real-estate",
    icon: Home,
    name: "Real Estate & Brokerages",
    tagline: "Sub-60-second speed-to-lead dialing with MLS property context screen-pops.",
    description: "In competitive property markets, speed-to-lead defines deal velocity. Connect newly submitted web leads to your top-producing agents within seconds before rivals even review the notification.",
    metric: { value: "<45s", label: "average inbound lead-to-call time" },
    features: [
      "Instant inbound lead trigger dialing with instant agent whisper",
      "MLS & property detail screen-pop on agent answer",
      "Automated SMS drip workflows for cold contact revival",
      "Circle prospecting power dialer with geo-targeted caller IDs"
    ],
    compliance: "National & State DNC List Real-time Scrubbing"
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    name: "Insurance Agencies & Carriers",
    tagline: "Multi-line power dialing with compliant policy disclosure capture.",
    description: "Accelerate policy quotes and renewal outreach. Equip licensed producers with high-speed multi-line dialing, recorded verbal statement logs, and warm transfer routing to underwriting teams.",
    metric: { value: "3.2x", label: "daily quote presentations per agent" },
    features: [
      "Multi-line progressive & power dialing for peak outbound hours",
      "Instant verbal disclosure recording snippet export",
      "Warm agent-to-underwriter transfer with context pass-through",
      "Automated policy renewal reminder broadcasts via voice & SMS"
    ],
    compliance: "State Insurance Commission Recording Compliant"
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    name: "E-Commerce & Retail Brands",
    tagline: "Omnichannel customer resolution with 24/7 conversational AI order IVR.",
    description: "Transform customer service from an overhead expense into a repeat-purchase driver. Resolve tracking, returns, and order modifications via automated AI voice agents while routing VIP shoppers to elite support.",
    metric: { value: "68%", label: "tier-1 support queries automated" },
    features: [
      "24/7 conversational voice agent for live package tracking & FAQs",
      "Shopify, Magento, and custom ERP customer history screen pops",
      "Cart abandonment callback automation and SMS discount triggers",
      "Sentiment-triggered escalation directly to senior specialists"
    ],
    compliance: "SOC 2 & GDPR Consumer Privacy Shield"
  }
];

export function IndustriesSection() {
  const [selectedId, setSelectedId] = useState<string>("bpo");
  const { openDemo } = useDemoModal();

  const activeIndustry = industries.find((i) => i.id === selectedId) || industries[0];

  return (
    <section id="industries" className="relative py-20 sm:py-28 lg:py-36 border-t border-foreground/10 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              Industry Verticals &amp; Architectures
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight text-foreground leading-[1.05] mb-4 sm:mb-6">
            Engineered for High-Velocity Sectors
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every vertical operates under distinct pacing algorithms, queue dynamics, and regulatory scrutiny. Voice Era Tech LLC provides specialized dialer configurations tailored specifically for your operational environment.
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Industry Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isSelected = ind.id === selectedId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedId(ind.id)}
                  className={`w-full text-left p-3.5 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "border-foreground bg-foreground text-background shadow-md"
                      : "border-foreground/10 bg-foreground/[0.01] hover:border-foreground/30 text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        isSelected ? "bg-background text-foreground" : "bg-foreground/5 text-foreground group-hover:bg-foreground/10"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm sm:text-base tracking-tight">{ind.name}</div>
                      <div
                        className={`text-xs mt-0.5 line-clamp-1 ${
                          isSelected ? "text-background/80" : "text-muted-foreground"
                        }`}
                      >
                        {ind.tagline}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "translate-x-1 opacity-100" : "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Industry Deep-Dive Display Card */}
          <div className="lg:col-span-7">
            <div className="border border-foreground/15 rounded-2xl p-5 sm:p-8 lg:p-12 bg-card relative overflow-hidden shadow-sm">
              {/* Compliance badge */}
              <div className="mb-4 sm:mb-0 sm:absolute sm:right-4 sm:top-4 inline-block font-mono text-[10px] tracking-widest uppercase border border-foreground/15 px-3 py-1 rounded-full text-muted-foreground bg-background">
                {activeIndustry.compliance}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0">
                  <activeIndustry.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display tracking-tight text-foreground">
                    {activeIndustry.name}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    Production Architecture &bull; Ready to Deploy
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {activeIndustry.description}
              </p>

              {/* Key Metric Highlight */}
              <div className="p-5 rounded-xl bg-foreground/[0.03] border border-foreground/10 flex items-baseline gap-4 mb-8">
                <span className="text-4xl lg:text-5xl font-display text-foreground font-semibold">
                  {activeIndustry.metric.value}
                </span>
                <span className="text-sm font-mono text-muted-foreground">
                  {activeIndustry.metric.label}
                  <span className="block text-[11px] text-foreground/70 mt-0.5 font-sans">
                    Observed in live customer deployments
                  </span>
                </span>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-3 mb-10">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Vertical Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeIndustry.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-foreground/90 p-3 rounded-lg border border-foreground/5 bg-foreground/[0.01]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                      <span className="text-xs leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-foreground/10">
                <Button
                  onClick={() => openDemo({ interest: activeIndustry.name })}
                  className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-12 text-sm font-medium group"
                >
                  Book {activeIndustry.name.split(" ")[0]} Demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <a
                  href="#contact"
                  className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors font-mono"
                >
                  Request custom compliance brief
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
