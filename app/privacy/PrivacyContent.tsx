"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  Search,
  AlertTriangle,
  Lock,
  Building2,
  Mail,
  Printer,
  ChevronRight,
  BookOpen,
  Scale,
  Database,
  Radio,
  Menu,
  X
} from "lucide-react";
import { PRIVACY_SECTIONS, PRIVACY_CATEGORIES } from "./privacyData";

export default function PrivacyContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  const filteredSections = useMemo(() => {
    return PRIVACY_SECTIONS.filter((section) => {
      const matchesCategory =
        selectedCategory === "All" || section.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = section.title.toLowerCase().includes(q);
      const inNumber = section.number.toLowerCase().includes(q);
      const inCategory = section.category.toLowerCase().includes(q);
      const inSummary = section.summary.toLowerCase().includes(q);
      const inParagraphs = section.paragraphs.some((p) =>
        p.toLowerCase().includes(q)
      );
      const inBullets =
        section.bulletPoints?.some((b) => b.toLowerCase().includes(q)) ?? false;

      return inTitle || inNumber || inCategory || inSummary || inParagraphs || inBullets;
    });
  }, [searchQuery, selectedCategory]);

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
    <div className="relative min-h-screen text-foreground pb-24">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Top Breadcrumb & Actions */}
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
          </div>
        </div>

        {/* Hero Header */}
        <header className="space-y-4 pb-8 border-b border-border/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[#DFB76C] text-xs font-mono tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Voice Era Tech LLC &bull; Telecommunications Data Protection Policy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display tracking-tight text-foreground">
            Privacy Policy &amp; Data Governance
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            This Privacy Policy describes how <strong className="text-foreground font-semibold">Voice Era Tech LLC</strong> collects,
            processes, safeguards, and retains corporate, technical, and personal information across our carrier-grade VoIP termination routes,
            SIP interconnects, predictive dialer clusters, and customer onboarding systems.
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 pt-2 text-xs font-mono text-muted-foreground">
            <span>Last Updated: January 2026</span>
            <span>&bull;</span>
            <span>Registered Office: Wilmington, DE</span>
            <span>&bull;</span>
            <span className="text-[#DFB76C] font-medium">All 13 Articles Active</span>
          </div>
        </header>

        {/* TRUST BANNER: CARRIER NO-SALE & AUDIO PRIVACY GUARANTEE */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl border-2 border-primary/30 bg-primary/[0.04] space-y-3">
          <div className="flex items-center gap-2.5 text-foreground font-medium">
            <Lock className="w-5 h-5 text-[#DFB76C] shrink-0" />
            <h2 className="font-display text-base sm:text-xl tracking-tight text-[#DFB76C]">
              Enterprise Common Carrier Privacy &amp; No-Sale Pledge
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Voice Era Tech LLC operates strictly as an enterprise telecommunications carrier.
            </strong>{" "}
            We <strong className="text-foreground">never sell, monetize, or rent</strong> client phone numbers,
            corporate dossiers, or Call Detail Records (CDRs) to third parties. Furthermore, in the ordinary course
            of voice packet transmission,{" "}
            <strong className="text-foreground">
              we do not listen to, intercept, or record customer audio conversations
            </strong>.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-8 sticky top-3 sm:top-4 z-20 p-3 sm:p-4 rounded-xl bg-card/95 backdrop-blur-md border border-border/80 shadow-lg space-y-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search privacy clauses (e.g. CDR, STIR/SHAKEN, audio recording, KYC, retention, GDPR)..."
                className="w-full pl-10 pr-16 py-2 rounded-lg bg-background border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-mono"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Mobile TOC Trigger Button */}
            <button
              type="button"
              onClick={() => setIsMobileTocOpen((prev) => !prev)}
              className="lg:hidden shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-background border border-border text-xs font-mono text-muted-foreground hover:text-foreground"
              aria-label="Table of contents"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#DFB76C]" />
              <span className="hidden xs:inline">Jump</span>
            </button>
          </div>

          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            {PRIVACY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-mono transition-colors shrink-0 ${
                  selectedCategory === cat
                    ? "bg-gold-gradient text-primary-foreground font-semibold shadow-sm"
                    : "bg-background/80 border border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile TOC Collapsible Drawer */}
          {isMobileTocOpen && (
            <div className="lg:hidden p-3 rounded-lg bg-background border border-border mt-2 space-y-2 animate-in fade-in-50 duration-150 max-h-60 overflow-y-auto">
              <div className="flex items-center justify-between pb-1 border-b border-border/60 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                <span>Jump to Section ({filteredSections.length})</span>
                <button
                  onClick={() => setIsMobileTocOpen(false)}
                  className="p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-1 text-xs">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="w-full text-left py-1 px-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground truncate flex items-center gap-2"
                  >
                    <span className="font-mono text-[10px] text-[#DFB76C]">{sec.number}</span>
                    <span className="truncate">{sec.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content Layout: Sidebar + Sections */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-32 p-4 rounded-2xl border border-border/60 bg-card/40 backdrop-blur space-y-3 max-h-[calc(100vh-10rem)] overflow-y-auto">
              <div className="flex items-center gap-2 pb-2 border-b border-border/60 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <BookOpen className="w-3.5 h-3.5 text-[#DFB76C]" />
                <span>Articles ({filteredSections.length})</span>
              </div>
              <nav className="space-y-1 text-xs">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    type="button"
                    className={`w-full text-left px-2.5 py-1.5 rounded-md transition-colors line-clamp-1 flex items-center gap-2 cursor-pointer ${
                      activeSectionId === sec.id
                        ? "bg-primary/10 text-[#DFB76C] font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-muted-foreground/80 shrink-0">
                      {sec.number}
                    </span>
                    <span className="truncate">{sec.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections List */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-6 sm:space-y-8">
            {filteredSections.length === 0 ? (
              <div className="p-8 sm:p-12 text-center rounded-2xl border border-dashed border-border/80 space-y-3">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-display text-lg text-foreground">No matching privacy articles found</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Try searching with broader terms or reset your active filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="px-4 py-2 rounded-lg bg-gold-gradient text-primary-foreground font-semibold text-xs font-mono hover:brightness-110 transition-all cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-32 p-5 sm:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur space-y-4 hover:border-primary/40 transition-colors"
                >
                  {/* Section Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/40">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-muted text-foreground border border-border/60">
                        Article {sec.number}
                      </span>
                      <span className="text-xs font-mono text-[#DFB76C] tracking-wide">
                        {sec.category}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-2xl font-display text-foreground tracking-tight">
                    {sec.title}
                  </h2>

                  {/* Summary Callout */}
                  <p className="text-xs sm:text-sm text-foreground/80 font-medium italic border-l-2 border-[#DFB76C] pl-3 py-0.5">
                    {sec.summary}
                  </p>

                  {/* Paragraphs */}
                  <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="break-words">{p}</p>
                    ))}
                  </div>

                  {/* Bullet Points if applicable */}
                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <ul className="mt-3 space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground marker:text-[#DFB76C]">
                      {sec.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed pl-1 break-words">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))
            )}

            {/* Official Data Protection Contact Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/60 backdrop-blur space-y-6">
              <div className="flex items-center gap-2.5 text-foreground font-display text-lg sm:text-xl">
                <Building2 className="w-5 h-5 text-[#DFB76C]" />
                <h3>Data Protection Officer &amp; Compliance Office</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-muted-foreground">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground font-mono text-xs uppercase tracking-wider">
                    Corporate Registered Office
                  </h4>
                  <p className="leading-relaxed">
                    <strong>Voice Era Tech LLC</strong>
                    <br />
                    1209 Orange Street
                    <br />
                    Wilmington, DE 19801
                    <br />
                    United States of America
                  </p>
                  <p className="pt-1 text-xs font-mono">
                    Direct Phone:{" "}
                    <a
                      href="tel:+15123332777"
                      className="text-foreground hover:text-[#DFB76C] underline"
                    >
                      +1 (512) 333-2777
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground font-mono text-xs uppercase tracking-wider">
                    Electronic Notice &amp; Compliance Desks
                  </h4>
                  <ul className="space-y-2 font-mono text-xs">
                    <li className="flex items-center gap-2 flex-wrap">
                      <Mail className="w-3.5 h-3.5 text-[#DFB76C] shrink-0" />
                      <span>Privacy Officer:</span>
                      <a
                        href="mailto:privacy@voiceeratech.com"
                        className="text-foreground hover:text-[#DFB76C] underline"
                      >
                        privacy@voiceeratech.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2 flex-wrap">
                      <Mail className="w-3.5 h-3.5 text-[#DFB76C] shrink-0" />
                      <span>Carrier KYC Desk:</span>
                      <a
                        href="mailto:kyc@voiceeratech.com"
                        className="text-foreground hover:text-[#DFB76C] underline"
                      >
                        kyc@voiceeratech.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2 flex-wrap">
                      <Mail className="w-3.5 h-3.5 text-[#DFB76C] shrink-0" />
                      <span>Customer Support:</span>
                      <a
                        href="mailto:support@voiceeratech.com"
                        className="text-foreground hover:text-[#DFB76C] underline"
                      >
                        support@voiceeratech.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 text-xs font-mono text-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span>&copy; {new Date().getFullYear()} Voice Era Tech LLC. All rights reserved.</span>
                <span>FCC Form 499-A / Robocall Mitigation Database Compliant</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
