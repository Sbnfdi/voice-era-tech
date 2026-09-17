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
    interest: "Direct VoIP Routes & SIP Trunking",
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[620px] max-h-[92vh] overflow-y-auto p-5 sm:p-7 border border-primary/30 bg-card shadow-2xl rounded-2xl">
        {isSuccess ? (
          <div className="py-10 sm:py-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-gold-gradient text-primary-foreground mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(223,183,108,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-medium text-foreground tracking-tight">
              Route Test &amp; Demo Request Confirmed
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-foreground font-medium">{formData.fullName}</span>. A senior VoIP solutions engineer has reserved your slot for <span className="text-foreground font-medium">{formData.timeSlot}</span>. We will send test SIP trunk credentials and a calendar invite to <span className="text-foreground font-medium">{formData.workEmail}</span>.
            </p>
            <div className="pt-4">
              <Button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="rounded-full px-8 bg-gold-gradient text-primary-foreground font-semibold hover:brightness-110 cursor-pointer shadow-[0_0_15px_rgba(223,183,108,0.25)]"
              >
                Close Window
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-2 text-left pb-2 border-b border-border">
              <div className="flex items-center gap-3 mb-1">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-primary/30 bg-black shrink-0 flex items-center justify-center shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Voice Era Tech LLC"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#DFB76C]">Voice Era Tech LLC</div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live VoIP Interconnect &amp; Architecture Walkthrough</span>
                  </div>
                </div>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-display tracking-tight text-foreground">
                Request Route Test &amp; <span className="text-gold-gradient">Demo</span>
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                Experience Voice Era Tech&apos;s direct VoIP route architecture, Tier-1 SIP interconnects, and intelligent dialer systems firsthand with a solutions architect.
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
                    className="w-full h-11 px-3.5 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full h-11 px-3.5 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full h-11 px-3.5 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full h-11 px-3.5 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full h-11 px-3.5 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full h-11 px-3.5 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="Direct VoIP Routes & SIP Trunking">Direct VoIP Routes & SIP Trunking</option>
                    <option value="VoIP Routes + Hosted Dialer Suite">VoIP Routes + Hosted Dialer Suite</option>
                    <option value="Wholesale VoIP Routes">Wholesale VoIP Routes</option>
                    <option value="Predictive & Power Dialers">Predictive & Power Dialers</option>
                    <option value="Enterprise Carrier Interconnect">Enterprise Carrier Interconnect</option>
                    <option value="STIR/SHAKEN & Compliance Audit">STIR/SHAKEN & Compliance Audit</option>
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
                    className="w-full h-11 px-3.5 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Preferred Time (EST)
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full p-3 rounded-lg border border-primary/20 bg-[#08080B] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none"
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
                  className="bg-gold-gradient hover:brightness-110 text-primary-foreground font-semibold rounded-full px-8 h-12 text-sm shadow-[0_0_20px_rgba(223,183,108,0.25)] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Scheduling...
                    </span>
                  ) : (
                    "Confirm Demo Booking"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
