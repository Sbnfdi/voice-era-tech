'use client';

import { useState } from 'react';
import Link from 'next/link';

const industries = [
  { id: 'callcenter', label: 'Call Centers', icon: '🏢', color: '#0066FF', solution: 'Full-stack dialer infrastructure', desc: 'End-to-end call center technology including predictive dialers, agent management, campaign orchestration, CRM integration and analytics.' },
  { id: 'bpo', label: 'BPOs', icon: '🌐', color: '#00D4FF', solution: 'Multi-tenant dialer platform', desc: 'Scalable multi-tenant architecture that lets BPOs manage multiple client campaigns, agents and reporting environments independently.' },
  { id: 'sales', label: 'Sales Teams', icon: '💼', color: '#00E5A0', solution: 'Power & Predictive dialer systems', desc: 'Outbound sales dialer platforms built to maximize agent talk time, track conversions and integrate with your existing CRM and sales workflow.' },
  { id: 'leadgen', label: 'Lead Generation', icon: '🎯', color: '#FFB800', solution: 'Automated lead qualification', desc: 'AI-assisted lead qualification, intelligent recycling and campaign optimization tools designed for high-volume lead generation operations.' },
  { id: 'support', label: 'Customer Support', icon: '💬', color: '#8B5CF6', solution: 'Inbound & AI support systems', desc: 'Inbound contact center technology, skills-based routing, ticketing integration and AI support agents for 24/7 customer service delivery.' },
  { id: 'realestate', label: 'Real Estate', icon: '🏠', color: '#FF6B35', solution: 'Preview dialer & CRM integration', desc: 'Preview dialers with full property and lead context, automated appointment scheduling and CRM integration for real estate teams.' },
  { id: 'insurance', label: 'Insurance', icon: '🛡️', color: '#4A9EFF', solution: 'Compliant outbound dialer', desc: 'TCPA-compliant outbound calling systems with DNC management, progressive dialing modes and regulatory controls for insurance teams.' },
  { id: 'healthcare', label: 'Healthcare', icon: '🏥', color: '#00E5A0', solution: 'HIPAA-aware communication platform', desc: 'Secure communication workflows, appointment confirmation systems and patient outreach tools designed with healthcare compliance in mind.' },
  { id: 'ecommerce', label: 'E-commerce', icon: '🛒', color: '#6B21E8', solution: 'Customer retention & support', desc: 'Order follow-up automation, customer retention campaigns and support escalation systems for e-commerce businesses.' },
  { id: 'financial', label: 'Financial Services', icon: '📈', color: '#00D4FF', solution: 'Regulated outbound calling', desc: 'Compliant outbound calling infrastructure with DNC scrubbing, call recording, disposition logging and integration with financial CRM systems.' },
];

export default function IndustrySection() {
  const [activeId, setActiveId] = useState('callcenter');
  const active = industries.find(i => i.id === activeId)!;

  return (
    <section className="section-padding" style={{
      background: 'rgba(7,13,28,0.97)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse 50% 60% at 60% 50%, ${active.color}08 0%, transparent 70%)`,
        transition: 'background 0.5s ease',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Solutions by Business Type</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
            Built for Your<br />
            <span className="gradient-text-blue">Industry</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 520 }}>
            Voice Era Tech delivers tailored communication technology across diverse industries and business models.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2.5rem' }}>
          {/* Industry list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            {industries.map(ind => (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  padding: '0.875rem 1rem',
                  borderRadius: 12,
                  border: `1px solid ${activeId === ind.id ? `${ind.color}40` : 'transparent'}`,
                  background: activeId === ind.id ? `${ind.color}10` : 'transparent',
                  color: activeId === ind.id ? ind.color : '#8BA3CC',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: activeId === ind.id ? 600 : 400,
                  fontSize: '0.9375rem',
                  cursor: 'none',
                  textAlign: 'left',
                  transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => {
                  if (activeId !== ind.id) {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,102,255,0.05)';
                    (e.currentTarget as HTMLElement).style.color = '#E8EEFF';
                  }
                }}
                onMouseLeave={e => {
                  if (activeId !== ind.id) {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#8BA3CC';
                  }
                }}
              >
                <span style={{ fontSize: '1.125rem', flexShrink: 0 }}>{ind.icon}</span>
                {ind.label}
                {activeId === ind.id && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 'auto', flexShrink: 0 }}>
                    <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Active detail */}
          <div
            key={activeId}
            style={{
              background: 'rgba(7,13,28,0.8)',
              border: `1px solid ${active.color}25`,
              borderRadius: 24,
              padding: '2.5rem',
              backdropFilter: 'blur(16px)',
              animation: 'fade-up 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Industry icon large */}
            <div style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: `${active.color}15`,
              border: `1px solid ${active.color}30`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              marginBottom: '1.75rem',
              boxShadow: `0 0 30px ${active.color}20`,
            }}>
              {active.icon}
            </div>

            <div className="eyebrow" style={{ color: active.color, marginBottom: '0.75rem' }}>
              {active.label}
            </div>
            <h3 className="text-display-sm" style={{ color: '#E8EEFF', marginBottom: '0.75rem' }}>
              {active.solution}
            </h3>
            <p style={{ color: '#8BA3CC', fontSize: '1rem', lineHeight: 1.75, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '2.5rem', maxWidth: 520 }}>
              {active.desc}
            </p>

            {/* Technology tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {['Dialer Systems', 'CRM Integration', 'Analytics', 'AI Solutions', 'Cloud Infrastructure'].map(tag => (
                <span key={tag} style={{
                  padding: '0.3125rem 0.75rem',
                  borderRadius: '100px',
                  background: `${active.color}10`,
                  border: `1px solid ${active.color}20`,
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.625rem',
                  letterSpacing: '0.06em',
                  color: active.color,
                  textTransform: 'uppercase',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                href="/contact"
                className="btn-magnetic btn-primary"
                style={{ textDecoration: 'none', fontSize: '0.875rem' }}
                data-cursor="CONNECT"
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Discuss Your Use Case</span>
              </Link>
              <Link
                href="/dialer-systems"
                className="btn-magnetic btn-secondary"
                style={{ textDecoration: 'none', fontSize: '0.875rem' }}
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
