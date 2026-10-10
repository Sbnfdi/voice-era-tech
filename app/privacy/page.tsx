import React from "react";
import PrivacyContent from "./PrivacyContent";

export const metadata = {
  title: "Privacy Policy & Data Governance | Voice Era Tech LLC",
  description:
    "Official Privacy Policy, Call Detail Record (CDR) governance, STIR/SHAKEN Level-A attestation handling, KYC identity security, and data protection standards for Voice Era Tech LLC.",
  keywords: [
    "Privacy Policy",
    "Voice Era Tech",
    "VoIP Data Protection",
    "Telecommunications Privacy",
    "Call Detail Records CDR",
    "STIR SHAKEN Attestation",
    "KYC Data Security",
    "FCC Compliance"
  ],
  openGraph: {
    title: "Privacy Policy & Data Governance | Voice Era Tech LLC",
    description:
      "Official Privacy Policy and Data Governance standards governing VoIP termination routes, SIP interconnects, customer KYC verification, and common carrier privacy protections for Voice Era Tech LLC.",
    url: "https://voiceeratech.com/privacy",
    siteName: "Voice Era Tech LLC",
    type: "website"
  }
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
