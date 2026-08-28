'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 'predictive',
    name: 'Predictive Dialer',
    icon: '🎯',
    color: '#0066FF',
    tagline: 'Maximize agent productivity with AI-driven pacing',
    description: 'Automatically calculates the optimal dial rate based on agent availability, answer rates and campaign goals. Minimizes idle time between calls.',
    benefits: ['Automated pacing algorithms', 'Real-time answer rate analysis', 'Campaign-level controls', 'Agent skill-based routing', 'Drop rate management'],
    href: '/dialer-systems/predictive',
    ideal: 'High-volume outbound call centers',
  },
  {
    id: 'power',
    name: 'Power Dialer',
    icon: '⚡',
    color: '#00D4FF',
    tagline: 'High-speed dialing with full agent control',
    description: 'Dials one or more leads per available agent simultaneously. Agents take control the moment a connection is made — no idle prediction needed.',
    benefits: ['1:1 or N:1 dialing ratios', 'Instant agent connection', 'Call scripts & dispositions', 'Lead preview capability', 'CRM field push/pull'],
    href: '/dialer-systems/power',
    ideal: 'Sales teams and direct response campaigns',
  },
  {
    id: 'progressive',
    name: 'Progressive Dialer',
    icon: '📈',
    color: '#00E5A0',
    tagline: 'Controlled dialing that waits for agent readiness',
    description: 'Initiates the next call only when an agent becomes available, ensuring every connected call has an agent ready to speak — no dropped calls.',
    benefits: ['Zero abandoned call risk', 'Agent-readiness triggers', 'Regulated industry compliant', 'Custom wait-time rules', 'DNC list scrubbing'],
    href: '/dialer-systems/progressive',
    ideal: 'Compliance-sensitive industries',
  },
  {
    id: 'preview',
    name: 'Preview Dialer',
    icon: '👁️',
    color: '#8B5CF6',
    tagline: 'Full lead context before every call',
    description: 'Presents agents with complete lead information — prior interactions, CRM history, notes — before initiating the call. Perfect for relationship-driven sales.',
    benefits: ['Full lead profile display', 'CRM history before dial', 'Agent-controlled timing', 'Custom disposition flows', 'Call recording & notes'],
    href: '/dialer-systems/preview',
    ideal: 'Complex sales and account management',
  },
  {
    id: 'voip',
    name: 'VoIP / SIP Dialer',
    icon: '🌐',
    color: '#FFB800',
    tagline: 'Internet-based calling infrastructure',
    description: 'Deploy professional telephony over IP networks using enterprise-grade SIP trunking. Manage DIDs, call routing, failover and carrier redundancy.',
    benefits: ['Multi-carrier SIP trunking', 'DID number management', 'Failover routing', 'Call quality monitoring', 'Global coverage options'],
    href: '/dialer-systems/voip',
    ideal: 'Organizations requiring VoIP infrastructure',
  },
  {
    id: 'multitenant',
    name: 'Multi-Tenant Dialer',
    icon: '🏢',
    color: '#FF6B35',
    tagline: 'Scalable dialer infrastructure for multiple organizations',
    description: 'Host multiple independent call center environments on a single platform with full data isolation, custom branding and per-tenant controls.',
    benefits: ['Full data isolation', 'Per-tenant campaign controls', 'Custom branding support', 'Centralized admin panel', 'Usage-based billing support'],
    href: '/dialer-systems/multi-tenant',
    ideal: 'BPOs and service providers',
  },
];

export default function DialerProducts() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section className="section-padding" style={{ background: 'rgba(7,13,28,0.95)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(0,102,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Dialer Products</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
            The Right Dialer for<br />
            <span className="gradient-text-blue">Every Campaign</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 520, margin: '0 auto' }}>
            Six specialized dialer types. Each built for specific calling strategies, compliance requirements and team structures.
          </p>
        </div>

        {/* Product selector tabs */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '3rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          scrollbarWidth: 'none',
        }}>
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.125rem',
                borderRadius: '100px',
                border: `1px solid ${i === active ? p.color + '55' : 'rgba(0,102,255,0.12)'}`,
                background: i === active ? `${p.color}15` : 'rgba(0,102,255,0.04)',
                color: i === active ? p.color : '#8BA3CC',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 500,
                fontSize: '0.875rem',
                cursor: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: i === active ? `0 0 20px ${p.color}20` : 'none',
              }}
            >
              <span>{p.icon}</span>
              {p.name}
            </button>
          ))}
        </div>

        {/* Active product detail */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          background: 'rgba(7,13,28,0.8)',
          border: `1px solid ${product.color}22`,
          borderRadius: 24,
          padding: '3rem',
          backdropFilter: 'blur(20px)',
          animation: 'fade-up 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: `${product.color}18`,
                border: `1px solid ${product.color}33`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                boxShadow: `0 0 30px ${product.color}25`,
              }}>
                {product.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#E8EEFF', marginBottom: '4px' }}>
                  {product.name}
                </h3>
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: '#4A6A99',
                  textTransform: 'uppercase',
                }}>
                  Ideal for: {product.ideal}
                </span>
              </div>
            </div>

            <p style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              color: product.color,
              marginBottom: '0.75rem',
              fontStyle: 'italic',
            }}>
              &ldquo;{product.tagline}&rdquo;
            </p>

            <p style={{ color: '#8BA3CC', fontSize: '0.9375rem', lineHeight: 1.75, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '2rem' }}>
              {product.description}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={product.href} className="btn-magnetic btn-primary" style={{ textDecoration: 'none', fontSize: '0.875rem' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>Learn More</span>
              </Link>
              <Link href="/contact" className="btn-magnetic btn-secondary" style={{ textDecoration: 'none', fontSize: '0.875rem' }}>
                Request Demo
              </Link>
            </div>
          </div>

          {/* Right — benefits */}
          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: '#4A6A99',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Key Capabilities
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {product.benefits.map((b, i) => (
                <div
                  key={b}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1rem',
                    borderRadius: 12,
                    background: 'rgba(0,102,255,0.04)',
                    border: '1px solid rgba(0,102,255,0.08)',
                    animation: `fade-up 0.3s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s both`,
                  }}
                >
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: product.color,
                    boxShadow: `0 0 8px ${product.color}`,
                    flexShrink: 0,
                  }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9375rem', color: '#E8EEFF', fontWeight: 500 }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>

            {/* Visual dial selector */}
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              borderRadius: 16,
              background: `${product.color}08`,
              border: `1px solid ${product.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.1em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Dialer Mode
                </div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, color: product.color, fontSize: '1rem' }}>
                  {product.name.replace(' Dialer', '')}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.375rem' }}>
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: i === active ? product.color : 'rgba(0,102,255,0.2)',
                      border: 'none',
                      cursor: 'none',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
