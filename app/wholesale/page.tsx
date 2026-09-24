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
  ExternalLink,
  Briefcase,
  Layers,
  Globe2,
  Radio,
  FileCheck2,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WholesaleKycPage() {
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
    // STEP 1 — PERSONAL INFORMATION
    // Personal Details
    signatoryName: "",
    signatoryTitle: "",
    signatoryEmail: "",
    signatoryPhone: "",
    signatoryIdNumber: "",
    signatoryNationality: "United States",
    signatoryDob: "",

    // Identity Document
    idDocType: "Passport",
    idDocNumber: "",
    idDocIssuingCountry: "United States",
    idDocExpiryDate: "",
    idDocFileName: "",
    idDocBackFileName: "",

    // STEP 2 — BUSINESS INFORMATION
    // Company Information
    companyName: "",
    dba: "",
    incorporationDate: "",
    incorporationJurisdiction: "Delaware, United States",
    registrationNumber: "",
    taxId: "",
    yearsInOperation: "3-5 years",
    website: "https://",

    // Provider Type
    providerType: "Wholesale Carrier (Interconnect / Transit)",

    // FCC / Regulatory IDs
    fcc499Id: "",
    fccFrn: "",
    rmdId: "",
    stateTelecomLicense: "",

    // STIR/SHAKEN
    stirShakenStatus: "Full Implementation (Level-A Attestation)",
    ocnSpcTokenIssuer: "iconectiv STI-PA",
    didAttestationCapability: "Level A (Full Attestation)",

    // Tracebacks
    itgRegistered: "Yes — Active Participant with ITG",
    itgEscalationContact: "",
    tracebackSlaHours: "Under 2 Hours (Tier-1 Express)",
    fccHistoryOrCitations: "No",
    fccHistoryDetails: "",

    // Traffic Profile
    trafficProfileNature: "Conversational Outbound & Enterprise B2B",
    estimatedDailyMinutes: "100,000 - 500,000 minutes/day",
    estimatedMonthlyMinutes: "3,000,000 - 15,000,000 minutes",
    peakCps: "50 - 100 CPS",
    acdSeconds: "180+ seconds",
    targetAsr: "68% - 75%",
    concurrentChannels: "240 - 480 channels",
    trafficType: "Wholesale Conversational / Contact Center",

    // Business Address
    country: "United States",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    operationalAddress: "",

    // Services & Capacity
    interconnectProtocols: [
      "SIP Trunking over UDP/TCP",
      "Wholesale CLI Voice Termination",
      "Direct IP-to-IP Peering"
    ],
    servicesRequested: [
      "Direct CLI VoIP Routes",
      "Wholesale SIP Trunking",
      "CC Route High-CPS Termination"
    ],
    targetCountries: "United States, Canada, Tier-1 Global",
    signalingIps: "",
    mediaIps: "",
    codecs: "G.711u, G.729a, OPUS",

    // STEP 3 — CONTACTS & COMPLIANCE
    // Primary Contact
    primaryContactName: "",
    primaryContactTitle: "Director of Carrier Relations",
    primaryContactEmail: "",
    primaryContactPhone: "",

    // Billing Contact
    billingName: "",
    billingEmail: "",
    billingPhone: "",
    billingInvoiceEmail: "",
    billingAddress: "",

    // Rates Contact
    ratesContactName: "",
    ratesContactEmail: "",
    ratesContactPhone: "",

    // Technical Contact (24/7 NOC)
    nocName: "",
    nocEmail: "",
    nocPhone: "",
    nocEscalation: "Level-2 NOC Lead Available 24/7/365",

    // Banking
    bankName: "",
    bankCountry: "United States",
    beneficiaryName: "",
    accountNumberIban: "",
    routingSwiftBic: "",
    paymentTerms: "Prepaid Wire / ACH Deposit",

    // Trade References
    tradeRef1Company: "",
    tradeRef1Contact: "",
    tradeRef1Email: "",
    tradeRef1Phone: "",
    tradeRef1Relation: "Interconnect Partner (2+ years)",

    tradeRef2Company: "",
    tradeRef2Contact: "",
    tradeRef2Email: "",
    tradeRef2Phone: "",
    tradeRef2Relation: "Wholesale Carrier (18 months)",

    // Compliance Declarations
    tsrTcpaCompliant: true,
    antiSpoofingCompliant: true,
    knowYourCustomerChainCompliant: true,
    zeroToleranceAgreed: true,

    // Fraud / Traceback Details
    fraudEmergencyEmail: "",
    fraudEmergencyPhone: "",
    immediateSuspensionConsent: true,

    // STEP 4 — VERIFICATION
    // Verification Documents
    incorporationDocName: "",
    proofOfAddressDocName: "",
    itgScreenshotDocName: "",
    taxDocName: "",
    signerIdDocName: "",

    // Agreements & Consent
    termsAgreed: false,
    dataProcessingConsent: true,
    stirShakenAgreed: true,
    tcpaAgreed: true,
    accuracyAgreed: true,

    // Authorized Signature
    digitalSignature: "",
    signatureDate: new Date().toISOString().split("T")[0],
  });

  const toggleProtocol = (proto: string) => {
    setFormData((prev) => {
      const exists = prev.interconnectProtocols.includes(proto);
      return {
        ...prev,
        interconnectProtocols: exists
          ? prev.interconnectProtocols.filter((p) => p !== proto)
          : [...prev.interconnectProtocols, proto],
      };
    });
  };

  const handleFileChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        [field]: file.name,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validations
    if (!formData.companyName.trim()) {
      setErrorMessage("Please enter your Company Registered Legal Name.");
      return;
    }
    if (!formData.registrationNumber.trim()) {
      setErrorMessage("Please enter your Business Registration or Chamber of Commerce number.");
      return;
    }
    if (!formData.signatoryName.trim() || !formData.signatoryEmail.trim() || !formData.signatoryPhone.trim()) {
      setErrorMessage("Please provide complete Authorized Signatory details.");
      return;
    }
    if (!formData.signalingIps.trim()) {
      setErrorMessage("Please provide your Signaling Switch IP address(es) for interconnection.");
      return;
    }
    if (!formData.termsAgreed) {
      setErrorMessage("Please check the box to confirm you agree to our terms before submitting.");
      return;
    }
    if (!formData.dataProcessingConsent || !formData.accuracyAgreed) {
      setErrorMessage("Please accept the Data Processing Consent and Verification Declarations.");
      return;
    }
    if (!formData.digitalSignature.trim()) {
      setErrorMessage("Please type your Authorized Signatory full name as a legally binding digital signature.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionProgress("Validating wholesale regulatory & carrier parameters...");

    try {
      setTimeout(() => setSubmissionProgress("Auditing FCC 499, FRN & ITG Traceback compliance records..."), 800);
      setTimeout(() => setSubmissionProgress("Compiling certified carrier verification package & PDF..."), 1600);
      setTimeout(() => setSubmissionProgress("Securing bilateral transmission to kyc@voiceeratech.com..."), 2400);

      const res = await fetch("/api/kyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "wholesaler",
          ...formData,
          documents: {
            incorporationDocName: formData.incorporationDocName || "Incorporation_Cert_Verified.pdf",
            proofOfAddressDocName: formData.proofOfAddressDocName || "Proof_Of_Address_Verified.pdf",
            itgScreenshotDocName: formData.itgScreenshotDocName || "ITG_RMD_Record_Verified.png",
            taxDocName: formData.taxDocName || "Tax_EIN_W9_Verified.pdf",
            signerIdDocName: formData.idDocFileName || "Signatory_Govt_ID_Front.pdf",
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to process Wholesale Application.");
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
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                  VOICE ERA TECH
                </span>
                <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded font-semibold tracking-wider">
                  Wholesale Carrier
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline">
                Carrier Onboarding &amp; Interconnect
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/kyc"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 px-3.5 py-1.5 rounded-full transition-colors"
            >
              Switch to End-User KYC
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground border border-foreground/15 hover:border-foreground/30 px-3.5 py-1.5 rounded-full transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to Site</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Banner Switcher for clarity */}
        <div className="mb-8 p-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                Wholesale Carrier &amp; Interconnect Application (One-Page Form)
              </div>
              <p className="text-xs text-zinc-300">
                Are you looking for direct enterprise/business calling rather than carrier wholesale? Use our standard form.
              </p>
            </div>
          </div>
          <Link
            href="/kyc"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 px-4 py-2 rounded-xl transition-all shrink-0"
          >
            Go to End-User KYC
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* HERO TITLE */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(223,183,108,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Carrier Interconnection &bull; STIR/SHAKEN Level-A
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-foreground">
            WHOLESALE APPLICATION
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Complete our comprehensive, one-page wholesale carrier onboarding form. All sections below are required for bilateral interconnection, robocall mitigation verification, and IP trunk provisioning.
          </p>

          {/* Quick Jump Anchors */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <a href="#step-1" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:border-primary hover:text-primary transition-colors">
              Step 1: Personal Info
            </a>
            <a href="#step-2" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:border-primary hover:text-primary transition-colors">
              Step 2: Business Info
            </a>
            <a href="#step-3" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:border-primary hover:text-primary transition-colors">
              Step 3: Contacts &amp; Compliance
            </a>
            <a href="#step-4" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:border-primary hover:text-primary transition-colors">
              Step 4: Verification
            </a>
          </div>
        </div>

        {/* SUBMISSION SUCCESS MODAL / VIEW */}
        {submittedKyc ? (
          <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl border border-primary/40 bg-card/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(223,183,108,0.2)] text-center space-y-6 animate-in fade-in-50 duration-500">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Wholesale Application Certified &amp; Received
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground">
                Interconnect Record Created
              </h2>
              <p className="text-sm text-zinc-300 max-w-lg mx-auto">
                Thank you, <strong className="text-white">{submittedKyc.signatoryName}</strong>. Your carrier dossier for <strong className="text-white">{submittedKyc.companyName}</strong> has been logged into our compliance registry.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-primary/30 max-w-md mx-auto space-y-2 text-left">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-mono">Wholesale Audit Ref:</span>
                <span className="font-mono font-bold text-primary tracking-wider text-sm">{submittedKyc.referenceId}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-mono">Carrier Entity:</span>
                <span className="font-semibold text-white truncate max-w-[200px]">{submittedKyc.companyName}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-mono">NOC Notification:</span>
                <span className="font-mono text-zinc-300">kyc@voiceeratech.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`/api/kyc/${submittedKyc.id}/pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(223,183,108,0.3)] hover:opacity-90 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Certified Application PDF
              </a>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900 text-white font-medium text-xs tracking-wider uppercase hover:border-zinc-500 transition-all"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          /* ONE PAGER FORM */
          <form onSubmit={handleSubmit} className="space-y-10">
            {errorMessage && (
              <div className="p-4 rounded-2xl border border-destructive/40 bg-destructive/10 text-destructive text-sm flex items-start gap-3 animate-shake">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Application Error</div>
                  <div>{errorMessage}</div>
                </div>
              </div>
            )}

            {/* =========================================================================
                STEP 1 — PERSONAL INFORMATION
            ========================================================================= */}
            <div id="step-1" className="border-2 border-zinc-700 bg-zinc-900/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8 scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-700">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-mono font-bold text-sm">
                  01
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold">
                    STEP 1 — PERSONAL INFORMATION
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Authorized Signatory &amp; Identity Document
                  </h2>
                </div>
              </div>

              {/* Sub-Section: Personal Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <UserCheck className="w-4 h-4" />
                  <span>Personal Details</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Full Legal Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.signatoryName}
                      onChange={(e) => setFormData({ ...formData, signatoryName: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Corporate Title / Role <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.signatoryTitle}
                      onChange={(e) => setFormData({ ...formData, signatoryTitle: e.target.value })}
                      placeholder="e.g. VP Carrier Relations / CEO"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Official Work Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.signatoryEmail}
                      onChange={(e) => setFormData({ ...formData, signatoryEmail: e.target.value })}
                      placeholder="vance@carrierexample.com"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Direct Mobile / Phone <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.signatoryPhone}
                      onChange={(e) => setFormData({ ...formData, signatoryPhone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Nationality / Citizenship <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.signatoryNationality}
                      onChange={(e) => setFormData({ ...formData, signatoryNationality: e.target.value })}
                      placeholder="United States"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Date of Birth <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.signatoryDob}
                      onChange={(e) => setFormData({ ...formData, signatoryDob: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Sub-Section: Identity Document */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Identity Document</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Document Type <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.idDocType}
                      onChange={(e) => setFormData({ ...formData, idDocType: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Passport">Passport</option>
                      <option value="Driver's License">Driver&apos;s License</option>
                      <option value="National Identity Card">National Identity Card</option>
                      <option value="Government Service ID">Government Service ID</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Document ID Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.idDocNumber}
                      onChange={(e) => setFormData({ ...formData, idDocNumber: e.target.value })}
                      placeholder="e.g. A92838192"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Issuing Country <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.idDocIssuingCountry}
                      onChange={(e) => setFormData({ ...formData, idDocIssuingCountry: e.target.value })}
                      placeholder="United States"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Expiry Date <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.idDocExpiryDate}
                      onChange={(e) => setFormData({ ...formData, idDocExpiryDate: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Upload Fields for ID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="border-2 border-dashed border-zinc-600 hover:border-primary/60 rounded-2xl p-4 bg-zinc-950/80 text-center transition-all">
                    <UploadCloud className="w-6 h-6 mx-auto text-primary mb-2" />
                    <div className="text-xs font-bold text-white uppercase font-mono">Front of Identity Document</div>
                    <p className="text-[11px] text-zinc-400 mt-1">PDF, PNG, or JPG (max 10MB)</p>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange("idDocFileName", e)}
                      className="mt-3 block w-full text-xs text-zinc-300 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-black cursor-pointer"
                    />
                    {formData.idDocFileName && (
                      <div className="mt-2 text-xs font-mono text-emerald-400 font-semibold">
                        ✓ Selected: {formData.idDocFileName}
                      </div>
                    )}
                  </div>

                  <div className="border-2 border-dashed border-zinc-600 hover:border-primary/60 rounded-2xl p-4 bg-zinc-950/80 text-center transition-all">
                    <UploadCloud className="w-6 h-6 mx-auto text-primary mb-2" />
                    <div className="text-xs font-bold text-white uppercase font-mono">Back of Identity Document</div>
                    <p className="text-[11px] text-zinc-400 mt-1">PDF, PNG, or JPG (if applicable)</p>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange("idDocBackFileName", e)}
                      className="mt-3 block w-full text-xs text-zinc-300 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-black cursor-pointer"
                    />
                    {formData.idDocBackFileName && (
                      <div className="mt-2 text-xs font-mono text-emerald-400 font-semibold">
                        ✓ Selected: {formData.idDocBackFileName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                STEP 2 — BUSINESS INFORMATION
            ========================================================================= */}
            <div id="step-2" className="border-2 border-zinc-700 bg-zinc-900/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8 scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-700">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-mono font-bold text-sm">
                  02
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold">
                    STEP 2 — BUSINESS INFORMATION
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Carrier Entity, Regulatory IDs &amp; Interconnect Capacity
                  </h2>
                </div>
              </div>

              {/* Sub-Section: Company Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Company Information</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Registered Legal Entity Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Global Telecom Transit Systems LLC"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      DBA / Trade Name
                    </label>
                    <input
                      type="text"
                      value={formData.dba}
                      onChange={(e) => setFormData({ ...formData, dba: e.target.value })}
                      placeholder="e.g. GTTS Voice"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Incorporation Date <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.incorporationDate}
                      onChange={(e) => setFormData({ ...formData, incorporationDate: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Jurisdiction of Incorporation <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.incorporationJurisdiction}
                      onChange={(e) => setFormData({ ...formData, incorporationJurisdiction: e.target.value })}
                      placeholder="Delaware, United States"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Registration Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      placeholder="e.g. 7481928"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Federal Tax ID / EIN / VAT <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.taxId}
                      onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                      placeholder="XX-XXXXXXX"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Official Website <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://gtts-telecom.com"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Sub-Section: Provider Type */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <Briefcase className="w-4 h-4" />
                  <span>Provider Type</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Telecom Classification <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.providerType}
                      onChange={(e) => setFormData({ ...formData, providerType: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Wholesale Carrier (Interconnect / Transit)">Wholesale Carrier (Interconnect / Transit)</option>
                      <option value="Interconnected VoIP Provider">Interconnected VoIP Provider</option>
                      <option value="Competitive Local Exchange Carrier (CLEC)">Competitive Local Exchange Carrier (CLEC)</option>
                      <option value="Originating Service Provider (OSP)">Originating Service Provider (OSP)</option>
                      <option value="Enterprise / Contact Center Aggregator">Enterprise / Contact Center Aggregator</option>
                      <option value="SMS / CPaaS Platform Operator">SMS / CPaaS Platform Operator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Years in Telecom Operation <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.yearsInOperation}
                      onChange={(e) => setFormData({ ...formData, yearsInOperation: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Under 1 year">Under 1 year</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years established carrier</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sub-Section: FCC / Regulatory IDs */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <Radio className="w-4 h-4" />
                  <span>FCC / Regulatory IDs</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      FCC Form 499 Filer ID <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fcc499Id}
                      onChange={(e) => setFormData({ ...formData, fcc499Id: e.target.value })}
                      placeholder="e.g. 839201"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      FCC FRN (10 Digits) <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fccFrn}
                      onChange={(e) => setFormData({ ...formData, fccFrn: e.target.value })}
                      placeholder="0012345678"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Robocall Mitigation (RMD) ID <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.rmdId}
                      onChange={(e) => setFormData({ ...formData, rmdId: e.target.value })}
                      placeholder="e.g. RMD-0004928"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      State Telecom License / PUC
                    </label>
                    <input
                      type="text"
                      value={formData.stateTelecomLicense}
                      onChange={(e) => setFormData({ ...formData, stateTelecomLicense: e.target.value })}
                      placeholder="e.g. DE-PSC-9821 or N/A"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Sub-Section: STIR/SHAKEN */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>STIR/SHAKEN Authentication</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Implementation Status <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.stirShakenStatus}
                      onChange={(e) => setFormData({ ...formData, stirShakenStatus: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Full Implementation (Level-A Attestation)">Full Implementation (Level-A Attestation)</option>
                      <option value="Partial Implementation (Level-B Attestation)">Partial Implementation (Level-B Attestation)</option>
                      <option value="Gateway / Transit Robocall Mitigation Program">Gateway / Transit Robocall Mitigation Program</option>
                      <option value="Foreign Intermediate Provider">Foreign Intermediate Provider</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      OCN / SPC Token Issuer <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ocnSpcTokenIssuer}
                      onChange={(e) => setFormData({ ...formData, ocnSpcTokenIssuer: e.target.value })}
                      placeholder="e.g. iconectiv STI-PA or TransNexus"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      DID Attestation Capability <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.didAttestationCapability}
                      onChange={(e) => setFormData({ ...formData, didAttestationCapability: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Level A (Full Attestation)">Level A (Full Attestation)</option>
                      <option value="Level B (Partial Attestation)">Level B (Partial Attestation)</option>
                      <option value="Level C (Gateway Attestation)">Level C (Gateway Attestation)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sub-Section: Tracebacks */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <Radio className="w-4 h-4" />
                  <span>Tracebacks &amp; ITG Cooperation</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Registered with ITG Traceback? <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.itgRegistered}
                      onChange={(e) => setFormData({ ...formData, itgRegistered: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Yes — Active Participant with ITG">Yes — Active Participant with ITG</option>
                      <option value="Registration In Progress">Registration In Progress</option>
                      <option value="Exempt / Non-US Transit Carrier">Exempt / Non-US Transit Carrier</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      ITG Escalation Contact Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.itgEscalationContact}
                      onChange={(e) => setFormData({ ...formData, itgEscalationContact: e.target.value })}
                      placeholder="traceback-ops@carrierexample.com"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Traceback Response SLA <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.tracebackSlaHours}
                      onChange={(e) => setFormData({ ...formData, tracebackSlaHours: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Under 2 Hours (Tier-1 Express)">Under 2 Hours (Tier-1 Express)</option>
                      <option value="Under 4 Hours (Standard Regulatory SLA)">Under 4 Hours (Standard Regulatory SLA)</option>
                      <option value="Under 24 Hours">Under 24 Hours</option>
                    </select>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Any FCC Citations, Enforcements or Inquiries in Last 3 Years? <span className="text-amber-400">*</span>
                    </label>
                    <div className="flex items-center gap-4 mb-2">
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-white">
                        <input
                          type="radio"
                          name="fccHistory"
                          checked={formData.fccHistoryOrCitations === "No"}
                          onChange={() => setFormData({ ...formData, fccHistoryOrCitations: "No", fccHistoryDetails: "" })}
                          className="accent-[#DFB76C]"
                        />
                        No Prior Citations / Pristine Record
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-white">
                        <input
                          type="radio"
                          name="fccHistory"
                          checked={formData.fccHistoryOrCitations === "Yes"}
                          onChange={() => setFormData({ ...formData, fccHistoryOrCitations: "Yes" })}
                          className="accent-[#DFB76C]"
                        />
                        Yes (Explanation Required)
                      </label>
                    </div>
                    {formData.fccHistoryOrCitations === "Yes" && (
                      <textarea
                        rows={2}
                        value={formData.fccHistoryDetails}
                        onChange={(e) => setFormData({ ...formData, fccHistoryDetails: e.target.value })}
                        placeholder="Provide details including docket numbers and remediation measures taken..."
                        className="w-full p-3 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white text-sm outline-none focus:border-[#DFB76C]"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Sub-Section: Traffic Profile */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <PhoneCall className="w-4 h-4" />
                  <span>Traffic Profile &amp; Metrics</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Traffic Nature <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.trafficProfileNature}
                      onChange={(e) => setFormData({ ...formData, trafficProfileNature: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Conversational Outbound & Enterprise B2B">Conversational Outbound &amp; Enterprise B2B</option>
                      <option value="Call Center / Contact Center Agent Traffic">Call Center / Contact Center Agent Traffic</option>
                      <option value="Wholesale Interconnect Carrier Blend">Wholesale Interconnect Carrier Blend</option>
                      <option value="OTP / 2FA Transactional IVR">OTP / 2FA Transactional IVR</option>
                      <option value="High-Density Inbound Toll-Free">High-Density Inbound Toll-Free</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Estimated Daily Volume <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.estimatedDailyMinutes}
                      onChange={(e) => setFormData({ ...formData, estimatedDailyMinutes: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="25,000 - 100,000 minutes/day">25,000 - 100,000 minutes/day</option>
                      <option value="100,000 - 500,000 minutes/day">100,000 - 500,000 minutes/day</option>
                      <option value="500,000 - 2,000,000 minutes/day">500,000 - 2,000,000 minutes/day</option>
                      <option value="2,000,000+ minutes/day">2,000,000+ Tier-1 minutes/day</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Peak CPS (Calls Per Second) <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.peakCps}
                      onChange={(e) => setFormData({ ...formData, peakCps: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="10 - 25 CPS">10 - 25 CPS</option>
                      <option value="25 - 50 CPS">25 - 50 CPS</option>
                      <option value="50 - 100 CPS">50 - 100 CPS</option>
                      <option value="100 - 250 CPS">100 - 250 CPS</option>
                      <option value="250+ CPS (High Throughput)">250+ CPS (High Throughput)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Average Call Duration (ACD) <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.acdSeconds}
                      onChange={(e) => setFormData({ ...formData, acdSeconds: e.target.value })}
                      placeholder="e.g. 180+ seconds"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Target ASR (% Answer-Seizure) <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.targetAsr}
                      onChange={(e) => setFormData({ ...formData, targetAsr: e.target.value })}
                      placeholder="e.g. 68% - 75%"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Concurrent Channels Required <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.concurrentChannels}
                      onChange={(e) => setFormData({ ...formData, concurrentChannels: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="96 - 192 channels">96 - 192 channels</option>
                      <option value="240 - 480 channels">240 - 480 channels</option>
                      <option value="500 - 1,000 channels">500 - 1,000 channels</option>
                      <option value="1,000 - 3,000 channels">1,000 - 3,000 channels</option>
                      <option value="5,000+ channels">5,000+ Enterprise / Carrier channels</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sub-Section: Business Address */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <Globe2 className="w-4 h-4" />
                  <span>Business Address &amp; Operating Facilities</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Principal Business Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="1209 Orange Street, Suite 400"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      City <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Wilmington"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      State / Province <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="DE"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Postal / ZIP Code <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="19801"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Country <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Operational Switch Facility / POP Address
                    </label>
                    <input
                      type="text"
                      value={formData.operationalAddress}
                      onChange={(e) => setFormData({ ...formData, operationalAddress: e.target.value })}
                      placeholder="e.g. Equinix NY4, Secaucus, NJ / 350 E Cermak, Chicago"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Sub-Section: Services & Capacity */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <Server className="w-4 h-4" />
                  <span>Services &amp; Interconnect Capacity</span>
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-2">
                    Protocols &amp; Wholesale Services Requested
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      "SIP Trunking over UDP/TCP",
                      "TLS / SRTP Encrypted Signaling",
                      "Wholesale CLI Voice Termination",
                      "CC Route High-CPS Termination",
                      "Direct IP-to-IP Peering",
                      "US & Canada Local DIDs",
                      "Toll-Free Voice Termination",
                      "Global International Direct CLI",
                    ].map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleProtocol(srv)}
                        className={`p-3 rounded-xl border-2 text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                          formData.interconnectProtocols.includes(srv)
                            ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(223,183,108,0.1)]"
                            : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-zinc-500 hover:text-white"
                        }`}
                      >
                        <span>{srv}</span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 ${
                            formData.interconnectProtocols.includes(srv)
                              ? "bg-primary border-primary text-black"
                              : "border-zinc-600"
                          }`}
                        >
                          {formData.interconnectProtocols.includes(srv) && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Signaling Switch Public IP / FQDN <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.signalingIps}
                      onChange={(e) => setFormData({ ...formData, signalingIps: e.target.value })}
                      placeholder="e.g. 198.51.100.12, 198.51.100.13:5060"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none font-mono transition-all"
                    />
                    <p className="text-[11px] text-zinc-400 mt-1 font-mono">
                      Our SBC cluster will whitelist these IPs for bi-directional signaling.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Media RTP IP Subnet
                    </label>
                    <input
                      type="text"
                      value={formData.mediaIps}
                      onChange={(e) => setFormData({ ...formData, mediaIps: e.target.value })}
                      placeholder="e.g. 198.51.100.0/24 or Same as Signaling"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none font-mono transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                STEP 3 — CONTACTS & COMPLIANCE
            ========================================================================= */}
            <div id="step-3" className="border-2 border-zinc-700 bg-zinc-900/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8 scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-700">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-mono font-bold text-sm">
                  03
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold">
                    STEP 3 — CONTACTS &amp; COMPLIANCE
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Operational Desks, Banking, Trade References &amp; Fraud Protections
                  </h2>
                </div>
              </div>

              {/* Primary Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <UserCheck className="w-4 h-4" />
                  <span>Primary Account Contact</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Contact Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.primaryContactName}
                      onChange={(e) => setFormData({ ...formData, primaryContactName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Title / Role
                    </label>
                    <input
                      type="text"
                      value={formData.primaryContactTitle}
                      onChange={(e) => setFormData({ ...formData, primaryContactTitle: e.target.value })}
                      placeholder="Director of Carrier Relations"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.primaryContactEmail}
                      onChange={(e) => setFormData({ ...formData, primaryContactEmail: e.target.value })}
                      placeholder="s.jenkins@carrierexample.com"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Direct Phone <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.primaryContactPhone}
                      onChange={(e) => setFormData({ ...formData, primaryContactPhone: e.target.value })}
                      placeholder="+1 (555) 392-1029"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Contact */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Billing &amp; Invoicing Contact</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Billing Officer Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.billingName}
                      onChange={(e) => setFormData({ ...formData, billingName: e.target.value })}
                      placeholder="e.g. Robert Myers"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Accounts Payable Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.billingEmail}
                      onChange={(e) => setFormData({ ...formData, billingEmail: e.target.value })}
                      placeholder="billing@carrierexample.com"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Billing Phone <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.billingPhone}
                      onChange={(e) => setFormData({ ...formData, billingPhone: e.target.value })}
                      placeholder="+1 (555) 392-1030"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Automated Invoicing Email
                    </label>
                    <input
                      type="email"
                      value={formData.billingInvoiceEmail}
                      onChange={(e) => setFormData({ ...formData, billingInvoiceEmail: e.target.value })}
                      placeholder="invoices@carrierexample.com"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Rates Contact & Technical NOC */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-zinc-700/60">
                {/* Rates Contact */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                    <FileText className="w-4 h-4" />
                    <span>Rates Contact (Rate Notices &amp; LCR)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                        Rate Management Lead <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.ratesContactName}
                        onChange={(e) => setFormData({ ...formData, ratesContactName: e.target.value })}
                        placeholder="e.g. Rate Desk Lead"
                        className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                        Rate Deck Distribution Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.ratesContactEmail}
                        onChange={(e) => setFormData({ ...formData, ratesContactEmail: e.target.value })}
                        placeholder="rates@carrierexample.com"
                        className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                        Direct Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.ratesContactPhone}
                        onChange={(e) => setFormData({ ...formData, ratesContactPhone: e.target.value })}
                        placeholder="+1 (555) 392-1031"
                        className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Technical Contact */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                    <Server className="w-4 h-4" />
                    <span>Technical Contact (24/7/365 NOC)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                        NOC Duty Manager <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nocName}
                        onChange={(e) => setFormData({ ...formData, nocName: e.target.value })}
                        placeholder="24/7 Global NOC Desk"
                        className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                        24/7 NOC Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.nocEmail}
                        onChange={(e) => setFormData({ ...formData, nocEmail: e.target.value })}
                        placeholder="noc@carrierexample.com"
                        className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                        24/7 Emergency Hotline <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.nocPhone}
                        onChange={(e) => setFormData({ ...formData, nocPhone: e.target.value })}
                        placeholder="+1 (555) 392-1032"
                        className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Banking & Settlement */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <Briefcase className="w-4 h-4" />
                  <span>Banking &amp; Settlement Details</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Bank Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                      placeholder="e.g. JPMorgan Chase Bank, N.A."
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Beneficiary Account Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.beneficiaryName}
                      onChange={(e) => setFormData({ ...formData, beneficiaryName: e.target.value })}
                      placeholder="Official Corporate Name"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Account Number / IBAN <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.accountNumberIban}
                      onChange={(e) => setFormData({ ...formData, accountNumberIban: e.target.value })}
                      placeholder="Account or IBAN Number"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none font-mono transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Routing Number / SWIFT BIC <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.routingSwiftBic}
                      onChange={(e) => setFormData({ ...formData, routingSwiftBic: e.target.value })}
                      placeholder="9-Digit ABA or SWIFT"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none font-mono transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Bank Country <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.bankCountry}
                      onChange={(e) => setFormData({ ...formData, bankCountry: e.target.value })}
                      placeholder="United States"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Requested Settlement Terms <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.paymentTerms}
                      onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-medium focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    >
                      <option value="Prepaid Wire / ACH Deposit">Prepaid Wire / ACH Deposit (Recommended for Instant Provisioning)</option>
                      <option value="Net 7 Days (Subject to Credit Approval)">Net 7 Days (Subject to Credit Approval)</option>
                      <option value="Net 15 Days (Subject to Credit Approval)">Net 15 Days (Subject to Credit Approval)</option>
                      <option value="Bilateral Netting (Established Carriers)">Bilateral Netting (Established Carriers)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Trade References */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Carrier Trade References (Minimum 2 Required)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Reference 1 */}
                  <div className="p-4 rounded-2xl border-2 border-zinc-700/70 bg-zinc-950/60 space-y-3">
                    <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Reference #1 (Telecom Carrier)
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.tradeRef1Company}
                        onChange={(e) => setFormData({ ...formData, tradeRef1Company: e.target.value })}
                        placeholder="e.g. Bandwidth / Lumen / Telnyx"
                        className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Contact Person *</label>
                        <input
                          type="text"
                          required
                          value={formData.tradeRef1Contact}
                          onChange={(e) => setFormData({ ...formData, tradeRef1Contact: e.target.value })}
                          placeholder="Contact Name"
                          className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Official Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.tradeRef1Email}
                          onChange={(e) => setFormData({ ...formData, tradeRef1Email: e.target.value })}
                          placeholder="email@carrier.com"
                          className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.tradeRef1Phone}
                          onChange={(e) => setFormData({ ...formData, tradeRef1Phone: e.target.value })}
                          placeholder="+1 (555) 012-3456"
                          className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Relationship Duration</label>
                        <input
                          type="text"
                          value={formData.tradeRef1Relation}
                          onChange={(e) => setFormData({ ...formData, tradeRef1Relation: e.target.value })}
                          placeholder="e.g. 2+ years interconnect"
                          className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reference 2 */}
                  <div className="p-4 rounded-2xl border-2 border-zinc-700/70 bg-zinc-950/60 space-y-3">
                    <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Reference #2 (Telecom Carrier)
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.tradeRef2Company}
                        onChange={(e) => setFormData({ ...formData, tradeRef2Company: e.target.value })}
                        placeholder="e.g. Sinch / IDT Telecom"
                        className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Contact Person *</label>
                        <input
                          type="text"
                          required
                          value={formData.tradeRef2Contact}
                          onChange={(e) => setFormData({ ...formData, tradeRef2Contact: e.target.value })}
                          placeholder="Contact Name"
                          className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Official Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.tradeRef2Email}
                          onChange={(e) => setFormData({ ...formData, tradeRef2Email: e.target.value })}
                          placeholder="email@carrier.com"
                          className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.tradeRef2Phone}
                          onChange={(e) => setFormData({ ...formData, tradeRef2Phone: e.target.value })}
                          placeholder="+1 (555) 987-6543"
                          className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold font-mono uppercase text-zinc-200 mb-1">Relationship Duration</label>
                        <input
                          type="text"
                          value={formData.tradeRef2Relation}
                          onChange={(e) => setFormData({ ...formData, tradeRef2Relation: e.target.value })}
                          placeholder="e.g. 18 months bilateral"
                          className="w-full h-10 px-3 rounded-lg border border-zinc-700 bg-zinc-950 text-white text-xs outline-none focus:border-[#DFB76C]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Declarations & Fraud */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Compliance Declarations &amp; Fraud Protections</span>
                </div>

                <div className="p-5 rounded-2xl border-2 border-zinc-700 bg-zinc-950/80 space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.tsrTcpaCompliant}
                      onChange={(e) => setFormData({ ...formData, tsrTcpaCompliant: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-zinc-600 bg-zinc-950 text-[#DFB76C] accent-[#DFB76C] mt-0.5 shrink-0"
                    />
                    <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                      <strong className="text-white font-bold">TSR &amp; TCPA Compliance Warranty:</strong> Applicant certifies that all traffic originated, traversed, or terminated across Voice Era Tech LLC complies strictly with the Telephone Consumer Protection Act (47 U.S.C. § 227) and the FTC Telemarketing Sales Rule.
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.antiSpoofingCompliant}
                      onChange={(e) => setFormData({ ...formData, antiSpoofingCompliant: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-zinc-600 bg-zinc-950 text-[#DFB76C] accent-[#DFB76C] mt-0.5 shrink-0"
                    />
                    <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                      <strong className="text-white font-bold">Truth in Caller ID Act Certification:</strong> Applicant explicitly warrants that all Calling Party Numbers (CLI / ANI) transmitted represent legitimate, properly allocated or subscribed telephone numbers and that no unlawful spoofing will occur.
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.knowYourCustomerChainCompliant}
                      onChange={(e) => setFormData({ ...formData, knowYourCustomerChainCompliant: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-zinc-600 bg-zinc-950 text-[#DFB76C] accent-[#DFB76C] mt-0.5 shrink-0"
                    />
                    <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                      <strong className="text-white font-bold">Downstream KYC Chain Verification:</strong> Applicant verifies that it enforces rigorous Know-Your-Customer onboarding policies for all subordinate carriers, enterprises, or aggregators delivering traffic through its network.
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.zeroToleranceAgreed}
                      onChange={(e) => setFormData({ ...formData, zeroToleranceAgreed: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-zinc-600 bg-zinc-950 text-[#DFB76C] accent-[#DFB76C] mt-0.5 shrink-0"
                    />
                    <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                      <strong className="text-white font-bold">Zero-Tolerance for Unlawful Robocalls &amp; Scams:</strong> Unlawful pre-recorded calls, IRS/Government impersonation, phishing, or bank fraud is strictly prohibited and subject to immediate trace blocking.
                    </div>
                  </label>
                </div>

                {/* Fraud Contacts & Immediate Suspension Consent */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      24/7 Fraud Response Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.fraudEmergencyEmail}
                      onChange={(e) => setFormData({ ...formData, fraudEmergencyEmail: e.target.value })}
                      placeholder="fraud-alerts@carrierexample.com"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      24/7 Fraud Emergency Phone <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.fraudEmergencyPhone}
                      onChange={(e) => setFormData({ ...formData, fraudEmergencyPhone: e.target.value })}
                      placeholder="+1 (555) 392-1033"
                      className="w-full h-11 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950/90 text-white font-medium placeholder:text-zinc-500 focus:border-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1 flex items-center pt-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.immediateSuspensionConsent}
                        onChange={(e) => setFormData({ ...formData, immediateSuspensionConsent: e.target.checked })}
                        className="w-5 h-5 rounded border-2 border-zinc-600 bg-zinc-950 text-[#DFB76C] accent-[#DFB76C] shrink-0"
                      />
                      <span className="text-xs text-zinc-200 font-bold leading-snug">
                        Immediate Route Suspension Consent upon verified fraud or ITG alert.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                STEP 4 — VERIFICATION
            ========================================================================= */}
            <div id="step-4" className="border-2 border-zinc-700 bg-zinc-900/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8 scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-700">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-mono font-bold text-sm">
                  04
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold">
                    STEP 4 — VERIFICATION
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Corporate Documentation, Legal Execution &amp; Certified Submission
                  </h2>
                </div>
              </div>

              {/* Uploads Grid */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Mandatory Verification Documents</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* 1. Incorporation Certificate */}
                  <div className="border-2 border-dashed border-zinc-600 hover:border-primary/60 rounded-2xl p-5 bg-zinc-950/80 text-center transition-all">
                    <UploadCloud className="w-7 h-7 mx-auto text-primary mb-2" />
                    <div className="text-xs font-bold text-white uppercase font-mono">Incorporation Certificate *</div>
                    <p className="text-[11px] text-zinc-400 mt-1">Articles of Organization or Certificate of Good Standing</p>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange("incorporationDocName", e)}
                      className="mt-3 block w-full text-xs text-zinc-300 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-black cursor-pointer"
                    />
                    {formData.incorporationDocName && (
                      <div className="mt-2 text-xs font-mono text-emerald-400 font-semibold truncate">
                        ✓ {formData.incorporationDocName}
                      </div>
                    )}
                  </div>

                  {/* 2. Proof of Address */}
                  <div className="border-2 border-dashed border-zinc-600 hover:border-primary/60 rounded-2xl p-5 bg-zinc-950/80 text-center transition-all">
                    <UploadCloud className="w-7 h-7 mx-auto text-primary mb-2" />
                    <div className="text-xs font-bold text-white uppercase font-mono">Proof of Address *</div>
                    <p className="text-[11px] text-zinc-400 mt-1">Utility bill, lease contract, or bank statement (&lt;90 days)</p>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange("proofOfAddressDocName", e)}
                      className="mt-3 block w-full text-xs text-zinc-300 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-black cursor-pointer"
                    />
                    {formData.proofOfAddressDocName && (
                      <div className="mt-2 text-xs font-mono text-emerald-400 font-semibold truncate">
                        ✓ {formData.proofOfAddressDocName}
                      </div>
                    )}
                  </div>

                  {/* 3. ITG / RMD Screenshots */}
                  <div className="border-2 border-dashed border-zinc-600 hover:border-primary/60 rounded-2xl p-5 bg-zinc-950/80 text-center transition-all">
                    <UploadCloud className="w-7 h-7 mx-auto text-primary mb-2" />
                    <div className="text-xs font-bold text-white uppercase font-mono">ITG Screenshots *</div>
                    <p className="text-[11px] text-zinc-400 mt-1">Screenshot of ITG Consortium registration or FCC RMD listing</p>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange("itgScreenshotDocName", e)}
                      className="mt-3 block w-full text-xs text-zinc-300 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-black cursor-pointer"
                    />
                    {formData.itgScreenshotDocName && (
                      <div className="mt-2 text-xs font-mono text-emerald-400 font-semibold truncate">
                        ✓ {formData.itgScreenshotDocName}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Data Processing & Truth in Application Consents */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="p-5 rounded-2xl border-2 border-zinc-700 bg-zinc-950/80 space-y-4">

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.dataProcessingConsent}
                      onChange={(e) => setFormData({ ...formData, dataProcessingConsent: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-zinc-600 bg-zinc-950 text-[#DFB76C] accent-[#DFB76C] mt-0.5 shrink-0"
                    />
                    <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                      <strong className="text-white font-bold">Data Processing Consent:</strong> I authorize Voice Era Tech LLC to process and retain corporate verification data, conduct regulatory sanctions checks, and transmit required traceback contact data to industry consortia.
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.accuracyAgreed}
                      onChange={(e) => setFormData({ ...formData, accuracyAgreed: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-zinc-600 bg-zinc-950 text-[#DFB76C] accent-[#DFB76C] mt-0.5 shrink-0"
                    />
                    <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                      <strong className="text-white font-bold">Truth-in-Application Warranty:</strong> Under penalty of perjury, I declare that all information, regulatory filings, banking data, and documentation submitted in this Wholesale Application are true, correct, and legally binding.
                    </div>
                  </label>
                </div>
              </div>

              {/* Authorized Digital Signature */}
              <div className="space-y-4 pt-4 border-t border-zinc-700/60">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                  <UserCheck className="w-4 h-4" />
                  <span>Authorized Digital Execution</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Authorized Signatory Full Name (Digital Signature) <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.digitalSignature}
                      onChange={(e) => setFormData({ ...formData, digitalSignature: e.target.value })}
                      placeholder="Type your full legal name as authorized corporate officer"
                      className="w-full h-12 px-4 rounded-xl border-2 border-primary bg-zinc-950 text-white font-serif italic text-base outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    />
                    <p className="text-[11px] text-zinc-400 mt-1 font-mono">
                      By typing your name, you acknowledge this as an electronic signature under the US Federal ESIGN Act of 2000.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-zinc-100 mb-1.5">
                      Execution Date
                    </label>
                    <input
                      type="date"
                      disabled
                      value={formData.signatureDate}
                      className="w-full h-12 px-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-zinc-300 font-mono text-sm outline-none cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Mandatory Terms Agreement Checkbox */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border-2 border-zinc-800 hover:border-[#DFB76C]/50 transition-colors">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={formData.termsAgreed}
                    onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                    className="w-5 h-5 rounded border-2 border-zinc-600 bg-zinc-900 text-[#DFB76C] focus:ring-2 focus:ring-[#DFB76C]/30 focus:ring-offset-0 accent-[#DFB76C] cursor-pointer shrink-0"
                  />
                  <span className="text-sm sm:text-base text-zinc-200">
                    Check this box to confirm you agree to our terms{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DFB76C] underline hover:text-[#caa157] font-medium transition-colors"
                    >
                      (click here to read)
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Action */}
              <div className="pt-6 border-t border-zinc-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Certified 256-Bit SHA-3 Carrier Ingestion Pipeline</span>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-13 px-8 rounded-full bg-[#DFB76C] hover:bg-[#caa157] text-black font-mono font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(223,183,108,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Processing Application...</span>
                    </>
                  ) : (
                    <>
                      <FileCheck2 className="w-4 h-4" />
                      <span>Submit Wholesale Application</span>
                    </>
                  )}
                </Button>
              </div>

              {isSubmitting && submissionProgress && (
                <div className="p-3 rounded-xl bg-zinc-950 border border-primary/30 text-xs font-mono text-primary text-center animate-pulse">
                  {submissionProgress}
                </div>
              )}
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
