import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dialer Systems — Predictive, Power, Progressive, Preview, VoIP & SIP',
  description: 'Enterprise dialer systems from Voice Era Tech LLC. Deploy predictive, power, progressive, preview, VoIP and SIP dialers for your call center operations.',
};

const dialerTypes = [
  { name: 'Predictive Dialer', icon: '🎯', color: '#0066FF', href: '/dialer-systems/predictive', desc: 'AI-optimized outbound calling with intelligent pacing algorithms.' },
  { name: 'Power Dialer', icon: '⚡', color: '#00D4FF', href: '/dialer-systems/power', desc: 'High-speed agent-driven calling with maximum talk-time.' },
  { name: 'Progressive Dialer', icon: '📈', color: '#00E5A0', href: '/dialer-systems/progressive', desc: 'Controlled automated dialing based on agent availability.' },
  { name: 'Preview Dialer', icon: '👁️', color: '#8B5CF6', href: '/dialer-systems/preview', desc: 'Review full lead context before every call.' },
  { name: 'VoIP Dialer', icon: '🌐', color: '#FFB800', href: '/dialer-systems/voip', desc: 'Internet-based calling with enterprise SIP trunking.' },
  { name: 'SIP Dialer', icon: '📡', color: '#FF6B35', href: '/dialer-systems/sip', desc: 'Session Initiation Protocol-based call infrastructure.' },
  { name: 'Multi-Tenant Dialer', icon: '🏢', color: '#4A9EFF', href: '/dialer-systems/multi-tenant', desc: 'Scalable infrastructure for multiple organizations.' },
  { name: 'Custom Dialer', icon: '⚙️', color: '#6B21E8', href: '/dialer-systems/custom', desc: 'Purpose-built dialer solutions for unique requirements.' },
  { name: 'Dialer Integrations', icon: '🔗', color: '#00E5A0', href: '/dialer-systems/integrations', desc: 'Connect your dialer to CRMs, APIs and business tools.' },
];

export default function DialerSystemsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,102,255,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Dialer Technology</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              Enterprise Dialer<br />
              <span className="gradient-text-blue">Systems</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Deploy scalable dialer infrastructure designed to help call centers manage campaigns, agents, routing and performance from one connected platform.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>Talk to a Dialer Expert</span>
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {dialerTypes.map(d => (
                <Link key={d.name} href={d.href} className="node-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{d.icon}</div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#E8EEFF', marginBottom: '0.5rem' }}>
                    {d.name}
                  </div>
                  <p style={{ color: '#8BA3CC', fontSize: '0.875rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1rem' }}>
                    {d.desc}
                  </p>
                  <span style={{ color: d.color, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem' }}>
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
