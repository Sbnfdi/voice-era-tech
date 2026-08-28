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
      background: 'var(--c-bg)',
    }}>
      {/* Grid background */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,102,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Corner glows */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,33,232,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1, paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}>
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.375rem 1rem',
              borderRadius: '100px',
              background: 'rgba(0,102,255,0.08)',
              border: '1px solid rgba(0,102,255,0.2)',
              marginBottom: '2rem',
              animation: 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both',
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#00D4FF',
                boxShadow: '0 0 8px #00D4FF',
                animation: 'signal-pulse 2s ease-in-out infinite',
              }} />
              <span className="eyebrow" style={{ color: '#00D4FF' }}>
                Enterprise Dialer Technology
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-display-xl"
              style={{
                color: '#E8EEFF',
                marginBottom: '1.5rem',
                animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both',
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
                color: '#8BA3CC',
                maxWidth: 500,
                marginBottom: '2.5rem',
                lineHeight: 1.7,
                animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both',
              }}
            >
              Enterprise-grade dialer systems, intelligent voice technology, cloud infrastructure and digital solutions built for modern call centers and businesses.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.65s both',
            }}>
              <Link
                href="/dialer-systems"
                className="btn-magnetic btn-primary"
                data-cursor="EXPLORE"
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
                data-cursor="CONNECT"
                style={{ textDecoration: 'none' }}
              >
                Talk to an Expert
              </Link>
            </div>

            {/* Trust indicators */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '3rem',
              animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.8s both',
            }}>
              {[
                { icon: '🔒', label: 'Enterprise Security' },
                { icon: '⚡', label: 'High Availability' },
                { icon: '🌐', label: 'Cloud-Native' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
                  <span style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    color: '#4A6A99',
                    textTransform: 'uppercase',
                  }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D Dialer */}
          <div style={{ animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both' }}>
            <HeroDialer />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'fade-in 1s 1.5s both',
      }}>
        <div className="scroll-indicator" />
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.55rem',
          letterSpacing: '0.18em',
          color: '#4A6A99',
          textTransform: 'uppercase',
        }}>
          Scroll
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
