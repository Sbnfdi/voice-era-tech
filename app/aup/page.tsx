import React from "react";
import AupContent from "./AupContent";

export const metadata = {
  title: "Acceptable Use Policy (AUP) | Voice Era Tech LLC",
  description:
    "Official Acceptable Use Policy (AUP) governing telecommunications routes, SIP trunking, dialers, STIR/SHAKEN compliance, TCPA regulations, and prohibited voice traffic practices for Voice Era Tech LLC.",
  keywords: [
    "Acceptable Use Policy",
    "AUP",
    "Voice Era Tech",
    "VoIP AUP",
    "TCPA Compliance",
    "STIR SHAKEN Policy",
    "Robocall Mitigation",
    "CLI Spoofing Rules",
    "Wholesale Carrier Rules"
  ],
  openGraph: {
    title: "Acceptable Use Policy (AUP) | Voice Era Tech LLC",
    description:
      "Acceptable Use Policy (AUP) describing acceptable and prohibited uses of wholesale telecommunications, SIP interconnects, and VoIP services provided by Voice Era Tech LLC.",
    url: "https://voiceeratech.com/aup",
    siteName: "Voice Era Tech LLC",
    type: "website"
  }
};

export default function AupPage() {
  return <AupContent />;
}
