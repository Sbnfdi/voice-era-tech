"use client";

import { useEffect, useState, useRef } from "react";

const locations = [
  { city: "US-East (Ashburn)", region: "Tier-1 Voice PoP & Interconnect", latency: "< 8ms" },
  { city: "US-West (San Jose)", region: "Direct CLI Carrier Gateway", latency: "< 12ms" },
  { city: "Europe (Frankfurt)", region: "E.164 Wholesale Route Hub", latency: "< 18ms" },
  { city: "UK (London)", region: "Dual-Redundant SIP Gateway", latency: "< 14ms" },
  { city: "Asia-Pacific (Singapore)", region: "High-Density APAC Node", latency: "< 28ms" },
  { city: "Central Dialer Cluster", region: "Hosted Predictive Engine & STIR/SHAKEN", latency: "Live" },
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
    <section 
      id="network" 
      ref={sectionRef} 
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden scroll-mt-16 sm:scroll-mt-20"
    >
      <div id="infrastructure" className="sr-only -top-24 absolute pointer-events-none" aria-hidden="true" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-px bg-primary" />
              Global VoIP Route Network
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display tracking-tight mb-6 sm:mb-8 text-foreground">
              Every packet.
              <br />
              <span className="text-gold-gradient">Carrier-grade routes.</span>
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-12">
              Engineered for uncompromising throughput. Voice Era Tech LLC powers high-capacity VoIP termination, direct CLI routes, and dedicated SIP trunking backed by redundant Tier-1 carrier interconnects and integrated dialer systems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-4 sm:p-0 rounded-xl bg-card/40 sm:bg-transparent border border-border sm:border-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display mb-1 sm:mb-2 text-gold-gradient">500M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Minutes terminated / mo</div>
              </div>
              <div className="p-4 sm:p-0 rounded-xl bg-card/40 sm:bg-transparent border border-border sm:border-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display mb-1 sm:mb-2 text-gold-gradient">99.999%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Voice route SLA</div>
              </div>
              <div className="p-4 sm:p-0 rounded-xl bg-card/40 sm:bg-transparent border border-border sm:border-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display mb-1 sm:mb-2 text-gold-gradient">&lt;30ms</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average PDD latency</div>
              </div>
            </div>
          </div>

          {/* Right: Location list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-primary/20 rounded-2xl bg-card/60 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border bg-primary/5 flex items-center justify-between">
                <span className="text-sm font-mono text-[#DFB76C]">Voice Era Global Voice Network</span>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  All carrier routes active
                </span>
              </div>

              {/* Locations */}
              <div>
                {locations.map((location, index) => (
                  <div
                    key={location.city}
                    className={`px-6 py-5 border-b border-border/50 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeLocation === index ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeLocation === index ? "bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]" : "bg-muted-foreground/30"
                        }`}
                      />
                      <div>
                        <div className="font-medium text-foreground">{location.city}</div>
                        <div className="text-sm text-muted-foreground">{location.region}</div>
                      </div>
                    </div>
                    <span className={`font-mono text-sm transition-colors duration-300 ${
                      activeLocation === index ? "text-[#DFB76C] font-semibold" : "text-muted-foreground"
                    }`}>
                      {location.latency}
                    </span>
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
