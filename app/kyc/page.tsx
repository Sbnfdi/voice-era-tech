"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  AlertCircle,
  Building2,
  UserCheck,
  PhoneCall,
  Server,
  UploadCloud,
  Check,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KycPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionProgress, setSubmissionProgress] = useState("");
  const [submittedKyc, setSubmittedKyc] = useState<{
    referenceId: string;
    id: string;
    companyName: string;
    signatoryName: string;
    signatoryEmail: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    // 1. Company Information
    companyName: "",
    dba: "",
    registrationNumber: "",
    taxId: "",
    country: "United States",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    website: "",

    // 2. Authorized Signatory
    signatoryName: "",
    signatoryTitle: "",
    signatoryEmail: "",
    signatoryPhone: "",
    signatoryIdNumber: "",

    // 3. Operational Contacts
    nocName: "",
    nocEmail: "",
    nocPhone: "",
    billingName: "",
    billingEmail: "",
    billingPhone: "",

    // 4. Traffic & Services
    servicesRequested: ["Direct CLI VoIP Routes", "Wholesale SIP Trunking"],
    targetCountries: "United States, Canada, UK, Tier-1 International",
    estimatedMonthlyMinutes: "500,000 - 2,000,000 minutes",
    concurrentChannels: "48 - 96 channels",
    trafficType: "Call Center / Conversational Outbound",

    // 5. Technical Whitelisting
    signalingIps: "",
    mediaIps: "",
    codecs: "G.711u, G.729a",

    // 6. Documents (simulated file names)
    incorporationDocName: "",
    taxDocName: "",
    signerIdDocName: "",

    // 7. Attestations & Signature
    stirShakenAgreed: false,
    tcpaAgreed: false,
    accuracyAgreed: false,
    digitalSignature: "",
    signatureDate: new Date().toISOString().split("T")[0],
  });

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequested.includes(service);
      return {
        ...prev,
        servicesRequested: exists
          ? prev.servicesRequested.filter((s) => s !== service)
          : [...prev.servicesRequested, service],
      };
    });
  };

  const handleFileChange = (field: "incorporationDocName" | "taxDocName" | "signerIdDocName", e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.files![0].name,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.stirShakenAgreed || !formData.tcpaAgreed || !formData.accuracyAgreed) {
      setErrorMessage("Please review and accept all regulatory attestations before submitting.");
      return;
    }

    if (!formData.digitalSignature.trim()) {
      setErrorMessage("Please provide an authorized digital signature.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionProgress("Verifying entity information & compliance data...");

    try {
      setTimeout(() => setSubmissionProgress("Generating certified PDF verification package..."), 800);
      setTimeout(() => setSubmissionProgress("Dispatching encrypted transmission to kyc@voiceeratech.com..."), 1600);

      const res = await fetch("/api/kyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "end_user",
          ...formData,
          documents: {
            incorporationDocName: formData.incorporationDocName || "Uploaded via Portal",
            taxDocName: formData.taxDocName || "Uploaded via Portal",
            signerIdDocName: formData.signerIdDocName || "Uploaded via Portal",
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to process KYC onboarding.");
      }

      setSubmittedKyc({
        referenceId: data.referenceId,
        id: data.kyc.id,
        companyName: data.kyc.companyName,
        signatoryName: data.kyc.signatoryName,
        signatoryEmail: data.kyc.signatoryEmail,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An error occurred during submission.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
      setSubmissionProgress("");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay">
      {/* Top Header */}
      <header className="border-b border-border bg-background/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
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
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-medium text-lg sm:text-xl tracking-tight text-foreground">
                  Voice <span className="text-gold-gradient">Era</span> Tech
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#DFB76C] bg-[#DFB76C]/10 border border-[#DFB76C]/30 rounded px-1.5 py-0.5">
                  LLC
                </span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground hidden sm:block">
                Carrier KYC &bull; Customer Onboarding
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {submittedKyc ? (
          /* SUCCESS SCREEN */
          <div className="max-w-2xl mx-auto border border-foreground/15 rounded-3xl p-6 sm:p-12 bg-card shadow-xl text-center space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2 border border-emerald-500/20 shadow-inner">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                KYC Application Certified &amp; Submitted
              </span>
              <h1 className="text-3xl sm:text-4xl font-display tracking-tight text-foreground mt-2">
                Welcome to Voice Era Tech
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
                Thank you, <strong className="text-foreground">{submittedKyc.signatoryName}</strong>. Your carrier verification application for <strong className="text-foreground">{submittedKyc.companyName}</strong> has been received and securely registered in our system.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/10 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Reference Audit ID</span>
                <span className="font-mono text-sm sm:text-base font-bold text-foreground bg-foreground/5 px-2.5 py-1 rounded-md border border-foreground/15">
                  {submittedKyc.referenceId}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Compliance Email Sent:</span>
                <span className="font-mono text-foreground font-medium">kyc@voiceeratech.com</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Applicant Confirmation:</span>
                <span className="font-mono text-foreground">{submittedKyc.signatoryEmail}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={`/api/kyc/${submittedKyc.id}/pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 font-medium px-8 h-12 rounded-full text-sm shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Certified KYC PDF
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full border border-foreground/20 text-sm font-medium hover:bg-foreground/5 transition-colors"
              >
                Return to Homepage
              </Link>
            </div>

            <div className="pt-6 border-t border-foreground/10 text-xs text-muted-foreground leading-relaxed">
              Our engineering &amp; compliance NOC typically validates interconnect IP whitelists and rate decks within <strong>1 to 2 business hours</strong>. For expedited test trunks, contact your assigned engineer or call <strong className="text-foreground">+1 (800) 555-VOICE</strong>.
            </div>
          </div>
        ) : (
          /* KYC FORM */
          <div className="space-y-8">
            {/* Category Indicator & Wholesale Switcher Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-[#DFB76C]/10 border-2 border-[#DFB76C]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center shrink-0 shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Applying as a Wholesale Carrier?</span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#DFB76C]/20 text-[#DFB76C] font-semibold border border-[#DFB76C]/30">
                      Wholesale Route
                    </span>
                  </div>
                  <div className="text-xs text-zinc-300 mt-0.5">
                    For high-CPS trunking, FCC 499 / RMD ID, ITG tracebacks &amp; banking references, use our dedicated wholesale form.
                  </div>
                </div>
              </div>
              <Link
                href="/wholesale"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-primary-foreground font-semibold text-xs shrink-0 hover:brightness-110 shadow-lg transition-all"
              >
                <span>Wholesale Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Form Title & Intro */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300 mb-3 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700">
                <UserCheck className="w-4 h-4 text-[#DFB76C]" />
                <span className="font-semibold text-zinc-200">Category: End User &amp; Enterprise Onboarding</span>
                <span className="text-zinc-500">&bull;</span>
                <span className="text-zinc-400">Form VET-KYC-01</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display tracking-tight text-white leading-[1.05]">
                Carrier KYC &amp; Onboarding Verification
              </h1>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl bg-destructive/15 border-2 border-destructive/40 text-destructive text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* SECTION 1: Company Information */}
              <div className="border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 bg-zinc-900/70 backdrop-blur-md shadow-2xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/15 border border-[#DFB76C]/30 flex items-center justify-center text-[#DFB76C] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-medium text-white">1. Corporate Legal Identity</h2>
                    <p className="text-xs text-zinc-400">Official business registration details as filed with regulatory authorities</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Legal Company Name <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Apex Global Communications LLC"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Doing Business As (DBA) / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.dba}
                      onChange={(e) => setFormData({ ...formData, dba: e.target.value })}
                      placeholder="Apex Voice (Optional)"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Company Registration / Charter Number <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      placeholder="e.g. C1234567 / Delaware LLC #..."
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Tax ID / EIN / VAT Number <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.taxId}
                      onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                      placeholder="XX-XXXXXXX"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Country of Incorporation <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States, Canada, UK, etc."
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Corporate Website <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://www.yourcompany.com"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Registered Business Address <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street address, Suite / Floor"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all mb-3"
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="City"
                        className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="State / Province"
                        className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                      <input
                        type="text"
                        required
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        placeholder="Postal Code"
                        className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Authorized Signatory */}
              <div className="border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 bg-zinc-900/70 backdrop-blur-md shadow-2xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/15 border border-[#DFB76C]/30 flex items-center justify-center text-[#DFB76C] shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-medium text-white">2. Authorized Signatory / Principal Representative</h2>
                    <p className="text-xs text-zinc-400">Officer legally authorized to execute carrier interconnect and service agreements</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Full Legal Name <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.signatoryName}
                      onChange={(e) => setFormData({ ...formData, signatoryName: e.target.value })}
                      placeholder="Marcus Aurelius Vance"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Corporate Job Title / Designation <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.signatoryTitle}
                      onChange={(e) => setFormData({ ...formData, signatoryTitle: e.target.value })}
                      placeholder="Managing Director / VP of Telephony"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Corporate Email <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.signatoryEmail}
                      onChange={(e) => setFormData({ ...formData, signatoryEmail: e.target.value })}
                      placeholder="marcus@apexvoice.com"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Direct Phone Number <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.signatoryPhone}
                      onChange={(e) => setFormData({ ...formData, signatoryPhone: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Government ID / Passport No. of Signer (Optional Verification)
                    </label>
                    <input
                      type="text"
                      value={formData.signatoryIdNumber}
                      onChange={(e) => setFormData({ ...formData, signatoryIdNumber: e.target.value })}
                      placeholder="Driver's License / Passport ID"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Operations & Billing Contacts */}
              <div className="border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 bg-zinc-900/70 backdrop-blur-md shadow-2xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/15 border border-[#DFB76C]/30 flex items-center justify-center text-[#DFB76C] shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-medium text-white">3. Technical NOC &amp; Billing Contacts</h2>
                    <p className="text-xs text-zinc-400">Direct escalation contacts for route monitoring, trunk tickets, and billing</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NOC Contact */}
                  <div className="space-y-4 p-5 rounded-2xl border-2 border-zinc-800 bg-zinc-950/70">
                    <div className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-2 pb-2 border-b border-zinc-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      NOC &bull; Network Engineering Contact
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-100 font-bold mb-1.5">NOC Contact Name</label>
                      <input
                        type="text"
                        value={formData.nocName}
                        onChange={(e) => setFormData({ ...formData, nocName: e.target.value })}
                        placeholder="NOC Team Lead"
                        className="w-full h-11 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-100 font-bold mb-1.5">
                        NOC Escalation Email <span className="text-[#DFB76C]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.nocEmail}
                        onChange={(e) => setFormData({ ...formData, nocEmail: e.target.value })}
                        placeholder="noc@yourcompany.com"
                        className="w-full h-11 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-100 font-bold mb-1.5">NOC 24/7 Phone</label>
                      <input
                        type="tel"
                        value={formData.nocPhone}
                        onChange={(e) => setFormData({ ...formData, nocPhone: e.target.value })}
                        placeholder="+1 (555) 999-0000"
                        className="w-full h-11 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                    </div>
                  </div>

                  {/* Billing Contact */}
                  <div className="space-y-4 p-5 rounded-2xl border-2 border-zinc-800 bg-zinc-950/70">
                    <div className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-2 pb-2 border-b border-zinc-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      Finance &bull; Billing &amp; Invoicing Contact
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-100 font-bold mb-1.5">Billing Representative Name</label>
                      <input
                        type="text"
                        value={formData.billingName}
                        onChange={(e) => setFormData({ ...formData, billingName: e.target.value })}
                        placeholder="Accounts Department"
                        className="w-full h-11 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-100 font-bold mb-1.5">
                        Billing Email <span className="text-[#DFB76C]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.billingEmail}
                        onChange={(e) => setFormData({ ...formData, billingEmail: e.target.value })}
                        placeholder="billing@yourcompany.com"
                        className="w-full h-11 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-100 font-bold mb-1.5">Billing Phone</label>
                      <input
                        type="tel"
                        value={formData.billingPhone}
                        onChange={(e) => setFormData({ ...formData, billingPhone: e.target.value })}
                        placeholder="+1 (555) 888-1111"
                        className="w-full h-11 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 4: Telephony Services & Traffic */}
              <div className="border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 bg-zinc-900/70 backdrop-blur-md shadow-2xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/15 border border-[#DFB76C]/30 flex items-center justify-center text-[#DFB76C] shrink-0">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-medium text-white">4. Services &amp; Traffic Specifications</h2>
                    <p className="text-xs text-zinc-400">Select required voice termination products and anticipated traffic parameters</p>
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-3">
                    Requested Carrier Services (Select all that apply) <span className="text-[#DFB76C]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Direct CLI VoIP Routes",
                      "Wholesale SIP Trunking",
                      "Hosted Predictive Dialer",
                      "Power & Preview Dialers",
                      "DID & Toll-Free Numbers",
                      "STIR/SHAKEN Level-A Signing",
                    ].map((service) => {
                      const selected = formData.servicesRequested.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`p-3.5 rounded-xl border-2 text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                            selected
                              ? "border-[#DFB76C] bg-[#DFB76C]/20 text-white font-bold shadow-md"
                              : "border-zinc-700 bg-zinc-950/80 text-zinc-200 hover:border-zinc-500 font-medium"
                          }`}
                        >
                          <span>{service}</span>
                          {selected && <Check className="w-4 h-4 text-[#DFB76C] shrink-0 font-bold" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Estimated Monthly Minutes <span className="text-[#DFB76C]">*</span>
                    </label>
                    <select
                      value={formData.estimatedMonthlyMinutes}
                      onChange={(e) => setFormData({ ...formData, estimatedMonthlyMinutes: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all cursor-pointer"
                    >
                      <option value="50,000 - 250,000 minutes">50,000 &ndash; 250,000 minutes</option>
                      <option value="250,000 - 1,000,000 minutes">250,000 &ndash; 1,000,000 minutes</option>
                      <option value="1,000,000 - 5,000,000 minutes">1,000,000 &ndash; 5,000,000 minutes</option>
                      <option value="5,000,000+ enterprise minutes">5,000,000+ enterprise minutes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Concurrent Call Channels (CPS / Ports) <span className="text-[#DFB76C]">*</span>
                    </label>
                    <select
                      value={formData.concurrentChannels}
                      onChange={(e) => setFormData({ ...formData, concurrentChannels: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all cursor-pointer"
                    >
                      <option value="24 - 48 channels">24 &ndash; 48 channels</option>
                      <option value="48 - 120 channels">48 &ndash; 120 channels</option>
                      <option value="120 - 300 channels">120 &ndash; 300 channels</option>
                      <option value="300+ high-concurrency ports">300+ high-concurrency ports</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Primary Traffic Profile <span className="text-[#DFB76C]">*</span>
                    </label>
                    <select
                      value={formData.trafficType}
                      onChange={(e) => setFormData({ ...formData, trafficType: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-sm font-medium text-white focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all cursor-pointer"
                    >
                      <option value="Call Center / Conversational Outbound">Call Center / Conversational Outbound</option>
                      <option value="BPO Predictive Dialer (High CPS)">BPO Predictive Dialer (High CPS)</option>
                      <option value="Inbound Customer Support & IVR">Inbound Customer Support &amp; IVR</option>
                      <option value="Blended Enterprise Telephony">Blended Enterprise Telephony</option>
                      <option value="Wholesale Carrier Wholesale Hub">Wholesale Carrier Wholesale Hub</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Target Countries / Destination Decks <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.targetCountries}
                      onChange={(e) => setFormData({ ...formData, targetCountries: e.target.value })}
                      placeholder="e.g. US Domestic, Canada, UK, Australia"
                      className="w-full h-12 px-4 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 5: Supporting Documents */}
              <div className="border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 bg-zinc-900/70 backdrop-blur-md shadow-2xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/15 border border-[#DFB76C]/30 flex items-center justify-center text-[#DFB76C] shrink-0">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-medium text-white">5. Required Verification Documents</h2>
                    <p className="text-xs text-zinc-400">Upload official documentation for verification (PDF, PNG, JPG)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Doc 1 */}
                  <div className="p-5 rounded-2xl border-2 border-dashed border-zinc-600 hover:border-[#DFB76C] transition-all bg-zinc-950/70 text-center">
                    <div className="text-xs font-mono font-bold text-white mb-1">Certificate of Incorporation</div>
                    <p className="text-[11px] text-zinc-300 mb-3">State registration certificate or business license</p>
                    <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 border-[#DFB76C]/60 bg-[#DFB76C]/10 text-xs font-bold text-white hover:bg-[#DFB76C]/20 cursor-pointer transition-all">
                      <UploadCloud className="w-4 h-4 text-[#DFB76C]" />
                      <span>{formData.incorporationDocName ? "Replace File" : "Choose File"}</span>
                      <input type="file" className="hidden" onChange={(e) => handleFileChange("incorporationDocName", e)} />
                    </label>
                    {formData.incorporationDocName && (
                      <div className="text-xs font-mono text-emerald-400 mt-2.5 truncate font-semibold">
                        ✓ {formData.incorporationDocName}
                      </div>
                    )}
                  </div>

                  {/* Doc 2 */}
                  <div className="p-5 rounded-2xl border-2 border-dashed border-zinc-600 hover:border-[#DFB76C] transition-all bg-zinc-950/70 text-center">
                    <div className="text-xs font-mono font-bold text-white mb-1">Tax Document / W-9 / W-8</div>
                    <p className="text-[11px] text-zinc-300 mb-3">IRS Tax Letter, W-9, or foreign tax declaration</p>
                    <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 border-[#DFB76C]/60 bg-[#DFB76C]/10 text-xs font-bold text-white hover:bg-[#DFB76C]/20 cursor-pointer transition-all">
                      <UploadCloud className="w-4 h-4 text-[#DFB76C]" />
                      <span>{formData.taxDocName ? "Replace File" : "Choose File"}</span>
                      <input type="file" className="hidden" onChange={(e) => handleFileChange("taxDocName", e)} />
                    </label>
                    {formData.taxDocName && (
                      <div className="text-xs font-mono text-emerald-400 mt-2.5 truncate font-semibold">
                        ✓ {formData.taxDocName}
                      </div>
                    )}
                  </div>

                  {/* Doc 3 */}
                  <div className="p-5 rounded-2xl border-2 border-dashed border-zinc-600 hover:border-[#DFB76C] transition-all bg-zinc-950/70 text-center">
                    <div className="text-xs font-mono font-bold text-white mb-1">Authorized Signer Photo ID</div>
                    <p className="text-[11px] text-zinc-300 mb-3">Passport, Driver&apos;s License or Gov ID</p>
                    <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 border-[#DFB76C]/60 bg-[#DFB76C]/10 text-xs font-bold text-white hover:bg-[#DFB76C]/20 cursor-pointer transition-all">
                      <UploadCloud className="w-4 h-4 text-[#DFB76C]" />
                      <span>{formData.signerIdDocName ? "Replace File" : "Choose File"}</span>
                      <input type="file" className="hidden" onChange={(e) => handleFileChange("signerIdDocName", e)} />
                    </label>
                    {formData.signerIdDocName && (
                      <div className="text-xs font-mono text-emerald-400 mt-2.5 truncate font-semibold">
                        ✓ {formData.signerIdDocName}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION 6: Compliance Attestation & Digital Signature */}
              <div className="border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 bg-zinc-900/70 backdrop-blur-md shadow-2xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/15 border border-[#DFB76C]/30 flex items-center justify-center text-[#DFB76C] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-medium text-white">6. Regulatory Attestation &amp; Digital Signature</h2>
                    <p className="text-xs text-zinc-400">Legally binding confirmation of telephony compliance and execution</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3.5 p-4 rounded-2xl border-2 border-zinc-800 bg-zinc-950/70 hover:border-zinc-700 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      required
                      checked={formData.stirShakenAgreed}
                      onChange={(e) => setFormData({ ...formData, stirShakenAgreed: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded-md border-2 border-zinc-500 bg-zinc-950 text-[#DFB76C] focus:ring-[#DFB76C] shrink-0"
                    />
                    <div className="text-xs text-zinc-200 leading-relaxed">
                      <strong className="text-white font-bold">STIR/SHAKEN Caller ID Attestation:</strong> We certify that our organization maintains verified ownership or contractual authorization for all Outbound Caller IDs (CLIs) transmitted through Voice Era Tech networks, adhering to FCC STIR/SHAKEN Level-A regulations.
                    </div>
                  </label>

                  <label className="flex items-start gap-3.5 p-4 rounded-2xl border-2 border-zinc-800 bg-zinc-950/70 hover:border-zinc-700 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      required
                      checked={formData.tcpaAgreed}
                      onChange={(e) => setFormData({ ...formData, tcpaAgreed: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded-md border-2 border-zinc-500 bg-zinc-950 text-[#DFB76C] focus:ring-[#DFB76C] shrink-0"
                    />
                    <div className="text-xs text-zinc-200 leading-relaxed">
                      <strong className="text-white font-bold">TCPA &amp; TSR Safe-Harbor:</strong> We acknowledge and agree to comply strictly with the Telephone Consumer Protection Act (TCPA), FTC Telemarketing Sales Rule (TSR), and National Do-Not-Call (DNC) registry requirements. No unlawful robocalls or spoofed scams are permitted.
                    </div>
                  </label>

                  <label className="flex items-start gap-3.5 p-4 rounded-2xl border-2 border-zinc-800 bg-zinc-950/70 hover:border-zinc-700 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      required
                      checked={formData.accuracyAgreed}
                      onChange={(e) => setFormData({ ...formData, accuracyAgreed: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded-md border-2 border-zinc-500 bg-zinc-950 text-[#DFB76C] focus:ring-[#DFB76C] shrink-0"
                    />
                    <div className="text-xs text-zinc-200 leading-relaxed">
                      <strong className="text-white font-bold">Truth-in-Application Certification:</strong> The undersigned declares under penalty of route suspension that all corporate details, tax identifiers, and contact persons provided in this KYC application are authentic, true, and legally enforceable.
                    </div>
                  </label>
                </div>

                {/* Digital Signature Field */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-zinc-800">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Authorized Digital Signature (Type Full Legal Name) <span className="text-[#DFB76C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.digitalSignature}
                      onChange={(e) => setFormData({ ...formData, digitalSignature: e.target.value })}
                      placeholder="/s/ Marcus Aurelius Vance"
                      className="w-full h-14 px-4 rounded-xl border-2 border-[#DFB76C]/60 bg-zinc-950 font-serif text-lg font-bold text-[#DFB76C] placeholder:text-zinc-500 focus:outline-none focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 shadow-inner"
                    />
                    <span className="text-[11px] text-zinc-400 block mt-1.5 font-mono">
                      Acts as your legally binding electronic signature under the ESIGN Act.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-100 font-bold mb-2">
                      Execution Date
                    </label>
                    <input
                      type="date"
                      readOnly
                      value={formData.signatureDate}
                      className="w-full h-14 px-4 rounded-xl border-2 border-zinc-800 bg-zinc-950/50 font-mono text-sm text-zinc-300 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Submits application to kyc@voiceeratech.com with certified PDF attachment</span>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[280px] bg-gold-gradient hover:brightness-110 text-primary-foreground font-bold rounded-full h-14 text-sm transition-all shadow-[0_0_25px_rgba(223,183,108,0.35)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {submissionProgress || "Processing Onboarding..."}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      Submit End-User KYC Application
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
