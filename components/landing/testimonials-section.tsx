"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Switching to Voice Era Tech's direct CLI VoIP routes took our contact center answer rate from 62% to 89%. Their integrated dialer gives our 250+ agents uninterrupted voice traffic.",
    author: "Sarah Chen",
    role: "VP of Telephony Operations",
    company: "Meridian Communications",
    metric: "+27% live answer rate",
  },
  {
    quote: "Their wholesale VoIP routes eliminated our carrier SPAM flags overnight. Having a dialer system natively tuned to their Tier-1 voice trunks is unbeatable.",
    author: "Marcus Webb",
    role: "Director of Contact Infrastructure",
    company: "Apex BPO Solutions",
    metric: "99.999% route uptime",
  },
  {
    quote: "Sub-30ms voice latency across all North American routes. Even when our dialer scales to 15,000 concurrent calls, Voice Era's VoIP routes never flinch.",
    author: "Elena Rodriguez",
    role: "Chief Technology Officer",
    company: "OmniVoice Global",
    metric: "<25ms average latency",
  },
  {
    quote: "The direct SIP interconnect was live in under an hour. Pristine audio quality, zero packet drop, and transparent per-minute wholesale billing.",
    author: "James Liu",
    role: "Managing Director",
    company: "Nexus Telecom",
    metric: "12M+ monthly minutes",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 border-t border-foreground/10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What call leaders say
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.1] tracking-tight text-foreground">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div
              className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground">
                  {activeTestimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">{activeTestimonial.author}</p>
                <p className="text-muted-foreground">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border border-foreground/10 transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display text-3xl md:text-4xl text-foreground">
                {activeTestimonial.metric}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2 transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos Marquee Label */}
        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Trusted by forward-thinking teams
          </p>
        </div>
      </div>
      
      {/* Full-width marquee outside container */}
      <div className="w-full">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {["Meridian Labs", "Flux Systems", "Beacon AI", "Prism Analytics", "Nova Tech", "Quantum Corp", "Atlas Digital", "Vertex Labs"].map(
                (company) => (
                  <span
                    key={`${setIdx}-${company}`}
                    className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
