"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldAlert,
  ShieldCheck,
  FileText,
  Search,
  AlertTriangle,
  Building2,
  Mail,
  Printer,
  ChevronRight,
  ExternalLink,
  BookOpen,
  PhoneCall,
  Globe,
  Radio,
  Menu,
  X,
  Scale
} from "lucide-react";
import { AUP_SECTIONS, AUP_METADATA } from "./aupData";

export default function AupContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return AUP_SECTIONS;
    const q = searchQuery.toLowerCase();
    return AUP_SECTIONS.filter((section) => {
      const inTitle = section.title.toLowerCase().includes(q);
      const inNumber = section.number.toLowerCase().includes(q);
      const inSummary = section.summary.toLowerCase().includes(q);
      const inParagraphs = section.paragraphs.some((p) => p.toLowerCase().includes(q));
      const inSubsections = section.subsections?.some((sub) =>
        sub.heading.toLowerCase().includes(q) ||
        sub.items?.some((item) => item.toLowerCase().includes(q))
      );
      return inTitle || inNumber || inSummary || inParagraphs || inSubsections;
    });
  }, [searchQuery]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    setIsMobileTocOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen text-foreground pb-24 bg-background">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Top Breadcrumb & Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Back to Homepage</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg border border-border/60 bg-card/60 hover:bg-muted/80 text-[11px] sm:text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Print / PDF</span>
            </button>
            <Link
              href="/terms"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-border/60 bg-card/60 hover:bg-muted/80 text-[11px] sm:text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Terms of Service</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-border/60 bg-card/60 hover:bg-muted/80 text-[11px] sm:text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Privacy Policy</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Hero Header */}
        <header className="relative p-6 sm:p-8 md:p-10 rounded-2xl border border-border/70 bg-gradient-to-b from-card/90 to-card/40 backdrop-blur-md mb-8 sm:mb-12 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <ShieldAlert className="w-3 h-3" />
              Telecommunications Policy
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-muted-foreground bg-muted/60 border border-border/50">
              Version {AUP_METADATA.version}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-muted-foreground bg-muted/60 border border-border/50">
              FCC &bull; STIR/SHAKEN &bull; TCPA
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground tracking-tight mb-3">
            Acceptable Use Policy (AUP)
          </h1>

          <p className="text-base sm:text-lg text-primary font-medium mb-3">
            Voice Era Tech LLC
          </p>

          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed mb-6">
            This Acceptable Use Policy (&ldquo;AUP&rdquo;) describes acceptable and prohibited uses of telecommunications and related services provided by Voice Era Tech LLC (&ldquo;Voice Era Tech,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By purchasing, accessing, or using Voice Era Tech Services, the customer (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) agrees to comply with this AUP, our Terms &amp; Conditions, and all applicable laws and regulations.
          </p>

          {/* Metadata pill list */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/50 text-xs font-mono text-muted-foreground">
            <div>
              <span className="text-foreground/60 block text-[10px] uppercase">Entity</span>
              <span className="text-foreground font-medium">{AUP_METADATA.company}</span>
            </div>
            <div>
              <span className="text-foreground/60 block text-[10px] uppercase">Effective Date</span>
              <span className="text-foreground">{AUP_METADATA.effectiveDate}</span>
            </div>
            <div>
              <span className="text-foreground/60 block text-[10px] uppercase">Jurisdiction</span>
              <span className="text-foreground">{AUP_METADATA.jurisdiction}</span>
            </div>
            <div>
              <span className="text-foreground/60 block text-[10px] uppercase">Scope</span>
              <span className="text-foreground">Global Carrier &amp; Wholesale</span>
            </div>
          </div>
        </header>

        {/* Mobile TOC Drawer Trigger */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
            type="button"
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border/70 bg-card/80 text-sm font-medium text-foreground"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Table of Contents ({AUP_SECTIONS.length} Sections)</span>
            </span>
            {isMobileTocOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          {isMobileTocOpen && (
            <div className="mt-2 p-3 rounded-xl border border-border/70 bg-card/95 backdrop-blur-md space-y-1">
              {AUP_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  type="button"
                  className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-muted/70 transition-colors flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <span className="font-mono text-primary font-bold">{sec.number}.</span>
                  <span className="truncate">{sec.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search AUP rules, TCPA, CLI spoofing, STIR/SHAKEN, traceback, dialer regulations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/70 bg-card/60 focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground hover:text-foreground px-2 py-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* Two-column layout: Sticky Desktop TOC + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-4">
            <div className="p-5 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                <BookOpen className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  Policy Navigation
                </h3>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {AUP_SECTIONS.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      type="button"
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-start gap-2.5 cursor-pointer ${
                        isActive
                          ? "bg-primary/15 text-primary font-medium border border-primary/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-mono text-[11px] font-bold shrink-0 mt-0.5">
                        {sec.number}.
                      </span>
                      <span className="line-clamp-2 leading-relaxed">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="p-4 rounded-xl border border-border/50 bg-card/30 text-xs text-muted-foreground space-y-2">
              <div className="flex items-center gap-1.5 font-medium text-foreground">
                <Building2 className="w-3.5 h-3.5 text-primary" />
                <span>Compliance &amp; NOC Desk</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Questions or compliance notifications regarding this AUP should be directed to the Voice Era Tech legal and regulatory team.
              </p>
              <div className="pt-2 border-t border-border/40 font-mono text-[11px] space-y-1">
                <div>
                  <a href="mailto:support@voiceeratech.com" className="text-primary hover:underline">
                    support@voiceeratech.com
                  </a>
                </div>
                <div>
                  <a href="tel:+15123332777" className="text-muted-foreground hover:text-foreground">
                    +1 (512) 333-2777
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Column */}
          <main className="lg:col-span-8 space-y-8">
            {filteredSections.length === 0 ? (
              <div className="p-10 rounded-2xl border border-border/60 bg-card/40 text-center space-y-3">
                <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
                <h3 className="text-base font-semibold text-foreground">No matching provisions found</h3>
                <p className="text-xs text-muted-foreground">
                  No section matched your search query &ldquo;{searchQuery}&rdquo;. Try another term or clear the filter.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  type="button"
                  className="px-4 py-2 rounded-lg bg-primary/20 text-primary text-xs font-mono font-medium hover:bg-primary/30 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md space-y-5 transition-all hover:border-border scroll-mt-24 shadow-sm"
                >
                  {/* Section Title */}
                  <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-4">
                    <div>
                      <div className="inline-block font-mono text-xs uppercase tracking-wider text-primary font-bold mb-1">
                        Section {sec.number}
                      </div>
                      <h2 className="text-lg sm:text-xl font-display font-medium text-foreground tracking-tight">
                        {sec.title}
                      </h2>
                    </div>
                  </div>

                  {/* Summary / Lead paragraph */}
                  <p className="text-xs sm:text-sm font-medium text-foreground/90 bg-muted/30 p-3 rounded-lg border border-border/40 leading-relaxed">
                    {sec.summary}
                  </p>

                  {/* Paragraphs */}
                  <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Subsections with items */}
                  {sec.subsections && sec.subsections.length > 0 && (
                    <div className="space-y-4 pt-2">
                      {sec.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                            {sub.heading}
                          </h4>
                          {sub.items && (
                            <ul className="space-y-1.5 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                              {sub.items.map((item, iIdx) => (
                                <li key={iIdx} className="list-disc leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlight Callout Box */}
                  {sec.callout && (
                    <div
                      className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
                        sec.callout.type === "warning"
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-200"
                          : sec.callout.type === "shield"
                          ? "bg-primary/10 border-primary/30 text-primary"
                          : "bg-blue-500/10 border-blue-500/30 text-blue-200"
                      }`}
                    >
                      <div className="font-semibold flex items-center gap-1.5">
                        {sec.callout.type === "warning" ? (
                          <AlertTriangle className="w-3.5 h-3.5" />
                        ) : (
                          <ShieldCheck className="w-3.5 h-3.5" />
                        )}
                        <span>{sec.callout.title}</span>
                      </div>
                      <p className="text-foreground/80">{sec.callout.text}</p>
                    </div>
                  )}
                </article>
              ))
            )}

            {/* Official Contact Box */}
            <section
              id="contact-info"
              className="p-6 sm:p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-md space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-border/50">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-base sm:text-lg font-display font-semibold text-foreground">
                  Contact Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">{AUP_METADATA.contact.entity}</div>
                  <div>5900 BALCONES DR STE 47229,</div>
                  <div>AUSTIN, TX 78731</div>
                  <div>United States</div>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-primary" />
                    <a
                      href={AUP_METADATA.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline truncate"
                    >
                      {AUP_METADATA.contact.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <a
                      href={`mailto:${AUP_METADATA.contact.email}`}
                      className="text-foreground hover:underline"
                    >
                      {AUP_METADATA.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-primary" />
                    <a
                      href={`tel:${AUP_METADATA.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-foreground hover:underline"
                    >
                      {AUP_METADATA.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-muted-foreground">
                <span>&copy; 2026 Voice Era Tech LLC. All rights reserved.</span>
                <div className="flex items-center gap-3">
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms &amp; Conditions
                  </Link>
                  <span>&bull;</span>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
