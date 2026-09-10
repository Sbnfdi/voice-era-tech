"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";
import { useDemoModal } from "./demo-modal-context";

const words = ["connect", "convert", "scale", "serve"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const { openDemo } = useDemoModal();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-16 sm:py-32 lg:py-40">
        {/* Category tag */}
        <div 
          className={`mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground">
            <span className="w-6 sm:w-8 h-px bg-foreground/30" />
            Carrier-Grade VoIP Routes & Wholesale Voice Termination
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-8 sm:mb-12">
          <h1 
            className={`text-[clamp(2.5rem,8.5vw,8.5rem)] font-display leading-[0.95] sm:leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Calls that move</span>
            <span className="block">
              your business{" "}
              <span className="relative inline-block">
                <span 
                  key={wordIndex}
                  className="inline-flex"
                >
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-foreground/10" />
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-end">
          <p 
            className={`text-base sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Direct Tier-1 CLI routes, ultra-low latency termination, and global SIP trunking engineered for high-concurrency call centers—backed by intelligent predictive and power dialer systems.
          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              onClick={() => openDemo({ interest: "Direct VoIP Routes & SIP Trunking" })}
              className="w-full sm:w-auto justify-center bg-foreground hover:bg-foreground/90 text-background px-8 h-12 sm:h-14 text-sm sm:text-base rounded-full group cursor-pointer shadow-sm"
            >
              Get VoIP Routes & Demo
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("features")}
              className="w-full sm:w-auto justify-center h-12 sm:h-14 px-8 text-sm sm:text-base rounded-full border-foreground/20 hover:bg-foreground/5 cursor-pointer"
            >
              Explore VoIP Routes
            </Button>
          </div>
        </div>
        
      </div>
      
      {/* Stats marquee - full width outside container */}
      <div 
        className={`relative mt-8 sm:mt-16 lg:mt-0 lg:absolute lg:bottom-16 left-0 right-0 overflow-hidden transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-8 sm:gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 sm:gap-16">
              {[
                { value: "500M+", label: "minutes terminated / mo", company: "VOICE ERA" },
                { value: "99.999%", label: "voice route SLA", company: "VOICE ERA" },
                { value: "<30ms", label: "average PDD latency", company: "VOICE ERA" },
                { value: "10K+", label: "dialer agents supported", company: "VOICE ERA" },
              ].map((stat, statIndex) => (
                <div key={`${stat.company}-${i}-${statIndex}`} className="flex items-baseline gap-2 sm:gap-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-display">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-[10px] sm:text-xs mt-0.5 sm:mt-1">{stat.company}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      
    </section>
  );
}
