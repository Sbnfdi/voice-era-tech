"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, UserCheck, Building2, ChevronRight } from "lucide-react";
import { useDemoModal } from "./demo-modal-context";

const navLinks = [
  { name: "VoIP Routes", href: "#features" },
  { name: "Dialers", href: "#how-it-works" },
  { name: "Network", href: "#network" },
  { name: "Expert Consultation", href: "#expert" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const { openDemo } = useDemoModal();

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

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
            ? "bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] max-w-[1200px]"
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
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-primary/30 bg-black shadow-[0_0_15px_rgba(223,183,108,0.15)] flex items-center justify-center shrink-0 group-hover:border-primary/60 transition-colors">
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
                  Voice <span className="text-gold-gradient">Era</span> Tech
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#DFB76C] bg-[#DFB76C]/10 border border-[#DFB76C]/30 rounded px-1.5 py-0.5 hidden xs:inline-block">
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
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#DFB76C] to-[#F5D77F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA Dropdown */}
          <div 
            className="hidden sm:block relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 bg-gold-gradient text-primary-foreground font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(223,183,108,0.25)] hover:brightness-110 cursor-pointer ${
                isScrolled ? "px-4 h-8 text-xs" : "px-5 sm:px-6 h-10 text-sm"
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>Get Started</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div 
                className="absolute right-0 top-full mt-2.5 w-[360px] rounded-2xl p-2.5 bg-[#121214]/98 backdrop-blur-2xl border border-[#DFB76C]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(223,183,108,0.15)] z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="px-3 pt-2 pb-1.5 border-b border-white/10 mb-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFB76C] font-semibold">
                    Select Onboarding Category
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">KYC / Compliance</span>
                </div>

                <Link
                  href="/kyc"
                  onClick={() => setIsDropdownOpen(false)}
                  className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/15 border border-[#DFB76C]/30 flex items-center justify-center text-[#DFB76C] shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-[#DFB76C]/25 transition-all">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white group-hover:text-[#DFB76C] transition-colors">
                        End User
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                        Enterprise
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Direct VoIP routes, retail dialers, call centers &amp; customer onboarding KYC form.
                    </p>
                  </div>
                </Link>

                <div className="my-1 border-t border-white/5" />

                <Link
                  href="/wholesale"
                  onClick={() => setIsDropdownOpen(false)}
                  className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-[#DFB76C]/30 transition-all bg-gradient-to-r from-transparent to-[#DFB76C]/[0.03] text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 shadow-[0_0_15px_rgba(223,183,108,0.3)] transition-all">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white group-hover:text-[#DFB76C] transition-colors">
                        Wholesaler
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#DFB76C]/20 text-[#DFB76C] font-semibold border border-[#DFB76C]/30">
                        Carrier Application
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Wholesale interconnect, high-CPS SIP trunking, FCC/RMD IDs, ITG tracebacks &amp; banking.
                    </p>
                  </div>
                </Link>
              </div>
            )}
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
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-primary/30 bg-black shadow-[0_0_15px_rgba(223,183,108,0.15)] flex items-center justify-center">
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
                  Voice <span className="text-gold-gradient">Era</span> Tech
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
                className={`text-3xl sm:text-4xl font-display text-foreground hover:text-[#DFB76C] transition-all duration-300 py-1 ${
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
          <div className={`flex flex-col gap-3 pt-6 border-t border-foreground/10 transition-all duration-300 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "250ms" : "0ms" }}
          >
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
              Select Onboarding Category:
            </div>
            <Link
              href="/kyc"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900 border border-zinc-700/80 hover:border-[#DFB76C] text-left transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#DFB76C]/10 text-[#DFB76C] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">End User KYC</div>
                  <div className="text-xs text-zinc-400">Direct VoIP Routes &amp; Enterprise Telephony</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>

            <Link
              href="/wholesale"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gold-gradient text-primary-foreground font-semibold shadow-[0_0_20px_rgba(223,183,108,0.25)] hover:brightness-110 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-black/20 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Wholesale Application</div>
                  <div className="text-xs text-primary-foreground/85">Carrier Interconnect &amp; High-CPS Trunking</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
