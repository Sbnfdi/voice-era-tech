import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Voice Era Tech LLC",
  description: "Terms of Service, Master Services Agreement, and server provisioning policies for Voice Era Tech LLC.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen py-20 px-6 lg:px-12 max-w-4xl mx-auto text-foreground">
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </div>

      <div className="space-y-4 pb-8 border-b border-foreground/10">
        <div className="inline-flex items-center gap-2">
          <FileText className="w-4 h-4 text-foreground" />
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Voice Era Tech LLC &bull; Legal Framework
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs font-mono text-muted-foreground">
          Last Updated: 2026 &bull; Master Telephony &amp; Infrastructure Agreement
        </p>
      </div>

      <div className="space-y-8 py-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
        {/* CRITICAL CLAUSE: No Money Back Guarantee (Server) */}
        <div className="p-6 rounded-2xl border-2 border-foreground/20 bg-foreground/[0.03] space-y-3 text-foreground">
          <div className="flex items-center gap-2 text-foreground font-medium">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
            <h2 className="font-display text-xl tracking-tight">
              Server &amp; Infrastructure Provisioning: No Money-Back Guarantee
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            <strong>All server infrastructure purchases, dedicated dialer cluster deployments, and server setups come with strictly NO MONEY-BACK GUARANTEE.</strong> Due to upfront bare-metal compute reservation, dedicated IP routing blocks, Tier-1 carrier cross-connect fees, and physical cloud provisioning costs, all payments made for server setups and hosted dialer machines are completely <strong>non-refundable</strong> once provisioned.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">
            1. Master Services Scope
          </h2>
          <p>
            Voice Era Tech LLC delivers carrier-grade VoIP termination, direct CLI route interconnects, wholesale voice minutes, and predictive dialer platforms. By initiating a connection or purchasing telephony packages, the client agrees to be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">
            2. Acceptable Use, TCPA &amp; STIR/SHAKEN Compliance
          </h2>
          <p>
            Clients must comply with all applicable telecommunications laws, including but not limited to the Telephone Consumer Protection Act (TCPA), the Telemarketing Sales Rule (TSR), and FCC STIR/SHAKEN caller ID authentication standards. Voice Era Tech LLC strictly prohibits unlawful robocalling, unconsented spoofing, and harassment. Accounts found in violation will be terminated immediately with forfeiture of any unused balances.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">
            3. Network Operations Center (NOC) &amp; Support Availability
          </h2>
          <p>
            Our dedicated US-based engineering NOC operates on a <strong>24/5 schedule</strong> (Monday through Friday, 24 hours daily) to monitor carrier route health, manage automated failover, and resolve Tier-1 interconnect tickets.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">
            4. Direct Contacts
          </h2>
          <p>
            For billing, contract, or legal inquiries, please contact our teams directly:
          </p>
          <ul className="list-disc list-inside space-y-1 text-foreground font-mono text-sm">
            <li>Sales Desk: <a href="mailto:sales@voiceeratech.com" className="underline">sales@voiceeratech.com</a></li>
            <li>General &amp; Compliance Inquiries: <a href="mailto:info@voiceeratech.com" className="underline">info@voiceeratech.com</a></li>
          </ul>
        </section>
      </div>

      <div className="pt-8 border-t border-foreground/10 text-xs font-mono text-muted-foreground">
        &copy; 2026 Voice Era Tech LLC. All rights reserved.
      </div>
    </main>
  );
}
