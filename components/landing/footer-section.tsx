"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Solutions: [
    { name: "Direct CLI VoIP Routes", href: "#features" },
    { name: "Wholesale SIP Trunking", href: "#features" },
    { name: "Predictive & Power Dialers", href: "#how-it-works" },
    { name: "Global Voice PoPs", href: "#network" },
    { name: "VoIP & Dialer Pricing", href: "#pricing" },
  ],
  Developers: [
    { name: "Telephony SDK", href: "#developers" },
    { name: "SIP Interconnect Guide", href: "#developers" },
    { name: "API Documentation", href: "#developers" },
    { name: "STIR/SHAKEN Compliance", href: "#security" },
  ],
  Company: [
    { name: "About Voice Era", href: "#about" },
    { name: "Industry Verticals", href: "#industries" },
    { name: "Network Status", href: "#network" },
    { name: "Contact Specialists", href: "#contact" },
  ],
  Legal: [
    { name: "TCPA & FDCPA Safeguards", href: "#security" },
    { name: "Privacy Policy", href: "#contact" },
    { name: "Terms of Service", href: "#contact" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
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
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-foreground/20 bg-black shadow-md flex items-center justify-center shrink-0 group-hover:border-foreground/40 transition-colors">
                  <Image 
                    src="/logo.png" 
                    alt="Voice Era Tech LLC" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-medium text-foreground tracking-tight">Voice Era Tech</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">VoIP Routes &amp; Dialer Systems</div>
                </div>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs text-sm">
                Carrier-grade VoIP routes, wholesale voice termination, and intelligent dialer systems for call centers and enterprises that connect with customers.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2025 Voice Era Tech LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
