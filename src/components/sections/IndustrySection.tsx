'use client';

import { useState } from 'react';
import Link from 'next/link';

const industries = [
  { id: 'callcenter', label: 'Call Centers', icon: '🏢', color: '#0284C7', solution: 'Full-stack dialer infrastructure', desc: 'End-to-end call center technology including predictive dialers, agent management, campaign orchestration, CRM integration, and telemetry analytics.' },
  { id: 'bpo', label: 'BPOs & Agencies', icon: '🌐', color: '#2563EB', solution: 'Multi-tenant dialer platform', desc: 'Scalable multi-tenant architecture that lets BPOs manage multiple client campaigns, isolated agent pools, and per-tenant billing independently.' },
  { id: 'sales', label: 'Inside Sales Teams', icon: '💼', color: '#059669', solution: 'Power & Predictive dialer systems', desc: 'Outbound sales dialer platforms built to maximize agent talk time, automate CRM updates, drop voicemails with 1 click, and double pipeline volume.' },
  { id: 'leadgen', label: 'Lead Generation', icon: '🎯', color: '#D97706', solution: 'Speed-to-lead & AI qualification', desc: 'AI-assisted lead qualification, instant webform-to-call triggers in < 3 seconds, and intelligent recycling designed for high-volume lead operations.' },
  { id: 'support', label: 'Customer Support', icon: '💬', color: '#6366F1', solution: 'Inbound & 24/7 AI support', desc: 'Inbound contact center technology, skills-based routing, ticketing integration, and AI support voice agents for round-the-clock resolution.' },
  { id: 'realestate', label: 'Real Estate', icon: '🏠', color: '#DC2626', solution: 'Preview dialer & property CRM', desc: 'Preview dialers with full property and homeowner dossier screen-pops, automated appointment scheduling, and two-way SMS follow-ups.' },
  { id: 'insurance', label: 'Insurance & Brokers', icon: '🛡️', color: '#0284C7', solution: 'Compliant outbound dialer', desc: 'TCPA-compliant outbound calling systems with automated DNC scrubbing, progressive dialing modes, and statutory calling curfews.' },
  { id: 'healthcare', label: 'Healthcare & Clinical', icon: '🏥', color: '#059669', solution: 'HIPAA-ready communication platform', desc: 'Secure communication workflows, automated appointment reminders, and patient outreach tools designed with strict HIPAA compliance.' },
  { id: 'ecommerce', label: 'E-commerce & Retail', icon: '🛒', color: '#6366F1', solution: 'Customer retention & order status', desc: 'Automated order delivery updates, abandoned cart voice notifications, and support escalation systems for fast-growing retailers.' },
  { id: 'financial', label: 'Financial Services', icon: '📈', color: '#2563EB', solution: 'Regulated outbound calling', desc: 'Compliant outbound calling infrastructure with DNC scrubbing, PCI-DSS call recording pause, disposition logging, and banking CRM integration.' },
];

export default function IndustrySection() {
  const [activeId, setActiveId] = useState('callcenter');
  const active = industries.find(i => i.id === activeId)!;

  return (
    <section className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Solutions by Vertical</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            Engineered for Your<br />
            <span className="gradient-text-blue">Industry Requirements</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#475569', maxWidth: 540 }}>
            Voice Era Tech delivers tailored communication technology configured for the exact compliance, volume, and routing needs of your industry.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2.5rem' }} className="flex flex-col lg:grid">
          {/* Industry list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {industries.map(ind => (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  padding: '0.85rem 1.15rem',
                  borderRadius: 14,
                  border: `1.5px solid ${activeId === ind.id ? '#2563EB' : 'rgba(226, 232, 240, 0.8)'}`,
                  background: activeId === ind.id ? '#FFFFFF' : '#F8FAFC',
                  color: activeId === ind.id ? '#2563EB' : '#475569',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: activeId === ind.id ? 700 : 500,
                  fontSize: '0.925rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: activeId === ind.id ? '0 4px 12px rgba(37, 99, 235, 0.12)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{ind.icon}</span>
                {ind.label}
                {activeId === ind.id && (
                  <span style={{ marginLeft: 'auto', color: '#2563EB', fontWeight: 800 }}>→</span>
                )}
              </button>
            ))}
          </div>

          {/* Active detail card */}
          <div
            key={activeId}
            className="node-card"
            style={{
              padding: '3rem',
              border: '1.5px solid #2563EB',
              boxShadow: '0 20px 45px -10px rgba(37, 99, 235, 0.12)',
            }}
          >
            <div style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'rgba(37, 99, 235, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              marginBottom: '1.5rem',
            }}>
              {active.icon}
            </div>

            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              {active.label} Solution
            </div>
            <h3 className="text-display-sm" style={{ color: '#0F172A', marginBottom: '0.75rem' }}>
              {active.solution}
            </h3>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 640 }}>
              {active.desc}
            </p>

            {/* Technology tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {['Dialer Systems', 'CRM Integration', 'Speech Analytics', 'AI Voice Agents', 'Cloud Infrastructure', 'Compliance Shields'].map(tag => (
                <span key={tag} style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '100px',
                  background: '#F8FAFC',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.675rem',
                  letterSpacing: '0.06em',
                  color: '#334155',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                className="btn-magnetic btn-primary"
                style={{ fontSize: '0.9rem' }}
              >
                Discuss Your {active.label} Use Case →
              </Link>
              <Link
                href="/dialer-systems"
                className="btn-magnetic btn-secondary"
                style={{ fontSize: '0.9rem' }}
              >
                View Dialer Architectures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
