'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const signalNodes = [
  { id: 'customer', label: 'Customer', icon: '👤', x: 10, y: 50, color: '#4A9EFF' },
  { id: 'dialer', label: 'Dialer', icon: '📡', x: 27, y: 50, color: '#0066FF' },
  { id: 'network', label: 'Network', icon: '🌐', x: 44, y: 50, color: '#00A8CC' },
  { id: 'ai', label: 'AI Engine', icon: '🤖', x: 61, y: 50, color: '#8B5CF6' },
  { id: 'crm', label: 'CRM', icon: '🗂️', x: 78, y: 50, color: '#00E5A0' },
  { id: 'agent', label: 'Agent', icon: '👤', x: 95, y: 50, color: '#00FF88' },
];

export default function TheCallSignature() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const [active, setActive] = useState(false);
  const tickRef = useRef(0);

  const handleActivate = () => setActive(true);

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

    const draw = () => {
      tickRef.current++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      if (!active) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const getPos = (n: typeof signalNodes[0]) => ({
        x: (n.x / 100) * W,
        y: (n.y / 100) * H,
      });

      // Draw connecting lines
      for (let i = 0; i < signalNodes.length - 1; i++) {
        const from = getPos(signalNodes[i]);
        const to = getPos(signalNodes[i + 1]);
        const grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        grad.addColorStop(0, `${signalNodes[i].color}30`);
        grad.addColorStop(1, `${signalNodes[i + 1].color}30`);
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Traveling signal
      const totalNodes = signalNodes.length;
      const cycleDuration = totalNodes * 60;
      const t = (tickRef.current % cycleDuration) / cycleDuration;
      const segmentIndex = Math.floor(t * (totalNodes - 1));
      const segmentT = (t * (totalNodes - 1)) % 1;

      if (segmentIndex < totalNodes - 1) {
        const from = getPos(signalNodes[segmentIndex]);
        const to = getPos(signalNodes[segmentIndex + 1]);
        const sx = from.x + (to.x - from.x) * segmentT;
        const sy = from.y + (to.y - from.y) * segmentT;

        // Glow trail
        const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, 30);
        grd.addColorStop(0, `${signalNodes[segmentIndex].color}80`);
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(sx, sy, 30, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Signal dot
        ctx.beginPath();
        ctx.arc(sx, sy, 7, 0, Math.PI * 2);
        ctx.fillStyle = signalNodes[segmentIndex].color;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  return (
    <section className="section-padding" style={{
      background: '#030710',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top border glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)',
      }} />

      <div className="container-lg" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ color: '#00D4FF', marginBottom: '1rem' }}>The Voice Era Experience</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
            <span className="gradient-text">Every Conversation Connected.</span><br />
            Every System Working Together.
          </h2>
          <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 520, margin: '0 auto 2rem' }}>
            From the moment a customer dials in, to the moment their issue is resolved — every component of your technology stack is orchestrated in real time.
          </p>
          {!active && (
            <button
              onClick={handleActivate}
              className="btn-magnetic btn-primary"
              data-cursor="CONNECT"
              style={{ fontSize: '0.9375rem' }}
            >
              ▶ Watch The Call
            </button>
          )}
        </div>

        {/* Canvas visualization */}
        <div style={{
          position: 'relative',
          height: 200,
          background: 'rgba(0,102,255,0.03)',
          border: '1px solid rgba(0,102,255,0.08)',
          borderRadius: 24,
          overflow: 'hidden',
        }}>
          <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

          {/* Node labels */}
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
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: `${node.color}15`,
                border: `1.5px solid ${node.color}35`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                boxShadow: active ? `0 0 16px ${node.color}30` : 'none',
                transition: 'box-shadow 0.3s',
              }}>
                {node.icon}
              </div>
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.55rem',
                letterSpacing: '0.1em',
                color: active ? node.color : '#4A6A99',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                transition: 'color 0.3s',
              }}>
                {node.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom copy */}
        <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/dialer-systems" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
            <span style={{ position: 'relative', zIndex: 1 }}>Explore Dialer Systems</span>
          </Link>
          <Link href="/contact" className="btn-magnetic btn-secondary" style={{ textDecoration: 'none' }}>
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
