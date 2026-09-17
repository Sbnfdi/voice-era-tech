"use client";

import React from "react";
import { 
  Cpu, 
  Server, 
  ShieldCheck, 
  Headphones 
} from "lucide-react";

export function AboutSection() {
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
      title: "24/5 US-Based Engineering NOC",
      description: "Proactive carrier route health supervision, automated failover routing, and direct access to senior VoIP architects who know your dialer stack throughout active calling weeks."
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 border-t border-primary/20 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-primary">
              About Voice Era Tech LLC
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight text-foreground leading-[1.05] mb-4 sm:mb-6">
            Built for <span className="text-gold-gradient">Mission-Critical</span> Voice Operations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Founded with a singular mission: to provide bulletproof Tier-1 VoIP routes, wholesale voice termination, and intelligent dialer technology without the dropped connections, spam flags, and opacity of legacy telecom aggregators.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {corePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-card/60 hover:border-primary/50 hover:bg-card/90 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-[0_0_25px_rgba(223,183,108,0.1)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-medium text-foreground tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-primary/10 font-mono text-[10px] text-primary/70 uppercase tracking-widest">
                  Pillar 0{i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
