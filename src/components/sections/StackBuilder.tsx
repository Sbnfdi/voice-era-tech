'use client';

import { useState } from 'react';
import Link from 'next/link';

const stackItems = [
  { id: 'callcenter', label: 'Call Center', icon: '🏢', technologies: ['Inbound/Outbound Setup', 'Agent Management', 'Campaign Control', 'Call Recording'], color: '#0066FF' },
  { id: 'dialer', label: 'Dialer', icon: '📡', technologies: ['Predictive Dialer', 'Power Dialer', 'SIP Trunking', 'DID Management'], color: '#00D4FF' },
  { id: 'crm', label: 'CRM', icon: '🗂️', technologies: ['CRM Integration', 'Lead Management', 'Contact History', 'Disposition Flows'], color: '#8B5CF6' },
  { id: 'ai', label: 'AI Agent', icon: '🤖', technologies: ['AI Voice Agent', 'Transcription', 'Sentiment Analysis', 'Auto-qualification'], color: '#6B21E8' },
  { id: 'cloud', label: 'Cloud', icon: '☁️', technologies: ['Cloud Infrastructure', 'Auto-scaling', 'Monitoring', 'Redundancy'], color: '#4A9EFF' },
  { id: 'website', label: 'Website', icon: '🌐', technologies: ['Custom Web Design', 'Lead Capture Forms', 'CRM Integration', 'Analytics'], color: '#00E5A0' },
  { id: 'automation', label: 'Automation', icon: '⚙️', technologies: ['Workflow Automation', 'API Integrations', 'Task Routing', 'Reporting'], color: '#FF6B35' },
];

export default function StackBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['dialer', 'callcenter']));
  const [submitted, setSubmitted] = useState(false);

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
    <section className="section-padding" style={{
      background: 'rgba(5,10,20,0.98)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-lg" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Technology Configurator</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
            Build Your<br />
            <span className="gradient-text-blue">Technology Stack</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 480, margin: '0 auto' }}>
            Select the components your business needs and see your recommended technology architecture.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Selector */}
          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: '#4A6A99',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Choose Your Business Needs
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {stackItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className="stack-toggle"
                  style={{
                    background: selected.has(item.id) ? `${item.color}15` : 'transparent',
                    borderColor: selected.has(item.id) ? item.color : 'rgba(0,102,255,0.15)',
                    color: selected.has(item.id) ? item.color : '#8BA3CC',
                    boxShadow: selected.has(item.id) ? `0 0 20px ${item.color}20` : 'none',
                  }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                  {selected.has(item.id) && (
                    <span style={{
                      marginLeft: 'auto',
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.625rem',
                      color: '#fff',
                      flexShrink: 0,
                    }}>✓</span>
                  )}
                </button>
              ))}
            </div>

            {/* Selected count */}
            <div style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1rem',
              borderRadius: 10,
              background: 'rgba(0,102,255,0.05)',
              border: '1px solid rgba(0,102,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#4A6A99', letterSpacing: '0.08em' }}>
                {selected.size} COMPONENTS SELECTED
              </span>
              <button
                onClick={() => setSelected(new Set())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#4A6A99',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  cursor: 'none',
                  textTransform: 'uppercase',
                }}
              >
                Clear
              </button>
            </div>
          </div>

          {/* Stack output */}
          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: '#4A6A99',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Recommended Technology Stack
            </div>

            {selectedItems.length === 0 ? (
              <div style={{
                background: 'rgba(0,102,255,0.04)',
                border: '1px dashed rgba(0,102,255,0.15)',
                borderRadius: 16,
                padding: '3rem',
                textAlign: 'center',
                color: '#4A6A99',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '0.9375rem',
              }}>
                Select at least one component to see your recommended stack
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {selectedItems.map((item, i) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: 14,
                      background: `${item.color}08`,
                      border: `1px solid ${item.color}20`,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.875rem',
                      animation: 'fade-up 0.3s cubic-bezier(0.16,1,0.3,1) both',
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: 9,
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}33`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: item.color,
                        marginBottom: '0.375rem',
                      }}>
                        {item.label} Layer
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                        {item.technologies.map(tech => (
                          <span key={tech} style={{
                            padding: '0.2rem 0.5rem',
                            borderRadius: '100px',
                            background: `${item.color}10`,
                            border: `1px solid ${item.color}20`,
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '0.6rem',
                            letterSpacing: '0.05em',
                            color: '#8BA3CC',
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
              <div style={{ marginTop: '1.5rem' }}>
                <Link
                  href={`/contact?stack=${[...selected].join(',')}`}
                  className="btn-magnetic btn-primary"
                  style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}
                  data-cursor="CONNECT"
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>Discuss Your Stack →</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
