import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Technology — The Systems That Power Voice Era Tech',
  description: 'Explore the technology stack, architecture and engineering philosophy behind Voice Era Tech LLC dialer systems, AI solutions and cloud infrastructure.',
};

const techStack = [
  { category: 'Dialer Core', color: '#0066FF', icon: '📡', technologies: ['SIP/RTP Stack', 'VoIP Gateway', 'Call Routing Engine', 'Predictive Pacing Algorithm', 'DNC Integration', 'Campaign Engine'] },
  { category: 'AI & ML', color: '#8B5CF6', icon: '🤖', technologies: ['NLP Engine', 'Sentiment Analysis', 'Voice Recognition', 'Predictive Analytics', 'Lead Scoring', 'Conversational AI'] },
  { category: 'Infrastructure', color: '#4A9EFF', icon: '☁️', technologies: ['Cloud-Native Architecture', 'Auto-Scaling', 'Load Balancing', 'CDN Distribution', 'Multi-Region Deployment', 'Container Orchestration'] },
  { category: 'Data & Analytics', color: '#00E5A0', icon: '📊', technologies: ['Real-Time Data Pipeline', 'Analytics Engine', 'Call Recording Storage', 'Business Intelligence', 'Custom Reporting', 'Event Streaming'] },
  { category: 'Security', color: '#FF3B5C', icon: '🔒', technologies: ['TLS Encryption', 'RBAC Access Control', 'Audit Logging', 'Vulnerability Management', 'API Security', 'Compliance Controls'] },
  { category: 'Integration', color: '#FFB800', icon: '🔗', technologies: ['REST APIs', 'Webhook Engine', 'CRM Connectors', 'SaaS Integrations', 'iPaaS Support', 'Custom Middleware'] },
];

const architectureLayers = [
  { label: 'Frontend / Agent Interface', color: '#4A9EFF' },
  { label: 'API Gateway', color: '#0066FF' },
  { label: 'Application Layer', color: '#00D4FF' },
  { label: 'Dialer Engine', color: '#00E5A0' },
  { label: 'VoIP / SIP Layer', color: '#8B5CF6' },
  { label: 'CRM Integration', color: '#FFB800' },
  { label: 'AI & Analytics', color: '#FF6B35' },
  { label: 'Cloud Infrastructure', color: '#4A9EFF' },
];

export default function TechnologyPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,102,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container-lg" style={{ position: 'relative' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Technology</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              The Systems We<br />
              <span className="gradient-text-blue">Build On</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 560, lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Voice Era Tech builds on a foundation of proven telecommunications protocols, cloud-native infrastructure and modern software engineering practices. Our architecture is designed for scale, reliability and extensibility.
            </p>
          </div>
        </section>

        {/* Architecture stack */}
        <section style={{ padding: '4rem 0', background: 'rgba(7,13,28,0.95)' }}>
          <div className="container-lg">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Platform Architecture</div>
              <h2 className="text-display-sm" style={{ color: '#E8EEFF' }}>
                Full-Stack <span className="gradient-text-blue">Infrastructure</span>
              </h2>
            </div>
            <div style={{ maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {architectureLayers.map((layer, i) => (
                <div key={layer.label} style={{
                  padding: '1rem 1.5rem',
                  borderRadius: 12,
                  background: `${layer.color}08`,
                  border: `1px solid ${layer.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  animation: `fade-up 0.3s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s both`,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: layer.color, boxShadow: `0 0 8px ${layer.color}`, flexShrink: 0 }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 500, color: '#E8EEFF', fontSize: '0.9375rem' }}>
                    {layer.label}
                  </span>
                  <div style={{ marginLeft: 'auto', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#4A6A99', letterSpacing: '0.08em' }}>
                    Layer {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack grid */}
        <section style={{ padding: '5rem 0 7rem' }}>
          <div className="container-xl">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Technology Components</div>
              <h2 className="text-display-sm" style={{ color: '#E8EEFF' }}>
                What Powers the <span className="gradient-text-blue">Platform</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '3rem' }}>
              {techStack.map(ts => (
                <div key={ts.category} style={{
                  background: 'rgba(7,13,28,0.85)', border: `1px solid ${ts.color}18`,
                  borderRadius: 20, padding: '2rem', backdropFilter: 'blur(12px)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, fontSize: '1.125rem',
                      background: `${ts.color}15`, border: `1px solid ${ts.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{ts.icon}</div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1rem', color: ts.color }}>
                      {ts.category}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {ts.technologies.map(tech => (
                      <div key={tech} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: ts.color, opacity: 0.6 }} />
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem', color: '#8BA3CC' }}>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>Discuss Your Architecture →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
