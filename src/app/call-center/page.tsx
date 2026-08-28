import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Call Center Solutions — Inbound, Outbound & Blended Operations',
  description: 'Complete call center solutions: automatic call distribution (ACD), omnichannel agent management, campaigns, analytics, and CRM integration.',
};

const solutions = [
  { name: 'Inbound Call Centers', icon: '📲', color: '#059669', href: '/call-center/inbound', desc: 'Skill-based routing, queue management, dynamic IVR, and agent dashboards for high-CSAT support.' },
  { name: 'Outbound Call Centers', icon: '📡', color: '#2563EB', href: '/call-center/outbound', desc: 'Campaign orchestration, multi-mode dialers, and local presence caller IDs for high-velocity sales.' },
  { name: 'Blended Call Centers', icon: '🔄', color: '#0284C7', href: '/call-center/blended', desc: 'Seamlessly balance inbound queues and outbound campaigns in a single agent interface.' },
  { name: 'Contact Center Solutions', icon: '🏢', color: '#6366F1', href: '/call-center/contact-center', desc: 'Unified voice, SMS, email, WhatsApp, and web chat into one synchronized customer timeline.' },
  { name: 'Agent Management', icon: '👤', color: '#D97706', href: '/call-center/agent-management', desc: 'Live floor monitoring, whisper coaching, silent barging, automated scorecards, and scheduling.' },
  { name: 'Campaign Management', icon: '🎯', color: '#DC2626', href: '/call-center/campaigns', desc: 'Granular control over dialing pace, lead lists, caller IDs, and automated recycling rules.' },
  { name: 'Call Analytics', icon: '📊', color: '#0284C7', href: '/call-center/analytics', desc: 'Real-time telemetry, 50+ CDR fields, speech analytics, and custom business intelligence exports.' },
  { name: 'CRM Integration', icon: '🗂️', color: '#059669', href: '/call-center/crm', desc: 'Two-way synchronization with Salesforce, HubSpot, Zoho, and custom CRM systems.' },
];

export default function CallCenterPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <section style={{ position: 'relative', paddingBottom: '3.5rem' }}>
          <div className="container-xl" style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Operations & Workforces</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              Complete Call Center<br />
              <span className="gradient-text-blue">Technology Solutions</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 620, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              From inbound customer service operations to high-volume outbound campaigns — Voice Era Tech delivers the connected infrastructure your team requires.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary">
              Discuss Your Call Center Setup →
            </Link>
          </div>
        </section>

        <section style={{ padding: '2rem 0 4rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {solutions.map(s => (
                <Link key={s.name} href={s.href} className="node-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.65rem' }}>
                    {s.name}
                  </h2>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1.25rem' }}>
                    {s.desc}
                  </p>
                  <span style={{ color: '#2563EB', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>
                    View Operation Details →
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
