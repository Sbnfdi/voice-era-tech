'use client';

import Link from 'next/link';
import HeroDialer from './HeroDialer';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: '#FFFFFF',
    }}>
      {/* Subtle grid background */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.8 }} />

      {/* Subtle Radial glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1, paddingTop: '8.5rem', paddingBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="flex flex-col lg:grid">
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.375rem 1rem',
              borderRadius: '100px',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              marginBottom: '1.75rem',
              animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both',
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#2563EB',
                boxShadow: '0 0 8px #2563EB',
                animation: 'signal-pulse 2s ease-in-out infinite',
              }} />
              <span className="eyebrow" style={{ background: 'none', border: 'none', padding: 0, color: '#2563EB' }}>
                Enterprise Dialer Technology
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-display-xl"
              style={{
                color: '#0F172A',
                marginBottom: '1.25rem',
                animation: 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both',
              }}
            >
              Powering the Next<br />
              <span className="gradient-text-blue">Generation</span>{' '}
              of<br />Call Centers.
            </h1>

            {/* Subheadline */}
            <p
              className="text-body-lg"
              style={{
                color: '#475569',
                maxWidth: 520,
                marginBottom: '2.5rem',
                lineHeight: 1.7,
                animation: 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s both',
              }}
            >
              Enterprise-grade dialer systems, intelligent voice agents, cloud infrastructure, and digital solutions engineered for modern high-velocity call centers.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              animation: 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.4s both',
            }}>
              <Link
                href="/dialer-systems"
                className="btn-magnetic btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Explore Dialer Systems</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="btn-magnetic btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                Talk to an Expert
              </Link>
            </div>

            {/* Trust indicators */}
            <div style={{
              display: 'flex',
              gap: '1.75rem',
              marginTop: '3rem',
              animation: 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s both',
              flexWrap: 'wrap',
            }}>
              {[
                { icon: '🔒', label: 'Enterprise Security' },
                { icon: '⚡', label: '99.999% SLA Uptime' },
                { icon: '🌐', label: 'Global SIP Trunking' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
                  <span style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.675rem',
                    letterSpacing: '0.08em',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D Dialer */}
          <div style={{ animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>
            <HeroDialer />
          </div>
        </div>
      </div>
    </section>
  );
}
