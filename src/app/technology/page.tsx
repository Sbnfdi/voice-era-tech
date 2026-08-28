import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Technology Architecture — Voice Era Tech LLC Systems',
  description: 'Explore the full-stack telephony architecture, carrier SIP gateways, real-time audio pipelines, and cloud engineering behind Voice Era Tech LLC.',
};

const techStack = [
  { category: 'Dialer Core', color: '#3157D5', icon: '📡', technologies: ['SIP/RTP Stack', 'VoIP Gateway', 'Predictive Pacing Engine', 'Sub-450ms AMD Detection', 'Real-Time DNC Scrubbing', 'Multi-Campaign Dispatch'] },
  { category: 'Conversational AI', color: '#4C8DFF', icon: '🤖', technologies: ['Sub-600ms NLU Pipeline', 'Neural Voice Synthesis', 'RAG Document Retrieval', 'Dynamic BANT Lead Scoring', 'Calendar Appointment AI', 'Speaker Diarization'] },
  { category: 'Infrastructure', color: '#3AAFA9', icon: '☁️', technologies: ['Multi-Region High Availability', 'Bare-Metal Server Fleet', 'Kubernetes Orchestration', 'Auto-Scaling Groups', 'SBC Edge Security', 'Global Anycast DNS'] },
  { category: 'Data & Telemetry', color: '#3157D5', icon: '📊', technologies: ['Real-Time ClickHouse Analytics', 'Audio MOS Scoring Stream', 'Dual-Channel Call Archiving', 'Grafana NOC Dashboards', 'Immutable Audit Logging', 'Event Streaming'] },
  { category: 'Security & Trust', color: '#C9A96E', icon: '🔒', technologies: ['TLS 1.3 & SRTP Voice Encryption', 'SOC-2 Type II Controls', 'PCI-DSS Payment Muting', 'TCPA Abandonment Throttles', 'STIR/SHAKEN A-Attestation', 'Granular RBAC'] },
  { category: 'Integrations & APIs', color: '#4C8DFF', icon: '🔗', technologies: ['OpenAPI 3.0 REST Endpoints', 'WebSocket Event Brokers', 'Salesforce OpenCTI Bridge', 'HubSpot & Zoho Sync', 'Bi-directional Webhooks', 'Custom Middleware'] },
];

const architectureLayers = [
  { layer: 'Layer 01', label: 'Client Workspace & Embedded Softphone (WebRTC)', color: '#4C8DFF' },
  { layer: 'Layer 02', label: 'High-Throughput API Gateway & OAuth2 Validation', color: '#3157D5' },
  { layer: 'Layer 03', label: 'Campaign Engine & Adaptive Pacing Algorithms', color: '#3157D5' },
  { layer: 'Layer 04', label: 'Conversational Voice AI & Sub-600ms NLU', color: '#4C8DFF' },
  { layer: 'Layer 05', label: 'Carrier SIP Trunking & Session Border Controller (SBC)', color: '#3AAFA9' },
  { layer: 'Layer 06', label: 'High-Speed Real-Time Telemetry & Data Pipeline', color: '#3157D5' },
  { layer: 'Layer 07', label: 'Multi-Region Cloud & Bare-Metal Hardware Fleet', color: '#3AAFA9' },
];

export default function TechnologyPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5.5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Platform Architecture</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              The Telecommunications Systems <br />
              <span className="gradient-text-blue">We Engineer.</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 580, lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Voice Era Tech builds upon battle-tested telecommunications protocols, carrier-grade SIP signaling, and low-latency cloud infrastructure designed for infinite horizontal scalability.
            </p>
          </div>
        </section>

        {/* 7-Tier Architecture Stack */}
        <section style={{ padding: '5rem 0', background: '#151D27', borderTop: '1px solid rgba(76, 141, 255, 0.08)', borderBottom: '1px solid rgba(76, 141, 255, 0.08)' }}>
          <div className="container-lg">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Multi-Tier Stack</div>
              <h2 className="text-display-md" style={{ color: '#F4F6F8' }}>
                Full-Stack <span className="gradient-text-blue">Infrastructure Blueprint</span>
              </h2>
            </div>

            <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {architectureLayers.map((layer) => (
                <div
                  key={layer.label}
                  style={{
                    padding: '1.125rem 1.75rem',
                    borderRadius: 12,
                    background: '#202B38',
                    border: '1px solid rgba(76, 141, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: layer.color }} />
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, color: '#F4F6F8', fontSize: '0.9375rem' }}>
                      {layer.label}
                    </span>
                  </div>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', color: '#9AA6B2' }}>
                    {layer.layer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Technology Components Grid */}
        <section style={{ padding: '5.5rem 0', background: '#0B0F14' }}>
          <div className="container-xl">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Technology Components</div>
              <h2 className="text-display-md" style={{ color: '#F4F6F8' }}>
                Core Platform <span className="gradient-text-blue">Building Blocks</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
              {techStack.map((ts) => (
                <div
                  key={ts.category}
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.12)',
                    borderRadius: 18,
                    padding: '2rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: '#202B38',
                        border: '1px solid rgba(49, 87, 213, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                      }}
                    >
                      {ts.icon}
                    </div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#F4F6F8' }}>
                      {ts.category}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {ts.technologies.map((t) => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#4C8DFF' }} />
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem', color: '#9AA6B2' }}>
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
                Discuss Your Architecture With an Engineer →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
