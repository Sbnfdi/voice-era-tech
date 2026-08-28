'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 'predictive',
    name: 'Predictive Dialer',
    icon: '🎯',
    badge: 'AI Core',
    tagline: 'Maximize agent productivity with statistical pacing',
    description: 'Automatically calculates the optimal dial rate based on real-time agent availability, carrier answer rates, and queue objectives. Minimizes idle time while enforcing strict TCPA compliance.',
    benefits: ['Statistical pacing algorithms', 'Sub-450ms Answering Machine Detection', 'Campaign-level drop rate controls', 'Agent skill-based routing', 'Real-time DNC list scrubbing'],
    href: '/dialer-systems/predictive',
    ideal: 'High-volume outbound call centers & sales teams',
  },
  {
    id: 'power',
    name: 'Power Dialer',
    icon: '⚡',
    badge: 'Zero Drop',
    tagline: 'High-speed automated dialing with guaranteed live presence',
    description: 'Dials one or more leads per available agent the instant their prior call finishes. Agents take control the moment a connection is made — eliminating silent pauses and abandonment risk.',
    benefits: ['1:1 to 3:1 dialing ratios', 'Instant agent connection', '1-Click call dispositions & notes', 'Automated voicemail drop', 'Local presence caller ID'],
    href: '/dialer-systems/power',
    ideal: 'Inside sales teams & direct outreach campaigns',
  },
  {
    id: 'progressive',
    name: 'Progressive Dialer',
    icon: '📈',
    badge: 'Compliant',
    tagline: 'Controlled automated dialing waiting strictly for agent readiness',
    description: 'Initiates the next outbound call only when an agent is verified available in the queue, ensuring every connected call has an agent ready to speak with zero dropped calls.',
    benefits: ['Zero abandoned call guarantee', 'FDCPA & regulatory compliance', 'Dual-channel PCI-DSS recording', 'Automated cadence retry logic', 'CRM contact timeline sync'],
    href: '/dialer-systems/progressive',
    ideal: 'Collections, healthcare & financial services',
  },
  {
    id: 'preview',
    name: 'Preview Dialer',
    icon: '👁️',
    badge: 'Context First',
    tagline: 'Comprehensive lead intelligence before every dial',
    description: 'Presents agents with complete lead intelligence — prior conversation history, CRM notes, and custom playbooks — before initiating the call. Perfect for relationship-driven consultative selling.',
    benefits: ['Full CRM profile display', 'Configurable preview countdown timers', 'Agent-controlled dial timing', 'Skip & reschedule logic', 'Historical interaction logs'],
    href: '/dialer-systems/preview',
    ideal: 'Enterprise B2B sales & account management',
  },
  {
    id: 'voip',
    name: 'VoIP & SIP Telephony',
    icon: '🌐',
    badge: 'Tier-1 Core',
    tagline: 'Carrier-grade Voice-over-IP cloud infrastructure',
    description: 'Deploy professional telephony over global IP networks using enterprise SIP trunking. Manage international DIDs, call routing, carrier failover, and real-time MOS audio scoring.',
    benefits: ['Multi-carrier Tier-1 redundancy', 'Global DID number management', 'Sub-35ms low-latency audio', 'TLS/SRTP end-to-end encryption', 'Real-time MOS jitter tracking'],
    href: '/dialer-systems/voip',
    ideal: 'Telecom operators & global enterprise networks',
  },
  {
    id: 'multitenant',
    name: 'Multi-Tenant Dialer',
    icon: '🏢',
    badge: 'White-Label',
    tagline: 'Scalable dialer infrastructure for BPOs and agencies',
    description: 'Host multiple independent client call centers on a single unified platform with complete data isolation, white-label branding, custom domains, and automated usage billing.',
    benefits: ['Strict database & media isolation', 'Per-tenant campaign controls', 'Full white-label portal & branding', 'Automated per-minute/seat billing', '4-tier role-based access control'],
    href: '/dialer-systems/multi-tenant',
    ideal: 'BPOs, contact center agencies & service providers',
  },
];

export default function DialerProducts() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section
      id="dialer-products"
      style={{
        background: '#151D27',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(76, 141, 255, 0.08)',
        borderBottom: '1px solid rgba(76, 141, 255, 0.08)',
      }}
    >
      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Dialer Portfolio</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
            The Right Dialer for <span className="gradient-text-blue">Every Campaign</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540, margin: '0 auto' }}>
            Six specialized dialer architectures engineered for specific pacing requirements, compliance rules, and team structures.
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.625rem',
            marginBottom: '2.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            scrollbarWidth: 'none',
          }}
        >
          {products.map((p, i) => {
            const isSelected = i === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.6875rem 1.25rem',
                  borderRadius: 10,
                  border: `1px solid ${isSelected ? '#3157D5' : 'rgba(76, 141, 255, 0.12)'}`,
                  background: isSelected ? '#202B38' : 'rgba(11, 15, 20, 0.6)',
                  color: isSelected ? '#F4F6F8' : '#9AA6B2',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isSelected ? '0 4px 16px rgba(49, 87, 213, 0.2)' : 'none',
                }}
              >
                <span>{p.icon}</span>
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Active Product Showcase Surface */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '3.5rem',
            background: '#202B38',
            border: '1px solid rgba(76, 141, 255, 0.16)',
            borderRadius: 20,
            padding: '3rem',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Left Column — Architecture & Detail */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 14,
                  background: '#151D27',
                  border: '1px solid rgba(49, 87, 213, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                }}
              >
                {product.icon}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2px' }}>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.375rem', color: '#F4F6F8' }}>
                    {product.name}
                  </h3>
                  <span
                    style={{
                      padding: '0.2rem 0.5rem',
                      borderRadius: '100px',
                      background: 'rgba(76, 141, 255, 0.1)',
                      border: '1px solid rgba(76, 141, 255, 0.25)',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.625rem',
                      color: '#4C8DFF',
                    }}
                  >
                    {product.badge}
                  </span>
                </div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', color: '#9AA6B2' }}>
                  Target: {product.ideal}
                </div>
              </div>
            </div>

            <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1rem', fontWeight: 600, color: '#4C8DFF', marginBottom: '0.75rem' }}>
              &ldquo;{product.tagline}&rdquo;
            </p>

            <p style={{ color: '#9AA6B2', fontSize: '0.9375rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              {product.description}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={product.href} className="btn-primary" style={{ fontSize: '0.875rem' }}>
                View Architecture Specs →
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
                Request Live Demo
              </Link>
            </div>
          </div>

          {/* Right Column — Key Capabilities */}
          <div>
            <div
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                color: '#4C8DFF',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Enterprise Capabilities
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {product.benefits.map((b) => (
                <div
                  key={b}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1.25rem',
                    borderRadius: 10,
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.1)',
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#3AAFA9',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem', color: '#F4F6F8', fontWeight: 500 }}>
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
