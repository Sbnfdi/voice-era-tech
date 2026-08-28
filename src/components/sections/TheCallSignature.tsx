'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const signalNodes = [
  { id: 'customer', label: 'Lead Inbound', icon: '👤', x: 10, y: 50, color: '#0284C7' },
  { id: 'dialer', label: 'Dialer Core', icon: '📡', x: 27, y: 50, color: '#2563EB' },
  { id: 'network', label: 'SIP Carrier', icon: '🌐', x: 44, y: 50, color: '#0284C7' },
  { id: 'ai', label: 'Voice AI Engine', icon: '🤖', x: 61, y: 50, color: '#6366F1' },
  { id: 'crm', label: 'CRM Database', icon: '🗂️', x: 78, y: 50, color: '#059669' },
  { id: 'agent', label: 'Live Specialist', icon: '🎧', x: 95, y: 50, color: '#10B981' },
];

export default function TheCallSignature() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(true);
  const tickRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener('resize', resize);

    let rafId: number;
    const draw = () => {
      tickRef.current++;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const getPos = (n: typeof signalNodes[0]) => ({
        x: (n.x / 100) * W,
        y: (n.y / 100) * H,
      });

      // Connecting line
      for (let i = 0; i < signalNodes.length - 1; i++) {
        const from = getPos(signalNodes[i]);
        const to = getPos(signalNodes[i + 1]);
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = 'rgba(203, 213, 225, 0.8)';
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Traveling signal
      const totalNodes = signalNodes.length;
      const cycleDuration = totalNodes * 50;
      const t = (tickRef.current % cycleDuration) / cycleDuration;
      const segmentIndex = Math.floor(t * (totalNodes - 1));
      const segmentT = (t * (totalNodes - 1)) % 1;

      if (segmentIndex < totalNodes - 1) {
        const from = getPos(signalNodes[segmentIndex]);
        const to = getPos(signalNodes[segmentIndex + 1]);
        const sx = from.x + (to.x - from.x) * segmentT;
        const sy = from.y + (to.y - from.y) * segmentT;

        // Signal glow
        ctx.beginPath();
        ctx.arc(sx, sy, 14, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.2)';
        ctx.fill();

        // Signal dot
        ctx.beginPath();
        ctx.arc(sx, sy, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#2563EB';
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, [active]);

  return (
    <section className="section-padding" style={{
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container-lg">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>The Voice Era Advantage</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            Every Call Connected.<br />
            <span className="gradient-text-blue">Every System Working in Synchrony.</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#475569', maxWidth: 540, margin: '0 auto' }}>
            Watch how Voice Era Tech orchestrates voice packets, AI transcription, and CRM data flow in real time.
          </p>
        </div>

        {/* Canvas visualization */}
        <div style={{
          position: 'relative',
          height: 180,
          background: '#F8FAFC',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          borderRadius: 24,
          overflow: 'hidden',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-card)',
        }}>
          <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

          {/* Node items */}
          {signalNodes.map(node => (
            <div
              key={node.id}
              style={{
                position: 'absolute',
                left: `${node.x}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                zIndex: 1,
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: '#FFFFFF',
                border: '1.5px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                boxShadow: 'var(--shadow-sm)',
              }}>
                {node.icon}
              </div>
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.625rem',
                letterSpacing: '0.08em',
                color: '#0F172A',
                fontWeight: 700,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                {node.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-magnetic btn-primary" style={{ padding: '0.9rem 2rem' }}>
            Deploy Your Enterprise Platform →
          </Link>
          <Link href="/dialer-systems" className="btn-magnetic btn-secondary" style={{ padding: '0.9rem 2rem' }}>
            View Dialer Architectures
          </Link>
        </div>
      </div>
    </section>
  );
}
