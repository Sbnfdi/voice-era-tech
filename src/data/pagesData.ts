export interface PageFeature {
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface PageWorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface PageFaq {
  q: string;
  a: string;
}

export interface SubPageConfig {
  slug: string;
  category: string;
  categoryHref: string;
  title: string;
  highlightText: string;
  eyebrow: string;
  badge: string;
  description: string;
  heroTagline: string;
  metrics: { label: string; value: string; detail: string }[];
  features: PageFeature[];
  workflowTitle?: string;
  workflow: PageWorkflowStep[];
  technicalSpecs: { label: string; value: string }[];
  faqs: PageFaq[];
  relatedPages: { label: string; href: string }[];
}

export const subPagesData: Record<string, SubPageConfig> = {
  // ==========================================
  // 1. DIALER SYSTEMS (9 Sub-Pages)
  // ==========================================
  'dialer-systems/predictive': {
    slug: 'dialer-systems/predictive',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'Intelligent Telephony Engine',
    badge: 'Enterprise Predictive Dialer',
    title: 'AI-Optimized High-Velocity',
    highlightText: 'Predictive Dialing',
    heroTagline: 'Maximize agent connection time while maintaining strict compliance with automated pacing algorithms.',
    description: 'Our enterprise Predictive Dialer uses real-time statistical algorithms to predict agent availability and calculate the optimal call launch rate. By automatically filtering busy signals, voicemails, and disconnected numbers, your agents spend up to 300% more time having actual conversations with qualified prospects.',
    metrics: [
      { label: 'Talk Time Efficiency', value: '48 min/hr', detail: 'Up from industry average of 15 min' },
      { label: 'Dropped Call Rate', value: '< 1.5%', detail: 'Strict TCPA & regulatory compliance' },
      { label: 'Pacing Accuracy', value: '99.4%', detail: 'Machine-learning pacing adjustments' },
      { label: 'Max Concurrent Calls', value: '10,000+', detail: 'Per single cluster with auto-scaling' },
    ],
    features: [
      { icon: '🎯', title: 'Adaptive Pacing Engine', description: 'Continuously recalculates call placement intervals based on average handle time (AHT), agent state, and carrier connection latency.' },
      { icon: '🛡️', title: 'TCPA & Abandonment Rate Compliance', description: 'Enforces strict 3% abandonment rate ceilings with automatic pacing throttles and national DNC registry real-time scrubbing.' },
      { icon: '🎙️', title: 'Answering Machine Detection (AMD)', description: 'Sub-second AI-driven voice/machine classification prevents agents from wasting time on automated voicemail greetings.' },
      { icon: '🗂️', title: 'Dynamic CRM Screen-Pop', description: 'Instantly surfaces prospect history, prior notes, and omnichannel touchpoints the millisecond the call bridges to the agent.' },
      { icon: '📊', title: 'Real-Time Floor Supervisor HUD', description: 'Floor managers can monitor live call queues, listen in, whisper coaching tips, or barge into calls without audio latency.' },
      { icon: '⚡', title: 'Carrier Grade SIP Trunking', description: 'Multi-carrier redundancy with automated failover and dynamic least-cost routing to guarantee pristine audio quality.' },
    ],
    workflow: [
      { step: '01', title: 'Data Ingestion & Scrubbing', desc: 'Campaign leads are deduplicated, scrubbed against DNC lists, and prioritized based on predictive lead score.' },
      { step: '02', title: 'Algorithmic Call Dispatch', desc: 'The system initiates outbound calls ahead of expected agent availability based on live statistical pacing models.' },
      { step: '03', title: 'Sub-Second Audio Analysis', desc: 'AI AMD classifies connection (Human Answer vs. Voicemail vs. SIT tone) in less than 400 milliseconds.' },
      { step: '04', title: 'Instant Agent Bridging', desc: 'Connected live prospect is instantly patched to an available skilled agent with instantaneous CRM record pop.' },
    ],
    technicalSpecs: [
      { label: 'Protocols Supported', value: 'SIP (RFC 3261), WebRTC, RTP/SRTP' },
      { label: 'Codec Support', value: 'G.711u/a, G.729, Opus HD Audio' },
      { label: 'AMD Speed', value: '< 450ms detection window' },
      { label: 'CRM Connectors', value: 'Salesforce, HubSpot, Zoho, Custom REST APIs' },
    ],
    faqs: [
      { q: 'How does predictive dialing differ from power dialing?', a: 'Predictive dialing dials ahead of agent availability using statistical modeling to eliminate agent wait time. Power dialing dials only when an agent is actively available.' },
      { q: 'Is the predictive dialer TCPA compliant?', a: 'Yes. Our platform includes granular abandoned call rate throttles, real-time DNC list scrubbing, and time-zone rules to ensure full regulatory compliance.' },
    ],
    relatedPages: [
      { label: 'Power Dialer', href: '/dialer-systems/power' },
      { label: 'Progressive Dialer', href: '/dialer-systems/progressive' },
      { label: 'Multi-Tenant Dialer', href: '/dialer-systems/multi-tenant' },
    ],
  },

  'dialer-systems/power': {
    slug: 'dialer-systems/power',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'High-Velocity Sales Calling',
    badge: 'Power Dialer Platform',
    title: 'Agent-Controlled High-Velocity',
    highlightText: 'Power Dialing',
    heroTagline: 'Eliminate manual dialing fatigue while giving sales reps complete control over connection ratios.',
    description: 'Our Power Dialer automatically dials the next contact on the agent list the moment their previous call concludes. Agents are guaranteed 100% live human presence the second a customer answers, eliminating silent pauses and abandonment risk while doubling outbound output.',
    metrics: [
      { label: 'Daily Call Volume', value: '400+ calls/rep', detail: 'Versus 80-100 manual dials' },
      { label: 'Abandoned Call Rate', value: '0.0%', detail: 'Zero dropped connections guaranteed' },
      { label: 'Rep Ramp Time', value: '< 1 day', detail: 'Intuitive browser-based softphone' },
      { label: 'CRM Sync Speed', value: 'Real-Time', detail: 'Zero delay automatic dispositioning' },
    ],
    features: [
      { icon: '⚡', title: 'Configurable Dial Ratios', description: 'Dial 1:1, 2:1, or 3:1 lines per active rep depending on list quality and campaign objectives.' },
      { icon: '📋', title: 'Automated 1-Click Dispositions', description: 'Reps log outcomes, send pre-templated follow-up emails, and trigger SMS confirmations with a single click.' },
      { icon: '📼', title: 'Voicemail Drop Technology', description: 'Leave pre-recorded, studio-quality voicemails with one click while moving directly to the next dial.' },
      { icon: '🗺️', title: 'Local Presence Caller ID', description: 'Automatically matches the outbound caller ID area code to the recipient locality to boost answer rates by up to 40%.' },
      { icon: '📜', title: 'Dynamic Sales Scripting', description: 'Contextual branch-logic scripts guide reps through objections, compliance disclosures, and rebuttals.' },
      { icon: '🎧', title: 'Browser WebRTC Softphone', description: 'Crystal-clear audio directly in the browser with zero software downloads, hardware dependencies, or complex setup.' },
    ],
    workflow: [
      { step: '01', title: 'List Queue Assignment', desc: 'Reps open their assigned campaign list or integrated CRM view directly inside the web console.' },
      { step: '02', title: 'Automated Dial Initiation', desc: 'The dialer fires the configured number of lines sequentially or simultaneously for the active agent.' },
      { step: '03', title: 'Live Connection', desc: 'The rep is connected immediately with zero latency, zero silent lag, and full prospect intelligence.' },
      { step: '04', title: 'Instant Disposition & Repeat', desc: 'The rep logs call results and the dialer immediately triggers the next contact sequence.' },
    ],
    technicalSpecs: [
      { label: 'Softphone Protocol', value: 'WebRTC (Opus Codec), TLS/SRTP Encrypted' },
      { label: 'Local Presence', value: 'Full US/Canada/UK Area Code Pools' },
    ],
    faqs: [
      { q: 'What is the benefit of a power dialer?', a: 'It maximizes agent talk-time without the risk of abandoned calls, making it ideal for targeted account-based selling.' },
    ],
    relatedPages: [
      { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
      { label: 'Preview Dialer', href: '/dialer-systems/preview' },
    ],
  },

  'dialer-systems/progressive': {
    slug: 'dialer-systems/progressive',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'Guaranteed Compliance Dialing',
    badge: 'Progressive Telephony',
    title: 'Controlled Automated Outbound',
    highlightText: 'Progressive Dialing',
    heroTagline: 'Automatic pacing that strictly waits for agent availability to ensure zero dropped calls and flawless regulatory compliance.',
    description: 'Progressive dialing initiates outbound calls only when an agent is definitively available. Perfect for collections, financial services, healthcare, and high-value B2B outreach where dropped calls are strictly unacceptable under regulatory frameworks.',
    metrics: [
      { label: 'Abandoned Calls', value: '0.00%', detail: 'Strict zero-drop guarantee' },
      { label: 'Regulatory Risk', value: 'Zero', detail: 'Full TCPA, HIPAA, FCA compliance' },
      { label: 'Connection Quality', value: '100% HD', detail: 'Instant agent voice handoff' },
      { label: 'Agent Productivity', value: '+180%', detail: 'Compared to manual list dialing' },
    ],
    features: [
      { icon: '🛡️', title: 'Strict 1:1 Agent-To-Line Dialing', description: 'Zero call is ever placed without a dedicated agent standing by, eliminating risk of silent calls.' },
      { icon: '⚖️', title: 'Compliance Enforcement', description: 'Built-in calling hour restrictions, national DNC verification, and opt-out management.' },
      { icon: '📝', title: 'Full Interaction Recording', description: 'Dual-channel encrypted recordings with automatic pause/resume for PCI-DSS payment compliance.' },
      { icon: '🔄', title: 'Intelligent Lead Recycling', description: 'Automated retry logic for busy signals and unanswered calls based on custom cadence rules.' },
    ],
    workflow: [
      { step: '01', title: 'Agent Ready State', desc: 'System waits until agent status shifts to Available in the contact center queue.' },
      { step: '02', title: 'Single Call Placement', desc: 'Dialer initiates a single call to the highest-priority compliant lead in the active campaign.' },
      { step: '03', title: 'Immediate Human Bridging', desc: 'The moment the phone is answered, the agent is already in the channel with zero audio transition delay.' },
    ],
    technicalSpecs: [
      { label: 'Compliance Modes', value: 'TCPA, FDCPA, HIPAA, GDPR' },
      { label: 'Recording Storage', value: 'Encrypted S3 / Cloud Storage with 7-year retention' },
    ],
    faqs: [
      { q: 'Why choose progressive over predictive?', a: 'Progressive dialers eliminate all risk of abandoned calls, which is legally mandated in regulated debt collection.' },
    ],
    relatedPages: [
      { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
      { label: 'Preview Dialer', href: '/dialer-systems/preview' },
    ],
  },

  'dialer-systems/preview': {
    slug: 'dialer-systems/preview',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'High-Touch Account Outreach',
    badge: 'Preview Dialer Engine',
    title: 'Context-Rich Strategic',
    highlightText: 'Preview Dialing',
    heroTagline: 'Empower agents with complete customer history, account notes, and deal context before placing every call.',
    description: 'Designed for enterprise B2B sales, account management, and complex consultative outreach. The Preview Dialer serves full CRM profile intelligence to the agent, allowing them to review prior conversations, notes, and strategy before triggering the call.',
    metrics: [
      { label: 'Context Prep Time', value: 'Configurable', detail: '10s to unlimited preview' },
      { label: 'Conversion Lift', value: '+45%', detail: 'From personalized context delivery' },
      { label: 'Lead Intelligence', value: 'Full History', detail: 'Notes, emails, deals, tickets' },
      { label: 'Agent Satisfaction', value: '98%', detail: 'No cold unprepared calls' },
    ],
    features: [
      { icon: '👁️', title: 'Comprehensive Lead Preview', description: 'Displays contact details, company size, recent tickets, past deal history, and LinkedIn profile links.' },
      { icon: '⏱️', title: 'Configurable Preview Timers', description: 'Set mandatory countdown timers or allow agents to trigger dials when ready.' },
      { icon: '🔀', title: 'Skip & Reschedule Logic', description: 'Enable agents to skip contacts with logged rationale or reschedule for specific time slots.' },
      { icon: '📊', title: 'Agent Research Metrics', description: 'Track preview research duration versus talk time and outcome conversions across teams.' },
    ],
    workflow: [
      { step: '01', title: 'Lead Presentation', desc: 'System serves the prospect card with rich CRM data onto the agent screen.' },
      { step: '02', title: 'Strategy & Review', desc: 'Agent reviews account history, past objections, and custom playbook notes.' },
      { step: '03', title: '1-Click Launch', desc: 'Agent clicks Dial to launch the call with full contextual awareness.' },
    ],
    technicalSpecs: [
      { label: 'CRM Compatibility', value: 'Salesforce, HubSpot, Microsoft Dynamics, Zoho' },
      { label: 'Preview Modes', value: 'Timed Countdown, Agent-Triggered, Supervisor Restricted' },
    ],
    faqs: [
      { q: 'Who is the preview dialer designed for?', a: 'Enterprise sales teams and account managers who need deep context before speaking to high-value prospects.' },
    ],
    relatedPages: [
      { label: 'Power Dialer', href: '/dialer-systems/power' },
      { label: 'CRM Integration', href: '/call-center/crm' },
    ],
  },

  'dialer-systems/voip': {
    slug: 'dialer-systems/voip',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'Cloud Telephony Core',
    badge: 'VoIP Infrastructure',
    title: 'Enterprise High-Capacity',
    highlightText: 'VoIP Dialing',
    heroTagline: 'Carrier-grade Voice-over-IP telephony designed for ultra-low latency, pristine audio, and infinite scalability.',
    description: 'Our VoIP dialer architecture transforms your call center communications into a flexible, software-defined IP telephony system. Deploy global DIDs, multi-carrier redundancy, automated failover routing, and real-time audio quality monitoring across all teams.',
    metrics: [
      { label: 'Uptime SLA', value: '99.999%', detail: 'Five-nines high availability core' },
      { label: 'Audio Latency', value: '< 35ms', detail: 'Direct peering with Tier-1 carriers' },
      { label: 'Global DIDs', value: '100+ Countries', detail: 'Local, toll-free, and mobile numbers' },
      { label: 'Concurrent Channels', value: '50,000+', detail: 'Elastic auto-scaling architecture' },
    ],
    features: [
      { icon: '🌐', title: 'Multi-Carrier Redundancy', description: 'Automatic failover across multiple Tier-1 telecom carriers prevents dropped calls and outages.' },
      { icon: '📞', title: 'Global Number Management', description: 'Instantly provision, configure, and route local numbers, toll-free numbers, and vanity DIDs globally.' },
      { icon: '📶', title: 'Real-Time MOS Scoring', description: 'Mean Opinion Score (MOS) tracking monitors jitter, packet loss, and latency on every live stream.' },
      { icon: '🔒', title: 'SRTP/TLS End-to-End Encryption', description: 'All voice packets and signaling channels are encrypted to military-grade telecommunications standards.' },
    ],
    workflow: [
      { step: '01', title: 'IP Origination', desc: 'Outbound voice traffic originates from geo-distributed edge nodes closest to the agent.' },
      { step: '02', title: 'Dynamic Route Optimization', desc: 'Voice engine selects the optimal carrier route based on real-time price and latency metrics.' },
      { step: '03', title: 'Carrier Termination', desc: 'Call terminates onto the public switched telephone network (PSTN) with pristine audio clarity.' },
    ],
    technicalSpecs: [
      { label: 'SIP Protocols', value: 'SIP 2.0 (RFC 3261), TLS 1.3, SRTP' },
      { label: 'Audio Codecs', value: 'G.711u/a, G.729a/b, Opus, AMR-WB' },
    ],
    faqs: [
      { q: 'Can we bring our own telecom carrier (BYOC)?', a: 'Yes, we support Bring Your Own Carrier (BYOC) SIP trunking as well as managed turn-key carrier routes.' },
    ],
    relatedPages: [
      { label: 'SIP Dialer', href: '/dialer-systems/sip' },
      { label: 'Cloud Configuration', href: '/cloud-it/configuration' },
    ],
  },

  'dialer-systems/sip': {
    slug: 'dialer-systems/sip',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'Telecommunications Protocols',
    badge: 'SIP Trunking Architecture',
    title: 'High-Density Elastic',
    highlightText: 'SIP Dialers',
    heroTagline: 'Engineered for telecom engineers and high-volume enterprise call centers requiring direct SIP trunking control.',
    description: 'Our native SIP dialer system delivers enterprise session control, customizable header routing, codec negotiation, and direct IP PBX interoperability (Asterisk, FreeSWITCH, Kamailio, Cisco, Avaya).',
    metrics: [
      { label: 'CPS Throughput', value: '500+ CPS', detail: 'Calls Per Second burst capability' },
      { label: 'PBX Compatibility', value: '100%', detail: 'Asterisk, FreeSWITCH, Cisco, Avaya' },
      { label: 'SIP Jitter', value: '< 2ms', detail: 'Dedicated low-latency media relays' },
      { label: 'DDoS Protection', value: 'Layer 7', detail: 'Automated SIP flood mitigation' },
    ],
    features: [
      { icon: '📡', title: 'High CPS Elastic Trunking', description: 'Handle massive call per second (CPS) spikes during peak campaign bursts without carrier throttling.' },
      { icon: '🎛️', title: 'Custom SIP Header Manipulation', description: 'Inject custom SIP headers for seamless CRM and routing orchestration.' },
      { icon: '🛡️', title: 'SBC Security Gateway', description: 'Session Border Controller (SBC) architecture defends against toll fraud, SIP scanning, and UDP floods.' },
      { icon: '🔄', title: 'Disaster Recovery Failover', description: 'Configurable automated failover destinations route traffic to secondary IP endpoints during outages.' },
    ],
    workflow: [
      { step: '01', title: 'SIP Registration & Handshake', desc: 'Secure TLS handshake establishes authenticated SIP sessions between endpoints.' },
      { step: '02', title: 'Signaling & Media Split', desc: 'SIP signaling routes through SBC cluster while SRTP media streams travel via optimal edge nodes.' },
    ],
    technicalSpecs: [
      { label: 'RFC Standards', value: 'RFC 3261, RFC 3550, RFC 2833 (DTMF), RFC 4733' },
      { label: 'Media Relays', value: 'TURN/STUN/ICE worldwide cluster' },
    ],
    faqs: [
      { q: 'Can we connect our on-premise Asterisk or FreeSWITCH server?', a: 'Yes. Our SIP dialer supports direct IP authentication, registration-based trunks, and customized dial plans.' },
    ],
    relatedPages: [
      { label: 'VoIP Dialer', href: '/dialer-systems/voip' },
      { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
    ],
  },

  'dialer-systems/multi-tenant': {
    slug: 'dialer-systems/multi-tenant',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'BPO & Service Provider Infrastructure',
    badge: 'Multi-Tenant Platform',
    title: 'Scalable Isolated',
    highlightText: 'Multi-Tenant Dialers',
    heroTagline: 'Host hundreds of independent client organizations, campaigns, and billing tiers on a single unified platform.',
    description: 'Built specifically for BPOs, contact center service providers, and agencies. The Multi-Tenant Dialer platform provides complete data isolation, white-label branding, customized billing meters, and hierarchical administrative roles.',
    metrics: [
      { label: 'Tenant Isolation', value: '100% Secure', detail: 'Strict database and media separation' },
      { label: 'White-Label Ready', value: 'Custom Domains', detail: 'Branded portal, logos, and emails' },
      { label: 'Billing Automation', value: 'Per-Minute/Seat', detail: 'Automated invoice generation' },
      { label: 'Admin Hierarchy', value: '4-Tier RBAC', detail: 'Super Admin, Client Admin, Supervisor, Agent' },
    ],
    features: [
      { icon: '🏢', title: 'Complete Data & Media Isolation', description: 'Each tenant has segregated lead databases, recordings, reports, and campaign configurations.' },
      { icon: '🎨', title: 'Turn-Key White-Labeling', description: 'Apply custom domains, branding themes, logos, and tenant-specific email templates.' },
      { icon: '💳', title: 'Automated Usage Metering', description: 'Track telephony minutes, AI usage, and agent seats with real-time billing and Stripe integrations.' },
      { icon: '👥', title: 'Granular Role-Based Access', description: 'Define custom permissions across super-admins, agency managers, floor supervisors, and agents.' },
    ],
    workflow: [
      { step: '01', title: 'Tenant Provisioning', desc: 'Deploy a new client environment in seconds with custom domain, DIDs, and seat allocations.' },
      { step: '02', title: 'Delegated Administration', desc: 'Client administrators manage their own campaigns, agents, and lead lists independently.' },
    ],
    technicalSpecs: [
      { label: 'Multi-Tenancy Model', value: 'Logical & Schema Separation with Encrypted Media' },
      { label: 'Billing Integrations', value: 'Stripe, Chargebee, Custom Webhook Accounting' },
    ],
    faqs: [
      { q: 'Can each tenant have their own phone numbers and caller IDs?', a: 'Yes. DIDs, caller IDs, and telephony routes can be assigned individually per tenant.' },
    ],
    relatedPages: [
      { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
      { label: 'BPO Solutions', href: '/industries/bpo' },
    ],
  },

  'dialer-systems/custom': {
    slug: 'dialer-systems/custom',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'Bespoke Telephony Engineering',
    badge: 'Custom Dialer Engineering',
    title: 'Tailored Purpose-Built',
    highlightText: 'Custom Dialers',
    heroTagline: 'Custom dialer engines built from the ground up to match your proprietary workflows, telephony stacks, and business logic.',
    description: 'When off-the-shelf software falls short, Voice Era Tech engineers custom dialer solutions. From proprietary pacing logic and custom routing algorithms to bespoke telephony protocol bridges and embedded web softphones.',
    metrics: [
      { label: 'Architecture', value: '100% Bespoke', detail: 'Tailored to your exact specs' },
      { label: 'Source Ownership', value: 'Available', detail: 'IP transfer and licensing options' },
      { label: 'Deployment', value: 'Cloud or On-Prem', detail: 'AWS, GCP, Azure, Bare-Metal' },
      { label: 'Custom APIs', value: 'REST / GraphQL', detail: 'Bespoke event webhooks' },
    ],
    features: [
      { icon: '⚙️', title: 'Custom Pacing & Routing Algorithms', description: 'Implement proprietary math models for lead prioritization, agent matchmaking, and dial ratios.' },
      { icon: '🧩', title: 'Deep Legacy Integration', description: 'Bridge legacy mainframe databases, proprietary ERPs, and custom telecommunication hardware.' },
      { icon: '💻', title: 'Embedded WebRTC Softphone SDK', description: 'Embed a branded softphone directly inside your existing web applications or CRM interface.' },
      { icon: '🛡️', title: 'Dedicated Private Cloud Infrastructure', description: 'Run on dedicated, isolated single-tenant cloud servers with zero shared resources.' },
    ],
    workflow: [
      { step: '01', title: 'Requirements Architecture', desc: 'Our telephony engineers analyze your workflows, throughput targets, and legacy integrations.' },
      { step: '02', title: 'Bespoke System Build', desc: 'We build and test your custom dialer engine with continuous milestone demonstrations.' },
      { step: '03', title: 'Deployment & SLA Support', desc: 'Production deployment with 24/7 engineering monitoring and dedicated SLA guarantees.' },
    ],
    technicalSpecs: [
      { label: 'Core Engines', value: 'FreeSWITCH, Kamailio, Asterisk, Go/Rust Telephony' },
      { label: 'Database Stacks', value: 'PostgreSQL, Redis, ClickHouse for Call Analytics' },
    ],
    faqs: [
      { q: 'How long does a custom dialer build take?', a: 'Custom dialers typically deploy in 3 to 8 weeks depending on integration complexity and scope.' },
    ],
    relatedPages: [
      { label: 'Custom Software', href: '/development/custom' },
      { label: 'API Development', href: '/development/api' },
    ],
  },

  'dialer-systems/integrations': {
    slug: 'dialer-systems/integrations',
    category: 'Dialer Systems',
    categoryHref: '/dialer-systems',
    eyebrow: 'Connected Ecosystem',
    badge: 'API & Telephony Integrations',
    title: 'Seamless Telephony & CRM',
    highlightText: 'Integrations',
    heroTagline: 'Connect your dialer to any CRM, database, marketing automation tool, or business application with sub-second synchronization.',
    description: 'Bridge your Voice Era Tech dialer platform with your existing technology ecosystem. We provide pre-built native connectors for major CRMs, comprehensive REST/GraphQL APIs, real-time event webhooks, and custom middleware solutions.',
    metrics: [
      { label: 'Pre-Built Connectors', value: '50+ Platforms', detail: 'Salesforce, HubSpot, Zoho, etc.' },
      { label: 'Webhook Latency', value: '< 100ms', detail: 'Instant event publishing' },
      { label: 'API Availability', value: '99.99%', detail: 'Enterprise rate limits' },
      { label: 'Bidirectional Sync', value: 'Real-Time', detail: 'Zero data duplication' },
    ],
    features: [
      { icon: '🔗', title: 'Bi-Directional CRM Synchronization', description: 'Contacts, call recordings, notes, dispositions, and transcripts sync automatically in real time.' },
      { icon: '⚡', title: 'Webhooks & Event Streaming', description: 'Publish call events to your internal data pipelines.' },
      { icon: '🪟', title: 'Embedded CTI Screen-Pops', description: 'Embed dialer softphone controls and real-time prospect intelligence directly within third-party CRMs.' },
      { icon: '🛡️', title: 'OAuth2 & Token Authentication', description: 'Enterprise-grade security with granular API key scopes, IP whitelisting, and audit logs.' },
    ],
    workflow: [
      { step: '01', title: 'Connector Activation', desc: 'Authenticate your CRM with 1-click OAuth or configure your custom webhook destination.' },
      { step: '02', title: 'Field Mapping', desc: 'Map custom lead attributes, disposition values, and recording storage buckets.' },
      { step: '03', title: 'Live Data Pipeline', desc: 'Data flows bi-directionally on every call with sub-second synchronization.' },
    ],
    technicalSpecs: [
      { label: 'API Standards', value: 'OpenAPI 3.0 REST, GraphQL, WebSocket Streaming' },
      { label: 'Auth Protocols', value: 'OAuth 2.0, API Keys, JWT Tokens' },
    ],
    faqs: [
      { q: 'Can we build custom automations using webhooks?', a: 'Yes. Our webhooks trigger on all call lifecycle events and can be ingested by Zapier, Make, AWS Lambda, or your backend.' },
    ],
    relatedPages: [
      { label: 'CRM Development', href: '/development/crm' },
      { label: 'API Infrastructure', href: '/cloud-it/api' },
    ],
  },

  // ==========================================
  // 2. CALL CENTER (8 Sub-Pages)
  // ==========================================
  'call-center/inbound': {
    slug: 'call-center/inbound',
    category: 'Call Center',
    categoryHref: '/call-center',
    eyebrow: 'Inbound Customer Experience',
    badge: 'Inbound Call Center Platform',
    title: 'Intelligent High-Availability',
    highlightText: 'Inbound Call Centers',
    heroTagline: 'Deliver frictionless customer support with multi-level IVR, skills-based routing, and real-time queue management.',
    description: 'Transform customer interactions with our intelligent Inbound Call Center platform. Route calls to the right agent on the first ring, reduce queue abandonment with automated virtual hold, and give support reps complete contextual intelligence before they say hello.',
    metrics: [
      { label: 'First Call Resolution', value: '88%+', detail: 'Enhanced by skill-based matching' },
      { label: 'Average Speed to Answer', value: '< 15 sec', detail: 'With intelligent queue prioritization' },
      { label: 'Queue Abandonment', value: '< 2.1%', detail: 'Virtual queue callback support' },
      { label: 'CSAT Improvement', value: '+34%', detail: 'Across enterprise support desks' },
    ],
    features: [
      { icon: '🔀', title: 'Skills-Based Automatic Call Distribution (ACD)', description: 'Direct incoming callers to agents possessing the exact language, product expertise, and proficiency required.' },
      { icon: '📞', title: 'Interactive Multi-Tier IVR', description: 'Visual drag-and-drop IVR designer with conversational speech recognition and dynamic database lookups.' },
      { icon: '⏳', title: 'Virtual Queue & Queue Callback', description: 'Allow callers to retain their place in line and receive an automatic callback when an agent is available.' },
      { icon: '📱', title: 'Instant Screen-Pop & History', description: 'Display customer contact records, open support tickets, and past order details the moment the call arrives.' },
    ],
    workflow: [
      { step: '01', title: 'Call Ingestion & Identification', desc: 'Caller ANI is looked up in CRM to identify account tier and active service cases.' },
      { step: '02', title: 'IVR & Intent Classification', desc: 'Caller specifies intent via voice or DTMF keypad options.' },
      { step: '03', title: 'Skills-Based Routing', desc: 'Call is queued to the most qualified available support agent.' },
    ],
    technicalSpecs: [
      { label: 'IVR Capabilities', value: 'Speech Recognition (ASR), TTS in 40+ Languages' },
      { label: 'Queue Logic', value: 'Round Robin, Longest Idle, Skills-Weighted' },
    ],
    faqs: [
      { q: 'Can we build custom IVR menus?', a: 'Yes. Our visual IVR builder supports dynamic API integrations, business hours routing, and multi-language flows.' },
    ],
    relatedPages: [
      { label: 'Outbound Call Centers', href: '/call-center/outbound' },
      { label: 'Agent Management', href: '/call-center/agent-management' },
    ],
  },

  'call-center/outbound': {
    slug: 'call-center/outbound',
    category: 'Call Center',
    categoryHref: '/call-center',
    eyebrow: 'Outbound Sales & Campaigns',
    badge: 'Outbound Platform',
    title: 'High-Conversion Scalable',
    highlightText: 'Outbound Call Centers',
    heroTagline: 'Orchestrate high-yield outbound telemarketing, collections, and sales campaigns with unified dialer intelligence.',
    description: 'Empower your sales floor with high-volume outbound telephony, multi-campaign management, dynamic lead distribution, and automated follow-ups. Ensure peak agent efficiency across thousands of simultaneous calls.',
    metrics: [
      { label: 'Connect Rate Lift', value: '+35%', detail: 'Via local caller ID & smart retries' },
      { label: 'Lead Contact Speed', value: '< 60 sec', detail: 'Instant speed-to-lead dialing' },
      { label: 'Sales Talk Time', value: '45+ min/hr', detail: 'Automated list progression' },
      { label: 'Campaign ROI', value: '3.4x', detail: 'Average revenue improvement' },
    ],
    features: [
      { icon: '⚡', title: 'Speed-to-Lead Instant Dialing', description: 'Trigger an automated outbound call to sales reps the exact second a web form or lead submission is received.' },
      { icon: '🎯', title: 'Multi-Campaign Partitioning', description: 'Run dozens of distinct campaigns with custom dial modes, agent skills, and script templates simultaneously.' },
      { icon: '📊', title: 'Live Disposition Tracking', description: 'Capture granular conversion outcomes, payment confirmations, and automated CRM field updates.' },
    ],
    workflow: [
      { step: '01', title: 'Campaign Creation', desc: 'Upload lead lists, set dialing mode (Predictive, Power, Progressive), and assign agent teams.' },
      { step: '02', title: 'Automated Dialing', desc: 'Outbound engine executes campaign pacing rules and routes live connects to available reps.' },
    ],
    technicalSpecs: [
      { label: 'Dial Modes', value: 'Predictive, Power, Progressive, Preview' },
      { label: 'List Capacity', value: 'Millions of records per campaign' },
    ],
    faqs: [
      { q: 'How fast can new leads be dialed?', a: 'Within under 1 second from lead arrival via our inbound webhook integration.' },
    ],
    relatedPages: [
      { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
      { label: 'Campaign Management', href: '/call-center/campaigns' },
    ],
  },

  'call-center/blended': {
    slug: 'call-center/blended',
    category: 'Call Center',
    categoryHref: '/call-center',
    eyebrow: 'Unified Operations',
    badge: 'Blended Contact Center',
    title: 'Seamless Inbound & Outbound',
    highlightText: 'Blended Call Centers',
    heroTagline: 'Eliminate agent downtime by automatically alternating between inbound support and outbound sales queues.',
    description: 'Dynamic blending automatically switches agents between outbound dialing campaigns and incoming support queues based on real-time traffic spikes. Ensure high customer responsiveness while maintaining aggressive outbound campaign momentum.',
    metrics: [
      { label: 'Agent Utilization', value: '92%', detail: 'Zero wasted idle time' },
      { label: 'Queue Spike Defense', value: 'Instant', detail: 'Auto-diverts outbound agents to inbound' },
      { label: 'Cost Per Interaction', value: '-38%', detail: 'Unified headcount optimization' },
    ],
    features: [
      { icon: '🔄', title: 'Dynamic Queue Blending', description: 'Automatically reallocate outbound agents to handle inbound surges the moment queue wait times exceed thresholds.' },
      { icon: '🎛️', title: 'Unified Agent Workspace', description: 'Single interface handles both inbound support tickets and outbound sales calls with identical ease.' },
      { icon: '📈', title: 'Cross-Campaign Performance Analytics', description: 'Consolidated reporting on agent productivity across both inbound service SLAs and outbound revenue targets.' },
    ],
    workflow: [
      { step: '01', title: 'Normal Operation', desc: 'Agents place outbound sales calls while designated inbound queues are clear.' },
      { step: '02', title: 'Inbound Surge Detection', desc: 'Surge algorithm detects elevated queue depth and pauses outbound dialing for designated agents.' },
      { step: '03', title: 'Automatic Outbound Return', desc: 'Once inbound queue returns to SLA target, agents smoothly transition back to outbound campaigns.' },
    ],
    technicalSpecs: [
      { label: 'Switch Latency', value: '< 200ms queue transition' },
      { label: 'Blending Logic', value: 'Threshold-based, Time-of-day, Skill-weighted' },
    ],
    faqs: [
      { q: 'Does blending require special hardware?', a: 'No. Everything operates within the standard browser-based softphone.' },
    ],
    relatedPages: [
      { label: 'Inbound Call Centers', href: '/call-center/inbound' },
      { label: 'Outbound Call Centers', href: '/call-center/outbound' },
    ],
  },

  'call-center/contact-center': {
    slug: 'call-center/contact-center',
    category: 'Call Center',
    categoryHref: '/call-center',
    eyebrow: 'Omnichannel Customer Engagement',
    badge: 'Omnichannel Contact Center',
    title: 'Unified Voice, SMS & Digital',
    highlightText: 'Contact Centers',
    heroTagline: 'Consolidate voice, SMS, email, web chat, and messaging channels into a single unified agent cockpit.',
    description: 'Modern customers engage across multiple digital touchpoints. Our Omnichannel Contact Center merges phone calls, SMS text messaging, WhatsApp, web chat, and email into one persistent conversation timeline.',
    metrics: [
      { label: 'Supported Channels', value: '6+ Channels', detail: 'Voice, SMS, WhatsApp, Chat, Email' },
      { label: 'Conversation Context', value: '100% Unified', detail: 'Persistent omnichannel timeline' },
      { label: 'Agent Response Time', value: '-55%', detail: 'Unified inbox and quick replies' },
    ],
    features: [
      { icon: '💬', title: 'Unified Omnichannel Inbox', description: 'Manage voice calls, two-way SMS conversations, web chats, and social messages in a unified stream.' },
      { icon: '📜', title: 'Persistent Customer History', description: 'See the full chronological story across every channel when a customer calls or messages.' },
      { icon: '🤖', title: 'AI-Assisted Canned Responses', description: 'Suggest optimal answers, translations, and policy summaries to agents across all digital channels.' },
    ],
    workflow: [
      { step: '01', title: 'Customer Message Arrival', desc: 'Inbound message arrives via SMS, Web Chat, WhatsApp, or Voice.' },
      { step: '02', title: 'Omnichannel Profile Match', desc: 'System bridges conversation to existing CRM contact history.' },
      { step: '03', title: 'Agent Resolution', desc: 'Agent replies or escalates with complete cross-channel intelligence.' },
    ],
    technicalSpecs: [
      { label: 'Integrations', value: 'Twilio SMS, WhatsApp Business API, WebSockets' },
    ],
    faqs: [
      { q: 'Can agents switch from chat to voice on the same ticket?', a: 'Yes. Agents can initiate a voice call directly from an active web chat or SMS conversation.' },
    ],
    relatedPages: [
      { label: 'AI Customer Support', href: '/ai-solutions/customer-support' },
      { label: 'CRM Integration', href: '/call-center/crm' },
    ],
  },

  'call-center/agent-management': {
    slug: 'call-center/agent-management',
    category: 'Call Center',
    categoryHref: '/call-center',
    eyebrow: 'Workforce Performance & QA',
    badge: 'Agent Management Suite',
    title: 'Enterprise Floor & Agent',
    highlightText: 'Management',
    heroTagline: 'Monitor live calls, coach agents in real time, score conversations, and manage workforce schedules effortlessly.',
    description: 'Equip call center supervisors and managers with real-time floor monitoring tools, silent whisper coaching, call barging, automated AI quality assurance scoring, and shift management.',
    metrics: [
      { label: 'QA Coverage', value: '100% of Calls', detail: 'Automated AI scoring on all audio' },
      { label: 'Supervisor Efficiency', value: '4x Higher', detail: 'Live multi-channel dashboard HUD' },
      { label: 'Coaching Speed', value: 'Real-Time', detail: 'Live whisper & barge-in features' },
    ],
    features: [
      { icon: '🎧', title: 'Live Listen, Whisper & Barge', description: 'Supervisors can silently listen to live calls, whisper tips exclusively to the agent, or take over the conversation.' },
      { icon: '⭐', title: 'AI Quality Assurance (QA)', description: 'Automatically score 100% of recorded calls against compliance checklists, script adherence, and empathy metrics.' },
      { icon: '📊', title: 'Agent Performance Scorecards', description: 'Track AHT, wrap-up time, conversion rate, and customer feedback rankings per individual rep.' },
    ],
    workflow: [
      { step: '01', title: 'Live Floor View', desc: 'Supervisors observe active agent statuses (On Call, Available, Wrap-up, Break).' },
      { step: '02', title: 'Intervention Triggers', desc: 'System flags long handle times, high sentiment stress, or requests for supervisor assistance.' },
      { step: '03', title: 'Whisper Coaching', desc: 'Supervisor delivers real-time voice coaching without the customer hearing.' },
    ],
    technicalSpecs: [
      { label: 'Monitoring Modes', value: 'Silent Listen, Whisper, Barge-in, Intercept' },
      { label: 'Audio Quality', value: 'Dual-Channel HD Stream' },
    ],
    faqs: [
      { q: 'Can customers hear supervisor whisper coaching?', a: 'No. Whisper mode audio is routed exclusively into the agent headset channel.' },
    ],
    relatedPages: [
      { label: 'Call Analytics', href: '/call-center/analytics' },
      { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents' },
    ],
  },

  'call-center/campaigns': {
    slug: 'call-center/campaigns',
    category: 'Call Center',
    categoryHref: '/call-center',
    eyebrow: 'Campaign Orchestration Engine',
    badge: 'Campaign Management',
    title: 'Multi-Strategy High-Yield',
    highlightText: 'Campaign Management',
    heroTagline: 'Design, segment, schedule, and optimize complex outbound calling campaigns from a single control center.',
    description: 'Manage calling lists, dialer rules, recycle logic, agent assignments, and schedules with granular control. Test multiple pacing algorithms and caller ID strategies to maximize connection yield.',
    metrics: [
      { label: 'List Processing', value: '1M+ leads/hr', detail: 'Instant segmentation and deduplication' },
      { label: 'Recycle Intelligence', value: 'Multi-Cadence', detail: 'Smart time-zone and retry rules' },
      { label: 'A/B Testing', value: 'Real-Time', detail: 'Script, caller ID, and pacing splits' },
    ],
    features: [
      { icon: '📂', title: 'Dynamic Lead Segmentation', description: 'Segment leads by geography, time zone, lead score, engagement history, or custom CRM attributes.' },
      { icon: '🔄', title: 'Automated Lead Recycling', description: 'Schedule intelligent retry intervals for unanswered calls, busy signals, or voicemail drops.' },
      { icon: '⏰', title: 'Timezone Compliance Guard', description: 'Prevents calls from being placed outside permitted state or national regulatory calling hours.' },
    ],
    workflow: [
      { step: '01', title: 'Upload & Scrub', desc: 'Import CSV or sync CRM list with automatic DNC scrubbing.' },
      { step: '02', title: 'Rule Configuration', desc: 'Define dialer mode, pacing parameters, and retry rules.' },
      { step: '03', title: 'Launch & Track', desc: 'Execute campaign with live real-time conversion monitoring.' },
    ],
    technicalSpecs: [
      { label: 'List Formats', value: 'CSV, Excel, API Direct Stream, CRM Sync' },
    ],
    faqs: [
      { q: 'Can campaigns run automatically on schedule?', a: 'Yes. You can schedule campaigns to start and pause automatically based on agent shifts and time zones.' },
    ],
    relatedPages: [
      { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
      { label: 'Outbound Call Centers', href: '/call-center/outbound' },
    ],
  },

  'call-center/analytics': {
    slug: 'call-center/analytics',
    category: 'Call Center',
    categoryHref: '/call-center',
    eyebrow: 'Real-Time Operational Intelligence',
    badge: 'Call Analytics & BI',
    title: 'Enterprise Real-Time',
    highlightText: 'Call Analytics',
    heroTagline: 'Turn voice conversations and queue telemetry into actionable business intelligence and revenue growth.',
    description: 'Comprehensive analytics dashboards covering live call volume, answer rates, agent talk times, queue hold duration, conversion metrics, and acoustic sentiment trends across all teams.',
    metrics: [
      { label: 'Telemetry Latency', value: '< 1 second', detail: 'True real-time floor metrics' },
      { label: 'Report Customization', value: '100% Configurable', detail: 'Custom metric formulas & views' },
      { label: 'Export Formats', value: 'CSV, PDF, BI Sync', detail: 'Tableau, PowerBI, BigQuery' },
    ],
    features: [
      { icon: '📊', title: 'Live Executive Dashboards', description: 'High-level real-time visibility into total calls, active talk time, queue depth, and revenue generated.' },
      { icon: '🎙️', title: 'Speech & Sentiment Intelligence', description: 'Analyze customer emotional tone, keyword triggers, objection frequencies, and competitor mentions.' },
      { icon: '📈', title: 'Historical Cohort Analysis', description: 'Compare campaign performance over weeks, quarters, or agent training cohorts.' },
    ],
    workflow: [
      { step: '01', title: 'Event Capture', desc: 'Every call event, audio packet, and agent disposition is logged in real-time.' },
      { step: '02', title: 'ETL Processing', desc: 'Streaming analytics pipeline aggregates data into sub-second visual dashboards.' },
      { step: '03', title: 'Insight Distribution', desc: 'Automated executive email summaries and live wallboard feeds.' },
    ],
    technicalSpecs: [
      { label: 'Data Warehouse', value: 'ClickHouse / Snowflake direct export' },
    ],
    faqs: [
      { q: 'Can we connect analytics to PowerBI or Tableau?', a: 'Yes. We provide direct SQL access, webhooks, and REST APIs for enterprise BI tools.' },
    ],
    relatedPages: [
      { label: 'Agent Management', href: '/call-center/agent-management' },
      { label: 'Technology', href: '/technology' },
    ],
  },

  'call-center/crm': {
    slug: 'call-center/crm',
    category: 'Call Center',
    categoryHref: '/call-center',
    eyebrow: 'Customer Data Synchronization',
    badge: 'CRM Integration Suite',
    title: 'Two-Way Real-Time',
    highlightText: 'CRM Integrations',
    heroTagline: 'Embed dialer capabilities and complete call logging directly inside your Salesforce, HubSpot, or Zoho workspace.',
    description: 'Eliminate manual data entry. Every call, disposition, recording link, transcript, and sentiment tag synchronizes bidirectionally with your CRM in real time, keeping your customer records pristine.',
    metrics: [
      { label: 'Data Sync Latency', value: 'Instant', detail: 'Zero batch delays' },
      { label: 'Manual Entry Reduction', value: '100%', detail: 'Fully automated call logging' },
      { label: 'Supported CRMs', value: '50+ Platforms', detail: 'Salesforce, HubSpot, Zoho, custom' },
    ],
    features: [
      { icon: '🪟', title: 'Embedded CTI Softphone', description: 'Make and receive calls directly inside your CRM without switching tabs or windows.' },
      { icon: '📝', title: 'Automatic Activity Logging', description: 'Log call duration, recordings, notes, and dispositions directly onto customer contact timelines.' },
      { icon: '🔄', title: 'Bidirectional Field Sync', description: 'Update CRM lead statuses, deal stages, and custom fields automatically based on call dispositions.' },
    ],
    workflow: [
      { step: '01', title: 'Call Initiation', desc: 'Agent clicks to call directly from a CRM lead record.' },
      { step: '02', title: 'Conversation Bridging', desc: 'Call connects and automatically pulls recent ticket context into view.' },
      { step: '03', title: 'Instant Record Sync', desc: 'Post-call notes and audio recordings are appended to the contact record.' },
    ],
    technicalSpecs: [
      { label: 'Supported Protocols', value: 'REST, GraphQL, OpenCTI, WebSockets' },
    ],
    faqs: [
      { q: 'Do you support custom CRM schemas?', a: 'Yes. We support custom objects, custom fields, and custom webhook triggers.' },
    ],
    relatedPages: [
      { label: 'CRM Development', href: '/development/crm' },
      { label: 'Integrations', href: '/dialer-systems/integrations' },
    ],
  },

  // ==========================================
  // 3. AI SOLUTIONS (7 Sub-Pages)
  // ==========================================
  'ai-solutions/voice-agents': {
    slug: 'ai-solutions/voice-agents',
    category: 'AI Solutions',
    categoryHref: '/ai-solutions',
    eyebrow: 'Conversational Voice AI',
    badge: 'AI Voice Agents',
    title: 'Human-Like Intelligent',
    highlightText: 'AI Voice Agents',
    heroTagline: 'Deploy conversational AI voice agents capable of conducting natural, human-like voice conversations at scale.',
    description: 'Our AI Voice Agents combine state-of-the-art speech synthesis, real-time natural language understanding (NLU), and ultra-low latency voice pipelines to converse with customers naturally without robotic delays or awkward interruptions.',
    metrics: [
      { label: 'Voice Response Latency', value: '< 600ms', detail: 'True natural conversational pacing' },
      { label: 'Human Parity Rating', value: '4.8 / 5', detail: 'Natural inflection & pronunciation' },
      { label: 'Concurrent Capacity', value: '100,000+', detail: 'Instant elasticity with zero queue wait' },
      { label: 'Cost Savings', value: '70%+', detail: 'Versus traditional human tier-1 support' },
    ],
    features: [
      { icon: '🎙️', title: 'Ultra-Low Latency Speech Pipeline', description: 'End-to-end audio streaming delivers human-like conversational responsiveness in under 600 milliseconds.' },
      { icon: '🧠', title: 'Deep Context & Memory', description: 'Maintains complex context throughout long multi-turn conversations and queries external databases live.' },
      { icon: '🛑', title: 'Intelligent Interruption Handling', description: 'Gracefully halts speaking when a customer interjects or asks a clarifying question, just like a human.' },
      { icon: '🔄', title: 'Seamless Human Escalation', description: 'Transfers callers to human agents with full conversation transcripts and context when requested.' },
    ],
    workflow: [
      { step: '01', title: 'Acoustic Streaming', desc: 'Caller voice is streamed in real time to speech-to-text transcription models.' },
      { step: '02', title: 'Reasoning & Tool Use', desc: 'LLM reasons, queries CRM data, and formulates natural answers.' },
      { step: '03', title: 'Voice Synthesis', desc: 'Hyper-realistic neural voice model streams audio back to caller instantly.' },
    ],
    technicalSpecs: [
      { label: 'LLM Foundations', value: 'Custom Fine-Tuned LLaMA, Claude, GPT-4o' },
      { label: 'Audio Latency', value: '< 600ms glass-to-glass' },
    ],
    faqs: [
      { q: 'Can the AI voice agent integrate with our calendar or CRM?', a: 'Yes. Our agents can query CRM records, book appointments, check order status, and process payments live.' },
    ],
    relatedPages: [
      { label: 'AI Call Agents', href: '/ai-solutions/call-agents' },
      { label: 'AI Customer Support', href: '/ai-solutions/customer-support' },
    ],
  },

  'ai-solutions/call-agents': {
    slug: 'ai-solutions/call-agents',
    category: 'AI Solutions',
    categoryHref: '/ai-solutions',
    eyebrow: 'Automated Outbound Calling',
    badge: 'AI Outbound Agents',
    title: 'Autonomous High-Volume',
    highlightText: 'AI Call Agents',
    heroTagline: 'Scale outbound calling campaigns autonomously with intelligent voice agents that qualify leads and book appointments.',
    description: 'Execute high-scale outbound campaigns with AI agents that sound remarkably human, handle complex objections, answer questions accurately, and guide prospects toward confirmed appointments or qualified transfers.',
    metrics: [
      { label: 'Outbound Capacity', value: '500k dials/day', detail: 'Elastic cloud fleet' },
      { label: 'Appointment Set Rate', value: '18% - 28%', detail: 'Industry-leading conversion' },
      { label: 'Cost Per Appointment', value: '-65%', detail: 'Massive CAC reduction' },
    ],
    features: [
      { icon: '📞', title: 'Autonomous Outbound Outreach', description: 'Place thousands of simultaneous calls to new leads, event signups, or past customers without human dialing.' },
      { icon: '💬', title: 'Dynamic Objection Handling', description: 'Trained on your sales scripts to navigate objections, pricing inquiries, and feature comparisons.' },
      { icon: '📅', title: 'Live Calendar Booking', description: 'Check rep availability and place confirmed appointments directly onto sales team calendars.' },
    ],
    workflow: [
      { step: '01', title: 'Trigger Event', desc: 'Lead submits web form or campaign queue launches.' },
      { step: '02', title: 'AI Dial & Conversation', desc: 'AI agent engages prospect, verifies intent, and answers questions.' },
      { step: '03', title: 'Live Booking or Transfer', desc: 'AI schedules calendar slot or live-transfers to an executive.' },
    ],
    technicalSpecs: [
      { label: 'Calendar Integrations', value: 'Calendly, Google Calendar, Outlook, HubSpot' },
    ],
    faqs: [
      { q: 'Is outbound AI calling legal?', a: 'Yes, when compliant with consent requirements, TCPA rules, and proper caller ID disclosures.' },
    ],
    relatedPages: [
      { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents' },
      { label: 'Lead Qualification', href: '/ai-solutions/lead-qualification' },
    ],
  },

  'ai-solutions/customer-support': {
    slug: 'ai-solutions/customer-support',
    category: 'AI Solutions',
    categoryHref: '/ai-solutions',
    eyebrow: '24/7 Support Automation',
    badge: 'AI Support Tier-1',
    title: 'Always-On Autonomous',
    highlightText: 'AI Customer Support',
    heroTagline: 'Resolve up to 75% of routine support inquiries instantly across voice, chat, and email without human intervention.',
    description: 'Deliver instant, 24/7 customer service with AI agents trained on your help center articles, product manuals, and internal documentation. Resolve billing questions, order lookups, returns, and troubleshooting effortlessly.',
    metrics: [
      { label: 'Resolution Rate', value: '72%+', detail: 'Resolved without human agent involvement' },
      { label: 'Response Time', value: 'Immediate', detail: 'Zero queue hold times 24/7/365' },
      { label: 'CSAT Score', value: '4.7 / 5', detail: 'High customer satisfaction rating' },
    ],
    features: [
      { icon: '📚', title: 'RAG Knowledge Ingestion', description: 'Retrieval-Augmented Generation searches your help articles, PDFs, and API documentation to provide factual answers.' },
      { icon: '💳', title: 'Transactional Action Execution', description: 'AI agents can cancel subscriptions, initiate refunds, re-send invoices, and update account details.' },
      { icon: '🌍', title: 'Multilingual Support in 40+ Languages', description: 'Automatically detect caller language and respond fluently in their native tongue.' },
    ],
    workflow: [
      { step: '01', title: 'Customer Query', desc: 'Customer calls or chats with an inquiry.' },
      { step: '02', title: 'Knowledge Retrieval', desc: 'AI searches documentation and verifies customer identity.' },
      { step: '03', title: 'Resolution or Handoff', desc: 'AI executes resolution or passes full context to specialized staff.' },
    ],
    technicalSpecs: [
      { label: 'Vector Databases', value: 'Pinecone, Qdrant, Milvus for RAG search' },
    ],
    faqs: [
      { q: 'How do you prevent the AI from hallucinating incorrect info?', a: 'Our strict RAG architecture enforces strict grounding in your approved documentation and denies unverified queries.' },
    ],
    relatedPages: [
      { label: 'Inbound Call Centers', href: '/call-center/inbound' },
      { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents' },
    ],
  },

  'ai-solutions/lead-qualification': {
    slug: 'ai-solutions/lead-qualification',
    category: 'AI Solutions',
    categoryHref: '/ai-solutions',
    eyebrow: 'Pipeline Acceleration',
    badge: 'AI Qualification Engine',
    title: 'Intelligent Real-Time',
    highlightText: 'AI Lead Qualification',
    heroTagline: 'Qualify inbound and outbound prospects against strict BANT criteria before passing them to senior account executives.',
    description: 'Ensure your expensive sales executives only speak with verified decision-makers. AI qualification agents evaluate budget, authority, need, and timeline (BANT) dynamically in natural conversation.',
    metrics: [
      { label: 'Sales Rep Time Saved', value: '15+ hrs/wk', detail: 'Per rep on unqualified meetings' },
      { label: 'Pipeline Velocity', value: '+48%', detail: 'Instant qualification and routing' },
      { label: 'Qualification Accuracy', value: '96%', detail: 'Strict criteria adherence' },
    ],
    features: [
      { icon: '🎯', title: 'Dynamic BANT Framework Evaluation', description: 'Assesses Budget, Authority, Need, and Timeline naturally through fluid conversation.' },
      { icon: '📊', title: 'Automated Lead Scoring', description: 'Generates detailed prospect summaries and score cards appended directly into your CRM.' },
      { icon: '🚀', title: 'Warm Live Transfer', description: 'Immediately patches qualified prospects to available closers on the sales floor.' },
    ],
    workflow: [
      { step: '01', title: 'Lead Engagement', desc: 'AI connects with new inbound or campaign lead.' },
      { step: '02', title: 'Conversational Discovery', desc: 'AI asks qualification questions and gauges interest.' },
      { step: '03', title: 'Score & Route', desc: 'High-score leads are transferred live; others enter nurturing tracks.' },
    ],
    technicalSpecs: [
      { label: 'Scoring Models', value: 'Customizable weighted point matrices' },
    ],
    faqs: [
      { q: 'Can we define custom qualification questions?', a: 'Yes. You have full control over required criteria, disqualification triggers, and routing rules.' },
    ],
    relatedPages: [
      { label: 'AI Call Agents', href: '/ai-solutions/call-agents' },
      { label: 'CRM Integration', href: '/call-center/crm' },
    ],
  },

  'ai-solutions/appointments': {
    slug: 'ai-solutions/appointments',
    category: 'AI Solutions',
    categoryHref: '/ai-solutions',
    eyebrow: 'Calendar Automation',
    badge: 'AI Scheduling Agents',
    title: 'Autonomous Calendar &',
    highlightText: 'Appointment Booking',
    heroTagline: 'Fill sales calendars 24/7 with autonomous voice and digital appointment scheduling agents.',
    description: 'Eliminate scheduling email tag. Our AI Appointment Agents check calendar availability live, resolve time zone conflicts, confirm attendance, and send automated SMS/email reminders to eliminate no-shows.',
    metrics: [
      { label: 'Show-Up Rate Lift', value: '+35%', detail: 'With automated AI voice & SMS reminders' },
      { label: 'Booking Speed', value: '< 90 sec', detail: 'From call start to confirmed invite' },
      { label: 'Calendar Sync', value: 'Real-Time', detail: 'Google Calendar, Outlook, Calendly' },
    ],
    features: [
      { icon: '📅', title: 'Real-Time Calendar Coordination', description: 'Reads live busy/free slots across team calendars and books slots instantly.' },
      { icon: '📲', title: 'Automated Omnichannel Reminders', description: 'Sends automated SMS confirmations and pre-meeting reminder calls.' },
      { icon: '🔄', title: 'Self-Serve Rescheduling', description: 'Allows prospects to easily reschedule or cancel appointments by phone or text.' },
    ],
    workflow: [
      { step: '01', title: 'Slot Negotiation', desc: 'AI offers open slots matching the prospect time zone.' },
      { step: '02', title: 'Calendar Hold', desc: 'Event is created with video link and calendar invites dispatched.' },
      { step: '03', title: 'Pre-Meeting Confirmation', desc: 'AI sends confirmation SMS 24 hours and 1 hour prior.' },
    ],
    technicalSpecs: [
      { label: 'Protocols', value: 'CalDAV, Google Calendar API, Microsoft Graph API' },
    ],
    faqs: [
      { q: 'Does the system prevent double-booking?', a: 'Yes. Live API locks prevent any calendar conflicts in real time.' },
    ],
    relatedPages: [
      { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents' },
      { label: 'Real Estate Solutions', href: '/industries/real-estate' },
    ],
  },

  'ai-solutions/automation': {
    slug: 'ai-solutions/automation',
    category: 'AI Solutions',
    categoryHref: '/ai-solutions',
    eyebrow: 'End-to-End Workflow AI',
    badge: 'Call Center AI Automation',
    title: 'Intelligent Call Center',
    highlightText: 'Workflow Automation',
    heroTagline: 'Automate post-call wrap-up, transcription, summary generation, CRM updates, and follow-up emails.',
    description: 'Streamline repetitive administrative tasks. Automatically transcribe every call, generate structured bulleted summaries, update deal stages, dispatch confirmation emails, and trigger downstream webhooks.',
    metrics: [
      { label: 'After-Call Work (ACW)', value: '-80%', detail: 'From 3 mins to 30 seconds' },
      { label: 'Transcription Accuracy', value: '98.8%', detail: 'Industry specialized vocabulary' },
      { label: 'Summary Generation', value: 'Sub-second', detail: 'Instant CRM payload generation' },
    ],
    features: [
      { icon: '📝', title: 'Automated Post-Call Summarization', description: 'Generates concise bullet points of key takeaways, agreed action items, and customer sentiment.' },
      { icon: '🎙️', title: 'Dual-Channel Speech Transcription', description: 'Separate agent and customer audio streams transcribed with speaker diarization.' },
      { icon: '⚡', title: 'Automated Follow-Up Dispatch', description: 'Auto-drafts and sends follow-up emails and SMS recap notes to the customer.' },
    ],
    workflow: [
      { step: '01', title: 'Call Termination', desc: 'Audio recording stream closes.' },
      { step: '02', title: 'AI Extraction', desc: 'AI transcribes, extracts action items, and generates structured summary.' },
      { step: '03', title: 'System Dispatch', desc: 'CRM updated, summary emailed, and task assigned.' },
    ],
    technicalSpecs: [
      { label: 'Transcription Models', value: 'Whisper Large v3, Deepgram Nova-2' },
    ],
    faqs: [
      { q: 'Can custom fields be extracted from the conversation?', a: 'Yes. You can instruct the AI to extract specific data like budget, current vendor, or pain points.' },
    ],
    relatedPages: [
      { label: 'Call Analytics', href: '/call-center/analytics' },
      { label: 'Custom Software', href: '/development/custom' },
    ],
  },

  'ai-solutions/custom': {
    slug: 'ai-solutions/custom',
    category: 'AI Solutions',
    categoryHref: '/ai-solutions',
    eyebrow: 'Bespoke AI Engineering',
    badge: 'Custom AI Development',
    title: 'Enterprise Custom',
    highlightText: 'AI Architecture',
    heroTagline: 'Custom fine-tuned large language models, voice synthesis, and proprietary AI agents for unique business requirements.',
    description: 'When standard AI APIs cannot meet your accuracy, latency, or compliance requirements, Voice Era Tech builds custom AI pipelines with dedicated GPU hosting, private model fine-tuning, and proprietary data ingestion.',
    metrics: [
      { label: 'Model Ownership', value: '100% Private', detail: 'Zero data training on external servers' },
      { label: 'Dedicated Infrastructure', value: 'Private GPU Clusters', detail: 'A100 / H100 dedicated instances' },
      { label: 'Custom Token Speed', value: '150+ tokens/sec', detail: 'Optimized inference engines' },
    ],
    features: [
      { icon: '🧠', title: 'Private Model Fine-Tuning', description: 'Fine-tune open-weight models (LLaMA-3, Mistral) on your internal transcripts and domain terminology.' },
      { icon: '🔒', title: 'Air-Gapped & On-Prem Deployment', description: 'Deploy models within your private VPC or on-premise hardware for strict regulatory compliance.' },
      { icon: '🎙️', title: 'Custom Voice Cloning', description: 'Create proprietary brand voice clones with unique accents, tone, and personality.' },
    ],
    workflow: [
      { step: '01', title: 'Data Preparation', desc: 'Scrub and tokenize historical conversation logs.' },
      { step: '02', title: 'Fine-Tuning & Evaluation', desc: 'Train and validate model performance against benchmark datasets.' },
      { step: '03', title: 'Private Inference Deployment', desc: 'Deploy optimized inference cluster with autoscaling.' },
    ],
    technicalSpecs: [
      { label: 'Frameworks', value: 'PyTorch, vLLM, TensorRT-LLM, HuggingFace' },
    ],
    faqs: [
      { q: 'Is our customer data shared with OpenAI or third parties?', a: 'No. With custom AI architectures, your data remains strictly within your private, encrypted VPC.' },
    ],
    relatedPages: [
      { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents' },
      { label: 'Custom Software', href: '/development/custom' },
    ],
  },

  // ==========================================
  // 4. CLOUD & IT INFRASTRUCTURE (7 Sub-Pages)
  // ==========================================
  'cloud-it/configuration': {
    slug: 'cloud-it/configuration',
    category: 'Cloud & IT',
    categoryHref: '/cloud-it',
    eyebrow: 'Infrastructure Architecture',
    badge: 'Cloud Configuration',
    title: 'High-Availability Scalable',
    highlightText: 'Cloud Configuration',
    heroTagline: 'Architect and configure robust cloud environments optimized for real-time voice, high throughput, and zero downtime.',
    description: 'Design and deploy production-grade cloud environments across AWS, Google Cloud, Azure, and private cloud data centers. We configure virtual networks, load balancers, container orchestration, and auto-scaling groups tailored for telecom applications.',
    metrics: [
      { label: 'Uptime Architecture', value: '99.999%', detail: 'Multi-AZ active-active failover' },
      { label: 'Auto-Scale Speed', value: '< 60 sec', detail: 'Instant capacity scaling' },
      { label: 'Cloud Providers', value: 'AWS, GCP, Azure', detail: 'Multi-cloud & hybrid capability' },
    ],
    features: [
      { icon: '☁️', title: 'Multi-Region High Availability', description: 'Deploy redundant telephony clusters across multiple geographic availability zones.' },
      { icon: '⚖️', title: 'Elastic Load Balancing', description: 'Distribute voice traffic and web sessions evenly across auto-scaling backend worker pools.' },
      { icon: '🔒', title: 'Virtual Private Cloud (VPC) Isolation', description: 'Secure internal database clusters with strict subnet isolation and firewall rules.' },
    ],
    workflow: [
      { step: '01', title: 'Architecture Review', desc: 'Assess traffic projections, latency requirements, and compliance constraints.' },
      { step: '02', title: 'Infrastructure as Code (IaC)', desc: 'Write automated Terraform and Kubernetes manifests.' },
      { step: '03', title: 'Deployment & Testing', desc: 'Execute automated stress tests and verify multi-region failover.' },
    ],
    technicalSpecs: [
      { label: 'IaC Tools', value: 'Terraform, Pulumi, Ansible, CloudFormation' },
      { label: 'Orchestration', value: 'Kubernetes (EKS, GKE, AKS), Docker' },
    ],
    faqs: [
      { q: 'Can you optimize our existing AWS/GCP bill?', a: 'Yes. Our cloud audits typically uncover 25-40% cost reductions through right-sizing and reserved capacity.' },
    ],
    relatedPages: [
      { label: 'Cloud Migration', href: '/cloud-it/migration' },
      { label: 'Server Deployment', href: '/cloud-it/servers' },
    ],
  },

  'cloud-it/migration': {
    slug: 'cloud-it/migration',
    category: 'Cloud & IT',
    categoryHref: '/cloud-it',
    eyebrow: 'Modernization & Upgrades',
    badge: 'Telephony & Cloud Migration',
    title: 'Zero-Downtime Telephony',
    highlightText: 'Cloud Migration',
    heroTagline: 'Migrate legacy on-premise PBX systems, databases, and call center stacks to modern cloud infrastructure seamlessly.',
    description: 'Transition away from costly legacy hardware and on-premise PBX systems (Avaya, Cisco, Nortel). We handle complete data migration, SIP trunk cutovers, agent workstation transitions, and database transfers with zero operational downtime.',
    metrics: [
      { label: 'Cutover Downtime', value: '0 Minutes', detail: 'Dual-run phased transition' },
      { label: 'Data Integrity', value: '100%', detail: 'Full history, recording & lead transfer' },
      { label: 'TCO Reduction', value: '45% - 60%', detail: 'Eliminating hardware maintenance' },
    ],
    features: [
      { icon: '🚀', title: 'Phased Migration Strategy', description: 'Run legacy and cloud systems in parallel to guarantee zero interruption to live operations.' },
      { icon: '🗄️', title: 'Legacy Database Transformation', description: 'Migrate millions of historical call records, recordings, and lead lists to modern cloud databases.' },
      { icon: '📞', title: 'Carrier Porting & DID Cutover', description: 'Manage seamless telephone number porting and SIP trunk cutovers.' },
    ],
    workflow: [
      { step: '01', title: 'Discovery & Audit', desc: 'Map all existing call flows, PBX routes, and database schemas.' },
      { step: '02', title: 'Staging & Pilot', desc: 'Deploy cloud infrastructure and migrate a pilot agent group.' },
      { step: '03', title: 'Full Cutover', desc: 'Execute final carrier route switch with real-time verification.' },
    ],
    technicalSpecs: [
      { label: 'Supported Legacy PBX', value: 'Avaya, Cisco CallManager, Nortel, Mitel, Asterisk' },
    ],
    faqs: [
      { q: 'Will our phone numbers go down during migration?', a: 'No. We use dual-carrier routing and pre-tested cutovers so numbers remain active 100% of the time.' },
    ],
    relatedPages: [
      { label: 'Cloud Configuration', href: '/cloud-it/configuration' },
      { label: 'VoIP Dialer', href: '/dialer-systems/voip' },
    ],
  },

  'cloud-it/servers': {
    slug: 'cloud-it/servers',
    category: 'Cloud & IT',
    categoryHref: '/cloud-it',
    eyebrow: 'Dedicated Hardware & Compute',
    badge: 'Server Deployment & Management',
    title: 'High-Performance Bare-Metal',
    highlightText: 'Server Deployment',
    heroTagline: 'Deploy dedicated high-performance bare-metal servers and virtual machines optimized for heavy telecommunications loads.',
    description: 'For extreme throughput requirements where virtualized latency jitter is unacceptable, Voice Era Tech deploys dedicated bare-metal telephony servers with direct Tier-1 carrier cross-connects and NVMe storage arrays.',
    metrics: [
      { label: 'Network Throughput', value: '10 Gbps - 40 Gbps', detail: 'Dedicated low-latency uplinks' },
      { label: 'Audio Buffer Latency', value: '< 2ms', detail: 'Kernel-optimized real-time Linux' },
      { label: 'Hardware SLA', value: '4-Hour Replacement', detail: 'Enterprise hardware warranty' },
    ],
    features: [
      { icon: '🖥️', title: 'Custom Real-Time Linux Kernels', description: 'Operating systems compiled specifically for ultra-low jitter audio packet processing.' },
      { icon: '⚡', title: 'NVMe Storage Arrays', description: 'High-speed storage for instantaneous call recording writes and real-time database queries.' },
      { icon: '🛡️', title: 'Hardware IPMI / Out-of-Band Control', description: 'Full remote power, BIOS configuration, and out-of-band management access.' },
    ],
    workflow: [
      { step: '01', title: 'Hardware Provisioning', desc: 'Rack and cable enterprise server hardware with dual redundant power.' },
      { step: '02', title: 'OS & Stack Hardening', desc: 'Install enterprise Linux, configure firewall rules, and tune network buffers.' },
      { step: '03', title: 'Telephony Clustering', desc: 'Join node to active load-balanced dialer cluster.' },
    ],
    technicalSpecs: [
      { label: 'CPUs', value: 'AMD EPYC / Intel Xeon Scalable' },
      { label: 'OS Options', value: 'Ubuntu Server, Debian, Rocky Linux (Real-Time Kernel)' },
    ],
    faqs: [
      { q: 'Why choose bare-metal over cloud VMs for dialers?', a: 'Bare-metal eliminates hypervisor jitter and CPU contention, ensuring crystal-clear audio during high CPS bursts.' },
    ],
    relatedPages: [
      { label: 'SIP Dialer', href: '/dialer-systems/sip' },
      { label: 'DevOps', href: '/cloud-it/devops' },
    ],
  },

  'cloud-it/security': {
    slug: 'cloud-it/security',
    category: 'Cloud & IT',
    categoryHref: '/cloud-it',
    eyebrow: 'Cybersecurity & Compliance',
    badge: 'Enterprise Security Architecture',
    title: 'Military-Grade Telephony &',
    highlightText: 'Cloud Security',
    heroTagline: 'Protect sensitive customer recordings, CRM data, and telephony infrastructure with end-to-end encryption.',
    description: 'Security is paramount in modern telecommunications. We implement SOC-2 Type II, HIPAA, and PCI-DSS compliant security architectures with automated vulnerability scanning, TLS/SRTP encryption, and 24/7 SIEM monitoring.',
    metrics: [
      { label: 'Encryption Standards', value: 'AES-256 / TLS 1.3', detail: 'In-transit and at-rest' },
      { label: 'Compliance Standards', value: 'SOC-2, HIPAA, PCI-DSS', detail: 'Audit-ready frameworks' },
      { label: 'Threat Mitigation', value: 'Real-Time', detail: 'Layer 3/4/7 automated defense' },
    ],
    features: [
      { icon: '🔒', title: 'End-to-End Voice Encryption', description: 'All voice signaling (SIP over TLS) and media packets (SRTP) are encrypted.' },
      { icon: '🛡️', title: 'PCI-DSS Payment Pause', description: 'Automatically mute audio and stop recordings when credit card details are collected.' },
      { icon: '👁️', title: 'Immutable Audit Logging', description: 'Every user login, lead export, and supervisor listen event is logged to tamper-proof storage.' },
    ],
    workflow: [
      { step: '01', title: 'Threat Modeling', desc: 'Identify critical data assets, attack vectors, and regulatory requirements.' },
      { step: '02', title: 'Control Implementation', desc: 'Enforce MFA, RBAC, WAF rules, and encryption keys.' },
      { step: '03', title: 'Continuous Auditing', desc: 'Automated vulnerability scanning and penetration testing.' },
    ],
    technicalSpecs: [
      { label: 'Certifications', value: 'SOC-2 Type II Compliant, HIPAA BAA Ready, PCI-DSS Level 1' },
    ],
    faqs: [
      { q: 'Can we sign a HIPAA Business Associate Agreement (BAA)?', a: 'Yes. We offer fully compliant HIPAA configurations with signed BAAs.' },
    ],
    relatedPages: [
      { label: 'Compliance Overview', href: '/compliance' },
      { label: 'Cloud Configuration', href: '/cloud-it/configuration' },
    ],
  },

  'cloud-it/monitoring': {
    slug: 'cloud-it/monitoring',
    category: 'Cloud & IT',
    categoryHref: '/cloud-it',
    eyebrow: 'Observability & Telemetry',
    badge: '24/7 Monitoring & Alerting',
    title: 'Real-Time Telemetry &',
    highlightText: 'Infrastructure Monitoring',
    heroTagline: '24/7/365 infrastructure monitoring with predictive anomaly detection and instant incident alerting.',
    description: 'Gain full observability into your telephony stack and cloud infrastructure. We monitor server health, SIP signaling latency, carrier packet loss, audio MOS scores, and database performance with automated alerting.',
    metrics: [
      { label: 'Monitoring Interval', value: 'Sub-second', detail: 'Real-time telemetry streams' },
      { label: 'Incident Response', value: '< 15 mins', detail: '24/7 dedicated engineering NOC' },
      { label: 'Metrics Tracked', value: '500+ Datapoints', detail: 'Hardware, SIP, Codec, Network, App' },
    ],
    features: [
      { icon: '📶', title: 'Real-Time Voice Quality (MOS) Telemetry', description: 'Continuously track Mean Opinion Scores, jitter, and packet loss on active calls.' },
      { icon: '🚨', title: 'Intelligent Alert Escalation', description: 'Automated alerts route to on-call engineers via PagerDuty, Slack, SMS, and phone calls.' },
      { icon: '📊', title: 'Custom Grafana Dashboards', description: 'Visual wallboard dashboards customized for NOC engineers and executive leadership.' },
    ],
    workflow: [
      { step: '01', title: 'Telemetry Collection', desc: 'Agents collect CPU, RAM, SIP error rates, and carrier latencies.' },
      { step: '02', title: 'Anomaly Detection', desc: 'Machine learning algorithms detect degradation before customer impact.' },
      { step: '03', title: 'Automated Remediation', desc: 'System automatically isolates failing nodes and shifts traffic.' },
    ],
    technicalSpecs: [
      { label: 'Monitoring Stack', value: 'Prometheus, Grafana, OpenTelemetry, Datadog' },
    ],
    faqs: [
      { q: 'Do you offer a public status page?', a: 'Yes. We provide dedicated status pages with automated uptime tracking and incident notifications.' },
    ],
    relatedPages: [
      { label: 'DevOps', href: '/cloud-it/devops' },
      { label: 'Server Deployment', href: '/cloud-it/servers' },
    ],
  },

  'cloud-it/devops': {
    slug: 'cloud-it/devops',
    category: 'Cloud & IT',
    categoryHref: '/cloud-it',
    eyebrow: 'CI/CD & Release Engineering',
    badge: 'DevOps & Automation',
    title: 'Automated CI/CD &',
    highlightText: 'DevOps Infrastructure',
    heroTagline: 'Accelerate software release velocity with automated testing, container pipelines, and infrastructure-as-code.',
    description: 'Modernize your deployment workflows. We build robust CI/CD pipelines, containerize monolithic telecommunication applications into microservices, and automate environment provisioning with Terraform and Kubernetes.',
    metrics: [
      { label: 'Deployment Frequency', value: 'Multiple / Day', detail: 'Zero downtime rolling updates' },
      { label: 'Rollback Speed', value: '< 30 sec', detail: 'Instant automated recovery' },
      { label: 'Test Automation', value: '100% Automated', detail: 'Unit, integration, and load tests' },
    ],
    features: [
      { icon: '🚀', title: 'Zero-Downtime Rolling Deployments', description: 'Update backend telephony services and web apps without dropping a single active customer call.' },
      { icon: '📦', title: 'Containerization & Dockerization', description: 'Standardize environments across development, staging, and production with Docker.' },
      { icon: '🤖', title: 'Automated Load & Stress Testing', description: 'Simulate tens of thousands of concurrent SIP calls to validate capacity prior to launch.' },
    ],
    workflow: [
      { step: '01', title: 'Code Commit & Build', desc: 'Developer pushes code; CI pipeline triggers automated unit tests.' },
      { step: '02', title: 'Container Build & Scan', desc: 'Docker image is built, scanned for vulnerabilities, and published.' },
      { step: '03', title: 'Canary Deployment', desc: 'Kubernetes routes a small percentage of traffic to verify stability.' },
    ],
    technicalSpecs: [
      { label: 'CI/CD Platforms', value: 'GitHub Actions, GitLab CI, Jenkins, ArgoCD' },
    ],
    faqs: [
      { q: 'Can we deploy updates during business hours?', a: 'Yes. Our Kubernetes rolling update architecture ensures zero interruption to ongoing calls.' },
    ],
    relatedPages: [
      { label: 'API Infrastructure', href: '/cloud-it/api' },
      { label: 'Custom Software', href: '/development/custom' },
    ],
  },

  'cloud-it/api': {
    slug: 'cloud-it/api',
    category: 'Cloud & IT',
    categoryHref: '/cloud-it',
    eyebrow: 'API Gateways & Middleware',
    badge: 'API Infrastructure',
    title: 'High-Throughput Enterprise',
    highlightText: 'API Infrastructure',
    heroTagline: 'Scalable API gateway architecture, rate limiting, authentication, and event streaming for mission-critical apps.',
    description: 'Power your applications with enterprise API infrastructure. We engineer high-performance API gateways (Kong, Envoy, AWS API Gateway), manage OAuth2/JWT authentication, and implement WebSocket real-time message brokers.',
    metrics: [
      { label: 'API Throughput', value: '50,000+ RPS', detail: 'Requests Per Second' },
      { label: 'Gateway Latency', value: '< 5ms', detail: 'Sub-millisecond routing overhead' },
      { label: 'Uptime SLA', value: '99.99%', detail: 'Globally distributed edge proxies' },
    ],
    features: [
      { icon: '⚡', title: 'High-Throughput API Gateway', description: 'Intelligent request routing, caching, header transformation, and rate limiting.' },
      { icon: '🔒', title: 'Centralized OAuth2 / JWT Auth', description: 'Secure token validation, role-based scopes, and automated key rotation.' },
      { icon: '📡', title: 'WebSocket & SSE Event Brokers', description: 'Deliver real-time call events, audio waveforms, and agent status changes instantly.' },
    ],
    workflow: [
      { step: '01', title: 'Edge Request Ingestion', desc: 'Client application hits global API edge endpoint.' },
      { step: '02', title: 'Authentication & Rate Check', desc: 'Gateway verifies JWT token and enforces quota limits.' },
      { step: '03', title: 'Microservice Routing', desc: 'Request is forwarded to internal service with zero latency.' },
    ],
    technicalSpecs: [
      { label: 'Gateways', value: 'Kong, Envoy, Traefik, AWS API Gateway' },
      { label: 'Protocols', value: 'REST, GraphQL, gRPC, WebSockets' },
    ],
    faqs: [
      { q: 'Do you support gRPC for internal services?', a: 'Yes. We frequently use gRPC for high-speed inter-service communications in telephony architectures.' },
    ],
    relatedPages: [
      { label: 'API Development', href: '/development/api' },
      { label: 'Integrations', href: '/dialer-systems/integrations' },
    ],
  },

  // ==========================================
  // 5. SOFTWARE DEVELOPMENT (7 Sub-Pages)
  // ==========================================
  'development/websites': {
    slug: 'development/websites',
    category: 'Development',
    categoryHref: '/development',
    eyebrow: 'Premium Digital Experiences',
    badge: 'Enterprise Web Development',
    title: 'High-Conversion Custom',
    highlightText: 'Website Development',
    heroTagline: 'World-class corporate websites engineered for enterprise credibility, blistering speed, and conversion.',
    description: 'We design and build bespoke corporate web platforms using Next.js, modern animation libraries, and tailored CMS integrations. Every page is crafted with rich 3D interactions, perfect SEO semantics, and sub-second load times.',
    metrics: [
      { label: 'Lighthouse Score', value: '98 - 100', detail: 'Performance, SEO, Best Practices' },
      { label: 'Conversion Lift', value: '+40% Avg', detail: 'Optimized conversion user journeys' },
      { label: 'Responsive Fidelity', value: '100% Fluid', detail: 'Mobile, tablet, desktop, 4K displays' },
    ],
    features: [
      { icon: '🎨', title: 'Bespoke UI/UX Design System', description: 'Unique, high-end visual aesthetics crafted specifically for your brand identity — zero generic templates.' },
      { icon: '⚡', title: 'Next.js Server-Side Rendering (SSR)', description: 'Blistering page loads and optimal search engine crawlability with modern App Router architecture.' },
      { icon: '📱', title: 'Mobile-First Fluid Responsiveness', description: 'Flawless performance across every screen size with tailored touch interactions.' },
    ],
    workflow: [
      { step: '01', title: 'Strategy & Wireframing', desc: 'Define information architecture, user journeys, and technical scope.' },
      { step: '02', title: 'Design & Prototyping', desc: 'Create high-fidelity Figma prototypes with 3D elements and motion design.' },
      { step: '03', title: 'Production Engineering', desc: 'Build with Next.js, TypeScript, Tailwind CSS, and optimized assets.' },
    ],
    technicalSpecs: [
      { label: 'Stack', value: 'Next.js 14+, TypeScript, Tailwind CSS, Framer Motion' },
    ],
    faqs: [
      { q: 'Can we manage website content easily after launch?', a: 'Yes. We integrate headless CMS platforms (Sanity, Strapi, Contentful) for effortless content editing.' },
    ],
    relatedPages: [
      { label: 'Web Applications', href: '/development/web-apps' },
      { label: 'UI/UX Design', href: '/development/design' },
    ],
  },

  'development/web-apps': {
    slug: 'development/web-apps',
    category: 'Development',
    categoryHref: '/development',
    eyebrow: 'Complex Web Engineering',
    badge: 'Custom Web Applications',
    title: 'Enterprise Scalable',
    highlightText: 'Web Applications',
    heroTagline: 'Full-stack web application development with real-time data streaming, granular RBAC, and cloud resilience.',
    description: 'We engineer complex, data-heavy web platforms — from customer portals and internal management dashboards to real-time telemetry consoles and booking engines. Built with React, Next.js, Node.js, Python, and PostgreSQL.',
    metrics: [
      { label: 'Concurrent Users', value: '100,000+', detail: 'Auto-scaling architecture' },
      { label: 'Security Standard', value: 'SOC-2 / OWASP', detail: 'Thoroughly audited codebases' },
      { label: 'Real-Time Sync', value: '< 50ms', detail: 'WebSocket bi-directional pipelines' },
    ],
    features: [
      { icon: '💻', title: 'Modern React / Next.js Frontends', description: 'Fluid, responsive single-page and server-rendered web interfaces with instant state updates.' },
      { icon: '🔒', title: 'Role-Based Access Control (RBAC)', description: 'Granular user permission models, multi-factor authentication (MFA), and SSO integration.' },
      { icon: '📊', title: 'Interactive Data Visualizations', description: 'High-performance charts, live graphs, and canvas-rendered data telemetry.' },
    ],
    workflow: [
      { step: '01', title: 'Architecture Blueprint', desc: 'Design database schemas, API contracts, and security architecture.' },
      { step: '02', title: 'Agile Sprint Development', desc: 'Bi-weekly sprint demos with continuous staging environment testing.' },
      { step: '03', title: 'Production Launch & SLA', desc: 'Deploy on scalable Kubernetes infrastructure with 24/7 support.' },
    ],
    technicalSpecs: [
      { label: 'Frontend', value: 'React, Next.js, TypeScript, Zustand/Redux' },
      { label: 'Backend', value: 'Node.js / Express, Python / FastAPI, Go' },
    ],
    faqs: [
      { q: 'Do you provide maintenance and ongoing development?', a: 'Yes. We offer dedicated SLA maintenance packages and continuous feature engineering.' },
    ],
    relatedPages: [
      { label: 'SaaS Development', href: '/development/saas' },
      { label: 'API Development', href: '/development/api' },
    ],
  },

  'development/saas': {
    slug: 'development/saas',
    category: 'Development',
    categoryHref: '/development',
    eyebrow: 'Software as a Service',
    badge: 'SaaS Product Engineering',
    title: 'End-to-End Scalable',
    highlightText: 'SaaS Development',
    heroTagline: 'Build, launch, and scale commercial B2B/B2C SaaS platforms with multi-tenancy, subscription billing, and enterprise APIs.',
    description: 'Transform your software vision into a commercial SaaS product. Voice Era Tech delivers full-lifecycle SaaS engineering — from multi-tenant database partitioning and Stripe billing integrations to automated onboarding and analytics.',
    metrics: [
      { label: 'Time to MVP', value: '8 - 12 Weeks', detail: 'Accelerated development sprint cycle' },
      { label: 'Multi-Tenant Security', value: '100% Isolated', detail: 'Enterprise tenant protection' },
      { label: 'Billing Integration', value: 'Turn-Key', detail: 'Stripe, Chargebee, automated invoices' },
    ],
    features: [
      { icon: '🏢', title: 'Multi-Tenant Architecture', description: 'Secure data segregation models with tenant-specific custom domains and branding.' },
      { icon: '💳', title: 'Subscription & Metered Billing', description: 'Implement tiered pricing, usage-based metering, free trials, and automated dunning management.' },
      { icon: '📈', title: 'Product Analytics & Telemetry', description: 'Track monthly recurring revenue (MRR), user retention, feature engagement, and churn.' },
    ],
    workflow: [
      { step: '01', title: 'Product Scoping & UX', desc: 'Define monetization model, user onboarding flow, and core value features.' },
      { step: '02', title: 'Core MVP Engineering', desc: 'Build tenant management, billing, and core application workflows.' },
      { step: '03', title: 'Commercial Launch', desc: 'Deploy production environment with live payment gateway integration.' },
    ],
    technicalSpecs: [
      { label: 'Billing Engines', value: 'Stripe Billing, Chargebee, Paddle' },
      { label: 'Auth Providers', value: 'Clerk, Auth0, Supabase Auth, Firebase' },
    ],
    faqs: [
      { q: 'Can you help us build an MVP within a fixed budget?', a: 'Yes. We specialize in rapid MVP delivery with clear roadmaps and transparent milestones.' },
    ],
    relatedPages: [
      { label: 'Web Applications', href: '/development/web-apps' },
      { label: 'Multi-Tenant Dialer', href: '/dialer-systems/multi-tenant' },
    ],
  },

  'development/custom': {
    slug: 'development/custom',
    category: 'Development',
    categoryHref: '/development',
    eyebrow: 'Bespoke Software Engineering',
    badge: 'Custom Software Development',
    title: 'Mission-Critical Custom',
    highlightText: 'Software Solutions',
    heroTagline: 'Bespoke software systems engineered to solve unique operational bottlenecks that standard off-the-shelf tools cannot.',
    description: 'When commercial off-the-shelf software cannot support your business logic, Voice Era Tech engineers custom enterprise software. We build bespoke automation pipelines, legacy bridges, internal operational tools, and data processing engines.',
    metrics: [
      { label: 'Code Quality', value: 'Enterprise Grade', detail: 'Type-safe, tested, documented' },
      { label: 'Source Code Ownership', value: '100% Client IP', detail: 'Complete intellectual property handover' },
      { label: 'Integration Capability', value: 'Unlimited', detail: 'Any database, API, or hardware' },
    ],
    features: [
      { icon: '⚙️', title: 'Tailored Business Logic', description: 'Software designed specifically around your exact operational workflows and compliance requirements.' },
      { icon: '🧩', title: 'Legacy Modernization', description: 'Bridge legacy mainframe databases and proprietary internal software with modern cloud systems.' },
      { icon: '📊', title: 'High-Volume Data Pipelines', description: 'Process, transform, and analyze millions of transaction records with automated ETL jobs.' },
    ],
    workflow: [
      { step: '01', title: 'Technical Discovery', desc: 'Analyze requirements, data formats, and workflow dependencies.' },
      { step: '02', title: 'Architecture & Build', desc: 'Develop modular, well-documented code with comprehensive test suites.' },
      { step: '03', title: 'Handover & Training', desc: 'Deliver complete source code, documentation, and staff training.' },
    ],
    technicalSpecs: [
      { label: 'Languages', value: 'TypeScript, Python, Go, Rust, C#, Java' },
    ],
    faqs: [
      { q: 'Do we own the full source code and intellectual property?', a: 'Yes. 100% of all code, assets, and documentation belong completely to your company upon project completion.' },
    ],
    relatedPages: [
      { label: 'Custom Dialer', href: '/dialer-systems/custom' },
      { label: 'API Development', href: '/development/api' },
    ],
  },

  'development/crm': {
    slug: 'development/crm',
    category: 'Development',
    categoryHref: '/development',
    eyebrow: 'Custom CRM Platforms',
    badge: 'CRM Development & Customization',
    title: 'Tailored High-Performance',
    highlightText: 'CRM Systems',
    heroTagline: 'Custom CRM platforms and deep third-party CRM customizations engineered around your exact sales and service workflows.',
    description: 'Standard CRMs are often bloated and generic. We build custom, ultra-fast CRM systems tailored specifically for high-velocity call centers, sales teams, and customer service departments — featuring automated lead routing, screen-pops, and custom reporting.',
    metrics: [
      { label: 'Lead Lookup Speed', value: '< 50ms', detail: 'Instant database indexing' },
      { label: 'Custom Fields & Entities', value: 'Unlimited', detail: 'Tailored relational schemas' },
      { label: 'User Adoption Rate', value: '95%+', detail: 'Intuitive, distraction-free UI' },
    ],
    features: [
      { icon: '🗂️', title: 'Custom Data Models & Relationships', description: 'Model accounts, leads, deals, tickets, and telephony calls exactly how your business operates.' },
      { icon: '📞', title: 'Native CTI Telephony Integration', description: 'Built-in click-to-dial, softphone dialer, call recording playback, and live transfer buttons.' },
      { icon: '⚡', title: 'Automated Pipeline Automations', description: 'Trigger automatic follow-up emails, task creation, and stage progressions based on call outcomes.' },
    ],
    workflow: [
      { step: '01', title: 'Workflow Mapping', desc: 'Document sales stages, required data fields, and automation rules.' },
      { step: '02', title: 'Database & UI Engineering', desc: 'Build custom relational schema and rapid search interface.' },
      { step: '03', title: 'Telephony & Tool Hookup', desc: 'Connect dialer, email servers, and SMS gateways.' },
    ],
    technicalSpecs: [
      { label: 'Databases', value: 'PostgreSQL, Redis, Elasticsearch for instant search' },
    ],
    faqs: [
      { q: 'Can you migrate our existing Salesforce/HubSpot data into a custom CRM?', a: 'Yes. We perform complete data extraction, cleansing, mapping, and historical migration.' },
    ],
    relatedPages: [
      { label: 'CRM Integration', href: '/call-center/crm' },
      { label: 'Web Applications', href: '/development/web-apps' },
    ],
  },

  'development/api': {
    slug: 'development/api',
    category: 'Development',
    categoryHref: '/development',
    eyebrow: 'API Engineering & Webhooks',
    badge: 'API Development',
    title: 'High-Performance Scalable',
    highlightText: 'API Engineering',
    heroTagline: 'Design and build clean, secure, and documented RESTful and GraphQL APIs to connect your services and data.',
    description: 'We develop robust, scalable APIs engineered for high-throughput data exchange. From public developer platforms with interactive OpenAPI documentation to internal gRPC microservice APIs connecting distributed telephony components.',
    metrics: [
      { label: 'Response Latency', value: '< 25ms', detail: 'Optimized database queries & caching' },
      { label: 'Documentation', value: '100% OpenAPI 3.0', detail: 'Interactive Swagger & Postman collections' },
      { label: 'Rate Limiting', value: 'Dynamic / Tiered', detail: 'Token-bucket rate protection' },
    ],
    features: [
      { icon: '🔗', title: 'RESTful & GraphQL Architectures', description: 'Clean, standard endpoint design with comprehensive query filtering, sorting, and pagination.' },
      { icon: '📖', title: 'Interactive Developer Documentation', description: 'Auto-generated OpenAPI/Swagger documentation with code snippet examples in Python, JS, and cURL.' },
      { icon: '⚡', title: 'Real-Time Webhook Notification Engine', description: 'Deliver event payloads reliably with automated retry policies and signature verification.' },
    ],
    workflow: [
      { step: '01', title: 'API Contract Specification', desc: 'Define OpenAPI schemas, data models, and error responses.' },
      { step: '02', title: 'Endpoint Engineering', desc: 'Implement business logic, authentication, and database caching.' },
      { step: '03', title: 'Automated Testing', desc: 'Run comprehensive integration and load tests before deployment.' },
    ],
    technicalSpecs: [
      { label: 'Frameworks', value: 'FastAPI, Node.js/NestJS, Go Fiber, GraphQL' },
    ],
    faqs: [
      { q: 'Do you provide SDKs for our APIs?', a: 'Yes. We can generate and publish official SDKs for TypeScript/JavaScript, Python, and PHP.' },
    ],
    relatedPages: [
      { label: 'API Infrastructure', href: '/cloud-it/api' },
      { label: 'Integrations', href: '/dialer-systems/integrations' },
    ],
  },

  'development/design': {
    slug: 'development/design',
    category: 'Development',
    categoryHref: '/development',
    eyebrow: 'UI/UX & Product Design',
    badge: 'Digital Product Design',
    title: 'World-Class Enterprise',
    highlightText: 'UI/UX Design',
    heroTagline: 'Craft intuitive, visually stunning digital interfaces and design systems that users love and trust.',
    description: 'Great technology requires great design. Our product designers create modern, accessible, and high-conversion user interfaces for enterprise SaaS platforms, call center softphones, mobile apps, and corporate websites.',
    metrics: [
      { label: 'Design System', value: 'Figma Tokenized', detail: 'Components, typography, dark mode' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA', detail: 'High contrast & keyboard navigable' },
      { label: 'User Testing', value: 'Validated UX', detail: 'Prototyped user journey testing' },
    ],
    features: [
      { icon: '🎨', title: 'Complete Design System Creation', description: 'Component libraries with full tokenization for colors, typography, spacing, and micro-interactions.' },
      { icon: '📱', title: 'Interactive Clickable Prototypes', description: 'High-fidelity Figma prototypes allowing stakeholders to experience the interface before coding.' },
      { icon: '📊', title: 'Complex Dashboard & Data UX', description: 'Transform dense telecommunication metrics and tables into clear, scannable visual dashboards.' },
    ],
    workflow: [
      { step: '01', title: 'User Research & Discovery', desc: 'Analyze user goals, competitor benchmarks, and product requirements.' },
      { step: '02', title: 'Wireframing & Flow Design', desc: 'Map UX flows and layout wireframes for core user journeys.' },
      { step: '03', title: 'Visual Polish & Design System', desc: 'Deliver production-ready Figma design systems with developer handoff.' },
    ],
    technicalSpecs: [
      { label: 'Design Tools', value: 'Figma, Adobe Creative Cloud, Spline 3D' },
    ],
    faqs: [
      { q: 'Will the design match our existing brand guidelines?', a: 'Yes. We can strictly adhere to existing brand books or help evolve your brand into a modern tech aesthetic.' },
    ],
    relatedPages: [
      { label: 'Website Development', href: '/development/websites' },
      { label: 'Web Applications', href: '/development/web-apps' },
    ],
  },

  // ==========================================
  // 6. LEGAL & COMPANY SUB-PAGES (5 Pages)
  // ==========================================
  'privacy': {
    slug: 'privacy',
    category: 'Legal & Privacy',
    categoryHref: '/privacy',
    eyebrow: 'Data Protection & Trust',
    badge: 'Privacy Policy',
    title: 'Voice Era Tech LLC',
    highlightText: 'Privacy Policy',
    heroTagline: 'Our commitment to protecting the privacy, security, and integrity of your corporate and customer data.',
    description: 'This Privacy Policy outlines how Voice Era Tech LLC collects, processes, stores, and protects personal data and telecommunications records when you interact with our websites, dialer platforms, and enterprise technology services.',
    metrics: [
      { label: 'Data Encryption', value: 'AES-256 / TLS 1.3', detail: 'At-rest and in-transit' },
      { label: 'Data Sovereignty', value: 'Regional Options', detail: 'US, EU, UK data residency' },
      { label: 'Data Monetization', value: 'Zero', detail: 'We never sell customer or call data' },
    ],
    features: [
      { icon: '🛡️', title: 'Strict Data Minimization', description: 'We collect only the technical telemetry and contact data required to provide enterprise telephony services.' },
      { icon: '🔒', title: 'Customer Data Ownership', description: 'All customer contacts, call recordings, and transcripts remain the exclusive property of the client.' },
      { icon: '⚖️', title: 'GDPR & CCPA Compliance', description: 'Full support for data access requests, rectification, automated data retention limits, and right to be forgotten.' },
    ],
    workflow: [
      { step: '01', title: 'Data Ingestion', desc: 'Data is transmitted over encrypted TLS 1.3 channels.' },
      { step: '02', title: 'Storage & Access Control', desc: 'Stored in encrypted databases with strict role-based access.' },
      { step: '03', title: 'Retention & Purging', desc: 'Automatically deleted in accordance with client-defined retention policies.' },
    ],
    technicalSpecs: [
      { label: 'Effective Date', value: 'January 1, 2026' },
      { label: 'Jurisdiction', value: 'United States' },
    ],
    faqs: [
      { q: 'Do you sell or share our contact lists or audio recordings?', a: 'Never. Voice Era Tech operates strictly as a data processor. Your data is never sold, shared, or used for model training without explicit consent.' },
    ],
    relatedPages: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security Overview', href: '/security' },
    ],
  },

  'terms': {
    slug: 'terms',
    category: 'Legal & Terms',
    categoryHref: '/terms',
    eyebrow: 'Service Agreement',
    badge: 'Terms of Service',
    title: 'Voice Era Tech LLC',
    highlightText: 'Terms of Service',
    heroTagline: 'Clear, transparent terms governing the deployment and use of our telephony platforms and technology services.',
    description: 'These Terms of Service govern your access to and use of Voice Era Tech LLC software platforms, dialer systems, APIs, and consulting services. Please review these terms carefully.',
    metrics: [
      { label: 'Service Level Agreement', value: '99.99%', detail: 'Platform availability guarantee' },
      { label: 'Billing Transparency', value: 'No Hidden Fees', detail: 'Itemized usage reporting' },
      { label: 'Account Support', value: '24/7 Enterprise', detail: 'Dedicated support channels' },
    ],
    features: [
      { icon: '⚖️', title: 'Acceptable Use Policy', description: 'Users must comply with all telecommunications regulations including TCPA, STIR/SHAKEN, and national DNC rules.' },
      { icon: '📜', title: 'Intellectual Property Rights', description: 'Clear ownership terms for bespoke software developments and proprietary platform licensing.' },
      { icon: '🔒', title: 'Confidentiality & Non-Disclosure', description: 'Mutual confidentiality protections safeguarding proprietary trade secrets and customer data.' },
    ],
    workflow: [
      { step: '01', title: 'Service Agreement', desc: 'Customer selects service tier and signs master services agreement.' },
      { step: '02', title: 'Platform Provisioning', desc: 'Dedicated credentials and infrastructure provisioned.' },
      { step: '03', title: 'Ongoing Governance', desc: 'Continuous compliance and uptime monitoring.' },
    ],
    technicalSpecs: [
      { label: 'Governing Law', value: 'State of Delaware, United States' },
    ],
    faqs: [
      { q: 'What is your uptime service level agreement (SLA)?', a: 'Our enterprise plans include a 99.99% monthly uptime guarantee backed by financial SLA credits.' },
    ],
    relatedPages: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Compliance', href: '/compliance' },
    ],
  },

  'security': {
    slug: 'security',
    category: 'Trust & Governance',
    categoryHref: '/security',
    eyebrow: 'Enterprise Trust Center',
    badge: 'Security & Trust',
    title: 'Enterprise-Grade',
    highlightText: 'Security Architecture',
    heroTagline: 'Defending your telecommunications data with continuous vulnerability testing, encryption, and zero-trust controls.',
    description: 'Security is not an afterthought at Voice Era Tech. We build defense-in-depth across our network edge, application layer, and physical data centers to ensure complete confidentiality, integrity, and availability.',
    metrics: [
      { label: 'Data Encryption', value: 'TLS 1.3 & AES-256', detail: 'End-to-end coverage' },
      { label: 'Vulnerability Scanning', value: 'Daily Automated', detail: 'Continuous SAST/DAST audits' },
      { label: 'SOC-2 Compliance', value: 'Type II Audited', detail: 'Independent third-party verification' },
    ],
    features: [
      { icon: '🛡️', title: 'Zero-Trust Architecture', description: 'Every internal service requires strict cryptographic authentication and least-privilege authorization.' },
      { icon: '🔒', title: 'Automated Audio Redaction', description: 'AI automatically identifies and scrubs credit cards, SSNs, and sensitive data from call recordings.' },
      { icon: '🚨', title: '24/7 Security Operations (SOC)', description: 'Continuous SIEM monitoring for unauthorized access attempts, anomaly patterns, and DDoS threats.' },
    ],
    workflow: [
      { step: '01', title: 'Edge Inspection', desc: 'Web Application Firewall (WAF) filters malicious traffic and DDoS floods.' },
      { step: '02', title: 'Authenticated Access', desc: 'User requests verified with MFA and scoped JWT session tokens.' },
      { step: '03', title: 'Encrypted Persistence', desc: 'Data written to encrypted storage with audited access logs.' },
    ],
    technicalSpecs: [
      { label: 'Security Frameworks', value: 'NIST CSF, SOC-2 Type II, ISO 27001 Aligned' },
    ],
    faqs: [
      { q: 'How do you protect call recordings from unauthorized access?', a: 'Recordings are encrypted at rest with client-specific KMS keys and accessible only via time-limited signed URLs.' },
    ],
    relatedPages: [
      { label: 'Cloud Security', href: '/cloud-it/security' },
      { label: 'Compliance', href: '/compliance' },
    ],
  },

  'compliance': {
    slug: 'compliance',
    category: 'Regulatory Standards',
    categoryHref: '/compliance',
    eyebrow: 'Regulatory Adherence',
    badge: 'Telecom Compliance Suite',
    title: 'Telecommunications & Regulatory',
    highlightText: 'Compliance',
    heroTagline: 'Built-in safeguards ensuring full adherence to TCPA, STIR/SHAKEN, DNC, HIPAA, and international calling regulations.',
    description: 'Navigating telecommunications regulations is critical to avoid massive statutory fines. Voice Era Tech dialers incorporate automated compliance guardrails, call frequency caps, STIR/SHAKEN caller ID attestation, and real-time DNC verification.',
    metrics: [
      { label: 'STIR/SHAKEN', value: 'A-Level Attestation', detail: 'Verified caller ID authenticity' },
      { label: 'DNC Scrubbing', value: 'Real-Time', detail: 'National, state, and internal lists' },
      { label: 'TCPA Abandonment Guard', value: '< 3.00%', detail: 'Automatic pacing throttles' },
    ],
    features: [
      { icon: '⚖️', title: 'TCPA Automated Safeguards', description: 'Enforce strict calling time windows, abandonment rate caps, and prior express consent verification.' },
      { icon: '📞', title: 'STIR/SHAKEN A-Level Signing', description: 'Cryptographically sign caller IDs to eliminate "Spam Likely" flags and boost connection rates.' },
      { icon: '🚫', title: 'Instant DNC Suppression', description: 'Automatically add opt-outs to internal suppression lists the second a prospect requests removal.' },
    ],
    workflow: [
      { step: '01', title: 'Pre-Dial Verification', desc: 'Number is checked against National DNC, state DNC, and internal opt-out lists.' },
      { step: '02', title: 'Time-Zone Check', desc: 'System verifies that local time at destination is within legal calling hours.' },
      { step: '03', title: 'STIR/SHAKEN Attestation', desc: 'Call is signed with A-Level certificate and dispatched to carrier.' },
    ],
    technicalSpecs: [
      { label: 'Regulations Supported', value: 'TCPA, STIR/SHAKEN, TSR, FDCPA, HIPAA, GDPR' },
    ],
    faqs: [
      { q: 'How does STIR/SHAKEN help our answer rates?', a: 'STIR/SHAKEN verifies that your company legally owns the phone number, preventing mobile carriers from flagging your calls as Spam or Fraud.' },
    ],
    relatedPages: [
      { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
      { label: 'Security', href: '/security' },
    ],
  },

  'careers': {
    slug: 'careers',
    category: 'Company & Culture',
    categoryHref: '/careers',
    eyebrow: 'Join Our Team',
    badge: 'Careers at Voice Era Tech',
    title: 'Build the Future of',
    highlightText: 'Voice Technology',
    heroTagline: 'Join a world-class team of telecommunications engineers, AI researchers, and full-stack software developers.',
    description: 'At Voice Era Tech LLC, we are revolutionizing how businesses communicate at scale. If you are passionate about low-latency SIP telephony, cutting-edge conversational AI models, distributed cloud architecture, and building enterprise software that matters, explore our open roles.',
    metrics: [
      { label: 'Work Culture', value: 'Remote-First', detail: 'Collaborate with teammates globally' },
      { label: 'Engineering Focus', value: 'Deep Tech', detail: 'Telephony, AI, Cloud, High-Throughput' },
      { label: 'Benefits', value: 'Comprehensive', detail: 'Health, 401(k), equity, learning stipends' },
    ],
    features: [
      { icon: '🚀', title: 'Challenging High-Scale Problems', description: 'Work on distributed systems processing millions of real-time voice packets and concurrent connections.' },
      { icon: '💡', title: 'Modern Technology Stacks', description: 'Build with Next.js, Rust, Go, Python, WebRTC, FreeSWITCH, Kubernetes, and state-of-the-art AI.' },
      { icon: '🌍', title: 'Flexible Remote-First Environment', description: 'Work from anywhere with flexible hours, competitive compensation, and generous equipment budgets.' },
    ],
    workflow: [
      { step: '01', title: 'Application Review', desc: 'Our engineering leadership reviews your GitHub, portfolio, and experience.' },
      { step: '02', title: 'Technical Discussion', desc: 'Deep-dive conversation on system design and past architectural challenges.' },
      { step: '03', title: 'Offer & Onboarding', desc: 'Receive competitive offer and integrate with the Voice Era Tech engineering team.' },
    ],
    technicalSpecs: [
      { label: 'Hiring Departments', value: 'Telephony Engineering, AI/ML, Full-Stack Dev, DevOps, Sales' },
    ],
    faqs: [
      { q: 'How can I apply for an open role?', a: 'Send your resume, GitHub profile, or portfolio to careers@voiceeratech.com or reach out via our contact page.' },
    ],
    relatedPages: [
      { label: 'About Voice Era Tech', href: '/about' },
      { label: 'Our Technology', href: '/technology' },
    ],
  },

  // ==========================================
  // 7. INDUSTRY VERTICALS (6 Sub-Pages)
  // ==========================================
  'industries/bpo': {
    slug: 'industries/bpo',
    category: 'Industries',
    categoryHref: '/industries/bpo',
    eyebrow: 'Business Process Outsourcing',
    badge: 'BPO & Call Center Agencies',
    title: 'High-Density Telephony for',
    highlightText: 'BPO Operations',
    heroTagline: 'Empower outsourced contact centers to run hundreds of client campaigns with multi-tenant isolation and automated billing.',
    description: 'BPOs require immense scalability, granular tenant isolation, multi-campaign flexibility, and detailed client reporting. Voice Era Tech delivers a unified platform enabling BPOs to onboard new clients in minutes and maximize agent billable hours.',
    metrics: [
      { label: 'Agent Density', value: '1,000+ per cluster', detail: 'High concurrent capacity' },
      { label: 'Client Onboarding', value: '< 10 mins', detail: 'Instant tenant provisioning' },
      { label: 'Billing Tracking', value: '100% Automated', detail: 'Accurate client invoicing' },
    ],
    features: [
      { icon: '🏢', title: 'Complete Multi-Tenant Isolation', description: 'Keep client lead lists, recordings, scripts, and billing completely segregated.' },
      { icon: '🎯', title: 'Multi-Campaign Agent Blending', description: 'Switch agents dynamically between client campaigns to maximize seat utilization.' },
      { icon: '📊', title: 'White-Label Client Dashboards', description: 'Provide your clients with branded portals to review campaign performance and listen to recordings.' },
    ],
    workflow: [
      { step: '01', title: 'Client Provisioning', desc: 'Create client workspace with custom DIDs and agent seat quotas.' },
      { step: '02', title: 'Campaign Setup', desc: 'Configure dialer pacing, lead lists, and custom disposition forms.' },
      { step: '03', title: 'Live Execution & Invoicing', desc: 'Run high-volume campaigns with automated per-minute and per-agent billing.' },
    ],
    technicalSpecs: [
      { label: 'Supported Scalability', value: 'Up to 50,000 concurrent agents per deployment' },
    ],
    faqs: [
      { q: 'Can our BPO clients access their own reports without seeing other clients?', a: 'Yes. Each client tenant has isolated login credentials and can only view their own campaign data.' },
    ],
    relatedPages: [
      { label: 'Multi-Tenant Dialer', href: '/dialer-systems/multi-tenant' },
      { label: 'Agent Management', href: '/call-center/agent-management' },
    ],
  },

  'industries/financial-services': {
    slug: 'industries/financial-services',
    category: 'Industries',
    categoryHref: '/industries/financial-services',
    eyebrow: 'Financial Institutions & Fintech',
    badge: 'Financial Services Telephony',
    title: 'Compliant Communication for',
    highlightText: 'Financial Services',
    heroTagline: 'Secure, compliant telephony and AI communication for banking, debt recovery, lending, and wealth management.',
    description: 'Financial communications require strict regulatory compliance, military-grade encryption, and zero dropped calls. Our progressive and preview dialers provide guaranteed TCPA, GLBA, and FDCPA adherence with automated PCI-DSS recording redaction.',
    metrics: [
      { label: 'Compliance Adherence', value: '100% Guaranteed', detail: 'FDCPA, TCPA, GLBA compliant' },
      { label: 'Audio Security', value: 'PCI-DSS Pausing', detail: 'Zero stored cardholder data' },
      { label: 'Call Connection', value: 'Zero Dropped', detail: 'Progressive & preview dialing modes' },
    ],
    features: [
      { icon: '🛡️', title: 'FDCPA Calling Frequency Guards', description: 'Enforce legal limits on outreach attempts per debtor per week.' },
      { icon: '💳', title: 'Automated Payment Redaction', description: 'Automatically mute audio during credit card or bank account collection.' },
      { icon: '📝', title: '7-Year Encrypted Archiving', description: 'Store dual-channel call recordings and full transcripts for compliance audits.' },
    ],
    workflow: [
      { step: '01', title: 'Account Ingestion', desc: 'Secure SFTP or API ingest of debt portfolios with compliance scoring.' },
      { step: '02', title: 'Compliant Progressive Dial', desc: 'Dialer connects live debtor directly to skilled financial rep.' },
      { step: '03', title: 'Disposition & Audit Trail', desc: 'Payment confirmation or promise-to-pay logged with timestamped recording.' },
    ],
    technicalSpecs: [
      { label: 'Certifications', value: 'SOC-2 Type II, PCI-DSS Level 1 Ready' },
    ],
    faqs: [
      { q: 'How does the platform prevent calling outside legal hours?', a: 'Our timezone engine maps debtor zip codes and restricts dialing strictly to 8:00 AM – 9:00 PM local debtor time.' },
    ],
    relatedPages: [
      { label: 'Progressive Dialer', href: '/dialer-systems/progressive' },
      { label: 'Security Architecture', href: '/security' },
    ],
  },

  'industries/healthcare': {
    slug: 'industries/healthcare',
    category: 'Industries',
    categoryHref: '/industries/healthcare',
    eyebrow: 'Healthcare & Patient Outreach',
    badge: 'HIPAA-Aware Telephony',
    title: 'HIPAA-Compliant Outreach for',
    highlightText: 'Healthcare Providers',
    heroTagline: 'Secure patient communications, automated appointment reminders, and telehealth telephony built to HIPAA standards.',
    description: 'Healthcare organizations rely on Voice Era Tech to automate patient recall, confirm procedures, provide medication adherence reminders, and route clinical inquiries securely with signed Business Associate Agreements (BAAs).',
    metrics: [
      { label: 'HIPAA Compliance', value: 'BAA Supported', detail: 'Encrypted ePHI protection' },
      { label: 'Patient No-Show Rate', value: '-42%', detail: 'Automated voice & SMS confirmations' },
      { label: 'Recall Efficiency', value: '3x Higher', detail: 'Preventative care scheduling' },
    ],
    features: [
      { icon: '🏥', title: 'HIPAA ePHI Data Encryption', description: 'All voice audio, patient records, and voicemail drops are encrypted to HIPAA guidelines.' },
      { icon: '📅', title: 'Automated Procedure Reminders', description: 'Voice and SMS reminders confirm appointments and deliver pre-op instructions.' },
      { icon: '🔀', title: 'Emergency On-Call Routing', description: 'Intelligent after-hours triage routes urgent patient calls to on-duty physicians.' },
    ],
    workflow: [
      { step: '01', title: 'EHR Synchronization', desc: 'Integrate with Epic, Cerner, or AthenaHealth for upcoming schedules.' },
      { step: '02', title: 'Automated Patient Outreach', desc: 'AI or progressive dialer initiates appointment confirmation.' },
      { step: '03', title: 'EHR Update', desc: 'Confirmation status written back to medical record in real time.' },
    ],
    technicalSpecs: [
      { label: 'EHR Protocols', value: 'HL7, FHIR API, Direct EHR Connectors' },
    ],
    faqs: [
      { q: 'Can Voice Era Tech sign a HIPAA BAA?', a: 'Yes. We sign Business Associate Agreements for healthcare systems and telehealth platforms.' },
    ],
    relatedPages: [
      { label: 'AI Appointment Agents', href: '/ai-solutions/appointments' },
      { label: 'Security', href: '/security' },
    ],
  },

  'industries/real-estate': {
    slug: 'industries/real-estate',
    category: 'Industries',
    categoryHref: '/industries/real-estate',
    eyebrow: 'Real Estate & Brokerages',
    badge: 'Real Estate Lead Generation',
    title: 'High-Velocity Lead Conversion for',
    highlightText: 'Real Estate Teams',
    heroTagline: 'Speed-to-lead instant dialing, MLS property context, and AI qualification for real estate brokerages and agents.',
    description: 'In real estate, calling a new lead within the first 60 seconds increases conversion by 391%. Our speed-to-lead dialer instantly bridges agents with Zillow, Realtor.com, and Facebook ad leads the second they register.',
    metrics: [
      { label: 'Speed to Lead', value: '< 30 sec', detail: 'Instant click-to-dial trigger' },
      { label: 'Listing Conversion', value: '+45%', detail: 'Power dialing past client lists' },
      { label: 'Agent Pipeline', value: '2.8x Growth', detail: 'Automated circle prospecting' },
    ],
    features: [
      { icon: '🏠', title: 'Instant Lead Speed-to-Dial', description: 'Fires an outbound call to the agent and bridges the new homebuyer lead immediately upon web submission.' },
      { icon: '🗺️', title: 'Local Presence Caller ID', description: 'Displays local city area codes to dramatically boost answer rates when circle prospecting.' },
      { icon: '🗂️', title: 'MLS & Property Screen-Pops', description: 'Surfaces the exact property address, listing price, and search criteria the buyer inquired about.' },
    ],
    workflow: [
      { step: '01', title: 'Lead Ingestion', desc: 'Buyer submits inquiry on website or portal.' },
      { step: '02', title: 'Immediate Agent Ring', desc: 'Dialer rings on-duty agent with property address.' },
      { step: '03', title: 'Prospect Bridging', desc: 'Agent speaks with buyer while interest is at its peak.' },
    ],
    technicalSpecs: [
      { label: 'CRM Sync', value: 'Follow Up Boss, BoomTown, KVCore, Lofty' },
    ],
    faqs: [
      { q: 'Can this integrate with Follow Up Boss or KVCore?', a: 'Yes. We provide native integrations that automatically log all calls, notes, and recordings directly into Follow Up Boss.' },
    ],
    relatedPages: [
      { label: 'Power Dialer', href: '/dialer-systems/power' },
      { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents' },
    ],
  },

  'industries/insurance': {
    slug: 'industries/insurance',
    category: 'Industries',
    categoryHref: '/industries/insurance',
    eyebrow: 'Insurance Agencies & Carriers',
    badge: 'Insurance Sales Telephony',
    title: 'High-Volume Compliant Calling for',
    highlightText: 'Insurance Agencies',
    heroTagline: 'Outbound sales dialing, live policy transfers, and compliant call recording for life, health, auto, and commercial insurance.',
    description: 'Insurance lead generation requires high dialing velocity, instant speed-to-lead, and rigorous compliance recording. Our platform enables insurance agencies to contact shared leads first and close more policies daily.',
    metrics: [
      { label: 'Lead Contact Rate', value: '78%+', detail: 'Multi-touch automated cadence' },
      { label: 'Policy Closes per Agent', value: '+35%', detail: 'Maximized agent talk time' },
      { label: '100% Recording Storage', value: 'Compliant', detail: 'Policy disclosure verification' },
    ],
    features: [
      { icon: '🛡️', title: 'Multi-Line Power Dialing', description: 'Dial 2 or 3 lines per agent to cut through unanswered calls and connect with live insurance shoppers.' },
      { icon: '🎙️', title: 'Verifiable Disclosure Recording', description: 'Record and store mandatory insurance disclosures with timestamped verification.' },
      { icon: '⚡', title: 'Live Transfer Routing', description: 'Qualify leads with junior reps or AI agents and live-transfer ready buyers to licensed producers.' },
    ],
    workflow: [
      { step: '01', title: 'Lead Arrival', desc: 'Web quote lead triggers immediate high-priority dial.' },
      { step: '02', title: 'Policy Discovery', desc: 'Agent reviews vehicle/health details and quotes rates.' },
      { step: '03', title: 'Transfer or Close', desc: 'Call transferred to licensed underwriter for policy bind.' },
    ],
    technicalSpecs: [
      { label: 'CRM Compatibility', value: 'Applied Epic, AgencyBloc, VanillaSoft, Salesforce' },
    ],
    faqs: [
      { q: 'Can we record mandatory disclosures for policy binding?', a: 'Yes. All calls are recorded in dual-channel HD audio with instant searchable archiving.' },
    ],
    relatedPages: [
      { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
      { label: 'Compliance', href: '/compliance' },
    ],
  },

  'industries/ecommerce': {
    slug: 'industries/ecommerce',
    category: 'Industries',
    categoryHref: '/industries/ecommerce',
    eyebrow: 'E-Commerce & DTC Brands',
    badge: 'E-Commerce Support & Retention',
    title: 'Customer Retention & Support for',
    highlightText: 'E-Commerce Brands',
    heroTagline: 'Omnichannel customer support, order tracking, and abandoned cart recovery across voice, SMS, and chat.',
    description: 'Boost customer lifetime value and resolve post-purchase support tickets effortlessly. Integrate with Shopify, BigCommerce, or custom platforms to let AI support agents check order status, process returns, and recover abandoned checkouts.',
    metrics: [
      { label: 'Support Resolution Time', value: '< 2 mins', detail: 'Automated order status lookups' },
      { label: 'Cart Recovery Conversion', value: '14% - 22%', detail: 'Proactive SMS & voice outreach' },
      { label: 'Support Ticket Deflection', value: '68%', detail: 'Self-serve tracking via IVR and AI' },
    ],
    features: [
      { icon: '🛒', title: 'Real-Time Shopify & Order Sync', description: 'Instantly pull order tracking numbers, shipment statuses, and purchase history during customer calls.' },
      { icon: '💬', title: 'Two-Way SMS Cart Recovery', description: 'Engage shoppers who abandoned checkouts with personalized SMS discount offers and checkout links.' },
      { icon: '🤖', title: '24/7 AI Order Lookup IVR', description: 'Callers can check delivery status simply by speaking their phone number or order ID.' },
    ],
    workflow: [
      { step: '01', title: 'Inbound Inquiry', desc: 'Customer calls or texts asking for shipment status.' },
      { step: '02', title: 'E-Commerce API Lookup', desc: 'System queries Shopify API and reads live carrier tracking.' },
      { step: '03', title: 'Instant Resolution', desc: 'AI or agent provides tracking details and texts tracking link.' },
    ],
    technicalSpecs: [
      { label: 'Integrations', value: 'Shopify, BigCommerce, WooCommerce, Klaviyo, Gorgias' },
    ],
    faqs: [
      { q: 'Can the system automatically text tracking numbers to callers?', a: 'Yes. Callers can opt to receive instant SMS updates while on the phone with the IVR or agent.' },
    ],
    relatedPages: [
      { label: 'Omnichannel Contact Center', href: '/call-center/contact-center' },
      { label: 'AI Customer Support', href: '/ai-solutions/customer-support' },
    ],
  },
};
