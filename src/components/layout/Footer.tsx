'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const footerLinks = {
  Solutions: [
    { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
    { label: 'Power Dialer', href: '/dialer-systems/power' },
    { label: 'Progressive Dialer', href: '/dialer-systems/progressive' },
    { label: 'VoIP Dialer', href: '/dialer-systems/voip' },
    { label: 'Multi-Tenant Dialer', href: '/dialer-systems/multi-tenant' },
    { label: 'Custom Dialer', href: '/dialer-systems/custom' },
  ],
  'Call Center': [
    { label: 'Inbound Call Center', href: '/call-center/inbound' },
    { label: 'Outbound Call Center', href: '/call-center/outbound' },
    { label: 'Blended Operations', href: '/call-center/blended' },
    { label: 'Campaign Management', href: '/call-center/campaigns' },
    { label: 'Agent Management', href: '/call-center/agent-management' },
    { label: 'Call Analytics', href: '/call-center/analytics' },
  ],
  'AI & Automation': [
    { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents' },
    { label: 'AI Call Agents', href: '/ai-solutions/call-agents' },
    { label: 'AI Lead Qualification', href: '/ai-solutions/lead-qualification' },
    { label: 'AI Appointment Agents', href: '/ai-solutions/appointments' },
    { label: 'Conversational AI', href: '/ai-solutions/automation' },
  ],
  Technology: [
    { label: 'Cloud Configuration', href: '/cloud-it/configuration' },
    { label: 'Cloud Migration', href: '/cloud-it/migration' },
    { label: 'Server Deployment', href: '/cloud-it/servers' },
    { label: 'API Infrastructure', href: '/cloud-it/api' },
    { label: 'Website Development', href: '/development/websites' },
    { label: 'SaaS Development', href: '/development/saas' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Our Technology', href: '/technology' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Node { x: number; y: number; vx: number; vy: number; }
    const nodes: Node[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    let rafId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${(1 - dist / 140) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 102, 255, 0.25)';
        ctx.fill();
      });

      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer style={{
      position: 'relative',
      background: '#030710',
      borderTop: '1px solid rgba(0,102,255,0.1)',
      overflow: 'hidden',
    }}>
      {/* Animated network background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '4rem',
          alignItems: 'start',
          padding: '5rem 0 4rem',
          borderBottom: '1px solid rgba(0,102,255,0.08)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 36, height: 36 }}>
                <circle cx="19" cy="19" r="18" stroke="url(#fLogoGrad)" strokeWidth="1.5"/>
                <circle cx="19" cy="19" r="6" fill="url(#fLogoGrad2)" opacity="0.9"/>
                {[0,1,2,3,4,5,6,7,8].map(i => {
                  const row = Math.floor(i / 3);
                  const col = i % 3;
                  return <circle key={i} cx={11 + col * 4} cy={8 + row * 4} r="1.2" fill={`rgba(0,212,255,${0.3 + i * 0.08})`}/>;
                })}
                <defs>
                  <linearGradient id="fLogoGrad" x1="0" y1="0" x2="38" y2="38">
                    <stop stopColor="#0066FF"/><stop offset="1" stopColor="#00D4FF"/>
                  </linearGradient>
                  <radialGradient id="fLogoGrad2" cx="50%" cy="50%" r="50%">
                    <stop stopColor="#00D4FF"/><stop offset="1" stopColor="#0066FF"/>
                  </radialGradient>
                </defs>
              </svg>
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#E8EEFF', letterSpacing: '-0.02em' }}>
                  Voice Era <span style={{ color: '#00D4FF' }}>Tech</span>
                </div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.5rem', letterSpacing: '0.15em', color: '#4A6A99', textTransform: 'uppercase' }}>
                  LLC
                </div>
              </div>
            </div>
            <p style={{ color: '#8BA3CC', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '360px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Enterprise-grade dialer systems, AI voice technology, cloud infrastructure and digital solutions built for modern businesses.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {['Dialer Systems', 'AI Agents', 'Cloud', 'Software'].map(tag => (
                <span key={tag} style={{
                  padding: '0.3125rem 0.875rem',
                  borderRadius: '100px',
                  background: 'rgba(0,102,255,0.08)',
                  border: '1px solid rgba(0,102,255,0.15)',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  color: '#4A6A99',
                  textTransform: 'uppercase',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div style={{
            background: 'rgba(0,102,255,0.06)',
            border: '1px solid rgba(0,102,255,0.15)',
            borderRadius: '20px',
            padding: '2rem',
            minWidth: '280px',
          }}>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Start a Project</div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#E8EEFF', marginBottom: '0.5rem' }}>
              Let&apos;s build something<br />
              <span style={{ color: '#00D4FF' }}>extraordinary.</span>
            </div>
            <p style={{ color: '#8BA3CC', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Connect with a dialer expert and discuss your call center technology needs.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', fontSize: '0.875rem' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Talk to an Expert →</span>
            </Link>
          </div>
        </div>

        {/* Navigation columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '3rem',
          padding: '3.5rem 0',
          borderBottom: '1px solid rgba(0,102,255,0.08)',
        }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: '#4A6A99',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(0,102,255,0.08)',
              }}>
                {category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      color: '#8BA3CC',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#00D4FF'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = '#8BA3CC'; }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.75rem 0',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', color: '#4A6A99', letterSpacing: '0.05em' }}>
            © {year} Voice Era Tech LLC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <Link
                key={item}
                href="#"
                style={{ color: '#4A6A99', fontSize: '0.75rem', textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#8BA3CC'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#4A6A99'; }}
              >
                {item}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="status-active" />
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#4A6A99', letterSpacing: '0.08em' }}>
              SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
