'use client';

import { useState } from 'react';
import Link from 'next/link';

const stackComponents = [
  { id: 'dialer', label: 'Predictive & Power Dialer', icon: '📡', layer: 'Telephony Engine', technologies: ['SIP Trunking', 'Adaptive Pacing', 'AMD Detection', 'DNC Scrubbing'] },
  { id: 'callcenter', label: 'Inbound ACD & IVR', icon: '🏢', layer: 'Queue Management', technologies: ['Skills-Based Routing', 'Multi-Tier IVR', 'Virtual Hold', 'Supervisor HUD'] },
  { id: 'ai', label: 'Voice AI Agents', icon: '🤖', layer: 'Conversational Intelligence', technologies: ['Sub-600ms NLU', 'Voice Synthesis', 'Lead Qualification', 'Appointment Booking'] },
  { id: 'crm', label: 'CRM & CTI Sync', icon: '🗂️', layer: 'Data Synchronization', technologies: ['Salesforce CTI', 'HubSpot / Zoho Sync', 'Bi-directional Webhooks', 'Screen-Pops'] },
  { id: 'cloud', label: 'Cloud Infrastructure', icon: '☁️', layer: 'High Availability', technologies: ['Multi-Region AWS/GCP', 'Bare-Metal Clusters', 'Kubernetes CI/CD', '24/7 MOS Telemetry'] },
  { id: 'software', label: 'Custom Web & Software', icon: '💻', layer: 'Application Engineering', technologies: ['Next.js Frontends', 'Custom Softphone SDKs', 'REST / GraphQL APIs', 'Tailored Portals'] },
];

export default function StackBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['dialer', 'callcenter', 'crm']));

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedList = stackComponents.filter((c) => selected.has(c.id));

  return (
    <section
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
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Stack Configurator</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
            Build Your Enterprise <span className="gradient-text-blue">Technology Stack</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540, margin: '0 auto' }}>
            Select the operational modules your organization requires to see your recommended architecture blueprint.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
          {/* Left Column — Selection Grid */}
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
              Select Architecture Layers
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {stackComponents.map((item) => {
                const isSelected = selected.has(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem 1.25rem',
                      borderRadius: 12,
                      background: isSelected ? '#202B38' : 'rgba(11, 15, 20, 0.5)',
                      border: `1px solid ${isSelected ? '#3157D5' : 'rgba(76, 141, 255, 0.1)'}`,
                      color: isSelected ? '#F4F6F8' : '#9AA6B2',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      textAlign: 'left',
                      boxShadow: isSelected ? '0 4px 16px rgba(49, 87, 213, 0.15)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                      <div>
                        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.9375rem', color: isSelected ? '#F4F6F8' : '#9AA6B2' }}>
                          {item.label}
                        </div>
                        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: isSelected ? '#4C8DFF' : '#5E6A78' }}>
                          {item.layer}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: isSelected ? '#3157D5' : 'transparent',
                        border: `1px solid ${isSelected ? '#3157D5' : 'rgba(76, 141, 255, 0.3)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '0.6875rem',
                      }}
                    >
                      {isSelected && '✓'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column — Recommended Architecture Output */}
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
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                color: '#4C8DFF',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Configured Stack Blueprint</span>
              <span style={{ color: '#3AAFA9' }}>{selected.size} Modules Selected</span>
            </div>

            {selectedList.length === 0 ? (
              <div style={{ padding: '3rem 0', textAlign: 'center', color: '#9AA6B2', fontSize: '0.875rem' }}>
                Select at least one module on the left to configure your stack.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {selectedList.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '0.875rem 1rem',
                      borderRadius: 10,
                      background: '#151D27',
                      border: '1px solid rgba(76, 141, 255, 0.1)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
                      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.875rem', color: '#F4F6F8' }}>
                        {item.label}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: '0.15rem 0.45rem',
                            borderRadius: 4,
                            background: 'rgba(76, 141, 255, 0.08)',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '0.625rem',
                            color: '#9AA6B2',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', display: 'block' }}
            >
              Discuss Your Stack with an Architect →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
