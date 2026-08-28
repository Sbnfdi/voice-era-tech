import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Call Center Solutions — Inbound, Outbound & Blended Contact Centers',
  description: 'Voice Era Tech call center technology: inbound and outbound call centers, blended operations, agent management, campaign control and analytics.',
};

const solutions = [
  { name: 'Inbound Call Centers', icon: '📲', color: '#00E5A0', desc: 'Skill-based routing, queue management, IVR and agent dashboards for inbound customer service operations.' },
  { name: 'Outbound Call Centers', icon: '📡', color: '#0066FF', desc: 'Campaign management, dialer systems and agent tools for high-volume outbound calling operations.' },
  { name: 'Blended Call Centers', icon: '🔄', color: '#00D4FF', desc: 'Seamlessly manage inbound and outbound calling from a single agent interface and platform.' },
  { name: 'Contact Center Solutions', icon: '🏢', color: '#8B5CF6', desc: 'Unified voice, messaging and digital contact center infrastructure for modern customer engagement.' },
  { name: 'Agent Management', icon: '👤', color: '#FFB800', desc: 'Real-time monitoring, skill assignment, performance tracking and automated disposition flows for agents.' },
  { name: 'Campaign Management', icon: '🎯', color: '#FF6B35', desc: 'Create, schedule, segment and optimize outbound calling campaigns with full reporting and controls.' },
  { name: 'Call Analytics', icon: '📊', color: '#4A9EFF', desc: 'Real-time and historical analytics dashboards covering call volume, agent performance, conversion and trends.' },
  { name: 'CRM Integration', icon: '🗂️', color: '#00E5A0', desc: 'Bidirectional CRM sync — Salesforce, HubSpot, Zoho and custom CRM systems — on every call.' },
];

export default function CallCenterPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,160,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Call Center Technology</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              Complete Call Center<br />
              <span className="gradient-text-blue">Solutions</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              From inbound customer service operations to high-volume outbound campaigns — Voice Era Tech delivers the technology infrastructure your call center requires.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Discuss Your Call Center</span>
            </Link>
          </div>
        </section>
        <section style={{ padding: '4rem 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {solutions.map(s => (
                <div key={s.name} className="node-card">
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#E8EEFF', marginBottom: '0.5rem' }}>{s.name}</div>
                  <p style={{ color: '#8BA3CC', fontSize: '0.875rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1rem' }}>{s.desc}</p>
                  <Link href="/contact" style={{ color: s.color, textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem' }}>Learn more →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
