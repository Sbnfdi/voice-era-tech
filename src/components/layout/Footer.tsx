'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const footerLinks = {
  'Dialer Solutions': [
    { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
    { label: 'Power Dialer', href: '/dialer-systems/power' },
    { label: 'Progressive Dialer', href: '/dialer-systems/progressive' },
    { label: 'Preview Dialer', href: '/dialer-systems/preview' },
    { label: 'VoIP Infrastructure', href: '/dialer-systems/voip' },
    { label: 'SIP Trunking', href: '/dialer-systems/sip' },
    { label: 'Multi-Tenant Architecture', href: '/dialer-systems/multi-tenant' },
    { label: 'Custom Dialer Engineering', href: '/dialer-systems/custom' },
  ],
  'Call Center': [
    { label: 'Inbound Call Center', href: '/call-center/inbound' },
    { label: 'Outbound Campaigns', href: '/call-center/outbound' },
    { label: 'Blended Operations', href: '/call-center/blended' },
    { label: 'Omnichannel Contact Center', href: '/call-center/contact-center' },
    { label: 'Agent Management & QA', href: '/call-center/agent-management' },
    { label: 'Campaign Control', href: '/call-center/campaigns' },
    { label: 'Real-Time Analytics', href: '/call-center/analytics' },
    { label: 'CRM Synchronization', href: '/call-center/crm' },
  ],
  'AI & Automation': [
    { label: 'Conversational Voice AI', href: '/ai-solutions/voice-agents' },
    { label: 'Autonomous Call Agents', href: '/ai-solutions/call-agents' },
    { label: 'AI Customer Support', href: '/ai-solutions/customer-support' },
    { label: 'Dynamic Lead Scoring', href: '/ai-solutions/lead-qualification' },
    { label: 'Calendar Appointment AI', href: '/ai-solutions/appointments' },
    { label: 'After-Call Automation', href: '/ai-solutions/automation' },
    { label: 'Private Fine-Tuned AI', href: '/ai-solutions/custom' },
  ],
  'Cloud & IT': [
    { label: 'Cloud Configuration', href: '/cloud-it/configuration' },
    { label: 'Zero-Downtime Migration', href: '/cloud-it/migration' },
    { label: 'Bare-Metal Server Fleet', href: '/cloud-it/servers' },
    { label: 'Security & Defense', href: '/cloud-it/security' },
    { label: '24/7 MOS Telemetry NOC', href: '/cloud-it/monitoring' },
    { label: 'DevOps & Kubernetes', href: '/cloud-it/devops' },
    { label: 'API Gateway Architecture', href: '/cloud-it/api' },
  ],
  'Company & Trust': [
    { label: 'About Voice Era Tech', href: '/about' },
    { label: 'Our Technology', href: '/technology' },
    { label: 'Industry Verticals', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Security & Trust Center', href: '/security' },
    { label: 'Regulatory Compliance', href: '/compliance' },
    { label: 'Engineering Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const year = new Date().getFullYear();

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
    const nodes: Node[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
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

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(49, 87, 213, ${(1 - dist / 130) * 0.08})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76, 141, 255, 0.25)';
        ctx.fill();
      });

      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <footer
      style={{
        background: '#080B10',
        borderTop: '1px solid rgba(76, 141, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem' }}>
        
        {/* Top Info Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(76, 141, 255, 0.08)',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: '#151D27',
                  border: '1px solid rgba(49, 87, 213, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3157D5' }} />
              </div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#F4F6F8' }}>
                VOICE ERA TECH LLC
              </span>
            </div>
            <p style={{ color: '#9AA6B2', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: 500 }}>
              Enterprise dialer systems, high-availability call center infrastructure, and autonomous conversational voice technology built for scale, compliance, and reliability.
            </p>
          </div>

          {/* Contact Box */}
          <div
            style={{
              background: '#151D27',
              border: '1px solid rgba(76, 141, 255, 0.12)',
              borderRadius: 16,
              padding: '1.75rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#C9A96E', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Enterprise Solutions
              </div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#F4F6F8' }}>
                Ready to scale your telephony?
              </div>
            </div>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ whiteSpace: 'nowrap', fontSize: '0.875rem' }}
            >
              Talk to an Expert →
            </Link>
          </div>
        </div>

        {/* Link Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '2.5rem',
            padding: '3.5rem 0',
            borderBottom: '1px solid rgba(76, 141, 255, 0.08)',
          }}
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.14em',
                  color: '#4C8DFF',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                {category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      color: '#9AA6B2',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#F4F6F8'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = '#9AA6B2'; }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.75rem 0',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', color: '#5E6A78', letterSpacing: '0.05em' }}>
            © {year} Voice Era Tech LLC. All rights reserved. Precision Telecommunications Infrastructure.
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: '#5E6A78', fontSize: '0.75rem', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: '#5E6A78', fontSize: '0.75rem', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link href="/security" style={{ color: '#5E6A78', fontSize: '0.75rem', textDecoration: 'none' }}>
              Security
            </Link>
            <Link href="/compliance" style={{ color: '#5E6A78', fontSize: '0.75rem', textDecoration: 'none' }}>
              Compliance
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="status-operational" />
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#3AAFA9', letterSpacing: '0.08em' }}>
              SYSTEMS 100% OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
