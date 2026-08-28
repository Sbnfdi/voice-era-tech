import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform Architecture & Technology Stack — Voice Era Tech LLC',
  description: 'Explore the full-stack architecture, carrier protocols, AI pipelines, and cloud networks that power the Voice Era Tech platform.',
};

const techStack = [
  { category: 'Dialer Core', color: '#0284C7', icon: '📡', technologies: ['SIP / RTP Protocol Stack', 'Kamailio Session Border Controllers', 'Real-Time Predictive Pacing Daemon', 'Answering Machine Detection (AMD)', 'Dynamic DNC Scrubbing Engine', 'Local Presence DID Rotation'] },
  { category: 'Voice AI & NLP', color: '#6366F1', icon: '🤖', technologies: ['Sub-600ms Speech-to-Speech Pipeline', 'Deepgram Real-Time Transcription', 'ElevenLabs / Cartesia Ultra-Fast TTS', 'Deterministic LLM Guardrails', 'Multi-Agent State Orchestration', 'Live Sentiment & Intent Analysis'] },
  { category: 'Cloud Infrastructure', color: '#2563EB', icon: '☁️', technologies: ['Multi-Region AWS & GCP Clusters', 'Kubernetes / Docker Microservices', 'SR-IOV High-Speed Network Interfaces', 'Automated Terraform CI/CD Deployments', 'Zero-SPOF Clustered Databases', 'Cloudflare DDoS Mitigation'] },
  { category: 'Data & Analytics', color: '#059669', icon: '📊', technologies: ['Kafka Distributed Event Streaming', 'PostgreSQL with Row-Level Security', 'Redis Real-Time State Cache', 'Snowflake / BigQuery Warehouse Sync', 'Sub-Second CDR Telemetry Pipelines', 'Automated QA Speech Analytics'] },
  { category: 'Security & Compliance', color: '#DC2626', icon: '🔒', technologies: ['TLS 1.3 & SRTP Voice Encryption', 'STIR/SHAKEN A-Attestation Protocol', 'Role-Based Access Control (RBAC)', 'PCI-DSS Recording Redaction', 'Automated Toll Fraud Quarantine', 'Immutable Audit Event Ledgers'] },
  { category: 'APIs & Integrations', color: '#D97706', icon: '🔗', technologies: ['RESTful JSON & GraphQL Endpoints', 'Sub-Second Webhook Event Emitters', 'Native Salesforce / HubSpot Connectors', 'OAuth 2.0 & Token Rate Limiting', 'OpenAPI 3.1 Interactive Specs', 'Zapier & Make.com Native Apps'] },
];

const architectureLayers = [
  { label: 'Layer 1: Edge & Client Presentation (WebRTC Softphone / Next.js React UI)', color: '#2563EB' },
  { label: 'Layer 2: API Gateway & Webhook Router (Kong / OAuth 2.0 / Rate Limiting)', color: '#0284C7' },
  { label: 'Layer 3: Microservices Application Core (Campaigns / Routing / Workspaces)', color: '#6366F1' },
  { label: 'Layer 4: Real-Time Telephony & Pacing Daemon (Predictive Pacing in Go/Rust)', color: '#0284C7' },
  { label: 'Layer 5: Session Border Controllers & SIP Media Proxies (Kamailio / FreeSWITCH)', color: '#059669' },
  { label: 'Layer 6: Conversational Voice AI Pipeline (Deepgram / LLM / Low-Latency TTS)', color: '#6366F1' },
  { label: 'Layer 7: Storage & Event Streaming (PostgreSQL / Kafka / Redis / S3)', color: '#D97706' },
  { label: 'Layer 8: Carrier Network Layer (Tier-1 CLECs / Global Anycast SIP Trunks)', color: '#2563EB' },
];

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        {/* Hero */}
        <section style={{ position: 'relative', paddingBottom: '4rem' }}>
          <div className="container-lg">
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Platform Architecture</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              The Telephony Stack We<br />
              <span className="gradient-text-blue">Engineer On</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 680, lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Voice Era Tech builds on carrier-grade telecommunications standards, low-latency media streams, cloud-native orchestration, and modern AI architectures engineered for maximum throughput and zero downtime.
            </p>
          </div>
        </section>

        {/* 8-Layer Architecture Stack */}
        <section style={{ padding: '4.5rem 0', background: '#F8FAFC', borderTop: '1px solid rgba(226, 232, 240, 0.9)', borderBottom: '1px solid rgba(226, 232, 240, 0.9)' }}>
          <div className="container-lg">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Multi-Tier Stack</div>
              <h2 className="text-display-sm" style={{ color: '#0F172A' }}>
                End-to-End <span className="gradient-text-blue">System Topology</span>
              </h2>
            </div>
            <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {architectureLayers.map((layer, i) => (
                <div key={layer.label} style={{
                  padding: '1.15rem 1.75rem',
                  borderRadius: 14,
                  background: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2563EB', flexShrink: 0 }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, color: '#0F172A', fontSize: '0.95rem' }}>
                    {layer.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Component Grid */}
        <section style={{ padding: '5rem 0 6rem' }}>
          <div className="container-xl">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Component Breakdown</div>
              <h2 className="text-display-sm" style={{ color: '#0F172A' }}>
                What Powers the <span className="gradient-text-blue">Voice Era Platform</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
              {techStack.map(ts => (
                <div key={ts.category} className="node-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, fontSize: '1.25rem',
                      background: 'rgba(37, 99, 235, 0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{ts.icon}</div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0F172A' }}>
                      {ts.category}
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {ts.technologies.map(tech => (
                      <div key={tech} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', flexShrink: 0 }} />
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9rem', color: '#475569' }}>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" className="btn-magnetic btn-primary">
                Discuss Your Architecture Blueprint →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
