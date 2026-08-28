'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    category: 'Dialer Technology',
    icon: '📡',
    color: '#0066FF',
    items: ['Predictive Dialer', 'Power Dialer', 'Progressive Dialer', 'Preview Dialer', 'VoIP Infrastructure', 'SIP Trunking', 'Call Routing', 'Campaign Management'],
    href: '/dialer-systems',
  },
  {
    category: 'AI & Intelligence',
    icon: '🤖',
    color: '#8B5CF6',
    items: ['AI Voice Agents', 'Conversational AI', 'AI Lead Qualification', 'Sentiment Analysis', 'Automated Calling', 'AI Appointment Agents', 'Call Transcription', 'Predictive Analytics'],
    href: '/ai-solutions',
  },
  {
    category: 'Cloud Infrastructure',
    icon: '☁️',
    color: '#4A9EFF',
    items: ['Cloud Architecture', 'Server Deployment', 'Cloud Migration', 'Auto-Scaling', 'Multi-Region Setup', 'Disaster Recovery', 'Monitoring', 'DevOps Pipelines'],
    href: '/cloud-it',
  },
  {
    category: 'Software Development',
    icon: '💻',
    color: '#00E5A0',
    items: ['Website Development', 'SaaS Development', 'Custom Software', 'Web Applications', 'CRM Development', 'API Development', 'UI/UX Design', 'Mobile-First Design'],
    href: '/development',
  },
  {
    category: 'Automation',
    icon: '⚙️',
    color: '#FF6B35',
    items: ['Workflow Automation', 'Business Process Automation', 'API Integrations', 'CRM Automation', 'Lead Routing', 'Reporting Automation', 'Alert Systems', 'Data Pipelines'],
    href: '/cloud-it',
  },
  {
    category: 'IT Infrastructure',
    icon: '🖥️',
    color: '#FFB800',
    items: ['Server Management', 'Network Infrastructure', 'Security Architecture', 'VPN Configuration', 'Backup Systems', 'Infrastructure Monitoring', 'Technical Support', 'IT Consulting'],
    href: '/cloud-it',
  },
];

export default function ServicesMatrix() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="section-padding" style={{
      background: 'var(--c-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />

      <div className="container-xl" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Complete Technology Services</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
            Everything Your<br />
            <span className="gradient-text-blue">Business Needs</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 480, margin: '0 auto' }}>
            From dialer infrastructure to custom software, cloud architecture to AI — Voice Era Tech delivers complete technology solutions.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {services.map(svc => {
            const isExpanded = expanded === svc.category;
            return (
              <div
                key={svc.category}
                style={{
                  background: isExpanded ? `${svc.color}0A` : 'rgba(7,13,28,0.8)',
                  border: `1px solid ${isExpanded ? svc.color + '35' : 'rgba(0,102,255,0.1)'}`,
                  borderRadius: 20,
                  padding: '1.75rem',
                  backdropFilter: 'blur(12px)',
                  cursor: 'none',
                  transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: isExpanded ? `0 20px 40px rgba(0,0,0,0.25), 0 0 40px ${svc.color}12` : 'none',
                }}
                onClick={() => setExpanded(isExpanded ? null : svc.category)}
                onMouseEnter={e => {
                  if (!isExpanded) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.2)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isExpanded) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,102,255,0.1)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }
                }}
                data-cursor="EXPLORE"
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 13,
                    background: `${svc.color}15`,
                    border: `1px solid ${svc.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    boxShadow: isExpanded ? `0 0 20px ${svc.color}30` : 'none',
                    transition: 'box-shadow 0.3s',
                    flexShrink: 0,
                  }}>
                    {svc.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#E8EEFF',
                      marginBottom: '2px',
                    }}>
                      {svc.category}
                    </div>
                    <div style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.6rem',
                      letterSpacing: '0.08em',
                      color: '#4A6A99',
                    }}>
                      {svc.items.length} services
                    </div>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', color: svc.color, flexShrink: 0 }}
                  >
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Items */}
                {isExpanded && (
                  <div style={{ animation: 'fade-up 0.3s cubic-bezier(0.16,1,0.3,1)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {svc.items.map((item, i) => (
                        <div key={item} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.625rem',
                          padding: '0.5rem 0.75rem',
                          borderRadius: 9,
                          background: 'rgba(0,102,255,0.04)',
                          animation: `fade-up 0.25s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s both`,
                        }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: svc.color, flexShrink: 0 }} />
                          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem', color: '#8BA3CC' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={svc.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        color: svc.color,
                        textDecoration: 'none',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      View all services →
                    </Link>
                  </div>
                )}

                {!isExpanded && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {svc.items.slice(0, 3).map(item => (
                      <span key={item} style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '100px',
                        background: 'rgba(0,102,255,0.06)',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.6rem',
                        letterSpacing: '0.04em',
                        color: '#4A6A99',
                      }}>
                        {item}
                      </span>
                    ))}
                    <span style={{
                      padding: '0.2rem 0.5rem',
                      borderRadius: '100px',
                      background: 'rgba(0,102,255,0.06)',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.6rem',
                      color: '#4A6A99',
                    }}>
                      +{svc.items.length - 3} more
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
