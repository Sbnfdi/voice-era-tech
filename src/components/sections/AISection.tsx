'use client';

import Link from 'next/link';

const aiServices = [
  { icon: '🎙️', label: 'Conversational Voice AI', desc: 'Natural voice synthesis and ultra-low latency conversational pipelines conducting fluid customer interactions.' },
  { icon: '📞', label: 'Autonomous Outbound Calling', desc: 'High-scale outbound agents that qualify leads, handle complex sales objections, and book calendar meetings.' },
  { icon: '💬', label: '24/7 AI Customer Support', desc: 'RAG-driven knowledge ingestion resolving tier-1 support tickets and transactional inquiries instantly.' },
  { icon: '🔍', label: 'Dynamic BANT Lead Scoring', desc: 'Evaluate budget, authority, need, and timeline in natural conversation before warm live-transfers.' },
  { icon: '📅', label: 'Calendar Appointment Booking', desc: 'Real-time calendar availability coordination, confirmation SMS dispatch, and automated reminder calls.' },
  { icon: '⚙️', label: 'Post-Call Workflow Automation', desc: 'Automate speaker-diarized transcription, structured CRM summaries, and after-call work (ACW).' },
];

const flowSteps = [
  { label: 'Caller', icon: '👤' },
  { label: 'Voice Streaming', icon: '📡' },
  { label: 'NLU Reasoning', icon: '🧠' },
  { label: 'Database Action', icon: '⚡' },
  { label: 'CRM Record', icon: '🗂️' },
  { label: 'Resolution', icon: '✅' },
];

export default function AISection() {
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
        <div style={{ maxWidth: 640, marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Conversational Intelligence</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
            Autonomous Voice &amp; <span className="gradient-text-blue">Workflow AI</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#9AA6B2' }}>
            Deploy conversational voice agents and intelligent call center automation that work alongside your human teams — handling repetitive interactions and accelerating revenue pipeline.
          </p>
        </div>

        {/* Conversation Flow Pipeline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3.5rem',
            overflowX: 'auto',
            padding: '1.25rem 0',
            scrollbarWidth: 'none',
          }}
        >
          {flowSteps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              <div
                style={{
                  background: '#202B38',
                  border: '1px solid rgba(76, 141, 255, 0.15)',
                  borderRadius: 12,
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                }}
              >
                <span style={{ fontSize: '1.125rem' }}>{step.icon}</span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.6875rem',
                    color: '#F4F6F8',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.label}
                </span>
              </div>

              {i < flowSteps.length - 1 && (
                <span style={{ color: '#4C8DFF', fontSize: '0.875rem', opacity: 0.5 }}>→</span>
              )}
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {aiServices.map((s) => (
            <div
              key={s.label}
              className="node-card"
              style={{
                padding: '1.75rem',
                background: '#202B38',
                border: '1px solid rgba(76, 141, 255, 0.12)',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: '#151D27',
                  border: '1px solid rgba(49, 87, 213, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '1.0625rem',
                  color: '#F4F6F8',
                  marginBottom: '0.5rem',
                }}
              >
                {s.label}
              </h3>
              <p
                style={{
                  color: '#9AA6B2',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/ai-solutions" className="btn-primary">
            Explore Voice AI Solutions →
          </Link>
          <Link href="/contact" className="btn-secondary">
            Schedule an AI Architecture Call
          </Link>
        </div>
      </div>
    </section>
  );
}
