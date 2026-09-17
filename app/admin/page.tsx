"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  Filter,
  RefreshCw,
  Mail,
  Phone,
  Building,
  FileText,
  Download,
  Trash2,
  CheckCircle2,
  Clock,
  XCircle,
  AlertTriangle,
  Lock,
  LogOut,
  ChevronRight,
  ExternalLink,
  Check,
  Send,
  SlidersHorizontal,
  FileSpreadsheet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Inquiry, KycSubmission } from "@/lib/db";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authEmail, setAuthEmail] = useState("admin@voiceeratech.com");
  const [authPassword, setAuthPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<"inquiries" | "kyc" | "system">("inquiries");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [kycs, setKycs] = useState<KycSubmission[]>([]);
  const [systemStats, setSystemStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState("all");
  const [kycStatusFilter, setKycStatusFilter] = useState("all");

  // Selected for Details Modal
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [selectedKyc, setSelectedKyc] = useState<KycSubmission | null>(null);

  // Admin notes & status editing
  const [editingNotes, setEditingNotes] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Test Email
  const [testEmailAddress, setTestEmailAddress] = useState("");
  const [testEmailResult, setTestEmailResult] = useState<any>(null);
  const [isSendingTest, setIsSendingTest] = useState(false);

  // Check existing session
  useEffect(() => {
    const token = localStorage.getItem("vet_admin_session");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch all data
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [inqRes, kycRes, statsRes] = await Promise.all([
        fetch("/api/inquiries"),
        fetch("/api/kyc"),
        fetch("/api/admin/stats"),
      ]);

      const inqData = await inqRes.json();
      const kycData = await kycRes.json();
      const statsData = await statsRes.json();

      if (inqData.success) setInquiries(inqData.inquiries || []);
      if (kycData.success) setKycs(kycData.kycs || []);
      if (statsData.success) setSystemStats(statsData.stats || null);
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, fetchData]);

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: authEmail, password: authPassword }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Invalid login credentials.");
      }

      localStorage.setItem("vet_admin_session", data.token);
      setIsAuthenticated(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Authentication failed.";
      setAuthError(msg);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("vet_admin_session");
    setIsAuthenticated(false);
    setAuthPassword("");
  };

  // Inquiry actions
  const handleUpdateInquiryStatus = async (id: string, status: Inquiry["status"]) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.map((i) => (i.id === id ? data.inquiry : i)));
        if (selectedInquiry?.id === id) {
          setSelectedInquiry(data.inquiry);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSaveInquiryNotes = async (id: string) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: editingNotes }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.map((i) => (i.id === id ? data.inquiry : i)));
        if (selectedInquiry?.id === id) {
          setSelectedInquiry(data.inquiry);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this inquiry?")) return;
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.filter((i) => i.id !== id));
        setSelectedInquiry(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // KYC actions
  const handleUpdateKycStatus = async (id: string, status: KycSubmission["status"]) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/kyc/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        setKycs((prev) => prev.map((k) => (k.id === id ? data.kyc : k)));
        if (selectedKyc?.id === id) {
          setSelectedKyc(data.kyc);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSaveKycNotes = async (id: string) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/kyc/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminNotes: editingNotes }),
      });
      const data = await res.json();
      if (data.success) {
        setKycs((prev) => prev.map((k) => (k.id === id ? data.kyc : k)));
        if (selectedKyc?.id === id) {
          setSelectedKyc(data.kyc);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteKyc = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this KYC submission?")) return;
    try {
      const res = await fetch(`/api/kyc/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setKycs((prev) => prev.filter((k) => k.id !== id));
        setSelectedKyc(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Send Test Email
  const handleSendTestEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingTest(true);
    setTestEmailResult(null);
    try {
      const res = await fetch("/api/admin/test-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetEmail: testEmailAddress }),
      });
      const data = await res.json();
      setTestEmailResult(data);
    } catch (err: unknown) {
      setTestEmailResult({
        success: false,
        error: err instanceof Error ? err.message : "Failed to run test",
      });
    } finally {
      setIsSendingTest(false);
    }
  };

  // Filtered lists
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inq) => {
      const matchesStatus = inquiryStatusFilter === "all" || inq.status === inquiryStatusFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        inq.name.toLowerCase().includes(q) ||
        inq.company.toLowerCase().includes(q) ||
        inq.email.toLowerCase().includes(q) ||
        inq.id.toLowerCase().includes(q) ||
        inq.message.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [inquiries, inquiryStatusFilter, searchQuery]);

  const filteredKycs = useMemo(() => {
    return kycs.filter((kyc) => {
      const matchesStatus = kycStatusFilter === "all" || kyc.status === kycStatusFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        kyc.companyName.toLowerCase().includes(q) ||
        kyc.signatoryName.toLowerCase().includes(q) ||
        kyc.signatoryEmail.toLowerCase().includes(q) ||
        kyc.referenceId.toLowerCase().includes(q) ||
        kyc.country.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [kycs, kycStatusFilter, searchQuery]);

  // Export Inquiries CSV
  const exportInquiriesCsv = () => {
    const headers = ["Ticket ID", "Date", "Full Name", "Company", "Email", "Phone", "Status", "Message"];
    const rows = inquiries.map((i) => [
      i.id,
      new Date(i.createdAt).toLocaleString(),
      `"${i.name.replace(/"/g, '""')}"`,
      `"${i.company.replace(/"/g, '""')}"`,
      i.email,
      i.phone,
      i.status,
      `"${i.message.replace(/"/g, '""')}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `voiceera_inquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export KYC CSV
  const exportKycCsv = () => {
    const headers = ["Ref ID", "Date", "Company Name", "Country", "Registration No", "Tax ID", "Signatory", "Email", "Phone", "Traffic Type", "Status"];
    const rows = kycs.map((k) => [
      k.referenceId,
      new Date(k.createdAt).toLocaleString(),
      `"${k.companyName.replace(/"/g, '""')}"`,
      k.country,
      k.registrationNumber,
      k.taxId,
      `"${k.signatoryName.replace(/"/g, '""')}"`,
      k.signatoryEmail,
      k.signatoryPhone,
      k.trafficType,
      k.status,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `voiceera_kyc_submissions_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 1. LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 noise-overlay">
        <div className="w-full max-w-md border border-primary/30 rounded-3xl p-6 sm:p-10 bg-card shadow-[0_0_50px_rgba(0,0,0,0.6)] space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-black border border-primary/30 overflow-hidden mx-auto shadow-[0_0_15px_rgba(223,183,108,0.2)] flex items-center justify-center mb-2">
              <Image src="/logo.png" alt="Voice Era Tech" width={44} height={44} className="object-cover" />
            </div>
            <h1 className="text-2xl font-display font-medium text-foreground tracking-tight">
              Voice <span className="text-gold-gradient">Era</span> Tech Portal
            </h1>
            <p className="text-xs font-mono uppercase tracking-widest text-[#DFB76C]">
              Carrier Admin &bull; Operations Suite
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                Admin Username / Email
              </label>
              <input
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="admin@voiceeratech.com"
                className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:border-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:border-foreground"
              />
              <span className="text-[10px] text-muted-foreground block mt-1">Default: voiceera2026</span>
            </div>

            <Button
              type="submit"
              className="w-full bg-gold-gradient hover:brightness-110 text-primary-foreground font-semibold rounded-full h-11 text-sm mt-2 cursor-pointer shadow-[0_0_20px_rgba(223,183,108,0.25)] transition-all"
            >
              Sign In to Command Center
            </Button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              &larr; Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay">
      {/* Top App Bar */}
      <header className="border-b border-border bg-background/90 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <Link href="/" className="relative w-9 h-9 rounded-xl overflow-hidden border border-primary/30 bg-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(223,183,108,0.15)]">
              <Image src="/logo.png" alt="Voice Era Tech LLC" width={36} height={36} className="w-full h-full object-cover" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-medium text-lg sm:text-xl text-foreground">Voice <span className="text-gold-gradient">Era</span> Tech</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFB76C] bg-primary/10 px-1.5 py-0.5 rounded border border-primary/25 font-semibold">
                  Admin Command
                </span>
              </div>
              <span className="text-[9px] font-mono text-muted-foreground hidden sm:block">
                Inquiries &amp; Carrier KYC Management Engine
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchData}
              disabled={isLoading}
              className="rounded-full text-xs h-9 px-3.5 border-foreground/20 hover:bg-foreground/5 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Link
              href="/kyc"
              target="_blank"
              className="hidden md:inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground border border-foreground/15 px-3 py-1.5 rounded-full"
            >
              <span>View Live KYC Form</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-xs text-destructive hover:bg-destructive/10 rounded-full h-9 px-3 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 mr-1" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Metric KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-foreground/15 rounded-2xl p-4 sm:p-5 bg-card shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase">
              <span>Total Inquiries</span>
              <Mail className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-2">
              {inquiries.length}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {inquiries.filter((i) => i.status === "new").length} New / Unread
              </span>
            </div>
          </div>

          <div className="border border-foreground/15 rounded-2xl p-4 sm:p-5 bg-card shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase">
              <span>KYC Submissions</span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-2">
              {kycs.length}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">
              <span className="font-semibold text-amber-600 dark:text-amber-400">
                {kycs.filter((k) => k.status === "pending").length} Pending Review
              </span>
            </div>
          </div>

          <div className="border border-foreground/15 rounded-2xl p-4 sm:p-5 bg-card shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase">
              <span>Approved KYCs</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-2">
              {kycs.filter((k) => k.status === "approved").length}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">
              <span>Carriers active on routes</span>
            </div>
          </div>

          <div className="border border-foreground/15 rounded-2xl p-4 sm:p-5 bg-card shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase">
              <span>SMTP Delivery</span>
              <Send className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-lg sm:text-xl font-display font-medium text-foreground mt-2 flex items-center gap-2">
              {systemStats?.smtpConfigured ? (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Delivery</span>
                </>
              ) : (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>Local Sandbox</span>
                </>
              )}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1 truncate">
              {systemStats?.smtpConfigured ? "Connected to Mail Server" : "Stored locally & PDF active"}
            </div>
          </div>
        </div>

        {/* Navigation Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-foreground/10 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => { setActiveTab("inquiries"); setSelectedInquiry(null); }}
              className={`px-5 py-2.5 rounded-full text-xs font-medium font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "inquiries"
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-foreground/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              Inquiries ({inquiries.length})
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab("kyc"); setSelectedKyc(null); }}
              className={`px-5 py-2.5 rounded-full text-xs font-medium font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "kyc"
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-foreground/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              KYC Submissions ({kycs.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("system")}
              className={`px-5 py-2.5 rounded-full text-xs font-medium font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "system"
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-foreground/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              Settings &amp; Diagnostics
            </button>
          </div>

          {activeTab !== "system" && (
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, company, email, ID..."
                  className="w-full h-10 pl-9 pr-3 rounded-full border border-foreground/15 bg-background text-xs text-foreground focus:outline-none focus:border-foreground"
                />
              </div>

              {activeTab === "inquiries" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportInquiriesCsv}
                  className="rounded-full text-xs h-10 px-4 border-foreground/20 hover:bg-foreground/5 cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 mr-1.5" />
                  Export CSV
                </Button>
              )}

              {activeTab === "kyc" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportKycCsv}
                  className="rounded-full text-xs h-10 px-4 border-foreground/20 hover:bg-foreground/5 cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 mr-1.5" />
                  Export CSV
                </Button>
              )}
            </div>
          )}
        </div>

        {/* TAB 1: INQUIRIES MANAGEMENT */}
        {activeTab === "inquiries" && (
          <div className="space-y-4">
            {/* Status Filter Badges */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground font-mono uppercase text-[10px]">Filter Status:</span>
              {["all", "new", "contacted", "in_progress", "closed"].map((st) => (
                <button
                  key={st}
                  onClick={() => setInquiryStatusFilter(st)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono capitalize transition-colors cursor-pointer ${
                    inquiryStatusFilter === st
                      ? "bg-foreground text-background font-semibold"
                      : "bg-foreground/5 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {st.replace("_", " ")}
                </button>
              ))}
            </div>

            {/* Inquiries Table */}
            <div className="border border-foreground/15 rounded-2xl bg-card overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-foreground/[0.03] border-b border-foreground/10 text-muted-foreground font-mono uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Date / Ticket</th>
                      <th className="py-3.5 px-4">Contact</th>
                      <th className="py-3.5 px-4">Company</th>
                      <th className="py-3.5 px-4">Message Snippet</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/10">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-muted-foreground text-sm">
                          No inquiries match the current search / filter criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => {
                        const statusColors: Record<string, string> = {
                          new: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
                          contacted: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                          in_progress: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                          closed: "bg-muted text-muted-foreground border-foreground/10",
                        };

                        return (
                          <tr
                            key={inq.id}
                            className="hover:bg-foreground/[0.01] transition-colors cursor-pointer"
                            onClick={() => {
                              setSelectedInquiry(inq);
                              setEditingNotes(inq.notes || "");
                            }}
                          >
                            <td className="py-3.5 px-4">
                              <div className="font-mono text-foreground font-medium">{inq.id}</div>
                              <div className="text-[10px] text-muted-foreground">
                                {new Date(inq.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-medium text-foreground">{inq.name}</div>
                              <div className="text-[11px] text-muted-foreground font-mono">{inq.email}</div>
                              {inq.phone && <div className="text-[10px] text-muted-foreground">{inq.phone}</div>}
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-medium text-foreground">{inq.company}</div>
                            </td>
                            <td className="py-3.5 px-4 max-w-xs truncate text-muted-foreground">
                              {inq.message}
                            </td>
                            <td className="py-3.5 px-4">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold border ${statusColors[inq.status] || ""}`}>
                                {inq.status.replace("_", " ")}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full text-xs h-8 px-3 border-foreground/20 hover:bg-foreground/5 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedInquiry(inq);
                                  setEditingNotes(inq.notes || "");
                                }}
                              >
                                View Details
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KYC SUBMISSIONS MANAGEMENT */}
        {activeTab === "kyc" && (
          <div className="space-y-4">
            {/* Status Filter Badges */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground font-mono uppercase text-[10px]">Filter Status:</span>
              {["all", "pending", "under_review", "approved", "rejected", "info_requested"].map((st) => (
                <button
                  key={st}
                  onClick={() => setKycStatusFilter(st)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono capitalize transition-colors cursor-pointer ${
                    kycStatusFilter === st
                      ? "bg-foreground text-background font-semibold"
                      : "bg-foreground/5 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {st.replace("_", " ")}
                </button>
              ))}
            </div>

            {/* KYC Table */}
            <div className="border border-foreground/15 rounded-2xl bg-card overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-foreground/[0.03] border-b border-foreground/10 text-muted-foreground font-mono uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Audit Ref</th>
                      <th className="py-3.5 px-4">Entity &amp; Jurisdiction</th>
                      <th className="py-3.5 px-4">Signatory Officer</th>
                      <th className="py-3.5 px-4">Traffic Profile</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Certified PDF &amp; Review</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/10">
                    {filteredKycs.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-muted-foreground text-sm">
                          No KYC submissions match the current search / filter criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredKycs.map((kyc) => {
                        const statusColors: Record<string, string> = {
                          pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                          under_review: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
                          approved: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                          rejected: "bg-destructive/10 text-destructive border-destructive/20",
                          info_requested: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
                        };

                        return (
                          <tr
                            key={kyc.id}
                            className="hover:bg-foreground/[0.01] transition-colors cursor-pointer"
                            onClick={() => {
                              setSelectedKyc(kyc);
                              setEditingNotes(kyc.adminNotes || "");
                            }}
                          >
                            <td className="py-3.5 px-4">
                              <div className="font-mono text-foreground font-semibold">{kyc.referenceId}</div>
                              <div className="text-[10px] text-muted-foreground">
                                {new Date(kyc.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-medium text-foreground">{kyc.companyName}</div>
                              <div className="text-[11px] text-muted-foreground font-mono">{kyc.country} &bull; {kyc.registrationNumber}</div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-medium text-foreground">{kyc.signatoryName}</div>
                              <div className="text-[11px] text-muted-foreground font-mono">{kyc.signatoryEmail}</div>
                              <div className="text-[10px] text-muted-foreground">{kyc.signatoryPhone}</div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-medium text-foreground">{kyc.estimatedMonthlyMinutes}</div>
                              <div className="text-[10px] text-muted-foreground">{kyc.trafficType}</div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold border ${statusColors[kyc.status] || ""}`}>
                                {kyc.status.replace("_", " ")}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-right space-x-2">
                              <a
                                href={`/api/kyc/${kyc.id}/pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-[11px] font-medium border border-foreground/20 px-2.5 py-1.5 rounded-full hover:bg-foreground/5 transition-colors"
                              >
                                <Download className="w-3 h-3" />
                                PDF
                              </a>
                              <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full text-xs h-8 px-3 border-foreground/20 hover:bg-foreground/5 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedKyc(kyc);
                                  setEditingNotes(kyc.adminNotes || "");
                                }}
                              >
                                Inspect KYC
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SETTINGS & DIAGNOSTICS */}
        {activeTab === "system" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SMTP Settings Info */}
            <div className="border border-foreground/15 rounded-2xl p-6 bg-card space-y-4">
              <div className="flex items-center gap-2 text-base font-display font-medium text-foreground pb-3 border-b border-foreground/10">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>Email Transmission Settings</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/[0.02] border border-foreground/10">
                  <span className="text-muted-foreground font-mono uppercase">Inquiry Support Desk</span>
                  <span className="font-mono text-foreground font-semibold">{systemStats?.supportEmail || "support@voiceeratech.com"}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/[0.02] border border-foreground/10">
                  <span className="text-muted-foreground font-mono uppercase">KYC Application Desk</span>
                  <span className="font-mono text-foreground font-semibold">{systemStats?.kycEmail || "kyc@voiceeratech.com"}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/[0.02] border border-foreground/10">
                  <span className="text-muted-foreground font-mono uppercase">Live SMTP Status</span>
                  <span className={`font-mono font-semibold ${systemStats?.smtpConfigured ? "text-emerald-500" : "text-amber-500"}`}>
                    {systemStats?.smtpConfigured ? "Configured & Active" : "Local Sandbox Mode (Submissions & PDFs Stored)"}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/10 text-xs text-muted-foreground leading-relaxed">
                <strong>How to configure live SMTP:</strong> Place your mail credentials in <code>.env.local</code>:
                <pre className="mt-2 p-2.5 rounded bg-foreground/5 font-mono text-[11px] overflow-x-auto text-foreground">
                  SMTP_HOST=smtp.yourmail.com&#10;SMTP_PORT=587&#10;SMTP_USER=user@yourmail.com&#10;SMTP_PASS=yourpassword&#10;SUPPORT_EMAIL=support@voiceeratech.com&#10;KYC_EMAIL=kyc@voiceeratech.com
                </pre>
              </div>
            </div>

            {/* Test Email Dispatcher */}
            <div className="border border-foreground/15 rounded-2xl p-6 bg-card space-y-4">
              <div className="flex items-center gap-2 text-base font-display font-medium text-foreground pb-3 border-b border-foreground/10">
                <Send className="w-5 h-5 text-emerald-500" />
                <span>Test Email Dispatcher</span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Test and verify outbound SMTP routing by sending a live test transmission to any destination email address.
              </p>

              {testEmailResult && (
                <div
                  className={`p-3 rounded-xl border text-xs leading-relaxed ${
                    testEmailResult.success
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400"
                  }`}
                >
                  <div className="font-semibold">{testEmailResult.message || testEmailResult.error}</div>
                  <div className="text-[11px] font-mono mt-0.5">Mode: {testEmailResult.mode}</div>
                </div>
              )}

              <form onSubmit={handleSendTestEmail} className="space-y-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                    Destination Test Email
                  </label>
                  <input
                    type="email"
                    required
                    value={testEmailAddress}
                    onChange={(e) => setTestEmailAddress(e.target.value)}
                    placeholder="you@enterprise.com"
                    className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-background text-sm text-foreground focus:outline-none focus:border-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSendingTest}
                  className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full h-11 text-xs font-medium cursor-pointer"
                >
                  {isSendingTest ? "Sending Test Transmission..." : "Send Test Transmission"}
                </Button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* MODAL: INQUIRY DETAILS DRAWER */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-foreground/20 rounded-3xl p-6 sm:p-8 bg-card shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-foreground/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Telephony Inquiry Ticket</span>
                <h2 className="text-2xl font-display font-medium text-foreground">{selectedInquiry.id}</h2>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-2 rounded-full border border-foreground/10 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Quick Contact & Company */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl border border-foreground/10 bg-foreground/[0.01]">
                <div className="text-muted-foreground font-mono uppercase text-[10px]">Client Name</div>
                <div className="text-sm font-semibold text-foreground mt-0.5">{selectedInquiry.name}</div>
                <div className="text-muted-foreground font-mono mt-1">{selectedInquiry.company}</div>
              </div>
              <div className="p-3.5 rounded-xl border border-foreground/10 bg-foreground/[0.01]">
                <div className="text-muted-foreground font-mono uppercase text-[10px]">Direct Contact</div>
                <div className="text-sm font-mono text-foreground mt-0.5">
                  <a href={`mailto:${selectedInquiry.email}`} className="text-blue-500 hover:underline">
                    {selectedInquiry.email}
                  </a>
                </div>
                {selectedInquiry.phone && (
                  <div className="text-muted-foreground font-mono mt-1">
                    <a href={`tel:${selectedInquiry.phone}`} className="hover:underline">
                      {selectedInquiry.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Message Body */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Message / Requirement</div>
              <div className="p-4 rounded-xl border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {selectedInquiry.message}
              </div>
            </div>

            {/* Status Selector */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Manage Status</div>
              <div className="flex flex-wrap gap-2">
                {(["new", "contacted", "in_progress", "closed"] as const).map((st) => (
                  <button
                    key={st}
                    disabled={isUpdating}
                    onClick={() => handleUpdateInquiryStatus(selectedInquiry.id, st)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono capitalize transition-all cursor-pointer ${
                      selectedInquiry.status === st
                        ? "bg-foreground text-background font-bold shadow-sm"
                        : "border border-foreground/20 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {st.replace("_", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Admin Notes */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Internal Admin Notes</div>
              <textarea
                rows={3}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="Add notes e.g. Sent rate deck for US Tier-1, scheduled kickoff call..."
                className="w-full p-3 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-xs text-foreground focus:outline-none focus:border-foreground resize-none"
              />
              <div className="flex justify-end mt-2">
                <Button
                  size="sm"
                  onClick={() => handleSaveInquiryNotes(selectedInquiry.id)}
                  disabled={isUpdating}
                  className="rounded-full text-xs h-8 px-4 bg-foreground text-background cursor-pointer"
                >
                  Save Internal Note
                </Button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-foreground/10 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                className="text-xs text-destructive hover:bg-destructive/10 rounded-full h-9 px-3 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                Delete Inquiry
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedInquiry(null)}
                className="rounded-full text-xs h-9 px-6 border-foreground/20 cursor-pointer"
              >
                Close Drawer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: KYC DETAILS INSPECTOR */}
      {selectedKyc && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-foreground/20 rounded-3xl p-6 sm:p-8 bg-card shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-foreground/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Certified Carrier KYC</span>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    STIR/SHAKEN Level-A
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-1">
                  {selectedKyc.companyName}
                </h2>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">Ref: {selectedKyc.referenceId}</div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`/api/kyc/${selectedKyc.id}/pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-foreground text-background hover:bg-foreground/90 font-medium px-4 h-9 rounded-full text-xs shadow-sm transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
                <button
                  onClick={() => setSelectedKyc(null)}
                  className="p-2 rounded-full border border-foreground/10 text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Status Bar */}
            <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.01] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Current Verification Status</div>
                <div className="text-sm font-semibold capitalize mt-0.5">{selectedKyc.status.replace("_", " ")}</div>
              </div>

              <div className="flex items-center gap-2">
                {(["pending", "under_review", "approved", "rejected", "info_requested"] as const).map((st) => (
                  <button
                    key={st}
                    disabled={isUpdating}
                    onClick={() => handleUpdateKycStatus(selectedKyc.id, st)}
                    className={`px-3 py-1 rounded-full text-xs font-mono capitalize transition-all cursor-pointer ${
                      selectedKyc.status === st
                        ? "bg-foreground text-background font-bold shadow-sm"
                        : "border border-foreground/20 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {st.replace("_", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              {/* Box 1: Corporate Legal Info */}
              <div className="p-4 rounded-xl border border-foreground/10 space-y-2">
                <div className="font-mono text-xs uppercase font-semibold text-foreground border-b border-foreground/10 pb-1.5">
                  1. Corporate Identity
                </div>
                <div><strong>Legal Name:</strong> {selectedKyc.companyName}</div>
                <div><strong>DBA:</strong> {selectedKyc.dba || "None"}</div>
                <div><strong>Registration No:</strong> {selectedKyc.registrationNumber}</div>
                <div><strong>Tax ID / EIN:</strong> {selectedKyc.taxId}</div>
                <div><strong>Country:</strong> {selectedKyc.country}</div>
                <div><strong>Website:</strong> <a href={selectedKyc.website} target="_blank" className="text-blue-500 hover:underline">{selectedKyc.website}</a></div>
                <div><strong>Address:</strong> {selectedKyc.address}, {selectedKyc.city}, {selectedKyc.state} {selectedKyc.postalCode}</div>
              </div>

              {/* Box 2: Signatory & Contacts */}
              <div className="p-4 rounded-xl border border-foreground/10 space-y-2">
                <div className="font-mono text-xs uppercase font-semibold text-foreground border-b border-foreground/10 pb-1.5">
                  2. Signatory &amp; Contacts
                </div>
                <div><strong>Authorized Officer:</strong> {selectedKyc.signatoryName} ({selectedKyc.signatoryTitle})</div>
                <div><strong>Email:</strong> <a href={`mailto:${selectedKyc.signatoryEmail}`} className="text-blue-500 hover:underline">{selectedKyc.signatoryEmail}</a></div>
                <div><strong>Phone:</strong> {selectedKyc.signatoryPhone}</div>
                <div><strong>NOC Contact:</strong> {selectedKyc.nocName} &bull; {selectedKyc.nocEmail} &bull; {selectedKyc.nocPhone}</div>
                <div><strong>Billing Contact:</strong> {selectedKyc.billingName} &bull; {selectedKyc.billingEmail} &bull; {selectedKyc.billingPhone}</div>
              </div>

              {/* Box 3: Traffic Specifications */}
              <div className="p-4 rounded-xl border border-foreground/10 space-y-2">
                <div className="font-mono text-xs uppercase font-semibold text-foreground border-b border-foreground/10 pb-1.5">
                  3. Traffic &amp; Telephony
                </div>
                <div><strong>Services:</strong> {Array.isArray(selectedKyc.servicesRequested) ? selectedKyc.servicesRequested.join(", ") : selectedKyc.servicesRequested}</div>
                <div><strong>Monthly Minutes:</strong> {selectedKyc.estimatedMonthlyMinutes}</div>
                <div><strong>Concurrent Channels:</strong> {selectedKyc.concurrentChannels}</div>
                <div><strong>Traffic Profile:</strong> {selectedKyc.trafficType}</div>
                <div><strong>Destinations:</strong> {selectedKyc.targetCountries}</div>
              </div>

              {/* Box 4: Technical IPs & Whitelist */}
              <div className="p-4 rounded-xl border border-foreground/10 space-y-2">
                <div className="font-mono text-xs uppercase font-semibold text-foreground border-b border-foreground/10 pb-1.5">
                  4. Interconnect Whitelist &amp; SIP
                </div>
                <div><strong>Signaling Switch IPs:</strong> <span className="font-mono">{selectedKyc.signalingIps}</span></div>
                <div><strong>Media RTP IPs:</strong> <span className="font-mono">{selectedKyc.mediaIps || "Same as Signaling"}</span></div>
                <div><strong>Supported Codecs:</strong> {selectedKyc.codecs}</div>
              </div>
            </div>

            {/* Documents Manifest */}
            <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.01] space-y-2 text-xs">
              <div className="font-mono text-xs uppercase font-semibold text-foreground border-b border-foreground/10 pb-1.5">
                5. Submitted Document Manifest
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="p-2.5 rounded-lg border border-foreground/10 bg-card">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">Certificate of Incorporation</div>
                  <div className="font-medium text-foreground mt-0.5 truncate">{selectedKyc.documents?.incorporationDocName || "Verified"}</div>
                </div>
                <div className="p-2.5 rounded-lg border border-foreground/10 bg-card">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">Tax Form / W-9</div>
                  <div className="font-medium text-foreground mt-0.5 truncate">{selectedKyc.documents?.taxDocName || "Verified"}</div>
                </div>
                <div className="p-2.5 rounded-lg border border-foreground/10 bg-card">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">Signatory Photo ID</div>
                  <div className="font-medium text-foreground mt-0.5 truncate">{selectedKyc.documents?.signerIdDocName || "Verified"}</div>
                </div>
              </div>
            </div>

            {/* Attestation & Electronic Signature */}
            <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.01] text-xs space-y-1">
              <div><strong>Digital Electronic Signature:</strong> <span className="font-mono text-foreground font-bold">{selectedKyc.digitalSignature}</span></div>
              <div><strong>Execution Timestamp:</strong> <span className="font-mono text-muted-foreground">{new Date(selectedKyc.createdAt).toUTCString()}</span></div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
                ✓ FCC STIR/SHAKEN Level-A, TCPA &amp; Truth-in-Application certified by applicant.
              </div>
            </div>

            {/* Admin Notes */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Compliance Review Notes</div>
              <textarea
                rows={3}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="e.g. IPs whitelisted on SBC-01, rate deck VET-US-03 assigned..."
                className="w-full p-3 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-xs text-foreground focus:outline-none focus:border-foreground resize-none"
              />
              <div className="flex justify-end mt-2">
                <Button
                  size="sm"
                  onClick={() => handleSaveKycNotes(selectedKyc.id)}
                  disabled={isUpdating}
                  className="rounded-full text-xs h-8 px-4 bg-foreground text-background cursor-pointer"
                >
                  Save Compliance Note
                </Button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-foreground/10 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteKyc(selectedKyc.id)}
                className="text-xs text-destructive hover:bg-destructive/10 rounded-full h-9 px-3 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                Delete Submission
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedKyc(null)}
                className="rounded-full text-xs h-9 px-6 border-foreground/20 cursor-pointer"
              >
                Close Inspector
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
