"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import { useDemoModal } from "./demo-modal-context";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { openDemo } = useDemoModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left content */}
              <div className="flex-1 w-full">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display tracking-tight mb-6 sm:mb-8 leading-[0.95]">
                  Ready to elevate
                  <br />
                  your voice routes?
                </h2>

                <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-xl">
                  See how Voice Era Tech LLC powers higher connection rates with direct Tier-1 VoIP routes and intelligent dialer systems engineered for modern contact centers.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto">
                  <Button
                    size="lg"
                    onClick={() => openDemo({ interest: "Direct VoIP Routes & SIP Trunking" })}
                    className="w-full sm:w-auto justify-center bg-foreground hover:bg-foreground/90 text-background px-8 h-12 sm:h-14 text-sm sm:text-base rounded-full group cursor-pointer shadow-sm"
                  >
                    Test Routes & Book Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full sm:w-auto justify-center h-12 sm:h-14 px-8 text-sm sm:text-base rounded-full border-foreground/20 hover:bg-foreground/5 cursor-pointer"
                  >
                    Contact us
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8 font-mono">
                  Carrier-grade VoIP routes first. Intelligent dialer systems always.
                </p>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
