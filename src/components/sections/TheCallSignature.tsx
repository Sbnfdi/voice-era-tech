'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const signalNodes = [
  { id: 'caller', label: 'Lead Ingestion', icon: '📥', x: 10, y: 50 },
  { id: 'pacing', label: 'Predictive Pacing', icon: '🎯', x: 26, y: 50 },
  { id: 'sbc', label: 'SIP Carrier Edge', icon: '📡', x: 42, y: 50 },
  { id: 'nlu', label: 'Voice AI Intelligence', icon: '🤖', x: 58, y: 50 },
  { id: 'crm', label: 'CRM Sync Pipeline', icon: '🗂️', x: 74, y: 50 },
  { id: 'rep', label: 'Connected Agent', icon: '👤', x: 90, y: 50 },
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
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let rafId: number;

    const draw = () => {
      tickRef.current++;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const getPos = (n: typeof signalNodes[0]) => ({
        x: (n.x / 100) * W,
        y: (n.y / 100) * H,
      });

      // Connecting pipeline path
      for (let i = 0; i < signalNodes.length - 1; i++) {
        const from = getPos(signalNodes[i]);
        const to = getPos(signalNodes[i + 1]);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = 'rgba(76, 141, 255, 0.14)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Traveling signal light (Royal Blue to Muted Teal)
      const totalNodes = signalNodes.length;
      const cycleFrames = 180;
      const t = (tickRef.current % cycleFrames) / cycleFrames;
      const segmentIndex = Math.floor(t * (totalNodes - 1));
      const segmentT = (t * (totalNodes - 1)) % 1;

      if (segmentIndex < totalNodes - 1) {
        const from = getPos(signalNodes[segmentIndex]);
        const to = getPos(signalNodes[segmentIndex + 1]);
        const sx = from.x + (to.x - from.x) * segmentT;
        const sy = from.y + (to.y - from.y) * segmentT;

        ctx.beginPath();
        ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#3AAFA9';
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  return (
    <section
      style={{
        background: '#0B0F14',
        padding: '6.5rem 0 8rem',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(76, 141, 255, 0.08)',
      }}
    >
      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ color: '#C9A96E', marginBottom: '1rem' }}>The Call Lifecycle</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
            Every Interaction Connected. <span className="gradient-text-blue">Every System in Sync.</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540, margin: '0 auto' }}>
            From the millisecond a lead is prioritized to the final call resolution — all telemetry, audio routing, and CRM updates are orchestrated in real time.
          </p>
        </div>

        {/* Interactive Visualization Surface */}
        <div
          style={{
            position: 'relative',
            height: 200,
            background: '#151D27',
            border: '1px solid rgba(76, 141, 255, 0.14)',
            borderRadius: 20,
            overflow: 'hidden',
            marginBottom: '3rem',
          }}
        >
          <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

          {/* Node Icons */}
          {signalNodes.map((node) => (
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
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: '#202B38',
                  border: '1px solid rgba(76, 141, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
              >
                {node.icon}
              </div>
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.625rem',
                  color: '#F4F6F8',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                {node.label}
              </span>
            </div>
          ))}
        </div>

        {/* Conversion Action */}
        <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/dialer-systems" className="btn-primary">
            Explore All Dialer Systems →
          </Link>
          <Link href="/contact" className="btn-secondary">
            Request an Engineering Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
