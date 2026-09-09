"use client";

import { useEffect, useState, useRef } from "react";

const locations = [
  { city: "Predictive queue", region: "Campaign engine", latency: "Live" },
  { city: "Agent workspace", region: "Call controls", latency: "Live" },
  { city: "CRM sync", region: "Customer context", latency: "Live" },
  { city: "Compliance layer", region: "TCPA / DNC", latency: "Ready" },
  { city: "Analytics hub", region: "Real-time reporting", latency: "Live" },
  { city: "IVR routing", region: "Inbound experience", latency: "Ready" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-px bg-foreground/30" />
              Dialer infrastructure
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display tracking-tight mb-6 sm:mb-8">
              Every call.
              <br />
              Fully visible.
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-12">
              Put your operation in control. Voice Era Tech brings dialing, routing, agent monitoring, CRM context, analytics, and compliance into one dependable system.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-4 sm:p-0 rounded-xl bg-foreground/[0.02] sm:bg-transparent border border-foreground/10 sm:border-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display mb-1 sm:mb-2">1M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Calls handled</div>
              </div>
              <div className="p-4 sm:p-0 rounded-xl bg-foreground/[0.02] sm:bg-transparent border border-foreground/10 sm:border-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display mb-1 sm:mb-2">99.99%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Platform uptime</div>
              </div>
              <div className="p-4 sm:p-0 rounded-xl bg-foreground/[0.02] sm:bg-transparent border border-foreground/10 sm:border-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display mb-1 sm:mb-2">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Agents supported</div>
              </div>
            </div>
          </div>

          {/* Right: Location list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Voice Era Command Center</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  All systems operational
                </span>
              </div>

              {/* Locations */}
              <div>
                {locations.map((location, index) => (
                  <div
                    key={location.city}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeLocation === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeLocation === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{location.city}</div>
                        <div className="text-sm text-muted-foreground">{location.region}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{location.latency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
