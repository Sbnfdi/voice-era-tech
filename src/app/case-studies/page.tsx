import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies & Implementation Examples — Voice Era Tech LLC',
  description: 'Explore illustrative deployment case studies across high-volume sales BPOs, healthcare outreach, and financial call centers utilizing Voice Era Tech.',
};

const studies = [
  {
    title: 'High-Volume Outbound Sales Call Center',
    industry: 'BPO / Commercial Sales',
    challenge: 'High idle time between outbound dials and low agent talk-time (averaging only 18 min/hour) reducing team campaign conversion.',
    solution: 'Implemented Voice Era Tech Predictive Dialer with AI pacing, AMD voicemail detection, and real-time CRM screen pop.',
    technology: ['Predictive Dialer Engine', 'AMD Detection', 'Salesforce Two-Way Sync', 'Agent Softphone', 'Call Telemetry Analytics'],
    outcome: 'Increased agent talk time from 18 to 46 minutes per hour, doubling total outbound connections per shift.',
  },
  {
    title: '24/7 AI-Powered Lead Qualification & Booking',
    industry: 'Financial Services & Insurance',
    challenge: 'Inbound web lead inquiries going cold due to delayed human callback response times during peak hours and weekends.',
    solution: 'Deployed Conversational AI Voice Agents to initiate outreach within 15 seconds of lead capture and schedule qualified consultations.',
    technology: ['Autonomous AI Voice Agents', 'Sub-600ms Latency Engine', 'Calendar Holds API', 'Automated SMS Confirmation'],
    outcome: 'Achieved 88% instant contact rate within 60 seconds and boosted qualified booked appointments by 42%.',
  },
  {
    title: 'Multi-Tenant BPO Contact Platform Migration',
    industry: 'Global Contact Center Agency',
    challenge: 'Managing 30+ enterprise client campaigns across fragmented legacy Asterisk PBXs with severe data separation and billing bottlenecks.',
    solution: 'Migrated to Voice Era Tech Multi-Tenant Dialer platform with strict logical tenant data isolation, per-client CDR billing, and custom white-labeling.',
    technology: ['Multi-Tenant Dialer Platform', 'Tenant Data Isolation (RLS)', 'Automated Invoicing Engine', 'Tier-1 SIP Trunking'],
    outcome: 'Consolidated infrastructure costs by 35% and enabled turnkey self-service client onboarding in under 10 minutes.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <div className="container-lg">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Implementation Scenarios</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              Telephony & AI in<br />
              <span className="gradient-text-blue">Real-World Action</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              Illustrative deployment examples demonstrating how Voice Era Tech technology solves high-concurrency telephony, AI automation, and workflow challenges.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.375rem 1rem', borderRadius: '100px',
              background: 'rgba(217, 119, 6, 0.08)', border: '1px solid rgba(217, 119, 6, 0.2)', marginTop: '1.5rem',
            }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.08em', color: '#D97706', fontWeight: 600 }}>
                ILLUSTRATIVE DEPLOYMENT SCENARIOS
              </span>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
            {studies.map((study) => (
              <div key={study.title} className="node-card" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>{study.industry}</div>
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0F172A', marginBottom: '1.75rem' }}>
                    {study.title}
                  </h2>
                  {[
                    { label: 'Operational Challenge', text: study.challenge, color: '#DC2626' },
                    { label: 'Architectural Solution', text: study.solution, color: '#2563EB' },
                    { label: 'Measurable Outcome', text: study.outcome, color: '#059669' },
                  ].map(item => (
                    <div key={item.label} style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.1em', color: item.color, textTransform: 'uppercase', marginBottom: '0.35rem', fontWeight: 700 }}>
                        {item.label}
                      </div>
                      <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.1em', color: '#64748B', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>
                    Technology Modules Deployed
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {study.technology.map(t => (
                      <div key={t} style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        padding: '0.65rem 1rem', borderRadius: 10,
                        background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)',
                      }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', flexShrink: 0 }} />
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9rem', color: '#0F172A', fontWeight: 600 }}>{t}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-magnetic btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    Discuss Similar Deployment →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '3.5rem 2rem', background: '#F8FAFC', borderRadius: 20, border: '1px solid rgba(226, 232, 240, 0.9)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
              Have a specialized call center or AI project?
            </h3>
            <p style={{ color: '#64748B', maxWidth: 520, margin: '0 auto 1.75rem', fontSize: '0.95rem' }}>
              Speak with our solution engineers to formulate an implementation roadmap for your organization.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary">
              Schedule Architecture Consultation →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
