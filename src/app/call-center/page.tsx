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
  { name: 'Inbound Call Centers', href: '/call-center/inbound', icon: '📲', desc: 'Skills-based routing, queue management, multi-level IVR, and agent dashboards for support operations.' },
  { name: 'Outbound Call Centers', href: '/call-center/outbound', icon: '📡', desc: 'Campaign management, dialer systems, and speed-to-lead tools for high-volume sales outreach.' },
  { name: 'Blended Call Centers', href: '/call-center/blended', icon: '🔄', desc: 'Seamlessly balance inbound support spikes and outbound campaigns from a single agent interface.' },
  { name: 'Omnichannel Contact Center', href: '/call-center/contact-center', icon: '🏢', desc: 'Unified voice, SMS, WhatsApp, web chat, and email communication hub for modern customer engagement.' },
  { name: 'Agent Management & QA', href: '/call-center/agent-management', icon: '👤', desc: 'Real-time floor HUD, silent whisper coaching, call barging, and AI quality assurance scoring.' },
  { name: 'Campaign Management', href: '/call-center/campaigns', icon: '🎯', desc: 'Create, schedule, segment, and optimize outbound campaigns with comprehensive reporting.' },
  { name: 'Call Analytics & BI', href: '/call-center/analytics', icon: '📊', desc: 'Sub-second real-time telemetry dashboards covering call volume, agent handle time, and MOS quality.' },
  { name: 'CRM Integration & CTI', href: '/call-center/crm', icon: '🗂️', desc: 'Bidirectional sync — Salesforce, HubSpot, Zoho, and custom CRM systems — on every call.' },
];

export default function CallCenterPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Operations Suite</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              Complete Call Center <span className="gradient-text-blue">Solutions</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              From inbound customer service desks to high-volume outbound sales operations — Voice Era Tech delivers the technology infrastructure your floor requires.
            </p>
            <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
              Discuss Your Call Center Architecture →
            </Link>
          </div>
        </section>

        <section style={{ padding: '0 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {solutions.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="node-card"
                  style={{
                    padding: '2rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#F4F6F8', marginBottom: '0.5rem' }}>
                      {s.name}
                    </h3>
                    <p style={{ color: '#9AA6B2', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                      {s.desc}
                    </p>
                  </div>
                  <span style={{ color: '#4C8DFF', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.8125rem' }}>
                    View Operations Module →
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
