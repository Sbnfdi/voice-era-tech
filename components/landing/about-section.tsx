"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "./demo-modal-context";
import { 
  Cpu, 
  Server, 
  ShieldCheck, 
  Headphones, 
  ArrowRight,
  Globe2,
  Zap,
  Activity
} from "lucide-react";

export function AboutSection() {
  const { openDemo } = useDemoModal();

  const corePillars = [
    {
      icon: Server,
      title: "Direct Tier-1 Telephony Interconnects",
      description: "We bypass intermediary aggregators with direct SIP fiber trunks to primary North American carriers, delivering sub-50ms voice packet transit and 99.999% network uptime."
    },
    {
      icon: Cpu,
      title: "Proprietary Pacing & AI Voice Engine",
      description: "Our adaptive dialing algorithms analyze answering machine detection (AMD) within 400 milliseconds, eliminating awkward pause delays and maximizing authentic human connections."
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Guardrails Baked In",
      description: "Engineered from the ground up to respect TCPA quiet hours, automated National DNC list scrubbing, and full STIR/SHAKEN Level-A attestation to safeguard your caller reputation."
    },
    {
      icon: Headphones,
      title: "24/7/365 US-Based Engineering NOC",
      description: "Every deployment includes proactive carrier route health monitoring, automated failover routing, and direct access to senior VoIP architects who know your dialer stack."
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 border-t border-foreground/10 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              About Voice Era Tech LLC
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight text-foreground leading-[1.05] mb-4 sm:mb-6">
            Built for Mission-Critical Voice Operations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Founded with a singular mission: to provide bulletproof Tier-1 VoIP routes, wholesale voice termination, and intelligent dialer technology without the dropped connections, spam flags, and opacity of legacy telecom aggregators.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {corePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="p-6 sm:p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/25 hover:bg-foreground/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 text-foreground">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-medium text-foreground tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-foreground/5 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Pillar 0{i + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Metrics & Engineering Ethos */}
        <div className="border border-foreground/15 rounded-2xl p-5 sm:p-8 lg:p-12 bg-foreground/[0.02]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-3">
                Architectural Commitment
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display tracking-tight text-foreground mb-3 sm:mb-4">
                Carrier-grade VoIP routes first. Intelligent dialer systems always.
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
                We do not sell fragile hype. We engineer rock-solid wholesale voice termination, direct CLI route interconnects, and responsive dialer suites that directly enhance your call center&apos;s connection rates and bottom line.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button 
                  onClick={() => openDemo({ interest: "Direct VoIP Routes & SIP Trunking" })}
                  className="w-full sm:w-auto justify-center bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 h-12 text-sm font-medium group cursor-pointer"
                >
                  Book Infrastructure Walkthrough
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center px-6 h-12 rounded-full border border-foreground/20 text-sm font-medium hover:bg-foreground/5 transition-colors"
                >
                  Contact Our Engineering Team
                </a>
              </div>
            </div>

            {/* Stats list */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-5 rounded-xl border border-foreground/10 bg-background">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Activity className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase">Network SLA</span>
                </div>
                <div className="text-3xl font-display text-foreground">99.999%</div>
                <div className="text-[11px] text-muted-foreground mt-1">Multi-region carrier failover</div>
              </div>

              <div className="p-5 rounded-xl border border-foreground/10 bg-background">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Zap className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase">Jitter &amp; Latency</span>
                </div>
                <div className="text-3xl font-display text-foreground">&lt;40ms</div>
                <div className="text-[11px] text-muted-foreground mt-1">Across continental US nodes</div>
              </div>

              <div className="p-5 rounded-xl border border-foreground/10 bg-background">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Globe2 className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase">Daily Calls</span>
                </div>
                <div className="text-3xl font-display text-foreground">1M+</div>
                <div className="text-[11px] text-muted-foreground mt-1">Seamless high-density throughput</div>
              </div>

              <div className="p-5 rounded-xl border border-foreground/10 bg-background">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase">Attestation</span>
                </div>
                <div className="text-3xl font-display text-foreground">A-Level</div>
                <div className="text-[11px] text-muted-foreground mt-1">STIR/SHAKEN certified calls</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
