'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    category: 'Dialer Infrastructure',
    icon: '📡',
    items: ['Predictive Dialer Engine', 'High-Speed Power Dialers', 'Progressive & Preview Modes', 'Global VoIP / SIP Trunking', 'Multi-Tenant Architecture', 'Custom Dialer Development'],
    href: '/dialer-systems',
  },
  {
    category: 'Call Center Platforms',
    icon: '🏢',
    items: ['Skills-Based ACD & IVR', 'Outbound Sales Campaigns', 'Dynamic Queue Blending', 'Omnichannel Contact Center', 'Supervisor Live Floor HUD', 'Real-Time Floor Telemetry'],
    href: '/call-center',
  },
  {
    category: 'Conversational Voice AI',
    icon: '🤖',
    items: ['Sub-600ms Voice Agents', 'Autonomous Outbound Calling', '24/7 AI Customer Support', 'Dynamic BANT Lead Scoring', 'Calendar Appointment AI', 'Automated Post-Call ACW'],
    href: '/ai-solutions',
  },
  {
    category: 'Cloud Architecture',
    icon: '☁️',
    items: ['Multi-Region High Availability', 'Zero-Downtime Migration', 'Bare-Metal Server Fleet', 'SOC-2 / HIPAA Security', '24/7 MOS Telemetry NOC', 'DevOps & Kubernetes CI/CD'],
    href: '/cloud-it',
  },
  {
    category: 'Software Engineering',
    icon: '💻',
    items: ['Enterprise Web Engineering', 'Scalable Web Applications', 'B2B SaaS Development', 'Bespoke Business Software', 'Custom CRM Systems', 'REST & GraphQL APIs'],
    href: '/development',
  },
  {
    category: 'CRM & Integrations',
    icon: '🔗',
    items: ['Salesforce OpenCTI Sync', 'HubSpot & Zoho Integration', 'Bi-directional Webhooks', 'Embedded Softphone CTI', 'Custom ETL Data Pipelines', 'Legacy PBX Bridges'],
    href: '/call-center/crm',
  },
];

export default function ServicesMatrix() {
  const [expanded, setExpanded] = useState<string | null>(services[0].category);

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
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Full-Stack Ecosystem</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
            Comprehensive Enterprise <span className="gradient-text-blue">Technology Services</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540, margin: '0 auto' }}>
            From high-throughput dialer clusters to bespoke software and cloud architecture — Voice Era Tech delivers unified engineering.
          </p>
        </div>

        {/* Matrix Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {services.map((svc) => {
            const isExpanded = expanded === svc.category;
            return (
              <div
                key={svc.category}
                style={{
                  background: isExpanded ? '#202B38' : '#151D27',
                  border: `1px solid ${isExpanded ? 'rgba(76, 141, 255, 0.28)' : 'rgba(76, 141, 255, 0.1)'}`,
                  borderRadius: 16,
                  padding: '1.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isExpanded ? '0 16px 40px rgba(0,0,0,0.4)' : 'none',
                }}
                onClick={() => setExpanded(isExpanded ? null : svc.category)}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: '#0B0F14',
                        border: '1px solid rgba(49, 87, 213, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                      }}
                    >
                      {svc.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontWeight: 700,
                          fontSize: '1.0625rem',
                          color: '#F4F6F8',
                          marginBottom: '2px',
                        }}
                      >
                        {svc.category}
                      </h3>
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#4C8DFF' }}>
                        {svc.items.length} Capabilities
                      </span>
                    </div>
                  </div>

                  <span style={{ color: '#4C8DFF', fontSize: '1rem', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                    ▼
                  </span>
                </div>

                {/* Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                  {svc.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem',
                        padding: '0.45rem 0.625rem',
                        borderRadius: 6,
                        background: isExpanded ? 'rgba(11, 15, 20, 0.4)' : 'transparent',
                      }}
                    >
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#4C8DFF' }} />
                      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.8125rem', color: '#9AA6B2' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(76, 141, 255, 0.08)' }}>
                  <Link
                    href={svc.href}
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 600,
                      fontSize: '0.8125rem',
                      color: '#4C8DFF',
                      textDecoration: 'none',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Category Architecture →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
