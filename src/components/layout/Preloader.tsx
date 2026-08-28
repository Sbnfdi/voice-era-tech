'use client';

import { useEffect, useRef, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'assembling' | 'logo' | 'done'>('assembling');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const totalFrames = 80;

    const render = () => {
      frame++;
      const pct = Math.min(frame / totalFrames, 1);
      setProgress(Math.round(pct * 100));

      const W = (canvas.width = canvas.offsetWidth);
      const H = (canvas.height = canvas.offsetHeight);
      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(W, H) * 0.35;

      ctx.clearRect(0, 0, W, H);

      // Outer ring - Slate Navy
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(76, 141, 255, 0.08)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Active progress arc - Royal Blue to Soft Azure
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle + pct * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(cx, cy, R, startAngle, endAngle);
      ctx.strokeStyle = '#3157D5';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Dialer node pins (12 positions)
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(angle) * (R * 0.72);
        const y = cy + Math.sin(angle) * (R * 0.72);
        const nodeActive = (i / 12) <= pct;

        ctx.beginPath();
        ctx.arc(x, y, nodeActive ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = nodeActive ? '#4C8DFF' : 'rgba(154, 166, 178, 0.2)';
        ctx.fill();
      }

      // Center Core Indicator - Muted Teal when connecting
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = pct > 0.8 ? '#3AAFA9' : '#151D27';
      ctx.strokeStyle = 'rgba(76, 141, 255, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.fill();
      ctx.stroke();

      if (pct < 1) {
        animRef.current = requestAnimationFrame(render);
      } else {
        setPhase('logo');
        setTimeout(() => {
          setPhase('done');
          onComplete();
        }, 350);
      }
    };

    animRef.current = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animRef.current);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      id="preloader"
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0B0F14',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        opacity: 1,
        transition: 'opacity 0.4s ease',
      }}
    >
      <div style={{ position: 'relative', width: 220, height: 220 }}>
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#F4F6F8',
            }}
          >
            {progress}%
          </span>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#F4F6F8',
            letterSpacing: '0.08em',
            marginBottom: '0.25rem',
          }}
        >
          VOICE ERA TECH
        </div>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.625rem',
            color: '#9AA6B2',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Initializing Telephony Core
        </div>
      </div>
    </div>
  );
}
