"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [assignedTicketId, setAssignedTicketId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry");
      }
      setAssignedTicketId(data.inquiry.id);
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error occurred";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36 border-t border-foreground/10 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              Direct Contact &amp; Support
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight text-foreground leading-[1.05] mb-4 sm:mb-6">
            Speak with a Telephony Specialist
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Have questions regarding wholesale VoIP routes, test SIP trunks, custom dialer configurations, or carrier rate sheets? Connect directly with our engineering and solutions team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Communication Channels & Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Direct Details */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Direct Sales &amp; Inquiries
                  </div>
                  <a
                    href="tel:+18005558642"
                    className="text-lg font-medium text-foreground hover:underline mt-0.5 block"
                  >
                    +1 (800) 555-VOICE
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Monday &ndash; Friday, 8:00 AM &ndash; 8:00 PM EST</p>
                </div>
              </div>

              {/* Direct Email - Sales */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Direct Sales Email
                  </div>
                  <a
                    href="mailto:sales@voiceeratech.com"
                    className="text-base sm:text-lg font-medium text-foreground hover:underline mt-0.5 block font-mono"
                  >
                    sales@voiceeratech.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Wholesale route rates, custom trunking &amp; dialer deployments</p>
                </div>
              </div>

              {/* Direct Email - Info */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    General Inquiries &amp; Information
                  </div>
                  <a
                    href="mailto:info@voiceeratech.com"
                    className="text-base sm:text-lg font-medium text-foreground hover:underline mt-0.5 block font-mono"
                  >
                    info@voiceeratech.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Billing, compliance, carrier attestation &amp; administrative support</p>
                </div>
              </div>

              {/* NOC & Network Operations - 24/5 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground shrink-0 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    NOC &amp; Network Operations
                  </div>
                  <p className="text-sm font-medium text-foreground mt-0.5">
                    24/5 Proactive VoIP Route Supervision
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Continuous monitoring across calling weeks. High-priority escalation lines available to contracted accounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.01] flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>All communications protected under enterprise NDA &amp; confidential inquiry policy.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="border border-foreground/15 rounded-2xl p-5 sm:p-8 lg:p-12 bg-card shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-display tracking-tight text-foreground mb-2">
                      Send Direct Inquiry
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leave your details below and a senior voice engineer will review your operational requirements and respond today.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 text-xs rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                        className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Global BPO Inc."
                        className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                      How Can We Help Your Operation? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Outline your VoIP route requirements, target destinations, concurrent call volume, or current dialer setup..."
                      className="w-full p-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full h-12 text-sm font-medium transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Transmit Inquiry
                      </span>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Inquiry Received
                  </span>
                  <h3 className="text-3xl font-display tracking-tight text-foreground mb-3">
                    Thank You, {form.name}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed mb-6">
                    Your inquiry has been assigned ticket ID <strong className="text-foreground font-mono">{assignedTicketId || `VET-${Math.floor(100000 + Math.random() * 900000)}`}</strong>. An email notification has been transmitted to our engineering desk, and a voice infrastructure specialist will contact you at <span className="underline text-foreground">{form.email}</span> shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="rounded-full px-8 h-11 text-sm font-medium cursor-pointer"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
