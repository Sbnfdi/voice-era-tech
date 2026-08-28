'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';


const services = [
  'Dialer Systems',
  'Call Center Solution',
  'AI Voice Agent',
  'Cloud Infrastructure',
  'Website Development',
  'Custom Software',
  'Business Automation',
  'CRM Integration',
  'IT Consulting',
  'Other',
];

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        {/* Hero */}
        <section style={{
          position: 'relative',
          paddingTop: '10rem',
          paddingBottom: '5rem',
          overflow: 'hidden',
        }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,102,255,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="container-lg" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Communications Command Center</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              Let&apos;s{' '}
              <span className="gradient-text-blue">Connect.</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 500, margin: '0 auto 3rem', lineHeight: 1.7 }}>
              Tell us about your project and a member of our team will get back to you to discuss how we can help.
            </p>

            {/* Contact quick links */}
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { icon: '📧', label: 'info@voiceeratech.com', href: 'mailto:info@voiceeratech.com' },
                { icon: '📞', label: 'Contact by Phone', href: 'tel:+1-000-000-0000' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '100px',
                    background: 'rgba(0,102,255,0.06)',
                    border: '1px solid rgba(0,102,255,0.15)',
                    color: '#E8EEFF',
                    textDecoration: 'none',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(0,212,255,0.35)';
                    el.style.color = '#00D4FF';
                    el.style.background = 'rgba(0,212,255,0.06)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(0,102,255,0.15)';
                    el.style.color = '#E8EEFF';
                    el.style.background = 'rgba(0,102,255,0.06)';
                  }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form section */}
        <section style={{ padding: '0 0 7rem' }}>
          <div className="container-lg">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 480px',
              gap: '4rem',
              alignItems: 'start',
            }}>
              {/* Left — Form */}
              <div>
                <div style={{
                  background: 'rgba(7,13,28,0.9)',
                  border: '1px solid rgba(0,102,255,0.15)',
                  borderRadius: 24,
                  padding: '2.5rem',
                  backdropFilter: 'blur(20px)',
                }}>
                  <h2 style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: '#E8EEFF',
                    marginBottom: '0.5rem',
                  }}>
                    Start a Conversation
                  </h2>
                  <p style={{ color: '#8BA3CC', fontSize: '0.9375rem', marginBottom: '2rem', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    Fill in the details below and we&apos;ll reach out within one business day.
                  </p>

                  <form
                    onSubmit={e => e.preventDefault()}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    {/* Name + Company */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: 10,
                            background: 'rgba(0,102,255,0.05)',
                            border: '1px solid rgba(0,102,255,0.15)',
                            color: '#E8EEFF',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: '0.9375rem',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,255,0.4)'; }}
                          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(0,102,255,0.15)'; }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Acme Corp"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: 10,
                            background: 'rgba(0,102,255,0.05)',
                            border: '1px solid rgba(0,102,255,0.15)',
                            color: '#E8EEFF',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: '0.9375rem',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,255,0.4)'; }}
                          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(0,102,255,0.15)'; }}
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: 10,
                            background: 'rgba(0,102,255,0.05)',
                            border: '1px solid rgba(0,102,255,0.15)',
                            color: '#E8EEFF',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: '0.9375rem',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,255,0.4)'; }}
                          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(0,102,255,0.15)'; }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: 10,
                            background: 'rgba(0,102,255,0.05)',
                            border: '1px solid rgba(0,102,255,0.15)',
                            color: '#E8EEFF',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: '0.9375rem',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,255,0.4)'; }}
                          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(0,102,255,0.15)'; }}
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Service of Interest *
                      </label>
                      <select
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 10,
                          background: 'rgba(0,10,30,0.95)',
                          border: '1px solid rgba(0,102,255,0.15)',
                          color: '#E8EEFF',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '0.9375rem',
                          outline: 'none',
                          cursor: 'auto',
                          transition: 'border-color 0.2s',
                          appearance: 'none',
                        }}
                        onFocus={e => { (e.target as HTMLSelectElement).style.borderColor = 'rgba(0,212,255,0.4)'; }}
                        onBlur={e => { (e.target as HTMLSelectElement).style.borderColor = 'rgba(0,102,255,0.15)'; }}
                      >
                        <option value="" style={{ background: '#050A14' }}>Select a service...</option>
                        {services.map(s => (
                          <option key={s} value={s} style={{ background: '#050A14' }}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Project Details
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Describe your project, current setup, and what you're looking to achieve..."
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 10,
                          background: 'rgba(0,102,255,0.05)',
                          border: '1px solid rgba(0,102,255,0.15)',
                          color: '#E8EEFF',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '0.9375rem',
                          outline: 'none',
                          resize: 'vertical',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(0,212,255,0.4)'; }}
                        onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(0,102,255,0.15)'; }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-magnetic btn-primary"
                      style={{ alignSelf: 'flex-start', fontSize: '1rem' }}
                      data-cursor="CONNECT"
                    >
                      <span style={{ position: 'relative', zIndex: 1 }}>Start a Conversation →</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Right — Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Contact info card */}
                <div style={{
                  background: 'rgba(7,13,28,0.85)',
                  border: '1px solid rgba(0,102,255,0.12)',
                  borderRadius: 20,
                  padding: '2rem',
                  backdropFilter: 'blur(16px)',
                }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#E8EEFF', marginBottom: '1.5rem' }}>
                    Contact Information
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {[
                      { icon: '📧', label: 'Email', value: 'info@voiceeratech.com', href: 'mailto:info@voiceeratech.com' },
                      { icon: '🌐', label: 'Website', value: 'voiceeratech.com', href: 'https://voiceeratech.com' },
                      { icon: '⏰', label: 'Business Hours', value: 'Mon–Fri, 9AM–6PM EST', href: null },
                    ].map(item => (
                      <div key={item.label} style={{ display: 'flex', gap: '0.875rem' }}>
                        <div style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: 'rgba(0,102,255,0.1)',
                          border: '1px solid rgba(0,102,255,0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          flexShrink: 0,
                        }}>
                          {item.icon}
                        </div>
                        <div>
                          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '3px' }}>
                            {item.label}
                          </div>
                          {item.href ? (
                            <a href={item.href} style={{ color: '#E8EEFF', textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9375rem' }}
                              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#00D4FF'; }}
                              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#E8EEFF'; }}>
                              {item.value}
                            </a>
                          ) : (
                            <div style={{ color: '#E8EEFF', fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9375rem' }}>{item.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response time */}
                <div style={{
                  background: 'rgba(0,102,255,0.06)',
                  border: '1px solid rgba(0,102,255,0.15)',
                  borderRadius: 20,
                  padding: '1.75rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00E5A0', animation: 'signal-pulse 2s ease-in-out infinite' }} />
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#00E5A0', textTransform: 'uppercase' }}>
                      Response Time
                    </span>
                  </div>
                  <p style={{ color: '#E8EEFF', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.375rem' }}>
                    Within 1 Business Day
                  </p>
                  <p style={{ color: '#8BA3CC', fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem' }}>
                    We review every inquiry and respond with relevant information and next steps.
                  </p>
                </div>

                {/* Quick links */}
                <div style={{
                  background: 'rgba(7,13,28,0.7)',
                  border: '1px solid rgba(0,102,255,0.1)',
                  borderRadius: 20,
                  padding: '1.75rem',
                }}>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    Explore First
                  </div>
                  {[
                    { label: 'Dialer Systems Overview', href: '/dialer-systems' },
                    { label: 'AI Voice Agent Solutions', href: '/ai-solutions' },
                    { label: 'Cloud & IT Services', href: '/cloud-it' },
                    { label: 'Custom Software Development', href: '/development' },
                  ].map(link => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.625rem 0',
                        borderBottom: '1px solid rgba(0,102,255,0.06)',
                        color: '#8BA3CC',
                        textDecoration: 'none',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00D4FF'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#8BA3CC'; }}
                    >
                      {link.label}
                      <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>→</span>
                    </Link>
                  ))}
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
