"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Clock, Sparkles, Phone, Mail, Building, Users } from "lucide-react";

interface BookDemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    interest?: string;
    plan?: string;
  };
}

export function BookDemoDialog({ isOpen, onClose, prefill }: BookDemoDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    company: "",
    teamSize: "11-50 agents",
    interest: "Predictive & Power Dialers",
    date: "",
    timeSlot: "10:00 AM EST",
    notes: "",
  });

  useEffect(() => {
    if (prefill?.interest) {
      setFormData((prev) => ({ ...prev, interest: prefill.interest || prev.interest }));
    }
    if (prefill?.plan) {
      setFormData((prev) => ({
        ...prev,
        notes: `Inquiry regarding the ${prefill.plan} tier.`,
      }));
    }
  }, [prefill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift submission and confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (!open ? handleResetAndClose() : null)}>
      <DialogContent className="max-w-xl p-0 overflow-hidden border border-foreground/15 bg-background shadow-2xl rounded-2xl">
        {!isSuccess ? (
          <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
            <DialogHeader className="mb-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-foreground/20 bg-black shadow-md flex items-center justify-center shrink-0">
                  <Image 
                    src="/logo.png" 
                    alt="Voice Era Tech LLC" 
                    width={40} 
                    height={40} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-display text-lg font-medium text-foreground tracking-tight block">
                    Voice Era Tech LLC
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Live Telephony &amp; AI Walkthrough
                    </span>
                  </div>
                </div>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-display tracking-tight text-foreground">
                Book an Executive Demo
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                Experience Voice Era Tech&apos;s dialer architecture, agent orchestration, and sub-50ms carrier routing firsthand with a solutions architect.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Sarah Connor"
                    className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="sarah@enterprise.com"
                    className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-1234"
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
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Apex Communications"
                    className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Active Agent Seats
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-background text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="1-10 agents">1 - 10 agents</option>
                    <option value="11-50 agents">11 - 50 agents</option>
                    <option value="51-200 agents">51 - 200 agents</option>
                    <option value="200+ enterprise">200+ enterprise seats</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Primary Focus
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-background text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="Predictive & Power Dialers">Predictive & Power Dialers</option>
                    <option value="Conversational AI Voice Agents">Conversational AI Voice Agents</option>
                    <option value="Speed-to-Lead CRM Integration">Speed-to-Lead CRM Integration</option>
                    <option value="High-Density SIP Trunks">High-Density SIP Trunks</option>
                    <option value="Custom Telephony Infrastructure">Custom Telephony Infrastructure</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Preferred Time (EST)
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-lg border border-foreground/15 bg-background text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="09:00 AM EST">09:00 AM EST</option>
                    <option value="11:00 AM EST">11:00 AM EST</option>
                    <option value="01:30 PM EST">01:30 PM EST</option>
                    <option value="03:00 PM EST">03:00 PM EST</option>
                    <option value="04:30 PM EST">04:30 PM EST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                  Specific Requirements or Current Stack (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Currently on VICIdial/Five9, looking to integrate with Salesforce..."
                  className="w-full p-3 rounded-lg border border-foreground/15 bg-foreground/[0.02] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>30-minute tailored session</span>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-12 text-sm font-medium transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Scheduling...
                    </span>
                  ) : (
                    "Confirm Demo Booking"
                  )}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">
              Walkthrough Confirmed
            </span>
            <h3 className="text-2xl md:text-3xl font-display tracking-tight text-foreground mb-3">
              We&apos;re Ready to Show You Voice Era Tech
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed mb-6">
              We have reserved your slot for <strong className="text-foreground">{formData.interest}</strong>. A calendar invitation and video link have been dispatched to <span className="underline text-foreground">{formData.workEmail || "your email"}</span>.
            </p>

            <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.02] max-w-md mx-auto text-left space-y-2 mb-8 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contact:</span>
                <span className="text-foreground font-medium">{formData.fullName} ({formData.company})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="text-foreground font-medium">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lead Architect:</span>
                <span className="text-foreground font-medium">Assigned &amp; Preparing Staging Environment</span>
              </div>
            </div>

            <Button
              onClick={handleResetAndClose}
              className="bg-foreground text-background rounded-full px-8 h-12 text-sm font-medium hover:bg-foreground/90 transition-all"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
