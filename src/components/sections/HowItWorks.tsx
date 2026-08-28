'use client';

import Link from 'next/link';

const steps = [
  { num: '01', title: 'Lead Enters System', icon: '📥', desc: 'Leads are imported, cleaned and scored. The system deduplicates contacts, scrubs against DNC lists and assigns priority rankings before any call is made.', color: '#0066FF' },
  { num: '02', title: 'Campaign Assigns Lead', icon: '🎯', desc: 'Based on campaign rules — industry, geography, lead score, time zone — the system assigns the lead to the optimal campaign and agent queue.', color: '#00A8CC' },
  { num: '03', title: 'Dialer Initiates Call', icon: '📡', desc: 'The selected dialer mode (Predictive, Power, Progressive or Preview) initiates the outbound call through your configured VoIP/SIP infrastructure.', color: '#00D4FF' },
  { num: '04', title: 'Call Routes to Agent', icon: '👤', desc: 'The connected call is routed to the best available agent based on skills, campaign assignment and queue priority. Screen-pop delivers full lead context.', color: '#00E5A0' },
  { num: '05', title: 'AI Processes Interaction', icon: '🤖', desc: 'Real-time transcription, sentiment analysis and AI assistance run during the call. The CRM is updated automatically as the conversation progresses.', color: '#8B5CF6' },
  { num: '06', title: 'Analytics Capture Results', icon: '📊', desc: 'Call outcome, duration, recording, sentiment score and agent disposition are captured and written to the analytics platform and CRM simultaneously.', color: '#FF6B35' },
  { num: '07', title: 'Campaign Optimizes', icon: '⚡', desc: 'The platform uses outcome data to automatically adjust dial pacing, recycle unanswered leads and surface the next-best-action recommendations.', color: '#FFB800' },
];

export default function HowItWorks() {
  return (
    <section className="section-padding" style={{
      background: 'var(--c-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '50%',
        background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-lg" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>System Workflow</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
            How the System<br />
            <span className="gradient-text-blue">Works</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 480, margin: '0 auto' }}>
            From the moment a lead enters the system to final campaign optimization — every step is connected.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Center connecting line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '20px',
            bottom: '20px',
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(0,102,255,0.3) 10%, rgba(0,102,255,0.3) 90%, transparent)',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}>
            {/* Animated packet on line */}
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#00D4FF',
              boxShadow: '0 0 12px #00D4FF',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scroll-down-line 4s ease-in-out infinite',
            }} />
          </div>

          {/* Step items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 80px 1fr',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  {/* Left content */}
                  {isLeft ? (
                    <div style={{
                      background: 'rgba(7,13,28,0.8)',
                      border: `1px solid ${step.color}25`,
                      borderRadius: 20,
                      padding: '1.75rem 2rem',
                      backdropFilter: 'blur(12px)',
                      textAlign: 'right',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    }}
                      onMouseEnter={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${step.color}50`;
                        el.style.transform = 'translateX(-4px)';
                        el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.2), 0 0 30px ${step.color}15`;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${step.color}25`;
                        el.style.transform = 'translateX(0)';
                        el.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem', marginBottom: '0.625rem' }}>
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#E8EEFF' }}>
                          {step.title}
                        </span>
                        <span style={{ fontSize: '1.25rem' }}>{step.icon}</span>
                      </div>
                      <p style={{ color: '#8BA3CC', fontSize: '0.875rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                        {step.desc}
                      </p>
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* Center node */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: `${step.color}20`,
                      border: `2px solid ${step.color}55`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${step.color}30`,
                      flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: step.color,
                        letterSpacing: '0.05em',
                      }}>
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Right content */}
                  {!isLeft ? (
                    <div style={{
                      background: 'rgba(7,13,28,0.8)',
                      border: `1px solid ${step.color}25`,
                      borderRadius: 20,
                      padding: '1.75rem 2rem',
                      backdropFilter: 'blur(12px)',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    }}
                      onMouseEnter={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${step.color}50`;
                        el.style.transform = 'translateX(4px)';
                        el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.2), 0 0 30px ${step.color}15`;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${step.color}25`;
                        el.style.transform = 'translateX(0)';
                        el.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.625rem' }}>
                        <span style={{ fontSize: '1.25rem' }}>{step.icon}</span>
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#E8EEFF' }}>
                          {step.title}
                        </span>
                      </div>
                      <p style={{ color: '#8BA3CC', fontSize: '0.875rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                        {step.desc}
                      </p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
            <span style={{ position: 'relative', zIndex: 1 }}>Build Your Dialer System →</span>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes scroll-down-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
