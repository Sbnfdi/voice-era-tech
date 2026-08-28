import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies — Voice Era Tech Implementation Examples',
  description: 'Explore Voice Era Tech implementation examples across call centers, BPOs and businesses deploying dialer systems, AI agents and cloud infrastructure.',
};

const studies = [
  {
    title: 'Outbound Sales Call Center',
    industry: 'BPO / Sales',
    challenge: 'High idle time between calls and low agent talk-time ratios reducing campaign ROI.',
    solution: 'Implemented a predictive dialer with intelligent pacing and multi-campaign management.',
    technology: ['Predictive Dialer', 'Campaign Management', 'CRM Integration', 'Agent Dashboard', 'Call Analytics'],
    outcome: 'Significantly reduced agent idle time and improved campaign throughput.',
    status: 'placeholder',
  },
  {
    title: 'AI-Powered Lead Qualification',
    industry: 'Financial Services',
    challenge: 'High inbound lead volume with limited agent capacity for initial qualification.',
    solution: 'Deployed AI voice agents to handle first-touch qualification and appointment scheduling.',
    technology: ['AI Voice Agents', 'Lead Scoring', 'CRM Integration', 'AI Appointment Booking', 'Analytics'],
    outcome: 'Automated initial lead qualification, freeing human agents for high-value conversations.',
    status: 'placeholder',
  },
  {
    title: 'Multi-Tenant Dialer Platform',
    industry: 'BPO / Contact Center',
    challenge: 'Managing multiple client campaigns from separate environments with different compliance requirements.',
    solution: 'Built a multi-tenant dialer platform with isolated environments per client.',
    technology: ['Multi-Tenant Dialer', 'Campaign Isolation', 'Per-Tenant Analytics', 'Admin Panel', 'SIP Infrastructure'],
    outcome: 'Centralized platform management with full per-client data isolation.',
    status: 'placeholder',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,102,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Case Studies</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              Technology in<br />
              <span className="gradient-text-blue">Action</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Implementation examples illustrating how Voice Era Tech technology solves real call center and business communication challenges.
            </p>
            {/* Placeholder notice */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.375rem 1rem', borderRadius: '100px',
              background: 'rgba(255,184,0,0.1)', border: '1px solid rgba(255,184,0,0.2)', marginTop: '1.5rem',
            }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#FFB800' }}>
                ILLUSTRATIVE EXAMPLES — CONTACT US FOR ACTUAL CASE STUDIES
              </span>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {studies.map((study, i) => (
                <div key={study.title} style={{
                  background: 'rgba(7,13,28,0.85)', border: '1px solid rgba(0,102,255,0.12)',
                  borderRadius: 24, padding: '2.5rem', backdropFilter: 'blur(12px)',
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem',
                }}>
                  {/* Left */}
                  <div>
                    <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>{study.industry}</div>
                    <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.375rem', color: '#E8EEFF', marginBottom: '2rem' }}>
                      {study.title}
                    </h2>
                    {[
                      { label: 'Challenge', text: study.challenge, color: '#FF6B35' },
                      { label: 'Solution', text: study.solution, color: '#00D4FF' },
                      { label: 'Outcome', text: study.outcome, color: '#00E5A0' },
                    ].map(item => (
                      <div key={item.label} style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: item.color, textTransform: 'uppercase', marginBottom: '0.375rem' }}>
                          {item.label}
                        </div>
                        <p style={{ color: '#8BA3CC', fontSize: '0.9375rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Right */}
                  <div>
                    <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '1rem' }}>
                      Technology Used
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                      {study.technology.map(t => (
                        <div key={t} style={{
                          display: 'flex', alignItems: 'center', gap: '0.75rem',
                          padding: '0.625rem 0.875rem', borderRadius: 10,
                          background: 'rgba(0,102,255,0.05)', border: '1px solid rgba(0,102,255,0.08)',
                        }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0066FF', flexShrink: 0 }} />
                          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem', color: '#E8EEFF' }}>{t}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-magnetic btn-secondary" style={{ textDecoration: 'none', fontSize: '0.875rem' }}>
                      Discuss Similar Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ color: '#8BA3CC', fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                Have a specific use case in mind? Let&apos;s talk about what we can build together.
              </p>
              <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>Start a Conversation →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
