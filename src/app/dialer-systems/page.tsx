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
  { name: 'Predictive Dialer', icon: '🎯', href: '/dialer-systems/predictive', desc: 'AI-optimized outbound calling with intelligent statistical pacing algorithms.' },
  { name: 'Power Dialer', icon: '⚡', href: '/dialer-systems/power', desc: 'High-speed agent-driven calling with maximum active talk-time.' },
  { name: 'Progressive Dialer', icon: '📈', href: '/dialer-systems/progressive', desc: 'Controlled automated dialing based strictly on agent queue availability.' },
  { name: 'Preview Dialer', icon: '👁️', href: '/dialer-systems/preview', desc: 'Review comprehensive lead context and CRM history before placing every call.' },
  { name: 'VoIP Infrastructure', icon: '🌐', href: '/dialer-systems/voip', desc: 'Internet-based carrier-grade calling with international DID management.' },
  { name: 'SIP Trunking', icon: '📡', href: '/dialer-systems/sip', desc: 'High-density session initiation protocol call infrastructure and SBC gateways.' },
  { name: 'Multi-Tenant Dialer', icon: '🏢', href: '/dialer-systems/multi-tenant', desc: 'Scalable multi-client architecture for BPOs, agencies, and service providers.' },
  { name: 'Custom Dialer Solutions', icon: '⚙️', href: '/dialer-systems/custom', desc: 'Purpose-built dialer engineering tailored for proprietary enterprise workflows.' },
  { name: 'Dialer Integrations & APIs', icon: '🔗', href: '/dialer-systems/integrations', desc: 'Connect your dialer to CRMs, databases, and custom event webhooks.' },
];

export default function DialerSystemsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Telephony Portfolio</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              Enterprise Dialer <span className="gradient-text-blue">Systems</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Deploy scalable dialer infrastructure designed to help call centers manage campaigns, agents, carrier routing, and regulatory compliance from one unified platform.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
                Talk to a Dialer Expert →
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '0 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {dialerTypes.map((d) => (
                <Link
                  key={d.name}
                  href={d.href}
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.12)',
                    borderRadius: 16,
                    padding: '2rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#202B38';
                    el.style.borderColor = 'rgba(76, 141, 255, 0.3)';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#151D27';
                    el.style.borderColor = 'rgba(76, 141, 255, 0.12)';
                    el.style.transform = 'none';
                  }}
                >
                  <div>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{d.icon}</div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#F4F6F8', marginBottom: '0.5rem' }}>
                      {d.name}
                    </h3>
                    <p style={{ color: '#9AA6B2', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                      {d.desc}
                    </p>
                  </div>
                  <span style={{ color: '#4C8DFF', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.8125rem' }}>
                    View System Architecture →
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
