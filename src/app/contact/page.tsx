'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

const services = [
  'Predictive / Power Dialer Systems',
  'VoIP / SIP Trunking Infrastructure',
  'Inbound ACD & Multi-Tier IVR',
  'Conversational Voice AI Agents',
  'Cloud Configuration & Bare-Metal',
  'CRM Development & CTI Integration',
  'Custom Software & Web Engineering',
  'Compliance (TCPA / STIR/SHAKEN)',
  'Other Enterprise Requirement',
];

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            paddingTop: '9.5rem',
            paddingBottom: '5rem',
            overflow: 'hidden',
          }}
        >
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div className="container-lg" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Communications Command Center</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              Connect with Our <span className="gradient-text-blue">Telephony Architects</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Discuss your call center architecture, custom dialer deployment, or voice AI requirements with an enterprise telecommunications engineer.
            </p>

            {/* Quick Contact Badges */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="mailto:info@voiceeratech.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '100px',
                  background: '#151D27',
                  border: '1px solid rgba(76, 141, 255, 0.18)',
                  color: '#F4F6F8',
                  textDecoration: 'none',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.15s ease',
                }}
              >
                <span>📧</span>
                <span>info@voiceeratech.com</span>
              </a>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '100px',
                  background: '#151D27',
                  border: '1px solid rgba(76, 141, 255, 0.18)',
                  color: '#F4F6F8',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                <span>🏢</span>
                <span>Enterprise Telephony Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section style={{ padding: '0 0 7rem' }}>
          <div className="container-lg">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 420px',
                gap: '3.5rem',
                alignItems: 'start',
              }}
            >
              {/* Left Column — Form Container */}
              <div
                style={{
                  background: '#151D27',
                  border: '1px solid rgba(76, 141, 255, 0.16)',
                  borderRadius: 20,
                  padding: '2.75rem',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
                }}
              >
                <h2
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.375rem',
                    color: '#F4F6F8',
                    marginBottom: '0.35rem',
                  }}
                >
                  Request Technical Consultation
                </h2>
                <p style={{ color: '#9AA6B2', fontSize: '0.875rem', marginBottom: '2rem' }}>
                  Complete the technical scope below. Our systems team responds within one business day.
                </p>

                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Name & Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#9AA6B2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 8,
                          background: '#202B38',
                          border: '1px solid rgba(76, 141, 255, 0.14)',
                          color: '#F4F6F8',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#9AA6B2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Telecommunications"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 8,
                          background: '#202B38',
                          border: '1px solid rgba(76, 141, 255, 0.14)',
                          color: '#F4F6F8',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#9AA6B2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 8,
                          background: '#202B38',
                          border: '1px solid rgba(76, 141, 255, 0.14)',
                          color: '#F4F6F8',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#9AA6B2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2831"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 8,
                          background: '#202B38',
                          border: '1px solid rgba(76, 141, 255, 0.14)',
                          color: '#F4F6F8',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Primary Requirement */}
                  <div>
                    <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#9AA6B2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Primary Architecture Area *
                    </label>
                    <select
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 8,
                        background: '#202B38',
                        border: '1px solid rgba(76, 141, 255, 0.14)',
                        color: '#F4F6F8',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '0.875rem',
                        outline: 'none',
                      }}
                    >
                      <option value="">Select an architecture discipline...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#9AA6B2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Operational Scope &amp; Concurrent Seat Projections
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your current telephony setup, concurrent agent seat requirements, and technical timeline..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 8,
                        background: '#202B38',
                        border: '1px solid rgba(76, 141, 255, 0.14)',
                        color: '#F4F6F8',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '0.875rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                    data-cursor="CONNECT"
                  >
                    Submit Technical Scope →
                  </button>
                </form>
              </div>

              {/* Right Column — Contact Details & Guarantee */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Information Card */}
                <div
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.14)',
                    borderRadius: 18,
                    padding: '2rem',
                  }}
                >
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#F4F6F8', marginBottom: '1.25rem' }}>
                    Direct Enterprise Inquiries
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#4C8DFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                        General Inquiries
                      </div>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9375rem', color: '#F4F6F8' }}>
                        info@voiceeratech.com
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#4C8DFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                        Careers &amp; Engineering
                      </div>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9375rem', color: '#F4F6F8' }}>
                        careers@voiceeratech.com
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#4C8DFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                        Operational Headquarters
                      </div>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem', color: '#9AA6B2', lineHeight: 1.5 }}>
                        Voice Era Tech LLC — Cloud Telecommunications &amp; Software
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response SLA Card */}
                <div
                  style={{
                    background: '#202B38',
                    border: '1px solid rgba(76, 141, 255, 0.14)',
                    borderRadius: 18,
                    padding: '1.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div className="status-operational" />
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', color: '#3AAFA9', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      SLA Response Commitment
                    </span>
                  </div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1rem', color: '#F4F6F8', marginBottom: '0.25rem' }}>
                    Within 1 Business Day
                  </div>
                  <p style={{ color: '#9AA6B2', fontSize: '0.8125rem', lineHeight: 1.5, margin: 0 }}>
                    Inquiries are routed directly to practicing solutions engineers for rapid architectural review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
