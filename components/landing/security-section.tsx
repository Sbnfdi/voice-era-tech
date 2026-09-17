"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "TCPA / DNC controls",
    description: "Keep campaigns aligned with consent, suppression, and contact-time rules.",
  },
  {
    icon: Lock,
    title: "Call recording",
    description: "Capture conversations securely for coaching, quality assurance, and accountability.",
  },
  {
    icon: Eye,
    title: "Role-based access",
    description: "Give agents, supervisors, and administrators exactly the access they need.",
  },
  {
    icon: FileCheck,
    title: "Audit-ready reporting",
    description: "Trace campaign activity, outcomes, recordings, and changes from one place.",
  },
];

const certifications = ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "CCPA"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-primary" />
              Security &bull; STIR/SHAKEN
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8 text-foreground">
              Trust is
              <br />
              <span className="text-gold-gradient">non-negotiable.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Carrier-grade compliance isn&apos;t optional. It&apos;s cryptographically engineered into every voice route, from Level-A STIR/SHAKEN attestation to automated National DNC scrubbing.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-4 py-2 border border-primary/30 bg-primary/5 rounded-full text-xs sm:text-sm font-mono text-[#DFB76C] transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border border-primary/20 rounded-2xl bg-card/60 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(223,183,108,0.12)] transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border border-primary/25 bg-primary/10 text-primary group-hover:bg-gold-gradient group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground group-hover:translate-x-1 group-hover:text-primary transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
