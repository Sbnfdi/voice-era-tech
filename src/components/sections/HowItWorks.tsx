'use client';

import Link from 'next/link';

const steps = [
  { num: '01', title: 'Lead Enters System', icon: '📥', desc: 'Leads are imported, cleaned, deduplicated, and scored against real-time DNC registries and TCPA curfews before any call is made.', color: '#0284C7' },
  { num: '02', title: 'Campaign Rules Applied', icon: '🎯', desc: 'Campaign logic assigns leads to the optimal dialing queue based on time zones, lead scoring, and agent skill sets.', color: '#2563EB' },
  { num: '03', title: 'Dialer Initiates Outbound Call', icon: '📡', desc: 'The selected dialer mode executes the call via Tier-1 carrier SIP trunks with localized caller ID rotation for maximum pickup rates.', color: '#0284C7' },
  { num: '04', title: 'Instant Live Agent Handoff', icon: '👤', desc: 'Connected human answers are bridged to available agents in milliseconds with instant CRM screen-pop context.', color: '#059669' },
  { num: '05', title: 'AI Transcribes & Analyzes', icon: '🤖', desc: 'Real-time AI speech-to-text, live sentiment scoring, and rebuttal suggestions empower the agent during the conversation.', color: '#6366F1' },
  { num: '06', title: 'Automated Post-Call Logging', icon: '📊', desc: 'Call disposition, full audio recording, AI summary, and follow-up tasks sync automatically to the CRM in sub-seconds.', color: '#D97706' },
  { num: '07', title: 'Continuous Campaign Optimization', icon: '⚡', desc: 'Outcome telemetry feeds back into predictive algorithms to continually improve pacing, connection rates, and team ROI.', color: '#0284C7' },
];

export default function HowItWorks() {
  return (
    <section className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container-lg">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>End-to-End Workflow</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            How the Dialer Platform<br />
            <span className="gradient-text-blue">Executes Every Call</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#475569', maxWidth: 520, margin: '0 auto' }}>
            From the millisecond a lead enters your database to post-call AI dispositioning, every step is automated.
          </p>
        </div>

        {/* Steps Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 840, margin: '0 auto' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                background: '#F8FAFC',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                borderRadius: 20,
                padding: '1.75rem 2rem',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#2563EB';
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: '#FFFFFF',
                  border: '1.5px solid #2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#2563EB',
                  fontFamily: '"JetBrains Mono", monospace',
                  flexShrink: 0,
                  boxShadow: '0 4px 10px rgba(37, 99, 235, 0.1)',
                }}
              >
                {step.num}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{step.icon}</span>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0F172A' }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/contact" className="btn-magnetic btn-primary">
            Build Your Custom Calling Pipeline →
          </Link>
        </div>
      </div>
    </section>
  );
}
