"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

interface TermsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsDialog({ isOpen, onClose }: TermsDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px] max-h-[88vh] overflow-y-auto p-6 sm:p-8 border border-foreground/20 bg-background shadow-2xl rounded-2xl">
        <DialogHeader className="space-y-2 text-left pb-4 border-b border-foreground/10">
          <div className="inline-flex items-center gap-2">
            <FileText className="w-4 h-4 text-foreground" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Voice Era Tech LLC &bull; Legal Framework
            </span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-display tracking-tight text-foreground">
            Terms of Service
          </DialogTitle>
          <DialogDescription className="text-xs font-mono text-muted-foreground">
            Last Updated: January 2026 &bull; Master Telephony &amp; Infrastructure Agreement
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4 text-sm text-muted-foreground leading-relaxed">
          {/* CRITICAL CLAUSE: No Money Back Guarantee (Server) */}
          <div className="p-4 sm:p-5 rounded-xl border-2 border-foreground/20 bg-foreground/[0.03] space-y-2.5">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
              <span className="font-display text-base tracking-tight">
                Server &amp; Infrastructure: No Money Back Guarantee
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-sans">
              <strong>All server infrastructure, dedicated dialer instances, and server setups come with strictly NO MONEY-BACK GUARANTEE.</strong> Due to upfront compute allocation, dedicated IP routing, carrier cross-connect reservations, and cloud hardware provisioning costs, all fees paid for server setup, hosted dialer servers, and dedicated machine resources are completely <strong>non-refundable</strong> once provisioned.
            </p>
          </div>

          <section className="space-y-2">
            <h4 className="font-display text-base text-foreground font-medium">
              1. Telephony Services &amp; Route Provisioning
            </h4>
            <p className="text-xs sm:text-sm">
              Voice Era Tech LLC provides carrier-grade VoIP termination, direct CLI routes, and intelligent dialer management software. Service activation is contingent upon client network verification and compliance with acceptable telecommunications use policies.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display text-base text-foreground font-medium">
              2. TCPA, FDCPA &amp; Regulatory Attestation
            </h4>
            <p className="text-xs sm:text-sm">
              Clients utilizing Voice Era Tech routes and dialer infrastructure are required to maintain strict adherence to TCPA calling time windows, National DNC registry suppression, and proper STIR/SHAKEN cryptographic identity assignment. Voice Era Tech reserves the right to suspend any trunk generating fraudulent or unlawful traffic without refund.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display text-base text-foreground font-medium">
              3. Service Availability &amp; NOC Escalation
            </h4>
            <p className="text-xs sm:text-sm">
              Voice Era Tech maintains a 24/5 dedicated Network Operations Center (NOC) active across standard calling weeks (Monday through Friday) to provide sub-second route failover and Tier-1 carrier ticket escalation.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display text-base text-foreground font-medium">
              4. Direct Inquiries &amp; Legal Notices
            </h4>
            <p className="text-xs sm:text-sm">
              Any notices, questions, or contract inquiries regarding these terms may be transmitted to our designated team at <a href="mailto:info@voiceeratech.com" className="text-foreground underline">info@voiceeratech.com</a> or <a href="mailto:sales@voiceeratech.com" className="text-foreground underline">sales@voiceeratech.com</a>.
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-foreground/10 flex justify-end">
          <Button
            onClick={onClose}
            className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90 text-xs sm:text-sm cursor-pointer"
          >
            I Understand &amp; Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
