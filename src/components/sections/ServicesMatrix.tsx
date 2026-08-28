'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    category: 'Dialer Technology',
    icon: '📡',
    color: '#0284C7',
    items: ['Predictive Dialer', 'Power Dialer', 'Progressive Dialer', 'Preview Dialer', 'VoIP Infrastructure', 'SIP Trunking', 'Call Routing', 'Campaign Management'],
    href: '/dialer-systems',
  },
  {
    category: 'AI & Intelligence',
    icon: '🤖',
    color: '#6366F1',
    items: ['AI Voice Agents', 'Conversational AI', 'AI Lead Qualification', 'Sentiment Analysis', 'Automated Calling', 'AI Appointment Agents', 'Call Transcription', 'Predictive Analytics'],
    href: '/ai-solutions',
  },
  {
    category: 'Cloud Infrastructure',
    icon: '☁️',
    color: '#2563EB',
    items: ['Cloud Architecture', 'Server Deployment', 'Cloud Migration', 'Auto-Scaling', 'Multi-Region Setup', 'Disaster Recovery', 'Monitoring', 'DevOps Pipelines'],
    href: '/cloud-it',
  },
  {
    category: 'Software Development',
    icon: '💻',
    color: '#0D9488',
    items: ['Website Development', 'SaaS Development', 'Custom Software', 'Web Applications', 'CRM Development', 'API Development', 'UI/UX Design', 'Mobile-First Design'],
    href: '/development',
  },
  {
    category: 'Workflow Automation',
    icon: '⚙️',
    color: '#D97706',
    items: ['Workflow Automation', 'Business Process Automation', 'API Integrations', 'CRM Automation', 'Lead Routing', 'Reporting Automation', 'Alert Systems', 'Data Pipelines'],
    href: '/cloud-it/devops',
  },
  {
    category: 'IT Security & Support',
    icon: '🔒',
    color: '#DC2626',
    items: ['Server Management', 'Network Infrastructure', 'Security Architecture', 'VPN Configuration', 'Backup Systems', 'Infrastructure Monitoring', 'Technical Support', 'IT Consulting'],
    href: '/cloud-it/security',
  },
];

export default function ServicesMatrix() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Full-Stack Services</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            Comprehensive Technology Services<br />
            <span className="gradient-text-blue">For Modern Enterprise</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#475569', maxWidth: 520, margin: '0 auto' }}>
            From high-concurrency dialer infrastructure to custom software and conversational AI, we deliver end-to-end technology solutions.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map(svc => {
            const isExpanded = expanded === svc.category;
            return (
              <div
                key={svc.category}
                className="node-card"
                style={{
                  cursor: 'pointer',
                  borderColor: isExpanded ? '#2563EB' : undefined,
                  boxShadow: isExpanded ? 'var(--shadow-card-hover)' : undefined,
                }}
                onClick={() => setExpanded(isExpanded ? null : svc.category)}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 13,
                    background: `${svc.color}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    flexShrink: 0,
                  }}>
                    {svc.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#0F172A',
                      marginBottom: '2px',
                    }}>
                      {svc.category}
                    </h3>
                    <div style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      color: '#64748B',
                      fontWeight: 600,
                    }}>
                      {svc.items.length} specialized services
                    </div>
                  </div>
                  <span style={{ fontSize: '1.1rem', color: '#94A3B8', transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                    ▼
                  </span>
                </div>

                {/* Expanded items */}
                {isExpanded ? (
                  <div className="animate-fade-up">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {svc.items.map((item) => (
                        <div key={item} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.625rem',
                          padding: '0.6rem 0.85rem',
                          borderRadius: 10,
                          background: '#F8FAFC',
                          border: '1px solid rgba(226, 232, 240, 0.8)',
                        }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', flexShrink: 0 }} />
                          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9rem', color: '#0F172A', fontWeight: 500 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={svc.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        color: '#2563EB',
                        textDecoration: 'none',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      View all {svc.category} capabilities →
                    </Link>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {svc.items.slice(0, 4).map(item => (
                      <span key={item} style={{
                        padding: '0.3rem 0.65rem',
                        borderRadius: '100px',
                        background: '#F8FAFC',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.65rem',
                        letterSpacing: '0.04em',
                        color: '#475569',
                      }}>
                        {item}
                      </span>
                    ))}
                    <span style={{
                      padding: '0.3rem 0.65rem',
                      borderRadius: '100px',
                      background: '#F1F5F9',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.65rem',
                      color: '#2563EB',
                      fontWeight: 600,
                    }}>
                      +{svc.items.length - 4} more
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
