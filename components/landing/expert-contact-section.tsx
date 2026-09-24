"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "./demo-modal-context";
import { 
  Headphones, 
  ArrowRight, 
  Server, 
  ShieldCheck, 
  Mail, 
  CheckCircle2, 
  Cpu
} from "lucide-react";

export function ExpertContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { openDemo } = useDemoModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const consultationAreas = [
    {
      icon: Server,
      title: "Wholesale VoIP Routes & Trunks",
      tagline: "Direct CLI Tier-1 Interconnects",
      description: "Discuss route quality, custom destination rate decks, sub-30ms PDD routing, and high-concurrency SIP trunking designed for high-volume dialer operations.",
      features: ["Custom Rate Decks", "Sub-30ms PDD", "Live ASR/ACD Analytics"],
      actionLabel: "Consult on VoIP Routes",
      interest: "Direct VoIP Routes & SIP Trunking"
    },
    {
      icon: Cpu,
      title: "Dialer Engineering & Deployment",
      tagline: "Predictive, Power & BYO Integration",
      description: "Work directly with telephony architects to configure hosted predictive dialers or bridge native carrier routes into Vicidial, Asterisk, FreePBX, or Genesys.",
      features: ["High-CPS dialer clusters", "400ms AMD detection", "Multi-tenant setups"],
      actionLabel: "Consult on Dialer Systems",
      interest: "VoIP Routes + Hosted Dialer Suite"
    },
    {
      icon: ShieldCheck,
      title: "STIR/SHAKEN & Compliance Audit",
      tagline: "Cryptographic Attestation & DNC",
      description: "Audit your outbound caller ID reputation, implement Level-A STIR/SHAKEN signing certificates, and establish automated National DNC compliance filters.",
      features: ["Level-A Attestation", "TCPA Safe-Harbor", "Automated DNC Scrubbing"],
      actionLabel: "Consult on Compliance",
      interest: "STIR/SHAKEN & Compliance Audit"
    }
  ];

  return (
    <section 
      id="expert" 
      ref={sectionRef} 
      className="relative py-20 sm:py-28 lg:py-36 border-t border-foreground/10 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              Direct Engineering Consultation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight text-foreground leading-[1.05] mb-4 sm:mb-6">
            Consult with an <span className="text-gold-gradient">Expert</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Skip sales gatekeepers. Speak directly with senior VoIP architects and telephony engineers who can review your call center volume, SIP routing requirements, and dialer infrastructure in detail.
          </p>
        </div>

        {/* 3 Consultation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {consultationAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div 
                key={area.title}
                className={`p-6 sm:p-8 rounded-2xl border border-primary/20 bg-card/60 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(223,183,108,0.12)] transition-all duration-500 flex flex-col justify-between ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-mono text-primary uppercase tracking-wider mb-1 font-semibold">
                    {area.tagline}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-foreground tracking-tight mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2 mb-8 pt-4 border-t border-border">
                    {area.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => openDemo({ interest: area.interest })}
                  className="w-full bg-gold-gradient text-primary-foreground font-semibold hover:brightness-110 rounded-full h-11 text-xs sm:text-sm shadow-[0_0_20px_rgba(223,183,108,0.2)] group cursor-pointer transition-all"
                >
                  {area.actionLabel}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Banner */}
        <div className="rounded-2xl border border-primary/20 p-6 sm:p-8 lg:p-10 bg-card/50 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Rapid Response Engineering Line
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display text-foreground">
              Need immediate technical consultation or a custom rate sheet?
            </h4>
            <p className="text-sm text-muted-foreground max-w-xl">
              Our NOC and systems engineering specialists are available 24/5 to assist with route provisioning and dialer troubleshooting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="mailto:support@voiceeratech.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full bg-gold-gradient text-[#09090D] text-xs sm:text-sm font-semibold hover:opacity-90 shadow-[0_0_20px_rgba(223,183,108,0.2)] transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Email Support Desk
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full border border-primary/30 text-foreground text-xs sm:text-sm font-medium hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Headphones className="w-4 h-4 text-primary" />
              Open Support Ticket
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
