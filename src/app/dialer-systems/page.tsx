import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Dialer Systems — Voice Era Tech LLC',
  description: 'Predictive, Power, Progressive, Preview, VoIP, SIP, and Multi-Tenant dialer platforms engineered for modern call centers.',
};

const dialerTypes = [
  { name: 'Predictive Dialer', icon: '🎯', color: '#0284C7', href: '/dialer-systems/predictive', desc: 'AI-optimized outbound calling with intelligent pacing algorithms to eliminate agent idle time.' },
  { name: 'Power Dialer', icon: '⚡', color: '#2563EB', href: '/dialer-systems/power', desc: 'High-speed agent-driven calling with zero dropped calls and one-click voicemail drops.' },
  { name: 'Progressive Dialer', icon: '📈', color: '#059669', href: '/dialer-systems/progressive', desc: 'Controlled automated dialing that reserves an agent before placing the outbound dial.' },
  { name: 'Preview Dialer', icon: '👁️', color: '#6366F1', href: '/dialer-systems/preview', desc: 'Review complete CRM dossiers, lead history, and notes before initiating high-value calls.' },
  { name: 'VoIP Dialer Infrastructure', icon: '🌐', color: '#D97706', href: '/dialer-systems/voip', desc: 'Enterprise SIP trunking with multi-carrier failover, low jitter, and global DID numbers.' },
  { name: 'SIP Protocol Dialer', icon: '📡', color: '#DC2626', href: '/dialer-systems/sip', desc: 'High-throughput SIP signaling engine supporting 1,000+ Calls Per Second (CPS).' },
  { name: 'Multi-Tenant Dialer Platform', icon: '🏢', color: '#0284C7', href: '/dialer-systems/multi-tenant', desc: 'Scalable multi-organization dialer platform with complete data isolation for BPOs.' },
  { name: 'Custom Dialer Engineering', icon: '⚙️', color: '#6366F1', href: '/dialer-systems/custom', desc: 'Tailor-made dialer architecture engineered from scratch for proprietary business workflows.' },
  { name: 'Dialer Integrations & APIs', icon: '🔗', color: '#059669', href: '/dialer-systems/integrations', desc: 'Bi-directional real-time sync with Salesforce, HubSpot, Zoho, and custom webhooks.' },
];

export default function DialerSystemsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <section style={{ position: 'relative', paddingBottom: '3.5rem' }}>
          <div className="container-xl" style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Telecommunications Core</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              Enterprise Dialer<br />
              <span className="gradient-text-blue">Systems & Architectures</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 620, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Deploy scalable dialer infrastructure designed to help call centers manage outbound campaigns, agent routing, and performance from one unified platform.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-magnetic btn-primary">
                Consult with a Dialer Architect →
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '2rem 0 4rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {dialerTypes.map(d => (
                <Link key={d.name} href={d.href} className="node-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{d.icon}</div>
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.65rem' }}>
                    {d.name}
                  </h2>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1.25rem' }}>
                    {d.desc}
                  </p>
                  <span style={{ color: '#2563EB', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>
                    Explore Specifications →
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
