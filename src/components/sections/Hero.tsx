'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import HeroDialer from './HeroDialer';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle floating telemetry nodes
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines between nearby particles
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(76, 141, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76, 141, 255, 0.25)';
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#0B0F14',
      }}
    >
      {/* Dynamic Animated Telemetry Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Subtle Technical Grid Pattern */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />

      {/* Atmospheric Radial Lighting - Deep Royal Blue */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 35%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1, paddingTop: '8.5rem', paddingBottom: '5.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.05fr',
            gap: '4.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column — Editorial & Value Proposition */}
          <div className="animate-fade-up">
            {/* Eyebrow Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.3125rem 0.875rem',
                borderRadius: '100px',
                background: '#151D27',
                border: '1px solid rgba(76, 141, 255, 0.2)',
                marginBottom: '1.75rem',
              }}
            >
              <div className="status-operational" />
              <span className="eyebrow" style={{ color: '#4C8DFF', fontSize: '0.625rem' }}>
                Enterprise Telecommunications Infrastructure
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-display-xl"
              style={{
                color: '#F4F6F8',
                marginBottom: '1.25rem',
              }}
            >
              Powering the Next<br />
              <span className="gradient-text-blue">Generation</span> of<br />
              Call Centers.
            </h1>

            {/* Supporting Copy */}
            <p
              className="text-body-lg"
              style={{
                color: '#9AA6B2',
                maxWidth: 520,
                marginBottom: '2.5rem',
                lineHeight: 1.75,
              }}
            >
              Enterprise-grade predictive dialers, autonomous voice intelligence, carrier-grade SIP trunking, and cloud infrastructure engineered for maximum uptime and regulatory compliance.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '3rem',
              }}
            >
              <Link
                href="/contact"
                className="btn-primary"
                data-cursor="CONNECT"
              >
                Talk to a Dialer Expert →
              </Link>
              <Link
                href="/dialer-systems"
                className="btn-secondary"
              >
                Explore Dialer Systems
              </Link>
            </div>

            {/* Enterprise Trust Indicators */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(76, 141, 255, 0.1)',
              }}
            >
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#F4F6F8' }}>
                  99.999%
                </div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#9AA6B2', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Five-Nines Uptime
                </div>
              </div>
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#3AAFA9' }}>
                  &lt; 35ms
                </div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#9AA6B2', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Tier-1 Audio Latency
                </div>
              </div>
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#C9A96E' }}>
                  TCPA / SOC-2
                </div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#9AA6B2', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Built-In Compliance
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — 3D Physical Dialer Simulator */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="animate-fade-up">
            <HeroDialer />
          </div>
        </div>
      </div>
    </section>
  );
}
