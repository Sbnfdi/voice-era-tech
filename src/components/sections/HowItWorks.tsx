'use client';

import Link from 'next/link';

const steps = [
  { num: '01', title: 'Data Ingestion & Scrubbing', icon: '📥', desc: 'Campaign leads are imported, deduplicated, and scrubbed against National DNC registries with time-zone restrictions automatically applied.' },
  { num: '02', title: 'Intelligent Campaign Assignment', desc: 'Leads are routed to optimal campaign queues based on priority scoring, customer territory, and agent skill sets.' },
  { num: '03', title: 'Algorithmic Call Dispatch', desc: 'The dialer engine launches outbound calls via high-throughput SIP trunking using configured predictive or power pacing rules.' },
  { num: '04', title: 'Sub-Second Voice Handoff', desc: 'Connected live calls are instantly bridged to available agents or AI voice agents with zero audio lag and instant CRM screen-pops.' },
  { num: '05', title: 'Conversational Intelligence', desc: 'Real-time dual-channel transcription, AI objection assistance, and sentiment tracking run quietly in the background.' },
  { num: '06', title: 'Automated Post-Call ACW', desc: 'Call recordings, timestamped transcripts, AI summaries, and disposition metrics synchronize directly into your CRM.' },
  { num: '07', title: 'Continuous Campaign Optimization', desc: 'Pacing models continuously adapt to floor performance, auto-recycling unanswered leads and maximizing daily revenue yield.' },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        background: '#0B0F14',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Lifecycle Architecture</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
            How the Platform <span className="gradient-text-blue">Operates</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 520, margin: '0 auto' }}>
            From lead ingestion to carrier bridging and CRM synchronization — every stage is mathematically optimized.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '1.5rem',
                alignItems: 'center',
                background: '#151D27',
                border: '1px solid rgba(76, 141, 255, 0.1)',
                borderRadius: 16,
                padding: '1.5rem 2rem',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: '#202B38',
                  border: '1px solid rgba(49, 87, 213, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#4C8DFF',
                }}
              >
                {step.num}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '1.125rem' }}>{step.icon}</span>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#F4F6F8' }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{ color: '#9AA6B2', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/contact" className="btn-primary">
            Build Your Dialer Workflow →
          </Link>
        </div>
      </div>
    </section>
  );
}
