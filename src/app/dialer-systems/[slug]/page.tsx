import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

interface DialerData {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  specs: { label: string; value: string }[];
  useCases: string[];
  architecture: string[];
}

const dialerDetails: Record<string, DialerData> = {
  predictive: {
    title: 'Predictive Dialer System',
    badge: 'AI Algorithm Driven',
    tagline: 'Maximize agent connection rates with predictive machine learning pacing.',
    description: 'The Voice Era Tech Predictive Dialer calculates optimal dialing rates by analyzing agent talk times, average wrap-up durations, and historical connection probabilities in real time to virtually eliminate idle wait time while maintaining strict drop-rate compliance.',
    keyFeatures: [
      'Adaptive Machine-Learning Pacing Algorithm',
      'Real-time Drop-rate and Abandonment Guardrails (TCPA Compliant)',
      'Intelligent Answering Machine Detection (AMD with 98.4% accuracy)',
      'Automated Lead Recycling and Priority Queue Re-injection',
      'Skills-based Agent Routing with Dynamic Queue Balancing',
      'Live Supervisor Whisper, Barge-in, and Call Monitoring',
    ],
    specs: [
      { label: 'Throughput', value: 'Up to 500 concurrent channels / server' },
      { label: 'Latency', value: '< 20ms audio latency over SIP' },
      { label: 'AMD Speed', value: '< 800ms detection time' },
      { label: 'Compliance', value: 'TCPA, STIR/SHAKEN, FCC Grade' },
    ],
    useCases: [
      'High-volume outbound sales and cold outreach campaigns',
      'Debt collection and receivables recovery',
      'National political and market research surveying',
      'Customer retention and subscription renewal drives',
    ],
    architecture: [
      'SIP / RTP Session Border Controller layer',
      'Microservices pacing daemon written in Rust / Go',
      'Real-time WebRTC Agent Softphone client',
      'Kafka event pipeline for sub-second telemetry',
    ],
  },
  power: {
    title: 'Power Dialer System',
    badge: 'High-Speed Agent Assisted',
    tagline: 'Rapid sequential dialing with guaranteed live agent handoff.',
    description: 'The Voice Era Tech Power Dialer connects calls the instant an agent finishes their current interaction. Perfect for targeted outbound sales teams where 100% human presence and zero dropped calls are mandatory.',
    keyFeatures: [
      'Instant Agent Connection with 0% Drop Probability',
      'Configurable 1:1, 2:1, or Dynamic Ratio Dialing',
      'Built-in One-Click Voicemail Drop and Email Sequences',
      'Dynamic CRM Lead Card Screen Pop with Full Interaction History',
      'Automatic Call Disposition Logging and Calendar Sync',
      'Local Presence Caller ID Rotation to Boost Pickup Rates',
    ],
    specs: [
      { label: 'Dialing Ratio', value: '1:1 to 4:1 per agent' },
      { label: 'VM Drop Delay', value: 'Instant background execution' },
      { label: 'CRM Sync', value: 'Sub-second webhook updates' },
      { label: 'Number Pools', value: 'Unlimited localized DIDs' },
    ],
    useCases: [
      'B2B Account Executive pipeline generation',
      'Inbound lead follow-up within 60 seconds of submission',
      'Real estate listing outreach and investor calls',
      'Insurance broker consultations and policy reviews',
    ],
    architecture: [
      'WebRTC direct audio bridge',
      'Real-time Redis state management for agent readiness',
      'Elastic SIP trunking with auto-failover',
      'REST API webhooks to Salesforce, HubSpot, and custom CRMs',
    ],
  },
  progressive: {
    title: 'Progressive Dialer System',
    badge: 'Compliance-First Dialing',
    tagline: 'Controlled automated dialing that guarantees an available agent before dialing.',
    description: 'Progressive dialing ensures that an agent is already reserved and looking at the lead profile before the dial is initiated. Essential for regulated industries requiring absolute zero dropped calls and high customer context.',
    keyFeatures: [
      'Strict Zero Abandoned Call Guarantee',
      'Agent Reservation Prior to Outbound Ring',
      'Automated DNC (Do Not Call) Real-time Scrubbing',
      'Automated Call Recording with PCI-DSS Pause / Resume',
      'Detailed Agent Interaction and Wrap-Up Time Tracking',
      'Multi-tier Campaign Priority Queuing',
    ],
    specs: [
      { label: 'Abandoned Calls', value: '0% guaranteed' },
      { label: 'Recording Storage', value: 'Encrypted S3 with AES-256' },
      { label: 'Audio Quality', value: 'G.711 / Opus HD Wideband' },
      { label: 'Compliance', value: 'HIPAA, PCI-DSS, TCPA' },
    ],
    useCases: [
      'Healthcare patient consultations and appointment reminders',
      'Financial services credit and loan servicing',
      'Tier 1 customer care outreach and escalation follow-ups',
      'Regulated utility customer communications',
    ],
    architecture: [
      'Stateful call manager cluster with high availability',
      'Encrypted voice storage with dual-zone replication',
      'Integrated DNC registry API query cache',
      'Audit log immutability via signed cryptographic ledgers',
    ],
  },
  preview: {
    title: 'Preview Dialer System',
    badge: 'Full Context Engagement',
    tagline: 'Empower agents with complete CRM context and history before placing each call.',
    description: 'The Preview Dialer displays complete lead intelligence, prior call transcripts, recorded notes, and custom CRM attributes to the agent before giving them the choice to dial or skip, ensuring maximum preparation for high-value sales.',
    keyFeatures: [
      'Comprehensive Pre-Call Lead Dossier Screen Pop',
      'Configurable Preview Countdown Timer with Auto-Dial option',
      'Direct CRM Field Editing during and after interaction',
      'Integrated AI Call Script Guidance with Dynamic Rebuttals',
      'One-click Call Transfers to Tier 2 Specialists or Supervisors',
      'Automated Next-Best-Action recommendations',
    ],
    specs: [
      { label: 'Preview Timer', value: 'Customizable (10s - 120s)' },
      { label: 'Screen Pop Latency', value: '< 150ms on lead load' },
      { label: 'Scripting Engine', value: 'Dynamic interactive flowchart' },
      { label: 'CRM Compatibility', value: 'REST / GraphQL Universal' },
    ],
    useCases: [
      'High-ticket enterprise B2B sales development',
      'Wealth management and private banking consultations',
      'Complex technical solution advisory',
      'VIP customer account renewals and executive escalations',
    ],
    architecture: [
      'React-based softphone widget with iframe embedding',
      'Graph database for rapid relationship mapping',
      'Unified omnichannel communication router',
      'Secure WebSocket bridge for real-time CRM updates',
    ],
  },
  voip: {
    title: 'VoIP / SIP Infrastructure',
    badge: 'Carrier-Grade Telephony',
    tagline: 'High-availability global VoIP infrastructure with crystal-clear audio codecs.',
    description: 'Voice Era Tech provides enterprise-grade VoIP and SIP trunking infrastructure engineered specifically for high-concurrency dialers, featuring carrier redundancy, automatic route selection, and local DID management in 100+ countries.',
    keyFeatures: [
      'Tier-1 Carrier Redundancy with Automated Least-Cost Routing (LCR)',
      'STIR/SHAKEN A-Level Attestation to Prevent Spam Labeling',
      'Global DID Number Management with Automated Reputation Scrubbing',
      'Multi-Codec Support: Opus, G.711u/a, G.729 with MOS Score > 4.3',
      'Enterprise Session Border Controllers (SBC) with DDoS Mitigation',
      'Real-time QoS (Quality of Service) packet inspection',
    ],
    specs: [
      { label: 'MOS Score', value: '4.35 Average Quality' },
      { label: 'SLA Uptime', value: '99.999% High Availability' },
      { label: 'Global DIDs', value: '100+ countries supported' },
      { label: 'DDoS Shield', value: '100 Gbps network mitigation' },
    ],
    useCases: [
      'High-capacity dialer terminations and originations',
      'Multi-site call center telephony consolidation',
      'International toll-free and localized customer support lines',
      'Enterprise PBX and SIP trunk modernization',
    ],
    architecture: [
      'Geographically distributed Kamailio & FreeSWITCH clusters',
      'Anycast IP routing for lowest packet latency',
      'Automated carrier failover with health-check heartbeats',
      'Prometheus & Grafana voice quality telemetry',
    ],
  },
  sip: {
    title: 'SIP Dialer Engine',
    badge: 'Protocol Level Telephony',
    tagline: 'Low-level SIP protocol engine built for maximum call throughput.',
    description: 'Direct SIP signaling and RTP media handling engineered for ultra-high CPS (Calls Per Second) applications, private cloud deployments, and custom PBX integrations.',
    keyFeatures: [
      'High-throughput SIP signaling engine (1,000+ CPS capability)',
      'RFC-compliant SIP header manipulation and carrier interop',
      'Custom IVR trees with SIP INFO and RFC 2833 DTMF capture',
      'Secure SIP over TLS and SRTP media stream encryption',
      'Dynamic CDR generation with detailed SIP response code analytics',
      'Seamless Asterisk, FreeSWITCH, and Cisco CallManager bridging',
    ],
    specs: [
      { label: 'Calls Per Second', value: 'Up to 1,200 CPS per node' },
      { label: 'Signaling Protocol', value: 'SIP 2.0 (RFC 3261)' },
      { label: 'Encryption', value: 'TLS 1.3 / SRTP' },
      { label: 'CDR Export', value: 'Real-time JSON / Syslog / SQL' },
    ],
    useCases: [
      'Large-scale enterprise telecom migrations',
      'Automated emergency notification systems',
      'High-volume transactional verification & 2FA calls',
      'Custom telecom hardware integrations',
    ],
    architecture: [
      'C++ / Go based SIP proxy engine',
      'Hardware-accelerated media transcoders',
      'Zero-copy network buffer architecture',
      'Distributed Redis clustering for SIP dialog states',
    ],
  },
  'multi-tenant': {
    title: 'Multi-Tenant Dialer Platform',
    badge: 'BPO & Service Provider Grade',
    tagline: 'Complete tenant isolation with centralized multi-organization administration.',
    description: 'Built specifically for Business Process Outsourcers (BPOs), contact center agencies, and SaaS resellers who need to run hundreds of independent client campaigns with strict data isolation, custom white-labeling, and granular billing.',
    keyFeatures: [
      'Total Logical and Data Isolation between Tenant Accounts',
      'White-label Custom Branding, Subdomains, and Email Templates',
      'Hierarchical Role-Based Access Control (SuperAdmin, OrgAdmin, Supervisor, Agent)',
      'Automated Per-Tenant CDR Billing, Balance Caps, and Invoicing',
      'Individual SIP Trunk and DID Pool Assignment per Tenant',
      'Cross-tenant Telephony Resource Pooling with Quotas',
    ],
    specs: [
      { label: 'Tenants per cluster', value: 'Unlimited scalable tenants' },
      { label: 'White Labeling', value: 'Full CSS / Domain / Logo custom' },
      { label: 'Billing Engine', value: 'Per-second or per-minute rating' },
      { label: 'Data Isolation', value: 'Multi-schema / Row-level security' },
    ],
    useCases: [
      'BPO organizations servicing multiple external corporate clients',
      'Telecom resellers and hosted dialer SaaS providers',
      'Franchise networks with independent branch calling queues',
      'Agency lead gen teams running campaigns for diverse accounts',
    ],
    architecture: [
      'Multi-tenant PostgreSQL database with RLS policies',
      'Tenant-aware Kubernetes microservices routing',
      'Stripe / Billing engine webhook synchronization',
      'Isolated S3 buckets for client recording compliance',
    ],
  },
  custom: {
    title: 'Custom Dialer Development',
    badge: 'Tailor-Made Solutions',
    tagline: 'Bespoke dialer architecture built from the ground up for unique workflows.',
    description: 'When off-the-shelf software falls short, Voice Era Tech engineers custom dialer solutions, proprietary routing algorithms, custom hardware bridges, and deeply integrated telephony software tailored precisely to your operational requirements.',
    keyFeatures: [
      'Custom Dialing Logic and Proprietary Pacing Engines',
      'Deep Integration with Legacy On-Premise AS400 / Oracle / SQL Systems',
      'Custom Agent UI/UX built to mirror existing enterprise workflows',
      'Proprietary AI and LLM Voice Agent integrations',
      'Dedicated Private Cloud or On-Premise Bare-Metal Deployment',
      'Complete Source Code Ownership and SLA Maintenance Plans',
    ],
    specs: [
      { label: 'Architecture', value: '100% Bespoke specifications' },
      { label: 'Deployment', value: 'AWS, GCP, Azure, or Private Bare-Metal' },
      { label: 'Compliance', value: 'Custom security controls & audits' },
      { label: 'Support', value: '24/7/365 Dedicated Tier 3 Engineering' },
    ],
    useCases: [
      'Enterprises with proprietary mainframe or legacy backends',
      'High-security defense and government contact operations',
      'Unique multinational compliance and routing requirements',
      'Proprietary SaaS platforms seeking embedded telephony',
    ],
    architecture: [
      'Modular microservices architecture in Go / TypeScript',
      'Custom CI/CD pipelines with automated regression testing',
      'Kubernetes orchestration with multi-AZ failover',
      'Custom API gateways and enterprise event bus',
    ],
  },
  integrations: {
    title: 'Dialer Integrations & APIs',
    badge: 'Connected Telephony',
    tagline: 'Unify your dialer with CRMs, databases, AI models, and marketing automation.',
    description: 'Connect your Voice Era Tech dialer infrastructure seamlessly into your existing software stack with out-of-the-box connectors for Salesforce, HubSpot, Zoho, Microsoft Dynamics, Zendesk, and custom webhooks.',
    keyFeatures: [
      'Bi-directional Two-Way CRM Synchronization in Real Time',
      'Instant Lead Insertion Webhooks (Post-Lead-to-Call in < 3 seconds)',
      'Automated Call Audio Recording and Transcript Storage in Lead Records',
      'Custom Webhook Triggers on Call Start, Connect, Disposition, and End',
      'REST API with 100% Endpoint Coverage for Programmatic Campaign Control',
      'Zapier & Make.com Native App Connectors for No-Code Workflows',
    ],
    specs: [
      { label: 'Webhook Latency', value: '< 100ms dispatch time' },
      { label: 'API Format', value: 'RESTful JSON / WebSockets / GraphQL' },
      { label: 'Auth Protocols', value: 'OAuth 2.0, API Keys, mTLS' },
      { label: 'Rate Limits', value: 'Up to 10,000 requests / minute' },
    ],
    useCases: [
      'Speed-to-lead automation for webform captures',
      'Automated CRM deal stage progression on positive dispositions',
      'Real-time data synchronization to data warehouses (Snowflake, BigQuery)',
      'Automated post-call SMS & email triggers',
    ],
    architecture: [
      'High-throughput Redis event queue with retry policies',
      'Secure OAuth token rotation and credential vault',
      'Dead-letter queues for zero data loss on third-party outages',
      'Automated rate-limiting and payload signature verification',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(dialerDetails).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = dialerDetails[slug];
  if (!data) return { title: 'Dialer Systems — Voice Era Tech LLC' };
  return {
    title: `${data.title} — Voice Era Tech LLC`,
    description: data.description,
  };
}

export default async function DialerSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = dialerDetails[slug];
  if (!data) notFound();

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <div className="container-lg">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#64748B' }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/dialer-systems" style={{ color: '#64748B', textDecoration: 'none' }}>Dialer Systems</Link>
            <span>/</span>
            <span style={{ color: '#2563EB', fontWeight: 600 }}>{data.title}</span>
          </div>

          {/* Hero section */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>{data.badge}</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              {data.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#2563EB', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {data.tagline}
            </p>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 840, marginBottom: '2.5rem' }}>
              {data.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={`/contact?product=${slug}`} className="btn-magnetic btn-primary">
                Request a Demo of {data.title} →
              </Link>
              <Link href="/dialer-systems" className="btn-magnetic btn-secondary">
                View All Dialer Types
              </Link>
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '4.5rem' }}>
            {data.specs.map(s => (
              <div key={s.label} className="node-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Features and Architecture Split */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4.5rem' }} className="flex flex-col md:grid">
            {/* Features */}
            <div className="node-card">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2563EB' }}>⚡</span> Key Capabilities
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.keyFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      ✓
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="node-card">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#0284C7' }}>🏛️</span> Enterprise Architecture
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.architecture.map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(2, 132, 199, 0.1)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      {i + 1}
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div style={{ background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: 24, padding: '3rem', marginBottom: '4rem' }}>
            <h2 className="text-display-sm" style={{ color: '#0F172A', marginBottom: '1.5rem' }}>
              Ideal Industry Use Cases
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {data.useCases.map((uc, i) => (
                <div key={i} style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 16, border: '1px solid rgba(226, 232, 240, 0.8)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ color: '#2563EB', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                    0{i + 1}.
                  </div>
                  <p style={{ color: '#334155', fontSize: '0.925rem', lineHeight: 1.6 }}>{uc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)', borderRadius: 24, border: '1px solid rgba(37, 99, 235, 0.15)' }}>
            <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              Ready to deploy the {data.title}?
            </h2>
            <p className="text-body-lg" style={{ color: '#64748B', maxWidth: 560, margin: '0 auto 2rem' }}>
              Speak with a Voice Era Tech telecommunications engineer to configure your environment, test our SIP latency, or schedule a live platform walkthrough.
            </p>
            <Link href={`/contact?inquiry=${slug}`} className="btn-magnetic btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}>
              Schedule Technical Consultation →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
