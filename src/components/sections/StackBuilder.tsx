'use client';

import { useState } from 'react';
import Link from 'next/link';

const stackItems = [
  { id: 'dialer', label: 'Dialer Core', icon: '📡', technologies: ['Predictive Dialer', 'Power Dialer', 'SIP Trunking', 'DID Pool Management'], color: '#0284C7' },
  { id: 'callcenter', label: 'Call Center Queues', icon: '🏢', technologies: ['Skills Routing', 'Queue Management', 'Campaign Controls', 'Call Recording'], color: '#2563EB' },
  { id: 'ai', label: 'Conversational Voice AI', icon: '🤖', technologies: ['AI Voice Agents', 'Real-Time Transcription', 'Sentiment Analysis', 'Auto-Qualification'], color: '#6366F1' },
  { id: 'crm', label: 'CRM & Integrations', icon: '🗂️', technologies: ['Salesforce/HubSpot Sync', 'Instant Screen Pop', 'Contact History', 'Auto-Disposition'], color: '#059669' },
  { id: 'cloud', label: 'Cloud Infrastructure', icon: '☁️', technologies: ['Multi-Region Setup', 'Auto-Scaling SBCs', 'Real-Time Monitoring', 'DDoS Protection'], color: '#0284C7' },
  { id: 'website', label: 'Digital Web Portal', icon: '🌐', technologies: ['Custom Next.js Web', 'Speed-to-Lead Forms', 'Omnichannel Chat', 'Conversion Tracking'], color: '#0D9488' },
  { id: 'automation', label: 'Workflow Automation', icon: '⚙️', technologies: ['Post-Call Automations', 'API Webhooks', 'Automated SMS/Email', 'BI Reporting'], color: '#D97706' },
];

export default function StackBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['dialer', 'callcenter', 'ai']));

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedItems = stackItems.filter(s => selected.has(s.id));

  return (
    <section className="section-padding" style={{ background: '#F8FAFC', position: 'relative' }}>
      <div className="container-lg">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Interactive Configurator</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            Build Your Custom<br />
            <span className="gradient-text-blue">Technology Stack</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#475569', maxWidth: 520, margin: '0 auto' }}>
            Select the components your team needs and generate your recommended architecture blueprint.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="flex flex-col md:grid">
          {/* Selector */}
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
              1. Choose Required Architecture Layers
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {stackItems.map(item => {
                const isSelected = selected.has(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    className="stack-toggle"
                    style={{
                      background: isSelected ? '#FFFFFF' : '#F1F5F9',
                      borderColor: isSelected ? '#2563EB' : 'rgba(226, 232, 240, 0.9)',
                      color: isSelected ? '#0F172A' : '#64748B',
                      boxShadow: isSelected ? '0 4px 14px rgba(37, 99, 235, 0.12)' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                    <span style={{ fontWeight: 600 }}>{item.label}</span>
                    {isSelected ? (
                      <span style={{
                        marginLeft: 'auto',
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        background: '#2563EB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        color: '#FFFFFF',
                        fontWeight: 800,
                      }}>✓</span>
                    ) : (
                      <span style={{
                        marginLeft: 'auto',
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        border: '1.5px solid #CBD5E1',
                      }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected count bar */}
            <div style={{
              marginTop: '1.5rem',
              padding: '0.85rem 1.25rem',
              borderRadius: 12,
              background: '#FFFFFF',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: '#2563EB', fontWeight: 700 }}>
                {selected.size} MODULES SELECTED
              </span>
              <button
                onClick={() => setSelected(new Set())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Stack output */}
          <div className="node-card" style={{ padding: '2rem' }}>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: '#64748B',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              fontWeight: 700,
            }}>
              2. Recommended Architecture Blueprint
            </div>

            {selectedItems.length === 0 ? (
              <div style={{
                background: '#F8FAFC',
                border: '1px dashed rgba(203, 213, 225, 0.9)',
                borderRadius: 16,
                padding: '3rem 2rem',
                textAlign: 'center',
                color: '#64748B',
                fontSize: '0.95rem',
              }}>
                Select at least one layer to see your customized blueprint
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: 14,
                      background: '#F8FAFC',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.875rem',
                    }}
                  >
                    <div style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: '#FFFFFF',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.15rem',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#0F172A',
                        marginBottom: '0.35rem',
                      }}>
                        {item.label}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {item.technologies.map(tech => (
                          <span key={tech} style={{
                            padding: '0.2rem 0.55rem',
                            borderRadius: '100px',
                            background: '#FFFFFF',
                            border: '1px solid rgba(226, 232, 240, 0.9)',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '0.625rem',
                            color: '#334155',
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedItems.length > 0 && (
              <div style={{ marginTop: '1.75rem' }}>
                <Link
                  href={`/contact?stack=${[...selected].join(',')}`}
                  className="btn-magnetic btn-primary"
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  Configure & Price This Stack →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
