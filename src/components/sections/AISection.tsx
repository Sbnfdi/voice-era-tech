'use client';

import { useState } from 'react';
import Link from 'next/link';

const aiServices = [
  { icon: '🎙️', label: 'AI Voice Agents', desc: 'Deploy lifelike conversational AI voice agents that handle inbound and outbound calls with sub-600ms latency.' },
  { icon: '📞', label: 'AI Call Agents', desc: 'Automate outbound calling campaigns with intelligent AI SDRs that qualify prospects and schedule sales meetings.' },
  { icon: '💬', label: 'AI Customer Support', desc: 'Deliver 24/7 instant customer support with RAG-powered agents grounded directly in your knowledge base.' },
  { icon: '🔍', label: 'AI Lead Qualification', desc: 'Score and qualify incoming web leads in real time with conversational intelligence and CRM sync.' },
  { icon: '📅', label: 'AI Appointment Agents', desc: 'Let AI agents handle calendar scheduling, confirmations, reminders, and reschedules effortlessly.' },
  { icon: '⚙️', label: 'Post-Call Automation', desc: 'Automate repetitive workflows including audio transcription, disposition logging, and CRM updates.' },
];

const flowSteps = [
  { label: 'Customer Inbound', icon: '👤', color: '#0284C7' },
  { label: 'AI Voice Agent', icon: '🤖', color: '#2563EB' },
  { label: 'Speech-to-Text', icon: '⚡', color: '#0284C7' },
  { label: 'LLM Reasoning', icon: '🧠', color: '#6366F1' },
  { label: 'CRM API Sync', icon: '🗂️', color: '#059669' },
  { label: 'Resolution', icon: '✅', color: '#10B981' },
];

export default function AISection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="section-padding" style={{ background: '#F8FAFC', position: 'relative' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ maxWidth: 680, marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>AI Solutions & Automation</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            Give Every Conversation<br />
            <span className="gradient-text-blue">Real-Time Intelligence.</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#475569', lineHeight: 1.7 }}>
            Deploy conversational AI voice agents, intelligent automation, and real-time speech analytics that amplify human agent productivity and resolve routine calls autonomously.
          </p>
        </div>

        {/* AI flow visualization */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '3.5rem',
          overflowX: 'auto',
          padding: '1.5rem',
          background: '#FFFFFF',
          borderRadius: 20,
          border: '1px solid rgba(226, 232, 240, 0.9)',
          boxShadow: 'var(--shadow-sm)',
        }}>
          {flowSteps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${step.color}10`,
                  border: `1.5px solid ${step.color}35`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.35rem',
                }}>
                  {step.icon}
                </div>
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  color: '#0F172A',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}>
                  {step.label}
                </span>
              </div>

              {i < flowSteps.length - 1 && (
                <div style={{ padding: '0 1rem', color: '#94A3B8', fontSize: '1.1rem', fontWeight: 700 }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {aiServices.map((s, i) => (
            <div
              key={s.label}
              onClick={() => setActiveService(activeService === i ? null : i)}
              className="node-card"
              style={{
                cursor: 'pointer',
                borderColor: activeService === i ? '#2563EB' : undefined,
                boxShadow: activeService === i ? 'var(--shadow-card-hover)' : undefined,
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>{s.icon}</div>
              <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                {s.label}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/ai-solutions" className="btn-magnetic btn-primary">
            Explore All AI Solutions →
          </Link>
          <Link href="/contact" className="btn-magnetic btn-secondary">
            Schedule a Live Voice AI Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
