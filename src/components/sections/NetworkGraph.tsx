'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NetworkNode {
  id: string;
  label: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  href: string;
  subservices: string[];
}

const nodes: NetworkNode[] = [
  {
    id: 'dialer',
    label: 'Dialer Core',
    category: 'Primary Telephony',
    icon: '📡',
    color: '#0284C7',
    description: 'High-speed predictive, power, progressive, and preview dialing engines with intelligent drop rate and cadence algorithms.',
    href: '/dialer-systems',
    subservices: ['Predictive Pacing Engine', 'Local Presence DID Pools', 'Answering Machine Detection (AMD)', 'TCPA Compliance Guardrails'],
  },
  {
    id: 'callcenter',
    label: 'Call Center Operations',
    category: 'Workforce & Routing',
    icon: '🏢',
    color: '#2563EB',
    description: 'Skill-based automatic call distribution (ACD), omnichannel agent workspaces, supervisor coaching tools, and campaign queues.',
    href: '/call-center',
    subservices: ['Inbound & Outbound Queues', 'Live Supervisor Whisper / Barge', 'Workforce Scheduling', 'Automated QA Scorecards'],
  },
  {
    id: 'ai',
    label: 'Conversational Voice AI',
    category: 'AI & Automation',
    icon: '🤖',
    color: '#6366F1',
    description: 'Ultra-low latency speech-to-speech AI voice agents that handle routine customer inquiries, lead qualification, and calendar bookings.',
    href: '/ai-solutions',
    subservices: ['Sub-600ms Real-Time Voice', 'Autonomous Inbound Resolution', 'Outbound AI Qualifying SDRs', 'Automated Calendar Holds'],
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    category: 'Scalability & DevOps',
    icon: '☁️',
    color: '#0284C7',
    description: 'Multi-region cloud clusters, SIP Session Border Controllers, auto-scaling worker nodes, and 99.999% SLA carrier reliability.',
    href: '/cloud-it',
    subservices: ['Terraform Automated IaC', 'Multi-AZ Kamailio Clusters', 'SRTP Media Stream Encryption', 'Zero-Downtime Migration'],
  },
  {
    id: 'development',
    label: 'Software & Web Dev',
    category: 'Digital Platforms',
    icon: '💻',
    color: '#0D9488',
    description: 'High-performance Next.js corporate websites, custom SaaS platforms, embedded web applications, and tailor-made CRMs.',
    href: '/development',
    subservices: ['Next.js App Router Engineering', 'Custom SaaS Architecture', 'Bespoke CRM Workspaces', 'High-Converting Web Portals'],
  },
  {
    id: 'analytics',
    label: 'Intelligence & APIs',
    category: 'Telemetry & Webhooks',
    icon: '📊',
    color: '#D97706',
    description: 'Real-time telemetry, CDR speech analytics, two-way CRM synchronization webhooks, and custom reporting data pipelines.',
    href: '/call-center/analytics',
    subservices: ['Real-Time MOS Audio Audits', 'Sub-Second Webhook Dispatches', 'Two-Way CRM Connectors', 'Executive BI Dashboards'],
  },
];

export default function NetworkGraph() {
  const [activeNode, setActiveNode] = useState<NetworkNode>(nodes[0]);

  return (
    <section className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container-xl">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Ecosystem Architecture</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            A Fully Integrated<br />
            <span className="gradient-text-blue">Communications Stack</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#475569', maxWidth: 580, margin: '0 auto' }}>
            Every component of your telecommunications, software, and AI infrastructure connects into a unified real-time telemetry mesh.
          </p>
        </div>

        {/* Interactive Node Grid & Inspector */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }} className="flex flex-col lg:grid">
          {/* Node Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {nodes.map(n => {
              const isSelected = activeNode.id === n.id;
              return (
                <div
                  key={n.id}
                  onClick={() => setActiveNode(n)}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 18,
                    background: isSelected ? '#FFFFFF' : '#F8FAFC',
                    border: `1.5px solid ${isSelected ? '#2563EB' : 'rgba(226, 232, 240, 0.9)'}`,
                    boxShadow: isSelected ? '0 12px 30px -5px rgba(37, 99, 235, 0.15)' : 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: `${n.color}12`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                      }}
                    >
                      {n.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                        {n.category}
                      </div>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>
                        {n.label}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: '#64748B', fontSize: '0.8rem', lineHeight: 1.45, margin: 0 }}>
                    {n.description.slice(0, 75)}...
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Inspector Card */}
          <div
            className="node-card"
            style={{
              padding: '2.5rem',
              border: '1.5px solid #2563EB',
              boxShadow: '0 20px 45px -10px rgba(37, 99, 235, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 16,
                  background: `${activeNode.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                }}
              >
                {activeNode.icon}
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: '0.25rem' }}>{activeNode.category}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>
                  {activeNode.label}
                </h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {activeNode.description}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.85rem' }}>
                Key Subsystems & Modules
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {activeNode.subservices.map(sub => (
                  <div key={sub} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F8FAFC', padding: '0.65rem 0.85rem', borderRadius: 10, border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB' }} />
                    <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 500 }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href={activeNode.href} className="btn-magnetic btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                Explore {activeNode.label} →
              </Link>
              <Link href="/contact" className="btn-magnetic btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                Inquire Architecture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
