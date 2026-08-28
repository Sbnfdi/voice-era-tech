'use client';

import { useState } from 'react';
import Link from 'next/link';

const industries = [
  { id: 'bpo', label: 'BPOs & Contact Centers', icon: '🏢', href: '/industries/bpo', solution: 'Multi-Tenant High-Density Telephony', desc: 'Host hundreds of client campaigns with multi-tenant isolation, automated per-minute billing, and white-label client dashboards.' },
  { id: 'financial', label: 'Financial Services & Debt Recovery', icon: '📈', href: '/industries/financial-services', solution: 'FDCPA & TCPA Compliant Dialing', desc: 'Progressive and preview dialing engines with strict zero-drop guarantees, calling window enforcement, and PCI-DSS audio redaction.' },
  { id: 'healthcare', label: 'Healthcare & Patient Outreach', icon: '🏥', href: '/industries/healthcare', solution: 'HIPAA-Compliant Patient Telephony', desc: 'Secure clinical recall, automated procedure reminders, and emergency on-call physician routing with signed BAAs.' },
  { id: 'realestate', label: 'Real Estate & Brokerages', icon: '🏠', href: '/industries/real-estate', solution: 'Speed-to-Lead Instant Dialing', desc: 'Bridge agents with online buyer leads in under 30 seconds with local presence caller ID and MLS property screen-pops.' },
  { id: 'insurance', label: 'Insurance Agencies & Carriers', icon: '🛡️', href: '/industries/insurance', solution: 'Multi-Line Power Dialing', desc: 'Dial 2 to 3 lines per agent to cut through unanswered calls, record policy disclosures, and live-transfer qualified prospects.' },
  { id: 'ecommerce', label: 'E-Commerce & DTC Brands', icon: '🛒', href: '/industries/ecommerce', solution: 'Omnichannel Retention & Support', desc: '24/7 AI order lookup IVR, two-way SMS cart recovery, and seamless Shopify customer timeline synchronization.' },
];

export default function IndustrySection() {
  const [activeId, setActiveId] = useState('bpo');
  const active = industries.find((i) => i.id === activeId)!;

  return (
    <section
      style={{
        background: '#0B0F14',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Vertical Expertise</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
            Engineered for Your <span className="gradient-text-blue">Specific Industry</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540 }}>
            Telecom and compliance regulations vary across business models. Voice Era Tech delivers tailored architectures for high-yield operations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left Column — Industry Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {industries.map((ind) => {
              const isSelected = activeId === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.875rem 1.25rem',
                    borderRadius: 10,
                    border: `1px solid ${isSelected ? '#3157D5' : 'transparent'}`,
                    background: isSelected ? '#151D27' : 'transparent',
                    color: isSelected ? '#F4F6F8' : '#9AA6B2',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      (e.currentTarget as HTMLElement).style.color = '#F4F6F8';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(21, 29, 39, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      (e.currentTarget as HTMLElement).style.color = '#9AA6B2';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.125rem' }}>{ind.icon}</span>
                    <span>{ind.label}</span>
                  </div>
                  {isSelected && <span style={{ color: '#4C8DFF', fontSize: '0.875rem' }}>→</span>}
                </button>
              );
            })}
          </div>

          {/* Right Column — Active Industry Detail Surface */}
          <div
            style={{
              background: '#202B38',
              border: '1px solid rgba(76, 141, 255, 0.16)',
              borderRadius: 20,
              padding: '2.5rem',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
            }}
          >
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
                marginBottom: '1.5rem',
              }}
            >
              {active.icon}
            </div>

            <div className="eyebrow" style={{ color: '#4C8DFF', marginBottom: '0.5rem' }}>
              {active.label}
            </div>

            <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#F4F6F8', marginBottom: '1rem' }}>
              {active.solution}
            </h3>

            <p style={{ color: '#9AA6B2', fontSize: '0.9375rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 560 }}>
              {active.desc}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={active.href} className="btn-primary" style={{ fontSize: '0.875rem' }}>
                View Industry Blueprint →
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
                Discuss Your Deployment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
