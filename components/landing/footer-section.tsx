"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Facebook } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { TermsDialog } from "./terms-dialog";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.47V8.58a8.28 8.28 0 0 0 4.85 1.57v-3.46z" />
    </svg>
  );
}

const footerLinks = {
  Solutions: [
    { name: "Direct CLI VoIP Routes", href: "#features" },
    { name: "Wholesale SIP Trunking", href: "#features" },
    { name: "Predictive & Power Dialers", href: "#how-it-works" },
    { name: "End-User KYC Onboarding", href: "/kyc" },
    { name: "Wholesale Application", href: "/wholesale" },
    { name: "Consult with an Expert", href: "#expert" },
  ],
  Platform: [
    { name: "SIP Interconnect", href: "#features" },
    { name: "Telephony Routing Architecture", href: "#how-it-works" },
    { name: "STIR/SHAKEN Level-A", href: "#security" },
    { name: "24/5 NOC Supervision", href: "#network" },
  ],
  Company: [
    { name: "About Voice Era", href: "#about" },
    { name: "Network Status (24/5)", href: "#network" },
    { name: "Consult with an Expert", href: "#expert" },
    { name: "Direct Sales & Support", href: "#contact" },
  ],
  Legal: [
    { name: "TCPA & FDCPA Safeguards", href: "#security" },
    { name: "Privacy Policy", href: "#contact" },
    { name: "Terms of Service", href: "/terms", isTerms: true },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { name: "TikTok", href: "https://www.tiktok.com", icon: TikTokIcon },
];

export function FooterSection() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-3.5 mb-6 group">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-primary/30 bg-black shadow-[0_0_15px_rgba(223,183,108,0.15)] flex items-center justify-center shrink-0 group-hover:border-primary/60 transition-colors">
                  <Image 
                    src="/logo.png" 
                    alt="Voice Era Tech LLC" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-medium text-foreground tracking-tight">Voice <span className="text-gold-gradient">Era</span> Tech</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-[#DFB76C]">VoIP Routes &amp; Dialer Systems</div>
                </div>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs text-sm">
                Carrier-grade VoIP routes, wholesale voice termination, and intelligent dialer systems for call centers and enterprises that connect with customers.
              </p>

              {/* Social Links: LinkedIn, FB, Instagram, TikTok Icons */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                      className="w-9 h-9 rounded-xl border border-foreground/15 bg-foreground/[0.03] flex items-center justify-center text-muted-foreground hover:text-[#DFB76C] hover:border-[#DFB76C]/50 hover:bg-[#DFB76C]/10 transition-all duration-200 group shadow-sm"
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6 text-foreground">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      {"isTerms" in link && link.isTerms ? (
                        <button
                          type="button"
                          onClick={() => setIsTermsOpen(true)}
                          className="text-sm text-muted-foreground hover:text-[#DFB76C] transition-colors inline-flex items-center gap-2 cursor-pointer text-left"
                        >
                          {link.name}
                        </button>
                      ) : link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-[#DFB76C] transition-colors inline-flex items-center gap-2"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-[#DFB76C] transition-colors inline-flex items-center gap-2"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: 2026 Voice Era */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Voice Era Tech LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              NOC active (24/5) &bull; All routes operational
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Terms of Service Dialog */}
      <TermsDialog 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      />
    </footer>
  );
}
