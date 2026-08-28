import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies — Enterprise Telephony & AI Implementations',
  description: 'Explore illustrative deployment studies of Voice Era Tech LLC predictive dialers, autonomous voice AI, and multi-tenant call center infrastructure.',
};

const studies = [
  {
    title: 'High-Volume Outbound Sales Call Center',
    industry: 'BPO / Sales Operations',
    challenge: 'High idle time between manual dials and low agent talk-time ratios reducing campaign ROI and agent morale.',
    solution: 'Deployed predictive dialer architecture with statistical pacing, sub-450ms AMD detection, and automated CRM screen-pops.',
    technology: ['Predictive Dialer', 'Campaign Engine', 'Salesforce OpenCTI', 'Real-Time Floor HUD', 'ClickHouse Analytics'],
    outcome: 'Elevated agent active talk time from 15 mins/hr to 46 mins/hr while keeping abandonment rates under 1.8%.',
  },
  {
    title: 'Autonomous Inbound Lead Qualification',
    industry: 'Financial Lending',
    challenge: 'High inbound lead volume during peak advertising campaigns causing long queue wait times and lost prospect momentum.',
    solution: 'Implemented sub-600ms AI voice agents to conduct instant BANT qualification and live-transfer high-score leads directly to senior closers.',
    technology: ['Conversational Voice AI', 'Dynamic BANT Scoring', 'Calendar API Sync', 'Warm Live-Transfer', 'Dual-Channel QA'],
    outcome: 'Eliminated inbound queue hold times to 0 seconds and increased qualified sales appointments by 42%.',
  },
  {
    title: 'Multi-Tenant Contact Center Platform',
    industry: 'Enterprise BPO Service Provider',
    challenge: 'Managing dozens of independent client campaigns from fragmented PBX environments with complicated billing reconciliation.',
    solution: 'Built a centralized multi-tenant dialer platform with complete database/media isolation, custom domains, and automated per-minute billing.',
    technology: ['Multi-Tenant Architecture', 'White-Label Portals', 'Automated Stripe Billing', 'SIP SBC Trunking', 'Role-Based Access'],
    outcome: 'Cut client onboarding time from 3 weeks to 15 minutes while providing clients with branded real-time telemetry dashboards.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-lg" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Implementation Studies</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              Telecommunications in <span className="gradient-text-blue">Action.</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540, margin: '0 auto 1.5rem', lineHeight: 1.75 }}>
              Architectural implementation examples illustrating how Voice Era Tech technology solves high-throughput contact center challenges.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.25rem 0.875rem',
                borderRadius: '100px',
                background: 'rgba(201, 169, 110, 0.08)',
                border: '1px solid rgba(201, 169, 110, 0.22)',
              }}
            >
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#C9A96E', letterSpacing: '0.08em' }}>
                ILLUSTRATIVE DEPLOYMENT EXAMPLES — CONTACT US FOR CUSTOM BENCHMARKS
              </span>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section style={{ padding: '0 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {studies.map((study) => (
                <div
                  key={study.title}
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.14)',
                    borderRadius: 20,
                    padding: '2.5rem',
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 1fr',
                    gap: '3rem',
                  }}
                >
                  {/* Left Column */}
                  <div>
                    <div className="eyebrow" style={{ color: '#4C8DFF', marginBottom: '0.5rem' }}>
                      {study.industry}
                    </div>
                    <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.375rem', color: '#F4F6F8', marginBottom: '1.5rem' }}>
                      {study.title}
                    </h2>

                    {[
                      { label: 'Operational Challenge', text: study.challenge, color: '#D99B38' },
                      { label: 'Architectural Solution', text: study.solution, color: '#4C8DFF' },
                      { label: 'Demonstrated Outcome', text: study.outcome, color: '#3AAFA9' },
                    ].map((item) => (
                      <div key={item.label} style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: item.color, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                          {item.label}
                        </div>
                        <p style={{ color: '#9AA6B2', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Right Column — Technology Stack */}
                  <div>
                    <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4C8DFF', textTransform: 'uppercase', marginBottom: '1rem' }}>
                      Deployed Technology Modules
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                      {study.technology.map((t) => (
                        <div
                          key={t}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.625rem 1rem',
                            borderRadius: 8,
                            background: '#202B38',
                            border: '1px solid rgba(76, 141, 255, 0.1)',
                          }}
                        >
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3157D5' }} />
                          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem', color: '#F4F6F8' }}>{t}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
                      Discuss Similar Deployment →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
                Request a Custom Technical Evaluation →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
