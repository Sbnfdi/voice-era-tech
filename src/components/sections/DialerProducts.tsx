'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 'predictive',
    name: 'Predictive Dialer',
    icon: '🎯',
    color: '#0284C7',
    tagline: 'Maximize agent productivity with AI-driven pacing',
    description: 'Automatically calculates the optimal dial rate based on agent availability, answer rates, and campaign goals to minimize idle time between calls.',
    benefits: ['Automated pacing algorithms', 'Real-time answer rate analysis', 'Campaign-level drop guardrails', 'Agent skill-based routing', 'AMD machine detection'],
    href: '/dialer-systems/predictive',
    ideal: 'High-volume outbound call centers',
  },
  {
    id: 'power',
    name: 'Power Dialer',
    icon: '⚡',
    color: '#2563EB',
    tagline: 'High-speed dialing with full agent control',
    description: 'Dials one or more leads per available agent sequentially. Agents take control the moment a connection is made — zero dropped calls.',
    benefits: ['1:1 or configurable dialing ratios', 'Instant agent connection', 'Call scripts & dispositions', 'One-click voicemail drop', 'CRM field push/pull'],
    href: '/dialer-systems/power',
    ideal: 'Sales teams and direct response campaigns',
  },
  {
    id: 'progressive',
    name: 'Progressive Dialer',
    icon: '📈',
    color: '#059669',
    tagline: 'Controlled dialing that waits for agent readiness',
    description: 'Initiates the next call only when an agent is reserved and viewing the lead profile, ensuring 100% human presence on connect.',
    benefits: ['Zero abandoned call risk', 'Agent-readiness triggers', 'Regulated industry compliant', 'Automated recording controls', 'Real-time DNC list scrubbing'],
    href: '/dialer-systems/progressive',
    ideal: 'Compliance-sensitive industries',
  },
  {
    id: 'preview',
    name: 'Preview Dialer',
    icon: '👁️',
    color: '#6366F1',
    tagline: 'Full lead context before every call',
    description: 'Presents agents with complete lead intelligence — prior interactions, CRM history, notes — before initiating the call.',
    benefits: ['Full lead profile display', 'CRM history before dial', 'Agent-controlled timing', 'Interactive scripting flows', 'Next-best-action guidance'],
    href: '/dialer-systems/preview',
    ideal: 'Complex B2B sales and wealth advisory',
  },
  {
    id: 'voip',
    name: 'VoIP / SIP Dialer',
    icon: '🌐',
    color: '#D97706',
    tagline: 'Carrier-grade Internet telephony infrastructure',
    description: 'Deploy professional telephony over IP networks using enterprise-grade SIP trunking, redundant CLECs, and global DID pools.',
    benefits: ['Multi-carrier SIP trunking', 'Global DID number management', 'Failover routing & SBCs', 'Call quality MOS monitoring', 'STIR/SHAKEN A-Attestation'],
    href: '/dialer-systems/voip',
    ideal: 'Organizations requiring dedicated VoIP infrastructure',
  },
  {
    id: 'multitenant',
    name: 'Multi-Tenant Dialer',
    icon: '🏢',
    color: '#DC2626',
    tagline: 'Scalable dialer infrastructure for multiple organizations',
    description: 'Host hundreds of independent call center environments on a single platform with full data isolation, custom branding, and per-tenant billing.',
    benefits: ['Full data and schema isolation', 'Per-tenant campaign controls', 'Custom white-label branding', 'Centralized superadmin panel', 'Usage-based CDR billing'],
    href: '/dialer-systems/multi-tenant',
    ideal: 'BPOs, agencies, and SaaS resellers',
  },
];

export default function DialerProducts() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section className="section-padding" style={{ background: '#F8FAFC', position: 'relative' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Dialer Products</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            The Right Dialer for<br />
            <span className="gradient-text-blue">Every Campaign Strategy</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#475569', maxWidth: 540, margin: '0 auto' }}>
            Six specialized dialer architectures engineered for specific outreach velocity, compliance rules, and team structures.
          </p>
        </div>

        {/* Product selector tabs */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          marginBottom: '2.5rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
        }}>
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '100px',
                border: `1.5px solid ${i === active ? '#2563EB' : 'rgba(226, 232, 240, 0.9)'}`,
                background: i === active ? '#FFFFFF' : '#F1F5F9',
                color: i === active ? '#2563EB' : '#475569',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: i === active ? '0 4px 14px rgba(37, 99, 235, 0.15)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span>{p.icon}</span>
              {p.name}
            </button>
          ))}
        </div>

        {/* Active product detail card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          background: '#FFFFFF',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          borderRadius: 24,
          padding: '3rem',
          boxShadow: 'var(--shadow-card)',
        }} className="flex flex-col md:grid">
          {/* Left info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: 58,
                height: 58,
                borderRadius: 16,
                background: 'rgba(37, 99, 235, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
              }}>
                {product.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#0F172A', marginBottom: '2px' }}>
                  {product.name}
                </h3>
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  color: '#2563EB',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}>
                  Ideal for: {product.ideal}
                </span>
              </div>
            </div>

            <p style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#0F172A',
              marginBottom: '1rem',
            }}>
              &ldquo;{product.tagline}&rdquo;
            </p>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {product.description}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={product.href} className="btn-magnetic btn-primary" style={{ fontSize: '0.875rem' }}>
                Learn More About {product.name} →
              </Link>
              <Link href="/contact" className="btn-magnetic btn-secondary" style={{ fontSize: '0.875rem' }}>
                Request Live Demo
              </Link>
            </div>
          </div>

          {/* Right — benefits */}
          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: '#64748B',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              fontWeight: 700,
            }}>
              Key Capabilities & Features
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {product.benefits.map((b) => (
                <div
                  key={b}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1.15rem',
                    borderRadius: 12,
                    background: '#F8FAFC',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                  }}
                >
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: '#2563EB',
                    flexShrink: 0,
                  }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.925rem', color: '#0F172A', fontWeight: 600 }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
