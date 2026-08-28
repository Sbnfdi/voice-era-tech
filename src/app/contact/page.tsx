'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const services = [
  'Predictive Dialer Systems',
  'Power / Progressive Dialers',
  'Inbound / Outbound Call Center',
  'Conversational AI Voice Agents',
  'Autonomous AI Call SDRs',
  'Cloud Telephony & Migration',
  'Website & Web App Development',
  'Custom SaaS & CRM Engineering',
  'SIP Trunking & Carrier Setup',
  'Other Inquiry',
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <div className="container-lg">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Direct Engineering & Sales Access</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              Let&apos;s Build Your Next<br />
              <span className="gradient-text-blue">Communications Breakthrough</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 580, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Connect directly with our senior telecommunications engineers, voice AI architects, and full-stack software teams.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="mailto:info@voiceeratech.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.75rem 1.35rem',
                  borderRadius: '100px',
                  background: '#F8FAFC',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  color: '#0F172A',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span>📧</span> info@voiceeratech.com
              </a>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.75rem 1.35rem',
                  borderRadius: '100px',
                  background: '#F8FAFC',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  color: '#0F172A',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span>⚡</span> Rapid Response within 1 Business Day
              </div>
            </div>
          </div>

          {/* Form + Sidebar Split */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3.5rem', alignItems: 'start' }} className="flex flex-col lg:grid">
            {/* Form */}
            <div className="node-card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                Start a Conversation
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.925rem', marginBottom: '2rem' }}>
                Fill out the project scope below to receive technical specifications, pricing, or a live platform demonstration.
              </p>

              <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="flex flex-col sm:grid">
                  <div>
                    <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.1em', color: '#475569', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 12,
                        background: '#F8FAFC',
                        border: '1px solid rgba(203, 213, 225, 0.9)',
                        color: '#0F172A',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.1em', color: '#475569', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Call Center"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 12,
                        background: '#F8FAFC',
                        border: '1px solid rgba(203, 213, 225, 0.9)',
                        color: '#0F172A',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="flex flex-col sm:grid">
                  <div>
                    <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.1em', color: '#475569', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 12,
                        background: '#F8FAFC',
                        border: '1px solid rgba(203, 213, 225, 0.9)',
                        color: '#0F172A',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.1em', color: '#475569', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 12,
                        background: '#F8FAFC',
                        border: '1px solid rgba(203, 213, 225, 0.9)',
                        color: '#0F172A',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.1em', color: '#475569', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>
                    Primary Technology Area of Interest *
                  </label>
                  <select
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 12,
                      background: '#F8FAFC',
                      border: '1px solid rgba(203, 213, 225, 0.9)',
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  >
                    <option value="">Select a solution category...</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.1em', color: '#475569', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>
                    Project Description & Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your team size, concurrent call volume, current PBX/CRM setup, and timeline..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 12,
                      background: '#F8FAFC',
                      border: '1px solid rgba(203, 213, 225, 0.9)',
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn-magnetic btn-primary" style={{ padding: '0.95rem 2rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                  Submit Inquiry to Engineering Team →
                </button>
              </form>
            </div>

            {/* Right Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="node-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Direct Contact Info
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { icon: '📧', label: 'Inquiries', val: 'info@voiceeratech.com' },
                    { icon: '🌐', label: 'Domain', val: 'voiceeratech.com' },
                    { icon: '🕒', label: 'Hours', val: 'Mon - Fri • 9:00 AM - 6:00 PM EST' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                      <div>
                        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '0.925rem', color: '#0F172A', fontWeight: 600 }}>
                          {item.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: 20, padding: '1.75rem' }}>
                <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>Quick Navigation</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                  <Link href="/dialer-systems" style={{ fontSize: '0.875rem', color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}>
                    • Explore All Dialer Systems →
                  </Link>
                  <Link href="/ai-solutions" style={{ fontSize: '0.875rem', color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}>
                    • Voice AI & Autonomous Agents →
                  </Link>
                  <Link href="/cloud-it" style={{ fontSize: '0.875rem', color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}>
                    • Cloud & Telephony Infrastructure →
                  </Link>
                  <Link href="/development" style={{ fontSize: '0.875rem', color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}>
                    • Custom Software & Web Platforms →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
