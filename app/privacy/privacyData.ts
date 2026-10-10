// Voice Era Tech LLC - Official Privacy Policy Data
// Tailored for enterprise VoIP, wholesale carrier transit, STIR/SHAKEN compliance, and KYC identity verification.

export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export const PRIVACY_CATEGORIES = [
  "All",
  "Scope & Overview",
  "Information Collected",
  "How We Use Data",
  "Telephony & CDRs",
  "KYC & Compliance",
  "Data Sharing & Law",
  "Security & Retention",
  "Your Rights & Choices"
] as const;

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "section-1",
    number: "1.0",
    title: "Introduction, Scope & Corporate Identity",
    category: "Scope & Overview",
    summary: "Overview of Voice Era Tech LLC's commitment to enterprise confidentiality, customer data integrity, and telecom regulatory compliance.",
    paragraphs: [
      "Voice Era Tech LLC (“Voice Era Tech”, “we”, “our”, or “us”), a corporate entity established under the laws of the State of Delaware with registered headquarters at 1209 Orange Street, Wilmington, DE 19801, USA, is committed to safeguarding the privacy and confidentiality of our subscribers, carrier partners, enterprise clients, and website visitors (“you”, “your”, or “Customer”).",
      "This Privacy Policy applies to all services, websites, wholesale SIP interconnects, predictive dialer clusters, customer portals, API endpoints, and communication channels operated by Voice Era Tech LLC (collectively, the “Services”).",
      "By accessing our website, purchasing VoIP termination routes, executing a Master Services Agreement (MSA), or submitting customer onboarding / Know-Your-Customer (KYC) documentation, you acknowledge that you have read and understood the data collection, handling, and governance practices described in this policy."
    ]
  },
  {
    id: "section-2",
    number: "2.0",
    title: "Categories of Information We Collect",
    category: "Information Collected",
    summary: "Detailed breakdown of account data, corporate identity, technical specifications, and billing details gathered during onboarding and operations.",
    paragraphs: [
      "To provide carrier-grade telecommunications services, maintain network integrity, and comply with federal and international communications laws, we collect specific categories of personal, corporate, and operational data.",
      "We classify this data into the following distinct operational categories:"
    ],
    bulletPoints: [
      "Corporate & Account Contacts: Legal company name, doing-business-as (DBA) registrations, registered address, tax identification numbers (EIN/VAT), corporate website, authorized signatory names, business email addresses, and direct phone lines.",
      "Signatory & Officer Identity Verification (KYC): Government-issued identity document details (passport, national ID, driver's license numbers, expiration dates), issuing jurisdictions, and digital attestation timestamps collected strictly for identity confirmation and anti-fraud validation.",
      "Network & Operational Interconnect Data: Public signaling IP addresses, media IP ranges, SIP trunk credentials, session border controller (SBC) endpoints, preferred audio codecs (G.711u, G.729a), and concurrent channel capacity requirements.",
      "Financial & Billing Information: Bank wire transmission records, billing contact details, invoice histories, credit terms, and payment transaction logs. We do not store raw credit card numbers on public-facing web servers; payment processing conforms to PCI-DSS standards.",
      "Inquiries & Direct Communications: Inquiries transmitted through our online contact forms, expert consultation bookings, live chat / messaging interactions, and email correspondence with our 24/5 NOC and support desks."
    ]
  },
  {
    id: "section-3",
    number: "3.0",
    title: "Telephony Traffic, Call Detail Records (CDRs) & Audio Privacy",
    category: "Telephony & CDRs",
    summary: "Strict policies governing Call Detail Records, metadata handling, and the complete privacy of call audio during transmission.",
    paragraphs: [
      "As a Tier-1 VoIP carrier and wholesale transit provider, Voice Era Tech processes transmission signaling and generates Call Detail Records (CDRs) associated with voice packets traversing our network nodes.",
      "3.1 Nature of CDRs: Call Detail Records contain technical transmission metadata necessary for billing, routing optimization, and regulatory tracebacks. This metadata includes: originating calling party numbers (CLIs), dialed terminating phone numbers (DNIS), call initiation and termination timestamps, call duration, answer-seizure ratios (ASR), post-dial delay (PDD), and SIP termination status codes.",
      "3.2 Complete Audio Content Privacy: Voice Era Tech acts as a common carrier and telecommunications conduit. We DO NOT monitor, listen to, intercept, analyze, transcribe, or store customer voice audio conversations traversing our SIP trunks in the ordinary course of business.",
      "3.3 Customer-Managed Recording Features: If an enterprise client explicitly provisions hosted dialer platforms (such as VICIdial or custom predictive clusters) with call recording enabled for their own internal quality assurance or compliance, those recordings are stored strictly within the client’s dedicated, isolated instance and managed exclusively under the client’s administrative credentials."
    ]
  },
  {
    id: "section-4",
    number: "4.0",
    title: "How We Use Your Information",
    category: "How We Use Data",
    summary: "The specific business, operational, and regulatory purposes for which collected data is processed.",
    paragraphs: [
      "Voice Era Tech LLC utilizes collected data exclusively for legitimate commercial, operational, security, and statutory telecommunications obligations. We process information for the following specific purposes:"
    ],
    bulletPoints: [
      "Service Activation & Route Provisioning: Authenticating IP whitelists, establishing bilateral SIP interconnects, configuring rate sheets, and routing conversational voice calls across global Tier-1 partner networks.",
      "Billing & Account Reconciliation: Accurately calculating per-minute termination charges, generating itemized monthly statements, tracking pre-funded balances, and resolving billing inquiries.",
      "Network Engineering & Quality Assurance: Monitoring latency, jitter, packet loss, and PDD metrics; diagnosing SIP error codes; and maintaining 99.999% route availability through our 24/5 NOC.",
      "Anti-Fraud, Security & DDoS Prevention: Detecting unauthorized SIP flood attempts, spoofed signaling, abnormal short-duration call bursts, and malicious traffic patterns that threaten network stability.",
      "Customer Communication: Transmitting system maintenance advisories, route quality notifications, ticket updates, and direct replies to customer inquiries."
    ]
  },
  {
    id: "section-5",
    number: "5.0",
    title: "Regulatory Compliance: FCC, STIR/SHAKEN, TCPA & Tracebacks",
    category: "KYC & Compliance",
    summary: "Our lawful processing requirements under FCC Form 499, the Robocall Mitigation Database (RMD), and the Industry Traceback Group (ITG).",
    paragraphs: [
      "The telecommunications industry is subject to strict statutory oversight designed to combat illegal robocalls, caller ID spoofing, and unlawful telephone consumer solicitation.",
      "5.1 STIR/SHAKEN Cryptographic Verification: Under FCC regulations, Voice Era Tech participates in the STIR/SHAKEN governance framework. We verify subscriber identity and telephone number ownership to apply appropriate cryptographic attestation tokens (Level A, B, or C). Personal and corporate KYC information is utilized to authenticate the legal authority to broadcast specific Caller ID numbers.",
      "5.2 Robocall Mitigation Database (RMD) & FCC Form 499: We maintain active filings with the Federal Communications Commission (FCC). Wholesale carrier clients must provide verifiable FCC 499-A Filer IDs and RMD submission certifications. We verify these registrations against official regulatory registries to fulfill our common carrier obligations.",
      "5.3 Industry Traceback Group (ITG) Cooperation: In compliance with the TRACED Act and federal law, Voice Era Tech cooperates with the Industry Traceback Group (ITG) and law enforcement in investigating suspected fraudulent or illegal telephony traffic. When served with a valid traceback request regarding specific CDR timestamps, we provide the upstream and downstream IP routing hops required by federal standards."
    ]
  },
  {
    id: "section-6",
    number: "6.0",
    title: "Information Sharing, Disclosures & No-Sale Pledge",
    category: "Data Sharing & Law",
    summary: "Explicit terms regarding third-party service providers, legal subpoenas, and our absolute guarantee never to sell personal information.",
    paragraphs: [
      "6.1 Strictly No Sale or Rent of Data: Voice Era Tech LLC DOES NOT sell, rent, monetize, trade, or barter customer contact details, phone numbers, corporate dossiers, or subscriber lists to advertising agencies, data brokers, or marketing syndicates under any circumstances.",
      "6.2 Upstream Interconnect Carriers: To deliver international and domestic calls, technical signaling packets (including dialed numbers, CLI, and IP addresses) are transmitted across upstream Tier-1 carrier networks strictly to the extent required to establish call completion.",
      "6.3 Infrastructure & Cloud Service Providers: We partner with SOC2-compliant cloud providers (e.g., AWS, Turso/libSQL, bare-metal data centers in Equinix facilities) that provide physical hosting, encrypted database storage, and secure server colocation under strict data protection agreements.",
      "6.4 Lawful Judicial Process: We may disclose specific subscriber or CDR records if required to do so by a valid court order, federal subpoena, search warrant, or binding statutory directive issued by a regulatory authority with competent jurisdiction."
    ]
  },
  {
    id: "section-7",
    number: "7.0",
    title: "Data Security, Encryption & Physical Safeguards",
    category: "Security & Retention",
    summary: "Technical defense-in-depth measures protecting client files, database records, and SIP signaling against unauthorized access.",
    paragraphs: [
      "Voice Era Tech employs state-of-the-art administrative, technical, and physical security measures designed to protect information from loss, theft, unauthorized access, and malicious modification.",
      "Our security infrastructure incorporates the following safeguards:"
    ],
    bulletPoints: [
      "Transit Cryptography: All portal access, API communications, and web inquiries are encrypted in transit using Transport Layer Security (TLS 1.3).",
      "Storage Encryption: Cloud database records, KYC identity document archives, and customer audit trails are encrypted at rest utilizing AES-256 standards.",
      "Network Isolation: Carrier signaling and media engines operate behind enterprise Session Border Controllers (SBCs) and hardware firewalls with rigorous IP access-control lists (ACLs).",
      "Role-Based Access Control (RBAC): Administrative access to client records and KYC submissions is restricted exclusively to authorized compliance and NOC personnel with multi-factor authentication (MFA).",
      "Independent Audit Trails: Every administrative lookup, status change, and email transmission is logged with persistent, immutable audit records in our cloud database."
    ]
  },
  {
    id: "section-8",
    number: "8.0",
    title: "Data Retention & Storage Lifecycles",
    category: "Security & Retention",
    summary: "Retention schedules for CDRs, financial accounting records, KYC dossiers, and website inquiries.",
    paragraphs: [
      "We retain personal and corporate information only for as long as necessary to fulfill the operational purposes for which it was gathered, satisfy legal accounting requirements, and adhere to mandatory telecommunications recordkeeping statutes.",
      "8.1 Call Detail Records (CDRs): Stored for a rolling period of 12 to 24 months for billing verification, carrier dispute resolution, and regulatory audit compliance, after which they are systematically purged or anonymized.",
      "8.2 KYC & Corporate Files: Retained for the duration of the active contractual relationship plus 5 years following termination of service to comply with federal anti-money laundering (AML), tax, and FCC recordkeeping rules.",
      "8.3 General Website Inquiries: Non-contracted inquiries submitted via our contact section are retained in our database for up to 18 months for customer support continuity, after which they may be archived or deleted upon request."
    ]
  },
  {
    id: "section-9",
    number: "9.0",
    title: "Your Privacy Rights & Choices (GDPR, CCPA & Global Rights)",
    category: "Your Rights & Choices",
    summary: "Your statutory entitlements regarding access, correction, deletion, and export of your personal information.",
    paragraphs: [
      "Depending on your geographic jurisdiction (including the European Union under GDPR, the United Kingdom under UK-GDPR, and California under the CCPA/CPRA), you possess specific legal rights regarding the personal information we maintain.",
      "Subject to statutory telecommunications retention obligations, your rights include:"
    ],
    bulletPoints: [
      "Right to Access / Know: You have the right to request a formal copy of the personal and corporate data we maintain regarding your account.",
      "Right to Rectification: You may request the immediate correction of inaccurate, incomplete, or outdated signatory, billing, or network details.",
      "Right to Erasure ('Right to be Forgotten'): You may request the deletion of your personal data when it is no longer required for active service provision, provided statutory telecommunications retention rules do not mandate its preservation.",
      "Right to Data Portability: You may request your account history and certified application documents in a structured, machine-readable format (e.g., CSV, JSON, or certified PDF).",
      "Right to Restrict or Object: You may object to or request restrictions on the processing of specific personal data where processing is based on legitimate interest.",
      "Non-Discrimination: We will never deny services, charge different rates, or degrade route quality because you exercised any statutory privacy right."
    ]
  },
  {
    id: "section-10",
    number: "10.0",
    title: "Cookies, Web Analytics & Tracking Technologies",
    category: "Scope & Overview",
    summary: "Transparent information about our essential cookies and privacy-preserving performance telemetry.",
    paragraphs: [
      "Voice Era Tech LLC uses minimal, privacy-conscious technologies on our public website.",
      "10.1 Essential Cookies: We utilize strictly necessary session cookies required for administrative portal authentication, CSRF security verification, and form submission resilience. These cookies cannot be disabled without compromising platform functionality.",
      "10.2 Performance Analytics: We employ privacy-preserving web analytics (such as Vercel Analytics) to aggregate page load speeds, regional visitor counts, and viewport diagnostic metrics. We do not track individual users across unrelated third-party websites or deploy third-party advertising retargeting pixels."
    ]
  },
  {
    id: "section-11",
    number: "11.0",
    title: "Children's Privacy Notice",
    category: "Scope & Overview",
    summary: "Affirmation that Voice Era Tech provides B2B enterprise services and does not collect information from minors.",
    paragraphs: [
      "Voice Era Tech LLC provides business-to-business (B2B) enterprise telecommunications infrastructure, wholesale carrier termination, and commercial dialer software. Our Services are not directed to, marketed to, or intended for individuals under the age of 18.",
      "We do not knowingly collect, solicit, or maintain personal information from children or minors. If we become aware that personal information from an individual under 18 has been submitted, we will immediately delete that information from our servers."
    ]
  },
  {
    id: "section-12",
    number: "12.0",
    title: "Revisions, Amendments & Notices",
    category: "Scope & Overview",
    summary: "Procedures for updating this policy and publishing amendments.",
    paragraphs: [
      "Voice Era Tech LLC reserves the right to amend, update, or revise this Privacy Policy periodically to reflect changes in our telecommunications services, technical architecture, or statutory legal obligations.",
      "When revisions occur, the updated policy will be published on our website at voiceeratech.com/privacy with a revised 'Last Updated' date. In the event of material changes affecting how client information is handled, notice will be provided via email to primary account contacts or through prominent notices within our administrative portals."
    ]
  },
  {
    id: "section-13",
    number: "13.0",
    title: "Data Protection Officer & Official Legal Inquiries",
    category: "Scope & Overview",
    summary: "Direct physical and electronic contact channels for privacy notices, data subject requests, and compliance audits.",
    paragraphs: [
      "If you have questions, comments, or requests regarding this Privacy Policy, or if you wish to exercise your statutory data protection rights, please contact our designated compliance team using the credentials below:"
    ],
    bulletPoints: [
      "Entity Name: Voice Era Tech LLC",
      "Corporate Registered Office: 1209 Orange Street, Wilmington, DE 19801, United States of America",
      "Direct Telephone: +1 (512) 333-2777",
      "Privacy & Data Protection Inquiries: privacy@voiceeratech.com",
      "Carrier Compliance & KYC Desk: kyc@voiceeratech.com",
      "General Customer Support: support@voiceeratech.com"
    ]
  }
];
