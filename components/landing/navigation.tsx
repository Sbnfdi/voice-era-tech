"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useDemoModal } from "./demo-modal-context";

const navLinks = [
  { name: "VoIP Routes", href: "#features" },
  { name: "Dialers", href: "#how-it-works" },
  { name: "Industries", href: "#industries" },
  { name: "Network", href: "#network" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openDemo } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/90 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-xl max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
            isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
          }`}
        >
          {/* Official Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-foreground/20 bg-black shadow-md flex items-center justify-center shrink-0 group-hover:border-foreground/40 transition-colors">
              <Image 
                src="/logo.png" 
                alt="Voice Era Tech LLC" 
                width={40} 
                height={40} 
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`font-display font-medium tracking-tight transition-all duration-500 text-foreground ${isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"}`}>
                  Voice Era Tech
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-foreground/15 rounded px-1 py-0.5 hidden xs:inline-block">
                  LLC
                </span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-muted-foreground hidden md:block -mt-0.5">
                VoIP Routes &bull; Dialer Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-11">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`text-foreground/70 hover:text-foreground transition-all duration-300 font-medium ${isScrolled ? "text-xs" : "text-sm"}`}
            >
              Client portal
            </a>
            <Button
              onClick={() => openDemo()}
              size="sm"
              className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-300 cursor-pointer shadow-sm ${isScrolled ? "px-4 h-8 text-xs" : "px-5 sm:px-6 h-10 text-sm"}`}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-foreground/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-6 sm:px-8 pt-6 pb-8 overflow-y-auto">
          {/* Top Bar inside Mobile Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-foreground/10">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-foreground/20 bg-black shadow-sm flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Voice Era Tech LLC" 
                  width={36} 
                  height={36} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-xl font-medium tracking-tight text-foreground block">
                  Voice Era Tech
                </span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
                  VoIP Routes & Dialers
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full border border-foreground/10 text-foreground hover:bg-foreground/5"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-4 sm:gap-6 py-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-3xl sm:text-4xl font-display text-foreground hover:text-muted-foreground transition-all duration-300 py-1 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom CTAs */}
          <div className={`flex flex-col sm:flex-row gap-3 pt-6 border-t border-foreground/10 transition-all duration-300 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "250ms" : "0ms" }}
          >
            <Button 
              variant="outline" 
              className="w-full sm:flex-1 rounded-full h-12 text-sm"
              onClick={(e) => {
                handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact");
              }}
            >
              Client portal
            </Button>
            <Button 
              className="w-full sm:flex-1 bg-foreground text-background rounded-full h-12 text-sm cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openDemo();
              }}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
