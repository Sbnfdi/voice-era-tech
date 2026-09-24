import React from "react";
import TermsContent from "./TermsContent";

export const metadata = {
  title: "Terms and Conditions of Service | Voice Era Tech LLC",
  description:
    "Master Terms and Conditions, Acceptable Use Policy, VoIP service definitions, TCPA & STIR/SHAKEN regulatory compliance, and infrastructure provisioning policies for Voice Era Tech LLC.",
  keywords: [
    "Terms and Conditions",
    "Voice Era Tech",
    "VoIP Terms of Service",
    "SIP Trunk Agreement",
    "Telecommunications MSA",
    "Acceptable Use Policy",
    "TCPA Compliance"
  ],
  openGraph: {
    title: "Terms and Conditions of Service | Voice Era Tech LLC",
    description:
      "Comprehensive Master Services Agreement governing VoIP termination, SIP trunking, dialer platforms, telecom infrastructure, and regulatory compliance for Voice Era Tech LLC.",
    url: "https://voiceeratech.com/terms",
    siteName: "Voice Era Tech LLC",
    type: "website"
  }
};

export default function TermsPage() {
  return <TermsContent />;
}
