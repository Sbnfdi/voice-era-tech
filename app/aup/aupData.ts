export interface AupSection {
  id: string;
  number: string;
  title: string;
  summary: string;
  paragraphs: string[];
  subsections?: {
    heading: string;
    items?: string[];
    paragraphs?: string[];
  }[];
  bulletPoints?: string[];
  callout?: {
    type: "warning" | "info" | "shield";
    title: string;
    text: string;
  };
}

export const AUP_METADATA = {
  company: "Voice Era Tech LLC",
  documentTitle: "Acceptable Use Policy (AUP)",
  lastUpdated: "January 2026",
  effectiveDate: "January 1, 2026",
  version: "2.0 (Carrier & Wholesale Telephony Compliance)",
  jurisdiction: "Austin, Texas, United States",
  contact: {
    entity: "Voice Era Tech LLC",
    address: "5900 BALCONES DR STE 47229, AUSTIN, TX 78731",
    country: "United States",
    website: "https://www.voiceeratech.com/",
    email: "support@voiceeratech.com",
    phone: "+1 (512) 333-2777",
  },
};

export const AUP_SECTIONS: AupSection[] = [
  {
    id: "section-1",
    number: "1",
    title: "Lawful Use and Regulatory Compliance",
    summary:
      "Voice Era Tech Services may only be used for lawful and legitimate telecommunications in accordance with federal, state, and international frameworks.",
    paragraphs: [
      "Voice Era Tech Services may only be used for lawful and legitimate communications.",
      "Customers are responsible for complying with all applicable federal, state, local, and international laws, regulations, telecommunications requirements, and carrier rules applicable to their use of the Services.",
      "Customers are solely responsible for determining and maintaining compliance with the laws and regulations applicable to their communications.",
    ],
    subsections: [
      {
        heading: "Applicable Regulatory Frameworks & Jurisdiction Requirements",
        items: [
          "FCC and FTC regulations;",
          "TCPA and applicable telemarketing requirements;",
          "Do-Not-Call (“DNC”) requirements;",
          "Caller ID and CLI requirements;",
          "STIR/SHAKEN requirements;",
          "Consent and opt-out requirements;",
          "Robocalling and automated calling;",
          "Privacy and call-recording requirements; and",
          "Applicable international telecommunications regulations.",
        ],
      },
    ],
    callout: {
      type: "shield",
      title: "Statutory Compliance Responsibility",
      text: "Customers bear sole and undivided responsibility for understanding and observing all statutory obligations governing originating, transit, and terminating voice and SMS traffic across their destination countries.",
    },
  },
  {
    id: "section-2",
    number: "2",
    title: "Prohibited Activities",
    summary:
      "Strict prohibitions against unlawful, fraudulent, deceptive, abusive, or network-disrupting voice traffic.",
    paragraphs: [
      "Customers may not use, or permit others to use, Voice Era Tech Services for unlawful, fraudulent, deceptive, abusive, or harmful activities.",
    ],
    subsections: [
      {
        heading: "Prohibited activities include, but are not limited to:",
        items: [
          "Illegal robocalls or automated calls;",
          "Calls made without legally required consent;",
          "Fraud, scams, phishing, vishing, or deceptive communications;",
          "Harassment, threats, or abusive communications;",
          "Impersonation of individuals, businesses, government agencies, financial institutions, or other organizations;",
          "Unlawful telemarketing or marketing communications;",
          "Spam or other prohibited unsolicited communications;",
          "Denial-of-service attacks, hacking, scanning, or network abuse;",
          "Traffic designed to manipulate or circumvent telecommunications controls; and",
          "Any activity that violates applicable law or regulatory requirements.",
        ],
      },
    ],
    callout: {
      type: "warning",
      title: "Zero Tolerance for Scams & Impersonation",
      text: "Voice Era Tech operates automated detection filters and immediate shutdown protocols for any traffic identified as IRS/tax scams, law enforcement impersonation, bank fraud, or deceptive caller manipulation.",
    },
  },
  {
    id: "section-3",
    number: "3",
    title: "Caller ID, CLI and Telephone Number Requirements",
    summary:
      "Mandatory usage of valid, allocated, and authorized Calling Line Identification (CLI) and telephone numbers.",
    paragraphs: [
      "Customers must use valid, accurate, and authorized Caller ID information and telephone numbers.",
      "Customers must maintain appropriate authorization or ownership documentation for DIDs, telephone numbers, and CLIs used with their account when required.",
      "Voice Era Tech may request reasonable documentation to verify ownership or authorization before provisioning or continuing to support particular telephone numbers or CLIs.",
    ],
    subsections: [
      {
        heading: "Customers must not:",
        items: [
          "Spoof or manipulate Caller ID for fraudulent or deceptive purposes;",
          "Use unallocated, invalid, or unauthorized telephone numbers;",
          "Misrepresent the identity or origin of a call;",
          "Use another party's telephone number without authorization;",
          "Use CLI information to evade regulatory, carrier, or fraud controls; or",
          "Attempt to circumvent number or routing restrictions.",
        ],
      },
    ],
    callout: {
      type: "info",
      title: "CLI Authorization Proof",
      text: "Voice Era Tech reserves the right to suspend any trunk route where the customer cannot furnish a Letter of Authorization (LOA) or bill copy demonstrating legal assignment of the originating caller ID.",
    },
  },
  {
    id: "section-4",
    number: "4",
    title: "Robocalling, Telemarketing, DNC and Consent",
    summary:
      "Strict obligations regarding automated dialers, suppression list scrubbing, calling hour compliance, and opt-outs.",
    paragraphs: [
      "Customers using automated, predictive, power, or other dialing technologies are responsible for ensuring that their calling practices comply with all applicable laws.",
      "Where consent is legally required, customers must obtain and maintain appropriate consent records.",
      "The availability of Voice Era Tech's technical services does not authorize unlawful telemarketing, robocalling, or automated communications.",
      "Voice Era Tech may request reasonable evidence of consent, DNC procedures, or other compliance information where necessary to investigate suspected violations.",
    ],
    subsections: [
      {
        heading: "Customers conducting telemarketing or similar campaigns must:",
        items: [
          "Maintain applicable Do-Not-Call and suppression lists;",
          "Honor opt-out requests;",
          "Maintain appropriate consent records;",
          "Observe applicable calling-time restrictions;",
          "Identify the calling party where required; and",
          "Maintain records necessary to demonstrate compliance.",
        ],
      },
    ],
  },
  {
    id: "section-5",
    number: "5",
    title: "STIR/SHAKEN, Traceback and Traffic Transparency",
    summary:
      "Mandatory participation in STIR/SHAKEN cryptographic authentication, industry traceback investigations, and upstream disclosures.",
    paragraphs: [
      "Customers must cooperate with applicable STIR/SHAKEN, caller authentication, traceback, and telecommunications compliance requirements.",
      "Where applicable, Voice Era Tech may require customers to provide sufficient information regarding the source, ownership, authorization, and intended use of their traffic.",
      "Customers must cooperate with legitimate traceback or regulatory investigations and provide requested information within a reasonable timeframe.",
      "Customers must not intentionally conceal, falsify, or misrepresent the origin, destination, identity, or nature of their traffic.",
      "Where required by applicable law, regulation, carrier requirements, or industry standards, Voice Era Tech may provide relevant customer or traffic information to authorized regulators, law-enforcement agencies, carriers, traceback organizations, or other authorized entities.",
    ],
    callout: {
      type: "shield",
      title: "ITG Traceback Cooperation SLA",
      text: "Customers must respond to all Industry Traceback Group (ITG) inquiries routed through Voice Era Tech within the mandated SLA timeframe (typically within 4 to 24 hours of notice).",
    },
  },
  {
    id: "section-6",
    number: "6",
    title: "Traffic Quality and Network Protection",
    summary:
      "Standards prohibiting artificial traffic generation, traffic pumping, short-duration flooding, and signaling abuse.",
    paragraphs: [
      "Customers must generate legitimate telecommunications traffic and must not intentionally create traffic that harms, disrupts, or unreasonably burdens Voice Era Tech's network or its carrier partners.",
      "Voice Era Tech may monitor traffic patterns and may block, reject, reroute, or restrict traffic that does not meet applicable legal, carrier, security, or reasonable network requirements.",
    ],
    subsections: [
      {
        heading: "Prohibited traffic practices include, but are not limited to:",
        items: [
          "Artificial or fraudulent traffic generation;",
          "Traffic pumping;",
          "Call looping;",
          "Excessive or abnormal signaling;",
          "Deliberate traffic manipulation;",
          "Fraudulent short-duration calling;",
          "Attempts to manipulate billing or traffic statistics;",
          "Circumvention of carrier or network controls;",
          "Traffic that creates unreasonable network congestion; and",
          "Other traffic patterns that present a material risk to network integrity or service providers.",
        ],
      },
    ],
  },
  {
    id: "section-7",
    number: "7",
    title: "Security and Technical Abuse",
    summary:
      "Protection of telecommunications infrastructure, SIP signaling interfaces, RTP audio channels, and API credentials.",
    paragraphs: [
      "Customers may not use Voice Era Tech Services or infrastructure to attack, compromise, disrupt, or gain unauthorized access to Voice Era Tech systems or third-party systems.",
      "Customers are responsible for protecting their account credentials, SIP credentials, passwords, API credentials, and other authentication information.",
      "Customers must promptly notify Voice Era Tech of suspected unauthorized access, credential compromise, account takeover, or fraudulent traffic associated with their account.",
    ],
    subsections: [
      {
        heading: "Prohibited technical activities include:",
        items: [
          "SIP scanning;",
          "Unauthorized SIP registration attempts;",
          "Brute-force attacks;",
          "Credential attacks;",
          "Port scanning;",
          "Denial-of-service or distributed denial-of-service attacks;",
          "Malicious signaling;",
          "Exploitation of network vulnerabilities;",
          "Unauthorized access attempts; and",
          "Any other activity intended to interfere with telecommunications infrastructure or network security.",
        ],
      },
    ],
    callout: {
      type: "warning",
      title: "Credential Custody",
      text: "Customers are financially and legally liable for all telephony traffic generated via their assigned SIP credentials, IP ACLs, and API tokens until Voice Era Tech NOC receives written notification of breach.",
    },
  },
  {
    id: "section-8",
    number: "8",
    title: "Customer Responsibility and Compliance Verification",
    summary:
      "Vicarious liability for downstream users, lead lists, dialing infrastructure, and audits.",
    paragraphs: [
      "Customers are responsible for all traffic and communications originating from their account, including traffic generated by their employees, agents, contractors, users, systems, applications, dialers, or other equipment associated with the account.",
      "Voice Era Tech may request reasonable information or documentation when necessary to verify compliance with this AUP, investigate suspected abuse, respond to complaints, or satisfy carrier, regulatory, or legal requirements.",
      "Customers must cooperate with reasonable compliance investigations.",
    ],
    subsections: [
      {
        heading: "Customers are strictly responsible for:",
        items: [
          "Their calling lists and databases;",
          "Lead sources;",
          "Consent records;",
          "DNC and suppression records;",
          "Caller ID information;",
          "Call scripts and communications;",
          "Call recording practices;",
          "Campaign configuration; and",
          "Compliance with applicable laws and regulations.",
        ],
      },
    ],
  },
  {
    id: "section-9",
    number: "9",
    title: "Enforcement, Suspension and Termination",
    summary:
      "Voice Era Tech's enforcement remedies, immediate suspension rights, and customer indemnification obligations.",
    paragraphs: [
      "Voice Era Tech reserves the right to investigate suspected violations of this AUP.",
      "Voice Era Tech may take immediate action where reasonably necessary to address suspected fraud, unlawful traffic, security threats, regulatory exposure, carrier requirements, or other activities that may cause material harm.",
      "Where appropriate and reasonably practicable, Voice Era Tech may provide notice and an opportunity to address a violation before taking further action.",
      "Customers may be responsible for losses, damages, penalties, fines, claims, costs, or expenses arising from their violation of this AUP to the extent provided under the applicable Terms & Conditions or service agreement.",
    ],
    subsections: [
      {
        heading: "Where appropriate, Voice Era Tech may:",
        items: [
          "Block or reject specific traffic;",
          "Restrict destinations or routes;",
          "Require additional verification or documentation;",
          "Temporarily suspend traffic;",
          "Suspend or restrict an account;",
          "Terminate Services; or",
          "Take other reasonable measures necessary to protect Voice Era Tech, its customers, carrier partners, or third parties.",
        ],
      },
    ],
  },
  {
    id: "section-10",
    number: "10",
    title: "Updates, Relationship to Terms & Conditions and Contact",
    summary:
      "Hierarchy of legal documents, policy revisions, and corporate contact details.",
    paragraphs: [
      "By using Voice Era Tech Services, you acknowledge and agree to comply with this Acceptable Use Policy (“AUP”) and the Voice Era Tech Terms & Conditions.",
      "This AUP should be read together with the Terms & Conditions and establishes the acceptable and prohibited uses of the Services. In the event of any inconsistency between this AUP and the Terms & Conditions, the Terms & Conditions will govern.",
      "Voice Era Tech reserves the right to modify or update this AUP from time to time to reflect changes in applicable laws, regulations, carrier requirements, industry standards, security requirements, or our Services.",
      "Any updates to this AUP may be published on the Voice Era Tech website. Customers are responsible for reviewing the current version of the AUP applicable to their use of the Services.",
    ],
  },
];
