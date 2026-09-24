"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldAlert,
  FileText,
  Search,
  CheckCircle2,
  AlertTriangle,
  PhoneCall,
  Scale,
  Building2,
  Mail,
  Printer,
  ChevronRight,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { TERMS_SECTIONS, TERMS_CATEGORIES, TermSection } from "./termsData";

export default function TermsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  const filteredSections = useMemo(() => {
    return TERMS_SECTIONS.filter((section) => {
      const matchesCategory =
        selectedCategory === "All" || section.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = section.title.toLowerCase().includes(q);
      const inNumber = section.number.toLowerCase().includes(q);
      const inCategory = section.category.toLowerCase().includes(q);
      const inParagraphs = section.paragraphs.some((p) =>
        p.toLowerCase().includes(q)
      );

      return inTitle || inNumber || inCategory || inParagraphs;
    });
  }, [searchQuery, selectedCategory]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen text-foreground pb-24">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Top Breadcrumb & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/60 bg-card/60 hover:bg-muted/80 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 bg-card/60 hover:bg-muted/80 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Hero Header */}
        <header className="space-y-4 pb-8 border-b border-border/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono tracking-wide">
            <Scale className="w-3.5 h-3.5" />
            <span>Voice Era Tech LLC &bull; Master Telecommunications Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display tracking-tight text-foreground">
            Terms and Conditions of Service
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            These terms and conditions govern the master service agreement between{" "}
            <strong className="text-foreground font-semibold">Voice Era Tech LLC</strong> and any
            individual or organization purchasing, accessing, or utilizing our VoIP termination, SIP
            trunking, predictive dialers, carrier routes, or telephony cloud infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs font-mono text-muted-foreground">
            <span>Effective Date: 2026</span>
            <span>&bull;</span>
            <span>Governing Law: State of Delaware &amp; FCC Regulations</span>
            <span>&bull;</span>
            <span className="text-amber-500 font-medium">All 26 Clauses Active</span>
          </div>
        </header>

        {/* CRITICAL INFRASTRUCTURE WARNING BANNER */}
        <div className="mt-8 p-6 rounded-2xl border-2 border-amber-500/30 bg-amber-500/[0.05] space-y-3">
          <div className="flex items-center gap-2.5 text-foreground font-medium">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
            <h2 className="font-display text-lg sm:text-xl tracking-tight text-amber-500">
              Server &amp; Infrastructure Provisioning: Strictly No Money-Back Guarantee
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              All dedicated server infrastructure purchases, hosted dialer cluster deployments, and
              telecom interconnect setups come with strictly NO MONEY-BACK GUARANTEE.
            </strong>{" "}
            Due to immediate upfront bare-metal compute reservations, dedicated IP block allocations,
            carrier cross-connect fees, and physical cloud provisioning costs, all payments made for
            server setups and hosted machines are completely{" "}
            <strong className="text-foreground">non-refundable</strong> once provisioned.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-8 sticky top-4 z-20 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all clauses (e.g. 911 emergency, refund, CLI whitelisting, robocalling, indemnity)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-amber-500"
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

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {TERMS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-mono transition-colors ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-black font-semibold"
                    : "bg-background/80 border border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Sections */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-40 p-4 rounded-2xl border border-border/60 bg-card/40 backdrop-blur space-y-3 max-h-[calc(100vh-12rem)] overflow-y-auto">
              <div className="flex items-center gap-2 pb-2 border-b border-border/60 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                <span>Table of Contents ({filteredSections.length})</span>
              </div>
              <nav className="space-y-1 text-xs">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    type="button"
                    className={`w-full text-left px-2.5 py-1.5 rounded-md transition-colors line-clamp-1 flex items-center gap-2 ${
                      activeSectionId === sec.id
                        ? "bg-amber-500/10 text-amber-500 font-semibold"
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
          <main className="lg:col-span-8 xl:col-span-9 space-y-8">
            {filteredSections.length === 0 ? (
              <div className="p-12 text-center rounded-2xl border border-dashed border-border/80 space-y-3">
                <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
                <h3 className="font-display text-lg text-foreground">No matching clauses found</h3>
                <p className="text-sm text-muted-foreground">
                  Try searching with different terms or reset your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold text-xs font-mono hover:bg-amber-400 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-40 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur space-y-4 hover:border-amber-500/30 transition-colors"
                >
                  {/* Section Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/40">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-muted text-foreground border border-border/60">
                        Section {sec.number}
                      </span>
                      <span className="text-xs font-mono text-amber-500/90 tracking-wide">
                        {sec.category}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display text-foreground tracking-tight">
                    {sec.title}
                  </h2>

                  {/* Paragraphs and Bullet Points */}
                  <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => {
                      const isSubClause =
                        p.match(/^[0-9]+\.[0-9]+/) ||
                        p.match(/^\([i|v|x]+\)/i) ||
                        p.startsWith("•");

                      return (
                        <div
                          key={pIdx}
                          className={`${
                            isSubClause
                              ? "pl-3 sm:pl-4 border-l-2 border-border/60 space-y-1 py-0.5"
                              : ""
                          }`}
                        >
                          <p>{p}</p>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))
            )}

            {/* Official Legal Contact Box */}
            <div className="p-8 rounded-2xl border border-border/60 bg-card/60 backdrop-blur space-y-6">
              <div className="flex items-center gap-2.5 text-foreground font-display text-xl">
                <Building2 className="w-5 h-5 text-amber-500" />
                <h3>Official Legal Notice &amp; Regulatory Inquiries</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
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
                  <p className="pt-2 text-xs font-mono text-muted-foreground">
                    Phone:{" "}
                    <a
                      href="tel:+13027039133"
                      className="text-foreground hover:text-amber-500 underline"
                    >
                      +1 (302) 703-9133
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground font-mono text-xs uppercase tracking-wider">
                    Electronic Notice &amp; Compliance Desks
                  </h4>
                  <ul className="space-y-1.5 font-mono text-xs">
                    <li className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-amber-500" />
                      <span>Legal &amp; Compliance:</span>
                      <a
                        href="mailto:legal@voiceeratech.com"
                        className="text-foreground hover:text-amber-500 underline"
                      >
                        legal@voiceeratech.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-amber-500" />
                      <span>Support &amp; Disputes:</span>
                      <a
                        href="mailto:support@voiceeratech.com"
                        className="text-foreground hover:text-amber-500 underline"
                      >
                        support@voiceeratech.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-amber-500" />
                      <span>Sales &amp; MSA Contracts:</span>
                      <a
                        href="mailto:sales@voiceeratech.com"
                        className="text-foreground hover:text-amber-500 underline"
                      >
                        sales@voiceeratech.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 text-xs font-mono text-muted-foreground flex flex-wrap items-center justify-between gap-4">
                <span>&copy; {new Date().getFullYear()} Voice Era Tech LLC. All rights reserved.</span>
                <span>FCC Form 499-A / Robocall Mitigation Database Verified</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
